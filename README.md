Opinionated Baseeline for ReactJS Projects
==========================================

**this is a living work in progress, please keep that in mind**

As I do more projects with [ReactJS](http://facebook.github.io/react/) I started to extract a baseline to use when starting new projects. This is **very** opinionated and I change my opinion from time to time. This is by no ways perfect and in **your** opinion most likely wrong :).. which is why I love github

I encourage you to fork, and make it *right* and submit a pull request!

My current opinion is using tools like [Grunt](http://gruntjs.com/), [Browserify](http://browserify.org/), [Bower](http://bower.io/) and mutiple grunt plugins to get the job done. I also opted for [Zepto](http://zeptojs.com/) over jQuery and the Flatiron Project's [Director](https://github.com/flatiron/director) when I need a router. Oh and for the last little bit of tech that makes you mad, I am in the [SASS](http://sass-lang.com/) camp when it comes to stylesheets

How to Use
----------

Given the tool chain I have outlined above, you need the following things installed. I wont bother instructing you how, I am sure you know or already have what is needed

1. [NodeJS](http://nodejs.org/) 
2. [NPM](http://npmjs.org)  (*some node distro's include this*)
3. [Ruby](https://www.ruby-lang.org/) (*stock OSX ruby is totally fine*)	


This is how I go about using my baseline


First, lets clone the repo 

```
mkdir new_project_name
cd new_project_name
git clone git@github.com:intabulas/reactjs-baseline.git .

```

**note** at this point, do your normal steps for a new git repo and adding the remote

Make sure grunt-cli is installed globally

```
npm install -g grunt-cli
```

Now lets install dependencies (*prefix with sudo as needed*)

```
gem install sass
npm install
bower install
``` 

Now Edit package.json and replace the content as you see fit. The grunt scripts use the 'name' from package.json for naming files (ie: css, js, etc)


Development
-----------

```
grunt dev
```

Will build the development (self contained) instance into ./development. CSS and JS are not uglified or minified to help with debugging.

Distribution
------------

```
grunt dist
```

Will build the production (self contained) instance into ./dist. CSS and JS are uglified and minified as appropriate


Running
-------

Personaly I use [Nodejitsu's](https://www.nodejitsu.com/) [http-server](https://github.com/nodeapps/http-server) to run the instances. Effectivly a node version of python's SimpleHTTPServer.

example:

```
cd development
http-server
```

Now visit [http://localhost:8080](http://localhost:8080) or whatever port http-server says its running on


Todos
-----

1. Integrate [JSXHint](https://github.com/CondeNast/JSXHint)


