---
templateKey: blog-post
title: Different types of dependencies
date: 2022-01-24T00:46:36.962Z
featuredpost: true
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

> What [**plugins**] need is a way of expressing these “dependencies” between plugins and their host package. Some way of saying, “I only work when plugged in to version 1.2.x of my host package, so if you install me, be sure that it’s alongside a compatible host.” We call this relationship a peer dependency.

**\*transitivity**: if A requires B, and B requires C, then C gets installed. - B and A would not work without C