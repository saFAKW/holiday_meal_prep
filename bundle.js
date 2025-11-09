(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _nutrition_api = require("./scripts/nutrition_api");
var _get_recipe = require("./scripts/get_recipe");
var _add_to_list = require("./scripts/add_to_list");
var _cost_calculation = require("./scripts/cost_calculation");
var _bubbles = require("./scripts/bubbles");
var total = (0, _cost_calculation.calculateTotalCost)("100ml Milk, 50 g Eggs, 50 ml Goat Milk, 100 g Pistachios");
console.log(total);

(0, _get_recipe.show_recipe)();
(0, _add_to_list.add_ingredients_to_list)();

},{"./scripts/add_to_list":2,"./scripts/bubbles":3,"./scripts/cost_calculation":4,"./scripts/get_recipe":7,"./scripts/nutrition_api":8}],2:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add_ingredients_to_list = add_ingredients_to_list;
var _get_recipe = require("./get_recipe.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var british_cuisine = ["Full English Breakfast", "Eggs Benedict", "Beans on Toast", "Porridge", "Kippers", "Black Pudding", "Crumpets", "Bacon Sandwich (Bacon Butty)", "Bubble and Squeak", "Smoked Salmon & Scrambled Eggs", "Ploughman’s Lunch", "Fish and Chips", "Cornish Pasty", "Scotch Egg", "Sausage Roll", "Welsh Rarebit", "Jacket Potato", "Chicken and Leek Pie", "Cottage Pie", "Prawn Cocktail", "Roast Beef and Yorkshire Pudding", "Shepherd’s Pie", "Beef Wellington", "Toad in the Hole", "Lamb Shank with Mint Sauce", "Steak and Ale Pie", "Bangers and Mash", "Chicken Tikka Masala", "Fish Pie", "Eton Mess", "Sticky Toffee Pudding", "Bread and Butter Pudding", "Trifle", "Victoria Sponge Cake", "Bakewell Tart", "Spotted Dick", "Apple Crumble", "Banoffee Pie", "Treacle Tart", "Scones with Clotted Cream and Jam"];

// Note: counter is managed in get_recipe.js

function updateIngredientsList() {
  var sheet = document.getElementById("ingredientsSheet");
  var ingredientDisplay = document.getElementById("ingredients-p");
  if (!sheet || !ingredientDisplay) {
    console.error("error getElementById - missing ingredientsSheet or ingredients-p");
    return;
  }

  // Get the ingredients text from the display element (it already contains just the ingredients section)
  var ingredientsHtml = ingredientDisplay.innerHTML;
  var ingredientsText = ingredientsHtml.replace(/<br>/gi, '\n').replace(/<[^>]*>/g, '');


  // Split by lines and filter for ingredient lines (those starting with "-" or containing ingredient text)
  var lines = ingredientsText.split('\n');
  var ingredientsFound = 0;
  var _iterator = _createForOfIteratorHelper(lines),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var line = _step.value;
      var trimmedLine = line.trim();

      // Remove leading "- " or "-" if present
      if (trimmedLine.startsWith('- ')) {
        trimmedLine = trimmedLine.substring(2).trim();
      } else if (trimmedLine.startsWith('-')) {
        trimmedLine = trimmedLine.substring(1).trim();
      }

      // Skip empty lines
      if (!trimmedLine) {
        continue;
      }

      // Skip if it looks like it's part of the recipe section (contains "Recipe:")
      if (trimmedLine.includes("Recipe:")) {
        break;
      }
      console.log("Adding ingredient: ".concat(trimmedLine));
      ingredientsFound++;
      var newItem = document.createElement("div");
      newItem.className = "ingredient-item";
      newItem.innerHTML = "<strong>".concat(trimmedLine, "</strong>");
      sheet.appendChild(newItem);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (ingredientsFound === 0) {
    var noItem = document.createElement("div");
    noItem.className = "ingredient-item";
    noItem.innerHTML = "<p style=\"color: #7f8c8d;\">No ingredients listed for this recipe.</p>";
    sheet.appendChild(noItem);
  }
}

// Track if listeners have been added to prevent duplicates
var listenersAdded = false;
function add_ingredients_to_list() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', add_ingredients_to_list);
    return;
  }
  var addButton = document.getElementById("add");
  var skipButton = document.getElementById("skip");
  var recipeText = document.getElementById("recipe-p");
  if (!addButton || !recipeText || !skipButton) {
    console.error("Missing required elements:", {
      addButton: addButton,
      recipeText: recipeText,
      skipButton: skipButton
    });
    // Retry after a short delay in case elements aren't ready yet
    setTimeout(add_ingredients_to_list, 100);
    return;
  }

  // Only add listeners once
  if (listenersAdded) {
    return;
  }
  listenersAdded = true;
  console.log("Adding event listeners to buttons");
  addButton.addEventListener("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          alert("added to shopping list");
          console.log("click add to basket");
          updateIngredientsList();
          _context.next = 5;
          return (0, _get_recipe.show_recipe)();
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));

  /*skip button functionality*/
  skipButton.addEventListener("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          alert("skipped");
          _context2.next = 3;
          return (0, _get_recipe.show_recipe)();
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
}

},{"./get_recipe.js":7}],3:[function(require,module,exports){
"use strict";

var height;
var width;
var posLeft;
var speed;
var margin;
var bubblediv = document.querySelector('.bubblepop');
for (var i = 0; i < 40; i++) {
  var _height = Math.floor(Math.random() * 100) + 1;
  var _width = _height;
  var _posLeft = Math.floor(Math.random() * 100);
  var _speed = Math.random() * 15 + 4;
  var di = document.createElement('div');
  di.className = 'fizz';
  di.style.height = _height + 'px';
  di.style.width = _width + 'px';
  di.style.left = _posLeft + '%';
  di.style.animationDuration = _speed + 's';
  di.style.webkitAnimationDuration = _speed + 's';
  bubblediv.appendChild(di);
}

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CostPerPerson = CostPerPerson;
exports.calculateTotalCost = calculateTotalCost;
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var costs = require('./costs.json');
function parseIngredientString(ingredientStr) {
  return ingredientStr.split(",").map(function (item) {
    // Match number, optional space, optional unit, then ingredient name (preserve spaces)
    var match = item.trim().match(/^([\d.]+)\s*([a-zA-Z]+)?\s*(.+)$/);
    if (!match) return null;
    var _match = _slicedToArray(match, 4),
      amount = _match[1],
      unit = _match[2],
      name = _match[3];
    return {
      amount: parseFloat(amount),
      unit: unit ? unit.toLowerCase() : null,
      name: name.trim() // preserve spaces
    };
  }).filter(Boolean);
}
function convertUnit(amount, fromUnit, toUnit) {
  if (!fromUnit || !toUnit) return null;
  fromUnit = fromUnit.toLowerCase();
  toUnit = toUnit.toLowerCase();
  if (fromUnit === toUnit) return amount;
  if (fromUnit === "ml" && toUnit === "g" || fromUnit === "g" && toUnit === "ml") {
    return amount; // rough approximation
  }
  return null; // unknown conversion
}
function calculateTotalCost(ingredientStr) {
  console.log(ingredientStr);
  var ingredients = parseIngredientString(ingredientStr);
  var totalCost = 0;
  var _iterator = _createForOfIteratorHelper(ingredients),
    _step;
  try {
    var _loop = function _loop() {
        var ing = _step.value;
        // Find first entry in costs that includes the ingredient name (case-insensitive)
        var costEntry = Object.entries(costs).find(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 1),
            key = _ref2[0];
          return key.toLowerCase().includes(ing.name.toLowerCase());
        });
        if (costEntry) costEntry = costEntry[1];else {
          costEntry = costs["Default"]; // fallback
        }
        var amountInCostUnit = ing.amount;
        if (ing.unit && costEntry.unit) {
          var converted = convertUnit(ing.amount, ing.unit, costEntry.unit);
          if (converted !== null) amountInCostUnit = converted;else {
            // unit not identifiable, set £1
            totalCost += 1;
            return 0; // continue
          }
        } else if (!ing.unit) {
          // missing unit, set £1
          totalCost += 1;
          return 0; // continue
        }
        var cost = amountInCostUnit / costEntry.per * costEntry.price;
        totalCost += cost;
      },
      _ret;
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _ret = _loop();
      if (_ret === 0) continue;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return parseFloat(totalCost.toFixed(2));
}
function CostPerPerson(ingredientStr, portions) {
  return parseFloat((calculateTotalCost(ingredientStr) / portions).toFixed(2));
}

// Example usage:
// const total = calculateTotalCost("100g Milk, 50 g Eggs, 50 g Goat Milk, 20 ml Pistachios");
// console.log(total);

},{"./costs.json":5}],5:[function(require,module,exports){
module.exports={
  "Basmati Rice": { "price": 0.20, "per": 100, "unit": "g" },
  "Brown/Long Grain Rice": { "price": 0.15, "per": 100, "unit": "g" },
  "Orzo": { "price": 0.15, "per": 100, "unit": "g" },
  "Quinoa": { "price": 0.36, "per": 100, "unit": "g" },
  "Cous Cous": { "price": 0.32, "per": 100, "unit": "g" },
  "Lasagne sheets": { "price": 0.35, "per": 100, "unit": "g" },
  "Lentils Red/Green": { "price": 0.23, "per": 100, "unit": "g" },
  "Noodles": { "price": 0.50, "per": 100, "unit": "g" },
  "Pasta Dried-Various": { "price": 0.23, "per": 100, "unit": "g" },
  "Pudding Rice": { "price": 0.31, "per": 100, "unit": "g" },
  "Strawberries": { "price": 0.50, "per": 100, "unit": "g" },
  "Strong flour": { "price": 0.08, "per": 100, "unit": "g" },
  "Gluten free flour": { "price": 0.60, "per": 100, "unit": "g" },
  "Polenta flour": { "price": 0.17, "per": 100, "unit": "g" },
  "Bread roll/bap mix": { "price": 0.20, "per": 100, "unit": "g" },
  "Baking Powder": { "price": 0.35, "per": 100, "unit": "g" },
  "Bicarbonate of Soda": { "price": 0.28, "per": 100, "unit": "g" },
  "Cornflour": { "price": 0.10, "per": 100, "unit": "g" },
  "Dates": { "price": 0.25, "per": 100, "unit": "g" },
  "Desiccated Coconut": { "price": 0.55, "per": 100, "unit": "g" },
  "Dried Apricots": { "price": 0.50, "per": 100, "unit": "g" },
  "Dried Fruit (other)": { "price": 0.30, "per": 100, "unit": "g" },
  "Dried Yeast": { "price": 0.52, "per": 100, "unit": "g" },
  "Food Colourings": { "price": 0.03, "per": 10, "unit": "ml" },
  "Glacé Cherries": { "price": 0.50, "per": 100, "unit": "g" },
  "Lemon Juice": { "price": 0.02, "per": 10, "unit": "ml" },
  "Rolled Oats": { "price": 0.16, "per": 100, "unit": "g" },
  "Vegetable Suet": { "price": 0.46, "per": 100, "unit": "g" },
  "Stuffing Mix": { "price": 0.14, "per": 100, "unit": "g" },
  "Suet Mix": { "price": 0.13, "per": 100, "unit": "g" },
  "Madras Curry Powder": { "price": 0.24, "per": 10, "unit": "g" },
  "Black Treacle": { "price": 0.18, "per": 100, "unit": "g" },
  "Golden Syrup": { "price": 0.15, "per": 100, "unit": "g" },
  "Sugar all types": { "price": 0.15, "per": 100, "unit": "g" },
  "Nutmeg": { "price": 0.20, "per": 10, "unit": "g" },
  "Clear Honey": { "price": 0.44, "per": 100, "unit": "g" },
  "Fruit Jam/Mincemeat": { "price": 0.20, "per": 100, "unit": "g" },
  "Lemon Curd": { "price": 0.23, "per": 100, "unit": "g" },
  "Marmalade": { "price": 0.20, "per": 100, "unit": "g" },
  "Cajun seasoning": { "price": 0.08, "per": 10, "unit": "g" },
  "Coffee": { "price": 2.90, "per": 100, "unit": "g" },
  "Jerk seasoning": { "price": 0.12, "per": 10, "unit": "g" },
  "Butter": { "price": 1.00, "per": 100, "unit": "g" },
  "Margarine/white fat": { "price": 0.34, "per": 100, "unit": "g" },
  "Vegetable Oil": { "price": 0.42, "per": 100, "unit": "ml" },
  "Evaporated milk": { "price": 0.39, "per": 100, "unit": "g" },
  "Cheddar cheese": { "price": 0.59, "per": 100, "unit": "g" },
  "Mozzarella": { "price": 0.52, "per": 100, "unit": "g" },
  "Cream Cheese": { "price": 0.47, "per": 100, "unit": "g" },
  "Crème Fraiche- Low Fat": { "price": 0.45, "per": 100, "unit": "g" },
  "Eggs": { "price": 0.24, "per": 1, "unit": "each" },
  "Tomato puree": { "price": 0.20, "per": 100, "unit": "g" },
  "Tomato coulis": { "price": 0.20, "per": 100, "unit": "g" },
  "Halloumi": { "price": 1.02, "per": 100, "unit": "g" },
  "Mayonnaise": { "price": 0.22, "per": 100, "unit": "g" },
  "Natural Yoghurt": { "price": 0.20, "per": 100, "unit": "g" },
  "Parmesan Cheese": { "price": 1.80, "per": 100, "unit": "g" },
  "Milk": { "price": 0.07, "per": 100, "unit": "ml" },
  "Sour Cream": { "price": 0.35, "per": 100, "unit": "g" },
  "Soya Milk": { "price": 0.16, "per": 100, "unit": "ml" },
  "Vegan mayonnaise": { "price": 0.74, "per": 100, "unit": "g" },
  "Apples": { "price": 0.18, "per": 100, "unit": "g" },
  "Aubergine": { "price": 0.30, "per": 100, "unit": "g" },
  "Beef tomato": { "price": 0.27, "per": 100, "unit": "g" },
  "Banana (flesh only)": { "price": 0.19, "per": 100, "unit": "g" },
  "Tomatoes": { "price": 0.16, "per": 100, "unit": "g" },
  "Blueberries": { "price": 1.72, "per": 100, "unit": "g" },
  "Beetroot": { "price": 0.15, "per": 100, "unit": "g" },
  "Grapes": { "price": 0.46, "per": 100, "unit": "g" },
  "Broccoli": { "price": 0.22, "per": 100, "unit": "g" },
  "Carrots": { "price": 0.07, "per": 100, "unit": "g" },
  "Kiwi fruit": { "price": 0.30, "per": 100, "unit": "g" },
  "Cherry tomato": { "price": 0.38, "per": 100, "unit": "g" },
  "Mango": { "price": 0.50, "per": 100, "unit": "g" },
  "Courgettes": { "price": 0.23, "per": 100, "unit": "g" },
  "Pears": { "price": 0.20, "per": 100, "unit": "g" },
  "Cucumber": { "price": 0.20, "per": 100, "unit": "g" },
  "Iceberg/mixed leaves": { "price": 0.18, "per": 100, "unit": "g" },
  "Kale": { "price": 0.50, "per": 100, "unit": "g" },
  "Watermelon": { "price": 0.11, "per": 100, "unit": "g" },
  "Leeks": { "price": 0.19, "per": 100, "unit": "g" },
  "Butternut Squash": { "price": 0.14, "per": 100, "unit": "g" },
  "Parsnips": { "price": 0.20, "per": 100, "unit": "g" },
  "Sugar Snaps": { "price": 0.66, "per": 100, "unit": "g" },
  "Lettuce": { "price": 0.26, "per": 100, "unit": "g" },
  "Mushrooms": { "price": 0.26, "per": 100, "unit": "g" },
  "Onions": { "price": 0.09, "per": 100, "unit": "g" },
  "Balsamic Vinegar": { "price": 0.50, "per": 100, "unit": "ml" },
  "Peppers": { "price": 0.23, "per": 100, "unit": "g" },
  "Chilli Cayenne": { "price": 0.10, "per": 10, "unit": "g" },
  "Potatoes": { "price": 0.14, "per": 100, "unit": "g" },
  "Cinnamon": { "price": 0.09, "per": 10, "unit": "g" },
  "Spinach": { "price": 0.50, "per": 100, "unit": "g" },
  "Cooking Salt": { "price": 0.02, "per": 10, "unit": "g" },
  "Sweet Potato": { "price": 0.20, "per": 100, "unit": "g" },
  "Fresh Basil/coriander": { "price": 0.30, "per": 10, "unit": "g" },
  "Fresh Garlic": { "price": 0.12, "per": 10, "unit": "g" },
  "Brown/white sliced bread": { "price": 0.21, "per": 100, "unit": "g" },
  "Fresh Parsley": { "price": 0.15, "per": 100, "unit": "g" },
  "Wrap/chapati - 10\"": { "price": 0.15, "per": 1, "unit": "each" },
  "Grnd Black Pepper": { "price": 0.11, "per": 10, "unit": "g" },
  "Wrap/chapati - 12\"": { "price": 0.18, "per": 1, "unit": "each" },
  "Pitta bread": { "price": 0.12, "per": 1, "unit": "each" },
  "Grnd White Pepper": { "price": 0.11, "per": 10, "unit": "g" },
  "Ground Ginger": { "price": 0.09, "per": 10, "unit": "g" },
  "Ground Mixed Spice": { "price": 0.09, "per": 10, "unit": "g" },
  "Diced beef": { "price": 0.78, "per": 100, "unit": "g" },
  "Ground Paprika": { "price": 0.07, "per": 10, "unit": "g" },
  "Beef mince": { "price": 0.57, "per": 100, "unit": "g" },
  "Chicken drumstick": { "price": 0.23, "per": 100, "unit": "g" },
  "Mint Sauce": { "price": 0.30, "per": 100, "unit": "g" },
  "Chicken breast fillet": { "price": 0.69, "per": 100, "unit": "g" },
  "Mixed Herbs": { "price": 0.15, "per": 10, "unit": "g" },
  "Diced chicken": { "price": 0.53, "per": 100, "unit": "g" },
  "Mustard Powder": { "price": 0.22, "per": 10, "unit": "g" },
  "Chicken thigh (boneless)": { "price": 0.60, "per": 100, "unit": "g" },
  "Chicken mince": { "price": 0.92, "per": 100, "unit": "g" },
  "Sweet Pickle": { "price": 0.36, "per": 100, "unit": "g" },
  "Diced lamb": { "price": 1.08, "per": 100, "unit": "g" },
  "Vinegar": { "price": 0.04, "per": 100, "unit": "ml" },
  "Lamb mince": { "price": 0.68, "per": 100, "unit": "g" },
  "Turkey fillet": { "price": 0.71, "per": 100, "unit": "g" },
  "Diced turkey": { "price": 0.65, "per": 100, "unit": "g" },
  "Turkey mince": { "price": 0.87, "per": 100, "unit": "g" },
  "Tandoori seasoning": { "price": 0.08, "per": 10, "unit": "g" },
  "Diced pork": { "price": 0.71, "per": 100, "unit": "g" },
  "Pork mince": { "price": 0.52, "per": 100, "unit": "g" },
  "Piri Piri seasoning": { "price": 0.12, "per": 10, "unit": "g" },
  "Salmon": { "price": 1.80, "per": 100, "unit": "g" },
  "Pollock": { "price": 0.89, "per": 100, "unit": "g" },
  "Condensed milk": { "price": 0.27, "per": 100, "unit": "g" },
  "Smoked Haddock": { "price": 1.42, "per": 100, "unit": "g" },
  "Coconut milk": { "price": 0.21, "per": 100, "unit": "g" },
  "Quorn Fillet": { "price": 0.75, "per": 100, "unit": "g" },
  "Baked beans": { "price": 0.10, "per": 100, "unit": "g" },
  "Quorn Mince": { "price": 0.71, "per": 100, "unit": "g" },
  "Other tinned beans/pulses": { "price": 0.09, "per": 100, "unit": "g" },
  "Tinned tomatoes": { "price": 0.09, "per": 100, "unit": "g" },
  "Cake cases": { "price": 0.15, "per": 1, "unit": "each" },
  "Muffin tulips": { "price": 0.27, "per": 1, "unit": "each" },
  "Greaseproof paper": { "price": 0.02, "per": 1, "unit": "sheet" },
  "Avocado": { "price": 1.20, "per": 100, "unit": "g" },
  "Baby Spinach": { "price": 1.75, "per": 100, "unit": "g" },
  "Curly Kale": { "price": 1.30, "per": 100, "unit": "g" },
  "Butternut Pumpkin": { "price": 0.90, "per": 100, "unit": "g" },
  "Red Cabbage": { "price": 0.45, "per": 100, "unit": "g" },
  "Green Beans": { "price": 1.10, "per": 100, "unit": "g" },
  "Zucchini (Courgette)": { "price": 0.80, "per": 100, "unit": "g" },
  "Yellow Bell Pepper": { "price": 1.00, "per": 100, "unit": "g" },
  "Orange Bell Pepper": { "price": 1.05, "per": 100, "unit": "g" },
  "Sweetcorn": { "price": 0.55, "per": 100, "unit": "g" },
  "Cauliflower": { "price": 0.60, "per": 100, "unit": "g" },
  "Savoy Cabbage": { "price": 0.48, "per": 100, "unit": "g" },
  "Baby Leek": { "price": 0.95, "per": 100, "unit": "g" },
  "Radish": { "price": 0.65, "per": 100, "unit": "g" },
  "Watercress": { "price": 1.40, "per": 100, "unit": "g" },
  "Asparagus": { "price": 0.93, "per": 100, "unit": "g" }, 
  "Fennel": { "price": 1.20, "per": 100, "unit": "g" },
  "Rocket": { "price": 1.10, "per": 100, "unit": "g" },
  "Celery": { "price": 0.45, "per": 100, "unit": "g" },
  "Shiitake Mushrooms": { "price": 2.10, "per": 100, "unit": "g" },
  "Portobello Mushrooms": { "price": 1.70, "per": 100, "unit": "g" },
  "Pomegranate": { "price": 1.50, "per": 100, "unit": "g" },
  "Passionfruit": { "price": 0.40, "per": 100, "unit": "g" },
  "Raspberries": { "price": 2.80, "per": 100, "unit": "g" },
  "Brussels Sprouts": { "price": 0.85, "per": 100, "unit": "g" },
  "Celeriac": { "price": 0.70, "per": 100, "unit": "g" },
  "Chard": { "price": 1.25, "per": 100, "unit": "g" },
  "Edamame Beans": { "price": 1.80, "per": 100, "unit": "g" },
  "Kohlrabi": { "price": 0.90, "per": 100, "unit": "g" },
  "Papaya": { "price": 1.35, "per": 100, "unit": "g" },
  "Peaches": { "price": 1.10, "per": 100, "unit": "g" },
  "Plums": { "price": 1.20, "per": 100, "unit": "g" },
  "Cherries": { "price": 2.80, "per": 100, "unit": "g" },
  "Cranberries": { "price": 3.00, "per": 100, "unit": "g" },
  "Gooseberries": { "price": 2.20, "per": 100, "unit": "g" },
  "Blackberries": { "price": 2.40, "per": 100, "unit": "g" },
  "Mulberries": { "price": 3.10, "per": 100, "unit": "g" },
  "Rhubarb": { "price": 0.95, "per": 100, "unit": "g" },
  "Turnip": { "price": 0.60, "per": 100, "unit": "g" },
  "Parsnip (baby)": { "price": 1.00, "per": 100, "unit": "g" },
  "Pumpkin Seeds": { "price": 2.50, "per": 100, "unit": "g" },
  "Sunflower Seeds": { "price": 2.20, "per": 100, "unit": "g" },
  "Walnuts": { "price": 3.50, "per": 100, "unit": "g" },
  "Almonds": { "price": 3.80, "per": 100, "unit": "g" },
  "Cashews": { "price": 4.20, "per": 100, "unit": "g" },
  "Hazelnuts": { "price": 3.90, "per": 100, "unit": "g" },
  "Pistachios": { "price": 4.50, "per": 100, "unit": "g" },
  "Macadamia Nuts": { "price": 5.00, "per": 100, "unit": "g" },
  "Pecans": { "price": 4.70, "per": 100, "unit": "g" },
  "Brazil Nuts": { "price": 4.80, "per": 100, "unit": "g" },
  "Chestnuts": { "price": 2.50, "per": 100, "unit": "g" },
  "Tiger Nuts": { "price": 3.60, "per": 100, "unit": "g" },
  "Pine Nuts": { "price": 5.20, "per": 100, "unit": "g" },
  "Default": {"price": 1, "per": 100, "unit": "g"}
}

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callGeminiApi = callGeminiApi;
exports.listAvailableModels = listAvailableModels;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
//import dotenv from "dotenv";
//dotenv.config();

// Access the key
//const API_KEY = process.env.GEMINI_API_KEY;
//const API_KEY = "AIzaSyAGePYh6PX1JwXAWRFDbUupdeHEa9HQ8NY";
//const API_KEY = "AIzaSyB-exWSJJ91YNijAsp5KbmUrIAKxRBi9VI";
//const API_KEY = "AIzaSyDrY2kzzsaDXTH2ap-Rohea_qIU9S28bPs";
var API_KEY = "AIzaSyByg-uPjUJkgOD_kqwVzAaWJ4qBbVa82yM";
var MODEL_NAME = "gemini-2.5-flash";
var API_URL = "https://generativelanguage.googleapis.com/v1/models/".concat(MODEL_NAME, ":generateContent?key=").concat(API_KEY);
function callGeminiApi(_x) {
  return _callGeminiApi.apply(this, arguments);
} // Helper function to list available models (for debugging)
function _callGeminiApi() {
  _callGeminiApi = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(prompt) {
    var requestBody, response, _errorData$error, errorData, errorMessage, data, text;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          requestBody = {
            contents: [{
              parts: [{
                text: prompt
              }]
            }],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 1024,
              topP: 0.8,
              topK: 40
            }
          };
          _context.prev = 1;
          _context.next = 4;
          return fetch(API_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
          });
        case 4:
          response = _context.sent;
          if (response.ok) {
            _context.next = 14;
            break;
          }
          _context.next = 8;
          return response.json();
        case 8:
          errorData = _context.sent;
          errorMessage = ((_errorData$error = errorData.error) === null || _errorData$error === void 0 ? void 0 : _errorData$error.message) || 'Unknown error'; // Check for quota errors specifically
          if (!(errorMessage.includes("quota") || errorMessage.includes("Quota exceeded"))) {
            _context.next = 13;
            break;
          }
          console.error("Quota error:", errorMessage);
          return _context.abrupt("return", "error Quota exceeded. The free tier allows 250 requests per day. Please wait for the quota to reset or check usage at https://ai.dev/usage?tab=rate-limit");
        case 13:
          throw new Error("API request failed: ".concat(errorMessage));
        case 14:
          _context.next = 16;
          return response.json();
        case 16:
          data = _context.sent;
          if (!(!data.candidates || !data.candidates[0] || !data.candidates[0].content)) {
            _context.next = 19;
            break;
          }
          throw new Error('Invalid response format from API');
        case 19:
          text = data.candidates[0].content.parts[0].text;
          return _context.abrupt("return", text);
        case 23:
          _context.prev = 23;
          _context.t0 = _context["catch"](1);
          console.error("calling Gemini error:", _context.t0);
          return _context.abrupt("return", "error ".concat(_context.t0.message));
        case 27:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 23]]);
  }));
  return _callGeminiApi.apply(this, arguments);
}
function listAvailableModels() {
  return _listAvailableModels.apply(this, arguments);
} // Uncomment the line below and check browser console to see available models
function _listAvailableModels() {
  _listAvailableModels = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return fetch("https://generativelanguage.googleapis.com/v1/models?key=".concat(API_KEY));
        case 3:
          response = _context2.sent;
          _context2.next = 6;
          return response.json();
        case 6:
          data = _context2.sent;
          console.log("Available models:", data);
          return _context2.abrupt("return", data);
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          console.error("Error listing models:", _context2.t0);
          return _context2.abrupt("return", null);
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 11]]);
  }));
  return _listAvailableModels.apply(this, arguments);
}

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.show_recipe = show_recipe;
var _gemini = require("./gemini.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var british_cuisine = ["Full English Breakfast", "Beans on Toast", "Porridge", "Kippers", "Black Pudding", "Crumpets", "Bacon Sandwich (Bacon Butty)", "Bubble and Squeak", "Smoked Salmon & Scrambled Eggs", "Ploughman’s Lunch", "Fish and Chips", "Cornish Pasty", "Scotch Egg", "Sausage Roll", "Welsh Rarebit", "Jacket Potato", "Chicken and Leek Pie", "Cottage Pie", "Prawn Cocktail", "Roast Beef and Yorkshire Pudding", "Shepherd’s Pie", "Beef Wellington", "Toad in the Hole", "Lamb Shank with Mint Sauce", "Steak and Ale Pie", "Bangers and Mash", "Chicken Tikka Masala", "Fish Pie", "Eton Mess", "Sticky Toffee Pudding", "Bread and Butter Pudding", "Trifle", "Victoria Sponge Cake", "Bakewell Tart", "Spotted Dick", "Apple Crumble", "Banoffee Pie", "Treacle Tart", "Scones with Clotted Cream and Jam"];
var PROMPT = "Output exactly two sections separated by a single blank line:\n\nIngredients:\n- List each ingredient on its own line (one ingredient per line).\n\nRecipe:\n- Provide step-by-step instructions (numbered or bullet points).\n\nKeep the total output within 400 tokens and do not include extra commentary.";
var counter = 0;
var current_cuisine = british_cuisine[counter];
function show_recipe() {
  return _show_recipe.apply(this, arguments);
}
const costs = {
  "Basmati Rice": { "price": 0.20, "per": 100, "unit": "g" },
  "Brown/Long Grain Rice": { "price": 0.15, "per": 100, "unit": "g" },
  "Orzo": { "price": 0.15, "per": 100, "unit": "g" },
  "Quinoa": { "price": 0.36, "per": 100, "unit": "g" },
  "Cous Cous": { "price": 0.32, "per": 100, "unit": "g" },
  "Lasagne sheets": { "price": 0.35, "per": 100, "unit": "g" },
  "Lentils Red/Green": { "price": 0.23, "per": 100, "unit": "g" },
  "Noodles": { "price": 0.50, "per": 100, "unit": "g" },
  "Pasta Dried-Various": { "price": 0.23, "per": 100, "unit": "g" },
  "Pudding Rice": { "price": 0.31, "per": 100, "unit": "g" },
  "Strawberries": { "price": 0.50, "per": 100, "unit": "g" },
  "Strong flour": { "price": 0.08, "per": 100, "unit": "g" },
  "Gluten free flour": { "price": 0.60, "per": 100, "unit": "g" },
  "Polenta flour": { "price": 0.17, "per": 100, "unit": "g" },
  "Bread roll/bap mix": { "price": 0.20, "per": 100, "unit": "g" },
  "Baking Powder": { "price": 0.35, "per": 100, "unit": "g" },
  "Bicarbonate of Soda": { "price": 0.28, "per": 100, "unit": "g" },
  "Cornflour": { "price": 0.10, "per": 100, "unit": "g" },
  "Dates": { "price": 0.25, "per": 100, "unit": "g" },
  "Desiccated Coconut": { "price": 0.55, "per": 100, "unit": "g" },
  "Dried Apricots": { "price": 0.50, "per": 100, "unit": "g" },
  "Dried Fruit (other)": { "price": 0.30, "per": 100, "unit": "g" },
  "Dried Yeast": { "price": 0.52, "per": 100, "unit": "g" },
  "Food Colourings": { "price": 0.03, "per": 10, "unit": "ml" },
  "Glacé Cherries": { "price": 0.50, "per": 100, "unit": "g" },
  "Lemon Juice": { "price": 0.02, "per": 10, "unit": "ml" },
  "Rolled Oats": { "price": 0.16, "per": 100, "unit": "g" },
  "Vegetable Suet": { "price": 0.46, "per": 100, "unit": "g" },
  "Stuffing Mix": { "price": 0.14, "per": 100, "unit": "g" },
  "Suet Mix": { "price": 0.13, "per": 100, "unit": "g" },
  "Madras Curry Powder": { "price": 0.24, "per": 10, "unit": "g" },
  "Black Treacle": { "price": 0.18, "per": 100, "unit": "g" },
  "Golden Syrup": { "price": 0.15, "per": 100, "unit": "g" },
  "Sugar all types": { "price": 0.15, "per": 100, "unit": "g" },
  "Nutmeg": { "price": 0.20, "per": 10, "unit": "g" },
  "Clear Honey": { "price": 0.44, "per": 100, "unit": "g" },
  "Fruit Jam/Mincemeat": { "price": 0.20, "per": 100, "unit": "g" },
  "Lemon Curd": { "price": 0.23, "per": 100, "unit": "g" },
  "Marmalade": { "price": 0.20, "per": 100, "unit": "g" },
  "Cajun seasoning": { "price": 0.08, "per": 10, "unit": "g" },
  "Coffee": { "price": 2.90, "per": 100, "unit": "g" },
  "Jerk seasoning": { "price": 0.12, "per": 10, "unit": "g" },
  "Butter": { "price": 1.00, "per": 100, "unit": "g" },
  "Margarine/white fat": { "price": 0.34, "per": 100, "unit": "g" },
  "Vegetable Oil": { "price": 0.42, "per": 100, "unit": "ml" },
  "Evaporated milk": { "price": 0.39, "per": 100, "unit": "g" },
  "Cheddar cheese": { "price": 0.59, "per": 100, "unit": "g" },
  "Mozzarella": { "price": 0.52, "per": 100, "unit": "g" },
  "Cream Cheese": { "price": 0.47, "per": 100, "unit": "g" },
  "Crème Fraiche- Low Fat": { "price": 0.45, "per": 100, "unit": "g" },
  "Eggs": { "price": 0.24, "per": 1, "unit": "each" },
  "Tomato puree": { "price": 0.20, "per": 100, "unit": "g" },
  "Tomato coulis": { "price": 0.20, "per": 100, "unit": "g" },
  "Halloumi": { "price": 1.02, "per": 100, "unit": "g" },
  "Mayonnaise": { "price": 0.22, "per": 100, "unit": "g" },
  "Natural Yoghurt": { "price": 0.20, "per": 100, "unit": "g" },
  "Parmesan Cheese": { "price": 1.80, "per": 100, "unit": "g" },
  "Milk": { "price": 0.07, "per": 100, "unit": "ml" },
  "Sour Cream": { "price": 0.35, "per": 100, "unit": "g" },
  "Soya Milk": { "price": 0.16, "per": 100, "unit": "ml" },
  "Vegan mayonnaise": { "price": 0.74, "per": 100, "unit": "g" },
  "Apples": { "price": 0.18, "per": 100, "unit": "g" },
  "Aubergine": { "price": 0.30, "per": 100, "unit": "g" },
  "Beef tomato": { "price": 0.27, "per": 100, "unit": "g" },
  "Banana (flesh only)": { "price": 0.19, "per": 100, "unit": "g" },
  "Tomatoes": { "price": 0.16, "per": 100, "unit": "g" },
  "Blueberries": { "price": 1.72, "per": 100, "unit": "g" },
  "Beetroot": { "price": 0.15, "per": 100, "unit": "g" },
  "Grapes": { "price": 0.46, "per": 100, "unit": "g" },
  "Broccoli": { "price": 0.22, "per": 100, "unit": "g" },
  "Carrots": { "price": 0.07, "per": 100, "unit": "g" },
  "Kiwi fruit": { "price": 0.30, "per": 100, "unit": "g" },
  "Cherry tomato": { "price": 0.38, "per": 100, "unit": "g" },
  "Mango": { "price": 0.50, "per": 100, "unit": "g" },
  "Courgettes": { "price": 0.23, "per": 100, "unit": "g" },
  "Pears": { "price": 0.20, "per": 100, "unit": "g" },
  "Cucumber": { "price": 0.20, "per": 100, "unit": "g" },
  "Iceberg/mixed leaves": { "price": 0.18, "per": 100, "unit": "g" },
  "Kale": { "price": 0.50, "per": 100, "unit": "g" },
  "Watermelon": { "price": 0.11, "per": 100, "unit": "g" },
  "Leeks": { "price": 0.19, "per": 100, "unit": "g" },
  "Butternut Squash": { "price": 0.14, "per": 100, "unit": "g" },
  "Parsnips": { "price": 0.20, "per": 100, "unit": "g" },
  "Sugar Snaps": { "price": 0.66, "per": 100, "unit": "g" },
  "Lettuce": { "price": 0.26, "per": 100, "unit": "g" },
  "Mushrooms": { "price": 0.26, "per": 100, "unit": "g" },
  "Onions": { "price": 0.09, "per": 100, "unit": "g" },
  "Balsamic Vinegar": { "price": 0.50, "per": 100, "unit": "ml" },
  "Peppers": { "price": 0.23, "per": 100, "unit": "g" },
  "Chilli Cayenne": { "price": 0.10, "per": 10, "unit": "g" },
  "Potatoes": { "price": 0.14, "per": 100, "unit": "g" },
  "Cinnamon": { "price": 0.09, "per": 10, "unit": "g" },
  "Spinach": { "price": 0.50, "per": 100, "unit": "g" },
  "Cooking Salt": { "price": 0.02, "per": 10, "unit": "g" },
  "Sweet Potato": { "price": 0.20, "per": 100, "unit": "g" },
  "Fresh Basil/coriander": { "price": 0.30, "per": 10, "unit": "g" },
  "Fresh Garlic": { "price": 0.12, "per": 10, "unit": "g" },
  "Brown/white sliced bread": { "price": 0.21, "per": 100, "unit": "g" },
  "Fresh Parsley": { "price": 0.15, "per": 100, "unit": "g" },
  "Wrap/chapati - 10\"": { "price": 0.15, "per": 1, "unit": "each" },
  "Grnd Black Pepper": { "price": 0.11, "per": 10, "unit": "g" },
  "Wrap/chapati - 12\"": { "price": 0.18, "per": 1, "unit": "each" },
  "Pitta bread": { "price": 0.12, "per": 1, "unit": "each" },
  "Grnd White Pepper": { "price": 0.11, "per": 10, "unit": "g" },
  "Ground Ginger": { "price": 0.09, "per": 10, "unit": "g" },
  "Ground Mixed Spice": { "price": 0.09, "per": 10, "unit": "g" },
  "Diced beef": { "price": 0.78, "per": 100, "unit": "g" },
  "Ground Paprika": { "price": 0.07, "per": 10, "unit": "g" },
  "Beef mince": { "price": 0.57, "per": 100, "unit": "g" },
  "Chicken drumstick": { "price": 0.23, "per": 100, "unit": "g" },
  "Mint Sauce": { "price": 0.30, "per": 100, "unit": "g" },
  "Chicken breast fillet": { "price": 0.69, "per": 100, "unit": "g" },
  "Mixed Herbs": { "price": 0.15, "per": 10, "unit": "g" },
  "Diced chicken": { "price": 0.53, "per": 100, "unit": "g" },
  "Mustard Powder": { "price": 0.22, "per": 10, "unit": "g" },
  "Chicken thigh (boneless)": { "price": 0.60, "per": 100, "unit": "g" },
  "Chicken mince": { "price": 0.92, "per": 100, "unit": "g" },
  "Sweet Pickle": { "price": 0.36, "per": 100, "unit": "g" },
  "Diced lamb": { "price": 1.08, "per": 100, "unit": "g" },
  "Vinegar": { "price": 0.04, "per": 100, "unit": "ml" },
  "Lamb mince": { "price": 0.68, "per": 100, "unit": "g" },
  "Turkey fillet": { "price": 0.71, "per": 100, "unit": "g" },
  "Diced turkey": { "price": 0.65, "per": 100, "unit": "g" },
  "Turkey mince": { "price": 0.87, "per": 100, "unit": "g" },
  "Tandoori seasoning": { "price": 0.08, "per": 10, "unit": "g" },
  "Diced pork": { "price": 0.71, "per": 100, "unit": "g" },
  "Pork mince": { "price": 0.52, "per": 100, "unit": "g" },
  "Piri Piri seasoning": { "price": 0.12, "per": 10, "unit": "g" },
  "Salmon": { "price": 1.80, "per": 100, "unit": "g" },
  "Pollock": { "price": 0.89, "per": 100, "unit": "g" },
  "Condensed milk": { "price": 0.27, "per": 100, "unit": "g" },
  "Smoked Haddock": { "price": 1.42, "per": 100, "unit": "g" },
  "Coconut milk": { "price": 0.21, "per": 100, "unit": "g" },
  "Quorn Fillet": { "price": 0.75, "per": 100, "unit": "g" },
  "Baked beans": { "price": 0.10, "per": 100, "unit": "g" },
  "Quorn Mince": { "price": 0.71, "per": 100, "unit": "g" },
  "Other tinned beans/pulses": { "price": 0.09, "per": 100, "unit": "g" },
  "Tinned tomatoes": { "price": 0.09, "per": 100, "unit": "g" },
  "Cake cases": { "price": 0.15, "per": 1, "unit": "each" },
  "Muffin tulips": { "price": 0.27, "per": 1, "unit": "each" },
  "Greaseproof paper": { "price": 0.02, "per": 1, "unit": "sheet" },
  "Avocado": { "price": 1.20, "per": 100, "unit": "g" },
  "Baby Spinach": { "price": 1.75, "per": 100, "unit": "g" },
  "Curly Kale": { "price": 1.30, "per": 100, "unit": "g" },
  "Butternut Pumpkin": { "price": 0.90, "per": 100, "unit": "g" },
  "Red Cabbage": { "price": 0.45, "per": 100, "unit": "g" },
  "Green Beans": { "price": 1.10, "per": 100, "unit": "g" },
  "Zucchini (Courgette)": { "price": 0.80, "per": 100, "unit": "g" },
  "Yellow Bell Pepper": { "price": 1.00, "per": 100, "unit": "g" },
  "Orange Bell Pepper": { "price": 1.05, "per": 100, "unit": "g" },
  "Sweetcorn": { "price": 0.55, "per": 100, "unit": "g" },
  "Cauliflower": { "price": 0.60, "per": 100, "unit": "g" },
  "Savoy Cabbage": { "price": 0.48, "per": 100, "unit": "g" },
  "Baby Leek": { "price": 0.95, "per": 100, "unit": "g" },
  "Radish": { "price": 0.65, "per": 100, "unit": "g" },
  "Watercress": { "price": 1.40, "per": 100, "unit": "g" },
  "Asparagus": { "price": 0.93, "per": 100, "unit": "g" }, 
  "Fennel": { "price": 1.20, "per": 100, "unit": "g" },
  "Rocket": { "price": 1.10, "per": 100, "unit": "g" },
  "Celery": { "price": 0.45, "per": 100, "unit": "g" },
  "Shiitake Mushrooms": { "price": 2.10, "per": 100, "unit": "g" },
  "Portobello Mushrooms": { "price": 1.70, "per": 100, "unit": "g" },
  "Pomegranate": { "price": 1.50, "per": 100, "unit": "g" },
  "Passionfruit": { "price": 0.40, "per": 100, "unit": "g" },
  "Raspberries": { "price": 2.80, "per": 100, "unit": "g" },
  "Brussels Sprouts": { "price": 0.85, "per": 100, "unit": "g" },
  "Celeriac": { "price": 0.70, "per": 100, "unit": "g" },
  "Chard": { "price": 1.25, "per": 100, "unit": "g" },
  "Edamame Beans": { "price": 1.80, "per": 100, "unit": "g" },
  "Kohlrabi": { "price": 0.90, "per": 100, "unit": "g" },
  "Papaya": { "price": 1.35, "per": 100, "unit": "g" },
  "Peaches": { "price": 1.10, "per": 100, "unit": "g" },
  "Plums": { "price": 1.20, "per": 100, "unit": "g" },
  "Cherries": { "price": 2.80, "per": 100, "unit": "g" },
  "Cranberries": { "price": 3.00, "per": 100, "unit": "g" },
  "Gooseberries": { "price": 2.20, "per": 100, "unit": "g" },
  "Blackberries": { "price": 2.40, "per": 100, "unit": "g" },
  "Mulberries": { "price": 3.10, "per": 100, "unit": "g" },
  "Rhubarb": { "price": 0.95, "per": 100, "unit": "g" },
  "Turnip": { "price": 0.60, "per": 100, "unit": "g" },
  "Parsnip (baby)": { "price": 1.00, "per": 100, "unit": "g" },
  "Pumpkin Seeds": { "price": 2.50, "per": 100, "unit": "g" },
  "Sunflower Seeds": { "price": 2.20, "per": 100, "unit": "g" },
  "Walnuts": { "price": 3.50, "per": 100, "unit": "g" },
  "Almonds": { "price": 3.80, "per": 100, "unit": "g" },
  "Cashews": { "price": 4.20, "per": 100, "unit": "g" },
  "Hazelnuts": { "price": 3.90, "per": 100, "unit": "g" },
  "Pistachios": { "price": 4.50, "per": 100, "unit": "g" },
  "Macadamia Nuts": { "price": 5.00, "per": 100, "unit": "g" },
  "Pecans": { "price": 4.70, "per": 100, "unit": "g" },
  "Brazil Nuts": { "price": 4.80, "per": 100, "unit": "g" },
  "Chestnuts": { "price": 2.50, "per": 100, "unit": "g" },
  "Tiger Nuts": { "price": 3.60, "per": 100, "unit": "g" },
  "Pine Nuts": { "price": 5.20, "per": 100, "unit": "g" },
  "Default": {"price": 1, "per": 100, "unit": "g"}
}


function parseIngredientString(ingredientStr) {
  return ingredientStr.split(",").map(item => {
    // Match number, optional space, optional unit, then ingredient name (preserve spaces)
    const match = item.trim().match(/^([\d.]+)\s*([a-zA-Z]+)?\s*(.+)$/);
    if (!match) return null;
    const [, amount, unit, name] = match;
    return { 
      amount: parseFloat(amount), 
      unit: unit ? unit.toLowerCase() : null, 
      name: name.trim() // preserve spaces
    };
  }).filter(Boolean);
}

function convertUnit(amount, fromUnit, toUnit) {
  if (!fromUnit || !toUnit) return null;
  fromUnit = fromUnit.toLowerCase();
  toUnit = toUnit.toLowerCase();

  if (fromUnit === toUnit) return amount;
  if ((fromUnit === "ml" && toUnit === "g") || (fromUnit === "g" && toUnit === "ml")) {
    return amount; // rough approximation
  }
  return null; // unknown conversion
}

function calculateTotalCost(ingredientStr) {
    console.log(ingredientStr)
  const ingredients = parseIngredientString(ingredientStr);
  let totalCost = 0;

  for (const ing of ingredients) {
    // Find first entry in costs that includes the ingredient name (case-insensitive)
    let costEntry = Object.entries(costs).find(
      ([key]) => key.toLowerCase().includes(ing.name.toLowerCase())
    );
    if (costEntry) costEntry = costEntry[1];
    else {
        costEntry = costs["Default"]; // fallback
    }

    let amountInCostUnit = ing.amount;
    if (ing.unit && costEntry.unit) {
      const converted = convertUnit(ing.amount, ing.unit, costEntry.unit);
      if (converted !== null) amountInCostUnit = converted;
      else { // unit not identifiable, set £1
        totalCost += 0.78;
        continue;
      }
    } else if (!ing.unit) { // missing unit, set £1
      totalCost += 0.78;
      continue;
    }

    const cost = (amountInCostUnit / costEntry.per) * costEntry.price;
    totalCost += cost;
  }

  return parseFloat(totalCost.toFixed(2));
}

function CostPerPerson(ingredientStr, portions){
    return parseFloat((calculateTotalCost(ingredientStr)/portions).toFixed(2))
}
function calculateTime(str) {
  const count = (str.match(/\n/g) || []).length;
  return count * 4/2;
}

const ED_apikey = "44058cdda3c9b47d8199476afe630d5b"
const ED_appid = "f4dac682"
const ED_apikey2 = "62b677ce52ffdbd9df71f795cd290513"
const ED_appid2 = "a86a5d3b"
const ED_apikey3 = "35b4e7731ad11d8057ac13f071a3bb65"
const ED_appid3 = "dce4808c"
const ED_apikey4 = "92d5475bcf17d4340a538aa770b2f206"
const ED_appid4 = "7db14b31"
const ED_apikey5 = "b6f6357af10e5776a5af294dd86fcda3"
const ED_appid5 = "cb2758a4"
const ED_apikey6 = "cf5b3d027dbef78e31bce528632c9def"
const ED_appid6 = "2c951abb"
async function getNutritionFacts(ingredient) {
  const url = `https://api.edamam.com/api/nutrition-data?app_id=${ED_appid2}&app_key=${ED_apikey2}&nutrition-type=cooking&ingr=${encodeURIComponent(ingredient)}`;

  const response = await fetch(url);
  console.log(`GET ${url} → ${response.status} ${response.statusText}`);

  if (!response.ok) {
    console.error("Request failed with status:", response.status);
    return null;
  }

  const data = await response.json();

  const parsed = data.ingredients?.[0]?.parsed?.[0];
  if (!parsed || !parsed.nutrients) {
    console.log("No nutrient data found for:", ingredient);
    return {
      calories: 0,
      totalFat: 0,
      saturatedFat: 0,
      transFat: 0,
      cholesterol: 0,
      sodium: 0,
      totalCarbs: 0,
      sugars: 0,
      protein: 0,
    };
  }

  const nutrients = parsed.nutrients;
  const safeNum = (x) => Number(x) || 0;

  return {
    calories: safeNum(nutrients.ENERC_KCAL?.quantity),
    totalFat: safeNum(nutrients.FAT?.quantity),
    saturatedFat: safeNum(nutrients.FASAT?.quantity),
    transFat: safeNum(nutrients.FATRN?.quantity),
    cholesterol: safeNum(nutrients.CHOLE?.quantity),
    sodium: safeNum(nutrients.NA?.quantity),
    totalCarbs: safeNum(nutrients.CHOCDF?.quantity),
    sugars: safeNum(nutrients.SUGAR?.quantity),
    protein: safeNum(nutrients.PROCNT?.quantity),
  };
}

async function getTotalNutrition(ingredientsStr, portions) {
  const ingredients = ingredientsStr
    .split(",")
    .map(i => i.trim())
    .filter(Boolean)
    .map(i => i.includes("g") || /\d/.test(i)
      ? i.replace(/^-+\s*/, "")
      : "50g " + i.replace(/^-+\s*/, "")
    );

  const total = {
    calories: 0,
    totalFat: 0,
    saturatedFat: 0,
    transFat: 0,
    cholesterol: 0,
    sodium: 0,
    totalCarbs: 0,
    sugars: 0,
    protein: 0,
  };

  for (const item of ingredients) {
    const facts = await getNutritionFacts(item);
    if (facts) {
      for (const key in total) {
        total[key] += Number(facts[key]) || 0;
      }
    }
  }

  for (const key in total) {
    total[key] = Math.round((total[key] / portions) * 10) / 10;
  }

  return total;
}

function updateNutritionFacts(nutrition) {
  console.log(nutrition)
  const nf = document.getElementById("nutrition-facts");

  const dailyMax = {
    totalFat: 78,         // g
    saturatedFat: 20,     // g
    cholesterol: 300,     // mg
    sodium: 2300,         // mg
    totalCarbs: 275,      // g
    protein: 50,          // g
    calories: 2000        // kcal baseline
  };

  const daily = {
    totalFat: (nutrition.totalFat / dailyMax.totalFat) * 100,
    saturatedFat: (nutrition.saturatedFat / dailyMax.saturatedFat) * 100,
    cholesterol: (nutrition.cholesterol / dailyMax.cholesterol) * 100,
    sodium: (nutrition.sodium / dailyMax.sodium) * 100,
    totalCarbs: (nutrition.totalCarbs / dailyMax.totalCarbs) * 100,
    protein: (nutrition.protein / dailyMax.protein) * 100
  };

  const format = (val, unit = "") => `${Math.round(val)}${unit}`;
  const dailyFormat = val => `${Math.round(val)}%`;

  // Calories
  nf.querySelector(".calories .value").textContent = format(nutrition.calories);

  // Total Fat
  const fatLine = nf.querySelector(".total-fat");
  if (fatLine) {
    fatLine.querySelector(".value").textContent = format(nutrition.totalFat, "g");
    fatLine.querySelector(".daily").textContent = dailyFormat(daily.totalFat);
  }

  // Saturated Fat
  const satFat = nf.querySelector(".sat-fat");
  if (satFat) {
    satFat.querySelector(".value").textContent = format(nutrition.saturatedFat, "g");
    satFat.querySelector(".daily").textContent = dailyFormat(daily.saturatedFat);
  }

  // Trans Fat
  const transFat = nf.querySelector(".trans-fat");
  if (transFat) {
    transFat.querySelector(".value").textContent = format(nutrition.transFat, "g");
  }

  // Cholesterol
  const chol = nf.querySelector(".cholesterol");
  if (chol) {
    chol.querySelector(".value").textContent = format(nutrition.cholesterol, "mg");
    chol.querySelector(".daily").textContent = dailyFormat(daily.cholesterol);
  }

  // Sodium
  const sodium = nf.querySelector(".sodium");
  if (sodium) {
    sodium.querySelector(".value").textContent = format(nutrition.sodium, "mg");
    sodium.querySelector(".daily").textContent = dailyFormat(daily.sodium);
  }

  // Total Carbs
  const carbs = nf.querySelector(".carbs");
  if (carbs) {
    carbs.querySelector(".value").textContent = format(nutrition.totalCarbs, "g");
    carbs.querySelector(".daily").textContent = dailyFormat(daily.totalCarbs);
  }

  // Sugars
  const sugar = nf.querySelector(".sugars");
  if (sugar) {
    sugar.querySelector(".value").textContent = format(nutrition.sugars, "g");
  }

  // Protein
  const protein = nf.querySelector(".protein");
  if (protein) {
    protein.querySelector(".value").textContent = format(nutrition.protein, "g");
    const dailyEl = protein.querySelector(".daily");
    if (dailyEl) dailyEl.textContent = dailyFormat(daily.protein);
  }
}


function _show_recipe() {
  _show_recipe = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var text, ingredientDisplay, recipe_list, temp, recipeDisplay, title, prompt, recipe, errorMsg, recipeHtml, parts, ingredients_styled, recipes_styled, total_time, total_cost;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          text = "";
          ingredientDisplay = document.getElementById("ingredients-p");
          recipeDisplay = document.getElementById("recipe-p");
          title = document.getElementById("food");
          if (!(!ingredientDisplay || !recipeDisplay || !title)) {
            _context.next = 7;
            break;
          }
          console.error("Missing required DOM elements");
          return _context.abrupt("return");
        case 7:
          // Use current counter value first, then increment for next time
          current_cuisine = british_cuisine[counter];
          console.log("current_cuisine ".concat(current_cuisine));
          counter++;
          if (counter >= british_cuisine.length) {
            counter = 0;
          }

          // Update title first, then use it for the prompt
          title.innerHTML = current_cuisine;
          prompt = "Please provide a simple recipe for ".concat(current_cuisine, " ").concat(PROMPT);
          _context.next = 15;
          return (0, _gemini.callGeminiApi)(prompt);
        case 15:
          recipe = _context.sent;
          if (!(!recipe || recipe.startsWith("error"))) {
            _context.next = 21;
            break;
          }
          errorMsg = recipe || "no results";
          ingredientDisplay.innerHTML = "<p style=\"color: red;\">Error: ".concat(errorMsg, "</p>");
          recipeDisplay.innerHTML = "";
          return _context.abrupt("return");
        case 21:
          temp = recipe.split("Recipe:");
          recipe_list = recipe.replace(/\n/g, ', ')
          recipeHtml = recipe.replace(/\n/g, '<br>');
          parts = recipeHtml.split("Recipe:");
          ingredients_styled = markdownStyling(parts[0].replace(/^Ingredients:\s*/, ""));
          recipes_styled = markdownStyling(parts[1]);
          ingredientDisplay.innerHTML = ingredients_styled;
          recipeDisplay.innerHTML = recipes_styled || "";
          total_time = calculateTime(temp[1])
          document.querySelector("#total-time").querySelector(".value").textContent = total_time
          total_cost = calculateTotalCost(temp[0].replace(/\n/g, ', '))
          document.querySelector("#total-cost").querySelector(".value").textContent = total_cost;
          /*
          (async () => {
            const totals = await getTotalNutrition(temp[0].replace(/\n/g, ', '), portions);
            updateNutritionFacts(totals);
          })();
          */
          case 27:
          total_time = calculateTime(recipe)
          document.querySelector("#total-time").querySelector(".value").textContent = total_time
          total_cost = calculateTotalCost(recipe_list)
          document.querySelector("#total-cost").querySelector(".value").textContent = total_cost
        case "end":
          return _context.stop();
        

      }
    }, _callee);
  }));
  return _show_recipe.apply(this, arguments);
}
;
function markdownStyling(input) {
  console.log("styling");
  var html = input;
    // replace **text** with <em>text</em>
    html = html.replace(/\*\*(.*?)\*\*/g, '<em>$1</em>');

    // split into lines
    const lines = html.split(/\r?\n/);
    let result = '';
    let inList = false;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        // match bullet (- ) or numbered (1. 2. etc.)
        if (/^(-|\d+\.)\s+/.test(line)) {
            if (!inList) {
                result += '<ol>';
                inList = true;
            }
            result += '<li>' + line.replace(/^(-|\d+\.)\s+/, '') + '</li>';
        } else {
            if (inList) {
                result += '</ol>';
                inList = false;
            }
            result += line;
        }
    }

    if (inList) result += '</ol>'; // close if file ends mid-list

    return result;
}

},{"./gemini.js":6}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTotalNutrition = getTotalNutrition;
exports.updateNutritionFacts = updateNutritionFacts;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var apikey = "44058cdda3c9b47d8199476afe630d5b";
var appid = "f4dac682";
function getNutritionFacts(_x) {
  return _getNutritionFacts.apply(this, arguments);
} // Aggregate totals from multiple ingredients
function _getNutritionFacts() {
  _getNutritionFacts = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ingredient) {
    var _data$ingredients, _nutrients$ENERC_KCAL, _nutrients$FAT, _nutrients$FASAT, _nutrients$FATRN, _nutrients$CHOLE, _nutrients$NA, _nutrients$CHOCDF, _nutrients$SUGAR, _nutrients$PROCNT;
    var url, response, data, parsed, nutrients;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          url = "https://api.edamam.com/api/nutrition-data?app_id=".concat(appid, "&app_key=").concat(apikey, "&nutrition-type=cooking&ingr=").concat(encodeURIComponent(ingredient));
          _context.next = 3;
          return fetch(url);
        case 3:
          response = _context.sent;
          _context.next = 6;
          return response.json();
        case 6:
          data = _context.sent;
          // Defensive parsing
          parsed = (_data$ingredients = data.ingredients) === null || _data$ingredients === void 0 || (_data$ingredients = _data$ingredients[0]) === null || _data$ingredients === void 0 || (_data$ingredients = _data$ingredients.parsed) === null || _data$ingredients === void 0 ? void 0 : _data$ingredients[0];
          if (!(!parsed || !parsed.nutrients)) {
            _context.next = 11;
            break;
          }
          console.log("No nutrient data found for:", ingredient);
          return _context.abrupt("return", null);
        case 11:
          nutrients = parsed.nutrients;
          return _context.abrupt("return", {
            calories: ((_nutrients$ENERC_KCAL = nutrients.ENERC_KCAL) === null || _nutrients$ENERC_KCAL === void 0 ? void 0 : _nutrients$ENERC_KCAL.quantity) || 0,
            totalFat: ((_nutrients$FAT = nutrients.FAT) === null || _nutrients$FAT === void 0 ? void 0 : _nutrients$FAT.quantity) || 0,
            saturatedFat: ((_nutrients$FASAT = nutrients.FASAT) === null || _nutrients$FASAT === void 0 ? void 0 : _nutrients$FASAT.quantity) || 0,
            transFat: ((_nutrients$FATRN = nutrients.FATRN) === null || _nutrients$FATRN === void 0 ? void 0 : _nutrients$FATRN.quantity) || 0,
            cholesterol: ((_nutrients$CHOLE = nutrients.CHOLE) === null || _nutrients$CHOLE === void 0 ? void 0 : _nutrients$CHOLE.quantity) || 0,
            sodium: ((_nutrients$NA = nutrients.NA) === null || _nutrients$NA === void 0 ? void 0 : _nutrients$NA.quantity) || 0,
            totalCarbs: ((_nutrients$CHOCDF = nutrients.CHOCDF) === null || _nutrients$CHOCDF === void 0 ? void 0 : _nutrients$CHOCDF.quantity) || 0,
            sugars: ((_nutrients$SUGAR = nutrients.SUGAR) === null || _nutrients$SUGAR === void 0 ? void 0 : _nutrients$SUGAR.quantity) || 0,
            protein: ((_nutrients$PROCNT = nutrients.PROCNT) === null || _nutrients$PROCNT === void 0 ? void 0 : _nutrients$PROCNT.quantity) || 0
          });
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getNutritionFacts.apply(this, arguments);
}
function getTotalNutrition(_x2, _x3) {
  return _getTotalNutrition.apply(this, arguments);
}
function _getTotalNutrition() {
  _getTotalNutrition = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(ingredientsStr, portions) {
    var ingredients, total, _iterator, _step, item, facts, _key, key;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          ingredients = ingredientsStr.split(",").map(function (i) {
            return i.trim();
          }).filter(Boolean);
          total = {
            calories: 0,
            totalFat: 0,
            saturatedFat: 0,
            transFat: 0,
            cholesterol: 0,
            sodium: 0,
            totalCarbs: 0,
            sugars: 0,
            protein: 0
          };
          _iterator = _createForOfIteratorHelper(ingredients);
          _context2.prev = 3;
          _iterator.s();
        case 5:
          if ((_step = _iterator.n()).done) {
            _context2.next = 13;
            break;
          }
          item = _step.value;
          _context2.next = 9;
          return getNutritionFacts(item);
        case 9:
          facts = _context2.sent;
          if (facts) {
            for (_key in total) {
              total[_key] += facts[_key] || 0;
            }
          }
        case 11:
          _context2.next = 5;
          break;
        case 13:
          _context2.next = 18;
          break;
        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](3);
          _iterator.e(_context2.t0);
        case 18:
          _context2.prev = 18;
          _iterator.f();
          return _context2.finish(18);
        case 21:
          // Round to 1 decimal for sanity
          for (key in total) {
            total[key] = Math.round(total[key] * 10) / 10 / portions;
          }
          return _context2.abrupt("return", total);
        case 23:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[3, 15, 18, 21]]);
  }));
  return _getTotalNutrition.apply(this, arguments);
}
function updateNutritionFacts(nutrition) {
  var nf = document.getElementById("nutrition-facts");
  var dailyMax = {
    totalFat: 78,
    // g
    saturatedFat: 20,
    // g
    cholesterol: 300,
    // mg
    sodium: 2300,
    // mg
    totalCarbs: 275,
    // g
    protein: 50,
    // g
    calories: 2000 // kcal baseline
  };
  var daily = {
    totalFat: nutrition.totalFat / dailyMax.totalFat * 100,
    saturatedFat: nutrition.saturatedFat / dailyMax.saturatedFat * 100,
    cholesterol: nutrition.cholesterol / dailyMax.cholesterol * 100,
    sodium: nutrition.sodium / dailyMax.sodium * 100,
    totalCarbs: nutrition.totalCarbs / dailyMax.totalCarbs * 100,
    protein: nutrition.protein / dailyMax.protein * 100
  };
  var format = function format(val) {
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    return "".concat(Math.round(val)).concat(unit);
  };
  var dailyFormat = function dailyFormat(val) {
    return "".concat(Math.round(val), "%");
  };

  // Calories
  nf.querySelector(".calories .value").textContent = format(nutrition.calories);

  // Total Fat
  var fatLine = nf.querySelector(".total-fat");
  if (fatLine) {
    fatLine.querySelector(".value").textContent = format(nutrition.totalFat, "g");
    fatLine.querySelector(".daily").textContent = dailyFormat(daily.totalFat);
  }

  // Saturated Fat
  var satFat = nf.querySelector(".sat-fat");
  if (satFat) {
    satFat.querySelector(".value").textContent = format(nutrition.saturatedFat, "g");
    satFat.querySelector(".daily").textContent = dailyFormat(daily.saturatedFat);
  }

  // Trans Fat
  var transFat = nf.querySelector(".trans-fat");
  if (transFat) {
    transFat.querySelector(".value").textContent = format(nutrition.transFat, "g");
  }

  // Cholesterol
  var chol = nf.querySelector(".cholesterol");
  if (chol) {
    chol.querySelector(".value").textContent = format(nutrition.cholesterol, "mg");
    chol.querySelector(".daily").textContent = dailyFormat(daily.cholesterol);
  }

  // Sodium
  var sodium = nf.querySelector(".sodium");
  if (sodium) {
    sodium.querySelector(".value").textContent = format(nutrition.sodium, "mg");
    sodium.querySelector(".daily").textContent = dailyFormat(daily.sodium);
  }

  // Total Carbs
  var carbs = nf.querySelector(".carbs");
  if (carbs) {
    carbs.querySelector(".value").textContent = format(nutrition.totalCarbs, "g");
    carbs.querySelector(".daily").textContent = dailyFormat(daily.totalCarbs);
  }

  // Sugars
  var sugar = nf.querySelector(".sugars");
  if (sugar) {
    sugar.querySelector(".value").textContent = format(nutrition.sugars, "g");
  }

  // Protein
  var protein = nf.querySelector(".protein");
  if (protein) {
    protein.querySelector(".value").textContent = format(nutrition.protein, "g");
    var dailyEl = protein.querySelector(".daily");
    if (dailyEl) dailyEl.textContent = dailyFormat(daily.protein);
  }
}

/* Example
(async () => {
  const totals = await getTotalNutrition("100g eggs, 500ml milk", 2);
  updateNutritionFacts(totals);
})();
*/

},{}]},{},[1]);
