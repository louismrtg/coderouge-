function e0(n, t) {
  for (var s = 0; s < t.length; s++) {
    const i = t[s];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const a in i)
        if (a !== "default" && !(a in n)) {
          const u = Object.getOwnPropertyDescriptor(i, a);
          u &&
            Object.defineProperty(
              n,
              a,
              u.get ? u : { enumerable: !0, get: () => i[a] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(n, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) i(a);
  new MutationObserver((a) => {
    for (const u of a)
      if (u.type === "childList")
        for (const c of u.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && i(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(a) {
    const u = {};
    return (
      a.integrity && (u.integrity = a.integrity),
      a.referrerPolicy && (u.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : a.crossOrigin === "anonymous"
        ? (u.credentials = "omit")
        : (u.credentials = "same-origin"),
      u
    );
  }
  function i(a) {
    if (a.ep) return;
    a.ep = !0;
    const u = s(a);
    fetch(a.href, u);
  }
})();
function sm(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var Iu = { exports: {} },
  Pi = {},
  Du = { exports: {} },
  Pe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fh;
function t0() {
  if (Fh) return Pe;
  Fh = 1;
  var n = Symbol.for("react.element"),
    t = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    a = Symbol.for("react.profiler"),
    u = Symbol.for("react.provider"),
    c = Symbol.for("react.context"),
    f = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    x = Symbol.iterator;
  function S(P) {
    return P === null || typeof P != "object"
      ? null
      : ((P = (x && P[x]) || P["@@iterator"]),
        typeof P == "function" ? P : null);
  }
  var w = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    E = Object.assign,
    _ = {};
  function b(P, D, J) {
    (this.props = P),
      (this.context = D),
      (this.refs = _),
      (this.updater = J || w);
  }
  (b.prototype.isReactComponent = {}),
    (b.prototype.setState = function (P, D) {
      if (typeof P != "object" && typeof P != "function" && P != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, P, D, "setState");
    }),
    (b.prototype.forceUpdate = function (P) {
      this.updater.enqueueForceUpdate(this, P, "forceUpdate");
    });
  function T() {}
  T.prototype = b.prototype;
  function N(P, D, J) {
    (this.props = P),
      (this.context = D),
      (this.refs = _),
      (this.updater = J || w);
  }
  var A = (N.prototype = new T());
  (A.constructor = N), E(A, b.prototype), (A.isPureReactComponent = !0);
  var M = Array.isArray,
    B = Object.prototype.hasOwnProperty,
    U = { current: null },
    $ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function K(P, D, J) {
    var ee,
      ve = {},
      Se = null,
      le = null;
    if (D != null)
      for (ee in (D.ref !== void 0 && (le = D.ref),
      D.key !== void 0 && (Se = "" + D.key),
      D))
        B.call(D, ee) && !$.hasOwnProperty(ee) && (ve[ee] = D[ee]);
    var xe = arguments.length - 2;
    if (xe === 1) ve.children = J;
    else if (1 < xe) {
      for (var Te = Array(xe), Me = 0; Me < xe; Me++)
        Te[Me] = arguments[Me + 2];
      ve.children = Te;
    }
    if (P && P.defaultProps)
      for (ee in ((xe = P.defaultProps), xe))
        ve[ee] === void 0 && (ve[ee] = xe[ee]);
    return {
      $$typeof: n,
      type: P,
      key: Se,
      ref: le,
      props: ve,
      _owner: U.current,
    };
  }
  function te(P, D) {
    return {
      $$typeof: n,
      type: P.type,
      key: D,
      ref: P.ref,
      props: P.props,
      _owner: P._owner,
    };
  }
  function re(P) {
    return typeof P == "object" && P !== null && P.$$typeof === n;
  }
  function se(P) {
    var D = { "=": "=0", ":": "=2" };
    return (
      "$" +
      P.replace(/[=:]/g, function (J) {
        return D[J];
      })
    );
  }
  var X = /\/+/g;
  function ye(P, D) {
    return typeof P == "object" && P !== null && P.key != null
      ? se("" + P.key)
      : D.toString(36);
  }
  function V(P, D, J, ee, ve) {
    var Se = typeof P;
    (Se === "undefined" || Se === "boolean") && (P = null);
    var le = !1;
    if (P === null) le = !0;
    else
      switch (Se) {
        case "string":
        case "number":
          le = !0;
          break;
        case "object":
          switch (P.$$typeof) {
            case n:
            case t:
              le = !0;
          }
      }
    if (le)
      return (
        (le = P),
        (ve = ve(le)),
        (P = ee === "" ? "." + ye(le, 0) : ee),
        M(ve)
          ? ((J = ""),
            P != null && (J = P.replace(X, "$&/") + "/"),
            V(ve, D, J, "", function (Me) {
              return Me;
            }))
          : ve != null &&
            (re(ve) &&
              (ve = te(
                ve,
                J +
                  (!ve.key || (le && le.key === ve.key)
                    ? ""
                    : ("" + ve.key).replace(X, "$&/") + "/") +
                  P
              )),
            D.push(ve)),
        1
      );
    if (((le = 0), (ee = ee === "" ? "." : ee + ":"), M(P)))
      for (var xe = 0; xe < P.length; xe++) {
        Se = P[xe];
        var Te = ee + ye(Se, xe);
        le += V(Se, D, J, Te, ve);
      }
    else if (((Te = S(P)), typeof Te == "function"))
      for (P = Te.call(P), xe = 0; !(Se = P.next()).done; )
        (Se = Se.value), (Te = ee + ye(Se, xe++)), (le += V(Se, D, J, Te, ve));
    else if (Se === "object")
      throw (
        ((D = String(P)),
        Error(
          "Objects are not valid as a React child (found: " +
            (D === "[object Object]"
              ? "object with keys {" + Object.keys(P).join(", ") + "}"
              : D) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return le;
  }
  function ge(P, D, J) {
    if (P == null) return P;
    var ee = [],
      ve = 0;
    return (
      V(P, ee, "", "", function (Se) {
        return D.call(J, Se, ve++);
      }),
      ee
    );
  }
  function ae(P) {
    if (P._status === -1) {
      var D = P._result;
      (D = D()),
        D.then(
          function (J) {
            (P._status === 0 || P._status === -1) &&
              ((P._status = 1), (P._result = J));
          },
          function (J) {
            (P._status === 0 || P._status === -1) &&
              ((P._status = 2), (P._result = J));
          }
        ),
        P._status === -1 && ((P._status = 0), (P._result = D));
    }
    if (P._status === 1) return P._result.default;
    throw P._result;
  }
  var ne = { current: null },
    F = { transition: null },
    z = {
      ReactCurrentDispatcher: ne,
      ReactCurrentBatchConfig: F,
      ReactCurrentOwner: U,
    };
  function W() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (Pe.Children = {
      map: ge,
      forEach: function (P, D, J) {
        ge(
          P,
          function () {
            D.apply(this, arguments);
          },
          J
        );
      },
      count: function (P) {
        var D = 0;
        return (
          ge(P, function () {
            D++;
          }),
          D
        );
      },
      toArray: function (P) {
        return (
          ge(P, function (D) {
            return D;
          }) || []
        );
      },
      only: function (P) {
        if (!re(P))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return P;
      },
    }),
    (Pe.Component = b),
    (Pe.Fragment = s),
    (Pe.Profiler = a),
    (Pe.PureComponent = N),
    (Pe.StrictMode = i),
    (Pe.Suspense = p),
    (Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z),
    (Pe.act = W),
    (Pe.cloneElement = function (P, D, J) {
      if (P == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            P +
            "."
        );
      var ee = E({}, P.props),
        ve = P.key,
        Se = P.ref,
        le = P._owner;
      if (D != null) {
        if (
          (D.ref !== void 0 && ((Se = D.ref), (le = U.current)),
          D.key !== void 0 && (ve = "" + D.key),
          P.type && P.type.defaultProps)
        )
          var xe = P.type.defaultProps;
        for (Te in D)
          B.call(D, Te) &&
            !$.hasOwnProperty(Te) &&
            (ee[Te] = D[Te] === void 0 && xe !== void 0 ? xe[Te] : D[Te]);
      }
      var Te = arguments.length - 2;
      if (Te === 1) ee.children = J;
      else if (1 < Te) {
        xe = Array(Te);
        for (var Me = 0; Me < Te; Me++) xe[Me] = arguments[Me + 2];
        ee.children = xe;
      }
      return {
        $$typeof: n,
        type: P.type,
        key: ve,
        ref: Se,
        props: ee,
        _owner: le,
      };
    }),
    (Pe.createContext = function (P) {
      return (
        (P = {
          $$typeof: c,
          _currentValue: P,
          _currentValue2: P,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (P.Provider = { $$typeof: u, _context: P }),
        (P.Consumer = P)
      );
    }),
    (Pe.createElement = K),
    (Pe.createFactory = function (P) {
      var D = K.bind(null, P);
      return (D.type = P), D;
    }),
    (Pe.createRef = function () {
      return { current: null };
    }),
    (Pe.forwardRef = function (P) {
      return { $$typeof: f, render: P };
    }),
    (Pe.isValidElement = re),
    (Pe.lazy = function (P) {
      return { $$typeof: g, _payload: { _status: -1, _result: P }, _init: ae };
    }),
    (Pe.memo = function (P, D) {
      return { $$typeof: m, type: P, compare: D === void 0 ? null : D };
    }),
    (Pe.startTransition = function (P) {
      var D = F.transition;
      F.transition = {};
      try {
        P();
      } finally {
        F.transition = D;
      }
    }),
    (Pe.unstable_act = W),
    (Pe.useCallback = function (P, D) {
      return ne.current.useCallback(P, D);
    }),
    (Pe.useContext = function (P) {
      return ne.current.useContext(P);
    }),
    (Pe.useDebugValue = function () {}),
    (Pe.useDeferredValue = function (P) {
      return ne.current.useDeferredValue(P);
    }),
    (Pe.useEffect = function (P, D) {
      return ne.current.useEffect(P, D);
    }),
    (Pe.useId = function () {
      return ne.current.useId();
    }),
    (Pe.useImperativeHandle = function (P, D, J) {
      return ne.current.useImperativeHandle(P, D, J);
    }),
    (Pe.useInsertionEffect = function (P, D) {
      return ne.current.useInsertionEffect(P, D);
    }),
    (Pe.useLayoutEffect = function (P, D) {
      return ne.current.useLayoutEffect(P, D);
    }),
    (Pe.useMemo = function (P, D) {
      return ne.current.useMemo(P, D);
    }),
    (Pe.useReducer = function (P, D, J) {
      return ne.current.useReducer(P, D, J);
    }),
    (Pe.useRef = function (P) {
      return ne.current.useRef(P);
    }),
    (Pe.useState = function (P) {
      return ne.current.useState(P);
    }),
    (Pe.useSyncExternalStore = function (P, D, J) {
      return ne.current.useSyncExternalStore(P, D, J);
    }),
    (Pe.useTransition = function () {
      return ne.current.useTransition();
    }),
    (Pe.version = "18.3.1"),
    Pe
  );
}
var zh;
function Oc() {
  return zh || ((zh = 1), (Du.exports = t0())), Du.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bh;
function n0() {
  if (Bh) return Pi;
  Bh = 1;
  var n = Oc(),
    t = Symbol.for("react.element"),
    s = Symbol.for("react.fragment"),
    i = Object.prototype.hasOwnProperty,
    a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(f, p, m) {
    var g,
      x = {},
      S = null,
      w = null;
    m !== void 0 && (S = "" + m),
      p.key !== void 0 && (S = "" + p.key),
      p.ref !== void 0 && (w = p.ref);
    for (g in p) i.call(p, g) && !u.hasOwnProperty(g) && (x[g] = p[g]);
    if (f && f.defaultProps)
      for (g in ((p = f.defaultProps), p)) x[g] === void 0 && (x[g] = p[g]);
    return {
      $$typeof: t,
      type: f,
      key: S,
      ref: w,
      props: x,
      _owner: a.current,
    };
  }
  return (Pi.Fragment = s), (Pi.jsx = c), (Pi.jsxs = c), Pi;
}
var $h;
function r0() {
  return $h || (($h = 1), (Iu.exports = n0())), Iu.exports;
}
var v = r0(),
  k = Oc();
const G = sm(k),
  im = e0({ __proto__: null, default: G }, [k]),
  s0 = 1,
  i0 = 1e6;
let Fu = 0;
function o0() {
  return (Fu = (Fu + 1) % Number.MAX_SAFE_INTEGER), Fu.toString();
}
const zu = new Map(),
  Uh = (n) => {
    if (zu.has(n)) return;
    const t = setTimeout(() => {
      zu.delete(n), Di({ type: "REMOVE_TOAST", toastId: n });
    }, i0);
    zu.set(n, t);
  },
  a0 = (n, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...n, toasts: [t.toast, ...n.toasts].slice(0, s0) };
      case "UPDATE_TOAST":
        return {
          ...n,
          toasts: n.toasts.map((s) =>
            s.id === t.toast.id ? { ...s, ...t.toast } : s
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: s } = t;
        return (
          s
            ? Uh(s)
            : n.toasts.forEach((i) => {
                Uh(i.id);
              }),
          {
            ...n,
            toasts: n.toasts.map((i) =>
              i.id === s || s === void 0 ? { ...i, open: !1 } : i
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...n, toasts: [] }
          : { ...n, toasts: n.toasts.filter((s) => s.id !== t.toastId) };
    }
  },
  ya = [];
let va = { toasts: [] };
function Di(n) {
  (va = a0(va, n)),
    ya.forEach((t) => {
      t(va);
    });
}
function l0({ ...n }) {
  const t = o0(),
    s = (a) => Di({ type: "UPDATE_TOAST", toast: { ...a, id: t } }),
    i = () => Di({ type: "DISMISS_TOAST", toastId: t });
  return (
    Di({
      type: "ADD_TOAST",
      toast: {
        ...n,
        id: t,
        open: !0,
        onOpenChange: (a) => {
          a || i();
        },
      },
    }),
    { id: t, dismiss: i, update: s }
  );
}
function u0() {
  const [n, t] = k.useState(va);
  return (
    k.useEffect(
      () => (
        ya.push(t),
        () => {
          const s = ya.indexOf(t);
          s > -1 && ya.splice(s, 1);
        }
      ),
      [n]
    ),
    {
      ...n,
      toast: l0,
      dismiss: (s) => Di({ type: "DISMISS_TOAST", toastId: s }),
    }
  );
}
var Bu = { exports: {} },
  zt = {},
  $u = { exports: {} },
  Uu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vh;
function c0() {
  return (
    Vh ||
      ((Vh = 1),
      (function (n) {
        function t(F, z) {
          var W = F.length;
          F.push(z);
          e: for (; 0 < W; ) {
            var P = (W - 1) >>> 1,
              D = F[P];
            if (0 < a(D, z)) (F[P] = z), (F[W] = D), (W = P);
            else break e;
          }
        }
        function s(F) {
          return F.length === 0 ? null : F[0];
        }
        function i(F) {
          if (F.length === 0) return null;
          var z = F[0],
            W = F.pop();
          if (W !== z) {
            F[0] = W;
            e: for (var P = 0, D = F.length, J = D >>> 1; P < J; ) {
              var ee = 2 * (P + 1) - 1,
                ve = F[ee],
                Se = ee + 1,
                le = F[Se];
              if (0 > a(ve, W))
                Se < D && 0 > a(le, ve)
                  ? ((F[P] = le), (F[Se] = W), (P = Se))
                  : ((F[P] = ve), (F[ee] = W), (P = ee));
              else if (Se < D && 0 > a(le, W))
                (F[P] = le), (F[Se] = W), (P = Se);
              else break e;
            }
          }
          return z;
        }
        function a(F, z) {
          var W = F.sortIndex - z.sortIndex;
          return W !== 0 ? W : F.id - z.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var u = performance;
          n.unstable_now = function () {
            return u.now();
          };
        } else {
          var c = Date,
            f = c.now();
          n.unstable_now = function () {
            return c.now() - f;
          };
        }
        var p = [],
          m = [],
          g = 1,
          x = null,
          S = 3,
          w = !1,
          E = !1,
          _ = !1,
          b = typeof setTimeout == "function" ? setTimeout : null,
          T = typeof clearTimeout == "function" ? clearTimeout : null,
          N = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function A(F) {
          for (var z = s(m); z !== null; ) {
            if (z.callback === null) i(m);
            else if (z.startTime <= F)
              i(m), (z.sortIndex = z.expirationTime), t(p, z);
            else break;
            z = s(m);
          }
        }
        function M(F) {
          if (((_ = !1), A(F), !E))
            if (s(p) !== null) (E = !0), ae(B);
            else {
              var z = s(m);
              z !== null && ne(M, z.startTime - F);
            }
        }
        function B(F, z) {
          (E = !1), _ && ((_ = !1), T(K), (K = -1)), (w = !0);
          var W = S;
          try {
            for (
              A(z), x = s(p);
              x !== null && (!(x.expirationTime > z) || (F && !se()));

            ) {
              var P = x.callback;
              if (typeof P == "function") {
                (x.callback = null), (S = x.priorityLevel);
                var D = P(x.expirationTime <= z);
                (z = n.unstable_now()),
                  typeof D == "function"
                    ? (x.callback = D)
                    : x === s(p) && i(p),
                  A(z);
              } else i(p);
              x = s(p);
            }
            if (x !== null) var J = !0;
            else {
              var ee = s(m);
              ee !== null && ne(M, ee.startTime - z), (J = !1);
            }
            return J;
          } finally {
            (x = null), (S = W), (w = !1);
          }
        }
        var U = !1,
          $ = null,
          K = -1,
          te = 5,
          re = -1;
        function se() {
          return !(n.unstable_now() - re < te);
        }
        function X() {
          if ($ !== null) {
            var F = n.unstable_now();
            re = F;
            var z = !0;
            try {
              z = $(!0, F);
            } finally {
              z ? ye() : ((U = !1), ($ = null));
            }
          } else U = !1;
        }
        var ye;
        if (typeof N == "function")
          ye = function () {
            N(X);
          };
        else if (typeof MessageChannel < "u") {
          var V = new MessageChannel(),
            ge = V.port2;
          (V.port1.onmessage = X),
            (ye = function () {
              ge.postMessage(null);
            });
        } else
          ye = function () {
            b(X, 0);
          };
        function ae(F) {
          ($ = F), U || ((U = !0), ye());
        }
        function ne(F, z) {
          K = b(function () {
            F(n.unstable_now());
          }, z);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (F) {
            F.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            E || w || ((E = !0), ae(B));
          }),
          (n.unstable_forceFrameRate = function (F) {
            0 > F || 125 < F
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (te = 0 < F ? Math.floor(1e3 / F) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return s(p);
          }),
          (n.unstable_next = function (F) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var z = 3;
                break;
              default:
                z = S;
            }
            var W = S;
            S = z;
            try {
              return F();
            } finally {
              S = W;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (F, z) {
            switch (F) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                F = 3;
            }
            var W = S;
            S = F;
            try {
              return z();
            } finally {
              S = W;
            }
          }),
          (n.unstable_scheduleCallback = function (F, z, W) {
            var P = n.unstable_now();
            switch (
              (typeof W == "object" && W !== null
                ? ((W = W.delay),
                  (W = typeof W == "number" && 0 < W ? P + W : P))
                : (W = P),
              F)
            ) {
              case 1:
                var D = -1;
                break;
              case 2:
                D = 250;
                break;
              case 5:
                D = 1073741823;
                break;
              case 4:
                D = 1e4;
                break;
              default:
                D = 5e3;
            }
            return (
              (D = W + D),
              (F = {
                id: g++,
                callback: z,
                priorityLevel: F,
                startTime: W,
                expirationTime: D,
                sortIndex: -1,
              }),
              W > P
                ? ((F.sortIndex = W),
                  t(m, F),
                  s(p) === null &&
                    F === s(m) &&
                    (_ ? (T(K), (K = -1)) : (_ = !0), ne(M, W - P)))
                : ((F.sortIndex = D), t(p, F), E || w || ((E = !0), ae(B))),
              F
            );
          }),
          (n.unstable_shouldYield = se),
          (n.unstable_wrapCallback = function (F) {
            var z = S;
            return function () {
              var W = S;
              S = z;
              try {
                return F.apply(this, arguments);
              } finally {
                S = W;
              }
            };
          });
      })(Uu)),
    Uu
  );
}
var Wh;
function d0() {
  return Wh || ((Wh = 1), ($u.exports = c0())), $u.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hh;
function f0() {
  if (Hh) return zt;
  Hh = 1;
  var n = Oc(),
    t = d0();
  function s(e) {
    for (
      var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        o = 1;
      o < arguments.length;
      o++
    )
      r += "&args[]=" + encodeURIComponent(arguments[o]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      r +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var i = new Set(),
    a = {};
  function u(e, r) {
    c(e, r), c(e + "Capture", r);
  }
  function c(e, r) {
    for (a[e] = r, e = 0; e < r.length; e++) i.add(r[e]);
  }
  var f = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    p = Object.prototype.hasOwnProperty,
    m =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    g = {},
    x = {};
  function S(e) {
    return p.call(x, e)
      ? !0
      : p.call(g, e)
      ? !1
      : m.test(e)
      ? (x[e] = !0)
      : ((g[e] = !0), !1);
  }
  function w(e, r, o, l) {
    if (o !== null && o.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return l
          ? !1
          : o !== null
          ? !o.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function E(e, r, o, l) {
    if (r === null || typeof r > "u" || w(e, r, o, l)) return !0;
    if (l) return !1;
    if (o !== null)
      switch (o.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function _(e, r, o, l, d, h, y) {
    (this.acceptsBooleans = r === 2 || r === 3 || r === 4),
      (this.attributeName = l),
      (this.attributeNamespace = d),
      (this.mustUseProperty = o),
      (this.propertyName = e),
      (this.type = r),
      (this.sanitizeURL = h),
      (this.removeEmptyString = y);
  }
  var b = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      b[e] = new _(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var r = e[0];
      b[r] = new _(r, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      b[e] = new _(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      b[e] = new _(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        b[e] = new _(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      b[e] = new _(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      b[e] = new _(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      b[e] = new _(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      b[e] = new _(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var T = /[\-:]([a-z])/g;
  function N(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var r = e.replace(T, N);
      b[r] = new _(r, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var r = e.replace(T, N);
        b[r] = new _(r, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var r = e.replace(T, N);
      b[r] = new _(r, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      b[e] = new _(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (b.xlinkHref = new _(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      b[e] = new _(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function A(e, r, o, l) {
    var d = b.hasOwnProperty(r) ? b[r] : null;
    (d !== null
      ? d.type !== 0
      : l ||
        !(2 < r.length) ||
        (r[0] !== "o" && r[0] !== "O") ||
        (r[1] !== "n" && r[1] !== "N")) &&
      (E(r, o, d, l) && (o = null),
      l || d === null
        ? S(r) &&
          (o === null ? e.removeAttribute(r) : e.setAttribute(r, "" + o))
        : d.mustUseProperty
        ? (e[d.propertyName] = o === null ? (d.type === 3 ? !1 : "") : o)
        : ((r = d.attributeName),
          (l = d.attributeNamespace),
          o === null
            ? e.removeAttribute(r)
            : ((d = d.type),
              (o = d === 3 || (d === 4 && o === !0) ? "" : "" + o),
              l ? e.setAttributeNS(l, r, o) : e.setAttribute(r, o))));
  }
  var M = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    B = Symbol.for("react.element"),
    U = Symbol.for("react.portal"),
    $ = Symbol.for("react.fragment"),
    K = Symbol.for("react.strict_mode"),
    te = Symbol.for("react.profiler"),
    re = Symbol.for("react.provider"),
    se = Symbol.for("react.context"),
    X = Symbol.for("react.forward_ref"),
    ye = Symbol.for("react.suspense"),
    V = Symbol.for("react.suspense_list"),
    ge = Symbol.for("react.memo"),
    ae = Symbol.for("react.lazy"),
    ne = Symbol.for("react.offscreen"),
    F = Symbol.iterator;
  function z(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (F && e[F]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var W = Object.assign,
    P;
  function D(e) {
    if (P === void 0)
      try {
        throw Error();
      } catch (o) {
        var r = o.stack.trim().match(/\n( *(at )?)/);
        P = (r && r[1]) || "";
      }
    return (
      `
` +
      P +
      e
    );
  }
  var J = !1;
  function ee(e, r) {
    if (!e || J) return "";
    J = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (
          ((r = function () {
            throw Error();
          }),
          Object.defineProperty(r.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(r, []);
          } catch (I) {
            var l = I;
          }
          Reflect.construct(e, [], r);
        } else {
          try {
            r.call();
          } catch (I) {
            l = I;
          }
          e.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (I) {
          l = I;
        }
        e();
      }
    } catch (I) {
      if (I && l && typeof I.stack == "string") {
        for (
          var d = I.stack.split(`
`),
            h = l.stack.split(`
`),
            y = d.length - 1,
            C = h.length - 1;
          1 <= y && 0 <= C && d[y] !== h[C];

        )
          C--;
        for (; 1 <= y && 0 <= C; y--, C--)
          if (d[y] !== h[C]) {
            if (y !== 1 || C !== 1)
              do
                if ((y--, C--, 0 > C || d[y] !== h[C])) {
                  var R =
                    `
` + d[y].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      R.includes("<anonymous>") &&
                      (R = R.replace("<anonymous>", e.displayName)),
                    R
                  );
                }
              while (1 <= y && 0 <= C);
            break;
          }
      }
    } finally {
      (J = !1), (Error.prepareStackTrace = o);
    }
    return (e = e ? e.displayName || e.name : "") ? D(e) : "";
  }
  function ve(e) {
    switch (e.tag) {
      case 5:
        return D(e.type);
      case 16:
        return D("Lazy");
      case 13:
        return D("Suspense");
      case 19:
        return D("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = ee(e.type, !1)), e;
      case 11:
        return (e = ee(e.type.render, !1)), e;
      case 1:
        return (e = ee(e.type, !0)), e;
      default:
        return "";
    }
  }
  function Se(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case $:
        return "Fragment";
      case U:
        return "Portal";
      case te:
        return "Profiler";
      case K:
        return "StrictMode";
      case ye:
        return "Suspense";
      case V:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case se:
          return (e.displayName || "Context") + ".Consumer";
        case re:
          return (e._context.displayName || "Context") + ".Provider";
        case X:
          var r = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = r.displayName || r.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ge:
          return (
            (r = e.displayName || null), r !== null ? r : Se(e.type) || "Memo"
          );
        case ae:
          (r = e._payload), (e = e._init);
          try {
            return Se(e(r));
          } catch {}
      }
    return null;
  }
  function le(e) {
    var r = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = r.render),
          (e = e.displayName || e.name || ""),
          r.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Se(r);
      case 8:
        return r === K ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function xe(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Te(e) {
    var r = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (r === "checkbox" || r === "radio")
    );
  }
  function Me(e) {
    var r = Te(e) ? "checked" : "value",
      o = Object.getOwnPropertyDescriptor(e.constructor.prototype, r),
      l = "" + e[r];
    if (
      !e.hasOwnProperty(r) &&
      typeof o < "u" &&
      typeof o.get == "function" &&
      typeof o.set == "function"
    ) {
      var d = o.get,
        h = o.set;
      return (
        Object.defineProperty(e, r, {
          configurable: !0,
          get: function () {
            return d.call(this);
          },
          set: function (y) {
            (l = "" + y), h.call(this, y);
          },
        }),
        Object.defineProperty(e, r, { enumerable: o.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (y) {
            l = "" + y;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[r];
          },
        }
      );
    }
  }
  function Ae(e) {
    e._valueTracker || (e._valueTracker = Me(e));
  }
  function ce(e) {
    if (!e) return !1;
    var r = e._valueTracker;
    if (!r) return !0;
    var o = r.getValue(),
      l = "";
    return (
      e && (l = Te(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== o ? (r.setValue(e), !0) : !1
    );
  }
  function Re(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ue(e, r) {
    var o = r.checked;
    return W({}, r, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: o ?? e._wrapperState.initialChecked,
    });
  }
  function tt(e, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue,
      l = r.checked != null ? r.checked : r.defaultChecked;
    (o = xe(r.value != null ? r.value : o)),
      (e._wrapperState = {
        initialChecked: l,
        initialValue: o,
        controlled:
          r.type === "checkbox" || r.type === "radio"
            ? r.checked != null
            : r.value != null,
      });
  }
  function yt(e, r) {
    (r = r.checked), r != null && A(e, "checked", r, !1);
  }
  function St(e, r) {
    yt(e, r);
    var o = xe(r.value),
      l = r.type;
    if (o != null)
      l === "number"
        ? ((o === 0 && e.value === "") || e.value != o) && (e.value = "" + o)
        : e.value !== "" + o && (e.value = "" + o);
    else if (l === "submit" || l === "reset") {
      e.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value")
      ? Rt(e, r.type, o)
      : r.hasOwnProperty("defaultValue") && Rt(e, r.type, xe(r.defaultValue)),
      r.checked == null &&
        r.defaultChecked != null &&
        (e.defaultChecked = !!r.defaultChecked);
  }
  function Nt(e, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var l = r.type;
      if (
        !(
          (l !== "submit" && l !== "reset") ||
          (r.value !== void 0 && r.value !== null)
        )
      )
        return;
      (r = "" + e._wrapperState.initialValue),
        o || r === e.value || (e.value = r),
        (e.defaultValue = r);
    }
    (o = e.name),
      o !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      o !== "" && (e.name = o);
  }
  function Rt(e, r, o) {
    (r !== "number" || Re(e.ownerDocument) !== e) &&
      (o == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + o && (e.defaultValue = "" + o));
  }
  var vt = Array.isArray;
  function lt(e, r, o, l) {
    if (((e = e.options), r)) {
      r = {};
      for (var d = 0; d < o.length; d++) r["$" + o[d]] = !0;
      for (o = 0; o < e.length; o++)
        (d = r.hasOwnProperty("$" + e[o].value)),
          e[o].selected !== d && (e[o].selected = d),
          d && l && (e[o].defaultSelected = !0);
    } else {
      for (o = "" + xe(o), r = null, d = 0; d < e.length; d++) {
        if (e[d].value === o) {
          (e[d].selected = !0), l && (e[d].defaultSelected = !0);
          return;
        }
        r !== null || e[d].disabled || (r = e[d]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Nn(e, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(s(91));
    return W({}, r, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Pt(e, r) {
    var o = r.value;
    if (o == null) {
      if (((o = r.children), (r = r.defaultValue), o != null)) {
        if (r != null) throw Error(s(92));
        if (vt(o)) {
          if (1 < o.length) throw Error(s(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), (o = r);
    }
    e._wrapperState = { initialValue: xe(o) };
  }
  function Br(e, r) {
    var o = xe(r.value),
      l = xe(r.defaultValue);
    o != null &&
      ((o = "" + o),
      o !== e.value && (e.value = o),
      r.defaultValue == null && e.defaultValue !== o && (e.defaultValue = o)),
      l != null && (e.defaultValue = "" + l);
  }
  function $r(e) {
    var r = e.textContent;
    r === e._wrapperState.initialValue &&
      r !== "" &&
      r !== null &&
      (e.value = r);
  }
  function ft(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Vt(e, r) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? ft(r)
      : e === "http://www.w3.org/2000/svg" && r === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var nr,
    rr = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (r, o, l, d) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(r, o, l, d);
            });
          }
        : e;
    })(function (e, r) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = r;
      else {
        for (
          nr = nr || document.createElement("div"),
            nr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>",
            r = nr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; r.firstChild; ) e.appendChild(r.firstChild);
      }
    });
  function ht(e, r) {
    if (r) {
      var o = e.firstChild;
      if (o && o === e.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    e.textContent = r;
  }
  var ln = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    sr = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ln).forEach(function (e) {
    sr.forEach(function (r) {
      (r = r + e.charAt(0).toUpperCase() + e.substring(1)), (ln[r] = ln[e]);
    });
  });
  function un(e, r, o) {
    return r == null || typeof r == "boolean" || r === ""
      ? ""
      : o || typeof r != "number" || r === 0 || (ln.hasOwnProperty(e) && ln[e])
      ? ("" + r).trim()
      : r + "px";
  }
  function cn(e, r) {
    e = e.style;
    for (var o in r)
      if (r.hasOwnProperty(o)) {
        var l = o.indexOf("--") === 0,
          d = un(o, r[o], l);
        o === "float" && (o = "cssFloat"), l ? e.setProperty(o, d) : (e[o] = d);
      }
  }
  var us = W(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Xt(e, r) {
    if (r) {
      if (us[e] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(s(137, e));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(s(60));
        if (
          typeof r.dangerouslySetInnerHTML != "object" ||
          !("__html" in r.dangerouslySetInnerHTML)
        )
          throw Error(s(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(s(62));
    }
  }
  function Ur(e, r) {
    if (e.indexOf("-") === -1) return typeof r.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Vr = null;
  function Un(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ir = null,
    dn = null,
    Wt = null;
  function Ot(e) {
    if ((e = mi(e))) {
      if (typeof ir != "function") throw Error(s(280));
      var r = e.stateNode;
      r && ((r = ko(r)), ir(e.stateNode, e.type, r));
    }
  }
  function cs(e) {
    dn ? (Wt ? Wt.push(e) : (Wt = [e])) : (dn = e);
  }
  function be() {
    if (dn) {
      var e = dn,
        r = Wt;
      if (((Wt = dn = null), Ot(e), r)) for (e = 0; e < r.length; e++) Ot(r[e]);
    }
  }
  function Le(e, r) {
    return e(r);
  }
  function Be() {}
  var kt = !1;
  function At(e, r, o) {
    if (kt) return e(r, o);
    kt = !0;
    try {
      return Le(e, r, o);
    } finally {
      (kt = !1), (dn !== null || Wt !== null) && (Be(), be());
    }
  }
  function jt(e, r) {
    var o = e.stateNode;
    if (o === null) return null;
    var l = ko(o);
    if (l === null) return null;
    o = l[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (o && typeof o != "function") throw Error(s(231, r, typeof o));
    return o;
  }
  var fn = !1;
  if (f)
    try {
      var pt = {};
      Object.defineProperty(pt, "passive", {
        get: function () {
          fn = !0;
        },
      }),
        window.addEventListener("test", pt, pt),
        window.removeEventListener("test", pt, pt);
    } catch {
      fn = !1;
    }
  function Rn(e, r, o, l, d, h, y, C, R) {
    var I = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, I);
    } catch (q) {
      this.onError(q);
    }
  }
  var Ys = !1,
    to = null,
    no = !1,
    tl = null,
    ay = {
      onError: function (e) {
        (Ys = !0), (to = e);
      },
    };
  function ly(e, r, o, l, d, h, y, C, R) {
    (Ys = !1), (to = null), Rn.apply(ay, arguments);
  }
  function uy(e, r, o, l, d, h, y, C, R) {
    if ((ly.apply(this, arguments), Ys)) {
      if (Ys) {
        var I = to;
        (Ys = !1), (to = null);
      } else throw Error(s(198));
      no || ((no = !0), (tl = I));
    }
  }
  function Wr(e) {
    var r = e,
      o = e;
    if (e.alternate) for (; r.return; ) r = r.return;
    else {
      e = r;
      do (r = e), (r.flags & 4098) !== 0 && (o = r.return), (e = r.return);
      while (e);
    }
    return r.tag === 3 ? o : null;
  }
  function od(e) {
    if (e.tag === 13) {
      var r = e.memoizedState;
      if (
        (r === null && ((e = e.alternate), e !== null && (r = e.memoizedState)),
        r !== null)
      )
        return r.dehydrated;
    }
    return null;
  }
  function ad(e) {
    if (Wr(e) !== e) throw Error(s(188));
  }
  function cy(e) {
    var r = e.alternate;
    if (!r) {
      if (((r = Wr(e)), r === null)) throw Error(s(188));
      return r !== e ? null : e;
    }
    for (var o = e, l = r; ; ) {
      var d = o.return;
      if (d === null) break;
      var h = d.alternate;
      if (h === null) {
        if (((l = d.return), l !== null)) {
          o = l;
          continue;
        }
        break;
      }
      if (d.child === h.child) {
        for (h = d.child; h; ) {
          if (h === o) return ad(d), e;
          if (h === l) return ad(d), r;
          h = h.sibling;
        }
        throw Error(s(188));
      }
      if (o.return !== l.return) (o = d), (l = h);
      else {
        for (var y = !1, C = d.child; C; ) {
          if (C === o) {
            (y = !0), (o = d), (l = h);
            break;
          }
          if (C === l) {
            (y = !0), (l = d), (o = h);
            break;
          }
          C = C.sibling;
        }
        if (!y) {
          for (C = h.child; C; ) {
            if (C === o) {
              (y = !0), (o = h), (l = d);
              break;
            }
            if (C === l) {
              (y = !0), (l = h), (o = d);
              break;
            }
            C = C.sibling;
          }
          if (!y) throw Error(s(189));
        }
      }
      if (o.alternate !== l) throw Error(s(190));
    }
    if (o.tag !== 3) throw Error(s(188));
    return o.stateNode.current === o ? e : r;
  }
  function ld(e) {
    return (e = cy(e)), e !== null ? ud(e) : null;
  }
  function ud(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var r = ud(e);
      if (r !== null) return r;
      e = e.sibling;
    }
    return null;
  }
  var cd = t.unstable_scheduleCallback,
    dd = t.unstable_cancelCallback,
    dy = t.unstable_shouldYield,
    fy = t.unstable_requestPaint,
    Je = t.unstable_now,
    hy = t.unstable_getCurrentPriorityLevel,
    nl = t.unstable_ImmediatePriority,
    fd = t.unstable_UserBlockingPriority,
    ro = t.unstable_NormalPriority,
    py = t.unstable_LowPriority,
    hd = t.unstable_IdlePriority,
    so = null,
    Pn = null;
  function my(e) {
    if (Pn && typeof Pn.onCommitFiberRoot == "function")
      try {
        Pn.onCommitFiberRoot(so, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var hn = Math.clz32 ? Math.clz32 : vy,
    gy = Math.log,
    yy = Math.LN2;
  function vy(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((gy(e) / yy) | 0)) | 0;
  }
  var io = 64,
    oo = 4194304;
  function Gs(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function ao(e, r) {
    var o = e.pendingLanes;
    if (o === 0) return 0;
    var l = 0,
      d = e.suspendedLanes,
      h = e.pingedLanes,
      y = o & 268435455;
    if (y !== 0) {
      var C = y & ~d;
      C !== 0 ? (l = Gs(C)) : ((h &= y), h !== 0 && (l = Gs(h)));
    } else (y = o & ~d), y !== 0 ? (l = Gs(y)) : h !== 0 && (l = Gs(h));
    if (l === 0) return 0;
    if (
      r !== 0 &&
      r !== l &&
      (r & d) === 0 &&
      ((d = l & -l), (h = r & -r), d >= h || (d === 16 && (h & 4194240) !== 0))
    )
      return r;
    if (((l & 4) !== 0 && (l |= o & 16), (r = e.entangledLanes), r !== 0))
      for (e = e.entanglements, r &= l; 0 < r; )
        (o = 31 - hn(r)), (d = 1 << o), (l |= e[o]), (r &= ~d);
    return l;
  }
  function xy(e, r) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function wy(e, r) {
    for (
      var o = e.suspendedLanes,
        l = e.pingedLanes,
        d = e.expirationTimes,
        h = e.pendingLanes;
      0 < h;

    ) {
      var y = 31 - hn(h),
        C = 1 << y,
        R = d[y];
      R === -1
        ? ((C & o) === 0 || (C & l) !== 0) && (d[y] = xy(C, r))
        : R <= r && (e.expiredLanes |= C),
        (h &= ~C);
    }
  }
  function rl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function pd() {
    var e = io;
    return (io <<= 1), (io & 4194240) === 0 && (io = 64), e;
  }
  function sl(e) {
    for (var r = [], o = 0; 31 > o; o++) r.push(e);
    return r;
  }
  function Xs(e, r, o) {
    (e.pendingLanes |= r),
      r !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (r = 31 - hn(r)),
      (e[r] = o);
  }
  function _y(e, r) {
    var o = e.pendingLanes & ~r;
    (e.pendingLanes = r),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= r),
      (e.mutableReadLanes &= r),
      (e.entangledLanes &= r),
      (r = e.entanglements);
    var l = e.eventTimes;
    for (e = e.expirationTimes; 0 < o; ) {
      var d = 31 - hn(o),
        h = 1 << d;
      (r[d] = 0), (l[d] = -1), (e[d] = -1), (o &= ~h);
    }
  }
  function il(e, r) {
    var o = (e.entangledLanes |= r);
    for (e = e.entanglements; o; ) {
      var l = 31 - hn(o),
        d = 1 << l;
      (d & r) | (e[l] & r) && (e[l] |= r), (o &= ~d);
    }
  }
  var $e = 0;
  function md(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var gd,
    ol,
    yd,
    vd,
    xd,
    al = !1,
    lo = [],
    or = null,
    ar = null,
    lr = null,
    Js = new Map(),
    ei = new Map(),
    ur = [],
    by =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function wd(e, r) {
    switch (e) {
      case "focusin":
      case "focusout":
        or = null;
        break;
      case "dragenter":
      case "dragleave":
        ar = null;
        break;
      case "mouseover":
      case "mouseout":
        lr = null;
        break;
      case "pointerover":
      case "pointerout":
        Js.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ei.delete(r.pointerId);
    }
  }
  function ti(e, r, o, l, d, h) {
    return e === null || e.nativeEvent !== h
      ? ((e = {
          blockedOn: r,
          domEventName: o,
          eventSystemFlags: l,
          nativeEvent: h,
          targetContainers: [d],
        }),
        r !== null && ((r = mi(r)), r !== null && ol(r)),
        e)
      : ((e.eventSystemFlags |= l),
        (r = e.targetContainers),
        d !== null && r.indexOf(d) === -1 && r.push(d),
        e);
  }
  function Sy(e, r, o, l, d) {
    switch (r) {
      case "focusin":
        return (or = ti(or, e, r, o, l, d)), !0;
      case "dragenter":
        return (ar = ti(ar, e, r, o, l, d)), !0;
      case "mouseover":
        return (lr = ti(lr, e, r, o, l, d)), !0;
      case "pointerover":
        var h = d.pointerId;
        return Js.set(h, ti(Js.get(h) || null, e, r, o, l, d)), !0;
      case "gotpointercapture":
        return (
          (h = d.pointerId), ei.set(h, ti(ei.get(h) || null, e, r, o, l, d)), !0
        );
    }
    return !1;
  }
  function _d(e) {
    var r = Hr(e.target);
    if (r !== null) {
      var o = Wr(r);
      if (o !== null) {
        if (((r = o.tag), r === 13)) {
          if (((r = od(o)), r !== null)) {
            (e.blockedOn = r),
              xd(e.priority, function () {
                yd(o);
              });
            return;
          }
        } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function uo(e) {
    if (e.blockedOn !== null) return !1;
    for (var r = e.targetContainers; 0 < r.length; ) {
      var o = ul(e.domEventName, e.eventSystemFlags, r[0], e.nativeEvent);
      if (o === null) {
        o = e.nativeEvent;
        var l = new o.constructor(o.type, o);
        (Vr = l), o.target.dispatchEvent(l), (Vr = null);
      } else return (r = mi(o)), r !== null && ol(r), (e.blockedOn = o), !1;
      r.shift();
    }
    return !0;
  }
  function bd(e, r, o) {
    uo(e) && o.delete(r);
  }
  function ky() {
    (al = !1),
      or !== null && uo(or) && (or = null),
      ar !== null && uo(ar) && (ar = null),
      lr !== null && uo(lr) && (lr = null),
      Js.forEach(bd),
      ei.forEach(bd);
  }
  function ni(e, r) {
    e.blockedOn === r &&
      ((e.blockedOn = null),
      al ||
        ((al = !0),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, ky)));
  }
  function ri(e) {
    function r(d) {
      return ni(d, e);
    }
    if (0 < lo.length) {
      ni(lo[0], e);
      for (var o = 1; o < lo.length; o++) {
        var l = lo[o];
        l.blockedOn === e && (l.blockedOn = null);
      }
    }
    for (
      or !== null && ni(or, e),
        ar !== null && ni(ar, e),
        lr !== null && ni(lr, e),
        Js.forEach(r),
        ei.forEach(r),
        o = 0;
      o < ur.length;
      o++
    )
      (l = ur[o]), l.blockedOn === e && (l.blockedOn = null);
    for (; 0 < ur.length && ((o = ur[0]), o.blockedOn === null); )
      _d(o), o.blockedOn === null && ur.shift();
  }
  var ds = M.ReactCurrentBatchConfig,
    co = !0;
  function Ey(e, r, o, l) {
    var d = $e,
      h = ds.transition;
    ds.transition = null;
    try {
      ($e = 1), ll(e, r, o, l);
    } finally {
      ($e = d), (ds.transition = h);
    }
  }
  function Cy(e, r, o, l) {
    var d = $e,
      h = ds.transition;
    ds.transition = null;
    try {
      ($e = 4), ll(e, r, o, l);
    } finally {
      ($e = d), (ds.transition = h);
    }
  }
  function ll(e, r, o, l) {
    if (co) {
      var d = ul(e, r, o, l);
      if (d === null) Cl(e, r, l, fo, o), wd(e, l);
      else if (Sy(d, e, r, o, l)) l.stopPropagation();
      else if ((wd(e, l), r & 4 && -1 < by.indexOf(e))) {
        for (; d !== null; ) {
          var h = mi(d);
          if (
            (h !== null && gd(h),
            (h = ul(e, r, o, l)),
            h === null && Cl(e, r, l, fo, o),
            h === d)
          )
            break;
          d = h;
        }
        d !== null && l.stopPropagation();
      } else Cl(e, r, l, null, o);
    }
  }
  var fo = null;
  function ul(e, r, o, l) {
    if (((fo = null), (e = Un(l)), (e = Hr(e)), e !== null))
      if (((r = Wr(e)), r === null)) e = null;
      else if (((o = r.tag), o === 13)) {
        if (((e = od(r)), e !== null)) return e;
        e = null;
      } else if (o === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        e = null;
      } else r !== e && (e = null);
    return (fo = e), null;
  }
  function Sd(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (hy()) {
          case nl:
            return 1;
          case fd:
            return 4;
          case ro:
          case py:
            return 16;
          case hd:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var cr = null,
    cl = null,
    ho = null;
  function kd() {
    if (ho) return ho;
    var e,
      r = cl,
      o = r.length,
      l,
      d = "value" in cr ? cr.value : cr.textContent,
      h = d.length;
    for (e = 0; e < o && r[e] === d[e]; e++);
    var y = o - e;
    for (l = 1; l <= y && r[o - l] === d[h - l]; l++);
    return (ho = d.slice(e, 1 < l ? 1 - l : void 0));
  }
  function po(e) {
    var r = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && r === 13 && (e = 13))
        : (e = r),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function mo() {
    return !0;
  }
  function Ed() {
    return !1;
  }
  function Ht(e) {
    function r(o, l, d, h, y) {
      (this._reactName = o),
        (this._targetInst = d),
        (this.type = l),
        (this.nativeEvent = h),
        (this.target = y),
        (this.currentTarget = null);
      for (var C in e)
        e.hasOwnProperty(C) && ((o = e[C]), (this[C] = o ? o(h) : h[C]));
      return (
        (this.isDefaultPrevented = (
          h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1
        )
          ? mo
          : Ed),
        (this.isPropagationStopped = Ed),
        this
      );
    }
    return (
      W(r.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var o = this.nativeEvent;
          o &&
            (o.preventDefault
              ? o.preventDefault()
              : typeof o.returnValue != "unknown" && (o.returnValue = !1),
            (this.isDefaultPrevented = mo));
        },
        stopPropagation: function () {
          var o = this.nativeEvent;
          o &&
            (o.stopPropagation
              ? o.stopPropagation()
              : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0),
            (this.isPropagationStopped = mo));
        },
        persist: function () {},
        isPersistent: mo,
      }),
      r
    );
  }
  var fs = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    dl = Ht(fs),
    si = W({}, fs, { view: 0, detail: 0 }),
    Ty = Ht(si),
    fl,
    hl,
    ii,
    go = W({}, si, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ml,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== ii &&
              (ii && e.type === "mousemove"
                ? ((fl = e.screenX - ii.screenX), (hl = e.screenY - ii.screenY))
                : (hl = fl = 0),
              (ii = e)),
            fl);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : hl;
      },
    }),
    Cd = Ht(go),
    Ny = W({}, go, { dataTransfer: 0 }),
    Ry = Ht(Ny),
    Py = W({}, si, { relatedTarget: 0 }),
    pl = Ht(Py),
    Oy = W({}, fs, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ay = Ht(Oy),
    jy = W({}, fs, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Ly = Ht(jy),
    My = W({}, fs, { data: 0 }),
    Td = Ht(My),
    Iy = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Dy = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Fy = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function zy(e) {
    var r = this.nativeEvent;
    return r.getModifierState
      ? r.getModifierState(e)
      : (e = Fy[e])
      ? !!r[e]
      : !1;
  }
  function ml() {
    return zy;
  }
  var By = W({}, si, {
      key: function (e) {
        if (e.key) {
          var r = Iy[e.key] || e.key;
          if (r !== "Unidentified") return r;
        }
        return e.type === "keypress"
          ? ((e = po(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Dy[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ml,
      charCode: function (e) {
        return e.type === "keypress" ? po(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? po(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    $y = Ht(By),
    Uy = W({}, go, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Nd = Ht(Uy),
    Vy = W({}, si, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ml,
    }),
    Wy = Ht(Vy),
    Hy = W({}, fs, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    qy = Ht(Hy),
    Qy = W({}, go, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Zy = Ht(Qy),
    Ky = [9, 13, 27, 32],
    gl = f && "CompositionEvent" in window,
    oi = null;
  f && "documentMode" in document && (oi = document.documentMode);
  var Yy = f && "TextEvent" in window && !oi,
    Rd = f && (!gl || (oi && 8 < oi && 11 >= oi)),
    Pd = " ",
    Od = !1;
  function Ad(e, r) {
    switch (e) {
      case "keyup":
        return Ky.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function jd(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var hs = !1;
  function Gy(e, r) {
    switch (e) {
      case "compositionend":
        return jd(r);
      case "keypress":
        return r.which !== 32 ? null : ((Od = !0), Pd);
      case "textInput":
        return (e = r.data), e === Pd && Od ? null : e;
      default:
        return null;
    }
  }
  function Xy(e, r) {
    if (hs)
      return e === "compositionend" || (!gl && Ad(e, r))
        ? ((e = kd()), (ho = cl = cr = null), (hs = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || (r.ctrlKey && r.altKey)) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Rd && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Jy = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Ld(e) {
    var r = e && e.nodeName && e.nodeName.toLowerCase();
    return r === "input" ? !!Jy[e.type] : r === "textarea";
  }
  function Md(e, r, o, l) {
    cs(l),
      (r = _o(r, "onChange")),
      0 < r.length &&
        ((o = new dl("onChange", "change", null, o, l)),
        e.push({ event: o, listeners: r }));
  }
  var ai = null,
    li = null;
  function ev(e) {
    Jd(e, 0);
  }
  function yo(e) {
    var r = vs(e);
    if (ce(r)) return e;
  }
  function tv(e, r) {
    if (e === "change") return r;
  }
  var Id = !1;
  if (f) {
    var yl;
    if (f) {
      var vl = "oninput" in document;
      if (!vl) {
        var Dd = document.createElement("div");
        Dd.setAttribute("oninput", "return;"),
          (vl = typeof Dd.oninput == "function");
      }
      yl = vl;
    } else yl = !1;
    Id = yl && (!document.documentMode || 9 < document.documentMode);
  }
  function Fd() {
    ai && (ai.detachEvent("onpropertychange", zd), (li = ai = null));
  }
  function zd(e) {
    if (e.propertyName === "value" && yo(li)) {
      var r = [];
      Md(r, li, e, Un(e)), At(ev, r);
    }
  }
  function nv(e, r, o) {
    e === "focusin"
      ? (Fd(), (ai = r), (li = o), ai.attachEvent("onpropertychange", zd))
      : e === "focusout" && Fd();
  }
  function rv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return yo(li);
  }
  function sv(e, r) {
    if (e === "click") return yo(r);
  }
  function iv(e, r) {
    if (e === "input" || e === "change") return yo(r);
  }
  function ov(e, r) {
    return (e === r && (e !== 0 || 1 / e === 1 / r)) || (e !== e && r !== r);
  }
  var pn = typeof Object.is == "function" ? Object.is : ov;
  function ui(e, r) {
    if (pn(e, r)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof r != "object" ||
      r === null
    )
      return !1;
    var o = Object.keys(e),
      l = Object.keys(r);
    if (o.length !== l.length) return !1;
    for (l = 0; l < o.length; l++) {
      var d = o[l];
      if (!p.call(r, d) || !pn(e[d], r[d])) return !1;
    }
    return !0;
  }
  function Bd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function $d(e, r) {
    var o = Bd(e);
    e = 0;
    for (var l; o; ) {
      if (o.nodeType === 3) {
        if (((l = e + o.textContent.length), e <= r && l >= r))
          return { node: o, offset: r - e };
        e = l;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = Bd(o);
    }
  }
  function Ud(e, r) {
    return e && r
      ? e === r
        ? !0
        : e && e.nodeType === 3
        ? !1
        : r && r.nodeType === 3
        ? Ud(e, r.parentNode)
        : "contains" in e
        ? e.contains(r)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(r) & 16)
        : !1
      : !1;
  }
  function Vd() {
    for (var e = window, r = Re(); r instanceof e.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o) e = r.contentWindow;
      else break;
      r = Re(e.document);
    }
    return r;
  }
  function xl(e) {
    var r = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      r &&
      ((r === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        r === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function av(e) {
    var r = Vd(),
      o = e.focusedElem,
      l = e.selectionRange;
    if (
      r !== o &&
      o &&
      o.ownerDocument &&
      Ud(o.ownerDocument.documentElement, o)
    ) {
      if (l !== null && xl(o)) {
        if (
          ((r = l.start),
          (e = l.end),
          e === void 0 && (e = r),
          "selectionStart" in o)
        )
          (o.selectionStart = r),
            (o.selectionEnd = Math.min(e, o.value.length));
        else if (
          ((e = ((r = o.ownerDocument || document) && r.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var d = o.textContent.length,
            h = Math.min(l.start, d);
          (l = l.end === void 0 ? h : Math.min(l.end, d)),
            !e.extend && h > l && ((d = l), (l = h), (h = d)),
            (d = $d(o, h));
          var y = $d(o, l);
          d &&
            y &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== d.node ||
              e.anchorOffset !== d.offset ||
              e.focusNode !== y.node ||
              e.focusOffset !== y.offset) &&
            ((r = r.createRange()),
            r.setStart(d.node, d.offset),
            e.removeAllRanges(),
            h > l
              ? (e.addRange(r), e.extend(y.node, y.offset))
              : (r.setEnd(y.node, y.offset), e.addRange(r)));
        }
      }
      for (r = [], e = o; (e = e.parentNode); )
        e.nodeType === 1 &&
          r.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++)
        (e = r[o]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var lv = f && "documentMode" in document && 11 >= document.documentMode,
    ps = null,
    wl = null,
    ci = null,
    _l = !1;
  function Wd(e, r, o) {
    var l =
      o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    _l ||
      ps == null ||
      ps !== Re(l) ||
      ((l = ps),
      "selectionStart" in l && xl(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (ci && ui(ci, l)) ||
        ((ci = l),
        (l = _o(wl, "onSelect")),
        0 < l.length &&
          ((r = new dl("onSelect", "select", null, r, o)),
          e.push({ event: r, listeners: l }),
          (r.target = ps))));
  }
  function vo(e, r) {
    var o = {};
    return (
      (o[e.toLowerCase()] = r.toLowerCase()),
      (o["Webkit" + e] = "webkit" + r),
      (o["Moz" + e] = "moz" + r),
      o
    );
  }
  var ms = {
      animationend: vo("Animation", "AnimationEnd"),
      animationiteration: vo("Animation", "AnimationIteration"),
      animationstart: vo("Animation", "AnimationStart"),
      transitionend: vo("Transition", "TransitionEnd"),
    },
    bl = {},
    Hd = {};
  f &&
    ((Hd = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ms.animationend.animation,
      delete ms.animationiteration.animation,
      delete ms.animationstart.animation),
    "TransitionEvent" in window || delete ms.transitionend.transition);
  function xo(e) {
    if (bl[e]) return bl[e];
    if (!ms[e]) return e;
    var r = ms[e],
      o;
    for (o in r) if (r.hasOwnProperty(o) && o in Hd) return (bl[e] = r[o]);
    return e;
  }
  var qd = xo("animationend"),
    Qd = xo("animationiteration"),
    Zd = xo("animationstart"),
    Kd = xo("transitionend"),
    Yd = new Map(),
    Gd =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function dr(e, r) {
    Yd.set(e, r), u(r, [e]);
  }
  for (var Sl = 0; Sl < Gd.length; Sl++) {
    var kl = Gd[Sl],
      uv = kl.toLowerCase(),
      cv = kl[0].toUpperCase() + kl.slice(1);
    dr(uv, "on" + cv);
  }
  dr(qd, "onAnimationEnd"),
    dr(Qd, "onAnimationIteration"),
    dr(Zd, "onAnimationStart"),
    dr("dblclick", "onDoubleClick"),
    dr("focusin", "onFocus"),
    dr("focusout", "onBlur"),
    dr(Kd, "onTransitionEnd"),
    c("onMouseEnter", ["mouseout", "mouseover"]),
    c("onMouseLeave", ["mouseout", "mouseover"]),
    c("onPointerEnter", ["pointerout", "pointerover"]),
    c("onPointerLeave", ["pointerout", "pointerover"]),
    u(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    u(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    u(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    u(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    u(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var di =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    dv = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(di)
    );
  function Xd(e, r, o) {
    var l = e.type || "unknown-event";
    (e.currentTarget = o), uy(l, r, void 0, e), (e.currentTarget = null);
  }
  function Jd(e, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < e.length; o++) {
      var l = e[o],
        d = l.event;
      l = l.listeners;
      e: {
        var h = void 0;
        if (r)
          for (var y = l.length - 1; 0 <= y; y--) {
            var C = l[y],
              R = C.instance,
              I = C.currentTarget;
            if (((C = C.listener), R !== h && d.isPropagationStopped()))
              break e;
            Xd(d, C, I), (h = R);
          }
        else
          for (y = 0; y < l.length; y++) {
            if (
              ((C = l[y]),
              (R = C.instance),
              (I = C.currentTarget),
              (C = C.listener),
              R !== h && d.isPropagationStopped())
            )
              break e;
            Xd(d, C, I), (h = R);
          }
      }
    }
    if (no) throw ((e = tl), (no = !1), (tl = null), e);
  }
  function We(e, r) {
    var o = r[Al];
    o === void 0 && (o = r[Al] = new Set());
    var l = e + "__bubble";
    o.has(l) || (ef(r, e, 2, !1), o.add(l));
  }
  function El(e, r, o) {
    var l = 0;
    r && (l |= 4), ef(o, e, l, r);
  }
  var wo = "_reactListening" + Math.random().toString(36).slice(2);
  function fi(e) {
    if (!e[wo]) {
      (e[wo] = !0),
        i.forEach(function (o) {
          o !== "selectionchange" && (dv.has(o) || El(o, !1, e), El(o, !0, e));
        });
      var r = e.nodeType === 9 ? e : e.ownerDocument;
      r === null || r[wo] || ((r[wo] = !0), El("selectionchange", !1, r));
    }
  }
  function ef(e, r, o, l) {
    switch (Sd(r)) {
      case 1:
        var d = Ey;
        break;
      case 4:
        d = Cy;
        break;
      default:
        d = ll;
    }
    (o = d.bind(null, r, o, e)),
      (d = void 0),
      !fn ||
        (r !== "touchstart" && r !== "touchmove" && r !== "wheel") ||
        (d = !0),
      l
        ? d !== void 0
          ? e.addEventListener(r, o, { capture: !0, passive: d })
          : e.addEventListener(r, o, !0)
        : d !== void 0
        ? e.addEventListener(r, o, { passive: d })
        : e.addEventListener(r, o, !1);
  }
  function Cl(e, r, o, l, d) {
    var h = l;
    if ((r & 1) === 0 && (r & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var y = l.tag;
        if (y === 3 || y === 4) {
          var C = l.stateNode.containerInfo;
          if (C === d || (C.nodeType === 8 && C.parentNode === d)) break;
          if (y === 4)
            for (y = l.return; y !== null; ) {
              var R = y.tag;
              if (
                (R === 3 || R === 4) &&
                ((R = y.stateNode.containerInfo),
                R === d || (R.nodeType === 8 && R.parentNode === d))
              )
                return;
              y = y.return;
            }
          for (; C !== null; ) {
            if (((y = Hr(C)), y === null)) return;
            if (((R = y.tag), R === 5 || R === 6)) {
              l = h = y;
              continue e;
            }
            C = C.parentNode;
          }
        }
        l = l.return;
      }
    At(function () {
      var I = h,
        q = Un(o),
        Q = [];
      e: {
        var H = Yd.get(e);
        if (H !== void 0) {
          var ie = dl,
            de = e;
          switch (e) {
            case "keypress":
              if (po(o) === 0) break e;
            case "keydown":
            case "keyup":
              ie = $y;
              break;
            case "focusin":
              (de = "focus"), (ie = pl);
              break;
            case "focusout":
              (de = "blur"), (ie = pl);
              break;
            case "beforeblur":
            case "afterblur":
              ie = pl;
              break;
            case "click":
              if (o.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ie = Cd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ie = Ry;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ie = Wy;
              break;
            case qd:
            case Qd:
            case Zd:
              ie = Ay;
              break;
            case Kd:
              ie = qy;
              break;
            case "scroll":
              ie = Ty;
              break;
            case "wheel":
              ie = Zy;
              break;
            case "copy":
            case "cut":
            case "paste":
              ie = Ly;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ie = Nd;
          }
          var fe = (r & 4) !== 0,
            et = !fe && e === "scroll",
            j = fe ? (H !== null ? H + "Capture" : null) : H;
          fe = [];
          for (var O = I, L; O !== null; ) {
            L = O;
            var Z = L.stateNode;
            if (
              (L.tag === 5 &&
                Z !== null &&
                ((L = Z),
                j !== null &&
                  ((Z = jt(O, j)), Z != null && fe.push(hi(O, Z, L)))),
              et)
            )
              break;
            O = O.return;
          }
          0 < fe.length &&
            ((H = new ie(H, de, null, o, q)),
            Q.push({ event: H, listeners: fe }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (
            ((H = e === "mouseover" || e === "pointerover"),
            (ie = e === "mouseout" || e === "pointerout"),
            H &&
              o !== Vr &&
              (de = o.relatedTarget || o.fromElement) &&
              (Hr(de) || de[Vn]))
          )
            break e;
          if (
            (ie || H) &&
            ((H =
              q.window === q
                ? q
                : (H = q.ownerDocument)
                ? H.defaultView || H.parentWindow
                : window),
            ie
              ? ((de = o.relatedTarget || o.toElement),
                (ie = I),
                (de = de ? Hr(de) : null),
                de !== null &&
                  ((et = Wr(de)),
                  de !== et || (de.tag !== 5 && de.tag !== 6)) &&
                  (de = null))
              : ((ie = null), (de = I)),
            ie !== de)
          ) {
            if (
              ((fe = Cd),
              (Z = "onMouseLeave"),
              (j = "onMouseEnter"),
              (O = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((fe = Nd),
                (Z = "onPointerLeave"),
                (j = "onPointerEnter"),
                (O = "pointer")),
              (et = ie == null ? H : vs(ie)),
              (L = de == null ? H : vs(de)),
              (H = new fe(Z, O + "leave", ie, o, q)),
              (H.target = et),
              (H.relatedTarget = L),
              (Z = null),
              Hr(q) === I &&
                ((fe = new fe(j, O + "enter", de, o, q)),
                (fe.target = L),
                (fe.relatedTarget = et),
                (Z = fe)),
              (et = Z),
              ie && de)
            )
              t: {
                for (fe = ie, j = de, O = 0, L = fe; L; L = gs(L)) O++;
                for (L = 0, Z = j; Z; Z = gs(Z)) L++;
                for (; 0 < O - L; ) (fe = gs(fe)), O--;
                for (; 0 < L - O; ) (j = gs(j)), L--;
                for (; O--; ) {
                  if (fe === j || (j !== null && fe === j.alternate)) break t;
                  (fe = gs(fe)), (j = gs(j));
                }
                fe = null;
              }
            else fe = null;
            ie !== null && tf(Q, H, ie, fe, !1),
              de !== null && et !== null && tf(Q, et, de, fe, !0);
          }
        }
        e: {
          if (
            ((H = I ? vs(I) : window),
            (ie = H.nodeName && H.nodeName.toLowerCase()),
            ie === "select" || (ie === "input" && H.type === "file"))
          )
            var pe = tv;
          else if (Ld(H))
            if (Id) pe = iv;
            else {
              pe = rv;
              var we = nv;
            }
          else
            (ie = H.nodeName) &&
              ie.toLowerCase() === "input" &&
              (H.type === "checkbox" || H.type === "radio") &&
              (pe = sv);
          if (pe && (pe = pe(e, I))) {
            Md(Q, pe, o, q);
            break e;
          }
          we && we(e, H, I),
            e === "focusout" &&
              (we = H._wrapperState) &&
              we.controlled &&
              H.type === "number" &&
              Rt(H, "number", H.value);
        }
        switch (((we = I ? vs(I) : window), e)) {
          case "focusin":
            (Ld(we) || we.contentEditable === "true") &&
              ((ps = we), (wl = I), (ci = null));
            break;
          case "focusout":
            ci = wl = ps = null;
            break;
          case "mousedown":
            _l = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (_l = !1), Wd(Q, o, q);
            break;
          case "selectionchange":
            if (lv) break;
          case "keydown":
          case "keyup":
            Wd(Q, o, q);
        }
        var _e;
        if (gl)
          e: {
            switch (e) {
              case "compositionstart":
                var ke = "onCompositionStart";
                break e;
              case "compositionend":
                ke = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ke = "onCompositionUpdate";
                break e;
            }
            ke = void 0;
          }
        else
          hs
            ? Ad(e, o) && (ke = "onCompositionEnd")
            : e === "keydown" &&
              o.keyCode === 229 &&
              (ke = "onCompositionStart");
        ke &&
          (Rd &&
            o.locale !== "ko" &&
            (hs || ke !== "onCompositionStart"
              ? ke === "onCompositionEnd" && hs && (_e = kd())
              : ((cr = q),
                (cl = "value" in cr ? cr.value : cr.textContent),
                (hs = !0))),
          (we = _o(I, ke)),
          0 < we.length &&
            ((ke = new Td(ke, e, null, o, q)),
            Q.push({ event: ke, listeners: we }),
            _e
              ? (ke.data = _e)
              : ((_e = jd(o)), _e !== null && (ke.data = _e)))),
          (_e = Yy ? Gy(e, o) : Xy(e, o)) &&
            ((I = _o(I, "onBeforeInput")),
            0 < I.length &&
              ((q = new Td("onBeforeInput", "beforeinput", null, o, q)),
              Q.push({ event: q, listeners: I }),
              (q.data = _e)));
      }
      Jd(Q, r);
    });
  }
  function hi(e, r, o) {
    return { instance: e, listener: r, currentTarget: o };
  }
  function _o(e, r) {
    for (var o = r + "Capture", l = []; e !== null; ) {
      var d = e,
        h = d.stateNode;
      d.tag === 5 &&
        h !== null &&
        ((d = h),
        (h = jt(e, o)),
        h != null && l.unshift(hi(e, h, d)),
        (h = jt(e, r)),
        h != null && l.push(hi(e, h, d))),
        (e = e.return);
    }
    return l;
  }
  function gs(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function tf(e, r, o, l, d) {
    for (var h = r._reactName, y = []; o !== null && o !== l; ) {
      var C = o,
        R = C.alternate,
        I = C.stateNode;
      if (R !== null && R === l) break;
      C.tag === 5 &&
        I !== null &&
        ((C = I),
        d
          ? ((R = jt(o, h)), R != null && y.unshift(hi(o, R, C)))
          : d || ((R = jt(o, h)), R != null && y.push(hi(o, R, C)))),
        (o = o.return);
    }
    y.length !== 0 && e.push({ event: r, listeners: y });
  }
  var fv = /\r\n?/g,
    hv = /\u0000|\uFFFD/g;
  function nf(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        fv,
        `
`
      )
      .replace(hv, "");
  }
  function bo(e, r, o) {
    if (((r = nf(r)), nf(e) !== r && o)) throw Error(s(425));
  }
  function So() {}
  var Tl = null,
    Nl = null;
  function Rl(e, r) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof r.children == "string" ||
      typeof r.children == "number" ||
      (typeof r.dangerouslySetInnerHTML == "object" &&
        r.dangerouslySetInnerHTML !== null &&
        r.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Pl = typeof setTimeout == "function" ? setTimeout : void 0,
    pv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    rf = typeof Promise == "function" ? Promise : void 0,
    mv =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof rf < "u"
        ? function (e) {
            return rf.resolve(null).then(e).catch(gv);
          }
        : Pl;
  function gv(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ol(e, r) {
    var o = r,
      l = 0;
    do {
      var d = o.nextSibling;
      if ((e.removeChild(o), d && d.nodeType === 8))
        if (((o = d.data), o === "/$")) {
          if (l === 0) {
            e.removeChild(d), ri(r);
            return;
          }
          l--;
        } else (o !== "$" && o !== "$?" && o !== "$!") || l++;
      o = d;
    } while (o);
    ri(r);
  }
  function fr(e) {
    for (; e != null; e = e.nextSibling) {
      var r = e.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (((r = e.data), r === "$" || r === "$!" || r === "$?")) break;
        if (r === "/$") return null;
      }
    }
    return e;
  }
  function sf(e) {
    e = e.previousSibling;
    for (var r = 0; e; ) {
      if (e.nodeType === 8) {
        var o = e.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (r === 0) return e;
          r--;
        } else o === "/$" && r++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var ys = Math.random().toString(36).slice(2),
    On = "__reactFiber$" + ys,
    pi = "__reactProps$" + ys,
    Vn = "__reactContainer$" + ys,
    Al = "__reactEvents$" + ys,
    yv = "__reactListeners$" + ys,
    vv = "__reactHandles$" + ys;
  function Hr(e) {
    var r = e[On];
    if (r) return r;
    for (var o = e.parentNode; o; ) {
      if ((r = o[Vn] || o[On])) {
        if (
          ((o = r.alternate),
          r.child !== null || (o !== null && o.child !== null))
        )
          for (e = sf(e); e !== null; ) {
            if ((o = e[On])) return o;
            e = sf(e);
          }
        return r;
      }
      (e = o), (o = e.parentNode);
    }
    return null;
  }
  function mi(e) {
    return (
      (e = e[On] || e[Vn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function vs(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function ko(e) {
    return e[pi] || null;
  }
  var jl = [],
    xs = -1;
  function hr(e) {
    return { current: e };
  }
  function He(e) {
    0 > xs || ((e.current = jl[xs]), (jl[xs] = null), xs--);
  }
  function Ve(e, r) {
    xs++, (jl[xs] = e.current), (e.current = r);
  }
  var pr = {},
    xt = hr(pr),
    Lt = hr(!1),
    qr = pr;
  function ws(e, r) {
    var o = e.type.contextTypes;
    if (!o) return pr;
    var l = e.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === r)
      return l.__reactInternalMemoizedMaskedChildContext;
    var d = {},
      h;
    for (h in o) d[h] = r[h];
    return (
      l &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = r),
        (e.__reactInternalMemoizedMaskedChildContext = d)),
      d
    );
  }
  function Mt(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Eo() {
    He(Lt), He(xt);
  }
  function of(e, r, o) {
    if (xt.current !== pr) throw Error(s(168));
    Ve(xt, r), Ve(Lt, o);
  }
  function af(e, r, o) {
    var l = e.stateNode;
    if (((r = r.childContextTypes), typeof l.getChildContext != "function"))
      return o;
    l = l.getChildContext();
    for (var d in l) if (!(d in r)) throw Error(s(108, le(e) || "Unknown", d));
    return W({}, o, l);
  }
  function Co(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        pr),
      (qr = xt.current),
      Ve(xt, e),
      Ve(Lt, Lt.current),
      !0
    );
  }
  function lf(e, r, o) {
    var l = e.stateNode;
    if (!l) throw Error(s(169));
    o
      ? ((e = af(e, r, qr)),
        (l.__reactInternalMemoizedMergedChildContext = e),
        He(Lt),
        He(xt),
        Ve(xt, e))
      : He(Lt),
      Ve(Lt, o);
  }
  var Wn = null,
    To = !1,
    Ll = !1;
  function uf(e) {
    Wn === null ? (Wn = [e]) : Wn.push(e);
  }
  function xv(e) {
    (To = !0), uf(e);
  }
  function mr() {
    if (!Ll && Wn !== null) {
      Ll = !0;
      var e = 0,
        r = $e;
      try {
        var o = Wn;
        for ($e = 1; e < o.length; e++) {
          var l = o[e];
          do l = l(!0);
          while (l !== null);
        }
        (Wn = null), (To = !1);
      } catch (d) {
        throw (Wn !== null && (Wn = Wn.slice(e + 1)), cd(nl, mr), d);
      } finally {
        ($e = r), (Ll = !1);
      }
    }
    return null;
  }
  var _s = [],
    bs = 0,
    No = null,
    Ro = 0,
    Jt = [],
    en = 0,
    Qr = null,
    Hn = 1,
    qn = "";
  function Zr(e, r) {
    (_s[bs++] = Ro), (_s[bs++] = No), (No = e), (Ro = r);
  }
  function cf(e, r, o) {
    (Jt[en++] = Hn), (Jt[en++] = qn), (Jt[en++] = Qr), (Qr = e);
    var l = Hn;
    e = qn;
    var d = 32 - hn(l) - 1;
    (l &= ~(1 << d)), (o += 1);
    var h = 32 - hn(r) + d;
    if (30 < h) {
      var y = d - (d % 5);
      (h = (l & ((1 << y) - 1)).toString(32)),
        (l >>= y),
        (d -= y),
        (Hn = (1 << (32 - hn(r) + d)) | (o << d) | l),
        (qn = h + e);
    } else (Hn = (1 << h) | (o << d) | l), (qn = e);
  }
  function Ml(e) {
    e.return !== null && (Zr(e, 1), cf(e, 1, 0));
  }
  function Il(e) {
    for (; e === No; )
      (No = _s[--bs]), (_s[bs] = null), (Ro = _s[--bs]), (_s[bs] = null);
    for (; e === Qr; )
      (Qr = Jt[--en]),
        (Jt[en] = null),
        (qn = Jt[--en]),
        (Jt[en] = null),
        (Hn = Jt[--en]),
        (Jt[en] = null);
  }
  var qt = null,
    Qt = null,
    Qe = !1,
    mn = null;
  function df(e, r) {
    var o = sn(5, null, null, 0);
    (o.elementType = "DELETED"),
      (o.stateNode = r),
      (o.return = e),
      (r = e.deletions),
      r === null ? ((e.deletions = [o]), (e.flags |= 16)) : r.push(o);
  }
  function ff(e, r) {
    switch (e.tag) {
      case 5:
        var o = e.type;
        return (
          (r =
            r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase()
              ? null
              : r),
          r !== null
            ? ((e.stateNode = r), (qt = e), (Qt = fr(r.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (r = e.pendingProps === "" || r.nodeType !== 3 ? null : r),
          r !== null ? ((e.stateNode = r), (qt = e), (Qt = null), !0) : !1
        );
      case 13:
        return (
          (r = r.nodeType !== 8 ? null : r),
          r !== null
            ? ((o = Qr !== null ? { id: Hn, overflow: qn } : null),
              (e.memoizedState = {
                dehydrated: r,
                treeContext: o,
                retryLane: 1073741824,
              }),
              (o = sn(18, null, null, 0)),
              (o.stateNode = r),
              (o.return = e),
              (e.child = o),
              (qt = e),
              (Qt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Dl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Fl(e) {
    if (Qe) {
      var r = Qt;
      if (r) {
        var o = r;
        if (!ff(e, r)) {
          if (Dl(e)) throw Error(s(418));
          r = fr(o.nextSibling);
          var l = qt;
          r && ff(e, r)
            ? df(l, o)
            : ((e.flags = (e.flags & -4097) | 2), (Qe = !1), (qt = e));
        }
      } else {
        if (Dl(e)) throw Error(s(418));
        (e.flags = (e.flags & -4097) | 2), (Qe = !1), (qt = e);
      }
    }
  }
  function hf(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    qt = e;
  }
  function Po(e) {
    if (e !== qt) return !1;
    if (!Qe) return hf(e), (Qe = !0), !1;
    var r;
    if (
      ((r = e.tag !== 3) &&
        !(r = e.tag !== 5) &&
        ((r = e.type),
        (r = r !== "head" && r !== "body" && !Rl(e.type, e.memoizedProps))),
      r && (r = Qt))
    ) {
      if (Dl(e)) throw (pf(), Error(s(418)));
      for (; r; ) df(e, r), (r = fr(r.nextSibling));
    }
    if ((hf(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      e: {
        for (e = e.nextSibling, r = 0; e; ) {
          if (e.nodeType === 8) {
            var o = e.data;
            if (o === "/$") {
              if (r === 0) {
                Qt = fr(e.nextSibling);
                break e;
              }
              r--;
            } else (o !== "$" && o !== "$!" && o !== "$?") || r++;
          }
          e = e.nextSibling;
        }
        Qt = null;
      }
    } else Qt = qt ? fr(e.stateNode.nextSibling) : null;
    return !0;
  }
  function pf() {
    for (var e = Qt; e; ) e = fr(e.nextSibling);
  }
  function Ss() {
    (Qt = qt = null), (Qe = !1);
  }
  function zl(e) {
    mn === null ? (mn = [e]) : mn.push(e);
  }
  var wv = M.ReactCurrentBatchConfig;
  function gi(e, r, o) {
    if (
      ((e = o.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (o._owner) {
        if (((o = o._owner), o)) {
          if (o.tag !== 1) throw Error(s(309));
          var l = o.stateNode;
        }
        if (!l) throw Error(s(147, e));
        var d = l,
          h = "" + e;
        return r !== null &&
          r.ref !== null &&
          typeof r.ref == "function" &&
          r.ref._stringRef === h
          ? r.ref
          : ((r = function (y) {
              var C = d.refs;
              y === null ? delete C[h] : (C[h] = y);
            }),
            (r._stringRef = h),
            r);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!o._owner) throw Error(s(290, e));
    }
    return e;
  }
  function Oo(e, r) {
    throw (
      ((e = Object.prototype.toString.call(r)),
      Error(
        s(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(r).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function mf(e) {
    var r = e._init;
    return r(e._payload);
  }
  function gf(e) {
    function r(j, O) {
      if (e) {
        var L = j.deletions;
        L === null ? ((j.deletions = [O]), (j.flags |= 16)) : L.push(O);
      }
    }
    function o(j, O) {
      if (!e) return null;
      for (; O !== null; ) r(j, O), (O = O.sibling);
      return null;
    }
    function l(j, O) {
      for (j = new Map(); O !== null; )
        O.key !== null ? j.set(O.key, O) : j.set(O.index, O), (O = O.sibling);
      return j;
    }
    function d(j, O) {
      return (j = Sr(j, O)), (j.index = 0), (j.sibling = null), j;
    }
    function h(j, O, L) {
      return (
        (j.index = L),
        e
          ? ((L = j.alternate),
            L !== null
              ? ((L = L.index), L < O ? ((j.flags |= 2), O) : L)
              : ((j.flags |= 2), O))
          : ((j.flags |= 1048576), O)
      );
    }
    function y(j) {
      return e && j.alternate === null && (j.flags |= 2), j;
    }
    function C(j, O, L, Z) {
      return O === null || O.tag !== 6
        ? ((O = Pu(L, j.mode, Z)), (O.return = j), O)
        : ((O = d(O, L)), (O.return = j), O);
    }
    function R(j, O, L, Z) {
      var pe = L.type;
      return pe === $
        ? q(j, O, L.props.children, Z, L.key)
        : O !== null &&
          (O.elementType === pe ||
            (typeof pe == "object" &&
              pe !== null &&
              pe.$$typeof === ae &&
              mf(pe) === O.type))
        ? ((Z = d(O, L.props)), (Z.ref = gi(j, O, L)), (Z.return = j), Z)
        : ((Z = ta(L.type, L.key, L.props, null, j.mode, Z)),
          (Z.ref = gi(j, O, L)),
          (Z.return = j),
          Z);
    }
    function I(j, O, L, Z) {
      return O === null ||
        O.tag !== 4 ||
        O.stateNode.containerInfo !== L.containerInfo ||
        O.stateNode.implementation !== L.implementation
        ? ((O = Ou(L, j.mode, Z)), (O.return = j), O)
        : ((O = d(O, L.children || [])), (O.return = j), O);
    }
    function q(j, O, L, Z, pe) {
      return O === null || O.tag !== 7
        ? ((O = ns(L, j.mode, Z, pe)), (O.return = j), O)
        : ((O = d(O, L)), (O.return = j), O);
    }
    function Q(j, O, L) {
      if ((typeof O == "string" && O !== "") || typeof O == "number")
        return (O = Pu("" + O, j.mode, L)), (O.return = j), O;
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case B:
            return (
              (L = ta(O.type, O.key, O.props, null, j.mode, L)),
              (L.ref = gi(j, null, O)),
              (L.return = j),
              L
            );
          case U:
            return (O = Ou(O, j.mode, L)), (O.return = j), O;
          case ae:
            var Z = O._init;
            return Q(j, Z(O._payload), L);
        }
        if (vt(O) || z(O))
          return (O = ns(O, j.mode, L, null)), (O.return = j), O;
        Oo(j, O);
      }
      return null;
    }
    function H(j, O, L, Z) {
      var pe = O !== null ? O.key : null;
      if ((typeof L == "string" && L !== "") || typeof L == "number")
        return pe !== null ? null : C(j, O, "" + L, Z);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case B:
            return L.key === pe ? R(j, O, L, Z) : null;
          case U:
            return L.key === pe ? I(j, O, L, Z) : null;
          case ae:
            return (pe = L._init), H(j, O, pe(L._payload), Z);
        }
        if (vt(L) || z(L)) return pe !== null ? null : q(j, O, L, Z, null);
        Oo(j, L);
      }
      return null;
    }
    function ie(j, O, L, Z, pe) {
      if ((typeof Z == "string" && Z !== "") || typeof Z == "number")
        return (j = j.get(L) || null), C(O, j, "" + Z, pe);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case B:
            return (
              (j = j.get(Z.key === null ? L : Z.key) || null), R(O, j, Z, pe)
            );
          case U:
            return (
              (j = j.get(Z.key === null ? L : Z.key) || null), I(O, j, Z, pe)
            );
          case ae:
            var we = Z._init;
            return ie(j, O, L, we(Z._payload), pe);
        }
        if (vt(Z) || z(Z)) return (j = j.get(L) || null), q(O, j, Z, pe, null);
        Oo(O, Z);
      }
      return null;
    }
    function de(j, O, L, Z) {
      for (
        var pe = null, we = null, _e = O, ke = (O = 0), dt = null;
        _e !== null && ke < L.length;
        ke++
      ) {
        _e.index > ke ? ((dt = _e), (_e = null)) : (dt = _e.sibling);
        var Fe = H(j, _e, L[ke], Z);
        if (Fe === null) {
          _e === null && (_e = dt);
          break;
        }
        e && _e && Fe.alternate === null && r(j, _e),
          (O = h(Fe, O, ke)),
          we === null ? (pe = Fe) : (we.sibling = Fe),
          (we = Fe),
          (_e = dt);
      }
      if (ke === L.length) return o(j, _e), Qe && Zr(j, ke), pe;
      if (_e === null) {
        for (; ke < L.length; ke++)
          (_e = Q(j, L[ke], Z)),
            _e !== null &&
              ((O = h(_e, O, ke)),
              we === null ? (pe = _e) : (we.sibling = _e),
              (we = _e));
        return Qe && Zr(j, ke), pe;
      }
      for (_e = l(j, _e); ke < L.length; ke++)
        (dt = ie(_e, j, ke, L[ke], Z)),
          dt !== null &&
            (e &&
              dt.alternate !== null &&
              _e.delete(dt.key === null ? ke : dt.key),
            (O = h(dt, O, ke)),
            we === null ? (pe = dt) : (we.sibling = dt),
            (we = dt));
      return (
        e &&
          _e.forEach(function (kr) {
            return r(j, kr);
          }),
        Qe && Zr(j, ke),
        pe
      );
    }
    function fe(j, O, L, Z) {
      var pe = z(L);
      if (typeof pe != "function") throw Error(s(150));
      if (((L = pe.call(L)), L == null)) throw Error(s(151));
      for (
        var we = (pe = null), _e = O, ke = (O = 0), dt = null, Fe = L.next();
        _e !== null && !Fe.done;
        ke++, Fe = L.next()
      ) {
        _e.index > ke ? ((dt = _e), (_e = null)) : (dt = _e.sibling);
        var kr = H(j, _e, Fe.value, Z);
        if (kr === null) {
          _e === null && (_e = dt);
          break;
        }
        e && _e && kr.alternate === null && r(j, _e),
          (O = h(kr, O, ke)),
          we === null ? (pe = kr) : (we.sibling = kr),
          (we = kr),
          (_e = dt);
      }
      if (Fe.done) return o(j, _e), Qe && Zr(j, ke), pe;
      if (_e === null) {
        for (; !Fe.done; ke++, Fe = L.next())
          (Fe = Q(j, Fe.value, Z)),
            Fe !== null &&
              ((O = h(Fe, O, ke)),
              we === null ? (pe = Fe) : (we.sibling = Fe),
              (we = Fe));
        return Qe && Zr(j, ke), pe;
      }
      for (_e = l(j, _e); !Fe.done; ke++, Fe = L.next())
        (Fe = ie(_e, j, ke, Fe.value, Z)),
          Fe !== null &&
            (e &&
              Fe.alternate !== null &&
              _e.delete(Fe.key === null ? ke : Fe.key),
            (O = h(Fe, O, ke)),
            we === null ? (pe = Fe) : (we.sibling = Fe),
            (we = Fe));
      return (
        e &&
          _e.forEach(function (Jv) {
            return r(j, Jv);
          }),
        Qe && Zr(j, ke),
        pe
      );
    }
    function et(j, O, L, Z) {
      if (
        (typeof L == "object" &&
          L !== null &&
          L.type === $ &&
          L.key === null &&
          (L = L.props.children),
        typeof L == "object" && L !== null)
      ) {
        switch (L.$$typeof) {
          case B:
            e: {
              for (var pe = L.key, we = O; we !== null; ) {
                if (we.key === pe) {
                  if (((pe = L.type), pe === $)) {
                    if (we.tag === 7) {
                      o(j, we.sibling),
                        (O = d(we, L.props.children)),
                        (O.return = j),
                        (j = O);
                      break e;
                    }
                  } else if (
                    we.elementType === pe ||
                    (typeof pe == "object" &&
                      pe !== null &&
                      pe.$$typeof === ae &&
                      mf(pe) === we.type)
                  ) {
                    o(j, we.sibling),
                      (O = d(we, L.props)),
                      (O.ref = gi(j, we, L)),
                      (O.return = j),
                      (j = O);
                    break e;
                  }
                  o(j, we);
                  break;
                } else r(j, we);
                we = we.sibling;
              }
              L.type === $
                ? ((O = ns(L.props.children, j.mode, Z, L.key)),
                  (O.return = j),
                  (j = O))
                : ((Z = ta(L.type, L.key, L.props, null, j.mode, Z)),
                  (Z.ref = gi(j, O, L)),
                  (Z.return = j),
                  (j = Z));
            }
            return y(j);
          case U:
            e: {
              for (we = L.key; O !== null; ) {
                if (O.key === we)
                  if (
                    O.tag === 4 &&
                    O.stateNode.containerInfo === L.containerInfo &&
                    O.stateNode.implementation === L.implementation
                  ) {
                    o(j, O.sibling),
                      (O = d(O, L.children || [])),
                      (O.return = j),
                      (j = O);
                    break e;
                  } else {
                    o(j, O);
                    break;
                  }
                else r(j, O);
                O = O.sibling;
              }
              (O = Ou(L, j.mode, Z)), (O.return = j), (j = O);
            }
            return y(j);
          case ae:
            return (we = L._init), et(j, O, we(L._payload), Z);
        }
        if (vt(L)) return de(j, O, L, Z);
        if (z(L)) return fe(j, O, L, Z);
        Oo(j, L);
      }
      return (typeof L == "string" && L !== "") || typeof L == "number"
        ? ((L = "" + L),
          O !== null && O.tag === 6
            ? (o(j, O.sibling), (O = d(O, L)), (O.return = j), (j = O))
            : (o(j, O), (O = Pu(L, j.mode, Z)), (O.return = j), (j = O)),
          y(j))
        : o(j, O);
    }
    return et;
  }
  var ks = gf(!0),
    yf = gf(!1),
    Ao = hr(null),
    jo = null,
    Es = null,
    Bl = null;
  function $l() {
    Bl = Es = jo = null;
  }
  function Ul(e) {
    var r = Ao.current;
    He(Ao), (e._currentValue = r);
  }
  function Vl(e, r, o) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & r) !== r
          ? ((e.childLanes |= r), l !== null && (l.childLanes |= r))
          : l !== null && (l.childLanes & r) !== r && (l.childLanes |= r),
        e === o)
      )
        break;
      e = e.return;
    }
  }
  function Cs(e, r) {
    (jo = e),
      (Bl = Es = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & r) !== 0 && (It = !0), (e.firstContext = null));
  }
  function tn(e) {
    var r = e._currentValue;
    if (Bl !== e)
      if (((e = { context: e, memoizedValue: r, next: null }), Es === null)) {
        if (jo === null) throw Error(s(308));
        (Es = e), (jo.dependencies = { lanes: 0, firstContext: e });
      } else Es = Es.next = e;
    return r;
  }
  var Kr = null;
  function Wl(e) {
    Kr === null ? (Kr = [e]) : Kr.push(e);
  }
  function vf(e, r, o, l) {
    var d = r.interleaved;
    return (
      d === null ? ((o.next = o), Wl(r)) : ((o.next = d.next), (d.next = o)),
      (r.interleaved = o),
      Qn(e, l)
    );
  }
  function Qn(e, r) {
    e.lanes |= r;
    var o = e.alternate;
    for (o !== null && (o.lanes |= r), o = e, e = e.return; e !== null; )
      (e.childLanes |= r),
        (o = e.alternate),
        o !== null && (o.childLanes |= r),
        (o = e),
        (e = e.return);
    return o.tag === 3 ? o.stateNode : null;
  }
  var gr = !1;
  function Hl(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function xf(e, r) {
    (e = e.updateQueue),
      r.updateQueue === e &&
        (r.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Zn(e, r) {
    return {
      eventTime: e,
      lane: r,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function yr(e, r, o) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Ie & 2) !== 0)) {
      var d = l.pending;
      return (
        d === null ? (r.next = r) : ((r.next = d.next), (d.next = r)),
        (l.pending = r),
        Qn(e, o)
      );
    }
    return (
      (d = l.interleaved),
      d === null ? ((r.next = r), Wl(l)) : ((r.next = d.next), (d.next = r)),
      (l.interleaved = r),
      Qn(e, o)
    );
  }
  function Lo(e, r, o) {
    if (
      ((r = r.updateQueue), r !== null && ((r = r.shared), (o & 4194240) !== 0))
    ) {
      var l = r.lanes;
      (l &= e.pendingLanes), (o |= l), (r.lanes = o), il(e, o);
    }
  }
  function wf(e, r) {
    var o = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), o === l)) {
      var d = null,
        h = null;
      if (((o = o.firstBaseUpdate), o !== null)) {
        do {
          var y = {
            eventTime: o.eventTime,
            lane: o.lane,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null,
          };
          h === null ? (d = h = y) : (h = h.next = y), (o = o.next);
        } while (o !== null);
        h === null ? (d = h = r) : (h = h.next = r);
      } else d = h = r;
      (o = {
        baseState: l.baseState,
        firstBaseUpdate: d,
        lastBaseUpdate: h,
        shared: l.shared,
        effects: l.effects,
      }),
        (e.updateQueue = o);
      return;
    }
    (e = o.lastBaseUpdate),
      e === null ? (o.firstBaseUpdate = r) : (e.next = r),
      (o.lastBaseUpdate = r);
  }
  function Mo(e, r, o, l) {
    var d = e.updateQueue;
    gr = !1;
    var h = d.firstBaseUpdate,
      y = d.lastBaseUpdate,
      C = d.shared.pending;
    if (C !== null) {
      d.shared.pending = null;
      var R = C,
        I = R.next;
      (R.next = null), y === null ? (h = I) : (y.next = I), (y = R);
      var q = e.alternate;
      q !== null &&
        ((q = q.updateQueue),
        (C = q.lastBaseUpdate),
        C !== y &&
          (C === null ? (q.firstBaseUpdate = I) : (C.next = I),
          (q.lastBaseUpdate = R)));
    }
    if (h !== null) {
      var Q = d.baseState;
      (y = 0), (q = I = R = null), (C = h);
      do {
        var H = C.lane,
          ie = C.eventTime;
        if ((l & H) === H) {
          q !== null &&
            (q = q.next =
              {
                eventTime: ie,
                lane: 0,
                tag: C.tag,
                payload: C.payload,
                callback: C.callback,
                next: null,
              });
          e: {
            var de = e,
              fe = C;
            switch (((H = r), (ie = o), fe.tag)) {
              case 1:
                if (((de = fe.payload), typeof de == "function")) {
                  Q = de.call(ie, Q, H);
                  break e;
                }
                Q = de;
                break e;
              case 3:
                de.flags = (de.flags & -65537) | 128;
              case 0:
                if (
                  ((de = fe.payload),
                  (H = typeof de == "function" ? de.call(ie, Q, H) : de),
                  H == null)
                )
                  break e;
                Q = W({}, Q, H);
                break e;
              case 2:
                gr = !0;
            }
          }
          C.callback !== null &&
            C.lane !== 0 &&
            ((e.flags |= 64),
            (H = d.effects),
            H === null ? (d.effects = [C]) : H.push(C));
        } else
          (ie = {
            eventTime: ie,
            lane: H,
            tag: C.tag,
            payload: C.payload,
            callback: C.callback,
            next: null,
          }),
            q === null ? ((I = q = ie), (R = Q)) : (q = q.next = ie),
            (y |= H);
        if (((C = C.next), C === null)) {
          if (((C = d.shared.pending), C === null)) break;
          (H = C),
            (C = H.next),
            (H.next = null),
            (d.lastBaseUpdate = H),
            (d.shared.pending = null);
        }
      } while (!0);
      if (
        (q === null && (R = Q),
        (d.baseState = R),
        (d.firstBaseUpdate = I),
        (d.lastBaseUpdate = q),
        (r = d.shared.interleaved),
        r !== null)
      ) {
        d = r;
        do (y |= d.lane), (d = d.next);
        while (d !== r);
      } else h === null && (d.shared.lanes = 0);
      (Xr |= y), (e.lanes = y), (e.memoizedState = Q);
    }
  }
  function _f(e, r, o) {
    if (((e = r.effects), (r.effects = null), e !== null))
      for (r = 0; r < e.length; r++) {
        var l = e[r],
          d = l.callback;
        if (d !== null) {
          if (((l.callback = null), (l = o), typeof d != "function"))
            throw Error(s(191, d));
          d.call(l);
        }
      }
  }
  var yi = {},
    An = hr(yi),
    vi = hr(yi),
    xi = hr(yi);
  function Yr(e) {
    if (e === yi) throw Error(s(174));
    return e;
  }
  function ql(e, r) {
    switch ((Ve(xi, r), Ve(vi, e), Ve(An, yi), (e = r.nodeType), e)) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Vt(null, "");
        break;
      default:
        (e = e === 8 ? r.parentNode : r),
          (r = e.namespaceURI || null),
          (e = e.tagName),
          (r = Vt(r, e));
    }
    He(An), Ve(An, r);
  }
  function Ts() {
    He(An), He(vi), He(xi);
  }
  function bf(e) {
    Yr(xi.current);
    var r = Yr(An.current),
      o = Vt(r, e.type);
    r !== o && (Ve(vi, e), Ve(An, o));
  }
  function Ql(e) {
    vi.current === e && (He(An), He(vi));
  }
  var Ze = hr(0);
  function Io(e) {
    for (var r = e; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (
          o !== null &&
          ((o = o.dehydrated), o === null || o.data === "$?" || o.data === "$!")
        )
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 128) !== 0) return r;
      } else if (r.child !== null) {
        (r.child.return = r), (r = r.child);
        continue;
      }
      if (r === e) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === e) return null;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
    return null;
  }
  var Zl = [];
  function Kl() {
    for (var e = 0; e < Zl.length; e++)
      Zl[e]._workInProgressVersionPrimary = null;
    Zl.length = 0;
  }
  var Do = M.ReactCurrentDispatcher,
    Yl = M.ReactCurrentBatchConfig,
    Gr = 0,
    Ke = null,
    it = null,
    ut = null,
    Fo = !1,
    wi = !1,
    _i = 0,
    _v = 0;
  function wt() {
    throw Error(s(321));
  }
  function Gl(e, r) {
    if (r === null) return !1;
    for (var o = 0; o < r.length && o < e.length; o++)
      if (!pn(e[o], r[o])) return !1;
    return !0;
  }
  function Xl(e, r, o, l, d, h) {
    if (
      ((Gr = h),
      (Ke = r),
      (r.memoizedState = null),
      (r.updateQueue = null),
      (r.lanes = 0),
      (Do.current = e === null || e.memoizedState === null ? Ev : Cv),
      (e = o(l, d)),
      wi)
    ) {
      h = 0;
      do {
        if (((wi = !1), (_i = 0), 25 <= h)) throw Error(s(301));
        (h += 1),
          (ut = it = null),
          (r.updateQueue = null),
          (Do.current = Tv),
          (e = o(l, d));
      } while (wi);
    }
    if (
      ((Do.current = $o),
      (r = it !== null && it.next !== null),
      (Gr = 0),
      (ut = it = Ke = null),
      (Fo = !1),
      r)
    )
      throw Error(s(300));
    return e;
  }
  function Jl() {
    var e = _i !== 0;
    return (_i = 0), e;
  }
  function jn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return ut === null ? (Ke.memoizedState = ut = e) : (ut = ut.next = e), ut;
  }
  function nn() {
    if (it === null) {
      var e = Ke.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = it.next;
    var r = ut === null ? Ke.memoizedState : ut.next;
    if (r !== null) (ut = r), (it = e);
    else {
      if (e === null) throw Error(s(310));
      (it = e),
        (e = {
          memoizedState: it.memoizedState,
          baseState: it.baseState,
          baseQueue: it.baseQueue,
          queue: it.queue,
          next: null,
        }),
        ut === null ? (Ke.memoizedState = ut = e) : (ut = ut.next = e);
    }
    return ut;
  }
  function bi(e, r) {
    return typeof r == "function" ? r(e) : r;
  }
  function eu(e) {
    var r = nn(),
      o = r.queue;
    if (o === null) throw Error(s(311));
    o.lastRenderedReducer = e;
    var l = it,
      d = l.baseQueue,
      h = o.pending;
    if (h !== null) {
      if (d !== null) {
        var y = d.next;
        (d.next = h.next), (h.next = y);
      }
      (l.baseQueue = d = h), (o.pending = null);
    }
    if (d !== null) {
      (h = d.next), (l = l.baseState);
      var C = (y = null),
        R = null,
        I = h;
      do {
        var q = I.lane;
        if ((Gr & q) === q)
          R !== null &&
            (R = R.next =
              {
                lane: 0,
                action: I.action,
                hasEagerState: I.hasEagerState,
                eagerState: I.eagerState,
                next: null,
              }),
            (l = I.hasEagerState ? I.eagerState : e(l, I.action));
        else {
          var Q = {
            lane: q,
            action: I.action,
            hasEagerState: I.hasEagerState,
            eagerState: I.eagerState,
            next: null,
          };
          R === null ? ((C = R = Q), (y = l)) : (R = R.next = Q),
            (Ke.lanes |= q),
            (Xr |= q);
        }
        I = I.next;
      } while (I !== null && I !== h);
      R === null ? (y = l) : (R.next = C),
        pn(l, r.memoizedState) || (It = !0),
        (r.memoizedState = l),
        (r.baseState = y),
        (r.baseQueue = R),
        (o.lastRenderedState = l);
    }
    if (((e = o.interleaved), e !== null)) {
      d = e;
      do (h = d.lane), (Ke.lanes |= h), (Xr |= h), (d = d.next);
      while (d !== e);
    } else d === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function tu(e) {
    var r = nn(),
      o = r.queue;
    if (o === null) throw Error(s(311));
    o.lastRenderedReducer = e;
    var l = o.dispatch,
      d = o.pending,
      h = r.memoizedState;
    if (d !== null) {
      o.pending = null;
      var y = (d = d.next);
      do (h = e(h, y.action)), (y = y.next);
      while (y !== d);
      pn(h, r.memoizedState) || (It = !0),
        (r.memoizedState = h),
        r.baseQueue === null && (r.baseState = h),
        (o.lastRenderedState = h);
    }
    return [h, l];
  }
  function Sf() {}
  function kf(e, r) {
    var o = Ke,
      l = nn(),
      d = r(),
      h = !pn(l.memoizedState, d);
    if (
      (h && ((l.memoizedState = d), (It = !0)),
      (l = l.queue),
      nu(Tf.bind(null, o, l, e), [e]),
      l.getSnapshot !== r || h || (ut !== null && ut.memoizedState.tag & 1))
    ) {
      if (
        ((o.flags |= 2048),
        Si(9, Cf.bind(null, o, l, d, r), void 0, null),
        ct === null)
      )
        throw Error(s(349));
      (Gr & 30) !== 0 || Ef(o, r, d);
    }
    return d;
  }
  function Ef(e, r, o) {
    (e.flags |= 16384),
      (e = { getSnapshot: r, value: o }),
      (r = Ke.updateQueue),
      r === null
        ? ((r = { lastEffect: null, stores: null }),
          (Ke.updateQueue = r),
          (r.stores = [e]))
        : ((o = r.stores), o === null ? (r.stores = [e]) : o.push(e));
  }
  function Cf(e, r, o, l) {
    (r.value = o), (r.getSnapshot = l), Nf(r) && Rf(e);
  }
  function Tf(e, r, o) {
    return o(function () {
      Nf(r) && Rf(e);
    });
  }
  function Nf(e) {
    var r = e.getSnapshot;
    e = e.value;
    try {
      var o = r();
      return !pn(e, o);
    } catch {
      return !0;
    }
  }
  function Rf(e) {
    var r = Qn(e, 1);
    r !== null && xn(r, e, 1, -1);
  }
  function Pf(e) {
    var r = jn();
    return (
      typeof e == "function" && (e = e()),
      (r.memoizedState = r.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: bi,
        lastRenderedState: e,
      }),
      (r.queue = e),
      (e = e.dispatch = kv.bind(null, Ke, e)),
      [r.memoizedState, e]
    );
  }
  function Si(e, r, o, l) {
    return (
      (e = { tag: e, create: r, destroy: o, deps: l, next: null }),
      (r = Ke.updateQueue),
      r === null
        ? ((r = { lastEffect: null, stores: null }),
          (Ke.updateQueue = r),
          (r.lastEffect = e.next = e))
        : ((o = r.lastEffect),
          o === null
            ? (r.lastEffect = e.next = e)
            : ((l = o.next), (o.next = e), (e.next = l), (r.lastEffect = e))),
      e
    );
  }
  function Of() {
    return nn().memoizedState;
  }
  function zo(e, r, o, l) {
    var d = jn();
    (Ke.flags |= e),
      (d.memoizedState = Si(1 | r, o, void 0, l === void 0 ? null : l));
  }
  function Bo(e, r, o, l) {
    var d = nn();
    l = l === void 0 ? null : l;
    var h = void 0;
    if (it !== null) {
      var y = it.memoizedState;
      if (((h = y.destroy), l !== null && Gl(l, y.deps))) {
        d.memoizedState = Si(r, o, h, l);
        return;
      }
    }
    (Ke.flags |= e), (d.memoizedState = Si(1 | r, o, h, l));
  }
  function Af(e, r) {
    return zo(8390656, 8, e, r);
  }
  function nu(e, r) {
    return Bo(2048, 8, e, r);
  }
  function jf(e, r) {
    return Bo(4, 2, e, r);
  }
  function Lf(e, r) {
    return Bo(4, 4, e, r);
  }
  function Mf(e, r) {
    if (typeof r == "function")
      return (
        (e = e()),
        r(e),
        function () {
          r(null);
        }
      );
    if (r != null)
      return (
        (e = e()),
        (r.current = e),
        function () {
          r.current = null;
        }
      );
  }
  function If(e, r, o) {
    return (
      (o = o != null ? o.concat([e]) : null), Bo(4, 4, Mf.bind(null, r, e), o)
    );
  }
  function ru() {}
  function Df(e, r) {
    var o = nn();
    r = r === void 0 ? null : r;
    var l = o.memoizedState;
    return l !== null && r !== null && Gl(r, l[1])
      ? l[0]
      : ((o.memoizedState = [e, r]), e);
  }
  function Ff(e, r) {
    var o = nn();
    r = r === void 0 ? null : r;
    var l = o.memoizedState;
    return l !== null && r !== null && Gl(r, l[1])
      ? l[0]
      : ((e = e()), (o.memoizedState = [e, r]), e);
  }
  function zf(e, r, o) {
    return (Gr & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (It = !0)), (e.memoizedState = o))
      : (pn(o, r) ||
          ((o = pd()), (Ke.lanes |= o), (Xr |= o), (e.baseState = !0)),
        r);
  }
  function bv(e, r) {
    var o = $e;
    ($e = o !== 0 && 4 > o ? o : 4), e(!0);
    var l = Yl.transition;
    Yl.transition = {};
    try {
      e(!1), r();
    } finally {
      ($e = o), (Yl.transition = l);
    }
  }
  function Bf() {
    return nn().memoizedState;
  }
  function Sv(e, r, o) {
    var l = _r(e);
    if (
      ((o = {
        lane: l,
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      $f(e))
    )
      Uf(r, o);
    else if (((o = vf(e, r, o, l)), o !== null)) {
      var d = Ct();
      xn(o, e, l, d), Vf(o, r, l);
    }
  }
  function kv(e, r, o) {
    var l = _r(e),
      d = {
        lane: l,
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if ($f(e)) Uf(r, d);
    else {
      var h = e.alternate;
      if (
        e.lanes === 0 &&
        (h === null || h.lanes === 0) &&
        ((h = r.lastRenderedReducer), h !== null)
      )
        try {
          var y = r.lastRenderedState,
            C = h(y, o);
          if (((d.hasEagerState = !0), (d.eagerState = C), pn(C, y))) {
            var R = r.interleaved;
            R === null
              ? ((d.next = d), Wl(r))
              : ((d.next = R.next), (R.next = d)),
              (r.interleaved = d);
            return;
          }
        } catch {
        } finally {
        }
      (o = vf(e, r, d, l)),
        o !== null && ((d = Ct()), xn(o, e, l, d), Vf(o, r, l));
    }
  }
  function $f(e) {
    var r = e.alternate;
    return e === Ke || (r !== null && r === Ke);
  }
  function Uf(e, r) {
    wi = Fo = !0;
    var o = e.pending;
    o === null ? (r.next = r) : ((r.next = o.next), (o.next = r)),
      (e.pending = r);
  }
  function Vf(e, r, o) {
    if ((o & 4194240) !== 0) {
      var l = r.lanes;
      (l &= e.pendingLanes), (o |= l), (r.lanes = o), il(e, o);
    }
  }
  var $o = {
      readContext: tn,
      useCallback: wt,
      useContext: wt,
      useEffect: wt,
      useImperativeHandle: wt,
      useInsertionEffect: wt,
      useLayoutEffect: wt,
      useMemo: wt,
      useReducer: wt,
      useRef: wt,
      useState: wt,
      useDebugValue: wt,
      useDeferredValue: wt,
      useTransition: wt,
      useMutableSource: wt,
      useSyncExternalStore: wt,
      useId: wt,
      unstable_isNewReconciler: !1,
    },
    Ev = {
      readContext: tn,
      useCallback: function (e, r) {
        return (jn().memoizedState = [e, r === void 0 ? null : r]), e;
      },
      useContext: tn,
      useEffect: Af,
      useImperativeHandle: function (e, r, o) {
        return (
          (o = o != null ? o.concat([e]) : null),
          zo(4194308, 4, Mf.bind(null, r, e), o)
        );
      },
      useLayoutEffect: function (e, r) {
        return zo(4194308, 4, e, r);
      },
      useInsertionEffect: function (e, r) {
        return zo(4, 2, e, r);
      },
      useMemo: function (e, r) {
        var o = jn();
        return (
          (r = r === void 0 ? null : r),
          (e = e()),
          (o.memoizedState = [e, r]),
          e
        );
      },
      useReducer: function (e, r, o) {
        var l = jn();
        return (
          (r = o !== void 0 ? o(r) : r),
          (l.memoizedState = l.baseState = r),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: r,
          }),
          (l.queue = e),
          (e = e.dispatch = Sv.bind(null, Ke, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var r = jn();
        return (e = { current: e }), (r.memoizedState = e);
      },
      useState: Pf,
      useDebugValue: ru,
      useDeferredValue: function (e) {
        return (jn().memoizedState = e);
      },
      useTransition: function () {
        var e = Pf(!1),
          r = e[0];
        return (e = bv.bind(null, e[1])), (jn().memoizedState = e), [r, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, r, o) {
        var l = Ke,
          d = jn();
        if (Qe) {
          if (o === void 0) throw Error(s(407));
          o = o();
        } else {
          if (((o = r()), ct === null)) throw Error(s(349));
          (Gr & 30) !== 0 || Ef(l, r, o);
        }
        d.memoizedState = o;
        var h = { value: o, getSnapshot: r };
        return (
          (d.queue = h),
          Af(Tf.bind(null, l, h, e), [e]),
          (l.flags |= 2048),
          Si(9, Cf.bind(null, l, h, o, r), void 0, null),
          o
        );
      },
      useId: function () {
        var e = jn(),
          r = ct.identifierPrefix;
        if (Qe) {
          var o = qn,
            l = Hn;
          (o = (l & ~(1 << (32 - hn(l) - 1))).toString(32) + o),
            (r = ":" + r + "R" + o),
            (o = _i++),
            0 < o && (r += "H" + o.toString(32)),
            (r += ":");
        } else (o = _v++), (r = ":" + r + "r" + o.toString(32) + ":");
        return (e.memoizedState = r);
      },
      unstable_isNewReconciler: !1,
    },
    Cv = {
      readContext: tn,
      useCallback: Df,
      useContext: tn,
      useEffect: nu,
      useImperativeHandle: If,
      useInsertionEffect: jf,
      useLayoutEffect: Lf,
      useMemo: Ff,
      useReducer: eu,
      useRef: Of,
      useState: function () {
        return eu(bi);
      },
      useDebugValue: ru,
      useDeferredValue: function (e) {
        var r = nn();
        return zf(r, it.memoizedState, e);
      },
      useTransition: function () {
        var e = eu(bi)[0],
          r = nn().memoizedState;
        return [e, r];
      },
      useMutableSource: Sf,
      useSyncExternalStore: kf,
      useId: Bf,
      unstable_isNewReconciler: !1,
    },
    Tv = {
      readContext: tn,
      useCallback: Df,
      useContext: tn,
      useEffect: nu,
      useImperativeHandle: If,
      useInsertionEffect: jf,
      useLayoutEffect: Lf,
      useMemo: Ff,
      useReducer: tu,
      useRef: Of,
      useState: function () {
        return tu(bi);
      },
      useDebugValue: ru,
      useDeferredValue: function (e) {
        var r = nn();
        return it === null ? (r.memoizedState = e) : zf(r, it.memoizedState, e);
      },
      useTransition: function () {
        var e = tu(bi)[0],
          r = nn().memoizedState;
        return [e, r];
      },
      useMutableSource: Sf,
      useSyncExternalStore: kf,
      useId: Bf,
      unstable_isNewReconciler: !1,
    };
  function gn(e, r) {
    if (e && e.defaultProps) {
      (r = W({}, r)), (e = e.defaultProps);
      for (var o in e) r[o] === void 0 && (r[o] = e[o]);
      return r;
    }
    return r;
  }
  function su(e, r, o, l) {
    (r = e.memoizedState),
      (o = o(l, r)),
      (o = o == null ? r : W({}, r, o)),
      (e.memoizedState = o),
      e.lanes === 0 && (e.updateQueue.baseState = o);
  }
  var Uo = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Wr(e) === e : !1;
    },
    enqueueSetState: function (e, r, o) {
      e = e._reactInternals;
      var l = Ct(),
        d = _r(e),
        h = Zn(l, d);
      (h.payload = r),
        o != null && (h.callback = o),
        (r = yr(e, h, d)),
        r !== null && (xn(r, e, d, l), Lo(r, e, d));
    },
    enqueueReplaceState: function (e, r, o) {
      e = e._reactInternals;
      var l = Ct(),
        d = _r(e),
        h = Zn(l, d);
      (h.tag = 1),
        (h.payload = r),
        o != null && (h.callback = o),
        (r = yr(e, h, d)),
        r !== null && (xn(r, e, d, l), Lo(r, e, d));
    },
    enqueueForceUpdate: function (e, r) {
      e = e._reactInternals;
      var o = Ct(),
        l = _r(e),
        d = Zn(o, l);
      (d.tag = 2),
        r != null && (d.callback = r),
        (r = yr(e, d, l)),
        r !== null && (xn(r, e, l, o), Lo(r, e, l));
    },
  };
  function Wf(e, r, o, l, d, h, y) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, h, y)
        : r.prototype && r.prototype.isPureReactComponent
        ? !ui(o, l) || !ui(d, h)
        : !0
    );
  }
  function Hf(e, r, o) {
    var l = !1,
      d = pr,
      h = r.contextType;
    return (
      typeof h == "object" && h !== null
        ? (h = tn(h))
        : ((d = Mt(r) ? qr : xt.current),
          (l = r.contextTypes),
          (h = (l = l != null) ? ws(e, d) : pr)),
      (r = new r(o, h)),
      (e.memoizedState =
        r.state !== null && r.state !== void 0 ? r.state : null),
      (r.updater = Uo),
      (e.stateNode = r),
      (r._reactInternals = e),
      l &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = d),
        (e.__reactInternalMemoizedMaskedChildContext = h)),
      r
    );
  }
  function qf(e, r, o, l) {
    (e = r.state),
      typeof r.componentWillReceiveProps == "function" &&
        r.componentWillReceiveProps(o, l),
      typeof r.UNSAFE_componentWillReceiveProps == "function" &&
        r.UNSAFE_componentWillReceiveProps(o, l),
      r.state !== e && Uo.enqueueReplaceState(r, r.state, null);
  }
  function iu(e, r, o, l) {
    var d = e.stateNode;
    (d.props = o), (d.state = e.memoizedState), (d.refs = {}), Hl(e);
    var h = r.contextType;
    typeof h == "object" && h !== null
      ? (d.context = tn(h))
      : ((h = Mt(r) ? qr : xt.current), (d.context = ws(e, h))),
      (d.state = e.memoizedState),
      (h = r.getDerivedStateFromProps),
      typeof h == "function" && (su(e, r, h, o), (d.state = e.memoizedState)),
      typeof r.getDerivedStateFromProps == "function" ||
        typeof d.getSnapshotBeforeUpdate == "function" ||
        (typeof d.UNSAFE_componentWillMount != "function" &&
          typeof d.componentWillMount != "function") ||
        ((r = d.state),
        typeof d.componentWillMount == "function" && d.componentWillMount(),
        typeof d.UNSAFE_componentWillMount == "function" &&
          d.UNSAFE_componentWillMount(),
        r !== d.state && Uo.enqueueReplaceState(d, d.state, null),
        Mo(e, o, d, l),
        (d.state = e.memoizedState)),
      typeof d.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Ns(e, r) {
    try {
      var o = "",
        l = r;
      do (o += ve(l)), (l = l.return);
      while (l);
      var d = o;
    } catch (h) {
      d =
        `
Error generating stack: ` +
        h.message +
        `
` +
        h.stack;
    }
    return { value: e, source: r, stack: d, digest: null };
  }
  function ou(e, r, o) {
    return { value: e, source: null, stack: o ?? null, digest: r ?? null };
  }
  function au(e, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  var Nv = typeof WeakMap == "function" ? WeakMap : Map;
  function Qf(e, r, o) {
    (o = Zn(-1, o)), (o.tag = 3), (o.payload = { element: null });
    var l = r.value;
    return (
      (o.callback = function () {
        Ko || ((Ko = !0), (bu = l)), au(e, r);
      }),
      o
    );
  }
  function Zf(e, r, o) {
    (o = Zn(-1, o)), (o.tag = 3);
    var l = e.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var d = r.value;
      (o.payload = function () {
        return l(d);
      }),
        (o.callback = function () {
          au(e, r);
        });
    }
    var h = e.stateNode;
    return (
      h !== null &&
        typeof h.componentDidCatch == "function" &&
        (o.callback = function () {
          au(e, r),
            typeof l != "function" &&
              (xr === null ? (xr = new Set([this])) : xr.add(this));
          var y = r.stack;
          this.componentDidCatch(r.value, {
            componentStack: y !== null ? y : "",
          });
        }),
      o
    );
  }
  function Kf(e, r, o) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Nv();
      var d = new Set();
      l.set(r, d);
    } else (d = l.get(r)), d === void 0 && ((d = new Set()), l.set(r, d));
    d.has(o) || (d.add(o), (e = Uv.bind(null, e, r, o)), r.then(e, e));
  }
  function Yf(e) {
    do {
      var r;
      if (
        ((r = e.tag === 13) &&
          ((r = e.memoizedState),
          (r = r !== null ? r.dehydrated !== null : !0)),
        r)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Gf(e, r, o, l, d) {
    return (e.mode & 1) === 0
      ? (e === r
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (o.flags |= 131072),
            (o.flags &= -52805),
            o.tag === 1 &&
              (o.alternate === null
                ? (o.tag = 17)
                : ((r = Zn(-1, 1)), (r.tag = 2), yr(o, r, 1))),
            (o.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = d), e);
  }
  var Rv = M.ReactCurrentOwner,
    It = !1;
  function Et(e, r, o, l) {
    r.child = e === null ? yf(r, null, o, l) : ks(r, e.child, o, l);
  }
  function Xf(e, r, o, l, d) {
    o = o.render;
    var h = r.ref;
    return (
      Cs(r, d),
      (l = Xl(e, r, o, l, h, d)),
      (o = Jl()),
      e !== null && !It
        ? ((r.updateQueue = e.updateQueue),
          (r.flags &= -2053),
          (e.lanes &= ~d),
          Kn(e, r, d))
        : (Qe && o && Ml(r), (r.flags |= 1), Et(e, r, l, d), r.child)
    );
  }
  function Jf(e, r, o, l, d) {
    if (e === null) {
      var h = o.type;
      return typeof h == "function" &&
        !Ru(h) &&
        h.defaultProps === void 0 &&
        o.compare === null &&
        o.defaultProps === void 0
        ? ((r.tag = 15), (r.type = h), eh(e, r, h, l, d))
        : ((e = ta(o.type, null, l, r, r.mode, d)),
          (e.ref = r.ref),
          (e.return = r),
          (r.child = e));
    }
    if (((h = e.child), (e.lanes & d) === 0)) {
      var y = h.memoizedProps;
      if (
        ((o = o.compare), (o = o !== null ? o : ui), o(y, l) && e.ref === r.ref)
      )
        return Kn(e, r, d);
    }
    return (
      (r.flags |= 1),
      (e = Sr(h, l)),
      (e.ref = r.ref),
      (e.return = r),
      (r.child = e)
    );
  }
  function eh(e, r, o, l, d) {
    if (e !== null) {
      var h = e.memoizedProps;
      if (ui(h, l) && e.ref === r.ref)
        if (((It = !1), (r.pendingProps = l = h), (e.lanes & d) !== 0))
          (e.flags & 131072) !== 0 && (It = !0);
        else return (r.lanes = e.lanes), Kn(e, r, d);
    }
    return lu(e, r, o, l, d);
  }
  function th(e, r, o) {
    var l = r.pendingProps,
      d = l.children,
      h = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden")
      if ((r.mode & 1) === 0)
        (r.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Ve(Ps, Zt),
          (Zt |= o);
      else {
        if ((o & 1073741824) === 0)
          return (
            (e = h !== null ? h.baseLanes | o : o),
            (r.lanes = r.childLanes = 1073741824),
            (r.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (r.updateQueue = null),
            Ve(Ps, Zt),
            (Zt |= e),
            null
          );
        (r.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (l = h !== null ? h.baseLanes : o),
          Ve(Ps, Zt),
          (Zt |= l);
      }
    else
      h !== null ? ((l = h.baseLanes | o), (r.memoizedState = null)) : (l = o),
        Ve(Ps, Zt),
        (Zt |= l);
    return Et(e, r, d, o), r.child;
  }
  function nh(e, r) {
    var o = r.ref;
    ((e === null && o !== null) || (e !== null && e.ref !== o)) &&
      ((r.flags |= 512), (r.flags |= 2097152));
  }
  function lu(e, r, o, l, d) {
    var h = Mt(o) ? qr : xt.current;
    return (
      (h = ws(r, h)),
      Cs(r, d),
      (o = Xl(e, r, o, l, h, d)),
      (l = Jl()),
      e !== null && !It
        ? ((r.updateQueue = e.updateQueue),
          (r.flags &= -2053),
          (e.lanes &= ~d),
          Kn(e, r, d))
        : (Qe && l && Ml(r), (r.flags |= 1), Et(e, r, o, d), r.child)
    );
  }
  function rh(e, r, o, l, d) {
    if (Mt(o)) {
      var h = !0;
      Co(r);
    } else h = !1;
    if ((Cs(r, d), r.stateNode === null))
      Wo(e, r), Hf(r, o, l), iu(r, o, l, d), (l = !0);
    else if (e === null) {
      var y = r.stateNode,
        C = r.memoizedProps;
      y.props = C;
      var R = y.context,
        I = o.contextType;
      typeof I == "object" && I !== null
        ? (I = tn(I))
        : ((I = Mt(o) ? qr : xt.current), (I = ws(r, I)));
      var q = o.getDerivedStateFromProps,
        Q =
          typeof q == "function" ||
          typeof y.getSnapshotBeforeUpdate == "function";
      Q ||
        (typeof y.UNSAFE_componentWillReceiveProps != "function" &&
          typeof y.componentWillReceiveProps != "function") ||
        ((C !== l || R !== I) && qf(r, y, l, I)),
        (gr = !1);
      var H = r.memoizedState;
      (y.state = H),
        Mo(r, l, y, d),
        (R = r.memoizedState),
        C !== l || H !== R || Lt.current || gr
          ? (typeof q == "function" && (su(r, o, q, l), (R = r.memoizedState)),
            (C = gr || Wf(r, o, C, l, H, R, I))
              ? (Q ||
                  (typeof y.UNSAFE_componentWillMount != "function" &&
                    typeof y.componentWillMount != "function") ||
                  (typeof y.componentWillMount == "function" &&
                    y.componentWillMount(),
                  typeof y.UNSAFE_componentWillMount == "function" &&
                    y.UNSAFE_componentWillMount()),
                typeof y.componentDidMount == "function" &&
                  (r.flags |= 4194308))
              : (typeof y.componentDidMount == "function" &&
                  (r.flags |= 4194308),
                (r.memoizedProps = l),
                (r.memoizedState = R)),
            (y.props = l),
            (y.state = R),
            (y.context = I),
            (l = C))
          : (typeof y.componentDidMount == "function" && (r.flags |= 4194308),
            (l = !1));
    } else {
      (y = r.stateNode),
        xf(e, r),
        (C = r.memoizedProps),
        (I = r.type === r.elementType ? C : gn(r.type, C)),
        (y.props = I),
        (Q = r.pendingProps),
        (H = y.context),
        (R = o.contextType),
        typeof R == "object" && R !== null
          ? (R = tn(R))
          : ((R = Mt(o) ? qr : xt.current), (R = ws(r, R)));
      var ie = o.getDerivedStateFromProps;
      (q =
        typeof ie == "function" ||
        typeof y.getSnapshotBeforeUpdate == "function") ||
        (typeof y.UNSAFE_componentWillReceiveProps != "function" &&
          typeof y.componentWillReceiveProps != "function") ||
        ((C !== Q || H !== R) && qf(r, y, l, R)),
        (gr = !1),
        (H = r.memoizedState),
        (y.state = H),
        Mo(r, l, y, d);
      var de = r.memoizedState;
      C !== Q || H !== de || Lt.current || gr
        ? (typeof ie == "function" && (su(r, o, ie, l), (de = r.memoizedState)),
          (I = gr || Wf(r, o, I, l, H, de, R) || !1)
            ? (q ||
                (typeof y.UNSAFE_componentWillUpdate != "function" &&
                  typeof y.componentWillUpdate != "function") ||
                (typeof y.componentWillUpdate == "function" &&
                  y.componentWillUpdate(l, de, R),
                typeof y.UNSAFE_componentWillUpdate == "function" &&
                  y.UNSAFE_componentWillUpdate(l, de, R)),
              typeof y.componentDidUpdate == "function" && (r.flags |= 4),
              typeof y.getSnapshotBeforeUpdate == "function" &&
                (r.flags |= 1024))
            : (typeof y.componentDidUpdate != "function" ||
                (C === e.memoizedProps && H === e.memoizedState) ||
                (r.flags |= 4),
              typeof y.getSnapshotBeforeUpdate != "function" ||
                (C === e.memoizedProps && H === e.memoizedState) ||
                (r.flags |= 1024),
              (r.memoizedProps = l),
              (r.memoizedState = de)),
          (y.props = l),
          (y.state = de),
          (y.context = R),
          (l = I))
        : (typeof y.componentDidUpdate != "function" ||
            (C === e.memoizedProps && H === e.memoizedState) ||
            (r.flags |= 4),
          typeof y.getSnapshotBeforeUpdate != "function" ||
            (C === e.memoizedProps && H === e.memoizedState) ||
            (r.flags |= 1024),
          (l = !1));
    }
    return uu(e, r, o, l, h, d);
  }
  function uu(e, r, o, l, d, h) {
    nh(e, r);
    var y = (r.flags & 128) !== 0;
    if (!l && !y) return d && lf(r, o, !1), Kn(e, r, h);
    (l = r.stateNode), (Rv.current = r);
    var C =
      y && typeof o.getDerivedStateFromError != "function" ? null : l.render();
    return (
      (r.flags |= 1),
      e !== null && y
        ? ((r.child = ks(r, e.child, null, h)), (r.child = ks(r, null, C, h)))
        : Et(e, r, C, h),
      (r.memoizedState = l.state),
      d && lf(r, o, !0),
      r.child
    );
  }
  function sh(e) {
    var r = e.stateNode;
    r.pendingContext
      ? of(e, r.pendingContext, r.pendingContext !== r.context)
      : r.context && of(e, r.context, !1),
      ql(e, r.containerInfo);
  }
  function ih(e, r, o, l, d) {
    return Ss(), zl(d), (r.flags |= 256), Et(e, r, o, l), r.child;
  }
  var cu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function du(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function oh(e, r, o) {
    var l = r.pendingProps,
      d = Ze.current,
      h = !1,
      y = (r.flags & 128) !== 0,
      C;
    if (
      ((C = y) ||
        (C = e !== null && e.memoizedState === null ? !1 : (d & 2) !== 0),
      C
        ? ((h = !0), (r.flags &= -129))
        : (e === null || e.memoizedState !== null) && (d |= 1),
      Ve(Ze, d & 1),
      e === null)
    )
      return (
        Fl(r),
        (e = r.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((r.mode & 1) === 0
              ? (r.lanes = 1)
              : e.data === "$!"
              ? (r.lanes = 8)
              : (r.lanes = 1073741824),
            null)
          : ((y = l.children),
            (e = l.fallback),
            h
              ? ((l = r.mode),
                (h = r.child),
                (y = { mode: "hidden", children: y }),
                (l & 1) === 0 && h !== null
                  ? ((h.childLanes = 0), (h.pendingProps = y))
                  : (h = na(y, l, 0, null)),
                (e = ns(e, l, o, null)),
                (h.return = r),
                (e.return = r),
                (h.sibling = e),
                (r.child = h),
                (r.child.memoizedState = du(o)),
                (r.memoizedState = cu),
                e)
              : fu(r, y))
      );
    if (((d = e.memoizedState), d !== null && ((C = d.dehydrated), C !== null)))
      return Pv(e, r, y, l, C, d, o);
    if (h) {
      (h = l.fallback), (y = r.mode), (d = e.child), (C = d.sibling);
      var R = { mode: "hidden", children: l.children };
      return (
        (y & 1) === 0 && r.child !== d
          ? ((l = r.child),
            (l.childLanes = 0),
            (l.pendingProps = R),
            (r.deletions = null))
          : ((l = Sr(d, R)), (l.subtreeFlags = d.subtreeFlags & 14680064)),
        C !== null ? (h = Sr(C, h)) : ((h = ns(h, y, o, null)), (h.flags |= 2)),
        (h.return = r),
        (l.return = r),
        (l.sibling = h),
        (r.child = l),
        (l = h),
        (h = r.child),
        (y = e.child.memoizedState),
        (y =
          y === null
            ? du(o)
            : {
                baseLanes: y.baseLanes | o,
                cachePool: null,
                transitions: y.transitions,
              }),
        (h.memoizedState = y),
        (h.childLanes = e.childLanes & ~o),
        (r.memoizedState = cu),
        l
      );
    }
    return (
      (h = e.child),
      (e = h.sibling),
      (l = Sr(h, { mode: "visible", children: l.children })),
      (r.mode & 1) === 0 && (l.lanes = o),
      (l.return = r),
      (l.sibling = null),
      e !== null &&
        ((o = r.deletions),
        o === null ? ((r.deletions = [e]), (r.flags |= 16)) : o.push(e)),
      (r.child = l),
      (r.memoizedState = null),
      l
    );
  }
  function fu(e, r) {
    return (
      (r = na({ mode: "visible", children: r }, e.mode, 0, null)),
      (r.return = e),
      (e.child = r)
    );
  }
  function Vo(e, r, o, l) {
    return (
      l !== null && zl(l),
      ks(r, e.child, null, o),
      (e = fu(r, r.pendingProps.children)),
      (e.flags |= 2),
      (r.memoizedState = null),
      e
    );
  }
  function Pv(e, r, o, l, d, h, y) {
    if (o)
      return r.flags & 256
        ? ((r.flags &= -257), (l = ou(Error(s(422)))), Vo(e, r, y, l))
        : r.memoizedState !== null
        ? ((r.child = e.child), (r.flags |= 128), null)
        : ((h = l.fallback),
          (d = r.mode),
          (l = na({ mode: "visible", children: l.children }, d, 0, null)),
          (h = ns(h, d, y, null)),
          (h.flags |= 2),
          (l.return = r),
          (h.return = r),
          (l.sibling = h),
          (r.child = l),
          (r.mode & 1) !== 0 && ks(r, e.child, null, y),
          (r.child.memoizedState = du(y)),
          (r.memoizedState = cu),
          h);
    if ((r.mode & 1) === 0) return Vo(e, r, y, null);
    if (d.data === "$!") {
      if (((l = d.nextSibling && d.nextSibling.dataset), l)) var C = l.dgst;
      return (
        (l = C), (h = Error(s(419))), (l = ou(h, l, void 0)), Vo(e, r, y, l)
      );
    }
    if (((C = (y & e.childLanes) !== 0), It || C)) {
      if (((l = ct), l !== null)) {
        switch (y & -y) {
          case 4:
            d = 2;
            break;
          case 16:
            d = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            d = 32;
            break;
          case 536870912:
            d = 268435456;
            break;
          default:
            d = 0;
        }
        (d = (d & (l.suspendedLanes | y)) !== 0 ? 0 : d),
          d !== 0 &&
            d !== h.retryLane &&
            ((h.retryLane = d), Qn(e, d), xn(l, e, d, -1));
      }
      return Nu(), (l = ou(Error(s(421)))), Vo(e, r, y, l);
    }
    return d.data === "$?"
      ? ((r.flags |= 128),
        (r.child = e.child),
        (r = Vv.bind(null, e)),
        (d._reactRetry = r),
        null)
      : ((e = h.treeContext),
        (Qt = fr(d.nextSibling)),
        (qt = r),
        (Qe = !0),
        (mn = null),
        e !== null &&
          ((Jt[en++] = Hn),
          (Jt[en++] = qn),
          (Jt[en++] = Qr),
          (Hn = e.id),
          (qn = e.overflow),
          (Qr = r)),
        (r = fu(r, l.children)),
        (r.flags |= 4096),
        r);
  }
  function ah(e, r, o) {
    e.lanes |= r;
    var l = e.alternate;
    l !== null && (l.lanes |= r), Vl(e.return, r, o);
  }
  function hu(e, r, o, l, d) {
    var h = e.memoizedState;
    h === null
      ? (e.memoizedState = {
          isBackwards: r,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: o,
          tailMode: d,
        })
      : ((h.isBackwards = r),
        (h.rendering = null),
        (h.renderingStartTime = 0),
        (h.last = l),
        (h.tail = o),
        (h.tailMode = d));
  }
  function lh(e, r, o) {
    var l = r.pendingProps,
      d = l.revealOrder,
      h = l.tail;
    if ((Et(e, r, l.children, o), (l = Ze.current), (l & 2) !== 0))
      (l = (l & 1) | 2), (r.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = r.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && ah(e, o, r);
          else if (e.tag === 19) ah(e, o, r);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === r) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === r) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      l &= 1;
    }
    if ((Ve(Ze, l), (r.mode & 1) === 0)) r.memoizedState = null;
    else
      switch (d) {
        case "forwards":
          for (o = r.child, d = null; o !== null; )
            (e = o.alternate),
              e !== null && Io(e) === null && (d = o),
              (o = o.sibling);
          (o = d),
            o === null
              ? ((d = r.child), (r.child = null))
              : ((d = o.sibling), (o.sibling = null)),
            hu(r, !1, d, o, h);
          break;
        case "backwards":
          for (o = null, d = r.child, r.child = null; d !== null; ) {
            if (((e = d.alternate), e !== null && Io(e) === null)) {
              r.child = d;
              break;
            }
            (e = d.sibling), (d.sibling = o), (o = d), (d = e);
          }
          hu(r, !0, o, null, h);
          break;
        case "together":
          hu(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Wo(e, r) {
    (r.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (r.alternate = null), (r.flags |= 2));
  }
  function Kn(e, r, o) {
    if (
      (e !== null && (r.dependencies = e.dependencies),
      (Xr |= r.lanes),
      (o & r.childLanes) === 0)
    )
      return null;
    if (e !== null && r.child !== e.child) throw Error(s(153));
    if (r.child !== null) {
      for (
        e = r.child, o = Sr(e, e.pendingProps), r.child = o, o.return = r;
        e.sibling !== null;

      )
        (e = e.sibling),
          (o = o.sibling = Sr(e, e.pendingProps)),
          (o.return = r);
      o.sibling = null;
    }
    return r.child;
  }
  function Ov(e, r, o) {
    switch (r.tag) {
      case 3:
        sh(r), Ss();
        break;
      case 5:
        bf(r);
        break;
      case 1:
        Mt(r.type) && Co(r);
        break;
      case 4:
        ql(r, r.stateNode.containerInfo);
        break;
      case 10:
        var l = r.type._context,
          d = r.memoizedProps.value;
        Ve(Ao, l._currentValue), (l._currentValue = d);
        break;
      case 13:
        if (((l = r.memoizedState), l !== null))
          return l.dehydrated !== null
            ? (Ve(Ze, Ze.current & 1), (r.flags |= 128), null)
            : (o & r.child.childLanes) !== 0
            ? oh(e, r, o)
            : (Ve(Ze, Ze.current & 1),
              (e = Kn(e, r, o)),
              e !== null ? e.sibling : null);
        Ve(Ze, Ze.current & 1);
        break;
      case 19:
        if (((l = (o & r.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (l) return lh(e, r, o);
          r.flags |= 128;
        }
        if (
          ((d = r.memoizedState),
          d !== null &&
            ((d.rendering = null), (d.tail = null), (d.lastEffect = null)),
          Ve(Ze, Ze.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (r.lanes = 0), th(e, r, o);
    }
    return Kn(e, r, o);
  }
  var uh, pu, ch, dh;
  (uh = function (e, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6) e.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        (o.child.return = o), (o = o.child);
        continue;
      }
      if (o === r) break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r) return;
        o = o.return;
      }
      (o.sibling.return = o.return), (o = o.sibling);
    }
  }),
    (pu = function () {}),
    (ch = function (e, r, o, l) {
      var d = e.memoizedProps;
      if (d !== l) {
        (e = r.stateNode), Yr(An.current);
        var h = null;
        switch (o) {
          case "input":
            (d = Ue(e, d)), (l = Ue(e, l)), (h = []);
            break;
          case "select":
            (d = W({}, d, { value: void 0 })),
              (l = W({}, l, { value: void 0 })),
              (h = []);
            break;
          case "textarea":
            (d = Nn(e, d)), (l = Nn(e, l)), (h = []);
            break;
          default:
            typeof d.onClick != "function" &&
              typeof l.onClick == "function" &&
              (e.onclick = So);
        }
        Xt(o, l);
        var y;
        o = null;
        for (I in d)
          if (!l.hasOwnProperty(I) && d.hasOwnProperty(I) && d[I] != null)
            if (I === "style") {
              var C = d[I];
              for (y in C) C.hasOwnProperty(y) && (o || (o = {}), (o[y] = ""));
            } else
              I !== "dangerouslySetInnerHTML" &&
                I !== "children" &&
                I !== "suppressContentEditableWarning" &&
                I !== "suppressHydrationWarning" &&
                I !== "autoFocus" &&
                (a.hasOwnProperty(I)
                  ? h || (h = [])
                  : (h = h || []).push(I, null));
        for (I in l) {
          var R = l[I];
          if (
            ((C = d?.[I]),
            l.hasOwnProperty(I) && R !== C && (R != null || C != null))
          )
            if (I === "style")
              if (C) {
                for (y in C)
                  !C.hasOwnProperty(y) ||
                    (R && R.hasOwnProperty(y)) ||
                    (o || (o = {}), (o[y] = ""));
                for (y in R)
                  R.hasOwnProperty(y) &&
                    C[y] !== R[y] &&
                    (o || (o = {}), (o[y] = R[y]));
              } else o || (h || (h = []), h.push(I, o)), (o = R);
            else
              I === "dangerouslySetInnerHTML"
                ? ((R = R ? R.__html : void 0),
                  (C = C ? C.__html : void 0),
                  R != null && C !== R && (h = h || []).push(I, R))
                : I === "children"
                ? (typeof R != "string" && typeof R != "number") ||
                  (h = h || []).push(I, "" + R)
                : I !== "suppressContentEditableWarning" &&
                  I !== "suppressHydrationWarning" &&
                  (a.hasOwnProperty(I)
                    ? (R != null && I === "onScroll" && We("scroll", e),
                      h || C === R || (h = []))
                    : (h = h || []).push(I, R));
        }
        o && (h = h || []).push("style", o);
        var I = h;
        (r.updateQueue = I) && (r.flags |= 4);
      }
    }),
    (dh = function (e, r, o, l) {
      o !== l && (r.flags |= 4);
    });
  function ki(e, r) {
    if (!Qe)
      switch (e.tailMode) {
        case "hidden":
          r = e.tail;
          for (var o = null; r !== null; )
            r.alternate !== null && (o = r), (r = r.sibling);
          o === null ? (e.tail = null) : (o.sibling = null);
          break;
        case "collapsed":
          o = e.tail;
          for (var l = null; o !== null; )
            o.alternate !== null && (l = o), (o = o.sibling);
          l === null
            ? r || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function _t(e) {
    var r = e.alternate !== null && e.alternate.child === e.child,
      o = 0,
      l = 0;
    if (r)
      for (var d = e.child; d !== null; )
        (o |= d.lanes | d.childLanes),
          (l |= d.subtreeFlags & 14680064),
          (l |= d.flags & 14680064),
          (d.return = e),
          (d = d.sibling);
    else
      for (d = e.child; d !== null; )
        (o |= d.lanes | d.childLanes),
          (l |= d.subtreeFlags),
          (l |= d.flags),
          (d.return = e),
          (d = d.sibling);
    return (e.subtreeFlags |= l), (e.childLanes = o), r;
  }
  function Av(e, r, o) {
    var l = r.pendingProps;
    switch ((Il(r), r.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return _t(r), null;
      case 1:
        return Mt(r.type) && Eo(), _t(r), null;
      case 3:
        return (
          (l = r.stateNode),
          Ts(),
          He(Lt),
          He(xt),
          Kl(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (Po(r)
              ? (r.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (r.flags & 256) === 0) ||
                ((r.flags |= 1024), mn !== null && (Eu(mn), (mn = null)))),
          pu(e, r),
          _t(r),
          null
        );
      case 5:
        Ql(r);
        var d = Yr(xi.current);
        if (((o = r.type), e !== null && r.stateNode != null))
          ch(e, r, o, l, d),
            e.ref !== r.ref && ((r.flags |= 512), (r.flags |= 2097152));
        else {
          if (!l) {
            if (r.stateNode === null) throw Error(s(166));
            return _t(r), null;
          }
          if (((e = Yr(An.current)), Po(r))) {
            (l = r.stateNode), (o = r.type);
            var h = r.memoizedProps;
            switch (((l[On] = r), (l[pi] = h), (e = (r.mode & 1) !== 0), o)) {
              case "dialog":
                We("cancel", l), We("close", l);
                break;
              case "iframe":
              case "object":
              case "embed":
                We("load", l);
                break;
              case "video":
              case "audio":
                for (d = 0; d < di.length; d++) We(di[d], l);
                break;
              case "source":
                We("error", l);
                break;
              case "img":
              case "image":
              case "link":
                We("error", l), We("load", l);
                break;
              case "details":
                We("toggle", l);
                break;
              case "input":
                tt(l, h), We("invalid", l);
                break;
              case "select":
                (l._wrapperState = { wasMultiple: !!h.multiple }),
                  We("invalid", l);
                break;
              case "textarea":
                Pt(l, h), We("invalid", l);
            }
            Xt(o, h), (d = null);
            for (var y in h)
              if (h.hasOwnProperty(y)) {
                var C = h[y];
                y === "children"
                  ? typeof C == "string"
                    ? l.textContent !== C &&
                      (h.suppressHydrationWarning !== !0 &&
                        bo(l.textContent, C, e),
                      (d = ["children", C]))
                    : typeof C == "number" &&
                      l.textContent !== "" + C &&
                      (h.suppressHydrationWarning !== !0 &&
                        bo(l.textContent, C, e),
                      (d = ["children", "" + C]))
                  : a.hasOwnProperty(y) &&
                    C != null &&
                    y === "onScroll" &&
                    We("scroll", l);
              }
            switch (o) {
              case "input":
                Ae(l), Nt(l, h, !0);
                break;
              case "textarea":
                Ae(l), $r(l);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof h.onClick == "function" && (l.onclick = So);
            }
            (l = d), (r.updateQueue = l), l !== null && (r.flags |= 4);
          } else {
            (y = d.nodeType === 9 ? d : d.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = ft(o)),
              e === "http://www.w3.org/1999/xhtml"
                ? o === "script"
                  ? ((e = y.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof l.is == "string"
                  ? (e = y.createElement(o, { is: l.is }))
                  : ((e = y.createElement(o)),
                    o === "select" &&
                      ((y = e),
                      l.multiple
                        ? (y.multiple = !0)
                        : l.size && (y.size = l.size)))
                : (e = y.createElementNS(e, o)),
              (e[On] = r),
              (e[pi] = l),
              uh(e, r, !1, !1),
              (r.stateNode = e);
            e: {
              switch (((y = Ur(o, l)), o)) {
                case "dialog":
                  We("cancel", e), We("close", e), (d = l);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  We("load", e), (d = l);
                  break;
                case "video":
                case "audio":
                  for (d = 0; d < di.length; d++) We(di[d], e);
                  d = l;
                  break;
                case "source":
                  We("error", e), (d = l);
                  break;
                case "img":
                case "image":
                case "link":
                  We("error", e), We("load", e), (d = l);
                  break;
                case "details":
                  We("toggle", e), (d = l);
                  break;
                case "input":
                  tt(e, l), (d = Ue(e, l)), We("invalid", e);
                  break;
                case "option":
                  d = l;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!l.multiple }),
                    (d = W({}, l, { value: void 0 })),
                    We("invalid", e);
                  break;
                case "textarea":
                  Pt(e, l), (d = Nn(e, l)), We("invalid", e);
                  break;
                default:
                  d = l;
              }
              Xt(o, d), (C = d);
              for (h in C)
                if (C.hasOwnProperty(h)) {
                  var R = C[h];
                  h === "style"
                    ? cn(e, R)
                    : h === "dangerouslySetInnerHTML"
                    ? ((R = R ? R.__html : void 0), R != null && rr(e, R))
                    : h === "children"
                    ? typeof R == "string"
                      ? (o !== "textarea" || R !== "") && ht(e, R)
                      : typeof R == "number" && ht(e, "" + R)
                    : h !== "suppressContentEditableWarning" &&
                      h !== "suppressHydrationWarning" &&
                      h !== "autoFocus" &&
                      (a.hasOwnProperty(h)
                        ? R != null && h === "onScroll" && We("scroll", e)
                        : R != null && A(e, h, R, y));
                }
              switch (o) {
                case "input":
                  Ae(e), Nt(e, l, !1);
                  break;
                case "textarea":
                  Ae(e), $r(e);
                  break;
                case "option":
                  l.value != null && e.setAttribute("value", "" + xe(l.value));
                  break;
                case "select":
                  (e.multiple = !!l.multiple),
                    (h = l.value),
                    h != null
                      ? lt(e, !!l.multiple, h, !1)
                      : l.defaultValue != null &&
                        lt(e, !!l.multiple, l.defaultValue, !0);
                  break;
                default:
                  typeof d.onClick == "function" && (e.onclick = So);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l = !!l.autoFocus;
                  break e;
                case "img":
                  l = !0;
                  break e;
                default:
                  l = !1;
              }
            }
            l && (r.flags |= 4);
          }
          r.ref !== null && ((r.flags |= 512), (r.flags |= 2097152));
        }
        return _t(r), null;
      case 6:
        if (e && r.stateNode != null) dh(e, r, e.memoizedProps, l);
        else {
          if (typeof l != "string" && r.stateNode === null) throw Error(s(166));
          if (((o = Yr(xi.current)), Yr(An.current), Po(r))) {
            if (
              ((l = r.stateNode),
              (o = r.memoizedProps),
              (l[On] = r),
              (h = l.nodeValue !== o) && ((e = qt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  bo(l.nodeValue, o, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    bo(l.nodeValue, o, (e.mode & 1) !== 0);
              }
            h && (r.flags |= 4);
          } else
            (l = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(l)),
              (l[On] = r),
              (r.stateNode = l);
        }
        return _t(r), null;
      case 13:
        if (
          (He(Ze),
          (l = r.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Qe && Qt !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0)
            pf(), Ss(), (r.flags |= 98560), (h = !1);
          else if (((h = Po(r)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!h) throw Error(s(318));
              if (
                ((h = r.memoizedState),
                (h = h !== null ? h.dehydrated : null),
                !h)
              )
                throw Error(s(317));
              h[On] = r;
            } else
              Ss(),
                (r.flags & 128) === 0 && (r.memoizedState = null),
                (r.flags |= 4);
            _t(r), (h = !1);
          } else mn !== null && (Eu(mn), (mn = null)), (h = !0);
          if (!h) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0
          ? ((r.lanes = o), r)
          : ((l = l !== null),
            l !== (e !== null && e.memoizedState !== null) &&
              l &&
              ((r.child.flags |= 8192),
              (r.mode & 1) !== 0 &&
                (e === null || (Ze.current & 1) !== 0
                  ? ot === 0 && (ot = 3)
                  : Nu())),
            r.updateQueue !== null && (r.flags |= 4),
            _t(r),
            null);
      case 4:
        return (
          Ts(),
          pu(e, r),
          e === null && fi(r.stateNode.containerInfo),
          _t(r),
          null
        );
      case 10:
        return Ul(r.type._context), _t(r), null;
      case 17:
        return Mt(r.type) && Eo(), _t(r), null;
      case 19:
        if ((He(Ze), (h = r.memoizedState), h === null)) return _t(r), null;
        if (((l = (r.flags & 128) !== 0), (y = h.rendering), y === null))
          if (l) ki(h, !1);
          else {
            if (ot !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = r.child; e !== null; ) {
                if (((y = Io(e)), y !== null)) {
                  for (
                    r.flags |= 128,
                      ki(h, !1),
                      l = y.updateQueue,
                      l !== null && ((r.updateQueue = l), (r.flags |= 4)),
                      r.subtreeFlags = 0,
                      l = o,
                      o = r.child;
                    o !== null;

                  )
                    (h = o),
                      (e = l),
                      (h.flags &= 14680066),
                      (y = h.alternate),
                      y === null
                        ? ((h.childLanes = 0),
                          (h.lanes = e),
                          (h.child = null),
                          (h.subtreeFlags = 0),
                          (h.memoizedProps = null),
                          (h.memoizedState = null),
                          (h.updateQueue = null),
                          (h.dependencies = null),
                          (h.stateNode = null))
                        : ((h.childLanes = y.childLanes),
                          (h.lanes = y.lanes),
                          (h.child = y.child),
                          (h.subtreeFlags = 0),
                          (h.deletions = null),
                          (h.memoizedProps = y.memoizedProps),
                          (h.memoizedState = y.memoizedState),
                          (h.updateQueue = y.updateQueue),
                          (h.type = y.type),
                          (e = y.dependencies),
                          (h.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (o = o.sibling);
                  return Ve(Ze, (Ze.current & 1) | 2), r.child;
                }
                e = e.sibling;
              }
            h.tail !== null &&
              Je() > Os &&
              ((r.flags |= 128), (l = !0), ki(h, !1), (r.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = Io(y)), e !== null)) {
              if (
                ((r.flags |= 128),
                (l = !0),
                (o = e.updateQueue),
                o !== null && ((r.updateQueue = o), (r.flags |= 4)),
                ki(h, !0),
                h.tail === null &&
                  h.tailMode === "hidden" &&
                  !y.alternate &&
                  !Qe)
              )
                return _t(r), null;
            } else
              2 * Je() - h.renderingStartTime > Os &&
                o !== 1073741824 &&
                ((r.flags |= 128), (l = !0), ki(h, !1), (r.lanes = 4194304));
          h.isBackwards
            ? ((y.sibling = r.child), (r.child = y))
            : ((o = h.last),
              o !== null ? (o.sibling = y) : (r.child = y),
              (h.last = y));
        }
        return h.tail !== null
          ? ((r = h.tail),
            (h.rendering = r),
            (h.tail = r.sibling),
            (h.renderingStartTime = Je()),
            (r.sibling = null),
            (o = Ze.current),
            Ve(Ze, l ? (o & 1) | 2 : o & 1),
            r)
          : (_t(r), null);
      case 22:
      case 23:
        return (
          Tu(),
          (l = r.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== l && (r.flags |= 8192),
          l && (r.mode & 1) !== 0
            ? (Zt & 1073741824) !== 0 &&
              (_t(r), r.subtreeFlags & 6 && (r.flags |= 8192))
            : _t(r),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, r.tag));
  }
  function jv(e, r) {
    switch ((Il(r), r.tag)) {
      case 1:
        return (
          Mt(r.type) && Eo(),
          (e = r.flags),
          e & 65536 ? ((r.flags = (e & -65537) | 128), r) : null
        );
      case 3:
        return (
          Ts(),
          He(Lt),
          He(xt),
          Kl(),
          (e = r.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((r.flags = (e & -65537) | 128), r)
            : null
        );
      case 5:
        return Ql(r), null;
      case 13:
        if (
          (He(Ze), (e = r.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (r.alternate === null) throw Error(s(340));
          Ss();
        }
        return (
          (e = r.flags), e & 65536 ? ((r.flags = (e & -65537) | 128), r) : null
        );
      case 19:
        return He(Ze), null;
      case 4:
        return Ts(), null;
      case 10:
        return Ul(r.type._context), null;
      case 22:
      case 23:
        return Tu(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ho = !1,
    bt = !1,
    Lv = typeof WeakSet == "function" ? WeakSet : Set,
    ue = null;
  function Rs(e, r) {
    var o = e.ref;
    if (o !== null)
      if (typeof o == "function")
        try {
          o(null);
        } catch (l) {
          Ge(e, r, l);
        }
      else o.current = null;
  }
  function mu(e, r, o) {
    try {
      o();
    } catch (l) {
      Ge(e, r, l);
    }
  }
  var fh = !1;
  function Mv(e, r) {
    if (((Tl = co), (e = Vd()), xl(e))) {
      if ("selectionStart" in e)
        var o = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          o = ((o = e.ownerDocument) && o.defaultView) || window;
          var l = o.getSelection && o.getSelection();
          if (l && l.rangeCount !== 0) {
            o = l.anchorNode;
            var d = l.anchorOffset,
              h = l.focusNode;
            l = l.focusOffset;
            try {
              o.nodeType, h.nodeType;
            } catch {
              o = null;
              break e;
            }
            var y = 0,
              C = -1,
              R = -1,
              I = 0,
              q = 0,
              Q = e,
              H = null;
            t: for (;;) {
              for (
                var ie;
                Q !== o || (d !== 0 && Q.nodeType !== 3) || (C = y + d),
                  Q !== h || (l !== 0 && Q.nodeType !== 3) || (R = y + l),
                  Q.nodeType === 3 && (y += Q.nodeValue.length),
                  (ie = Q.firstChild) !== null;

              )
                (H = Q), (Q = ie);
              for (;;) {
                if (Q === e) break t;
                if (
                  (H === o && ++I === d && (C = y),
                  H === h && ++q === l && (R = y),
                  (ie = Q.nextSibling) !== null)
                )
                  break;
                (Q = H), (H = Q.parentNode);
              }
              Q = ie;
            }
            o = C === -1 || R === -1 ? null : { start: C, end: R };
          } else o = null;
        }
      o = o || { start: 0, end: 0 };
    } else o = null;
    for (
      Nl = { focusedElem: e, selectionRange: o }, co = !1, ue = r;
      ue !== null;

    )
      if (
        ((r = ue), (e = r.child), (r.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = r), (ue = e);
      else
        for (; ue !== null; ) {
          r = ue;
          try {
            var de = r.alternate;
            if ((r.flags & 1024) !== 0)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (de !== null) {
                    var fe = de.memoizedProps,
                      et = de.memoizedState,
                      j = r.stateNode,
                      O = j.getSnapshotBeforeUpdate(
                        r.elementType === r.type ? fe : gn(r.type, fe),
                        et
                      );
                    j.__reactInternalSnapshotBeforeUpdate = O;
                  }
                  break;
                case 3:
                  var L = r.stateNode.containerInfo;
                  L.nodeType === 1
                    ? (L.textContent = "")
                    : L.nodeType === 9 &&
                      L.documentElement &&
                      L.removeChild(L.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(s(163));
              }
          } catch (Z) {
            Ge(r, r.return, Z);
          }
          if (((e = r.sibling), e !== null)) {
            (e.return = r.return), (ue = e);
            break;
          }
          ue = r.return;
        }
    return (de = fh), (fh = !1), de;
  }
  function Ei(e, r, o) {
    var l = r.updateQueue;
    if (((l = l !== null ? l.lastEffect : null), l !== null)) {
      var d = (l = l.next);
      do {
        if ((d.tag & e) === e) {
          var h = d.destroy;
          (d.destroy = void 0), h !== void 0 && mu(r, o, h);
        }
        d = d.next;
      } while (d !== l);
    }
  }
  function qo(e, r) {
    if (
      ((r = r.updateQueue), (r = r !== null ? r.lastEffect : null), r !== null)
    ) {
      var o = (r = r.next);
      do {
        if ((o.tag & e) === e) {
          var l = o.create;
          o.destroy = l();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function gu(e) {
    var r = e.ref;
    if (r !== null) {
      var o = e.stateNode;
      switch (e.tag) {
        case 5:
          e = o;
          break;
        default:
          e = o;
      }
      typeof r == "function" ? r(e) : (r.current = e);
    }
  }
  function hh(e) {
    var r = e.alternate;
    r !== null && ((e.alternate = null), hh(r)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((r = e.stateNode),
        r !== null &&
          (delete r[On],
          delete r[pi],
          delete r[Al],
          delete r[yv],
          delete r[vv])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function ph(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function mh(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || ph(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function yu(e, r, o) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode),
        r
          ? o.nodeType === 8
            ? o.parentNode.insertBefore(e, r)
            : o.insertBefore(e, r)
          : (o.nodeType === 8
              ? ((r = o.parentNode), r.insertBefore(e, o))
              : ((r = o), r.appendChild(e)),
            (o = o._reactRootContainer),
            o != null || r.onclick !== null || (r.onclick = So));
    else if (l !== 4 && ((e = e.child), e !== null))
      for (yu(e, r, o), e = e.sibling; e !== null; )
        yu(e, r, o), (e = e.sibling);
  }
  function vu(e, r, o) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode), r ? o.insertBefore(e, r) : o.appendChild(e);
    else if (l !== 4 && ((e = e.child), e !== null))
      for (vu(e, r, o), e = e.sibling; e !== null; )
        vu(e, r, o), (e = e.sibling);
  }
  var mt = null,
    yn = !1;
  function vr(e, r, o) {
    for (o = o.child; o !== null; ) gh(e, r, o), (o = o.sibling);
  }
  function gh(e, r, o) {
    if (Pn && typeof Pn.onCommitFiberUnmount == "function")
      try {
        Pn.onCommitFiberUnmount(so, o);
      } catch {}
    switch (o.tag) {
      case 5:
        bt || Rs(o, r);
      case 6:
        var l = mt,
          d = yn;
        (mt = null),
          vr(e, r, o),
          (mt = l),
          (yn = d),
          mt !== null &&
            (yn
              ? ((e = mt),
                (o = o.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(o)
                  : e.removeChild(o))
              : mt.removeChild(o.stateNode));
        break;
      case 18:
        mt !== null &&
          (yn
            ? ((e = mt),
              (o = o.stateNode),
              e.nodeType === 8
                ? Ol(e.parentNode, o)
                : e.nodeType === 1 && Ol(e, o),
              ri(e))
            : Ol(mt, o.stateNode));
        break;
      case 4:
        (l = mt),
          (d = yn),
          (mt = o.stateNode.containerInfo),
          (yn = !0),
          vr(e, r, o),
          (mt = l),
          (yn = d);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !bt &&
          ((l = o.updateQueue), l !== null && ((l = l.lastEffect), l !== null))
        ) {
          d = l = l.next;
          do {
            var h = d,
              y = h.destroy;
            (h = h.tag),
              y !== void 0 && ((h & 2) !== 0 || (h & 4) !== 0) && mu(o, r, y),
              (d = d.next);
          } while (d !== l);
        }
        vr(e, r, o);
        break;
      case 1:
        if (
          !bt &&
          (Rs(o, r),
          (l = o.stateNode),
          typeof l.componentWillUnmount == "function")
        )
          try {
            (l.props = o.memoizedProps),
              (l.state = o.memoizedState),
              l.componentWillUnmount();
          } catch (C) {
            Ge(o, r, C);
          }
        vr(e, r, o);
        break;
      case 21:
        vr(e, r, o);
        break;
      case 22:
        o.mode & 1
          ? ((bt = (l = bt) || o.memoizedState !== null), vr(e, r, o), (bt = l))
          : vr(e, r, o);
        break;
      default:
        vr(e, r, o);
    }
  }
  function yh(e) {
    var r = e.updateQueue;
    if (r !== null) {
      e.updateQueue = null;
      var o = e.stateNode;
      o === null && (o = e.stateNode = new Lv()),
        r.forEach(function (l) {
          var d = Wv.bind(null, e, l);
          o.has(l) || (o.add(l), l.then(d, d));
        });
    }
  }
  function vn(e, r) {
    var o = r.deletions;
    if (o !== null)
      for (var l = 0; l < o.length; l++) {
        var d = o[l];
        try {
          var h = e,
            y = r,
            C = y;
          e: for (; C !== null; ) {
            switch (C.tag) {
              case 5:
                (mt = C.stateNode), (yn = !1);
                break e;
              case 3:
                (mt = C.stateNode.containerInfo), (yn = !0);
                break e;
              case 4:
                (mt = C.stateNode.containerInfo), (yn = !0);
                break e;
            }
            C = C.return;
          }
          if (mt === null) throw Error(s(160));
          gh(h, y, d), (mt = null), (yn = !1);
          var R = d.alternate;
          R !== null && (R.return = null), (d.return = null);
        } catch (I) {
          Ge(d, r, I);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; ) vh(r, e), (r = r.sibling);
  }
  function vh(e, r) {
    var o = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((vn(r, e), Ln(e), l & 4)) {
          try {
            Ei(3, e, e.return), qo(3, e);
          } catch (fe) {
            Ge(e, e.return, fe);
          }
          try {
            Ei(5, e, e.return);
          } catch (fe) {
            Ge(e, e.return, fe);
          }
        }
        break;
      case 1:
        vn(r, e), Ln(e), l & 512 && o !== null && Rs(o, o.return);
        break;
      case 5:
        if (
          (vn(r, e),
          Ln(e),
          l & 512 && o !== null && Rs(o, o.return),
          e.flags & 32)
        ) {
          var d = e.stateNode;
          try {
            ht(d, "");
          } catch (fe) {
            Ge(e, e.return, fe);
          }
        }
        if (l & 4 && ((d = e.stateNode), d != null)) {
          var h = e.memoizedProps,
            y = o !== null ? o.memoizedProps : h,
            C = e.type,
            R = e.updateQueue;
          if (((e.updateQueue = null), R !== null))
            try {
              C === "input" && h.type === "radio" && h.name != null && yt(d, h),
                Ur(C, y);
              var I = Ur(C, h);
              for (y = 0; y < R.length; y += 2) {
                var q = R[y],
                  Q = R[y + 1];
                q === "style"
                  ? cn(d, Q)
                  : q === "dangerouslySetInnerHTML"
                  ? rr(d, Q)
                  : q === "children"
                  ? ht(d, Q)
                  : A(d, q, Q, I);
              }
              switch (C) {
                case "input":
                  St(d, h);
                  break;
                case "textarea":
                  Br(d, h);
                  break;
                case "select":
                  var H = d._wrapperState.wasMultiple;
                  d._wrapperState.wasMultiple = !!h.multiple;
                  var ie = h.value;
                  ie != null
                    ? lt(d, !!h.multiple, ie, !1)
                    : H !== !!h.multiple &&
                      (h.defaultValue != null
                        ? lt(d, !!h.multiple, h.defaultValue, !0)
                        : lt(d, !!h.multiple, h.multiple ? [] : "", !1));
              }
              d[pi] = h;
            } catch (fe) {
              Ge(e, e.return, fe);
            }
        }
        break;
      case 6:
        if ((vn(r, e), Ln(e), l & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          (d = e.stateNode), (h = e.memoizedProps);
          try {
            d.nodeValue = h;
          } catch (fe) {
            Ge(e, e.return, fe);
          }
        }
        break;
      case 3:
        if (
          (vn(r, e), Ln(e), l & 4 && o !== null && o.memoizedState.isDehydrated)
        )
          try {
            ri(r.containerInfo);
          } catch (fe) {
            Ge(e, e.return, fe);
          }
        break;
      case 4:
        vn(r, e), Ln(e);
        break;
      case 13:
        vn(r, e),
          Ln(e),
          (d = e.child),
          d.flags & 8192 &&
            ((h = d.memoizedState !== null),
            (d.stateNode.isHidden = h),
            !h ||
              (d.alternate !== null && d.alternate.memoizedState !== null) ||
              (_u = Je())),
          l & 4 && yh(e);
        break;
      case 22:
        if (
          ((q = o !== null && o.memoizedState !== null),
          e.mode & 1 ? ((bt = (I = bt) || q), vn(r, e), (bt = I)) : vn(r, e),
          Ln(e),
          l & 8192)
        ) {
          if (
            ((I = e.memoizedState !== null),
            (e.stateNode.isHidden = I) && !q && (e.mode & 1) !== 0)
          )
            for (ue = e, q = e.child; q !== null; ) {
              for (Q = ue = q; ue !== null; ) {
                switch (((H = ue), (ie = H.child), H.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ei(4, H, H.return);
                    break;
                  case 1:
                    Rs(H, H.return);
                    var de = H.stateNode;
                    if (typeof de.componentWillUnmount == "function") {
                      (l = H), (o = H.return);
                      try {
                        (r = l),
                          (de.props = r.memoizedProps),
                          (de.state = r.memoizedState),
                          de.componentWillUnmount();
                      } catch (fe) {
                        Ge(l, o, fe);
                      }
                    }
                    break;
                  case 5:
                    Rs(H, H.return);
                    break;
                  case 22:
                    if (H.memoizedState !== null) {
                      _h(Q);
                      continue;
                    }
                }
                ie !== null ? ((ie.return = H), (ue = ie)) : _h(Q);
              }
              q = q.sibling;
            }
          e: for (q = null, Q = e; ; ) {
            if (Q.tag === 5) {
              if (q === null) {
                q = Q;
                try {
                  (d = Q.stateNode),
                    I
                      ? ((h = d.style),
                        typeof h.setProperty == "function"
                          ? h.setProperty("display", "none", "important")
                          : (h.display = "none"))
                      : ((C = Q.stateNode),
                        (R = Q.memoizedProps.style),
                        (y =
                          R != null && R.hasOwnProperty("display")
                            ? R.display
                            : null),
                        (C.style.display = un("display", y)));
                } catch (fe) {
                  Ge(e, e.return, fe);
                }
              }
            } else if (Q.tag === 6) {
              if (q === null)
                try {
                  Q.stateNode.nodeValue = I ? "" : Q.memoizedProps;
                } catch (fe) {
                  Ge(e, e.return, fe);
                }
            } else if (
              ((Q.tag !== 22 && Q.tag !== 23) ||
                Q.memoizedState === null ||
                Q === e) &&
              Q.child !== null
            ) {
              (Q.child.return = Q), (Q = Q.child);
              continue;
            }
            if (Q === e) break e;
            for (; Q.sibling === null; ) {
              if (Q.return === null || Q.return === e) break e;
              q === Q && (q = null), (Q = Q.return);
            }
            q === Q && (q = null),
              (Q.sibling.return = Q.return),
              (Q = Q.sibling);
          }
        }
        break;
      case 19:
        vn(r, e), Ln(e), l & 4 && yh(e);
        break;
      case 21:
        break;
      default:
        vn(r, e), Ln(e);
    }
  }
  function Ln(e) {
    var r = e.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = e.return; o !== null; ) {
            if (ph(o)) {
              var l = o;
              break e;
            }
            o = o.return;
          }
          throw Error(s(160));
        }
        switch (l.tag) {
          case 5:
            var d = l.stateNode;
            l.flags & 32 && (ht(d, ""), (l.flags &= -33));
            var h = mh(e);
            vu(e, h, d);
            break;
          case 3:
          case 4:
            var y = l.stateNode.containerInfo,
              C = mh(e);
            yu(e, C, y);
            break;
          default:
            throw Error(s(161));
        }
      } catch (R) {
        Ge(e, e.return, R);
      }
      e.flags &= -3;
    }
    r & 4096 && (e.flags &= -4097);
  }
  function Iv(e, r, o) {
    (ue = e), xh(e);
  }
  function xh(e, r, o) {
    for (var l = (e.mode & 1) !== 0; ue !== null; ) {
      var d = ue,
        h = d.child;
      if (d.tag === 22 && l) {
        var y = d.memoizedState !== null || Ho;
        if (!y) {
          var C = d.alternate,
            R = (C !== null && C.memoizedState !== null) || bt;
          C = Ho;
          var I = bt;
          if (((Ho = y), (bt = R) && !I))
            for (ue = d; ue !== null; )
              (y = ue),
                (R = y.child),
                y.tag === 22 && y.memoizedState !== null
                  ? bh(d)
                  : R !== null
                  ? ((R.return = y), (ue = R))
                  : bh(d);
          for (; h !== null; ) (ue = h), xh(h), (h = h.sibling);
          (ue = d), (Ho = C), (bt = I);
        }
        wh(e);
      } else
        (d.subtreeFlags & 8772) !== 0 && h !== null
          ? ((h.return = d), (ue = h))
          : wh(e);
    }
  }
  function wh(e) {
    for (; ue !== null; ) {
      var r = ue;
      if ((r.flags & 8772) !== 0) {
        var o = r.alternate;
        try {
          if ((r.flags & 8772) !== 0)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                bt || qo(5, r);
                break;
              case 1:
                var l = r.stateNode;
                if (r.flags & 4 && !bt)
                  if (o === null) l.componentDidMount();
                  else {
                    var d =
                      r.elementType === r.type
                        ? o.memoizedProps
                        : gn(r.type, o.memoizedProps);
                    l.componentDidUpdate(
                      d,
                      o.memoizedState,
                      l.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var h = r.updateQueue;
                h !== null && _f(r, h, l);
                break;
              case 3:
                var y = r.updateQueue;
                if (y !== null) {
                  if (((o = null), r.child !== null))
                    switch (r.child.tag) {
                      case 5:
                        o = r.child.stateNode;
                        break;
                      case 1:
                        o = r.child.stateNode;
                    }
                  _f(r, y, o);
                }
                break;
              case 5:
                var C = r.stateNode;
                if (o === null && r.flags & 4) {
                  o = C;
                  var R = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      R.autoFocus && o.focus();
                      break;
                    case "img":
                      R.src && (o.src = R.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var I = r.alternate;
                  if (I !== null) {
                    var q = I.memoizedState;
                    if (q !== null) {
                      var Q = q.dehydrated;
                      Q !== null && ri(Q);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(s(163));
            }
          bt || (r.flags & 512 && gu(r));
        } catch (H) {
          Ge(r, r.return, H);
        }
      }
      if (r === e) {
        ue = null;
        break;
      }
      if (((o = r.sibling), o !== null)) {
        (o.return = r.return), (ue = o);
        break;
      }
      ue = r.return;
    }
  }
  function _h(e) {
    for (; ue !== null; ) {
      var r = ue;
      if (r === e) {
        ue = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        (o.return = r.return), (ue = o);
        break;
      }
      ue = r.return;
    }
  }
  function bh(e) {
    for (; ue !== null; ) {
      var r = ue;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              qo(4, r);
            } catch (R) {
              Ge(r, o, R);
            }
            break;
          case 1:
            var l = r.stateNode;
            if (typeof l.componentDidMount == "function") {
              var d = r.return;
              try {
                l.componentDidMount();
              } catch (R) {
                Ge(r, d, R);
              }
            }
            var h = r.return;
            try {
              gu(r);
            } catch (R) {
              Ge(r, h, R);
            }
            break;
          case 5:
            var y = r.return;
            try {
              gu(r);
            } catch (R) {
              Ge(r, y, R);
            }
        }
      } catch (R) {
        Ge(r, r.return, R);
      }
      if (r === e) {
        ue = null;
        break;
      }
      var C = r.sibling;
      if (C !== null) {
        (C.return = r.return), (ue = C);
        break;
      }
      ue = r.return;
    }
  }
  var Dv = Math.ceil,
    Qo = M.ReactCurrentDispatcher,
    xu = M.ReactCurrentOwner,
    rn = M.ReactCurrentBatchConfig,
    Ie = 0,
    ct = null,
    nt = null,
    gt = 0,
    Zt = 0,
    Ps = hr(0),
    ot = 0,
    Ci = null,
    Xr = 0,
    Zo = 0,
    wu = 0,
    Ti = null,
    Dt = null,
    _u = 0,
    Os = 1 / 0,
    Yn = null,
    Ko = !1,
    bu = null,
    xr = null,
    Yo = !1,
    wr = null,
    Go = 0,
    Ni = 0,
    Su = null,
    Xo = -1,
    Jo = 0;
  function Ct() {
    return (Ie & 6) !== 0 ? Je() : Xo !== -1 ? Xo : (Xo = Je());
  }
  function _r(e) {
    return (e.mode & 1) === 0
      ? 1
      : (Ie & 2) !== 0 && gt !== 0
      ? gt & -gt
      : wv.transition !== null
      ? (Jo === 0 && (Jo = pd()), Jo)
      : ((e = $e),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Sd(e.type))),
        e);
  }
  function xn(e, r, o, l) {
    if (50 < Ni) throw ((Ni = 0), (Su = null), Error(s(185)));
    Xs(e, o, l),
      ((Ie & 2) === 0 || e !== ct) &&
        (e === ct && ((Ie & 2) === 0 && (Zo |= o), ot === 4 && br(e, gt)),
        Ft(e, l),
        o === 1 &&
          Ie === 0 &&
          (r.mode & 1) === 0 &&
          ((Os = Je() + 500), To && mr()));
  }
  function Ft(e, r) {
    var o = e.callbackNode;
    wy(e, r);
    var l = ao(e, e === ct ? gt : 0);
    if (l === 0)
      o !== null && dd(o), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((r = l & -l), e.callbackPriority !== r)) {
      if ((o != null && dd(o), r === 1))
        e.tag === 0 ? xv(kh.bind(null, e)) : uf(kh.bind(null, e)),
          mv(function () {
            (Ie & 6) === 0 && mr();
          }),
          (o = null);
      else {
        switch (md(l)) {
          case 1:
            o = nl;
            break;
          case 4:
            o = fd;
            break;
          case 16:
            o = ro;
            break;
          case 536870912:
            o = hd;
            break;
          default:
            o = ro;
        }
        o = Ah(o, Sh.bind(null, e));
      }
      (e.callbackPriority = r), (e.callbackNode = o);
    }
  }
  function Sh(e, r) {
    if (((Xo = -1), (Jo = 0), (Ie & 6) !== 0)) throw Error(s(327));
    var o = e.callbackNode;
    if (As() && e.callbackNode !== o) return null;
    var l = ao(e, e === ct ? gt : 0);
    if (l === 0) return null;
    if ((l & 30) !== 0 || (l & e.expiredLanes) !== 0 || r) r = ea(e, l);
    else {
      r = l;
      var d = Ie;
      Ie |= 2;
      var h = Ch();
      (ct !== e || gt !== r) && ((Yn = null), (Os = Je() + 500), es(e, r));
      do
        try {
          Bv();
          break;
        } catch (C) {
          Eh(e, C);
        }
      while (!0);
      $l(),
        (Qo.current = h),
        (Ie = d),
        nt !== null ? (r = 0) : ((ct = null), (gt = 0), (r = ot));
    }
    if (r !== 0) {
      if (
        (r === 2 && ((d = rl(e)), d !== 0 && ((l = d), (r = ku(e, d)))),
        r === 1)
      )
        throw ((o = Ci), es(e, 0), br(e, l), Ft(e, Je()), o);
      if (r === 6) br(e, l);
      else {
        if (
          ((d = e.current.alternate),
          (l & 30) === 0 &&
            !Fv(d) &&
            ((r = ea(e, l)),
            r === 2 && ((h = rl(e)), h !== 0 && ((l = h), (r = ku(e, h)))),
            r === 1))
        )
          throw ((o = Ci), es(e, 0), br(e, l), Ft(e, Je()), o);
        switch (((e.finishedWork = d), (e.finishedLanes = l), r)) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            ts(e, Dt, Yn);
            break;
          case 3:
            if (
              (br(e, l),
              (l & 130023424) === l && ((r = _u + 500 - Je()), 10 < r))
            ) {
              if (ao(e, 0) !== 0) break;
              if (((d = e.suspendedLanes), (d & l) !== l)) {
                Ct(), (e.pingedLanes |= e.suspendedLanes & d);
                break;
              }
              e.timeoutHandle = Pl(ts.bind(null, e, Dt, Yn), r);
              break;
            }
            ts(e, Dt, Yn);
            break;
          case 4:
            if ((br(e, l), (l & 4194240) === l)) break;
            for (r = e.eventTimes, d = -1; 0 < l; ) {
              var y = 31 - hn(l);
              (h = 1 << y), (y = r[y]), y > d && (d = y), (l &= ~h);
            }
            if (
              ((l = d),
              (l = Je() - l),
              (l =
                (120 > l
                  ? 120
                  : 480 > l
                  ? 480
                  : 1080 > l
                  ? 1080
                  : 1920 > l
                  ? 1920
                  : 3e3 > l
                  ? 3e3
                  : 4320 > l
                  ? 4320
                  : 1960 * Dv(l / 1960)) - l),
              10 < l)
            ) {
              e.timeoutHandle = Pl(ts.bind(null, e, Dt, Yn), l);
              break;
            }
            ts(e, Dt, Yn);
            break;
          case 5:
            ts(e, Dt, Yn);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return Ft(e, Je()), e.callbackNode === o ? Sh.bind(null, e) : null;
  }
  function ku(e, r) {
    var o = Ti;
    return (
      e.current.memoizedState.isDehydrated && (es(e, r).flags |= 256),
      (e = ea(e, r)),
      e !== 2 && ((r = Dt), (Dt = o), r !== null && Eu(r)),
      e
    );
  }
  function Eu(e) {
    Dt === null ? (Dt = e) : Dt.push.apply(Dt, e);
  }
  function Fv(e) {
    for (var r = e; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && ((o = o.stores), o !== null))
          for (var l = 0; l < o.length; l++) {
            var d = o[l],
              h = d.getSnapshot;
            d = d.value;
            try {
              if (!pn(h(), d)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((o = r.child), r.subtreeFlags & 16384 && o !== null))
        (o.return = r), (r = o);
      else {
        if (r === e) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === e) return !0;
          r = r.return;
        }
        (r.sibling.return = r.return), (r = r.sibling);
      }
    }
    return !0;
  }
  function br(e, r) {
    for (
      r &= ~wu,
        r &= ~Zo,
        e.suspendedLanes |= r,
        e.pingedLanes &= ~r,
        e = e.expirationTimes;
      0 < r;

    ) {
      var o = 31 - hn(r),
        l = 1 << o;
      (e[o] = -1), (r &= ~l);
    }
  }
  function kh(e) {
    if ((Ie & 6) !== 0) throw Error(s(327));
    As();
    var r = ao(e, 0);
    if ((r & 1) === 0) return Ft(e, Je()), null;
    var o = ea(e, r);
    if (e.tag !== 0 && o === 2) {
      var l = rl(e);
      l !== 0 && ((r = l), (o = ku(e, l)));
    }
    if (o === 1) throw ((o = Ci), es(e, 0), br(e, r), Ft(e, Je()), o);
    if (o === 6) throw Error(s(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = r),
      ts(e, Dt, Yn),
      Ft(e, Je()),
      null
    );
  }
  function Cu(e, r) {
    var o = Ie;
    Ie |= 1;
    try {
      return e(r);
    } finally {
      (Ie = o), Ie === 0 && ((Os = Je() + 500), To && mr());
    }
  }
  function Jr(e) {
    wr !== null && wr.tag === 0 && (Ie & 6) === 0 && As();
    var r = Ie;
    Ie |= 1;
    var o = rn.transition,
      l = $e;
    try {
      if (((rn.transition = null), ($e = 1), e)) return e();
    } finally {
      ($e = l), (rn.transition = o), (Ie = r), (Ie & 6) === 0 && mr();
    }
  }
  function Tu() {
    (Zt = Ps.current), He(Ps);
  }
  function es(e, r) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var o = e.timeoutHandle;
    if ((o !== -1 && ((e.timeoutHandle = -1), pv(o)), nt !== null))
      for (o = nt.return; o !== null; ) {
        var l = o;
        switch ((Il(l), l.tag)) {
          case 1:
            (l = l.type.childContextTypes), l != null && Eo();
            break;
          case 3:
            Ts(), He(Lt), He(xt), Kl();
            break;
          case 5:
            Ql(l);
            break;
          case 4:
            Ts();
            break;
          case 13:
            He(Ze);
            break;
          case 19:
            He(Ze);
            break;
          case 10:
            Ul(l.type._context);
            break;
          case 22:
          case 23:
            Tu();
        }
        o = o.return;
      }
    if (
      ((ct = e),
      (nt = e = Sr(e.current, null)),
      (gt = Zt = r),
      (ot = 0),
      (Ci = null),
      (wu = Zo = Xr = 0),
      (Dt = Ti = null),
      Kr !== null)
    ) {
      for (r = 0; r < Kr.length; r++)
        if (((o = Kr[r]), (l = o.interleaved), l !== null)) {
          o.interleaved = null;
          var d = l.next,
            h = o.pending;
          if (h !== null) {
            var y = h.next;
            (h.next = d), (l.next = y);
          }
          o.pending = l;
        }
      Kr = null;
    }
    return e;
  }
  function Eh(e, r) {
    do {
      var o = nt;
      try {
        if (($l(), (Do.current = $o), Fo)) {
          for (var l = Ke.memoizedState; l !== null; ) {
            var d = l.queue;
            d !== null && (d.pending = null), (l = l.next);
          }
          Fo = !1;
        }
        if (
          ((Gr = 0),
          (ut = it = Ke = null),
          (wi = !1),
          (_i = 0),
          (xu.current = null),
          o === null || o.return === null)
        ) {
          (ot = 1), (Ci = r), (nt = null);
          break;
        }
        e: {
          var h = e,
            y = o.return,
            C = o,
            R = r;
          if (
            ((r = gt),
            (C.flags |= 32768),
            R !== null && typeof R == "object" && typeof R.then == "function")
          ) {
            var I = R,
              q = C,
              Q = q.tag;
            if ((q.mode & 1) === 0 && (Q === 0 || Q === 11 || Q === 15)) {
              var H = q.alternate;
              H
                ? ((q.updateQueue = H.updateQueue),
                  (q.memoizedState = H.memoizedState),
                  (q.lanes = H.lanes))
                : ((q.updateQueue = null), (q.memoizedState = null));
            }
            var ie = Yf(y);
            if (ie !== null) {
              (ie.flags &= -257),
                Gf(ie, y, C, h, r),
                ie.mode & 1 && Kf(h, I, r),
                (r = ie),
                (R = I);
              var de = r.updateQueue;
              if (de === null) {
                var fe = new Set();
                fe.add(R), (r.updateQueue = fe);
              } else de.add(R);
              break e;
            } else {
              if ((r & 1) === 0) {
                Kf(h, I, r), Nu();
                break e;
              }
              R = Error(s(426));
            }
          } else if (Qe && C.mode & 1) {
            var et = Yf(y);
            if (et !== null) {
              (et.flags & 65536) === 0 && (et.flags |= 256),
                Gf(et, y, C, h, r),
                zl(Ns(R, C));
              break e;
            }
          }
          (h = R = Ns(R, C)),
            ot !== 4 && (ot = 2),
            Ti === null ? (Ti = [h]) : Ti.push(h),
            (h = y);
          do {
            switch (h.tag) {
              case 3:
                (h.flags |= 65536), (r &= -r), (h.lanes |= r);
                var j = Qf(h, R, r);
                wf(h, j);
                break e;
              case 1:
                C = R;
                var O = h.type,
                  L = h.stateNode;
                if (
                  (h.flags & 128) === 0 &&
                  (typeof O.getDerivedStateFromError == "function" ||
                    (L !== null &&
                      typeof L.componentDidCatch == "function" &&
                      (xr === null || !xr.has(L))))
                ) {
                  (h.flags |= 65536), (r &= -r), (h.lanes |= r);
                  var Z = Zf(h, C, r);
                  wf(h, Z);
                  break e;
                }
            }
            h = h.return;
          } while (h !== null);
        }
        Nh(o);
      } catch (pe) {
        (r = pe), nt === o && o !== null && (nt = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Ch() {
    var e = Qo.current;
    return (Qo.current = $o), e === null ? $o : e;
  }
  function Nu() {
    (ot === 0 || ot === 3 || ot === 2) && (ot = 4),
      ct === null ||
        ((Xr & 268435455) === 0 && (Zo & 268435455) === 0) ||
        br(ct, gt);
  }
  function ea(e, r) {
    var o = Ie;
    Ie |= 2;
    var l = Ch();
    (ct !== e || gt !== r) && ((Yn = null), es(e, r));
    do
      try {
        zv();
        break;
      } catch (d) {
        Eh(e, d);
      }
    while (!0);
    if (($l(), (Ie = o), (Qo.current = l), nt !== null)) throw Error(s(261));
    return (ct = null), (gt = 0), ot;
  }
  function zv() {
    for (; nt !== null; ) Th(nt);
  }
  function Bv() {
    for (; nt !== null && !dy(); ) Th(nt);
  }
  function Th(e) {
    var r = Oh(e.alternate, e, Zt);
    (e.memoizedProps = e.pendingProps),
      r === null ? Nh(e) : (nt = r),
      (xu.current = null);
  }
  function Nh(e) {
    var r = e;
    do {
      var o = r.alternate;
      if (((e = r.return), (r.flags & 32768) === 0)) {
        if (((o = Av(o, r, Zt)), o !== null)) {
          nt = o;
          return;
        }
      } else {
        if (((o = jv(o, r)), o !== null)) {
          (o.flags &= 32767), (nt = o);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (ot = 6), (nt = null);
          return;
        }
      }
      if (((r = r.sibling), r !== null)) {
        nt = r;
        return;
      }
      nt = r = e;
    } while (r !== null);
    ot === 0 && (ot = 5);
  }
  function ts(e, r, o) {
    var l = $e,
      d = rn.transition;
    try {
      (rn.transition = null), ($e = 1), $v(e, r, o, l);
    } finally {
      (rn.transition = d), ($e = l);
    }
    return null;
  }
  function $v(e, r, o, l) {
    do As();
    while (wr !== null);
    if ((Ie & 6) !== 0) throw Error(s(327));
    o = e.finishedWork;
    var d = e.finishedLanes;
    if (o === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), o === e.current))
      throw Error(s(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var h = o.lanes | o.childLanes;
    if (
      (_y(e, h),
      e === ct && ((nt = ct = null), (gt = 0)),
      ((o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0) ||
        Yo ||
        ((Yo = !0),
        Ah(ro, function () {
          return As(), null;
        })),
      (h = (o.flags & 15990) !== 0),
      (o.subtreeFlags & 15990) !== 0 || h)
    ) {
      (h = rn.transition), (rn.transition = null);
      var y = $e;
      $e = 1;
      var C = Ie;
      (Ie |= 4),
        (xu.current = null),
        Mv(e, o),
        vh(o, e),
        av(Nl),
        (co = !!Tl),
        (Nl = Tl = null),
        (e.current = o),
        Iv(o),
        fy(),
        (Ie = C),
        ($e = y),
        (rn.transition = h);
    } else e.current = o;
    if (
      (Yo && ((Yo = !1), (wr = e), (Go = d)),
      (h = e.pendingLanes),
      h === 0 && (xr = null),
      my(o.stateNode),
      Ft(e, Je()),
      r !== null)
    )
      for (l = e.onRecoverableError, o = 0; o < r.length; o++)
        (d = r[o]), l(d.value, { componentStack: d.stack, digest: d.digest });
    if (Ko) throw ((Ko = !1), (e = bu), (bu = null), e);
    return (
      (Go & 1) !== 0 && e.tag !== 0 && As(),
      (h = e.pendingLanes),
      (h & 1) !== 0 ? (e === Su ? Ni++ : ((Ni = 0), (Su = e))) : (Ni = 0),
      mr(),
      null
    );
  }
  function As() {
    if (wr !== null) {
      var e = md(Go),
        r = rn.transition,
        o = $e;
      try {
        if (((rn.transition = null), ($e = 16 > e ? 16 : e), wr === null))
          var l = !1;
        else {
          if (((e = wr), (wr = null), (Go = 0), (Ie & 6) !== 0))
            throw Error(s(331));
          var d = Ie;
          for (Ie |= 4, ue = e.current; ue !== null; ) {
            var h = ue,
              y = h.child;
            if ((ue.flags & 16) !== 0) {
              var C = h.deletions;
              if (C !== null) {
                for (var R = 0; R < C.length; R++) {
                  var I = C[R];
                  for (ue = I; ue !== null; ) {
                    var q = ue;
                    switch (q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ei(8, q, h);
                    }
                    var Q = q.child;
                    if (Q !== null) (Q.return = q), (ue = Q);
                    else
                      for (; ue !== null; ) {
                        q = ue;
                        var H = q.sibling,
                          ie = q.return;
                        if ((hh(q), q === I)) {
                          ue = null;
                          break;
                        }
                        if (H !== null) {
                          (H.return = ie), (ue = H);
                          break;
                        }
                        ue = ie;
                      }
                  }
                }
                var de = h.alternate;
                if (de !== null) {
                  var fe = de.child;
                  if (fe !== null) {
                    de.child = null;
                    do {
                      var et = fe.sibling;
                      (fe.sibling = null), (fe = et);
                    } while (fe !== null);
                  }
                }
                ue = h;
              }
            }
            if ((h.subtreeFlags & 2064) !== 0 && y !== null)
              (y.return = h), (ue = y);
            else
              e: for (; ue !== null; ) {
                if (((h = ue), (h.flags & 2048) !== 0))
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ei(9, h, h.return);
                  }
                var j = h.sibling;
                if (j !== null) {
                  (j.return = h.return), (ue = j);
                  break e;
                }
                ue = h.return;
              }
          }
          var O = e.current;
          for (ue = O; ue !== null; ) {
            y = ue;
            var L = y.child;
            if ((y.subtreeFlags & 2064) !== 0 && L !== null)
              (L.return = y), (ue = L);
            else
              e: for (y = O; ue !== null; ) {
                if (((C = ue), (C.flags & 2048) !== 0))
                  try {
                    switch (C.tag) {
                      case 0:
                      case 11:
                      case 15:
                        qo(9, C);
                    }
                  } catch (pe) {
                    Ge(C, C.return, pe);
                  }
                if (C === y) {
                  ue = null;
                  break e;
                }
                var Z = C.sibling;
                if (Z !== null) {
                  (Z.return = C.return), (ue = Z);
                  break e;
                }
                ue = C.return;
              }
          }
          if (
            ((Ie = d),
            mr(),
            Pn && typeof Pn.onPostCommitFiberRoot == "function")
          )
            try {
              Pn.onPostCommitFiberRoot(so, e);
            } catch {}
          l = !0;
        }
        return l;
      } finally {
        ($e = o), (rn.transition = r);
      }
    }
    return !1;
  }
  function Rh(e, r, o) {
    (r = Ns(o, r)),
      (r = Qf(e, r, 1)),
      (e = yr(e, r, 1)),
      (r = Ct()),
      e !== null && (Xs(e, 1, r), Ft(e, r));
  }
  function Ge(e, r, o) {
    if (e.tag === 3) Rh(e, e, o);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Rh(r, e, o);
          break;
        } else if (r.tag === 1) {
          var l = r.stateNode;
          if (
            typeof r.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (xr === null || !xr.has(l)))
          ) {
            (e = Ns(o, e)),
              (e = Zf(r, e, 1)),
              (r = yr(r, e, 1)),
              (e = Ct()),
              r !== null && (Xs(r, 1, e), Ft(r, e));
            break;
          }
        }
        r = r.return;
      }
  }
  function Uv(e, r, o) {
    var l = e.pingCache;
    l !== null && l.delete(r),
      (r = Ct()),
      (e.pingedLanes |= e.suspendedLanes & o),
      ct === e &&
        (gt & o) === o &&
        (ot === 4 || (ot === 3 && (gt & 130023424) === gt && 500 > Je() - _u)
          ? es(e, 0)
          : (wu |= o)),
      Ft(e, r);
  }
  function Ph(e, r) {
    r === 0 &&
      ((e.mode & 1) === 0
        ? (r = 1)
        : ((r = oo), (oo <<= 1), (oo & 130023424) === 0 && (oo = 4194304)));
    var o = Ct();
    (e = Qn(e, r)), e !== null && (Xs(e, r, o), Ft(e, o));
  }
  function Vv(e) {
    var r = e.memoizedState,
      o = 0;
    r !== null && (o = r.retryLane), Ph(e, o);
  }
  function Wv(e, r) {
    var o = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          d = e.memoizedState;
        d !== null && (o = d.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    l !== null && l.delete(r), Ph(e, o);
  }
  var Oh;
  Oh = function (e, r, o) {
    if (e !== null)
      if (e.memoizedProps !== r.pendingProps || Lt.current) It = !0;
      else {
        if ((e.lanes & o) === 0 && (r.flags & 128) === 0)
          return (It = !1), Ov(e, r, o);
        It = (e.flags & 131072) !== 0;
      }
    else (It = !1), Qe && (r.flags & 1048576) !== 0 && cf(r, Ro, r.index);
    switch (((r.lanes = 0), r.tag)) {
      case 2:
        var l = r.type;
        Wo(e, r), (e = r.pendingProps);
        var d = ws(r, xt.current);
        Cs(r, o), (d = Xl(null, r, l, e, d, o));
        var h = Jl();
        return (
          (r.flags |= 1),
          typeof d == "object" &&
          d !== null &&
          typeof d.render == "function" &&
          d.$$typeof === void 0
            ? ((r.tag = 1),
              (r.memoizedState = null),
              (r.updateQueue = null),
              Mt(l) ? ((h = !0), Co(r)) : (h = !1),
              (r.memoizedState =
                d.state !== null && d.state !== void 0 ? d.state : null),
              Hl(r),
              (d.updater = Uo),
              (r.stateNode = d),
              (d._reactInternals = r),
              iu(r, l, e, o),
              (r = uu(null, r, l, !0, h, o)))
            : ((r.tag = 0), Qe && h && Ml(r), Et(null, r, d, o), (r = r.child)),
          r
        );
      case 16:
        l = r.elementType;
        e: {
          switch (
            (Wo(e, r),
            (e = r.pendingProps),
            (d = l._init),
            (l = d(l._payload)),
            (r.type = l),
            (d = r.tag = qv(l)),
            (e = gn(l, e)),
            d)
          ) {
            case 0:
              r = lu(null, r, l, e, o);
              break e;
            case 1:
              r = rh(null, r, l, e, o);
              break e;
            case 11:
              r = Xf(null, r, l, e, o);
              break e;
            case 14:
              r = Jf(null, r, l, gn(l.type, e), o);
              break e;
          }
          throw Error(s(306, l, ""));
        }
        return r;
      case 0:
        return (
          (l = r.type),
          (d = r.pendingProps),
          (d = r.elementType === l ? d : gn(l, d)),
          lu(e, r, l, d, o)
        );
      case 1:
        return (
          (l = r.type),
          (d = r.pendingProps),
          (d = r.elementType === l ? d : gn(l, d)),
          rh(e, r, l, d, o)
        );
      case 3:
        e: {
          if ((sh(r), e === null)) throw Error(s(387));
          (l = r.pendingProps),
            (h = r.memoizedState),
            (d = h.element),
            xf(e, r),
            Mo(r, l, null, o);
          var y = r.memoizedState;
          if (((l = y.element), h.isDehydrated))
            if (
              ((h = {
                element: l,
                isDehydrated: !1,
                cache: y.cache,
                pendingSuspenseBoundaries: y.pendingSuspenseBoundaries,
                transitions: y.transitions,
              }),
              (r.updateQueue.baseState = h),
              (r.memoizedState = h),
              r.flags & 256)
            ) {
              (d = Ns(Error(s(423)), r)), (r = ih(e, r, l, o, d));
              break e;
            } else if (l !== d) {
              (d = Ns(Error(s(424)), r)), (r = ih(e, r, l, o, d));
              break e;
            } else
              for (
                Qt = fr(r.stateNode.containerInfo.firstChild),
                  qt = r,
                  Qe = !0,
                  mn = null,
                  o = yf(r, null, l, o),
                  r.child = o;
                o;

              )
                (o.flags = (o.flags & -3) | 4096), (o = o.sibling);
          else {
            if ((Ss(), l === d)) {
              r = Kn(e, r, o);
              break e;
            }
            Et(e, r, l, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return (
          bf(r),
          e === null && Fl(r),
          (l = r.type),
          (d = r.pendingProps),
          (h = e !== null ? e.memoizedProps : null),
          (y = d.children),
          Rl(l, d) ? (y = null) : h !== null && Rl(l, h) && (r.flags |= 32),
          nh(e, r),
          Et(e, r, y, o),
          r.child
        );
      case 6:
        return e === null && Fl(r), null;
      case 13:
        return oh(e, r, o);
      case 4:
        return (
          ql(r, r.stateNode.containerInfo),
          (l = r.pendingProps),
          e === null ? (r.child = ks(r, null, l, o)) : Et(e, r, l, o),
          r.child
        );
      case 11:
        return (
          (l = r.type),
          (d = r.pendingProps),
          (d = r.elementType === l ? d : gn(l, d)),
          Xf(e, r, l, d, o)
        );
      case 7:
        return Et(e, r, r.pendingProps, o), r.child;
      case 8:
        return Et(e, r, r.pendingProps.children, o), r.child;
      case 12:
        return Et(e, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (
            ((l = r.type._context),
            (d = r.pendingProps),
            (h = r.memoizedProps),
            (y = d.value),
            Ve(Ao, l._currentValue),
            (l._currentValue = y),
            h !== null)
          )
            if (pn(h.value, y)) {
              if (h.children === d.children && !Lt.current) {
                r = Kn(e, r, o);
                break e;
              }
            } else
              for (h = r.child, h !== null && (h.return = r); h !== null; ) {
                var C = h.dependencies;
                if (C !== null) {
                  y = h.child;
                  for (var R = C.firstContext; R !== null; ) {
                    if (R.context === l) {
                      if (h.tag === 1) {
                        (R = Zn(-1, o & -o)), (R.tag = 2);
                        var I = h.updateQueue;
                        if (I !== null) {
                          I = I.shared;
                          var q = I.pending;
                          q === null
                            ? (R.next = R)
                            : ((R.next = q.next), (q.next = R)),
                            (I.pending = R);
                        }
                      }
                      (h.lanes |= o),
                        (R = h.alternate),
                        R !== null && (R.lanes |= o),
                        Vl(h.return, o, r),
                        (C.lanes |= o);
                      break;
                    }
                    R = R.next;
                  }
                } else if (h.tag === 10) y = h.type === r.type ? null : h.child;
                else if (h.tag === 18) {
                  if (((y = h.return), y === null)) throw Error(s(341));
                  (y.lanes |= o),
                    (C = y.alternate),
                    C !== null && (C.lanes |= o),
                    Vl(y, o, r),
                    (y = h.sibling);
                } else y = h.child;
                if (y !== null) y.return = h;
                else
                  for (y = h; y !== null; ) {
                    if (y === r) {
                      y = null;
                      break;
                    }
                    if (((h = y.sibling), h !== null)) {
                      (h.return = y.return), (y = h);
                      break;
                    }
                    y = y.return;
                  }
                h = y;
              }
          Et(e, r, d.children, o), (r = r.child);
        }
        return r;
      case 9:
        return (
          (d = r.type),
          (l = r.pendingProps.children),
          Cs(r, o),
          (d = tn(d)),
          (l = l(d)),
          (r.flags |= 1),
          Et(e, r, l, o),
          r.child
        );
      case 14:
        return (
          (l = r.type),
          (d = gn(l, r.pendingProps)),
          (d = gn(l.type, d)),
          Jf(e, r, l, d, o)
        );
      case 15:
        return eh(e, r, r.type, r.pendingProps, o);
      case 17:
        return (
          (l = r.type),
          (d = r.pendingProps),
          (d = r.elementType === l ? d : gn(l, d)),
          Wo(e, r),
          (r.tag = 1),
          Mt(l) ? ((e = !0), Co(r)) : (e = !1),
          Cs(r, o),
          Hf(r, l, d),
          iu(r, l, d, o),
          uu(null, r, l, !0, e, o)
        );
      case 19:
        return lh(e, r, o);
      case 22:
        return th(e, r, o);
    }
    throw Error(s(156, r.tag));
  };
  function Ah(e, r) {
    return cd(e, r);
  }
  function Hv(e, r, o, l) {
    (this.tag = e),
      (this.key = o),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = r),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function sn(e, r, o, l) {
    return new Hv(e, r, o, l);
  }
  function Ru(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function qv(e) {
    if (typeof e == "function") return Ru(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === X)) return 11;
      if (e === ge) return 14;
    }
    return 2;
  }
  function Sr(e, r) {
    var o = e.alternate;
    return (
      o === null
        ? ((o = sn(e.tag, r, e.key, e.mode)),
          (o.elementType = e.elementType),
          (o.type = e.type),
          (o.stateNode = e.stateNode),
          (o.alternate = e),
          (e.alternate = o))
        : ((o.pendingProps = r),
          (o.type = e.type),
          (o.flags = 0),
          (o.subtreeFlags = 0),
          (o.deletions = null)),
      (o.flags = e.flags & 14680064),
      (o.childLanes = e.childLanes),
      (o.lanes = e.lanes),
      (o.child = e.child),
      (o.memoizedProps = e.memoizedProps),
      (o.memoizedState = e.memoizedState),
      (o.updateQueue = e.updateQueue),
      (r = e.dependencies),
      (o.dependencies =
        r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }),
      (o.sibling = e.sibling),
      (o.index = e.index),
      (o.ref = e.ref),
      o
    );
  }
  function ta(e, r, o, l, d, h) {
    var y = 2;
    if (((l = e), typeof e == "function")) Ru(e) && (y = 1);
    else if (typeof e == "string") y = 5;
    else
      e: switch (e) {
        case $:
          return ns(o.children, d, h, r);
        case K:
          (y = 8), (d |= 8);
          break;
        case te:
          return (
            (e = sn(12, o, r, d | 2)), (e.elementType = te), (e.lanes = h), e
          );
        case ye:
          return (e = sn(13, o, r, d)), (e.elementType = ye), (e.lanes = h), e;
        case V:
          return (e = sn(19, o, r, d)), (e.elementType = V), (e.lanes = h), e;
        case ne:
          return na(o, d, h, r);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case re:
                y = 10;
                break e;
              case se:
                y = 9;
                break e;
              case X:
                y = 11;
                break e;
              case ge:
                y = 14;
                break e;
              case ae:
                (y = 16), (l = null);
                break e;
            }
          throw Error(s(130, e == null ? e : typeof e, ""));
      }
    return (
      (r = sn(y, o, r, d)), (r.elementType = e), (r.type = l), (r.lanes = h), r
    );
  }
  function ns(e, r, o, l) {
    return (e = sn(7, e, l, r)), (e.lanes = o), e;
  }
  function na(e, r, o, l) {
    return (
      (e = sn(22, e, l, r)),
      (e.elementType = ne),
      (e.lanes = o),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Pu(e, r, o) {
    return (e = sn(6, e, null, r)), (e.lanes = o), e;
  }
  function Ou(e, r, o) {
    return (
      (r = sn(4, e.children !== null ? e.children : [], e.key, r)),
      (r.lanes = o),
      (r.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      r
    );
  }
  function Qv(e, r, o, l, d) {
    (this.tag = r),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = sl(0)),
      (this.expirationTimes = sl(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = sl(0)),
      (this.identifierPrefix = l),
      (this.onRecoverableError = d),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Au(e, r, o, l, d, h, y, C, R) {
    return (
      (e = new Qv(e, r, o, C, R)),
      r === 1 ? ((r = 1), h === !0 && (r |= 8)) : (r = 0),
      (h = sn(3, null, null, r)),
      (e.current = h),
      (h.stateNode = e),
      (h.memoizedState = {
        element: l,
        isDehydrated: o,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Hl(h),
      e
    );
  }
  function Zv(e, r, o) {
    var l =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: U,
      key: l == null ? null : "" + l,
      children: e,
      containerInfo: r,
      implementation: o,
    };
  }
  function jh(e) {
    if (!e) return pr;
    e = e._reactInternals;
    e: {
      if (Wr(e) !== e || e.tag !== 1) throw Error(s(170));
      var r = e;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Mt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var o = e.type;
      if (Mt(o)) return af(e, o, r);
    }
    return r;
  }
  function Lh(e, r, o, l, d, h, y, C, R) {
    return (
      (e = Au(o, l, !0, e, d, h, y, C, R)),
      (e.context = jh(null)),
      (o = e.current),
      (l = Ct()),
      (d = _r(o)),
      (h = Zn(l, d)),
      (h.callback = r ?? null),
      yr(o, h, d),
      (e.current.lanes = d),
      Xs(e, d, l),
      Ft(e, l),
      e
    );
  }
  function ra(e, r, o, l) {
    var d = r.current,
      h = Ct(),
      y = _r(d);
    return (
      (o = jh(o)),
      r.context === null ? (r.context = o) : (r.pendingContext = o),
      (r = Zn(h, y)),
      (r.payload = { element: e }),
      (l = l === void 0 ? null : l),
      l !== null && (r.callback = l),
      (e = yr(d, r, y)),
      e !== null && (xn(e, d, y, h), Lo(e, d, y)),
      y
    );
  }
  function sa(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Mh(e, r) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var o = e.retryLane;
      e.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function ju(e, r) {
    Mh(e, r), (e = e.alternate) && Mh(e, r);
  }
  function Kv() {
    return null;
  }
  var Ih =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Lu(e) {
    this._internalRoot = e;
  }
  (ia.prototype.render = Lu.prototype.render =
    function (e) {
      var r = this._internalRoot;
      if (r === null) throw Error(s(409));
      ra(e, r, null, null);
    }),
    (ia.prototype.unmount = Lu.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var r = e.containerInfo;
          Jr(function () {
            ra(null, e, null, null);
          }),
            (r[Vn] = null);
        }
      });
  function ia(e) {
    this._internalRoot = e;
  }
  ia.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var r = vd();
      e = { blockedOn: null, target: e, priority: r };
      for (var o = 0; o < ur.length && r !== 0 && r < ur[o].priority; o++);
      ur.splice(o, 0, e), o === 0 && _d(e);
    }
  };
  function Mu(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function oa(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Dh() {}
  function Yv(e, r, o, l, d) {
    if (d) {
      if (typeof l == "function") {
        var h = l;
        l = function () {
          var I = sa(y);
          h.call(I);
        };
      }
      var y = Lh(r, l, e, 0, null, !1, !1, "", Dh);
      return (
        (e._reactRootContainer = y),
        (e[Vn] = y.current),
        fi(e.nodeType === 8 ? e.parentNode : e),
        Jr(),
        y
      );
    }
    for (; (d = e.lastChild); ) e.removeChild(d);
    if (typeof l == "function") {
      var C = l;
      l = function () {
        var I = sa(R);
        C.call(I);
      };
    }
    var R = Au(e, 0, !1, null, null, !1, !1, "", Dh);
    return (
      (e._reactRootContainer = R),
      (e[Vn] = R.current),
      fi(e.nodeType === 8 ? e.parentNode : e),
      Jr(function () {
        ra(r, R, o, l);
      }),
      R
    );
  }
  function aa(e, r, o, l, d) {
    var h = o._reactRootContainer;
    if (h) {
      var y = h;
      if (typeof d == "function") {
        var C = d;
        d = function () {
          var R = sa(y);
          C.call(R);
        };
      }
      ra(r, y, e, d);
    } else y = Yv(o, r, e, d, l);
    return sa(y);
  }
  (gd = function (e) {
    switch (e.tag) {
      case 3:
        var r = e.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = Gs(r.pendingLanes);
          o !== 0 &&
            (il(r, o | 1),
            Ft(r, Je()),
            (Ie & 6) === 0 && ((Os = Je() + 500), mr()));
        }
        break;
      case 13:
        Jr(function () {
          var l = Qn(e, 1);
          if (l !== null) {
            var d = Ct();
            xn(l, e, 1, d);
          }
        }),
          ju(e, 1);
    }
  }),
    (ol = function (e) {
      if (e.tag === 13) {
        var r = Qn(e, 134217728);
        if (r !== null) {
          var o = Ct();
          xn(r, e, 134217728, o);
        }
        ju(e, 134217728);
      }
    }),
    (yd = function (e) {
      if (e.tag === 13) {
        var r = _r(e),
          o = Qn(e, r);
        if (o !== null) {
          var l = Ct();
          xn(o, e, r, l);
        }
        ju(e, r);
      }
    }),
    (vd = function () {
      return $e;
    }),
    (xd = function (e, r) {
      var o = $e;
      try {
        return ($e = e), r();
      } finally {
        $e = o;
      }
    }),
    (ir = function (e, r, o) {
      switch (r) {
        case "input":
          if ((St(e, o), (r = o.name), o.type === "radio" && r != null)) {
            for (o = e; o.parentNode; ) o = o.parentNode;
            for (
              o = o.querySelectorAll(
                "input[name=" + JSON.stringify("" + r) + '][type="radio"]'
              ),
                r = 0;
              r < o.length;
              r++
            ) {
              var l = o[r];
              if (l !== e && l.form === e.form) {
                var d = ko(l);
                if (!d) throw Error(s(90));
                ce(l), St(l, d);
              }
            }
          }
          break;
        case "textarea":
          Br(e, o);
          break;
        case "select":
          (r = o.value), r != null && lt(e, !!o.multiple, r, !1);
      }
    }),
    (Le = Cu),
    (Be = Jr);
  var Gv = { usingClientEntryPoint: !1, Events: [mi, vs, ko, cs, be, Cu] },
    Ri = {
      findFiberByHostInstance: Hr,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Xv = {
      bundleType: Ri.bundleType,
      version: Ri.version,
      rendererPackageName: Ri.rendererPackageName,
      rendererConfig: Ri.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: M.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = ld(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Ri.findFiberByHostInstance || Kv,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var la = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!la.isDisabled && la.supportsFiber)
      try {
        (so = la.inject(Xv)), (Pn = la);
      } catch {}
  }
  return (
    (zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gv),
    (zt.createPortal = function (e, r) {
      var o =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Mu(r)) throw Error(s(200));
      return Zv(e, r, null, o);
    }),
    (zt.createRoot = function (e, r) {
      if (!Mu(e)) throw Error(s(299));
      var o = !1,
        l = "",
        d = Ih;
      return (
        r != null &&
          (r.unstable_strictMode === !0 && (o = !0),
          r.identifierPrefix !== void 0 && (l = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (d = r.onRecoverableError)),
        (r = Au(e, 1, !1, null, null, o, !1, l, d)),
        (e[Vn] = r.current),
        fi(e.nodeType === 8 ? e.parentNode : e),
        new Lu(r)
      );
    }),
    (zt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var r = e._reactInternals;
      if (r === void 0)
        throw typeof e.render == "function"
          ? Error(s(188))
          : ((e = Object.keys(e).join(",")), Error(s(268, e)));
      return (e = ld(r)), (e = e === null ? null : e.stateNode), e;
    }),
    (zt.flushSync = function (e) {
      return Jr(e);
    }),
    (zt.hydrate = function (e, r, o) {
      if (!oa(r)) throw Error(s(200));
      return aa(null, e, r, !0, o);
    }),
    (zt.hydrateRoot = function (e, r, o) {
      if (!Mu(e)) throw Error(s(405));
      var l = (o != null && o.hydratedSources) || null,
        d = !1,
        h = "",
        y = Ih;
      if (
        (o != null &&
          (o.unstable_strictMode === !0 && (d = !0),
          o.identifierPrefix !== void 0 && (h = o.identifierPrefix),
          o.onRecoverableError !== void 0 && (y = o.onRecoverableError)),
        (r = Lh(r, null, e, 1, o ?? null, d, !1, h, y)),
        (e[Vn] = r.current),
        fi(e),
        l)
      )
        for (e = 0; e < l.length; e++)
          (o = l[e]),
            (d = o._getVersion),
            (d = d(o._source)),
            r.mutableSourceEagerHydrationData == null
              ? (r.mutableSourceEagerHydrationData = [o, d])
              : r.mutableSourceEagerHydrationData.push(o, d);
      return new ia(r);
    }),
    (zt.render = function (e, r, o) {
      if (!oa(r)) throw Error(s(200));
      return aa(null, e, r, !1, o);
    }),
    (zt.unmountComponentAtNode = function (e) {
      if (!oa(e)) throw Error(s(40));
      return e._reactRootContainer
        ? (Jr(function () {
            aa(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Vn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (zt.unstable_batchedUpdates = Cu),
    (zt.unstable_renderSubtreeIntoContainer = function (e, r, o, l) {
      if (!oa(o)) throw Error(s(200));
      if (e == null || e._reactInternals === void 0) throw Error(s(38));
      return aa(e, r, o, !1, l);
    }),
    (zt.version = "18.3.1-next-f1338f8080-20240426"),
    zt
  );
}
var qh;
function om() {
  if (qh) return Bu.exports;
  qh = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (t) {
        console.error(t);
      }
  }
  return n(), (Bu.exports = f0()), Bu.exports;
}
var Da = om();
const am = sm(Da);
function at(n, t, { checkForDefaultPrevented: s = !0 } = {}) {
  return function (a) {
    if ((n?.(a), s === !1 || !a.defaultPrevented)) return t?.(a);
  };
}
function Qh(n, t) {
  if (typeof n == "function") return n(t);
  n != null && (n.current = t);
}
function lm(...n) {
  return (t) => {
    let s = !1;
    const i = n.map((a) => {
      const u = Qh(a, t);
      return !s && typeof u == "function" && (s = !0), u;
    });
    if (s)
      return () => {
        for (let a = 0; a < i.length; a++) {
          const u = i[a];
          typeof u == "function" ? u() : Qh(n[a], null);
        }
      };
  };
}
function En(...n) {
  return k.useCallback(lm(...n), n);
}
function Fa(n, t = []) {
  let s = [];
  function i(u, c) {
    const f = k.createContext(c),
      p = s.length;
    s = [...s, c];
    const m = (x) => {
      const { scope: S, children: w, ...E } = x,
        _ = S?.[n]?.[p] || f,
        b = k.useMemo(() => E, Object.values(E));
      return v.jsx(_.Provider, { value: b, children: w });
    };
    m.displayName = u + "Provider";
    function g(x, S) {
      const w = S?.[n]?.[p] || f,
        E = k.useContext(w);
      if (E) return E;
      if (c !== void 0) return c;
      throw new Error(`\`${x}\` must be used within \`${u}\``);
    }
    return [m, g];
  }
  const a = () => {
    const u = s.map((c) => k.createContext(c));
    return function (f) {
      const p = f?.[n] || u;
      return k.useMemo(() => ({ [`__scope${n}`]: { ...f, [n]: p } }), [f, p]);
    };
  };
  return (a.scopeName = n), [i, h0(a, ...t)];
}
function h0(...n) {
  const t = n[0];
  if (n.length === 1) return t;
  const s = () => {
    const i = n.map((a) => ({ useScope: a(), scopeName: a.scopeName }));
    return function (u) {
      const c = i.reduce((f, { useScope: p, scopeName: m }) => {
        const x = p(u)[`__scope${m}`];
        return { ...f, ...x };
      }, {});
      return k.useMemo(() => ({ [`__scope${t.scopeName}`]: c }), [c]);
    };
  };
  return (s.scopeName = t.scopeName), s;
}
function Ju(n) {
  const t = p0(n),
    s = k.forwardRef((i, a) => {
      const { children: u, ...c } = i,
        f = k.Children.toArray(u),
        p = f.find(g0);
      if (p) {
        const m = p.props.children,
          g = f.map((x) =>
            x === p
              ? k.Children.count(m) > 1
                ? k.Children.only(null)
                : k.isValidElement(m)
                ? m.props.children
                : null
              : x
          );
        return v.jsx(t, {
          ...c,
          ref: a,
          children: k.isValidElement(m) ? k.cloneElement(m, void 0, g) : null,
        });
      }
      return v.jsx(t, { ...c, ref: a, children: u });
    });
  return (s.displayName = `${n}.Slot`), s;
}
function p0(n) {
  const t = k.forwardRef((s, i) => {
    const { children: a, ...u } = s;
    if (k.isValidElement(a)) {
      const c = v0(a),
        f = y0(u, a.props);
      return (
        a.type !== k.Fragment && (f.ref = i ? lm(i, c) : c),
        k.cloneElement(a, f)
      );
    }
    return k.Children.count(a) > 1 ? k.Children.only(null) : null;
  });
  return (t.displayName = `${n}.SlotClone`), t;
}
var um = Symbol("radix.slottable");
function m0(n) {
  const t = ({ children: s }) => v.jsx(v.Fragment, { children: s });
  return (t.displayName = `${n}.Slottable`), (t.__radixId = um), t;
}
function g0(n) {
  return (
    k.isValidElement(n) &&
    typeof n.type == "function" &&
    "__radixId" in n.type &&
    n.type.__radixId === um
  );
}
function y0(n, t) {
  const s = { ...t };
  for (const i in t) {
    const a = n[i],
      u = t[i];
    /^on[A-Z]/.test(i)
      ? a && u
        ? (s[i] = (...f) => {
            const p = u(...f);
            return a(...f), p;
          })
        : a && (s[i] = a)
      : i === "style"
      ? (s[i] = { ...a, ...u })
      : i === "className" && (s[i] = [a, u].filter(Boolean).join(" "));
  }
  return { ...n, ...s };
}
function v0(n) {
  let t = Object.getOwnPropertyDescriptor(n.props, "ref")?.get,
    s = t && "isReactWarning" in t && t.isReactWarning;
  return s
    ? n.ref
    : ((t = Object.getOwnPropertyDescriptor(n, "ref")?.get),
      (s = t && "isReactWarning" in t && t.isReactWarning),
      s ? n.props.ref : n.props.ref || n.ref);
}
function x0(n) {
  const t = n + "CollectionProvider",
    [s, i] = Fa(t),
    [a, u] = s(t, { collectionRef: { current: null }, itemMap: new Map() }),
    c = (_) => {
      const { scope: b, children: T } = _,
        N = G.useRef(null),
        A = G.useRef(new Map()).current;
      return v.jsx(a, { scope: b, itemMap: A, collectionRef: N, children: T });
    };
  c.displayName = t;
  const f = n + "CollectionSlot",
    p = Ju(f),
    m = G.forwardRef((_, b) => {
      const { scope: T, children: N } = _,
        A = u(f, T),
        M = En(b, A.collectionRef);
      return v.jsx(p, { ref: M, children: N });
    });
  m.displayName = f;
  const g = n + "CollectionItemSlot",
    x = "data-radix-collection-item",
    S = Ju(g),
    w = G.forwardRef((_, b) => {
      const { scope: T, children: N, ...A } = _,
        M = G.useRef(null),
        B = En(b, M),
        U = u(g, T);
      return (
        G.useEffect(
          () => (
            U.itemMap.set(M, { ref: M, ...A }), () => void U.itemMap.delete(M)
          )
        ),
        v.jsx(S, { [x]: "", ref: B, children: N })
      );
    });
  w.displayName = g;
  function E(_) {
    const b = u(n + "CollectionConsumer", _);
    return G.useCallback(() => {
      const N = b.collectionRef.current;
      if (!N) return [];
      const A = Array.from(N.querySelectorAll(`[${x}]`));
      return Array.from(b.itemMap.values()).sort(
        (U, $) => A.indexOf(U.ref.current) - A.indexOf($.ref.current)
      );
    }, [b.collectionRef, b.itemMap]);
  }
  return [{ Provider: c, Slot: m, ItemSlot: w }, E, i];
}
var w0 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  Ut = w0.reduce((n, t) => {
    const s = Ju(`Primitive.${t}`),
      i = k.forwardRef((a, u) => {
        const { asChild: c, ...f } = a,
          p = c ? s : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          v.jsx(p, { ...f, ref: u })
        );
      });
    return (i.displayName = `Primitive.${t}`), { ...n, [t]: i };
  }, {});
function cm(n, t) {
  n && Da.flushSync(() => n.dispatchEvent(t));
}
function jr(n) {
  const t = k.useRef(n);
  return (
    k.useEffect(() => {
      t.current = n;
    }),
    k.useMemo(
      () =>
        (...s) =>
          t.current?.(...s),
      []
    )
  );
}
function _0(n, t = globalThis?.document) {
  const s = jr(n);
  k.useEffect(() => {
    const i = (a) => {
      a.key === "Escape" && s(a);
    };
    return (
      t.addEventListener("keydown", i, { capture: !0 }),
      () => t.removeEventListener("keydown", i, { capture: !0 })
    );
  }, [s, t]);
}
var b0 = "DismissableLayer",
  ec = "dismissableLayer.update",
  S0 = "dismissableLayer.pointerDownOutside",
  k0 = "dismissableLayer.focusOutside",
  Zh,
  dm = k.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Ac = k.forwardRef((n, t) => {
    const {
        disableOutsidePointerEvents: s = !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: a,
        onFocusOutside: u,
        onInteractOutside: c,
        onDismiss: f,
        ...p
      } = n,
      m = k.useContext(dm),
      [g, x] = k.useState(null),
      S = g?.ownerDocument ?? globalThis?.document,
      [, w] = k.useState({}),
      E = En(t, ($) => x($)),
      _ = Array.from(m.layers),
      [b] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1),
      T = _.indexOf(b),
      N = g ? _.indexOf(g) : -1,
      A = m.layersWithOutsidePointerEventsDisabled.size > 0,
      M = N >= T,
      B = C0(($) => {
        const K = $.target,
          te = [...m.branches].some((re) => re.contains(K));
        !M || te || (a?.($), c?.($), $.defaultPrevented || f?.());
      }, S),
      U = T0(($) => {
        const K = $.target;
        [...m.branches].some((re) => re.contains(K)) ||
          (u?.($), c?.($), $.defaultPrevented || f?.());
      }, S);
    return (
      _0(($) => {
        N === m.layers.size - 1 &&
          (i?.($), !$.defaultPrevented && f && ($.preventDefault(), f()));
      }, S),
      k.useEffect(() => {
        if (g)
          return (
            s &&
              (m.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Zh = S.body.style.pointerEvents),
                (S.body.style.pointerEvents = "none")),
              m.layersWithOutsidePointerEventsDisabled.add(g)),
            m.layers.add(g),
            Kh(),
            () => {
              s &&
                m.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (S.body.style.pointerEvents = Zh);
            }
          );
      }, [g, S, s, m]),
      k.useEffect(
        () => () => {
          g &&
            (m.layers.delete(g),
            m.layersWithOutsidePointerEventsDisabled.delete(g),
            Kh());
        },
        [g, m]
      ),
      k.useEffect(() => {
        const $ = () => w({});
        return (
          document.addEventListener(ec, $),
          () => document.removeEventListener(ec, $)
        );
      }, []),
      v.jsx(Ut.div, {
        ...p,
        ref: E,
        style: {
          pointerEvents: A ? (M ? "auto" : "none") : void 0,
          ...n.style,
        },
        onFocusCapture: at(n.onFocusCapture, U.onFocusCapture),
        onBlurCapture: at(n.onBlurCapture, U.onBlurCapture),
        onPointerDownCapture: at(
          n.onPointerDownCapture,
          B.onPointerDownCapture
        ),
      })
    );
  });
Ac.displayName = b0;
var E0 = "DismissableLayerBranch",
  fm = k.forwardRef((n, t) => {
    const s = k.useContext(dm),
      i = k.useRef(null),
      a = En(t, i);
    return (
      k.useEffect(() => {
        const u = i.current;
        if (u)
          return (
            s.branches.add(u),
            () => {
              s.branches.delete(u);
            }
          );
      }, [s.branches]),
      v.jsx(Ut.div, { ...n, ref: a })
    );
  });
fm.displayName = E0;
function C0(n, t = globalThis?.document) {
  const s = jr(n),
    i = k.useRef(!1),
    a = k.useRef(() => {});
  return (
    k.useEffect(() => {
      const u = (f) => {
          if (f.target && !i.current) {
            let p = function () {
              hm(S0, s, m, { discrete: !0 });
            };
            const m = { originalEvent: f };
            f.pointerType === "touch"
              ? (t.removeEventListener("click", a.current),
                (a.current = p),
                t.addEventListener("click", a.current, { once: !0 }))
              : p();
          } else t.removeEventListener("click", a.current);
          i.current = !1;
        },
        c = window.setTimeout(() => {
          t.addEventListener("pointerdown", u);
        }, 0);
      return () => {
        window.clearTimeout(c),
          t.removeEventListener("pointerdown", u),
          t.removeEventListener("click", a.current);
      };
    }, [t, s]),
    { onPointerDownCapture: () => (i.current = !0) }
  );
}
function T0(n, t = globalThis?.document) {
  const s = jr(n),
    i = k.useRef(!1);
  return (
    k.useEffect(() => {
      const a = (u) => {
        u.target &&
          !i.current &&
          hm(k0, s, { originalEvent: u }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", a),
        () => t.removeEventListener("focusin", a)
      );
    }, [t, s]),
    {
      onFocusCapture: () => (i.current = !0),
      onBlurCapture: () => (i.current = !1),
    }
  );
}
function Kh() {
  const n = new CustomEvent(ec);
  document.dispatchEvent(n);
}
function hm(n, t, s, { discrete: i }) {
  const a = s.originalEvent.target,
    u = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: s });
  t && a.addEventListener(n, t, { once: !0 }),
    i ? cm(a, u) : a.dispatchEvent(u);
}
var N0 = Ac,
  R0 = fm,
  Lr = globalThis?.document ? k.useLayoutEffect : () => {},
  P0 = "Portal",
  pm = k.forwardRef((n, t) => {
    const { container: s, ...i } = n,
      [a, u] = k.useState(!1);
    Lr(() => u(!0), []);
    const c = s || (a && globalThis?.document?.body);
    return c ? am.createPortal(v.jsx(Ut.div, { ...i, ref: t }), c) : null;
  });
pm.displayName = P0;
function O0(n, t) {
  return k.useReducer((s, i) => t[s][i] ?? s, n);
}
var jc = (n) => {
  const { present: t, children: s } = n,
    i = A0(t),
    a =
      typeof s == "function" ? s({ present: i.isPresent }) : k.Children.only(s),
    u = En(i.ref, j0(a));
  return typeof s == "function" || i.isPresent
    ? k.cloneElement(a, { ref: u })
    : null;
};
jc.displayName = "Presence";
function A0(n) {
  const [t, s] = k.useState(),
    i = k.useRef(null),
    a = k.useRef(n),
    u = k.useRef("none"),
    c = n ? "mounted" : "unmounted",
    [f, p] = O0(c, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    k.useEffect(() => {
      const m = ua(i.current);
      u.current = f === "mounted" ? m : "none";
    }, [f]),
    Lr(() => {
      const m = i.current,
        g = a.current;
      if (g !== n) {
        const S = u.current,
          w = ua(m);
        n
          ? p("MOUNT")
          : w === "none" || m?.display === "none"
          ? p("UNMOUNT")
          : p(g && S !== w ? "ANIMATION_OUT" : "UNMOUNT"),
          (a.current = n);
      }
    }, [n, p]),
    Lr(() => {
      if (t) {
        let m;
        const g = t.ownerDocument.defaultView ?? window,
          x = (w) => {
            const _ = ua(i.current).includes(CSS.escape(w.animationName));
            if (w.target === t && _ && (p("ANIMATION_END"), !a.current)) {
              const b = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (m = g.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = b);
                }));
            }
          },
          S = (w) => {
            w.target === t && (u.current = ua(i.current));
          };
        return (
          t.addEventListener("animationstart", S),
          t.addEventListener("animationcancel", x),
          t.addEventListener("animationend", x),
          () => {
            g.clearTimeout(m),
              t.removeEventListener("animationstart", S),
              t.removeEventListener("animationcancel", x),
              t.removeEventListener("animationend", x);
          }
        );
      } else p("ANIMATION_END");
    }, [t, p]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(f),
      ref: k.useCallback((m) => {
        (i.current = m ? getComputedStyle(m) : null), s(m);
      }, []),
    }
  );
}
function ua(n) {
  return n?.animationName || "none";
}
function j0(n) {
  let t = Object.getOwnPropertyDescriptor(n.props, "ref")?.get,
    s = t && "isReactWarning" in t && t.isReactWarning;
  return s
    ? n.ref
    : ((t = Object.getOwnPropertyDescriptor(n, "ref")?.get),
      (s = t && "isReactWarning" in t && t.isReactWarning),
      s ? n.props.ref : n.props.ref || n.ref);
}
var L0 = im[" useInsertionEffect ".trim().toString()] || Lr;
function M0({ prop: n, defaultProp: t, onChange: s = () => {}, caller: i }) {
  const [a, u, c] = I0({ defaultProp: t, onChange: s }),
    f = n !== void 0,
    p = f ? n : a;
  {
    const g = k.useRef(n !== void 0);
    k.useEffect(() => {
      const x = g.current;
      x !== f &&
        console.warn(
          `${i} is changing from ${x ? "controlled" : "uncontrolled"} to ${
            f ? "controlled" : "uncontrolled"
          }. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (g.current = f);
    }, [f, i]);
  }
  const m = k.useCallback(
    (g) => {
      if (f) {
        const x = D0(g) ? g(n) : g;
        x !== n && c.current?.(x);
      } else u(g);
    },
    [f, n, u, c]
  );
  return [p, m];
}
function I0({ defaultProp: n, onChange: t }) {
  const [s, i] = k.useState(n),
    a = k.useRef(s),
    u = k.useRef(t);
  return (
    L0(() => {
      u.current = t;
    }, [t]),
    k.useEffect(() => {
      a.current !== s && (u.current?.(s), (a.current = s));
    }, [s, a]),
    [s, i, u]
  );
}
function D0(n) {
  return typeof n == "function";
}
var F0 = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  z0 = "VisuallyHidden",
  za = k.forwardRef((n, t) =>
    v.jsx(Ut.span, { ...n, ref: t, style: { ...F0, ...n.style } })
  );
za.displayName = z0;
var B0 = za,
  Lc = "ToastProvider",
  [Mc, $0, U0] = x0("Toast"),
  [mm] = Fa("Toast", [U0]),
  [V0, Ba] = mm(Lc),
  gm = (n) => {
    const {
        __scopeToast: t,
        label: s = "Notification",
        duration: i = 5e3,
        swipeDirection: a = "right",
        swipeThreshold: u = 50,
        children: c,
      } = n,
      [f, p] = k.useState(null),
      [m, g] = k.useState(0),
      x = k.useRef(!1),
      S = k.useRef(!1);
    return (
      s.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${Lc}\`. Expected non-empty \`string\`.`
        ),
      v.jsx(Mc.Provider, {
        scope: t,
        children: v.jsx(V0, {
          scope: t,
          label: s,
          duration: i,
          swipeDirection: a,
          swipeThreshold: u,
          toastCount: m,
          viewport: f,
          onViewportChange: p,
          onToastAdd: k.useCallback(() => g((w) => w + 1), []),
          onToastRemove: k.useCallback(() => g((w) => w - 1), []),
          isFocusedToastEscapeKeyDownRef: x,
          isClosePausedRef: S,
          children: c,
        }),
      })
    );
  };
gm.displayName = Lc;
var ym = "ToastViewport",
  W0 = ["F8"],
  tc = "toast.viewportPause",
  nc = "toast.viewportResume",
  vm = k.forwardRef((n, t) => {
    const {
        __scopeToast: s,
        hotkey: i = W0,
        label: a = "Notifications ({hotkey})",
        ...u
      } = n,
      c = Ba(ym, s),
      f = $0(s),
      p = k.useRef(null),
      m = k.useRef(null),
      g = k.useRef(null),
      x = k.useRef(null),
      S = En(t, x, c.onViewportChange),
      w = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      E = c.toastCount > 0;
    k.useEffect(() => {
      const b = (T) => {
        i.length !== 0 &&
          i.every((A) => T[A] || T.code === A) &&
          x.current?.focus();
      };
      return (
        document.addEventListener("keydown", b),
        () => document.removeEventListener("keydown", b)
      );
    }, [i]),
      k.useEffect(() => {
        const b = p.current,
          T = x.current;
        if (E && b && T) {
          const N = () => {
              if (!c.isClosePausedRef.current) {
                const U = new CustomEvent(tc);
                T.dispatchEvent(U), (c.isClosePausedRef.current = !0);
              }
            },
            A = () => {
              if (c.isClosePausedRef.current) {
                const U = new CustomEvent(nc);
                T.dispatchEvent(U), (c.isClosePausedRef.current = !1);
              }
            },
            M = (U) => {
              !b.contains(U.relatedTarget) && A();
            },
            B = () => {
              b.contains(document.activeElement) || A();
            };
          return (
            b.addEventListener("focusin", N),
            b.addEventListener("focusout", M),
            b.addEventListener("pointermove", N),
            b.addEventListener("pointerleave", B),
            window.addEventListener("blur", N),
            window.addEventListener("focus", A),
            () => {
              b.removeEventListener("focusin", N),
                b.removeEventListener("focusout", M),
                b.removeEventListener("pointermove", N),
                b.removeEventListener("pointerleave", B),
                window.removeEventListener("blur", N),
                window.removeEventListener("focus", A);
            }
          );
        }
      }, [E, c.isClosePausedRef]);
    const _ = k.useCallback(
      ({ tabbingDirection: b }) => {
        const N = f().map((A) => {
          const M = A.ref.current,
            B = [M, ...rx(M)];
          return b === "forwards" ? B : B.reverse();
        });
        return (b === "forwards" ? N.reverse() : N).flat();
      },
      [f]
    );
    return (
      k.useEffect(() => {
        const b = x.current;
        if (b) {
          const T = (N) => {
            const A = N.altKey || N.ctrlKey || N.metaKey;
            if (N.key === "Tab" && !A) {
              const B = document.activeElement,
                U = N.shiftKey;
              if (N.target === b && U) {
                m.current?.focus();
                return;
              }
              const te = _({ tabbingDirection: U ? "backwards" : "forwards" }),
                re = te.findIndex((se) => se === B);
              Vu(te.slice(re + 1))
                ? N.preventDefault()
                : U
                ? m.current?.focus()
                : g.current?.focus();
            }
          };
          return (
            b.addEventListener("keydown", T),
            () => b.removeEventListener("keydown", T)
          );
        }
      }, [f, _]),
      v.jsxs(R0, {
        ref: p,
        role: "region",
        "aria-label": a.replace("{hotkey}", w),
        tabIndex: -1,
        style: { pointerEvents: E ? void 0 : "none" },
        children: [
          E &&
            v.jsx(rc, {
              ref: m,
              onFocusFromOutsideViewport: () => {
                const b = _({ tabbingDirection: "forwards" });
                Vu(b);
              },
            }),
          v.jsx(Mc.Slot, {
            scope: s,
            children: v.jsx(Ut.ol, { tabIndex: -1, ...u, ref: S }),
          }),
          E &&
            v.jsx(rc, {
              ref: g,
              onFocusFromOutsideViewport: () => {
                const b = _({ tabbingDirection: "backwards" });
                Vu(b);
              },
            }),
        ],
      })
    );
  });
vm.displayName = ym;
var xm = "ToastFocusProxy",
  rc = k.forwardRef((n, t) => {
    const { __scopeToast: s, onFocusFromOutsideViewport: i, ...a } = n,
      u = Ba(xm, s);
    return v.jsx(za, {
      tabIndex: 0,
      ...a,
      ref: t,
      style: { position: "fixed" },
      onFocus: (c) => {
        const f = c.relatedTarget;
        !u.viewport?.contains(f) && i();
      },
    });
  });
rc.displayName = xm;
var Gi = "Toast",
  H0 = "toast.swipeStart",
  q0 = "toast.swipeMove",
  Q0 = "toast.swipeCancel",
  Z0 = "toast.swipeEnd",
  wm = k.forwardRef((n, t) => {
    const { forceMount: s, open: i, defaultOpen: a, onOpenChange: u, ...c } = n,
      [f, p] = M0({ prop: i, defaultProp: a ?? !0, onChange: u, caller: Gi });
    return v.jsx(jc, {
      present: s || f,
      children: v.jsx(G0, {
        open: f,
        ...c,
        ref: t,
        onClose: () => p(!1),
        onPause: jr(n.onPause),
        onResume: jr(n.onResume),
        onSwipeStart: at(n.onSwipeStart, (m) => {
          m.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: at(n.onSwipeMove, (m) => {
          const { x: g, y: x } = m.detail.delta;
          m.currentTarget.setAttribute("data-swipe", "move"),
            m.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${g}px`
            ),
            m.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${x}px`
            );
        }),
        onSwipeCancel: at(n.onSwipeCancel, (m) => {
          m.currentTarget.setAttribute("data-swipe", "cancel"),
            m.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            m.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            m.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            m.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: at(n.onSwipeEnd, (m) => {
          const { x: g, y: x } = m.detail.delta;
          m.currentTarget.setAttribute("data-swipe", "end"),
            m.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            m.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            m.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${g}px`
            ),
            m.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${x}px`
            ),
            p(!1);
        }),
      }),
    });
  });
wm.displayName = Gi;
var [K0, Y0] = mm(Gi, { onClose() {} }),
  G0 = k.forwardRef((n, t) => {
    const {
        __scopeToast: s,
        type: i = "foreground",
        duration: a,
        open: u,
        onClose: c,
        onEscapeKeyDown: f,
        onPause: p,
        onResume: m,
        onSwipeStart: g,
        onSwipeMove: x,
        onSwipeCancel: S,
        onSwipeEnd: w,
        ...E
      } = n,
      _ = Ba(Gi, s),
      [b, T] = k.useState(null),
      N = En(t, (V) => T(V)),
      A = k.useRef(null),
      M = k.useRef(null),
      B = a || _.duration,
      U = k.useRef(0),
      $ = k.useRef(B),
      K = k.useRef(0),
      { onToastAdd: te, onToastRemove: re } = _,
      se = jr(() => {
        b?.contains(document.activeElement) && _.viewport?.focus(), c();
      }),
      X = k.useCallback(
        (V) => {
          !V ||
            V === 1 / 0 ||
            (window.clearTimeout(K.current),
            (U.current = new Date().getTime()),
            (K.current = window.setTimeout(se, V)));
        },
        [se]
      );
    k.useEffect(() => {
      const V = _.viewport;
      if (V) {
        const ge = () => {
            X($.current), m?.();
          },
          ae = () => {
            const ne = new Date().getTime() - U.current;
            ($.current = $.current - ne), window.clearTimeout(K.current), p?.();
          };
        return (
          V.addEventListener(tc, ae),
          V.addEventListener(nc, ge),
          () => {
            V.removeEventListener(tc, ae), V.removeEventListener(nc, ge);
          }
        );
      }
    }, [_.viewport, B, p, m, X]),
      k.useEffect(() => {
        u && !_.isClosePausedRef.current && X(B);
      }, [u, B, _.isClosePausedRef, X]),
      k.useEffect(() => (te(), () => re()), [te, re]);
    const ye = k.useMemo(() => (b ? Tm(b) : null), [b]);
    return _.viewport
      ? v.jsxs(v.Fragment, {
          children: [
            ye &&
              v.jsx(X0, {
                __scopeToast: s,
                role: "status",
                "aria-live": i === "foreground" ? "assertive" : "polite",
                children: ye,
              }),
            v.jsx(K0, {
              scope: s,
              onClose: se,
              children: Da.createPortal(
                v.jsx(Mc.ItemSlot, {
                  scope: s,
                  children: v.jsx(N0, {
                    asChild: !0,
                    onEscapeKeyDown: at(f, () => {
                      _.isFocusedToastEscapeKeyDownRef.current || se(),
                        (_.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: v.jsx(Ut.li, {
                      tabIndex: 0,
                      "data-state": u ? "open" : "closed",
                      "data-swipe-direction": _.swipeDirection,
                      ...E,
                      ref: N,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...n.style,
                      },
                      onKeyDown: at(n.onKeyDown, (V) => {
                        V.key === "Escape" &&
                          (f?.(V.nativeEvent),
                          V.nativeEvent.defaultPrevented ||
                            ((_.isFocusedToastEscapeKeyDownRef.current = !0),
                            se()));
                      }),
                      onPointerDown: at(n.onPointerDown, (V) => {
                        V.button === 0 &&
                          (A.current = { x: V.clientX, y: V.clientY });
                      }),
                      onPointerMove: at(n.onPointerMove, (V) => {
                        if (!A.current) return;
                        const ge = V.clientX - A.current.x,
                          ae = V.clientY - A.current.y,
                          ne = !!M.current,
                          F = ["left", "right"].includes(_.swipeDirection),
                          z = ["left", "up"].includes(_.swipeDirection)
                            ? Math.min
                            : Math.max,
                          W = F ? z(0, ge) : 0,
                          P = F ? 0 : z(0, ae),
                          D = V.pointerType === "touch" ? 10 : 2,
                          J = { x: W, y: P },
                          ee = { originalEvent: V, delta: J };
                        ne
                          ? ((M.current = J), ca(q0, x, ee, { discrete: !1 }))
                          : Yh(J, _.swipeDirection, D)
                          ? ((M.current = J),
                            ca(H0, g, ee, { discrete: !1 }),
                            V.target.setPointerCapture(V.pointerId))
                          : (Math.abs(ge) > D || Math.abs(ae) > D) &&
                            (A.current = null);
                      }),
                      onPointerUp: at(n.onPointerUp, (V) => {
                        const ge = M.current,
                          ae = V.target;
                        if (
                          (ae.hasPointerCapture(V.pointerId) &&
                            ae.releasePointerCapture(V.pointerId),
                          (M.current = null),
                          (A.current = null),
                          ge)
                        ) {
                          const ne = V.currentTarget,
                            F = { originalEvent: V, delta: ge };
                          Yh(ge, _.swipeDirection, _.swipeThreshold)
                            ? ca(Z0, w, F, { discrete: !0 })
                            : ca(Q0, S, F, { discrete: !0 }),
                            ne.addEventListener(
                              "click",
                              (z) => z.preventDefault(),
                              { once: !0 }
                            );
                        }
                      }),
                    }),
                  }),
                }),
                _.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  X0 = (n) => {
    const { __scopeToast: t, children: s, ...i } = n,
      a = Ba(Gi, t),
      [u, c] = k.useState(!1),
      [f, p] = k.useState(!1);
    return (
      tx(() => c(!0)),
      k.useEffect(() => {
        const m = window.setTimeout(() => p(!0), 1e3);
        return () => window.clearTimeout(m);
      }, []),
      f
        ? null
        : v.jsx(pm, {
            asChild: !0,
            children: v.jsx(za, {
              ...i,
              children:
                u && v.jsxs(v.Fragment, { children: [a.label, " ", s] }),
            }),
          })
    );
  },
  J0 = "ToastTitle",
  _m = k.forwardRef((n, t) => {
    const { __scopeToast: s, ...i } = n;
    return v.jsx(Ut.div, { ...i, ref: t });
  });
_m.displayName = J0;
var ex = "ToastDescription",
  bm = k.forwardRef((n, t) => {
    const { __scopeToast: s, ...i } = n;
    return v.jsx(Ut.div, { ...i, ref: t });
  });
bm.displayName = ex;
var Sm = "ToastAction",
  km = k.forwardRef((n, t) => {
    const { altText: s, ...i } = n;
    return s.trim()
      ? v.jsx(Cm, {
          altText: s,
          asChild: !0,
          children: v.jsx(Ic, { ...i, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${Sm}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
km.displayName = Sm;
var Em = "ToastClose",
  Ic = k.forwardRef((n, t) => {
    const { __scopeToast: s, ...i } = n,
      a = Y0(Em, s);
    return v.jsx(Cm, {
      asChild: !0,
      children: v.jsx(Ut.button, {
        type: "button",
        ...i,
        ref: t,
        onClick: at(n.onClick, a.onClose),
      }),
    });
  });
Ic.displayName = Em;
var Cm = k.forwardRef((n, t) => {
  const { __scopeToast: s, altText: i, ...a } = n;
  return v.jsx(Ut.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": i || void 0,
    ...a,
    ref: t,
  });
});
function Tm(n) {
  const t = [];
  return (
    Array.from(n.childNodes).forEach((i) => {
      if (
        (i.nodeType === i.TEXT_NODE && i.textContent && t.push(i.textContent),
        nx(i))
      ) {
        const a = i.ariaHidden || i.hidden || i.style.display === "none",
          u = i.dataset.radixToastAnnounceExclude === "";
        if (!a)
          if (u) {
            const c = i.dataset.radixToastAnnounceAlt;
            c && t.push(c);
          } else t.push(...Tm(i));
      }
    }),
    t
  );
}
function ca(n, t, s, { discrete: i }) {
  const a = s.originalEvent.currentTarget,
    u = new CustomEvent(n, { bubbles: !0, cancelable: !0, detail: s });
  t && a.addEventListener(n, t, { once: !0 }),
    i ? cm(a, u) : a.dispatchEvent(u);
}
var Yh = (n, t, s = 0) => {
  const i = Math.abs(n.x),
    a = Math.abs(n.y),
    u = i > a;
  return t === "left" || t === "right" ? u && i > s : !u && a > s;
};
function tx(n = () => {}) {
  const t = jr(n);
  Lr(() => {
    let s = 0,
      i = 0;
    return (
      (s = window.requestAnimationFrame(
        () => (i = window.requestAnimationFrame(t))
      )),
      () => {
        window.cancelAnimationFrame(s), window.cancelAnimationFrame(i);
      }
    );
  }, [t]);
}
function nx(n) {
  return n.nodeType === n.ELEMENT_NODE;
}
function rx(n) {
  const t = [],
    s = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (i) => {
        const a = i.tagName === "INPUT" && i.type === "hidden";
        return i.disabled || i.hidden || a
          ? NodeFilter.FILTER_SKIP
          : i.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; s.nextNode(); ) t.push(s.currentNode);
  return t;
}
function Vu(n) {
  const t = document.activeElement;
  return n.some((s) =>
    s === t ? !0 : (s.focus(), document.activeElement !== t)
  );
}
var sx = gm,
  Nm = vm,
  Rm = wm,
  Pm = _m,
  Om = bm,
  Am = km,
  jm = Ic;
function Lm(n) {
  var t,
    s,
    i = "";
  if (typeof n == "string" || typeof n == "number") i += n;
  else if (typeof n == "object")
    if (Array.isArray(n)) {
      var a = n.length;
      for (t = 0; t < a; t++)
        n[t] && (s = Lm(n[t])) && (i && (i += " "), (i += s));
    } else for (s in n) n[s] && (i && (i += " "), (i += s));
  return i;
}
function Mm() {
  for (var n, t, s = 0, i = "", a = arguments.length; s < a; s++)
    (n = arguments[s]) && (t = Lm(n)) && (i && (i += " "), (i += t));
  return i;
}
const Gh = (n) => (typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n),
  Xh = Mm,
  ix = (n, t) => (s) => {
    var i;
    if (t?.variants == null) return Xh(n, s?.class, s?.className);
    const { variants: a, defaultVariants: u } = t,
      c = Object.keys(a).map((m) => {
        const g = s?.[m],
          x = u?.[m];
        if (g === null) return null;
        const S = Gh(g) || Gh(x);
        return a[m][S];
      }),
      f =
        s &&
        Object.entries(s).reduce((m, g) => {
          let [x, S] = g;
          return S === void 0 || (m[x] = S), m;
        }, {}),
      p =
        t == null || (i = t.compoundVariants) === null || i === void 0
          ? void 0
          : i.reduce((m, g) => {
              let { class: x, className: S, ...w } = g;
              return Object.entries(w).every((E) => {
                let [_, b] = E;
                return Array.isArray(b)
                  ? b.includes({ ...u, ...f }[_])
                  : { ...u, ...f }[_] === b;
              })
                ? [...m, x, S]
                : m;
            }, []);
    return Xh(n, c, p, s?.class, s?.className);
  };
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ox = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  ax = (n) =>
    n.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, s, i) =>
      i ? i.toUpperCase() : s.toLowerCase()
    ),
  Jh = (n) => {
    const t = ax(n);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  Im = (...n) =>
    n
      .filter((t, s, i) => !!t && t.trim() !== "" && i.indexOf(t) === s)
      .join(" ")
      .trim(),
  lx = (n) => {
    for (const t in n)
      if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
  };
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var ux = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cx = k.forwardRef(
  (
    {
      color: n = "currentColor",
      size: t = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: i,
      className: a = "",
      children: u,
      iconNode: c,
      ...f
    },
    p
  ) =>
    k.createElement(
      "svg",
      {
        ref: p,
        ...ux,
        width: t,
        height: t,
        stroke: n,
        strokeWidth: i ? (Number(s) * 24) / Number(t) : s,
        className: Im("lucide", a),
        ...(!u && !lx(f) && { "aria-hidden": "true" }),
        ...f,
      },
      [
        ...c.map(([m, g]) => k.createElement(m, g)),
        ...(Array.isArray(u) ? u : [u]),
      ]
    )
);
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tr = (n, t) => {
  const s = k.forwardRef(({ className: i, ...a }, u) =>
    k.createElement(cx, {
      ref: u,
      iconNode: t,
      className: Im(`lucide-${ox(Jh(n))}`, `lucide-${n}`, i),
      ...a,
    })
  );
  return (s.displayName = Jh(n)), s;
};
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dx = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  fx = tr("chevron-right", dx);
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hx = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }],
  ],
  px = tr("circle-question-mark", hx);
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mx = [
    [
      "path",
      {
        d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
        key: "1jg4f8",
      },
    ],
  ],
  gx = tr("facebook", mx);
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yx = [
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
    ],
    ["path", { d: "M7 3v18", key: "bbkbws" }],
    ["path", { d: "M3 7.5h4", key: "zfgn84" }],
    ["path", { d: "M3 12h18", key: "1i2n21" }],
    ["path", { d: "M3 16.5h4", key: "1230mu" }],
    ["path", { d: "M17 3v18", key: "in4fa5" }],
    ["path", { d: "M17 7.5h4", key: "myr1c1" }],
    ["path", { d: "M17 16.5h4", key: "go4c1d" }],
  ],
  vx = tr("film", yx);
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xx = [
    [
      "path",
      { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" },
    ],
    [
      "path",
      {
        d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
        key: "1d0kgt",
      },
    ],
  ],
  wx = tr("house", xx);
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _x = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 16v-4", key: "1dtifu" }],
    ["path", { d: "M12 8h.01", key: "e9boi3" }],
  ],
  bx = tr("info", _x);
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sx = [
    [
      "rect",
      {
        width: "20",
        height: "20",
        x: "2",
        y: "2",
        rx: "5",
        ry: "5",
        key: "2e1cvw",
      },
    ],
    [
      "path",
      { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
    ],
    ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
  ],
  kx = tr("instagram", Sx);
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ex = [
    ["path", { d: "M10 18v-7", key: "wt116b" }],
    [
      "path",
      {
        d: "M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z",
        key: "1m329m",
      },
    ],
    ["path", { d: "M14 18v-7", key: "vav6t3" }],
    ["path", { d: "M18 18v-7", key: "aexdmj" }],
    ["path", { d: "M3 22h18", key: "8prr45" }],
    ["path", { d: "M6 18v-7", key: "1ivflk" }],
  ],
  Cx = tr("landmark", Ex);
/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tx = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  Nx = tr("x", Tx),
  Dc = "-",
  Rx = (n) => {
    const t = Ox(n),
      { conflictingClassGroups: s, conflictingClassGroupModifiers: i } = n;
    return {
      getClassGroupId: (c) => {
        const f = c.split(Dc);
        return f[0] === "" && f.length !== 1 && f.shift(), Dm(f, t) || Px(c);
      },
      getConflictingClassGroupIds: (c, f) => {
        const p = s[c] || [];
        return f && i[c] ? [...p, ...i[c]] : p;
      },
    };
  },
  Dm = (n, t) => {
    if (n.length === 0) return t.classGroupId;
    const s = n[0],
      i = t.nextPart.get(s),
      a = i ? Dm(n.slice(1), i) : void 0;
    if (a) return a;
    if (t.validators.length === 0) return;
    const u = n.join(Dc);
    return t.validators.find(({ validator: c }) => c(u))?.classGroupId;
  },
  ep = /^\[(.+)\]$/,
  Px = (n) => {
    if (ep.test(n)) {
      const t = ep.exec(n)[1],
        s = t?.substring(0, t.indexOf(":"));
      if (s) return "arbitrary.." + s;
    }
  },
  Ox = (n) => {
    const { theme: t, prefix: s } = n,
      i = { nextPart: new Map(), validators: [] };
    return (
      jx(Object.entries(n.classGroups), s).forEach(([u, c]) => {
        sc(c, i, u, t);
      }),
      i
    );
  },
  sc = (n, t, s, i) => {
    n.forEach((a) => {
      if (typeof a == "string") {
        const u = a === "" ? t : tp(t, a);
        u.classGroupId = s;
        return;
      }
      if (typeof a == "function") {
        if (Ax(a)) {
          sc(a(i), t, s, i);
          return;
        }
        t.validators.push({ validator: a, classGroupId: s });
        return;
      }
      Object.entries(a).forEach(([u, c]) => {
        sc(c, tp(t, u), s, i);
      });
    });
  },
  tp = (n, t) => {
    let s = n;
    return (
      t.split(Dc).forEach((i) => {
        s.nextPart.has(i) ||
          s.nextPart.set(i, { nextPart: new Map(), validators: [] }),
          (s = s.nextPart.get(i));
      }),
      s
    );
  },
  Ax = (n) => n.isThemeGetter,
  jx = (n, t) =>
    t
      ? n.map(([s, i]) => {
          const a = i.map((u) =>
            typeof u == "string"
              ? t + u
              : typeof u == "object"
              ? Object.fromEntries(
                  Object.entries(u).map(([c, f]) => [t + c, f])
                )
              : u
          );
          return [s, a];
        })
      : n,
  Lx = (n) => {
    if (n < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      s = new Map(),
      i = new Map();
    const a = (u, c) => {
      s.set(u, c), t++, t > n && ((t = 0), (i = s), (s = new Map()));
    };
    return {
      get(u) {
        let c = s.get(u);
        if (c !== void 0) return c;
        if ((c = i.get(u)) !== void 0) return a(u, c), c;
      },
      set(u, c) {
        s.has(u) ? s.set(u, c) : a(u, c);
      },
    };
  },
  Fm = "!",
  Mx = (n) => {
    const { separator: t, experimentalParseClassName: s } = n,
      i = t.length === 1,
      a = t[0],
      u = t.length,
      c = (f) => {
        const p = [];
        let m = 0,
          g = 0,
          x;
        for (let b = 0; b < f.length; b++) {
          let T = f[b];
          if (m === 0) {
            if (T === a && (i || f.slice(b, b + u) === t)) {
              p.push(f.slice(g, b)), (g = b + u);
              continue;
            }
            if (T === "/") {
              x = b;
              continue;
            }
          }
          T === "[" ? m++ : T === "]" && m--;
        }
        const S = p.length === 0 ? f : f.substring(g),
          w = S.startsWith(Fm),
          E = w ? S.substring(1) : S,
          _ = x && x > g ? x - g : void 0;
        return {
          modifiers: p,
          hasImportantModifier: w,
          baseClassName: E,
          maybePostfixModifierPosition: _,
        };
      };
    return s ? (f) => s({ className: f, parseClassName: c }) : c;
  },
  Ix = (n) => {
    if (n.length <= 1) return n;
    const t = [];
    let s = [];
    return (
      n.forEach((i) => {
        i[0] === "[" ? (t.push(...s.sort(), i), (s = [])) : s.push(i);
      }),
      t.push(...s.sort()),
      t
    );
  },
  Dx = (n) => ({ cache: Lx(n.cacheSize), parseClassName: Mx(n), ...Rx(n) }),
  Fx = /\s+/,
  zx = (n, t) => {
    const {
        parseClassName: s,
        getClassGroupId: i,
        getConflictingClassGroupIds: a,
      } = t,
      u = [],
      c = n.trim().split(Fx);
    let f = "";
    for (let p = c.length - 1; p >= 0; p -= 1) {
      const m = c[p],
        {
          modifiers: g,
          hasImportantModifier: x,
          baseClassName: S,
          maybePostfixModifierPosition: w,
        } = s(m);
      let E = !!w,
        _ = i(E ? S.substring(0, w) : S);
      if (!_) {
        if (!E) {
          f = m + (f.length > 0 ? " " + f : f);
          continue;
        }
        if (((_ = i(S)), !_)) {
          f = m + (f.length > 0 ? " " + f : f);
          continue;
        }
        E = !1;
      }
      const b = Ix(g).join(":"),
        T = x ? b + Fm : b,
        N = T + _;
      if (u.includes(N)) continue;
      u.push(N);
      const A = a(_, E);
      for (let M = 0; M < A.length; ++M) {
        const B = A[M];
        u.push(T + B);
      }
      f = m + (f.length > 0 ? " " + f : f);
    }
    return f;
  };
function Bx() {
  let n = 0,
    t,
    s,
    i = "";
  for (; n < arguments.length; )
    (t = arguments[n++]) && (s = zm(t)) && (i && (i += " "), (i += s));
  return i;
}
const zm = (n) => {
  if (typeof n == "string") return n;
  let t,
    s = "";
  for (let i = 0; i < n.length; i++)
    n[i] && (t = zm(n[i])) && (s && (s += " "), (s += t));
  return s;
};
function $x(n, ...t) {
  let s,
    i,
    a,
    u = c;
  function c(p) {
    const m = t.reduce((g, x) => x(g), n());
    return (s = Dx(m)), (i = s.cache.get), (a = s.cache.set), (u = f), f(p);
  }
  function f(p) {
    const m = i(p);
    if (m) return m;
    const g = zx(p, s);
    return a(p, g), g;
  }
  return function () {
    return u(Bx.apply(null, arguments));
  };
}
const qe = (n) => {
    const t = (s) => s[n] || [];
    return (t.isThemeGetter = !0), t;
  },
  Bm = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Ux = /^\d+\/\d+$/,
  Vx = new Set(["px", "full", "screen"]),
  Wx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Hx =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  qx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Qx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Zx =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Gn = (n) => Ls(n) || Vx.has(n) || Ux.test(n),
  Er = (n) => Ws(n, "length", nw),
  Ls = (n) => !!n && !Number.isNaN(Number(n)),
  Wu = (n) => Ws(n, "number", Ls),
  Oi = (n) => !!n && Number.isInteger(Number(n)),
  Kx = (n) => n.endsWith("%") && Ls(n.slice(0, -1)),
  Ne = (n) => Bm.test(n),
  Cr = (n) => Wx.test(n),
  Yx = new Set(["length", "size", "percentage"]),
  Gx = (n) => Ws(n, Yx, $m),
  Xx = (n) => Ws(n, "position", $m),
  Jx = new Set(["image", "url"]),
  ew = (n) => Ws(n, Jx, sw),
  tw = (n) => Ws(n, "", rw),
  Ai = () => !0,
  Ws = (n, t, s) => {
    const i = Bm.exec(n);
    return i
      ? i[1]
        ? typeof t == "string"
          ? i[1] === t
          : t.has(i[1])
        : s(i[2])
      : !1;
  },
  nw = (n) => Hx.test(n) && !qx.test(n),
  $m = () => !1,
  rw = (n) => Qx.test(n),
  sw = (n) => Zx.test(n),
  iw = () => {
    const n = qe("colors"),
      t = qe("spacing"),
      s = qe("blur"),
      i = qe("brightness"),
      a = qe("borderColor"),
      u = qe("borderRadius"),
      c = qe("borderSpacing"),
      f = qe("borderWidth"),
      p = qe("contrast"),
      m = qe("grayscale"),
      g = qe("hueRotate"),
      x = qe("invert"),
      S = qe("gap"),
      w = qe("gradientColorStops"),
      E = qe("gradientColorStopPositions"),
      _ = qe("inset"),
      b = qe("margin"),
      T = qe("opacity"),
      N = qe("padding"),
      A = qe("saturate"),
      M = qe("scale"),
      B = qe("sepia"),
      U = qe("skew"),
      $ = qe("space"),
      K = qe("translate"),
      te = () => ["auto", "contain", "none"],
      re = () => ["auto", "hidden", "clip", "visible", "scroll"],
      se = () => ["auto", Ne, t],
      X = () => [Ne, t],
      ye = () => ["", Gn, Er],
      V = () => ["auto", Ls, Ne],
      ge = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      ae = () => ["solid", "dashed", "dotted", "double", "none"],
      ne = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      F = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      z = () => ["", "0", Ne],
      W = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      P = () => [Ls, Ne];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Ai],
        spacing: [Gn, Er],
        blur: ["none", "", Cr, Ne],
        brightness: P(),
        borderColor: [n],
        borderRadius: ["none", "", "full", Cr, Ne],
        borderSpacing: X(),
        borderWidth: ye(),
        contrast: P(),
        grayscale: z(),
        hueRotate: P(),
        invert: z(),
        gap: X(),
        gradientColorStops: [n],
        gradientColorStopPositions: [Kx, Er],
        inset: se(),
        margin: se(),
        opacity: P(),
        padding: X(),
        saturate: P(),
        scale: P(),
        sepia: z(),
        skew: P(),
        space: X(),
        translate: X(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", Ne] }],
        container: ["container"],
        columns: [{ columns: [Cr] }],
        "break-after": [{ "break-after": W() }],
        "break-before": [{ "break-before": W() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...ge(), Ne] }],
        overflow: [{ overflow: re() }],
        "overflow-x": [{ "overflow-x": re() }],
        "overflow-y": [{ "overflow-y": re() }],
        overscroll: [{ overscroll: te() }],
        "overscroll-x": [{ "overscroll-x": te() }],
        "overscroll-y": [{ "overscroll-y": te() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [_] }],
        "inset-x": [{ "inset-x": [_] }],
        "inset-y": [{ "inset-y": [_] }],
        start: [{ start: [_] }],
        end: [{ end: [_] }],
        top: [{ top: [_] }],
        right: [{ right: [_] }],
        bottom: [{ bottom: [_] }],
        left: [{ left: [_] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Oi, Ne] }],
        basis: [{ basis: se() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", Ne] }],
        grow: [{ grow: z() }],
        shrink: [{ shrink: z() }],
        order: [{ order: ["first", "last", "none", Oi, Ne] }],
        "grid-cols": [{ "grid-cols": [Ai] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Oi, Ne] }, Ne] }],
        "col-start": [{ "col-start": V() }],
        "col-end": [{ "col-end": V() }],
        "grid-rows": [{ "grid-rows": [Ai] }],
        "row-start-end": [{ row: ["auto", { span: [Oi, Ne] }, Ne] }],
        "row-start": [{ "row-start": V() }],
        "row-end": [{ "row-end": V() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", Ne] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", Ne] }],
        gap: [{ gap: [S] }],
        "gap-x": [{ "gap-x": [S] }],
        "gap-y": [{ "gap-y": [S] }],
        "justify-content": [{ justify: ["normal", ...F()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...F(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...F(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [N] }],
        px: [{ px: [N] }],
        py: [{ py: [N] }],
        ps: [{ ps: [N] }],
        pe: [{ pe: [N] }],
        pt: [{ pt: [N] }],
        pr: [{ pr: [N] }],
        pb: [{ pb: [N] }],
        pl: [{ pl: [N] }],
        m: [{ m: [b] }],
        mx: [{ mx: [b] }],
        my: [{ my: [b] }],
        ms: [{ ms: [b] }],
        me: [{ me: [b] }],
        mt: [{ mt: [b] }],
        mr: [{ mr: [b] }],
        mb: [{ mb: [b] }],
        ml: [{ ml: [b] }],
        "space-x": [{ "space-x": [$] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [$] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Ne, t] }],
        "min-w": [{ "min-w": [Ne, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              Ne,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Cr] },
              Cr,
            ],
          },
        ],
        h: [{ h: [Ne, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [Ne, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [Ne, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [Ne, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Cr, Er] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Wu,
            ],
          },
        ],
        "font-family": [{ font: [Ai] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              Ne,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", Ls, Wu] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Gn,
              Ne,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", Ne] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", Ne] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [n] }],
        "placeholder-opacity": [{ "placeholder-opacity": [T] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [n] }],
        "text-opacity": [{ "text-opacity": [T] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...ae(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Gn, Er] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Gn, Ne] }],
        "text-decoration-color": [{ decoration: [n] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: X() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              Ne,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", Ne] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [T] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...ge(), Xx] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", Gx] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              ew,
            ],
          },
        ],
        "bg-color": [{ bg: [n] }],
        "gradient-from-pos": [{ from: [E] }],
        "gradient-via-pos": [{ via: [E] }],
        "gradient-to-pos": [{ to: [E] }],
        "gradient-from": [{ from: [w] }],
        "gradient-via": [{ via: [w] }],
        "gradient-to": [{ to: [w] }],
        rounded: [{ rounded: [u] }],
        "rounded-s": [{ "rounded-s": [u] }],
        "rounded-e": [{ "rounded-e": [u] }],
        "rounded-t": [{ "rounded-t": [u] }],
        "rounded-r": [{ "rounded-r": [u] }],
        "rounded-b": [{ "rounded-b": [u] }],
        "rounded-l": [{ "rounded-l": [u] }],
        "rounded-ss": [{ "rounded-ss": [u] }],
        "rounded-se": [{ "rounded-se": [u] }],
        "rounded-ee": [{ "rounded-ee": [u] }],
        "rounded-es": [{ "rounded-es": [u] }],
        "rounded-tl": [{ "rounded-tl": [u] }],
        "rounded-tr": [{ "rounded-tr": [u] }],
        "rounded-br": [{ "rounded-br": [u] }],
        "rounded-bl": [{ "rounded-bl": [u] }],
        "border-w": [{ border: [f] }],
        "border-w-x": [{ "border-x": [f] }],
        "border-w-y": [{ "border-y": [f] }],
        "border-w-s": [{ "border-s": [f] }],
        "border-w-e": [{ "border-e": [f] }],
        "border-w-t": [{ "border-t": [f] }],
        "border-w-r": [{ "border-r": [f] }],
        "border-w-b": [{ "border-b": [f] }],
        "border-w-l": [{ "border-l": [f] }],
        "border-opacity": [{ "border-opacity": [T] }],
        "border-style": [{ border: [...ae(), "hidden"] }],
        "divide-x": [{ "divide-x": [f] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [f] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [T] }],
        "divide-style": [{ divide: ae() }],
        "border-color": [{ border: [a] }],
        "border-color-x": [{ "border-x": [a] }],
        "border-color-y": [{ "border-y": [a] }],
        "border-color-s": [{ "border-s": [a] }],
        "border-color-e": [{ "border-e": [a] }],
        "border-color-t": [{ "border-t": [a] }],
        "border-color-r": [{ "border-r": [a] }],
        "border-color-b": [{ "border-b": [a] }],
        "border-color-l": [{ "border-l": [a] }],
        "divide-color": [{ divide: [a] }],
        "outline-style": [{ outline: ["", ...ae()] }],
        "outline-offset": [{ "outline-offset": [Gn, Ne] }],
        "outline-w": [{ outline: [Gn, Er] }],
        "outline-color": [{ outline: [n] }],
        "ring-w": [{ ring: ye() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [n] }],
        "ring-opacity": [{ "ring-opacity": [T] }],
        "ring-offset-w": [{ "ring-offset": [Gn, Er] }],
        "ring-offset-color": [{ "ring-offset": [n] }],
        shadow: [{ shadow: ["", "inner", "none", Cr, tw] }],
        "shadow-color": [{ shadow: [Ai] }],
        opacity: [{ opacity: [T] }],
        "mix-blend": [
          { "mix-blend": [...ne(), "plus-lighter", "plus-darker"] },
        ],
        "bg-blend": [{ "bg-blend": ne() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [s] }],
        brightness: [{ brightness: [i] }],
        contrast: [{ contrast: [p] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Cr, Ne] }],
        grayscale: [{ grayscale: [m] }],
        "hue-rotate": [{ "hue-rotate": [g] }],
        invert: [{ invert: [x] }],
        saturate: [{ saturate: [A] }],
        sepia: [{ sepia: [B] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [s] }],
        "backdrop-brightness": [{ "backdrop-brightness": [i] }],
        "backdrop-contrast": [{ "backdrop-contrast": [p] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [m] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [g] }],
        "backdrop-invert": [{ "backdrop-invert": [x] }],
        "backdrop-opacity": [{ "backdrop-opacity": [T] }],
        "backdrop-saturate": [{ "backdrop-saturate": [A] }],
        "backdrop-sepia": [{ "backdrop-sepia": [B] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [c] }],
        "border-spacing-x": [{ "border-spacing-x": [c] }],
        "border-spacing-y": [{ "border-spacing-y": [c] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              Ne,
            ],
          },
        ],
        duration: [{ duration: P() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", Ne] }],
        delay: [{ delay: P() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", Ne] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [M] }],
        "scale-x": [{ "scale-x": [M] }],
        "scale-y": [{ "scale-y": [M] }],
        rotate: [{ rotate: [Oi, Ne] }],
        "translate-x": [{ "translate-x": [K] }],
        "translate-y": [{ "translate-y": [K] }],
        "skew-x": [{ "skew-x": [U] }],
        "skew-y": [{ "skew-y": [U] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              Ne,
            ],
          },
        ],
        accent: [{ accent: ["auto", n] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              Ne,
            ],
          },
        ],
        "caret-color": [{ caret: [n] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": X() }],
        "scroll-mx": [{ "scroll-mx": X() }],
        "scroll-my": [{ "scroll-my": X() }],
        "scroll-ms": [{ "scroll-ms": X() }],
        "scroll-me": [{ "scroll-me": X() }],
        "scroll-mt": [{ "scroll-mt": X() }],
        "scroll-mr": [{ "scroll-mr": X() }],
        "scroll-mb": [{ "scroll-mb": X() }],
        "scroll-ml": [{ "scroll-ml": X() }],
        "scroll-p": [{ "scroll-p": X() }],
        "scroll-px": [{ "scroll-px": X() }],
        "scroll-py": [{ "scroll-py": X() }],
        "scroll-ps": [{ "scroll-ps": X() }],
        "scroll-pe": [{ "scroll-pe": X() }],
        "scroll-pt": [{ "scroll-pt": X() }],
        "scroll-pr": [{ "scroll-pr": X() }],
        "scroll-pb": [{ "scroll-pb": X() }],
        "scroll-pl": [{ "scroll-pl": X() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", Ne] },
        ],
        fill: [{ fill: [n, "none"] }],
        "stroke-w": [{ stroke: [Gn, Er, Wu] }],
        stroke: [{ stroke: [n, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  ow = $x(iw);
function os(...n) {
  return ow(Mm(n));
}
const aw = sx,
  Um = k.forwardRef(({ className: n, ...t }, s) =>
    v.jsx(Nm, {
      ref: s,
      className: os(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        n
      ),
      ...t,
    })
  );
Um.displayName = Nm.displayName;
const lw = ix(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  Vm = k.forwardRef(({ className: n, variant: t, ...s }, i) =>
    v.jsx(Rm, { ref: i, className: os(lw({ variant: t }), n), ...s })
  );
Vm.displayName = Rm.displayName;
const uw = k.forwardRef(({ className: n, ...t }, s) =>
  v.jsx(Am, {
    ref: s,
    className: os(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      n
    ),
    ...t,
  })
);
uw.displayName = Am.displayName;
const Wm = k.forwardRef(({ className: n, ...t }, s) =>
  v.jsx(jm, {
    ref: s,
    className: os(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      n
    ),
    "toast-close": "",
    ...t,
    children: v.jsx(Nx, { className: "h-4 w-4" }),
  })
);
Wm.displayName = jm.displayName;
const Hm = k.forwardRef(({ className: n, ...t }, s) =>
  v.jsx(Pm, { ref: s, className: os("text-sm font-semibold", n), ...t })
);
Hm.displayName = Pm.displayName;
const qm = k.forwardRef(({ className: n, ...t }, s) =>
  v.jsx(Om, { ref: s, className: os("text-sm opacity-90", n), ...t })
);
qm.displayName = Om.displayName;
function cw() {
  const { toasts: n } = u0();
  return v.jsxs(aw, {
    children: [
      n.map(function ({ id: t, title: s, description: i, action: a, ...u }) {
        return v.jsxs(
          Vm,
          {
            ...u,
            children: [
              v.jsxs("div", {
                className: "grid gap-1",
                children: [
                  s && v.jsx(Hm, { children: s }),
                  i && v.jsx(qm, { children: i }),
                ],
              }),
              a,
              v.jsx(Wm, {}),
            ],
          },
          t
        );
      }),
      v.jsx(Um, {}),
    ],
  });
}
var da = {},
  np;
function dw() {
  if (np) return da;
  np = 1;
  var n = om();
  return (da.createRoot = n.createRoot), (da.hydrateRoot = n.hydrateRoot), da;
}
var fw = dw(),
  hw = (n, t, s, i, a, u, c, f) => {
    let p = document.documentElement,
      m = ["light", "dark"];
    function g(w) {
      (Array.isArray(n) ? n : [n]).forEach((E) => {
        let _ = E === "class",
          b = _ && u ? a.map((T) => u[T] || T) : a;
        _
          ? (p.classList.remove(...b), p.classList.add(u && u[w] ? u[w] : w))
          : p.setAttribute(E, w);
      }),
        x(w);
    }
    function x(w) {
      f && m.includes(w) && (p.style.colorScheme = w);
    }
    function S() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    if (i) g(i);
    else
      try {
        let w = localStorage.getItem(t) || s,
          E = c && w === "system" ? S() : w;
        g(E);
      } catch {}
  },
  pw = k.createContext(void 0),
  mw = { setTheme: (n) => {}, themes: [] },
  gw = () => {
    var n;
    return (n = k.useContext(pw)) != null ? n : mw;
  };
k.memo(
  ({
    forcedTheme: n,
    storageKey: t,
    attribute: s,
    enableSystem: i,
    enableColorScheme: a,
    defaultTheme: u,
    value: c,
    themes: f,
    nonce: p,
    scriptProps: m,
  }) => {
    let g = JSON.stringify([s, t, u, n, f, c, i, a]).slice(1, -1);
    return k.createElement("script", {
      ...m,
      suppressHydrationWarning: !0,
      nonce: typeof window > "u" ? p : "",
      dangerouslySetInnerHTML: { __html: `(${hw.toString()})(${g})` },
    });
  }
);
var yw = (n) => {
    switch (n) {
      case "success":
        return ww;
      case "info":
        return bw;
      case "warning":
        return _w;
      case "error":
        return Sw;
      default:
        return null;
    }
  },
  vw = Array(12).fill(0),
  xw = ({ visible: n, className: t }) =>
    G.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": n,
      },
      G.createElement(
        "div",
        { className: "sonner-spinner" },
        vw.map((s, i) =>
          G.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${i}`,
          })
        )
      )
    ),
  ww = G.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    G.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  _w = G.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    G.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  bw = G.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    G.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  Sw = G.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    G.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  kw = G.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    G.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    G.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ),
  Ew = () => {
    let [n, t] = G.useState(document.hidden);
    return (
      G.useEffect(() => {
        let s = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", s),
          () => window.removeEventListener("visibilitychange", s)
        );
      }, []),
      n
    );
  },
  ic = 1,
  Cw = class {
    constructor() {
      (this.subscribe = (n) => (
        this.subscribers.push(n),
        () => {
          let t = this.subscribers.indexOf(n);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (n) => {
          this.subscribers.forEach((t) => t(n));
        }),
        (this.addToast = (n) => {
          this.publish(n), (this.toasts = [...this.toasts, n]);
        }),
        (this.create = (n) => {
          var t;
          let { message: s, ...i } = n,
            a =
              typeof n?.id == "number" ||
              ((t = n.id) == null ? void 0 : t.length) > 0
                ? n.id
                : ic++,
            u = this.toasts.find((f) => f.id === a),
            c = n.dismissible === void 0 ? !0 : n.dismissible;
          return (
            this.dismissedToasts.has(a) && this.dismissedToasts.delete(a),
            u
              ? (this.toasts = this.toasts.map((f) =>
                  f.id === a
                    ? (this.publish({ ...f, ...n, id: a, title: s }),
                      { ...f, ...n, id: a, dismissible: c, title: s })
                    : f
                ))
              : this.addToast({ title: s, ...i, dismissible: c, id: a }),
            a
          );
        }),
        (this.dismiss = (n) => (
          this.dismissedToasts.add(n),
          n ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((s) => s({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: n, dismiss: !0 })),
          n
        )),
        (this.message = (n, t) => this.create({ ...t, message: n })),
        (this.error = (n, t) =>
          this.create({ ...t, message: n, type: "error" })),
        (this.success = (n, t) =>
          this.create({ ...t, type: "success", message: n })),
        (this.info = (n, t) => this.create({ ...t, type: "info", message: n })),
        (this.warning = (n, t) =>
          this.create({ ...t, type: "warning", message: n })),
        (this.loading = (n, t) =>
          this.create({ ...t, type: "loading", message: n })),
        (this.promise = (n, t) => {
          if (!t) return;
          let s;
          t.loading !== void 0 &&
            (s = this.create({
              ...t,
              promise: n,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let i = n instanceof Promise ? n : n(),
            a = s !== void 0,
            u,
            c = i
              .then(async (p) => {
                if (((u = ["resolve", p]), G.isValidElement(p)))
                  (a = !1), this.create({ id: s, type: "default", message: p });
                else if (Nw(p) && !p.ok) {
                  a = !1;
                  let m =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${p.status}`)
                        : t.error,
                    g =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${p.status}`)
                        : t.description;
                  this.create({
                    id: s,
                    type: "error",
                    message: m,
                    description: g,
                  });
                } else if (t.success !== void 0) {
                  a = !1;
                  let m =
                      typeof t.success == "function"
                        ? await t.success(p)
                        : t.success,
                    g =
                      typeof t.description == "function"
                        ? await t.description(p)
                        : t.description;
                  this.create({
                    id: s,
                    type: "success",
                    message: m,
                    description: g,
                  });
                }
              })
              .catch(async (p) => {
                if (((u = ["reject", p]), t.error !== void 0)) {
                  a = !1;
                  let m =
                      typeof t.error == "function" ? await t.error(p) : t.error,
                    g =
                      typeof t.description == "function"
                        ? await t.description(p)
                        : t.description;
                  this.create({
                    id: s,
                    type: "error",
                    message: m,
                    description: g,
                  });
                }
              })
              .finally(() => {
                var p;
                a && (this.dismiss(s), (s = void 0)),
                  (p = t.finally) == null || p.call(t);
              }),
            f = () =>
              new Promise((p, m) =>
                c.then(() => (u[0] === "reject" ? m(u[1]) : p(u[1]))).catch(m)
              );
          return typeof s != "string" && typeof s != "number"
            ? { unwrap: f }
            : Object.assign(s, { unwrap: f });
        }),
        (this.custom = (n, t) => {
          let s = t?.id || ic++;
          return this.create({ jsx: n(s), id: s, ...t }), s;
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((n) => !this.dismissedToasts.has(n.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set());
    }
  },
  Bt = new Cw(),
  Tw = (n, t) => {
    let s = t?.id || ic++;
    return Bt.addToast({ title: n, ...t, id: s }), s;
  },
  Nw = (n) =>
    n &&
    typeof n == "object" &&
    "ok" in n &&
    typeof n.ok == "boolean" &&
    "status" in n &&
    typeof n.status == "number",
  Rw = Tw,
  Pw = () => Bt.toasts,
  Ow = () => Bt.getActiveToasts();
Object.assign(
  Rw,
  {
    success: Bt.success,
    info: Bt.info,
    warning: Bt.warning,
    error: Bt.error,
    custom: Bt.custom,
    message: Bt.message,
    promise: Bt.promise,
    dismiss: Bt.dismiss,
    loading: Bt.loading,
  },
  { getHistory: Pw, getToasts: Ow }
);
function Aw(n, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let s = document.head || document.getElementsByTagName("head")[0],
    i = document.createElement("style");
  (i.type = "text/css"),
    t === "top" && s.firstChild
      ? s.insertBefore(i, s.firstChild)
      : s.appendChild(i),
    i.styleSheet
      ? (i.styleSheet.cssText = n)
      : i.appendChild(document.createTextNode(n));
}
Aw(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function fa(n) {
  return n.label !== void 0;
}
var jw = 3,
  Lw = "32px",
  Mw = "16px",
  rp = 4e3,
  Iw = 356,
  Dw = 14,
  Fw = 20,
  zw = 200;
function wn(...n) {
  return n.filter(Boolean).join(" ");
}
function Bw(n) {
  let [t, s] = n.split("-"),
    i = [];
  return t && i.push(t), s && i.push(s), i;
}
var $w = (n) => {
  var t, s, i, a, u, c, f, p, m, g, x;
  let {
      invert: S,
      toast: w,
      unstyled: E,
      interacting: _,
      setHeights: b,
      visibleToasts: T,
      heights: N,
      index: A,
      toasts: M,
      expanded: B,
      removeToast: U,
      defaultRichColors: $,
      closeButton: K,
      style: te,
      cancelButtonStyle: re,
      actionButtonStyle: se,
      className: X = "",
      descriptionClassName: ye = "",
      duration: V,
      position: ge,
      gap: ae,
      loadingIcon: ne,
      expandByDefault: F,
      classNames: z,
      icons: W,
      closeButtonAriaLabel: P = "Close toast",
      pauseWhenPageIsHidden: D,
    } = n,
    [J, ee] = G.useState(null),
    [ve, Se] = G.useState(null),
    [le, xe] = G.useState(!1),
    [Te, Me] = G.useState(!1),
    [Ae, ce] = G.useState(!1),
    [Re, Ue] = G.useState(!1),
    [tt, yt] = G.useState(!1),
    [St, Nt] = G.useState(0),
    [Rt, vt] = G.useState(0),
    lt = G.useRef(w.duration || V || rp),
    Nn = G.useRef(null),
    Pt = G.useRef(null),
    Br = A === 0,
    $r = A + 1 <= T,
    ft = w.type,
    Vt = w.dismissible !== !1,
    nr = w.className || "",
    rr = w.descriptionClassName || "",
    ht = G.useMemo(
      () => N.findIndex((be) => be.toastId === w.id) || 0,
      [N, w.id]
    ),
    ln = G.useMemo(() => {
      var be;
      return (be = w.closeButton) != null ? be : K;
    }, [w.closeButton, K]),
    sr = G.useMemo(() => w.duration || V || rp, [w.duration, V]),
    un = G.useRef(0),
    cn = G.useRef(0),
    us = G.useRef(0),
    Xt = G.useRef(null),
    [Ur, Vr] = ge.split("-"),
    Un = G.useMemo(
      () => N.reduce((be, Le, Be) => (Be >= ht ? be : be + Le.height), 0),
      [N, ht]
    ),
    ir = Ew(),
    dn = w.invert || S,
    Wt = ft === "loading";
  (cn.current = G.useMemo(() => ht * ae + Un, [ht, Un])),
    G.useEffect(() => {
      lt.current = sr;
    }, [sr]),
    G.useEffect(() => {
      xe(!0);
    }, []),
    G.useEffect(() => {
      let be = Pt.current;
      if (be) {
        let Le = be.getBoundingClientRect().height;
        return (
          vt(Le),
          b((Be) => [
            { toastId: w.id, height: Le, position: w.position },
            ...Be,
          ]),
          () => b((Be) => Be.filter((kt) => kt.toastId !== w.id))
        );
      }
    }, [b, w.id]),
    G.useLayoutEffect(() => {
      if (!le) return;
      let be = Pt.current,
        Le = be.style.height;
      be.style.height = "auto";
      let Be = be.getBoundingClientRect().height;
      (be.style.height = Le),
        vt(Be),
        b((kt) =>
          kt.find((At) => At.toastId === w.id)
            ? kt.map((At) => (At.toastId === w.id ? { ...At, height: Be } : At))
            : [{ toastId: w.id, height: Be, position: w.position }, ...kt]
        );
    }, [le, w.title, w.description, b, w.id]);
  let Ot = G.useCallback(() => {
    Me(!0),
      Nt(cn.current),
      b((be) => be.filter((Le) => Le.toastId !== w.id)),
      setTimeout(() => {
        U(w);
      }, zw);
  }, [w, U, b, cn]);
  G.useEffect(() => {
    if (
      (w.promise && ft === "loading") ||
      w.duration === 1 / 0 ||
      w.type === "loading"
    )
      return;
    let be;
    return (
      B || _ || (D && ir)
        ? (() => {
            if (us.current < un.current) {
              let Le = new Date().getTime() - un.current;
              lt.current = lt.current - Le;
            }
            us.current = new Date().getTime();
          })()
        : lt.current !== 1 / 0 &&
          ((un.current = new Date().getTime()),
          (be = setTimeout(() => {
            var Le;
            (Le = w.onAutoClose) == null || Le.call(w, w), Ot();
          }, lt.current))),
      () => clearTimeout(be)
    );
  }, [B, _, w, ft, D, ir, Ot]),
    G.useEffect(() => {
      w.delete && Ot();
    }, [Ot, w.delete]);
  function cs() {
    var be, Le, Be;
    return W != null && W.loading
      ? G.createElement(
          "div",
          {
            className: wn(
              z?.loader,
              (be = w?.classNames) == null ? void 0 : be.loader,
              "sonner-loader"
            ),
            "data-visible": ft === "loading",
          },
          W.loading
        )
      : ne
      ? G.createElement(
          "div",
          {
            className: wn(
              z?.loader,
              (Le = w?.classNames) == null ? void 0 : Le.loader,
              "sonner-loader"
            ),
            "data-visible": ft === "loading",
          },
          ne
        )
      : G.createElement(xw, {
          className: wn(
            z?.loader,
            (Be = w?.classNames) == null ? void 0 : Be.loader
          ),
          visible: ft === "loading",
        });
  }
  return G.createElement(
    "li",
    {
      tabIndex: 0,
      ref: Pt,
      className: wn(
        X,
        nr,
        z?.toast,
        (t = w?.classNames) == null ? void 0 : t.toast,
        z?.default,
        z?.[ft],
        (s = w?.classNames) == null ? void 0 : s[ft]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (i = w.richColors) != null ? i : $,
      "data-styled": !(w.jsx || w.unstyled || E),
      "data-mounted": le,
      "data-promise": !!w.promise,
      "data-swiped": tt,
      "data-removed": Te,
      "data-visible": $r,
      "data-y-position": Ur,
      "data-x-position": Vr,
      "data-index": A,
      "data-front": Br,
      "data-swiping": Ae,
      "data-dismissible": Vt,
      "data-type": ft,
      "data-invert": dn,
      "data-swipe-out": Re,
      "data-swipe-direction": ve,
      "data-expanded": !!(B || (F && le)),
      style: {
        "--index": A,
        "--toasts-before": A,
        "--z-index": M.length - A,
        "--offset": `${Te ? St : cn.current}px`,
        "--initial-height": F ? "auto" : `${Rt}px`,
        ...te,
        ...w.style,
      },
      onDragEnd: () => {
        ce(!1), ee(null), (Xt.current = null);
      },
      onPointerDown: (be) => {
        Wt ||
          !Vt ||
          ((Nn.current = new Date()),
          Nt(cn.current),
          be.target.setPointerCapture(be.pointerId),
          be.target.tagName !== "BUTTON" &&
            (ce(!0), (Xt.current = { x: be.clientX, y: be.clientY })));
      },
      onPointerUp: () => {
        var be, Le, Be, kt;
        if (Re || !Vt) return;
        Xt.current = null;
        let At = Number(
            ((be = Pt.current) == null
              ? void 0
              : be.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0
          ),
          jt = Number(
            ((Le = Pt.current) == null
              ? void 0
              : Le.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0
          ),
          fn =
            new Date().getTime() -
            ((Be = Nn.current) == null ? void 0 : Be.getTime()),
          pt = J === "x" ? At : jt,
          Rn = Math.abs(pt) / fn;
        if (Math.abs(pt) >= Fw || Rn > 0.11) {
          Nt(cn.current),
            (kt = w.onDismiss) == null || kt.call(w, w),
            Se(
              J === "x" ? (At > 0 ? "right" : "left") : jt > 0 ? "down" : "up"
            ),
            Ot(),
            Ue(!0),
            yt(!1);
          return;
        }
        ce(!1), ee(null);
      },
      onPointerMove: (be) => {
        var Le, Be, kt, At;
        if (
          !Xt.current ||
          !Vt ||
          ((Le = window.getSelection()) == null
            ? void 0
            : Le.toString().length) > 0
        )
          return;
        let jt = be.clientY - Xt.current.y,
          fn = be.clientX - Xt.current.x,
          pt = (Be = n.swipeDirections) != null ? Be : Bw(ge);
        !J &&
          (Math.abs(fn) > 1 || Math.abs(jt) > 1) &&
          ee(Math.abs(fn) > Math.abs(jt) ? "x" : "y");
        let Rn = { x: 0, y: 0 };
        J === "y"
          ? (pt.includes("top") || pt.includes("bottom")) &&
            ((pt.includes("top") && jt < 0) ||
              (pt.includes("bottom") && jt > 0)) &&
            (Rn.y = jt)
          : J === "x" &&
            (pt.includes("left") || pt.includes("right")) &&
            ((pt.includes("left") && fn < 0) ||
              (pt.includes("right") && fn > 0)) &&
            (Rn.x = fn),
          (Math.abs(Rn.x) > 0 || Math.abs(Rn.y) > 0) && yt(!0),
          (kt = Pt.current) == null ||
            kt.style.setProperty("--swipe-amount-x", `${Rn.x}px`),
          (At = Pt.current) == null ||
            At.style.setProperty("--swipe-amount-y", `${Rn.y}px`);
      },
    },
    ln && !w.jsx
      ? G.createElement(
          "button",
          {
            "aria-label": P,
            "data-disabled": Wt,
            "data-close-button": !0,
            onClick:
              Wt || !Vt
                ? () => {}
                : () => {
                    var be;
                    Ot(), (be = w.onDismiss) == null || be.call(w, w);
                  },
            className: wn(
              z?.closeButton,
              (a = w?.classNames) == null ? void 0 : a.closeButton
            ),
          },
          (u = W?.close) != null ? u : kw
        )
      : null,
    w.jsx || k.isValidElement(w.title)
      ? w.jsx
        ? w.jsx
        : typeof w.title == "function"
        ? w.title()
        : w.title
      : G.createElement(
          G.Fragment,
          null,
          ft || w.icon || w.promise
            ? G.createElement(
                "div",
                {
                  "data-icon": "",
                  className: wn(
                    z?.icon,
                    (c = w?.classNames) == null ? void 0 : c.icon
                  ),
                },
                w.promise || (w.type === "loading" && !w.icon)
                  ? w.icon || cs()
                  : null,
                w.type !== "loading" ? w.icon || W?.[ft] || yw(ft) : null
              )
            : null,
          G.createElement(
            "div",
            {
              "data-content": "",
              className: wn(
                z?.content,
                (f = w?.classNames) == null ? void 0 : f.content
              ),
            },
            G.createElement(
              "div",
              {
                "data-title": "",
                className: wn(
                  z?.title,
                  (p = w?.classNames) == null ? void 0 : p.title
                ),
              },
              typeof w.title == "function" ? w.title() : w.title
            ),
            w.description
              ? G.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: wn(
                      ye,
                      rr,
                      z?.description,
                      (m = w?.classNames) == null ? void 0 : m.description
                    ),
                  },
                  typeof w.description == "function"
                    ? w.description()
                    : w.description
                )
              : null
          ),
          k.isValidElement(w.cancel)
            ? w.cancel
            : w.cancel && fa(w.cancel)
            ? G.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: w.cancelButtonStyle || re,
                  onClick: (be) => {
                    var Le, Be;
                    fa(w.cancel) &&
                      Vt &&
                      ((Be = (Le = w.cancel).onClick) == null ||
                        Be.call(Le, be),
                      Ot());
                  },
                  className: wn(
                    z?.cancelButton,
                    (g = w?.classNames) == null ? void 0 : g.cancelButton
                  ),
                },
                w.cancel.label
              )
            : null,
          k.isValidElement(w.action)
            ? w.action
            : w.action && fa(w.action)
            ? G.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-action": !0,
                  style: w.actionButtonStyle || se,
                  onClick: (be) => {
                    var Le, Be;
                    fa(w.action) &&
                      ((Be = (Le = w.action).onClick) == null ||
                        Be.call(Le, be),
                      !be.defaultPrevented && Ot());
                  },
                  className: wn(
                    z?.actionButton,
                    (x = w?.classNames) == null ? void 0 : x.actionButton
                  ),
                },
                w.action.label
              )
            : null
        )
  );
};
function sp() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let n = document.documentElement.getAttribute("dir");
  return n === "auto" || !n
    ? window.getComputedStyle(document.documentElement).direction
    : n;
}
function Uw(n, t) {
  let s = {};
  return (
    [n, t].forEach((i, a) => {
      let u = a === 1,
        c = u ? "--mobile-offset" : "--offset",
        f = u ? Mw : Lw;
      function p(m) {
        ["top", "right", "bottom", "left"].forEach((g) => {
          s[`${c}-${g}`] = typeof m == "number" ? `${m}px` : m;
        });
      }
      typeof i == "number" || typeof i == "string"
        ? p(i)
        : typeof i == "object"
        ? ["top", "right", "bottom", "left"].forEach((m) => {
            i[m] === void 0
              ? (s[`${c}-${m}`] = f)
              : (s[`${c}-${m}`] = typeof i[m] == "number" ? `${i[m]}px` : i[m]);
          })
        : p(f);
    }),
    s
  );
}
var Vw = k.forwardRef(function (n, t) {
  let {
      invert: s,
      position: i = "bottom-right",
      hotkey: a = ["altKey", "KeyT"],
      expand: u,
      closeButton: c,
      className: f,
      offset: p,
      mobileOffset: m,
      theme: g = "light",
      richColors: x,
      duration: S,
      style: w,
      visibleToasts: E = jw,
      toastOptions: _,
      dir: b = sp(),
      gap: T = Dw,
      loadingIcon: N,
      icons: A,
      containerAriaLabel: M = "Notifications",
      pauseWhenPageIsHidden: B,
    } = n,
    [U, $] = G.useState([]),
    K = G.useMemo(
      () =>
        Array.from(
          new Set(
            [i].concat(U.filter((D) => D.position).map((D) => D.position))
          )
        ),
      [U, i]
    ),
    [te, re] = G.useState([]),
    [se, X] = G.useState(!1),
    [ye, V] = G.useState(!1),
    [ge, ae] = G.useState(
      g !== "system"
        ? g
        : typeof window < "u" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    ),
    ne = G.useRef(null),
    F = a.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    z = G.useRef(null),
    W = G.useRef(!1),
    P = G.useCallback((D) => {
      $((J) => {
        var ee;
        return (
          ((ee = J.find((ve) => ve.id === D.id)) != null && ee.delete) ||
            Bt.dismiss(D.id),
          J.filter(({ id: ve }) => ve !== D.id)
        );
      });
    }, []);
  return (
    G.useEffect(
      () =>
        Bt.subscribe((D) => {
          if (D.dismiss) {
            $((J) =>
              J.map((ee) => (ee.id === D.id ? { ...ee, delete: !0 } : ee))
            );
            return;
          }
          setTimeout(() => {
            am.flushSync(() => {
              $((J) => {
                let ee = J.findIndex((ve) => ve.id === D.id);
                return ee !== -1
                  ? [...J.slice(0, ee), { ...J[ee], ...D }, ...J.slice(ee + 1)]
                  : [D, ...J];
              });
            });
          });
        }),
      []
    ),
    G.useEffect(() => {
      if (g !== "system") {
        ae(g);
        return;
      }
      if (
        (g === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? ae("dark")
            : ae("light")),
        typeof window > "u")
      )
        return;
      let D = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        D.addEventListener("change", ({ matches: J }) => {
          ae(J ? "dark" : "light");
        });
      } catch {
        D.addListener(({ matches: ee }) => {
          try {
            ae(ee ? "dark" : "light");
          } catch (ve) {
            console.error(ve);
          }
        });
      }
    }, [g]),
    G.useEffect(() => {
      U.length <= 1 && X(!1);
    }, [U]),
    G.useEffect(() => {
      let D = (J) => {
        var ee, ve;
        a.every((Se) => J[Se] || J.code === Se) &&
          (X(!0), (ee = ne.current) == null || ee.focus()),
          J.code === "Escape" &&
            (document.activeElement === ne.current ||
              ((ve = ne.current) != null &&
                ve.contains(document.activeElement))) &&
            X(!1);
      };
      return (
        document.addEventListener("keydown", D),
        () => document.removeEventListener("keydown", D)
      );
    }, [a]),
    G.useEffect(() => {
      if (ne.current)
        return () => {
          z.current &&
            (z.current.focus({ preventScroll: !0 }),
            (z.current = null),
            (W.current = !1));
        };
    }, [ne.current]),
    G.createElement(
      "section",
      {
        ref: t,
        "aria-label": `${M} ${F}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      K.map((D, J) => {
        var ee;
        let [ve, Se] = D.split("-");
        return U.length
          ? G.createElement(
              "ol",
              {
                key: D,
                dir: b === "auto" ? sp() : b,
                tabIndex: -1,
                ref: ne,
                className: f,
                "data-sonner-toaster": !0,
                "data-theme": ge,
                "data-y-position": ve,
                "data-lifted": se && U.length > 1 && !u,
                "data-x-position": Se,
                style: {
                  "--front-toast-height": `${
                    ((ee = te[0]) == null ? void 0 : ee.height) || 0
                  }px`,
                  "--width": `${Iw}px`,
                  "--gap": `${T}px`,
                  ...w,
                  ...Uw(p, m),
                },
                onBlur: (le) => {
                  W.current &&
                    !le.currentTarget.contains(le.relatedTarget) &&
                    ((W.current = !1),
                    z.current &&
                      (z.current.focus({ preventScroll: !0 }),
                      (z.current = null)));
                },
                onFocus: (le) => {
                  (le.target instanceof HTMLElement &&
                    le.target.dataset.dismissible === "false") ||
                    W.current ||
                    ((W.current = !0), (z.current = le.relatedTarget));
                },
                onMouseEnter: () => X(!0),
                onMouseMove: () => X(!0),
                onMouseLeave: () => {
                  ye || X(!1);
                },
                onDragEnd: () => X(!1),
                onPointerDown: (le) => {
                  (le.target instanceof HTMLElement &&
                    le.target.dataset.dismissible === "false") ||
                    V(!0);
                },
                onPointerUp: () => V(!1),
              },
              U.filter(
                (le) => (!le.position && J === 0) || le.position === D
              ).map((le, xe) => {
                var Te, Me;
                return G.createElement($w, {
                  key: le.id,
                  icons: A,
                  index: xe,
                  toast: le,
                  defaultRichColors: x,
                  duration: (Te = _?.duration) != null ? Te : S,
                  className: _?.className,
                  descriptionClassName: _?.descriptionClassName,
                  invert: s,
                  visibleToasts: E,
                  closeButton: (Me = _?.closeButton) != null ? Me : c,
                  interacting: ye,
                  position: D,
                  style: _?.style,
                  unstyled: _?.unstyled,
                  classNames: _?.classNames,
                  cancelButtonStyle: _?.cancelButtonStyle,
                  actionButtonStyle: _?.actionButtonStyle,
                  removeToast: P,
                  toasts: U.filter((Ae) => Ae.position == le.position),
                  heights: te.filter((Ae) => Ae.position == le.position),
                  setHeights: re,
                  expandByDefault: u,
                  gap: T,
                  loadingIcon: N,
                  expanded: se,
                  pauseWhenPageIsHidden: B,
                  swipeDirections: n.swipeDirections,
                });
              })
            )
          : null;
      })
    )
  );
});
const Ww = ({ ...n }) => {
    const { theme: t = "system" } = gw();
    return v.jsx(Vw, {
      theme: t,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      },
      ...n,
    });
  },
  Hw = ["top", "right", "bottom", "left"],
  Mr = Math.min,
  Kt = Math.max,
  ka = Math.round,
  ha = Math.floor,
  In = (n) => ({ x: n, y: n }),
  qw = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Qw = { start: "end", end: "start" };
function oc(n, t, s) {
  return Kt(n, Mr(t, s));
}
function Xn(n, t) {
  return typeof n == "function" ? n(t) : n;
}
function Jn(n) {
  return n.split("-")[0];
}
function Hs(n) {
  return n.split("-")[1];
}
function Fc(n) {
  return n === "x" ? "y" : "x";
}
function zc(n) {
  return n === "y" ? "height" : "width";
}
const Zw = new Set(["top", "bottom"]);
function Mn(n) {
  return Zw.has(Jn(n)) ? "y" : "x";
}
function Bc(n) {
  return Fc(Mn(n));
}
function Kw(n, t, s) {
  s === void 0 && (s = !1);
  const i = Hs(n),
    a = Bc(n),
    u = zc(a);
  let c =
    a === "x"
      ? i === (s ? "end" : "start")
        ? "right"
        : "left"
      : i === "start"
      ? "bottom"
      : "top";
  return t.reference[u] > t.floating[u] && (c = Ea(c)), [c, Ea(c)];
}
function Yw(n) {
  const t = Ea(n);
  return [ac(n), t, ac(t)];
}
function ac(n) {
  return n.replace(/start|end/g, (t) => Qw[t]);
}
const ip = ["left", "right"],
  op = ["right", "left"],
  Gw = ["top", "bottom"],
  Xw = ["bottom", "top"];
function Jw(n, t, s) {
  switch (n) {
    case "top":
    case "bottom":
      return s ? (t ? op : ip) : t ? ip : op;
    case "left":
    case "right":
      return t ? Gw : Xw;
    default:
      return [];
  }
}
function e1(n, t, s, i) {
  const a = Hs(n);
  let u = Jw(Jn(n), s === "start", i);
  return (
    a && ((u = u.map((c) => c + "-" + a)), t && (u = u.concat(u.map(ac)))), u
  );
}
function Ea(n) {
  return n.replace(/left|right|bottom|top/g, (t) => qw[t]);
}
function t1(n) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...n };
}
function Qm(n) {
  return typeof n != "number"
    ? t1(n)
    : { top: n, right: n, bottom: n, left: n };
}
function Ca(n) {
  const { x: t, y: s, width: i, height: a } = n;
  return {
    width: i,
    height: a,
    top: s,
    left: t,
    right: t + i,
    bottom: s + a,
    x: t,
    y: s,
  };
}
function ap(n, t, s) {
  let { reference: i, floating: a } = n;
  const u = Mn(t),
    c = Bc(t),
    f = zc(c),
    p = Jn(t),
    m = u === "y",
    g = i.x + i.width / 2 - a.width / 2,
    x = i.y + i.height / 2 - a.height / 2,
    S = i[f] / 2 - a[f] / 2;
  let w;
  switch (p) {
    case "top":
      w = { x: g, y: i.y - a.height };
      break;
    case "bottom":
      w = { x: g, y: i.y + i.height };
      break;
    case "right":
      w = { x: i.x + i.width, y: x };
      break;
    case "left":
      w = { x: i.x - a.width, y: x };
      break;
    default:
      w = { x: i.x, y: i.y };
  }
  switch (Hs(t)) {
    case "start":
      w[c] -= S * (s && m ? -1 : 1);
      break;
    case "end":
      w[c] += S * (s && m ? -1 : 1);
      break;
  }
  return w;
}
const n1 = async (n, t, s) => {
  const {
      placement: i = "bottom",
      strategy: a = "absolute",
      middleware: u = [],
      platform: c,
    } = s,
    f = u.filter(Boolean),
    p = await (c.isRTL == null ? void 0 : c.isRTL(t));
  let m = await c.getElementRects({ reference: n, floating: t, strategy: a }),
    { x: g, y: x } = ap(m, i, p),
    S = i,
    w = {},
    E = 0;
  for (let _ = 0; _ < f.length; _++) {
    const { name: b, fn: T } = f[_],
      {
        x: N,
        y: A,
        data: M,
        reset: B,
      } = await T({
        x: g,
        y: x,
        initialPlacement: i,
        placement: S,
        strategy: a,
        middlewareData: w,
        rects: m,
        platform: c,
        elements: { reference: n, floating: t },
      });
    (g = N ?? g),
      (x = A ?? x),
      (w = { ...w, [b]: { ...w[b], ...M } }),
      B &&
        E <= 50 &&
        (E++,
        typeof B == "object" &&
          (B.placement && (S = B.placement),
          B.rects &&
            (m =
              B.rects === !0
                ? await c.getElementRects({
                    reference: n,
                    floating: t,
                    strategy: a,
                  })
                : B.rects),
          ({ x: g, y: x } = ap(m, S, p))),
        (_ = -1));
  }
  return { x: g, y: x, placement: S, strategy: a, middlewareData: w };
};
async function zi(n, t) {
  var s;
  t === void 0 && (t = {});
  const { x: i, y: a, platform: u, rects: c, elements: f, strategy: p } = n,
    {
      boundary: m = "clippingAncestors",
      rootBoundary: g = "viewport",
      elementContext: x = "floating",
      altBoundary: S = !1,
      padding: w = 0,
    } = Xn(t, n),
    E = Qm(w),
    b = f[S ? (x === "floating" ? "reference" : "floating") : x],
    T = Ca(
      await u.getClippingRect({
        element:
          (s = await (u.isElement == null ? void 0 : u.isElement(b))) == null ||
          s
            ? b
            : b.contextElement ||
              (await (u.getDocumentElement == null
                ? void 0
                : u.getDocumentElement(f.floating))),
        boundary: m,
        rootBoundary: g,
        strategy: p,
      })
    ),
    N =
      x === "floating"
        ? { x: i, y: a, width: c.floating.width, height: c.floating.height }
        : c.reference,
    A = await (u.getOffsetParent == null
      ? void 0
      : u.getOffsetParent(f.floating)),
    M = (await (u.isElement == null ? void 0 : u.isElement(A)))
      ? (await (u.getScale == null ? void 0 : u.getScale(A))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    B = Ca(
      u.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await u.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: f,
            rect: N,
            offsetParent: A,
            strategy: p,
          })
        : N
    );
  return {
    top: (T.top - B.top + E.top) / M.y,
    bottom: (B.bottom - T.bottom + E.bottom) / M.y,
    left: (T.left - B.left + E.left) / M.x,
    right: (B.right - T.right + E.right) / M.x,
  };
}
const r1 = (n) => ({
    name: "arrow",
    options: n,
    async fn(t) {
      const {
          x: s,
          y: i,
          placement: a,
          rects: u,
          platform: c,
          elements: f,
          middlewareData: p,
        } = t,
        { element: m, padding: g = 0 } = Xn(n, t) || {};
      if (m == null) return {};
      const x = Qm(g),
        S = { x: s, y: i },
        w = Bc(a),
        E = zc(w),
        _ = await c.getDimensions(m),
        b = w === "y",
        T = b ? "top" : "left",
        N = b ? "bottom" : "right",
        A = b ? "clientHeight" : "clientWidth",
        M = u.reference[E] + u.reference[w] - S[w] - u.floating[E],
        B = S[w] - u.reference[w],
        U = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(m));
      let $ = U ? U[A] : 0;
      (!$ || !(await (c.isElement == null ? void 0 : c.isElement(U)))) &&
        ($ = f.floating[A] || u.floating[E]);
      const K = M / 2 - B / 2,
        te = $ / 2 - _[E] / 2 - 1,
        re = Mr(x[T], te),
        se = Mr(x[N], te),
        X = re,
        ye = $ - _[E] - se,
        V = $ / 2 - _[E] / 2 + K,
        ge = oc(X, V, ye),
        ae =
          !p.arrow &&
          Hs(a) != null &&
          V !== ge &&
          u.reference[E] / 2 - (V < X ? re : se) - _[E] / 2 < 0,
        ne = ae ? (V < X ? V - X : V - ye) : 0;
      return {
        [w]: S[w] + ne,
        data: {
          [w]: ge,
          centerOffset: V - ge - ne,
          ...(ae && { alignmentOffset: ne }),
        },
        reset: ae,
      };
    },
  }),
  s1 = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: "flip",
        options: n,
        async fn(t) {
          var s, i;
          const {
              placement: a,
              middlewareData: u,
              rects: c,
              initialPlacement: f,
              platform: p,
              elements: m,
            } = t,
            {
              mainAxis: g = !0,
              crossAxis: x = !0,
              fallbackPlacements: S,
              fallbackStrategy: w = "bestFit",
              fallbackAxisSideDirection: E = "none",
              flipAlignment: _ = !0,
              ...b
            } = Xn(n, t);
          if ((s = u.arrow) != null && s.alignmentOffset) return {};
          const T = Jn(a),
            N = Mn(f),
            A = Jn(f) === f,
            M = await (p.isRTL == null ? void 0 : p.isRTL(m.floating)),
            B = S || (A || !_ ? [Ea(f)] : Yw(f)),
            U = E !== "none";
          !S && U && B.push(...e1(f, _, E, M));
          const $ = [f, ...B],
            K = await zi(t, b),
            te = [];
          let re = ((i = u.flip) == null ? void 0 : i.overflows) || [];
          if ((g && te.push(K[T]), x)) {
            const V = Kw(a, c, M);
            te.push(K[V[0]], K[V[1]]);
          }
          if (
            ((re = [...re, { placement: a, overflows: te }]),
            !te.every((V) => V <= 0))
          ) {
            var se, X;
            const V = (((se = u.flip) == null ? void 0 : se.index) || 0) + 1,
              ge = $[V];
            if (
              ge &&
              (!(x === "alignment" ? N !== Mn(ge) : !1) ||
                re.every((F) =>
                  Mn(F.placement) === N ? F.overflows[0] > 0 : !0
                ))
            )
              return {
                data: { index: V, overflows: re },
                reset: { placement: ge },
              };
            let ae =
              (X = re
                .filter((ne) => ne.overflows[0] <= 0)
                .sort((ne, F) => ne.overflows[1] - F.overflows[1])[0]) == null
                ? void 0
                : X.placement;
            if (!ae)
              switch (w) {
                case "bestFit": {
                  var ye;
                  const ne =
                    (ye = re
                      .filter((F) => {
                        if (U) {
                          const z = Mn(F.placement);
                          return z === N || z === "y";
                        }
                        return !0;
                      })
                      .map((F) => [
                        F.placement,
                        F.overflows
                          .filter((z) => z > 0)
                          .reduce((z, W) => z + W, 0),
                      ])
                      .sort((F, z) => F[1] - z[1])[0]) == null
                      ? void 0
                      : ye[0];
                  ne && (ae = ne);
                  break;
                }
                case "initialPlacement":
                  ae = f;
                  break;
              }
            if (a !== ae) return { reset: { placement: ae } };
          }
          return {};
        },
      }
    );
  };
function lp(n, t) {
  return {
    top: n.top - t.height,
    right: n.right - t.width,
    bottom: n.bottom - t.height,
    left: n.left - t.width,
  };
}
function up(n) {
  return Hw.some((t) => n[t] >= 0);
}
const i1 = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: "hide",
        options: n,
        async fn(t) {
          const { rects: s } = t,
            { strategy: i = "referenceHidden", ...a } = Xn(n, t);
          switch (i) {
            case "referenceHidden": {
              const u = await zi(t, { ...a, elementContext: "reference" }),
                c = lp(u, s.reference);
              return {
                data: { referenceHiddenOffsets: c, referenceHidden: up(c) },
              };
            }
            case "escaped": {
              const u = await zi(t, { ...a, altBoundary: !0 }),
                c = lp(u, s.floating);
              return { data: { escapedOffsets: c, escaped: up(c) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Zm = new Set(["left", "top"]);
async function o1(n, t) {
  const { placement: s, platform: i, elements: a } = n,
    u = await (i.isRTL == null ? void 0 : i.isRTL(a.floating)),
    c = Jn(s),
    f = Hs(s),
    p = Mn(s) === "y",
    m = Zm.has(c) ? -1 : 1,
    g = u && p ? -1 : 1,
    x = Xn(t, n);
  let {
    mainAxis: S,
    crossAxis: w,
    alignmentAxis: E,
  } = typeof x == "number"
    ? { mainAxis: x, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: x.mainAxis || 0,
        crossAxis: x.crossAxis || 0,
        alignmentAxis: x.alignmentAxis,
      };
  return (
    f && typeof E == "number" && (w = f === "end" ? E * -1 : E),
    p ? { x: w * g, y: S * m } : { x: S * m, y: w * g }
  );
}
const a1 = function (n) {
    return (
      n === void 0 && (n = 0),
      {
        name: "offset",
        options: n,
        async fn(t) {
          var s, i;
          const { x: a, y: u, placement: c, middlewareData: f } = t,
            p = await o1(t, n);
          return c === ((s = f.offset) == null ? void 0 : s.placement) &&
            (i = f.arrow) != null &&
            i.alignmentOffset
            ? {}
            : { x: a + p.x, y: u + p.y, data: { ...p, placement: c } };
        },
      }
    );
  },
  l1 = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: "shift",
        options: n,
        async fn(t) {
          const { x: s, y: i, placement: a } = t,
            {
              mainAxis: u = !0,
              crossAxis: c = !1,
              limiter: f = {
                fn: (b) => {
                  let { x: T, y: N } = b;
                  return { x: T, y: N };
                },
              },
              ...p
            } = Xn(n, t),
            m = { x: s, y: i },
            g = await zi(t, p),
            x = Mn(Jn(a)),
            S = Fc(x);
          let w = m[S],
            E = m[x];
          if (u) {
            const b = S === "y" ? "top" : "left",
              T = S === "y" ? "bottom" : "right",
              N = w + g[b],
              A = w - g[T];
            w = oc(N, w, A);
          }
          if (c) {
            const b = x === "y" ? "top" : "left",
              T = x === "y" ? "bottom" : "right",
              N = E + g[b],
              A = E - g[T];
            E = oc(N, E, A);
          }
          const _ = f.fn({ ...t, [S]: w, [x]: E });
          return {
            ..._,
            data: { x: _.x - s, y: _.y - i, enabled: { [S]: u, [x]: c } },
          };
        },
      }
    );
  },
  u1 = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        options: n,
        fn(t) {
          const { x: s, y: i, placement: a, rects: u, middlewareData: c } = t,
            { offset: f = 0, mainAxis: p = !0, crossAxis: m = !0 } = Xn(n, t),
            g = { x: s, y: i },
            x = Mn(a),
            S = Fc(x);
          let w = g[S],
            E = g[x];
          const _ = Xn(f, t),
            b =
              typeof _ == "number"
                ? { mainAxis: _, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ..._ };
          if (p) {
            const A = S === "y" ? "height" : "width",
              M = u.reference[S] - u.floating[A] + b.mainAxis,
              B = u.reference[S] + u.reference[A] - b.mainAxis;
            w < M ? (w = M) : w > B && (w = B);
          }
          if (m) {
            var T, N;
            const A = S === "y" ? "width" : "height",
              M = Zm.has(Jn(a)),
              B =
                u.reference[x] -
                u.floating[A] +
                ((M && ((T = c.offset) == null ? void 0 : T[x])) || 0) +
                (M ? 0 : b.crossAxis),
              U =
                u.reference[x] +
                u.reference[A] +
                (M ? 0 : ((N = c.offset) == null ? void 0 : N[x]) || 0) -
                (M ? b.crossAxis : 0);
            E < B ? (E = B) : E > U && (E = U);
          }
          return { [S]: w, [x]: E };
        },
      }
    );
  },
  c1 = function (n) {
    return (
      n === void 0 && (n = {}),
      {
        name: "size",
        options: n,
        async fn(t) {
          var s, i;
          const { placement: a, rects: u, platform: c, elements: f } = t,
            { apply: p = () => {}, ...m } = Xn(n, t),
            g = await zi(t, m),
            x = Jn(a),
            S = Hs(a),
            w = Mn(a) === "y",
            { width: E, height: _ } = u.floating;
          let b, T;
          x === "top" || x === "bottom"
            ? ((b = x),
              (T =
                S ===
                ((await (c.isRTL == null ? void 0 : c.isRTL(f.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((T = x), (b = S === "end" ? "top" : "bottom"));
          const N = _ - g.top - g.bottom,
            A = E - g.left - g.right,
            M = Mr(_ - g[b], N),
            B = Mr(E - g[T], A),
            U = !t.middlewareData.shift;
          let $ = M,
            K = B;
          if (
            ((s = t.middlewareData.shift) != null && s.enabled.x && (K = A),
            (i = t.middlewareData.shift) != null && i.enabled.y && ($ = N),
            U && !S)
          ) {
            const re = Kt(g.left, 0),
              se = Kt(g.right, 0),
              X = Kt(g.top, 0),
              ye = Kt(g.bottom, 0);
            w
              ? (K =
                  E -
                  2 * (re !== 0 || se !== 0 ? re + se : Kt(g.left, g.right)))
              : ($ =
                  _ - 2 * (X !== 0 || ye !== 0 ? X + ye : Kt(g.top, g.bottom)));
          }
          await p({ ...t, availableWidth: K, availableHeight: $ });
          const te = await c.getDimensions(f.floating);
          return E !== te.width || _ !== te.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function $a() {
  return typeof window < "u";
}
function qs(n) {
  return Km(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function Yt(n) {
  var t;
  return (
    (n == null || (t = n.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function $n(n) {
  var t;
  return (t = (Km(n) ? n.ownerDocument : n.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Km(n) {
  return $a() ? n instanceof Node || n instanceof Yt(n).Node : !1;
}
function Cn(n) {
  return $a() ? n instanceof Element || n instanceof Yt(n).Element : !1;
}
function zn(n) {
  return $a() ? n instanceof HTMLElement || n instanceof Yt(n).HTMLElement : !1;
}
function cp(n) {
  return !$a() || typeof ShadowRoot > "u"
    ? !1
    : n instanceof ShadowRoot || n instanceof Yt(n).ShadowRoot;
}
const d1 = new Set(["inline", "contents"]);
function Xi(n) {
  const { overflow: t, overflowX: s, overflowY: i, display: a } = Tn(n);
  return /auto|scroll|overlay|hidden|clip/.test(t + i + s) && !d1.has(a);
}
const f1 = new Set(["table", "td", "th"]);
function h1(n) {
  return f1.has(qs(n));
}
const p1 = [":popover-open", ":modal"];
function Ua(n) {
  return p1.some((t) => {
    try {
      return n.matches(t);
    } catch {
      return !1;
    }
  });
}
const m1 = ["transform", "translate", "scale", "rotate", "perspective"],
  g1 = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  y1 = ["paint", "layout", "strict", "content"];
function $c(n) {
  const t = Uc(),
    s = Cn(n) ? Tn(n) : n;
  return (
    m1.some((i) => (s[i] ? s[i] !== "none" : !1)) ||
    (s.containerType ? s.containerType !== "normal" : !1) ||
    (!t && (s.backdropFilter ? s.backdropFilter !== "none" : !1)) ||
    (!t && (s.filter ? s.filter !== "none" : !1)) ||
    g1.some((i) => (s.willChange || "").includes(i)) ||
    y1.some((i) => (s.contain || "").includes(i))
  );
}
function v1(n) {
  let t = Ir(n);
  for (; zn(t) && !Ds(t); ) {
    if ($c(t)) return t;
    if (Ua(t)) return null;
    t = Ir(t);
  }
  return null;
}
function Uc() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const x1 = new Set(["html", "body", "#document"]);
function Ds(n) {
  return x1.has(qs(n));
}
function Tn(n) {
  return Yt(n).getComputedStyle(n);
}
function Va(n) {
  return Cn(n)
    ? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop }
    : { scrollLeft: n.scrollX, scrollTop: n.scrollY };
}
function Ir(n) {
  if (qs(n) === "html") return n;
  const t = n.assignedSlot || n.parentNode || (cp(n) && n.host) || $n(n);
  return cp(t) ? t.host : t;
}
function Ym(n) {
  const t = Ir(n);
  return Ds(t)
    ? n.ownerDocument
      ? n.ownerDocument.body
      : n.body
    : zn(t) && Xi(t)
    ? t
    : Ym(t);
}
function Bi(n, t, s) {
  var i;
  t === void 0 && (t = []), s === void 0 && (s = !0);
  const a = Ym(n),
    u = a === ((i = n.ownerDocument) == null ? void 0 : i.body),
    c = Yt(a);
  if (u) {
    const f = lc(c);
    return t.concat(
      c,
      c.visualViewport || [],
      Xi(a) ? a : [],
      f && s ? Bi(f) : []
    );
  }
  return t.concat(a, Bi(a, [], s));
}
function lc(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function Gm(n) {
  const t = Tn(n);
  let s = parseFloat(t.width) || 0,
    i = parseFloat(t.height) || 0;
  const a = zn(n),
    u = a ? n.offsetWidth : s,
    c = a ? n.offsetHeight : i,
    f = ka(s) !== u || ka(i) !== c;
  return f && ((s = u), (i = c)), { width: s, height: i, $: f };
}
function Vc(n) {
  return Cn(n) ? n : n.contextElement;
}
function Ms(n) {
  const t = Vc(n);
  if (!zn(t)) return In(1);
  const s = t.getBoundingClientRect(),
    { width: i, height: a, $: u } = Gm(t);
  let c = (u ? ka(s.width) : s.width) / i,
    f = (u ? ka(s.height) : s.height) / a;
  return (
    (!c || !Number.isFinite(c)) && (c = 1),
    (!f || !Number.isFinite(f)) && (f = 1),
    { x: c, y: f }
  );
}
const w1 = In(0);
function Xm(n) {
  const t = Yt(n);
  return !Uc() || !t.visualViewport
    ? w1
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function _1(n, t, s) {
  return t === void 0 && (t = !1), !s || (t && s !== Yt(n)) ? !1 : t;
}
function rs(n, t, s, i) {
  t === void 0 && (t = !1), s === void 0 && (s = !1);
  const a = n.getBoundingClientRect(),
    u = Vc(n);
  let c = In(1);
  t && (i ? Cn(i) && (c = Ms(i)) : (c = Ms(n)));
  const f = _1(u, s, i) ? Xm(u) : In(0);
  let p = (a.left + f.x) / c.x,
    m = (a.top + f.y) / c.y,
    g = a.width / c.x,
    x = a.height / c.y;
  if (u) {
    const S = Yt(u),
      w = i && Cn(i) ? Yt(i) : i;
    let E = S,
      _ = lc(E);
    for (; _ && i && w !== E; ) {
      const b = Ms(_),
        T = _.getBoundingClientRect(),
        N = Tn(_),
        A = T.left + (_.clientLeft + parseFloat(N.paddingLeft)) * b.x,
        M = T.top + (_.clientTop + parseFloat(N.paddingTop)) * b.y;
      (p *= b.x),
        (m *= b.y),
        (g *= b.x),
        (x *= b.y),
        (p += A),
        (m += M),
        (E = Yt(_)),
        (_ = lc(E));
    }
  }
  return Ca({ width: g, height: x, x: p, y: m });
}
function Wa(n, t) {
  const s = Va(n).scrollLeft;
  return t ? t.left + s : rs($n(n)).left + s;
}
function Jm(n, t) {
  const s = n.getBoundingClientRect(),
    i = s.left + t.scrollLeft - Wa(n, s),
    a = s.top + t.scrollTop;
  return { x: i, y: a };
}
function b1(n) {
  let { elements: t, rect: s, offsetParent: i, strategy: a } = n;
  const u = a === "fixed",
    c = $n(i),
    f = t ? Ua(t.floating) : !1;
  if (i === c || (f && u)) return s;
  let p = { scrollLeft: 0, scrollTop: 0 },
    m = In(1);
  const g = In(0),
    x = zn(i);
  if (
    (x || (!x && !u)) &&
    ((qs(i) !== "body" || Xi(c)) && (p = Va(i)), zn(i))
  ) {
    const w = rs(i);
    (m = Ms(i)), (g.x = w.x + i.clientLeft), (g.y = w.y + i.clientTop);
  }
  const S = c && !x && !u ? Jm(c, p) : In(0);
  return {
    width: s.width * m.x,
    height: s.height * m.y,
    x: s.x * m.x - p.scrollLeft * m.x + g.x + S.x,
    y: s.y * m.y - p.scrollTop * m.y + g.y + S.y,
  };
}
function S1(n) {
  return Array.from(n.getClientRects());
}
function k1(n) {
  const t = $n(n),
    s = Va(n),
    i = n.ownerDocument.body,
    a = Kt(t.scrollWidth, t.clientWidth, i.scrollWidth, i.clientWidth),
    u = Kt(t.scrollHeight, t.clientHeight, i.scrollHeight, i.clientHeight);
  let c = -s.scrollLeft + Wa(n);
  const f = -s.scrollTop;
  return (
    Tn(i).direction === "rtl" && (c += Kt(t.clientWidth, i.clientWidth) - a),
    { width: a, height: u, x: c, y: f }
  );
}
const dp = 25;
function E1(n, t) {
  const s = Yt(n),
    i = $n(n),
    a = s.visualViewport;
  let u = i.clientWidth,
    c = i.clientHeight,
    f = 0,
    p = 0;
  if (a) {
    (u = a.width), (c = a.height);
    const g = Uc();
    (!g || (g && t === "fixed")) && ((f = a.offsetLeft), (p = a.offsetTop));
  }
  const m = Wa(i);
  if (m <= 0) {
    const g = i.ownerDocument,
      x = g.body,
      S = getComputedStyle(x),
      w =
        (g.compatMode === "CSS1Compat" &&
          parseFloat(S.marginLeft) + parseFloat(S.marginRight)) ||
        0,
      E = Math.abs(i.clientWidth - x.clientWidth - w);
    E <= dp && (u -= E);
  } else m <= dp && (u += m);
  return { width: u, height: c, x: f, y: p };
}
const C1 = new Set(["absolute", "fixed"]);
function T1(n, t) {
  const s = rs(n, !0, t === "fixed"),
    i = s.top + n.clientTop,
    a = s.left + n.clientLeft,
    u = zn(n) ? Ms(n) : In(1),
    c = n.clientWidth * u.x,
    f = n.clientHeight * u.y,
    p = a * u.x,
    m = i * u.y;
  return { width: c, height: f, x: p, y: m };
}
function fp(n, t, s) {
  let i;
  if (t === "viewport") i = E1(n, s);
  else if (t === "document") i = k1($n(n));
  else if (Cn(t)) i = T1(t, s);
  else {
    const a = Xm(n);
    i = { x: t.x - a.x, y: t.y - a.y, width: t.width, height: t.height };
  }
  return Ca(i);
}
function eg(n, t) {
  const s = Ir(n);
  return s === t || !Cn(s) || Ds(s)
    ? !1
    : Tn(s).position === "fixed" || eg(s, t);
}
function N1(n, t) {
  const s = t.get(n);
  if (s) return s;
  let i = Bi(n, [], !1).filter((f) => Cn(f) && qs(f) !== "body"),
    a = null;
  const u = Tn(n).position === "fixed";
  let c = u ? Ir(n) : n;
  for (; Cn(c) && !Ds(c); ) {
    const f = Tn(c),
      p = $c(c);
    !p && f.position === "fixed" && (a = null),
      (
        u
          ? !p && !a
          : (!p && f.position === "static" && !!a && C1.has(a.position)) ||
            (Xi(c) && !p && eg(n, c))
      )
        ? (i = i.filter((g) => g !== c))
        : (a = f),
      (c = Ir(c));
  }
  return t.set(n, i), i;
}
function R1(n) {
  let { element: t, boundary: s, rootBoundary: i, strategy: a } = n;
  const c = [
      ...(s === "clippingAncestors"
        ? Ua(t)
          ? []
          : N1(t, this._c)
        : [].concat(s)),
      i,
    ],
    f = c[0],
    p = c.reduce((m, g) => {
      const x = fp(t, g, a);
      return (
        (m.top = Kt(x.top, m.top)),
        (m.right = Mr(x.right, m.right)),
        (m.bottom = Mr(x.bottom, m.bottom)),
        (m.left = Kt(x.left, m.left)),
        m
      );
    }, fp(t, f, a));
  return {
    width: p.right - p.left,
    height: p.bottom - p.top,
    x: p.left,
    y: p.top,
  };
}
function P1(n) {
  const { width: t, height: s } = Gm(n);
  return { width: t, height: s };
}
function O1(n, t, s) {
  const i = zn(t),
    a = $n(t),
    u = s === "fixed",
    c = rs(n, !0, u, t);
  let f = { scrollLeft: 0, scrollTop: 0 };
  const p = In(0);
  function m() {
    p.x = Wa(a);
  }
  if (i || (!i && !u))
    if (((qs(t) !== "body" || Xi(a)) && (f = Va(t)), i)) {
      const w = rs(t, !0, u, t);
      (p.x = w.x + t.clientLeft), (p.y = w.y + t.clientTop);
    } else a && m();
  u && !i && a && m();
  const g = a && !i && !u ? Jm(a, f) : In(0),
    x = c.left + f.scrollLeft - p.x - g.x,
    S = c.top + f.scrollTop - p.y - g.y;
  return { x, y: S, width: c.width, height: c.height };
}
function Hu(n) {
  return Tn(n).position === "static";
}
function hp(n, t) {
  if (!zn(n) || Tn(n).position === "fixed") return null;
  if (t) return t(n);
  let s = n.offsetParent;
  return $n(n) === s && (s = s.ownerDocument.body), s;
}
function tg(n, t) {
  const s = Yt(n);
  if (Ua(n)) return s;
  if (!zn(n)) {
    let a = Ir(n);
    for (; a && !Ds(a); ) {
      if (Cn(a) && !Hu(a)) return a;
      a = Ir(a);
    }
    return s;
  }
  let i = hp(n, t);
  for (; i && h1(i) && Hu(i); ) i = hp(i, t);
  return i && Ds(i) && Hu(i) && !$c(i) ? s : i || v1(n) || s;
}
const A1 = async function (n) {
  const t = this.getOffsetParent || tg,
    s = this.getDimensions,
    i = await s(n.floating);
  return {
    reference: O1(n.reference, await t(n.floating), n.strategy),
    floating: { x: 0, y: 0, width: i.width, height: i.height },
  };
};
function j1(n) {
  return Tn(n).direction === "rtl";
}
const L1 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: b1,
  getDocumentElement: $n,
  getClippingRect: R1,
  getOffsetParent: tg,
  getElementRects: A1,
  getClientRects: S1,
  getDimensions: P1,
  getScale: Ms,
  isElement: Cn,
  isRTL: j1,
};
function ng(n, t) {
  return (
    n.x === t.x && n.y === t.y && n.width === t.width && n.height === t.height
  );
}
function M1(n, t) {
  let s = null,
    i;
  const a = $n(n);
  function u() {
    var f;
    clearTimeout(i), (f = s) == null || f.disconnect(), (s = null);
  }
  function c(f, p) {
    f === void 0 && (f = !1), p === void 0 && (p = 1), u();
    const m = n.getBoundingClientRect(),
      { left: g, top: x, width: S, height: w } = m;
    if ((f || t(), !S || !w)) return;
    const E = ha(x),
      _ = ha(a.clientWidth - (g + S)),
      b = ha(a.clientHeight - (x + w)),
      T = ha(g),
      A = {
        rootMargin: -E + "px " + -_ + "px " + -b + "px " + -T + "px",
        threshold: Kt(0, Mr(1, p)) || 1,
      };
    let M = !0;
    function B(U) {
      const $ = U[0].intersectionRatio;
      if ($ !== p) {
        if (!M) return c();
        $
          ? c(!1, $)
          : (i = setTimeout(() => {
              c(!1, 1e-7);
            }, 1e3));
      }
      $ === 1 && !ng(m, n.getBoundingClientRect()) && c(), (M = !1);
    }
    try {
      s = new IntersectionObserver(B, { ...A, root: a.ownerDocument });
    } catch {
      s = new IntersectionObserver(B, A);
    }
    s.observe(n);
  }
  return c(!0), u;
}
function I1(n, t, s, i) {
  i === void 0 && (i = {});
  const {
      ancestorScroll: a = !0,
      ancestorResize: u = !0,
      elementResize: c = typeof ResizeObserver == "function",
      layoutShift: f = typeof IntersectionObserver == "function",
      animationFrame: p = !1,
    } = i,
    m = Vc(n),
    g = a || u ? [...(m ? Bi(m) : []), ...Bi(t)] : [];
  g.forEach((T) => {
    a && T.addEventListener("scroll", s, { passive: !0 }),
      u && T.addEventListener("resize", s);
  });
  const x = m && f ? M1(m, s) : null;
  let S = -1,
    w = null;
  c &&
    ((w = new ResizeObserver((T) => {
      let [N] = T;
      N &&
        N.target === m &&
        w &&
        (w.unobserve(t),
        cancelAnimationFrame(S),
        (S = requestAnimationFrame(() => {
          var A;
          (A = w) == null || A.observe(t);
        }))),
        s();
    })),
    m && !p && w.observe(m),
    w.observe(t));
  let E,
    _ = p ? rs(n) : null;
  p && b();
  function b() {
    const T = rs(n);
    _ && !ng(_, T) && s(), (_ = T), (E = requestAnimationFrame(b));
  }
  return (
    s(),
    () => {
      var T;
      g.forEach((N) => {
        a && N.removeEventListener("scroll", s),
          u && N.removeEventListener("resize", s);
      }),
        x?.(),
        (T = w) == null || T.disconnect(),
        (w = null),
        p && cancelAnimationFrame(E);
    }
  );
}
const D1 = a1,
  F1 = l1,
  z1 = s1,
  B1 = c1,
  $1 = i1,
  pp = r1,
  U1 = u1,
  V1 = (n, t, s) => {
    const i = new Map(),
      a = { platform: L1, ...s },
      u = { ...a.platform, _c: i };
    return n1(n, t, { ...a, platform: u });
  };
var W1 = typeof document < "u",
  H1 = function () {},
  xa = W1 ? k.useLayoutEffect : H1;
function Ta(n, t) {
  if (n === t) return !0;
  if (typeof n != typeof t) return !1;
  if (typeof n == "function" && n.toString() === t.toString()) return !0;
  let s, i, a;
  if (n && t && typeof n == "object") {
    if (Array.isArray(n)) {
      if (((s = n.length), s !== t.length)) return !1;
      for (i = s; i-- !== 0; ) if (!Ta(n[i], t[i])) return !1;
      return !0;
    }
    if (((a = Object.keys(n)), (s = a.length), s !== Object.keys(t).length))
      return !1;
    for (i = s; i-- !== 0; ) if (!{}.hasOwnProperty.call(t, a[i])) return !1;
    for (i = s; i-- !== 0; ) {
      const u = a[i];
      if (!(u === "_owner" && n.$$typeof) && !Ta(n[u], t[u])) return !1;
    }
    return !0;
  }
  return n !== n && t !== t;
}
function rg(n) {
  return typeof window > "u"
    ? 1
    : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function mp(n, t) {
  const s = rg(n);
  return Math.round(t * s) / s;
}
function qu(n) {
  const t = k.useRef(n);
  return (
    xa(() => {
      t.current = n;
    }),
    t
  );
}
function q1(n) {
  n === void 0 && (n = {});
  const {
      placement: t = "bottom",
      strategy: s = "absolute",
      middleware: i = [],
      platform: a,
      elements: { reference: u, floating: c } = {},
      transform: f = !0,
      whileElementsMounted: p,
      open: m,
    } = n,
    [g, x] = k.useState({
      x: 0,
      y: 0,
      strategy: s,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [S, w] = k.useState(i);
  Ta(S, i) || w(i);
  const [E, _] = k.useState(null),
    [b, T] = k.useState(null),
    N = k.useCallback((F) => {
      F !== U.current && ((U.current = F), _(F));
    }, []),
    A = k.useCallback((F) => {
      F !== $.current && (($.current = F), T(F));
    }, []),
    M = u || E,
    B = c || b,
    U = k.useRef(null),
    $ = k.useRef(null),
    K = k.useRef(g),
    te = p != null,
    re = qu(p),
    se = qu(a),
    X = qu(m),
    ye = k.useCallback(() => {
      if (!U.current || !$.current) return;
      const F = { placement: t, strategy: s, middleware: S };
      se.current && (F.platform = se.current),
        V1(U.current, $.current, F).then((z) => {
          const W = { ...z, isPositioned: X.current !== !1 };
          V.current &&
            !Ta(K.current, W) &&
            ((K.current = W),
            Da.flushSync(() => {
              x(W);
            }));
        });
    }, [S, t, s, se, X]);
  xa(() => {
    m === !1 &&
      K.current.isPositioned &&
      ((K.current.isPositioned = !1), x((F) => ({ ...F, isPositioned: !1 })));
  }, [m]);
  const V = k.useRef(!1);
  xa(
    () => (
      (V.current = !0),
      () => {
        V.current = !1;
      }
    ),
    []
  ),
    xa(() => {
      if ((M && (U.current = M), B && ($.current = B), M && B)) {
        if (re.current) return re.current(M, B, ye);
        ye();
      }
    }, [M, B, ye, re, te]);
  const ge = k.useMemo(
      () => ({ reference: U, floating: $, setReference: N, setFloating: A }),
      [N, A]
    ),
    ae = k.useMemo(() => ({ reference: M, floating: B }), [M, B]),
    ne = k.useMemo(() => {
      const F = { position: s, left: 0, top: 0 };
      if (!ae.floating) return F;
      const z = mp(ae.floating, g.x),
        W = mp(ae.floating, g.y);
      return f
        ? {
            ...F,
            transform: "translate(" + z + "px, " + W + "px)",
            ...(rg(ae.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: s, left: z, top: W };
    }, [s, f, ae.floating, g.x, g.y]);
  return k.useMemo(
    () => ({ ...g, update: ye, refs: ge, elements: ae, floatingStyles: ne }),
    [g, ye, ge, ae, ne]
  );
}
const Q1 = (n) => {
    function t(s) {
      return {}.hasOwnProperty.call(s, "current");
    }
    return {
      name: "arrow",
      options: n,
      fn(s) {
        const { element: i, padding: a } = typeof n == "function" ? n(s) : n;
        return i && t(i)
          ? i.current != null
            ? pp({ element: i.current, padding: a }).fn(s)
            : {}
          : i
          ? pp({ element: i, padding: a }).fn(s)
          : {};
      },
    };
  },
  Z1 = (n, t) => ({ ...D1(n), options: [n, t] }),
  K1 = (n, t) => ({ ...F1(n), options: [n, t] }),
  Y1 = (n, t) => ({ ...U1(n), options: [n, t] }),
  G1 = (n, t) => ({ ...z1(n), options: [n, t] }),
  X1 = (n, t) => ({ ...B1(n), options: [n, t] }),
  J1 = (n, t) => ({ ...$1(n), options: [n, t] }),
  e_ = (n, t) => ({ ...Q1(n), options: [n, t] });
var t_ = "Arrow",
  sg = k.forwardRef((n, t) => {
    const { children: s, width: i = 10, height: a = 5, ...u } = n;
    return v.jsx(Ut.svg, {
      ...u,
      ref: t,
      width: i,
      height: a,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: n.asChild ? s : v.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
sg.displayName = t_;
var n_ = sg;
function r_(n) {
  const [t, s] = k.useState(void 0);
  return (
    Lr(() => {
      if (n) {
        s({ width: n.offsetWidth, height: n.offsetHeight });
        const i = new ResizeObserver((a) => {
          if (!Array.isArray(a) || !a.length) return;
          const u = a[0];
          let c, f;
          if ("borderBoxSize" in u) {
            const p = u.borderBoxSize,
              m = Array.isArray(p) ? p[0] : p;
            (c = m.inlineSize), (f = m.blockSize);
          } else (c = n.offsetWidth), (f = n.offsetHeight);
          s({ width: c, height: f });
        });
        return i.observe(n, { box: "border-box" }), () => i.unobserve(n);
      } else s(void 0);
    }, [n]),
    t
  );
}
var ig = "Popper",
  [og, ag] = Fa(ig),
  [AE, lg] = og(ig),
  ug = "PopperAnchor",
  cg = k.forwardRef((n, t) => {
    const { __scopePopper: s, virtualRef: i, ...a } = n,
      u = lg(ug, s),
      c = k.useRef(null),
      f = En(t, c),
      p = k.useRef(null);
    return (
      k.useEffect(() => {
        const m = p.current;
        (p.current = i?.current || c.current),
          m !== p.current && u.onAnchorChange(p.current);
      }),
      i ? null : v.jsx(Ut.div, { ...a, ref: f })
    );
  });
cg.displayName = ug;
var Wc = "PopperContent",
  [s_, i_] = og(Wc),
  dg = k.forwardRef((n, t) => {
    const {
        __scopePopper: s,
        side: i = "bottom",
        sideOffset: a = 0,
        align: u = "center",
        alignOffset: c = 0,
        arrowPadding: f = 0,
        avoidCollisions: p = !0,
        collisionBoundary: m = [],
        collisionPadding: g = 0,
        sticky: x = "partial",
        hideWhenDetached: S = !1,
        updatePositionStrategy: w = "optimized",
        onPlaced: E,
        ..._
      } = n,
      b = lg(Wc, s),
      [T, N] = k.useState(null),
      A = En(t, (le) => N(le)),
      [M, B] = k.useState(null),
      U = r_(M),
      $ = U?.width ?? 0,
      K = U?.height ?? 0,
      te = i + (u !== "center" ? "-" + u : ""),
      re =
        typeof g == "number"
          ? g
          : { top: 0, right: 0, bottom: 0, left: 0, ...g },
      se = Array.isArray(m) ? m : [m],
      X = se.length > 0,
      ye = { padding: re, boundary: se.filter(a_), altBoundary: X },
      {
        refs: V,
        floatingStyles: ge,
        placement: ae,
        isPositioned: ne,
        middlewareData: F,
      } = q1({
        strategy: "fixed",
        placement: te,
        whileElementsMounted: (...le) =>
          I1(...le, { animationFrame: w === "always" }),
        elements: { reference: b.anchor },
        middleware: [
          Z1({ mainAxis: a + K, alignmentAxis: c }),
          p &&
            K1({
              mainAxis: !0,
              crossAxis: !1,
              limiter: x === "partial" ? Y1() : void 0,
              ...ye,
            }),
          p && G1({ ...ye }),
          X1({
            ...ye,
            apply: ({
              elements: le,
              rects: xe,
              availableWidth: Te,
              availableHeight: Me,
            }) => {
              const { width: Ae, height: ce } = xe.reference,
                Re = le.floating.style;
              Re.setProperty("--radix-popper-available-width", `${Te}px`),
                Re.setProperty("--radix-popper-available-height", `${Me}px`),
                Re.setProperty("--radix-popper-anchor-width", `${Ae}px`),
                Re.setProperty("--radix-popper-anchor-height", `${ce}px`);
            },
          }),
          M && e_({ element: M, padding: f }),
          l_({ arrowWidth: $, arrowHeight: K }),
          S && J1({ strategy: "referenceHidden", ...ye }),
        ],
      }),
      [z, W] = pg(ae),
      P = jr(E);
    Lr(() => {
      ne && P?.();
    }, [ne, P]);
    const D = F.arrow?.x,
      J = F.arrow?.y,
      ee = F.arrow?.centerOffset !== 0,
      [ve, Se] = k.useState();
    return (
      Lr(() => {
        T && Se(window.getComputedStyle(T).zIndex);
      }, [T]),
      v.jsx("div", {
        ref: V.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...ge,
          transform: ne ? ge.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: ve,
          "--radix-popper-transform-origin": [
            F.transformOrigin?.x,
            F.transformOrigin?.y,
          ].join(" "),
          ...(F.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: n.dir,
        children: v.jsx(s_, {
          scope: s,
          placedSide: z,
          onArrowChange: B,
          arrowX: D,
          arrowY: J,
          shouldHideArrow: ee,
          children: v.jsx(Ut.div, {
            "data-side": z,
            "data-align": W,
            ..._,
            ref: A,
            style: { ..._.style, animation: ne ? void 0 : "none" },
          }),
        }),
      })
    );
  });
dg.displayName = Wc;
var fg = "PopperArrow",
  o_ = { top: "bottom", right: "left", bottom: "top", left: "right" },
  hg = k.forwardRef(function (t, s) {
    const { __scopePopper: i, ...a } = t,
      u = i_(fg, i),
      c = o_[u.placedSide];
    return v.jsx("span", {
      ref: u.onArrowChange,
      style: {
        position: "absolute",
        left: u.arrowX,
        top: u.arrowY,
        [c]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[u.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[u.placedSide],
        visibility: u.shouldHideArrow ? "hidden" : void 0,
      },
      children: v.jsx(n_, {
        ...a,
        ref: s,
        style: { ...a.style, display: "block" },
      }),
    });
  });
hg.displayName = fg;
function a_(n) {
  return n !== null;
}
var l_ = (n) => ({
  name: "transformOrigin",
  options: n,
  fn(t) {
    const { placement: s, rects: i, middlewareData: a } = t,
      c = a.arrow?.centerOffset !== 0,
      f = c ? 0 : n.arrowWidth,
      p = c ? 0 : n.arrowHeight,
      [m, g] = pg(s),
      x = { start: "0%", center: "50%", end: "100%" }[g],
      S = (a.arrow?.x ?? 0) + f / 2,
      w = (a.arrow?.y ?? 0) + p / 2;
    let E = "",
      _ = "";
    return (
      m === "bottom"
        ? ((E = c ? x : `${S}px`), (_ = `${-p}px`))
        : m === "top"
        ? ((E = c ? x : `${S}px`), (_ = `${i.floating.height + p}px`))
        : m === "right"
        ? ((E = `${-p}px`), (_ = c ? x : `${w}px`))
        : m === "left" &&
          ((E = `${i.floating.width + p}px`), (_ = c ? x : `${w}px`)),
      { data: { x: E, y: _ } }
    );
  },
});
function pg(n) {
  const [t, s = "center"] = n.split("-");
  return [t, s];
}
var u_ = cg,
  c_ = dg,
  d_ = hg,
  [Ha] = Fa("Tooltip", [ag]),
  Hc = ag(),
  mg = "TooltipProvider",
  f_ = 700,
  gp = "tooltip.open",
  [h_, gg] = Ha(mg),
  yg = (n) => {
    const {
        __scopeTooltip: t,
        delayDuration: s = f_,
        skipDelayDuration: i = 300,
        disableHoverableContent: a = !1,
        children: u,
      } = n,
      c = k.useRef(!0),
      f = k.useRef(!1),
      p = k.useRef(0);
    return (
      k.useEffect(() => {
        const m = p.current;
        return () => window.clearTimeout(m);
      }, []),
      v.jsx(h_, {
        scope: t,
        isOpenDelayedRef: c,
        delayDuration: s,
        onOpen: k.useCallback(() => {
          window.clearTimeout(p.current), (c.current = !1);
        }, []),
        onClose: k.useCallback(() => {
          window.clearTimeout(p.current),
            (p.current = window.setTimeout(() => (c.current = !0), i));
        }, [i]),
        isPointerInTransitRef: f,
        onPointerInTransitChange: k.useCallback((m) => {
          f.current = m;
        }, []),
        disableHoverableContent: a,
        children: u,
      })
    );
  };
yg.displayName = mg;
var vg = "Tooltip",
  [jE, qa] = Ha(vg),
  uc = "TooltipTrigger",
  p_ = k.forwardRef((n, t) => {
    const { __scopeTooltip: s, ...i } = n,
      a = qa(uc, s),
      u = gg(uc, s),
      c = Hc(s),
      f = k.useRef(null),
      p = En(t, f, a.onTriggerChange),
      m = k.useRef(!1),
      g = k.useRef(!1),
      x = k.useCallback(() => (m.current = !1), []);
    return (
      k.useEffect(
        () => () => document.removeEventListener("pointerup", x),
        [x]
      ),
      v.jsx(u_, {
        asChild: !0,
        ...c,
        children: v.jsx(Ut.button, {
          "aria-describedby": a.open ? a.contentId : void 0,
          "data-state": a.stateAttribute,
          ...i,
          ref: p,
          onPointerMove: at(n.onPointerMove, (S) => {
            S.pointerType !== "touch" &&
              !g.current &&
              !u.isPointerInTransitRef.current &&
              (a.onTriggerEnter(), (g.current = !0));
          }),
          onPointerLeave: at(n.onPointerLeave, () => {
            a.onTriggerLeave(), (g.current = !1);
          }),
          onPointerDown: at(n.onPointerDown, () => {
            a.open && a.onClose(),
              (m.current = !0),
              document.addEventListener("pointerup", x, { once: !0 });
          }),
          onFocus: at(n.onFocus, () => {
            m.current || a.onOpen();
          }),
          onBlur: at(n.onBlur, a.onClose),
          onClick: at(n.onClick, a.onClose),
        }),
      })
    );
  });
p_.displayName = uc;
var m_ = "TooltipPortal",
  [LE, g_] = Ha(m_, { forceMount: void 0 }),
  Fs = "TooltipContent",
  xg = k.forwardRef((n, t) => {
    const s = g_(Fs, n.__scopeTooltip),
      { forceMount: i = s.forceMount, side: a = "top", ...u } = n,
      c = qa(Fs, n.__scopeTooltip);
    return v.jsx(jc, {
      present: i || c.open,
      children: c.disableHoverableContent
        ? v.jsx(wg, { side: a, ...u, ref: t })
        : v.jsx(y_, { side: a, ...u, ref: t }),
    });
  }),
  y_ = k.forwardRef((n, t) => {
    const s = qa(Fs, n.__scopeTooltip),
      i = gg(Fs, n.__scopeTooltip),
      a = k.useRef(null),
      u = En(t, a),
      [c, f] = k.useState(null),
      { trigger: p, onClose: m } = s,
      g = a.current,
      { onPointerInTransitChange: x } = i,
      S = k.useCallback(() => {
        f(null), x(!1);
      }, [x]),
      w = k.useCallback(
        (E, _) => {
          const b = E.currentTarget,
            T = { x: E.clientX, y: E.clientY },
            N = b_(T, b.getBoundingClientRect()),
            A = S_(T, N),
            M = k_(_.getBoundingClientRect()),
            B = C_([...A, ...M]);
          f(B), x(!0);
        },
        [x]
      );
    return (
      k.useEffect(() => () => S(), [S]),
      k.useEffect(() => {
        if (p && g) {
          const E = (b) => w(b, g),
            _ = (b) => w(b, p);
          return (
            p.addEventListener("pointerleave", E),
            g.addEventListener("pointerleave", _),
            () => {
              p.removeEventListener("pointerleave", E),
                g.removeEventListener("pointerleave", _);
            }
          );
        }
      }, [p, g, w, S]),
      k.useEffect(() => {
        if (c) {
          const E = (_) => {
            const b = _.target,
              T = { x: _.clientX, y: _.clientY },
              N = p?.contains(b) || g?.contains(b),
              A = !E_(T, c);
            N ? S() : A && (S(), m());
          };
          return (
            document.addEventListener("pointermove", E),
            () => document.removeEventListener("pointermove", E)
          );
        }
      }, [p, g, c, m, S]),
      v.jsx(wg, { ...n, ref: u })
    );
  }),
  [v_, x_] = Ha(vg, { isInside: !1 }),
  w_ = m0("TooltipContent"),
  wg = k.forwardRef((n, t) => {
    const {
        __scopeTooltip: s,
        children: i,
        "aria-label": a,
        onEscapeKeyDown: u,
        onPointerDownOutside: c,
        ...f
      } = n,
      p = qa(Fs, s),
      m = Hc(s),
      { onClose: g } = p;
    return (
      k.useEffect(
        () => (
          document.addEventListener(gp, g),
          () => document.removeEventListener(gp, g)
        ),
        [g]
      ),
      k.useEffect(() => {
        if (p.trigger) {
          const x = (S) => {
            S.target?.contains(p.trigger) && g();
          };
          return (
            window.addEventListener("scroll", x, { capture: !0 }),
            () => window.removeEventListener("scroll", x, { capture: !0 })
          );
        }
      }, [p.trigger, g]),
      v.jsx(Ac, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: u,
        onPointerDownOutside: c,
        onFocusOutside: (x) => x.preventDefault(),
        onDismiss: g,
        children: v.jsxs(c_, {
          "data-state": p.stateAttribute,
          ...m,
          ...f,
          ref: t,
          style: {
            ...f.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            v.jsx(w_, { children: i }),
            v.jsx(v_, {
              scope: s,
              isInside: !0,
              children: v.jsx(B0, {
                id: p.contentId,
                role: "tooltip",
                children: a || i,
              }),
            }),
          ],
        }),
      })
    );
  });
xg.displayName = Fs;
var _g = "TooltipArrow",
  __ = k.forwardRef((n, t) => {
    const { __scopeTooltip: s, ...i } = n,
      a = Hc(s);
    return x_(_g, s).isInside ? null : v.jsx(d_, { ...a, ...i, ref: t });
  });
__.displayName = _g;
function b_(n, t) {
  const s = Math.abs(t.top - n.y),
    i = Math.abs(t.bottom - n.y),
    a = Math.abs(t.right - n.x),
    u = Math.abs(t.left - n.x);
  switch (Math.min(s, i, a, u)) {
    case u:
      return "left";
    case a:
      return "right";
    case s:
      return "top";
    case i:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function S_(n, t, s = 5) {
  const i = [];
  switch (t) {
    case "top":
      i.push({ x: n.x - s, y: n.y + s }, { x: n.x + s, y: n.y + s });
      break;
    case "bottom":
      i.push({ x: n.x - s, y: n.y - s }, { x: n.x + s, y: n.y - s });
      break;
    case "left":
      i.push({ x: n.x + s, y: n.y - s }, { x: n.x + s, y: n.y + s });
      break;
    case "right":
      i.push({ x: n.x - s, y: n.y - s }, { x: n.x - s, y: n.y + s });
      break;
  }
  return i;
}
function k_(n) {
  const { top: t, right: s, bottom: i, left: a } = n;
  return [
    { x: a, y: t },
    { x: s, y: t },
    { x: s, y: i },
    { x: a, y: i },
  ];
}
function E_(n, t) {
  const { x: s, y: i } = n;
  let a = !1;
  for (let u = 0, c = t.length - 1; u < t.length; c = u++) {
    const f = t[u],
      p = t[c],
      m = f.x,
      g = f.y,
      x = p.x,
      S = p.y;
    g > i != S > i && s < ((x - m) * (i - g)) / (S - g) + m && (a = !a);
  }
  return a;
}
function C_(n) {
  const t = n.slice();
  return (
    t.sort((s, i) =>
      s.x < i.x ? -1 : s.x > i.x ? 1 : s.y < i.y ? -1 : s.y > i.y ? 1 : 0
    ),
    T_(t)
  );
}
function T_(n) {
  if (n.length <= 1) return n.slice();
  const t = [];
  for (let i = 0; i < n.length; i++) {
    const a = n[i];
    for (; t.length >= 2; ) {
      const u = t[t.length - 1],
        c = t[t.length - 2];
      if ((u.x - c.x) * (a.y - c.y) >= (u.y - c.y) * (a.x - c.x)) t.pop();
      else break;
    }
    t.push(a);
  }
  t.pop();
  const s = [];
  for (let i = n.length - 1; i >= 0; i--) {
    const a = n[i];
    for (; s.length >= 2; ) {
      const u = s[s.length - 1],
        c = s[s.length - 2];
      if ((u.x - c.x) * (a.y - c.y) >= (u.y - c.y) * (a.x - c.x)) s.pop();
      else break;
    }
    s.push(a);
  }
  return (
    s.pop(),
    t.length === 1 && s.length === 1 && t[0].x === s[0].x && t[0].y === s[0].y
      ? t
      : t.concat(s)
  );
}
var N_ = yg,
  bg = xg;
const R_ = N_,
  P_ = k.forwardRef(({ className: n, sideOffset: t = 4, ...s }, i) =>
    v.jsx(bg, {
      ref: i,
      sideOffset: t,
      className: os(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        n
      ),
      ...s,
    })
  );
P_.displayName = bg.displayName;
var Qa = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(n) {
      return (
        this.listeners.add(n),
        this.onSubscribe(),
        () => {
          this.listeners.delete(n), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  O_ = {
    setTimeout: (n, t) => setTimeout(n, t),
    clearTimeout: (n) => clearTimeout(n),
    setInterval: (n, t) => setInterval(n, t),
    clearInterval: (n) => clearInterval(n),
  },
  A_ = class {
    #e = O_;
    #t = !1;
    setTimeoutProvider(n) {
      this.#e = n;
    }
    setTimeout(n, t) {
      return this.#e.setTimeout(n, t);
    }
    clearTimeout(n) {
      this.#e.clearTimeout(n);
    }
    setInterval(n, t) {
      return this.#e.setInterval(n, t);
    }
    clearInterval(n) {
      this.#e.clearInterval(n);
    }
  },
  cc = new A_();
function j_(n) {
  setTimeout(n, 0);
}
var Za = typeof window > "u" || "Deno" in globalThis;
function bn() {}
function L_(n, t) {
  return typeof n == "function" ? n(t) : n;
}
function M_(n) {
  return typeof n == "number" && n >= 0 && n !== 1 / 0;
}
function I_(n, t) {
  return Math.max(n + (t || 0) - Date.now(), 0);
}
function dc(n, t) {
  return typeof n == "function" ? n(t) : n;
}
function D_(n, t) {
  return typeof n == "function" ? n(t) : n;
}
function yp(n, t) {
  const {
    type: s = "all",
    exact: i,
    fetchStatus: a,
    predicate: u,
    queryKey: c,
    stale: f,
  } = n;
  if (c) {
    if (i) {
      if (t.queryHash !== qc(c, t.options)) return !1;
    } else if (!Ui(t.queryKey, c)) return !1;
  }
  if (s !== "all") {
    const p = t.isActive();
    if ((s === "active" && !p) || (s === "inactive" && p)) return !1;
  }
  return !(
    (typeof f == "boolean" && t.isStale() !== f) ||
    (a && a !== t.state.fetchStatus) ||
    (u && !u(t))
  );
}
function vp(n, t) {
  const { exact: s, status: i, predicate: a, mutationKey: u } = n;
  if (u) {
    if (!t.options.mutationKey) return !1;
    if (s) {
      if ($i(t.options.mutationKey) !== $i(u)) return !1;
    } else if (!Ui(t.options.mutationKey, u)) return !1;
  }
  return !((i && t.state.status !== i) || (a && !a(t)));
}
function qc(n, t) {
  return (t?.queryKeyHashFn || $i)(n);
}
function $i(n) {
  return JSON.stringify(n, (t, s) =>
    fc(s)
      ? Object.keys(s)
          .sort()
          .reduce((i, a) => ((i[a] = s[a]), i), {})
      : s
  );
}
function Ui(n, t) {
  return n === t
    ? !0
    : typeof n != typeof t
    ? !1
    : n && t && typeof n == "object" && typeof t == "object"
    ? Object.keys(t).every((s) => Ui(n[s], t[s]))
    : !1;
}
var F_ = Object.prototype.hasOwnProperty;
function Sg(n, t) {
  if (n === t) return n;
  const s = xp(n) && xp(t);
  if (!s && !(fc(n) && fc(t))) return t;
  const a = (s ? n : Object.keys(n)).length,
    u = s ? t : Object.keys(t),
    c = u.length,
    f = s ? new Array(c) : {};
  let p = 0;
  for (let m = 0; m < c; m++) {
    const g = s ? m : u[m],
      x = n[g],
      S = t[g];
    if (x === S) {
      (f[g] = x), (s ? m < a : F_.call(n, g)) && p++;
      continue;
    }
    if (
      x === null ||
      S === null ||
      typeof x != "object" ||
      typeof S != "object"
    ) {
      f[g] = S;
      continue;
    }
    const w = Sg(x, S);
    (f[g] = w), w === x && p++;
  }
  return a === c && p === a ? n : f;
}
function xp(n) {
  return Array.isArray(n) && n.length === Object.keys(n).length;
}
function fc(n) {
  if (!wp(n)) return !1;
  const t = n.constructor;
  if (t === void 0) return !0;
  const s = t.prototype;
  return !(
    !wp(s) ||
    !s.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(n) !== Object.prototype
  );
}
function wp(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
function z_(n) {
  return new Promise((t) => {
    cc.setTimeout(t, n);
  });
}
function B_(n, t, s) {
  return typeof s.structuralSharing == "function"
    ? s.structuralSharing(n, t)
    : s.structuralSharing !== !1
    ? Sg(n, t)
    : t;
}
function $_(n, t, s = 0) {
  const i = [...n, t];
  return s && i.length > s ? i.slice(1) : i;
}
function U_(n, t, s = 0) {
  const i = [t, ...n];
  return s && i.length > s ? i.slice(0, -1) : i;
}
var Qc = Symbol();
function kg(n, t) {
  return !n.queryFn && t?.initialPromise
    ? () => t.initialPromise
    : !n.queryFn || n.queryFn === Qc
    ? () => Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`))
    : n.queryFn;
}
var V_ = class extends Qa {
    #e;
    #t;
    #n;
    constructor() {
      super(),
        (this.#n = (n) => {
          if (!Za && window.addEventListener) {
            const t = () => n();
            return (
              window.addEventListener("visibilitychange", t, !1),
              () => {
                window.removeEventListener("visibilitychange", t);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(n) {
      (this.#n = n),
        this.#t?.(),
        (this.#t = n((t) => {
          typeof t == "boolean" ? this.setFocused(t) : this.onFocus();
        }));
    }
    setFocused(n) {
      this.#e !== n && ((this.#e = n), this.onFocus());
    }
    onFocus() {
      const n = this.isFocused();
      this.listeners.forEach((t) => {
        t(n);
      });
    }
    isFocused() {
      return typeof this.#e == "boolean"
        ? this.#e
        : globalThis.document?.visibilityState !== "hidden";
    }
  },
  Eg = new V_();
function W_() {
  let n, t;
  const s = new Promise((a, u) => {
    (n = a), (t = u);
  });
  (s.status = "pending"), s.catch(() => {});
  function i(a) {
    Object.assign(s, a), delete s.resolve, delete s.reject;
  }
  return (
    (s.resolve = (a) => {
      i({ status: "fulfilled", value: a }), n(a);
    }),
    (s.reject = (a) => {
      i({ status: "rejected", reason: a }), t(a);
    }),
    s
  );
}
var H_ = j_;
function q_() {
  let n = [],
    t = 0,
    s = (f) => {
      f();
    },
    i = (f) => {
      f();
    },
    a = H_;
  const u = (f) => {
      t
        ? n.push(f)
        : a(() => {
            s(f);
          });
    },
    c = () => {
      const f = n;
      (n = []),
        f.length &&
          a(() => {
            i(() => {
              f.forEach((p) => {
                s(p);
              });
            });
          });
    };
  return {
    batch: (f) => {
      let p;
      t++;
      try {
        p = f();
      } finally {
        t--, t || c();
      }
      return p;
    },
    batchCalls:
      (f) =>
      (...p) => {
        u(() => {
          f(...p);
        });
      },
    schedule: u,
    setNotifyFunction: (f) => {
      s = f;
    },
    setBatchNotifyFunction: (f) => {
      i = f;
    },
    setScheduler: (f) => {
      a = f;
    },
  };
}
var Tt = q_(),
  Q_ = class extends Qa {
    #e = !0;
    #t;
    #n;
    constructor() {
      super(),
        (this.#n = (n) => {
          if (!Za && window.addEventListener) {
            const t = () => n(!0),
              s = () => n(!1);
            return (
              window.addEventListener("online", t, !1),
              window.addEventListener("offline", s, !1),
              () => {
                window.removeEventListener("online", t),
                  window.removeEventListener("offline", s);
              }
            );
          }
        });
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(n) {
      (this.#n = n), this.#t?.(), (this.#t = n(this.setOnline.bind(this)));
    }
    setOnline(n) {
      this.#e !== n &&
        ((this.#e = n),
        this.listeners.forEach((s) => {
          s(n);
        }));
    }
    isOnline() {
      return this.#e;
    }
  },
  Na = new Q_();
function Z_(n) {
  return Math.min(1e3 * 2 ** n, 3e4);
}
function Cg(n) {
  return (n ?? "online") === "online" ? Na.isOnline() : !0;
}
var hc = class extends Error {
  constructor(n) {
    super("CancelledError"),
      (this.revert = n?.revert),
      (this.silent = n?.silent);
  }
};
function Tg(n) {
  let t = !1,
    s = 0,
    i;
  const a = W_(),
    u = () => a.status !== "pending",
    c = (_) => {
      if (!u()) {
        const b = new hc(_);
        S(b), n.onCancel?.(b);
      }
    },
    f = () => {
      t = !0;
    },
    p = () => {
      t = !1;
    },
    m = () =>
      Eg.isFocused() &&
      (n.networkMode === "always" || Na.isOnline()) &&
      n.canRun(),
    g = () => Cg(n.networkMode) && n.canRun(),
    x = (_) => {
      u() || (i?.(), a.resolve(_));
    },
    S = (_) => {
      u() || (i?.(), a.reject(_));
    },
    w = () =>
      new Promise((_) => {
        (i = (b) => {
          (u() || m()) && _(b);
        }),
          n.onPause?.();
      }).then(() => {
        (i = void 0), u() || n.onContinue?.();
      }),
    E = () => {
      if (u()) return;
      let _;
      const b = s === 0 ? n.initialPromise : void 0;
      try {
        _ = b ?? n.fn();
      } catch (T) {
        _ = Promise.reject(T);
      }
      Promise.resolve(_)
        .then(x)
        .catch((T) => {
          if (u()) return;
          const N = n.retry ?? (Za ? 0 : 3),
            A = n.retryDelay ?? Z_,
            M = typeof A == "function" ? A(s, T) : A,
            B =
              N === !0 ||
              (typeof N == "number" && s < N) ||
              (typeof N == "function" && N(s, T));
          if (t || !B) {
            S(T);
            return;
          }
          s++,
            n.onFail?.(s, T),
            z_(M)
              .then(() => (m() ? void 0 : w()))
              .then(() => {
                t ? S(T) : E();
              });
        });
    };
  return {
    promise: a,
    status: () => a.status,
    cancel: c,
    continue: () => (i?.(), a),
    cancelRetry: f,
    continueRetry: p,
    canStart: g,
    start: () => (g() ? E() : w().then(E), a),
  };
}
var Ng = class {
    #e;
    destroy() {
      this.clearGcTimeout();
    }
    scheduleGc() {
      this.clearGcTimeout(),
        M_(this.gcTime) &&
          (this.#e = cc.setTimeout(() => {
            this.optionalRemove();
          }, this.gcTime));
    }
    updateGcTime(n) {
      this.gcTime = Math.max(this.gcTime || 0, n ?? (Za ? 1 / 0 : 300 * 1e3));
    }
    clearGcTimeout() {
      this.#e && (cc.clearTimeout(this.#e), (this.#e = void 0));
    }
  },
  K_ = class extends Ng {
    #e;
    #t;
    #n;
    #s;
    #r;
    #o;
    #a;
    constructor(n) {
      super(),
        (this.#a = !1),
        (this.#o = n.defaultOptions),
        this.setOptions(n.options),
        (this.observers = []),
        (this.#s = n.client),
        (this.#n = this.#s.getQueryCache()),
        (this.queryKey = n.queryKey),
        (this.queryHash = n.queryHash),
        (this.#e = _p(this.options)),
        (this.state = n.state ?? this.#e),
        this.scheduleGc();
    }
    get meta() {
      return this.options.meta;
    }
    get promise() {
      return this.#r?.promise;
    }
    setOptions(n) {
      if (
        ((this.options = { ...this.#o, ...n }),
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0)
      ) {
        const t = _p(this.options);
        t.data !== void 0 &&
          (this.setData(t.data, { updatedAt: t.dataUpdatedAt, manual: !0 }),
          (this.#e = t));
      }
    }
    optionalRemove() {
      !this.observers.length &&
        this.state.fetchStatus === "idle" &&
        this.#n.remove(this);
    }
    setData(n, t) {
      const s = B_(this.state.data, n, this.options);
      return (
        this.#i({
          data: s,
          type: "success",
          dataUpdatedAt: t?.updatedAt,
          manual: t?.manual,
        }),
        s
      );
    }
    setState(n, t) {
      this.#i({ type: "setState", state: n, setStateOptions: t });
    }
    cancel(n) {
      const t = this.#r?.promise;
      return this.#r?.cancel(n), t ? t.then(bn).catch(bn) : Promise.resolve();
    }
    destroy() {
      super.destroy(), this.cancel({ silent: !0 });
    }
    reset() {
      this.destroy(), this.setState(this.#e);
    }
    isActive() {
      return this.observers.some((n) => D_(n.options.enabled, this) !== !1);
    }
    isDisabled() {
      return this.getObserversCount() > 0
        ? !this.isActive()
        : this.options.queryFn === Qc ||
            this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStatic() {
      return this.getObserversCount() > 0
        ? this.observers.some((n) => dc(n.options.staleTime, this) === "static")
        : !1;
    }
    isStale() {
      return this.getObserversCount() > 0
        ? this.observers.some((n) => n.getCurrentResult().isStale)
        : this.state.data === void 0 || this.state.isInvalidated;
    }
    isStaleByTime(n = 0) {
      return this.state.data === void 0
        ? !0
        : n === "static"
        ? !1
        : this.state.isInvalidated
        ? !0
        : !I_(this.state.dataUpdatedAt, n);
    }
    onFocus() {
      this.observers
        .find((t) => t.shouldFetchOnWindowFocus())
        ?.refetch({ cancelRefetch: !1 }),
        this.#r?.continue();
    }
    onOnline() {
      this.observers
        .find((t) => t.shouldFetchOnReconnect())
        ?.refetch({ cancelRefetch: !1 }),
        this.#r?.continue();
    }
    addObserver(n) {
      this.observers.includes(n) ||
        (this.observers.push(n),
        this.clearGcTimeout(),
        this.#n.notify({ type: "observerAdded", query: this, observer: n }));
    }
    removeObserver(n) {
      this.observers.includes(n) &&
        ((this.observers = this.observers.filter((t) => t !== n)),
        this.observers.length ||
          (this.#r &&
            (this.#a ? this.#r.cancel({ revert: !0 }) : this.#r.cancelRetry()),
          this.scheduleGc()),
        this.#n.notify({ type: "observerRemoved", query: this, observer: n }));
    }
    getObserversCount() {
      return this.observers.length;
    }
    invalidate() {
      this.state.isInvalidated || this.#i({ type: "invalidate" });
    }
    async fetch(n, t) {
      if (
        this.state.fetchStatus !== "idle" &&
        this.#r?.status() !== "rejected"
      ) {
        if (this.state.data !== void 0 && t?.cancelRefetch)
          this.cancel({ silent: !0 });
        else if (this.#r) return this.#r.continueRetry(), this.#r.promise;
      }
      if ((n && this.setOptions(n), !this.options.queryFn)) {
        const f = this.observers.find((p) => p.options.queryFn);
        f && this.setOptions(f.options);
      }
      const s = new AbortController(),
        i = (f) => {
          Object.defineProperty(f, "signal", {
            enumerable: !0,
            get: () => ((this.#a = !0), s.signal),
          });
        },
        a = () => {
          const f = kg(this.options, t),
            m = (() => {
              const g = {
                client: this.#s,
                queryKey: this.queryKey,
                meta: this.meta,
              };
              return i(g), g;
            })();
          return (
            (this.#a = !1),
            this.options.persister ? this.options.persister(f, m, this) : f(m)
          );
        },
        c = (() => {
          const f = {
            fetchOptions: t,
            options: this.options,
            queryKey: this.queryKey,
            client: this.#s,
            state: this.state,
            fetchFn: a,
          };
          return i(f), f;
        })();
      this.options.behavior?.onFetch(c, this),
        (this.#t = this.state),
        (this.state.fetchStatus === "idle" ||
          this.state.fetchMeta !== c.fetchOptions?.meta) &&
          this.#i({ type: "fetch", meta: c.fetchOptions?.meta }),
        (this.#r = Tg({
          initialPromise: t?.initialPromise,
          fn: c.fetchFn,
          onCancel: (f) => {
            f instanceof hc &&
              f.revert &&
              this.setState({ ...this.#t, fetchStatus: "idle" }),
              s.abort();
          },
          onFail: (f, p) => {
            this.#i({ type: "failed", failureCount: f, error: p });
          },
          onPause: () => {
            this.#i({ type: "pause" });
          },
          onContinue: () => {
            this.#i({ type: "continue" });
          },
          retry: c.options.retry,
          retryDelay: c.options.retryDelay,
          networkMode: c.options.networkMode,
          canRun: () => !0,
        }));
      try {
        const f = await this.#r.start();
        if (f === void 0)
          throw new Error(`${this.queryHash} data is undefined`);
        return (
          this.setData(f),
          this.#n.config.onSuccess?.(f, this),
          this.#n.config.onSettled?.(f, this.state.error, this),
          f
        );
      } catch (f) {
        if (f instanceof hc) {
          if (f.silent) return this.#r.promise;
          if (f.revert) {
            if (this.state.data === void 0) throw f;
            return this.state.data;
          }
        }
        throw (
          (this.#i({ type: "error", error: f }),
          this.#n.config.onError?.(f, this),
          this.#n.config.onSettled?.(this.state.data, f, this),
          f)
        );
      } finally {
        this.scheduleGc();
      }
    }
    #i(n) {
      const t = (s) => {
        switch (n.type) {
          case "failed":
            return {
              ...s,
              fetchFailureCount: n.failureCount,
              fetchFailureReason: n.error,
            };
          case "pause":
            return { ...s, fetchStatus: "paused" };
          case "continue":
            return { ...s, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...s,
              ...Y_(s.data, this.options),
              fetchMeta: n.meta ?? null,
            };
          case "success":
            const i = {
              ...s,
              data: n.data,
              dataUpdateCount: s.dataUpdateCount + 1,
              dataUpdatedAt: n.dataUpdatedAt ?? Date.now(),
              error: null,
              isInvalidated: !1,
              status: "success",
              ...(!n.manual && {
                fetchStatus: "idle",
                fetchFailureCount: 0,
                fetchFailureReason: null,
              }),
            };
            return (this.#t = n.manual ? i : void 0), i;
          case "error":
            const a = n.error;
            return {
              ...s,
              error: a,
              errorUpdateCount: s.errorUpdateCount + 1,
              errorUpdatedAt: Date.now(),
              fetchFailureCount: s.fetchFailureCount + 1,
              fetchFailureReason: a,
              fetchStatus: "idle",
              status: "error",
            };
          case "invalidate":
            return { ...s, isInvalidated: !0 };
          case "setState":
            return { ...s, ...n.state };
        }
      };
      (this.state = t(this.state)),
        Tt.batch(() => {
          this.observers.forEach((s) => {
            s.onQueryUpdate();
          }),
            this.#n.notify({ query: this, type: "updated", action: n });
        });
    }
  };
function Y_(n, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Cg(t.networkMode) ? "fetching" : "paused",
    ...(n === void 0 && { error: null, status: "pending" }),
  };
}
function _p(n) {
  const t =
      typeof n.initialData == "function" ? n.initialData() : n.initialData,
    s = t !== void 0,
    i = s
      ? typeof n.initialDataUpdatedAt == "function"
        ? n.initialDataUpdatedAt()
        : n.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: s ? i ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: s ? "success" : "pending",
    fetchStatus: "idle",
  };
}
function bp(n) {
  return {
    onFetch: (t, s) => {
      const i = t.options,
        a = t.fetchOptions?.meta?.fetchMore?.direction,
        u = t.state.data?.pages || [],
        c = t.state.data?.pageParams || [];
      let f = { pages: [], pageParams: [] },
        p = 0;
      const m = async () => {
        let g = !1;
        const x = (E) => {
            Object.defineProperty(E, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (g = !0)
                  : t.signal.addEventListener("abort", () => {
                      g = !0;
                    }),
                t.signal
              ),
            });
          },
          S = kg(t.options, t.fetchOptions),
          w = async (E, _, b) => {
            if (g) return Promise.reject();
            if (_ == null && E.pages.length) return Promise.resolve(E);
            const N = (() => {
                const U = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: _,
                  direction: b ? "backward" : "forward",
                  meta: t.options.meta,
                };
                return x(U), U;
              })(),
              A = await S(N),
              { maxPages: M } = t.options,
              B = b ? U_ : $_;
            return {
              pages: B(E.pages, A, M),
              pageParams: B(E.pageParams, _, M),
            };
          };
        if (a && u.length) {
          const E = a === "backward",
            _ = E ? G_ : Sp,
            b = { pages: u, pageParams: c },
            T = _(i, b);
          f = await w(b, T, E);
        } else {
          const E = n ?? u.length;
          do {
            const _ = p === 0 ? c[0] ?? i.initialPageParam : Sp(i, f);
            if (p > 0 && _ == null) break;
            (f = await w(f, _)), p++;
          } while (p < E);
        }
        return f;
      };
      t.options.persister
        ? (t.fetchFn = () =>
            t.options.persister?.(
              m,
              {
                client: t.client,
                queryKey: t.queryKey,
                meta: t.options.meta,
                signal: t.signal,
              },
              s
            ))
        : (t.fetchFn = m);
    },
  };
}
function Sp(n, { pages: t, pageParams: s }) {
  const i = t.length - 1;
  return t.length > 0 ? n.getNextPageParam(t[i], t, s[i], s) : void 0;
}
function G_(n, { pages: t, pageParams: s }) {
  return t.length > 0 ? n.getPreviousPageParam?.(t[0], t, s[0], s) : void 0;
}
var X_ = class extends Ng {
  #e;
  #t;
  #n;
  #s;
  constructor(n) {
    super(),
      (this.#e = n.client),
      (this.mutationId = n.mutationId),
      (this.#n = n.mutationCache),
      (this.#t = []),
      (this.state = n.state || J_()),
      this.setOptions(n.options),
      this.scheduleGc();
  }
  setOptions(n) {
    (this.options = n), this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(n) {
    this.#t.includes(n) ||
      (this.#t.push(n),
      this.clearGcTimeout(),
      this.#n.notify({ type: "observerAdded", mutation: this, observer: n }));
  }
  removeObserver(n) {
    (this.#t = this.#t.filter((t) => t !== n)),
      this.scheduleGc(),
      this.#n.notify({ type: "observerRemoved", mutation: this, observer: n });
  }
  optionalRemove() {
    this.#t.length ||
      (this.state.status === "pending"
        ? this.scheduleGc()
        : this.#n.remove(this));
  }
  continue() {
    return this.#s?.continue() ?? this.execute(this.state.variables);
  }
  async execute(n) {
    const t = () => {
        this.#r({ type: "continue" });
      },
      s = {
        client: this.#e,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey,
      };
    this.#s = Tg({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(n, s)
          : Promise.reject(new Error("No mutationFn found")),
      onFail: (u, c) => {
        this.#r({ type: "failed", failureCount: u, error: c });
      },
      onPause: () => {
        this.#r({ type: "pause" });
      },
      onContinue: t,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#n.canRun(this),
    });
    const i = this.state.status === "pending",
      a = !this.#s.canStart();
    try {
      if (i) t();
      else {
        this.#r({ type: "pending", variables: n, isPaused: a }),
          await this.#n.config.onMutate?.(n, this, s);
        const c = await this.options.onMutate?.(n, s);
        c !== this.state.context &&
          this.#r({ type: "pending", context: c, variables: n, isPaused: a });
      }
      const u = await this.#s.start();
      return (
        await this.#n.config.onSuccess?.(u, n, this.state.context, this, s),
        await this.options.onSuccess?.(u, n, this.state.context, s),
        await this.#n.config.onSettled?.(
          u,
          null,
          this.state.variables,
          this.state.context,
          this,
          s
        ),
        await this.options.onSettled?.(u, null, n, this.state.context, s),
        this.#r({ type: "success", data: u }),
        u
      );
    } catch (u) {
      try {
        throw (
          (await this.#n.config.onError?.(u, n, this.state.context, this, s),
          await this.options.onError?.(u, n, this.state.context, s),
          await this.#n.config.onSettled?.(
            void 0,
            u,
            this.state.variables,
            this.state.context,
            this,
            s
          ),
          await this.options.onSettled?.(void 0, u, n, this.state.context, s),
          u)
        );
      } finally {
        this.#r({ type: "error", error: u });
      }
    } finally {
      this.#n.runNext(this);
    }
  }
  #r(n) {
    const t = (s) => {
      switch (n.type) {
        case "failed":
          return { ...s, failureCount: n.failureCount, failureReason: n.error };
        case "pause":
          return { ...s, isPaused: !0 };
        case "continue":
          return { ...s, isPaused: !1 };
        case "pending":
          return {
            ...s,
            context: n.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: n.isPaused,
            status: "pending",
            variables: n.variables,
            submittedAt: Date.now(),
          };
        case "success":
          return {
            ...s,
            data: n.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1,
          };
        case "error":
          return {
            ...s,
            data: void 0,
            error: n.error,
            failureCount: s.failureCount + 1,
            failureReason: n.error,
            isPaused: !1,
            status: "error",
          };
      }
    };
    (this.state = t(this.state)),
      Tt.batch(() => {
        this.#t.forEach((s) => {
          s.onMutationUpdate(n);
        }),
          this.#n.notify({ mutation: this, type: "updated", action: n });
      });
  }
};
function J_() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var eb = class extends Qa {
  constructor(n = {}) {
    super(),
      (this.config = n),
      (this.#e = new Set()),
      (this.#t = new Map()),
      (this.#n = 0);
  }
  #e;
  #t;
  #n;
  build(n, t, s) {
    const i = new X_({
      client: n,
      mutationCache: this,
      mutationId: ++this.#n,
      options: n.defaultMutationOptions(t),
      state: s,
    });
    return this.add(i), i;
  }
  add(n) {
    this.#e.add(n);
    const t = pa(n);
    if (typeof t == "string") {
      const s = this.#t.get(t);
      s ? s.push(n) : this.#t.set(t, [n]);
    }
    this.notify({ type: "added", mutation: n });
  }
  remove(n) {
    if (this.#e.delete(n)) {
      const t = pa(n);
      if (typeof t == "string") {
        const s = this.#t.get(t);
        if (s)
          if (s.length > 1) {
            const i = s.indexOf(n);
            i !== -1 && s.splice(i, 1);
          } else s[0] === n && this.#t.delete(t);
      }
    }
    this.notify({ type: "removed", mutation: n });
  }
  canRun(n) {
    const t = pa(n);
    if (typeof t == "string") {
      const i = this.#t.get(t)?.find((a) => a.state.status === "pending");
      return !i || i === n;
    } else return !0;
  }
  runNext(n) {
    const t = pa(n);
    return typeof t == "string"
      ? this.#t
          .get(t)
          ?.find((i) => i !== n && i.state.isPaused)
          ?.continue() ?? Promise.resolve()
      : Promise.resolve();
  }
  clear() {
    Tt.batch(() => {
      this.#e.forEach((n) => {
        this.notify({ type: "removed", mutation: n });
      }),
        this.#e.clear(),
        this.#t.clear();
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(n) {
    const t = { exact: !0, ...n };
    return this.getAll().find((s) => vp(t, s));
  }
  findAll(n = {}) {
    return this.getAll().filter((t) => vp(n, t));
  }
  notify(n) {
    Tt.batch(() => {
      this.listeners.forEach((t) => {
        t(n);
      });
    });
  }
  resumePausedMutations() {
    const n = this.getAll().filter((t) => t.state.isPaused);
    return Tt.batch(() => Promise.all(n.map((t) => t.continue().catch(bn))));
  }
};
function pa(n) {
  return n.options.scope?.id;
}
var tb = class extends Qa {
    constructor(n = {}) {
      super(), (this.config = n), (this.#e = new Map());
    }
    #e;
    build(n, t, s) {
      const i = t.queryKey,
        a = t.queryHash ?? qc(i, t);
      let u = this.get(a);
      return (
        u ||
          ((u = new K_({
            client: n,
            queryKey: i,
            queryHash: a,
            options: n.defaultQueryOptions(t),
            state: s,
            defaultOptions: n.getQueryDefaults(i),
          })),
          this.add(u)),
        u
      );
    }
    add(n) {
      this.#e.has(n.queryHash) ||
        (this.#e.set(n.queryHash, n), this.notify({ type: "added", query: n }));
    }
    remove(n) {
      const t = this.#e.get(n.queryHash);
      t &&
        (n.destroy(),
        t === n && this.#e.delete(n.queryHash),
        this.notify({ type: "removed", query: n }));
    }
    clear() {
      Tt.batch(() => {
        this.getAll().forEach((n) => {
          this.remove(n);
        });
      });
    }
    get(n) {
      return this.#e.get(n);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(n) {
      const t = { exact: !0, ...n };
      return this.getAll().find((s) => yp(t, s));
    }
    findAll(n = {}) {
      const t = this.getAll();
      return Object.keys(n).length > 0 ? t.filter((s) => yp(n, s)) : t;
    }
    notify(n) {
      Tt.batch(() => {
        this.listeners.forEach((t) => {
          t(n);
        });
      });
    }
    onFocus() {
      Tt.batch(() => {
        this.getAll().forEach((n) => {
          n.onFocus();
        });
      });
    }
    onOnline() {
      Tt.batch(() => {
        this.getAll().forEach((n) => {
          n.onOnline();
        });
      });
    }
  },
  nb = class {
    #e;
    #t;
    #n;
    #s;
    #r;
    #o;
    #a;
    #i;
    constructor(n = {}) {
      (this.#e = n.queryCache || new tb()),
        (this.#t = n.mutationCache || new eb()),
        (this.#n = n.defaultOptions || {}),
        (this.#s = new Map()),
        (this.#r = new Map()),
        (this.#o = 0);
    }
    mount() {
      this.#o++,
        this.#o === 1 &&
          ((this.#a = Eg.subscribe(async (n) => {
            n && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#i = Na.subscribe(async (n) => {
            n && (await this.resumePausedMutations(), this.#e.onOnline());
          })));
    }
    unmount() {
      this.#o--,
        this.#o === 0 &&
          (this.#a?.(), (this.#a = void 0), this.#i?.(), (this.#i = void 0));
    }
    isFetching(n) {
      return this.#e.findAll({ ...n, fetchStatus: "fetching" }).length;
    }
    isMutating(n) {
      return this.#t.findAll({ ...n, status: "pending" }).length;
    }
    getQueryData(n) {
      const t = this.defaultQueryOptions({ queryKey: n });
      return this.#e.get(t.queryHash)?.state.data;
    }
    ensureQueryData(n) {
      const t = this.defaultQueryOptions(n),
        s = this.#e.build(this, t),
        i = s.state.data;
      return i === void 0
        ? this.fetchQuery(n)
        : (n.revalidateIfStale &&
            s.isStaleByTime(dc(t.staleTime, s)) &&
            this.prefetchQuery(t),
          Promise.resolve(i));
    }
    getQueriesData(n) {
      return this.#e.findAll(n).map(({ queryKey: t, state: s }) => {
        const i = s.data;
        return [t, i];
      });
    }
    setQueryData(n, t, s) {
      const i = this.defaultQueryOptions({ queryKey: n }),
        u = this.#e.get(i.queryHash)?.state.data,
        c = L_(t, u);
      if (c !== void 0)
        return this.#e.build(this, i).setData(c, { ...s, manual: !0 });
    }
    setQueriesData(n, t, s) {
      return Tt.batch(() =>
        this.#e
          .findAll(n)
          .map(({ queryKey: i }) => [i, this.setQueryData(i, t, s)])
      );
    }
    getQueryState(n) {
      const t = this.defaultQueryOptions({ queryKey: n });
      return this.#e.get(t.queryHash)?.state;
    }
    removeQueries(n) {
      const t = this.#e;
      Tt.batch(() => {
        t.findAll(n).forEach((s) => {
          t.remove(s);
        });
      });
    }
    resetQueries(n, t) {
      const s = this.#e;
      return Tt.batch(
        () => (
          s.findAll(n).forEach((i) => {
            i.reset();
          }),
          this.refetchQueries({ type: "active", ...n }, t)
        )
      );
    }
    cancelQueries(n, t = {}) {
      const s = { revert: !0, ...t },
        i = Tt.batch(() => this.#e.findAll(n).map((a) => a.cancel(s)));
      return Promise.all(i).then(bn).catch(bn);
    }
    invalidateQueries(n, t = {}) {
      return Tt.batch(
        () => (
          this.#e.findAll(n).forEach((s) => {
            s.invalidate();
          }),
          n?.refetchType === "none"
            ? Promise.resolve()
            : this.refetchQueries(
                { ...n, type: n?.refetchType ?? n?.type ?? "active" },
                t
              )
        )
      );
    }
    refetchQueries(n, t = {}) {
      const s = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
        i = Tt.batch(() =>
          this.#e
            .findAll(n)
            .filter((a) => !a.isDisabled() && !a.isStatic())
            .map((a) => {
              let u = a.fetch(void 0, s);
              return (
                s.throwOnError || (u = u.catch(bn)),
                a.state.fetchStatus === "paused" ? Promise.resolve() : u
              );
            })
        );
      return Promise.all(i).then(bn);
    }
    fetchQuery(n) {
      const t = this.defaultQueryOptions(n);
      t.retry === void 0 && (t.retry = !1);
      const s = this.#e.build(this, t);
      return s.isStaleByTime(dc(t.staleTime, s))
        ? s.fetch(t)
        : Promise.resolve(s.state.data);
    }
    prefetchQuery(n) {
      return this.fetchQuery(n).then(bn).catch(bn);
    }
    fetchInfiniteQuery(n) {
      return (n.behavior = bp(n.pages)), this.fetchQuery(n);
    }
    prefetchInfiniteQuery(n) {
      return this.fetchInfiniteQuery(n).then(bn).catch(bn);
    }
    ensureInfiniteQueryData(n) {
      return (n.behavior = bp(n.pages)), this.ensureQueryData(n);
    }
    resumePausedMutations() {
      return Na.isOnline()
        ? this.#t.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(n) {
      this.#n = n;
    }
    setQueryDefaults(n, t) {
      this.#s.set($i(n), { queryKey: n, defaultOptions: t });
    }
    getQueryDefaults(n) {
      const t = [...this.#s.values()],
        s = {};
      return (
        t.forEach((i) => {
          Ui(n, i.queryKey) && Object.assign(s, i.defaultOptions);
        }),
        s
      );
    }
    setMutationDefaults(n, t) {
      this.#r.set($i(n), { mutationKey: n, defaultOptions: t });
    }
    getMutationDefaults(n) {
      const t = [...this.#r.values()],
        s = {};
      return (
        t.forEach((i) => {
          Ui(n, i.mutationKey) && Object.assign(s, i.defaultOptions);
        }),
        s
      );
    }
    defaultQueryOptions(n) {
      if (n._defaulted) return n;
      const t = {
        ...this.#n.queries,
        ...this.getQueryDefaults(n.queryKey),
        ...n,
        _defaulted: !0,
      };
      return (
        t.queryHash || (t.queryHash = qc(t.queryKey, t)),
        t.refetchOnReconnect === void 0 &&
          (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === Qc && (t.enabled = !1),
        t
      );
    }
    defaultMutationOptions(n) {
      return n?._defaulted
        ? n
        : {
            ...this.#n.mutations,
            ...(n?.mutationKey && this.getMutationDefaults(n.mutationKey)),
            ...n,
            _defaulted: !0,
          };
    }
    clear() {
      this.#e.clear(), this.#t.clear();
    }
  },
  rb = k.createContext(void 0),
  sb = ({ client: n, children: t }) => (
    k.useEffect(
      () => (
        n.mount(),
        () => {
          n.unmount();
        }
      ),
      [n]
    ),
    v.jsx(rb.Provider, { value: n, children: t })
  );
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Vi() {
  return (
    (Vi = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var t = 1; t < arguments.length; t++) {
            var s = arguments[t];
            for (var i in s)
              Object.prototype.hasOwnProperty.call(s, i) && (n[i] = s[i]);
          }
          return n;
        }),
    Vi.apply(this, arguments)
  );
}
var Nr;
(function (n) {
  (n.Pop = "POP"), (n.Push = "PUSH"), (n.Replace = "REPLACE");
})(Nr || (Nr = {}));
const kp = "popstate";
function ib(n) {
  n === void 0 && (n = {});
  function t(i, a) {
    let { pathname: u, search: c, hash: f } = i.location;
    return pc(
      "",
      { pathname: u, search: c, hash: f },
      (a.state && a.state.usr) || null,
      (a.state && a.state.key) || "default"
    );
  }
  function s(i, a) {
    return typeof a == "string" ? a : Ra(a);
  }
  return ab(t, s, null, n);
}
function Xe(n, t) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(t);
}
function Rg(n, t) {
  if (!n) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function ob() {
  return Math.random().toString(36).substr(2, 8);
}
function Ep(n, t) {
  return { usr: n.state, key: n.key, idx: t };
}
function pc(n, t, s, i) {
  return (
    s === void 0 && (s = null),
    Vi(
      { pathname: typeof n == "string" ? n : n.pathname, search: "", hash: "" },
      typeof t == "string" ? Qs(t) : t,
      { state: s, key: (t && t.key) || i || ob() }
    )
  );
}
function Ra(n) {
  let { pathname: t = "/", search: s = "", hash: i = "" } = n;
  return (
    s && s !== "?" && (t += s.charAt(0) === "?" ? s : "?" + s),
    i && i !== "#" && (t += i.charAt(0) === "#" ? i : "#" + i),
    t
  );
}
function Qs(n) {
  let t = {};
  if (n) {
    let s = n.indexOf("#");
    s >= 0 && ((t.hash = n.substr(s)), (n = n.substr(0, s)));
    let i = n.indexOf("?");
    i >= 0 && ((t.search = n.substr(i)), (n = n.substr(0, i))),
      n && (t.pathname = n);
  }
  return t;
}
function ab(n, t, s, i) {
  i === void 0 && (i = {});
  let { window: a = document.defaultView, v5Compat: u = !1 } = i,
    c = a.history,
    f = Nr.Pop,
    p = null,
    m = g();
  m == null && ((m = 0), c.replaceState(Vi({}, c.state, { idx: m }), ""));
  function g() {
    return (c.state || { idx: null }).idx;
  }
  function x() {
    f = Nr.Pop;
    let b = g(),
      T = b == null ? null : b - m;
    (m = b), p && p({ action: f, location: _.location, delta: T });
  }
  function S(b, T) {
    f = Nr.Push;
    let N = pc(_.location, b, T);
    m = g() + 1;
    let A = Ep(N, m),
      M = _.createHref(N);
    try {
      c.pushState(A, "", M);
    } catch (B) {
      if (B instanceof DOMException && B.name === "DataCloneError") throw B;
      a.location.assign(M);
    }
    u && p && p({ action: f, location: _.location, delta: 1 });
  }
  function w(b, T) {
    f = Nr.Replace;
    let N = pc(_.location, b, T);
    m = g();
    let A = Ep(N, m),
      M = _.createHref(N);
    c.replaceState(A, "", M),
      u && p && p({ action: f, location: _.location, delta: 0 });
  }
  function E(b) {
    let T = a.location.origin !== "null" ? a.location.origin : a.location.href,
      N = typeof b == "string" ? b : Ra(b);
    return (
      (N = N.replace(/ $/, "%20")),
      Xe(
        T,
        "No window.location.(origin|href) available to create URL for href: " +
          N
      ),
      new URL(N, T)
    );
  }
  let _ = {
    get action() {
      return f;
    },
    get location() {
      return n(a, c);
    },
    listen(b) {
      if (p) throw new Error("A history only accepts one active listener");
      return (
        a.addEventListener(kp, x),
        (p = b),
        () => {
          a.removeEventListener(kp, x), (p = null);
        }
      );
    },
    createHref(b) {
      return t(a, b);
    },
    createURL: E,
    encodeLocation(b) {
      let T = E(b);
      return { pathname: T.pathname, search: T.search, hash: T.hash };
    },
    push: S,
    replace: w,
    go(b) {
      return c.go(b);
    },
  };
  return _;
}
var Cp;
(function (n) {
  (n.data = "data"),
    (n.deferred = "deferred"),
    (n.redirect = "redirect"),
    (n.error = "error");
})(Cp || (Cp = {}));
function lb(n, t, s) {
  return s === void 0 && (s = "/"), ub(n, t, s);
}
function ub(n, t, s, i) {
  let a = typeof t == "string" ? Qs(t) : t,
    u = zs(a.pathname || "/", s);
  if (u == null) return null;
  let c = Pg(n);
  cb(c);
  let f = null;
  for (let p = 0; f == null && p < c.length; ++p) {
    let m = _b(u);
    f = xb(c[p], m);
  }
  return f;
}
function Pg(n, t, s, i) {
  t === void 0 && (t = []), s === void 0 && (s = []), i === void 0 && (i = "");
  let a = (u, c, f) => {
    let p = {
      relativePath: f === void 0 ? u.path || "" : f,
      caseSensitive: u.caseSensitive === !0,
      childrenIndex: c,
      route: u,
    };
    p.relativePath.startsWith("/") &&
      (Xe(
        p.relativePath.startsWith(i),
        'Absolute route path "' +
          p.relativePath +
          '" nested under path ' +
          ('"' + i + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (p.relativePath = p.relativePath.slice(i.length)));
    let m = Pr([i, p.relativePath]),
      g = s.concat(p);
    u.children &&
      u.children.length > 0 &&
      (Xe(
        u.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + m + '".')
      ),
      Pg(u.children, t, g, m)),
      !(u.path == null && !u.index) &&
        t.push({ path: m, score: yb(m, u.index), routesMeta: g });
  };
  return (
    n.forEach((u, c) => {
      var f;
      if (u.path === "" || !((f = u.path) != null && f.includes("?"))) a(u, c);
      else for (let p of Og(u.path)) a(u, c, p);
    }),
    t
  );
}
function Og(n) {
  let t = n.split("/");
  if (t.length === 0) return [];
  let [s, ...i] = t,
    a = s.endsWith("?"),
    u = s.replace(/\?$/, "");
  if (i.length === 0) return a ? [u, ""] : [u];
  let c = Og(i.join("/")),
    f = [];
  return (
    f.push(...c.map((p) => (p === "" ? u : [u, p].join("/")))),
    a && f.push(...c),
    f.map((p) => (n.startsWith("/") && p === "" ? "/" : p))
  );
}
function cb(n) {
  n.sort((t, s) =>
    t.score !== s.score
      ? s.score - t.score
      : vb(
          t.routesMeta.map((i) => i.childrenIndex),
          s.routesMeta.map((i) => i.childrenIndex)
        )
  );
}
const db = /^:[\w-]+$/,
  fb = 3,
  hb = 2,
  pb = 1,
  mb = 10,
  gb = -2,
  Tp = (n) => n === "*";
function yb(n, t) {
  let s = n.split("/"),
    i = s.length;
  return (
    s.some(Tp) && (i += gb),
    t && (i += hb),
    s
      .filter((a) => !Tp(a))
      .reduce((a, u) => a + (db.test(u) ? fb : u === "" ? pb : mb), i)
  );
}
function vb(n, t) {
  return n.length === t.length && n.slice(0, -1).every((i, a) => i === t[a])
    ? n[n.length - 1] - t[t.length - 1]
    : 0;
}
function xb(n, t, s) {
  let { routesMeta: i } = n,
    a = {},
    u = "/",
    c = [];
  for (let f = 0; f < i.length; ++f) {
    let p = i[f],
      m = f === i.length - 1,
      g = u === "/" ? t : t.slice(u.length) || "/",
      x = mc(
        { path: p.relativePath, caseSensitive: p.caseSensitive, end: m },
        g
      ),
      S = p.route;
    if (!x) return null;
    Object.assign(a, x.params),
      c.push({
        params: a,
        pathname: Pr([u, x.pathname]),
        pathnameBase: Eb(Pr([u, x.pathnameBase])),
        route: S,
      }),
      x.pathnameBase !== "/" && (u = Pr([u, x.pathnameBase]));
  }
  return c;
}
function mc(n, t) {
  typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 });
  let [s, i] = wb(n.path, n.caseSensitive, n.end),
    a = t.match(s);
  if (!a) return null;
  let u = a[0],
    c = u.replace(/(.)\/+$/, "$1"),
    f = a.slice(1);
  return {
    params: i.reduce((m, g, x) => {
      let { paramName: S, isOptional: w } = g;
      if (S === "*") {
        let _ = f[x] || "";
        c = u.slice(0, u.length - _.length).replace(/(.)\/+$/, "$1");
      }
      const E = f[x];
      return (
        w && !E ? (m[S] = void 0) : (m[S] = (E || "").replace(/%2F/g, "/")), m
      );
    }, {}),
    pathname: u,
    pathnameBase: c,
    pattern: n,
  };
}
function wb(n, t, s) {
  t === void 0 && (t = !1),
    s === void 0 && (s = !0),
    Rg(
      n === "*" || !n.endsWith("*") || n.endsWith("/*"),
      'Route path "' +
        n +
        '" will be treated as if it were ' +
        ('"' + n.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + n.replace(/\*$/, "/*") + '".')
    );
  let i = [],
    a =
      "^" +
      n
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (c, f, p) => (
            i.push({ paramName: f, isOptional: p != null }),
            p ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    n.endsWith("*")
      ? (i.push({ paramName: "*" }),
        (a += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : s
      ? (a += "\\/*$")
      : n !== "" && n !== "/" && (a += "(?:(?=\\/|$))"),
    [new RegExp(a, t ? void 0 : "i"), i]
  );
}
function _b(n) {
  try {
    return n
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Rg(
        !1,
        'The URL path "' +
          n +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      n
    );
  }
}
function zs(n, t) {
  if (t === "/") return n;
  if (!n.toLowerCase().startsWith(t.toLowerCase())) return null;
  let s = t.endsWith("/") ? t.length - 1 : t.length,
    i = n.charAt(s);
  return i && i !== "/" ? null : n.slice(s) || "/";
}
function bb(n, t) {
  t === void 0 && (t = "/");
  let {
    pathname: s,
    search: i = "",
    hash: a = "",
  } = typeof n == "string" ? Qs(n) : n;
  return {
    pathname: s ? (s.startsWith("/") ? s : Sb(s, t)) : t,
    search: Cb(i),
    hash: Tb(a),
  };
}
function Sb(n, t) {
  let s = t.replace(/\/+$/, "").split("/");
  return (
    n.split("/").forEach((a) => {
      a === ".." ? s.length > 1 && s.pop() : a !== "." && s.push(a);
    }),
    s.length > 1 ? s.join("/") : "/"
  );
}
function Qu(n, t, s, i) {
  return (
    "Cannot include a '" +
    n +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(i) +
      "].  Please separate it out to the ") +
    ("`to." + s + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function kb(n) {
  return n.filter(
    (t, s) => s === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Ag(n, t) {
  let s = kb(n);
  return t
    ? s.map((i, a) => (a === s.length - 1 ? i.pathname : i.pathnameBase))
    : s.map((i) => i.pathnameBase);
}
function jg(n, t, s, i) {
  i === void 0 && (i = !1);
  let a;
  typeof n == "string"
    ? (a = Qs(n))
    : ((a = Vi({}, n)),
      Xe(
        !a.pathname || !a.pathname.includes("?"),
        Qu("?", "pathname", "search", a)
      ),
      Xe(
        !a.pathname || !a.pathname.includes("#"),
        Qu("#", "pathname", "hash", a)
      ),
      Xe(!a.search || !a.search.includes("#"), Qu("#", "search", "hash", a)));
  let u = n === "" || a.pathname === "",
    c = u ? "/" : a.pathname,
    f;
  if (c == null) f = s;
  else {
    let x = t.length - 1;
    if (!i && c.startsWith("..")) {
      let S = c.split("/");
      for (; S[0] === ".."; ) S.shift(), (x -= 1);
      a.pathname = S.join("/");
    }
    f = x >= 0 ? t[x] : "/";
  }
  let p = bb(a, f),
    m = c && c !== "/" && c.endsWith("/"),
    g = (u || c === ".") && s.endsWith("/");
  return !p.pathname.endsWith("/") && (m || g) && (p.pathname += "/"), p;
}
const Pr = (n) => n.join("/").replace(/\/\/+/g, "/"),
  Eb = (n) => n.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Cb = (n) => (!n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n),
  Tb = (n) => (!n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n);
function Nb(n) {
  return (
    n != null &&
    typeof n.status == "number" &&
    typeof n.statusText == "string" &&
    typeof n.internal == "boolean" &&
    "data" in n
  );
}
const Lg = ["post", "put", "patch", "delete"];
new Set(Lg);
const Rb = ["get", ...Lg];
new Set(Rb);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Wi() {
  return (
    (Wi = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var t = 1; t < arguments.length; t++) {
            var s = arguments[t];
            for (var i in s)
              Object.prototype.hasOwnProperty.call(s, i) && (n[i] = s[i]);
          }
          return n;
        }),
    Wi.apply(this, arguments)
  );
}
const Ka = k.createContext(null),
  Mg = k.createContext(null),
  zr = k.createContext(null),
  Ya = k.createContext(null),
  as = k.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Ig = k.createContext(null);
function Pb(n, t) {
  let { relative: s } = t === void 0 ? {} : t;
  Ji() || Xe(!1);
  let { basename: i, navigator: a } = k.useContext(zr),
    { hash: u, pathname: c, search: f } = Ga(n, { relative: s }),
    p = c;
  return (
    i !== "/" && (p = c === "/" ? i : Pr([i, c])),
    a.createHref({ pathname: p, search: f, hash: u })
  );
}
function Ji() {
  return k.useContext(Ya) != null;
}
function Zs() {
  return Ji() || Xe(!1), k.useContext(Ya).location;
}
function Dg(n) {
  k.useContext(zr).static || k.useLayoutEffect(n);
}
function Ob() {
  let { isDataRoute: n } = k.useContext(as);
  return n ? Wb() : Ab();
}
function Ab() {
  Ji() || Xe(!1);
  let n = k.useContext(Ka),
    { basename: t, future: s, navigator: i } = k.useContext(zr),
    { matches: a } = k.useContext(as),
    { pathname: u } = Zs(),
    c = JSON.stringify(Ag(a, s.v7_relativeSplatPath)),
    f = k.useRef(!1);
  return (
    Dg(() => {
      f.current = !0;
    }),
    k.useCallback(
      function (m, g) {
        if ((g === void 0 && (g = {}), !f.current)) return;
        if (typeof m == "number") {
          i.go(m);
          return;
        }
        let x = jg(m, JSON.parse(c), u, g.relative === "path");
        n == null &&
          t !== "/" &&
          (x.pathname = x.pathname === "/" ? t : Pr([t, x.pathname])),
          (g.replace ? i.replace : i.push)(x, g.state, g);
      },
      [t, i, c, u, n]
    )
  );
}
function Ga(n, t) {
  let { relative: s } = t === void 0 ? {} : t,
    { future: i } = k.useContext(zr),
    { matches: a } = k.useContext(as),
    { pathname: u } = Zs(),
    c = JSON.stringify(Ag(a, i.v7_relativeSplatPath));
  return k.useMemo(() => jg(n, JSON.parse(c), u, s === "path"), [n, c, u, s]);
}
function jb(n, t) {
  return Lb(n, t);
}
function Lb(n, t, s, i) {
  Ji() || Xe(!1);
  let { navigator: a } = k.useContext(zr),
    { matches: u } = k.useContext(as),
    c = u[u.length - 1],
    f = c ? c.params : {};
  c && c.pathname;
  let p = c ? c.pathnameBase : "/";
  c && c.route;
  let m = Zs(),
    g;
  if (t) {
    var x;
    let b = typeof t == "string" ? Qs(t) : t;
    p === "/" || ((x = b.pathname) != null && x.startsWith(p)) || Xe(!1),
      (g = b);
  } else g = m;
  let S = g.pathname || "/",
    w = S;
  if (p !== "/") {
    let b = p.replace(/^\//, "").split("/");
    w = "/" + S.replace(/^\//, "").split("/").slice(b.length).join("/");
  }
  let E = lb(n, { pathname: w }),
    _ = zb(
      E &&
        E.map((b) =>
          Object.assign({}, b, {
            params: Object.assign({}, f, b.params),
            pathname: Pr([
              p,
              a.encodeLocation
                ? a.encodeLocation(b.pathname).pathname
                : b.pathname,
            ]),
            pathnameBase:
              b.pathnameBase === "/"
                ? p
                : Pr([
                    p,
                    a.encodeLocation
                      ? a.encodeLocation(b.pathnameBase).pathname
                      : b.pathnameBase,
                  ]),
          })
        ),
      u,
      s,
      i
    );
  return t && _
    ? k.createElement(
        Ya.Provider,
        {
          value: {
            location: Wi(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              g
            ),
            navigationType: Nr.Pop,
          },
        },
        _
      )
    : _;
}
function Mb() {
  let n = Vb(),
    t = Nb(n)
      ? n.status + " " + n.statusText
      : n instanceof Error
      ? n.message
      : JSON.stringify(n),
    s = n instanceof Error ? n.stack : null,
    a = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return k.createElement(
    k.Fragment,
    null,
    k.createElement("h2", null, "Unexpected Application Error!"),
    k.createElement("h3", { style: { fontStyle: "italic" } }, t),
    s ? k.createElement("pre", { style: a }, s) : null,
    null
  );
}
const Ib = k.createElement(Mb, null);
class Db extends k.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, s) {
    return s.location !== t.location ||
      (s.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : s.error,
          location: s.location,
          revalidation: t.revalidation || s.revalidation,
        };
  }
  componentDidCatch(t, s) {
    console.error(
      "React Router caught the following error during render",
      t,
      s
    );
  }
  render() {
    return this.state.error !== void 0
      ? k.createElement(
          as.Provider,
          { value: this.props.routeContext },
          k.createElement(Ig.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Fb(n) {
  let { routeContext: t, match: s, children: i } = n,
    a = k.useContext(Ka);
  return (
    a &&
      a.static &&
      a.staticContext &&
      (s.route.errorElement || s.route.ErrorBoundary) &&
      (a.staticContext._deepestRenderedBoundaryId = s.route.id),
    k.createElement(as.Provider, { value: t }, i)
  );
}
function zb(n, t, s, i) {
  var a;
  if (
    (t === void 0 && (t = []),
    s === void 0 && (s = null),
    i === void 0 && (i = null),
    n == null)
  ) {
    var u;
    if (!s) return null;
    if (s.errors) n = s.matches;
    else if (
      (u = i) != null &&
      u.v7_partialHydration &&
      t.length === 0 &&
      !s.initialized &&
      s.matches.length > 0
    )
      n = s.matches;
    else return null;
  }
  let c = n,
    f = (a = s) == null ? void 0 : a.errors;
  if (f != null) {
    let g = c.findIndex((x) => x.route.id && f?.[x.route.id] !== void 0);
    g >= 0 || Xe(!1), (c = c.slice(0, Math.min(c.length, g + 1)));
  }
  let p = !1,
    m = -1;
  if (s && i && i.v7_partialHydration)
    for (let g = 0; g < c.length; g++) {
      let x = c[g];
      if (
        ((x.route.HydrateFallback || x.route.hydrateFallbackElement) && (m = g),
        x.route.id)
      ) {
        let { loaderData: S, errors: w } = s,
          E =
            x.route.loader &&
            S[x.route.id] === void 0 &&
            (!w || w[x.route.id] === void 0);
        if (x.route.lazy || E) {
          (p = !0), m >= 0 ? (c = c.slice(0, m + 1)) : (c = [c[0]]);
          break;
        }
      }
    }
  return c.reduceRight((g, x, S) => {
    let w,
      E = !1,
      _ = null,
      b = null;
    s &&
      ((w = f && x.route.id ? f[x.route.id] : void 0),
      (_ = x.route.errorElement || Ib),
      p &&
        (m < 0 && S === 0
          ? (Hb("route-fallback"), (E = !0), (b = null))
          : m === S &&
            ((E = !0), (b = x.route.hydrateFallbackElement || null))));
    let T = t.concat(c.slice(0, S + 1)),
      N = () => {
        let A;
        return (
          w
            ? (A = _)
            : E
            ? (A = b)
            : x.route.Component
            ? (A = k.createElement(x.route.Component, null))
            : x.route.element
            ? (A = x.route.element)
            : (A = g),
          k.createElement(Fb, {
            match: x,
            routeContext: { outlet: g, matches: T, isDataRoute: s != null },
            children: A,
          })
        );
      };
    return s && (x.route.ErrorBoundary || x.route.errorElement || S === 0)
      ? k.createElement(Db, {
          location: s.location,
          revalidation: s.revalidation,
          component: _,
          error: w,
          children: N(),
          routeContext: { outlet: null, matches: T, isDataRoute: !0 },
        })
      : N();
  }, null);
}
var Fg = (function (n) {
    return (
      (n.UseBlocker = "useBlocker"),
      (n.UseRevalidator = "useRevalidator"),
      (n.UseNavigateStable = "useNavigate"),
      n
    );
  })(Fg || {}),
  zg = (function (n) {
    return (
      (n.UseBlocker = "useBlocker"),
      (n.UseLoaderData = "useLoaderData"),
      (n.UseActionData = "useActionData"),
      (n.UseRouteError = "useRouteError"),
      (n.UseNavigation = "useNavigation"),
      (n.UseRouteLoaderData = "useRouteLoaderData"),
      (n.UseMatches = "useMatches"),
      (n.UseRevalidator = "useRevalidator"),
      (n.UseNavigateStable = "useNavigate"),
      (n.UseRouteId = "useRouteId"),
      n
    );
  })(zg || {});
function Bb(n) {
  let t = k.useContext(Ka);
  return t || Xe(!1), t;
}
function $b(n) {
  let t = k.useContext(Mg);
  return t || Xe(!1), t;
}
function Ub(n) {
  let t = k.useContext(as);
  return t || Xe(!1), t;
}
function Bg(n) {
  let t = Ub(),
    s = t.matches[t.matches.length - 1];
  return s.route.id || Xe(!1), s.route.id;
}
function Vb() {
  var n;
  let t = k.useContext(Ig),
    s = $b(),
    i = Bg();
  return t !== void 0 ? t : (n = s.errors) == null ? void 0 : n[i];
}
function Wb() {
  let { router: n } = Bb(Fg.UseNavigateStable),
    t = Bg(zg.UseNavigateStable),
    s = k.useRef(!1);
  return (
    Dg(() => {
      s.current = !0;
    }),
    k.useCallback(
      function (a, u) {
        u === void 0 && (u = {}),
          s.current &&
            (typeof a == "number"
              ? n.navigate(a)
              : n.navigate(a, Wi({ fromRouteId: t }, u)));
      },
      [n, t]
    )
  );
}
const Np = {};
function Hb(n, t, s) {
  Np[n] || (Np[n] = !0);
}
function qb(n, t) {
  n?.v7_startTransition, n?.v7_relativeSplatPath;
}
function _n(n) {
  Xe(!1);
}
function Qb(n) {
  let {
    basename: t = "/",
    children: s = null,
    location: i,
    navigationType: a = Nr.Pop,
    navigator: u,
    static: c = !1,
    future: f,
  } = n;
  Ji() && Xe(!1);
  let p = t.replace(/^\/*/, "/"),
    m = k.useMemo(
      () => ({
        basename: p,
        navigator: u,
        static: c,
        future: Wi({ v7_relativeSplatPath: !1 }, f),
      }),
      [p, f, u, c]
    );
  typeof i == "string" && (i = Qs(i));
  let {
      pathname: g = "/",
      search: x = "",
      hash: S = "",
      state: w = null,
      key: E = "default",
    } = i,
    _ = k.useMemo(() => {
      let b = zs(g, p);
      return b == null
        ? null
        : {
            location: { pathname: b, search: x, hash: S, state: w, key: E },
            navigationType: a,
          };
    }, [p, g, x, S, w, E, a]);
  return _ == null
    ? null
    : k.createElement(
        zr.Provider,
        { value: m },
        k.createElement(Ya.Provider, { children: s, value: _ })
      );
}
function Zb(n) {
  let { children: t, location: s } = n;
  return jb(gc(t), s);
}
new Promise(() => {});
function gc(n, t) {
  t === void 0 && (t = []);
  let s = [];
  return (
    k.Children.forEach(n, (i, a) => {
      if (!k.isValidElement(i)) return;
      let u = [...t, a];
      if (i.type === k.Fragment) {
        s.push.apply(s, gc(i.props.children, u));
        return;
      }
      i.type !== _n && Xe(!1), !i.props.index || !i.props.children || Xe(!1);
      let c = {
        id: i.props.id || u.join("-"),
        caseSensitive: i.props.caseSensitive,
        element: i.props.element,
        Component: i.props.Component,
        index: i.props.index,
        path: i.props.path,
        loader: i.props.loader,
        action: i.props.action,
        errorElement: i.props.errorElement,
        ErrorBoundary: i.props.ErrorBoundary,
        hasErrorBoundary:
          i.props.ErrorBoundary != null || i.props.errorElement != null,
        shouldRevalidate: i.props.shouldRevalidate,
        handle: i.props.handle,
        lazy: i.props.lazy,
      };
      i.props.children && (c.children = gc(i.props.children, u)), s.push(c);
    }),
    s
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Pa() {
  return (
    (Pa = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var t = 1; t < arguments.length; t++) {
            var s = arguments[t];
            for (var i in s)
              Object.prototype.hasOwnProperty.call(s, i) && (n[i] = s[i]);
          }
          return n;
        }),
    Pa.apply(this, arguments)
  );
}
function $g(n, t) {
  if (n == null) return {};
  var s = {},
    i = Object.keys(n),
    a,
    u;
  for (u = 0; u < i.length; u++)
    (a = i[u]), !(t.indexOf(a) >= 0) && (s[a] = n[a]);
  return s;
}
function Kb(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function Yb(n, t) {
  return n.button === 0 && (!t || t === "_self") && !Kb(n);
}
const Gb = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  Xb = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "viewTransition",
    "children",
  ],
  Jb = "6";
try {
  window.__reactRouterVersion = Jb;
} catch {}
const eS = k.createContext({ isTransitioning: !1 }),
  tS = "startTransition",
  Rp = im[tS];
function nS(n) {
  let { basename: t, children: s, future: i, window: a } = n,
    u = k.useRef();
  u.current == null && (u.current = ib({ window: a, v5Compat: !0 }));
  let c = u.current,
    [f, p] = k.useState({ action: c.action, location: c.location }),
    { v7_startTransition: m } = i || {},
    g = k.useCallback(
      (x) => {
        m && Rp ? Rp(() => p(x)) : p(x);
      },
      [p, m]
    );
  return (
    k.useLayoutEffect(() => c.listen(g), [c, g]),
    k.useEffect(() => qb(i), [i]),
    k.createElement(Qb, {
      basename: t,
      children: s,
      location: f.location,
      navigationType: f.action,
      navigator: c,
      future: i,
    })
  );
}
const rS =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  sS = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  iS = k.forwardRef(function (t, s) {
    let {
        onClick: i,
        relative: a,
        reloadDocument: u,
        replace: c,
        state: f,
        target: p,
        to: m,
        preventScrollReset: g,
        viewTransition: x,
      } = t,
      S = $g(t, Gb),
      { basename: w } = k.useContext(zr),
      E,
      _ = !1;
    if (typeof m == "string" && sS.test(m) && ((E = m), rS))
      try {
        let A = new URL(window.location.href),
          M = m.startsWith("//") ? new URL(A.protocol + m) : new URL(m),
          B = zs(M.pathname, w);
        M.origin === A.origin && B != null
          ? (m = B + M.search + M.hash)
          : (_ = !0);
      } catch {}
    let b = Pb(m, { relative: a }),
      T = aS(m, {
        replace: c,
        state: f,
        target: p,
        preventScrollReset: g,
        relative: a,
        viewTransition: x,
      });
    function N(A) {
      i && i(A), A.defaultPrevented || T(A);
    }
    return k.createElement(
      "a",
      Pa({}, S, { href: E || b, onClick: _ || u ? i : N, ref: s, target: p })
    );
  }),
  Is = k.forwardRef(function (t, s) {
    let {
        "aria-current": i = "page",
        caseSensitive: a = !1,
        className: u = "",
        end: c = !1,
        style: f,
        to: p,
        viewTransition: m,
        children: g,
      } = t,
      x = $g(t, Xb),
      S = Ga(p, { relative: x.relative }),
      w = Zs(),
      E = k.useContext(Mg),
      { navigator: _, basename: b } = k.useContext(zr),
      T = E != null && lS(S) && m === !0,
      N = _.encodeLocation ? _.encodeLocation(S).pathname : S.pathname,
      A = w.pathname,
      M =
        E && E.navigation && E.navigation.location
          ? E.navigation.location.pathname
          : null;
    a ||
      ((A = A.toLowerCase()),
      (M = M ? M.toLowerCase() : null),
      (N = N.toLowerCase())),
      M && b && (M = zs(M, b) || M);
    const B = N !== "/" && N.endsWith("/") ? N.length - 1 : N.length;
    let U = A === N || (!c && A.startsWith(N) && A.charAt(B) === "/"),
      $ =
        M != null &&
        (M === N || (!c && M.startsWith(N) && M.charAt(N.length) === "/")),
      K = { isActive: U, isPending: $, isTransitioning: T },
      te = U ? i : void 0,
      re;
    typeof u == "function"
      ? (re = u(K))
      : (re = [
          u,
          U ? "active" : null,
          $ ? "pending" : null,
          T ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let se = typeof f == "function" ? f(K) : f;
    return k.createElement(
      iS,
      Pa({}, x, {
        "aria-current": te,
        className: re,
        ref: s,
        style: se,
        to: p,
        viewTransition: m,
      }),
      typeof g == "function" ? g(K) : g
    );
  });
var yc;
(function (n) {
  (n.UseScrollRestoration = "useScrollRestoration"),
    (n.UseSubmit = "useSubmit"),
    (n.UseSubmitFetcher = "useSubmitFetcher"),
    (n.UseFetcher = "useFetcher"),
    (n.useViewTransitionState = "useViewTransitionState");
})(yc || (yc = {}));
var Pp;
(function (n) {
  (n.UseFetcher = "useFetcher"),
    (n.UseFetchers = "useFetchers"),
    (n.UseScrollRestoration = "useScrollRestoration");
})(Pp || (Pp = {}));
function oS(n) {
  let t = k.useContext(Ka);
  return t || Xe(!1), t;
}
function aS(n, t) {
  let {
      target: s,
      replace: i,
      state: a,
      preventScrollReset: u,
      relative: c,
      viewTransition: f,
    } = t === void 0 ? {} : t,
    p = Ob(),
    m = Zs(),
    g = Ga(n, { relative: c });
  return k.useCallback(
    (x) => {
      if (Yb(x, s)) {
        x.preventDefault();
        let S = i !== void 0 ? i : Ra(m) === Ra(g);
        p(n, {
          replace: S,
          state: a,
          preventScrollReset: u,
          relative: c,
          viewTransition: f,
        });
      }
    },
    [m, p, g, i, a, s, n, u, c, f]
  );
}
function lS(n, t) {
  t === void 0 && (t = {});
  let s = k.useContext(eS);
  s == null && Xe(!1);
  let { basename: i } = oS(yc.useViewTransitionState),
    a = Ga(n, { relative: t.relative });
  if (!s.isTransitioning) return !1;
  let u = zs(s.currentLocation.pathname, i) || s.currentLocation.pathname,
    c = zs(s.nextLocation.pathname, i) || s.nextLocation.pathname;
  return mc(a.pathname, c) != null || mc(a.pathname, u) != null;
}
const uS = () => {
  const n = Zs();
  return (
    k.useEffect(() => {
      console.error(
        "404 Error: User attempted to access non-existent route:",
        n.pathname
      );
    }, [n.pathname]),
    v.jsx("div", {
      className: "min-h-screen flex items-center justify-center bg-gray-100",
      children: v.jsxs("div", {
        className: "text-center",
        children: [
          v.jsx("h1", {
            className: "text-4xl font-bold mb-4",
            children: "404",
          }),
          v.jsx("p", {
            className: "text-xl text-gray-600 mb-4",
            children: "Oops! Page not found",
          }),
          v.jsx("a", {
            href: "/",
            className: "text-blue-500 hover:text-blue-700 underline",
            children: "Return to Home",
          }),
        ],
      }),
    })
  );
};
function Op({ variant: n }) {
  const t = [
    { to: "/", label: "Accueil", icon: wx },
    { to: "/poser-une-question", label: "Questions", icon: px },
    { to: "/reportages", label: "Reportages", icon: vx },
    { to: "/a-propos", label: "À propos", icon: bx },
  ];
  if (n === "top")
    return v.jsx("header", {
      className: "sticky top-0 z-40 backdrop-blur bg-background/60 border-b",
      children: v.jsxs("div", {
        className: "container mx-auto flex items-center justify-between py-3",
        children: [
          v.jsx(Is, { to: "/", className: "group", children: v.jsx(cS, {}) }),
          v.jsx("nav", {
            className: "hidden md:flex gap-6 text-sm",
            children: t.map((i) =>
              v.jsx(
                Is,
                {
                  to: i.to,
                  className: ({ isActive: a }) =>
                    `a-underline transition-colors ${
                      a ? "text-primary font-semibold" : "text-foreground"
                    }`,
                  children: i.label,
                },
                i.to
              )
            ),
          }),
        ],
      }),
    });
  const s = [t[0], t[1], t[2], t[3]];
  return v.jsx("nav", {
    className:
      "mobile-nav md:hidden fixed bottom-0 left-0 right-0 z-40 border-t bg-background/85 backdrop-blur h-[calc(84px+env(safe-area-inset-bottom))] pb-[env(safe-area-inset-bottom)]",
    children: v.jsx("div", {
      className: "grid grid-cols-4 h-full",
      children: s.map((i) => {
        const a = i.icon;
        return v.jsxs(
          Is,
          {
            to: i.to,
            className: ({ isActive: u }) =>
              `flex flex-col items-center py-2.5 text-[11px] leading-4 ${
                u ? "text-primary" : "text-muted-foreground"
              }`,
            children: [
              v.jsx(a, {
                className:
                  "nav-ico h-5 w-5 transition-transform duration-150 group-hover:scale-110",
              }),
              v.jsx("span", {
                className: "mt-1 whitespace-nowrap",
                children: i.label,
              }),
            ],
          },
          i.to
        );
      }),
    }),
  });
}
function cS() {
  return v.jsxs("div", {
    className:
      "flex items-center gap-2 transition drop-shadow-none group-hover:drop-shadow-[0_0_20px_rgba(230,57,70,0.4)]",
    children: [
      v.jsx("div", {
        className:
          "h-8 w-8 rounded bg-gradient-to-br from-red-500 to-red-700 animate-pulse shadow-[0_0_25px_rgba(239,68,68,0.6)] relative overflow-hidden",
        children: v.jsx("span", {
          className:
            "absolute inset-x-0 top-0 h-0.5 bg-white/70 animate-[scan_1.2s_linear_infinite]",
        }),
      }),
      v.jsxs("span", {
        className: "heading tracking-widest text-xl",
        children: [
          v.jsx("span", { className: "text-primary", children: "CODE" }),
          " ",
          v.jsx("span", { className: "text-foreground", children: "ROUGE" }),
        ],
      }),
    ],
  });
}
function dS() {
  return v.jsx("footer", {
    className: "border-t mt-10",
    children: v.jsxs("div", {
      className:
        "container mx-auto px-4 py-8 grid md:grid-cols-4 gap-6 text-sm",
      children: [
        v.jsxs("div", {
          children: [
            v.jsxs("div", {
              className: "heading text-xl font-bold",
              children: [
                v.jsx("span", { className: "text-primary", children: "CODE" }),
                " ROUGE",
              ],
            }),
            v.jsx("p", {
              className: "text-muted-foreground mt-2",
              children:
                "© 2025 CODE ROUGE Productions • Design et développement : Louis Martignon",
            }),
          ],
        }),
        v.jsxs("div", {
          children: [
            v.jsx("div", { className: "font-semibold", children: "Contact" }),
            v.jsx("a", {
              href: "mailto:contact@lmart.frstud.fr",
              className: "a-underline",
              children: "contact@lmart.frstud.fr",
            }),
          ],
        }),
        v.jsxs("div", {
          children: [
            v.jsx("div", { className: "font-semibold", children: "Pages" }),
            v.jsxs("div", {
              className: "mt-2 grid gap-1",
              children: [
                v.jsx("a", {
                  href: "/mentions-legales",
                  className: "a-underline",
                  children: "Mentions légales",
                }),
                v.jsx("a", {
                  href: "/a-propos",
                  className: "a-underline",
                  children: "À propos",
                }),
                v.jsx("a", {
                  href: "/plan-du-site",
                  className: "a-underline",
                  children: "Plan du site",
                }),
              ],
            }),
          ],
        }),
        v.jsxs("div", {
          children: [
            v.jsx("div", {
              className: "font-semibold",
              children: "Réseaux sociaux",
            }),
            v.jsxs("div", {
              className: "flex gap-3 mt-2 text-muted-foreground",
              children: [
                v.jsx("a", {
                  href: "https://www.facebook.com/csnd58/?locale=fr_FR",
                  target: "_blank",
                  rel: "noreferrer",
                  "aria-label": "Facebook",
                  className: "hover:text-primary",
                  children: v.jsx(gx, { className: "w-5 h-5" }),
                }),
                v.jsx("a", {
                  href: "https://www.instagram.com/csndnevers?igsh=YjFnb3o1b3BhM3V5",
                  target: "_blank",
                  rel: "noreferrer",
                  "aria-label": "Instagram",
                  className: "hover:text-primary",
                  children: v.jsx(kx, { className: "w-5 h-5" }),
                }),
                v.jsx("a", {
                  href: "https://www.tiktok.com/@csndlgtnevers?is_from_webapp=1&sender_device=pc",
                  target: "_blank",
                  rel: "noreferrer",
                  "aria-label": "TikTok",
                  className: "hover:text-primary",
                  children: v.jsx("svg", {
                    viewBox: "0 0 256 256",
                    className: "w-5 h-5 fill-current",
                    children: v.jsx("path", {
                      d: "M201.5 80.8c-19.3-8.9-34.1-24.1-41.8-42.5h-.2v136.1c0 29.6-24 53.6-53.6 53.6S52.3 203.9 52.3 174.4s24-53.6 53.6-53.6c3.7 0 7.3.4 10.8 1.2v28.9c-3.3-1.8-7.1-2.8-11.1-2.8-12.9 0-23.3 10.5-23.3 23.3s10.5 23.3 23.3 23.3 23.3-10.5 23.3-23.3V24h28.3c6.7 21.1 23.8 38.9 45.8 46.9v9.9z",
                    }),
                  }),
                }),
                v.jsx("a", {
                  href: "https://www.csnd58.fr/",
                  target: "_blank",
                  rel: "noreferrer",
                  "aria-label": "CSND",
                  className: "hover:text-primary",
                  children: v.jsx(Cx, { className: "w-5 h-5" }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function fS() {
  if (typeof window > "u") return;
  const n = Array.from(document.querySelectorAll(".reveal"));
  if (!("IntersectionObserver" in window) || n.length === 0) return;
  const t = new IntersectionObserver(
    (s) => {
      for (const i of s) i.isIntersecting && i.target.classList.add("in-view");
    },
    { threshold: 0.15 }
  );
  return n.forEach((s) => t.observe(s)), () => t.disconnect();
}
function hS() {
  const [n, t] = k.useState(!1);
  return (
    k.useEffect(() => {
      let s = window.scrollY,
        i = !1;
      const a = () => {
        i ||
          ((i = !0),
          requestAnimationFrame(() => {
            const u = window.scrollY,
              c = u - s;
            c > 5 ? t(!0) : c < -5 && t(!1), (s = u), (i = !1);
          }));
      };
      return (
        window.addEventListener("scroll", a, { passive: !0 }),
        () => window.removeEventListener("scroll", a)
      );
    }, []),
    v.jsx("header", {
      className: `md:hidden sticky top-0 z-40 backdrop-blur bg-background/60 border-b transition-all duration-300 ease-in-out ${
        n ? "h-12" : "h-20"
      }`,
      children: v.jsx("div", {
        className: `container mx-auto px-4 h-full flex items-center transition-all duration-300 ease-in-out ${
          n ? "justify-start" : "justify-center"
        }`,
        children: v.jsx(Is, {
          to: "/",
          className: "group",
          children: v.jsxs("div", {
            className: `relative flex items-center gap-2 transition-all duration-300 ease-in-out ${
              n ? "scale-90" : "scale-100"
            }`,
            children: [
              v.jsx("div", {
                className:
                  "h-8 w-8 rounded bg-gradient-to-br from-red-500 to-red-700 animate-pulse shadow-[0_0_25px_rgba(239,68,68,0.6)] relative overflow-hidden",
                children: v.jsx("span", {
                  className:
                    "absolute inset-x-0 top-0 h-0.5 bg-white/70 animate-[scan_1.2s_linear_infinite]",
                }),
              }),
              v.jsxs("span", {
                className: "heading tracking-widest text-xl",
                children: [
                  v.jsx("span", {
                    className: "text-primary",
                    children: "CODE",
                  }),
                  " ",
                  v.jsx("span", {
                    className: "text-foreground",
                    children: "ROUGE",
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    })
  );
}
function ls({ children: n }) {
  const [t, s] = k.useState(!1),
    [i, a] = k.useState(!0);
  return (
    k.useEffect(() => {
      const u = window.matchMedia("(max-width: 768px)"),
        c = () => s(u.matches);
      c(), u.addEventListener("change", c);
      const f = fS(),
        p = window.setTimeout(() => a(!1), 1200);
      let m;
      const g = () => {
        document.documentElement.classList.add("scrolling"),
          m && window.clearTimeout(m),
          (m = window.setTimeout(
            () => document.documentElement.classList.remove("scrolling"),
            180
          ));
      };
      return (
        window.addEventListener("scroll", g, { passive: !0 }),
        () => {
          u.removeEventListener("change", c),
            f && f(),
            window.clearTimeout(p),
            window.removeEventListener("scroll", g);
        }
      );
    }, []),
    v.jsxs("div", {
      className:
        "min-h-screen bg-background text-foreground flex flex-col bg-motif",
      children: [
        i &&
          v.jsx("div", {
            className: "preloader",
            children: v.jsxs("div", {
              className: "preloader__logo heading",
              children: [
                v.jsx("div", { className: "preloader__scan" }),
                "CODE ROUGE",
              ],
            }),
          }),
        !t && v.jsx(Op, { variant: "top" }),
        t && v.jsx(hS, {}),
        v.jsx("main", {
          className: `flex-1 ${
            t ? "pb-[calc(84px+env(safe-area-inset-bottom))]" : ""
          }`,
          children: n,
        }),
        v.jsx(dS, {}),
        t && v.jsx(Op, { variant: "bottom" }),
      ],
    })
  );
}
function pS(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
function Ap(n) {
  return pS(n) || Array.isArray(n);
}
function mS() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
function Zc(n, t) {
  const s = Object.keys(n),
    i = Object.keys(t);
  if (s.length !== i.length) return !1;
  const a = JSON.stringify(Object.keys(n.breakpoints || {})),
    u = JSON.stringify(Object.keys(t.breakpoints || {}));
  return a !== u
    ? !1
    : s.every((c) => {
        const f = n[c],
          p = t[c];
        return typeof f == "function"
          ? `${f}` == `${p}`
          : !Ap(f) || !Ap(p)
          ? f === p
          : Zc(f, p);
      });
}
function jp(n) {
  return n
    .concat()
    .sort((t, s) => (t.name > s.name ? 1 : -1))
    .map((t) => t.options);
}
function gS(n, t) {
  if (n.length !== t.length) return !1;
  const s = jp(n),
    i = jp(t);
  return s.every((a, u) => {
    const c = i[u];
    return Zc(a, c);
  });
}
function Kc(n) {
  return typeof n == "number";
}
function vc(n) {
  return typeof n == "string";
}
function Xa(n) {
  return typeof n == "boolean";
}
function Lp(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
function Ye(n) {
  return Math.abs(n);
}
function Yc(n) {
  return Math.sign(n);
}
function Fi(n, t) {
  return Ye(n - t);
}
function yS(n, t) {
  if (n === 0 || t === 0 || Ye(n) <= Ye(t)) return 0;
  const s = Fi(Ye(n), Ye(t));
  return Ye(s / n);
}
function vS(n) {
  return Math.round(n * 100) / 100;
}
function Hi(n) {
  return qi(n).map(Number);
}
function kn(n) {
  return n[eo(n)];
}
function eo(n) {
  return Math.max(0, n.length - 1);
}
function Gc(n, t) {
  return t === eo(n);
}
function Mp(n, t = 0) {
  return Array.from(Array(n), (s, i) => t + i);
}
function qi(n) {
  return Object.keys(n);
}
function Ug(n, t) {
  return [n, t].reduce(
    (s, i) => (
      qi(i).forEach((a) => {
        const u = s[a],
          c = i[a],
          f = Lp(u) && Lp(c);
        s[a] = f ? Ug(u, c) : c;
      }),
      s
    ),
    {}
  );
}
function xc(n, t) {
  return typeof t.MouseEvent < "u" && n instanceof t.MouseEvent;
}
function xS(n, t) {
  const s = { start: i, center: a, end: u };
  function i() {
    return 0;
  }
  function a(p) {
    return u(p) / 2;
  }
  function u(p) {
    return t - p;
  }
  function c(p, m) {
    return vc(n) ? s[n](p) : n(t, p, m);
  }
  return { measure: c };
}
function Qi() {
  let n = [];
  function t(a, u, c, f = { passive: !0 }) {
    let p;
    if ("addEventListener" in a)
      a.addEventListener(u, c, f), (p = () => a.removeEventListener(u, c, f));
    else {
      const m = a;
      m.addListener(c), (p = () => m.removeListener(c));
    }
    return n.push(p), i;
  }
  function s() {
    n = n.filter((a) => a());
  }
  const i = { add: t, clear: s };
  return i;
}
function wS(n, t, s, i) {
  const a = Qi(),
    u = 1e3 / 60;
  let c = null,
    f = 0,
    p = 0;
  function m() {
    a.add(n, "visibilitychange", () => {
      n.hidden && E();
    });
  }
  function g() {
    w(), a.clear();
  }
  function x(b) {
    if (!p) return;
    c || ((c = b), s(), s());
    const T = b - c;
    for (c = b, f += T; f >= u; ) s(), (f -= u);
    const N = f / u;
    i(N), p && (p = t.requestAnimationFrame(x));
  }
  function S() {
    p || (p = t.requestAnimationFrame(x));
  }
  function w() {
    t.cancelAnimationFrame(p), (c = null), (f = 0), (p = 0);
  }
  function E() {
    (c = null), (f = 0);
  }
  return { init: m, destroy: g, start: S, stop: w, update: s, render: i };
}
function _S(n, t) {
  const s = t === "rtl",
    i = n === "y",
    a = i ? "y" : "x",
    u = i ? "x" : "y",
    c = !i && s ? -1 : 1,
    f = g(),
    p = x();
  function m(E) {
    const { height: _, width: b } = E;
    return i ? _ : b;
  }
  function g() {
    return i ? "top" : s ? "right" : "left";
  }
  function x() {
    return i ? "bottom" : s ? "left" : "right";
  }
  function S(E) {
    return E * c;
  }
  return {
    scroll: a,
    cross: u,
    startEdge: f,
    endEdge: p,
    measureSize: m,
    direction: S,
  };
}
function ss(n = 0, t = 0) {
  const s = Ye(n - t);
  function i(m) {
    return m < n;
  }
  function a(m) {
    return m > t;
  }
  function u(m) {
    return i(m) || a(m);
  }
  function c(m) {
    return u(m) ? (i(m) ? n : t) : m;
  }
  function f(m) {
    return s ? m - s * Math.ceil((m - t) / s) : m;
  }
  return {
    length: s,
    max: t,
    min: n,
    constrain: c,
    reachedAny: u,
    reachedMax: a,
    reachedMin: i,
    removeOffset: f,
  };
}
function Vg(n, t, s) {
  const { constrain: i } = ss(0, n),
    a = n + 1;
  let u = c(t);
  function c(S) {
    return s ? Ye((a + S) % a) : i(S);
  }
  function f() {
    return u;
  }
  function p(S) {
    return (u = c(S)), x;
  }
  function m(S) {
    return g().set(f() + S);
  }
  function g() {
    return Vg(n, f(), s);
  }
  const x = { get: f, set: p, add: m, clone: g };
  return x;
}
function bS(n, t, s, i, a, u, c, f, p, m, g, x, S, w, E, _, b, T, N) {
  const { cross: A, direction: M } = n,
    B = ["INPUT", "SELECT", "TEXTAREA"],
    U = { passive: !1 },
    $ = Qi(),
    K = Qi(),
    te = ss(50, 225).constrain(w.measure(20)),
    re = { mouse: 300, touch: 400 },
    se = { mouse: 500, touch: 600 },
    X = E ? 43 : 25;
  let ye = !1,
    V = 0,
    ge = 0,
    ae = !1,
    ne = !1,
    F = !1,
    z = !1;
  function W(ce) {
    if (!N) return;
    function Re(tt) {
      (Xa(N) || N(ce, tt)) && Se(tt);
    }
    const Ue = t;
    $.add(Ue, "dragstart", (tt) => tt.preventDefault(), U)
      .add(Ue, "touchmove", () => {}, U)
      .add(Ue, "touchend", () => {})
      .add(Ue, "touchstart", Re)
      .add(Ue, "mousedown", Re)
      .add(Ue, "touchcancel", xe)
      .add(Ue, "contextmenu", xe)
      .add(Ue, "click", Te, !0);
  }
  function P() {
    $.clear(), K.clear();
  }
  function D() {
    const ce = z ? s : t;
    K.add(ce, "touchmove", le, U)
      .add(ce, "touchend", xe)
      .add(ce, "mousemove", le, U)
      .add(ce, "mouseup", xe);
  }
  function J(ce) {
    const Re = ce.nodeName || "";
    return B.includes(Re);
  }
  function ee() {
    return (E ? se : re)[z ? "mouse" : "touch"];
  }
  function ve(ce, Re) {
    const Ue = x.add(Yc(ce) * -1),
      tt = g.byDistance(ce, !E).distance;
    return E || Ye(ce) < te
      ? tt
      : b && Re
      ? tt * 0.5
      : g.byIndex(Ue.get(), 0).distance;
  }
  function Se(ce) {
    const Re = xc(ce, i);
    (z = Re),
      (F = E && Re && !ce.buttons && ye),
      (ye = Fi(a.get(), c.get()) >= 2),
      !(Re && ce.button !== 0) &&
        (J(ce.target) ||
          ((ae = !0),
          u.pointerDown(ce),
          m.useFriction(0).useDuration(0),
          a.set(c),
          D(),
          (V = u.readPoint(ce)),
          (ge = u.readPoint(ce, A)),
          S.emit("pointerDown")));
  }
  function le(ce) {
    if (!xc(ce, i) && ce.touches.length >= 2) return xe(ce);
    const Ue = u.readPoint(ce),
      tt = u.readPoint(ce, A),
      yt = Fi(Ue, V),
      St = Fi(tt, ge);
    if (!ne && !z && (!ce.cancelable || ((ne = yt > St), !ne))) return xe(ce);
    const Nt = u.pointerMove(ce);
    yt > _ && (F = !0),
      m.useFriction(0.3).useDuration(0.75),
      f.start(),
      a.add(M(Nt)),
      ce.preventDefault();
  }
  function xe(ce) {
    const Ue = g.byDistance(0, !1).index !== x.get(),
      tt = u.pointerUp(ce) * ee(),
      yt = ve(M(tt), Ue),
      St = yS(tt, yt),
      Nt = X - 10 * St,
      Rt = T + St / 50;
    (ne = !1),
      (ae = !1),
      K.clear(),
      m.useDuration(Nt).useFriction(Rt),
      p.distance(yt, !E),
      (z = !1),
      S.emit("pointerUp");
  }
  function Te(ce) {
    F && (ce.stopPropagation(), ce.preventDefault(), (F = !1));
  }
  function Me() {
    return ae;
  }
  return { init: W, destroy: P, pointerDown: Me };
}
function SS(n, t) {
  let i, a;
  function u(x) {
    return x.timeStamp;
  }
  function c(x, S) {
    const E = `client${(S || n.scroll) === "x" ? "X" : "Y"}`;
    return (xc(x, t) ? x : x.touches[0])[E];
  }
  function f(x) {
    return (i = x), (a = x), c(x);
  }
  function p(x) {
    const S = c(x) - c(a),
      w = u(x) - u(i) > 170;
    return (a = x), w && (i = x), S;
  }
  function m(x) {
    if (!i || !a) return 0;
    const S = c(a) - c(i),
      w = u(x) - u(i),
      E = u(x) - u(a) > 170,
      _ = S / w;
    return w && !E && Ye(_) > 0.1 ? _ : 0;
  }
  return { pointerDown: f, pointerMove: p, pointerUp: m, readPoint: c };
}
function kS() {
  function n(s) {
    const { offsetTop: i, offsetLeft: a, offsetWidth: u, offsetHeight: c } = s;
    return {
      top: i,
      right: a + u,
      bottom: i + c,
      left: a,
      width: u,
      height: c,
    };
  }
  return { measure: n };
}
function ES(n) {
  function t(i) {
    return n * (i / 100);
  }
  return { measure: t };
}
function CS(n, t, s, i, a, u, c) {
  const f = [n].concat(i);
  let p,
    m,
    g = [],
    x = !1;
  function S(b) {
    return a.measureSize(c.measure(b));
  }
  function w(b) {
    if (!u) return;
    (m = S(n)), (g = i.map(S));
    function T(N) {
      for (const A of N) {
        if (x) return;
        const M = A.target === n,
          B = i.indexOf(A.target),
          U = M ? m : g[B],
          $ = S(M ? n : i[B]);
        if (Ye($ - U) >= 0.5) {
          b.reInit(), t.emit("resize");
          break;
        }
      }
    }
    (p = new ResizeObserver((N) => {
      (Xa(u) || u(b, N)) && T(N);
    })),
      s.requestAnimationFrame(() => {
        f.forEach((N) => p.observe(N));
      });
  }
  function E() {
    (x = !0), p && p.disconnect();
  }
  return { init: w, destroy: E };
}
function TS(n, t, s, i, a, u) {
  let c = 0,
    f = 0,
    p = a,
    m = u,
    g = n.get(),
    x = 0;
  function S() {
    const U = i.get() - n.get(),
      $ = !p;
    let K = 0;
    return (
      $
        ? ((c = 0), s.set(i), n.set(i), (K = U))
        : (s.set(n), (c += U / p), (c *= m), (g += c), n.add(c), (K = g - x)),
      (f = Yc(K)),
      (x = g),
      B
    );
  }
  function w() {
    const U = i.get() - t.get();
    return Ye(U) < 0.001;
  }
  function E() {
    return p;
  }
  function _() {
    return f;
  }
  function b() {
    return c;
  }
  function T() {
    return A(a);
  }
  function N() {
    return M(u);
  }
  function A(U) {
    return (p = U), B;
  }
  function M(U) {
    return (m = U), B;
  }
  const B = {
    direction: _,
    duration: E,
    velocity: b,
    seek: S,
    settled: w,
    useBaseFriction: N,
    useBaseDuration: T,
    useFriction: M,
    useDuration: A,
  };
  return B;
}
function NS(n, t, s, i, a) {
  const u = a.measure(10),
    c = a.measure(50),
    f = ss(0.1, 0.99);
  let p = !1;
  function m() {
    return !(p || !n.reachedAny(s.get()) || !n.reachedAny(t.get()));
  }
  function g(w) {
    if (!m()) return;
    const E = n.reachedMin(t.get()) ? "min" : "max",
      _ = Ye(n[E] - t.get()),
      b = s.get() - t.get(),
      T = f.constrain(_ / c);
    s.subtract(b * T),
      !w &&
        Ye(b) < u &&
        (s.set(n.constrain(s.get())), i.useDuration(25).useBaseFriction());
  }
  function x(w) {
    p = !w;
  }
  return { shouldConstrain: m, constrain: g, toggleActive: x };
}
function RS(n, t, s, i, a) {
  const u = ss(-t + n, 0),
    c = x(),
    f = g(),
    p = S();
  function m(E, _) {
    return Fi(E, _) <= 1;
  }
  function g() {
    const E = c[0],
      _ = kn(c),
      b = c.lastIndexOf(E),
      T = c.indexOf(_) + 1;
    return ss(b, T);
  }
  function x() {
    return s
      .map((E, _) => {
        const { min: b, max: T } = u,
          N = u.constrain(E),
          A = !_,
          M = Gc(s, _);
        return A ? T : M || m(b, N) ? b : m(T, N) ? T : N;
      })
      .map((E) => parseFloat(E.toFixed(3)));
  }
  function S() {
    if (t <= n + a) return [u.max];
    if (i === "keepSnaps") return c;
    const { min: E, max: _ } = f;
    return c.slice(E, _);
  }
  return { snapsContained: p, scrollContainLimit: f };
}
function PS(n, t, s) {
  const i = t[0],
    a = s ? i - n : kn(t);
  return { limit: ss(a, i) };
}
function OS(n, t, s, i) {
  const u = t.min + 0.1,
    c = t.max + 0.1,
    { reachedMin: f, reachedMax: p } = ss(u, c);
  function m(S) {
    return S === 1 ? p(s.get()) : S === -1 ? f(s.get()) : !1;
  }
  function g(S) {
    if (!m(S)) return;
    const w = n * (S * -1);
    i.forEach((E) => E.add(w));
  }
  return { loop: g };
}
function AS(n) {
  const { max: t, length: s } = n;
  function i(u) {
    const c = u - t;
    return s ? c / -s : 0;
  }
  return { get: i };
}
function jS(n, t, s, i, a) {
  const { startEdge: u, endEdge: c } = n,
    { groupSlides: f } = a,
    p = x().map(t.measure),
    m = S(),
    g = w();
  function x() {
    return f(i)
      .map((_) => kn(_)[c] - _[0][u])
      .map(Ye);
  }
  function S() {
    return i.map((_) => s[u] - _[u]).map((_) => -Ye(_));
  }
  function w() {
    return f(m)
      .map((_) => _[0])
      .map((_, b) => _ + p[b]);
  }
  return { snaps: m, snapsAligned: g };
}
function LS(n, t, s, i, a, u) {
  const { groupSlides: c } = a,
    { min: f, max: p } = i,
    m = g();
  function g() {
    const S = c(u),
      w = !n || t === "keepSnaps";
    return s.length === 1
      ? [u]
      : w
      ? S
      : S.slice(f, p).map((E, _, b) => {
          const T = !_,
            N = Gc(b, _);
          if (T) {
            const A = kn(b[0]) + 1;
            return Mp(A);
          }
          if (N) {
            const A = eo(u) - kn(b)[0] + 1;
            return Mp(A, kn(b)[0]);
          }
          return E;
        });
  }
  return { slideRegistry: m };
}
function MS(n, t, s, i, a) {
  const { reachedAny: u, removeOffset: c, constrain: f } = i;
  function p(E) {
    return E.concat().sort((_, b) => Ye(_) - Ye(b))[0];
  }
  function m(E) {
    const _ = n ? c(E) : f(E),
      b = t
        .map((N, A) => ({ diff: g(N - _, 0), index: A }))
        .sort((N, A) => Ye(N.diff) - Ye(A.diff)),
      { index: T } = b[0];
    return { index: T, distance: _ };
  }
  function g(E, _) {
    const b = [E, E + s, E - s];
    if (!n) return E;
    if (!_) return p(b);
    const T = b.filter((N) => Yc(N) === _);
    return T.length ? p(T) : kn(b) - s;
  }
  function x(E, _) {
    const b = t[E] - a.get(),
      T = g(b, _);
    return { index: E, distance: T };
  }
  function S(E, _) {
    const b = a.get() + E,
      { index: T, distance: N } = m(b),
      A = !n && u(b);
    if (!_ || A) return { index: T, distance: E };
    const M = t[T] - N,
      B = E + g(M, 0);
    return { index: T, distance: B };
  }
  return { byDistance: S, byIndex: x, shortcut: g };
}
function IS(n, t, s, i, a, u, c) {
  function f(x) {
    const S = x.distance,
      w = x.index !== t.get();
    u.add(S),
      S && (i.duration() ? n.start() : (n.update(), n.render(1), n.update())),
      w && (s.set(t.get()), t.set(x.index), c.emit("select"));
  }
  function p(x, S) {
    const w = a.byDistance(x, S);
    f(w);
  }
  function m(x, S) {
    const w = t.clone().set(x),
      E = a.byIndex(w.get(), S);
    f(E);
  }
  return { distance: p, index: m };
}
function DS(n, t, s, i, a, u, c, f) {
  const p = { passive: !0, capture: !0 };
  let m = 0;
  function g(w) {
    if (!f) return;
    function E(_) {
      if (new Date().getTime() - m > 10) return;
      c.emit("slideFocusStart"), (n.scrollLeft = 0);
      const N = s.findIndex((A) => A.includes(_));
      Kc(N) && (a.useDuration(0), i.index(N, 0), c.emit("slideFocus"));
    }
    u.add(document, "keydown", x, !1),
      t.forEach((_, b) => {
        u.add(
          _,
          "focus",
          (T) => {
            (Xa(f) || f(w, T)) && E(b);
          },
          p
        );
      });
  }
  function x(w) {
    w.code === "Tab" && (m = new Date().getTime());
  }
  return { init: g };
}
function Li(n) {
  let t = n;
  function s() {
    return t;
  }
  function i(p) {
    t = c(p);
  }
  function a(p) {
    t += c(p);
  }
  function u(p) {
    t -= c(p);
  }
  function c(p) {
    return Kc(p) ? p : p.get();
  }
  return { get: s, set: i, add: a, subtract: u };
}
function Wg(n, t) {
  const s = n.scroll === "x" ? c : f,
    i = t.style;
  let a = null,
    u = !1;
  function c(S) {
    return `translate3d(${S}px,0px,0px)`;
  }
  function f(S) {
    return `translate3d(0px,${S}px,0px)`;
  }
  function p(S) {
    if (u) return;
    const w = vS(n.direction(S));
    w !== a && ((i.transform = s(w)), (a = w));
  }
  function m(S) {
    u = !S;
  }
  function g() {
    u ||
      ((i.transform = ""),
      t.getAttribute("style") || t.removeAttribute("style"));
  }
  return { clear: g, to: p, toggleActive: m };
}
function FS(n, t, s, i, a, u, c, f, p) {
  const g = Hi(a),
    x = Hi(a).reverse(),
    S = T().concat(N());
  function w($, K) {
    return $.reduce((te, re) => te - a[re], K);
  }
  function E($, K) {
    return $.reduce((te, re) => (w(te, K) > 0 ? te.concat([re]) : te), []);
  }
  function _($) {
    return u.map((K, te) => ({
      start: K - i[te] + 0.5 + $,
      end: K + t - 0.5 + $,
    }));
  }
  function b($, K, te) {
    const re = _(K);
    return $.map((se) => {
      const X = te ? 0 : -s,
        ye = te ? s : 0,
        V = te ? "end" : "start",
        ge = re[se][V];
      return {
        index: se,
        loopPoint: ge,
        slideLocation: Li(-1),
        translate: Wg(n, p[se]),
        target: () => (f.get() > ge ? X : ye),
      };
    });
  }
  function T() {
    const $ = c[0],
      K = E(x, $);
    return b(K, s, !1);
  }
  function N() {
    const $ = t - c[0] - 1,
      K = E(g, $);
    return b(K, -s, !0);
  }
  function A() {
    return S.every(({ index: $ }) => {
      const K = g.filter((te) => te !== $);
      return w(K, t) <= 0.1;
    });
  }
  function M() {
    S.forEach(($) => {
      const { target: K, translate: te, slideLocation: re } = $,
        se = K();
      se !== re.get() && (te.to(se), re.set(se));
    });
  }
  function B() {
    S.forEach(($) => $.translate.clear());
  }
  return { canLoop: A, clear: B, loop: M, loopPoints: S };
}
function zS(n, t, s) {
  let i,
    a = !1;
  function u(p) {
    if (!s) return;
    function m(g) {
      for (const x of g)
        if (x.type === "childList") {
          p.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    (i = new MutationObserver((g) => {
      a || ((Xa(s) || s(p, g)) && m(g));
    })),
      i.observe(n, { childList: !0 });
  }
  function c() {
    i && i.disconnect(), (a = !0);
  }
  return { init: u, destroy: c };
}
function BS(n, t, s, i) {
  const a = {};
  let u = null,
    c = null,
    f,
    p = !1;
  function m() {
    (f = new IntersectionObserver(
      (E) => {
        p ||
          (E.forEach((_) => {
            const b = t.indexOf(_.target);
            a[b] = _;
          }),
          (u = null),
          (c = null),
          s.emit("slidesInView"));
      },
      { root: n.parentElement, threshold: i }
    )),
      t.forEach((E) => f.observe(E));
  }
  function g() {
    f && f.disconnect(), (p = !0);
  }
  function x(E) {
    return qi(a).reduce((_, b) => {
      const T = parseInt(b),
        { isIntersecting: N } = a[T];
      return ((E && N) || (!E && !N)) && _.push(T), _;
    }, []);
  }
  function S(E = !0) {
    if (E && u) return u;
    if (!E && c) return c;
    const _ = x(E);
    return E && (u = _), E || (c = _), _;
  }
  return { init: m, destroy: g, get: S };
}
function $S(n, t, s, i, a, u) {
  const { measureSize: c, startEdge: f, endEdge: p } = n,
    m = s[0] && a,
    g = E(),
    x = _(),
    S = s.map(c),
    w = b();
  function E() {
    if (!m) return 0;
    const N = s[0];
    return Ye(t[f] - N[f]);
  }
  function _() {
    if (!m) return 0;
    const N = u.getComputedStyle(kn(i));
    return parseFloat(N.getPropertyValue(`margin-${p}`));
  }
  function b() {
    return s
      .map((N, A, M) => {
        const B = !A,
          U = Gc(M, A);
        return B ? S[A] + g : U ? S[A] + x : M[A + 1][f] - N[f];
      })
      .map(Ye);
  }
  return { slideSizes: S, slideSizesWithGaps: w, startGap: g, endGap: x };
}
function US(n, t, s, i, a, u, c, f, p) {
  const { startEdge: m, endEdge: g, direction: x } = n,
    S = Kc(s);
  function w(T, N) {
    return Hi(T)
      .filter((A) => A % N === 0)
      .map((A) => T.slice(A, A + N));
  }
  function E(T) {
    return T.length
      ? Hi(T)
          .reduce((N, A, M) => {
            const B = kn(N) || 0,
              U = B === 0,
              $ = A === eo(T),
              K = a[m] - u[B][m],
              te = a[m] - u[A][g],
              re = !i && U ? x(c) : 0,
              se = !i && $ ? x(f) : 0,
              X = Ye(te - se - (K + re));
            return M && X > t + p && N.push(A), $ && N.push(T.length), N;
          }, [])
          .map((N, A, M) => {
            const B = Math.max(M[A - 1] || 0);
            return T.slice(B, N);
          })
      : [];
  }
  function _(T) {
    return S ? w(T, s) : E(T);
  }
  return { groupSlides: _ };
}
function VS(n, t, s, i, a, u, c) {
  const {
      align: f,
      axis: p,
      direction: m,
      startIndex: g,
      loop: x,
      duration: S,
      dragFree: w,
      dragThreshold: E,
      inViewThreshold: _,
      slidesToScroll: b,
      skipSnaps: T,
      containScroll: N,
      watchResize: A,
      watchSlides: M,
      watchDrag: B,
      watchFocus: U,
    } = u,
    $ = 2,
    K = kS(),
    te = K.measure(t),
    re = s.map(K.measure),
    se = _S(p, m),
    X = se.measureSize(te),
    ye = ES(X),
    V = xS(f, X),
    ge = !x && !!N,
    ae = x || !!N,
    {
      slideSizes: ne,
      slideSizesWithGaps: F,
      startGap: z,
      endGap: W,
    } = $S(se, te, re, s, ae, a),
    P = US(se, X, b, x, te, re, z, W, $),
    { snaps: D, snapsAligned: J } = jS(se, V, te, re, P),
    ee = -kn(D) + kn(F),
    { snapsContained: ve, scrollContainLimit: Se } = RS(X, ee, J, N, $),
    le = ge ? ve : J,
    { limit: xe } = PS(ee, le, x),
    Te = Vg(eo(le), g, x),
    Me = Te.clone(),
    Ae = Hi(s),
    ce = ({
      dragHandler: ht,
      scrollBody: ln,
      scrollBounds: sr,
      options: { loop: un },
    }) => {
      un || sr.constrain(ht.pointerDown()), ln.seek();
    },
    Re = (
      {
        scrollBody: ht,
        translate: ln,
        location: sr,
        offsetLocation: un,
        previousLocation: cn,
        scrollLooper: us,
        slideLooper: Xt,
        dragHandler: Ur,
        animation: Vr,
        eventHandler: Un,
        scrollBounds: ir,
        options: { loop: dn },
      },
      Wt
    ) => {
      const Ot = ht.settled(),
        cs = !ir.shouldConstrain(),
        be = dn ? Ot : Ot && cs,
        Le = be && !Ur.pointerDown();
      Le && Vr.stop();
      const Be = sr.get() * Wt + cn.get() * (1 - Wt);
      un.set(Be),
        dn && (us.loop(ht.direction()), Xt.loop()),
        ln.to(un.get()),
        Le && Un.emit("settle"),
        be || Un.emit("scroll");
    },
    Ue = wS(
      i,
      a,
      () => ce(rr),
      (ht) => Re(rr, ht)
    ),
    tt = 0.68,
    yt = le[Te.get()],
    St = Li(yt),
    Nt = Li(yt),
    Rt = Li(yt),
    vt = Li(yt),
    lt = TS(St, Rt, Nt, vt, S, tt),
    Nn = MS(x, le, ee, xe, vt),
    Pt = IS(Ue, Te, Me, lt, Nn, vt, c),
    Br = AS(xe),
    $r = Qi(),
    ft = BS(t, s, c, _),
    { slideRegistry: Vt } = LS(ge, N, le, Se, P, Ae),
    nr = DS(n, s, Vt, Pt, lt, $r, c, U),
    rr = {
      ownerDocument: i,
      ownerWindow: a,
      eventHandler: c,
      containerRect: te,
      slideRects: re,
      animation: Ue,
      axis: se,
      dragHandler: bS(
        se,
        n,
        i,
        a,
        vt,
        SS(se, a),
        St,
        Ue,
        Pt,
        lt,
        Nn,
        Te,
        c,
        ye,
        w,
        E,
        T,
        tt,
        B
      ),
      eventStore: $r,
      percentOfView: ye,
      index: Te,
      indexPrevious: Me,
      limit: xe,
      location: St,
      offsetLocation: Rt,
      previousLocation: Nt,
      options: u,
      resizeHandler: CS(t, c, a, s, se, A, K),
      scrollBody: lt,
      scrollBounds: NS(xe, Rt, vt, lt, ye),
      scrollLooper: OS(ee, xe, Rt, [St, Rt, Nt, vt]),
      scrollProgress: Br,
      scrollSnapList: le.map(Br.get),
      scrollSnaps: le,
      scrollTarget: Nn,
      scrollTo: Pt,
      slideLooper: FS(se, X, ee, ne, F, D, le, Rt, s),
      slideFocus: nr,
      slidesHandler: zS(t, c, M),
      slidesInView: ft,
      slideIndexes: Ae,
      slideRegistry: Vt,
      slidesToScroll: P,
      target: vt,
      translate: Wg(se, t),
    };
  return rr;
}
function WS() {
  let n = {},
    t;
  function s(m) {
    t = m;
  }
  function i(m) {
    return n[m] || [];
  }
  function a(m) {
    return i(m).forEach((g) => g(t, m)), p;
  }
  function u(m, g) {
    return (n[m] = i(m).concat([g])), p;
  }
  function c(m, g) {
    return (n[m] = i(m).filter((x) => x !== g)), p;
  }
  function f() {
    n = {};
  }
  const p = { init: s, emit: a, off: c, on: u, clear: f };
  return p;
}
const HS = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0,
};
function qS(n) {
  function t(u, c) {
    return Ug(u, c || {});
  }
  function s(u) {
    const c = u.breakpoints || {},
      f = qi(c)
        .filter((p) => n.matchMedia(p).matches)
        .map((p) => c[p])
        .reduce((p, m) => t(p, m), {});
    return t(u, f);
  }
  function i(u) {
    return u
      .map((c) => qi(c.breakpoints || {}))
      .reduce((c, f) => c.concat(f), [])
      .map(n.matchMedia);
  }
  return { mergeOptions: t, optionsAtMedia: s, optionsMediaQueries: i };
}
function QS(n) {
  let t = [];
  function s(u, c) {
    return (
      (t = c.filter(({ options: f }) => n.optionsAtMedia(f).active !== !1)),
      t.forEach((f) => f.init(u, n)),
      c.reduce((f, p) => Object.assign(f, { [p.name]: p }), {})
    );
  }
  function i() {
    t = t.filter((u) => u.destroy());
  }
  return { init: s, destroy: i };
}
function Oa(n, t, s) {
  const i = n.ownerDocument,
    a = i.defaultView,
    u = qS(a),
    c = QS(u),
    f = Qi(),
    p = WS(),
    { mergeOptions: m, optionsAtMedia: g, optionsMediaQueries: x } = u,
    { on: S, off: w, emit: E } = p,
    _ = se;
  let b = !1,
    T,
    N = m(HS, Oa.globalOptions),
    A = m(N),
    M = [],
    B,
    U,
    $;
  function K() {
    const { container: Ae, slides: ce } = A;
    U = (vc(Ae) ? n.querySelector(Ae) : Ae) || n.children[0];
    const Ue = vc(ce) ? U.querySelectorAll(ce) : ce;
    $ = [].slice.call(Ue || U.children);
  }
  function te(Ae) {
    const ce = VS(n, U, $, i, a, Ae, p);
    if (Ae.loop && !ce.slideLooper.canLoop()) {
      const Re = Object.assign({}, Ae, { loop: !1 });
      return te(Re);
    }
    return ce;
  }
  function re(Ae, ce) {
    b ||
      ((N = m(N, Ae)),
      (A = g(N)),
      (M = ce || M),
      K(),
      (T = te(A)),
      x([N, ...M.map(({ options: Re }) => Re)]).forEach((Re) =>
        f.add(Re, "change", se)
      ),
      A.active &&
        (T.translate.to(T.location.get()),
        T.animation.init(),
        T.slidesInView.init(),
        T.slideFocus.init(Me),
        T.eventHandler.init(Me),
        T.resizeHandler.init(Me),
        T.slidesHandler.init(Me),
        T.options.loop && T.slideLooper.loop(),
        U.offsetParent && $.length && T.dragHandler.init(Me),
        (B = c.init(Me, M))));
  }
  function se(Ae, ce) {
    const Re = P();
    X(), re(m({ startIndex: Re }, Ae), ce), p.emit("reInit");
  }
  function X() {
    T.dragHandler.destroy(),
      T.eventStore.clear(),
      T.translate.clear(),
      T.slideLooper.clear(),
      T.resizeHandler.destroy(),
      T.slidesHandler.destroy(),
      T.slidesInView.destroy(),
      T.animation.destroy(),
      c.destroy(),
      f.clear();
  }
  function ye() {
    b || ((b = !0), f.clear(), X(), p.emit("destroy"), p.clear());
  }
  function V(Ae, ce, Re) {
    !A.active ||
      b ||
      (T.scrollBody.useBaseFriction().useDuration(ce === !0 ? 0 : A.duration),
      T.scrollTo.index(Ae, Re || 0));
  }
  function ge(Ae) {
    const ce = T.index.add(1).get();
    V(ce, Ae, -1);
  }
  function ae(Ae) {
    const ce = T.index.add(-1).get();
    V(ce, Ae, 1);
  }
  function ne() {
    return T.index.add(1).get() !== P();
  }
  function F() {
    return T.index.add(-1).get() !== P();
  }
  function z() {
    return T.scrollSnapList;
  }
  function W() {
    return T.scrollProgress.get(T.offsetLocation.get());
  }
  function P() {
    return T.index.get();
  }
  function D() {
    return T.indexPrevious.get();
  }
  function J() {
    return T.slidesInView.get();
  }
  function ee() {
    return T.slidesInView.get(!1);
  }
  function ve() {
    return B;
  }
  function Se() {
    return T;
  }
  function le() {
    return n;
  }
  function xe() {
    return U;
  }
  function Te() {
    return $;
  }
  const Me = {
    canScrollNext: ne,
    canScrollPrev: F,
    containerNode: xe,
    internalEngine: Se,
    destroy: ye,
    off: w,
    on: S,
    emit: E,
    plugins: ve,
    previousScrollSnap: D,
    reInit: _,
    rootNode: le,
    scrollNext: ge,
    scrollPrev: ae,
    scrollProgress: W,
    scrollSnapList: z,
    scrollTo: V,
    selectedScrollSnap: P,
    slideNodes: Te,
    slidesInView: J,
    slidesNotInView: ee,
  };
  return re(t, s), setTimeout(() => p.emit("init"), 0), Me;
}
Oa.globalOptions = void 0;
function Xc(n = {}, t = []) {
  const s = k.useRef(n),
    i = k.useRef(t),
    [a, u] = k.useState(),
    [c, f] = k.useState(),
    p = k.useCallback(() => {
      a && a.reInit(s.current, i.current);
    }, [a]);
  return (
    k.useEffect(() => {
      Zc(s.current, n) || ((s.current = n), p());
    }, [n, p]),
    k.useEffect(() => {
      gS(i.current, t) || ((i.current = t), p());
    }, [t, p]),
    k.useEffect(() => {
      if (mS() && c) {
        Oa.globalOptions = Xc.globalOptions;
        const m = Oa(c, s.current, i.current);
        return u(m), () => m.destroy();
      } else u(void 0);
    }, [c, u]),
    [f, a]
  );
}
Xc.globalOptions = void 0;
const ZS = {
  active: !0,
  breakpoints: {},
  delay: 4e3,
  jump: !1,
  playOnInit: !0,
  stopOnFocusIn: !0,
  stopOnInteraction: !0,
  stopOnMouseEnter: !1,
  stopOnLastSnap: !1,
  rootNode: null,
};
function KS(n, t) {
  const s = n.scrollSnapList();
  return typeof t == "number" ? s.map(() => t) : t(s, n);
}
function YS(n, t) {
  const s = n.rootNode();
  return (t && t(s)) || s;
}
function Jc(n = {}) {
  let t,
    s,
    i,
    a,
    u = null,
    c = 0,
    f = !1,
    p = !1,
    m = !1,
    g = !1;
  function x(V, ge) {
    s = V;
    const { mergeOptions: ae, optionsAtMedia: ne } = ge,
      F = ae(ZS, Jc.globalOptions),
      z = ae(F, n);
    if (((t = ne(z)), s.scrollSnapList().length <= 1)) return;
    (g = t.jump), (i = !1), (a = KS(s, t.delay));
    const { eventStore: W, ownerDocument: P } = s.internalEngine(),
      D = !!s.internalEngine().options.watchDrag,
      J = YS(s, t.rootNode);
    W.add(P, "visibilitychange", T),
      D && s.on("pointerDown", A),
      D && !t.stopOnInteraction && s.on("pointerUp", M),
      t.stopOnMouseEnter && W.add(J, "mouseenter", B),
      t.stopOnMouseEnter && !t.stopOnInteraction && W.add(J, "mouseleave", U),
      t.stopOnFocusIn && s.on("slideFocusStart", b),
      t.stopOnFocusIn &&
        !t.stopOnInteraction &&
        W.add(s.containerNode(), "focusout", _),
      t.playOnInit && _();
  }
  function S() {
    s.off("pointerDown", A).off("pointerUp", M).off("slideFocusStart", b),
      b(),
      (i = !0),
      (f = !1);
  }
  function w() {
    const { ownerWindow: V } = s.internalEngine();
    V.clearTimeout(c),
      (c = V.setTimeout(se, a[s.selectedScrollSnap()])),
      (u = new Date().getTime()),
      s.emit("autoplay:timerset");
  }
  function E() {
    const { ownerWindow: V } = s.internalEngine();
    V.clearTimeout(c), (c = 0), (u = null), s.emit("autoplay:timerstopped");
  }
  function _() {
    if (!i) {
      if (N()) {
        m = !0;
        return;
      }
      f || s.emit("autoplay:play"), w(), (f = !0);
    }
  }
  function b() {
    i || (f && s.emit("autoplay:stop"), E(), (f = !1));
  }
  function T() {
    if (N()) return (m = f), b();
    m && _();
  }
  function N() {
    const { ownerDocument: V } = s.internalEngine();
    return V.visibilityState === "hidden";
  }
  function A() {
    p || b();
  }
  function M() {
    p || _();
  }
  function B() {
    (p = !0), b();
  }
  function U() {
    (p = !1), _();
  }
  function $(V) {
    typeof V < "u" && (g = V), _();
  }
  function K() {
    f && b();
  }
  function te() {
    f && _();
  }
  function re() {
    return f;
  }
  function se() {
    const { index: V } = s.internalEngine(),
      ge = V.clone().add(1).get(),
      ae = s.scrollSnapList().length - 1,
      ne = t.stopOnLastSnap && ge === ae;
    if (
      (s.canScrollNext() ? s.scrollNext(g) : s.scrollTo(0, g),
      s.emit("autoplay:select"),
      ne)
    )
      return b();
    _();
  }
  function X() {
    if (!u) return null;
    const V = a[s.selectedScrollSnap()],
      ge = new Date().getTime() - u;
    return V - ge;
  }
  return {
    name: "autoplay",
    options: n,
    init: x,
    destroy: S,
    play: $,
    stop: K,
    reset: te,
    isPlaying: re,
    timeUntilNext: X,
  };
}
Jc.globalOptions = void 0;
function GS() {
  const [n, t] = Xc({ loop: !0 }, [Jc({ delay: 4e3 })]);
  k.useEffect(() => {
    t && t.reInit();
  }, [t]);
  const s = [
    {
      title: "Urgences en action",
      desc: "Patients, soignants et réalités du terrain",
      svg: v.jsxs("svg", {
        viewBox: "0 0 300 140",
        className: "w-full h-40",
        children: [
          v.jsx("defs", {
            children: v.jsxs("linearGradient", {
              id: "g1",
              x1: "0",
              x2: "1",
              children: [
                v.jsx("stop", { offset: "0%", stopColor: "#60a5fa" }),
                v.jsx("stop", { offset: "100%", stopColor: "#93c5fd" }),
              ],
            }),
          }),
          v.jsx("rect", {
            x: "0",
            y: "0",
            width: "300",
            height: "140",
            fill: "url(#g1)",
            rx: "12",
          }),
          v.jsxs("g", {
            fill: "#fff",
            opacity: "0.9",
            children: [
              v.jsx("rect", {
                x: "20",
                y: "40",
                width: "80",
                height: "50",
                rx: "8",
              }),
              v.jsx("rect", {
                x: "120",
                y: "30",
                width: "60",
                height: "70",
                rx: "8",
              }),
              v.jsx("rect", {
                x: "200",
                y: "50",
                width: "80",
                height: "40",
                rx: "8",
              }),
            ],
          }),
          v.jsxs("g", {
            fill: "#ef4444",
            children: [
              v.jsx("rect", {
                x: "35",
                y: "55",
                width: "50",
                height: "8",
                rx: "4",
              }),
              v.jsx("rect", {
                x: "135",
                y: "55",
                width: "30",
                height: "8",
                rx: "4",
              }),
              v.jsx("rect", {
                x: "220",
                y: "65",
                width: "40",
                height: "8",
                rx: "4",
              }),
            ],
          }),
        ],
      }),
    },
    {
      title: "Bloc opératoire",
      desc: "Tension, expertise et décisions critiques",
      svg: v.jsxs("svg", {
        viewBox: "0 0 300 140",
        className: "w-full h-40",
        children: [
          v.jsx("rect", {
            x: "0",
            y: "0",
            width: "300",
            height: "140",
            rx: "12",
            fill: "#0ea5e9",
          }),
          v.jsx("circle", { cx: "80", cy: "70", r: "30", fill: "#bae6fd" }),
          v.jsx("circle", { cx: "150", cy: "70", r: "30", fill: "#7dd3fc" }),
          v.jsx("circle", { cx: "220", cy: "70", r: "30", fill: "#38bdf8" }),
          v.jsx("rect", {
            x: "70",
            y: "62",
            width: "160",
            height: "16",
            rx: "8",
            fill: "#ef4444",
          }),
        ],
      }),
    },
    {
      title: "Accueil des familles",
      desc: "Humanité et soutien psychologique",
      svg: v.jsxs("svg", {
        viewBox: "0 0 300 140",
        className: "w-full h-40",
        children: [
          v.jsx("rect", {
            x: "0",
            y: "0",
            width: "300",
            height: "140",
            rx: "12",
            fill: "#f59e0b",
          }),
          v.jsx("rect", {
            x: "20",
            y: "30",
            width: "260",
            height: "80",
            rx: "10",
            fill: "#fff",
            opacity: "0.9",
          }),
          v.jsx("rect", {
            x: "40",
            y: "50",
            width: "80",
            height: "12",
            rx: "6",
            fill: "#ef4444",
          }),
          v.jsx("rect", {
            x: "40",
            y: "70",
            width: "160",
            height: "12",
            rx: "6",
            fill: "#0ea5e9",
          }),
        ],
      }),
    },
  ];
  return v.jsx("div", {
    className: "embla rounded-xl ring-1 ring-border",
    children: v.jsx("div", {
      className: "embla__viewport",
      ref: n,
      children: v.jsx("div", {
        className: "embla__container",
        children: s.map((i) =>
          v.jsxs(
            "div",
            {
              className:
                "embla__slide p-6 grid md:grid-cols-[1fr,2fr] gap-6 items-center",
              children: [
                v.jsx("div", { children: i.svg }),
                v.jsxs("div", {
                  children: [
                    v.jsx("h3", {
                      className: "text-2xl font-bold",
                      children: i.title,
                    }),
                    v.jsx("p", {
                      className: "text-muted-foreground mt-2",
                      children: i.desc,
                    }),
                  ],
                }),
              ],
            },
            i.title
          )
        ),
      }),
    }),
  });
}
const Bn = Object.create(null);
Bn.open = "0";
Bn.close = "1";
Bn.ping = "2";
Bn.pong = "3";
Bn.message = "4";
Bn.upgrade = "5";
Bn.noop = "6";
const wa = Object.create(null);
Object.keys(Bn).forEach((n) => {
  wa[Bn[n]] = n;
});
const wc = { type: "error", data: "parser error" },
  Hg =
    typeof Blob == "function" ||
    (typeof Blob < "u" &&
      Object.prototype.toString.call(Blob) === "[object BlobConstructor]"),
  qg = typeof ArrayBuffer == "function",
  Qg = (n) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(n)
      : n && n.buffer instanceof ArrayBuffer,
  ed = ({ type: n, data: t }, s, i) =>
    Hg && t instanceof Blob
      ? s
        ? i(t)
        : Ip(t, i)
      : qg && (t instanceof ArrayBuffer || Qg(t))
      ? s
        ? i(t)
        : Ip(new Blob([t]), i)
      : i(Bn[n] + (t || "")),
  Ip = (n, t) => {
    const s = new FileReader();
    return (
      (s.onload = function () {
        const i = s.result.split(",")[1];
        t("b" + (i || ""));
      }),
      s.readAsDataURL(n)
    );
  };
function Dp(n) {
  return n instanceof Uint8Array
    ? n
    : n instanceof ArrayBuffer
    ? new Uint8Array(n)
    : new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
}
let Zu;
function XS(n, t) {
  if (Hg && n.data instanceof Blob)
    return n.data.arrayBuffer().then(Dp).then(t);
  if (qg && (n.data instanceof ArrayBuffer || Qg(n.data))) return t(Dp(n.data));
  ed(n, !1, (s) => {
    Zu || (Zu = new TextEncoder()), t(Zu.encode(s));
  });
}
const Fp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  Mi = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let n = 0; n < Fp.length; n++) Mi[Fp.charCodeAt(n)] = n;
const JS = (n) => {
    let t = n.length * 0.75,
      s = n.length,
      i,
      a = 0,
      u,
      c,
      f,
      p;
    n[n.length - 1] === "=" && (t--, n[n.length - 2] === "=" && t--);
    const m = new ArrayBuffer(t),
      g = new Uint8Array(m);
    for (i = 0; i < s; i += 4)
      (u = Mi[n.charCodeAt(i)]),
        (c = Mi[n.charCodeAt(i + 1)]),
        (f = Mi[n.charCodeAt(i + 2)]),
        (p = Mi[n.charCodeAt(i + 3)]),
        (g[a++] = (u << 2) | (c >> 4)),
        (g[a++] = ((c & 15) << 4) | (f >> 2)),
        (g[a++] = ((f & 3) << 6) | (p & 63));
    return m;
  },
  ek = typeof ArrayBuffer == "function",
  td = (n, t) => {
    if (typeof n != "string") return { type: "message", data: Zg(n, t) };
    const s = n.charAt(0);
    return s === "b"
      ? { type: "message", data: tk(n.substring(1), t) }
      : wa[s]
      ? n.length > 1
        ? { type: wa[s], data: n.substring(1) }
        : { type: wa[s] }
      : wc;
  },
  tk = (n, t) => {
    if (ek) {
      const s = JS(n);
      return Zg(s, t);
    } else return { base64: !0, data: n };
  },
  Zg = (n, t) => {
    switch (t) {
      case "blob":
        return n instanceof Blob ? n : new Blob([n]);
      case "arraybuffer":
      default:
        return n instanceof ArrayBuffer ? n : n.buffer;
    }
  },
  Kg = "",
  nk = (n, t) => {
    const s = n.length,
      i = new Array(s);
    let a = 0;
    n.forEach((u, c) => {
      ed(u, !1, (f) => {
        (i[c] = f), ++a === s && t(i.join(Kg));
      });
    });
  },
  rk = (n, t) => {
    const s = n.split(Kg),
      i = [];
    for (let a = 0; a < s.length; a++) {
      const u = td(s[a], t);
      if ((i.push(u), u.type === "error")) break;
    }
    return i;
  };
function sk() {
  return new TransformStream({
    transform(n, t) {
      XS(n, (s) => {
        const i = s.length;
        let a;
        if (i < 126)
          (a = new Uint8Array(1)), new DataView(a.buffer).setUint8(0, i);
        else if (i < 65536) {
          a = new Uint8Array(3);
          const u = new DataView(a.buffer);
          u.setUint8(0, 126), u.setUint16(1, i);
        } else {
          a = new Uint8Array(9);
          const u = new DataView(a.buffer);
          u.setUint8(0, 127), u.setBigUint64(1, BigInt(i));
        }
        n.data && typeof n.data != "string" && (a[0] |= 128),
          t.enqueue(a),
          t.enqueue(s);
      });
    },
  });
}
let Ku;
function ma(n) {
  return n.reduce((t, s) => t + s.length, 0);
}
function ga(n, t) {
  if (n[0].length === t) return n.shift();
  const s = new Uint8Array(t);
  let i = 0;
  for (let a = 0; a < t; a++)
    (s[a] = n[0][i++]), i === n[0].length && (n.shift(), (i = 0));
  return n.length && i < n[0].length && (n[0] = n[0].slice(i)), s;
}
function ik(n, t) {
  Ku || (Ku = new TextDecoder());
  const s = [];
  let i = 0,
    a = -1,
    u = !1;
  return new TransformStream({
    transform(c, f) {
      for (s.push(c); ; ) {
        if (i === 0) {
          if (ma(s) < 1) break;
          const p = ga(s, 1);
          (u = (p[0] & 128) === 128),
            (a = p[0] & 127),
            a < 126 ? (i = 3) : a === 126 ? (i = 1) : (i = 2);
        } else if (i === 1) {
          if (ma(s) < 2) break;
          const p = ga(s, 2);
          (a = new DataView(p.buffer, p.byteOffset, p.length).getUint16(0)),
            (i = 3);
        } else if (i === 2) {
          if (ma(s) < 8) break;
          const p = ga(s, 8),
            m = new DataView(p.buffer, p.byteOffset, p.length),
            g = m.getUint32(0);
          if (g > Math.pow(2, 21) - 1) {
            f.enqueue(wc);
            break;
          }
          (a = g * Math.pow(2, 32) + m.getUint32(4)), (i = 3);
        } else {
          if (ma(s) < a) break;
          const p = ga(s, a);
          f.enqueue(td(u ? p : Ku.decode(p), t)), (i = 0);
        }
        if (a === 0 || a > n) {
          f.enqueue(wc);
          break;
        }
      }
    },
  });
}
const Yg = 4;
function st(n) {
  if (n) return ok(n);
}
function ok(n) {
  for (var t in st.prototype) n[t] = st.prototype[t];
  return n;
}
st.prototype.on = st.prototype.addEventListener = function (n, t) {
  return (
    (this._callbacks = this._callbacks || {}),
    (this._callbacks["$" + n] = this._callbacks["$" + n] || []).push(t),
    this
  );
};
st.prototype.once = function (n, t) {
  function s() {
    this.off(n, s), t.apply(this, arguments);
  }
  return (s.fn = t), this.on(n, s), this;
};
st.prototype.off =
  st.prototype.removeListener =
  st.prototype.removeAllListeners =
  st.prototype.removeEventListener =
    function (n, t) {
      if (((this._callbacks = this._callbacks || {}), arguments.length == 0))
        return (this._callbacks = {}), this;
      var s = this._callbacks["$" + n];
      if (!s) return this;
      if (arguments.length == 1) return delete this._callbacks["$" + n], this;
      for (var i, a = 0; a < s.length; a++)
        if (((i = s[a]), i === t || i.fn === t)) {
          s.splice(a, 1);
          break;
        }
      return s.length === 0 && delete this._callbacks["$" + n], this;
    };
st.prototype.emit = function (n) {
  this._callbacks = this._callbacks || {};
  for (
    var t = new Array(arguments.length - 1),
      s = this._callbacks["$" + n],
      i = 1;
    i < arguments.length;
    i++
  )
    t[i - 1] = arguments[i];
  if (s) {
    s = s.slice(0);
    for (var i = 0, a = s.length; i < a; ++i) s[i].apply(this, t);
  }
  return this;
};
st.prototype.emitReserved = st.prototype.emit;
st.prototype.listeners = function (n) {
  return (
    (this._callbacks = this._callbacks || {}), this._callbacks["$" + n] || []
  );
};
st.prototype.hasListeners = function (n) {
  return !!this.listeners(n).length;
};
const Ja =
    typeof Promise == "function" && typeof Promise.resolve == "function"
      ? (t) => Promise.resolve().then(t)
      : (t, s) => s(t, 0),
  on =
    typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : Function("return this")(),
  ak = "arraybuffer";
function Gg(n, ...t) {
  return t.reduce((s, i) => (n.hasOwnProperty(i) && (s[i] = n[i]), s), {});
}
const lk = on.setTimeout,
  uk = on.clearTimeout;
function el(n, t) {
  t.useNativeTimers
    ? ((n.setTimeoutFn = lk.bind(on)), (n.clearTimeoutFn = uk.bind(on)))
    : ((n.setTimeoutFn = on.setTimeout.bind(on)),
      (n.clearTimeoutFn = on.clearTimeout.bind(on)));
}
const ck = 1.33;
function dk(n) {
  return typeof n == "string"
    ? fk(n)
    : Math.ceil((n.byteLength || n.size) * ck);
}
function fk(n) {
  let t = 0,
    s = 0;
  for (let i = 0, a = n.length; i < a; i++)
    (t = n.charCodeAt(i)),
      t < 128
        ? (s += 1)
        : t < 2048
        ? (s += 2)
        : t < 55296 || t >= 57344
        ? (s += 3)
        : (i++, (s += 4));
  return s;
}
function Xg() {
  return (
    Date.now().toString(36).substring(3) +
    Math.random().toString(36).substring(2, 5)
  );
}
function hk(n) {
  let t = "";
  for (let s in n)
    n.hasOwnProperty(s) &&
      (t.length && (t += "&"),
      (t += encodeURIComponent(s) + "=" + encodeURIComponent(n[s])));
  return t;
}
function pk(n) {
  let t = {},
    s = n.split("&");
  for (let i = 0, a = s.length; i < a; i++) {
    let u = s[i].split("=");
    t[decodeURIComponent(u[0])] = decodeURIComponent(u[1]);
  }
  return t;
}
class mk extends Error {
  constructor(t, s, i) {
    super(t),
      (this.description = s),
      (this.context = i),
      (this.type = "TransportError");
  }
}
class nd extends st {
  constructor(t) {
    super(),
      (this.writable = !1),
      el(this, t),
      (this.opts = t),
      (this.query = t.query),
      (this.socket = t.socket),
      (this.supportsBinary = !t.forceBase64);
  }
  onError(t, s, i) {
    return super.emitReserved("error", new mk(t, s, i)), this;
  }
  open() {
    return (this.readyState = "opening"), this.doOpen(), this;
  }
  close() {
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        (this.doClose(), this.onClose()),
      this
    );
  }
  send(t) {
    this.readyState === "open" && this.write(t);
  }
  onOpen() {
    (this.readyState = "open"),
      (this.writable = !0),
      super.emitReserved("open");
  }
  onData(t) {
    const s = td(t, this.socket.binaryType);
    this.onPacket(s);
  }
  onPacket(t) {
    super.emitReserved("packet", t);
  }
  onClose(t) {
    (this.readyState = "closed"), super.emitReserved("close", t);
  }
  pause(t) {}
  createUri(t, s = {}) {
    return (
      t +
      "://" +
      this._hostname() +
      this._port() +
      this.opts.path +
      this._query(s)
    );
  }
  _hostname() {
    const t = this.opts.hostname;
    return t.indexOf(":") === -1 ? t : "[" + t + "]";
  }
  _port() {
    return this.opts.port &&
      ((this.opts.secure && +(this.opts.port !== 443)) ||
        (!this.opts.secure && Number(this.opts.port) !== 80))
      ? ":" + this.opts.port
      : "";
  }
  _query(t) {
    const s = hk(t);
    return s.length ? "?" + s : "";
  }
}
class gk extends nd {
  constructor() {
    super(...arguments), (this._polling = !1);
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this._poll();
  }
  pause(t) {
    this.readyState = "pausing";
    const s = () => {
      (this.readyState = "paused"), t();
    };
    if (this._polling || !this.writable) {
      let i = 0;
      this._polling &&
        (i++,
        this.once("pollComplete", function () {
          --i || s();
        })),
        this.writable ||
          (i++,
          this.once("drain", function () {
            --i || s();
          }));
    } else s();
  }
  _poll() {
    (this._polling = !0), this.doPoll(), this.emitReserved("poll");
  }
  onData(t) {
    const s = (i) => {
      if (
        (this.readyState === "opening" && i.type === "open" && this.onOpen(),
        i.type === "close")
      )
        return (
          this.onClose({ description: "transport closed by the server" }), !1
        );
      this.onPacket(i);
    };
    rk(t, this.socket.binaryType).forEach(s),
      this.readyState !== "closed" &&
        ((this._polling = !1),
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this._poll());
  }
  doClose() {
    const t = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? t() : this.once("open", t);
  }
  write(t) {
    (this.writable = !1),
      nk(t, (s) => {
        this.doWrite(s, () => {
          (this.writable = !0), this.emitReserved("drain");
        });
      });
  }
  uri() {
    const t = this.opts.secure ? "https" : "http",
      s = this.query || {};
    return (
      this.opts.timestampRequests !== !1 &&
        (s[this.opts.timestampParam] = Xg()),
      !this.supportsBinary && !s.sid && (s.b64 = 1),
      this.createUri(t, s)
    );
  }
}
let Jg = !1;
try {
  Jg = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {}
const yk = Jg;
function vk() {}
class xk extends gk {
  constructor(t) {
    if ((super(t), typeof location < "u")) {
      const s = location.protocol === "https:";
      let i = location.port;
      i || (i = s ? "443" : "80"),
        (this.xd =
          (typeof location < "u" && t.hostname !== location.hostname) ||
          i !== t.port);
    }
  }
  doWrite(t, s) {
    const i = this.request({ method: "POST", data: t });
    i.on("success", s),
      i.on("error", (a, u) => {
        this.onError("xhr post error", a, u);
      });
  }
  doPoll() {
    const t = this.request();
    t.on("data", this.onData.bind(this)),
      t.on("error", (s, i) => {
        this.onError("xhr poll error", s, i);
      }),
      (this.pollXhr = t);
  }
}
class Dn extends st {
  constructor(t, s, i) {
    super(),
      (this.createRequest = t),
      el(this, i),
      (this._opts = i),
      (this._method = i.method || "GET"),
      (this._uri = s),
      (this._data = i.data !== void 0 ? i.data : null),
      this._create();
  }
  _create() {
    var t;
    const s = Gg(
      this._opts,
      "agent",
      "pfx",
      "key",
      "passphrase",
      "cert",
      "ca",
      "ciphers",
      "rejectUnauthorized",
      "autoUnref"
    );
    s.xdomain = !!this._opts.xd;
    const i = (this._xhr = this.createRequest(s));
    try {
      i.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          i.setDisableHeaderCheck && i.setDisableHeaderCheck(!0);
          for (let a in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(a) &&
              i.setRequestHeader(a, this._opts.extraHeaders[a]);
        }
      } catch {}
      if (this._method === "POST")
        try {
          i.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {}
      try {
        i.setRequestHeader("Accept", "*/*");
      } catch {}
      (t = this._opts.cookieJar) === null || t === void 0 || t.addCookies(i),
        "withCredentials" in i &&
          (i.withCredentials = this._opts.withCredentials),
        this._opts.requestTimeout && (i.timeout = this._opts.requestTimeout),
        (i.onreadystatechange = () => {
          var a;
          i.readyState === 3 &&
            ((a = this._opts.cookieJar) === null ||
              a === void 0 ||
              a.parseCookies(i.getResponseHeader("set-cookie"))),
            i.readyState === 4 &&
              (i.status === 200 || i.status === 1223
                ? this._onLoad()
                : this.setTimeoutFn(() => {
                    this._onError(typeof i.status == "number" ? i.status : 0);
                  }, 0));
        }),
        i.send(this._data);
    } catch (a) {
      this.setTimeoutFn(() => {
        this._onError(a);
      }, 0);
      return;
    }
    typeof document < "u" &&
      ((this._index = Dn.requestsCount++), (Dn.requests[this._index] = this));
  }
  _onError(t) {
    this.emitReserved("error", t, this._xhr), this._cleanup(!0);
  }
  _cleanup(t) {
    if (!(typeof this._xhr > "u" || this._xhr === null)) {
      if (((this._xhr.onreadystatechange = vk), t))
        try {
          this._xhr.abort();
        } catch {}
      typeof document < "u" && delete Dn.requests[this._index],
        (this._xhr = null);
    }
  }
  _onLoad() {
    const t = this._xhr.responseText;
    t !== null &&
      (this.emitReserved("data", t),
      this.emitReserved("success"),
      this._cleanup());
  }
  abort() {
    this._cleanup();
  }
}
Dn.requestsCount = 0;
Dn.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function") attachEvent("onunload", zp);
  else if (typeof addEventListener == "function") {
    const n = "onpagehide" in on ? "pagehide" : "unload";
    addEventListener(n, zp, !1);
  }
}
function zp() {
  for (let n in Dn.requests)
    Dn.requests.hasOwnProperty(n) && Dn.requests[n].abort();
}
const wk = (function () {
  const n = ey({ xdomain: !1 });
  return n && n.responseType !== null;
})();
class _k extends xk {
  constructor(t) {
    super(t);
    const s = t && t.forceBase64;
    this.supportsBinary = wk && !s;
  }
  request(t = {}) {
    return (
      Object.assign(t, { xd: this.xd }, this.opts), new Dn(ey, this.uri(), t)
    );
  }
}
function ey(n) {
  const t = n.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || yk)) return new XMLHttpRequest();
  } catch {}
  if (!t)
    try {
      return new on[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {}
}
const ty =
  typeof navigator < "u" &&
  typeof navigator.product == "string" &&
  navigator.product.toLowerCase() === "reactnative";
class bk extends nd {
  get name() {
    return "websocket";
  }
  doOpen() {
    const t = this.uri(),
      s = this.opts.protocols,
      i = ty
        ? {}
        : Gg(
            this.opts,
            "agent",
            "perMessageDeflate",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "localAddress",
            "protocolVersion",
            "origin",
            "maxPayload",
            "family",
            "checkServerIdentity"
          );
    this.opts.extraHeaders && (i.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(t, s, i);
    } catch (a) {
      return this.emitReserved("error", a);
    }
    (this.ws.binaryType = this.socket.binaryType), this.addEventListeners();
  }
  addEventListeners() {
    (this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }),
      (this.ws.onclose = (t) =>
        this.onClose({
          description: "websocket connection closed",
          context: t,
        })),
      (this.ws.onmessage = (t) => this.onData(t.data)),
      (this.ws.onerror = (t) => this.onError("websocket error", t));
  }
  write(t) {
    this.writable = !1;
    for (let s = 0; s < t.length; s++) {
      const i = t[s],
        a = s === t.length - 1;
      ed(i, this.supportsBinary, (u) => {
        try {
          this.doWrite(i, u);
        } catch {}
        a &&
          Ja(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" &&
      ((this.ws.onerror = () => {}), this.ws.close(), (this.ws = null));
  }
  uri() {
    const t = this.opts.secure ? "wss" : "ws",
      s = this.query || {};
    return (
      this.opts.timestampRequests && (s[this.opts.timestampParam] = Xg()),
      this.supportsBinary || (s.b64 = 1),
      this.createUri(t, s)
    );
  }
}
const Yu = on.WebSocket || on.MozWebSocket;
class Sk extends bk {
  createSocket(t, s, i) {
    return ty ? new Yu(t, s, i) : s ? new Yu(t, s) : new Yu(t);
  }
  doWrite(t, s) {
    this.ws.send(s);
  }
}
class kk extends nd {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(
        this.createUri("https"),
        this.opts.transportOptions[this.name]
      );
    } catch (t) {
      return this.emitReserved("error", t);
    }
    this._transport.closed
      .then(() => {
        this.onClose();
      })
      .catch((t) => {
        this.onError("webtransport error", t);
      }),
      this._transport.ready.then(() => {
        this._transport.createBidirectionalStream().then((t) => {
          const s = ik(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
            i = t.readable.pipeThrough(s).getReader(),
            a = sk();
          a.readable.pipeTo(t.writable),
            (this._writer = a.writable.getWriter());
          const u = () => {
            i.read()
              .then(({ done: f, value: p }) => {
                f || (this.onPacket(p), u());
              })
              .catch((f) => {});
          };
          u();
          const c = { type: "open" };
          this.query.sid && (c.data = `{"sid":"${this.query.sid}"}`),
            this._writer.write(c).then(() => this.onOpen());
        });
      });
  }
  write(t) {
    this.writable = !1;
    for (let s = 0; s < t.length; s++) {
      const i = t[s],
        a = s === t.length - 1;
      this._writer.write(i).then(() => {
        a &&
          Ja(() => {
            (this.writable = !0), this.emitReserved("drain");
          }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var t;
    (t = this._transport) === null || t === void 0 || t.close();
  }
}
const Ek = { websocket: Sk, webtransport: kk, polling: _k },
  Ck =
    /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  Tk = [
    "source",
    "protocol",
    "authority",
    "userInfo",
    "user",
    "password",
    "host",
    "port",
    "relative",
    "path",
    "directory",
    "file",
    "query",
    "anchor",
  ];
function _c(n) {
  if (n.length > 8e3) throw "URI too long";
  const t = n,
    s = n.indexOf("["),
    i = n.indexOf("]");
  s != -1 &&
    i != -1 &&
    (n =
      n.substring(0, s) +
      n.substring(s, i).replace(/:/g, ";") +
      n.substring(i, n.length));
  let a = Ck.exec(n || ""),
    u = {},
    c = 14;
  for (; c--; ) u[Tk[c]] = a[c] || "";
  return (
    s != -1 &&
      i != -1 &&
      ((u.source = t),
      (u.host = u.host.substring(1, u.host.length - 1).replace(/;/g, ":")),
      (u.authority = u.authority
        .replace("[", "")
        .replace("]", "")
        .replace(/;/g, ":")),
      (u.ipv6uri = !0)),
    (u.pathNames = Nk(u, u.path)),
    (u.queryKey = Rk(u, u.query)),
    u
  );
}
function Nk(n, t) {
  const s = /\/{2,9}/g,
    i = t.replace(s, "/").split("/");
  return (
    (t.slice(0, 1) == "/" || t.length === 0) && i.splice(0, 1),
    t.slice(-1) == "/" && i.splice(i.length - 1, 1),
    i
  );
}
function Rk(n, t) {
  const s = {};
  return (
    t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (i, a, u) {
      a && (s[a] = u);
    }),
    s
  );
}
const bc =
    typeof addEventListener == "function" &&
    typeof removeEventListener == "function",
  _a = [];
bc &&
  addEventListener(
    "offline",
    () => {
      _a.forEach((n) => n());
    },
    !1
  );
class Or extends st {
  constructor(t, s) {
    if (
      (super(),
      (this.binaryType = ak),
      (this.writeBuffer = []),
      (this._prevBufferLen = 0),
      (this._pingInterval = -1),
      (this._pingTimeout = -1),
      (this._maxPayload = -1),
      (this._pingTimeoutTime = 1 / 0),
      t && typeof t == "object" && ((s = t), (t = null)),
      t)
    ) {
      const i = _c(t);
      (s.hostname = i.host),
        (s.secure = i.protocol === "https" || i.protocol === "wss"),
        (s.port = i.port),
        i.query && (s.query = i.query);
    } else s.host && (s.hostname = _c(s.host).host);
    el(this, s),
      (this.secure =
        s.secure != null
          ? s.secure
          : typeof location < "u" && location.protocol === "https:"),
      s.hostname && !s.port && (s.port = this.secure ? "443" : "80"),
      (this.hostname =
        s.hostname ||
        (typeof location < "u" ? location.hostname : "localhost")),
      (this.port =
        s.port ||
        (typeof location < "u" && location.port
          ? location.port
          : this.secure
          ? "443"
          : "80")),
      (this.transports = []),
      (this._transportsByName = {}),
      s.transports.forEach((i) => {
        const a = i.prototype.name;
        this.transports.push(a), (this._transportsByName[a] = i);
      }),
      (this.opts = Object.assign(
        {
          path: "/engine.io",
          agent: !1,
          withCredentials: !1,
          upgrade: !0,
          timestampParam: "t",
          rememberUpgrade: !1,
          addTrailingSlash: !0,
          rejectUnauthorized: !0,
          perMessageDeflate: { threshold: 1024 },
          transportOptions: {},
          closeOnBeforeunload: !1,
        },
        s
      )),
      (this.opts.path =
        this.opts.path.replace(/\/$/, "") +
        (this.opts.addTrailingSlash ? "/" : "")),
      typeof this.opts.query == "string" &&
        (this.opts.query = pk(this.opts.query)),
      bc &&
        (this.opts.closeOnBeforeunload &&
          ((this._beforeunloadEventListener = () => {
            this.transport &&
              (this.transport.removeAllListeners(), this.transport.close());
          }),
          addEventListener(
            "beforeunload",
            this._beforeunloadEventListener,
            !1
          )),
        this.hostname !== "localhost" &&
          ((this._offlineEventListener = () => {
            this._onClose("transport close", {
              description: "network connection lost",
            });
          }),
          _a.push(this._offlineEventListener))),
      this.opts.withCredentials && (this._cookieJar = void 0),
      this._open();
  }
  createTransport(t) {
    const s = Object.assign({}, this.opts.query);
    (s.EIO = Yg), (s.transport = t), this.id && (s.sid = this.id);
    const i = Object.assign(
      {},
      this.opts,
      {
        query: s,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port,
      },
      this.opts.transportOptions[t]
    );
    return new this._transportsByName[t](i);
  }
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const t =
      this.opts.rememberUpgrade &&
      Or.priorWebsocketSuccess &&
      this.transports.indexOf("websocket") !== -1
        ? "websocket"
        : this.transports[0];
    this.readyState = "opening";
    const s = this.createTransport(t);
    s.open(), this.setTransport(s);
  }
  setTransport(t) {
    this.transport && this.transport.removeAllListeners(),
      (this.transport = t),
      t
        .on("drain", this._onDrain.bind(this))
        .on("packet", this._onPacket.bind(this))
        .on("error", this._onError.bind(this))
        .on("close", (s) => this._onClose("transport close", s));
  }
  onOpen() {
    (this.readyState = "open"),
      (Or.priorWebsocketSuccess = this.transport.name === "websocket"),
      this.emitReserved("open"),
      this.flush();
  }
  _onPacket(t) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    )
      switch (
        (this.emitReserved("packet", t), this.emitReserved("heartbeat"), t.type)
      ) {
        case "open":
          this.onHandshake(JSON.parse(t.data));
          break;
        case "ping":
          this._sendPacket("pong"),
            this.emitReserved("ping"),
            this.emitReserved("pong"),
            this._resetPingTimeout();
          break;
        case "error":
          const s = new Error("server error");
          (s.code = t.data), this._onError(s);
          break;
        case "message":
          this.emitReserved("data", t.data),
            this.emitReserved("message", t.data);
          break;
      }
  }
  onHandshake(t) {
    this.emitReserved("handshake", t),
      (this.id = t.sid),
      (this.transport.query.sid = t.sid),
      (this._pingInterval = t.pingInterval),
      (this._pingTimeout = t.pingTimeout),
      (this._maxPayload = t.maxPayload),
      this.onOpen(),
      this.readyState !== "closed" && this._resetPingTimeout();
  }
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const t = this._pingInterval + this._pingTimeout;
    (this._pingTimeoutTime = Date.now() + t),
      (this._pingTimeoutTimer = this.setTimeoutFn(() => {
        this._onClose("ping timeout");
      }, t)),
      this.opts.autoUnref && this._pingTimeoutTimer.unref();
  }
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen),
      (this._prevBufferLen = 0),
      this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  flush() {
    if (
      this.readyState !== "closed" &&
      this.transport.writable &&
      !this.upgrading &&
      this.writeBuffer.length
    ) {
      const t = this._getWritablePackets();
      this.transport.send(t),
        (this._prevBufferLen = t.length),
        this.emitReserved("flush");
    }
  }
  _getWritablePackets() {
    if (
      !(
        this._maxPayload &&
        this.transport.name === "polling" &&
        this.writeBuffer.length > 1
      )
    )
      return this.writeBuffer;
    let s = 1;
    for (let i = 0; i < this.writeBuffer.length; i++) {
      const a = this.writeBuffer[i].data;
      if ((a && (s += dk(a)), i > 0 && s > this._maxPayload))
        return this.writeBuffer.slice(0, i);
      s += 2;
    }
    return this.writeBuffer;
  }
  _hasPingExpired() {
    if (!this._pingTimeoutTime) return !0;
    const t = Date.now() > this._pingTimeoutTime;
    return (
      t &&
        ((this._pingTimeoutTime = 0),
        Ja(() => {
          this._onClose("ping timeout");
        }, this.setTimeoutFn)),
      t
    );
  }
  write(t, s, i) {
    return this._sendPacket("message", t, s, i), this;
  }
  send(t, s, i) {
    return this._sendPacket("message", t, s, i), this;
  }
  _sendPacket(t, s, i, a) {
    if (
      (typeof s == "function" && ((a = s), (s = void 0)),
      typeof i == "function" && ((a = i), (i = null)),
      this.readyState === "closing" || this.readyState === "closed")
    )
      return;
    (i = i || {}), (i.compress = i.compress !== !1);
    const u = { type: t, data: s, options: i };
    this.emitReserved("packetCreate", u),
      this.writeBuffer.push(u),
      a && this.once("flush", a),
      this.flush();
  }
  close() {
    const t = () => {
        this._onClose("forced close"), this.transport.close();
      },
      s = () => {
        this.off("upgrade", s), this.off("upgradeError", s), t();
      },
      i = () => {
        this.once("upgrade", s), this.once("upgradeError", s);
      };
    return (
      (this.readyState === "opening" || this.readyState === "open") &&
        ((this.readyState = "closing"),
        this.writeBuffer.length
          ? this.once("drain", () => {
              this.upgrading ? i() : t();
            })
          : this.upgrading
          ? i()
          : t()),
      this
    );
  }
  _onError(t) {
    if (
      ((Or.priorWebsocketSuccess = !1),
      this.opts.tryAllTransports &&
        this.transports.length > 1 &&
        this.readyState === "opening")
    )
      return this.transports.shift(), this._open();
    this.emitReserved("error", t), this._onClose("transport error", t);
  }
  _onClose(t, s) {
    if (
      this.readyState === "opening" ||
      this.readyState === "open" ||
      this.readyState === "closing"
    ) {
      if (
        (this.clearTimeoutFn(this._pingTimeoutTimer),
        this.transport.removeAllListeners("close"),
        this.transport.close(),
        this.transport.removeAllListeners(),
        bc &&
          (this._beforeunloadEventListener &&
            removeEventListener(
              "beforeunload",
              this._beforeunloadEventListener,
              !1
            ),
          this._offlineEventListener))
      ) {
        const i = _a.indexOf(this._offlineEventListener);
        i !== -1 && _a.splice(i, 1);
      }
      (this.readyState = "closed"),
        (this.id = null),
        this.emitReserved("close", t, s),
        (this.writeBuffer = []),
        (this._prevBufferLen = 0);
    }
  }
}
Or.protocol = Yg;
class Pk extends Or {
  constructor() {
    super(...arguments), (this._upgrades = []);
  }
  onOpen() {
    if ((super.onOpen(), this.readyState === "open" && this.opts.upgrade))
      for (let t = 0; t < this._upgrades.length; t++)
        this._probe(this._upgrades[t]);
  }
  _probe(t) {
    let s = this.createTransport(t),
      i = !1;
    Or.priorWebsocketSuccess = !1;
    const a = () => {
      i ||
        (s.send([{ type: "ping", data: "probe" }]),
        s.once("packet", (x) => {
          if (!i)
            if (x.type === "pong" && x.data === "probe") {
              if (
                ((this.upgrading = !0), this.emitReserved("upgrading", s), !s)
              )
                return;
              (Or.priorWebsocketSuccess = s.name === "websocket"),
                this.transport.pause(() => {
                  i ||
                    (this.readyState !== "closed" &&
                      (g(),
                      this.setTransport(s),
                      s.send([{ type: "upgrade" }]),
                      this.emitReserved("upgrade", s),
                      (s = null),
                      (this.upgrading = !1),
                      this.flush()));
                });
            } else {
              const S = new Error("probe error");
              (S.transport = s.name), this.emitReserved("upgradeError", S);
            }
        }));
    };
    function u() {
      i || ((i = !0), g(), s.close(), (s = null));
    }
    const c = (x) => {
      const S = new Error("probe error: " + x);
      (S.transport = s.name), u(), this.emitReserved("upgradeError", S);
    };
    function f() {
      c("transport closed");
    }
    function p() {
      c("socket closed");
    }
    function m(x) {
      s && x.name !== s.name && u();
    }
    const g = () => {
      s.removeListener("open", a),
        s.removeListener("error", c),
        s.removeListener("close", f),
        this.off("close", p),
        this.off("upgrading", m);
    };
    s.once("open", a),
      s.once("error", c),
      s.once("close", f),
      this.once("close", p),
      this.once("upgrading", m),
      this._upgrades.indexOf("webtransport") !== -1 && t !== "webtransport"
        ? this.setTimeoutFn(() => {
            i || s.open();
          }, 200)
        : s.open();
  }
  onHandshake(t) {
    (this._upgrades = this._filterUpgrades(t.upgrades)), super.onHandshake(t);
  }
  _filterUpgrades(t) {
    const s = [];
    for (let i = 0; i < t.length; i++)
      ~this.transports.indexOf(t[i]) && s.push(t[i]);
    return s;
  }
}
let Ok = class extends Pk {
  constructor(t, s = {}) {
    const i = typeof t == "object" ? t : s;
    (!i.transports || (i.transports && typeof i.transports[0] == "string")) &&
      (i.transports = (i.transports || ["polling", "websocket", "webtransport"])
        .map((a) => Ek[a])
        .filter((a) => !!a)),
      super(t, i);
  }
};
function Ak(n, t = "", s) {
  let i = n;
  (s = s || (typeof location < "u" && location)),
    n == null && (n = s.protocol + "//" + s.host),
    typeof n == "string" &&
      (n.charAt(0) === "/" &&
        (n.charAt(1) === "/" ? (n = s.protocol + n) : (n = s.host + n)),
      /^(https?|wss?):\/\//.test(n) ||
        (typeof s < "u" ? (n = s.protocol + "//" + n) : (n = "https://" + n)),
      (i = _c(n))),
    i.port ||
      (/^(http|ws)$/.test(i.protocol)
        ? (i.port = "80")
        : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")),
    (i.path = i.path || "/");
  const u = i.host.indexOf(":") !== -1 ? "[" + i.host + "]" : i.host;
  return (
    (i.id = i.protocol + "://" + u + ":" + i.port + t),
    (i.href =
      i.protocol + "://" + u + (s && s.port === i.port ? "" : ":" + i.port)),
    i
  );
}
const jk = typeof ArrayBuffer == "function",
  Lk = (n) =>
    typeof ArrayBuffer.isView == "function"
      ? ArrayBuffer.isView(n)
      : n.buffer instanceof ArrayBuffer,
  ny = Object.prototype.toString,
  Mk =
    typeof Blob == "function" ||
    (typeof Blob < "u" && ny.call(Blob) === "[object BlobConstructor]"),
  Ik =
    typeof File == "function" ||
    (typeof File < "u" && ny.call(File) === "[object FileConstructor]");
function rd(n) {
  return (
    (jk && (n instanceof ArrayBuffer || Lk(n))) ||
    (Mk && n instanceof Blob) ||
    (Ik && n instanceof File)
  );
}
function ba(n, t) {
  if (!n || typeof n != "object") return !1;
  if (Array.isArray(n)) {
    for (let s = 0, i = n.length; s < i; s++) if (ba(n[s])) return !0;
    return !1;
  }
  if (rd(n)) return !0;
  if (n.toJSON && typeof n.toJSON == "function" && arguments.length === 1)
    return ba(n.toJSON(), !0);
  for (const s in n)
    if (Object.prototype.hasOwnProperty.call(n, s) && ba(n[s])) return !0;
  return !1;
}
function Dk(n) {
  const t = [],
    s = n.data,
    i = n;
  return (
    (i.data = Sc(s, t)), (i.attachments = t.length), { packet: i, buffers: t }
  );
}
function Sc(n, t) {
  if (!n) return n;
  if (rd(n)) {
    const s = { _placeholder: !0, num: t.length };
    return t.push(n), s;
  } else if (Array.isArray(n)) {
    const s = new Array(n.length);
    for (let i = 0; i < n.length; i++) s[i] = Sc(n[i], t);
    return s;
  } else if (typeof n == "object" && !(n instanceof Date)) {
    const s = {};
    for (const i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (s[i] = Sc(n[i], t));
    return s;
  }
  return n;
}
function Fk(n, t) {
  return (n.data = kc(n.data, t)), delete n.attachments, n;
}
function kc(n, t) {
  if (!n) return n;
  if (n && n._placeholder === !0) {
    if (typeof n.num == "number" && n.num >= 0 && n.num < t.length)
      return t[n.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(n))
    for (let s = 0; s < n.length; s++) n[s] = kc(n[s], t);
  else if (typeof n == "object")
    for (const s in n)
      Object.prototype.hasOwnProperty.call(n, s) && (n[s] = kc(n[s], t));
  return n;
}
const zk = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener",
  ],
  Bk = 5;
var je;
(function (n) {
  (n[(n.CONNECT = 0)] = "CONNECT"),
    (n[(n.DISCONNECT = 1)] = "DISCONNECT"),
    (n[(n.EVENT = 2)] = "EVENT"),
    (n[(n.ACK = 3)] = "ACK"),
    (n[(n.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
    (n[(n.BINARY_EVENT = 5)] = "BINARY_EVENT"),
    (n[(n.BINARY_ACK = 6)] = "BINARY_ACK");
})(je || (je = {}));
class $k {
  constructor(t) {
    this.replacer = t;
  }
  encode(t) {
    return (t.type === je.EVENT || t.type === je.ACK) && ba(t)
      ? this.encodeAsBinary({
          type: t.type === je.EVENT ? je.BINARY_EVENT : je.BINARY_ACK,
          nsp: t.nsp,
          data: t.data,
          id: t.id,
        })
      : [this.encodeAsString(t)];
  }
  encodeAsString(t) {
    let s = "" + t.type;
    return (
      (t.type === je.BINARY_EVENT || t.type === je.BINARY_ACK) &&
        (s += t.attachments + "-"),
      t.nsp && t.nsp !== "/" && (s += t.nsp + ","),
      t.id != null && (s += t.id),
      t.data != null && (s += JSON.stringify(t.data, this.replacer)),
      s
    );
  }
  encodeAsBinary(t) {
    const s = Dk(t),
      i = this.encodeAsString(s.packet),
      a = s.buffers;
    return a.unshift(i), a;
  }
}
function Bp(n) {
  return Object.prototype.toString.call(n) === "[object Object]";
}
class sd extends st {
  constructor(t) {
    super(), (this.reviver = t);
  }
  add(t) {
    let s;
    if (typeof t == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      s = this.decodeString(t);
      const i = s.type === je.BINARY_EVENT;
      i || s.type === je.BINARY_ACK
        ? ((s.type = i ? je.EVENT : je.ACK),
          (this.reconstructor = new Uk(s)),
          s.attachments === 0 && super.emitReserved("decoded", s))
        : super.emitReserved("decoded", s);
    } else if (rd(t) || t.base64)
      if (this.reconstructor)
        (s = this.reconstructor.takeBinaryData(t)),
          s && ((this.reconstructor = null), super.emitReserved("decoded", s));
      else throw new Error("got binary data when not reconstructing a packet");
    else throw new Error("Unknown type: " + t);
  }
  decodeString(t) {
    let s = 0;
    const i = { type: Number(t.charAt(0)) };
    if (je[i.type] === void 0) throw new Error("unknown packet type " + i.type);
    if (i.type === je.BINARY_EVENT || i.type === je.BINARY_ACK) {
      const u = s + 1;
      for (; t.charAt(++s) !== "-" && s != t.length; );
      const c = t.substring(u, s);
      if (c != Number(c) || t.charAt(s) !== "-")
        throw new Error("Illegal attachments");
      i.attachments = Number(c);
    }
    if (t.charAt(s + 1) === "/") {
      const u = s + 1;
      for (; ++s && !(t.charAt(s) === "," || s === t.length); );
      i.nsp = t.substring(u, s);
    } else i.nsp = "/";
    const a = t.charAt(s + 1);
    if (a !== "" && Number(a) == a) {
      const u = s + 1;
      for (; ++s; ) {
        const c = t.charAt(s);
        if (c == null || Number(c) != c) {
          --s;
          break;
        }
        if (s === t.length) break;
      }
      i.id = Number(t.substring(u, s + 1));
    }
    if (t.charAt(++s)) {
      const u = this.tryParse(t.substr(s));
      if (sd.isPayloadValid(i.type, u)) i.data = u;
      else throw new Error("invalid payload");
    }
    return i;
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(t, s) {
    switch (t) {
      case je.CONNECT:
        return Bp(s);
      case je.DISCONNECT:
        return s === void 0;
      case je.CONNECT_ERROR:
        return typeof s == "string" || Bp(s);
      case je.EVENT:
      case je.BINARY_EVENT:
        return (
          Array.isArray(s) &&
          (typeof s[0] == "number" ||
            (typeof s[0] == "string" && zk.indexOf(s[0]) === -1))
        );
      case je.ACK:
      case je.BINARY_ACK:
        return Array.isArray(s);
    }
  }
  destroy() {
    this.reconstructor &&
      (this.reconstructor.finishedReconstruction(),
      (this.reconstructor = null));
  }
}
class Uk {
  constructor(t) {
    (this.packet = t), (this.buffers = []), (this.reconPack = t);
  }
  takeBinaryData(t) {
    if (
      (this.buffers.push(t), this.buffers.length === this.reconPack.attachments)
    ) {
      const s = Fk(this.reconPack, this.buffers);
      return this.finishedReconstruction(), s;
    }
    return null;
  }
  finishedReconstruction() {
    (this.reconPack = null), (this.buffers = []);
  }
}
const Vk = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Decoder: sd,
      Encoder: $k,
      get PacketType() {
        return je;
      },
      protocol: Bk,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function Sn(n, t, s) {
  return (
    n.on(t, s),
    function () {
      n.off(t, s);
    }
  );
}
const Wk = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1,
});
class ry extends st {
  constructor(t, s, i) {
    super(),
      (this.connected = !1),
      (this.recovered = !1),
      (this.receiveBuffer = []),
      (this.sendBuffer = []),
      (this._queue = []),
      (this._queueSeq = 0),
      (this.ids = 0),
      (this.acks = {}),
      (this.flags = {}),
      (this.io = t),
      (this.nsp = s),
      i && i.auth && (this.auth = i.auth),
      (this._opts = Object.assign({}, i)),
      this.io._autoConnect && this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const t = this.io;
    this.subs = [
      Sn(t, "open", this.onopen.bind(this)),
      Sn(t, "packet", this.onpacket.bind(this)),
      Sn(t, "error", this.onerror.bind(this)),
      Sn(t, "close", this.onclose.bind(this)),
    ];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    return this.connected
      ? this
      : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === "open" && this.onopen(),
        this);
  }
  open() {
    return this.connect();
  }
  send(...t) {
    return t.unshift("message"), this.emit.apply(this, t), this;
  }
  emit(t, ...s) {
    var i, a, u;
    if (Wk.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (
      (s.unshift(t),
      this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
    )
      return this._addToQueue(s), this;
    const c = { type: je.EVENT, data: s };
    if (
      ((c.options = {}),
      (c.options.compress = this.flags.compress !== !1),
      typeof s[s.length - 1] == "function")
    ) {
      const g = this.ids++,
        x = s.pop();
      this._registerAckCallback(g, x), (c.id = g);
    }
    const f =
        (a =
          (i = this.io.engine) === null || i === void 0
            ? void 0
            : i.transport) === null || a === void 0
          ? void 0
          : a.writable,
      p =
        this.connected &&
        !(
          !((u = this.io.engine) === null || u === void 0) &&
          u._hasPingExpired()
        );
    return (
      (this.flags.volatile && !f) ||
        (p
          ? (this.notifyOutgoingListeners(c), this.packet(c))
          : this.sendBuffer.push(c)),
      (this.flags = {}),
      this
    );
  }
  _registerAckCallback(t, s) {
    var i;
    const a =
      (i = this.flags.timeout) !== null && i !== void 0
        ? i
        : this._opts.ackTimeout;
    if (a === void 0) {
      this.acks[t] = s;
      return;
    }
    const u = this.io.setTimeoutFn(() => {
        delete this.acks[t];
        for (let f = 0; f < this.sendBuffer.length; f++)
          this.sendBuffer[f].id === t && this.sendBuffer.splice(f, 1);
        s.call(this, new Error("operation has timed out"));
      }, a),
      c = (...f) => {
        this.io.clearTimeoutFn(u), s.apply(this, f);
      };
    (c.withError = !0), (this.acks[t] = c);
  }
  emitWithAck(t, ...s) {
    return new Promise((i, a) => {
      const u = (c, f) => (c ? a(c) : i(f));
      (u.withError = !0), s.push(u), this.emit(t, ...s);
    });
  }
  _addToQueue(t) {
    let s;
    typeof t[t.length - 1] == "function" && (s = t.pop());
    const i = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags),
    };
    t.push((a, ...u) =>
      i !== this._queue[0]
        ? void 0
        : (a !== null
            ? i.tryCount > this._opts.retries &&
              (this._queue.shift(), s && s(a))
            : (this._queue.shift(), s && s(null, ...u)),
          (i.pending = !1),
          this._drainQueue())
    ),
      this._queue.push(i),
      this._drainQueue();
  }
  _drainQueue(t = !1) {
    if (!this.connected || this._queue.length === 0) return;
    const s = this._queue[0];
    (s.pending && !t) ||
      ((s.pending = !0),
      s.tryCount++,
      (this.flags = s.flags),
      this.emit.apply(this, s.args));
  }
  packet(t) {
    (t.nsp = this.nsp), this.io._packet(t);
  }
  onopen() {
    typeof this.auth == "function"
      ? this.auth((t) => {
          this._sendConnectPacket(t);
        })
      : this._sendConnectPacket(this.auth);
  }
  _sendConnectPacket(t) {
    this.packet({
      type: je.CONNECT,
      data: this._pid
        ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t)
        : t,
    });
  }
  onerror(t) {
    this.connected || this.emitReserved("connect_error", t);
  }
  onclose(t, s) {
    (this.connected = !1),
      delete this.id,
      this.emitReserved("disconnect", t, s),
      this._clearAcks();
  }
  _clearAcks() {
    Object.keys(this.acks).forEach((t) => {
      if (!this.sendBuffer.some((i) => String(i.id) === t)) {
        const i = this.acks[t];
        delete this.acks[t],
          i.withError &&
            i.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  onpacket(t) {
    if (t.nsp === this.nsp)
      switch (t.type) {
        case je.CONNECT:
          t.data && t.data.sid
            ? this.onconnect(t.data.sid, t.data.pid)
            : this.emitReserved(
                "connect_error",
                new Error(
                  "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                )
              );
          break;
        case je.EVENT:
        case je.BINARY_EVENT:
          this.onevent(t);
          break;
        case je.ACK:
        case je.BINARY_ACK:
          this.onack(t);
          break;
        case je.DISCONNECT:
          this.ondisconnect();
          break;
        case je.CONNECT_ERROR:
          this.destroy();
          const i = new Error(t.data.message);
          (i.data = t.data.data), this.emitReserved("connect_error", i);
          break;
      }
  }
  onevent(t) {
    const s = t.data || [];
    t.id != null && s.push(this.ack(t.id)),
      this.connected
        ? this.emitEvent(s)
        : this.receiveBuffer.push(Object.freeze(s));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const s = this._anyListeners.slice();
      for (const i of s) i.apply(this, t);
    }
    super.emit.apply(this, t),
      this._pid &&
        t.length &&
        typeof t[t.length - 1] == "string" &&
        (this._lastOffset = t[t.length - 1]);
  }
  ack(t) {
    const s = this;
    let i = !1;
    return function (...a) {
      i || ((i = !0), s.packet({ type: je.ACK, id: t, data: a }));
    };
  }
  onack(t) {
    const s = this.acks[t.id];
    typeof s == "function" &&
      (delete this.acks[t.id],
      s.withError && t.data.unshift(null),
      s.apply(this, t.data));
  }
  onconnect(t, s) {
    (this.id = t),
      (this.recovered = s && this._pid === s),
      (this._pid = s),
      (this.connected = !0),
      this.emitBuffered(),
      this.emitReserved("connect"),
      this._drainQueue(!0);
  }
  emitBuffered() {
    this.receiveBuffer.forEach((t) => this.emitEvent(t)),
      (this.receiveBuffer = []),
      this.sendBuffer.forEach((t) => {
        this.notifyOutgoingListeners(t), this.packet(t);
      }),
      (this.sendBuffer = []);
  }
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  destroy() {
    this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)),
      this.io._destroy(this);
  }
  disconnect() {
    return (
      this.connected && this.packet({ type: je.DISCONNECT }),
      this.destroy(),
      this.connected && this.onclose("io client disconnect"),
      this
    );
  }
  close() {
    return this.disconnect();
  }
  compress(t) {
    return (this.flags.compress = t), this;
  }
  get volatile() {
    return (this.flags.volatile = !0), this;
  }
  timeout(t) {
    return (this.flags.timeout = t), this;
  }
  onAny(t) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.push(t),
      this
    );
  }
  prependAny(t) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.unshift(t),
      this
    );
  }
  offAny(t) {
    if (!this._anyListeners) return this;
    if (t) {
      const s = this._anyListeners;
      for (let i = 0; i < s.length; i++)
        if (t === s[i]) return s.splice(i, 1), this;
    } else this._anyListeners = [];
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(t) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.push(t),
      this
    );
  }
  prependAnyOutgoing(t) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.unshift(t),
      this
    );
  }
  offAnyOutgoing(t) {
    if (!this._anyOutgoingListeners) return this;
    if (t) {
      const s = this._anyOutgoingListeners;
      for (let i = 0; i < s.length; i++)
        if (t === s[i]) return s.splice(i, 1), this;
    } else this._anyOutgoingListeners = [];
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(t) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const s = this._anyOutgoingListeners.slice();
      for (const i of s) i.apply(this, t.data);
    }
  }
}
function Ks(n) {
  (n = n || {}),
    (this.ms = n.min || 100),
    (this.max = n.max || 1e4),
    (this.factor = n.factor || 2),
    (this.jitter = n.jitter > 0 && n.jitter <= 1 ? n.jitter : 0),
    (this.attempts = 0);
}
Ks.prototype.duration = function () {
  var n = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(),
      s = Math.floor(t * this.jitter * n);
    n = (Math.floor(t * 10) & 1) == 0 ? n - s : n + s;
  }
  return Math.min(n, this.max) | 0;
};
Ks.prototype.reset = function () {
  this.attempts = 0;
};
Ks.prototype.setMin = function (n) {
  this.ms = n;
};
Ks.prototype.setMax = function (n) {
  this.max = n;
};
Ks.prototype.setJitter = function (n) {
  this.jitter = n;
};
class Ec extends st {
  constructor(t, s) {
    var i;
    super(),
      (this.nsps = {}),
      (this.subs = []),
      t && typeof t == "object" && ((s = t), (t = void 0)),
      (s = s || {}),
      (s.path = s.path || "/socket.io"),
      (this.opts = s),
      el(this, s),
      this.reconnection(s.reconnection !== !1),
      this.reconnectionAttempts(s.reconnectionAttempts || 1 / 0),
      this.reconnectionDelay(s.reconnectionDelay || 1e3),
      this.reconnectionDelayMax(s.reconnectionDelayMax || 5e3),
      this.randomizationFactor(
        (i = s.randomizationFactor) !== null && i !== void 0 ? i : 0.5
      ),
      (this.backoff = new Ks({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor(),
      })),
      this.timeout(s.timeout == null ? 2e4 : s.timeout),
      (this._readyState = "closed"),
      (this.uri = t);
    const a = s.parser || Vk;
    (this.encoder = new a.Encoder()),
      (this.decoder = new a.Decoder()),
      (this._autoConnect = s.autoConnect !== !1),
      this._autoConnect && this.open();
  }
  reconnection(t) {
    return arguments.length
      ? ((this._reconnection = !!t), t || (this.skipReconnect = !0), this)
      : this._reconnection;
  }
  reconnectionAttempts(t) {
    return t === void 0
      ? this._reconnectionAttempts
      : ((this._reconnectionAttempts = t), this);
  }
  reconnectionDelay(t) {
    var s;
    return t === void 0
      ? this._reconnectionDelay
      : ((this._reconnectionDelay = t),
        (s = this.backoff) === null || s === void 0 || s.setMin(t),
        this);
  }
  randomizationFactor(t) {
    var s;
    return t === void 0
      ? this._randomizationFactor
      : ((this._randomizationFactor = t),
        (s = this.backoff) === null || s === void 0 || s.setJitter(t),
        this);
  }
  reconnectionDelayMax(t) {
    var s;
    return t === void 0
      ? this._reconnectionDelayMax
      : ((this._reconnectionDelayMax = t),
        (s = this.backoff) === null || s === void 0 || s.setMax(t),
        this);
  }
  timeout(t) {
    return arguments.length ? ((this._timeout = t), this) : this._timeout;
  }
  maybeReconnectOnOpen() {
    !this._reconnecting &&
      this._reconnection &&
      this.backoff.attempts === 0 &&
      this.reconnect();
  }
  open(t) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new Ok(this.uri, this.opts);
    const s = this.engine,
      i = this;
    (this._readyState = "opening"), (this.skipReconnect = !1);
    const a = Sn(s, "open", function () {
        i.onopen(), t && t();
      }),
      u = (f) => {
        this.cleanup(),
          (this._readyState = "closed"),
          this.emitReserved("error", f),
          t ? t(f) : this.maybeReconnectOnOpen();
      },
      c = Sn(s, "error", u);
    if (this._timeout !== !1) {
      const f = this._timeout,
        p = this.setTimeoutFn(() => {
          a(), u(new Error("timeout")), s.close();
        }, f);
      this.opts.autoUnref && p.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(p);
        });
    }
    return this.subs.push(a), this.subs.push(c), this;
  }
  connect(t) {
    return this.open(t);
  }
  onopen() {
    this.cleanup(), (this._readyState = "open"), this.emitReserved("open");
    const t = this.engine;
    this.subs.push(
      Sn(t, "ping", this.onping.bind(this)),
      Sn(t, "data", this.ondata.bind(this)),
      Sn(t, "error", this.onerror.bind(this)),
      Sn(t, "close", this.onclose.bind(this)),
      Sn(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(t) {
    try {
      this.decoder.add(t);
    } catch (s) {
      this.onclose("parse error", s);
    }
  }
  ondecoded(t) {
    Ja(() => {
      this.emitReserved("packet", t);
    }, this.setTimeoutFn);
  }
  onerror(t) {
    this.emitReserved("error", t);
  }
  socket(t, s) {
    let i = this.nsps[t];
    return (
      i
        ? this._autoConnect && !i.active && i.connect()
        : ((i = new ry(this, t, s)), (this.nsps[t] = i)),
      i
    );
  }
  _destroy(t) {
    const s = Object.keys(this.nsps);
    for (const i of s) if (this.nsps[i].active) return;
    this._close();
  }
  _packet(t) {
    const s = this.encoder.encode(t);
    for (let i = 0; i < s.length; i++) this.engine.write(s[i], t.options);
  }
  cleanup() {
    this.subs.forEach((t) => t()),
      (this.subs.length = 0),
      this.decoder.destroy();
  }
  _close() {
    (this.skipReconnect = !0),
      (this._reconnecting = !1),
      this.onclose("forced close");
  }
  disconnect() {
    return this._close();
  }
  onclose(t, s) {
    var i;
    this.cleanup(),
      (i = this.engine) === null || i === void 0 || i.close(),
      this.backoff.reset(),
      (this._readyState = "closed"),
      this.emitReserved("close", t, s),
      this._reconnection && !this.skipReconnect && this.reconnect();
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const t = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(),
        this.emitReserved("reconnect_failed"),
        (this._reconnecting = !1);
    else {
      const s = this.backoff.duration();
      this._reconnecting = !0;
      const i = this.setTimeoutFn(() => {
        t.skipReconnect ||
          (this.emitReserved("reconnect_attempt", t.backoff.attempts),
          !t.skipReconnect &&
            t.open((a) => {
              a
                ? ((t._reconnecting = !1),
                  t.reconnect(),
                  this.emitReserved("reconnect_error", a))
                : t.onreconnect();
            }));
      }, s);
      this.opts.autoUnref && i.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(i);
        });
    }
  }
  onreconnect() {
    const t = this.backoff.attempts;
    (this._reconnecting = !1),
      this.backoff.reset(),
      this.emitReserved("reconnect", t);
  }
}
const ji = {};
function Sa(n, t) {
  typeof n == "object" && ((t = n), (n = void 0)), (t = t || {});
  const s = Ak(n, t.path || "/socket.io"),
    i = s.source,
    a = s.id,
    u = s.path,
    c = ji[a] && u in ji[a].nsps,
    f = t.forceNew || t["force new connection"] || t.multiplex === !1 || c;
  let p;
  return (
    f ? (p = new Ec(i, t)) : (ji[a] || (ji[a] = new Ec(i, t)), (p = ji[a])),
    s.query && !t.query && (t.query = s.queryKey),
    p.socket(s.path, t)
  );
}
Object.assign(Sa, { Manager: Ec, Socket: ry, io: Sa, connect: Sa });
const $t = Sa({
  path: "/socket.io",
  transports: ["websocket"],
  autoConnect: !0,
});
function Hk() {
  const [n, t] = k.useState(null);
  return (
    k.useEffect(() => {
      const s = (i) => {
        const a = i.questions.find((u) => !u.hidden) || null;
        t(a);
      };
      return (
        $t.on("questions:init", s),
        $t.on("questions:update", s),
        () => {
          $t.off("questions:init", s), $t.off("questions:update", s);
        }
      );
    }, []),
    n
      ? v.jsx("div", {
          className:
            "w-full bg-black/70 text-white py-2 border-b border-white/10",
          children: v.jsx("div", {
            className: "container mx-auto px-4 overflow-hidden",
            children: v.jsxs("div", {
              className: "marquee whitespace-nowrap text-sm",
              children: [
                v.jsx("span", {
                  className: "text-red-400 font-semibold mr-3",
                  children: "Breaking News",
                }),
                `${n.firstName} ${n.lastName} · ${n.text}`,
              ],
            }),
          }),
        })
      : null
  );
}
// N'oubliez pas d'importer 'useRef' et 'useState' de React si ce n'est pas déjà fait :
// import { useRef, useState } from 'react';

// VideoPlayer.jsx
import React, { useRef, useState, useEffect } from "react";

// --- VIDEO PLAYER ---
function VideoPlayer() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;
    const newMuted = !isMuted;
    videoRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    if (video.requestFullscreen) video.requestFullscreen();
    else if (video.webkitRequestFullscreen) video.webkitRequestFullscreen();
    else if (video.mozRequestFullScreen) video.mozRequestFullScreen();
    else if (video.msRequestFullscreen) video.msRequestFullscreen();
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden ring-1 ring-gray-600 bg-black">
      <video
        ref={videoRef}
        className="w-full h-full aspect-video object-cover"
        src="/teaser EMC.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <button
        onClick={toggleMute}
        className="absolute top-3 right-3 h-10 w-10 flex items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md hover:bg-black/70 transition z-10"
        aria-label={isMuted ? "Activer le son" : "Couper le son"}
      >
        {isMuted ? "🔇" : "🔊"}
      </button>
      <button
        onClick={toggleFullscreen}
        className="absolute bottom-3 right-3 h-10 w-10 flex items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md hover:bg-black/70 transition z-10"
        aria-label="Plein Écran"
      >
        ⬜
      </button>
    </div>
  );
}

// --- Export par défaut de ton fichier principal ---
export default function App() {
  return (
    <div>
      <VideoPlayer />
      {/* Ici tu peux remettre ton fil Breaking News ou autres composants */}
    </div>
  );
}

function Qk() {
  const n = "Au cœur de l'urgence, au cœur du débat.",
    [t, s] = k.useState(""),
    i = k.useRef(null);
  k.useEffect(() => {
    const u = document.querySelector("#jingle");
    u?.classList.add("jingle-in");
    const c = setTimeout(() => u?.classList.remove("jingle-in"), 2e3);
    let f = 0;
    const p = () => {
      (f += 1),
        s(n.slice(0, f)),
        f < n.length && (m = requestAnimationFrame(p));
    };
    let m = requestAnimationFrame(p);
    const g = () => {
      const x = window.scrollY * 0.2;
      i.current && (i.current.style.transform = `translateY(${x}px)`);
    };
    return (
      window.addEventListener("scroll", g, { passive: !0 }),
      () => {
        clearTimeout(c),
          cancelAnimationFrame(m),
          window.removeEventListener("scroll", g);
      }
    );
  }, []);
  const a = k.useMemo(
    () => [
      { text: "Plateau TV Moderne" },
      { text: "Ouvert au grand public" },
      { text: "Interactif & immersif" },
    ],
    []
  );
  return v.jsxs(ls, {
    children: [
      v.jsx(Hk, {}),
      v.jsxs("section", {
        className: "relative overflow-hidden",
        children: [
          v.jsx("div", {
            ref: i,
            className:
              "absolute inset-0 -z-10 bg-[radial-gradient(1000px_600px_at_10%_-10%,rgba(230,57,70,0.12),transparent),radial-gradient(800px_500px_at_90%_10%,rgba(255,255,255,0.06),transparent)]",
          }),
          v.jsxs("div", {
            className: "container mx-auto px-4 pt-16 pb-24",
            children: [
              v.jsx("div", {
                id: "jingle",
                className:
                  "opacity-0 scale-90 transition-all duration-700 reveal",
                children: v.jsxs("div", {
                  className:
                    "inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-600/20 ring-1 ring-red-500/60",
                  children: [
                    v.jsx("span", {
                      className: "h-2 w-2 rounded-full bg-red-500 animate-ping",
                    }),
                    v.jsx("span", {
                      className:
                        "text-xs font-semibold uppercase tracking-widest text-white",
                      children: "EN DIRECT • 2 OCTOBRE 2024",
                    }),
                  ],
                }),
              }),
              v.jsxs("h1", {
                className:
                  "mt-6 text-5xl md:text-7xl heading font-extrabold tracking-tight leading-tight reveal",
                children: [
                  v.jsx("span", { className: "logo-red", children: "CODE" }),
                  " ",
                  v.jsx("span", {
                    className: "text-foreground",
                    children: "ROUGE",
                  }),
                ],
              }),
              v.jsxs("p", {
                className:
                  "mt-4 text-xl md:text-2xl text-muted-foreground max-w-3xl reveal",
                children: [
                  t,
                  v.jsx("span", {
                    className: "border-r-2 border-primary ml-0.5 animate-pulse",
                  }),
                ],
              }),
              v.jsx("div", {
                className:
                  "mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground reveal",
                children: a.map((u) =>
                  v.jsx(
                    "span",
                    {
                      className:
                        "px-2 py-1 rounded bg-secondary ring-1 ring-border",
                      children: u.text,
                    },
                    u.text
                  )
                ),
              }),
              v.jsxs("div", {
                className:
                  "mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 reveal",
                children: [
                  v.jsxs(Is, {
                    to: "/poser-une-question",
                    className:
                      "btn-primary inline-flex items-center gap-2 active:scale-[.98]",
                    children: [
                      "Poser une question ",
                      v.jsx(fx, { className: "h-4 w-4" }),
                    ],
                  }),
                  v.jsx(Is, {
                    to: "/questions-en-direct",
                    className: "btn-secondary active:scale-[.98]",
                    children: "Questions en direct",
                  }),
                ],
              }),
              v.jsx("div", {
                className: "mt-10 text-sm text-muted-foreground reveal",
                children:
                  "Diffusion : Jeudi 2 octobre 13:00 • Présentateur : Yann Le Fur",
              }),
            ],
          }),
          v.jsx("div", {
            className: "container mx-auto px-4 mt-10 mb-16 reveal",
            children: v.jsx(qk, {}),
          }),
          v.jsx("div", {
            className: "container mx-auto px-4 pb-24 reveal",
            children: v.jsx(GS, {}),
          }),
        ],
      }),
    ],
  });
}
var ze;
(function (n) {
  n.assertEqual = (a) => {};
  function t(a) {}
  n.assertIs = t;
  function s(a) {
    throw new Error();
  }
  (n.assertNever = s),
    (n.arrayToEnum = (a) => {
      const u = {};
      for (const c of a) u[c] = c;
      return u;
    }),
    (n.getValidEnumValues = (a) => {
      const u = n.objectKeys(a).filter((f) => typeof a[a[f]] != "number"),
        c = {};
      for (const f of u) c[f] = a[f];
      return n.objectValues(c);
    }),
    (n.objectValues = (a) =>
      n.objectKeys(a).map(function (u) {
        return a[u];
      })),
    (n.objectKeys =
      typeof Object.keys == "function"
        ? (a) => Object.keys(a)
        : (a) => {
            const u = [];
            for (const c in a)
              Object.prototype.hasOwnProperty.call(a, c) && u.push(c);
            return u;
          }),
    (n.find = (a, u) => {
      for (const c of a) if (u(c)) return c;
    }),
    (n.isInteger =
      typeof Number.isInteger == "function"
        ? (a) => Number.isInteger(a)
        : (a) =>
            typeof a == "number" && Number.isFinite(a) && Math.floor(a) === a);
  function i(a, u = " | ") {
    return a.map((c) => (typeof c == "string" ? `'${c}'` : c)).join(u);
  }
  (n.joinValues = i),
    (n.jsonStringifyReplacer = (a, u) =>
      typeof u == "bigint" ? u.toString() : u);
})(ze || (ze = {}));
var $p;
(function (n) {
  n.mergeShapes = (t, s) => ({ ...t, ...s });
})($p || ($p = {}));
const he = ze.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
  ]),
  Tr = (n) => {
    switch (typeof n) {
      case "undefined":
        return he.undefined;
      case "string":
        return he.string;
      case "number":
        return Number.isNaN(n) ? he.nan : he.number;
      case "boolean":
        return he.boolean;
      case "function":
        return he.function;
      case "bigint":
        return he.bigint;
      case "symbol":
        return he.symbol;
      case "object":
        return Array.isArray(n)
          ? he.array
          : n === null
          ? he.null
          : n.then &&
            typeof n.then == "function" &&
            n.catch &&
            typeof n.catch == "function"
          ? he.promise
          : typeof Map < "u" && n instanceof Map
          ? he.map
          : typeof Set < "u" && n instanceof Set
          ? he.set
          : typeof Date < "u" && n instanceof Date
          ? he.date
          : he.object;
      default:
        return he.unknown;
    }
  },
  Y = ze.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
  ]);
class er extends Error {
  get errors() {
    return this.issues;
  }
  constructor(t) {
    super(),
      (this.issues = []),
      (this.addIssue = (i) => {
        this.issues = [...this.issues, i];
      }),
      (this.addIssues = (i = []) => {
        this.issues = [...this.issues, ...i];
      });
    const s = new.target.prototype;
    Object.setPrototypeOf
      ? Object.setPrototypeOf(this, s)
      : (this.__proto__ = s),
      (this.name = "ZodError"),
      (this.issues = t);
  }
  format(t) {
    const s =
        t ||
        function (u) {
          return u.message;
        },
      i = { _errors: [] },
      a = (u) => {
        for (const c of u.issues)
          if (c.code === "invalid_union") c.unionErrors.map(a);
          else if (c.code === "invalid_return_type") a(c.returnTypeError);
          else if (c.code === "invalid_arguments") a(c.argumentsError);
          else if (c.path.length === 0) i._errors.push(s(c));
          else {
            let f = i,
              p = 0;
            for (; p < c.path.length; ) {
              const m = c.path[p];
              p === c.path.length - 1
                ? ((f[m] = f[m] || { _errors: [] }), f[m]._errors.push(s(c)))
                : (f[m] = f[m] || { _errors: [] }),
                (f = f[m]),
                p++;
            }
          }
      };
    return a(this), i;
  }
  static assert(t) {
    if (!(t instanceof er)) throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, ze.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (s) => s.message) {
    const s = {},
      i = [];
    for (const a of this.issues)
      if (a.path.length > 0) {
        const u = a.path[0];
        (s[u] = s[u] || []), s[u].push(t(a));
      } else i.push(t(a));
    return { formErrors: i, fieldErrors: s };
  }
  get formErrors() {
    return this.flatten();
  }
}
er.create = (n) => new er(n);
const Cc = (n, t) => {
  let s;
  switch (n.code) {
    case Y.invalid_type:
      n.received === he.undefined
        ? (s = "Required")
        : (s = `Expected ${n.expected}, received ${n.received}`);
      break;
    case Y.invalid_literal:
      s = `Invalid literal value, expected ${JSON.stringify(
        n.expected,
        ze.jsonStringifyReplacer
      )}`;
      break;
    case Y.unrecognized_keys:
      s = `Unrecognized key(s) in object: ${ze.joinValues(n.keys, ", ")}`;
      break;
    case Y.invalid_union:
      s = "Invalid input";
      break;
    case Y.invalid_union_discriminator:
      s = `Invalid discriminator value. Expected ${ze.joinValues(n.options)}`;
      break;
    case Y.invalid_enum_value:
      s = `Invalid enum value. Expected ${ze.joinValues(
        n.options
      )}, received '${n.received}'`;
      break;
    case Y.invalid_arguments:
      s = "Invalid function arguments";
      break;
    case Y.invalid_return_type:
      s = "Invalid function return type";
      break;
    case Y.invalid_date:
      s = "Invalid date";
      break;
    case Y.invalid_string:
      typeof n.validation == "object"
        ? "includes" in n.validation
          ? ((s = `Invalid input: must include "${n.validation.includes}"`),
            typeof n.validation.position == "number" &&
              (s = `${s} at one or more positions greater than or equal to ${n.validation.position}`))
          : "startsWith" in n.validation
          ? (s = `Invalid input: must start with "${n.validation.startsWith}"`)
          : "endsWith" in n.validation
          ? (s = `Invalid input: must end with "${n.validation.endsWith}"`)
          : ze.assertNever(n.validation)
        : n.validation !== "regex"
        ? (s = `Invalid ${n.validation}`)
        : (s = "Invalid");
      break;
    case Y.too_small:
      n.type === "array"
        ? (s = `Array must contain ${
            n.exact ? "exactly" : n.inclusive ? "at least" : "more than"
          } ${n.minimum} element(s)`)
        : n.type === "string"
        ? (s = `String must contain ${
            n.exact ? "exactly" : n.inclusive ? "at least" : "over"
          } ${n.minimum} character(s)`)
        : n.type === "number"
        ? (s = `Number must be ${
            n.exact
              ? "exactly equal to "
              : n.inclusive
              ? "greater than or equal to "
              : "greater than "
          }${n.minimum}`)
        : n.type === "bigint"
        ? (s = `Number must be ${
            n.exact
              ? "exactly equal to "
              : n.inclusive
              ? "greater than or equal to "
              : "greater than "
          }${n.minimum}`)
        : n.type === "date"
        ? (s = `Date must be ${
            n.exact
              ? "exactly equal to "
              : n.inclusive
              ? "greater than or equal to "
              : "greater than "
          }${new Date(Number(n.minimum))}`)
        : (s = "Invalid input");
      break;
    case Y.too_big:
      n.type === "array"
        ? (s = `Array must contain ${
            n.exact ? "exactly" : n.inclusive ? "at most" : "less than"
          } ${n.maximum} element(s)`)
        : n.type === "string"
        ? (s = `String must contain ${
            n.exact ? "exactly" : n.inclusive ? "at most" : "under"
          } ${n.maximum} character(s)`)
        : n.type === "number"
        ? (s = `Number must be ${
            n.exact
              ? "exactly"
              : n.inclusive
              ? "less than or equal to"
              : "less than"
          } ${n.maximum}`)
        : n.type === "bigint"
        ? (s = `BigInt must be ${
            n.exact
              ? "exactly"
              : n.inclusive
              ? "less than or equal to"
              : "less than"
          } ${n.maximum}`)
        : n.type === "date"
        ? (s = `Date must be ${
            n.exact
              ? "exactly"
              : n.inclusive
              ? "smaller than or equal to"
              : "smaller than"
          } ${new Date(Number(n.maximum))}`)
        : (s = "Invalid input");
      break;
    case Y.custom:
      s = "Invalid input";
      break;
    case Y.invalid_intersection_types:
      s = "Intersection results could not be merged";
      break;
    case Y.not_multiple_of:
      s = `Number must be a multiple of ${n.multipleOf}`;
      break;
    case Y.not_finite:
      s = "Number must be finite";
      break;
    default:
      (s = t.defaultError), ze.assertNever(n);
  }
  return { message: s };
};
let Zk = Cc;
function Kk() {
  return Zk;
}
const Yk = (n) => {
  const { data: t, path: s, errorMaps: i, issueData: a } = n,
    u = [...s, ...(a.path || [])],
    c = { ...a, path: u };
  if (a.message !== void 0) return { ...a, path: u, message: a.message };
  let f = "";
  const p = i
    .filter((m) => !!m)
    .slice()
    .reverse();
  for (const m of p) f = m(c, { data: t, defaultError: f }).message;
  return { ...a, path: u, message: f };
};
function oe(n, t) {
  const s = Kk(),
    i = Yk({
      issueData: t,
      data: n.data,
      path: n.path,
      errorMaps: [
        n.common.contextualErrorMap,
        n.schemaErrorMap,
        s,
        s === Cc ? void 0 : Cc,
      ].filter((a) => !!a),
    });
  n.common.issues.push(i);
}
class Gt {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, s) {
    const i = [];
    for (const a of s) {
      if (a.status === "aborted") return Ee;
      a.status === "dirty" && t.dirty(), i.push(a.value);
    }
    return { status: t.value, value: i };
  }
  static async mergeObjectAsync(t, s) {
    const i = [];
    for (const a of s) {
      const u = await a.key,
        c = await a.value;
      i.push({ key: u, value: c });
    }
    return Gt.mergeObjectSync(t, i);
  }
  static mergeObjectSync(t, s) {
    const i = {};
    for (const a of s) {
      const { key: u, value: c } = a;
      if (u.status === "aborted" || c.status === "aborted") return Ee;
      u.status === "dirty" && t.dirty(),
        c.status === "dirty" && t.dirty(),
        u.value !== "__proto__" &&
          (typeof c.value < "u" || a.alwaysSet) &&
          (i[u.value] = c.value);
    }
    return { status: t.value, value: i };
  }
}
const Ee = Object.freeze({ status: "aborted" }),
  Ii = (n) => ({ status: "dirty", value: n }),
  an = (n) => ({ status: "valid", value: n }),
  Up = (n) => n.status === "aborted",
  Vp = (n) => n.status === "dirty",
  Bs = (n) => n.status === "valid",
  Aa = (n) => typeof Promise < "u" && n instanceof Promise;
var me;
(function (n) {
  (n.errToObj = (t) => (typeof t == "string" ? { message: t } : t || {})),
    (n.toString = (t) => (typeof t == "string" ? t : t?.message));
})(me || (me = {}));
class Dr {
  constructor(t, s, i, a) {
    (this._cachedPath = []),
      (this.parent = t),
      (this.data = s),
      (this._path = i),
      (this._key = a);
  }
  get path() {
    return (
      this._cachedPath.length ||
        (Array.isArray(this._key)
          ? this._cachedPath.push(...this._path, ...this._key)
          : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    );
  }
}
const Wp = (n, t) => {
  if (Bs(t)) return { success: !0, data: t.value };
  if (!n.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const s = new er(n.common.issues);
      return (this._error = s), this._error;
    },
  };
};
function Oe(n) {
  if (!n) return {};
  const {
    errorMap: t,
    invalid_type_error: s,
    required_error: i,
    description: a,
  } = n;
  if (t && (s || i))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
    );
  return t
    ? { errorMap: t, description: a }
    : {
        errorMap: (c, f) => {
          const { message: p } = n;
          return c.code === "invalid_enum_value"
            ? { message: p ?? f.defaultError }
            : typeof f.data > "u"
            ? { message: p ?? i ?? f.defaultError }
            : c.code !== "invalid_type"
            ? { message: f.defaultError }
            : { message: p ?? s ?? f.defaultError };
        },
        description: a,
      };
}
class De {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Tr(t.data);
  }
  _getOrReturnCtx(t, s) {
    return (
      s || {
        common: t.parent.common,
        data: t.data,
        parsedType: Tr(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      }
    );
  }
  _processInputParams(t) {
    return {
      status: new Gt(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Tr(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      },
    };
  }
  _parseSync(t) {
    const s = this._parse(t);
    if (Aa(s)) throw new Error("Synchronous parse encountered promise.");
    return s;
  }
  _parseAsync(t) {
    const s = this._parse(t);
    return Promise.resolve(s);
  }
  parse(t, s) {
    const i = this.safeParse(t, s);
    if (i.success) return i.data;
    throw i.error;
  }
  safeParse(t, s) {
    const i = {
        common: {
          issues: [],
          async: s?.async ?? !1,
          contextualErrorMap: s?.errorMap,
        },
        path: s?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: Tr(t),
      },
      a = this._parseSync({ data: t, path: i.path, parent: i });
    return Wp(i, a);
  }
  "~validate"(t) {
    const s = {
      common: { issues: [], async: !!this["~standard"].async },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Tr(t),
    };
    if (!this["~standard"].async)
      try {
        const i = this._parseSync({ data: t, path: [], parent: s });
        return Bs(i) ? { value: i.value } : { issues: s.common.issues };
      } catch (i) {
        i?.message?.toLowerCase()?.includes("encountered") &&
          (this["~standard"].async = !0),
          (s.common = { issues: [], async: !0 });
      }
    return this._parseAsync({ data: t, path: [], parent: s }).then((i) =>
      Bs(i) ? { value: i.value } : { issues: s.common.issues }
    );
  }
  async parseAsync(t, s) {
    const i = await this.safeParseAsync(t, s);
    if (i.success) return i.data;
    throw i.error;
  }
  async safeParseAsync(t, s) {
    const i = {
        common: { issues: [], contextualErrorMap: s?.errorMap, async: !0 },
        path: s?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: Tr(t),
      },
      a = this._parse({ data: t, path: i.path, parent: i }),
      u = await (Aa(a) ? a : Promise.resolve(a));
    return Wp(i, u);
  }
  refine(t, s) {
    const i = (a) =>
      typeof s == "string" || typeof s > "u"
        ? { message: s }
        : typeof s == "function"
        ? s(a)
        : s;
    return this._refinement((a, u) => {
      const c = t(a),
        f = () => u.addIssue({ code: Y.custom, ...i(a) });
      return typeof Promise < "u" && c instanceof Promise
        ? c.then((p) => (p ? !0 : (f(), !1)))
        : c
        ? !0
        : (f(), !1);
    });
  }
  refinement(t, s) {
    return this._refinement((i, a) =>
      t(i) ? !0 : (a.addIssue(typeof s == "function" ? s(i, a) : s), !1)
    );
  }
  _refinement(t) {
    return new Us({
      schema: this,
      typeName: Ce.ZodEffects,
      effect: { type: "refinement", refinement: t },
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  constructor(t) {
    (this.spa = this.safeParseAsync),
      (this._def = t),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this)),
      (this["~standard"] = {
        version: 1,
        vendor: "zod",
        validate: (s) => this["~validate"](s),
      });
  }
  optional() {
    return Ar.create(this, this._def);
  }
  nullable() {
    return Vs.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Fn.create(this);
  }
  promise() {
    return Ia.create(this, this._def);
  }
  or(t) {
    return La.create([this, t], this._def);
  }
  and(t) {
    return Ma.create(this, t, this._def);
  }
  transform(t) {
    return new Us({
      ...Oe(this._def),
      schema: this,
      typeName: Ce.ZodEffects,
      effect: { type: "transform", transform: t },
    });
  }
  default(t) {
    const s = typeof t == "function" ? t : () => t;
    return new Nc({
      ...Oe(this._def),
      innerType: this,
      defaultValue: s,
      typeName: Ce.ZodDefault,
    });
  }
  brand() {
    return new xE({ typeName: Ce.ZodBranded, type: this, ...Oe(this._def) });
  }
  catch(t) {
    const s = typeof t == "function" ? t : () => t;
    return new Rc({
      ...Oe(this._def),
      innerType: this,
      catchValue: s,
      typeName: Ce.ZodCatch,
    });
  }
  describe(t) {
    const s = this.constructor;
    return new s({ ...this._def, description: t });
  }
  pipe(t) {
    return id.create(this, t);
  }
  readonly() {
    return Pc.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Gk = /^c[^\s-]{8,}$/i,
  Xk = /^[0-9a-z]+$/,
  Jk = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  eE =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  tE = /^[a-z0-9_-]{21}$/i,
  nE = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  rE =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  sE =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  iE = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Gu;
const oE =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  aE =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  lE =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  uE =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  cE = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  dE = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  sy =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  fE = new RegExp(`^${sy}$`);
function iy(n) {
  let t = "[0-5]\\d";
  n.precision
    ? (t = `${t}\\.\\d{${n.precision}}`)
    : n.precision == null && (t = `${t}(\\.\\d+)?`);
  const s = n.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${s}`;
}
function hE(n) {
  return new RegExp(`^${iy(n)}$`);
}
function pE(n) {
  let t = `${sy}T${iy(n)}`;
  const s = [];
  return (
    s.push(n.local ? "Z?" : "Z"),
    n.offset && s.push("([+-]\\d{2}:?\\d{2})"),
    (t = `${t}(${s.join("|")})`),
    new RegExp(`^${t}$`)
  );
}
function mE(n, t) {
  return !!(
    ((t === "v4" || !t) && oE.test(n)) ||
    ((t === "v6" || !t) && lE.test(n))
  );
}
function gE(n, t) {
  if (!nE.test(n)) return !1;
  try {
    const [s] = n.split(".");
    if (!s) return !1;
    const i = s
        .replace(/-/g, "+")
        .replace(/_/g, "/")
        .padEnd(s.length + ((4 - (s.length % 4)) % 4), "="),
      a = JSON.parse(atob(i));
    return !(
      typeof a != "object" ||
      a === null ||
      ("typ" in a && a?.typ !== "JWT") ||
      !a.alg ||
      (t && a.alg !== t)
    );
  } catch {
    return !1;
  }
}
function yE(n, t) {
  return !!(
    ((t === "v4" || !t) && aE.test(n)) ||
    ((t === "v6" || !t) && uE.test(n))
  );
}
class Rr extends De {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = String(t.data)),
      this._getType(t) !== he.string)
    ) {
      const u = this._getOrReturnCtx(t);
      return (
        oe(u, {
          code: Y.invalid_type,
          expected: he.string,
          received: u.parsedType,
        }),
        Ee
      );
    }
    const i = new Gt();
    let a;
    for (const u of this._def.checks)
      if (u.kind === "min")
        t.data.length < u.value &&
          ((a = this._getOrReturnCtx(t, a)),
          oe(a, {
            code: Y.too_small,
            minimum: u.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: u.message,
          }),
          i.dirty());
      else if (u.kind === "max")
        t.data.length > u.value &&
          ((a = this._getOrReturnCtx(t, a)),
          oe(a, {
            code: Y.too_big,
            maximum: u.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: u.message,
          }),
          i.dirty());
      else if (u.kind === "length") {
        const c = t.data.length > u.value,
          f = t.data.length < u.value;
        (c || f) &&
          ((a = this._getOrReturnCtx(t, a)),
          c
            ? oe(a, {
                code: Y.too_big,
                maximum: u.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: u.message,
              })
            : f &&
              oe(a, {
                code: Y.too_small,
                minimum: u.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: u.message,
              }),
          i.dirty());
      } else if (u.kind === "email")
        sE.test(t.data) ||
          ((a = this._getOrReturnCtx(t, a)),
          oe(a, {
            validation: "email",
            code: Y.invalid_string,
            message: u.message,
          }),
          i.dirty());
      else if (u.kind === "emoji")
        Gu || (Gu = new RegExp(iE, "u")),
          Gu.test(t.data) ||
            ((a = this._getOrReturnCtx(t, a)),
            oe(a, {
              validation: "emoji",
              code: Y.invalid_string,
              message: u.message,
            }),
            i.dirty());
      else if (u.kind === "uuid")
        eE.test(t.data) ||
          ((a = this._getOrReturnCtx(t, a)),
          oe(a, {
            validation: "uuid",
            code: Y.invalid_string,
            message: u.message,
          }),
          i.dirty());
      else if (u.kind === "nanoid")
        tE.test(t.data) ||
          ((a = this._getOrReturnCtx(t, a)),
          oe(a, {
            validation: "nanoid",
            code: Y.invalid_string,
            message: u.message,
          }),
          i.dirty());
      else if (u.kind === "cuid")
        Gk.test(t.data) ||
          ((a = this._getOrReturnCtx(t, a)),
          oe(a, {
            validation: "cuid",
            code: Y.invalid_string,
            message: u.message,
          }),
          i.dirty());
      else if (u.kind === "cuid2")
        Xk.test(t.data) ||
          ((a = this._getOrReturnCtx(t, a)),
          oe(a, {
            validation: "cuid2",
            code: Y.invalid_string,
            message: u.message,
          }),
          i.dirty());
      else if (u.kind === "ulid")
        Jk.test(t.data) ||
          ((a = this._getOrReturnCtx(t, a)),
          oe(a, {
            validation: "ulid",
            code: Y.invalid_string,
            message: u.message,
          }),
          i.dirty());
      else if (u.kind === "url")
        try {
          new URL(t.data);
        } catch {
          (a = this._getOrReturnCtx(t, a)),
            oe(a, {
              validation: "url",
              code: Y.invalid_string,
              message: u.message,
            }),
            i.dirty();
        }
      else
        u.kind === "regex"
          ? ((u.regex.lastIndex = 0),
            u.regex.test(t.data) ||
              ((a = this._getOrReturnCtx(t, a)),
              oe(a, {
                validation: "regex",
                code: Y.invalid_string,
                message: u.message,
              }),
              i.dirty()))
          : u.kind === "trim"
          ? (t.data = t.data.trim())
          : u.kind === "includes"
          ? t.data.includes(u.value, u.position) ||
            ((a = this._getOrReturnCtx(t, a)),
            oe(a, {
              code: Y.invalid_string,
              validation: { includes: u.value, position: u.position },
              message: u.message,
            }),
            i.dirty())
          : u.kind === "toLowerCase"
          ? (t.data = t.data.toLowerCase())
          : u.kind === "toUpperCase"
          ? (t.data = t.data.toUpperCase())
          : u.kind === "startsWith"
          ? t.data.startsWith(u.value) ||
            ((a = this._getOrReturnCtx(t, a)),
            oe(a, {
              code: Y.invalid_string,
              validation: { startsWith: u.value },
              message: u.message,
            }),
            i.dirty())
          : u.kind === "endsWith"
          ? t.data.endsWith(u.value) ||
            ((a = this._getOrReturnCtx(t, a)),
            oe(a, {
              code: Y.invalid_string,
              validation: { endsWith: u.value },
              message: u.message,
            }),
            i.dirty())
          : u.kind === "datetime"
          ? pE(u).test(t.data) ||
            ((a = this._getOrReturnCtx(t, a)),
            oe(a, {
              code: Y.invalid_string,
              validation: "datetime",
              message: u.message,
            }),
            i.dirty())
          : u.kind === "date"
          ? fE.test(t.data) ||
            ((a = this._getOrReturnCtx(t, a)),
            oe(a, {
              code: Y.invalid_string,
              validation: "date",
              message: u.message,
            }),
            i.dirty())
          : u.kind === "time"
          ? hE(u).test(t.data) ||
            ((a = this._getOrReturnCtx(t, a)),
            oe(a, {
              code: Y.invalid_string,
              validation: "time",
              message: u.message,
            }),
            i.dirty())
          : u.kind === "duration"
          ? rE.test(t.data) ||
            ((a = this._getOrReturnCtx(t, a)),
            oe(a, {
              validation: "duration",
              code: Y.invalid_string,
              message: u.message,
            }),
            i.dirty())
          : u.kind === "ip"
          ? mE(t.data, u.version) ||
            ((a = this._getOrReturnCtx(t, a)),
            oe(a, {
              validation: "ip",
              code: Y.invalid_string,
              message: u.message,
            }),
            i.dirty())
          : u.kind === "jwt"
          ? gE(t.data, u.alg) ||
            ((a = this._getOrReturnCtx(t, a)),
            oe(a, {
              validation: "jwt",
              code: Y.invalid_string,
              message: u.message,
            }),
            i.dirty())
          : u.kind === "cidr"
          ? yE(t.data, u.version) ||
            ((a = this._getOrReturnCtx(t, a)),
            oe(a, {
              validation: "cidr",
              code: Y.invalid_string,
              message: u.message,
            }),
            i.dirty())
          : u.kind === "base64"
          ? cE.test(t.data) ||
            ((a = this._getOrReturnCtx(t, a)),
            oe(a, {
              validation: "base64",
              code: Y.invalid_string,
              message: u.message,
            }),
            i.dirty())
          : u.kind === "base64url"
          ? dE.test(t.data) ||
            ((a = this._getOrReturnCtx(t, a)),
            oe(a, {
              validation: "base64url",
              code: Y.invalid_string,
              message: u.message,
            }),
            i.dirty())
          : ze.assertNever(u);
    return { status: i.value, value: t.data };
  }
  _regex(t, s, i) {
    return this.refinement((a) => t.test(a), {
      validation: s,
      code: Y.invalid_string,
      ...me.errToObj(i),
    });
  }
  _addCheck(t) {
    return new Rr({ ...this._def, checks: [...this._def.checks, t] });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...me.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...me.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...me.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...me.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...me.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...me.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...me.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...me.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...me.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({ kind: "base64url", ...me.errToObj(t) });
  }
  jwt(t) {
    return this._addCheck({ kind: "jwt", ...me.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...me.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: "cidr", ...me.errToObj(t) });
  }
  datetime(t) {
    return typeof t == "string"
      ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          local: !1,
          message: t,
        })
      : this._addCheck({
          kind: "datetime",
          precision: typeof t?.precision > "u" ? null : t?.precision,
          offset: t?.offset ?? !1,
          local: t?.local ?? !1,
          ...me.errToObj(t?.message),
        });
  }
  date(t) {
    return this._addCheck({ kind: "date", message: t });
  }
  time(t) {
    return typeof t == "string"
      ? this._addCheck({ kind: "time", precision: null, message: t })
      : this._addCheck({
          kind: "time",
          precision: typeof t?.precision > "u" ? null : t?.precision,
          ...me.errToObj(t?.message),
        });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...me.errToObj(t) });
  }
  regex(t, s) {
    return this._addCheck({ kind: "regex", regex: t, ...me.errToObj(s) });
  }
  includes(t, s) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: s?.position,
      ...me.errToObj(s?.message),
    });
  }
  startsWith(t, s) {
    return this._addCheck({ kind: "startsWith", value: t, ...me.errToObj(s) });
  }
  endsWith(t, s) {
    return this._addCheck({ kind: "endsWith", value: t, ...me.errToObj(s) });
  }
  min(t, s) {
    return this._addCheck({ kind: "min", value: t, ...me.errToObj(s) });
  }
  max(t, s) {
    return this._addCheck({ kind: "max", value: t, ...me.errToObj(s) });
  }
  length(t, s) {
    return this._addCheck({ kind: "length", value: t, ...me.errToObj(s) });
  }
  nonempty(t) {
    return this.min(1, me.errToObj(t));
  }
  trim() {
    return new Rr({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    });
  }
  toLowerCase() {
    return new Rr({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    });
  }
  toUpperCase() {
    return new Rr({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((t) => t.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((t) => t.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((t) => t.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((t) => t.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((t) => t.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((t) => t.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((t) => t.kind === "base64url");
  }
  get minLength() {
    let t = null;
    for (const s of this._def.checks)
      s.kind === "min" && (t === null || s.value > t) && (t = s.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const s of this._def.checks)
      s.kind === "max" && (t === null || s.value < t) && (t = s.value);
    return t;
  }
}
Rr.create = (n) =>
  new Rr({
    checks: [],
    typeName: Ce.ZodString,
    coerce: n?.coerce ?? !1,
    ...Oe(n),
  });
function vE(n, t) {
  const s = (n.toString().split(".")[1] || "").length,
    i = (t.toString().split(".")[1] || "").length,
    a = s > i ? s : i,
    u = Number.parseInt(n.toFixed(a).replace(".", "")),
    c = Number.parseInt(t.toFixed(a).replace(".", ""));
  return (u % c) / 10 ** a;
}
class Zi extends De {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(t) {
    if (
      (this._def.coerce && (t.data = Number(t.data)),
      this._getType(t) !== he.number)
    ) {
      const u = this._getOrReturnCtx(t);
      return (
        oe(u, {
          code: Y.invalid_type,
          expected: he.number,
          received: u.parsedType,
        }),
        Ee
      );
    }
    let i;
    const a = new Gt();
    for (const u of this._def.checks)
      u.kind === "int"
        ? ze.isInteger(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          oe(i, {
            code: Y.invalid_type,
            expected: "integer",
            received: "float",
            message: u.message,
          }),
          a.dirty())
        : u.kind === "min"
        ? (u.inclusive ? t.data < u.value : t.data <= u.value) &&
          ((i = this._getOrReturnCtx(t, i)),
          oe(i, {
            code: Y.too_small,
            minimum: u.value,
            type: "number",
            inclusive: u.inclusive,
            exact: !1,
            message: u.message,
          }),
          a.dirty())
        : u.kind === "max"
        ? (u.inclusive ? t.data > u.value : t.data >= u.value) &&
          ((i = this._getOrReturnCtx(t, i)),
          oe(i, {
            code: Y.too_big,
            maximum: u.value,
            type: "number",
            inclusive: u.inclusive,
            exact: !1,
            message: u.message,
          }),
          a.dirty())
        : u.kind === "multipleOf"
        ? vE(t.data, u.value) !== 0 &&
          ((i = this._getOrReturnCtx(t, i)),
          oe(i, {
            code: Y.not_multiple_of,
            multipleOf: u.value,
            message: u.message,
          }),
          a.dirty())
        : u.kind === "finite"
        ? Number.isFinite(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          oe(i, { code: Y.not_finite, message: u.message }),
          a.dirty())
        : ze.assertNever(u);
    return { status: a.value, value: t.data };
  }
  gte(t, s) {
    return this.setLimit("min", t, !0, me.toString(s));
  }
  gt(t, s) {
    return this.setLimit("min", t, !1, me.toString(s));
  }
  lte(t, s) {
    return this.setLimit("max", t, !0, me.toString(s));
  }
  lt(t, s) {
    return this.setLimit("max", t, !1, me.toString(s));
  }
  setLimit(t, s, i, a) {
    return new Zi({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: s, inclusive: i, message: me.toString(a) },
      ],
    });
  }
  _addCheck(t) {
    return new Zi({ ...this._def, checks: [...this._def.checks, t] });
  }
  int(t) {
    return this._addCheck({ kind: "int", message: me.toString(t) });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: me.toString(t),
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: me.toString(t),
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: me.toString(t),
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: me.toString(t),
    });
  }
  multipleOf(t, s) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: me.toString(s),
    });
  }
  finite(t) {
    return this._addCheck({ kind: "finite", message: me.toString(t) });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: me.toString(t),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: me.toString(t),
    });
  }
  get minValue() {
    let t = null;
    for (const s of this._def.checks)
      s.kind === "min" && (t === null || s.value > t) && (t = s.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const s of this._def.checks)
      s.kind === "max" && (t === null || s.value < t) && (t = s.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find(
      (t) =>
        t.kind === "int" || (t.kind === "multipleOf" && ze.isInteger(t.value))
    );
  }
  get isFinite() {
    let t = null,
      s = null;
    for (const i of this._def.checks) {
      if (i.kind === "finite" || i.kind === "int" || i.kind === "multipleOf")
        return !0;
      i.kind === "min"
        ? (s === null || i.value > s) && (s = i.value)
        : i.kind === "max" && (t === null || i.value < t) && (t = i.value);
    }
    return Number.isFinite(s) && Number.isFinite(t);
  }
}
Zi.create = (n) =>
  new Zi({
    checks: [],
    typeName: Ce.ZodNumber,
    coerce: n?.coerce || !1,
    ...Oe(n),
  });
class Ki extends De {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte);
  }
  _parse(t) {
    if (this._def.coerce)
      try {
        t.data = BigInt(t.data);
      } catch {
        return this._getInvalidInput(t);
      }
    if (this._getType(t) !== he.bigint) return this._getInvalidInput(t);
    let i;
    const a = new Gt();
    for (const u of this._def.checks)
      u.kind === "min"
        ? (u.inclusive ? t.data < u.value : t.data <= u.value) &&
          ((i = this._getOrReturnCtx(t, i)),
          oe(i, {
            code: Y.too_small,
            type: "bigint",
            minimum: u.value,
            inclusive: u.inclusive,
            message: u.message,
          }),
          a.dirty())
        : u.kind === "max"
        ? (u.inclusive ? t.data > u.value : t.data >= u.value) &&
          ((i = this._getOrReturnCtx(t, i)),
          oe(i, {
            code: Y.too_big,
            type: "bigint",
            maximum: u.value,
            inclusive: u.inclusive,
            message: u.message,
          }),
          a.dirty())
        : u.kind === "multipleOf"
        ? t.data % u.value !== BigInt(0) &&
          ((i = this._getOrReturnCtx(t, i)),
          oe(i, {
            code: Y.not_multiple_of,
            multipleOf: u.value,
            message: u.message,
          }),
          a.dirty())
        : ze.assertNever(u);
    return { status: a.value, value: t.data };
  }
  _getInvalidInput(t) {
    const s = this._getOrReturnCtx(t);
    return (
      oe(s, {
        code: Y.invalid_type,
        expected: he.bigint,
        received: s.parsedType,
      }),
      Ee
    );
  }
  gte(t, s) {
    return this.setLimit("min", t, !0, me.toString(s));
  }
  gt(t, s) {
    return this.setLimit("min", t, !1, me.toString(s));
  }
  lte(t, s) {
    return this.setLimit("max", t, !0, me.toString(s));
  }
  lt(t, s) {
    return this.setLimit("max", t, !1, me.toString(s));
  }
  setLimit(t, s, i, a) {
    return new Ki({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: s, inclusive: i, message: me.toString(a) },
      ],
    });
  }
  _addCheck(t) {
    return new Ki({ ...this._def, checks: [...this._def.checks, t] });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: me.toString(t),
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: me.toString(t),
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: me.toString(t),
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: me.toString(t),
    });
  }
  multipleOf(t, s) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: me.toString(s),
    });
  }
  get minValue() {
    let t = null;
    for (const s of this._def.checks)
      s.kind === "min" && (t === null || s.value > t) && (t = s.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const s of this._def.checks)
      s.kind === "max" && (t === null || s.value < t) && (t = s.value);
    return t;
  }
}
Ki.create = (n) =>
  new Ki({
    checks: [],
    typeName: Ce.ZodBigInt,
    coerce: n?.coerce ?? !1,
    ...Oe(n),
  });
class Hp extends De {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = !!t.data), this._getType(t) !== he.boolean)
    ) {
      const i = this._getOrReturnCtx(t);
      return (
        oe(i, {
          code: Y.invalid_type,
          expected: he.boolean,
          received: i.parsedType,
        }),
        Ee
      );
    }
    return an(t.data);
  }
}
Hp.create = (n) =>
  new Hp({ typeName: Ce.ZodBoolean, coerce: n?.coerce || !1, ...Oe(n) });
class ja extends De {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = new Date(t.data)),
      this._getType(t) !== he.date)
    ) {
      const u = this._getOrReturnCtx(t);
      return (
        oe(u, {
          code: Y.invalid_type,
          expected: he.date,
          received: u.parsedType,
        }),
        Ee
      );
    }
    if (Number.isNaN(t.data.getTime())) {
      const u = this._getOrReturnCtx(t);
      return oe(u, { code: Y.invalid_date }), Ee;
    }
    const i = new Gt();
    let a;
    for (const u of this._def.checks)
      u.kind === "min"
        ? t.data.getTime() < u.value &&
          ((a = this._getOrReturnCtx(t, a)),
          oe(a, {
            code: Y.too_small,
            message: u.message,
            inclusive: !0,
            exact: !1,
            minimum: u.value,
            type: "date",
          }),
          i.dirty())
        : u.kind === "max"
        ? t.data.getTime() > u.value &&
          ((a = this._getOrReturnCtx(t, a)),
          oe(a, {
            code: Y.too_big,
            message: u.message,
            inclusive: !0,
            exact: !1,
            maximum: u.value,
            type: "date",
          }),
          i.dirty())
        : ze.assertNever(u);
    return { status: i.value, value: new Date(t.data.getTime()) };
  }
  _addCheck(t) {
    return new ja({ ...this._def, checks: [...this._def.checks, t] });
  }
  min(t, s) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: me.toString(s),
    });
  }
  max(t, s) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: me.toString(s),
    });
  }
  get minDate() {
    let t = null;
    for (const s of this._def.checks)
      s.kind === "min" && (t === null || s.value > t) && (t = s.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const s of this._def.checks)
      s.kind === "max" && (t === null || s.value < t) && (t = s.value);
    return t != null ? new Date(t) : null;
  }
}
ja.create = (n) =>
  new ja({
    checks: [],
    coerce: n?.coerce || !1,
    typeName: Ce.ZodDate,
    ...Oe(n),
  });
class qp extends De {
  _parse(t) {
    if (this._getType(t) !== he.symbol) {
      const i = this._getOrReturnCtx(t);
      return (
        oe(i, {
          code: Y.invalid_type,
          expected: he.symbol,
          received: i.parsedType,
        }),
        Ee
      );
    }
    return an(t.data);
  }
}
qp.create = (n) => new qp({ typeName: Ce.ZodSymbol, ...Oe(n) });
class Qp extends De {
  _parse(t) {
    if (this._getType(t) !== he.undefined) {
      const i = this._getOrReturnCtx(t);
      return (
        oe(i, {
          code: Y.invalid_type,
          expected: he.undefined,
          received: i.parsedType,
        }),
        Ee
      );
    }
    return an(t.data);
  }
}
Qp.create = (n) => new Qp({ typeName: Ce.ZodUndefined, ...Oe(n) });
class Zp extends De {
  _parse(t) {
    if (this._getType(t) !== he.null) {
      const i = this._getOrReturnCtx(t);
      return (
        oe(i, {
          code: Y.invalid_type,
          expected: he.null,
          received: i.parsedType,
        }),
        Ee
      );
    }
    return an(t.data);
  }
}
Zp.create = (n) => new Zp({ typeName: Ce.ZodNull, ...Oe(n) });
class Kp extends De {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(t) {
    return an(t.data);
  }
}
Kp.create = (n) => new Kp({ typeName: Ce.ZodAny, ...Oe(n) });
class Yp extends De {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(t) {
    return an(t.data);
  }
}
Yp.create = (n) => new Yp({ typeName: Ce.ZodUnknown, ...Oe(n) });
class Fr extends De {
  _parse(t) {
    const s = this._getOrReturnCtx(t);
    return (
      oe(s, {
        code: Y.invalid_type,
        expected: he.never,
        received: s.parsedType,
      }),
      Ee
    );
  }
}
Fr.create = (n) => new Fr({ typeName: Ce.ZodNever, ...Oe(n) });
class Gp extends De {
  _parse(t) {
    if (this._getType(t) !== he.undefined) {
      const i = this._getOrReturnCtx(t);
      return (
        oe(i, {
          code: Y.invalid_type,
          expected: he.void,
          received: i.parsedType,
        }),
        Ee
      );
    }
    return an(t.data);
  }
}
Gp.create = (n) => new Gp({ typeName: Ce.ZodVoid, ...Oe(n) });
class Fn extends De {
  _parse(t) {
    const { ctx: s, status: i } = this._processInputParams(t),
      a = this._def;
    if (s.parsedType !== he.array)
      return (
        oe(s, {
          code: Y.invalid_type,
          expected: he.array,
          received: s.parsedType,
        }),
        Ee
      );
    if (a.exactLength !== null) {
      const c = s.data.length > a.exactLength.value,
        f = s.data.length < a.exactLength.value;
      (c || f) &&
        (oe(s, {
          code: c ? Y.too_big : Y.too_small,
          minimum: f ? a.exactLength.value : void 0,
          maximum: c ? a.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: a.exactLength.message,
        }),
        i.dirty());
    }
    if (
      (a.minLength !== null &&
        s.data.length < a.minLength.value &&
        (oe(s, {
          code: Y.too_small,
          minimum: a.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: a.minLength.message,
        }),
        i.dirty()),
      a.maxLength !== null &&
        s.data.length > a.maxLength.value &&
        (oe(s, {
          code: Y.too_big,
          maximum: a.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: a.maxLength.message,
        }),
        i.dirty()),
      s.common.async)
    )
      return Promise.all(
        [...s.data].map((c, f) => a.type._parseAsync(new Dr(s, c, s.path, f)))
      ).then((c) => Gt.mergeArray(i, c));
    const u = [...s.data].map((c, f) =>
      a.type._parseSync(new Dr(s, c, s.path, f))
    );
    return Gt.mergeArray(i, u);
  }
  get element() {
    return this._def.type;
  }
  min(t, s) {
    return new Fn({
      ...this._def,
      minLength: { value: t, message: me.toString(s) },
    });
  }
  max(t, s) {
    return new Fn({
      ...this._def,
      maxLength: { value: t, message: me.toString(s) },
    });
  }
  length(t, s) {
    return new Fn({
      ...this._def,
      exactLength: { value: t, message: me.toString(s) },
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Fn.create = (n, t) =>
  new Fn({
    type: n,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: Ce.ZodArray,
    ...Oe(t),
  });
function js(n) {
  if (n instanceof rt) {
    const t = {};
    for (const s in n.shape) {
      const i = n.shape[s];
      t[s] = Ar.create(js(i));
    }
    return new rt({ ...n._def, shape: () => t });
  } else
    return n instanceof Fn
      ? new Fn({ ...n._def, type: js(n.element) })
      : n instanceof Ar
      ? Ar.create(js(n.unwrap()))
      : n instanceof Vs
      ? Vs.create(js(n.unwrap()))
      : n instanceof is
      ? is.create(n.items.map((t) => js(t)))
      : n;
}
class rt extends De {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const t = this._def.shape(),
      s = ze.objectKeys(t);
    return (this._cached = { shape: t, keys: s }), this._cached;
  }
  _parse(t) {
    if (this._getType(t) !== he.object) {
      const m = this._getOrReturnCtx(t);
      return (
        oe(m, {
          code: Y.invalid_type,
          expected: he.object,
          received: m.parsedType,
        }),
        Ee
      );
    }
    const { status: i, ctx: a } = this._processInputParams(t),
      { shape: u, keys: c } = this._getCached(),
      f = [];
    if (
      !(this._def.catchall instanceof Fr && this._def.unknownKeys === "strip")
    )
      for (const m in a.data) c.includes(m) || f.push(m);
    const p = [];
    for (const m of c) {
      const g = u[m],
        x = a.data[m];
      p.push({
        key: { status: "valid", value: m },
        value: g._parse(new Dr(a, x, a.path, m)),
        alwaysSet: m in a.data,
      });
    }
    if (this._def.catchall instanceof Fr) {
      const m = this._def.unknownKeys;
      if (m === "passthrough")
        for (const g of f)
          p.push({
            key: { status: "valid", value: g },
            value: { status: "valid", value: a.data[g] },
          });
      else if (m === "strict")
        f.length > 0 &&
          (oe(a, { code: Y.unrecognized_keys, keys: f }), i.dirty());
      else if (m !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const m = this._def.catchall;
      for (const g of f) {
        const x = a.data[g];
        p.push({
          key: { status: "valid", value: g },
          value: m._parse(new Dr(a, x, a.path, g)),
          alwaysSet: g in a.data,
        });
      }
    }
    return a.common.async
      ? Promise.resolve()
          .then(async () => {
            const m = [];
            for (const g of p) {
              const x = await g.key,
                S = await g.value;
              m.push({ key: x, value: S, alwaysSet: g.alwaysSet });
            }
            return m;
          })
          .then((m) => Gt.mergeObjectSync(i, m))
      : Gt.mergeObjectSync(i, p);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return (
      me.errToObj,
      new rt({
        ...this._def,
        unknownKeys: "strict",
        ...(t !== void 0
          ? {
              errorMap: (s, i) => {
                const a = this._def.errorMap?.(s, i).message ?? i.defaultError;
                return s.code === "unrecognized_keys"
                  ? { message: me.errToObj(t).message ?? a }
                  : { message: a };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new rt({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new rt({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(t) {
    return new rt({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...t }),
    });
  }
  merge(t) {
    return new rt({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({ ...this._def.shape(), ...t._def.shape() }),
      typeName: Ce.ZodObject,
    });
  }
  setKey(t, s) {
    return this.augment({ [t]: s });
  }
  catchall(t) {
    return new rt({ ...this._def, catchall: t });
  }
  pick(t) {
    const s = {};
    for (const i of ze.objectKeys(t))
      t[i] && this.shape[i] && (s[i] = this.shape[i]);
    return new rt({ ...this._def, shape: () => s });
  }
  omit(t) {
    const s = {};
    for (const i of ze.objectKeys(this.shape)) t[i] || (s[i] = this.shape[i]);
    return new rt({ ...this._def, shape: () => s });
  }
  deepPartial() {
    return js(this);
  }
  partial(t) {
    const s = {};
    for (const i of ze.objectKeys(this.shape)) {
      const a = this.shape[i];
      t && !t[i] ? (s[i] = a) : (s[i] = a.optional());
    }
    return new rt({ ...this._def, shape: () => s });
  }
  required(t) {
    const s = {};
    for (const i of ze.objectKeys(this.shape))
      if (t && !t[i]) s[i] = this.shape[i];
      else {
        let u = this.shape[i];
        for (; u instanceof Ar; ) u = u._def.innerType;
        s[i] = u;
      }
    return new rt({ ...this._def, shape: () => s });
  }
  keyof() {
    return oy(ze.objectKeys(this.shape));
  }
}
rt.create = (n, t) =>
  new rt({
    shape: () => n,
    unknownKeys: "strip",
    catchall: Fr.create(),
    typeName: Ce.ZodObject,
    ...Oe(t),
  });
rt.strictCreate = (n, t) =>
  new rt({
    shape: () => n,
    unknownKeys: "strict",
    catchall: Fr.create(),
    typeName: Ce.ZodObject,
    ...Oe(t),
  });
rt.lazycreate = (n, t) =>
  new rt({
    shape: n,
    unknownKeys: "strip",
    catchall: Fr.create(),
    typeName: Ce.ZodObject,
    ...Oe(t),
  });
class La extends De {
  _parse(t) {
    const { ctx: s } = this._processInputParams(t),
      i = this._def.options;
    function a(u) {
      for (const f of u) if (f.result.status === "valid") return f.result;
      for (const f of u)
        if (f.result.status === "dirty")
          return s.common.issues.push(...f.ctx.common.issues), f.result;
      const c = u.map((f) => new er(f.ctx.common.issues));
      return oe(s, { code: Y.invalid_union, unionErrors: c }), Ee;
    }
    if (s.common.async)
      return Promise.all(
        i.map(async (u) => {
          const c = { ...s, common: { ...s.common, issues: [] }, parent: null };
          return {
            result: await u._parseAsync({
              data: s.data,
              path: s.path,
              parent: c,
            }),
            ctx: c,
          };
        })
      ).then(a);
    {
      let u;
      const c = [];
      for (const p of i) {
        const m = { ...s, common: { ...s.common, issues: [] }, parent: null },
          g = p._parseSync({ data: s.data, path: s.path, parent: m });
        if (g.status === "valid") return g;
        g.status === "dirty" && !u && (u = { result: g, ctx: m }),
          m.common.issues.length && c.push(m.common.issues);
      }
      if (u) return s.common.issues.push(...u.ctx.common.issues), u.result;
      const f = c.map((p) => new er(p));
      return oe(s, { code: Y.invalid_union, unionErrors: f }), Ee;
    }
  }
  get options() {
    return this._def.options;
  }
}
La.create = (n, t) => new La({ options: n, typeName: Ce.ZodUnion, ...Oe(t) });
function Tc(n, t) {
  const s = Tr(n),
    i = Tr(t);
  if (n === t) return { valid: !0, data: n };
  if (s === he.object && i === he.object) {
    const a = ze.objectKeys(t),
      u = ze.objectKeys(n).filter((f) => a.indexOf(f) !== -1),
      c = { ...n, ...t };
    for (const f of u) {
      const p = Tc(n[f], t[f]);
      if (!p.valid) return { valid: !1 };
      c[f] = p.data;
    }
    return { valid: !0, data: c };
  } else if (s === he.array && i === he.array) {
    if (n.length !== t.length) return { valid: !1 };
    const a = [];
    for (let u = 0; u < n.length; u++) {
      const c = n[u],
        f = t[u],
        p = Tc(c, f);
      if (!p.valid) return { valid: !1 };
      a.push(p.data);
    }
    return { valid: !0, data: a };
  } else
    return s === he.date && i === he.date && +n == +t
      ? { valid: !0, data: n }
      : { valid: !1 };
}
class Ma extends De {
  _parse(t) {
    const { status: s, ctx: i } = this._processInputParams(t),
      a = (u, c) => {
        if (Up(u) || Up(c)) return Ee;
        const f = Tc(u.value, c.value);
        return f.valid
          ? ((Vp(u) || Vp(c)) && s.dirty(), { status: s.value, value: f.data })
          : (oe(i, { code: Y.invalid_intersection_types }), Ee);
      };
    return i.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: i.data, path: i.path, parent: i }),
          this._def.right._parseAsync({
            data: i.data,
            path: i.path,
            parent: i,
          }),
        ]).then(([u, c]) => a(u, c))
      : a(
          this._def.left._parseSync({ data: i.data, path: i.path, parent: i }),
          this._def.right._parseSync({ data: i.data, path: i.path, parent: i })
        );
  }
}
Ma.create = (n, t, s) =>
  new Ma({ left: n, right: t, typeName: Ce.ZodIntersection, ...Oe(s) });
class is extends De {
  _parse(t) {
    const { status: s, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== he.array)
      return (
        oe(i, {
          code: Y.invalid_type,
          expected: he.array,
          received: i.parsedType,
        }),
        Ee
      );
    if (i.data.length < this._def.items.length)
      return (
        oe(i, {
          code: Y.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        Ee
      );
    !this._def.rest &&
      i.data.length > this._def.items.length &&
      (oe(i, {
        code: Y.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      s.dirty());
    const u = [...i.data]
      .map((c, f) => {
        const p = this._def.items[f] || this._def.rest;
        return p ? p._parse(new Dr(i, c, i.path, f)) : null;
      })
      .filter((c) => !!c);
    return i.common.async
      ? Promise.all(u).then((c) => Gt.mergeArray(s, c))
      : Gt.mergeArray(s, u);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new is({ ...this._def, rest: t });
  }
}
is.create = (n, t) => {
  if (!Array.isArray(n))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new is({ items: n, typeName: Ce.ZodTuple, rest: null, ...Oe(t) });
};
class Xp extends De {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: s, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== he.map)
      return (
        oe(i, {
          code: Y.invalid_type,
          expected: he.map,
          received: i.parsedType,
        }),
        Ee
      );
    const a = this._def.keyType,
      u = this._def.valueType,
      c = [...i.data.entries()].map(([f, p], m) => ({
        key: a._parse(new Dr(i, f, i.path, [m, "key"])),
        value: u._parse(new Dr(i, p, i.path, [m, "value"])),
      }));
    if (i.common.async) {
      const f = new Map();
      return Promise.resolve().then(async () => {
        for (const p of c) {
          const m = await p.key,
            g = await p.value;
          if (m.status === "aborted" || g.status === "aborted") return Ee;
          (m.status === "dirty" || g.status === "dirty") && s.dirty(),
            f.set(m.value, g.value);
        }
        return { status: s.value, value: f };
      });
    } else {
      const f = new Map();
      for (const p of c) {
        const m = p.key,
          g = p.value;
        if (m.status === "aborted" || g.status === "aborted") return Ee;
        (m.status === "dirty" || g.status === "dirty") && s.dirty(),
          f.set(m.value, g.value);
      }
      return { status: s.value, value: f };
    }
  }
}
Xp.create = (n, t, s) =>
  new Xp({ valueType: t, keyType: n, typeName: Ce.ZodMap, ...Oe(s) });
class Yi extends De {
  _parse(t) {
    const { status: s, ctx: i } = this._processInputParams(t);
    if (i.parsedType !== he.set)
      return (
        oe(i, {
          code: Y.invalid_type,
          expected: he.set,
          received: i.parsedType,
        }),
        Ee
      );
    const a = this._def;
    a.minSize !== null &&
      i.data.size < a.minSize.value &&
      (oe(i, {
        code: Y.too_small,
        minimum: a.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: a.minSize.message,
      }),
      s.dirty()),
      a.maxSize !== null &&
        i.data.size > a.maxSize.value &&
        (oe(i, {
          code: Y.too_big,
          maximum: a.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: a.maxSize.message,
        }),
        s.dirty());
    const u = this._def.valueType;
    function c(p) {
      const m = new Set();
      for (const g of p) {
        if (g.status === "aborted") return Ee;
        g.status === "dirty" && s.dirty(), m.add(g.value);
      }
      return { status: s.value, value: m };
    }
    const f = [...i.data.values()].map((p, m) =>
      u._parse(new Dr(i, p, i.path, m))
    );
    return i.common.async ? Promise.all(f).then((p) => c(p)) : c(f);
  }
  min(t, s) {
    return new Yi({
      ...this._def,
      minSize: { value: t, message: me.toString(s) },
    });
  }
  max(t, s) {
    return new Yi({
      ...this._def,
      maxSize: { value: t, message: me.toString(s) },
    });
  }
  size(t, s) {
    return this.min(t, s).max(t, s);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Yi.create = (n, t) =>
  new Yi({
    valueType: n,
    minSize: null,
    maxSize: null,
    typeName: Ce.ZodSet,
    ...Oe(t),
  });
class Jp extends De {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: s } = this._processInputParams(t);
    return this._def.getter()._parse({ data: s.data, path: s.path, parent: s });
  }
}
Jp.create = (n, t) => new Jp({ getter: n, typeName: Ce.ZodLazy, ...Oe(t) });
class em extends De {
  _parse(t) {
    if (t.data !== this._def.value) {
      const s = this._getOrReturnCtx(t);
      return (
        oe(s, {
          received: s.data,
          code: Y.invalid_literal,
          expected: this._def.value,
        }),
        Ee
      );
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
em.create = (n, t) => new em({ value: n, typeName: Ce.ZodLiteral, ...Oe(t) });
function oy(n, t) {
  return new $s({ values: n, typeName: Ce.ZodEnum, ...Oe(t) });
}
class $s extends De {
  _parse(t) {
    if (typeof t.data != "string") {
      const s = this._getOrReturnCtx(t),
        i = this._def.values;
      return (
        oe(s, {
          expected: ze.joinValues(i),
          received: s.parsedType,
          code: Y.invalid_type,
        }),
        Ee
      );
    }
    if (
      (this._cache || (this._cache = new Set(this._def.values)),
      !this._cache.has(t.data))
    ) {
      const s = this._getOrReturnCtx(t),
        i = this._def.values;
      return (
        oe(s, { received: s.data, code: Y.invalid_enum_value, options: i }), Ee
      );
    }
    return an(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const s of this._def.values) t[s] = s;
    return t;
  }
  get Values() {
    const t = {};
    for (const s of this._def.values) t[s] = s;
    return t;
  }
  get Enum() {
    const t = {};
    for (const s of this._def.values) t[s] = s;
    return t;
  }
  extract(t, s = this._def) {
    return $s.create(t, { ...this._def, ...s });
  }
  exclude(t, s = this._def) {
    return $s.create(
      this.options.filter((i) => !t.includes(i)),
      { ...this._def, ...s }
    );
  }
}
$s.create = oy;
class tm extends De {
  _parse(t) {
    const s = ze.getValidEnumValues(this._def.values),
      i = this._getOrReturnCtx(t);
    if (i.parsedType !== he.string && i.parsedType !== he.number) {
      const a = ze.objectValues(s);
      return (
        oe(i, {
          expected: ze.joinValues(a),
          received: i.parsedType,
          code: Y.invalid_type,
        }),
        Ee
      );
    }
    if (
      (this._cache ||
        (this._cache = new Set(ze.getValidEnumValues(this._def.values))),
      !this._cache.has(t.data))
    ) {
      const a = ze.objectValues(s);
      return (
        oe(i, { received: i.data, code: Y.invalid_enum_value, options: a }), Ee
      );
    }
    return an(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
tm.create = (n, t) =>
  new tm({ values: n, typeName: Ce.ZodNativeEnum, ...Oe(t) });
class Ia extends De {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: s } = this._processInputParams(t);
    if (s.parsedType !== he.promise && s.common.async === !1)
      return (
        oe(s, {
          code: Y.invalid_type,
          expected: he.promise,
          received: s.parsedType,
        }),
        Ee
      );
    const i = s.parsedType === he.promise ? s.data : Promise.resolve(s.data);
    return an(
      i.then((a) =>
        this._def.type.parseAsync(a, {
          path: s.path,
          errorMap: s.common.contextualErrorMap,
        })
      )
    );
  }
}
Ia.create = (n, t) => new Ia({ type: n, typeName: Ce.ZodPromise, ...Oe(t) });
class Us extends De {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Ce.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(t) {
    const { status: s, ctx: i } = this._processInputParams(t),
      a = this._def.effect || null,
      u = {
        addIssue: (c) => {
          oe(i, c), c.fatal ? s.abort() : s.dirty();
        },
        get path() {
          return i.path;
        },
      };
    if (((u.addIssue = u.addIssue.bind(u)), a.type === "preprocess")) {
      const c = a.transform(i.data, u);
      if (i.common.async)
        return Promise.resolve(c).then(async (f) => {
          if (s.value === "aborted") return Ee;
          const p = await this._def.schema._parseAsync({
            data: f,
            path: i.path,
            parent: i,
          });
          return p.status === "aborted"
            ? Ee
            : p.status === "dirty" || s.value === "dirty"
            ? Ii(p.value)
            : p;
        });
      {
        if (s.value === "aborted") return Ee;
        const f = this._def.schema._parseSync({
          data: c,
          path: i.path,
          parent: i,
        });
        return f.status === "aborted"
          ? Ee
          : f.status === "dirty" || s.value === "dirty"
          ? Ii(f.value)
          : f;
      }
    }
    if (a.type === "refinement") {
      const c = (f) => {
        const p = a.refinement(f, u);
        if (i.common.async) return Promise.resolve(p);
        if (p instanceof Promise)
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return f;
      };
      if (i.common.async === !1) {
        const f = this._def.schema._parseSync({
          data: i.data,
          path: i.path,
          parent: i,
        });
        return f.status === "aborted"
          ? Ee
          : (f.status === "dirty" && s.dirty(),
            c(f.value),
            { status: s.value, value: f.value });
      } else
        return this._def.schema
          ._parseAsync({ data: i.data, path: i.path, parent: i })
          .then((f) =>
            f.status === "aborted"
              ? Ee
              : (f.status === "dirty" && s.dirty(),
                c(f.value).then(() => ({ status: s.value, value: f.value })))
          );
    }
    if (a.type === "transform")
      if (i.common.async === !1) {
        const c = this._def.schema._parseSync({
          data: i.data,
          path: i.path,
          parent: i,
        });
        if (!Bs(c)) return Ee;
        const f = a.transform(c.value, u);
        if (f instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return { status: s.value, value: f };
      } else
        return this._def.schema
          ._parseAsync({ data: i.data, path: i.path, parent: i })
          .then((c) =>
            Bs(c)
              ? Promise.resolve(a.transform(c.value, u)).then((f) => ({
                  status: s.value,
                  value: f,
                }))
              : Ee
          );
    ze.assertNever(a);
  }
}
Us.create = (n, t, s) =>
  new Us({ schema: n, typeName: Ce.ZodEffects, effect: t, ...Oe(s) });
Us.createWithPreprocess = (n, t, s) =>
  new Us({
    schema: t,
    effect: { type: "preprocess", transform: n },
    typeName: Ce.ZodEffects,
    ...Oe(s),
  });
class Ar extends De {
  _parse(t) {
    return this._getType(t) === he.undefined
      ? an(void 0)
      : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Ar.create = (n, t) =>
  new Ar({ innerType: n, typeName: Ce.ZodOptional, ...Oe(t) });
class Vs extends De {
  _parse(t) {
    return this._getType(t) === he.null
      ? an(null)
      : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Vs.create = (n, t) =>
  new Vs({ innerType: n, typeName: Ce.ZodNullable, ...Oe(t) });
class Nc extends De {
  _parse(t) {
    const { ctx: s } = this._processInputParams(t);
    let i = s.data;
    return (
      s.parsedType === he.undefined && (i = this._def.defaultValue()),
      this._def.innerType._parse({ data: i, path: s.path, parent: s })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Nc.create = (n, t) =>
  new Nc({
    innerType: n,
    typeName: Ce.ZodDefault,
    defaultValue: typeof t.default == "function" ? t.default : () => t.default,
    ...Oe(t),
  });
class Rc extends De {
  _parse(t) {
    const { ctx: s } = this._processInputParams(t),
      i = { ...s, common: { ...s.common, issues: [] } },
      a = this._def.innerType._parse({
        data: i.data,
        path: i.path,
        parent: { ...i },
      });
    return Aa(a)
      ? a.then((u) => ({
          status: "valid",
          value:
            u.status === "valid"
              ? u.value
              : this._def.catchValue({
                  get error() {
                    return new er(i.common.issues);
                  },
                  input: i.data,
                }),
        }))
      : {
          status: "valid",
          value:
            a.status === "valid"
              ? a.value
              : this._def.catchValue({
                  get error() {
                    return new er(i.common.issues);
                  },
                  input: i.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Rc.create = (n, t) =>
  new Rc({
    innerType: n,
    typeName: Ce.ZodCatch,
    catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
    ...Oe(t),
  });
class nm extends De {
  _parse(t) {
    if (this._getType(t) !== he.nan) {
      const i = this._getOrReturnCtx(t);
      return (
        oe(i, {
          code: Y.invalid_type,
          expected: he.nan,
          received: i.parsedType,
        }),
        Ee
      );
    }
    return { status: "valid", value: t.data };
  }
}
nm.create = (n) => new nm({ typeName: Ce.ZodNaN, ...Oe(n) });
class xE extends De {
  _parse(t) {
    const { ctx: s } = this._processInputParams(t),
      i = s.data;
    return this._def.type._parse({ data: i, path: s.path, parent: s });
  }
  unwrap() {
    return this._def.type;
  }
}
class id extends De {
  _parse(t) {
    const { status: s, ctx: i } = this._processInputParams(t);
    if (i.common.async)
      return (async () => {
        const u = await this._def.in._parseAsync({
          data: i.data,
          path: i.path,
          parent: i,
        });
        return u.status === "aborted"
          ? Ee
          : u.status === "dirty"
          ? (s.dirty(), Ii(u.value))
          : this._def.out._parseAsync({
              data: u.value,
              path: i.path,
              parent: i,
            });
      })();
    {
      const a = this._def.in._parseSync({
        data: i.data,
        path: i.path,
        parent: i,
      });
      return a.status === "aborted"
        ? Ee
        : a.status === "dirty"
        ? (s.dirty(), { status: "dirty", value: a.value })
        : this._def.out._parseSync({ data: a.value, path: i.path, parent: i });
    }
  }
  static create(t, s) {
    return new id({ in: t, out: s, typeName: Ce.ZodPipeline });
  }
}
class Pc extends De {
  _parse(t) {
    const s = this._def.innerType._parse(t),
      i = (a) => (Bs(a) && (a.value = Object.freeze(a.value)), a);
    return Aa(s) ? s.then((a) => i(a)) : i(s);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Pc.create = (n, t) =>
  new Pc({ innerType: n, typeName: Ce.ZodReadonly, ...Oe(t) });
var Ce;
(function (n) {
  (n.ZodString = "ZodString"),
    (n.ZodNumber = "ZodNumber"),
    (n.ZodNaN = "ZodNaN"),
    (n.ZodBigInt = "ZodBigInt"),
    (n.ZodBoolean = "ZodBoolean"),
    (n.ZodDate = "ZodDate"),
    (n.ZodSymbol = "ZodSymbol"),
    (n.ZodUndefined = "ZodUndefined"),
    (n.ZodNull = "ZodNull"),
    (n.ZodAny = "ZodAny"),
    (n.ZodUnknown = "ZodUnknown"),
    (n.ZodNever = "ZodNever"),
    (n.ZodVoid = "ZodVoid"),
    (n.ZodArray = "ZodArray"),
    (n.ZodObject = "ZodObject"),
    (n.ZodUnion = "ZodUnion"),
    (n.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
    (n.ZodIntersection = "ZodIntersection"),
    (n.ZodTuple = "ZodTuple"),
    (n.ZodRecord = "ZodRecord"),
    (n.ZodMap = "ZodMap"),
    (n.ZodSet = "ZodSet"),
    (n.ZodFunction = "ZodFunction"),
    (n.ZodLazy = "ZodLazy"),
    (n.ZodLiteral = "ZodLiteral"),
    (n.ZodEnum = "ZodEnum"),
    (n.ZodEffects = "ZodEffects"),
    (n.ZodNativeEnum = "ZodNativeEnum"),
    (n.ZodOptional = "ZodOptional"),
    (n.ZodNullable = "ZodNullable"),
    (n.ZodDefault = "ZodDefault"),
    (n.ZodCatch = "ZodCatch"),
    (n.ZodPromise = "ZodPromise"),
    (n.ZodBranded = "ZodBranded"),
    (n.ZodPipeline = "ZodPipeline"),
    (n.ZodReadonly = "ZodReadonly");
})(Ce || (Ce = {}));
const Xu = Rr.create;
Fr.create;
Fn.create;
const wE = rt.create;
La.create;
Ma.create;
is.create;
$s.create;
Ia.create;
Ar.create;
Vs.create;
const _E = wE({
  firstName: Xu().min(1, "Prénom requis").max(60),
  lastName: Xu()
    .optional()
    .transform((n) => n ?? ""),
  text: Xu().min(5, "Votre question est trop courte").max(2e3),
});
function bE() {
  const [n, t] = k.useState(!1),
    [s, i] = k.useState({}),
    [a, u] = k.useState(null);
  async function c(f) {
    f.preventDefault(), u(null), i({});
    const p = new FormData(f.currentTarget),
      m = {
        firstName: String(p.get("firstName") || "").trim(),
        lastName: String(p.get("lastName") || "").trim(),
        text: String(p.get("text") || "").trim(),
      },
      g = _E.safeParse(m);
    if (!g.success) {
      const x = {};
      for (const S of g.error.issues) {
        const w = S.path[0]?.toString() || "form";
        x[w] = S.message;
      }
      i(x);
      return;
    }
    try {
      if (
        (t(!0),
        !(
          await fetch("/api/questions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(g.data),
          })
        ).ok)
      )
        throw new Error("Erreur d'envoi");
      u("Merci ! Votre question a été envoyée en direct."),
        f.currentTarget.reset();
    } catch (x) {
      i({ form: x.message });
    } finally {
      t(!1);
    }
  }
return v.jsx(ls, {
  children: v.jsxs("section", {
    className: "container mx-auto px-4 py-10",
    children: [
      // Titre avec flèche cliquable
      v.jsxs("h1", {
        className:
          "text-3xl md:text-5xl heading font-extrabold flex items-center gap-2",
        children: [
          v.jsxs("svg", {
            width: "28",
            height: "28",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            className: "text-primary cursor-pointer",
            onClick: () => window.history.back(),
            children: [
              v.jsx("path", { d: "M12 19l-7-7 7-7" }),
              v.jsx("path", { d: "M5 12h14" }),
            ],
          }),
          " Poser une question",
        ],
      }),

      // Description sous le titre
      v.jsx("p", {
        className: "text-muted-foreground mt-3 max-w-2xl",
        children:
          "Partagez votre expérience ou interrogez nos invités. Les questions pertinentes peuvent apparaître en direct à l'écran.",
      }),

      // Container form + bouton Google Forms
      v.jsxs("div", {
        className: "mt-8 flex flex-col md:flex-row gap-6",
        children: [
          // Formulaire principal avec bulles
          v.jsxs("form", {
            onSubmit: c,
            className: "flex-1 grid gap-4 max-w-xl",
            children: [
              // Champ Prénom
              v.jsxs("div", {
                children: [
                  v.jsx("label", {
                    className: "block text-sm font-medium",
                    children: "Prénom",
                  }),
                  v.jsx("input", {
                    name: "firstName",
                    className: "mt-1 w-full input bg-transparent",
                    placeholder: "Votre prénom !!! Serveur Internal ERROR !!!",
                  }),
                  s.firstName &&
                    v.jsx("p", { className: "form-error", children: s.firstName }),
                ],
              }),

              // Champ Question
              v.jsxs("div", {
                children: [
                  v.jsx("label", {
                    className: "block text-sm font-medium",
                    children: "Votre question",
                  }),
                  v.jsx("textarea", {
                    name: "text",
                    className: "mt-1 w-full input h-32 bg-transparent",
                    placeholder:
                      "Formulez clairement votre question... !!! Serveur Internal ERROR !!!",
                  }),
                  s.text &&
                    v.jsx("p", { className: "form-error", children: s.text }),
                ],
              }),

              // Erreur formulaire globale
              s.form && v.jsx("p", { className: "form-error", children: s.form }),

              // Confirmation après envoi
              a &&
                v.jsxs("div", {
                  className:
                    "flex items-center gap-2 text-emerald-500 font-semibold animate-[fadeIn_.4s_ease]",
                  children: [
                    v.jsx("svg", {
                      width: "20",
                      height: "20",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "3",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      children: v.jsx("path", { d: "M20 6L9 17l-5-5" }),
                    }),
                    v.jsx("span", {
                      children:
                        "Votre question a été transmise au plateau ! Merci pour votre participation.",
                    }),
                  ],
                }),

              // Bouton d'envoi classique
              v.jsx("button", {
                disabled: n,
                className: "btn-primary",
                children: n ? "Envoi..." : "Envoyer ma question",
              }),
            ],
          }),

          // Bouton Google Forms à droite
          v.jsx("div", {
            className: "flex-1 flex items-center justify-center md:justify-start",
            children: v.jsx("a", {
              href: "https://forms.gle/X1FR8nTwYM5yekiP9",
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "btn-primary inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold transition hover:bg-primary/80",
              children: "Poser ma question via Google Forms",
            }),
          }),
        ],
      }),
    ],
  }),
});

function SE({ q: n, selected: t, onSelect: s, onHide: i }) {
  return v.jsxs("div", {
    className: `p-4 rounded-lg border bg-card/50 animate-[fadeBounce_.5s_ease] glitch-in ${
      t ? "ring-2 ring-yellow-400" : ""
    }`,
    children: [
      v.jsx("div", {
        className: "text-sm text-muted-foreground",
        children: new Date(n.createdAt).toLocaleTimeString(),
      }),
      v.jsxs("div", {
        className: "font-semibold mt-1",
        children: [n.firstName, " ", n.lastName],
      }),
      v.jsx("p", { className: "mt-2 text-foreground/90", children: n.text }),
      (s || i) &&
        v.jsxs("div", {
          className: "mt-3 flex gap-2",
          children: [
            s &&
              v.jsx("button", {
                onClick: s,
                className:
                  "px-3 py-1.5 rounded bg-primary text-primary-foreground hover:opacity-90 transition",
                children: "Afficher",
              }),
            i &&
              v.jsx("button", {
                onClick: i,
                className:
                  "px-3 py-1.5 rounded bg-secondary text-secondary-foreground hover:opacity-90 transition",
                children: "Masquer",
              }),
          ],
        }),
    ],
  });
}
function rm() {
  const [n, t] = k.useState({ questions: [], selectedId: null });
  return (
    k.useEffect(() => {
      fetch("/api/questions")
        .then((a) => a.json())
        .then(t)
        .catch(() => {});
      const s = (a) => t(a),
        i = (a) => t(a);
      return (
        $t.on("questions:init", s),
        $t.on("questions:update", i),
        () => {
          $t.off("questions:init", s), $t.off("questions:update", i);
        }
      );
    }, []),
    v.jsx(ls, {
      children: v.jsxs("section", {
        className: "container mx-auto px-4 py-8",
        children: [
          v.jsxs("h1", {
            className:
              "text-3xl heading font-extrabold flex items-center gap-2 reveal",
            children: [
              v.jsxs("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                className: "text-primary",
                children: [
                  v.jsx("path", {
                    d: "M8 10a4 4 0 1 1 8 0c0 1.5-1 2.5-2 3.5s-1 2-1 2",
                  }),
                  v.jsx("circle", { cx: "12", cy: "19", r: "1" }),
                ],
              }),
              "Questions",
            ],
          }),
          v.jsx("p", {
            className: "text-muted-foreground mt-2 reveal",
            children: "Les dernières questions envoyées par le public.",
          }),
          v.jsx("div", {
            className: "mt-6 grid gap-3",
            children: n.questions.map((s) =>
              v.jsx(SE, { q: s, selected: !1 }, s.id)
            ),
          }),
        ],
      }),
    })
  );
}
function kE() {
  const videoRefs = {
    main: v.useRef(null),
    teaser: v.useRef(null),
    highlights: v.useRef(null),
  };

  const togglePlay = (ref) => {
    if (!ref.current) return;
    if (ref.current.paused) ref.current.play();
    else ref.current.pause();
  };

  const toggleMute = (ref) => {
    if (!ref.current) return;
    ref.current.muted = !ref.current.muted;
  };

  const toggleFullscreen = (ref) => {
    if (!ref.current) return;
    if (ref.current.requestFullscreen) ref.current.requestFullscreen();
  };

  // icônes SVG pro
  const VolumeIcon = () => v.jsx("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: v.jsx("path", { d: "M11 5L6 9H2v6h4l5 4V5z M19.07 4.93a10 10 0 010 14.14" }),
  });

  const FullscreenIcon = () => v.jsx("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: v.jsx("path", { d: "M8 3H3v5 M16 3h5v5 M16 21h5v-5 M8 21H3v-5" }),
  });

  const PlayOverlay = ({ ref }) =>
    v.jsx("div", {
      className:
        "absolute inset-0 flex items-center justify-center cursor-pointer bg-black bg-opacity-30 hover:bg-opacity-40 transition",
      onClick: () => togglePlay(ref),
      children: v.jsx("div", {
        className:
          "w-16 h-16 bg-red-600 rounded-full flex items-center justify-center",
        children: v.jsx("svg", {
          className: "text-white w-8 h-8",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          children: v.jsx("path", { d: "M5 3l14 9-14 9V3z" }),
        }),
      }),
    });

  const VideoPlayer = ({ ref, src, fallbackText }) =>
    v.jsxs("div", {
      className: "w-full aspect-video rounded-xl overflow-hidden ring-1 ring-border bg-black relative",
      children: [
        v.jsx("video", {
          ref: ref,
          className: "w-full h-full object-cover",
          controls: false,
          src: src,
          onError: (e) => {
            e.target.outerHTML = `<div class="flex items-center justify-center w-full h-full bg-gray-800 text-white text-center font-semibold px-4">${fallbackText}</div>`;
          },
        }),
        v.jsx(PlayOverlay, { ref: ref }),
        v.jsxs("div", {
          className: "absolute top-2 right-2 flex gap-2",
          children: [
            v.jsx("button", {
              className: "bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 transition",
              onClick: () => togglePlay(ref),
              children: "Play/Pause",
            }),
            v.jsx("button", {
              className: "bg-gray-700 text-white px-2 py-1 rounded hover:bg-gray-800 transition",
              onClick: () => toggleMute(ref),
              children: v.jsx(VolumeIcon, {}),
            }),
            v.jsx("button", {
              className: "bg-gray-700 text-white px-2 py-1 rounded hover:bg-gray-800 transition",
              onClick: () => toggleFullscreen(ref),
              children: v.jsx(FullscreenIcon, {}),
            }),
          ],
        }),
      ],
    });

  return v.jsx(ls, {
    children: v.jsxs("section", {
      className: "container mx-auto px-4 py-10 space-y-12",
      children: [
        // Bloc 1 : reportage principal
        v.jsxs("div", {
          className: "reveal grid md:grid-cols-[2fr,1fr] gap-6 items-start",
          children: [
            VideoPlayer({ ref: videoRefs.main, src: "", fallbackText: "Vidéo principale à venir..." }),
            v.jsxs("div", {
              children: [
                v.jsx("h1", { className: "text-4xl font-bold", children: "Reportages : Plongée au cœur de la crise" }),
                v.jsx("p", { className: "text-muted-foreground mt-2", children: "Découvrez nos sujets avec un regard de terrain. Reportage signé par Lohann Thonnon-Varenne et Jessy Bouvet." }),
              ],
            }),
          ],
        }),

        // Bloc 2 : Bande-annonce
        v.jsxs("div", {
          className: "reveal grid md:grid-cols-[1fr,2fr] gap-6 items-start",
          children: [
            v.jsxs("div", {
              children: [
                v.jsx("h2", { className: "text-3xl font-extrabold", children: "Bande-annonce" }),
                v.jsx("p", {
                  className: "text-muted-foreground mt-2",
                  children: "Découvrez les moments forts et plongez dans l’action avant le reportage complet – un teaser qui vous captivera !",
                }),
              ],
            }),
            VideoPlayer({ ref: videoRefs.teaser, src: "/teaser%20EMC.mp4", fallbackText: "Vidéo teaser à venir..." }),
          ],
        }),

        // Bloc 3 : Rediffusion des temps forts
        v.jsxs("div", {
          className: "reveal grid md:grid-cols-[2fr,1fr] gap-6 items-start",
          children: [
            VideoPlayer({ ref: videoRefs.highlights, src: "", fallbackText: "Rediffusion des temps forts à venir..." }),
            v.jsxs("div", {
              children: [
                v.jsx("h2", { className: "text-3xl font-bold", children: "Temps forts" }),
                v.jsx("p", { className: "text-muted-foreground mt-2", children: "Revivez les moments clés et les interviews les plus marquantes." }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function EE() {
  return v.jsx(ls, {
    children: v.jsxs("section", {
      className: "container mx-auto px-4 py-10 max-w-4xl",
      children: [
        v.jsxs("h1", {
          className:
            "text-4xl heading font-extrabold reveal flex items-center gap-3",
          children: [
            v.jsxs("svg", {
              width: "28",
              height: "28",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              className: "text-primary",
              children: [
                v.jsx("path", { d: "M12 20l9-5-9-5-9 5 9 5z" }),
                v.jsx("path", { d: "M12 12l9-5-9-5-9 5 9 5z" }),
              ],
            }),
            "“CODE ROUGE” : Quand le débat s’invite à l’hôpital.",
          ],
        }),
        v.jsxs("div", {
          className: "mt-6 grid md:grid-cols-2 gap-6",
          children: [
            v.jsxs("div", {
              className: "reveal",
              children: [
                v.jsx("h2", {
                  className: "text-2xl font-bold mb-2",
                  children: "Notre mission",
                }),
                v.jsx("p", {
                  className: "text-muted-foreground",
                  children:
                    "“CODE ROUGE” est une émission de débat citoyen, conçue et réalisée par les étudiants du Lycée Général Notre-Dame de Nevers. Face à une crise des urgences qui ne cesse de faire les gros titres, notre équipe a décidé de poser une question simple, mais cruciale : « La crise des urgences à l’hôpital, tous responsables ? ».",
                }),
              ],
            }),
            v.jsxs("div", {
              className: "reveal",
              children: [
                v.jsx("h2", {
                  className: "text-2xl font-bold mb-2",
                  children: "Animateur & invités",
                }),
                v.jsxs("div", {
                  className: "text-muted-foreground space-y-3",
                  children: [
                    v.jsxs("p", {
                      children: [
                        "Présenté par ",
                        v.jsx("strong", { children: "Yann Le Fur" }),
                        ", le premier numéro de notre émission réunit des experts pour un débat essentiel. Retrouvez nos invités, ",
                        v.jsx("strong", { children: "Lilou Laurent" }),
                        ", ",
                        v.jsx("strong", { children: "Louis Beaujean" }),
                        " et ",
                        v.jsx("strong", { children: "Nicolas Denis" }),
                        ", pour analyser et débattre de la crise qui secoue notre système de santé.",
                      ],
                    }),
                    v.jsxs("p", {
                      children: [
                        "Sur le terrain, nos reportages sont signés par ",
                        v.jsx("strong", { children: "Lohann Thonnon-Varenne" }),
                        " et ",
                        v.jsx("strong", { children: "Jessy Bouvet" }),
                        ", qui vous feront vivre le quotidien des hommes et des femmes qui sont en première ligne.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function CE() {
  return v.jsx(ls, {
    children: v.jsxs("section", {
      className: "container mx-auto px-4 py-10 max-w-3xl",
      children: [
        v.jsxs("h1", {
          className:
            "text-4xl heading font-extrabold reveal flex items-center gap-3",
          children: [
            v.jsxs("svg", {
              width: "28",
              height: "28",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              className: "text-primary",
              children: [
                v.jsx("path", { d: "M4 4h16v16H4z" }),
                v.jsx("path", { d: "M8 8h8v8H8z" }),
              ],
            }),
            "Mentions Légales",
          ],
        }),
        v.jsxs("div", {
          className: "mt-6 grid gap-6",
          children: [
            v.jsxs("div", {
              className: "reveal",
              children: [
                v.jsx("h2", {
                  className: "text-2xl font-bold mb-1",
                  children: "Hébergeur et Éditeur",
                }),
                v.jsx("p", {
                  className: "text-muted-foreground",
                  children:
                    "Ce site web est réalisé dans le cadre d’un projet étudiant. Le tournage a été réalisé au Lycée Général Notre-Dame Nevers, 10 Rue du Cloître St Cry, 58000 Nevers, France. Le site web a été conçu et développé par Louis Martignon. L'hébergement est effectué par Plesk et Louis Martignon, Rue des Marguerites, 58000 Saint-Éloi.",
                }),
              ],
            }),
            v.jsxs("div", {
              className: "reveal",
              children: [
                v.jsx("h2", {
                  className: "text-2xl font-bold mb-1",
                  children: "Droit à l'Image et Droit d'auteur",
                }),
                v.jsxs("p", {
                  className: "text-muted-foreground",
                  children: [
                    v.jsx("strong", {
                      children:
                        "Article L122-4 du Code de la propriété intellectuelle :",
                    }),
                    " Toute représentation ou reproduction intégrale ou partielle faite sans le consentement de l'auteur ou de ses ayants droit ou ayants cause est illicite. Il en est de même pour la traduction, l'adaptation ou la transformation, l'arrangement ou la reproduction par un art ou un procédé quelconque.",
                  ],
                }),
                v.jsxs("p", {
                  className: "text-muted-foreground",
                  children: [
                    v.jsx("strong", { children: "Droit à l'image :" }),
                    " Conformément aux dispositions relatives au droit à l'image, la reproduction et l'utilisation des visuels (photographies, vidéos) du site sont soumises à l'autorisation expresse des personnes concernées et des ayants droit. Toute utilisation non autorisée est passible de poursuites judiciaires.",
                  ],
                }),
                v.jsxs("p", {
                  className: "text-muted-foreground",
                  children: [
                    v.jsx("strong", { children: "Propriété intellectuelle :" }),
                    ` Le contenu de ce site (textes, images, vidéos, animations, etc.) est la propriété exclusive des créateurs de l'émission "CODE ROUGE". Toute reproduction, adaptation ou diffusion, même partielle, est formellement interdite sans un accord écrit préalable.`,
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function TE({ autoHideMs: n = 1e4 }) {
  const [t, s] = k.useState({ questions: [], selectedId: null }),
    [i, a] = k.useState(!1),
    u = k.useRef(null);
  k.useEffect(() => {
    const f = (g) => s(g),
      p = (g) => s(g),
      m = () => {
        a(!1),
          window.setTimeout(() => a(!0), 50),
          u.current && window.clearTimeout(u.current),
          (u.current = window.setTimeout(() => a(!1), n));
      };
    return (
      $t.on("questions:init", f),
      $t.on("questions:update", p),
      $t.on("question:selected", m),
      () => {
        $t.off("questions:init", f),
          $t.off("questions:update", p),
          $t.off("question:selected", m),
          u.current && window.clearTimeout(u.current);
      }
    );
  }, [n]);
  const c = t.questions.find((f) => f.id === t.selectedId);
  return v.jsx("div", {
    className: "w-full h-full flex items-end justify-center p-6 bg-transparent",
    children: v.jsxs("div", {
      className: `obs-banner ${i ? "obs-in" : "obs-out"} max-w-5xl w-full`,
      "aria-hidden": !i,
      children: [
        v.jsxs("div", {
          className: "flex items-center gap-3",
          children: [
            v.jsx("div", {
              className:
                "h-10 w-10 rounded-sm bg-gradient-to-br from-red-500 to-red-700 animate-glow",
            }),
            v.jsx("div", {
              className:
                "text-xs uppercase tracking-widest font-bold text-yellow-400",
              children: "Breaking News",
            }),
          ],
        }),
        v.jsx("div", {
          className: "mt-2 whitespace-nowrap overflow-hidden",
          children: v.jsx("div", {
            className: "marquee text-lg md:text-2xl font-semibold",
            children: c ? `${c.firstName} ${c.lastName} · ${c.text}` : "",
          }),
        }),
      ],
    }),
  });
}
function NE() {
  return v.jsx("div", {
    className: "w-screen h-screen bg-transparent",
    children: v.jsx(TE, { autoHideMs: 1e4 }),
  });
}
function RE() {
  return v.jsx(ls, {
    children: v.jsxs("section", {
      className: "container mx-auto px-4 py-10",
      children: [
        v.jsx("h1", {
          className: "text-3xl heading font-extrabold",
          children: "Plan du site",
        }),
        v.jsxs("ul", {
          className: "mt-4 grid gap-2",
          children: [
            v.jsx("li", {
              children: v.jsx("a", {
                className: "a-underline",
                href: "/",
                children: "Accueil",
              }),
            }),
            v.jsx("li", {
              children: v.jsx("a", {
                className: "a-underline",
                href: "/poser-une-question",
                children: "Questions (soumission)",
              }),
            }),
            v.jsx("li", {
              children: v.jsx("a", {
                className: "a-underline",
                href: "/questions-en-direct",
                children: "Questions en direct (diffusion)",
              }),
            }),
            v.jsx("li", {
              children: v.jsx("a", {
                className: "a-underline",
                href: "/reportages",
                children: "Reportages",
              }),
            }),
            v.jsx("li", {
              children: v.jsx("a", {
                className: "a-underline",
                href: "/a-propos",
                children: "À propos",
              }),
            }),
            v.jsx("li", {
              children: v.jsx("a", {
                className: "a-underline",
                href: "/mentions-legales",
                children: "Mentions légales",
              }),
            }),
            v.jsx("li", {
              children: v.jsx("a", {
                className: "a-underline",
                href: "/obs",
                target: "_blank",
                rel: "noreferrer",
                children: "Bandeau OBS (technique)",
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
const PE = new nb(),
  OE = () =>
    v.jsx(sb, {
      client: PE,
      children: v.jsxs(R_, {
        children: [
          v.jsx(cw, {}),
          v.jsx(Ww, {}),
          v.jsx(nS, {
            children: v.jsxs(Zb, {
              children: [
                v.jsx(_n, { path: "/", element: v.jsx(Qk, {}) }),
                v.jsx(_n, {
                  path: "/poser-une-question",
                  element: v.jsx(bE, {}),
                }),
                v.jsx(_n, {
                  path: "/questions-en-direct",
                  element: v.jsx(rm, {}),
                }),
                v.jsx(_n, { path: "/questions", element: v.jsx(rm, {}) }),
                v.jsx(_n, { path: "/reportages", element: v.jsx(kE, {}) }),
                v.jsx(_n, { path: "/a-propos", element: v.jsx(EE, {}) }),
                v.jsx(_n, {
                  path: "/mentions-legales",
                  element: v.jsx(CE, {}),
                }),
                v.jsx(_n, { path: "/plan-du-site", element: v.jsx(RE, {}) }),
                v.jsx(_n, { path: "/obs", element: v.jsx(NE, {}) }),
                v.jsx(_n, { path: "*", element: v.jsx(uS, {}) }),
              ],
            }),
          }),
        ],
      }),
    });
fw.createRoot(document.getElementById("root")).render(v.jsx(OE, {}));
