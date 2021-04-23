exports.ids = ["vendors~graph-index-module"];
exports.modules = {

/***/ "+mtc":
/*!******************************************************!*\
  !*** ./node_modules/d3-dispatch/dist/d3-dispatch.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://d3js.org/d3-dispatch/ v2.0.0 Copyright 2020 Mike Bostock
(function (global, factory) {
 true ? factory(exports) :
undefined;
}(this, function (exports) { 'use strict';

var noop = {value: () => {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

exports.dispatch = dispatch;

Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ }),

/***/ "5Yqy":
/*!**********************************************!*\
  !*** ./node_modules/d3-ease/dist/d3-ease.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://d3js.org/d3-ease/ v2.0.0 Copyright 2020 Mike Bostock
(function (global, factory) {
 true ? factory(exports) :
undefined;
}(this, function (exports) { 'use strict';

const linear = t => +t;

function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return t * (2 - t);
}

function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}

function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

var exponent = 3;

var polyIn = (function custom(e) {
  e = +e;

  function polyIn(t) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;

  return polyIn;
})(exponent);

var polyOut = (function custom(e) {
  e = +e;

  function polyOut(t) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;

  return polyOut;
})(exponent);

var polyInOut = (function custom(e) {
  e = +e;

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;

  return polyInOut;
})(exponent);

var pi = Math.PI,
    halfPi = pi / 2;

function sinIn(t) {
  return (+t === 1) ? 1 : 1 - Math.cos(t * halfPi);
}

function sinOut(t) {
  return Math.sin(t * halfPi);
}

function sinInOut(t) {
  return (1 - Math.cos(pi * t)) / 2;
}

// tpmt is two power minus ten times t scaled to [0,1]
function tpmt(x) {
  return (Math.pow(2, -10 * x) - 0.0009765625) * 1.0009775171065494;
}

function expIn(t) {
  return tpmt(1 - +t);
}

function expOut(t) {
  return 1 - tpmt(t);
}

function expInOut(t) {
  return ((t *= 2) <= 1 ? tpmt(1 - t) : 2 - tpmt(t - 1)) / 2;
}

function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}

function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}

function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}

var b1 = 4 / 11,
    b2 = 6 / 11,
    b3 = 8 / 11,
    b4 = 3 / 4,
    b5 = 9 / 11,
    b6 = 10 / 11,
    b7 = 15 / 16,
    b8 = 21 / 22,
    b9 = 63 / 64,
    b0 = 1 / b1 / b1;

function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}

function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}

function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}

var overshoot = 1.70158;

var backIn = (function custom(s) {
  s = +s;

  function backIn(t) {
    return (t = +t) * t * (s * (t - 1) + t);
  }

  backIn.overshoot = custom;

  return backIn;
})(overshoot);

var backOut = (function custom(s) {
  s = +s;

  function backOut(t) {
    return --t * t * ((t + 1) * s + t) + 1;
  }

  backOut.overshoot = custom;

  return backOut;
})(overshoot);

var backInOut = (function custom(s) {
  s = +s;

  function backInOut(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }

  backInOut.overshoot = custom;

  return backInOut;
})(overshoot);

var tau = 2 * Math.PI,
    amplitude = 1,
    period = 0.3;

var elasticIn = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t) {
    return a * tpmt(-(--t)) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function(a) { return custom(a, p * tau); };
  elasticIn.period = function(p) { return custom(a, p); };

  return elasticIn;
})(amplitude, period);

var elasticOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t) {
    return 1 - a * tpmt(t = +t) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticOut.period = function(p) { return custom(a, p); };

  return elasticOut;
})(amplitude, period);

var elasticInOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0
        ? a * tpmt(-t) * Math.sin((s - t) / p)
        : 2 - a * tpmt(t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticInOut.period = function(p) { return custom(a, p); };

  return elasticInOut;
})(amplitude, period);

exports.easeBack = backInOut;
exports.easeBackIn = backIn;
exports.easeBackInOut = backInOut;
exports.easeBackOut = backOut;
exports.easeBounce = bounceOut;
exports.easeBounceIn = bounceIn;
exports.easeBounceInOut = bounceInOut;
exports.easeBounceOut = bounceOut;
exports.easeCircle = circleInOut;
exports.easeCircleIn = circleIn;
exports.easeCircleInOut = circleInOut;
exports.easeCircleOut = circleOut;
exports.easeCubic = cubicInOut;
exports.easeCubicIn = cubicIn;
exports.easeCubicInOut = cubicInOut;
exports.easeCubicOut = cubicOut;
exports.easeElastic = elasticOut;
exports.easeElasticIn = elasticIn;
exports.easeElasticInOut = elasticInOut;
exports.easeElasticOut = elasticOut;
exports.easeExp = expInOut;
exports.easeExpIn = expIn;
exports.easeExpInOut = expInOut;
exports.easeExpOut = expOut;
exports.easeLinear = linear;
exports.easePoly = polyInOut;
exports.easePolyIn = polyIn;
exports.easePolyInOut = polyInOut;
exports.easePolyOut = polyOut;
exports.easeQuad = quadInOut;
exports.easeQuadIn = quadIn;
exports.easeQuadInOut = quadInOut;
exports.easeQuadOut = quadOut;
exports.easeSin = sinInOut;
exports.easeSinIn = sinIn;
exports.easeSinInOut = sinInOut;
exports.easeSinOut = sinOut;

Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ }),

/***/ "A552":
/*!********************************************************!*\
  !*** ./node_modules/d3-selection/dist/d3-selection.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://d3js.org/d3-selection/ v2.0.0 Copyright 2020 Mike Bostock
(function (global, factory) {
 true ? factory(exports) :
undefined;
}(this, function (exports) { 'use strict';

var xhtml = "http://www.w3.org/1999/xhtml";

var namespaces = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};

function namespace(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name; // eslint-disable-line no-prototype-builtins
}

function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === xhtml && document.documentElement.namespaceURI === xhtml
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

function creator(name) {
  var fullname = namespace(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
}

function none() {}

function selector(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}

function selection_select(select) {
  if (typeof select !== "function") select = selector(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new Selection(subgroups, this._parents);
}

function array(x) {
  return typeof x === "object" && "length" in x
    ? x // Array, TypedArray, NodeList, array-like
    : Array.from(x); // Map, Set, iterable, string, or anything else
}

function empty() {
  return [];
}

function selectorAll(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}

function arrayAll(select) {
  return function() {
    var group = select.apply(this, arguments);
    return group == null ? [] : array(group);
  };
}

function selection_selectAll(select) {
  if (typeof select === "function") select = arrayAll(select);
  else select = selectorAll(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new Selection(subgroups, parents);
}

function matcher(selector) {
  return function() {
    return this.matches(selector);
  };
}

function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}

var find = Array.prototype.find;

function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}

function childFirst() {
  return this.firstElementChild;
}

function selection_selectChild(match) {
  return this.select(match == null ? childFirst
      : childFind(typeof match === "function" ? match : childMatcher(match)));
}

var filter = Array.prototype.filter;

function children() {
  return this.children;
}

function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}

function selection_selectChildren(match) {
  return this.selectAll(match == null ? children
      : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}

function selection_filter(match) {
  if (typeof match !== "function") match = matcher(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Selection(subgroups, this._parents);
}

function sparse(update) {
  return new Array(update.length);
}

function selection_enter() {
  return new Selection(this._enter || this._groups.map(sparse), this._parents);
}

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};

function constant(x) {
  return function() {
    return x;
  };
}

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = new Map,
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue.get(keyValues[i]) === node)) {
      exit[i] = node;
    }
  }
}

function datum(node) {
  return node.__data__;
}

function selection_data(value, key) {
  if (!arguments.length) return Array.from(this, datum);

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = constant(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = array(value.call(parent, parent && parent.__data__, j, parents)),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}

function selection_exit() {
  return new Selection(this._exit || this._groups.map(sparse), this._parents);
}

function selection_join(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
  if (onupdate != null) update = onupdate(update);
  if (onexit == null) exit.remove(); else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}

function selection_merge(selection) {
  if (!(selection instanceof Selection)) throw new Error("invalid merge");

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Selection(merges, this._parents);
}

function selection_order() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
}

function selection_sort(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new Selection(sortgroups, this._parents).order();
}

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

function selection_call() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}

function selection_nodes() {
  return Array.from(this);
}

function selection_node() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
}

function selection_size() {
  let size = 0;
  for (const node of this) ++size; // eslint-disable-line no-unused-vars
  return size;
}

function selection_empty() {
  return !this.node();
}

function selection_each(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
}

function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

function selection_attr(name, value) {
  var fullname = namespace(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
}

function defaultView(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
}

function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

function selection_style(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
}

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
}

function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

function selection_property(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
}

function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

function selection_classed(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
}

function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

function selection_text(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
}

function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

function selection_html(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
}

function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

function selection_raise() {
  return this.each(raise);
}

function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

function selection_lower() {
  return this.each(lower);
}

function selection_append(name) {
  var create = typeof name === "function" ? name : creator(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
}

function constantNull() {
  return null;
}

function selection_insert(name, before) {
  var create = typeof name === "function" ? name : creator(name),
      select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
}

function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

function selection_remove() {
  return this.each(remove);
}

function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_clone(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}

function selection_datum(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
}

function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
        this.addEventListener(o.type, o.listener = listener, o.options = options);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, options: options};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

function selection_on(typename, value, options) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
  return this;
}

function dispatchEvent(node, type, params) {
  var window = defaultView(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

function selection_dispatch(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
}

function* selection_iterator() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) yield node;
    }
  }
}

var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

function selection_selection() {
  return this;
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: selection_select,
  selectAll: selection_selectAll,
  selectChild: selection_selectChild,
  selectChildren: selection_selectChildren,
  filter: selection_filter,
  data: selection_data,
  enter: selection_enter,
  exit: selection_exit,
  join: selection_join,
  merge: selection_merge,
  selection: selection_selection,
  order: selection_order,
  sort: selection_sort,
  call: selection_call,
  nodes: selection_nodes,
  node: selection_node,
  size: selection_size,
  empty: selection_empty,
  each: selection_each,
  attr: selection_attr,
  style: selection_style,
  property: selection_property,
  classed: selection_classed,
  text: selection_text,
  html: selection_html,
  raise: selection_raise,
  lower: selection_lower,
  append: selection_append,
  insert: selection_insert,
  remove: selection_remove,
  clone: selection_clone,
  datum: selection_datum,
  on: selection_on,
  dispatch: selection_dispatch,
  [Symbol.iterator]: selection_iterator
};

function select(selector) {
  return typeof selector === "string"
      ? new Selection([[document.querySelector(selector)]], [document.documentElement])
      : new Selection([[selector]], root);
}

function create(name) {
  return select(creator(name).call(document.documentElement));
}

var nextId = 0;

function local() {
  return new Local;
}

function Local() {
  this._ = "@" + (++nextId).toString(36);
}

Local.prototype = local.prototype = {
  constructor: Local,
  get: function(node) {
    var id = this._;
    while (!(id in node)) if (!(node = node.parentNode)) return;
    return node[id];
  },
  set: function(node, value) {
    return node[this._] = value;
  },
  remove: function(node) {
    return this._ in node && delete node[this._];
  },
  toString: function() {
    return this._;
  }
};

function sourceEvent(event) {
  let sourceEvent;
  while (sourceEvent = event.sourceEvent) event = sourceEvent;
  return event;
}

function pointer(event, node) {
  event = sourceEvent(event);
  if (node === undefined) node = event.currentTarget;
  if (node) {
    var svg = node.ownerSVGElement || node;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      point.x = event.clientX, point.y = event.clientY;
      point = point.matrixTransform(node.getScreenCTM().inverse());
      return [point.x, point.y];
    }
    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
  }
  return [event.pageX, event.pageY];
}

function pointers(events, node) {
  if (events.target) { // i.e., instanceof Event, not TouchList or iterable
    events = sourceEvent(events);
    if (node === undefined) node = events.currentTarget;
    events = events.touches || [events];
  }
  return Array.from(events, event => pointer(event, node));
}

function selectAll(selector) {
  return typeof selector === "string"
      ? new Selection([document.querySelectorAll(selector)], [document.documentElement])
      : new Selection([selector == null ? [] : array(selector)], root);
}

exports.create = create;
exports.creator = creator;
exports.local = local;
exports.matcher = matcher;
exports.namespace = namespace;
exports.namespaces = namespaces;
exports.pointer = pointer;
exports.pointers = pointers;
exports.select = select;
exports.selectAll = selectAll;
exports.selection = selection;
exports.selector = selector;
exports.selectorAll = selectorAll;
exports.style = styleValue;
exports.window = defaultView;

Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ }),

/***/ "DMmx":
/*!**********************************************!*\
  !*** ./node_modules/d3-zoom/dist/d3-zoom.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://d3js.org/d3-zoom/ v2.0.0 Copyright 2020 Mike Bostock
(function (global, factory) {
 true ? factory(exports, __webpack_require__(/*! d3-dispatch */ "+mtc"), __webpack_require__(/*! d3-drag */ "MqPt"), __webpack_require__(/*! d3-interpolate */ "dX6s"), __webpack_require__(/*! d3-selection */ "A552"), __webpack_require__(/*! d3-transition */ "j/KB")) :
undefined;
}(this, (function (exports, d3Dispatch, d3Drag, d3Interpolate, d3Selection, d3Transition) { 'use strict';

var constant = x => () => x;

function ZoomEvent(type, {
  sourceEvent,
  target,
  transform,
  dispatch
}) {
  Object.defineProperties(this, {
    type: {value: type, enumerable: true, configurable: true},
    sourceEvent: {value: sourceEvent, enumerable: true, configurable: true},
    target: {value: target, enumerable: true, configurable: true},
    transform: {value: transform, enumerable: true, configurable: true},
    _: {value: dispatch}
  });
}

function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}

Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};

var identity = new Transform(1, 0, 0);

transform.prototype = Transform.prototype;

function transform(node) {
  while (!node.__zoom) if (!(node = node.parentNode)) return identity;
  return node.__zoom;
}

function nopropagation(event) {
  event.stopImmediatePropagation();
}

function noevent(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

// Ignore right-click, since that should open the context menu.
// except for pinch-to-zoom, which is sent as a wheel+ctrlKey event
function defaultFilter(event) {
  return (!event.ctrlKey || event.type === 'wheel') && !event.button;
}

function defaultExtent() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }
    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }
  return [[0, 0], [e.clientWidth, e.clientHeight]];
}

function defaultTransform() {
  return this.__zoom || identity;
}

function defaultWheelDelta(event) {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * (event.ctrlKey ? 10 : 1);
}

function defaultTouchable() {
  return navigator.maxTouchPoints || ("ontouchstart" in this);
}

function defaultConstrain(transform, extent, translateExtent) {
  var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0],
      dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0],
      dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1],
      dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
  return transform.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}

function zoom() {
  var filter = defaultFilter,
      extent = defaultExtent,
      constrain = defaultConstrain,
      wheelDelta = defaultWheelDelta,
      touchable = defaultTouchable,
      scaleExtent = [0, Infinity],
      translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]],
      duration = 250,
      interpolate = d3Interpolate.interpolateZoom,
      listeners = d3Dispatch.dispatch("start", "zoom", "end"),
      touchstarting,
      touchfirst,
      touchending,
      touchDelay = 500,
      wheelDelay = 150,
      clickDistance2 = 0,
      tapDistance = 10;

  function zoom(selection) {
    selection
        .property("__zoom", defaultTransform)
        .on("wheel.zoom", wheeled)
        .on("mousedown.zoom", mousedowned)
        .on("dblclick.zoom", dblclicked)
      .filter(touchable)
        .on("touchstart.zoom", touchstarted)
        .on("touchmove.zoom", touchmoved)
        .on("touchend.zoom touchcancel.zoom", touchended)
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  zoom.transform = function(collection, transform, point, event) {
    var selection = collection.selection ? collection.selection() : collection;
    selection.property("__zoom", defaultTransform);
    if (collection !== selection) {
      schedule(collection, transform, point, event);
    } else {
      selection.interrupt().each(function() {
        gesture(this, arguments)
          .event(event)
          .start()
          .zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform)
          .end();
      });
    }
  };

  zoom.scaleBy = function(selection, k, p, event) {
    zoom.scaleTo(selection, function() {
      var k0 = this.__zoom.k,
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p, event);
  };

  zoom.scaleTo = function(selection, k, p, event) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t0 = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p,
          p1 = t0.invert(p0),
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    }, p, event);
  };

  zoom.translateBy = function(selection, x, y, event) {
    zoom.transform(selection, function() {
      return constrain(this.__zoom.translate(
        typeof x === "function" ? x.apply(this, arguments) : x,
        typeof y === "function" ? y.apply(this, arguments) : y
      ), extent.apply(this, arguments), translateExtent);
    }, null, event);
  };

  zoom.translateTo = function(selection, x, y, p, event) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(identity.translate(p0[0], p0[1]).scale(t.k).translate(
        typeof x === "function" ? -x.apply(this, arguments) : -x,
        typeof y === "function" ? -y.apply(this, arguments) : -y
      ), e, translateExtent);
    }, p, event);
  };

  function scale(transform, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform.k ? transform : new Transform(k, transform.x, transform.y);
  }

  function translate(transform, p0, p1) {
    var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
    return x === transform.x && y === transform.y ? transform : new Transform(transform.k, x, y);
  }

  function centroid(extent) {
    return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
  }

  function schedule(transition, transform, point, event) {
    transition
        .on("start.zoom", function() { gesture(this, arguments).event(event).start(); })
        .on("interrupt.zoom end.zoom", function() { gesture(this, arguments).event(event).end(); })
        .tween("zoom", function() {
          var that = this,
              args = arguments,
              g = gesture(that, args).event(event),
              e = extent.apply(that, args),
              p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point,
              w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
              a = that.__zoom,
              b = typeof transform === "function" ? transform.apply(that, args) : transform,
              i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
          return function(t) {
            if (t === 1) t = b; // Avoid rounding error on end.
            else { var l = i(t), k = w / l[2]; t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k); }
            g.zoom(null, t);
          };
        });
  }

  function gesture(that, args, clean) {
    return (!clean && that.__zooming) || new Gesture(that, args);
  }

  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }

  Gesture.prototype = {
    event: function(event) {
      if (event) this.sourceEvent = event;
      return this;
    },
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
      this.that.__zoom = transform;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type) {
      var d = d3Selection.select(this.that).datum();
      listeners.call(
        type,
        this.that,
        new ZoomEvent(type, {
          sourceEvent: this.sourceEvent,
          target: zoom,
          type,
          transform: this.that.__zoom,
          dispatch: listeners
        }),
        d
      );
    }
  };

  function wheeled(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var g = gesture(this, args).event(event),
        t = this.__zoom,
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))),
        p = d3Selection.pointer(event);

    // If the mouse is in the same location as before, reuse it.
    // If there were recent wheel events, reset the wheel idle timeout.
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    }

    // If this wheel event won’t trigger a transform change, ignore it.
    else if (t.k === k) return;

    // Otherwise, capture the mouse point and location at the start.
    else {
      g.mouse = [p, t.invert(p)];
      d3Transition.interrupt(this);
      g.start();
    }

    noevent(event);
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));

    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }

  function mousedowned(event, ...args) {
    if (touchending || !filter.apply(this, arguments)) return;
    var g = gesture(this, args, true).event(event),
        v = d3Selection.select(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true),
        p = d3Selection.pointer(event, currentTarget),
        currentTarget = event.currentTarget,
        x0 = event.clientX,
        y0 = event.clientY;

    d3Drag.dragDisable(event.view);
    nopropagation(event);
    g.mouse = [p, this.__zoom.invert(p)];
    d3Transition.interrupt(this);
    g.start();

    function mousemoved(event) {
      noevent(event);
      if (!g.moved) {
        var dx = event.clientX - x0, dy = event.clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.event(event)
       .zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = d3Selection.pointer(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
    }

    function mouseupped(event) {
      v.on("mousemove.zoom mouseup.zoom", null);
      d3Drag.dragEnable(event.view, g.moved);
      noevent(event);
      g.event(event).end();
    }
  }

  function dblclicked(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var t0 = this.__zoom,
        p0 = d3Selection.pointer(event.changedTouches ? event.changedTouches[0] : event, this),
        p1 = t0.invert(p0),
        k1 = t0.k * (event.shiftKey ? 0.5 : 2),
        t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);

    noevent(event);
    if (duration > 0) d3Selection.select(this).transition().duration(duration).call(schedule, t1, p0, event);
    else d3Selection.select(this).call(zoom.transform, t1, p0, event);
  }

  function touchstarted(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var touches = event.touches,
        n = touches.length,
        g = gesture(this, args, event.changedTouches.length === n).event(event),
        started, i, t, p;

    nopropagation(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = d3Selection.pointer(t, this);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
      else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
    }

    if (touchstarting) touchstarting = clearTimeout(touchstarting);

    if (started) {
      if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() { touchstarting = null; }, touchDelay);
      d3Transition.interrupt(this);
      g.start();
    }
  }

  function touchmoved(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event),
        touches = event.changedTouches,
        n = touches.length, i, t, p, l;

    noevent(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = d3Selection.pointer(t, this);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0], l0 = g.touch0[1],
          p1 = g.touch1[0], l1 = g.touch1[1],
          dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
          dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    }
    else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
    else return;

    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }

  function touchended(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event),
        touches = event.changedTouches,
        n = touches.length, i, t;

    nopropagation(event);
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }
    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else {
      g.end();
      // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.
      if (g.taps === 2) {
        t = d3Selection.pointer(t, this);
        if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
          var p = d3Selection.select(this).on("dblclick.zoom");
          if (p) p.apply(this, arguments);
        }
      }
    }
  }

  zoom.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : constant(+_), zoom) : wheelDelta;
  };

  zoom.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant(!!_), zoom) : filter;
  };

  zoom.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant(!!_), zoom) : touchable;
  };

  zoom.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
  };

  zoom.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };

  zoom.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };

  zoom.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom) : constrain;
  };

  zoom.duration = function(_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };

  zoom.interpolate = function(_) {
    return arguments.length ? (interpolate = _, zoom) : interpolate;
  };

  zoom.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };

  zoom.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };

  zoom.tapDistance = function(_) {
    return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
  };

  return zoom;
}

exports.zoom = zoom;
exports.zoomIdentity = identity;
exports.zoomTransform = transform;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "Epp9":
/*!************************************************!*\
  !*** ./node_modules/d3-timer/dist/d3-timer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://d3js.org/d3-timer/ v2.0.0 Copyright 2020 Mike Bostock
(function (global, factory) {
 true ? factory(exports) :
undefined;
}(this, function (exports) { 'use strict';

var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}

function timeout$1(callback, delay, time) {
  var t = new Timer;
  delay = delay == null ? 0 : +delay;
  t.restart(elapsed => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}

function interval$1(callback, delay, time) {
  var t = new Timer, total = delay;
  if (delay == null) return t.restart(callback, delay, time), t;
  t._restart = t.restart;
  t.restart = function(callback, delay, time) {
    delay = +delay, time = time == null ? now() : +time;
    t._restart(function tick(elapsed) {
      elapsed += total;
      t._restart(tick, total += delay, time);
      callback(elapsed);
    }, delay, time);
  };
  t.restart(callback, delay, time);
  return t;
}

exports.interval = interval$1;
exports.now = now;
exports.timeout = timeout$1;
exports.timer = timer;
exports.timerFlush = timerFlush;

Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ }),

/***/ "MqPt":
/*!**********************************************!*\
  !*** ./node_modules/d3-drag/dist/d3-drag.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://d3js.org/d3-drag/ v2.0.0 Copyright 2020 Mike Bostock
(function (global, factory) {
 true ? factory(exports, __webpack_require__(/*! d3-dispatch */ "+mtc"), __webpack_require__(/*! d3-selection */ "A552")) :
