---
title: "About this and that"
layout: "post"
postdate: 2008-07-21
author: Antranig Basman
---

This posting will be about the different styles of creating "components" or "objects" in Javascript, and which styles Fluid is planning to recommend and in what contexts.

Javascript has inherited an "infusion" of "object-oriented" features grafted at the last moment on its fairly minimal and clear (LISP-inspired) baseline. The resulting language simply has too many ways of doing the same thing, and numerous features that are downright dangerous and obscure.

Continuing our chats on the performance theme, Colin and I set out to try to find a simple set of recommendations that would lead to code that is not only safe, but readable, maintainable and performant. Particularly, the aim is to cater to requirements of more structured programming, by larger, looser teams sharing components over longer timescales, rather than the "one-man", ephemeral programs for which Javascript is more obviously suited.

In this posting I will cover a full range of "componentisation" techniques available in Javascript — from simple namespacing, structural use of closures &mdash; "scope-ism", blending into the new "that-ism" that Fluid will promote, and contrasted against the "traditional" object-oriented language features ("this-ism") based on <code>this</code> and <code>prototype</code> that we will deprecate, as well as more old-fashioned but performant and clear styles ("arg-ism") carried forward from "pre-object-oriented" languages.

<h3>Open and closed</h3>

<!--more-->

Fluid's goal is to build platform of components which are not only flexible, but reliable and easy to extend. An important slogan in this area is "<em><a href="http://en.wikipedia.org/wiki/Open/closed_principle">open for extension, closed for modification</a></em>" which is traditionally seen in the area of object-orientation.

It is arguable whether Javascript supports object-orientation, or whether this is even a good idea, but the open/closed principle is nonetheless a good one, and clearly expresses the kind of tradeoffs we really want in an increasingly large-scale design – it should be easy to decorate the framework and components with new behaviours, but at the same time, it should be impossible to pervert or "unexpectedly change the meaning" of existing code either accidentally or deliberately. It is this latter danger, as we will see later, where Javascript's traditional "OO" features fall down badly.
<h3>OO or not OO</h3>
Talking about "object-orientation" is traditionally dangerous, since each family of languages (C++, Java, Smalltalk, and even Javascript) brings its own particular flavours and assumptions which can make it hard to hold a regular dialogue. When we are talking about strategies for componentisation, we will want to talk more about what goals OO might <em>achieve</em> in an architecture rather than the exact mechanisms it might use. The three corners of OO are traditionally conceived as <em>encapsulation</em>, <em>polymorphism</em>, and <em>inheritance</em> – in a personal view, these have been listed in order of decreasing importance.
<h2><code>this</code>-ism</h2>
Firstly we will look at the features built into the Javascript language traditionally intended to support "object orientation" and see what is wrong with them. Syntactically, these look very similar to Java's features, but very misleadingly work nothing like them.

Here is a basic Cat:
<pre>function Cat(name) {
  this.name = name;
  }

Cat.prototype.meow = function () {
  alert(this.name + " says Meow!");
  };

var myCat = new Cat("Richard");

myCat.meow();</pre>
This is clearly "inspired" by the ability in Java to declare <code>class Cat</code>, but the more one looks into it, the more kinds of slippage one sees. This isn't because the Javascript designers didn't "understand" OO, but because they had initially set out to design a completely different language. In much the same way that Java is completely Object-focused, to the exclusion of functions as first-class citizens, Javascript takes exactly the opposite route, and is completely function-focused, barely recognising Objects at all (except as aggregates).

<code>function Cat</code> is called a "constructor", or sometimes, a "constructor function", but for a start it can be seen that very little other than convention distinguishes it from a standalone function. The use of the keyword <code>this</code> is mysterious – what does it refer to? This is actually a piece of magic performed by the <code>new</code> keyword at the time it operates the constructor function call – a new Object is created and bound to the this pointer. "new" actually does many other magic things at the same time – it also assigns to a hidden field called the "prototype" of the Object under construction, the value of another magic object called "Cat.prototype" – every Javascript function comes into existence with a <code>prototype</code> field, "just on the off chance" it ends up being used as a constructor (this is a little similar to the way every Java Object comes into existence with a monitor, just in case it is used as a lock :P).

