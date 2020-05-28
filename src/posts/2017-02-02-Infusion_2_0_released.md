---
layout: layouts/post
title: "Infusion 2.0 released! | fluid"
permalink: 2017-02-02-Infusion_2_0_released.html
date: '2017-02-02'
tags: post
---
<section class="row">
                <div class="medium-6 columns">
                    <h2 class="fluid-web-emphasized-text">Infusion 2.0 released!</h2>
                    <p class="fluid-web-news-post-meta">
                        Posted by Release Manager on 2017-02-02
                    </p>
                </div>
                <div class="medium-6 columns">
                    <p>The Fluid community is pleased to announce the release of Infusion 2.0!</p>
<p>Infusion 2.0 includes significant framework improvements and <em>is not backwards compatible</em> with previous versions of Infusion. Please see <a href="http://docs.fluidproject.org/infusion/development/APIChangesFrom1_5To2_0.html">API Changes from 1.5 to 2.0</a> and <a href="http://docs.fluidproject.org/infusion/development/DeprecationsIn1_5.html">Deprecations in 1.5</a> on the <a href="https://github.com/fluid-project/infusion-docs">Infusion Documentation</a> site.</p>
<p><a href="https://github.com/fluid-project/infusion/blob/infusion-2.0/ReleaseNotes.md">Release Notes</a></p>
<h2 id="what-s-new-in-2-0-0-">What&#39;s New in 2.0.0?</h2>
<ul>
<li>Constraint-based priorities, supported by <code>listeners</code>, <code>modelListeners</code>, <code>modelRelay</code>, <code>distributeOptions</code>, <code>contextAwareness</code>, and <code>components</code>. This allows the specific order of those items to be configured. (See: <a href="http://docs.fluidproject.org/infusion/development/Priorities.html">Priorities</a>)</li>
<li>Context Awareness - and things it relies on:<ul>
<li>Global Instantiator<ul>
<li>Every Infusion component, regardless of how it is instantiated, ends up in a single-rooted tree of components</li>
<li>This enables use of modern IoC features such as model relay and declarative event binding</li>
<li>Enables use of the root distributeOptions context &quot;/&quot;</li>
<li>Enables the removal of &quot;demands blocks&quot;</li>
<li>Useful debugging tip: Watch <code>fluid.globalInstantiator</code> in your JS debugging tools to see the structure of your application and its tree.</li>
</ul>
</li>
</ul>
</li>
<li><code>fluid.notImplemented</code> function for implementing abstract grades</li>
<li><a href="http://docs.fluidproject.org/infusion/development/UserInterfaceOptionsAPI.html#lazyload">Lazy loading for UI Options</a> and instructions for how to use the Preferences Framework with a <a href="http://docs.fluidproject.org/infusion/development/tutorial-prefsFrameworkMinimalFootprint/MinimalFootprint.html">zero initial load time</a>.<ul>
<li>This should assist in improving performance when using the Preferences Framework, particularly for resource intensive sites and applications</li>
</ul>
</li>
<li>Much faster invokers and boiled listeners (c. 60x faster)</li>
<li>Support for using Infusion with npm for both Node.js and web-based projects.<ul>
<li>Provides a variety of prebuilt versions of Infusion in the module&#39;s <code>dist</code> directory.</li>
</ul>
</li>
<li>Source Maps are generated for the concatenated JavaScript files</li>
<li>View oriented IoC debugging tools<ul>
<li>Including FluidViewDebugging.js on the page of any Infusion application gives you access to the <em>IoC View Inspector</em>. Click on the small cogwheel icon at the bottom right of the page to open a panel which shows the details of the view components and their grades, that are attached to DOM nodes in the browser pane. This interface works similarly to the <em>DOM Inspector</em> familiar from modern web browsers, but is an experimental implementation with an engineer-level UI.</li>
</ul>
</li>
</ul>
<h2 id="obtaining-infusion">Obtaining Infusion</h2>
<ul>
<li><a href="https://github.com/fluid-project/infusion">Fork on GitHub</a></li>
<li><a href="https://github.com/fluid-project/infusion/releases">Download a Build</a></li>
<li><a href="https://www.npmjs.com/package/infusion">Install from NPM</a></li>
<li><a href="https://cdnjs.com/libraries/infusion">Serve from a CDN</a></li>
</ul>
<p>You can create your own custom build of Infusion using the <a href="https://github.com/fluid-project/infusion/blob/infusion-2.0/README.md#how-do-i-create-an-infusion-package">grunt build script</a>.</p>
<h2 id="thank-you">Thank You</h2>
<p>A lot of time and effort has gone into this release, and we&#39;d like to thank everyone in the community for their contributions.</p>
                </div>
            </section>