undefined;
}(this, function (exports, d3Dispatch, d3Selection) { 'use strict';

function nopropagation(event) {
  event.stopImmediatePropagation();
}

function noevent(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}

function nodrag(view) {
  var root = view.document.documentElement,
      selection = d3Selection.select(view).on("dragstart.drag", noevent, true);
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", noevent, true);
  } else {
    root.__noselect = root.style.MozUserSelect;
    root.style.MozUserSelect = "none";
  }
}

function yesdrag(view, noclick) {
  var root = view.document.documentElement,
      selection = d3Selection.select(view).on("dragstart.drag", null);
  if (noclick) {
    selection.on("click.drag", noevent, true);
    setTimeout(function() { selection.on("click.drag", null); }, 0);
  }
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", null);
  } else {
    root.style.MozUserSelect = root.__noselect;
    delete root.__noselect;
  }
}

var constant = x => () => x;

function DragEvent(type, {
  sourceEvent,
  subject,
  target,
  identifier,
  active,
  x, y, dx, dy,
  dispatch
}) {
  Object.defineProperties(this, {
    type: {value: type, enumerable: true, configurable: true},
    sourceEvent: {value: sourceEvent, enumerable: true, configurable: true},
    subject: {value: subject, enumerable: true, configurable: true},
    target: {value: target, enumerable: true, configurable: true},
    identifier: {value: identifier, enumerable: true, configurable: true},
    active: {value: active, enumerable: true, configurable: true},
    x: {value: x, enumerable: true, configurable: true},
    y: {value: y, enumerable: true, configurable: true},
    dx: {value: dx, enumerable: true, configurable: true},
    dy: {value: dy, enumerable: true, configurable: true},
    _: {value: dispatch}
  });
}

DragEvent.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};

// Ignore right-click, since that should open the context menu.
function defaultFilter(event) {
  return !event.ctrlKey && !event.button;
}

function defaultContainer() {
  return this.parentNode;
}

function defaultSubject(event, d) {
  return d == null ? {x: event.x, y: event.y} : d;
}

function defaultTouchable() {
  return navigator.maxTouchPoints || ("ontouchstart" in this);
}

function drag() {
  var filter = defaultFilter,
      container = defaultContainer,
      subject = defaultSubject,
      touchable = defaultTouchable,
      gestures = {},
      listeners = d3Dispatch.dispatch("start", "drag", "end"),
      active = 0,
      mousedownx,
      mousedowny,
      mousemoving,
      touchending,
      clickDistance2 = 0;

  function drag(selection) {
    selection
        .on("mousedown.drag", mousedowned)
      .filter(touchable)
        .on("touchstart.drag", touchstarted)
        .on("touchmove.drag", touchmoved)
        .on("touchend.drag touchcancel.drag", touchended)
        .style("touch-action", "none")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  function mousedowned(event, d) {
    if (touchending || !filter.call(this, event, d)) return;
    var gesture = beforestart(this, container.call(this, event, d), event, d, "mouse");
    if (!gesture) return;
    d3Selection.select(event.view).on("mousemove.drag", mousemoved, true).on("mouseup.drag", mouseupped, true);
    nodrag(event.view);
    nopropagation(event);
    mousemoving = false;
    mousedownx = event.clientX;
    mousedowny = event.clientY;
    gesture("start", event);
  }

  function mousemoved(event) {
    noevent(event);
    if (!mousemoving) {
      var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag", event);
  }

  function mouseupped(event) {
    d3Selection.select(event.view).on("mousemove.drag mouseup.drag", null);
    yesdrag(event.view, mousemoving);
    noevent(event);
    gestures.mouse("end", event);
  }

  function touchstarted(event, d) {
    if (!filter.call(this, event, d)) return;
    var touches = event.changedTouches,
        c = container.call(this, event, d),
        n = touches.length, i, gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = beforestart(this, c, event, d, touches[i].identifier, touches[i])) {
        nopropagation(event);
        gesture("start", event, touches[i]);
      }
    }
  }

  function touchmoved(event) {
    var touches = event.changedTouches,
        n = touches.length, i, gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        noevent(event);
        gesture("drag", event, touches[i]);
      }
    }
  }

  function touchended(event) {
    var touches = event.changedTouches,
        n = touches.length, i, gesture;

    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        nopropagation(event);
        gesture("end", event, touches[i]);
      }
    }
  }

  function beforestart(that, container, event, d, identifier, touch) {
    var dispatch = listeners.copy(),
        p = d3Selection.pointer(touch || event, container), dx, dy,
        s;

    if ((s = subject.call(that, new DragEvent("beforestart", {
        sourceEvent: event,
        target: drag,
        identifier,
        active,
        x: p[0],
        y: p[1],
        dx: 0,
        dy: 0,
        dispatch
      }), d)) == null) return;

    dx = s.x - p[0] || 0;
    dy = s.y - p[1] || 0;

    return function gesture(type, event, touch) {
      var p0 = p, n;
      switch (type) {
        case "start": gestures[identifier] = gesture, n = active++; break;
        case "end": delete gestures[identifier], --active; // nobreak
        case "drag": p = d3Selection.pointer(touch || event, container), n = active; break;
      }
      dispatch.call(
        type,
        that,
        new DragEvent(type, {
          sourceEvent: event,
          subject: s,
          target: drag,
          identifier,
          active: n,
          x: p[0] + dx,
          y: p[1] + dy,
          dx: p[0] - p0[0],
          dy: p[1] - p0[1],
          dispatch
        }),
        d
      );
    };
  }

  drag.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant(!!_), drag) : filter;
  };

  drag.container = function(_) {
    return arguments.length ? (container = typeof _ === "function" ? _ : constant(_), drag) : container;
  };

  drag.subject = function(_) {
    return arguments.length ? (subject = typeof _ === "function" ? _ : constant(_), drag) : subject;
  };

  drag.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant(!!_), drag) : touchable;
  };

  drag.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag : value;
  };

  drag.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
  };

  return drag;
}

exports.drag = drag;
exports.dragDisable = nodrag;
exports.dragEnable = yesdrag;

Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ }),

/***/ "WKc5":
/*!************************************************!*\
  !*** ./node_modules/d3-shape/dist/d3-shape.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://d3js.org/d3-shape/ v2.1.0 Copyright 2021 Mike Bostock
(function (global, factory) {
 true ? factory(exports, __webpack_require__(/*! d3-path */ "zyy5")) :
undefined;
}(this, (function (exports, d3Path) { 'use strict';

function constant(x) {
  return function constant() {
    return x;
  };
}

var abs = Math.abs;
var atan2 = Math.atan2;
var cos = Math.cos;
var max = Math.max;
var min = Math.min;
var sin = Math.sin;
var sqrt = Math.sqrt;

var epsilon = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var tau = 2 * pi;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}

function arcInnerRadius(d) {
  return d.innerRadius;
}

function arcOuterRadius(d) {
  return d.outerRadius;
}

function arcStartAngle(d) {
  return d.startAngle;
}

function arcEndAngle(d) {
  return d.endAngle;
}

function arcPadAngle(d) {
  return d && d.padAngle; // Note: optional!
}

function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0, y10 = y1 - y0,
      x32 = x3 - x2, y32 = y3 - y2,
      t = y32 * x10 - x32 * y10;
  if (t * t < epsilon) return;
  t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
  return [x0 + t * x10, y0 + t * y10];
}

// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1,
      y01 = y0 - y1,
      lo = (cw ? rc : -rc) / sqrt(x01 * x01 + y01 * y01),
      ox = lo * y01,
      oy = -lo * x01,
      x11 = x0 + ox,
      y11 = y0 + oy,
      x10 = x1 + ox,
      y10 = y1 + oy,
      x00 = (x11 + x10) / 2,
      y00 = (y11 + y10) / 2,
      dx = x10 - x11,
      dy = y10 - y11,
      d2 = dx * dx + dy * dy,
      r = r1 - rc,
      D = x11 * y10 - x10 * y11,
      d = (dy < 0 ? -1 : 1) * sqrt(max(0, r * r * d2 - D * D)),
      cx0 = (D * dy - dx * d) / d2,
      cy0 = (-D * dx - dy * d) / d2,
      cx1 = (D * dy + dx * d) / d2,
      cy1 = (-D * dx + dy * d) / d2,
      dx0 = cx0 - x00,
      dy0 = cy0 - y00,
      dx1 = cx1 - x00,
      dy1 = cy1 - y00;

  // Pick the closer of the two intersection points.
  // TODO Is there a faster way to determine which intersection to use?
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;

  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}

function arc() {
  var innerRadius = arcInnerRadius,
      outerRadius = arcOuterRadius,
      cornerRadius = constant(0),
      padRadius = null,
      startAngle = arcStartAngle,
      endAngle = arcEndAngle,
      padAngle = arcPadAngle,
      context = null;

  function arc() {
    var buffer,
        r,
        r0 = +innerRadius.apply(this, arguments),
        r1 = +outerRadius.apply(this, arguments),
        a0 = startAngle.apply(this, arguments) - halfPi,
        a1 = endAngle.apply(this, arguments) - halfPi,
        da = abs(a1 - a0),
        cw = a1 > a0;

    if (!context) context = buffer = d3Path.path();

    // Ensure that the outer radius is always larger than the inner radius.
    if (r1 < r0) r = r1, r1 = r0, r0 = r;

    // Is it a point?
    if (!(r1 > epsilon)) context.moveTo(0, 0);

    // Or is it a circle or annulus?
    else if (da > tau - epsilon) {
      context.moveTo(r1 * cos(a0), r1 * sin(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > epsilon) {
        context.moveTo(r0 * cos(a1), r0 * sin(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    }

    // Or is it a circular or annular sector?
    else {
      var a01 = a0,
          a11 = a1,
          a00 = a0,
          a10 = a1,
          da0 = da,
          da1 = da,
          ap = padAngle.apply(this, arguments) / 2,
          rp = (ap > epsilon) && (padRadius ? +padRadius.apply(this, arguments) : sqrt(r0 * r0 + r1 * r1)),
          rc = min(abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
          rc0 = rc,
          rc1 = rc,
          t0,
          t1;

      // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
      if (rp > epsilon) {
        var p0 = asin(rp / r0 * sin(ap)),
            p1 = asin(rp / r1 * sin(ap));
        if ((da0 -= p0 * 2) > epsilon) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
        else da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > epsilon) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
        else da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }

      var x01 = r1 * cos(a01),
          y01 = r1 * sin(a01),
          x10 = r0 * cos(a10),
          y10 = r0 * sin(a10);

      // Apply rounded corners?
      if (rc > epsilon) {
        var x11 = r1 * cos(a11),
            y11 = r1 * sin(a11),
            x00 = r0 * cos(a00),
            y00 = r0 * sin(a00),
            oc;

        // Restrict the corner radius according to the sector angle.
        if (da < pi && (oc = intersect(x01, y01, x00, y00, x11, y11, x10, y10))) {
          var ax = x01 - oc[0],
              ay = y01 - oc[1],
              bx = x11 - oc[0],
              by = y11 - oc[1],
              kc = 1 / sin(acos((ax * bx + ay * by) / (sqrt(ax * ax + ay * ay) * sqrt(bx * bx + by * by))) / 2),
              lc = sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = min(rc, (r0 - lc) / (kc - 1));
          rc1 = min(rc, (r1 - lc) / (kc + 1));
        }
      }

      // Is the sector collapsed to a line?
      if (!(da1 > epsilon)) context.moveTo(x01, y01);

      // Does the sector’s outer ring have rounded corners?
      else if (rc1 > epsilon) {
        t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

        context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r1, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
          context.arc(t1.cx, t1.cy, rc1, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the outer ring just a circular arc?
      else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

      // Is there no inner ring, and it’s a circular sector?
      // Or perhaps it’s an annular sector collapsed due to padding?
      if (!(r0 > epsilon) || !(da0 > epsilon)) context.lineTo(x10, y10);

      // Does the sector’s inner ring (or point) have rounded corners?
      else if (rc0 > epsilon) {
        t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

        context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r0, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), cw);
          context.arc(t1.cx, t1.cy, rc0, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the inner ring just a circular arc?
      else context.arc(0, 0, r0, a10, a00, cw);
    }

    context.closePath();

    if (buffer) return context = null, buffer + "" || null;
  }

  arc.centroid = function() {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
        a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi / 2;
    return [cos(a) * r, sin(a) * r];
  };

  arc.innerRadius = function(_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant(+_), arc) : innerRadius;
  };

  arc.outerRadius = function(_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant(+_), arc) : outerRadius;
  };

  arc.cornerRadius = function(_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant(+_), arc) : cornerRadius;
  };

  arc.padRadius = function(_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant(+_), arc) : padRadius;
  };

  arc.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant(+_), arc) : startAngle;
  };

  arc.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant(+_), arc) : endAngle;
  };

  arc.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant(+_), arc) : padAngle;
  };

  arc.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), arc) : context;
  };

  return arc;
}

var slice = Array.prototype.slice;

function array(x) {
  return typeof x === "object" && "length" in x
    ? x // Array, TypedArray, NodeList, array-like
    : Array.from(x); // Map, Set, iterable, string, or anything else
}

function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: this._context.lineTo(x, y); break;
    }
  }
};

function curveLinear(context) {
  return new Linear(context);
}

function x(p) {
  return p[0];
}

function y(p) {
  return p[1];
}

function line(x$1, y$1) {
  var defined = constant(true),
      context = null,
      curve = curveLinear,
      output = null;

  x$1 = typeof x$1 === "function" ? x$1 : (x$1 === undefined) ? x : constant(x$1);
  y$1 = typeof y$1 === "function" ? y$1 : (y$1 === undefined) ? y : constant(y$1);

  function line(data) {
    var i,
        n = (data = array(data)).length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = d3Path.path());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x$1(d, i, data), +y$1(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function(_) {
    return arguments.length ? (x$1 = typeof _ === "function" ? _ : constant(+_), line) : x$1;
  };

  line.y = function(_) {
    return arguments.length ? (y$1 = typeof _ === "function" ? _ : constant(+_), line) : y$1;
  };

  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant(!!_), line) : defined;
  };

  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
}

function area(x0, y0, y1) {
  var x1 = null,
      defined = constant(true),
      context = null,
      curve = curveLinear,
      output = null;

  x0 = typeof x0 === "function" ? x0 : (x0 === undefined) ? x : constant(+x0);
  y0 = typeof y0 === "function" ? y0 : (y0 === undefined) ? constant(0) : constant(+y0);
  y1 = typeof y1 === "function" ? y1 : (y1 === undefined) ? y : constant(+y1);

  function area(data) {
    var i,
        j,
        k,
        n = (data = array(data)).length,
        d,
        defined0 = false,
        buffer,
        x0z = new Array(n),
        y0z = new Array(n);

    if (context == null) output = curve(buffer = d3Path.path());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  function arealine() {
    return line().defined(defined).curve(curve).context(context);
  }

  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant(+_), x1 = null, area) : x0;
  };

  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant(+_), area) : x0;
  };

  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant(+_), area) : x1;
  };

  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant(+_), y1 = null, area) : y0;
  };

  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant(+_), area) : y0;
  };

  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant(+_), area) : y1;
  };

  area.lineX0 =
  area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };

  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };

  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };

  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant(!!_), area) : defined;
  };

  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };

  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };

  return area;
}

function descending$1(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}

function identity(d) {
  return d;
}

function pie() {
  var value = identity,
      sortValues = descending$1,
      sort = null,
      startAngle = constant(0),
      endAngle = constant(tau),
      padAngle = constant(0);

  function pie(data) {
    var i,
        n = (data = array(data)).length,
        j,
        k,
        sum = 0,
        index = new Array(n),
        arcs = new Array(n),
        a0 = +startAngle.apply(this, arguments),
        da = Math.min(tau, Math.max(-tau, endAngle.apply(this, arguments) - a0)),
        a1,
        p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
        pa = p * (da < 0 ? -1 : 1),
        v;

    for (i = 0; i < n; ++i) {
      if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
        sum += v;
      }
    }

    // Optionally sort the arcs by previously-computed values or by data.
    if (sortValues != null) index.sort(function(i, j) { return sortValues(arcs[i], arcs[j]); });
    else if (sort != null) index.sort(function(i, j) { return sort(data[i], data[j]); });

    // Compute the arcs! They are stored in the original data's order.
    for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
      j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
        data: data[j],
        index: i,
        value: v,
        startAngle: a0,
        endAngle: a1,
        padAngle: p
      };
    }

    return arcs;
  }

  pie.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant(+_), pie) : value;
  };

  pie.sortValues = function(_) {
    return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
  };

  pie.sort = function(_) {
    return arguments.length ? (sort = _, sortValues = null, pie) : sort;
  };

  pie.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant(+_), pie) : startAngle;
  };

  pie.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant(+_), pie) : endAngle;
  };

  pie.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant(+_), pie) : padAngle;
  };

  return pie;
}

var curveRadialLinear = curveRadial$1(curveLinear);

function Radial(curve) {
  this._curve = curve;
}

Radial.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(a, r) {
    this._curve.point(r * Math.sin(a), r * -Math.cos(a));
  }
};

function curveRadial$1(curve) {

  function radial(context) {
    return new Radial(curve(context));
  }

  radial._curve = curve;

  return radial;
}

function lineRadial(l) {
  var c = l.curve;

  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;

  l.curve = function(_) {
    return arguments.length ? c(curveRadial$1(_)) : c()._curve;
  };

  return l;
}

function lineRadial$1() {
  return lineRadial(line().curve(curveRadialLinear));
}

function areaRadial() {
  var a = area().curve(curveRadialLinear),
      c = a.curve,
      x0 = a.lineX0,
      x1 = a.lineX1,
      y0 = a.lineY0,
      y1 = a.lineY1;

  a.angle = a.x, delete a.x;
  a.startAngle = a.x0, delete a.x0;
  a.endAngle = a.x1, delete a.x1;
  a.radius = a.y, delete a.y;
  a.innerRadius = a.y0, delete a.y0;
  a.outerRadius = a.y1, delete a.y1;
  a.lineStartAngle = function() { return lineRadial(x0()); }, delete a.lineX0;
  a.lineEndAngle = function() { return lineRadial(x1()); }, delete a.lineX1;
  a.lineInnerRadius = function() { return lineRadial(y0()); }, delete a.lineY0;
  a.lineOuterRadius = function() { return lineRadial(y1()); }, delete a.lineY1;

  a.curve = function(_) {
    return arguments.length ? c(curveRadial$1(_)) : c()._curve;
  };

  return a;
}

function pointRadial(x, y) {
  return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
}

function linkSource(d) {
  return d.source;
}

function linkTarget(d) {
  return d.target;
}

function link(curve) {
  var source = linkSource,
      target = linkTarget,
      x$1 = x,
      y$1 = y,
      context = null;

  function link() {
    var buffer, argv = slice.call(arguments), s = source.apply(this, argv), t = target.apply(this, argv);
    if (!context) context = buffer = d3Path.path();
    curve(context, +x$1.apply(this, (argv[0] = s, argv)), +y$1.apply(this, argv), +x$1.apply(this, (argv[0] = t, argv)), +y$1.apply(this, argv));
    if (buffer) return context = null, buffer + "" || null;
  }

  link.source = function(_) {
    return arguments.length ? (source = _, link) : source;
  };

  link.target = function(_) {
    return arguments.length ? (target = _, link) : target;
  };

  link.x = function(_) {
    return arguments.length ? (x$1 = typeof _ === "function" ? _ : constant(+_), link) : x$1;
  };

  link.y = function(_) {
    return arguments.length ? (y$1 = typeof _ === "function" ? _ : constant(+_), link) : y$1;
  };

  link.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), link) : context;
  };

  return link;
}

function curveHorizontal(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
}

function curveVertical(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0, y0 = (y0 + y1) / 2, x1, y0, x1, y1);
}

function curveRadial(context, x0, y0, x1, y1) {
  var p0 = pointRadial(x0, y0),
      p1 = pointRadial(x0, y0 = (y0 + y1) / 2),
      p2 = pointRadial(x1, y0),
      p3 = pointRadial(x1, y1);
  context.moveTo(p0[0], p0[1]);
  context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
}

function linkHorizontal() {
  return link(curveHorizontal);
}

function linkVertical() {
  return link(curveVertical);
}

function linkRadial() {
  var l = link(curveRadial);
  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;
  return l;
}

var circle = {
  draw: function(context, size) {
    var r = Math.sqrt(size / pi);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, tau);
  }
};

var cross = {
  draw: function(context, size) {
    var r = Math.sqrt(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
};

var tan30 = Math.sqrt(1 / 3),
    tan30_2 = tan30 * 2;

var diamond = {
  draw: function(context, size) {
    var y = Math.sqrt(size / tan30_2),
        x = y * tan30;
    context.moveTo(0, -y);
    context.lineTo(x, 0);
    context.lineTo(0, y);
    context.lineTo(-x, 0);
    context.closePath();
  }
};

var ka = 0.89081309152928522810,
    kr = Math.sin(pi / 10) / Math.sin(7 * pi / 10),
    kx = Math.sin(tau / 10) * kr,
    ky = -Math.cos(tau / 10) * kr;

var star = {
  draw: function(context, size) {
    var r = Math.sqrt(size * ka),
        x = kx * r,
        y = ky * r;
    context.moveTo(0, -r);
    context.lineTo(x, y);
    for (var i = 1; i < 5; ++i) {
      var a = tau * i / 5,
          c = Math.cos(a),
          s = Math.sin(a);
      context.lineTo(s * r, -c * r);
      context.lineTo(c * x - s * y, s * x + c * y);
    }
    context.closePath();
  }
};

var square = {
  draw: function(context, size) {
    var w = Math.sqrt(size),
        x = -w / 2;
    context.rect(x, x, w, w);
  }
};

var sqrt3 = Math.sqrt(3);

var triangle = {
  draw: function(context, size) {
    var y = -Math.sqrt(size / (sqrt3 * 3));
    context.moveTo(0, y * 2);
    context.lineTo(-sqrt3 * y, -y);
    context.lineTo(sqrt3 * y, -y);
    context.closePath();
  }
};

var c = -0.5,
    s = Math.sqrt(3) / 2,
    k = 1 / Math.sqrt(12),
    a = (k / 2 + 1) * 3;

var wye = {
  draw: function(context, size) {
    var r = Math.sqrt(size / a),
        x0 = r / 2,
        y0 = r * k,
        x1 = x0,
        y1 = r * k + r,
        x2 = -x1,
        y2 = y1;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
    context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
    context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
    context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
    context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
    context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
    context.closePath();
  }
};

var symbols = [
  circle,
  cross,
  diamond,
  square,
  star,
  triangle,
  wye
];

function symbol(type, size) {
  var context = null;
  type = typeof type === "function" ? type : constant(type || circle);
  size = typeof size === "function" ? size : constant(size === undefined ? 64 : +size);

  function symbol() {
    var buffer;
    if (!context) context = buffer = d3Path.path();
    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer) return context = null, buffer + "" || null;
  }

  symbol.type = function(_) {
    return arguments.length ? (type = typeof _ === "function" ? _ : constant(_), symbol) : type;
  };

  symbol.size = function(_) {
    return arguments.length ? (size = typeof _ === "function" ? _ : constant(+_), symbol) : size;
  };

  symbol.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };

  return symbol;
}

function noop() {}

function point$3(that, x, y) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x) / 6,
    (that._y0 + 4 * that._y1 + y) / 6
  );
}

