# HTML5 Game starter pack

## Commands

The most usefull command, will run server and realtime watching changes in src folder

```
npm run dev
```

Does build once (dev)

```
npm run b:dev
```

Does build once (dist)

```
npm run b:dist
```

Will watch changes in src folder

```
npm run watch
```

Will run server in www folder, with static build and dist folders

```
npm run server
```

## Start new project

To start new project, clone this repo without history

    [name] = name of your game
    
```
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

```
config/webpack.prod.js
```

 - Change name of dist file

 ```
 www/style.css
 www/index.html
 www/*
 ```
  - Customize as you need
  
