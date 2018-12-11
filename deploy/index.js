'use strict';
function unwrapExports(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default')
    ? t.default
    : t;
}
function createCommonjsModule(t, e) {
  return t((e = { exports: {} }), e.exports), e.exports;
}
function getCjsExportFromNamespace(t) {
  return (t && t.default) || t;
}
var extendStatics = function(t, e) {
  return (extendStatics =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function(t, e) {
        t.__proto__ = e;
      }) ||
    function(t, e) {
      for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
    })(t, e);
};
function __extends(t, e) {
  function r() {
    this.constructor = t;
  }
  extendStatics(t, e),
    (t.prototype =
      e === null ? Object.create(e) : ((r.prototype = e.prototype), new r()));
}
var __assign = function() {
  return (__assign =
    Object.assign ||
    function(t) {
      for (var e, r = 1, n = arguments.length; r < n; r++)
        for (var o in (e = arguments[r]))
          Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
      return t;
    }).apply(this, arguments);
};
function __rest(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) &&
      e.indexOf(n) < 0 &&
      (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols === 'function') {
    var o = 0;
    for (n = Object.getOwnPropertySymbols(t); o < n.length; o++)
      e.indexOf(n[o]) < 0 && (r[n[o]] = t[n[o]]);
  }
  return r;
}
function __decorate(t, e, r, n) {
  var o;

  var i = arguments.length;

  var a =
    i < 3 ? e : n === null ? (n = Object.getOwnPropertyDescriptor(e, r)) : n;
  if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
    a = Reflect.decorate(t, e, r, n);
  else
    for (var c = t.length - 1; c >= 0; c--)
      (o = t[c]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, r, a) : o(e, r)) || a);
  return i > 3 && a && Object.defineProperty(e, r, a), a;
}
function __param(r, n) {
  return function(t, e) {
    n(t, e, r);
  };
}
function __metadata(t, e) {
  if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
    return Reflect.metadata(t, e);
}
function __awaiter(i, a, c, u) {
  return new (c || (c = Promise))(function(t, e) {
    function r(t) {
      try {
        o(u.next(t));
      } catch (t) {
        e(t);
      }
    }
    function n(t) {
      try {
        o(u.throw(t));
      } catch (t) {
        e(t);
      }
    }
    function o(e) {
      e.done
        ? t(e.value)
        : new c(function(t) {
            t(e.value);
          }).then(r, n);
    }
    o((u = u.apply(i, a || [])).next());
  });
}
function __generator(r, n) {
  var o;

  var i;

  var a;

  var t;

  var c = {
    label: 0,
    sent: function() {
      if (1 & a[0]) throw a[1];
      return a[1];
    },
    trys: [],
    ops: []
  };
  return (
    (t = { next: e(0), throw: e(1), return: e(2) }),
    typeof Symbol === 'function' &&
      (t[Symbol.iterator] = function() {
        return this;
      }),
    t
  );
  function e(e) {
    return function(t) {
      return (function(e) {
        if (o) throw new TypeError('Generator is already executing.');
        for (; c; )
          try {
            if (
              ((o = 1),
              i &&
                (a =
                  2 & e[0]
                    ? i.return
                    : e[0]
                    ? i.throw || ((a = i.return) && a.call(i), 0)
                    : i.next) &&
                !(a = a.call(i, e[1])).done)
            )
              return a;
            switch (((i = 0), a && (e = [2 & e[0], a.value]), e[0])) {
              case 0:
              case 1:
                a = e;
                break;
              case 4:
                return c.label++, { value: e[1], done: !1 };
              case 5:
                c.label++, (i = e[1]), (e = [0]);
                continue;
              case 7:
                (e = c.ops.pop()), c.trys.pop();
                continue;
              default:
                if (
                  !(a = (a = c.trys).length > 0 && a[a.length - 1]) &&
                  (e[0] === 6 || e[0] === 2)
                ) {
                  c = 0;
                  continue;
                }
                if (e[0] === 3 && (!a || (e[1] > a[0] && e[1] < a[3]))) {
                  c.label = e[1];
                  break;
                }
                if (e[0] === 6 && c.label < a[1]) {
                  (c.label = a[1]), (a = e);
                  break;
                }
                if (a && c.label < a[2]) {
                  (c.label = a[2]), c.ops.push(e);
                  break;
                }
                a[2] && c.ops.pop(), c.trys.pop();
                continue;
            }
            e = n.call(r, c);
          } catch (t) {
            (e = [6, t]), (i = 0);
          } finally {
            o = a = 0;
          }
        if (5 & e[0]) throw e[1];
        return { value: e[0] ? e[1] : void 0, done: !0 };
      })([e, t]);
    };
  }
}
function __exportStar(t, e) {
  for (var r in t) e.hasOwnProperty(r) || (e[r] = t[r]);
}
function __values(t) {
  var e = typeof Symbol === 'function' && t[Symbol.iterator];

  var r = 0;
  return e
    ? e.call(t)
    : {
        next: function() {
          return (
            t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t }
          );
        }
      };
}
function __read(t, e) {
  var r = typeof Symbol === 'function' && t[Symbol.iterator];
  if (!r) return t;
  var n;

  var o;

  var i = r.call(t);

  var a = [];
  try {
    for (; (void 0 === e || e-- > 0) && !(n = i.next()).done; ) a.push(n.value);
  } catch (t) {
    o = { error: t };
  } finally {
    try {
      n && !n.done && (r = i.return) && r.call(i);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}
function __spread() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(__read(arguments[e]));
  return t;
}
function __await(t) {
  return this instanceof __await ? ((this.v = t), this) : new __await(t);
}
function __asyncGenerator(t, e, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError('Symbol.asyncIterator is not defined.');
  var o;

  var i = r.apply(t, e || []);

  var a = [];
  return (
    (o = {}),
    n('next'),
    n('throw'),
    n('return'),
    (o[Symbol.asyncIterator] = function() {
      return this;
    }),
    o
  );
  function n(n) {
    i[n] &&
      (o[n] = function(r) {
        return new Promise(function(t, e) {
          a.push([n, r, t, e]) > 1 || c(n, r);
        });
      });
  }
  function c(t, e) {
    try {
      (r = i[t](e)).value instanceof __await
        ? Promise.resolve(r.value.v).then(u, s)
        : l(a[0][2], r);
    } catch (t) {
      l(a[0][3], t);
    }
    var r;
  }
  function u(t) {
    c('next', t);
  }
  function s(t) {
    c('throw', t);
  }
  function l(t, e) {
    t(e), a.shift(), a.length && c(a[0][0], a[0][1]);
  }
}
function __asyncDelegator(n) {
  var t, o;
  return (
    (t = {}),
    e('next'),
    e('throw', function(t) {
      throw t;
    }),
    e('return'),
    (t[Symbol.iterator] = function() {
      return this;
    }),
    t
  );
  function e(e, r) {
    t[e] = n[e]
      ? function(t) {
          return (o = !o)
            ? { value: __await(n[e](t)), done: e === 'return' }
            : r
            ? r(t)
            : t;
        }
      : r;
  }
}
function __asyncValues(u) {
  if (!Symbol.asyncIterator)
    throw new TypeError('Symbol.asyncIterator is not defined.');
  var t;

  var e = u[Symbol.asyncIterator];
  return e
    ? e.call(u)
    : ((u =
        typeof __values === 'function' ? __values(u) : u[Symbol.iterator]()),
      (t = {}),
      r('next'),
      r('throw'),
      r('return'),
      (t[Symbol.asyncIterator] = function() {
        return this;
      }),
      t);
  function r(c) {
    t[c] =
      u[c] &&
      function(a) {
        return new Promise(function(t, e) {
          var r, n, o, i;
          (a = u[c](a)),
            (r = t),
            (n = e),
            (o = a.done),
            (i = a.value),
            Promise.resolve(i).then(function(t) {
              r({ value: t, done: o });
            }, n);
        });
      };
  }
}
function __makeTemplateObject(t, e) {
  return (
    Object.defineProperty
      ? Object.defineProperty(t, 'raw', { value: e })
      : (t.raw = e),
    t
  );
}
function __importStar(t) {
  if (t && t.__esModule) return t;
  var e = {};
  if (t != null)
    for (var r in t) Object.hasOwnProperty.call(t, r) && (e[r] = t[r]);
  return (e.default = t), e;
}
function __importDefault(t) {
  return t && t.__esModule ? t : { default: t };
}
var _tslib = Object.freeze({
  __extends: __extends,
  get __assign() {
    return __assign;
  },
  __rest: __rest,
  __decorate: __decorate,
  __param: __param,
  __metadata: __metadata,
  __awaiter: __awaiter,
  __generator: __generator,
  __exportStar: __exportStar,
  __values: __values,
  __read: __read,
  __spread: __spread,
  __await: __await,
  __asyncGenerator: __asyncGenerator,
  __asyncDelegator: __asyncDelegator,
  __asyncValues: __asyncValues,
  __makeTemplateObject: __makeTemplateObject,
  __importStar: __importStar,
  __importDefault: __importDefault
});

var utils = createCommonjsModule(function(t, e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.compose = function o() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      return t.length === 0
        ? function(t) {
            return t;
          }
        : t.length !== 1 || Array.isArray(t[0])
        ? (t.length === 1 && Array.isArray(t[0]) && t.push(function() {}),
          t.reduce(function(r, n) {
            return function() {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              return (
                (r = Array.isArray(r) ? o.apply(void 0, r) : r),
                (n = Array.isArray(n) ? o.apply(void 0, n) : n),
                r(n.apply(void 0, t))
              );
            };
          }))
        : t[0];
    }),
    (e.error = function(t) {
      throw new Error('错误: :' + t);
    }),
    (e.log = function(t) {
      console.log('信息: ' + t);
    });
});
unwrapExports(utils);
var utils_1 = utils.compose;