This appears all well and dandy, but "this-ism" actually has so much looseness built into it as to be fatally flawed. The central problem is that <em>every</em> function in Javascript is "<a href="http://www.ddj.com/cpp/184401197">free</a>"and hence there is no place to store the context of which object it is being invoked on. Therefore the <code>this</code> entry is "faked up" every time a function call is invoked, and there are no bounds that could be placed on what kind of object could be a <code>this</code>, or even whether it is supplied at all!

What happens if we forget to call <code>new Cat()</code> but simply say <code>var MyCat = Cat()</code>? Something terrible. For a free function not invoked through a holding Object, Javascript drops <code>this</code> back to hold the "global object", which in a browser is typically the <code>window</code> Object – therefore this function call silently corrupts a piece of global state – there will be no compile-time or run-time warnings.
<h3><code>this</code> hijacking</h3>
Similarly, nothing prevents "this hijacking" – for example it is the tiniest effort in the world to follow the code above with this perversion:

<code>
var myDog = new Dog();
myDog.meow = myCat.meow;
myDog.meow();
</code>

The assumptions, whatever they were, in the "meow" function above have probably been violated – since Javascript is a "typeless" language it would be hard to write down what these assumptions might be in order to enforce them – and if myDog happened to have a field called "name" the meow would probably succeed. However, the inability to ever know, when writing (or even reading) a piece of code, which value one can expect to be bound to the "this" pointer makes it impossible to write reliable and predictable code with this idiom. A flavour of the kinds of contortions "this-ism" forces on coders can be seen when dealing with (browser) event handlers – since these always *are* pure functions, the "this" context of any previously bound "object methods" which are assigned as handlers becomes lost, and the better Javascript frameworks pride themselves on doing automatic "this adjustment" before dispatching to a handler. This sort of thing is fine for frameworks, but is the sort of thing that can easily be "accidentally" foisted onto a user as soon as they come to write new components for a framework.
<h4>Note on function naming - capitalisation for constructors</h4>
Note that a useful convention in naming Javascript functions is to reserve those beginning with capital letters only for old-fashioned "this-ist" constructors - this can help to head off this-ist disasters caused by forgetting to invoke those functions which require it with <code>new</code>. So we write <code>Cat</code> for the constructor we expect to be used with <code>new Cat()</code>, but later on we will write <code>cat</code> or <code>make_cat</code> for functions with a "constructive effect" that don't require <code>new</code>.
<h3>Prototype hijacking</h3>
A final "perversion" following from this-ism is of "prototype hijacking". Many of the effects (and many unrelated effects) of OO "inheritance" can be emulated in Javascript "this-ism" by means of assembling a chain of prototype instances.
<pre>SuperCat.prototype = new Cat();

function SuperCat(name) {
  Cat.call(name);
  this.superpower = "fly";
  }

var mySuperCat = new SuperCat("Edward");

mySuperCat.meow();</pre>
This is powerful, just as inheritance is in classically OO languages. However, it is "too powerful" – since we have violated the Open/Closed principle. Having happily written our own inheritance hierarchy of Cats, perfectly legal Javascript may subsequently come along and write <code>SuperCat.prototype = new Dog()</code>.

This not only has the devastating effect of causing future SuperCats to in fact become Dogs, it futhermore causes <em>all SuperCats ever created to also retrospectively become Dogs</em>. Thus this changes the meaning not only of the code within SuperCat methods, but the meaning of all client code that has ever used a SuperCat.

This is "cool" – in the sense that it is a really cool capability to impress your friends who use other languages – and a cool capability to use in code which just one person is working on (you), when that person has a really good memory and a clear head. It is far from cool when working on a large team, perhaps not all of whom one knows very well, and whose code one has to read and maintain over a long period.

