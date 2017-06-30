# HTML5 Game starter pack

Initial configuration code for the HTML5 game development. Contains Chronos pattern (time management). 

## Specific configurations

GAMEE https://github.com/EntityB/html5-game-starter-pack/tree/gamee-pack

## Contains

 - preconfigured webpack
 - preconfigured babel
 - style reset
 - server with nodejs

## Commands

```
npm start
npm run startx
```
Same commands for running server and realtime builds (first one is for windows, second for others). 

```
npm run b:dist
```
One time build.

```
npm run watch
```
Detect changes in src folder and does realtime builds to the dist folder. 

```
npm run server
```
Nodejs server. 

## Start new project

To start new project, clone this repo without history
 
```
[name] = name of your game

git clone git@github.com:EntityB/html5-game-starter-pack.git --depth 1 [name]
```

Then install dependencies

```
npm install
```

## Customize

```
package.json
```
- project name
- author name
- version
- repo
- etc.

```
public/static/css/style.css
public/index.html
public/*
```
Customize as you need.
  
```
libs
```
Add engines and libraries. 

```
src
```
Write your code. 
