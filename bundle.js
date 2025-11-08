(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _counter = require("./scripts/counter");
(0, _counter.giveFunctionToButton)();

},{"./scripts/counter":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.giveFunctionToButton = giveFunctionToButton;
function giveFunctionToButton() {
  var count = 0;
  var button = document.getElementById("btn");
  var display = document.getElementById("count");
  button.addEventListener("click", function () {
    count++;
    display.textContent = count;
  });
}

},{}]},{},[1]);
