/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createGameeConnector; });
var GameeConnector = function (Game) {
    this.sound = false;
    this.controller = null;
    this.gameInstance = null;
    this.Game = Game;
    this._initGame();
};

GameeConnector.prototype = {
    _initGame: function () {
        var controllerType = 'FullScreen',
            controllerOpts = {},
            capabilities = ["saveState"];

        // before your game calls gamee.gameInit, it must be able to accept mute and unmute command
        // but your game MUST NOT play any sound durring this phase
        gamee.emitter.addEventListener("mute", function (ev) {
            this.sound = false;
        }.bind(this));

        gamee.emitter.addEventListener("unmute", function (ev) {
            this.sound = true;
        }.bind(this));

        // calling init
        // in this phase, your game notifies platform what kind of controller it uses and what capabilities it has
        gamee.gameInit(controllerType, controllerOpts, capabilities, this._initGameCb.bind(this));
    },
    _initGameCb: function (data) {
        // callback for gameInit
        // response for gameInit contains requested controller instance, some other data based on capabilities and sound otpion
        this.controller = data.controller;
        this.sound = data.sound;

        this.saveState = {
        };
        if (data.saveState !== null) {
            try {
                var saveState = JSON.parse(data.saveState);
                if (saveState !== null)
                    this.saveState = saveState;
            } catch (err) {
            }
        }

        // now your game can setup assets and other stuff
        // durring this phase, gamee.loadingProgress(int) to notify platform about preparation progress
        // durring this phase, your game is allowed to play sound

        // once preparation is ready, continue
        this._gameReady();
    },
    _gameReady: function () {

        // before you continue, you must be able to accept gameStart command
        gamee.emitter.addEventListener("start", this.gameStart.bind(this));

        // calling gamee.gameReady
        // this method will notify platform, your game is ready to accept gameStart command
        // gamee.gameReady(this._gameReadyCb.bind(this));
        gamee.gameReady();
    },
    _gameReadyCb: function () {
        // there you won't get any data
    },
    gameStart: function (ev) {
        if (this.gameInstance !== null) {
            this.gameInstance.forceEnd();
        }
        // when you start new game instance, you will probably want to pass some parameters based on:
        // type of game should run (is it first game? did player died already?)
        // call signature might differ a lot,
        // this is just sample how it could look like:
        this.gameInstance = new this.Game(this.sound, this.controller, this.saveState);
        // once game is ready, you must call callback
        // this is standart CustomEvent instance, callback is property of event.detail
        ev.detail.callback();
    }
};

var createGameeConnector = function (Game) {
    new GameeConnector(Game);
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gamee_GameeConnector_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Game_js__ = __webpack_require__(2);



__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__gamee_GameeConnector_js__["a" /* createGameeConnector */])(__WEBPACK_IMPORTED_MODULE_1__Game_js__["a" /* Game */]);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Game; });
var Game = function () {
    console.log("game started");
};

Game.prototype = {

};

/***/ })
/******/ ]);
//# sourceMappingURL=build.js.map