var utils_2 = utils.error;

var utils_3 = utils.log;

var tslib_1 = getCjsExportFromNamespace(_tslib);

var src = createCommonjsModule(function(t, e) {
  Object.defineProperty(e, '__esModule', { value: !0 });
  var r = (function() {
    function a() {
      this.choices = [];
    }
    return (
      (a.prototype.add = function(t, e, r, n) {
        var o = { callback: r, condition: e, description: t };
        if (n && this.choices.length > 0)
          for (var i in ((o.extends = n), this.choices))
            this.choices[i] = a.traversalChoiceTree(this.choices[i], o);
        else this.choices.push(o);
        return this;
      }),
      (a.prototype.use = function() {
        var t = this.choices.slice(0).map(function(t) {
          return a.getRunProcess(t);
        });
        return utils.compose(t)(), this;
      }),
      (a.traversalChoiceTree = function(t, e) {
        var r = tslib_1.__assign({}, t);

        var n = e.extends;
        if (r.childrenCondition)
          if (r.description === n) r.childrenCondition.push(e);
          else
            for (var o in r.childrenCondition)
              r.childrenCondition[o] = a.traversalChoiceTree(
                r.childrenCondition[o],
                e
              );
        else r.description === n && (r.childrenCondition = [e]);
        return r;
      }),
      (a.getRunProcess = function(t, e) {
        e = e || [];
        var r = tslib_1.__assign({}, t);
        if (r.childrenCondition) {
          if (r.condition)
            for (var n in (e.unshift(r.callback), r.childrenCondition)) {
              var o = a.getRunProcess(r.childrenCondition[n]);
              e.unshift(o);
            }
        } else r.condition && e.unshift(r.callback);
        return e;
      }),
      (a.prototype.destroy = function() {
        this.choices = [];
      }),
      a
    );
  })();
  e.default = { Choice: r, utils: utils };
});

var index = unwrapExports(src);
module.exports = index;