function Basis(context) {
  this._context = context;
}

Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3: point$3(this, this._x1, this._y1); // proceed
      case 2: this._context.lineTo(this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
      default: point$3(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

function basis(context) {
  return new Basis(context);
}

function BasisClosed(context) {
  this._context = context;
}

BasisClosed.prototype = {
  areaStart: noop,
  areaEnd: noop,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x2 = x, this._y2 = y; break;
      case 1: this._point = 2; this._x3 = x, this._y3 = y; break;
      case 2: this._point = 3; this._x4 = x, this._y4 = y; this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6); break;
      default: point$3(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

function basisClosed(context) {
  return new BasisClosed(context);
}

function BasisOpen(context) {
  this._context = context;
}

BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6; this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0); break;
      case 3: this._point = 4; // proceed
      default: point$3(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

function basisOpen(context) {
  return new BasisOpen(context);
}

class Bump {
  constructor(context, x) {
    this._context = context;
    this._x = x;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  }
  point(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: {
        this._point = 1;
        if (this._line) this._context.lineTo(x, y);
        else this._context.moveTo(x, y);
        break;
      }
      case 1: this._point = 2; // proceed
      default: {
        if (this._x) this._context.bezierCurveTo(this._x0 = (this._x0 + x) / 2, this._y0, this._x0, y, x, y);
        else this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + y) / 2, x, this._y0, x, y);
        break;
      }
    }
    this._x0 = x, this._y0 = y;
  }
}

function bumpX(context) {
  return new Bump(context, true);
}

function bumpY(context) {
  return new Bump(context, false);
}

function Bundle(context, beta) {
  this._basis = new Basis(context);
  this._beta = beta;
}

Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        j = x.length - 1;

    if (j > 0) {
      var x0 = x[0],
          y0 = y[0],
          dx = x[j] - x0,
          dy = y[j] - y0,
          i = -1,
          t;

      while (++i <= j) {
        t = i / j;
        this._basis.point(
          this._beta * x[i] + (1 - this._beta) * (x0 + t * dx),
          this._beta * y[i] + (1 - this._beta) * (y0 + t * dy)
        );
      }
    }

    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

var bundle = (function custom(beta) {

  function bundle(context) {
    return beta === 1 ? new Basis(context) : new Bundle(context, beta);
  }

  bundle.beta = function(beta) {
    return custom(+beta);
  };

  return bundle;
})(0.85);

function point$2(that, x, y) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x),
    that._y2 + that._k * (that._y1 - y),
    that._x2,
    that._y2
  );
}

function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: point$2(this, this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; this._x1 = x, this._y1 = y; break;
      case 2: this._point = 3; // proceed
      default: point$2(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

var cardinal = (function custom(tension) {

  function cardinal(context) {
    return new Cardinal(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0);

function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalClosed.prototype = {
  areaStart: noop,
  areaEnd: noop,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: point$2(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

var cardinalClosed = (function custom(tension) {

  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0);

function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: point$2(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

var cardinalOpen = (function custom(tension) {

  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0);

function point$1(that, x, y) {
  var x1 = that._x1,
      y1 = that._y1,
      x2 = that._x2,
      y2 = that._y2;

  if (that._l01_a > epsilon) {
    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
        n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }

  if (that._l23_a > epsilon) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
        m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
    y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
  }

  that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}

function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: this.point(this._x2, this._y2); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; // proceed
      default: point$1(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

var catmullRom = (function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5);

function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomClosed.prototype = {
  areaStart: noop,
  areaEnd: noop,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: point$1(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

var catmullRomClosed = (function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5);

function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: point$1(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

var catmullRomOpen = (function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5);

function LinearClosed(context) {
  this._context = context;
}

LinearClosed.prototype = {
  areaStart: noop,
  areaEnd: noop,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point) this._context.closePath();
  },
  point: function(x, y) {
    x = +x, y = +y;
    if (this._point) this._context.lineTo(x, y);
    else this._point = 1, this._context.moveTo(x, y);
  }
};

function linearClosed(context) {
  return new LinearClosed(context);
}

function sign(x) {
  return x < 0 ? -1 : 1;
}

// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0,
      h1 = x2 - that._x1,
      s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
      s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
      p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}

// Calculate a one-sided slope.
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}

// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function point(that, t0, t1) {
  var x0 = that._x0,
      y0 = that._y0,
      x1 = that._x1,
      y1 = that._y1,
      dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}

function MonotoneX(context) {
  this._context = context;
}

MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 =
    this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x1, this._y1); break;
      case 3: point(this, this._t0, slope2(this, this._t0)); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    var t1 = NaN;

    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; point(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
      default: point(this, this._t0, t1 = slope3(this, x, y)); break;
    }

    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
};

function MonotoneY(context) {
  this._context = new ReflectContext(context);
}

(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
  MonotoneX.prototype.point.call(this, y, x);
};

function ReflectContext(context) {
  this._context = context;
}

ReflectContext.prototype = {
  moveTo: function(x, y) { this._context.moveTo(y, x); },
  closePath: function() { this._context.closePath(); },
  lineTo: function(x, y) { this._context.lineTo(y, x); },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
};

function monotoneX(context) {
  return new MonotoneX(context);
}

function monotoneY(context) {
  return new MonotoneY(context);
}

function Natural(context) {
  this._context = context;
}

Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        n = x.length;

    if (n) {
      this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
      if (n === 2) {
        this._context.lineTo(x[1], y[1]);
      } else {
        var px = controlPoints(x),
            py = controlPoints(y);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
        }
      }
    }

    if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
function controlPoints(x) {
  var i,
      n = x.length - 1,
      m,
      a = new Array(n),
      b = new Array(n),
      r = new Array(n);
  a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
  for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
  a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
  for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
  b[n - 1] = (x[n] + a[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
  return [a, b];
}

function natural(context) {
  return new Natural(context);
}

function Step(context, t) {
  this._context = context;
  this._t = t;
}

Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y);
          this._context.lineTo(x, y);
        } else {
          var x1 = this._x * (1 - this._t) + x * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y);
        }
        break;
      }
    }
    this._x = x, this._y = y;
  }
};

function step(context) {
  return new Step(context, 0.5);
}

function stepBefore(context) {
  return new Step(context, 0);
}

function stepAfter(context) {
  return new Step(context, 1);
}

function none$1(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
}

function none(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0) o[n] = n;
  return o;
}

function stackValue(d, key) {
  return d[key];
}

function stackSeries(key) {
  const series = [];
  series.key = key;
  return series;
}

function stack() {
  var keys = constant([]),
      order = none,
      offset = none$1,
      value = stackValue;

  function stack(data) {
    var sz = Array.from(keys.apply(this, arguments), stackSeries),
        i, n = sz.length, j = -1,
        oz;

    for (const d of data) {
      for (i = 0, ++j; i < n; ++i) {
        (sz[i][j] = [0, +value(d, sz[i].key, j, data)]).data = d;
      }
    }

    for (i = 0, oz = array(order(sz)); i < n; ++i) {
      sz[oz[i]].index = i;
    }

    offset(sz, oz);
    return sz;
  }

  stack.keys = function(_) {
    return arguments.length ? (keys = typeof _ === "function" ? _ : constant(Array.from(_)), stack) : keys;
  };

  stack.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant(+_), stack) : value;
  };

  stack.order = function(_) {
    return arguments.length ? (order = _ == null ? none : typeof _ === "function" ? _ : constant(Array.from(_)), stack) : order;
  };

  stack.offset = function(_) {
    return arguments.length ? (offset = _ == null ? none$1 : _, stack) : offset;
  };

  return stack;
}

function expand(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
    for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
    if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
  }
  none$1(series, order);
}

function diverging(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length; j < m; ++j) {
    for (yp = yn = 0, i = 0; i < n; ++i) {
      if ((dy = (d = series[order[i]][j])[1] - d[0]) > 0) {
        d[0] = yp, d[1] = yp += dy;
      } else if (dy < 0) {
        d[1] = yn, d[0] = yn += dy;
      } else {
        d[0] = 0, d[1] = dy;
      }
    }
  }
}

function silhouette(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
    for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
    s0[j][1] += s0[j][0] = -y / 2;
  }
  none$1(series, order);
}

function wiggle(series, order) {
  if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
  for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
      var si = series[order[i]],
          sij0 = si[j][1] || 0,
          sij1 = si[j - 1][1] || 0,
          s3 = (sij0 - sij1) / 2;
      for (var k = 0; k < i; ++k) {
        var sk = series[order[k]],
            skj0 = sk[j][1] || 0,
            skj1 = sk[j - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      s1 += sij0, s2 += s3 * sij0;
    }
    s0[j - 1][1] += s0[j - 1][0] = y;
    if (s1) y -= s2 / s1;
  }
  s0[j - 1][1] += s0[j - 1][0] = y;
  none$1(series, order);
}

function appearance(series) {
  var peaks = series.map(peak);
  return none(series).sort(function(a, b) { return peaks[a] - peaks[b]; });
}

function peak(series) {
  var i = -1, j = 0, n = series.length, vi, vj = -Infinity;
  while (++i < n) if ((vi = +series[i][1]) > vj) vj = vi, j = i;
  return j;
}

function ascending(series) {
  var sums = series.map(sum);
  return none(series).sort(function(a, b) { return sums[a] - sums[b]; });
}

function sum(series) {
  var s = 0, i = -1, n = series.length, v;
  while (++i < n) if (v = +series[i][1]) s += v;
  return s;
}

function descending(series) {
  return ascending(series).reverse();
}

function insideOut(series) {
  var n = series.length,
      i,
      j,
      sums = series.map(sum),
      order = appearance(series),
      top = 0,
      bottom = 0,
      tops = [],
      bottoms = [];

  for (i = 0; i < n; ++i) {
    j = order[i];
    if (top < bottom) {
      top += sums[j];
      tops.push(j);
    } else {
      bottom += sums[j];
      bottoms.push(j);
    }
  }

  return bottoms.reverse().concat(tops);
}

function reverse(series) {
  return none(series).reverse();
}