Code that is easy to follow and understand is just another side of the same coin which Fluid calls "portal-friendliness" – code is "portal safe" if it does not have "unexpected" collateral effects on other code, for example by assigning to core language primitives, or similarly in this case changing the meaning of 3rd-party code by dicking around with its inheritance structure.
<h4>Security</h4>
If you believe that a Javascript program can in any way be "secure" (which I don't, given current environments and practices) the above "hijacks" and "perversions" can also be seen to be dangerous from a security perspective, in that they allow unintended changes in meaning to 3rd-party code. In upcoming environments such as Google's <a href="http://code.google.com/p/google-caja/">Caja</a>, actually secure coding will start to be possible – and it is no coincidence that the first language features to meet the axe will be <code>this</code> and <code>prototype</code>. In
the meantime, you can get a start at <code>this</code>-less coding before the revolution comes, and enjoy at least what security and reliability today's Javascript has to offer.
<!--more-->
<h2>Arg-ism</h2>
Having considered that Javascript's OO features are unusable in the large, we banish this whole infrastructure from our minds (including this, new, prototype and constructor) and begin to look for other ways of coding that will let us achieve some of the same goals.

The first question to ask is, "do we really need Object Orientation?", or more accurately, how could we achieve some of its goals without any particular real assistance from the language?
<h4>The object-oriented features that C has to offer</h4>
My friend Bob and I were once C++ programmers, in the era when C++ held the role as the "acceptable public face of OO" – worthy, slightly stodgy, and with possibly worrying performance characteristics. A favorite joke we would share was a phrase once dropped by a particularly capable "old salt" programmer who once said that given the choice between C and C++, that he "preferred the object oriented features that C had to offer".

Was this a joke? Is that a question? What *are* the object oriented features that C has to offer? Luckily, whatever they are, they are available in most languages ever written, and many people are indeed happy with them.

A dirty secret is that the "this" pointer we are familiar with from C++ and Java is really just a "hidden function call argument". And indeed, the OO calls we started to see in 80's C++ evolved directly from their equivalent 70's C calls that looked like this:
<pre>typedef struct Cat {
  char* name;
  } Cat;

void meow(Cat* this) {
  printf("%s says Meow!", this-&gt;name);
  }

Cat myCat = {"Richard"};

meow(myCat);</pre>
Oh the good old days. What have we lost here from "OO"? Well, we have lost some encapsulation – we cannot hide the details of the struct members from the public, but we could never do that with "this-ism" either. So that is no loss. What we have lost is polymorphism – the <code>meow</code> function is statically dispatched, and could not be "overridden" to behave differently based on the contents of the <code>this</code> pointer it was handed. In the C days this sort of thing was done with type fields and switch statements, and generally fell down in the "Open-ness" stakes – these designs are not sufficiently in some cases "open for extension" but at least they don't fail to be "closed for modification". Noone could send a non-Cat to our meow function.

However in many cases polymorphism is simply not appropriate in a design – so why should we have to always pay for it? This was one of the early criticisms levelled against C++, which was reponsible for its rather "neither fish nor fowl" OO system that didn't actually give you polymorphic dispatch unless you asked for it. But what this demonstrates is that this is a perfectly valid compositional technique for many situations – and it has the advantages that it is extremely performant, and easy to follow:
<pre>function makeCat(name) {
  var togo = {name: name};
  }

function cat_meow(cat) {
  alert(cat.name + " says Meow!");
  };

var myCat = makeCat("Richard");

cat_meow(myCat);</pre>
In this little example we see no suffering imposed through "arg-ism" and the code is much clearer and will run faster. In a, perhaps strongly "data-driven", design where you are sure no polymorphism or extension through inheritance will be required, C-style componentisation is an approach strongly to be considered. For example, the <a href="http://www2.caret.cam.ac.uk/rsfwiki/Wiki.jsp?page=PrimitiveComponents">RSF component tree</a> idiom is "closed" by design – despite forming a hierarchy, it is a hierarchy which is designed purely to classify data, and is "closed" in intent, since user code is not intended to be able to create new "component types". Arg-ism would be appropriate for representing and constructing components of this type.
<h2>Scope-ism</h2>
None of our design options so far have actually succeeded on delivering on arguably the most important of the 3 cornerstones of OO, encapsulation. Protecting data from unexpected and asynchronous modification is one of the most important things we can do to make a design more reliable and easier to maintain, through making it easier to reason about the kinds of effects a piece of code might have, and what it could influence.

As most famously proposed by <a href="http://javascript.crockford.com/private.html">Douglas Crockford</a>, the only means of achieving properly private data in Javascript is to go back to its functional roots, and hide these within function closures. If you are not familiar with Javascript's closure support, now would be a good time to browse around several of the excellent articles on Crockford's site to familiarise yourself.
<h3>Scope-ism for modules</h3>
This is a structuring device which can be used at all levels within a Javascript program. Sometimes the depth of nesting can become somewhat dizzying, but adopting a consistent indentation and coding style can help a lot with this. At the outermost level, we can gain encapsulation for an entire "module" by enclosing wide swaths of Javascript code in a closure:
<pre>var Fluid = Fluid || {};

(function () {
  function myPrivateFunction (arg) {
    alert("Your arg was " + arg);
    }

Fluid.myPublicFunction = function() {
    return myPrivateFunction("thing");
    }

  }) ();</pre>
[Note that this, superior, style of module declaration has come to be called "Colinism" – it is a slight variation on the pattern seen in Crockford and other places in that the public namespace object can be "accreted" – it is "guarded" in the first line to ensure that it exists and is at global scope, and then in the anonymous function block it has public members assigned to it one by one]

The definition <code>myPrivateFunction</code> is <em>completely</em> inaccessible to code outside this block, as would any data or other material which was declared in this area. Finally we can achieve "encapsulation", here at the level of an entire "module". Only values which "escape" by being assigned to globally visible variables as a result of the block execution can be seen by other code. The global <code>Fluid</code> object can itself be corrupted by having its members modified, but at least the code we write inside <code>myPublicFunction</code> now has the guarantees of a stable environment. If the code executes at all, it will generally do so in a tamper-proof box that makes it much easier to debug and maintain.
<h3>Scope-ism in the smaller</h3>
This concept of a "module" is really one again established by convention – Javascript is a "do it yourself" language and all these structuring devices are just patterns we agree amongst ourselves. The same kind of encapsulation is also invaluable on smaller scales, creating a kind of structure which doesn't really have a name, but is quite typical, for example, in "<a href="http://www2.caret.cam.ac.uk/rsfwiki/Wiki.jsp?page=InitBlock">init blocks</a>" which fire on page loads and traverse the DOM to contextualise and attach event handlers to what they find – for example here is the skeleton of an init block I recently wrote:
<pre>  AddParticipants.initChooseRoles = function (baseID, selfTemplate) {
    var base = $jit(baseID);
    var IDtoIndex = {};
    var indexToRow = [];
    indexTable("user-key", base, "tr.role-row", IDtoIndex, indexToRow);
    var checks = base.find(".role-row input");

    var lastChecked; // The "true ID" for the DOM element  

    checks.click(function(event) {
      var checked = $(event.target).attr("checked");
      if (checked) {
        if (lastChecked &amp;&amp; event.shiftKey) {
          var index1 = IDtoIndex[lastChecked];
          var index2 = IDtoIndex[getIDFromDerived(event.target, keyField)];
           ....

}</pre>
We can see the outer level of this function as following the overall module pattern from the last section – the function "initChooseRoles" is attached to the global namespace object AddParticipants which is similarly guarded to "Fluid" from before. This function now begins by setting up some shared definitions, having found its targets within the DOM – then these definitions, like base, IDtoIndex, indexToRow and lastChecked become "closed over" by numerous inner function definitions (typically handlers). We can see this inner function block as a kind of "Object" of its own, with private definitions and public effects separated out.
<!--more-->
<h2>Scope-ism in the smallest – that-ism</h2>
Our final destination in this journey through Javascript structuring devices is also due to Crockford, is the smallest-scale use of function scopes, that for direct replacement of the faulty "this-ism" where we came in. That-ism is alluded to by Crockford on the <a href="http://javascript.crockford.com/private.html">private members</a> page linked above, but is more fully developed in his recent book <a href="http://www.amazon.com/exec/obidos/ASIN/0596517742/wrrrldwideweb">Javascript: The Good Parts</a> in Chapter 5 (all of this book is thoroughly recommended reading).

The answer to a fragile "identity" (<code>this</code>) for object methods is to replace them with a function-scoped alternative, which for want of a better non-reserved alternative, Crockford calls "that". "That-ism" looks extremely similar to the function scoped examples we have seen before – with only a difference of emphasis. The difference is that we not only close over essentially *one* piece of state, holding the role formerly occupied by a <code>this</code>, but that we also return it from the function itself. So our "that-ified" cat example looks as follows:

<pre>function cat(name) {
  var that = {};
  that.name = name;
  that.meow = function () {
    alert(that.name + " says Meow!");

    };

  return that;
  }
var myCat = cat("Richard");

myCat.meow();</pre>

Compare the differences between "that cat" and "this cat". The usage is very similar, only we no longer use the pernicious keyword "this". However the definition style is quite different – not being able to leverage prototypalism, we need to physically bind all the CAT methods we require onto each cat instance as we dispense it. In many ways this is "more" "object-oriented" than what Javascript supplies out of the box, since we have regained the 3rd leg of encapsulation – we could write any number of "private variables" and definitions inside the <code>cat()</code> body which would be firmly hidden.

On the face of it this looks like we have had to sacrifice inheritence – but to a large extent we can get this back too. Here is our happy SuperCat:
<pre>function superCat(name) {
  var that = cat(name);
  that.superpower = "fly";
  return that;
  }

var mySuperCat = superCat("Edward");

mySuperCat.meow();</pre>
Simply by "instance chaining" we can cascade that-ism from "constructor" to "superconstructor" and obtain most of the (useful) effects of inheritance. Our design is "open for extension" again.
<h3>Drawbacks of that-ism</h3>
The only really significant drawback of that-ism is efficiency. We are literally fabricating new function handles for each of its methods every time we manufacture an object, and this has to be contrasted with the efficiency of this-ism and prototypalism whereby the selfsame function handles are shared amongst all instance of a "type". In theory this overhead could be quite small – the "closed-over" data in each method is just the <code>that</code> reference, and with the space for the function handle itself, say in a Java-type VM this would amount to 8n or 16n bytes for an object with n methods. Whether we consider this significant or not would tend to depend on the context – where a "component" refers to a user-visible widget that is rendered in a DOM, this expense would be dwarfed by any browser-side or OS-side resources required to represent it. In a more resource-intensive role (perhaps for rendering or data processing) it would probably be unacceptable, and  one would be more prone to fall back upon the most efficient scheme of all, the glorious arg-ism of the 70s.
<h2>Conclusion</h2>
<h4>What to use and when?</h4>
The general recommendation of this article is "use that, not this". This-ism has been argued to be almost universally destructive and not even deliver on the full goals that were staked out for "object oriented" designs. For some applications, expecially high-performance and/or data-driven applications, users have been recommended to fall back on "the object-oriented features which C has to offer", being fully argument-driven binding (arg-ism), and where any polymorphism is required to achieve this through duck typing or other data-driven idioms. And overall, to play to Javascript's (original) strengths – use function block scopes for storing data and creating "units with identity" (objects) rather than Javascript Objects themselves – which last was also the final advice from my performance-oriented posting.

As I speak, Fluid is fully invested in a wholesale conversion from this-ism to that-ism, for which there have been presentation materials at the latest "Fearless Javascript" workshops, and also a growing body of <a href="http://wiki.fluidproject.org/display/fluid/How+to+Define+a+Unit">that-ism documentation</a> on the Fluid wiki. Take that!