import {
  require_react_dom
} from "/build/_shared/chunk-WEAPBHQG.js";
import {
  require_react
} from "/build/_shared/chunk-CJ4MY3PQ.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// node_modules/@headlessui/react/dist/components/transitions/transition.js
var import_react10 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o8) => setTimeout(() => {
    throw o8;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o() {
  let n7 = [], r5 = { addEventListener(e2, t12, s10, a3) {
    return e2.addEventListener(t12, s10, a3), r5.add(() => e2.removeEventListener(t12, s10, a3));
  }, requestAnimationFrame(...e2) {
    let t12 = requestAnimationFrame(...e2);
    return r5.add(() => cancelAnimationFrame(t12));
  }, nextFrame(...e2) {
    return r5.requestAnimationFrame(() => r5.requestAnimationFrame(...e2));
  }, setTimeout(...e2) {
    let t12 = setTimeout(...e2);
    return r5.add(() => clearTimeout(t12));
  }, microTask(...e2) {
    let t12 = { current: true };
    return t(() => {
      t12.current && e2[0]();
    }), r5.add(() => {
      t12.current = false;
    });
  }, style(e2, t12, s10) {
    let a3 = e2.style.getPropertyValue(t12);
    return Object.assign(e2.style, { [t12]: s10 }), this.add(() => {
      Object.assign(e2.style, { [t12]: a3 });
    });
  }, group(e2) {
    let t12 = o();
    return e2(t12), this.add(() => t12.dispose());
  }, add(e2) {
    return n7.push(e2), () => {
      let t12 = n7.indexOf(e2);
      if (t12 >= 0)
        for (let s10 of n7.splice(t12, 1))
          s10();
    };
  }, dispose() {
    for (let e2 of n7.splice(0))
      e2();
  } };
  return r5;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
function p() {
  let [e2] = (0, import_react.useState)(o);
  return (0, import_react.useEffect)(() => () => e2.dispose(), [e2]), e2;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react2 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d = (t12, e2, n7) => e2 in t12 ? i(t12, e2, { enumerable: true, configurable: true, writable: true, value: n7 }) : t12[e2] = n7;
var r = (t12, e2, n7) => (d(t12, typeof e2 != "symbol" ? e2 + "" : e2, n7), n7);
var o3 = class {
  constructor() {
    r(this, "current", this.detect());
    r(this, "handoffState", "pending");
    r(this, "currentId", 0);
  }
  set(e2) {
    this.current !== e2 && (this.handoffState = "pending", this.currentId = 0, this.current = e2);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s2 = new o3();

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var l = (e2, f7) => {
  s2.isServer ? (0, import_react2.useEffect)(e2, f7) : (0, import_react2.useLayoutEffect)(e2, f7);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
function s3(e2) {
  let r5 = (0, import_react3.useRef)(e2);
  return l(() => {
    r5.current = e2;
  }, [e2]), r5;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var o4 = function(t12) {
  let e2 = s3(t12);
  return import_react4.default.useCallback((...r5) => e2.current(...r5), [e2]);
};

// node_modules/@headlessui/react/dist/hooks/use-flags.js
var import_react6 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react5 = __toESM(require_react(), 1);
function f() {
  let e2 = (0, import_react5.useRef)(false);
  return l(() => (e2.current = true, () => {
    e2.current = false;
  }), []), e2;
}

// node_modules/@headlessui/react/dist/hooks/use-flags.js
function c2(a3 = 0) {
  let [l8, r5] = (0, import_react6.useState)(a3), t12 = f(), o8 = (0, import_react6.useCallback)((e2) => {
    t12.current && r5((u5) => u5 | e2);
  }, [l8, t12]), m6 = (0, import_react6.useCallback)((e2) => Boolean(l8 & e2), [l8]), s10 = (0, import_react6.useCallback)((e2) => {
    t12.current && r5((u5) => u5 & ~e2);
  }, [r5, t12]), g4 = (0, import_react6.useCallback)((e2) => {
    t12.current && r5((u5) => u5 ^ e2);
  }, [r5]);
  return { flags: l8, addFlag: o8, hasFlag: m6, removeFlag: s10, toggleFlag: g4 };
}

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var t4 = __toESM(require_react(), 1);
function s4() {
  let r5 = typeof document == "undefined";
  return "useSyncExternalStore" in t4 ? ((o8) => o8.useSyncExternalStore)(t4)(() => () => {
  }, () => false, () => !r5) : false;
}
function l2() {
  let r5 = s4(), [e2, n7] = t4.useState(s2.isHandoffComplete);
  return e2 && s2.isHandoffComplete === false && n7(false), t4.useEffect(() => {
    e2 !== true && n7(true);
  }, [e2]), t4.useEffect(() => s2.handoff(), []), r5 ? false : e2;
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react7 = __toESM(require_react(), 1);
var u = Symbol();
function T(t12, n7 = true) {
  return Object.assign(t12, { [u]: n7 });
}
function y(...t12) {
  let n7 = (0, import_react7.useRef)(t12);
  (0, import_react7.useEffect)(() => {
    n7.current = t12;
  }, [t12]);
  let c7 = o4((e2) => {
    for (let o8 of n7.current)
      o8 != null && (typeof o8 == "function" ? o8(e2) : o8.current = e2);
  });
  return t12.every((e2) => e2 == null || (e2 == null ? void 0 : e2[u])) ? void 0 : c7;
}

// node_modules/@headlessui/react/dist/utils/match.js
function u2(r5, n7, ...a3) {
  if (r5 in n7) {
    let e2 = n7[r5];
    return typeof e2 == "function" ? e2(...a3) : e2;
  }
  let t12 = new Error(`Tried to handle "${r5}" but there is no handler defined. Only defined handlers are: ${Object.keys(n7).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t12, u2), t12;
}

// node_modules/@headlessui/react/dist/utils/once.js
function l4(r5) {
  let e2 = { called: false };
  return (...t12) => {
    if (!e2.called)
      return e2.called = true, r5(...t12);
  };
}

// node_modules/@headlessui/react/dist/components/transitions/utils/transition.js
function g(t12, ...e2) {
  t12 && e2.length > 0 && t12.classList.add(...e2);
}
function v(t12, ...e2) {
  t12 && e2.length > 0 && t12.classList.remove(...e2);
}
function b(t12, e2) {
  let n7 = o();
  if (!t12)
    return n7.dispose;
  let { transitionDuration: m6, transitionDelay: a3 } = getComputedStyle(t12), [u5, p4] = [m6, a3].map((l8) => {
    let [r5 = 0] = l8.split(",").filter(Boolean).map((i5) => i5.includes("ms") ? parseFloat(i5) : parseFloat(i5) * 1e3).sort((i5, T4) => T4 - i5);
    return r5;
  }), o8 = u5 + p4;
  if (o8 !== 0) {
    n7.group((r5) => {
      r5.setTimeout(() => {
        e2(), r5.dispose();
      }, o8), r5.addEventListener(t12, "transitionrun", (i5) => {
        i5.target === i5.currentTarget && r5.dispose();
      });
    });
    let l8 = n7.addEventListener(t12, "transitionend", (r5) => {
      r5.target === r5.currentTarget && (e2(), l8());
    });
  } else
    e2();
  return n7.add(() => e2()), n7.dispose;
}
function M(t12, e2, n7, m6) {
  let a3 = n7 ? "enter" : "leave", u5 = o(), p4 = m6 !== void 0 ? l4(m6) : () => {
  };
  a3 === "enter" && (t12.removeAttribute("hidden"), t12.style.display = "");
  let o8 = u2(a3, { enter: () => e2.enter, leave: () => e2.leave }), l8 = u2(a3, { enter: () => e2.enterTo, leave: () => e2.leaveTo }), r5 = u2(a3, { enter: () => e2.enterFrom, leave: () => e2.leaveFrom });
  return v(t12, ...e2.base, ...e2.enter, ...e2.enterTo, ...e2.enterFrom, ...e2.leave, ...e2.leaveFrom, ...e2.leaveTo, ...e2.entered), g(t12, ...e2.base, ...o8, ...r5), u5.nextFrame(() => {
    v(t12, ...e2.base, ...o8, ...r5), g(t12, ...e2.base, ...o8, ...l8), b(t12, () => (v(t12, ...e2.base, ...o8), g(t12, ...e2.base, ...e2.entered), p4()));
  }), u5.dispose;
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
function D({ immediate: t12, container: s10, direction: n7, classes: u5, onStart: a3, onStop: c7 }) {
  let l8 = f(), d9 = p(), e2 = s3(n7);
  l(() => {
    t12 && (e2.current = "enter");
  }, [t12]), l(() => {
    let r5 = o();
    d9.add(r5.dispose);
    let i5 = s10.current;
    if (i5 && e2.current !== "idle" && l8.current)
      return r5.dispose(), a3.current(e2.current), r5.add(M(i5, u5.current, e2.current === "enter", () => {
        r5.dispose(), c7.current(e2.current);
      })), r5.dispose;
  }, [n7]);
}

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react8 = __toESM(require_react(), 1);
var n2 = (0, import_react8.createContext)(null);
n2.displayName = "OpenClosedContext";
var d2 = ((e2) => (e2[e2.Open = 1] = "Open", e2[e2.Closed = 2] = "Closed", e2[e2.Closing = 4] = "Closing", e2[e2.Opening = 8] = "Opening", e2))(d2 || {});
function u3() {
  return (0, import_react8.useContext)(n2);
}
function s5({ value: o8, children: r5 }) {
  return import_react8.default.createElement(n2.Provider, { value: o8 }, r5);
}

// node_modules/@headlessui/react/dist/utils/class-names.js
function t6(...r5) {
  return Array.from(new Set(r5.flatMap((n7) => typeof n7 == "string" ? n7.split(" ") : []))).filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react9 = __toESM(require_react(), 1);
var O = ((n7) => (n7[n7.None = 0] = "None", n7[n7.RenderStrategy = 1] = "RenderStrategy", n7[n7.Static = 2] = "Static", n7))(O || {});
var v2 = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(v2 || {});
function C({ ourProps: r5, theirProps: t12, slot: e2, defaultTag: n7, features: o8, visible: a3 = true, name: f7, mergeRefs: l8 }) {
  l8 = l8 != null ? l8 : k;
  let s10 = R(t12, r5);
  if (a3)
    return m(s10, e2, n7, f7, l8);
  let y5 = o8 != null ? o8 : 0;
  if (y5 & 2) {
    let { static: u5 = false, ...d9 } = s10;
    if (u5)
      return m(d9, e2, n7, f7, l8);
  }
  if (y5 & 1) {
    let { unmount: u5 = true, ...d9 } = s10;
    return u2(u5 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return m({ ...d9, hidden: true, style: { display: "none" } }, e2, n7, f7, l8);
    } });
  }
  return m(s10, e2, n7, f7, l8);
}
function m(r5, t12 = {}, e2, n7, o8) {
  let { as: a3 = e2, children: f7, refName: l8 = "ref", ...s10 } = F(r5, ["unmount", "static"]), y5 = r5.ref !== void 0 ? { [l8]: r5.ref } : {}, u5 = typeof f7 == "function" ? f7(t12) : f7;
  "className" in s10 && s10.className && typeof s10.className == "function" && (s10.className = s10.className(t12));
  let d9 = {};
  if (t12) {
    let i5 = false, c7 = [];
    for (let [T4, p4] of Object.entries(t12))
      typeof p4 == "boolean" && (i5 = true), p4 === true && c7.push(T4);
    i5 && (d9["data-headlessui-state"] = c7.join(" "));
  }
  if (a3 === import_react9.Fragment && Object.keys(x(s10)).length > 0) {
    if (!(0, import_react9.isValidElement)(u5) || Array.isArray(u5) && u5.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${n7} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(s10).map((p4) => `  - ${p4}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((p4) => `  - ${p4}`).join(`
`)].join(`
`));
    let i5 = u5.props, c7 = typeof (i5 == null ? void 0 : i5.className) == "function" ? (...p4) => t6(i5 == null ? void 0 : i5.className(...p4), s10.className) : t6(i5 == null ? void 0 : i5.className, s10.className), T4 = c7 ? { className: c7 } : {};
    return (0, import_react9.cloneElement)(u5, Object.assign({}, R(u5.props, x(F(s10, ["ref"]))), d9, y5, { ref: o8(u5.ref, y5.ref) }, T4));
  }
  return (0, import_react9.createElement)(a3, Object.assign({}, F(s10, ["ref"]), a3 !== import_react9.Fragment && y5, a3 !== import_react9.Fragment && d9), u5);
}
function I() {
  let r5 = (0, import_react9.useRef)([]), t12 = (0, import_react9.useCallback)((e2) => {
    for (let n7 of r5.current)
      n7 != null && (typeof n7 == "function" ? n7(e2) : n7.current = e2);
  }, []);
  return (...e2) => {
    if (!e2.every((n7) => n7 == null))
      return r5.current = e2, t12;
  };
}
function k(...r5) {
  return r5.every((t12) => t12 == null) ? void 0 : (t12) => {
    for (let e2 of r5)
      e2 != null && (typeof e2 == "function" ? e2(t12) : e2.current = t12);
  };
}
function R(...r5) {
  var n7;
  if (r5.length === 0)
    return {};
  if (r5.length === 1)
    return r5[0];
  let t12 = {}, e2 = {};
  for (let o8 of r5)
    for (let a3 in o8)
      a3.startsWith("on") && typeof o8[a3] == "function" ? ((n7 = e2[a3]) != null || (e2[a3] = []), e2[a3].push(o8[a3])) : t12[a3] = o8[a3];
  if (t12.disabled || t12["aria-disabled"])
    return Object.assign(t12, Object.fromEntries(Object.keys(e2).map((o8) => [o8, void 0])));
  for (let o8 in e2)
    Object.assign(t12, { [o8](a3, ...f7) {
      let l8 = e2[o8];
      for (let s10 of l8) {
        if ((a3 instanceof Event || (a3 == null ? void 0 : a3.nativeEvent) instanceof Event) && a3.defaultPrevented)
          return;
        s10(a3, ...f7);
      }
    } });
  return t12;
}
function U(r5) {
  var t12;
  return Object.assign((0, import_react9.forwardRef)(r5), { displayName: (t12 = r5.displayName) != null ? t12 : r5.name });
}
function x(r5) {
  let t12 = Object.assign({}, r5);
  for (let e2 in t12)
    t12[e2] === void 0 && delete t12[e2];
  return t12;
}
function F(r5, t12 = []) {
  let e2 = Object.assign({}, r5);
  for (let n7 of t12)
    n7 in e2 && delete e2[n7];
  return e2;
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
function S2(t12 = "") {
  return t12.split(/\s+/).filter((n7) => n7.length > 1);
}
var I2 = (0, import_react10.createContext)(null);
I2.displayName = "TransitionContext";
var Se = ((r5) => (r5.Visible = "visible", r5.Hidden = "hidden", r5))(Se || {});
function ye() {
  let t12 = (0, import_react10.useContext)(I2);
  if (t12 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t12;
}
function xe() {
  let t12 = (0, import_react10.useContext)(M2);
  if (t12 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t12;
}
var M2 = (0, import_react10.createContext)(null);
M2.displayName = "NestingContext";
function U2(t12) {
  return "children" in t12 ? U2(t12.children) : t12.current.filter(({ el: n7 }) => n7.current !== null).filter(({ state: n7 }) => n7 === "visible").length > 0;
}
function se(t12, n7) {
  let r5 = s3(t12), s10 = (0, import_react10.useRef)([]), R3 = f(), D4 = p(), p4 = o4((i5, e2 = v2.Hidden) => {
    let a3 = s10.current.findIndex(({ el: o8 }) => o8 === i5);
    a3 !== -1 && (u2(e2, { [v2.Unmount]() {
      s10.current.splice(a3, 1);
    }, [v2.Hidden]() {
      s10.current[a3].state = "hidden";
    } }), D4.microTask(() => {
      var o8;
      !U2(s10) && R3.current && ((o8 = r5.current) == null || o8.call(r5));
    }));
  }), x2 = o4((i5) => {
    let e2 = s10.current.find(({ el: a3 }) => a3 === i5);
    return e2 ? e2.state !== "visible" && (e2.state = "visible") : s10.current.push({ el: i5, state: "visible" }), () => p4(i5, v2.Unmount);
  }), h3 = (0, import_react10.useRef)([]), v3 = (0, import_react10.useRef)(Promise.resolve()), u5 = (0, import_react10.useRef)({ enter: [], leave: [], idle: [] }), g4 = o4((i5, e2, a3) => {
    h3.current.splice(0), n7 && (n7.chains.current[e2] = n7.chains.current[e2].filter(([o8]) => o8 !== i5)), n7 == null || n7.chains.current[e2].push([i5, new Promise((o8) => {
      h3.current.push(o8);
    })]), n7 == null || n7.chains.current[e2].push([i5, new Promise((o8) => {
      Promise.all(u5.current[e2].map(([f7, N5]) => N5)).then(() => o8());
    })]), e2 === "enter" ? v3.current = v3.current.then(() => n7 == null ? void 0 : n7.wait.current).then(() => a3(e2)) : a3(e2);
  }), d9 = o4((i5, e2, a3) => {
    Promise.all(u5.current[e2].splice(0).map(([o8, f7]) => f7)).then(() => {
      var o8;
      (o8 = h3.current.shift()) == null || o8();
    }).then(() => a3(e2));
  });
  return (0, import_react10.useMemo)(() => ({ children: s10, register: x2, unregister: p4, onStart: g4, onStop: d9, wait: v3, chains: u5 }), [x2, p4, s10, g4, d9, u5, v3]);
}
function Ne() {
}
var Pe = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function ae(t12) {
  var r5;
  let n7 = {};
  for (let s10 of Pe)
    n7[s10] = (r5 = t12[s10]) != null ? r5 : Ne;
  return n7;
}
function Re(t12) {
  let n7 = (0, import_react10.useRef)(ae(t12));
  return (0, import_react10.useEffect)(() => {
    n7.current = ae(t12);
  }, [t12]), n7;
}
var De = "div";
var le = O.RenderStrategy;
function He(t12, n7) {
  var Q, Y;
  let { beforeEnter: r5, afterEnter: s10, beforeLeave: R3, afterLeave: D4, enter: p4, enterFrom: x2, enterTo: h3, entered: v3, leave: u5, leaveFrom: g4, leaveTo: d9, ...i5 } = t12, e2 = (0, import_react10.useRef)(null), a3 = y(e2, n7), o8 = (Q = i5.unmount) == null || Q ? v2.Unmount : v2.Hidden, { show: f7, appear: N5, initial: T4 } = ye(), [l8, j3] = (0, import_react10.useState)(f7 ? "visible" : "hidden"), z = xe(), { register: L, unregister: O3 } = z;
  (0, import_react10.useEffect)(() => L(e2), [L, e2]), (0, import_react10.useEffect)(() => {
    if (o8 === v2.Hidden && e2.current) {
      if (f7 && l8 !== "visible") {
        j3("visible");
        return;
      }
      return u2(l8, { ["hidden"]: () => O3(e2), ["visible"]: () => L(e2) });
    }
  }, [l8, e2, L, O3, f7, o8]);
  let k2 = s3({ base: S2(i5.className), enter: S2(p4), enterFrom: S2(x2), enterTo: S2(h3), entered: S2(v3), leave: S2(u5), leaveFrom: S2(g4), leaveTo: S2(d9) }), V = Re({ beforeEnter: r5, afterEnter: s10, beforeLeave: R3, afterLeave: D4 }), G = l2();
  (0, import_react10.useEffect)(() => {
    if (G && l8 === "visible" && e2.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [e2, l8, G]);
  let Te = T4 && !N5, K = N5 && f7 && T4, de = (() => !G || Te ? "idle" : f7 ? "enter" : "leave")(), H2 = c2(0), fe = o4((C3) => u2(C3, { enter: () => {
    H2.addFlag(d2.Opening), V.current.beforeEnter();
  }, leave: () => {
    H2.addFlag(d2.Closing), V.current.beforeLeave();
  }, idle: () => {
  } })), me = o4((C3) => u2(C3, { enter: () => {
    H2.removeFlag(d2.Opening), V.current.afterEnter();
  }, leave: () => {
    H2.removeFlag(d2.Closing), V.current.afterLeave();
  }, idle: () => {
  } })), w2 = se(() => {
    j3("hidden"), O3(e2);
  }, z), B = (0, import_react10.useRef)(false);
  D({ immediate: K, container: e2, classes: k2, direction: de, onStart: s3((C3) => {
    B.current = true, w2.onStart(e2, C3, fe);
  }), onStop: s3((C3) => {
    B.current = false, w2.onStop(e2, C3, me), C3 === "leave" && !U2(w2) && (j3("hidden"), O3(e2));
  }) });
  let P3 = i5, ce = { ref: a3 };
  return K ? P3 = { ...P3, className: t6(i5.className, ...k2.current.enter, ...k2.current.enterFrom) } : B.current && (P3.className = t6(i5.className, (Y = e2.current) == null ? void 0 : Y.className), P3.className === "" && delete P3.className), import_react10.default.createElement(M2.Provider, { value: w2 }, import_react10.default.createElement(s5, { value: u2(l8, { ["visible"]: d2.Open, ["hidden"]: d2.Closed }) | H2.flags }, C({ ourProps: ce, theirProps: P3, defaultTag: De, features: le, visible: l8 === "visible", name: "Transition.Child" })));
}
function Fe(t12, n7) {
  let { show: r5, appear: s10 = false, unmount: R3 = true, ...D4 } = t12, p4 = (0, import_react10.useRef)(null), x2 = y(p4, n7);
  l2();
  let h3 = u3();
  if (r5 === void 0 && h3 !== null && (r5 = (h3 & d2.Open) === d2.Open), ![true, false].includes(r5))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [v3, u5] = (0, import_react10.useState)(r5 ? "visible" : "hidden"), g4 = se(() => {
    u5("hidden");
  }), [d9, i5] = (0, import_react10.useState)(true), e2 = (0, import_react10.useRef)([r5]);
  l(() => {
    d9 !== false && e2.current[e2.current.length - 1] !== r5 && (e2.current.push(r5), i5(false));
  }, [e2, r5]);
  let a3 = (0, import_react10.useMemo)(() => ({ show: r5, appear: s10, initial: d9 }), [r5, s10, d9]);
  (0, import_react10.useEffect)(() => {
    if (r5)
      u5("visible");
    else if (!U2(g4))
      u5("hidden");
    else {
      let T4 = p4.current;
      if (!T4)
        return;
      let l8 = T4.getBoundingClientRect();
      l8.x === 0 && l8.y === 0 && l8.width === 0 && l8.height === 0 && u5("hidden");
    }
  }, [r5, g4]);
  let o8 = { unmount: R3 }, f7 = o4(() => {
    var T4;
    d9 && i5(false), (T4 = t12.beforeEnter) == null || T4.call(t12);
  }), N5 = o4(() => {
    var T4;
    d9 && i5(false), (T4 = t12.beforeLeave) == null || T4.call(t12);
  });
  return import_react10.default.createElement(M2.Provider, { value: g4 }, import_react10.default.createElement(I2.Provider, { value: a3 }, C({ ourProps: { ...o8, as: import_react10.Fragment, children: import_react10.default.createElement(ue, { ref: x2, ...o8, ...D4, beforeEnter: f7, beforeLeave: N5 }) }, theirProps: {}, defaultTag: import_react10.Fragment, features: le, visible: v3 === "visible", name: "Transition" })));
}
function _e(t12, n7) {
  let r5 = (0, import_react10.useContext)(I2) !== null, s10 = u3() !== null;
  return import_react10.default.createElement(import_react10.default.Fragment, null, !r5 && s10 ? import_react10.default.createElement(q, { ref: n7, ...t12 }) : import_react10.default.createElement(ue, { ref: n7, ...t12 }));
}
var q = U(Fe);
var ue = U(He);
var Le = U(_e);
var qe = Object.assign(q, { Child: Le, Root: q });

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react11 = __toESM(require_react(), 1);
var o5;
var I3 = (o5 = import_react11.default.useId) != null ? o5 : function() {
  let n7 = l2(), [e2, u5] = import_react11.default.useState(n7 ? () => s2.nextId() : null);
  return l(() => {
    e2 === null && u5(s2.nextId());
  }, [e2]), e2 != null ? "" + e2 : void 0;
};

// node_modules/@headlessui/react/dist/utils/owner.js
function o6(r5) {
  return s2.isServer ? null : r5 instanceof Node ? r5.ownerDocument : r5 != null && r5.hasOwnProperty("current") && r5.current instanceof Node ? r5.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/utils/focus-management.js
var c4 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
var M3 = ((n7) => (n7[n7.First = 1] = "First", n7[n7.Previous = 2] = "Previous", n7[n7.Next = 4] = "Next", n7[n7.Last = 8] = "Last", n7[n7.WrapAround = 16] = "WrapAround", n7[n7.NoScroll = 32] = "NoScroll", n7))(M3 || {});
var N2 = ((o8) => (o8[o8.Error = 0] = "Error", o8[o8.Overflow = 1] = "Overflow", o8[o8.Success = 2] = "Success", o8[o8.Underflow = 3] = "Underflow", o8))(N2 || {});
var F3 = ((t12) => (t12[t12.Previous = -1] = "Previous", t12[t12.Next = 1] = "Next", t12))(F3 || {});
function f3(e2 = document.body) {
  return e2 == null ? [] : Array.from(e2.querySelectorAll(c4)).sort((r5, t12) => Math.sign((r5.tabIndex || Number.MAX_SAFE_INTEGER) - (t12.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var T2 = ((t12) => (t12[t12.Strict = 0] = "Strict", t12[t12.Loose = 1] = "Loose", t12))(T2 || {});
function h2(e2, r5 = 0) {
  var t12;
  return e2 === ((t12 = o6(e2)) == null ? void 0 : t12.body) ? false : u2(r5, { [0]() {
    return e2.matches(c4);
  }, [1]() {
    let l8 = e2;
    for (; l8 !== null; ) {
      if (l8.matches(c4))
        return true;
      l8 = l8.parentElement;
    }
    return false;
  } });
}
function D2(e2) {
  let r5 = o6(e2);
  o().nextFrame(() => {
    r5 && !h2(r5.activeElement, 0) && y2(e2);
  });
}
var w = ((t12) => (t12[t12.Keyboard = 0] = "Keyboard", t12[t12.Mouse = 1] = "Mouse", t12))(w || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e2) => {
  e2.metaKey || e2.altKey || e2.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e2) => {
  e2.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e2.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function y2(e2) {
  e2 == null || e2.focus({ preventScroll: true });
}
var S3 = ["textarea", "input"].join(",");
function H(e2) {
  var r5, t12;
  return (t12 = (r5 = e2 == null ? void 0 : e2.matches) == null ? void 0 : r5.call(e2, S3)) != null ? t12 : false;
}
function I4(e2, r5 = (t12) => t12) {
  return e2.slice().sort((t12, l8) => {
    let o8 = r5(t12), i5 = r5(l8);
    if (o8 === null || i5 === null)
      return 0;
    let n7 = o8.compareDocumentPosition(i5);
    return n7 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n7 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function _(e2, r5) {
  return O2(f3(), r5, { relativeTo: e2 });
}
function O2(e2, r5, { sorted: t12 = true, relativeTo: l8 = null, skipElements: o8 = [] } = {}) {
  let i5 = Array.isArray(e2) ? e2.length > 0 ? e2[0].ownerDocument : document : e2.ownerDocument, n7 = Array.isArray(e2) ? t12 ? I4(e2) : e2 : f3(e2);
  o8.length > 0 && n7.length > 1 && (n7 = n7.filter((s10) => !o8.includes(s10))), l8 = l8 != null ? l8 : i5.activeElement;
  let E4 = (() => {
    if (r5 & 5)
      return 1;
    if (r5 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x2 = (() => {
    if (r5 & 1)
      return 0;
    if (r5 & 2)
      return Math.max(0, n7.indexOf(l8)) - 1;
    if (r5 & 4)
      return Math.max(0, n7.indexOf(l8)) + 1;
    if (r5 & 8)
      return n7.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p4 = r5 & 32 ? { preventScroll: true } : {}, d9 = 0, a3 = n7.length, u5;
  do {
    if (d9 >= a3 || d9 + a3 <= 0)
      return 0;
    let s10 = x2 + d9;
    if (r5 & 16)
      s10 = (s10 + a3) % a3;
    else {
      if (s10 < 0)
        return 3;
      if (s10 >= a3)
        return 1;
    }
    u5 = n7[s10], u5 == null || u5.focus(p4), d9 += E4;
  } while (u5 !== i5.activeElement);
  return r5 & 6 && H(u5) && u5.select(), 2;
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react14 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/platform.js
function t8() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i3() {
  return /Android/gi.test(window.navigator.userAgent);
}
function n3() {
  return t8() || i3();
}

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react12 = __toESM(require_react(), 1);
function d3(e2, r5, n7) {
  let o8 = s3(r5);
  (0, import_react12.useEffect)(() => {
    function t12(u5) {
      o8.current(u5);
    }
    return document.addEventListener(e2, t12, n7), () => document.removeEventListener(e2, t12, n7);
  }, [e2, n7]);
}

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react13 = __toESM(require_react(), 1);
function s6(e2, r5, n7) {
  let o8 = s3(r5);
  (0, import_react13.useEffect)(() => {
    function t12(i5) {
      o8.current(i5);
    }
    return window.addEventListener(e2, t12, n7), () => window.removeEventListener(e2, t12, n7);
  }, [e2, n7]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function y3(s10, m6, a3 = true) {
  let i5 = (0, import_react14.useRef)(false);
  (0, import_react14.useEffect)(() => {
    requestAnimationFrame(() => {
      i5.current = a3;
    });
  }, [a3]);
  function c7(e2, r5) {
    if (!i5.current || e2.defaultPrevented)
      return;
    let t12 = r5(e2);
    if (t12 === null || !t12.getRootNode().contains(t12) || !t12.isConnected)
      return;
    let E4 = function u5(n7) {
      return typeof n7 == "function" ? u5(n7()) : Array.isArray(n7) || n7 instanceof Set ? n7 : [n7];
    }(s10);
    for (let u5 of E4) {
      if (u5 === null)
        continue;
      let n7 = u5 instanceof HTMLElement ? u5 : u5.current;
      if (n7 != null && n7.contains(t12) || e2.composed && e2.composedPath().includes(n7))
        return;
    }
    return !h2(t12, T2.Loose) && t12.tabIndex !== -1 && e2.preventDefault(), m6(e2, t12);
  }
  let o8 = (0, import_react14.useRef)(null);
  d3("pointerdown", (e2) => {
    var r5, t12;
    i5.current && (o8.current = ((t12 = (r5 = e2.composedPath) == null ? void 0 : r5.call(e2)) == null ? void 0 : t12[0]) || e2.target);
  }, true), d3("mousedown", (e2) => {
    var r5, t12;
    i5.current && (o8.current = ((t12 = (r5 = e2.composedPath) == null ? void 0 : r5.call(e2)) == null ? void 0 : t12[0]) || e2.target);
  }, true), d3("click", (e2) => {
    n3() || o8.current && (c7(e2, () => o8.current), o8.current = null);
  }, true), d3("touchend", (e2) => c7(e2, () => e2.target instanceof HTMLElement ? e2.target : null), true), s6("blur", (e2) => c7(e2, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
var import_react15 = __toESM(require_react(), 1);
function n4(...e2) {
  return (0, import_react15.useMemo)(() => o6(...e2), [...e2]);
}

// node_modules/@headlessui/react/dist/utils/bugs.js
function r3(n7) {
  let e2 = n7.parentElement, l8 = null;
  for (; e2 && !(e2 instanceof HTMLFieldSetElement); )
    e2 instanceof HTMLLegendElement && (l8 = e2), e2 = e2.parentElement;
  let t12 = (e2 == null ? void 0 : e2.getAttribute("disabled")) === "";
  return t12 && i4(l8) ? false : t12;
}
function i4(n7) {
  if (!n7)
    return false;
  let e2 = n7.previousElementSibling;
  for (; e2 !== null; ) {
    if (e2 instanceof HTMLLegendElement)
      return false;
    e2 = e2.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/components/keyboard.js
var o7 = ((r5) => (r5.Space = " ", r5.Enter = "Enter", r5.Escape = "Escape", r5.Backspace = "Backspace", r5.Delete = "Delete", r5.ArrowLeft = "ArrowLeft", r5.ArrowUp = "ArrowUp", r5.ArrowRight = "ArrowRight", r5.ArrowDown = "ArrowDown", r5.Home = "Home", r5.End = "End", r5.PageUp = "PageUp", r5.PageDown = "PageDown", r5.Tab = "Tab", r5))(o7 || {});

// node_modules/@headlessui/react/dist/hooks/use-event-listener.js
var import_react16 = __toESM(require_react(), 1);
function E2(n7, e2, a3, t12) {
  let i5 = s3(a3);
  (0, import_react16.useEffect)(() => {
    n7 = n7 != null ? n7 : window;
    function r5(o8) {
      i5.current(o8);
    }
    return n7.addEventListener(e2, r5, t12), () => n7.removeEventListener(e2, r5, t12);
  }, [n7, e2, t12]);
}

// node_modules/@headlessui/react/dist/internal/portal-force-root.js
var import_react17 = __toESM(require_react(), 1);
var e = (0, import_react17.createContext)(false);
function a2() {
  return (0, import_react17.useContext)(e);
}
function l6(o8) {
  return import_react17.default.createElement(e.Provider, { value: o8.force }, o8.children);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
var import_react19 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/hooks/use-on-unmount.js
var import_react18 = __toESM(require_react(), 1);
function c6(t12) {
  let r5 = o4(t12), e2 = (0, import_react18.useRef)(false);
  (0, import_react18.useEffect)(() => (e2.current = false, () => {
    e2.current = true, t(() => {
      e2.current && r5();
    });
  }), [r5]);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
function F4(p4) {
  let n7 = a2(), l8 = (0, import_react19.useContext)(_2), e2 = n4(p4), [a3, o8] = (0, import_react19.useState)(() => {
    if (!n7 && l8 !== null || s2.isServer)
      return null;
    let t12 = e2 == null ? void 0 : e2.getElementById("headlessui-portal-root");
    if (t12)
      return t12;
    if (e2 === null)
      return null;
    let r5 = e2.createElement("div");
    return r5.setAttribute("id", "headlessui-portal-root"), e2.body.appendChild(r5);
  });
  return (0, import_react19.useEffect)(() => {
    a3 !== null && (e2 != null && e2.body.contains(a3) || e2 == null || e2.body.appendChild(a3));
  }, [a3, e2]), (0, import_react19.useEffect)(() => {
    n7 || l8 !== null && o8(l8.current);
  }, [l8, o8, n7]), a3;
}
var U3 = import_react19.Fragment;
function N3(p4, n7) {
  let l8 = p4, e2 = (0, import_react19.useRef)(null), a3 = y(T((u5) => {
    e2.current = u5;
  }), n7), o8 = n4(e2), t12 = F4(e2), [r5] = (0, import_react19.useState)(() => {
    var u5;
    return s2.isServer ? null : (u5 = o8 == null ? void 0 : o8.createElement("div")) != null ? u5 : null;
  }), i5 = (0, import_react19.useContext)(f5), v3 = l2();
  return l(() => {
    !t12 || !r5 || t12.contains(r5) || (r5.setAttribute("data-headlessui-portal", ""), t12.appendChild(r5));
  }, [t12, r5]), l(() => {
    if (r5 && i5)
      return i5.register(r5);
  }, [i5, r5]), c6(() => {
    var u5;
    !t12 || !r5 || (r5 instanceof Node && t12.contains(r5) && t12.removeChild(r5), t12.childNodes.length <= 0 && ((u5 = t12.parentElement) == null || u5.removeChild(t12)));
  }), v3 ? !t12 || !r5 ? null : (0, import_react_dom.createPortal)(C({ ourProps: { ref: a3 }, theirProps: l8, defaultTag: U3, name: "Portal" }), r5) : null;
}
var S4 = import_react19.Fragment;
var _2 = (0, import_react19.createContext)(null);
function j2(p4, n7) {
  let { target: l8, ...e2 } = p4, o8 = { ref: y(n7) };
  return import_react19.default.createElement(_2.Provider, { value: l8 }, C({ ourProps: o8, theirProps: e2, defaultTag: S4, name: "Popover.Group" }));
}
var f5 = (0, import_react19.createContext)(null);
function ee2() {
  let p4 = (0, import_react19.useContext)(f5), n7 = (0, import_react19.useRef)([]), l8 = o4((o8) => (n7.current.push(o8), p4 && p4.register(o8), () => e2(o8))), e2 = o4((o8) => {
    let t12 = n7.current.indexOf(o8);
    t12 !== -1 && n7.current.splice(t12, 1), p4 && p4.unregister(o8);
  }), a3 = (0, import_react19.useMemo)(() => ({ register: l8, unregister: e2, portals: n7 }), [l8, e2, n7]);
  return [n7, (0, import_react19.useMemo)(() => function({ children: t12 }) {
    return import_react19.default.createElement(f5.Provider, { value: a3 }, t12);
  }, [a3])];
}
var D3 = U(N3);
var I5 = U(j2);
var te = Object.assign(D3, { Group: I5 });

// node_modules/@headlessui/react/dist/hooks/use-root-containers.js
var import_react20 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/internal/hidden.js
var p3 = "div";
var s8 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(s8 || {});
function l7(d9, o8) {
  var n7;
  let { features: t12 = 1, ...e2 } = d9, r5 = { ref: o8, "aria-hidden": (t12 & 2) === 2 ? true : (n7 = e2["aria-hidden"]) != null ? n7 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(t12 & 4) === 4 && (t12 & 2) !== 2 && { display: "none" } } };
  return C({ ourProps: r5, theirProps: e2, slot: {}, defaultTag: p3, name: "Hidden" });
}
var f6 = U(l7);

// node_modules/@headlessui/react/dist/hooks/use-root-containers.js
function N4({ defaultContainers: o8 = [], portals: r5, mainTreeNodeRef: u5 } = {}) {
  var f7;
  let t12 = (0, import_react20.useRef)((f7 = u5 == null ? void 0 : u5.current) != null ? f7 : null), l8 = n4(t12), c7 = o4(() => {
    var i5, s10, a3;
    let n7 = [];
    for (let e2 of o8)
      e2 !== null && (e2 instanceof HTMLElement ? n7.push(e2) : "current" in e2 && e2.current instanceof HTMLElement && n7.push(e2.current));
    if (r5 != null && r5.current)
      for (let e2 of r5.current)
        n7.push(e2);
    for (let e2 of (i5 = l8 == null ? void 0 : l8.querySelectorAll("html > *, body > *")) != null ? i5 : [])
      e2 !== document.body && e2 !== document.head && e2 instanceof HTMLElement && e2.id !== "headlessui-portal-root" && (e2.contains(t12.current) || e2.contains((a3 = (s10 = t12.current) == null ? void 0 : s10.getRootNode()) == null ? void 0 : a3.host) || n7.some((L) => e2.contains(L)) || n7.push(e2));
    return n7;
  });
  return { resolveContainers: c7, contains: o4((n7) => c7().some((i5) => i5.contains(n7))), mainTreeNodeRef: t12, MainTreeNode: (0, import_react20.useMemo)(() => function() {
    return u5 != null ? null : import_react20.default.createElement(f6, { features: s8.Hidden, ref: t12 });
  }, [t12, u5]) };
}
function y4() {
  let o8 = (0, import_react20.useRef)(null);
  return { mainTreeNodeRef: o8, MainTreeNode: (0, import_react20.useMemo)(() => function() {
    return import_react20.default.createElement(f6, { features: s8.Hidden, ref: o8 });
  }, [o8]) };
}

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var import_react21 = __toESM(require_react(), 1);
var s9 = ((r5) => (r5[r5.Forwards = 0] = "Forwards", r5[r5.Backwards = 1] = "Backwards", r5))(s9 || {});
function n6() {
  let e2 = (0, import_react21.useRef)(0);
  return s6("keydown", (o8) => {
    o8.key === "Tab" && (e2.current = o8.shiftKey ? 1 : 0);
  }, true), e2;
}

export {
  l,
  s3 as s,
  o4 as o,
  t,
  o as o2,
  p,
  l2,
  I3 as I,
  u2 as u,
  o6 as o3,
  M3 as M,
  N2 as N,
  f3 as f,
  T2 as T,
  h2 as h,
  D2 as D,
  y2 as y,
  I4 as I2,
  _,
  O2 as O,
  t8 as t2,
  y3 as y2,
  n4 as n,
  T as T2,
  y as y3,
  O as O2,
  C,
  I as I3,
  U,
  s8 as s2,
  f6 as f2,
  d2 as d,
  u3 as u2,
  s5 as s3,
  r3 as r,
  o7 as o4,
  E2 as E,
  f as f3,
  c6 as c,
  s9 as s4,
  n6 as n2,
  l6 as l3,
  ee2 as ee,
  te,
  N4 as N2,
  y4,
  qe
};
//# sourceMappingURL=/build/_shared/chunk-EF2BYS4Z.js.map
