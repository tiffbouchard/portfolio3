---
templateKey: blog-post
title: Different types of dependencies
date: 2022-01-24T00:46:36.962Z
featuredpost: true
tags:
  - notes
  - tech
---
dependencies

* packaged required by app in production
* will be installed when `npm install` is run from a directory with a package.json
* install a dependency in any directory by running `npm install $packagename`

devDependencies 

* packages only required during development (i.e testing packages - jest, babel, estlint)
* installed when `npm install` is run in a directory that contains a package.json
* you can skip these packages by sticking on the `--production` flag
* will only be installed to devDependencies when `npm install $packagename` is run with the `--dev` flag
* not installed **transitively***

peerDependencies 

* not automatically installed (now auto installed in version 7?)
* specifies the packages that a dependency needs, there will be a warning if it is not added 
* the versions must be compatible - if the peerDependency is listed as version 2.0 you cannot install 1.0 
* used mostly for plugins or libraries that require another "host" library - but was written before the latest version (i write a library at v. 2.x but someone uses it at a point when 3.x is available) - my library might only work with 2.x and not 3.x, so we make sure to specify which version we are using so that the person using our library can have the right version (if they end up installing a newer version for example, it could work but there is also a change that it won't)

> What [**plugins**] need is a way of expressing these “dependencies” between plugins and their host package. Some way of saying, “I only work when plugged in to version 1.2.x of my host package, so if you install me, be sure that it’s alongside a compatible host.” We call this relationship a peer dependency. [[blog.dominic.me](https://blog.domenic.me/peer-dependencies/)]

**\*transitivity**: if A requires B, and B requires C, then C gets installed. - B and A would not work without C

<br/>

<https://nodejs.org/en/blog/npm/peer-dependencies/>

<https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies>