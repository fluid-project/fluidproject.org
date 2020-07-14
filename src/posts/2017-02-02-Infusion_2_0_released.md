---
layout: layouts/post
title: "Infusion 2.0 released! | fluid"
permalink: 2017-02-02-Infusion_2_0_released.html
date: '2017-02-02'
tags: post
---
Infusion 2.0 released!

Posted by Release Manager on 2017-02-02

The Fluid community is pleased to announce the release of Infusion 2.0!

Infusion 2.0 includes significant framework improvements and *is not
backwards compatible* with previous versions of Infusion. Please see
[API Changes from 1.5 to
2.0](http://docs.fluidproject.org/infusion/development/APIChangesFrom1_5To2_0.html)
and [Deprecations in
1.5](http://docs.fluidproject.org/infusion/development/DeprecationsIn1_5.html)
on the [Infusion
Documentation](https://github.com/fluid-project/infusion-docs) site.

[Release
Notes](https://github.com/fluid-project/infusion/blob/infusion-2.0/ReleaseNotes.md)

What's New in 2.0.0? {#what-s-new-in-2-0-0-}

- Constraint-based priorities, supported by `listeners`,
    `modelListeners`, `modelRelay`, `distributeOptions`,
    `contextAwareness`, and `components`. This allows the specific order
    of those items to be configured. (See:
    [Priorities](http://docs.fluidproject.org/infusion/development/Priorities.html))
- Context Awareness - and things it relies on:
  - Global Instantiator
  - Every Infusion component, regardless of how it is
            instantiated, ends up in a single-rooted tree of components
  - This enables use of modern IoC features such as model relay
            and declarative event binding
    - Enables use of the root distributeOptions context "/"
      - Enables the removal of "demands blocks"
    - Useful debugging tip: Watch `fluid.globalInstantiator` in
            your JS debugging tools to see the structure of your
            application and its tree.
- `fluid.notImplemented` function for implementing abstract grades
- [Lazy loading for UI
    Options](http://docs.fluidproject.org/infusion/development/UserInterfaceOptionsAPI.html#lazyload)
    and instructions for how to use the Preferences Framework with a
    [zero initial load
    time](http://docs.fluidproject.org/infusion/development/tutorial-prefsFrameworkMinimalFootprint/MinimalFootprint.html).
  - This should assist in improving performance when using the
        Preferences Framework, particularly for resource intensive sites
        and applications
- Much faster invokers and boiled listeners (c. 60x faster)
- Support for using Infusion with npm for both Node.js and web-based
    projects.
- Provides a variety of prebuilt versions of Infusion in the
        module's `dist` directory.
- Source Maps are generated for the concatenated JavaScript files
- View oriented IoC debugging tools
  - Including FluidViewDebugging.js on the page of any Infusion
        application gives you access to the *IoC View Inspector*. Click
        on the small cogwheel icon at the bottom right of the page to
        open a panel which shows the details of the view components and
        their grades, that are attached to DOM nodes in the browser
        pane. This interface works similarly to the *DOM Inspector*
        familiar from modern web browsers, but is an experimental
        implementation with an engineer-level UI.

Obtaining Infusion

- [Fork on GitHub](https://github.com/fluid-project/infusion)
- [Download a
    Build](https://github.com/fluid-project/infusion/releases)
- [Install from NPM](https://www.npmjs.com/package/infusion)
- [Serve from a CDN](https://cdnjs.com/libraries/infusion)

You can create your own custom build of Infusion using the [grunt build
script](https://github.com/fluid-project/infusion/blob/infusion-2.0/README.md#how-do-i-create-an-infusion-package).

Thank You

A lot of time and effort has gone into this release, and we'd like to
thank everyone in the community for their contributions.