exports.arc = arc;
exports.area = area;
exports.areaRadial = areaRadial;
exports.curveBasis = basis;
exports.curveBasisClosed = basisClosed;
exports.curveBasisOpen = basisOpen;
exports.curveBumpX = bumpX;
exports.curveBumpY = bumpY;
exports.curveBundle = bundle;
exports.curveCardinal = cardinal;
exports.curveCardinalClosed = cardinalClosed;
exports.curveCardinalOpen = cardinalOpen;
exports.curveCatmullRom = catmullRom;
exports.curveCatmullRomClosed = catmullRomClosed;
exports.curveCatmullRomOpen = catmullRomOpen;
exports.curveLinear = curveLinear;
exports.curveLinearClosed = linearClosed;
exports.curveMonotoneX = monotoneX;
exports.curveMonotoneY = monotoneY;
exports.curveNatural = natural;
exports.curveStep = step;
exports.curveStepAfter = stepAfter;
exports.curveStepBefore = stepBefore;
exports.line = line;
exports.lineRadial = lineRadial$1;
exports.linkHorizontal = linkHorizontal;
exports.linkRadial = linkRadial;
exports.linkVertical = linkVertical;
exports.pie = pie;
exports.pointRadial = pointRadial;
exports.radialArea = areaRadial;
exports.radialLine = lineRadial$1;
exports.stack = stack;
exports.stackOffsetDiverging = diverging;
exports.stackOffsetExpand = expand;
exports.stackOffsetNone = none$1;
exports.stackOffsetSilhouette = silhouette;
exports.stackOffsetWiggle = wiggle;
exports.stackOrderAppearance = appearance;
exports.stackOrderAscending = ascending;
exports.stackOrderDescending = descending;
exports.stackOrderInsideOut = insideOut;
exports.stackOrderNone = none;
exports.stackOrderReverse = reverse;
exports.symbol = symbol;
exports.symbolCircle = circle;
exports.symbolCross = cross;
exports.symbolDiamond = diamond;
exports.symbolSquare = square;
exports.symbolStar = star;
exports.symbolTriangle = triangle;
exports.symbolWye = wye;
exports.symbols = symbols;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "bmwU":
/*!****************************************************************!*\
  !*** ./node_modules/dagre-compound/dist/dagre-compound.umd.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,n){ true?n(exports):undefined}(this,(function(e){"use strict";var n,t,r,o;(n=e.HierarchyNodeType||(e.HierarchyNodeType={}))[n.META=0]="META",n[n.OP=1]="OP",n[n.SERIES=2]="SERIES",(t=e.NodeType||(e.NodeType={}))[t.META=0]="META",t[t.NODE=1]="NODE",t[t.BRIDGE=2]="BRIDGE",(r=e.InclusionType||(e.InclusionType={}))[r.INCLUDE=0]="INCLUDE",r[r.EXCLUDE=1]="EXCLUDE",r[r.UNSPECIFIED=2]="UNSPECIFIED",(o=e.GraphType||(e.GraphType={}))[o.META=0]="META",o[o.CORE=1]="CORE",o[o.BRIDGE=2]="BRIDGE";var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function a(e,n){return e(n={exports:{}},n.exports),n.exports}var u=function(){this.__data__=[],this.size=0};var c=function(e,n){return e===n||e!=e&&n!=n};var s=function(e,n){for(var t=e.length;t--;)if(c(e[t][0],n))return t;return-1},d=Array.prototype.splice;var f=function(e){var n=this.__data__,t=s(n,e);return!(t<0)&&(t==n.length-1?n.pop():d.call(n,t,1),--this.size,!0)};var h=function(e){var n=this.__data__,t=s(n,e);return t<0?void 0:n[t][1]};var l=function(e){return s(this.__data__,e)>-1};var p=function(e,n){var t=this.__data__,r=s(t,e);return r<0?(++this.size,t.push([e,n])):t[r][1]=n,this};function v(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}v.prototype.clear=u,v.prototype.delete=f,v.prototype.get=h,v.prototype.has=l,v.prototype.set=p;var g=v;var y=function(){this.__data__=new g,this.size=0};var b=function(e){var n=this.__data__,t=n.delete(e);return this.size=n.size,t};var m=function(e){return this.__data__.get(e)};var w=function(e){return this.__data__.has(e)},E="object"==typeof i&&i&&i.Object===Object&&i,_="object"==typeof self&&self&&self.Object===Object&&self,j=E||_||Function("return this")(),x=j.Symbol,N=Object.prototype,O=N.hasOwnProperty,k=N.toString,I=x?x.toStringTag:void 0;var S=function(e){var n=O.call(e,I),t=e[I];try{e[I]=void 0;var r=!0}catch(e){}var o=k.call(e);return r&&(n?e[I]=t:delete e[I]),o},T=Object.prototype.toString;var G=function(e){return T.call(e)},M=x?x.toStringTag:void 0;var C=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":M&&M in Object(e)?S(e):G(e)};var B=function(e){var n=typeof e;return null!=e&&("object"==n||"function"==n)};var R,A=function(e){if(!B(e))return!1;var n=C(e);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n},L=j["__core-js_shared__"],D=(R=/[^.]+$/.exec(L&&L.keys&&L.keys.IE_PROTO||""))?"Symbol(src)_1."+R:"";var P=function(e){return!!D&&D in e},z=Function.prototype.toString;var F=function(e){if(null!=e){try{return z.call(e)}catch(e){}try{return e+""}catch(e){}}return""},U=/^\[object .+?Constructor\]$/,V=Function.prototype,$=Object.prototype,H=V.toString,W=$.hasOwnProperty,q=RegExp("^"+H.call(W).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Y=function(e){return!(!B(e)||P(e))&&(A(e)?q:U).test(F(e))};var X=function(e,n){return null==e?void 0:e[n]};var J=function(e,n){var t=X(e,n);return Y(t)?t:void 0},K=J(j,"Map"),Q=J(Object,"create");var Z=function(){this.__data__=Q?Q(null):{},this.size=0};var ee=function(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n},ne=Object.prototype.hasOwnProperty;var te=function(e){var n=this.__data__;if(Q){var t=n[e];return"__lodash_hash_undefined__"===t?void 0:t}return ne.call(n,e)?n[e]:void 0},re=Object.prototype.hasOwnProperty;var oe=function(e){var n=this.__data__;return Q?void 0!==n[e]:re.call(n,e)};var ie=function(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Q&&void 0===n?"__lodash_hash_undefined__":n,this};function ae(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}ae.prototype.clear=Z,ae.prototype.delete=ee,ae.prototype.get=te,ae.prototype.has=oe,ae.prototype.set=ie;var ue=ae;var ce=function(){this.size=0,this.__data__={hash:new ue,map:new(K||g),string:new ue}};var se=function(e){var n=typeof e;return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e};var de=function(e,n){var t=e.__data__;return se(n)?t["string"==typeof n?"string":"hash"]:t.map};var fe=function(e){var n=de(this,e).delete(e);return this.size-=n?1:0,n};var he=function(e){return de(this,e).get(e)};var le=function(e){return de(this,e).has(e)};var pe=function(e,n){var t=de(this,e),r=t.size;return t.set(e,n),this.size+=t.size==r?0:1,this};function ve(e){var n=-1,t=null==e?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}ve.prototype.clear=ce,ve.prototype.delete=fe,ve.prototype.get=he,ve.prototype.has=le,ve.prototype.set=pe;var ge=ve;var ye=function(e,n){var t=this.__data__;if(t instanceof g){var r=t.__data__;if(!K||r.length<199)return r.push([e,n]),this.size=++t.size,this;t=this.__data__=new ge(r)}return t.set(e,n),this.size=t.size,this};function be(e){var n=this.__data__=new g(e);this.size=n.size}be.prototype.clear=y,be.prototype.delete=b,be.prototype.get=m,be.prototype.has=w,be.prototype.set=ye;var me=be;var we=function(e,n){for(var t=-1,r=null==e?0:e.length;++t<r&&!1!==n(e[t],t,e););return e},Ee=function(){try{var e=J(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();var _e=function(e,n,t){"__proto__"==n&&Ee?Ee(e,n,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[n]=t},je=Object.prototype.hasOwnProperty;var xe=function(e,n,t){var r=e[n];je.call(e,n)&&c(r,t)&&(void 0!==t||n in e)||_e(e,n,t)};var Ne=function(e,n,t,r){var o=!t;t||(t={});for(var i=-1,a=n.length;++i<a;){var u=n[i],c=r?r(t[u],e[u],u,t,e):void 0;void 0===c&&(c=e[u]),o?_e(t,u,c):xe(t,u,c)}return t};var Oe=function(e,n){for(var t=-1,r=Array(e);++t<e;)r[t]=n(t);return r};var ke=function(e){return null!=e&&"object"==typeof e};var Ie=function(e){return ke(e)&&"[object Arguments]"==C(e)},Se=Object.prototype,Te=Se.hasOwnProperty,Ge=Se.propertyIsEnumerable,Me=Ie(function(){return arguments}())?Ie:function(e){return ke(e)&&Te.call(e,"callee")&&!Ge.call(e,"callee")},Ce=Array.isArray;var Be=function(){return!1},Re=a((function(e,n){var t=n&&!n.nodeType&&n,r=t&&e&&!e.nodeType&&e,o=r&&r.exports===t?j.Buffer:void 0,i=(o?o.isBuffer:void 0)||Be;e.exports=i})),Ae=/^(?:0|[1-9]\d*)$/;var Le=function(e,n){var t=typeof e;return!!(n=null==n?9007199254740991:n)&&("number"==t||"symbol"!=t&&Ae.test(e))&&e>-1&&e%1==0&&e<n};var De=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Pe={};Pe["[object Float32Array]"]=Pe["[object Float64Array]"]=Pe["[object Int8Array]"]=Pe["[object Int16Array]"]=Pe["[object Int32Array]"]=Pe["[object Uint8Array]"]=Pe["[object Uint8ClampedArray]"]=Pe["[object Uint16Array]"]=Pe["[object Uint32Array]"]=!0,Pe["[object Arguments]"]=Pe["[object Array]"]=Pe["[object ArrayBuffer]"]=Pe["[object Boolean]"]=Pe["[object DataView]"]=Pe["[object Date]"]=Pe["[object Error]"]=Pe["[object Function]"]=Pe["[object Map]"]=Pe["[object Number]"]=Pe["[object Object]"]=Pe["[object RegExp]"]=Pe["[object Set]"]=Pe["[object String]"]=Pe["[object WeakMap]"]=!1;var ze=function(e){return ke(e)&&De(e.length)&&!!Pe[C(e)]};var Fe=function(e){return function(n){return e(n)}},Ue=a((function(e,n){var t=n&&!n.nodeType&&n,r=t&&e&&!e.nodeType&&e,o=r&&r.exports===t&&E.process,i=function(){try{var e=r&&r.require&&r.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=i})),Ve=Ue&&Ue.isTypedArray,$e=Ve?Fe(Ve):ze,He=Object.prototype.hasOwnProperty;var We=function(e,n){var t=Ce(e),r=!t&&Me(e),o=!t&&!r&&Re(e),i=!t&&!r&&!o&&$e(e),a=t||r||o||i,u=a?Oe(e.length,String):[],c=u.length;for(var s in e)!n&&!He.call(e,s)||a&&("length"==s||o&&("offset"==s||"parent"==s)||i&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||Le(s,c))||u.push(s);return u},qe=Object.prototype;var Ye=function(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||qe)};var Xe=function(e,n){return function(t){return e(n(t))}},Je=Xe(Object.keys,Object),Ke=Object.prototype.hasOwnProperty;var Qe=function(e){if(!Ye(e))return Je(e);var n=[];for(var t in Object(e))Ke.call(e,t)&&"constructor"!=t&&n.push(t);return n};var Ze=function(e){return null!=e&&De(e.length)&&!A(e)};var en=function(e){return Ze(e)?We(e):Qe(e)};var nn=function(e,n){return e&&Ne(n,en(n),e)};var tn=function(e){var n=[];if(null!=e)for(var t in Object(e))n.push(t);return n},rn=Object.prototype.hasOwnProperty;var on=function(e){if(!B(e))return tn(e);var n=Ye(e),t=[];for(var r in e)("constructor"!=r||!n&&rn.call(e,r))&&t.push(r);return t};var an=function(e){return Ze(e)?We(e,!0):on(e)};var un=function(e,n){return e&&Ne(n,an(n),e)},cn=a((function(e,n){var t=n&&!n.nodeType&&n,r=t&&e&&!e.nodeType&&e,o=r&&r.exports===t?j.Buffer:void 0,i=o?o.allocUnsafe:void 0;e.exports=function(e,n){if(n)return e.slice();var t=e.length,r=i?i(t):new e.constructor(t);return e.copy(r),r}}));var sn=function(e,n){var t=-1,r=e.length;for(n||(n=Array(r));++t<r;)n[t]=e[t];return n};var dn=function(e,n){for(var t=-1,r=null==e?0:e.length,o=0,i=[];++t<r;){var a=e[t];n(a,t,e)&&(i[o++]=a)}return i};var fn=function(){return[]},hn=Object.prototype.propertyIsEnumerable,ln=Object.getOwnPropertySymbols,pn=ln?function(e){return null==e?[]:(e=Object(e),dn(ln(e),(function(n){return hn.call(e,n)})))}:fn;var vn=function(e,n){return Ne(e,pn(e),n)};var gn=function(e,n){for(var t=-1,r=n.length,o=e.length;++t<r;)e[o+t]=n[t];return e},yn=Xe(Object.getPrototypeOf,Object),bn=Object.getOwnPropertySymbols?function(e){for(var n=[];e;)gn(n,pn(e)),e=yn(e);return n}:fn;var mn=function(e,n){return Ne(e,bn(e),n)};var wn=function(e,n,t){var r=n(e);return Ce(e)?r:gn(r,t(e))};var En=function(e){return wn(e,en,pn)};var _n=function(e){return wn(e,an,bn)},jn=J(j,"DataView"),xn=J(j,"Promise"),Nn=J(j,"Set"),On=J(j,"WeakMap"),kn="[object Map]",In="[object Promise]",Sn="[object Set]",Tn="[object WeakMap]",Gn="[object DataView]",Mn=F(jn),Cn=F(K),Bn=F(xn),Rn=F(Nn),An=F(On),Ln=C;(jn&&Ln(new jn(new ArrayBuffer(1)))!=Gn||K&&Ln(new K)!=kn||xn&&Ln(xn.resolve())!=In||Nn&&Ln(new Nn)!=Sn||On&&Ln(new On)!=Tn)&&(Ln=function(e){var n=C(e),t="[object Object]"==n?e.constructor:void 0,r=t?F(t):"";if(r)switch(r){case Mn:return Gn;case Cn:return kn;case Bn:return In;case Rn:return Sn;case An:return Tn}return n});var Dn=Ln,Pn=Object.prototype.hasOwnProperty;var zn=function(e){var n=e.length,t=new e.constructor(n);return n&&"string"==typeof e[0]&&Pn.call(e,"index")&&(t.index=e.index,t.input=e.input),t},Fn=j.Uint8Array;var Un=function(e){var n=new e.constructor(e.byteLength);return new Fn(n).set(new Fn(e)),n};var Vn=function(e,n){var t=n?Un(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)},$n=/\w*$/;var Hn=function(e){var n=new e.constructor(e.source,$n.exec(e));return n.lastIndex=e.lastIndex,n},Wn=x?x.prototype:void 0,qn=Wn?Wn.valueOf:void 0;var Yn=function(e){return qn?Object(qn.call(e)):{}};var Xn=function(e,n){var t=n?Un(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)};var Jn=function(e,n,t){var r=e.constructor;switch(n){case"[object ArrayBuffer]":return Un(e);case"[object Boolean]":case"[object Date]":return new r(+e);case"[object DataView]":return Vn(e,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Xn(e,t);case"[object Map]":return new r;case"[object Number]":case"[object String]":return new r(e);case"[object RegExp]":return Hn(e);case"[object Set]":return new r;case"[object Symbol]":return Yn(e)}},Kn=Object.create,Qn=function(){function e(){}return function(n){if(!B(n))return{};if(Kn)return Kn(n);e.prototype=n;var t=new e;return e.prototype=void 0,t}}();var Zn=function(e){return"function"!=typeof e.constructor||Ye(e)?{}:Qn(yn(e))};var et=function(e){return ke(e)&&"[object Map]"==Dn(e)},nt=Ue&&Ue.isMap,tt=nt?Fe(nt):et;var rt=function(e){return ke(e)&&"[object Set]"==Dn(e)},ot=Ue&&Ue.isSet,it=ot?Fe(ot):rt,at="[object Arguments]",ut="[object Function]",ct="[object Object]",st={};st[at]=st["[object Array]"]=st["[object ArrayBuffer]"]=st["[object DataView]"]=st["[object Boolean]"]=st["[object Date]"]=st["[object Float32Array]"]=st["[object Float64Array]"]=st["[object Int8Array]"]=st["[object Int16Array]"]=st["[object Int32Array]"]=st["[object Map]"]=st["[object Number]"]=st[ct]=st["[object RegExp]"]=st["[object Set]"]=st["[object String]"]=st["[object Symbol]"]=st["[object Uint8Array]"]=st["[object Uint8ClampedArray]"]=st["[object Uint16Array]"]=st["[object Uint32Array]"]=!0,st["[object Error]"]=st[ut]=st["[object WeakMap]"]=!1;var dt=function e(n,t,r,o,i,a){var u,c=1&t,s=2&t,d=4&t;if(r&&(u=i?r(n,o,i,a):r(n)),void 0!==u)return u;if(!B(n))return n;var f=Ce(n);if(f){if(u=zn(n),!c)return sn(n,u)}else{var h=Dn(n),l=h==ut||"[object GeneratorFunction]"==h;if(Re(n))return cn(n,c);if(h==ct||h==at||l&&!i){if(u=s||l?{}:Zn(n),!c)return s?mn(n,un(u,n)):vn(n,nn(u,n))}else{if(!st[h])return i?n:{};u=Jn(n,h,c)}}a||(a=new me);var p=a.get(n);if(p)return p;a.set(n,u),it(n)?n.forEach((function(o){u.add(e(o,t,r,o,n,a))})):tt(n)&&n.forEach((function(o,i){u.set(i,e(o,t,r,i,n,a))}));var v=f?void 0:(d?s?_n:En:s?an:en)(n);return we(v||n,(function(o,i){v&&(o=n[i=o]),xe(u,i,e(o,t,r,i,n,a))})),u};var ft=function(e){return dt(e,4)};var ht=function(e){return function(){return e}};var lt=function(e){return function(n,t,r){for(var o=-1,i=Object(n),a=r(n),u=a.length;u--;){var c=a[e?u:++o];if(!1===t(i[c],c,i))break}return n}}();var pt=function(e,n){return e&&lt(e,n,en)};var vt=function(e,n){return function(t,r){if(null==t)return t;if(!Ze(t))return e(t,r);for(var o=t.length,i=n?o:-1,a=Object(t);(n?i--:++i<o)&&!1!==r(a[i],i,a););return t}}(pt);var gt=function(e){return e};var yt=function(e){return"function"==typeof e?e:gt};var bt=function(e,n){return(Ce(e)?we:vt)(e,yt(n))},mt=bt;var wt=function(e,n){var t=[];return vt(e,(function(e,r,o){n(e,r,o)&&t.push(e)})),t};var Et=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this};var _t=function(e){return this.__data__.has(e)};function jt(e){var n=-1,t=null==e?0:e.length;for(this.__data__=new ge;++n<t;)this.add(e[n])}jt.prototype.add=jt.prototype.push=Et,jt.prototype.has=_t;var xt=jt;var Nt=function(e,n){for(var t=-1,r=null==e?0:e.length;++t<r;)if(n(e[t],t,e))return!0;return!1};var Ot=function(e,n){return e.has(n)};var kt=function(e,n,t,r,o,i){var a=1&t,u=e.length,c=n.length;if(u!=c&&!(a&&c>u))return!1;var s=i.get(e),d=i.get(n);if(s&&d)return s==n&&d==e;var f=-1,h=!0,l=2&t?new xt:void 0;for(i.set(e,n),i.set(n,e);++f<u;){var p=e[f],v=n[f];if(r)var g=a?r(v,p,f,n,e,i):r(p,v,f,e,n,i);if(void 0!==g){if(g)continue;h=!1;break}if(l){if(!Nt(n,(function(e,n){if(!Ot(l,n)&&(p===e||o(p,e,t,r,i)))return l.push(n)}))){h=!1;break}}else if(p!==v&&!o(p,v,t,r,i)){h=!1;break}}return i.delete(e),i.delete(n),h};var It=function(e){var n=-1,t=Array(e.size);return e.forEach((function(e,r){t[++n]=[r,e]})),t};var St=function(e){var n=-1,t=Array(e.size);return e.forEach((function(e){t[++n]=e})),t},Tt=x?x.prototype:void 0,Gt=Tt?Tt.valueOf:void 0;var Mt=function(e,n,t,r,o,i,a){switch(t){case"[object DataView]":if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=n.byteLength||!i(new Fn(e),new Fn(n)));case"[object Boolean]":case"[object Date]":case"[object Number]":return c(+e,+n);case"[object Error]":return e.name==n.name&&e.message==n.message;case"[object RegExp]":case"[object String]":return e==n+"";case"[object Map]":var u=It;case"[object Set]":var s=1&r;if(u||(u=St),e.size!=n.size&&!s)return!1;var d=a.get(e);if(d)return d==n;r|=2,a.set(e,n);var f=kt(u(e),u(n),r,o,i,a);return a.delete(e),f;case"[object Symbol]":if(Gt)return Gt.call(e)==Gt.call(n)}return!1},Ct=Object.prototype.hasOwnProperty;var Bt=function(e,n,t,r,o,i){var a=1&t,u=En(e),c=u.length;if(c!=En(n).length&&!a)return!1;for(var s=c;s--;){var d=u[s];if(!(a?d in n:Ct.call(n,d)))return!1}var f=i.get(e),h=i.get(n);if(f&&h)return f==n&&h==e;var l=!0;i.set(e,n),i.set(n,e);for(var p=a;++s<c;){var v=e[d=u[s]],g=n[d];if(r)var y=a?r(g,v,d,n,e,i):r(v,g,d,e,n,i);if(!(void 0===y?v===g||o(v,g,t,r,i):y)){l=!1;break}p||(p="constructor"==d)}if(l&&!p){var b=e.constructor,m=n.constructor;b==m||!("constructor"in e)||!("constructor"in n)||"function"==typeof b&&b instanceof b&&"function"==typeof m&&m instanceof m||(l=!1)}return i.delete(e),i.delete(n),l},Rt="[object Arguments]",At="[object Array]",Lt="[object Object]",Dt=Object.prototype.hasOwnProperty;var Pt=function(e,n,t,r,o,i){var a=Ce(e),u=Ce(n),c=a?At:Dn(e),s=u?At:Dn(n),d=(c=c==Rt?Lt:c)==Lt,f=(s=s==Rt?Lt:s)==Lt,h=c==s;if(h&&Re(e)){if(!Re(n))return!1;a=!0,d=!1}if(h&&!d)return i||(i=new me),a||$e(e)?kt(e,n,t,r,o,i):Mt(e,n,c,t,r,o,i);if(!(1&t)){var l=d&&Dt.call(e,"__wrapped__"),p=f&&Dt.call(n,"__wrapped__");if(l||p){var v=l?e.value():e,g=p?n.value():n;return i||(i=new me),o(v,g,t,r,i)}}return!!h&&(i||(i=new me),Bt(e,n,t,r,o,i))};var zt=function e(n,t,r,o,i){return n===t||(null==n||null==t||!ke(n)&&!ke(t)?n!=n&&t!=t:Pt(n,t,r,o,e,i))};var Ft=function(e,n,t,r){var o=t.length,i=o,a=!r;if(null==e)return!i;for(e=Object(e);o--;){var u=t[o];if(a&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<i;){var c=(u=t[o])[0],s=e[c],d=u[1];if(a&&u[2]){if(void 0===s&&!(c in e))return!1}else{var f=new me;if(r)var h=r(s,d,c,e,n,f);if(!(void 0===h?zt(d,s,3,r,f):h))return!1}}return!0};var Ut=function(e){return e==e&&!B(e)};var Vt=function(e){for(var n=en(e),t=n.length;t--;){var r=n[t],o=e[r];n[t]=[r,o,Ut(o)]}return n};var $t=function(e,n){return function(t){return null!=t&&(t[e]===n&&(void 0!==n||e in Object(t)))}};var Ht=function(e){var n=Vt(e);return 1==n.length&&n[0][2]?$t(n[0][0],n[0][1]):function(t){return t===e||Ft(t,e,n)}};var Wt=function(e){return"symbol"==typeof e||ke(e)&&"[object Symbol]"==C(e)},qt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Yt=/^\w*$/;var Xt=function(e,n){if(Ce(e))return!1;var t=typeof e;return!("number"!=t&&"symbol"!=t&&"boolean"!=t&&null!=e&&!Wt(e))||(Yt.test(e)||!qt.test(e)||null!=n&&e in Object(n))};function Jt(e,n){if("function"!=typeof e||null!=n&&"function"!=typeof n)throw new TypeError("Expected a function");var t=function(){var r=arguments,o=n?n.apply(this,r):r[0],i=t.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return t.cache=i.set(o,a)||i,a};return t.cache=new(Jt.Cache||ge),t}Jt.Cache=ge;var Kt=Jt;var Qt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Zt=/\\(\\)?/g,er=function(e){var n=Kt(e,(function(e){return 500===t.size&&t.clear(),e})),t=n.cache;return n}((function(e){var n=[];return 46===e.charCodeAt(0)&&n.push(""),e.replace(Qt,(function(e,t,r,o){n.push(r?o.replace(Zt,"$1"):t||e)})),n}));var nr=function(e,n){for(var t=-1,r=null==e?0:e.length,o=Array(r);++t<r;)o[t]=n(e[t],t,e);return o},tr=x?x.prototype:void 0,rr=tr?tr.toString:void 0;var or=function e(n){if("string"==typeof n)return n;if(Ce(n))return nr(n,e)+"";if(Wt(n))return rr?rr.call(n):"";var t=n+"";return"0"==t&&1/n==-Infinity?"-0":t};var ir=function(e){return null==e?"":or(e)};var ar=function(e,n){return Ce(e)?e:Xt(e,n)?[e]:er(ir(e))};var ur=function(e){if("string"==typeof e||Wt(e))return e;var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n};var cr=function(e,n){for(var t=0,r=(n=ar(n,e)).length;null!=e&&t<r;)e=e[ur(n[t++])];return t&&t==r?e:void 0};var sr=function(e,n,t){var r=null==e?void 0:cr(e,n);return void 0===r?t:r};var dr=function(e,n){return null!=e&&n in Object(e)};var fr=function(e,n,t){for(var r=-1,o=(n=ar(n,e)).length,i=!1;++r<o;){var a=ur(n[r]);if(!(i=null!=e&&t(e,a)))break;e=e[a]}return i||++r!=o?i:!!(o=null==e?0:e.length)&&De(o)&&Le(a,o)&&(Ce(e)||Me(e))};var hr=function(e,n){return null!=e&&fr(e,n,dr)};var lr=function(e,n){return Xt(e)&&Ut(n)?$t(ur(e),n):function(t){var r=sr(t,e);return void 0===r&&r===n?hr(t,e):zt(n,r,3)}};var pr=function(e){return function(n){return null==n?void 0:n[e]}};var vr=function(e){return function(n){return cr(n,e)}};var gr=function(e){return Xt(e)?pr(ur(e)):vr(e)};var yr=function(e){return"function"==typeof e?e:null==e?gt:"object"==typeof e?Ce(e)?lr(e[0],e[1]):Ht(e):gr(e)};var br=function(e,n){return(Ce(e)?dn:wt)(e,yr(n))},mr=Object.prototype.hasOwnProperty;var wr=function(e,n){return null!=e&&mr.call(e,n)};var Er=function(e,n){return null!=e&&fr(e,n,wr)},_r=Object.prototype.hasOwnProperty;var jr=function(e){if(null==e)return!0;if(Ze(e)&&(Ce(e)||"string"==typeof e||"function"==typeof e.splice||Re(e)||$e(e)||Me(e)))return!e.length;var n=Dn(e);if("[object Map]"==n||"[object Set]"==n)return!e.size;if(Ye(e))return!Qe(e).length;for(var t in e)if(_r.call(e,t))return!1;return!0};var xr=function(e){return void 0===e};var Nr=function(e,n){var t=-1,r=Ze(e)?Array(e.length):[];return vt(e,(function(e,o,i){r[++t]=n(e,o,i)})),r};var Or=function(e,n){return(Ce(e)?nr:Nr)(e,yr(n))};var kr=function(e,n,t,r){var o=-1,i=null==e?0:e.length;for(r&&i&&(t=e[++o]);++o<i;)t=n(t,e[o],o,e);return t};var Ir=function(e,n,t,r,o){return o(e,(function(e,o,i){t=r?(r=!1,e):n(t,e,o,i)})),t};var Sr=function(e,n,t){var r=Ce(e)?kr:Ir,o=arguments.length<3;return r(e,yr(n),t,o,vt)};var Tr=function(e){return"string"==typeof e||!Ce(e)&&ke(e)&&"[object String]"==C(e)},Gr=pr("length"),Mr=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var Cr=function(e){return Mr.test(e)},Br="[\\ud800-\\udfff]",Rr="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",Ar="\\ud83c[\\udffb-\\udfff]",Lr="[^\\ud800-\\udfff]",Dr="(?:\\ud83c[\\udde6-\\uddff]){2}",Pr="[\\ud800-\\udbff][\\udc00-\\udfff]",zr="(?:"+Rr+"|"+Ar+")"+"?",Fr="[\\ufe0e\\ufe0f]?",Ur=Fr+zr+("(?:\\u200d(?:"+[Lr,Dr,Pr].join("|")+")"+Fr+zr+")*"),Vr="(?:"+[Lr+Rr+"?",Rr,Dr,Pr,Br].join("|")+")",$r=RegExp(Ar+"(?="+Ar+")|"+Vr+Ur,"g");var Hr=function(e){for(var n=$r.lastIndex=0;$r.test(e);)++n;return n};var Wr=function(e){return Cr(e)?Hr(e):Gr(e)};var qr=function(e){if(null==e)return 0;if(Ze(e))return Tr(e)?Wr(e):e.length;var n=Dn(e);return"[object Map]"==n||"[object Set]"==n?e.size:Qe(e).length};var Yr=function(e,n,t){var r=Ce(e),o=r||Re(e)||$e(e);if(n=yr(n),null==t){var i=e&&e.constructor;t=o?r?new i:[]:B(e)&&A(i)?Qn(yn(e)):{}}return(o?we:pt)(e,(function(e,r,o){return n(t,e,r,o)})),t},Xr=x?x.isConcatSpreadable:void 0;var Jr=function(e){return Ce(e)||Me(e)||!!(Xr&&e&&e[Xr])};var Kr=function e(n,t,r,o,i){var a=-1,u=n.length;for(r||(r=Jr),i||(i=[]);++a<u;){var c=n[a];t>0&&r(c)?t>1?e(c,t-1,r,o,i):gn(i,c):o||(i[i.length]=c)}return i};var Qr=function(e,n,t){switch(t.length){case 0:return e.call(n);case 1:return e.call(n,t[0]);case 2:return e.call(n,t[0],t[1]);case 3:return e.call(n,t[0],t[1],t[2])}return e.apply(n,t)},Zr=Math.max;var eo=function(e,n,t){return n=Zr(void 0===n?e.length-1:n,0),function(){for(var r=arguments,o=-1,i=Zr(r.length-n,0),a=Array(i);++o<i;)a[o]=r[n+o];o=-1;for(var u=Array(n+1);++o<n;)u[o]=r[o];return u[n]=t(a),Qr(e,this,u)}},no=Ee?function(e,n){return Ee(e,"toString",{configurable:!0,enumerable:!1,value:ht(n),writable:!0})}:gt,to=Date.now;var ro=function(e){var n=0,t=0;return function(){var r=to(),o=16-(r-t);if(t=r,o>0){if(++n>=800)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}(no);var oo=function(e,n){return ro(eo(e,n,gt),e+"")};var io=function(e,n,t,r){for(var o=e.length,i=t+(r?1:-1);r?i--:++i<o;)if(n(e[i],i,e))return i;return-1};var ao=function(e){return e!=e};var uo=function(e,n,t){for(var r=t-1,o=e.length;++r<o;)if(e[r]===n)return r;return-1};var co=function(e,n,t){return n==n?uo(e,n,t):io(e,ao,t)};var so=function(e,n){return!!(null==e?0:e.length)&&co(e,n,0)>-1};var fo=function(e,n,t){for(var r=-1,o=null==e?0:e.length;++r<o;)if(t(n,e[r]))return!0;return!1};var ho=function(){},lo=Nn&&1/St(new Nn([,-0]))[1]==1/0?function(e){return new Nn(e)}:ho;var po=function(e,n,t){var r=-1,o=so,i=e.length,a=!0,u=[],c=u;if(t)a=!1,o=fo;else if(i>=200){var s=n?null:lo(e);if(s)return St(s);a=!1,o=Ot,c=new xt}else c=n?[]:u;e:for(;++r<i;){var d=e[r],f=n?n(d):d;if(d=t||0!==d?d:0,a&&f==f){for(var h=c.length;h--;)if(c[h]===f)continue e;n&&c.push(f),u.push(d)}else o(c,f,t)||(c!==u&&c.push(f),u.push(d))}return u};var vo=function(e){return ke(e)&&Ze(e)},go=oo((function(e){return po(Kr(e,1,vo,!0))}));var yo=function(e,n){return nr(n,(function(n){return e[n]}))};var bo,mo=function(e){return null==e?[]:yo(e,en(e))};try{bo={clone:ft,constant:ht,each:mt,filter:br,has:Er,isArray:Ce,isEmpty:jr,isFunction:A,isUndefined:xr,keys:en,map:Or,reduce:Sr,size:qr,transform:Yr,union:go,values:mo}}catch(e){}bo||(bo=window._);var wo=bo,Eo=jo,_o="\0";function jo(e){this._isDirected=!wo.has(e,"directed")||e.directed,this._isMultigraph=!!wo.has(e,"multigraph")&&e.multigraph,this._isCompound=!!wo.has(e,"compound")&&e.compound,this._label=void 0,this._defaultNodeLabelFn=wo.constant(void 0),this._defaultEdgeLabelFn=wo.constant(void 0),this._nodes={},this._isCompound&&(this._parent={},this._children={},this._children["\0"]={}),this._in={},this._preds={},this._out={},this._sucs={},this._edgeObjs={},this._edgeLabels={}}function xo(e,n){e[n]?e[n]++:e[n]=1}function No(e,n){--e[n]||delete e[n]}function Oo(e,n,t,r){var o=""+n,i=""+t;if(!e&&o>i){var a=o;o=i,i=a}return o+""+i+""+(wo.isUndefined(r)?"\0":r)}function ko(e,n,t,r){var o=""+n,i=""+t;if(!e&&o>i){var a=o;o=i,i=a}var u={v:o,w:i};return r&&(u.name=r),u}function Io(e,n){return Oo(e,n.v,n.w,n.name)}jo.prototype._nodeCount=0,jo.prototype._edgeCount=0,jo.prototype.isDirected=function(){return this._isDirected},jo.prototype.isMultigraph=function(){return this._isMultigraph},jo.prototype.isCompound=function(){return this._isCompound},jo.prototype.setGraph=function(e){return this._label=e,this},jo.prototype.graph=function(){return this._label},jo.prototype.setDefaultNodeLabel=function(e){return wo.isFunction(e)||(e=wo.constant(e)),this._defaultNodeLabelFn=e,this},jo.prototype.nodeCount=function(){return this._nodeCount},jo.prototype.nodes=function(){return wo.keys(this._nodes)},jo.prototype.sources=function(){var e=this;return wo.filter(this.nodes(),(function(n){return wo.isEmpty(e._in[n])}))},jo.prototype.sinks=function(){var e=this;return wo.filter(this.nodes(),(function(n){return wo.isEmpty(e._out[n])}))},jo.prototype.setNodes=function(e,n){var t=arguments,r=this;return wo.each(e,(function(e){t.length>1?r.setNode(e,n):r.setNode(e)})),this},jo.prototype.setNode=function(e,n){return wo.has(this._nodes,e)?(arguments.length>1&&(this._nodes[e]=n),this):(this._nodes[e]=arguments.length>1?n:this._defaultNodeLabelFn(e),this._isCompound&&(this._parent[e]=_o,this._children[e]={},this._children["\0"][e]=!0),this._in[e]={},this._preds[e]={},this._out[e]={},this._sucs[e]={},++this._nodeCount,this)},jo.prototype.node=function(e){return this._nodes[e]},jo.prototype.hasNode=function(e){return wo.has(this._nodes,e)},jo.prototype.removeNode=function(e){var n=this;if(wo.has(this._nodes,e)){var t=function(e){n.removeEdge(n._edgeObjs[e])};delete this._nodes[e],this._isCompound&&(this._removeFromParentsChildList(e),delete this._parent[e],wo.each(this.children(e),(function(e){n.setParent(e)})),delete this._children[e]),wo.each(wo.keys(this._in[e]),t),delete this._in[e],delete this._preds[e],wo.each(wo.keys(this._out[e]),t),delete this._out[e],delete this._sucs[e],--this._nodeCount}return this},jo.prototype.setParent=function(e,n){if(!this._isCompound)throw new Error("Cannot set parent in a non-compound graph");if(wo.isUndefined(n))n=_o;else{for(var t=n+="";!wo.isUndefined(t);t=this.parent(t))if(t===e)throw new Error("Setting "+n+" as parent of "+e+" would create a cycle");this.setNode(n)}return this.setNode(e),this._removeFromParentsChildList(e),this._parent[e]=n,this._children[n][e]=!0,this},jo.prototype._removeFromParentsChildList=function(e){delete this._children[this._parent[e]][e]},jo.prototype.parent=function(e){if(this._isCompound){var n=this._parent[e];if(n!==_o)return n}},jo.prototype.children=function(e){if(wo.isUndefined(e)&&(e=_o),this._isCompound){var n=this._children[e];if(n)return wo.keys(n)}else{if(e===_o)return this.nodes();if(this.hasNode(e))return[]}},jo.prototype.predecessors=function(e){var n=this._preds[e];if(n)return wo.keys(n)},jo.prototype.successors=function(e){var n=this._sucs[e];if(n)return wo.keys(n)},jo.prototype.neighbors=function(e){var n=this.predecessors(e);if(n)return wo.union(n,this.successors(e))},jo.prototype.isLeaf=function(e){return 0===(this.isDirected()?this.successors(e):this.neighbors(e)).length},jo.prototype.filterNodes=function(e){var n=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});n.setGraph(this.graph());var t=this;wo.each(this._nodes,(function(t,r){e(r)&&n.setNode(r,t)})),wo.each(this._edgeObjs,(function(e){n.hasNode(e.v)&&n.hasNode(e.w)&&n.setEdge(e,t.edge(e))}));var r={};function o(e){var i=t.parent(e);return void 0===i||n.hasNode(i)?(r[e]=i,i):i in r?r[i]:o(i)}return this._isCompound&&wo.each(n.nodes(),(function(e){n.setParent(e,o(e))})),n},jo.prototype.setDefaultEdgeLabel=function(e){return wo.isFunction(e)||(e=wo.constant(e)),this._defaultEdgeLabelFn=e,this},jo.prototype.edgeCount=function(){return this._edgeCount},jo.prototype.edges=function(){return wo.values(this._edgeObjs)},jo.prototype.setPath=function(e,n){var t=this,r=arguments;return wo.reduce(e,(function(e,o){return r.length>1?t.setEdge(e,o,n):t.setEdge(e,o),o})),this},jo.prototype.setEdge=function(){var e,n,t,r,o=!1,i=arguments[0];"object"==typeof i&&null!==i&&"v"in i?(e=i.v,n=i.w,t=i.name,2===arguments.length&&(r=arguments[1],o=!0)):(e=i,n=arguments[1],t=arguments[3],arguments.length>2&&(r=arguments[2],o=!0)),e=""+e,n=""+n,wo.isUndefined(t)||(t=""+t);var a=Oo(this._isDirected,e,n,t);if(wo.has(this._edgeLabels,a))return o&&(this._edgeLabels[a]=r),this;if(!wo.isUndefined(t)&&!this._isMultigraph)throw new Error("Cannot set a named edge when isMultigraph = false");this.setNode(e),this.setNode(n),this._edgeLabels[a]=o?r:this._defaultEdgeLabelFn(e,n,t);var u=ko(this._isDirected,e,n,t);return e=u.v,n=u.w,Object.freeze(u),this._edgeObjs[a]=u,xo(this._preds[n],e),xo(this._sucs[e],n),this._in[n][a]=u,this._out[e][a]=u,this._edgeCount++,this},jo.prototype.edge=function(e,n,t){var r=1===arguments.length?Io(this._isDirected,arguments[0]):Oo(this._isDirected,e,n,t);return this._edgeLabels[r]},jo.prototype.hasEdge=function(e,n,t){var r=1===arguments.length?Io(this._isDirected,arguments[0]):Oo(this._isDirected,e,n,t);return wo.has(this._edgeLabels,r)},jo.prototype.removeEdge=function(e,n,t){var r=1===arguments.length?Io(this._isDirected,arguments[0]):Oo(this._isDirected,e,n,t),o=this._edgeObjs[r];return o&&(e=o.v,n=o.w,delete this._edgeLabels[r],delete this._edgeObjs[r],No(this._preds[n],e),No(this._sucs[e],n),delete this._in[n][r],delete this._out[e][r],this._edgeCount--),this},jo.prototype.inEdges=function(e,n){var t=this._in[e];if(t){var r=wo.values(t);return n?wo.filter(r,(function(e){return e.v===n})):r}},jo.prototype.outEdges=function(e,n){var t=this._out[e];if(t){var r=wo.values(t);return n?wo.filter(r,(function(e){return e.w===n})):r}},jo.prototype.nodeEdges=function(e,n){var t=this.inEdges(e,n);if(t)return t.concat(this.outEdges(e,n))};var So={Graph:Eo,version:"2.1.8"},To={write:function(e){var n={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:Go(e),edges:Mo(e)};wo.isUndefined(e.graph())||(n.value=wo.clone(e.graph()));return n},read:function(e){var n=new Eo(e.options).setGraph(e.value);return wo.each(e.nodes,(function(e){n.setNode(e.v,e.value),e.parent&&n.setParent(e.v,e.parent)})),wo.each(e.edges,(function(e){n.setEdge({v:e.v,w:e.w,name:e.name},e.value)})),n}};function Go(e){return wo.map(e.nodes(),(function(n){var t=e.node(n),r=e.parent(n),o={v:n};return wo.isUndefined(t)||(o.value=t),wo.isUndefined(r)||(o.parent=r),o}))}function Mo(e){return wo.map(e.edges(),(function(n){var t=e.edge(n),r={v:n.v,w:n.w};return wo.isUndefined(n.name)||(r.name=n.name),wo.isUndefined(t)||(r.value=t),r}))}var Co=function(e){var n,t={},r=[];function o(r){wo.has(t,r)||(t[r]=!0,n.push(r),wo.each(e.successors(r),o),wo.each(e.predecessors(r),o))}return wo.each(e.nodes(),(function(e){n=[],o(e),n.length&&r.push(n)})),r};var Bo=Ro;function Ro(){this._arr=[],this._keyIndices={}}Ro.prototype.size=function(){return this._arr.length},Ro.prototype.keys=function(){return this._arr.map((function(e){return e.key}))},Ro.prototype.has=function(e){return wo.has(this._keyIndices,e)},Ro.prototype.priority=function(e){var n=this._keyIndices[e];if(void 0!==n)return this._arr[n].priority},Ro.prototype.min=function(){if(0===this.size())throw new Error("Queue underflow");return this._arr[0].key},Ro.prototype.add=function(e,n){var t=this._keyIndices;if(e=String(e),!wo.has(t,e)){var r=this._arr,o=r.length;return t[e]=o,r.push({key:e,priority:n}),this._decrease(o),!0}return!1},Ro.prototype.removeMin=function(){this._swap(0,this._arr.length-1);var e=this._arr.pop();return delete this._keyIndices[e.key],this._heapify(0),e.key},Ro.prototype.decrease=function(e,n){var t=this._keyIndices[e];if(n>this._arr[t].priority)throw new Error("New priority is greater than current priority. Key: "+e+" Old: "+this._arr[t].priority+" New: "+n);this._arr[t].priority=n,this._decrease(t)},Ro.prototype._heapify=function(e){var n=this._arr,t=2*e,r=t+1,o=e;t<n.length&&(o=n[t].priority<n[o].priority?t:o,r<n.length&&(o=n[r].priority<n[o].priority?r:o),o!==e&&(this._swap(e,o),this._heapify(o)))},Ro.prototype._decrease=function(e){for(var n,t=this._arr,r=t[e].priority;0!==e&&!(t[n=e>>1].priority<r);)this._swap(e,n),e=n},Ro.prototype._swap=function(e,n){var t=this._arr,r=this._keyIndices,o=t[e],i=t[n];t[e]=i,t[n]=o,r[i.key]=e,r[o.key]=n};var Ao=function(e,n,t,r){return function(e,n,t,r){var o,i,a={},u=new Bo,c=function(e){var n=e.v!==o?e.v:e.w,r=a[n],c=t(e),s=i.distance+c;if(c<0)throw new Error("dijkstra does not allow negative edge weights. Bad edge: "+e+" Weight: "+c);s<r.distance&&(r.distance=s,r.predecessor=o,u.decrease(n,s))};e.nodes().forEach((function(e){var t=e===n?0:Number.POSITIVE_INFINITY;a[e]={distance:t},u.add(e,t)}));for(;u.size()>0&&(o=u.removeMin(),(i=a[o]).distance!==Number.POSITIVE_INFINITY);)r(o).forEach(c);return a}(e,String(n),t||Lo,r||function(n){return e.outEdges(n)})},Lo=wo.constant(1);var Do=function(e,n,t){return wo.transform(e.nodes(),(function(r,o){r[o]=Ao(e,o,n,t)}),{})};var Po=function(e){var n=0,t=[],r={},o=[];function i(a){var u=r[a]={onStack:!0,lowlink:n,index:n++};if(t.push(a),e.successors(a).forEach((function(e){wo.has(r,e)?r[e].onStack&&(u.lowlink=Math.min(u.lowlink,r[e].index)):(i(e),u.lowlink=Math.min(u.lowlink,r[e].lowlink))})),u.lowlink===u.index){var c,s=[];do{c=t.pop(),r[c].onStack=!1,s.push(c)}while(a!==c);o.push(s)}}return e.nodes().forEach((function(e){wo.has(r,e)||i(e)})),o};var zo=function(e){return wo.filter(Po(e),(function(n){return n.length>1||1===n.length&&e.hasEdge(n[0],n[0])}))};var Fo=function(e,n,t){return function(e,n,t){var r={},o=e.nodes();return o.forEach((function(e){r[e]={},r[e][e]={distance:0},o.forEach((function(n){e!==n&&(r[e][n]={distance:Number.POSITIVE_INFINITY})})),t(e).forEach((function(t){var o=t.v===e?t.w:t.v,i=n(t);r[e][o]={distance:i,predecessor:e}}))})),o.forEach((function(e){var n=r[e];o.forEach((function(t){var i=r[t];o.forEach((function(t){var r=i[e],o=n[t],a=i[t],u=r.distance+o.distance;u<a.distance&&(a.distance=u,a.predecessor=o.predecessor)}))}))})),r}(e,n||Uo,t||function(n){return e.outEdges(n)})},Uo=wo.constant(1);var Vo=$o;function $o(e){var n={},t={},r=[];if(wo.each(e.sinks(),(function o(i){if(wo.has(t,i))throw new Ho;wo.has(n,i)||(t[i]=!0,n[i]=!0,wo.each(e.predecessors(i),o),delete t[i],r.push(i))})),wo.size(n)!==e.nodeCount())throw new Ho;return r}function Ho(){}$o.CycleException=Ho,Ho.prototype=new Error;var Wo=function(e,n,t){wo.isArray(n)||(n=[n]);var r=(e.isDirected()?e.successors:e.neighbors).bind(e),o=[],i={};return wo.each(n,(function(n){if(!e.hasNode(n))throw new Error("Graph does not have node: "+n);qo(e,n,"post"===t,i,r,o)})),o};function qo(e,n,t,r,o,i){wo.has(r,n)||(r[n]=!0,t||i.push(n),wo.each(o(n),(function(n){qo(e,n,t,r,o,i)})),t&&i.push(n))}var Yo,Xo={Graph:So.Graph,json:To,alg:{components:Co,dijkstra:Ao,dijkstraAll:Do,findCycles:zo,floydWarshall:Fo,isAcyclic:function(e){try{Vo(e)}catch(e){if(e instanceof Vo.CycleException)return!1;throw e}return!0},postorder:function(e,n){return Wo(e,n,"post")},preorder:function(e,n){return Wo(e,n,"pre")},prim:function(e,n){var t,r=new Eo,o={},i=new Bo;function a(e){var r=e.v===t?e.w:e.v,a=i.priority(r);if(void 0!==a){var u=n(e);u<a&&(o[r]=t,i.decrease(r,u))}}if(0===e.nodeCount())return r;wo.each(e.nodes(),(function(e){i.add(e,Number.POSITIVE_INFINITY),r.setNode(e)})),i.decrease(e.nodes()[0],0);var u=!1;for(;i.size()>0;){if(t=i.removeMin(),wo.has(o,t))r.setEdge(t,o[t]);else{if(u)throw new Error("Input graph is not connected: "+e);u=!0}e.nodeEdges(t).forEach(a)}return r},tarjan:Po,topsort:Vo},version:So.version};try{Yo=Xo}catch(e){}Yo||(Yo=window.graphlib);var Jo=Yo;var Ko=function(e){return dt(e,5)};var Qo=function(e,n,t){if(!B(t))return!1;var r=typeof n;return!!("number"==r?Ze(t)&&Le(n,t.length):"string"==r&&n in t)&&c(t[n],e)},Zo=Object.prototype,ei=Zo.hasOwnProperty,ni=oo((function(e,n){e=Object(e);var t=-1,r=n.length,o=r>2?n[2]:void 0;for(o&&Qo(n[0],n[1],o)&&(r=1);++t<r;)for(var i=n[t],a=an(i),u=-1,s=a.length;++u<s;){var d=a[u],f=e[d];(void 0===f||c(f,Zo[d])&&!ei.call(e,d))&&(e[d]=i[d])}return e}));var ti=function(e){return function(n,t,r){var o=Object(n);if(!Ze(n)){var i=yr(t);n=en(n),t=function(e){return i(o[e],e,o)}}var a=e(n,t,r);return a>-1?o[i?n[a]:a]:void 0}},ri=/^\s+|\s+$/g,oi=/^[-+]0x[0-9a-f]+$/i,ii=/^0b[01]+$/i,ai=/^0o[0-7]+$/i,ui=parseInt;var ci=function(e){if("number"==typeof e)return e;if(Wt(e))return NaN;if(B(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=B(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(ri,"");var t=ii.test(e);return t||ai.test(e)?ui(e.slice(2),t?2:8):oi.test(e)?NaN:+e},si=1/0;var di=function(e){return e?(e=ci(e))===si||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var fi=function(e){var n=di(e),t=n%1;return n==n?t?n-t:n:0},hi=Math.max;var li=ti((function(e,n,t){var r=null==e?0:e.length;if(!r)return-1;var o=null==t?0:fi(t);return o<0&&(o=hi(r+o,0)),io(e,yr(n),o)}));var pi=function(e){return(null==e?0:e.length)?Kr(e,1):[]};var vi=function(e,n){return null==e?e:lt(e,yt(n),an)};var gi=function(e){var n=null==e?0:e.length;return n?e[n-1]:void 0};var yi=function(e,n){var t={};return n=yr(n),pt(e,(function(e,r,o){_e(t,r,n(e,r,o))})),t};var bi=function(e,n,t){for(var r=-1,o=e.length;++r<o;){var i=e[r],a=n(i);if(null!=a&&(void 0===u?a==a&&!Wt(a):t(a,u)))var u=a,c=i}return c};var mi=function(e,n){return e>n};var wi=function(e){return e&&e.length?bi(e,gt,mi):void 0};var Ei=function(e,n,t){(void 0!==t&&!c(e[n],t)||void 0===t&&!(n in e))&&_e(e,n,t)},_i=Function.prototype,ji=Object.prototype,xi=_i.toString,Ni=ji.hasOwnProperty,Oi=xi.call(Object);var ki=function(e){if(!ke(e)||"[object Object]"!=C(e))return!1;var n=yn(e);if(null===n)return!0;var t=Ni.call(n,"constructor")&&n.constructor;return"function"==typeof t&&t instanceof t&&xi.call(t)==Oi};var Ii=function(e,n){if(("constructor"!==n||"function"!=typeof e[n])&&"__proto__"!=n)return e[n]};var Si=function(e){return Ne(e,an(e))};var Ti=function(e,n,t,r,o,i,a){var u=Ii(e,t),c=Ii(n,t),s=a.get(c);if(s)Ei(e,t,s);else{var d=i?i(u,c,t+"",e,n,a):void 0,f=void 0===d;if(f){var h=Ce(c),l=!h&&Re(c),p=!h&&!l&&$e(c);d=c,h||l||p?Ce(u)?d=u:vo(u)?d=sn(u):l?(f=!1,d=cn(c,!0)):p?(f=!1,d=Xn(c,!0)):d=[]:ki(c)||Me(c)?(d=u,Me(u)?d=Si(u):B(u)&&!A(u)||(d=Zn(c))):f=!1}f&&(a.set(c,d),o(d,c,r,i,a),a.delete(c)),Ei(e,t,d)}};var Gi=function e(n,t,r,o,i){n!==t&&lt(t,(function(a,u){if(i||(i=new me),B(a))Ti(n,t,u,r,e,o,i);else{var c=o?o(Ii(n,u),a,u+"",n,t,i):void 0;void 0===c&&(c=a),Ei(n,u,c)}}),an)};var Mi=function(e){return oo((function(n,t){var r=-1,o=t.length,i=o>1?t[o-1]:void 0,a=o>2?t[2]:void 0;for(i=e.length>3&&"function"==typeof i?(o--,i):void 0,a&&Qo(t[0],t[1],a)&&(i=o<3?void 0:i,o=1),n=Object(n);++r<o;){var u=t[r];u&&e(n,u,r,i)}return n}))}((function(e,n,t){Gi(e,n,t)}));var Ci=function(e,n){return e<n};var Bi=function(e){return e&&e.length?bi(e,gt,Ci):void 0};var Ri=function(e,n){return e&&e.length?bi(e,yr(n),Ci):void 0},Ai=function(){return j.Date.now()};var Li=function(e,n,t,r){if(!B(e))return e;for(var o=-1,i=(n=ar(n,e)).length,a=i-1,u=e;null!=u&&++o<i;){var c=ur(n[o]),s=t;if("__proto__"===c||"constructor"===c||"prototype"===c)return e;if(o!=a){var d=u[c];void 0===(s=r?r(d,c,u):void 0)&&(s=B(d)?d:Le(n[o+1])?[]:{})}xe(u,c,s),u=u[c]}return e};var Di=function(e,n,t){for(var r=-1,o=n.length,i={};++r<o;){var a=n[r],u=cr(e,a);t(u,a)&&Li(i,ar(a,e),u)}return i};var Pi=function(e,n){return Di(e,n,(function(n,t){return hr(e,t)}))};var zi=function(e){return ro(eo(e,void 0,pi),e+"")}((function(e,n){return null==e?{}:Pi(e,n)})),Fi=Math.ceil,Ui=Math.max;var Vi=function(e,n,t,r){for(var o=-1,i=Ui(Fi((n-e)/(t||1)),0),a=Array(i);i--;)a[r?i:++o]=e,e+=t;return a};var $i=function(e){return function(n,t,r){return r&&"number"!=typeof r&&Qo(n,t,r)&&(t=r=void 0),n=di(n),void 0===t?(t=n,n=0):t=di(t),r=void 0===r?n<t?1:-1:di(r),Vi(n,t,r,e)}}();var Hi=function(e,n){var t=e.length;for(e.sort(n);t--;)e[t]=e[t].value;return e};var Wi=function(e,n){if(e!==n){var t=void 0!==e,r=null===e,o=e==e,i=Wt(e),a=void 0!==n,u=null===n,c=n==n,s=Wt(n);if(!u&&!s&&!i&&e>n||i&&a&&c&&!u&&!s||r&&a&&c||!t&&c||!o)return 1;if(!r&&!i&&!s&&e<n||s&&t&&o&&!r&&!i||u&&t&&o||!a&&o||!c)return-1}return 0};var qi=function(e,n,t){for(var r=-1,o=e.criteria,i=n.criteria,a=o.length,u=t.length;++r<a;){var c=Wi(o[r],i[r]);if(c)return r>=u?c:c*("desc"==t[r]?-1:1)}return e.index-n.index};var Yi=function(e,n,t){n=n.length?nr(n,(function(e){return Ce(e)?function(n){return cr(n,1===e.length?e[0]:e)}:e})):[gt];var r=-1;n=nr(n,Fe(yr));var o=Nr(e,(function(e,t,o){return{criteria:nr(n,(function(n){return n(e)})),index:++r,value:e}}));return Hi(o,(function(e,n){return qi(e,n,t)}))},Xi=oo((function(e,n){if(null==e)return[];var t=n.length;return t>1&&Qo(e,n[0],n[1])?n=[]:t>2&&Qo(n[0],n[1],n[2])&&(n=[n[0]]),Yi(e,Kr(n,1),[])})),Ji=0;var Ki=function(e){var n=++Ji;return ir(e)+n};var Qi=function(e,n,t){for(var r=-1,o=e.length,i=n.length,a={};++r<o;){var u=r<i?n[r]:void 0;t(a,e[r],u)}return a};var Zi,ea=function(e,n){return Qi(e||[],n||[],xe)};try{Zi={cloneDeep:Ko,constant:ht,defaults:ni,each:mt,filter:br,find:li,flatten:pi,forEach:bt,forIn:vi,has:Er,isUndefined:xr,last:gi,map:Or,mapValues:yi,max:wi,merge:Mi,min:Bi,minBy:Ri,now:Ai,pick:zi,range:$i,reduce:Sr,sortBy:Xi,uniqueId:Ki,values:mo,zipObject:ea}}catch(e){}Zi||(Zi=window._);var na=Zi,ta=ra;function ra(){var e={};e._next=e._prev=e,this._sentinel=e}function oa(e){e._prev._next=e._next,e._next._prev=e._prev,delete e._next,delete e._prev}function ia(e,n){if("_next"!==e&&"_prev"!==e)return n}ra.prototype.dequeue=function(){var e=this._sentinel,n=e._prev;if(n!==e)return oa(n),n},ra.prototype.enqueue=function(e){var n=this._sentinel;e._prev&&e._next&&oa(e),e._next=n._next,n._next._prev=e,n._next=e,e._prev=n},ra.prototype.toString=function(){for(var e=[],n=this._sentinel,t=n._prev;t!==n;)e.push(JSON.stringify(t,ia)),t=t._prev;return"["+e.join(", ")+"]"};var aa=Jo.Graph,ua=function(e,n){if(e.nodeCount()<=1)return[];var t=function(e,n){var t=new aa,r=0,o=0;na.forEach(e.nodes(),(function(e){t.setNode(e,{v:e,in:0,out:0})})),na.forEach(e.edges(),(function(e){var i=t.edge(e.v,e.w)||0,a=n(e),u=i+a;t.setEdge(e.v,e.w,u),o=Math.max(o,t.node(e.v).out+=a),r=Math.max(r,t.node(e.w).in+=a)}));var i=na.range(o+r+3).map((function(){return new ta})),a=r+1;return na.forEach(t.nodes(),(function(e){da(i,a,t.node(e))})),{graph:t,buckets:i,zeroIdx:a}}(e,n||ca),r=function(e,n,t){var r,o=[],i=n[n.length-1],a=n[0];for(;e.nodeCount();){for(;r=a.dequeue();)sa(e,n,t,r);for(;r=i.dequeue();)sa(e,n,t,r);if(e.nodeCount())for(var u=n.length-2;u>0;--u)if(r=n[u].dequeue()){o=o.concat(sa(e,n,t,r,!0));break}}return o}(t.graph,t.buckets,t.zeroIdx);return na.flatten(na.map(r,(function(n){return e.outEdges(n.v,n.w)})),!0)},ca=na.constant(1);function sa(e,n,t,r,o){var i=o?[]:void 0;return na.forEach(e.inEdges(r.v),(function(r){var a=e.edge(r),u=e.node(r.v);o&&i.push({v:r.v,w:r.w}),u.out-=a,da(n,t,u)})),na.forEach(e.outEdges(r.v),(function(r){var o=e.edge(r),i=r.w,a=e.node(i);a.in-=o,da(n,t,a)})),e.removeNode(r.v),i}function da(e,n,t){t.out?t.in?e[t.out-t.in+n].enqueue(t):e[e.length-1].enqueue(t):e[0].enqueue(t)}var fa={run:function(e){var n="greedy"===e.graph().acyclicer?ua(e,function(e){return function(n){return e.edge(n).weight}}(e)):function(e){var n=[],t={},r={};function o(i){na.has(r,i)||(r[i]=!0,t[i]=!0,na.forEach(e.outEdges(i),(function(e){na.has(t,e.w)?n.push(e):o(e.w)})),delete t[i])}return na.forEach(e.nodes(),o),n}(e);na.forEach(n,(function(n){var t=e.edge(n);e.removeEdge(n),t.forwardName=n.name,t.reversed=!0,e.setEdge(n.w,n.v,t,na.uniqueId("rev"))}))},undo:function(e){na.forEach(e.edges(),(function(n){var t=e.edge(n);if(t.reversed){e.removeEdge(n);var r=t.forwardName;delete t.reversed,delete t.forwardName,e.setEdge(n.w,n.v,t,r)}}))}};var ha=Jo.Graph,la={addDummyNode:pa,simplify:function(e){var n=(new ha).setGraph(e.graph());return na.forEach(e.nodes(),(function(t){n.setNode(t,e.node(t))})),na.forEach(e.edges(),(function(t){var r=n.edge(t.v,t.w)||{weight:0,minlen:1},o=e.edge(t);n.setEdge(t.v,t.w,{weight:r.weight+o.weight,minlen:Math.max(r.minlen,o.minlen)})})),n},asNonCompoundGraph:function(e){var n=new ha({multigraph:e.isMultigraph()}).setGraph(e.graph());return na.forEach(e.nodes(),(function(t){e.children(t).length||n.setNode(t,e.node(t))})),na.forEach(e.edges(),(function(t){n.setEdge(t,e.edge(t))})),n},successorWeights:function(e){var n=na.map(e.nodes(),(function(n){var t={};return na.forEach(e.outEdges(n),(function(n){t[n.w]=(t[n.w]||0)+e.edge(n).weight})),t}));return na.zipObject(e.nodes(),n)},predecessorWeights:function(e){var n=na.map(e.nodes(),(function(n){var t={};return na.forEach(e.inEdges(n),(function(n){t[n.v]=(t[n.v]||0)+e.edge(n).weight})),t}));return na.zipObject(e.nodes(),n)},intersectRect:function(e,n){var t,r,o=e.x,i=e.y,a=n.x-o,u=n.y-i,c=e.width/2,s=e.height/2;if(!a&&!u)throw new Error("Not possible to find intersection inside of the rectangle");Math.abs(u)*c>Math.abs(a)*s?(u<0&&(s=-s),t=s*a/u,r=s):(a<0&&(c=-c),t=c,r=c*u/a);return{x:o+t,y:i+r}},buildLayerMatrix:function(e){var n=na.map(na.range(va(e)+1),(function(){return[]}));return na.forEach(e.nodes(),(function(t){var r=e.node(t),o=r.rank;na.isUndefined(o)||(n[o][r.order]=t)})),n},normalizeRanks:function(e){var n=na.min(na.map(e.nodes(),(function(n){return e.node(n).rank})));na.forEach(e.nodes(),(function(t){var r=e.node(t);na.has(r,"rank")&&(r.rank-=n)}))},removeEmptyRanks:function(e){var n=na.min(na.map(e.nodes(),(function(n){return e.node(n).rank}))),t=[];na.forEach(e.nodes(),(function(r){var o=e.node(r).rank-n;t[o]||(t[o]=[]),t[o].push(r)}));var r=0,o=e.graph().nodeRankFactor;na.forEach(t,(function(n,t){na.isUndefined(n)&&t%o!=0?--r:r&&na.forEach(n,(function(n){e.node(n).rank+=r}))}))},addBorderNode:function(e,n,t,r){var o={width:0,height:0};arguments.length>=4&&(o.rank=t,o.order=r);return pa(e,"border",o,n)},maxRank:va,partition:function(e,n){var t={lhs:[],rhs:[]};return na.forEach(e,(function(e){n(e)?t.lhs.push(e):t.rhs.push(e)})),t},time:function(e,n){var t=na.now();try{return n()}finally{console.log(e+" time: "+(na.now()-t)+"ms")}},notime:function(e,n){return n()}};function pa(e,n,t,r){var o;do{o=na.uniqueId(r)}while(e.hasNode(o));return t.dummy=n,e.setNode(o,t),o}function va(e){return na.max(na.map(e.nodes(),(function(n){var t=e.node(n).rank;if(!na.isUndefined(t))return t})))}var ga={run:function(e){e.graph().dummyChains=[],na.forEach(e.edges(),(function(n){!function(e,n){var t,r,o,i=n.v,a=e.node(i).rank,u=n.w,c=e.node(u).rank,s=n.name,d=e.edge(n),f=d.labelRank;if(c===a+1)return;for(e.removeEdge(n),o=0,++a;a<c;++o,++a)d.points=[],r={width:0,height:0,edgeLabel:d,edgeObj:n,rank:a},t=la.addDummyNode(e,"edge",r,"_d"),a===f&&(r.width=d.width,r.height=d.height,r.dummy="edge-label",r.labelpos=d.labelpos),e.setEdge(i,t,{weight:d.weight},s),0===o&&e.graph().dummyChains.push(t),i=t;e.setEdge(i,u,{weight:d.weight},s)}(e,n)}))},undo:function(e){na.forEach(e.graph().dummyChains,(function(n){var t,r=e.node(n),o=r.edgeLabel;for(e.setEdge(r.edgeObj,o);r.dummy;)t=e.successors(n)[0],e.removeNode(n),o.points.push({x:r.x,y:r.y}),"edge-label"===r.dummy&&(o.x=r.x,o.y=r.y,o.width=r.width,o.height=r.height),n=t,r=e.node(n)}))}};var ya=function(e){var n={};na.forEach(e.sources(),(function t(r){var o=e.node(r);if(na.has(n,r))return o.rank;n[r]=!0;var i=na.min(na.map(e.outEdges(r),(function(n){return t(n.w)-e.edge(n).minlen})));return i!==Number.POSITIVE_INFINITY&&null!=i||(i=0),o.rank=i}))},ba=function(e,n){return e.node(n.w).rank-e.node(n.v).rank-e.edge(n).minlen};var ma=Jo.Graph,wa=ba,Ea=function(e){var n,t,r=new ma({directed:!1}),o=e.nodes()[0],i=e.nodeCount();r.setNode(o,{});for(;_a(r,e)<i;)n=ja(r,e),t=r.hasNode(n.v)?wa(e,n):-wa(e,n),xa(r,e,t);return r};function _a(e,n){return na.forEach(e.nodes(),(function t(r){na.forEach(n.nodeEdges(r),(function(o){var i=o.v,a=r===i?o.w:i;e.hasNode(a)||wa(n,o)||(e.setNode(a,{}),e.setEdge(r,a,{}),t(a))}))})),e.nodeCount()}function ja(e,n){return na.minBy(n.edges(),(function(t){if(e.hasNode(t.v)!==e.hasNode(t.w))return wa(n,t)}))}function xa(e,n,t){na.forEach(e.nodes(),(function(e){n.node(e).rank+=t}))}var Na=ba,Oa=ya,ka=Jo.alg.preorder,Ia=Jo.alg.postorder,Sa=la.simplify,Ta=Ga;function Ga(e){e=Sa(e),Oa(e);var n,t=Ea(e);for(Ba(t),Ma(t,e);n=Aa(t);)Da(t,e,n,La(t,e,n))}function Ma(e,n){var t=Ia(e,e.nodes());t=t.slice(0,t.length-1),na.forEach(t,(function(t){!function(e,n,t){var r=e.node(t).parent;e.edge(t,r).cutvalue=Ca(e,n,t)}(e,n,t)}))}function Ca(e,n,t){var r=e.node(t).parent,o=!0,i=n.edge(t,r),a=0;return i||(o=!1,i=n.edge(r,t)),a=i.weight,na.forEach(n.nodeEdges(t),(function(i){var u,c,s=i.v===t,d=s?i.w:i.v;if(d!==r){var f=s===o,h=n.edge(i).weight;if(a+=f?h:-h,u=t,c=d,e.hasEdge(u,c)){var l=e.edge(t,d).cutvalue;a+=f?-l:l}}})),a}function Ba(e,n){arguments.length<2&&(n=e.nodes()[0]),Ra(e,{},1,n)}function Ra(e,n,t,r,o){var i=t,a=e.node(r);return n[r]=!0,na.forEach(e.neighbors(r),(function(o){na.has(n,o)||(t=Ra(e,n,t,o,r))})),a.low=i,a.lim=t++,o?a.parent=o:delete a.parent,t}function Aa(e){return na.find(e.edges(),(function(n){return e.edge(n).cutvalue<0}))}function La(e,n,t){var r=t.v,o=t.w;n.hasEdge(r,o)||(r=t.w,o=t.v);var i=e.node(r),a=e.node(o),u=i,c=!1;i.lim>a.lim&&(u=a,c=!0);var s=na.filter(n.edges(),(function(n){return c===Pa(e,e.node(n.v),u)&&c!==Pa(e,e.node(n.w),u)}));return na.minBy(s,(function(e){return Na(n,e)}))}function Da(e,n,t,r){var o=t.v,i=t.w;e.removeEdge(o,i),e.setEdge(r.v,r.w,{}),Ba(e),Ma(e,n),function(e,n){var t=na.find(e.nodes(),(function(e){return!n.node(e).parent})),r=ka(e,t);r=r.slice(1),na.forEach(r,(function(t){var r=e.node(t).parent,o=n.edge(t,r),i=!1;o||(o=n.edge(r,t),i=!0),n.node(t).rank=n.node(r).rank+(i?o.minlen:-o.minlen)}))}(e,n)}function Pa(e,n,t){return t.low<=n.lim&&n.lim<=t.lim}Ga.initLowLimValues=Ba,Ga.initCutValues=Ma,Ga.calcCutValue=Ca,Ga.leaveEdge=Aa,Ga.enterEdge=La,Ga.exchangeEdges=Da;var za=ya,Fa=function(e){switch(e.graph().ranker){case"network-simplex":Va(e);break;case"tight-tree":!function(e){za(e),Ea(e)}(e);break;case"longest-path":Ua(e);break;default:Va(e)}};var Ua=za;function Va(e){Ta(e)}var $a=function(e){var n=function(e){var n={},t=0;function r(o){var i=t;na.forEach(e.children(o),r),n[o]={low:i,lim:t++}}return na.forEach(e.children(),r),n}(e);na.forEach(e.graph().dummyChains,(function(t){for(var r=e.node(t),o=r.edgeObj,i=function(e,n,t,r){var o,i,a=[],u=[],c=Math.min(n[t].low,n[r].low),s=Math.max(n[t].lim,n[r].lim);o=t;do{o=e.parent(o),a.push(o)}while(o&&(n[o].low>c||s>n[o].lim));i=o,o=r;for(;(o=e.parent(o))!==i;)u.push(o);return{path:a.concat(u.reverse()),lca:i}}(e,n,o.v,o.w),a=i.path,u=i.lca,c=0,s=a[c],d=!0;t!==o.w;){if(r=e.node(t),d){for(;(s=a[c])!==u&&e.node(s).maxRank<r.rank;)c++;s===u&&(d=!1)}if(!d){for(;c<a.length-1&&e.node(s=a[c+1]).minRank<=r.rank;)c++;s=a[c]}e.setParent(t,s),t=e.successors(t)[0]}}))};var Ha={run:function(e){var n=la.addDummyNode(e,"root",{},"_root"),t=function(e){var n={};function t(r,o){var i=e.children(r);i&&i.length&&na.forEach(i,(function(e){t(e,o+1)})),n[r]=o}return na.forEach(e.children(),(function(e){t(e,1)})),n}(e),r=na.max(na.values(t))-1,o=2*r+1;e.graph().nestingRoot=n,na.forEach(e.edges(),(function(n){e.edge(n).minlen*=o}));var i=function(e){return na.reduce(e.edges(),(function(n,t){return n+e.edge(t).weight}),0)}(e)+1;na.forEach(e.children(),(function(a){Wa(e,n,o,i,r,t,a)})),e.graph().nodeRankFactor=o},cleanup:function(e){var n=e.graph();e.removeNode(n.nestingRoot),delete n.nestingRoot,na.forEach(e.edges(),(function(n){e.edge(n).nestingEdge&&e.removeEdge(n)}))}};function Wa(e,n,t,r,o,i,a){var u=e.children(a);if(u.length){var c=la.addBorderNode(e,"_bt"),s=la.addBorderNode(e,"_bb"),d=e.node(a);e.setParent(c,a),d.borderTop=c,e.setParent(s,a),d.borderBottom=s,na.forEach(u,(function(u){Wa(e,n,t,r,o,i,u);var d=e.node(u),f=d.borderTop?d.borderTop:u,h=d.borderBottom?d.borderBottom:u,l=d.borderTop?r:2*r,p=f!==h?1:o-i[a]+1;e.setEdge(c,f,{weight:l,minlen:p,nestingEdge:!0}),e.setEdge(h,s,{weight:l,minlen:p,nestingEdge:!0})})),e.parent(a)||e.setEdge(n,c,{weight:0,minlen:o+i[a]})}else a!==n&&e.setEdge(n,a,{weight:0,minlen:t})}var qa=function(e){na.forEach(e.children(),(function n(t){var r=e.children(t),o=e.node(t);if(r.length&&na.forEach(r,n),na.has(o,"minRank")){o.borderLeft=[],o.borderRight=[];for(var i=o.minRank,a=o.maxRank+1;i<a;++i)Ya(e,"borderLeft","_bl",t,o,i),Ya(e,"borderRight","_br",t,o,i)}}))};function Ya(e,n,t,r,o,i){var a={width:0,height:0,rank:i,borderType:n},u=o[n][i-1],c=la.addDummyNode(e,"border",a,t);o[n][i]=c,e.setParent(c,r),u&&e.setEdge(u,c,{weight:1})}var Xa={adjust:function(e){var n=e.graph().rankdir.toLowerCase();"lr"!==n&&"rl"!==n||Ja(e)},undo:function(e){var n=e.graph().rankdir.toLowerCase();"bt"!==n&&"rl"!==n||function(e){na.forEach(e.nodes(),(function(n){Qa(e.node(n))})),na.forEach(e.edges(),(function(n){var t=e.edge(n);na.forEach(t.points,Qa),na.has(t,"y")&&Qa(t)}))}(e);"lr"!==n&&"rl"!==n||(!function(e){na.forEach(e.nodes(),(function(n){Za(e.node(n))})),na.forEach(e.edges(),(function(n){var t=e.edge(n);na.forEach(t.points,Za),na.has(t,"x")&&Za(t)}))}(e),Ja(e))}};function Ja(e){na.forEach(e.nodes(),(function(n){Ka(e.node(n))})),na.forEach(e.edges(),(function(n){Ka(e.edge(n))}))}function Ka(e){var n=e.width;e.width=e.height,e.height=n}function Qa(e){e.y=-e.y}function Za(e){var n=e.x;e.x=e.y,e.y=n}var eu=function(e){var n={},t=na.filter(e.nodes(),(function(n){return!e.children(n).length})),r=na.max(na.map(t,(function(n){return e.node(n).rank}))),o=na.map(na.range(r+1),(function(){return[]}));function i(t){if(!na.has(n,t)){n[t]=!0;var r=e.node(t);o[r.rank].push(t),na.forEach(e.successors(t),i)}}var a=na.sortBy(t,(function(n){return e.node(n).rank}));return na.forEach(a,i),o};var nu=function(e,n){for(var t=0,r=1;r<n.length;++r)t+=tu(e,n[r-1],n[r]);return t};function tu(e,n,t){for(var r=na.zipObject(t,na.map(t,(function(e,n){return n}))),o=na.flatten(na.map(n,(function(n){return na.sortBy(na.map(e.outEdges(n),(function(n){return{pos:r[n.w],weight:e.edge(n).weight}})),"pos")})),!0),i=1;i<t.length;)i<<=1;var a=2*i-1;i-=1;var u=na.map(new Array(a),(function(){return 0})),c=0;return na.forEach(o.forEach((function(e){var n=e.pos+i;u[n]+=e.weight;for(var t=0;n>0;)n%2&&(t+=u[n+1]),u[n=n-1>>1]+=e.weight;c+=e.weight*t}))),c}var ru=function(e,n){return na.map(n,(function(n){var t=e.inEdges(n);if(t.length){var r=na.reduce(t,(function(n,t){var r=e.edge(t),o=e.node(t.v);return{sum:n.sum+r.weight*o.order,weight:n.weight+r.weight}}),{sum:0,weight:0});return{v:n,barycenter:r.sum/r.weight,weight:r.weight}}return{v:n}}))};var ou=function(e,n){var t={};return na.forEach(e,(function(e,n){var r=t[e.v]={indegree:0,in:[],out:[],vs:[e.v],i:n};na.isUndefined(e.barycenter)||(r.barycenter=e.barycenter,r.weight=e.weight)})),na.forEach(n.edges(),(function(e){var n=t[e.v],r=t[e.w];na.isUndefined(n)||na.isUndefined(r)||(r.indegree++,n.out.push(t[e.w]))})),function(e){var n=[];function t(e){return function(n){n.merged||(na.isUndefined(n.barycenter)||na.isUndefined(e.barycenter)||n.barycenter>=e.barycenter)&&function(e,n){var t=0,r=0;e.weight&&(t+=e.barycenter*e.weight,r+=e.weight);n.weight&&(t+=n.barycenter*n.weight,r+=n.weight);e.vs=n.vs.concat(e.vs),e.barycenter=t/r,e.weight=r,e.i=Math.min(n.i,e.i),n.merged=!0}(e,n)}}function r(n){return function(t){t.in.push(n),0==--t.indegree&&e.push(t)}}for(;e.length;){var o=e.pop();n.push(o),na.forEach(o.in.reverse(),t(o)),na.forEach(o.out,r(o))}return na.map(na.filter(n,(function(e){return!e.merged})),(function(e){return na.pick(e,["vs","i","barycenter","weight"])}))}(na.filter(t,(function(e){return!e.indegree})))};var iu=function(e,n){var t=la.partition(e,(function(e){return na.has(e,"barycenter")})),r=t.lhs,o=na.sortBy(t.rhs,(function(e){return-e.i})),i=[],a=0,u=0,c=0;r.sort((s=!!n,function(e,n){return e.barycenter<n.barycenter?-1:e.barycenter>n.barycenter?1:s?n.i-e.i:e.i-n.i})),c=au(i,o,c),na.forEach(r,(function(e){c+=e.vs.length,i.push(e.vs),a+=e.barycenter*e.weight,u+=e.weight,c=au(i,o,c)}));var s;var d={vs:na.flatten(i,!0)};u&&(d.barycenter=a/u,d.weight=u);return d};function au(e,n,t){for(var r;n.length&&(r=na.last(n)).i<=t;)n.pop(),e.push(r.vs),t++;return t}var uu=function e(n,t,r,o){var i=n.children(t),a=n.node(t),u=a?a.borderLeft:void 0,c=a?a.borderRight:void 0,s={};u&&(i=na.filter(i,(function(e){return e!==u&&e!==c})));var d=ru(n,i);na.forEach(d,(function(t){if(n.children(t.v).length){var i=e(n,t.v,r,o);s[t.v]=i,na.has(i,"barycenter")&&(a=t,u=i,na.isUndefined(a.barycenter)?(a.barycenter=u.barycenter,a.weight=u.weight):(a.barycenter=(a.barycenter*a.weight+u.barycenter*u.weight)/(a.weight+u.weight),a.weight+=u.weight))}var a,u}));var f=ou(d,r);!function(e,n){na.forEach(e,(function(e){e.vs=na.flatten(e.vs.map((function(e){return n[e]?n[e].vs:e})),!0)}))}(f,s);var h=iu(f,o);if(u&&(h.vs=na.flatten([u,h.vs,c],!0),n.predecessors(u).length)){var l=n.node(n.predecessors(u)[0]),p=n.node(n.predecessors(c)[0]);na.has(h,"barycenter")||(h.barycenter=0,h.weight=0),h.barycenter=(h.barycenter*h.weight+l.order+p.order)/(h.weight+2),h.weight+=2}return h};var cu=Jo.Graph,su=function(e,n,t){var r=function(e){var n;for(;e.hasNode(n=na.uniqueId("_root")););return n}(e),o=new cu({compound:!0}).setGraph({root:r}).setDefaultNodeLabel((function(n){return e.node(n)}));return na.forEach(e.nodes(),(function(i){var a=e.node(i),u=e.parent(i);(a.rank===n||a.minRank<=n&&n<=a.maxRank)&&(o.setNode(i),o.setParent(i,u||r),na.forEach(e[t](i),(function(n){var t=n.v===i?n.w:n.v,r=o.edge(t,i),a=na.isUndefined(r)?0:r.weight;o.setEdge(t,i,{weight:e.edge(n).weight+a})})),na.has(a,"minRank")&&o.setNode(i,{borderLeft:a.borderLeft[n],borderRight:a.borderRight[n]}))})),o};var du=function(e,n,t){var r,o={};na.forEach(t,(function(t){for(var i,a,u=e.parent(t);u;){if((i=e.parent(u))?(a=o[i],o[i]=u):(a=r,r=u),a&&a!==u)return void n.setEdge(a,u);u=i}}))};var fu=Jo.Graph,hu=function(e){var n=la.maxRank(e),t=lu(e,na.range(1,n+1),"inEdges"),r=lu(e,na.range(n-1,-1,-1),"outEdges"),o=eu(e);vu(e,o);for(var i,a=Number.POSITIVE_INFINITY,u=0,c=0;c<4;++u,++c){pu(u%2?t:r,u%4>=2),o=la.buildLayerMatrix(e);var s=nu(e,o);s<a&&(c=0,i=na.cloneDeep(o),a=s)}vu(e,i)};function lu(e,n,t){return na.map(n,(function(n){return su(e,n,t)}))}function pu(e,n){var t=new fu;na.forEach(e,(function(e){var r=e.graph().root,o=uu(e,r,t,n);na.forEach(o.vs,(function(n,t){e.node(n).order=t})),du(e,t,o.vs)}))}function vu(e,n){na.forEach(n,(function(n){na.forEach(n,(function(n,t){e.node(n).order=t}))}))}var gu=Jo.Graph,yu=function(e){var n,t=la.buildLayerMatrix(e),r=na.merge(bu(e,t),mu(e,t)),o={};na.forEach(["u","d"],(function(i){n="u"===i?t:na.values(t).reverse(),na.forEach(["l","r"],(function(t){"r"===t&&(n=na.map(n,(function(e){return na.values(e).reverse()})));var a=("u"===i?e.predecessors:e.successors).bind(e),u=_u(e,n,r,a),c=ju(e,n,u.root,u.align,"r"===t);"r"===t&&(c=na.mapValues(c,(function(e){return-e}))),o[i+t]=c}))}));var i=xu(e,o);return Nu(o,i),Ou(o,e.graph().align)};function bu(e,n){var t={};return na.reduce(n,(function(n,r){var o=0,i=0,a=n.length,u=na.last(r);return na.forEach(r,(function(n,c){var s=function(e,n){if(e.node(n).dummy)return na.find(e.predecessors(n),(function(n){return e.node(n).dummy}))}(e,n),d=s?e.node(s).order:a;(s||n===u)&&(na.forEach(r.slice(i,c+1),(function(n){na.forEach(e.predecessors(n),(function(r){var i=e.node(r),a=i.order;!(a<o||d<a)||i.dummy&&e.node(n).dummy||wu(t,r,n)}))})),i=c+1,o=d)})),r})),t}function mu(e,n){var t={};function r(n,r,o,i,a){var u;na.forEach(na.range(r,o),(function(r){u=n[r],e.node(u).dummy&&na.forEach(e.predecessors(u),(function(n){var r=e.node(n);r.dummy&&(r.order<i||r.order>a)&&wu(t,n,u)}))}))}return na.reduce(n,(function(n,t){var o,i=-1,a=0;return na.forEach(t,(function(u,c){if("border"===e.node(u).dummy){var s=e.predecessors(u);s.length&&(o=e.node(s[0]).order,r(t,a,c,i,o),a=c,i=o)}r(t,a,t.length,o,n.length)})),t})),t}function wu(e,n,t){if(n>t){var r=n;n=t,t=r}var o=e[n];o||(e[n]=o={}),o[t]=!0}function Eu(e,n,t){if(n>t){var r=n;n=t,t=r}return na.has(e[n],t)}function _u(e,n,t,r){var o={},i={},a={};return na.forEach(n,(function(e){na.forEach(e,(function(e,n){o[e]=e,i[e]=e,a[e]=n}))})),na.forEach(n,(function(e){var n=-1;na.forEach(e,(function(e){var u=r(e);if(u.length)for(var c=((u=na.sortBy(u,(function(e){return a[e]}))).length-1)/2,s=Math.floor(c),d=Math.ceil(c);s<=d;++s){var f=u[s];i[e]===e&&n<a[f]&&!Eu(t,e,f)&&(i[f]=e,i[e]=o[e]=o[f],n=a[f])}}))})),{root:o,align:i}}function ju(e,n,t,r,o){var i={},a=function(e,n,t,r){var o=new gu,i=e.graph(),a=function(e,n,t){return function(r,o,i){var a,u=r.node(o),c=r.node(i),s=0;if(s+=u.width/2,na.has(u,"labelpos"))switch(u.labelpos.toLowerCase()){case"l":a=-u.width/2;break;case"r":a=u.width/2}if(a&&(s+=t?a:-a),a=0,s+=(u.dummy?n:e)/2,s+=(c.dummy?n:e)/2,s+=c.width/2,na.has(c,"labelpos"))switch(c.labelpos.toLowerCase()){case"l":a=c.width/2;break;case"r":a=-c.width/2}return a&&(s+=t?a:-a),a=0,s}}(i.nodesep,i.edgesep,r);return na.forEach(n,(function(n){var r;na.forEach(n,(function(n){var i=t[n];if(o.setNode(i),r){var u=t[r],c=o.edge(u,i);o.setEdge(u,i,Math.max(a(e,n,r),c||0))}r=n}))})),o}(e,n,t,o),u=o?"borderLeft":"borderRight";function c(e,n){for(var t=a.nodes(),r=t.pop(),o={};r;)o[r]?e(r):(o[r]=!0,t.push(r),t=t.concat(n(r))),r=t.pop()}return c((function(e){i[e]=a.inEdges(e).reduce((function(e,n){return Math.max(e,i[n.v]+a.edge(n))}),0)}),a.predecessors.bind(a)),c((function(n){var t=a.outEdges(n).reduce((function(e,n){return Math.min(e,i[n.w]-a.edge(n))}),Number.POSITIVE_INFINITY),r=e.node(n);t!==Number.POSITIVE_INFINITY&&r.borderType!==u&&(i[n]=Math.max(i[n],t))}),a.successors.bind(a)),na.forEach(r,(function(e){i[e]=i[t[e]]})),i}function xu(e,n){return na.minBy(na.values(n),(function(n){var t=Number.NEGATIVE_INFINITY,r=Number.POSITIVE_INFINITY;return na.forIn(n,(function(n,o){var i=function(e,n){return e.node(n).width}(e,o)/2;t=Math.max(n+i,t),r=Math.min(n-i,r)})),t-r}))}function Nu(e,n){var t=na.values(n),r=na.min(t),o=na.max(t);na.forEach(["u","d"],(function(t){na.forEach(["l","r"],(function(i){var a,u=t+i,c=e[u];if(c!==n){var s=na.values(c);(a="l"===i?r-na.min(s):o-na.max(s))&&(e[u]=na.mapValues(c,(function(e){return e+a})))}}))}))}function Ou(e,n){return na.mapValues(e.ul,(function(t,r){if(n)return e[n.toLowerCase()][r];var o=na.sortBy(na.map(e,r));return(o[1]+o[2])/2}))}var ku=yu,Iu=function(e){(function(e){var n=la.buildLayerMatrix(e),t=e.graph().ranksep,r=0;na.forEach(n,(function(n){var o=na.max(na.map(n,(function(n){return e.node(n).height})));na.forEach(n,(function(n){e.node(n).y=r+o/2})),r+=o+t}))})(e=la.asNonCompoundGraph(e)),na.forEach(ku(e),(function(n,t){e.node(t).x=n}))};var Su=la.normalizeRanks,Tu=la.removeEmptyRanks,Gu=la,Mu=Jo.Graph,Cu=function(e,n){var t=n&&n.debugTiming?Gu.time:Gu.notime;t("layout",(function(){var n=t("  buildLayoutGraph",(function(){return function(e){var n=new Mu({multigraph:!0,compound:!0}),t=Vu(e.graph());return n.setGraph(na.merge({},Ru,Uu(t,Bu),na.pick(t,Au))),na.forEach(e.nodes(),(function(t){var r=Vu(e.node(t));n.setNode(t,na.defaults(Uu(r,Lu),Du)),n.setParent(t,e.parent(t))})),na.forEach(e.edges(),(function(t){var r=Vu(e.edge(t));n.setEdge(t,na.merge({},zu,Uu(r,Pu),na.pick(r,Fu)))})),n}(e)}));t("  runLayout",(function(){!function(e,n){n("    makeSpaceForEdgeLabels",(function(){!function(e){var n=e.graph();n.ranksep/=2,na.forEach(e.edges(),(function(t){var r=e.edge(t);r.minlen*=2,"c"!==r.labelpos.toLowerCase()&&("TB"===n.rankdir||"BT"===n.rankdir?r.width+=r.labeloffset:r.height+=r.labeloffset)}))}(e)})),n("    removeSelfEdges",(function(){!function(e){na.forEach(e.edges(),(function(n){if(n.v===n.w){var t=e.node(n.v);t.selfEdges||(t.selfEdges=[]),t.selfEdges.push({e:n,label:e.edge(n)}),e.removeEdge(n)}}))}(e)})),n("    acyclic",(function(){fa.run(e)})),n("    nestingGraph.run",(function(){Ha.run(e)})),n("    rank",(function(){Fa(Gu.asNonCompoundGraph(e))})),n("    injectEdgeLabelProxies",(function(){!function(e){na.forEach(e.edges(),(function(n){var t=e.edge(n);if(t.width&&t.height){var r=e.node(n.v),o={rank:(e.node(n.w).rank-r.rank)/2+r.rank,e:n};Gu.addDummyNode(e,"edge-proxy",o,"_ep")}}))}(e)})),n("    removeEmptyRanks",(function(){Tu(e)})),n("    nestingGraph.cleanup",(function(){Ha.cleanup(e)})),n("    normalizeRanks",(function(){Su(e)})),n("    assignRankMinMax",(function(){!function(e){var n=0;na.forEach(e.nodes(),(function(t){var r=e.node(t);r.borderTop&&(r.minRank=e.node(r.borderTop).rank,r.maxRank=e.node(r.borderBottom).rank,n=na.max(n,r.maxRank))})),e.graph().maxRank=n}(e)})),n("    removeEdgeLabelProxies",(function(){!function(e){na.forEach(e.nodes(),(function(n){var t=e.node(n);"edge-proxy"===t.dummy&&(e.edge(t.e).labelRank=t.rank,e.removeNode(n))}))}(e)})),n("    normalize.run",(function(){ga.run(e)})),n("    parentDummyChains",(function(){$a(e)})),n("    addBorderSegments",(function(){qa(e)})),n("    order",(function(){hu(e)})),n("    insertSelfEdges",(function(){!function(e){var n=Gu.buildLayerMatrix(e);na.forEach(n,(function(n){var t=0;na.forEach(n,(function(n,r){var o=e.node(n);o.order=r+t,na.forEach(o.selfEdges,(function(n){Gu.addDummyNode(e,"selfedge",{width:n.label.width,height:n.label.height,rank:o.rank,order:r+ ++t,e:n.e,label:n.label},"_se")})),delete o.selfEdges}))}))}(e)})),n("    adjustCoordinateSystem",(function(){Xa.adjust(e)})),n("    position",(function(){Iu(e)})),n("    positionSelfEdges",(function(){!function(e){na.forEach(e.nodes(),(function(n){var t=e.node(n);if("selfedge"===t.dummy){var r=e.node(t.e.v),o=r.x+r.width/2,i=r.y,a=t.x-o,u=r.height/2;e.setEdge(t.e,t.label),e.removeNode(n),t.label.points=[{x:o+2*a/3,y:i-u},{x:o+5*a/6,y:i-u},{x:o+a,y:i},{x:o+5*a/6,y:i+u},{x:o+2*a/3,y:i+u}],t.label.x=t.x,t.label.y=t.y}}))}(e)})),n("    removeBorderNodes",(function(){!function(e){na.forEach(e.nodes(),(function(n){if(e.children(n).length){var t=e.node(n),r=e.node(t.borderTop),o=e.node(t.borderBottom),i=e.node(na.last(t.borderLeft)),a=e.node(na.last(t.borderRight));t.width=Math.abs(a.x-i.x),t.height=Math.abs(o.y-r.y),t.x=i.x+t.width/2,t.y=r.y+t.height/2}})),na.forEach(e.nodes(),(function(n){"border"===e.node(n).dummy&&e.removeNode(n)}))}(e)})),n("    normalize.undo",(function(){ga.undo(e)})),n("    fixupEdgeLabelCoords",(function(){!function(e){na.forEach(e.edges(),(function(n){var t=e.edge(n);if(na.has(t,"x"))switch("l"!==t.labelpos&&"r"!==t.labelpos||(t.width-=t.labeloffset),t.labelpos){case"l":t.x-=t.width/2+t.labeloffset;break;case"r":t.x+=t.width/2+t.labeloffset}}))}(e)})),n("    undoCoordinateSystem",(function(){Xa.undo(e)})),n("    translateGraph",(function(){!function(e){var n=Number.POSITIVE_INFINITY,t=0,r=Number.POSITIVE_INFINITY,o=0,i=e.graph(),a=i.marginx||0,u=i.marginy||0;function c(e){var i=e.x,a=e.y,u=e.width,c=e.height;n=Math.min(n,i-u/2),t=Math.max(t,i+u/2),r=Math.min(r,a-c/2),o=Math.max(o,a+c/2)}na.forEach(e.nodes(),(function(n){c(e.node(n))})),na.forEach(e.edges(),(function(n){var t=e.edge(n);na.has(t,"x")&&c(t)})),n-=a,r-=u,na.forEach(e.nodes(),(function(t){var o=e.node(t);o.x-=n,o.y-=r})),na.forEach(e.edges(),(function(t){var o=e.edge(t);na.forEach(o.points,(function(e){e.x-=n,e.y-=r})),na.has(o,"x")&&(o.x-=n),na.has(o,"y")&&(o.y-=r)})),i.width=t-n+a,i.height=o-r+u}(e)})),n("    assignNodeIntersects",(function(){!function(e){na.forEach(e.edges(),(function(n){var t,r,o=e.edge(n),i=e.node(n.v),a=e.node(n.w);o.points?(t=o.points[0],r=o.points[o.points.length-1]):(o.points=[],t=a,r=i),o.points.unshift(Gu.intersectRect(i,t)),o.points.push(Gu.intersectRect(a,r))}))}(e)})),n("    reversePoints",(function(){!function(e){na.forEach(e.edges(),(function(n){var t=e.edge(n);t.reversed&&t.points.reverse()}))}(e)})),n("    acyclic.undo",(function(){fa.undo(e)}))}(n,t)})),t("  updateInputGraph",(function(){!function(e,n){na.forEach(e.nodes(),(function(t){var r=e.node(t),o=n.node(t);r&&(r.x=o.x,r.y=o.y,n.children(t).length&&(r.width=o.width,r.height=o.height))})),na.forEach(e.edges(),(function(t){var r=e.edge(t),o=n.edge(t);r.points=o.points,na.has(o,"x")&&(r.x=o.x,r.y=o.y)})),e.graph().width=n.graph().width,e.graph().height=n.graph().height}(e,n)}))}))};var Bu=["nodesep","edgesep","ranksep","marginx","marginy"],Ru={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},Au=["acyclicer","ranker","rankdir","align"],Lu=["width","height"],Du={width:0,height:0},Pu=["minlen","weight","width","height","labeloffset"],zu={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},Fu=["labelpos"];function Uu(e,n){return na.mapValues(na.pick(e,n),Number)}function Vu(e){var n={};return na.forEach(e,(function(e,t){n[t.toLowerCase()]=e})),n}var $u=Jo.Graph;var Hu={graphlib:Jo,layout:Cu,debug:{debugOrdering:function(e){var n=la.buildLayerMatrix(e),t=new $u({compound:!0,multigraph:!0}).setGraph({});return na.forEach(e.nodes(),(function(n){t.setNode(n,{label:n}),t.setParent(n,"layer"+e.node(n).rank)})),na.forEach(e.edges(),(function(e){t.setEdge(e.v,e.w,{},e.name)})),na.forEach(n,(function(e,n){var r="layer"+n;t.setNode(r,{rank:"same"}),na.reduce(e,(function(e,n){return t.setEdge(e,n,{style:"invis"}),n}))})),t}},util:{time:la.time,notime:la.notime},version:"0.8.5"},Wu=Hu.graphlib,qu=Hu.layout;class Yu{constructor(n){this.cardinality=1,this.include=e.InclusionType.UNSPECIFIED,this.isGroupNode=!1,this.parentNode=null,this.type=e.NodeType.NODE,this.name=n.name,this.attr=n.attr||{},this.inputs=n.inputs,this.path=n.path||[],this.width=n.width,this.height=n.height}}class Xu{constructor(){this.nodes={},this.edges=[]}}function Ju(e){const n=new Xu;return e.nodes.map((e=>new Yu(e))).forEach((e=>{n.nodes[e.name]=e,e.inputs.forEach((t=>{!function(e,n,t){t.name!==n.name&&e.edges.push(Object.assign(Object.assign({},t.attr),{v:t.name,w:n.name}))}(n,e,t)}))})),n}class Ku{constructor(n,t={}){this.attr=null,this.bridgeGraph=null,this.cardinality=0,this.depth=1,this.include=e.InclusionType.UNSPECIFIED,this.isGroupNode=!0,this.parentNode=null,this.type=e.NodeType.META,this.name=n,this.metaGraph=nc(n,e.GraphType.META,t)}getFirstChild(){return this.metaGraph.node(this.metaGraph.nodes()[0])}getChildren(){return this.metaGraph.nodes().map((e=>this.metaGraph.node(e)))}getRootNode(){let e=this.name.split("/"),n=this.name+"/("+e[e.length-1]+")";return this.metaGraph.node(n)}leaves(){let e,n=[],t=[this];for(;t.length;){let r=t.shift();r.isGroupNode?(e=r.metaGraph,e.nodes().forEach((n=>t.push(e.node(n))))):n.push(r.name)}return n}}class Qu{constructor(e,n){this.v=e,this.w=n,this.baseEdgeList=[],this.inbound=null,this.name=null}addBaseEdge(e,n){this.baseEdgeList.push(e)}}function Zu(e,n={}){return new Ku(e,n)}function ec(e,n){return new Qu(e,n)}function nc(e,n,t){const r=t||{},o=new Wu.Graph(r);return o.setGraph({name:e,rankdir:r.rankdir||"BT",type:n}),o}function tc(e){return`◬${e}◬`}const rc=tc("ROOT"),oc=tc("BRIDGE_GRAPH"),ic={graph:{meta:{nodeSep:50,rankSep:50,edgeSep:5,align:void 0}},subScene:{meta:{paddingTop:20,paddingBottom:20,paddingLeft:20,paddingRight:20,labelHeight:20}},nodeSize:{meta:{width:100,maxLabelWidth:0,height:20},node:{width:80,height:20,labelOffset:10,maxLabelWidth:40},bridge:{width:5,height:5,radius:2,labelOffset:0}}};class ac{constructor(e={}){this.graphOptions=e,this.index={},this.graphOptions.compound=!0,this.root=Zu(rc,this.graphOptions),this.index[rc]=this.root}getNodeMap(){return this.index}node(e){return this.index[e]}setNode(e,n){this.index[e]=n}getBridgeGraph(n){const t=this.index[n];if(!t)throw Error("Could not find node in hierarchy: "+n);if(!("metaGraph"in t))return null;const r=t;if(r.bridgeGraph)return r.bridgeGraph;const o=nc(oc,e.GraphType.BRIDGE,this.graphOptions);if(r.bridgeGraph=o,!t.parentNode||!("metaGraph"in t.parentNode))return o;const i=t.parentNode;return[i.metaGraph,this.getBridgeGraph(i.name)].forEach((e=>{e.edges().filter((e=>e.v===n||e.w===n)).forEach((t=>{const r=t.w===n;e.edge(t).baseEdgeList.forEach((e=>{const[i,a]=r?[e.w,t.v]:[e.v,t.w],u=this.getChildName(n,i),c={v:r?a:u,w:r?u:a};let s=o.edge(c);s||(s=ec(c.v,c.w),s.inbound=r,o.setEdge(c.v,c.w,s)),s.addBaseEdge(e,this)}))}))})),o}getChildName(e,n){let t=this.index[n];for(;t;){if(t.parentNode&&t.parentNode.name===e)return t.name;t=t.parentNode}throw Error("Could not find immediate child for descendant: "+n)}getPredecessors(e){const n=this.index[e];if(!n)throw Error("Could not find node with name: "+e);return this.getOneWayEdges(n,!0)}getSuccessors(e){const n=this.index[e];if(!n)throw Error("Could not find node with name: "+e);return this.getOneWayEdges(n,!1)}getOneWayEdges(e,n){const t=[];if(!e.parentNode||!e.parentNode.isGroupNode)return t;const r=e.parentNode,o=r.metaGraph,i=this.getBridgeGraph(r.name);return cc(o,e,n,t),cc(i,e,n,t),t}}function uc(e,n){const t=new ac({rankdir:n.rankDirection});return function(e,n){Object.keys(n.nodes).forEach((t=>{const r=n.nodes[t],o=r.path;let i=e.root;i.depth=Math.max(o.length,i.depth);for(let n=0;n<o.length&&(i.depth=Math.max(i.depth,o.length-n),i.cardinality+=r.cardinality,n!==o.length-1);n++){const t=o[n];let a=e.node(t);a||(a=Zu(t,e.graphOptions),a.path=r.path.slice(0,n+1),a.parentNode=i,e.setNode(t,a),i.metaGraph.setNode(t,a)),i=a}e.setNode(r.name,r),r.parentNode=i,i.metaGraph.setNode(r.name,r)}))}(t,e),function(e,n){const t=e.getNodeMap();let r=[],o=[];const i=(e,n)=>{let t=0;for(;e;)n[t++]=e.name,e=e.parentNode;return t-1};n.edges.forEach((a=>{r=[],o=[];let u=i(n.nodes[a.v],r),c=i(n.nodes[a.w],o);for(;r[u]===o[c];)if(u--,c--,u<0||c<0)throw Error("No difference found between ancestor paths.");const s=t[r[u+1]],d=r[u],f=o[c];let h=s.metaGraph.edge(d,f);h||(h=ec(d,f),s.metaGraph.setEdge(d,f,h)),h.addBaseEdge(a,e)}))}(t,e),t}function cc(e,n,t,r){(t?e.inEdges(n.name):e.outEdges(n.name)).forEach((n=>{const t=e.edge(n);r.push(t)}))}class sc{constructor(e){this.hierarchy=e,this.index={},this.hasSubHierarchy={},this.root=new hc(this.hierarchy.root,this.hierarchy.graphOptions),this.index[e.root.name]=this.root,this.buildSubHierarchy(e.root.name),this.root.expanded=!0}getRenderInfoNodes(){return Object.values(this.index)}getSubHierarchy(){return this.hasSubHierarchy}buildSubHierarchy(n){if(n in this.hasSubHierarchy)return;this.hasSubHierarchy[n]=!0;const t=this.index[n];if(t.node.type!==e.NodeType.META)return;const r=t,o=r.node.metaGraph,i=r.coreGraph;o.nodes().forEach((e=>{const n=this.getOrCreateRenderNodeByName(e);i.setNode(e,n)})),o.edges().forEach((e=>{const n=o.edge(e),t=new fc(n);i.setEdge(e.v,e.w,t)}));const a=r.node.parentNode;if(!a)return;const u=this.getRenderNodeByName(a.name),c=(e,...n)=>n.concat([e?"IN":"OUT"]).join("~~"),s=this.hierarchy.getBridgeGraph(n);s.edges().forEach((e=>{!!o.node(e.w)?e.v:e.w})),s.edges().forEach((t=>{const r=s.edge(t),d=!!o.node(t.w),[f,h]=d?[t.w,t.v]:[t.v,t.w],l=e=>{const t=d?{v:e,w:n}:{v:n,w:e};return u.coreGraph.edge(t)};let p=l(h);p||(p=l(c(d,h,a.name)));const v=c(d,n),g=c(d,h,n);let y=i.node(g);if(!y){let n=i.node(v);if(!n){const t={name:v,type:e.NodeType.BRIDGE,isGroupNode:!1,cardinality:0,parentNode:null,include:e.InclusionType.UNSPECIFIED,inbound:d,attr:{}};n=new dc(t),this.index[v]=n,i.setNode(v,n)}const t={name:g,type:e.NodeType.BRIDGE,isGroupNode:!1,cardinality:1,parentNode:null,include:e.InclusionType.UNSPECIFIED,inbound:d,attr:{}};y=new dc(t),this.index[g]=y,i.setNode(g,y),i.setParent(g,v),n.node.cardinality++}const b=new fc(r);b.adjoiningMetaEdge=p,d?i.setEdge(g,f,b):i.setEdge(f,g,b)})),[!0,!1].forEach((t=>{const r=c(t,n);i.node(r)&&i.nodes().forEach((n=>{if(i.node(n).node.type===e.NodeType.BRIDGE)return;t?i.predecessors(n).length:i.successors(n).length}))}))}getOrCreateRenderNodeByName(e){if(!e)return null;if(e in this.index)return this.index[e];const n=this.getNodeByName(e);return n?(this.index[e]=n.isGroupNode?new hc(n,this.hierarchy.graphOptions):new dc(n),this.index[e]):null}getRenderNodeByName(e){return this.index[e]}getNodeByName(e){return this.hierarchy.node(e)}}class dc{constructor(e){this.node=e,this.expanded=!1,this.x=0,this.y=0,this.coreBox={width:0,height:0},this.outboxWidth=0,this.labelOffset=0,this.radius=0,this.labelHeight=0,this.paddingTop=0,this.paddingLeft=0,this.paddingRight=0,this.paddingBottom=0,this.width=e.width||0,this.height=e.height||0,this.displayName=e.name,this.attr=e.attr}}class fc{constructor(e){this.metaEdge=e,this.adjoiningMetaEdge=null,this.weight=1,this.points=[],this.startMarkerId=null,this.endMarkerId=null}}class hc extends dc{constructor(n,t){super(n);const r=n.metaGraph.graph();t.compound=!0,this.coreGraph=nc(r.name,e.GraphType.CORE,t)}}function lc(n,t=ic){n.node.isGroupNode&&function(n,t){n.coreGraph.nodes().map((e=>n.coreGraph.node(e))).forEach((n=>{const{height:r,width:o}=n;switch(n.node.type){case e.NodeType.NODE:Object.assign(n,t.nodeSize.node),n.height=r||t.nodeSize.node.height,n.width=o||t.nodeSize.node.width;break;case e.NodeType.BRIDGE:Object.assign(n,t.nodeSize.bridge);break;case e.NodeType.META:if(n.expanded){lc(n,t)}else Object.assign(n,t.nodeSize.meta),n.height=t.nodeSize.meta.height,n.width=t.nodeSize.meta.width;break;default:throw Error("Unrecognized node type: "+n.node.type)}n.expanded||function(e){e.coreBox.width=e.width,e.coreBox.height=e.height;const n=`${e.displayName}`.length,t=3;e.width=Math.max(e.coreBox.width,n*t)}(n)}))}(n,t),n.node.type===e.NodeType.META&&function(n,t){const r=t.subScene.meta;Object.assign(n,r),Object.assign(n.coreBox,function(n,t){Object.assign(n.graph(),{nodesep:t.nodeSep,ranksep:t.rankSep,edgesep:t.edgeSep,align:t.align});const r=[];if(n.nodes().forEach((t=>{n.node(t).node.type!==e.NodeType.BRIDGE&&r.push(t)})),!r.length)return{width:0,height:0};qu(n);let o=1/0,i=1/0,a=-1/0,u=-1/0;return r.forEach((e=>{const t=n.node(e),r=.5*t.width,c=t.x-r,s=t.x+r;o=c<o?c:o,a=s>a?s:a;const d=.5*t.height,f=t.y-d,h=t.y+d;i=f<i?f:i,u=h>u?h:u})),n.edges().forEach((e=>{const t=n.edge(e),r=n.node(t.metaEdge.v),c=n.node(t.metaEdge.w);if(3===t.points.length&&function(e){let n=pc(e[0],e[1]);for(let t=1;t<e.length-1;t++){const r=pc(e[t],e[t+1]);if(Math.abs(r-n)>1)return!1;n=r}return!0}(t.points)){if(null!=r){const e=r.expanded?r.x:vc(r);t.points[0].x=e}if(null!=c){const e=c.expanded?c.x:vc(c);t.points[2].x=e}t.points=[t.points[0],t.points[1]]}const s=t.points[t.points.length-2];null!=c&&(t.points[t.points.length-1]=gc(s,c));const d=t.points[1];null!=r&&(t.points[0]=gc(d,r)),t.points.forEach((e=>{o=e.x<o?e.x:o,a=e.x>a?e.x:a,i=e.y<i?e.y:i,u=e.y>u?e.y:u}))})),n.nodes().forEach((e=>{const t=n.node(e);t.x-=o,t.y-=i})),n.edges().forEach((e=>{n.edge(e).points.forEach((e=>{e.x-=o,e.y-=i}))})),{width:a-o,height:u-i}}(n.coreGraph,t.graph.meta));let o=0;n.coreGraph.nodeCount()>0&&o++;const i=o<=1?0:o;n.coreBox.width+=i+i,n.coreBox.height=r.labelHeight+n.coreBox.height,n.width=n.coreBox.width+r.paddingLeft+r.paddingRight,n.height=n.paddingTop+n.coreBox.height+n.paddingBottom}(n,t)}function pc(e,n){const t=n.x-e.x,r=n.y-e.y;return 180*Math.atan(r/t)/Math.PI}function vc(e){if(e.expanded)return e.x;return e.x-e.width/2+0+e.coreBox.width/2}function gc(e,n){const t=n.expanded?n.x:vc(n),r=n.y,o=e.x-t,i=e.y-r;let a,u,c=n.expanded?n.width:n.coreBox.width,s=n.expanded?n.height:n.coreBox.height;return Math.abs(i)*c/2>Math.abs(o)*s/2?(i<0&&(s=-s),a=0===i?0:s/2*o/i,u=s/2):(o<0&&(c=-c),a=c/2,u=0===o?0:c/2*i/o),{x:t+a,y:r+u}}function yc(n){const t=n.coreGraph.nodes().map((e=>n.coreGraph.node(e)));return Object.assign(Object.assign({},bc(n)),{expanded:n.expanded,nodes:n.expanded?(r=t,r.map((n=>n.node.type===e.NodeType.META?yc(n):bc(n)))):[],edges:n.expanded?mc(n):[]});var r}function bc(e){return{id:e.node.name,name:e.node.name,type:e.node.type,attr:e.attr,parentNodeName:e.node.parentNode?e.node.parentNode.name:null,coreBox:Object.assign({},e.coreBox),x:e.x,y:e.y,width:e.width,height:e.height,radius:e.radius,labelHeight:e.labelHeight,labelOffset:e.labelOffset,outboxWidth:e.outboxWidth,paddingLeft:e.paddingLeft,paddingTop:e.paddingTop,paddingRight:e.paddingRight,paddingBottom:e.paddingBottom}}function mc(e){return e.coreGraph.edges().map((n=>({renderInfoEdge:e.coreGraph.edge(n),edge:n}))).filter((({renderInfoEdge:e})=>e.metaEdge)).map((({edge:n,renderInfoEdge:t})=>{const r=function(e,n){const t=n.points.map((e=>Object.assign({},e)));if(n.adjoiningMetaEdge){const r=n.adjoiningMetaEdge.points,o=n.metaEdge.inbound,i=o?r[r.length-1]:r[0],a=t[o?0:t.length-1],u=e.x-e.width/2,c=e.y-e.height/2,s=i.x-u,d=i.y-c,f=-e.paddingLeft,h=-(e.paddingTop+e.labelHeight);a.x=s+f,a.y=d+h}return t}(e,t);return{adjoiningEdge:t.adjoiningMetaEdge?{w:t.adjoiningMetaEdge.metaEdge.w,v:t.adjoiningMetaEdge.metaEdge.v}:null,inbound:t.metaEdge.inbound,w:n.w,v:n.v,points:r,weight:t.weight,baseEdgeList:t.metaEdge.baseEdgeList}}))}e.BRIDGE_GRAPH_NAME=oc,e.LAYOUT_CONFIG=ic,e.ROOT_NAME=rc,e.buildGraph=function(e,n,t){const r=e.nodes.filter(((e,n,t)=>t.findIndex((n=>n.id===e.id))!==n)).map((e=>e.id));if(r.length)throw new Error(`Duplicated ids found: ${r.join(", ")}`);const o=function(e){const n={nodes:[]},t=Object.keys(e.compound||{}),r=new Map,o=(n,i=[])=>{const a=0===i.length;if(r.has(n))return r.get(n);for(let r=0;r<t.length;r++){let a=t[r];if(e.compound&&-1!==e.compound[a].indexOf(n))return i.unshift(a),o(a,i)}return a&&r.set(n,i),i},i=n=>e.edges.filter((e=>e.w===n)).map((e=>({name:e.v})));return e.nodes.forEach((e=>{const t=e.id,r=[...o(t),t];let a=i(t);n.nodes.push({name:t,path:r,inputs:a,width:e.width,height:e.height,attr:Object.assign({},e)})})),n}(e),i=function(e,n){const t=(e,n)=>{for(let t of n.values())if(t.includes(e))return!0;return!1},r=(e,n=[])=>{if(0===Object.keys(e).length)return[...new Set(n)];const o=new Map(Object.keys(e).map((n=>[n,e[n]]))),i={};for(let[e,r]of o)t(e,o)?i[e]=r:n=n.concat(e,r);return r(i,n)};return r(e).filter((e=>n.includes(e)))}(e.compound||{},(null==n?void 0:n.expanded)||[]),{renderInfo:a}=function(e,n="LR"){const t=uc(Ju(e),{rankDirection:n}),r=function(e){return new sc(e)}(t);return{hierarchy:t,renderInfo:r}}(o,n&&n.rankDirection?n.rankDirection:"LR");return function(e,n){n.forEach((n=>{const t=e.getRenderInfoNodes().find((e=>e.displayName===n));let r=t&&t.node&&t.node.name||"";const o=e.getRenderNodeByName(r);if(!o)throw new Error(`No nodes found: ${r}`);o.expanded=!0,e.buildSubHierarchy(r)}))}(a,i),lc(a.root,function(e={}){var n,t,r,o;const i=(null===(n=null==e?void 0:e.graph)||void 0===n?void 0:n.meta)||{},a=(null===(t=null==e?void 0:e.subScene)||void 0===t?void 0:t.meta)||{},u=(null===(r=null==e?void 0:e.nodeSize)||void 0===r?void 0:r.meta)||{},c=(null===(o=null==e?void 0:e.nodeSize)||void 0===o?void 0:o.node)||{},s=ic.nodeSize.bridge;return{graph:{meta:Object.assign(ic.graph.meta,i)},subScene:{meta:Object.assign(ic.subScene.meta,a)},nodeSize:{meta:Object.assign(ic.nodeSize.meta,u),node:Object.assign(ic.nodeSize.node,c),bridge:s}}}(t)),yc(a.root)},Object.defineProperty(e,"__esModule",{value:!0})}));


/***/ }),

