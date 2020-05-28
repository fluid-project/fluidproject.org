---
title: "Keyboard Accessibility for jQuery and Infusion"
layout: "post"
postdate: 2009-07-09
author: Colin Clark
---

Lots has changed since <a href="http://fluidproject.org/blog/2008/01/11/jquery-tabindex-plugin/">I last posted about Fluid's keyboard accessibility plugins</a> for jQuery. Here's a quick summary of what's new:

We've donated our tabindex normalization functions to jQuery, and they're available directly in <a href="http://jquery.com">jQuery</a> 1.3. Here's an example of how to use them:

```
 $().attr("tabindex"); // Gets the tabindex of the first matched element.
 $().attr("tabindex", -1); // Sets the tabindex value of all elements in this jQuery instance.
```

This now works consistently across all browsers in the jQuery way! There are some other tabindex-related conveniences in <a href="http://ui.jquery.com"> jQuery UI </a>1.7 core, too:

```
$().focusable(); // Returns true if the first matched element is currently focusable.
 $().tabbable(); // Returns true if the first matched element can be focused using the Tab/Shift-Tab keys.
```

Thanks so much to Scott Gonzalez for helping us land these patches in jQuery!

In my previous blog post about keyboard accessibility, I hinted at a comprehensive keyboard accessibility library that makes it easy to support desktop-style navigation with the keyboard. This plugin now ships as part of our <a href="http://fluidproject.org/products/infusion/">Fluid Infusion</a> application framework. It also works as a standalone jQuery plugin if you don't need the rest of Infusion's great features.

If you're interested in this plugin, here are a few links to get you started:

<ul>
	<li><a href="http://wiki.fluidproject.org/display/fluid/Keyboard+Accessibility+Plugin+API">Keyboard Accessibility API Documentation</a></li>
	<li><a href="http://wiki.fluidproject.org/display/fluid/Tutorial+-+Keyboard+Accessibility+Plugin">Keyboard Accessibility Tutorial</a></li>
	<li><a href="http://fluidproject.org/releases/1.3.1/demos/keyboard-a11y/demo.html">Demo of the keyboard plugin in action</a></li>
	<li><a href="https://github.com/fluid-project/infusion/blob/master/src/webapp/framework/core/js/jquery.keyboard-a11y.js">Source code for the jquery.keyboard-a11y.js plugin</a></li>
</ul>

As always, comments, feedback, and suggestions are welcome.