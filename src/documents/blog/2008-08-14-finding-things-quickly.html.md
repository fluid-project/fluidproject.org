---
title: "Finding things quickly"
layout: "post"
postdate: 2008-08-14
author: Antranig Basman
---

There are many ways of finding things in the DOM - sometimes, many ways of evaluating apparently the same expression. For example, CSS and JQuery allow you to find elements by id, using an expression of the form
<pre>  var myElement=$("#my-element-id");</pre>
as well as the apparently equivalent expression
<pre>  var myElement=$("[id=my-element-id]");</pre>
However, these expressions are different in many ways. One advantage of the latter is that it is more resistant to escaping issues - for example, the colon character <code>:</code> is actually a valid part of an XML id, but is not correctly handled in many escaping situations. JQuery will not accept it as part of a <code>#</code> expression, but is fine in an <code>id</code> specification. This was the basis of our adoption of the latter for the <code>fluid.jById</code> utility.

However, these types of selectors are treated very differently within the nuts-and-bolds of the jQuery selector engine. <code>#</code> selectors have a very special status, which enables numerous shortcuts including the judicious use of <code>document.getElementById</code> where possible. <code>id</code> selectors are just standard attribute value filters, and will perform a full scan of the DOM.

<!--
.my-header * {
font-size: 1em;
font-family: courier;
}
-->
<table border="0">
<tbody>
<tr>
<td><code>document.getElementById("my-id")</code></td>
<td>8.5µs</td>
</tr>
<tr>
<td><code>$(document.getElementById("my-id"))</code></td>
<td>24µs</td>
</tr>
<tr>
<td><code>$("[id=my-id]") </code></td>
<td>12<strong>ms</strong></td>
</tr>
</tbody></table>
These tests were done on Firefox 2 in a rather busy document of about 40K of HTML.

Note that the cost of simply wrapping a DOM element in a jQuery object is small, but still noticeable.
<h4>Cost of guarding</h4>
This immediately suggests a policy of falling back on <code>document.getElementById</code> for quick lookups - however, jQuery, being a mature framework, is doing some work for us here in insulating us from an awkward IE bug where <code>document.getElementById</code> is sometimes returning an element which has a match on *name* rather than a match on *id*. This is a rather awkward tradeoff - putting in a "guard branch" to check that the required id is actually present as an attribute slows down access for everyone to 22µs, with the option to default back to the jQuery scan. However, do we really want a library with the contract "give me the element with this id, unless there is something screwy about your document, in which case give me the element 1000 times slower". Probably the user will not thank you in this case, and would prefer to be given the chance to fix their markup.
<h4>Quick access to DOM nodes</h4>
This brings us back to why any of these issues are particularly interesting in the first place. I am currently working on reforming the Fluid Reorderer component, not only from a structural but also a performance point of view. The behaviour of the jQuery droppable library is not quite what we would want, both from a performance as well as a behavioural point of view (might be the subject of a separate blog posting), but in fixing it we are faced with some crucial design decisions about how to arrange data structures such that they can be used for very quick access - ordinarily this is not so important, but a DnD library is going to be queried on every mouse move event, and so even timings in microseconds can begin to mount up.

There are two main options -

i) store a "reverse lookup" cache of jQuery.data id numbers onto DOM nodes, and work with data structures storing jQuery.data ids, or
ii) synthesise short unique ids onto DOM nodes that do not have them, and work with data structures storing DOM ids.

Route i) runs the risk of keeping these caches up to date, and in particular avoiding leaks due to "expired" DOM nodes continuing to hang around in the cache - but it would probably be faster at runtime. Route ii) will be a little slower (incurs the costs we have been talking about so far, in invoking a document.getElementById equivalent on going to the DOM) but is definitely leak-safe, and might also help others navigate around the DOM.

<h4>What to do</h4>

These are hard kinds of calls to make, and involve a consideration and weighting of different kinds of issues. Currently a reasonable tradeoff for <code>fluid.jById</code> seems to be to go towards <code>document.getElementById</code>, but to put in a guard branch with a hard failure if a "name" attribute is picked up by mistake. For "live" storage during drag-and-drop, the jQuery data id cache option appears preferable, since we will already be storing various other data on drop targets in addition to what can be discovered in the DOM.

jQuery.data is really pretty fast, I will leave you with a few more timings -
<table border="0">
<tbody>
<tr>
<th></th>
<th>FF2</th>
<th>FF3</th>
</tr>
<tr>
<td>$("[id=my-id]")</td>
<td>12ms</td>
<td>5.1ms</td>
</tr>
<tr>
<td>bare document.getElementById()</td>
<td>8.5µs</td>
<td>3.2µs</td>
</tr>
<tr>
<td>document.getElementById() with guard</td>
<td>22µs</td>
<td>6.5µs</td>
</tr>
<tr>
<td>jQuery.data cache hit</td>
<td>2.9µs</td>
<td>1.9µs</td>
</tr>
</tbody></table>