/***/ "dX6s":
/*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/dist/d3-interpolate.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://d3js.org/d3-interpolate/ v2.0.1 Copyright 2020 Mike Bostock
(function (global, factory) {
 true ? factory(exports, __webpack_require__(/*! d3-color */ "meiv")) :
undefined;
}(this, function (exports, d3Color) { 'use strict';

function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

function basis$1(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

function basisClosed(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

var constant = x => () => x;

function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant(isNaN(a) ? b : a);
}

var rgb = (function rgbGamma(y) {
  var color = gamma(y);

  function rgb(start, end) {
    var r = color((start = d3Color.rgb(start)).r, (end = d3Color.rgb(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1);

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = d3Color.rgb(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(basis$1);
var rgbBasisClosed = rgbSpline(basisClosed);

function numberArray(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
      c = b.slice(),
      i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}

function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

function array(a, b) {
  return (isNumberArray(b) ? numberArray : genericArray)(a, b);
}

function genericArray(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = value(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}

function date(a, b) {
  var d = new Date;
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}

function number(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}

function object(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = value(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}

var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

function string(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: number(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
}

function value(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant(b)
      : (t === "number" ? number
      : t === "string" ? ((c = d3Color.color(b)) ? (b = c, rgb) : string)
      : b instanceof d3Color.color ? rgb
      : b instanceof Date ? date
      : isNumberArray(b) ? numberArray
      : Array.isArray(b) ? genericArray
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object
      : number)(a, b);
}

function discrete(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
}

function hue$1(a, b) {
  var i = hue(+a, +b);
  return function(t) {
    var x = i(t);
    return x - 360 * Math.floor(x / 360);
  };
}

function round(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
}

var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

function decompose(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
}

var svgNode;

/* eslint-disable no-undef */
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? identity : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
}

function parseSvg(value) {
  if (value == null) return identity;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity;
  value = value.matrix;
  return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
}

function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: number(xa, xb)}, {i: i - 2, x: number(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: number(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: number(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: number(xa, xb)}, {i: i - 2, x: number(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

var epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

var zoom = (function zoomRho(rho, rho2, rho4) {

  // p0 = [ux0, uy0, w0]
  // p1 = [ux1, uy1, w1]
  function zoom(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
        ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
        dx = ux1 - ux0,
        dy = uy1 - uy0,
        d2 = dx * dx + dy * dy,
        i,
        S;

    // Special case for u0 ≅ u1.
    if (d2 < epsilon2) {
      S = Math.log(w1 / w0) / rho;
      i = function(t) {
        return [
          ux0 + t * dx,
          uy0 + t * dy,
          w0 * Math.exp(rho * t * S)
        ];
      };
    }

    // General case.
    else {
      var d1 = Math.sqrt(d2),
          b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
          b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
          r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
          r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;
      i = function(t) {
        var s = t * S,
            coshr0 = cosh(r0),
            u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
        return [
          ux0 + u * dx,
          uy0 + u * dy,
          w0 * coshr0 / cosh(rho * s + r0)
        ];
      };
    }

    i.duration = S * 1000 * rho / Math.SQRT2;

    return i;
  }

  zoom.rho = function(_) {
    var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
    return zoomRho(_1, _2, _4);
  };

  return zoom;
})(Math.SQRT2, 2, 4);

function hsl(hue) {
  return function(start, end) {
    var h = hue((start = d3Color.hsl(start)).h, (end = d3Color.hsl(end)).h),
        s = nogamma(start.s, end.s),
        l = nogamma(start.l, end.l),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

var hsl$1 = hsl(hue);
var hslLong = hsl(nogamma);

function lab(start, end) {
  var l = nogamma((start = d3Color.lab(start)).l, (end = d3Color.lab(end)).l),
      a = nogamma(start.a, end.a),
      b = nogamma(start.b, end.b),
      opacity = nogamma(start.opacity, end.opacity);
  return function(t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}

function hcl(hue) {
  return function(start, end) {
    var h = hue((start = d3Color.hcl(start)).h, (end = d3Color.hcl(end)).h),
        c = nogamma(start.c, end.c),
        l = nogamma(start.l, end.l),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

var hcl$1 = hcl(hue);
var hclLong = hcl(nogamma);

function cubehelix(hue) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = d3Color.cubehelix(start)).h, (end = d3Color.cubehelix(end)).h),
          s = nogamma(start.s, end.s),
          l = nogamma(start.l, end.l),
          opacity = nogamma(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  })(1);
}

var cubehelix$1 = cubehelix(hue);
var cubehelixLong = cubehelix(nogamma);

function piecewise(interpolate, values) {
  if (values === undefined) values = interpolate, interpolate = value;
  var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
  while (i < n) I[i] = interpolate(v, v = values[++i]);
  return function(t) {
    var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i](t - i);
  };
}

function quantize(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
}

exports.interpolate = value;
exports.interpolateArray = array;
exports.interpolateBasis = basis$1;
exports.interpolateBasisClosed = basisClosed;
exports.interpolateCubehelix = cubehelix$1;
exports.interpolateCubehelixLong = cubehelixLong;
exports.interpolateDate = date;
exports.interpolateDiscrete = discrete;
exports.interpolateHcl = hcl$1;
exports.interpolateHclLong = hclLong;
exports.interpolateHsl = hsl$1;
exports.interpolateHslLong = hslLong;
exports.interpolateHue = hue$1;
exports.interpolateLab = lab;
exports.interpolateNumber = number;
exports.interpolateNumberArray = numberArray;
exports.interpolateObject = object;
exports.interpolateRgb = rgb;
exports.interpolateRgbBasis = rgbBasis;
exports.interpolateRgbBasisClosed = rgbBasisClosed;
exports.interpolateRound = round;
exports.interpolateString = string;
exports.interpolateTransformCss = interpolateTransformCss;
exports.interpolateTransformSvg = interpolateTransformSvg;
exports.interpolateZoom = zoom;
exports.piecewise = piecewise;
exports.quantize = quantize;

Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ }),

/***/ "j/KB":
/*!**********************************************************!*\
  !*** ./node_modules/d3-transition/dist/d3-transition.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://d3js.org/d3-transition/ v2.0.0 Copyright 2020 Mike Bostock
(function (global, factory) {
 true ? factory(exports, __webpack_require__(/*! d3-selection */ "A552"), __webpack_require__(/*! d3-dispatch */ "+mtc"), __webpack_require__(/*! d3-timer */ "Epp9"), __webpack_require__(/*! d3-interpolate */ "dX6s"), __webpack_require__(/*! d3-color */ "meiv"), __webpack_require__(/*! d3-ease */ "5Yqy")) :
undefined;
}(this, function (exports, d3Selection, d3Dispatch, d3Timer, d3Interpolate, d3Color, d3Ease) { 'use strict';

var emptyOn = d3Dispatch.dispatch("start", "end", "cancel", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

function schedule(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}

function init(node, id) {
  var schedule = get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function set(node, id) {
  var schedule = get(node, id);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}

function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = d3Timer.timer(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return d3Timer.timeout(start);

      // Interrupt the active transition, if any.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions.
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    d3Timer.timeout(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(node, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}

function interrupt(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
}

function selection_interrupt(name) {
  return this.each(function() {
    interrupt(this, name);
  });
}

function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = set(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule = set(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

function transition_tween(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = get(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
}

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = set(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return get(node, id).value[name];
  };
}

function interpolate(a, b) {
  var c;
  return (typeof b === "number" ? d3Interpolate.interpolateNumber
      : b instanceof d3Color.color ? d3Interpolate.interpolateRgb
      : (c = d3Color.color(b)) ? (b = c, d3Interpolate.interpolateRgb)
      : d3Interpolate.interpolateString)(a, b);
}

function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function transition_attr(name, value) {
  var fullname = d3Selection.namespace(name), i = fullname === "transform" ? d3Interpolate.interpolateTransformSvg : interpolate;
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
      : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
}

function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}

function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}

function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function transition_attrTween(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = d3Selection.namespace(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}

function delayFunction(id, value) {
  return function() {
    init(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    init(this, id).delay = value;
  };
}

function transition_delay(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : get(this.node(), id).delay;
}

function durationFunction(id, value) {
  return function() {
    set(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    set(this, id).duration = value;
  };
}

function transition_duration(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : get(this.node(), id).duration;
}

function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    set(this, id).ease = value;
  };
}

function transition_ease(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : get(this.node(), id).ease;
}

function easeVarying(id, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function") throw new Error;
    set(this, id).ease = v;
  };
}

function transition_easeVarying(value) {
  if (typeof value !== "function") throw new Error;
  return this.each(easeVarying(this._id, value));
}

function transition_filter(match) {
  if (typeof match !== "function") match = d3Selection.matcher(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Transition(subgroups, this._parents, this._name, this._id);
}

function transition_merge(transition) {
  if (transition._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Transition(merges, this._parents, this._name, this._id);
}

function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = start(name) ? init : set;
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

function transition_on(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? get(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
}

function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

function transition_remove() {
  return this.on("end.remove", removeFunction(this._id));
}

function transition_select(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = d3Selection.selector(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule(subgroup[i], name, id, i, subgroup, get(node, id));
      }
    }
  }

  return new Transition(subgroups, this._parents, name, id);
}

function transition_selectAll(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = d3Selection.selectorAll(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = get(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            schedule(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new Transition(subgroups, parents, name, id);
}

var Selection = d3Selection.selection.prototype.constructor;

function transition_selection() {
  return new Selection(this._groups, this._parents);
}

function styleNull(name, interpolate) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = d3Selection.style(this, name),
        string1 = (this.style.removeProperty(name), d3Selection.style(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}

function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = d3Selection.style(this, name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function styleFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = d3Selection.style(this, name),
        value1 = value(this),
        string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), d3Selection.style(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function styleMaybeRemove(id, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
  return function() {
    var schedule = set(this, id),
        on = schedule.on,
        listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

    schedule.on = on1;
  };
}

function transition_style(name, value, priority) {
  var i = (name += "") === "transform" ? d3Interpolate.interpolateTransformCss : interpolate;
  return value == null ? this
      .styleTween(name, styleNull(name, i))
      .on("end.style." + name, styleRemove(name))
    : typeof value === "function" ? this
      .styleTween(name, styleFunction(name, i, tweenValue(this, "style." + name, value)))
      .each(styleMaybeRemove(this._id, name))
    : this
      .styleTween(name, styleConstant(name, i, value), priority)
      .on("end.style." + name, null);
}

function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}

function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}

function transition_styleTween(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

function transition_text(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction(tweenValue(this, "text", value))
      : textConstant(value == null ? "" : value + ""));
}

function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}

function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function transition_textTween(value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, textTween(value));
}

function transition_transition() {
  var name = this._name,
      id0 = this._id,
      id1 = newId();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = get(node, id0);
        schedule(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new Transition(groups, this._parents, name, id1);
}

function transition_end() {
  var on0, on1, that = this, id = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = {value: reject},
        end = {value: function() { if (--size === 0) resolve(); }};

    that.each(function() {
      var schedule = set(this, id),
          on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }

      schedule.on = on1;
    });

    // The selection was empty, resolve end immediately
    if (size === 0) resolve();
  });
}

var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition(name) {
  return d3Selection.selection().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = d3Selection.selection.prototype;

Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: transition_select,
  selectAll: transition_selectAll,
  filter: transition_filter,
  merge: transition_merge,
  selection: transition_selection,
  transition: transition_transition,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: transition_on,
  attr: transition_attr,
  attrTween: transition_attrTween,
  style: transition_style,
  styleTween: transition_styleTween,
  text: transition_text,
  textTween: transition_textTween,
  remove: transition_remove,
  tween: transition_tween,
  delay: transition_delay,
  duration: transition_duration,
  ease: transition_ease,
  easeVarying: transition_easeVarying,
  end: transition_end,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};

var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: d3Ease.easeCubicInOut
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id} not found`);
    }
  }
  return timing;
}

function selection_transition(name) {
  var id,
      timing;

  if (name instanceof Transition) {
    id = name._id, name = name._name;
  } else {
    id = newId(), (timing = defaultTiming).time = d3Timer.now(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new Transition(groups, this._parents, name, id);
}

d3Selection.selection.prototype.interrupt = selection_interrupt;
d3Selection.selection.prototype.transition = selection_transition;

var root = [null];

function active(node, name) {
  var schedules = node.__transition,
      schedule,
      i;

  if (schedules) {
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule = schedules[i]).state > SCHEDULED && schedule.name === name) {
        return new Transition([[node]], root, name, +i);
      }
    }
  }

  return null;
}

exports.active = active;
exports.interrupt = interrupt;
exports.transition = transition;

Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ }),

/***/ "meiv":
/*!************************************************!*\
  !*** ./node_modules/d3-color/dist/d3-color.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://d3js.org/d3-color/ v2.0.0 Copyright 2020 Mike Bostock
(function (global, factory) {
 true ? factory(exports) :
undefined;
}(this, function (exports) { 'use strict';

function define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

define(Color, color, {
  copy: function(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

define(Rgb, rgb, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}

function rgb_formatRgb() {
  var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
  return (a === 1 ? "rgb(" : "rgba(")
      + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.b) || 0))
      + (a === 1 ? ")" : ", " + a + ")");
}

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Hsl, hsl, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "hsl(" : "hsla(")
        + (this.h || 0) + ", "
        + (this.s || 0) * 100 + "%, "
        + (this.l || 0) * 100 + "%"
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}

const radians = Math.PI / 180;
const degrees = 180 / Math.PI;

// https://observablehq.com/@mbostock/lab-and-rgb
const K = 18,
    Xn = 0.96422,
    Yn = 1,
    Zn = 0.82521,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) return hcl2lab(o);
  if (!(o instanceof Rgb)) o = rgbConvert(o);
  var r = rgb2lrgb(o.r),
      g = rgb2lrgb(o.g),
      b = rgb2lrgb(o.b),
      y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;
  if (r === g && g === b) x = z = y; else {
    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function gray(l, opacity) {
  return new Lab(l, 0, 0, opacity == null ? 1 : opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

define(Lab, lab, extend(Color, {
  brighter: function(k) {
    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function(k) {
    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    x = Xn * lab2xyz(x);
    y = Yn * lab2xyz(y);
    z = Zn * lab2xyz(z);
    return new Rgb(
      lrgb2rgb( 3.1338561 * x - 1.6168667 * y - 0.4906146 * z),
      lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z),
      lrgb2rgb( 0.0719453 * x - 0.2289914 * y + 1.4052427 * z),
      this.opacity
    );
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function lrgb2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2lrgb(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * degrees;
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function lch(l, c, h, opacity) {
  return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

function hcl2lab(o) {
  if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
  var h = o.h * radians;
  return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
}

define(Hcl, hcl, extend(Color, {
  brighter: function(k) {
    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
  },
  darker: function(k) {
    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
  },
  rgb: function() {
    return hcl2lab(this).rgb();
  }
}));

var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Rgb)) o = rgbConvert(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * degrees - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Cubehelix, cubehelix, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * radians,
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new Rgb(
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));

exports.color = color;
exports.cubehelix = cubehelix;
exports.gray = gray;
exports.hcl = hcl;
exports.hsl = hsl;
exports.lab = lab;
exports.lch = lch;
exports.rgb = rgb;

Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ }),

/***/ "zyy5":
/*!**********************************************!*\
  !*** ./node_modules/d3-path/dist/d3-path.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://d3js.org/d3-path/ v2.0.0 Copyright 2020 Mike Bostock
(function (global, factory) {
 true ? factory(exports) :
undefined;
}(this, function (exports) { 'use strict';

const pi = Math.PI,
    tau = 2 * pi,
    epsilon = 1e-6,
    tauEpsilon = tau - epsilon;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath
  this._ = "";
}

function path() {
  return new Path;
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function(x1, y1, x, y) {
    this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
    this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon));

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Otherwise, draw an arc!
    else {
      var x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }

      this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r, ccw = !!ccw;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._ += "L" + x0 + "," + y0;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau + tau;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon) {
      this._ += "A" + r + "," + r + ",0," + (+(da >= pi)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    }
  },
  rect: function(x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
  },
  toString: function() {
    return this._;
  }
};

exports.path = path;

Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ })

};;
//# sourceMappingURL=vendors~graph-index-module.js.map