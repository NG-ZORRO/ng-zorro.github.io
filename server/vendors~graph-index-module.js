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

// https://d3js.org/d3-shape/ v2.0.0 Copyright 2020 Mike Bostock
(function (global, factory) {
 true ? factory(exports, __webpack_require__(/*! d3-path */ "zyy5")) :
undefined;
}(this, function (exports, d3Path) { 'use strict';

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

function descending(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}

function identity(d) {
  return d;
}

function pie() {
  var value = identity,
      sortValues = descending,
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

var curveRadialLinear = curveRadial(curveLinear);

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

function curveRadial(curve) {

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
    return arguments.length ? c(curveRadial(_)) : c()._curve;
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
    return arguments.length ? c(curveRadial(_)) : c()._curve;
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

function curveRadial$1(context, x0, y0, x1, y1) {
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
  var l = link(curveRadial$1);
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

function point(that, x, y) {
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
      case 3: point(this, this._x1, this._y1); // proceed
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
      default: point(this, x, y); break;
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
      default: point(this, x, y); break;
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
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

function basisOpen(context) {
  return new BasisOpen(context);
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

function point$1(that, x, y) {
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
      case 3: point$1(this, this._x1, this._y1); break;
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
      default: point$1(this, x, y); break;
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
      default: point$1(this, x, y); break;
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
      default: point$1(this, x, y); break;
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

function point$2(that, x, y) {
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
      default: point$2(this, x, y); break;
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
      default: point$2(this, x, y); break;
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
      default: point$2(this, x, y); break;
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
function point$3(that, t0, t1) {
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
      case 3: point$3(this, this._t0, slope2(this, this._t0)); break;
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
      case 2: this._point = 3; point$3(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
      default: point$3(this, this._t0, t1 = slope3(this, x, y)); break;
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

function none(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
}

function none$1(series) {
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
      order = none$1,
      offset = none,
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
    return arguments.length ? (order = _ == null ? none$1 : typeof _ === "function" ? _ : constant(Array.from(_)), stack) : order;
  };

  stack.offset = function(_) {
    return arguments.length ? (offset = _ == null ? none : _, stack) : offset;
  };

  return stack;
}

function expand(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
    for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
    if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
  }
  none(series, order);
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
  none(series, order);
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
  none(series, order);
}

function appearance(series) {
  var peaks = series.map(peak);
  return none$1(series).sort(function(a, b) { return peaks[a] - peaks[b]; });
}

function peak(series) {
  var i = -1, j = 0, n = series.length, vi, vj = -Infinity;
  while (++i < n) if ((vi = +series[i][1]) > vj) vj = vi, j = i;
  return j;
}

function ascending(series) {
  var sums = series.map(sum);
  return none$1(series).sort(function(a, b) { return sums[a] - sums[b]; });
}

function sum(series) {
  var s = 0, i = -1, n = series.length, v;
  while (++i < n) if (v = +series[i][1]) s += v;
  return s;
}

function descending$1(series) {
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
  return none$1(series).reverse();
}

exports.arc = arc;
exports.area = area;
exports.areaRadial = areaRadial;
exports.curveBasis = basis;
exports.curveBasisClosed = basisClosed;
exports.curveBasisOpen = basisOpen;
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
exports.stackOffsetNone = none;
exports.stackOffsetSilhouette = silhouette;
exports.stackOffsetWiggle = wiggle;
exports.stackOrderAppearance = appearance;
exports.stackOrderAscending = ascending;
exports.stackOrderDescending = descending$1;
exports.stackOrderInsideOut = insideOut;
exports.stackOrderNone = none$1;
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

}));


/***/ }),

/***/ "aeDM":
/*!********************************************************************************!*\
  !*** ./node_modules/@nx-component/hierarchy-graph/dist/hierarchy-graph.umd.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?t(exports):undefined}(this,(function(e){"use strict";const t={animation:{duration:250},graph:{meta:{nodeSep:50,rankSep:40,edgeSep:5},padding:{paddingTop:10,paddingLeft:0}},subscene:{meta:{paddingTop:20,paddingBottom:20,paddingLeft:20,paddingRight:20,labelHeight:20,extractXOffset:0,extractYOffset:0}},nodeSize:{meta:{radius:2,width:230,maxLabelWidth:0,height:165,expandButtonRadius:3},op:{width:230,height:160,radius:1,labelOffset:10,maxLabelWidth:40},bridge:{width:20,height:20,radius:2,labelOffset:0}},shortcutSize:{op:{width:10,height:4},meta:{width:12,height:4,radius:1},series:{width:14,height:4}},annotations:{inboxWidth:50,outboxWidth:50,xOffset:10,yOffset:3,labelOffset:2,maxLabelWidth:120},constant:{size:{width:4,height:4}},minimap:{size:150}};var n,r,o;!function(e){e[e.META=0]="META",e[e.OP=1]="OP",e[e.BRIDGE=2]="BRIDGE",e[e.ELLIPSIS=3]="ELLIPSIS"}(n||(n={})),function(e){e[e.INCLUDE=0]="INCLUDE",e[e.EXCLUDE=1]="EXCLUDE",e[e.UNSPECIFIED=2]="UNSPECIFIED"}(r||(r={})),function(e){e[e.FULL=0]="FULL",e[e.EMBEDDED=1]="EMBEDDED",e[e.META=2]="META",e[e.SERIES=3]="SERIES",e[e.CORE=4]="CORE",e[e.SHADOW=5]="SHADOW",e[e.BRIDGE=6]="BRIDGE",e[e.EDGE=7]="EDGE"}(o||(o={}));var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function a(e,t){return e(t={exports:{}},t.exports),t.exports}var u=function(){this.__data__=[],this.size=0};var c=function(e,t){return e===t||e!=e&&t!=t};var s=function(e,t){for(var n=e.length;n--;)if(c(e[n][0],t))return n;return-1},d=Array.prototype.splice;var f=function(e){var t=this.__data__,n=s(t,e);return!(n<0)&&(n==t.length-1?t.pop():d.call(t,n,1),--this.size,!0)};var h=function(e){var t=this.__data__,n=s(t,e);return n<0?void 0:t[n][1]};var l=function(e){return s(this.__data__,e)>-1};var p=function(e,t){var n=this.__data__,r=s(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function v(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}v.prototype.clear=u,v.prototype.delete=f,v.prototype.get=h,v.prototype.has=l,v.prototype.set=p;var g=v;var y=function(){this.__data__=new g,this.size=0};var b=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n};var m=function(e){return this.__data__.get(e)};var w=function(e){return this.__data__.has(e)},E="object"==typeof i&&i&&i.Object===Object&&i,_="object"==typeof self&&self&&self.Object===Object&&self,x=E||_||Function("return this")(),j=x.Symbol,N=Object.prototype,O=N.hasOwnProperty,k=N.toString,I=j?j.toStringTag:void 0;var S=function(e){var t=O.call(e,I),n=e[I];try{e[I]=void 0}catch(e){}var r=k.call(e);return t?e[I]=n:delete e[I],r},M=Object.prototype.toString;var C=function(e){return M.call(e)},B=j?j.toStringTag:void 0;var R=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":B&&B in Object(e)?S(e):C(e)};var L=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};var A,D=function(e){if(!L(e))return!1;var t=R(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},P=x["__core-js_shared__"],T=(A=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+A:"";var G=function(e){return!!T&&T in e},z=Function.prototype.toString;var F=function(e){if(null!=e){try{return z.call(e)}catch(e){}try{return e+""}catch(e){}}return""},U=/^\[object .+?Constructor\]$/,V=Function.prototype,W=Object.prototype,Y=V.toString,$=W.hasOwnProperty,q=RegExp("^"+Y.call($).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var H=function(e){return!(!L(e)||G(e))&&(D(e)?q:U).test(F(e))};var X=function(e,t){return null==e?void 0:e[t]};var J=function(e,t){var n=X(e,t);return H(n)?n:void 0},K=J(x,"Map"),Q=J(Object,"create");var Z=function(){this.__data__=Q?Q(null):{},this.size=0};var ee=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},te=Object.prototype.hasOwnProperty;var ne=function(e){var t=this.__data__;if(Q){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return te.call(t,e)?t[e]:void 0},re=Object.prototype.hasOwnProperty;var oe=function(e){var t=this.__data__;return Q?void 0!==t[e]:re.call(t,e)};var ie=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Q&&void 0===t?"__lodash_hash_undefined__":t,this};function ae(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ae.prototype.clear=Z,ae.prototype.delete=ee,ae.prototype.get=ne,ae.prototype.has=oe,ae.prototype.set=ie;var ue=ae;var ce=function(){this.size=0,this.__data__={hash:new ue,map:new(K||g),string:new ue}};var se=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var de=function(e,t){var n=e.__data__;return se(t)?n["string"==typeof t?"string":"hash"]:n.map};var fe=function(e){var t=de(this,e).delete(e);return this.size-=t?1:0,t};var he=function(e){return de(this,e).get(e)};var le=function(e){return de(this,e).has(e)};var pe=function(e,t){var n=de(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function ve(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ve.prototype.clear=ce,ve.prototype.delete=fe,ve.prototype.get=he,ve.prototype.has=le,ve.prototype.set=pe;var ge=ve;var ye=function(e,t){var n=this.__data__;if(n instanceof g){var r=n.__data__;if(!K||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new ge(r)}return n.set(e,t),this.size=n.size,this};function be(e){var t=this.__data__=new g(e);this.size=t.size}be.prototype.clear=y,be.prototype.delete=b,be.prototype.get=m,be.prototype.has=w,be.prototype.set=ye;var me=be;var we=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e},Ee=function(){try{var e=J(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();var _e=function(e,t,n){"__proto__"==t&&Ee?Ee(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n},xe=Object.prototype.hasOwnProperty;var je=function(e,t,n){var r=e[t];xe.call(e,t)&&c(r,n)&&(void 0!==n||t in e)||_e(e,t,n)};var Ne=function(e,t,n,r){var o=!n;n||(n={});for(var i=-1,a=t.length;++i<a;){var u=t[i],c=r?r(n[u],e[u],u,n,e):void 0;void 0===c&&(c=e[u]),o?_e(n,u,c):je(n,u,c)}return n};var Oe=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r};var ke=function(e){return null!=e&&"object"==typeof e};var Ie=function(e){return ke(e)&&"[object Arguments]"==R(e)},Se=Object.prototype,Me=Se.hasOwnProperty,Ce=Se.propertyIsEnumerable,Be=Ie(function(){return arguments}())?Ie:function(e){return ke(e)&&Me.call(e,"callee")&&!Ce.call(e,"callee")},Re=Array.isArray;var Le=function(){return!1},Ae=a((function(e,t){var n=t&&!t.nodeType&&t,r=n&&e&&!e.nodeType&&e,o=r&&r.exports===n?x.Buffer:void 0,i=(o?o.isBuffer:void 0)||Le;e.exports=i})),De=/^(?:0|[1-9]\d*)$/;var Pe=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&De.test(e))&&e>-1&&e%1==0&&e<t};var Te=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},Ge={};Ge["[object Float32Array]"]=Ge["[object Float64Array]"]=Ge["[object Int8Array]"]=Ge["[object Int16Array]"]=Ge["[object Int32Array]"]=Ge["[object Uint8Array]"]=Ge["[object Uint8ClampedArray]"]=Ge["[object Uint16Array]"]=Ge["[object Uint32Array]"]=!0,Ge["[object Arguments]"]=Ge["[object Array]"]=Ge["[object ArrayBuffer]"]=Ge["[object Boolean]"]=Ge["[object DataView]"]=Ge["[object Date]"]=Ge["[object Error]"]=Ge["[object Function]"]=Ge["[object Map]"]=Ge["[object Number]"]=Ge["[object Object]"]=Ge["[object RegExp]"]=Ge["[object Set]"]=Ge["[object String]"]=Ge["[object WeakMap]"]=!1;var ze=function(e){return ke(e)&&Te(e.length)&&!!Ge[R(e)]};var Fe=function(e){return function(t){return e(t)}},Ue=a((function(e,t){var n=t&&!t.nodeType&&t,r=n&&e&&!e.nodeType&&e,o=r&&r.exports===n&&E.process,i=function(){try{var e=r&&r.require&&r.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=i})),Ve=Ue&&Ue.isTypedArray,We=Ve?Fe(Ve):ze,Ye=Object.prototype.hasOwnProperty;var $e=function(e,t){var n=Re(e),r=!n&&Be(e),o=!n&&!r&&Ae(e),i=!n&&!r&&!o&&We(e),a=n||r||o||i,u=a?Oe(e.length,String):[],c=u.length;for(var s in e)!t&&!Ye.call(e,s)||a&&("length"==s||o&&("offset"==s||"parent"==s)||i&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||Pe(s,c))||u.push(s);return u},qe=Object.prototype;var He=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||qe)};var Xe=function(e,t){return function(n){return e(t(n))}},Je=Xe(Object.keys,Object),Ke=Object.prototype.hasOwnProperty;var Qe=function(e){if(!He(e))return Je(e);var t=[];for(var n in Object(e))Ke.call(e,n)&&"constructor"!=n&&t.push(n);return t};var Ze=function(e){return null!=e&&Te(e.length)&&!D(e)};var et=function(e){return Ze(e)?$e(e):Qe(e)};var tt=function(e,t){return e&&Ne(t,et(t),e)};var nt=function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t},rt=Object.prototype.hasOwnProperty;var ot=function(e){if(!L(e))return nt(e);var t=He(e),n=[];for(var r in e)("constructor"!=r||!t&&rt.call(e,r))&&n.push(r);return n};var it=function(e){return Ze(e)?$e(e,!0):ot(e)};var at=function(e,t){return e&&Ne(t,it(t),e)},ut=a((function(e,t){var n=t&&!t.nodeType&&t,r=n&&e&&!e.nodeType&&e,o=r&&r.exports===n?x.Buffer:void 0,i=o?o.allocUnsafe:void 0;e.exports=function(e,t){if(t)return e.slice();var n=e.length,r=i?i(n):new e.constructor(n);return e.copy(r),r}}));var ct=function(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t};var st=function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[o++]=a)}return i};var dt=function(){return[]},ft=Object.prototype.propertyIsEnumerable,ht=Object.getOwnPropertySymbols,lt=ht?function(e){return null==e?[]:(e=Object(e),st(ht(e),(function(t){return ft.call(e,t)})))}:dt;var pt=function(e,t){return Ne(e,lt(e),t)};var vt=function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e},gt=Xe(Object.getPrototypeOf,Object),yt=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)vt(t,lt(e)),e=gt(e);return t}:dt;var bt=function(e,t){return Ne(e,yt(e),t)};var mt=function(e,t,n){var r=t(e);return Re(e)?r:vt(r,n(e))};var wt=function(e){return mt(e,et,lt)};var Et=function(e){return mt(e,it,yt)},_t=J(x,"DataView"),xt=J(x,"Promise"),jt=J(x,"Set"),Nt=J(x,"WeakMap"),Ot=F(_t),kt=F(K),It=F(xt),St=F(jt),Mt=F(Nt),Ct=R;(_t&&"[object DataView]"!=Ct(new _t(new ArrayBuffer(1)))||K&&"[object Map]"!=Ct(new K)||xt&&"[object Promise]"!=Ct(xt.resolve())||jt&&"[object Set]"!=Ct(new jt)||Nt&&"[object WeakMap]"!=Ct(new Nt))&&(Ct=function(e){var t=R(e),n="[object Object]"==t?e.constructor:void 0,r=n?F(n):"";if(r)switch(r){case Ot:return"[object DataView]";case kt:return"[object Map]";case It:return"[object Promise]";case St:return"[object Set]";case Mt:return"[object WeakMap]"}return t});var Bt=Ct,Rt=Object.prototype.hasOwnProperty;var Lt=function(e){var t=e.length,n=new e.constructor(t);return t&&"string"==typeof e[0]&&Rt.call(e,"index")&&(n.index=e.index,n.input=e.input),n},At=x.Uint8Array;var Dt=function(e){var t=new e.constructor(e.byteLength);return new At(t).set(new At(e)),t};var Pt=function(e,t){var n=t?Dt(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)},Tt=/\w*$/;var Gt=function(e){var t=new e.constructor(e.source,Tt.exec(e));return t.lastIndex=e.lastIndex,t},zt=j?j.prototype:void 0,Ft=zt?zt.valueOf:void 0;var Ut=function(e){return Ft?Object(Ft.call(e)):{}};var Vt=function(e,t){var n=t?Dt(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)};var Wt=function(e,t,n){var r=e.constructor;switch(t){case"[object ArrayBuffer]":return Dt(e);case"[object Boolean]":case"[object Date]":return new r(+e);case"[object DataView]":return Pt(e,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Vt(e,n);case"[object Map]":return new r;case"[object Number]":case"[object String]":return new r(e);case"[object RegExp]":return Gt(e);case"[object Set]":return new r;case"[object Symbol]":return Ut(e)}},Yt=Object.create,$t=function(){function e(){}return function(t){if(!L(t))return{};if(Yt)return Yt(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();var qt=function(e){return"function"!=typeof e.constructor||He(e)?{}:$t(gt(e))};var Ht=function(e){return ke(e)&&"[object Map]"==Bt(e)},Xt=Ue&&Ue.isMap,Jt=Xt?Fe(Xt):Ht;var Kt=function(e){return ke(e)&&"[object Set]"==Bt(e)},Qt=Ue&&Ue.isSet,Zt=Qt?Fe(Qt):Kt,en={};en["[object Arguments]"]=en["[object Array]"]=en["[object ArrayBuffer]"]=en["[object DataView]"]=en["[object Boolean]"]=en["[object Date]"]=en["[object Float32Array]"]=en["[object Float64Array]"]=en["[object Int8Array]"]=en["[object Int16Array]"]=en["[object Int32Array]"]=en["[object Map]"]=en["[object Number]"]=en["[object Object]"]=en["[object RegExp]"]=en["[object Set]"]=en["[object String]"]=en["[object Symbol]"]=en["[object Uint8Array]"]=en["[object Uint8ClampedArray]"]=en["[object Uint16Array]"]=en["[object Uint32Array]"]=!0,en["[object Error]"]=en["[object Function]"]=en["[object WeakMap]"]=!1;var tn=function e(t,n,r,o,i,a){var u,c=1&n,s=2&n,d=4&n;if(r&&(u=i?r(t,o,i,a):r(t)),void 0!==u)return u;if(!L(t))return t;var f=Re(t);if(f){if(u=Lt(t),!c)return ct(t,u)}else{var h=Bt(t),l="[object Function]"==h||"[object GeneratorFunction]"==h;if(Ae(t))return ut(t,c);if("[object Object]"==h||"[object Arguments]"==h||l&&!i){if(u=s||l?{}:qt(t),!c)return s?bt(t,at(u,t)):pt(t,tt(u,t))}else{if(!en[h])return i?t:{};u=Wt(t,h,c)}}a||(a=new me);var p=a.get(t);if(p)return p;a.set(t,u),Zt(t)?t.forEach((function(o){u.add(e(o,n,r,o,t,a))})):Jt(t)&&t.forEach((function(o,i){u.set(i,e(o,n,r,i,t,a))}));var v=d?s?Et:wt:s?keysIn:et,g=f?void 0:v(t);return we(g||t,(function(o,i){g&&(o=t[i=o]),je(u,i,e(o,n,r,i,t,a))})),u};var nn=function(e){return tn(e,4)};var rn=function(e){return function(){return e}};var on=function(e){return function(t,n,r){for(var o=-1,i=Object(t),a=r(t),u=a.length;u--;){var c=a[e?u:++o];if(!1===n(i[c],c,i))break}return t}}();var an=function(e,t){return e&&on(e,t,et)};var un=function(e,t){return function(n,r){if(null==n)return n;if(!Ze(n))return e(n,r);for(var o=n.length,i=t?o:-1,a=Object(n);(t?i--:++i<o)&&!1!==r(a[i],i,a););return n}}(an);var cn=function(e){return e};var sn=function(e){return"function"==typeof e?e:cn};var dn=function(e,t){return(Re(e)?we:un)(e,sn(t))},fn=dn;var hn=function(e,t){var n=[];return un(e,(function(e,r,o){t(e,r,o)&&n.push(e)})),n};var ln=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this};var pn=function(e){return this.__data__.has(e)};function vn(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new ge;++t<n;)this.add(e[t])}vn.prototype.add=vn.prototype.push=ln,vn.prototype.has=pn;var gn=vn;var yn=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1};var bn=function(e,t){return e.has(t)};var mn=function(e,t,n,r,o,i){var a=1&n,u=e.length,c=t.length;if(u!=c&&!(a&&c>u))return!1;var s=i.get(e);if(s&&i.get(t))return s==t;var d=-1,f=!0,h=2&n?new gn:void 0;for(i.set(e,t),i.set(t,e);++d<u;){var l=e[d],p=t[d];if(r)var v=a?r(p,l,d,t,e,i):r(l,p,d,e,t,i);if(void 0!==v){if(v)continue;f=!1;break}if(h){if(!yn(t,(function(e,t){if(!bn(h,t)&&(l===e||o(l,e,n,r,i)))return h.push(t)}))){f=!1;break}}else if(l!==p&&!o(l,p,n,r,i)){f=!1;break}}return i.delete(e),i.delete(t),f};var wn=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n};var En=function(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n},_n=j?j.prototype:void 0,xn=_n?_n.valueOf:void 0;var jn=function(e,t,n,r,o,i,a){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!i(new At(e),new At(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return c(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var u=wn;case"[object Set]":var s=1&r;if(u||(u=En),e.size!=t.size&&!s)return!1;var d=a.get(e);if(d)return d==t;r|=2,a.set(e,t);var f=mn(u(e),u(t),r,o,i,a);return a.delete(e),f;case"[object Symbol]":if(xn)return xn.call(e)==xn.call(t)}return!1},Nn=Object.prototype.hasOwnProperty;var On=function(e,t,n,r,o,i){var a=1&n,u=wt(e),c=u.length;if(c!=wt(t).length&&!a)return!1;for(var s=c;s--;){var d=u[s];if(!(a?d in t:Nn.call(t,d)))return!1}var f=i.get(e);if(f&&i.get(t))return f==t;var h=!0;i.set(e,t),i.set(t,e);for(var l=a;++s<c;){var p=e[d=u[s]],v=t[d];if(r)var g=a?r(v,p,d,t,e,i):r(p,v,d,e,t,i);if(!(void 0===g?p===v||o(p,v,n,r,i):g)){h=!1;break}l||(l="constructor"==d)}if(h&&!l){var y=e.constructor,b=t.constructor;y==b||!("constructor"in e)||!("constructor"in t)||"function"==typeof y&&y instanceof y&&"function"==typeof b&&b instanceof b||(h=!1)}return i.delete(e),i.delete(t),h},kn=Object.prototype.hasOwnProperty;var In=function(e,t,n,r,o,i){var a=Re(e),u=Re(t),c=a?"[object Array]":Bt(e),s=u?"[object Array]":Bt(t),d="[object Object]"==(c="[object Arguments]"==c?"[object Object]":c),f="[object Object]"==(s="[object Arguments]"==s?"[object Object]":s),h=c==s;if(h&&Ae(e)){if(!Ae(t))return!1;a=!0,d=!1}if(h&&!d)return i||(i=new me),a||We(e)?mn(e,t,n,r,o,i):jn(e,t,c,n,r,o,i);if(!(1&n)){var l=d&&kn.call(e,"__wrapped__"),p=f&&kn.call(t,"__wrapped__");if(l||p){var v=l?e.value():e,g=p?t.value():t;return i||(i=new me),o(v,g,n,r,i)}}return!!h&&(i||(i=new me),On(e,t,n,r,o,i))};var Sn=function e(t,n,r,o,i){return t===n||(null==t||null==n||!ke(t)&&!ke(n)?t!=t&&n!=n:In(t,n,r,o,e,i))};var Mn=function(e,t,n,r){var o=n.length,i=o,a=!r;if(null==e)return!i;for(e=Object(e);o--;){var u=n[o];if(a&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<i;){var c=(u=n[o])[0],s=e[c],d=u[1];if(a&&u[2]){if(void 0===s&&!(c in e))return!1}else{var f=new me;if(r)var h=r(s,d,c,e,t,f);if(!(void 0===h?Sn(d,s,3,r,f):h))return!1}}return!0};var Cn=function(e){return e==e&&!L(e)};var Bn=function(e){for(var t=et(e),n=t.length;n--;){var r=t[n],o=e[r];t[n]=[r,o,Cn(o)]}return t};var Rn=function(e,t){return function(n){return null!=n&&(n[e]===t&&(void 0!==t||e in Object(n)))}};var Ln=function(e){var t=Bn(e);return 1==t.length&&t[0][2]?Rn(t[0][0],t[0][1]):function(n){return n===e||Mn(n,e,t)}};var An=function(e){return"symbol"==typeof e||ke(e)&&"[object Symbol]"==R(e)},Dn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Pn=/^\w*$/;var Tn=function(e,t){if(Re(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!An(e))||(Pn.test(e)||!Dn.test(e)||null!=t&&e in Object(t))};function Gn(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(Gn.Cache||ge),n}Gn.Cache=ge;var zn=Gn;var Fn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Un=/\\(\\)?/g,Vn=function(e){var t=zn(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Fn,(function(e,n,r,o){t.push(r?o.replace(Un,"$1"):n||e)})),t}));var Wn=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},Yn=j?j.prototype:void 0,$n=Yn?Yn.toString:void 0;var qn=function e(t){if("string"==typeof t)return t;if(Re(t))return Wn(t,e)+"";if(An(t))return $n?$n.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n};var Hn=function(e){return null==e?"":qn(e)};var Xn=function(e,t){return Re(e)?e:Tn(e,t)?[e]:Vn(Hn(e))};var Jn=function(e){if("string"==typeof e||An(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t};var Kn=function(e,t){for(var n=0,r=(t=Xn(t,e)).length;null!=e&&n<r;)e=e[Jn(t[n++])];return n&&n==r?e:void 0};var Qn=function(e,t,n){var r=null==e?void 0:Kn(e,t);return void 0===r?n:r};var Zn=function(e,t){return null!=e&&t in Object(e)};var er=function(e,t,n){for(var r=-1,o=(t=Xn(t,e)).length,i=!1;++r<o;){var a=Jn(t[r]);if(!(i=null!=e&&n(e,a)))break;e=e[a]}return i||++r!=o?i:!!(o=null==e?0:e.length)&&Te(o)&&Pe(a,o)&&(Re(e)||Be(e))};var tr=function(e,t){return null!=e&&er(e,t,Zn)};var nr=function(e,t){return Tn(e)&&Cn(t)?Rn(Jn(e),t):function(n){var r=Qn(n,e);return void 0===r&&r===t?tr(n,e):Sn(t,r,3)}};var rr=function(e){return function(t){return null==t?void 0:t[e]}};var or=function(e){return function(t){return Kn(t,e)}};var ir=function(e){return Tn(e)?rr(Jn(e)):or(e)};var ar=function(e){return"function"==typeof e?e:null==e?cn:"object"==typeof e?Re(e)?nr(e[0],e[1]):Ln(e):ir(e)};var ur=function(e,t){return(Re(e)?st:hn)(e,ar(t,3))},cr=Object.prototype.hasOwnProperty;var sr=function(e,t){return null!=e&&cr.call(e,t)};var dr=function(e,t){return null!=e&&er(e,t,sr)},fr=Object.prototype.hasOwnProperty;var hr=function(e){if(null==e)return!0;if(Ze(e)&&(Re(e)||"string"==typeof e||"function"==typeof e.splice||Ae(e)||We(e)||Be(e)))return!e.length;var t=Bt(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(He(e))return!Qe(e).length;for(var n in e)if(fr.call(e,n))return!1;return!0};var lr=function(e){return void 0===e};var pr=function(e,t){var n=-1,r=Ze(e)?Array(e.length):[];return un(e,(function(e,o,i){r[++n]=t(e,o,i)})),r};var vr=function(e,t){return(Re(e)?Wn:pr)(e,ar(t,3))};var gr=function(e,t,n,r){var o=-1,i=null==e?0:e.length;for(r&&i&&(n=e[++o]);++o<i;)n=t(n,e[o],o,e);return n};var yr=function(e,t,n,r,o){return o(e,(function(e,o,i){n=r?(r=!1,e):t(n,e,o,i)})),n};var br=function(e,t,n){var r=Re(e)?gr:yr,o=arguments.length<3;return r(e,ar(t,4),n,o,un)};var mr=function(e){return"string"==typeof e||!Re(e)&&ke(e)&&"[object String]"==R(e)},wr=rr("length"),Er=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var _r=function(e){return Er.test(e)},xr="[\\ud800-\\udfff]",jr="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",Nr="\\ud83c[\\udffb-\\udfff]",Or="[^\\ud800-\\udfff]",kr="(?:\\ud83c[\\udde6-\\uddff]){2}",Ir="[\\ud800-\\udbff][\\udc00-\\udfff]",Sr="(?:"+jr+"|"+Nr+")"+"?",Mr="[\\ufe0e\\ufe0f]?"+Sr+("(?:\\u200d(?:"+[Or,kr,Ir].join("|")+")[\\ufe0e\\ufe0f]?"+Sr+")*"),Cr="(?:"+[Or+jr+"?",jr,kr,Ir,xr].join("|")+")",Br=RegExp(Nr+"(?="+Nr+")|"+Cr+Mr,"g");var Rr=function(e){for(var t=Br.lastIndex=0;Br.test(e);)++t;return t};var Lr=function(e){return _r(e)?Rr(e):wr(e)};var Ar=function(e){if(null==e)return 0;if(Ze(e))return mr(e)?Lr(e):e.length;var t=Bt(e);return"[object Map]"==t||"[object Set]"==t?e.size:Qe(e).length};var Dr=function(e,t,n){var r=Re(e),o=r||Ae(e)||We(e);if(t=ar(t,4),null==n){var i=e&&e.constructor;n=o?r?new i:[]:L(e)&&D(i)?$t(gt(e)):{}}return(o?we:an)(e,(function(e,r,o){return t(n,e,r,o)})),n},Pr=j?j.isConcatSpreadable:void 0;var Tr=function(e){return Re(e)||Be(e)||!!(Pr&&e&&e[Pr])};var Gr=function e(t,n,r,o,i){var a=-1,u=t.length;for(r||(r=Tr),i||(i=[]);++a<u;){var c=t[a];n>0&&r(c)?n>1?e(c,n-1,r,o,i):vt(i,c):o||(i[i.length]=c)}return i};var zr=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)},Fr=Math.max;var Ur=function(e,t,n){return t=Fr(void 0===t?e.length-1:t,0),function(){for(var r=arguments,o=-1,i=Fr(r.length-t,0),a=Array(i);++o<i;)a[o]=r[t+o];o=-1;for(var u=Array(t+1);++o<t;)u[o]=r[o];return u[t]=n(a),zr(e,this,u)}},Vr=Ee?function(e,t){return Ee(e,"toString",{configurable:!0,enumerable:!1,value:rn(t),writable:!0})}:cn,Wr=Date.now;var Yr=function(e){var t=0,n=0;return function(){var r=Wr(),o=16-(r-n);if(n=r,o>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}(Vr);var $r=function(e,t){return Yr(Ur(e,t,cn),e+"")};var qr=function(e,t,n,r){for(var o=e.length,i=n+(r?1:-1);r?i--:++i<o;)if(t(e[i],i,e))return i;return-1};var Hr=function(e){return e!=e};var Xr=function(e,t,n){for(var r=n-1,o=e.length;++r<o;)if(e[r]===t)return r;return-1};var Jr=function(e,t,n){return t==t?Xr(e,t,n):qr(e,Hr,n)};var Kr=function(e,t){return!!(null==e?0:e.length)&&Jr(e,t,0)>-1};var Qr=function(e,t,n){for(var r=-1,o=null==e?0:e.length;++r<o;)if(n(t,e[r]))return!0;return!1};var Zr=function(){},eo=jt&&1/En(new jt([,-0]))[1]==1/0?function(e){return new jt(e)}:Zr;var to=function(e,t,n){var r=-1,o=Kr,i=e.length,a=!0,u=[],c=u;if(n)a=!1,o=Qr;else if(i>=200){var s=t?null:eo(e);if(s)return En(s);a=!1,o=bn,c=new gn}else c=t?[]:u;e:for(;++r<i;){var d=e[r],f=t?t(d):d;if(d=n||0!==d?d:0,a&&f==f){for(var h=c.length;h--;)if(c[h]===f)continue e;t&&c.push(f),u.push(d)}else o(c,f,n)||(c!==u&&c.push(f),u.push(d))}return u};var no=function(e){return ke(e)&&Ze(e)},ro=$r((function(e){return to(Gr(e,1,no,!0))}));var oo=function(e,t){return Wn(t,(function(t){return e[t]}))};var io,ao=function(e){return null==e?[]:oo(e,et(e))};try{io={clone:nn,constant:rn,each:fn,filter:ur,has:dr,isArray:Re,isEmpty:hr,isFunction:D,isUndefined:lr,keys:et,map:vr,reduce:br,size:Ar,transform:Dr,union:ro,values:ao}}catch(e){}io||(io=window._);var uo=io,co=so;function so(e){this._isDirected=!uo.has(e,"directed")||e.directed,this._isMultigraph=!!uo.has(e,"multigraph")&&e.multigraph,this._isCompound=!!uo.has(e,"compound")&&e.compound,this._label=void 0,this._defaultNodeLabelFn=uo.constant(void 0),this._defaultEdgeLabelFn=uo.constant(void 0),this._nodes={},this._isCompound&&(this._parent={},this._children={},this._children["\0"]={}),this._in={},this._preds={},this._out={},this._sucs={},this._edgeObjs={},this._edgeLabels={}}function fo(e,t){e[t]?e[t]++:e[t]=1}function ho(e,t){--e[t]||delete e[t]}function lo(e,t,n,r){var o=""+t,i=""+n;if(!e&&o>i){var a=o;o=i,i=a}return o+""+i+""+(uo.isUndefined(r)?"\0":r)}function po(e,t,n,r){var o=""+t,i=""+n;if(!e&&o>i){var a=o;o=i,i=a}var u={v:o,w:i};return r&&(u.name=r),u}function vo(e,t){return lo(e,t.v,t.w,t.name)}so.prototype._nodeCount=0,so.prototype._edgeCount=0,so.prototype.isDirected=function(){return this._isDirected},so.prototype.isMultigraph=function(){return this._isMultigraph},so.prototype.isCompound=function(){return this._isCompound},so.prototype.setGraph=function(e){return this._label=e,this},so.prototype.graph=function(){return this._label},so.prototype.setDefaultNodeLabel=function(e){return uo.isFunction(e)||(e=uo.constant(e)),this._defaultNodeLabelFn=e,this},so.prototype.nodeCount=function(){return this._nodeCount},so.prototype.nodes=function(){return uo.keys(this._nodes)},so.prototype.sources=function(){var e=this;return uo.filter(this.nodes(),(function(t){return uo.isEmpty(e._in[t])}))},so.prototype.sinks=function(){var e=this;return uo.filter(this.nodes(),(function(t){return uo.isEmpty(e._out[t])}))},so.prototype.setNodes=function(e,t){var n=arguments,r=this;return uo.each(e,(function(e){n.length>1?r.setNode(e,t):r.setNode(e)})),this},so.prototype.setNode=function(e,t){return uo.has(this._nodes,e)?(arguments.length>1&&(this._nodes[e]=t),this):(this._nodes[e]=arguments.length>1?t:this._defaultNodeLabelFn(e),this._isCompound&&(this._parent[e]="\0",this._children[e]={},this._children["\0"][e]=!0),this._in[e]={},this._preds[e]={},this._out[e]={},this._sucs[e]={},++this._nodeCount,this)},so.prototype.node=function(e){return this._nodes[e]},so.prototype.hasNode=function(e){return uo.has(this._nodes,e)},so.prototype.removeNode=function(e){var t=this;if(uo.has(this._nodes,e)){var n=function(e){t.removeEdge(t._edgeObjs[e])};delete this._nodes[e],this._isCompound&&(this._removeFromParentsChildList(e),delete this._parent[e],uo.each(this.children(e),(function(e){t.setParent(e)})),delete this._children[e]),uo.each(uo.keys(this._in[e]),n),delete this._in[e],delete this._preds[e],uo.each(uo.keys(this._out[e]),n),delete this._out[e],delete this._sucs[e],--this._nodeCount}return this},so.prototype.setParent=function(e,t){if(!this._isCompound)throw new Error("Cannot set parent in a non-compound graph");if(uo.isUndefined(t))t="\0";else{for(var n=t+="";!uo.isUndefined(n);n=this.parent(n))if(n===e)throw new Error("Setting "+t+" as parent of "+e+" would create a cycle");this.setNode(t)}return this.setNode(e),this._removeFromParentsChildList(e),this._parent[e]=t,this._children[t][e]=!0,this},so.prototype._removeFromParentsChildList=function(e){delete this._children[this._parent[e]][e]},so.prototype.parent=function(e){if(this._isCompound){var t=this._parent[e];if("\0"!==t)return t}},so.prototype.children=function(e){if(uo.isUndefined(e)&&(e="\0"),this._isCompound){var t=this._children[e];if(t)return uo.keys(t)}else{if("\0"===e)return this.nodes();if(this.hasNode(e))return[]}},so.prototype.predecessors=function(e){var t=this._preds[e];if(t)return uo.keys(t)},so.prototype.successors=function(e){var t=this._sucs[e];if(t)return uo.keys(t)},so.prototype.neighbors=function(e){var t=this.predecessors(e);if(t)return uo.union(t,this.successors(e))},so.prototype.isLeaf=function(e){return 0===(this.isDirected()?this.successors(e):this.neighbors(e)).length},so.prototype.filterNodes=function(e){var t=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});t.setGraph(this.graph());var n=this;uo.each(this._nodes,(function(n,r){e(r)&&t.setNode(r,n)})),uo.each(this._edgeObjs,(function(e){t.hasNode(e.v)&&t.hasNode(e.w)&&t.setEdge(e,n.edge(e))}));var r={};return this._isCompound&&uo.each(t.nodes(),(function(e){t.setParent(e,function e(o){var i=n.parent(o);return void 0===i||t.hasNode(i)?(r[o]=i,i):i in r?r[i]:e(i)}(e))})),t},so.prototype.setDefaultEdgeLabel=function(e){return uo.isFunction(e)||(e=uo.constant(e)),this._defaultEdgeLabelFn=e,this},so.prototype.edgeCount=function(){return this._edgeCount},so.prototype.edges=function(){return uo.values(this._edgeObjs)},so.prototype.setPath=function(e,t){var n=this,r=arguments;return uo.reduce(e,(function(e,o){return r.length>1?n.setEdge(e,o,t):n.setEdge(e,o),o})),this},so.prototype.setEdge=function(){var e,t,n,r,o=!1,i=arguments[0];"object"==typeof i&&null!==i&&"v"in i?(e=i.v,t=i.w,n=i.name,2===arguments.length&&(r=arguments[1],o=!0)):(e=i,t=arguments[1],n=arguments[3],arguments.length>2&&(r=arguments[2],o=!0)),e=""+e,t=""+t,uo.isUndefined(n)||(n=""+n);var a=lo(this._isDirected,e,t,n);if(uo.has(this._edgeLabels,a))return o&&(this._edgeLabels[a]=r),this;if(!uo.isUndefined(n)&&!this._isMultigraph)throw new Error("Cannot set a named edge when isMultigraph = false");this.setNode(e),this.setNode(t),this._edgeLabels[a]=o?r:this._defaultEdgeLabelFn(e,t,n);var u=po(this._isDirected,e,t,n);return e=u.v,t=u.w,Object.freeze(u),this._edgeObjs[a]=u,fo(this._preds[t],e),fo(this._sucs[e],t),this._in[t][a]=u,this._out[e][a]=u,this._edgeCount++,this},so.prototype.edge=function(e,t,n){var r=1===arguments.length?vo(this._isDirected,arguments[0]):lo(this._isDirected,e,t,n);return this._edgeLabels[r]},so.prototype.hasEdge=function(e,t,n){var r=1===arguments.length?vo(this._isDirected,arguments[0]):lo(this._isDirected,e,t,n);return uo.has(this._edgeLabels,r)},so.prototype.removeEdge=function(e,t,n){var r=1===arguments.length?vo(this._isDirected,arguments[0]):lo(this._isDirected,e,t,n),o=this._edgeObjs[r];return o&&(e=o.v,t=o.w,delete this._edgeLabels[r],delete this._edgeObjs[r],ho(this._preds[t],e),ho(this._sucs[e],t),delete this._in[t][r],delete this._out[e][r],this._edgeCount--),this},so.prototype.inEdges=function(e,t){var n=this._in[e];if(n){var r=uo.values(n);return t?uo.filter(r,(function(e){return e.v===t})):r}},so.prototype.outEdges=function(e,t){var n=this._out[e];if(n){var r=uo.values(n);return t?uo.filter(r,(function(e){return e.w===t})):r}},so.prototype.nodeEdges=function(e,t){var n=this.inEdges(e,t);if(n)return n.concat(this.outEdges(e,t))};var go={Graph:co,version:"2.1.8"},yo={write:function(e){var t={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:bo(e),edges:mo(e)};uo.isUndefined(e.graph())||(t.value=uo.clone(e.graph()));return t},read:function(e){var t=new co(e.options).setGraph(e.value);return uo.each(e.nodes,(function(e){t.setNode(e.v,e.value),e.parent&&t.setParent(e.v,e.parent)})),uo.each(e.edges,(function(e){t.setEdge({v:e.v,w:e.w,name:e.name},e.value)})),t}};function bo(e){return uo.map(e.nodes(),(function(t){var n=e.node(t),r=e.parent(t),o={v:t};return uo.isUndefined(n)||(o.value=n),uo.isUndefined(r)||(o.parent=r),o}))}function mo(e){return uo.map(e.edges(),(function(t){var n=e.edge(t),r={v:t.v,w:t.w};return uo.isUndefined(t.name)||(r.name=t.name),uo.isUndefined(n)||(r.value=n),r}))}var wo=function(e){var t,n={},r=[];function o(r){uo.has(n,r)||(n[r]=!0,t.push(r),uo.each(e.successors(r),o),uo.each(e.predecessors(r),o))}return uo.each(e.nodes(),(function(e){t=[],o(e),t.length&&r.push(t)})),r};var Eo=_o;function _o(){this._arr=[],this._keyIndices={}}_o.prototype.size=function(){return this._arr.length},_o.prototype.keys=function(){return this._arr.map((function(e){return e.key}))},_o.prototype.has=function(e){return uo.has(this._keyIndices,e)},_o.prototype.priority=function(e){var t=this._keyIndices[e];if(void 0!==t)return this._arr[t].priority},_o.prototype.min=function(){if(0===this.size())throw new Error("Queue underflow");return this._arr[0].key},_o.prototype.add=function(e,t){var n=this._keyIndices;if(e=String(e),!uo.has(n,e)){var r=this._arr,o=r.length;return n[e]=o,r.push({key:e,priority:t}),this._decrease(o),!0}return!1},_o.prototype.removeMin=function(){this._swap(0,this._arr.length-1);var e=this._arr.pop();return delete this._keyIndices[e.key],this._heapify(0),e.key},_o.prototype.decrease=function(e,t){var n=this._keyIndices[e];if(t>this._arr[n].priority)throw new Error("New priority is greater than current priority. Key: "+e+" Old: "+this._arr[n].priority+" New: "+t);this._arr[n].priority=t,this._decrease(n)},_o.prototype._heapify=function(e){var t=this._arr,n=2*e,r=n+1,o=e;n<t.length&&(o=t[n].priority<t[o].priority?n:o,r<t.length&&(o=t[r].priority<t[o].priority?r:o),o!==e&&(this._swap(e,o),this._heapify(o)))},_o.prototype._decrease=function(e){for(var t,n=this._arr,r=n[e].priority;0!==e&&!(n[t=e>>1].priority<r);)this._swap(e,t),e=t},_o.prototype._swap=function(e,t){var n=this._arr,r=this._keyIndices,o=n[e],i=n[t];n[e]=i,n[t]=o,r[i.key]=e,r[o.key]=t};var xo=function(e,t,n,r){return function(e,t,n,r){var o,i,a={},u=new Eo,c=function(e){var t=e.v!==o?e.v:e.w,r=a[t],c=n(e),s=i.distance+c;if(c<0)throw new Error("dijkstra does not allow negative edge weights. Bad edge: "+e+" Weight: "+c);s<r.distance&&(r.distance=s,r.predecessor=o,u.decrease(t,s))};e.nodes().forEach((function(e){var n=e===t?0:Number.POSITIVE_INFINITY;a[e]={distance:n},u.add(e,n)}));for(;u.size()>0&&(o=u.removeMin(),(i=a[o]).distance!==Number.POSITIVE_INFINITY);)r(o).forEach(c);return a}(e,String(t),n||jo,r||function(t){return e.outEdges(t)})},jo=uo.constant(1);var No=function(e,t,n){return uo.transform(e.nodes(),(function(r,o){r[o]=xo(e,o,t,n)}),{})};var Oo=function(e){var t=0,n=[],r={},o=[];return e.nodes().forEach((function(i){uo.has(r,i)||function i(a){var u=r[a]={onStack:!0,lowlink:t,index:t++};if(n.push(a),e.successors(a).forEach((function(e){uo.has(r,e)?r[e].onStack&&(u.lowlink=Math.min(u.lowlink,r[e].index)):(i(e),u.lowlink=Math.min(u.lowlink,r[e].lowlink))})),u.lowlink===u.index){var c,s=[];do{c=n.pop(),r[c].onStack=!1,s.push(c)}while(a!==c);o.push(s)}}(i)})),o};var ko=function(e){return uo.filter(Oo(e),(function(t){return t.length>1||1===t.length&&e.hasEdge(t[0],t[0])}))};var Io=function(e,t,n){return function(e,t,n){var r={},o=e.nodes();return o.forEach((function(e){r[e]={},r[e][e]={distance:0},o.forEach((function(t){e!==t&&(r[e][t]={distance:Number.POSITIVE_INFINITY})})),n(e).forEach((function(n){var o=n.v===e?n.w:n.v,i=t(n);r[e][o]={distance:i,predecessor:e}}))})),o.forEach((function(e){var t=r[e];o.forEach((function(n){var i=r[n];o.forEach((function(n){var r=i[e],o=t[n],a=i[n],u=r.distance+o.distance;u<a.distance&&(a.distance=u,a.predecessor=o.predecessor)}))}))})),r}(e,t||So,n||function(t){return e.outEdges(t)})},So=uo.constant(1);var Mo=Co;function Co(e){var t={},n={},r=[];if(uo.each(e.sinks(),(function o(i){if(uo.has(n,i))throw new Bo;uo.has(t,i)||(n[i]=!0,t[i]=!0,uo.each(e.predecessors(i),o),delete n[i],r.push(i))})),uo.size(t)!==e.nodeCount())throw new Bo;return r}function Bo(){}Co.CycleException=Bo,Bo.prototype=new Error;var Ro=function(e,t,n){uo.isArray(t)||(t=[t]);var r=(e.isDirected()?e.successors:e.neighbors).bind(e),o=[],i={};return uo.each(t,(function(t){if(!e.hasNode(t))throw new Error("Graph does not have node: "+t);!function e(t,n,r,o,i,a){uo.has(o,n)||(o[n]=!0,r||a.push(n),uo.each(i(n),(function(n){e(t,n,r,o,i,a)})),r&&a.push(n))}(e,t,"post"===n,i,r,o)})),o};var Lo,Ao={Graph:go.Graph,json:yo,alg:{components:wo,dijkstra:xo,dijkstraAll:No,findCycles:ko,floydWarshall:Io,isAcyclic:function(e){try{Mo(e)}catch(e){if(e instanceof Mo.CycleException)return!1;throw e}return!0},postorder:function(e,t){return Ro(e,t,"post")},preorder:function(e,t){return Ro(e,t,"pre")},prim:function(e,t){var n,r=new co,o={},i=new Eo;function a(e){var r=e.v===n?e.w:e.v,a=i.priority(r);if(void 0!==a){var u=t(e);u<a&&(o[r]=n,i.decrease(r,u))}}if(0===e.nodeCount())return r;uo.each(e.nodes(),(function(e){i.add(e,Number.POSITIVE_INFINITY),r.setNode(e)})),i.decrease(e.nodes()[0],0);var u=!1;for(;i.size()>0;){if(n=i.removeMin(),uo.has(o,n))r.setEdge(n,o[n]);else{if(u)throw new Error("Input graph is not connected: "+e);u=!0}e.nodeEdges(n).forEach(a)}return r},tarjan:Oo,topsort:Mo},version:go.version};try{Lo=Ao}catch(e){}Lo||(Lo=window.graphlib);var Do=Lo;var Po=function(e){return tn(e,5)};var To=function(e,t,n){if(!L(n))return!1;var r=typeof t;return!!("number"==r?Ze(n)&&Pe(t,n.length):"string"==r&&t in n)&&c(n[t],e)},Go=Object.prototype,zo=Go.hasOwnProperty,Fo=$r((function(e,t){e=Object(e);var n=-1,r=t.length,o=r>2?t[2]:void 0;for(o&&To(t[0],t[1],o)&&(r=1);++n<r;)for(var i=t[n],a=it(i),u=-1,s=a.length;++u<s;){var d=a[u],f=e[d];(void 0===f||c(f,Go[d])&&!zo.call(e,d))&&(e[d]=i[d])}return e}));var Uo=function(e){return function(t,n,r){var o=Object(t);if(!Ze(t)){var i=ar(n,3);t=et(t),n=function(e){return i(o[e],e,o)}}var a=e(t,n,r);return a>-1?o[i?t[a]:a]:void 0}},Vo=/^\s+|\s+$/g,Wo=/^[-+]0x[0-9a-f]+$/i,Yo=/^0b[01]+$/i,$o=/^0o[0-7]+$/i,qo=parseInt;var Ho=function(e){if("number"==typeof e)return e;if(An(e))return NaN;if(L(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=L(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(Vo,"");var n=Yo.test(e);return n||$o.test(e)?qo(e.slice(2),n?2:8):Wo.test(e)?NaN:+e};var Xo=function(e){return e?(e=Ho(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};var Jo=function(e){var t=Xo(e),n=t%1;return t==t?n?t-n:t:0},Ko=Math.max;var Qo=Uo((function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var o=null==n?0:Jo(n);return o<0&&(o=Ko(r+o,0)),qr(e,ar(t,3),o)}));var Zo=function(e){return(null==e?0:e.length)?Gr(e,1):[]};var ei=function(e,t){return null==e?e:on(e,sn(t),it)};var ti=function(e){var t=null==e?0:e.length;return t?e[t-1]:void 0};var ni=function(e,t){var n={};return t=ar(t,3),an(e,(function(e,r,o){_e(n,r,t(e,r,o))})),n};var ri=function(e,t,n){for(var r=-1,o=e.length;++r<o;){var i=e[r],a=t(i);if(null!=a&&(void 0===u?a==a&&!An(a):n(a,u)))var u=a,c=i}return c};var oi=function(e,t){return e>t};var ii=function(e){return e&&e.length?ri(e,cn,oi):void 0};var ai=function(e,t,n){(void 0!==n&&!c(e[t],n)||void 0===n&&!(t in e))&&_e(e,t,n)},ui=Function.prototype,ci=Object.prototype,si=ui.toString,di=ci.hasOwnProperty,fi=si.call(Object);var hi=function(e){if(!ke(e)||"[object Object]"!=R(e))return!1;var t=gt(e);if(null===t)return!0;var n=di.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&si.call(n)==fi};var li=function(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]};var pi=function(e){return Ne(e,it(e))};var vi=function(e,t,n,r,o,i,a){var u=li(e,n),c=li(t,n),s=a.get(c);if(s)ai(e,n,s);else{var d=i?i(u,c,n+"",e,t,a):void 0,f=void 0===d;if(f){var h=Re(c),l=!h&&Ae(c),p=!h&&!l&&We(c);d=c,h||l||p?Re(u)?d=u:no(u)?d=ct(u):l?(f=!1,d=ut(c,!0)):p?(f=!1,d=Vt(c,!0)):d=[]:hi(c)||Be(c)?(d=u,Be(u)?d=pi(u):L(u)&&!D(u)||(d=qt(c))):f=!1}f&&(a.set(c,d),o(d,c,r,i,a),a.delete(c)),ai(e,n,d)}};var gi=function e(t,n,r,o,i){t!==n&&on(n,(function(a,u){if(i||(i=new me),L(a))vi(t,n,u,r,e,o,i);else{var c=o?o(li(t,u),a,u+"",t,n,i):void 0;void 0===c&&(c=a),ai(t,u,c)}}),it)};var yi=function(e){return $r((function(t,n){var r=-1,o=n.length,i=o>1?n[o-1]:void 0,a=o>2?n[2]:void 0;for(i=e.length>3&&"function"==typeof i?(o--,i):void 0,a&&To(n[0],n[1],a)&&(i=o<3?void 0:i,o=1),t=Object(t);++r<o;){var u=n[r];u&&e(t,u,r,i)}return t}))}((function(e,t,n){gi(e,t,n)}));var bi=function(e,t){return e<t};var mi=function(e){return e&&e.length?ri(e,cn,bi):void 0};var wi=function(e,t){return e&&e.length?ri(e,ar(t,2),bi):void 0},Ei=function(){return x.Date.now()};var _i=function(e,t,n,r){if(!L(e))return e;for(var o=-1,i=(t=Xn(t,e)).length,a=i-1,u=e;null!=u&&++o<i;){var c=Jn(t[o]),s=n;if(o!=a){var d=u[c];void 0===(s=r?r(d,c,u):void 0)&&(s=L(d)?d:Pe(t[o+1])?[]:{})}je(u,c,s),u=u[c]}return e};var xi=function(e,t,n){for(var r=-1,o=t.length,i={};++r<o;){var a=t[r],u=Kn(e,a);n(u,a)&&_i(i,Xn(a,e),u)}return i};var ji=function(e,t){return xi(e,t,(function(t,n){return tr(e,n)}))};var Ni=function(e){return Yr(Ur(e,void 0,Zo),e+"")}((function(e,t){return null==e?{}:ji(e,t)})),Oi=Math.ceil,ki=Math.max;var Ii=function(e,t,n,r){for(var o=-1,i=ki(Oi((t-e)/(n||1)),0),a=Array(i);i--;)a[r?i:++o]=e,e+=n;return a};var Si=function(e){return function(t,n,r){return r&&"number"!=typeof r&&To(t,n,r)&&(n=r=void 0),t=Xo(t),void 0===n?(n=t,t=0):n=Xo(n),r=void 0===r?t<n?1:-1:Xo(r),Ii(t,n,r,e)}}();var Mi=function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e};var Ci=function(e,t){if(e!==t){var n=void 0!==e,r=null===e,o=e==e,i=An(e),a=void 0!==t,u=null===t,c=t==t,s=An(t);if(!u&&!s&&!i&&e>t||i&&a&&c&&!u&&!s||r&&a&&c||!n&&c||!o)return 1;if(!r&&!i&&!s&&e<t||s&&n&&o&&!r&&!i||u&&n&&o||!a&&o||!c)return-1}return 0};var Bi=function(e,t,n){for(var r=-1,o=e.criteria,i=t.criteria,a=o.length,u=n.length;++r<a;){var c=Ci(o[r],i[r]);if(c)return r>=u?c:c*("desc"==n[r]?-1:1)}return e.index-t.index};var Ri=function(e,t,n){var r=-1;t=Wn(t.length?t:[cn],Fe(ar));var o=pr(e,(function(e,n,o){return{criteria:Wn(t,(function(t){return t(e)})),index:++r,value:e}}));return Mi(o,(function(e,t){return Bi(e,t,n)}))},Li=$r((function(e,t){if(null==e)return[];var n=t.length;return n>1&&To(e,t[0],t[1])?t=[]:n>2&&To(t[0],t[1],t[2])&&(t=[t[0]]),Ri(e,Gr(t,1),[])})),Ai=0;var Di=function(e){var t=++Ai;return Hn(e)+t};var Pi=function(e,t,n){for(var r=-1,o=e.length,i=t.length,a={};++r<o;){var u=r<i?t[r]:void 0;n(a,e[r],u)}return a};var Ti,Gi=function(e,t){return Pi(e||[],t||[],je)};try{Ti={cloneDeep:Po,constant:rn,defaults:Fo,each:fn,filter:ur,find:Qo,flatten:Zo,forEach:dn,forIn:ei,has:dr,isUndefined:lr,last:ti,map:vr,mapValues:ni,max:ii,merge:yi,min:mi,minBy:wi,now:Ei,pick:Ni,range:Si,reduce:br,sortBy:Li,uniqueId:Di,values:ao,zipObject:Gi}}catch(e){}Ti||(Ti=window._);var zi=Ti,Fi=Ui;function Ui(){var e={};e._next=e._prev=e,this._sentinel=e}function Vi(e){e._prev._next=e._next,e._next._prev=e._prev,delete e._next,delete e._prev}function Wi(e,t){if("_next"!==e&&"_prev"!==e)return t}Ui.prototype.dequeue=function(){var e=this._sentinel,t=e._prev;if(t!==e)return Vi(t),t},Ui.prototype.enqueue=function(e){var t=this._sentinel;e._prev&&e._next&&Vi(e),e._next=t._next,t._next._prev=e,t._next=e,e._prev=t},Ui.prototype.toString=function(){for(var e=[],t=this._sentinel,n=t._prev;n!==t;)e.push(JSON.stringify(n,Wi)),n=n._prev;return"["+e.join(", ")+"]"};var Yi=Do.Graph,$i=function(e,t){if(e.nodeCount()<=1)return[];var n=function(e,t){var n=new Yi,r=0,o=0;zi.forEach(e.nodes(),(function(e){n.setNode(e,{v:e,in:0,out:0})})),zi.forEach(e.edges(),(function(e){var i=n.edge(e.v,e.w)||0,a=t(e),u=i+a;n.setEdge(e.v,e.w,u),o=Math.max(o,n.node(e.v).out+=a),r=Math.max(r,n.node(e.w).in+=a)}));var i=zi.range(o+r+3).map((function(){return new Fi})),a=r+1;return zi.forEach(n.nodes(),(function(e){Xi(i,a,n.node(e))})),{graph:n,buckets:i,zeroIdx:a}}(e,t||qi),r=function(e,t,n){var r,o=[],i=t[t.length-1],a=t[0];for(;e.nodeCount();){for(;r=a.dequeue();)Hi(e,t,n,r);for(;r=i.dequeue();)Hi(e,t,n,r);if(e.nodeCount())for(var u=t.length-2;u>0;--u)if(r=t[u].dequeue()){o=o.concat(Hi(e,t,n,r,!0));break}}return o}(n.graph,n.buckets,n.zeroIdx);return zi.flatten(zi.map(r,(function(t){return e.outEdges(t.v,t.w)})),!0)},qi=zi.constant(1);function Hi(e,t,n,r,o){var i=o?[]:void 0;return zi.forEach(e.inEdges(r.v),(function(r){var a=e.edge(r),u=e.node(r.v);o&&i.push({v:r.v,w:r.w}),u.out-=a,Xi(t,n,u)})),zi.forEach(e.outEdges(r.v),(function(r){var o=e.edge(r),i=r.w,a=e.node(i);a.in-=o,Xi(t,n,a)})),e.removeNode(r.v),i}function Xi(e,t,n){n.out?n.in?e[n.out-n.in+t].enqueue(n):e[e.length-1].enqueue(n):e[0].enqueue(n)}var Ji={run:function(e){var t="greedy"===e.graph().acyclicer?$i(e,function(e){return function(t){return e.edge(t).weight}}(e)):function(e){var t=[],n={},r={};function o(i){zi.has(r,i)||(r[i]=!0,n[i]=!0,zi.forEach(e.outEdges(i),(function(e){zi.has(n,e.w)?t.push(e):o(e.w)})),delete n[i])}return zi.forEach(e.nodes(),o),t}(e);zi.forEach(t,(function(t){var n=e.edge(t);e.removeEdge(t),n.forwardName=t.name,n.reversed=!0,e.setEdge(t.w,t.v,n,zi.uniqueId("rev"))}))},undo:function(e){zi.forEach(e.edges(),(function(t){var n=e.edge(t);if(n.reversed){e.removeEdge(t);var r=n.forwardName;delete n.reversed,delete n.forwardName,e.setEdge(t.w,t.v,n,r)}}))}};var Ki=Do.Graph,Qi={addDummyNode:Zi,simplify:function(e){var t=(new Ki).setGraph(e.graph());return zi.forEach(e.nodes(),(function(n){t.setNode(n,e.node(n))})),zi.forEach(e.edges(),(function(n){var r=t.edge(n.v,n.w)||{weight:0,minlen:1},o=e.edge(n);t.setEdge(n.v,n.w,{weight:r.weight+o.weight,minlen:Math.max(r.minlen,o.minlen)})})),t},asNonCompoundGraph:function(e){var t=new Ki({multigraph:e.isMultigraph()}).setGraph(e.graph());return zi.forEach(e.nodes(),(function(n){e.children(n).length||t.setNode(n,e.node(n))})),zi.forEach(e.edges(),(function(n){t.setEdge(n,e.edge(n))})),t},successorWeights:function(e){var t=zi.map(e.nodes(),(function(t){var n={};return zi.forEach(e.outEdges(t),(function(t){n[t.w]=(n[t.w]||0)+e.edge(t).weight})),n}));return zi.zipObject(e.nodes(),t)},predecessorWeights:function(e){var t=zi.map(e.nodes(),(function(t){var n={};return zi.forEach(e.inEdges(t),(function(t){n[t.v]=(n[t.v]||0)+e.edge(t).weight})),n}));return zi.zipObject(e.nodes(),t)},intersectRect:function(e,t){var n,r,o=e.x,i=e.y,a=t.x-o,u=t.y-i,c=e.width/2,s=e.height/2;if(!a&&!u)throw new Error("Not possible to find intersection inside of the rectangle");Math.abs(u)*c>Math.abs(a)*s?(u<0&&(s=-s),n=s*a/u,r=s):(a<0&&(c=-c),n=c,r=c*u/a);return{x:o+n,y:i+r}},buildLayerMatrix:function(e){var t=zi.map(zi.range(ea(e)+1),(function(){return[]}));return zi.forEach(e.nodes(),(function(n){var r=e.node(n),o=r.rank;zi.isUndefined(o)||(t[o][r.order]=n)})),t},normalizeRanks:function(e){var t=zi.min(zi.map(e.nodes(),(function(t){return e.node(t).rank})));zi.forEach(e.nodes(),(function(n){var r=e.node(n);zi.has(r,"rank")&&(r.rank-=t)}))},removeEmptyRanks:function(e){var t=zi.min(zi.map(e.nodes(),(function(t){return e.node(t).rank}))),n=[];zi.forEach(e.nodes(),(function(r){var o=e.node(r).rank-t;n[o]||(n[o]=[]),n[o].push(r)}));var r=0,o=e.graph().nodeRankFactor;zi.forEach(n,(function(t,n){zi.isUndefined(t)&&n%o!=0?--r:r&&zi.forEach(t,(function(t){e.node(t).rank+=r}))}))},addBorderNode:function(e,t,n,r){var o={width:0,height:0};arguments.length>=4&&(o.rank=n,o.order=r);return Zi(e,"border",o,t)},maxRank:ea,partition:function(e,t){var n={lhs:[],rhs:[]};return zi.forEach(e,(function(e){t(e)?n.lhs.push(e):n.rhs.push(e)})),n},time:function(e,t){var n=zi.now();try{return t()}finally{console.log(e+" time: "+(zi.now()-n)+"ms")}},notime:function(e,t){return t()}};function Zi(e,t,n,r){var o;do{o=zi.uniqueId(r)}while(e.hasNode(o));return n.dummy=t,e.setNode(o,n),o}function ea(e){return zi.max(zi.map(e.nodes(),(function(t){var n=e.node(t).rank;if(!zi.isUndefined(n))return n})))}var ta={run:function(e){e.graph().dummyChains=[],zi.forEach(e.edges(),(function(t){!function(e,t){var n,r,o,i=t.v,a=e.node(i).rank,u=t.w,c=e.node(u).rank,s=t.name,d=e.edge(t),f=d.labelRank;if(c===a+1)return;for(e.removeEdge(t),o=0,++a;a<c;++o,++a)d.points=[],r={width:0,height:0,edgeLabel:d,edgeObj:t,rank:a},n=Qi.addDummyNode(e,"edge",r,"_d"),a===f&&(r.width=d.width,r.height=d.height,r.dummy="edge-label",r.labelpos=d.labelpos),e.setEdge(i,n,{weight:d.weight},s),0===o&&e.graph().dummyChains.push(n),i=n;e.setEdge(i,u,{weight:d.weight},s)}(e,t)}))},undo:function(e){zi.forEach(e.graph().dummyChains,(function(t){var n,r=e.node(t),o=r.edgeLabel;for(e.setEdge(r.edgeObj,o);r.dummy;)n=e.successors(t)[0],e.removeNode(t),o.points.push({x:r.x,y:r.y}),"edge-label"===r.dummy&&(o.x=r.x,o.y=r.y,o.width=r.width,o.height=r.height),t=n,r=e.node(t)}))}};var na=function(e){var t={};zi.forEach(e.sources(),(function n(r){var o=e.node(r);if(zi.has(t,r))return o.rank;t[r]=!0;var i=zi.min(zi.map(e.outEdges(r),(function(t){return n(t.w)-e.edge(t).minlen})));return i!==Number.POSITIVE_INFINITY&&null!=i||(i=0),o.rank=i}))},ra=function(e,t){return e.node(t.w).rank-e.node(t.v).rank-e.edge(t).minlen};var oa=Do.Graph,ia=ra,aa=function(e){var t,n,r=new oa({directed:!1}),o=e.nodes()[0],i=e.nodeCount();r.setNode(o,{});for(;ua(r,e)<i;)t=ca(r,e),n=r.hasNode(t.v)?ia(e,t):-ia(e,t),sa(r,e,n);return r};function ua(e,t){return zi.forEach(e.nodes(),(function n(r){zi.forEach(t.nodeEdges(r),(function(o){var i=o.v,a=r===i?o.w:i;e.hasNode(a)||ia(t,o)||(e.setNode(a,{}),e.setEdge(r,a,{}),n(a))}))})),e.nodeCount()}function ca(e,t){return zi.minBy(t.edges(),(function(n){if(e.hasNode(n.v)!==e.hasNode(n.w))return ia(t,n)}))}function sa(e,t,n){zi.forEach(e.nodes(),(function(e){t.node(e).rank+=n}))}var da=ra,fa=na,ha=Do.alg.preorder,la=Do.alg.postorder,pa=Qi.simplify,va=ga;function ga(e){e=pa(e),fa(e);var t,n=aa(e);for(ma(n),ya(n,e);t=Ea(n);)xa(n,e,t,_a(n,e,t))}function ya(e,t){var n=la(e,e.nodes());n=n.slice(0,n.length-1),zi.forEach(n,(function(n){!function(e,t,n){var r=e.node(n).parent;e.edge(n,r).cutvalue=ba(e,t,n)}(e,t,n)}))}function ba(e,t,n){var r=e.node(n).parent,o=!0,i=t.edge(n,r),a=0;return i||(o=!1,i=t.edge(r,n)),a=i.weight,zi.forEach(t.nodeEdges(n),(function(i){var u,c,s=i.v===n,d=s?i.w:i.v;if(d!==r){var f=s===o,h=t.edge(i).weight;if(a+=f?h:-h,u=n,c=d,e.hasEdge(u,c)){var l=e.edge(n,d).cutvalue;a+=f?-l:l}}})),a}function ma(e,t){arguments.length<2&&(t=e.nodes()[0]),wa(e,{},1,t)}function wa(e,t,n,r,o){var i=n,a=e.node(r);return t[r]=!0,zi.forEach(e.neighbors(r),(function(o){zi.has(t,o)||(n=wa(e,t,n,o,r))})),a.low=i,a.lim=n++,o?a.parent=o:delete a.parent,n}function Ea(e){return zi.find(e.edges(),(function(t){return e.edge(t).cutvalue<0}))}function _a(e,t,n){var r=n.v,o=n.w;t.hasEdge(r,o)||(r=n.w,o=n.v);var i=e.node(r),a=e.node(o),u=i,c=!1;i.lim>a.lim&&(u=a,c=!0);var s=zi.filter(t.edges(),(function(t){return c===ja(e,e.node(t.v),u)&&c!==ja(e,e.node(t.w),u)}));return zi.minBy(s,(function(e){return da(t,e)}))}function xa(e,t,n,r){var o=n.v,i=n.w;e.removeEdge(o,i),e.setEdge(r.v,r.w,{}),ma(e),ya(e,t),function(e,t){var n=zi.find(e.nodes(),(function(e){return!t.node(e).parent})),r=ha(e,n);r=r.slice(1),zi.forEach(r,(function(n){var r=e.node(n).parent,o=t.edge(n,r),i=!1;o||(o=t.edge(r,n),i=!0),t.node(n).rank=t.node(r).rank+(i?o.minlen:-o.minlen)}))}(e,t)}function ja(e,t,n){return n.low<=t.lim&&t.lim<=n.lim}ga.initLowLimValues=ma,ga.initCutValues=ya,ga.calcCutValue=ba,ga.leaveEdge=Ea,ga.enterEdge=_a,ga.exchangeEdges=xa;var Na=na,Oa=function(e){switch(e.graph().ranker){case"network-simplex":Ia(e);break;case"tight-tree":!function(e){Na(e),aa(e)}(e);break;case"longest-path":ka(e);break;default:Ia(e)}};var ka=Na;function Ia(e){va(e)}var Sa=function(e){var t=function(e){var t={},n=0;function r(o){var i=n;zi.forEach(e.children(o),r),t[o]={low:i,lim:n++}}return zi.forEach(e.children(),r),t}(e);zi.forEach(e.graph().dummyChains,(function(n){for(var r=e.node(n),o=r.edgeObj,i=function(e,t,n,r){var o,i,a=[],u=[],c=Math.min(t[n].low,t[r].low),s=Math.max(t[n].lim,t[r].lim);o=n;do{o=e.parent(o),a.push(o)}while(o&&(t[o].low>c||s>t[o].lim));i=o,o=r;for(;(o=e.parent(o))!==i;)u.push(o);return{path:a.concat(u.reverse()),lca:i}}(e,t,o.v,o.w),a=i.path,u=i.lca,c=0,s=a[c],d=!0;n!==o.w;){if(r=e.node(n),d){for(;(s=a[c])!==u&&e.node(s).maxRank<r.rank;)c++;s===u&&(d=!1)}if(!d){for(;c<a.length-1&&e.node(s=a[c+1]).minRank<=r.rank;)c++;s=a[c]}e.setParent(n,s),n=e.successors(n)[0]}}))};var Ma={run:function(e){var t=Qi.addDummyNode(e,"root",{},"_root"),n=function(e){var t={};return zi.forEach(e.children(),(function(n){!function n(r,o){var i=e.children(r);i&&i.length&&zi.forEach(i,(function(e){n(e,o+1)}));t[r]=o}(n,1)})),t}(e),r=zi.max(zi.values(n))-1,o=2*r+1;e.graph().nestingRoot=t,zi.forEach(e.edges(),(function(t){e.edge(t).minlen*=o}));var i=function(e){return zi.reduce(e.edges(),(function(t,n){return t+e.edge(n).weight}),0)}(e)+1;zi.forEach(e.children(),(function(a){!function e(t,n,r,o,i,a,u){var c=t.children(u);if(!c.length)return void(u!==n&&t.setEdge(n,u,{weight:0,minlen:r}));var s=Qi.addBorderNode(t,"_bt"),d=Qi.addBorderNode(t,"_bb"),f=t.node(u);t.setParent(s,u),f.borderTop=s,t.setParent(d,u),f.borderBottom=d,zi.forEach(c,(function(c){e(t,n,r,o,i,a,c);var f=t.node(c),h=f.borderTop?f.borderTop:c,l=f.borderBottom?f.borderBottom:c,p=f.borderTop?o:2*o,v=h!==l?1:i-a[u]+1;t.setEdge(s,h,{weight:p,minlen:v,nestingEdge:!0}),t.setEdge(l,d,{weight:p,minlen:v,nestingEdge:!0})})),t.parent(u)||t.setEdge(n,s,{weight:0,minlen:i+a[u]})}(e,t,o,i,r,n,a)})),e.graph().nodeRankFactor=o},cleanup:function(e){var t=e.graph();e.removeNode(t.nestingRoot),delete t.nestingRoot,zi.forEach(e.edges(),(function(t){e.edge(t).nestingEdge&&e.removeEdge(t)}))}};var Ca=function(e){zi.forEach(e.children(),(function t(n){var r=e.children(n),o=e.node(n);if(r.length&&zi.forEach(r,t),zi.has(o,"minRank")){o.borderLeft=[],o.borderRight=[];for(var i=o.minRank,a=o.maxRank+1;i<a;++i)Ba(e,"borderLeft","_bl",n,o,i),Ba(e,"borderRight","_br",n,o,i)}}))};function Ba(e,t,n,r,o,i){var a={width:0,height:0,rank:i,borderType:t},u=o[t][i-1],c=Qi.addDummyNode(e,"border",a,n);o[t][i]=c,e.setParent(c,r),u&&e.setEdge(u,c,{weight:1})}var Ra={adjust:function(e){var t=e.graph().rankdir.toLowerCase();"lr"!==t&&"rl"!==t||La(e)},undo:function(e){var t=e.graph().rankdir.toLowerCase();"bt"!==t&&"rl"!==t||function(e){zi.forEach(e.nodes(),(function(t){Da(e.node(t))})),zi.forEach(e.edges(),(function(t){var n=e.edge(t);zi.forEach(n.points,Da),zi.has(n,"y")&&Da(n)}))}(e);"lr"!==t&&"rl"!==t||(!function(e){zi.forEach(e.nodes(),(function(t){Pa(e.node(t))})),zi.forEach(e.edges(),(function(t){var n=e.edge(t);zi.forEach(n.points,Pa),zi.has(n,"x")&&Pa(n)}))}(e),La(e))}};function La(e){zi.forEach(e.nodes(),(function(t){Aa(e.node(t))})),zi.forEach(e.edges(),(function(t){Aa(e.edge(t))}))}function Aa(e){var t=e.width;e.width=e.height,e.height=t}function Da(e){e.y=-e.y}function Pa(e){var t=e.x;e.x=e.y,e.y=t}var Ta=function(e){var t={},n=zi.filter(e.nodes(),(function(t){return!e.children(t).length})),r=zi.max(zi.map(n,(function(t){return e.node(t).rank}))),o=zi.map(zi.range(r+1),(function(){return[]}));function i(n){if(!zi.has(t,n)){t[n]=!0;var r=e.node(n);o[r.rank].push(n),zi.forEach(e.successors(n),i)}}var a=zi.sortBy(n,(function(t){return e.node(t).rank}));return zi.forEach(a,i),o};var Ga=function(e,t){for(var n=0,r=1;r<t.length;++r)n+=za(e,t[r-1],t[r]);return n};function za(e,t,n){for(var r=zi.zipObject(n,zi.map(n,(function(e,t){return t}))),o=zi.flatten(zi.map(t,(function(t){return zi.sortBy(zi.map(e.outEdges(t),(function(t){return{pos:r[t.w],weight:e.edge(t).weight}})),"pos")})),!0),i=1;i<n.length;)i<<=1;var a=2*i-1;i-=1;var u=zi.map(new Array(a),(function(){return 0})),c=0;return zi.forEach(o.forEach((function(e){var t=e.pos+i;u[t]+=e.weight;for(var n=0;t>0;)t%2&&(n+=u[t+1]),u[t=t-1>>1]+=e.weight;c+=e.weight*n}))),c}var Fa=function(e,t){return zi.map(t,(function(t){var n=e.inEdges(t);if(n.length){var r=zi.reduce(n,(function(t,n){var r=e.edge(n),o=e.node(n.v);return{sum:t.sum+r.weight*o.order,weight:t.weight+r.weight}}),{sum:0,weight:0});return{v:t,barycenter:r.sum/r.weight,weight:r.weight}}return{v:t}}))};var Ua=function(e,t){var n={};return zi.forEach(e,(function(e,t){var r=n[e.v]={indegree:0,in:[],out:[],vs:[e.v],i:t};zi.isUndefined(e.barycenter)||(r.barycenter=e.barycenter,r.weight=e.weight)})),zi.forEach(t.edges(),(function(e){var t=n[e.v],r=n[e.w];zi.isUndefined(t)||zi.isUndefined(r)||(r.indegree++,t.out.push(n[e.w]))})),function(e){var t=[];function n(e){return function(t){t.merged||(zi.isUndefined(t.barycenter)||zi.isUndefined(e.barycenter)||t.barycenter>=e.barycenter)&&function(e,t){var n=0,r=0;e.weight&&(n+=e.barycenter*e.weight,r+=e.weight);t.weight&&(n+=t.barycenter*t.weight,r+=t.weight);e.vs=t.vs.concat(e.vs),e.barycenter=n/r,e.weight=r,e.i=Math.min(t.i,e.i),t.merged=!0}(e,t)}}function r(t){return function(n){n.in.push(t),0==--n.indegree&&e.push(n)}}for(;e.length;){var o=e.pop();t.push(o),zi.forEach(o.in.reverse(),n(o)),zi.forEach(o.out,r(o))}return zi.map(zi.filter(t,(function(e){return!e.merged})),(function(e){return zi.pick(e,["vs","i","barycenter","weight"])}))}(zi.filter(n,(function(e){return!e.indegree})))};var Va=function(e,t){var n=Qi.partition(e,(function(e){return zi.has(e,"barycenter")})),r=n.lhs,o=zi.sortBy(n.rhs,(function(e){return-e.i})),i=[],a=0,u=0,c=0;r.sort((s=!!t,function(e,t){return e.barycenter<t.barycenter?-1:e.barycenter>t.barycenter?1:s?t.i-e.i:e.i-t.i})),c=Wa(i,o,c),zi.forEach(r,(function(e){c+=e.vs.length,i.push(e.vs),a+=e.barycenter*e.weight,u+=e.weight,c=Wa(i,o,c)}));var s;var d={vs:zi.flatten(i,!0)};u&&(d.barycenter=a/u,d.weight=u);return d};function Wa(e,t,n){for(var r;t.length&&(r=zi.last(t)).i<=n;)t.pop(),e.push(r.vs),n++;return n}var Ya=function e(t,n,r,o){var i=t.children(n),a=t.node(n),u=a?a.borderLeft:void 0,c=a?a.borderRight:void 0,s={};u&&(i=zi.filter(i,(function(e){return e!==u&&e!==c})));var d=Fa(t,i);zi.forEach(d,(function(n){if(t.children(n.v).length){var i=e(t,n.v,r,o);s[n.v]=i,zi.has(i,"barycenter")&&(a=n,u=i,zi.isUndefined(a.barycenter)?(a.barycenter=u.barycenter,a.weight=u.weight):(a.barycenter=(a.barycenter*a.weight+u.barycenter*u.weight)/(a.weight+u.weight),a.weight+=u.weight))}var a,u}));var f=Ua(d,r);!function(e,t){zi.forEach(e,(function(e){e.vs=zi.flatten(e.vs.map((function(e){return t[e]?t[e].vs:e})),!0)}))}(f,s);var h=Va(f,o);if(u&&(h.vs=zi.flatten([u,h.vs,c],!0),t.predecessors(u).length)){var l=t.node(t.predecessors(u)[0]),p=t.node(t.predecessors(c)[0]);zi.has(h,"barycenter")||(h.barycenter=0,h.weight=0),h.barycenter=(h.barycenter*h.weight+l.order+p.order)/(h.weight+2),h.weight+=2}return h};var $a=Do.Graph,qa=function(e,t,n){var r=function(e){var t;for(;e.hasNode(t=zi.uniqueId("_root")););return t}(e),o=new $a({compound:!0}).setGraph({root:r}).setDefaultNodeLabel((function(t){return e.node(t)}));return zi.forEach(e.nodes(),(function(i){var a=e.node(i),u=e.parent(i);(a.rank===t||a.minRank<=t&&t<=a.maxRank)&&(o.setNode(i),o.setParent(i,u||r),zi.forEach(e[n](i),(function(t){var n=t.v===i?t.w:t.v,r=o.edge(n,i),a=zi.isUndefined(r)?0:r.weight;o.setEdge(n,i,{weight:e.edge(t).weight+a})})),zi.has(a,"minRank")&&o.setNode(i,{borderLeft:a.borderLeft[t],borderRight:a.borderRight[t]}))})),o};var Ha=function(e,t,n){var r,o={};zi.forEach(n,(function(n){for(var i,a,u=e.parent(n);u;){if((i=e.parent(u))?(a=o[i],o[i]=u):(a=r,r=u),a&&a!==u)return void t.setEdge(a,u);u=i}}))};var Xa=Do.Graph,Ja=function(e){var t=Qi.maxRank(e),n=Ka(e,zi.range(1,t+1),"inEdges"),r=Ka(e,zi.range(t-1,-1,-1),"outEdges"),o=Ta(e);Za(e,o);for(var i,a=Number.POSITIVE_INFINITY,u=0,c=0;c<4;++u,++c){Qa(u%2?n:r,u%4>=2),o=Qi.buildLayerMatrix(e);var s=Ga(e,o);s<a&&(c=0,i=zi.cloneDeep(o),a=s)}Za(e,i)};function Ka(e,t,n){return zi.map(t,(function(t){return qa(e,t,n)}))}function Qa(e,t){var n=new Xa;zi.forEach(e,(function(e){var r=e.graph().root,o=Ya(e,r,n,t);zi.forEach(o.vs,(function(t,n){e.node(t).order=n})),Ha(e,n,o.vs)}))}function Za(e,t){zi.forEach(t,(function(t){zi.forEach(t,(function(t,n){e.node(t).order=n}))}))}var eu=Do.Graph,tu=function(e){var t,n=Qi.buildLayerMatrix(e),r=zi.merge(nu(e,n),ru(e,n)),o={};zi.forEach(["u","d"],(function(i){t="u"===i?n:zi.values(n).reverse(),zi.forEach(["l","r"],(function(n){"r"===n&&(t=zi.map(t,(function(e){return zi.values(e).reverse()})));var a=("u"===i?e.predecessors:e.successors).bind(e),u=au(e,t,r,a),c=uu(e,t,u.root,u.align,"r"===n);"r"===n&&(c=zi.mapValues(c,(function(e){return-e}))),o[i+n]=c}))}));var i=cu(e,o);return su(o,i),du(o,e.graph().align)};function nu(e,t){var n={};return zi.reduce(t,(function(t,r){var o=0,i=0,a=t.length,u=zi.last(r);return zi.forEach(r,(function(t,c){var s=function(e,t){if(e.node(t).dummy)return zi.find(e.predecessors(t),(function(t){return e.node(t).dummy}))}(e,t),d=s?e.node(s).order:a;(s||t===u)&&(zi.forEach(r.slice(i,c+1),(function(t){zi.forEach(e.predecessors(t),(function(r){var i=e.node(r),a=i.order;!(a<o||d<a)||i.dummy&&e.node(t).dummy||ou(n,r,t)}))})),i=c+1,o=d)})),r})),n}function ru(e,t){var n={};function r(t,r,o,i,a){var u;zi.forEach(zi.range(r,o),(function(r){u=t[r],e.node(u).dummy&&zi.forEach(e.predecessors(u),(function(t){var r=e.node(t);r.dummy&&(r.order<i||r.order>a)&&ou(n,t,u)}))}))}return zi.reduce(t,(function(t,n){var o,i=-1,a=0;return zi.forEach(n,(function(u,c){if("border"===e.node(u).dummy){var s=e.predecessors(u);s.length&&(o=e.node(s[0]).order,r(n,a,c,i,o),a=c,i=o)}r(n,a,n.length,o,t.length)})),n})),n}function ou(e,t,n){if(t>n){var r=t;t=n,n=r}var o=e[t];o||(e[t]=o={}),o[n]=!0}function iu(e,t,n){if(t>n){var r=t;t=n,n=r}return zi.has(e[t],n)}function au(e,t,n,r){var o={},i={},a={};return zi.forEach(t,(function(e){zi.forEach(e,(function(e,t){o[e]=e,i[e]=e,a[e]=t}))})),zi.forEach(t,(function(e){var t=-1;zi.forEach(e,(function(e){var u=r(e);if(u.length)for(var c=((u=zi.sortBy(u,(function(e){return a[e]}))).length-1)/2,s=Math.floor(c),d=Math.ceil(c);s<=d;++s){var f=u[s];i[e]===e&&t<a[f]&&!iu(n,e,f)&&(i[f]=e,i[e]=o[e]=o[f],t=a[f])}}))})),{root:o,align:i}}function uu(e,t,n,r,o){var i={},a=function(e,t,n,r){var o=new eu,i=e.graph(),a=function(e,t,n){return function(r,o,i){var a,u=r.node(o),c=r.node(i),s=0;if(s+=u.width/2,zi.has(u,"labelpos"))switch(u.labelpos.toLowerCase()){case"l":a=-u.width/2;break;case"r":a=u.width/2}if(a&&(s+=n?a:-a),a=0,s+=(u.dummy?t:e)/2,s+=(c.dummy?t:e)/2,s+=c.width/2,zi.has(c,"labelpos"))switch(c.labelpos.toLowerCase()){case"l":a=c.width/2;break;case"r":a=-c.width/2}return a&&(s+=n?a:-a),a=0,s}}(i.nodesep,i.edgesep,r);return zi.forEach(t,(function(t){var r;zi.forEach(t,(function(t){var i=n[t];if(o.setNode(i),r){var u=n[r],c=o.edge(u,i);o.setEdge(u,i,Math.max(a(e,t,r),c||0))}r=t}))})),o}(e,t,n,o),u=o?"borderLeft":"borderRight";function c(e,t){for(var n=a.nodes(),r=n.pop(),o={};r;)o[r]?e(r):(o[r]=!0,n.push(r),n=n.concat(t(r))),r=n.pop()}return c((function(e){i[e]=a.inEdges(e).reduce((function(e,t){return Math.max(e,i[t.v]+a.edge(t))}),0)}),a.predecessors.bind(a)),c((function(t){var n=a.outEdges(t).reduce((function(e,t){return Math.min(e,i[t.w]-a.edge(t))}),Number.POSITIVE_INFINITY),r=e.node(t);n!==Number.POSITIVE_INFINITY&&r.borderType!==u&&(i[t]=Math.max(i[t],n))}),a.successors.bind(a)),zi.forEach(r,(function(e){i[e]=i[n[e]]})),i}function cu(e,t){return zi.minBy(zi.values(t),(function(t){var n=Number.NEGATIVE_INFINITY,r=Number.POSITIVE_INFINITY;return zi.forIn(t,(function(t,o){var i=function(e,t){return e.node(t).width}(e,o)/2;n=Math.max(t+i,n),r=Math.min(t-i,r)})),n-r}))}function su(e,t){var n=zi.values(t),r=zi.min(n),o=zi.max(n);zi.forEach(["u","d"],(function(n){zi.forEach(["l","r"],(function(i){var a,u=n+i,c=e[u];if(c!==t){var s=zi.values(c);(a="l"===i?r-zi.min(s):o-zi.max(s))&&(e[u]=zi.mapValues(c,(function(e){return e+a})))}}))}))}function du(e,t){return zi.mapValues(e.ul,(function(n,r){if(t)return e[t.toLowerCase()][r];var o=zi.sortBy(zi.map(e,r));return(o[1]+o[2])/2}))}var fu=tu,hu=function(e){(function(e){var t=Qi.buildLayerMatrix(e),n=e.graph().ranksep,r=0;zi.forEach(t,(function(t){var o=zi.max(zi.map(t,(function(t){return e.node(t).height})));zi.forEach(t,(function(t){e.node(t).y=r+o/2})),r+=o+n}))})(e=Qi.asNonCompoundGraph(e)),zi.forEach(fu(e),(function(t,n){e.node(n).x=t}))};var lu=Qi.normalizeRanks,pu=Qi.removeEmptyRanks,vu=Qi,gu=Do.Graph,yu=function(e,t){var n=t&&t.debugTiming?vu.time:vu.notime;n("layout",(function(){var t=n("  buildLayoutGraph",(function(){return function(e){var t=new gu({multigraph:!0,compound:!0}),n=ku(e.graph());return t.setGraph(zi.merge({},mu,Ou(n,bu),zi.pick(n,wu))),zi.forEach(e.nodes(),(function(n){var r=ku(e.node(n));t.setNode(n,zi.defaults(Ou(r,Eu),_u)),t.setParent(n,e.parent(n))})),zi.forEach(e.edges(),(function(n){var r=ku(e.edge(n));t.setEdge(n,zi.merge({},ju,Ou(r,xu),zi.pick(r,Nu)))})),t}(e)}));n("  runLayout",(function(){!function(e,t){t("    makeSpaceForEdgeLabels",(function(){!function(e){var t=e.graph();t.ranksep/=2,zi.forEach(e.edges(),(function(n){var r=e.edge(n);r.minlen*=2,"c"!==r.labelpos.toLowerCase()&&("TB"===t.rankdir||"BT"===t.rankdir?r.width+=r.labeloffset:r.height+=r.labeloffset)}))}(e)})),t("    removeSelfEdges",(function(){!function(e){zi.forEach(e.edges(),(function(t){if(t.v===t.w){var n=e.node(t.v);n.selfEdges||(n.selfEdges=[]),n.selfEdges.push({e:t,label:e.edge(t)}),e.removeEdge(t)}}))}(e)})),t("    acyclic",(function(){Ji.run(e)})),t("    nestingGraph.run",(function(){Ma.run(e)})),t("    rank",(function(){Oa(vu.asNonCompoundGraph(e))})),t("    injectEdgeLabelProxies",(function(){!function(e){zi.forEach(e.edges(),(function(t){var n=e.edge(t);if(n.width&&n.height){var r=e.node(t.v),o={rank:(e.node(t.w).rank-r.rank)/2+r.rank,e:t};vu.addDummyNode(e,"edge-proxy",o,"_ep")}}))}(e)})),t("    removeEmptyRanks",(function(){pu(e)})),t("    nestingGraph.cleanup",(function(){Ma.cleanup(e)})),t("    normalizeRanks",(function(){lu(e)})),t("    assignRankMinMax",(function(){!function(e){var t=0;zi.forEach(e.nodes(),(function(n){var r=e.node(n);r.borderTop&&(r.minRank=e.node(r.borderTop).rank,r.maxRank=e.node(r.borderBottom).rank,t=zi.max(t,r.maxRank))})),e.graph().maxRank=t}(e)})),t("    removeEdgeLabelProxies",(function(){!function(e){zi.forEach(e.nodes(),(function(t){var n=e.node(t);"edge-proxy"===n.dummy&&(e.edge(n.e).labelRank=n.rank,e.removeNode(t))}))}(e)})),t("    normalize.run",(function(){ta.run(e)})),t("    parentDummyChains",(function(){Sa(e)})),t("    addBorderSegments",(function(){Ca(e)})),t("    order",(function(){Ja(e)})),t("    insertSelfEdges",(function(){!function(e){var t=vu.buildLayerMatrix(e);zi.forEach(t,(function(t){var n=0;zi.forEach(t,(function(t,r){var o=e.node(t);o.order=r+n,zi.forEach(o.selfEdges,(function(t){vu.addDummyNode(e,"selfedge",{width:t.label.width,height:t.label.height,rank:o.rank,order:r+ ++n,e:t.e,label:t.label},"_se")})),delete o.selfEdges}))}))}(e)})),t("    adjustCoordinateSystem",(function(){Ra.adjust(e)})),t("    position",(function(){hu(e)})),t("    positionSelfEdges",(function(){!function(e){zi.forEach(e.nodes(),(function(t){var n=e.node(t);if("selfedge"===n.dummy){var r=e.node(n.e.v),o=r.x+r.width/2,i=r.y,a=n.x-o,u=r.height/2;e.setEdge(n.e,n.label),e.removeNode(t),n.label.points=[{x:o+2*a/3,y:i-u},{x:o+5*a/6,y:i-u},{x:o+a,y:i},{x:o+5*a/6,y:i+u},{x:o+2*a/3,y:i+u}],n.label.x=n.x,n.label.y=n.y}}))}(e)})),t("    removeBorderNodes",(function(){!function(e){zi.forEach(e.nodes(),(function(t){if(e.children(t).length){var n=e.node(t),r=e.node(n.borderTop),o=e.node(n.borderBottom),i=e.node(zi.last(n.borderLeft)),a=e.node(zi.last(n.borderRight));n.width=Math.abs(a.x-i.x),n.height=Math.abs(o.y-r.y),n.x=i.x+n.width/2,n.y=r.y+n.height/2}})),zi.forEach(e.nodes(),(function(t){"border"===e.node(t).dummy&&e.removeNode(t)}))}(e)})),t("    normalize.undo",(function(){ta.undo(e)})),t("    fixupEdgeLabelCoords",(function(){!function(e){zi.forEach(e.edges(),(function(t){var n=e.edge(t);if(zi.has(n,"x"))switch("l"!==n.labelpos&&"r"!==n.labelpos||(n.width-=n.labeloffset),n.labelpos){case"l":n.x-=n.width/2+n.labeloffset;break;case"r":n.x+=n.width/2+n.labeloffset}}))}(e)})),t("    undoCoordinateSystem",(function(){Ra.undo(e)})),t("    translateGraph",(function(){!function(e){var t=Number.POSITIVE_INFINITY,n=0,r=Number.POSITIVE_INFINITY,o=0,i=e.graph(),a=i.marginx||0,u=i.marginy||0;function c(e){var i=e.x,a=e.y,u=e.width,c=e.height;t=Math.min(t,i-u/2),n=Math.max(n,i+u/2),r=Math.min(r,a-c/2),o=Math.max(o,a+c/2)}zi.forEach(e.nodes(),(function(t){c(e.node(t))})),zi.forEach(e.edges(),(function(t){var n=e.edge(t);zi.has(n,"x")&&c(n)})),t-=a,r-=u,zi.forEach(e.nodes(),(function(n){var o=e.node(n);o.x-=t,o.y-=r})),zi.forEach(e.edges(),(function(n){var o=e.edge(n);zi.forEach(o.points,(function(e){e.x-=t,e.y-=r})),zi.has(o,"x")&&(o.x-=t),zi.has(o,"y")&&(o.y-=r)})),i.width=n-t+a,i.height=o-r+u}(e)})),t("    assignNodeIntersects",(function(){!function(e){zi.forEach(e.edges(),(function(t){var n,r,o=e.edge(t),i=e.node(t.v),a=e.node(t.w);o.points?(n=o.points[0],r=o.points[o.points.length-1]):(o.points=[],n=a,r=i),o.points.unshift(vu.intersectRect(i,n)),o.points.push(vu.intersectRect(a,r))}))}(e)})),t("    reversePoints",(function(){!function(e){zi.forEach(e.edges(),(function(t){var n=e.edge(t);n.reversed&&n.points.reverse()}))}(e)})),t("    acyclic.undo",(function(){Ji.undo(e)}))}(t,n)})),n("  updateInputGraph",(function(){!function(e,t){zi.forEach(e.nodes(),(function(n){var r=e.node(n),o=t.node(n);r&&(r.x=o.x,r.y=o.y,t.children(n).length&&(r.width=o.width,r.height=o.height))})),zi.forEach(e.edges(),(function(n){var r=e.edge(n),o=t.edge(n);r.points=o.points,zi.has(o,"x")&&(r.x=o.x,r.y=o.y)})),e.graph().width=t.graph().width,e.graph().height=t.graph().height}(e,t)}))}))};var bu=["nodesep","edgesep","ranksep","marginx","marginy"],mu={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},wu=["acyclicer","ranker","rankdir","align"],Eu=["width","height"],_u={width:0,height:0},xu=["minlen","weight","width","height","labeloffset"],ju={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},Nu=["labelpos"];function Ou(e,t){return zi.mapValues(zi.pick(e,t),Number)}function ku(e){var t={};return zi.forEach(e,(function(e,n){t[n.toLowerCase()]=e})),t}var Iu=Do.Graph;var Su={graphlib:Do,layout:yu,debug:{debugOrdering:function(e){var t=Qi.buildLayerMatrix(e),n=new Iu({compound:!0,multigraph:!0}).setGraph({});return zi.forEach(e.nodes(),(function(t){n.setNode(t,{label:t}),n.setParent(t,"layer"+e.node(t).rank)})),zi.forEach(e.edges(),(function(e){n.setEdge(e.v,e.w,{},e.name)})),zi.forEach(t,(function(e,t){var r="layer"+t;n.setNode(r,{rank:"same"}),zi.reduce(e,(function(e,t){return n.setEdge(e,t,{style:"invis"}),t}))})),n}},util:{time:Qi.time,notime:Qi.notime},version:"0.8.5"},Mu=Su.graphlib,Cu=Su.layout;class Bu{constructor(e){this.name=e.name,this.attr=e.attr||{},this.inputs=e.inputs,this.path=e.path||[],this.cardinality=1,this.include=r.UNSPECIFIED,this.isGroupNode=!1,this.parentNode=null,this.type=n.OP,this.width=e.width,this.height=e.height}}class Ru{constructor(){this.nodes={},this.edges=[]}}class Lu{constructor(e,t={}){this.attr=null,this.name=e,this.type=n.META,this.depth=1,this.isGroupNode=!0,this.cardinality=0,this.metagraph=Tu(e,o.META,t),this.bridgegraph=null,this.opHistogram={},this.compatibilityHistogram={compatible:0,incompatible:0},this.templateId=null,this.parentNode=null,this.hasNonControlEdges=!1,this.include=r.UNSPECIFIED,this.associatedFunction=""}getFirstChild(){return this.metagraph.node(this.metagraph.nodes()[0])}getChildren(){return this.metagraph.nodes().map(e=>this.metagraph.node(e))}getRootOp(){let e=this.name.split("/"),t=this.name+"/("+e[e.length-1]+")";return this.metagraph.node(t)}leaves(){let e,t=[],n=[this];for(;n.length;){let r=n.shift();r.isGroupNode?(e=r.metagraph,e.nodes().forEach(t=>n.push(e.node(t)))):t.push(r.name)}return t}}class Au{constructor(e,t){this.name=null,this.v=e,this.w=t,this.baseEdgeList=[],this.inbound=null,this.numRegularEdges=0,this.numControlEdges=0,this.numRefEdges=0,this.totalSize=0}addBaseEdge(e,t){this.baseEdgeList.push(e)}}function Du(e,t={}){return new Lu(e,t)}function Pu(e,t){return new Au(e,t)}function Tu(e,t,n){const r=n||{},o=new Mu.Graph(r);return o.setGraph({name:e,rankdir:r.rankdir||"BT",type:t}),o}class Gu{constructor(e){this.maxMetaEdgeSize=1,this.hasShapeInfo=!1,this.templates=null,this.graphOptions=e||{},this.graphOptions.compound=!0,this.root=Du("__root__",this.graphOptions),this.index={},this.index.__root__=this.root,this.orderings={}}getNodeMap(){return this.index}node(e){return this.index[e]}setNode(e,t){this.index[e]=t}getBridgegraph(e){const t=this.index[e];if(!t)throw Error("Could not find node in hierarchy: "+e);if(!("metagraph"in t))return null;const n=t;if(n.bridgegraph)return n.bridgegraph;const r=Tu("__bridgegraph__",o.BRIDGE,this.graphOptions);if(n.bridgegraph=r,!t.parentNode||!("metagraph"in t.parentNode))return r;const i=t.parentNode;return[i.metagraph,this.getBridgegraph(i.name)].forEach(t=>{t.edges().filter(t=>t.v===e||t.w===e).forEach(n=>{const o=n.w===e;t.edge(n).baseEdgeList.forEach(t=>{const[i,a]=o?[t.w,n.v]:[t.v,n.w],u=this.getChildName(e,i),c={v:o?a:u,w:o?u:a};let s=r.edge(c);s||(s=Pu(c.v,c.w),s.inbound=o,r.setEdge(c.v,c.w,s)),s.addBaseEdge(t,this)})})}),r}getChildName(e,t){let n=this.index[t];for(;n;){if(n.parentNode&&n.parentNode.name===e)return n.name;n=n.parentNode}throw Error("Could not find immediate child for descendant: "+t)}getPredecessors(e){const t=this.index[e];if(!t)throw Error("Could not find node with name: "+e);return this.getOneWayEdges(t,!0)}getSuccessors(e){const t=this.index[e];if(!t)throw Error("Could not find node with name: "+e);return this.getOneWayEdges(t,!1)}getOneWayEdges(e,t){const n={control:[],regular:[]};if(!e.parentNode||!e.parentNode.isGroupNode)return n;const r=e.parentNode,o=r.metagraph,i=this.getBridgegraph(r.name);return Fu(o,e,t,n),Fu(i,e,t,n),n}}function zu(e,t){const n=new Gu({rankdir:t.rankDirection});return function(e,t){Object.keys(t.nodes).forEach(n=>{const r=t.nodes[n],o=r.path;let i=e.root;i.depth=Math.max(o.length,i.depth);for(let t=0;t<o.length&&(i.depth=Math.max(i.depth,o.length-t),i.cardinality+=r.cardinality,t!==o.length-1);t++){const n=o[t];let a=e.node(n);a||(a=Du(n,e.graphOptions),a.path=r.path.slice(0,t+1),a.parentNode=i,e.setNode(n,a),i.metagraph.setNode(n,a)),i=a}e.setNode(r.name,r),r.parentNode=i,i.metagraph.setNode(r.name,r)})}(n,e),function(e,t){const n=e.getNodeMap(),r=[],o=[],i=(e,t)=>{let n=0;for(;e;)t[n++]=e.name,e=e.parentNode;return n-1};t.edges.forEach(a=>{let u=i(t.nodes[a.v],r),c=i(t.nodes[a.w],o);if(-1===u||-1===c)return;for(;r[u]===o[c];)if(u--,c--,u<0||c<0)throw Error("No difference found between ancestor paths.");const s=n[r[u+1]],d=r[u],f=o[c];let h=s.metagraph.edge(d,f);h||(h=Pu(d,f),s.metagraph.setEdge(d,f,h)),h.addBaseEdge(a,e)})}(n,e),n}function Fu(e,t,n,r){(n?e.inEdges(t.name):e.outEdges(t.name)).forEach(t=>{const n=e.edge(t);(n.numRegularEdges?r.regular:r.control).push(n)})}const Uu=4;class Vu{constructor(e,t){this.hierarchy=e,this.displayingStats=t,this.index={},this.hasSubhierarchy={},this.root=new $u(e.root,e.graphOptions),this.index[e.root.name]=this.root,this.buildSubhierarchy(e.root.name),this.root.expanded=!0,this.traceInputs=!0}getRenderInfoNodes(){return Object.values(this.index)}getSubhierarchy(){return this.hasSubhierarchy}buildSubhierarchy(e){if(e in this.hasSubhierarchy)return;this.hasSubhierarchy[e]=!0;const t=this.index[e];if(t.node.type!==n.META)return;const o=t,i=o.node.metagraph,a=o.coreGraph;i.nodes().forEach(e=>{const t=this.getOrCreateRenderNodeByName(e);a.setNode(e,t)}),i.edges().forEach(e=>{const t=i.edge(e),n=new Yu(t);a.setEdge(e.v,e.w,n)});const u=o.node.parentNode;if(!u)return;const c=this.index[u.name],s=(e,...t)=>t.concat([e?"IN":"OUT"]).join("~~"),d=this.hierarchy.getBridgegraph(e),f={in:{},out:{},control:{}};d.edges().forEach(e=>{const t=!!i.node(e.w),n=t?e.v:e.w;d.edge(e).numRegularEdges?t?f.out[n]=(f.out[n]||0)+1:f.in[n]=(f.in[n]||0)+1:f.control[n]=(f.control[n]||0)+1}),d.edges().forEach(t=>{const o=d.edge(t),h=!!i.node(t.w),[l,p]=h?[t.w,t.v]:[t.v,t.w],v=this.index[l];let g=null;if(!((h?f.out:f.in)[p]>Uu)&&v.isInCore()){const t=t=>{const n=h?{v:t,w:e}:{v:e,w:t};return c.coreGraph.edge(n)};g=t(p),g||(g=t(s(h,p,u.name)))}if(g&&!o.numRegularEdges){let e=g,t=c.node;for(;e.adjoiningMetaedge;)e=e.adjoiningMetaedge,t=t.parentNode}const y=s(h,e),b=s(h,p,e);let m=a.node(b);if(!m){let e=a.node(y);if(!e){const t={name:y,type:n.BRIDGE,isGroupNode:!1,cardinality:0,parentNode:null,include:r.UNSPECIFIED,inbound:h,attr:{}};e=new Wu(t),this.index[y]=e,a.setNode(y,e)}const t={name:b,type:n.BRIDGE,isGroupNode:!1,cardinality:1,parentNode:null,include:r.UNSPECIFIED,inbound:h,attr:{}};m=new Wu(t),this.index[b]=m,a.setNode(b,m),a.setParent(b,y),e.node.cardinality++}const w=new Yu(o);w.adjoiningMetaedge=g,h?a.setEdge(b,l,w):a.setEdge(l,b,w)}),[!0,!1].forEach(t=>{const o=s(t,e),i=a.node(o);i&&a.nodes().forEach(u=>{if(a.node(u).node.type===n.BRIDGE)return;if(!(t?!a.predecessors(u).length:!a.successors(u).length))return;const c=s(t,e,"STRUCTURAL_TARGET");let d=a.node(c);if(!d){const e={name:c,type:n.BRIDGE,isGroupNode:!1,cardinality:1,parentNode:null,include:r.UNSPECIFIED,inbound:t,attr:{}};d=new Wu(e),d.structural=!0,this.index[c]=d,a.setNode(c,d),i.node.cardinality++,a.setParent(c,o)}const f=new Yu(null);f.structural=!0,f.weight--,t?a.setEdge(c,u,f):a.setEdge(u,c,f)})})}getOrCreateRenderNodeByName(e){if(!e)return null;if(e in this.index)return this.index[e];const t=this.hierarchy.node(e);return t?(this.index[e]=t.isGroupNode?new $u(t,this.hierarchy.graphOptions):new Wu(t),this.index[e]):null}getRenderNodeByName(e){return this.index[e]}getNodeByName(e){return this.hierarchy.node(e)}}class Wu{constructor(e){this.node=e,this.expanded=!1,this.x=0,this.y=0,this.width=e.width||0,this.height=e.height||0,this.inboxWidth=0,this.outboxWidth=0,this.excluded=!1,this.structural=!1,this.labelOffset=0,this.radius=0,this.labelHeight=0,this.paddingTop=0,this.paddingLeft=0,this.paddingRight=0,this.paddingBottom=0,this.isInExtract=!1,this.isOutExtract=!1,this.coreBox={width:0,height:0},this.isFadedOut=!1,this.displayName=e.name}isInCore(){return!this.isInExtract&&!this.isOutExtract}}class Yu{constructor(e){this.points=[],this.startMarkerId=null,this.endMarkerId=null,this.metaedge=e,this.adjoiningMetaedge=null,this.structural=!1,this.weight=1,this.isFadedOut=!1}}class $u extends Wu{constructor(e,t){super(e);const n=e.metagraph.graph();t.compound=!0,this.coreGraph=Tu(n.name,o.CORE,t),this.inExtractBox={width:0,height:0},this.outExtractBox={width:0,height:0},this.isolatedInExtract=[],this.isolatedOutExtract=[]}}function qu(e,r=t){e.node.isGroupNode&&function(e,t){e.coreGraph.nodes().map(t=>e.coreGraph.node(t)).concat(e.isolatedInExtract,e.isolatedOutExtract).forEach(e=>{const{height:r,width:o}=e;switch(e.node.type){case n.OP:Object.assign(e,t.nodeSize.op),e.height=r||t.nodeSize.op.height,e.width=o||t.nodeSize.op.width;break;case n.BRIDGE:Object.assign(e,t.nodeSize.bridge);break;case n.META:if(e.expanded){qu(e,t)}else Object.assign(e,t.nodeSize.meta),e.height=t.nodeSize.meta.height,e.width=t.nodeSize.meta.width;break;default:throw Error("Unrecognized node type: "+e.node.type)}e.expanded||function(e){e.coreBox.width=e.width,e.coreBox.height=e.height;const t=(""+e.displayName).length;e.width=Math.max(e.coreBox.width+e.inboxWidth+e.outboxWidth,3*t)}(e)})}(e,r),e.node.type===n.META&&function(e,t){const r=t.subscene.meta;Object.assign(e,r),Object.assign(e.coreBox,function(e,t){Object.assign(e.graph(),{nodesep:t.nodeSep,ranksep:t.rankSep,edgesep:t.edgeSep});const r=[];if(e.nodes().forEach(t=>{e.node(t).node.type===n.BRIDGE||r.push(t)}),!r.length)return{width:0,height:0};Cu(e);let o=1/0,i=1/0,a=-1/0,u=-1/0;return r.forEach(t=>{const n=e.node(t),r=.5*n.width,c=n.x-r,s=n.x+r;o=c<o?c:o,a=s>a?s:a;const d=.5*n.height,f=n.y-d,h=n.y+d;i=f<i?f:i,u=h>u?h:u}),e.edges().forEach(t=>{const n=e.edge(t);if(n.structural)return;const r=e.node(n.metaedge.v),c=e.node(n.metaedge.w);if(3===n.points.length&&function(e){let t=Hu(e[0],e[1]);for(let n=1;n<e.length-1;n++){const r=Hu(e[n],e[n+1]);if(Math.abs(r-t)>1)return!1;t=r}return!0}(n.points)){if(null!=r){const e=r.expanded?r.x:Xu(r);n.points[0].x=e}if(null!=c){const e=c.expanded?c.x:Xu(c);n.points[2].x=e}n.points=[n.points[0],n.points[1]]}const s=n.points[n.points.length-2];null!=c&&(n.points[n.points.length-1]=Ju(s,c));const d=n.points[1];null!=r&&(n.points[0]=Ju(d,r)),n.points.forEach(e=>{o=e.x<o?e.x:o,a=e.x>a?e.x:a,i=e.y<i?e.y:i,u=e.y>u?e.y:u})}),e.nodes().forEach(t=>{const n=e.node(t);n.x-=o,n.y-=i}),e.edges().forEach(t=>{e.edge(t).points.forEach(e=>{e.x-=o,e.y-=i})}),{width:a-o,height:u-i}}(e.coreGraph,t.graph.meta));const o=e.isolatedInExtract.length?Math.max(...e.isolatedInExtract.map(e=>e.width)):null;e.inExtractBox.width=null!=o?o:0,e.inExtractBox.height=e.isolatedInExtract.reduce((e,t,n)=>{const o=n>0?r.extractYOffset:0;return t.x=0,t.y=e+o+t.height/2,e+o+t.height},0);const i=e.isolatedOutExtract.length?Math.max(...e.isolatedOutExtract.map(e=>e.width)):null;e.outExtractBox.width=null!=i?i:0,e.outExtractBox.height=e.isolatedOutExtract.reduce((e,t,n)=>{const o=n>0?r.extractYOffset:0;return t.x=0,t.y=e+o+t.height/2,e+o+t.height},0);let a=0;e.isolatedInExtract.length>0&&a++;e.isolatedOutExtract.length>0&&a++;e.coreGraph.nodeCount()>0&&a++;const u=t.subscene.meta.extractXOffset,c=a<=1?0:a*u,s=Math.max(0,e.inExtractBox.width+e.outExtractBox.width);e.coreBox.width+=s+c+c,e.coreBox.height=r.labelHeight+Math.max(e.inExtractBox.height,e.coreBox.height,e.outExtractBox.height),e.width=e.coreBox.width+r.paddingLeft+r.paddingRight,e.height=e.paddingTop+e.coreBox.height+e.paddingBottom}(e,r)}function Hu(e,t){const n=t.x-e.x,r=t.y-e.y;return 180*Math.atan(r/n)/Math.PI}function Xu(e){if(e.expanded)return e.x;return e.x-e.width/2+0+e.coreBox.width/2}function Ju(e,t){const n=t.expanded?t.x:Xu(t),r=t.y,o=e.x-n,i=e.y-r;let a,u,c=t.expanded?t.width:t.coreBox.width,s=t.expanded?t.height:t.coreBox.height;return Math.abs(i)*c/2>Math.abs(o)*s/2?(i<0&&(s=-s),a=0===i?0:s/2*o/i,u=s/2):(o<0&&(c=-c),a=c/2,u=0===o?0:c/2*i/o),{x:n+a,y:r+u}}var Ku;function Qu(e){const t=e.coreGraph.nodes().map(t=>e.coreGraph.node(t));return{...Zu(e),expanded:e.expanded,nodes:e.expanded?(r=t,r.map(e=>e.node.type===n.META?Qu(e):Zu(e))):[],edges:e.expanded?ec(e):[]};var r}function Zu(e){return{name:e.node.name,type:e.node.type,parentNodeName:e.node.parentNode?e.node.parentNode.name:null,coreBox:{...e.coreBox},x:e.x,y:e.y,width:e.width,height:e.height,radius:e.radius,labelHeight:e.labelHeight,labelOffset:e.labelOffset,outboxWidth:e.outboxWidth,inboxWidth:e.inboxWidth,paddingLeft:e.paddingLeft,paddingTop:e.paddingTop,paddingRight:e.paddingRight,paddingBottom:e.paddingBottom}}function ec(e){return e.coreGraph.edges().map(t=>({renderInfoEdge:e.coreGraph.edge(t),edge:t})).filter(({renderInfoEdge:e})=>e.metaedge).map(({edge:e,renderInfoEdge:t})=>({adjoiningEdge:t.adjoiningMetaedge?{w:t.adjoiningMetaedge.metaedge.w,v:t.adjoiningMetaedge.metaedge.v,points:t.adjoiningMetaedge.points,adjoiningMetaedge:t.adjoiningMetaedge}:null,inbound:t.metaedge.inbound,w:e.w,v:e.v,points:t.points.map(e=>({...e})),weight:t.weight}))}(Ku=e.HierarchyNodeType||(e.HierarchyNodeType={}))[Ku.META=0]="META",Ku[Ku.OP=1]="OP",Ku[Ku.SERIES=2]="SERIES",e.buildGraph=function(e,n,r){const o=function(e){const t=[],n=[];return e.forEach(e=>{n.includes(e.id)?t.push(e.id):n.push(e.id)}),t}(e.nodes);o.length&&console.error("Duplicated id found: ",o.join(", "));const i=function(e){const t={nodes:[]},n=Object.keys(e.compound||{}),r=new Map,o=(t,i=[])=>{const a=0===i.length;if(r.has(t))return r.get(t);for(let r=0;r<n.length;r++){let a=n[r];if(e.compound&&-1!==e.compound[a].indexOf(t))return i.unshift(a),o(a,i)}return a&&r.set(t,i),i};return e.nodes.forEach(n=>{const r=n.id,i=[...o(r),r];let a=(u=r,e.edges.filter(e=>e.w===u).map(e=>({name:e.v})));var u;t.nodes.push({name:r,path:i,inputs:a,width:n.width,height:n.height,attr:n.attr})}),t}(e),a=function(e,t){const n=(e,t,r=[])=>{const o=Object.keys(e);for(let i=0;i<o.length;i++){let a=o[i];if(-1!==e[a].indexOf(t))return r.unshift(a),n(e,a,r)}return r};return[...new Set(e.map(e=>n(t,e,[e])).reduce((e,t)=>[...e,...t],[]))]}(n&&n.expanded?n.expanded:[],e.compound||{}),{renderInfo:u}=function(e,t="LR"){const n=zu(function(e){const t=new Ru;return e.nodes.map(e=>new Bu(e)).forEach(e=>{t.nodes[e.name]=e,e.inputs.forEach(n=>{!function(e,t,n){n.name!==t.name&&e.edges.push({...n.attr,v:n.name,w:t.name})}(t,e,n)})}),t}(e),{rankDirection:t}),r=function(e){return new Vu(e,!1)}(n);return{hierarchy:n,renderInfo:r}}(i,n&&n.rankDirection?n.rankDirection:"LR");return function(e,t){t.forEach(t=>{const n=e.getRenderInfoNodes().find(e=>e.displayName===t);let r=n&&n.node&&n.node.name||"";const o=e.getRenderNodeByName(r);o&&(o.expanded=!0,e.buildSubhierarchy(r))})}(u,a),qu(u.root,r||t),Qu(u.root)},Object.defineProperty(e,"__esModule",{value:!0})}));


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