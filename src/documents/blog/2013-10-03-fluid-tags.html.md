---
title: "fluid tags"
layout: "post"
postdate: 2013-10-03
author: sgithens
---

This is my first post here.  I'm a GPII and Fluid developer, and I'm hoping to write here about new and interesting features for our platform, often with an emphasis on tooling for our developers and partners to integrate their solutions and hack on the core platform.

A few weeks ago while visiting Antranig in Boulder, I started writing a ctags parser for Fluid. It's still a hack, but you can find it here: https://github.com/sgithens/fluid-tags

After years of using vim, and a few years of using emacs, I've actually switched back to just gedit lately. Part of that process has been doing some minor investment in finding existing plug-ins and tweaking them. Part of this process has also led me to finally confront the lack of a good tree display of javascript and json source.

There are some IDEs out there that do a good job of parsing javascript, but in general it seems mostly haphazard, especially with the multitude of ways that folks declare functions and wrap them up. For instance, just using the usual ``(function () { ... })();`` idiom will baffle most tree views. Given that gedit has a nice ctags viewer in the form of the source code browser, it seemed like a good place to start.

Ctags and it's cousin exuberant ctags typically choke on modern javascript, giving you maybe one or two function definitions from your file. There are some other, better, javascript ctags tools, but this seemed like a good, albeit small place to dive in to the future of development tools specifically targeted at our framework.

For instance, the types of ideas and components we create aren't top level language features in javascript.  Similar to jQuery and other types of libraries, they form higher level thought patterns on top of javascript's building blocks.  Take for instance, Fluid's defaults blocks.

```
fluid.defaults("gpii.server.config", {
  gradeNames: ["fluid.eventedComponent", "autoInit"],
  finalInitFunction: "gpii.server.config.finalInit",
  events: {
    configure: null
  },
  listeners: {
    configure: "{that}.configureHandler"
  },
  preInitFunction: "gpii.server.config.preInit",
  invokers: {
    configure: "gpii.server.config.configure"
  }
});
```

Even a good parser would recognize this as just a function, and maybe give some good advice on the arguments being passed in.  But in Fluid, this becomes a really important _thing_. A _thing_ which deserves some attention. This component is something we'll want to be able to find and navigate to.  In the future we want things to happens automatically in the gradeNames. In the listeners. In lots of things.

So we want a better javascript tag maker, but we also want a semantically smart Fluid tag maker.

It turns out it's pretty easy to do this with the AST trees that come out of <a title="Esprima.js" href="http://esprima.org/" target="_blank">Esprima.js</a>.  And with our first stab at a better ctags generator, you can see the results below in some screen shots of gedit.

<a href="/images/news/fluid.js.tags_.png">![fluid.js.tags](/images/news/fluid.js.tags_-258x300.png)</a>

Above you can see all the Fluid Defaults blocks and a number of the functions in Fluid.js. Defaults blocks are top level items here that can be navigated to.

<a href="/images/news/server.js.tags_.png">![server.js.tags](/images/news/server.js.tags_-300x254.png)</a>

Above is a good example of the server from the GPII project.  In addition to defaults blocks, we're also pulling out demands blocks.

Just this very primitive building block is already making my daily development on GPII more productive.  Of course, this needs to go hand in hand with information generated from partially and fully executing the code.  But, since we are fairly good at following conventions in the project, even this sort of static parsing can be very useful.

More tooling soon!