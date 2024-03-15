import {
  require_react_dom
} from "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var import_react24 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
var import_react14 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t(e3) {
  typeof queueMicrotask == "function" ? queueMicrotask(e3) : Promise.resolve().then(e3).catch((o8) => setTimeout(() => {
    throw o8;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o() {
  let n6 = [], r7 = { addEventListener(e3, t16, s13, a7) {
    return e3.addEventListener(t16, s13, a7), r7.add(() => e3.removeEventListener(t16, s13, a7));
  }, requestAnimationFrame(...e3) {
    let t16 = requestAnimationFrame(...e3);
    return r7.add(() => cancelAnimationFrame(t16));
  }, nextFrame(...e3) {
    return r7.requestAnimationFrame(() => r7.requestAnimationFrame(...e3));
  }, setTimeout(...e3) {
    let t16 = setTimeout(...e3);
    return r7.add(() => clearTimeout(t16));
  }, microTask(...e3) {
    let t16 = { current: true };
    return t(() => {
      t16.current && e3[0]();
    }), r7.add(() => {
      t16.current = false;
    });
  }, style(e3, t16, s13) {
    let a7 = e3.style.getPropertyValue(t16);
    return Object.assign(e3.style, { [t16]: s13 }), this.add(() => {
      Object.assign(e3.style, { [t16]: a7 });
    });
  }, group(e3) {
    let t16 = o();
    return e3(t16), this.add(() => t16.dispose());
  }, add(e3) {
    return n6.push(e3), () => {
      let t16 = n6.indexOf(e3);
      if (t16 >= 0)
        for (let s13 of n6.splice(t16, 1))
          s13();
    };
  }, dispose() {
    for (let e3 of n6.splice(0))
      e3();
  } };
  return r7;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
function p() {
  let [e3] = (0, import_react.useState)(o);
  return (0, import_react.useEffect)(() => () => e3.dispose(), [e3]), e3;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react2 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d = (t16, e3, n6) => e3 in t16 ? i(t16, e3, { enumerable: true, configurable: true, writable: true, value: n6 }) : t16[e3] = n6;
var r = (t16, e3, n6) => (d(t16, typeof e3 != "symbol" ? e3 + "" : e3, n6), n6);
var o3 = class {
  constructor() {
    r(this, "current", this.detect());
    r(this, "handoffState", "pending");
    r(this, "currentId", 0);
  }
  set(e3) {
    this.current !== e3 && (this.handoffState = "pending", this.currentId = 0, this.current = e3);
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
var l = (e3, f9) => {
  s2.isServer ? (0, import_react2.useEffect)(e3, f9) : (0, import_react2.useLayoutEffect)(e3, f9);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
function s3(e3) {
  let r7 = (0, import_react3.useRef)(e3);
  return l(() => {
    r7.current = e3;
  }, [e3]), r7;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var o4 = function(t16) {
  let e3 = s3(t16);
  return import_react4.default.useCallback((...r7) => e3.current(...r7), [e3]);
};

// node_modules/@headlessui/react/dist/hooks/use-event-listener.js
var import_react5 = __toESM(require_react(), 1);
function E(n6, e3, a7, t16) {
  let i6 = s3(a7);
  (0, import_react5.useEffect)(() => {
    n6 = n6 != null ? n6 : window;
    function r7(o8) {
      i6.current(o8);
    }
    return n6.addEventListener(e3, r7, t16), () => n6.removeEventListener(e3, r7, t16);
  }, [n6, e3, t16]);
}

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react6 = __toESM(require_react(), 1);
function f() {
  let e3 = (0, import_react6.useRef)(false);
  return l(() => (e3.current = true, () => {
    e3.current = false;
  }), []), e3;
}

// node_modules/@headlessui/react/dist/hooks/use-on-unmount.js
var import_react7 = __toESM(require_react(), 1);
function c2(t16) {
  let r7 = o4(t16), e3 = (0, import_react7.useRef)(false);
  (0, import_react7.useEffect)(() => (e3.current = false, () => {
    e3.current = true, t(() => {
      e3.current && r7();
    });
  }), [r7]);
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
var import_react8 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/owner.js
function o5(r7) {
  return s2.isServer ? null : r7 instanceof Node ? r7.ownerDocument : r7 != null && r7.hasOwnProperty("current") && r7.current instanceof Node ? r7.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
function n2(...e3) {
  return (0, import_react8.useMemo)(() => o5(...e3), [...e3]);
}

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var t5 = __toESM(require_react(), 1);
function s4() {
  let r7 = typeof document == "undefined";
  return "useSyncExternalStore" in t5 ? ((o8) => o8.useSyncExternalStore)(t5)(() => () => {
  }, () => false, () => !r7) : false;
}
function l2() {
  let r7 = s4(), [e3, n6] = t5.useState(s2.isHandoffComplete);
  return e3 && s2.isHandoffComplete === false && n6(false), t5.useEffect(() => {
    e3 !== true && n6(true);
  }, [e3]), t5.useEffect(() => s2.handoff(), []), r7 ? false : e3;
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react9 = __toESM(require_react(), 1);
var u2 = Symbol();
function T(t16, n6 = true) {
  return Object.assign(t16, { [u2]: n6 });
}
function y(...t16) {
  let n6 = (0, import_react9.useRef)(t16);
  (0, import_react9.useEffect)(() => {
    n6.current = t16;
  }, [t16]);
  let c8 = o4((e3) => {
    for (let o8 of n6.current)
      o8 != null && (typeof o8 == "function" ? o8(e3) : o8.current = e3);
  });
  return t16.every((e3) => e3 == null || (e3 == null ? void 0 : e3[u2])) ? void 0 : c8;
}

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var import_react11 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react10 = __toESM(require_react(), 1);
function s5(e3, r7, n6) {
  let o8 = s3(r7);
  (0, import_react10.useEffect)(() => {
    function t16(i6) {
      o8.current(i6);
    }
    return window.addEventListener(e3, t16, n6), () => window.removeEventListener(e3, t16, n6);
  }, [e3, n6]);
}

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var s6 = ((r7) => (r7[r7.Forwards = 0] = "Forwards", r7[r7.Backwards = 1] = "Backwards", r7))(s6 || {});
function n3() {
  let e3 = (0, import_react11.useRef)(0);
  return s5("keydown", (o8) => {
    o8.key === "Tab" && (e3.current = o8.shiftKey ? 1 : 0);
  }, true), e3;
}

// node_modules/@headlessui/react/dist/hooks/use-watch.js
var import_react12 = __toESM(require_react(), 1);
function m(u9, t16) {
  let e3 = (0, import_react12.useRef)([]), r7 = o4(u9);
  (0, import_react12.useEffect)(() => {
    let o8 = [...e3.current];
    for (let [n6, a7] of t16.entries())
      if (e3.current[n6] !== a7) {
        let l10 = r7(t16, o8);
        return e3.current = t16, l10;
      }
  }, [r7, ...t16]);
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react13 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/class-names.js
function t7(...r7) {
  return Array.from(new Set(r7.flatMap((n6) => typeof n6 == "string" ? n6.split(" ") : []))).filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/match.js
function u3(r7, n6, ...a7) {
  if (r7 in n6) {
    let e3 = n6[r7];
    return typeof e3 == "function" ? e3(...a7) : e3;
  }
  let t16 = new Error(`Tried to handle "${r7}" but there is no handler defined. Only defined handlers are: ${Object.keys(n6).map((e3) => `"${e3}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t16, u3), t16;
}

// node_modules/@headlessui/react/dist/utils/render.js
var O = ((n6) => (n6[n6.None = 0] = "None", n6[n6.RenderStrategy = 1] = "RenderStrategy", n6[n6.Static = 2] = "Static", n6))(O || {});
var v = ((e3) => (e3[e3.Unmount = 0] = "Unmount", e3[e3.Hidden = 1] = "Hidden", e3))(v || {});
function C({ ourProps: r7, theirProps: t16, slot: e3, defaultTag: n6, features: o8, visible: a7 = true, name: f9, mergeRefs: l10 }) {
  l10 = l10 != null ? l10 : k;
  let s13 = R(t16, r7);
  if (a7)
    return m2(s13, e3, n6, f9, l10);
  let y6 = o8 != null ? o8 : 0;
  if (y6 & 2) {
    let { static: u9 = false, ...d14 } = s13;
    if (u9)
      return m2(d14, e3, n6, f9, l10);
  }
  if (y6 & 1) {
    let { unmount: u9 = true, ...d14 } = s13;
    return u3(u9 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return m2({ ...d14, hidden: true, style: { display: "none" } }, e3, n6, f9, l10);
    } });
  }
  return m2(s13, e3, n6, f9, l10);
}
function m2(r7, t16 = {}, e3, n6, o8) {
  let { as: a7 = e3, children: f9, refName: l10 = "ref", ...s13 } = F(r7, ["unmount", "static"]), y6 = r7.ref !== void 0 ? { [l10]: r7.ref } : {}, u9 = typeof f9 == "function" ? f9(t16) : f9;
  "className" in s13 && s13.className && typeof s13.className == "function" && (s13.className = s13.className(t16));
  let d14 = {};
  if (t16) {
    let i6 = false, c8 = [];
    for (let [T5, p6] of Object.entries(t16))
      typeof p6 == "boolean" && (i6 = true), p6 === true && c8.push(T5);
    i6 && (d14["data-headlessui-state"] = c8.join(" "));
  }
  if (a7 === import_react13.Fragment && Object.keys(x(s13)).length > 0) {
    if (!(0, import_react13.isValidElement)(u9) || Array.isArray(u9) && u9.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${n6} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(s13).map((p6) => `  - ${p6}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((p6) => `  - ${p6}`).join(`
`)].join(`
`));
    let i6 = u9.props, c8 = typeof (i6 == null ? void 0 : i6.className) == "function" ? (...p6) => t7(i6 == null ? void 0 : i6.className(...p6), s13.className) : t7(i6 == null ? void 0 : i6.className, s13.className), T5 = c8 ? { className: c8 } : {};
    return (0, import_react13.cloneElement)(u9, Object.assign({}, R(u9.props, x(F(s13, ["ref"]))), d14, y6, { ref: o8(u9.ref, y6.ref) }, T5));
  }
  return (0, import_react13.createElement)(a7, Object.assign({}, F(s13, ["ref"]), a7 !== import_react13.Fragment && y6, a7 !== import_react13.Fragment && d14), u9);
}
function k(...r7) {
  return r7.every((t16) => t16 == null) ? void 0 : (t16) => {
    for (let e3 of r7)
      e3 != null && (typeof e3 == "function" ? e3(t16) : e3.current = t16);
  };
}
function R(...r7) {
  var n6;
  if (r7.length === 0)
    return {};
  if (r7.length === 1)
    return r7[0];
  let t16 = {}, e3 = {};
  for (let o8 of r7)
    for (let a7 in o8)
      a7.startsWith("on") && typeof o8[a7] == "function" ? ((n6 = e3[a7]) != null || (e3[a7] = []), e3[a7].push(o8[a7])) : t16[a7] = o8[a7];
  if (t16.disabled || t16["aria-disabled"])
    return Object.assign(t16, Object.fromEntries(Object.keys(e3).map((o8) => [o8, void 0])));
  for (let o8 in e3)
    Object.assign(t16, { [o8](a7, ...f9) {
      let l10 = e3[o8];
      for (let s13 of l10) {
        if ((a7 instanceof Event || (a7 == null ? void 0 : a7.nativeEvent) instanceof Event) && a7.defaultPrevented)
          return;
        s13(a7, ...f9);
      }
    } });
  return t16;
}
function U(r7) {
  var t16;
  return Object.assign((0, import_react13.forwardRef)(r7), { displayName: (t16 = r7.displayName) != null ? t16 : r7.name });
}
function x(r7) {
  let t16 = Object.assign({}, r7);
  for (let e3 in t16)
    t16[e3] === void 0 && delete t16[e3];
  return t16;
}
function F(r7, t16 = []) {
  let e3 = Object.assign({}, r7);
  for (let n6 of t16)
    n6 in e3 && delete e3[n6];
  return e3;
}

// node_modules/@headlessui/react/dist/internal/hidden.js
var p2 = "div";
var s8 = ((e3) => (e3[e3.None = 1] = "None", e3[e3.Focusable = 2] = "Focusable", e3[e3.Hidden = 4] = "Hidden", e3))(s8 || {});
function l4(d14, o8) {
  var n6;
  let { features: t16 = 1, ...e3 } = d14, r7 = { ref: o8, "aria-hidden": (t16 & 2) === 2 ? true : (n6 = e3["aria-hidden"]) != null ? n6 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(t16 & 4) === 4 && (t16 & 2) !== 2 && { display: "none" } } };
  return C({ ourProps: r7, theirProps: e3, slot: {}, defaultTag: p2, name: "Hidden" });
}
var f3 = U(l4);

// node_modules/@headlessui/react/dist/utils/document-ready.js
function t8(n6) {
  function e3() {
    document.readyState !== "loading" && (n6(), document.removeEventListener("DOMContentLoaded", e3));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e3), e3());
}

// node_modules/@headlessui/react/dist/utils/active-element-history.js
var t9 = [];
t8(() => {
  function e3(n6) {
    n6.target instanceof HTMLElement && n6.target !== document.body && t9[0] !== n6.target && (t9.unshift(n6.target), t9 = t9.filter((r7) => r7 != null && r7.isConnected), t9.splice(10));
  }
  window.addEventListener("click", e3, { capture: true }), window.addEventListener("mousedown", e3, { capture: true }), window.addEventListener("focus", e3, { capture: true }), document.body.addEventListener("click", e3, { capture: true }), document.body.addEventListener("mousedown", e3, { capture: true }), document.body.addEventListener("focus", e3, { capture: true });
});

// node_modules/@headlessui/react/dist/utils/focus-management.js
var c3 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e3) => `${e3}:not([tabindex='-1'])`).join(",");
var M = ((n6) => (n6[n6.First = 1] = "First", n6[n6.Previous = 2] = "Previous", n6[n6.Next = 4] = "Next", n6[n6.Last = 8] = "Last", n6[n6.WrapAround = 16] = "WrapAround", n6[n6.NoScroll = 32] = "NoScroll", n6))(M || {});
var N2 = ((o8) => (o8[o8.Error = 0] = "Error", o8[o8.Overflow = 1] = "Overflow", o8[o8.Success = 2] = "Success", o8[o8.Underflow = 3] = "Underflow", o8))(N2 || {});
var F2 = ((t16) => (t16[t16.Previous = -1] = "Previous", t16[t16.Next = 1] = "Next", t16))(F2 || {});
function f4(e3 = document.body) {
  return e3 == null ? [] : Array.from(e3.querySelectorAll(c3)).sort((r7, t16) => Math.sign((r7.tabIndex || Number.MAX_SAFE_INTEGER) - (t16.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var T2 = ((t16) => (t16[t16.Strict = 0] = "Strict", t16[t16.Loose = 1] = "Loose", t16))(T2 || {});
function h2(e3, r7 = 0) {
  var t16;
  return e3 === ((t16 = o5(e3)) == null ? void 0 : t16.body) ? false : u3(r7, { [0]() {
    return e3.matches(c3);
  }, [1]() {
    let l10 = e3;
    for (; l10 !== null; ) {
      if (l10.matches(c3))
        return true;
      l10 = l10.parentElement;
    }
    return false;
  } });
}
function D(e3) {
  let r7 = o5(e3);
  o().nextFrame(() => {
    r7 && !h2(r7.activeElement, 0) && y2(e3);
  });
}
var w = ((t16) => (t16[t16.Keyboard = 0] = "Keyboard", t16[t16.Mouse = 1] = "Mouse", t16))(w || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e3) => {
  e3.metaKey || e3.altKey || e3.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e3) => {
  e3.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e3.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function y2(e3) {
  e3 == null || e3.focus({ preventScroll: true });
}
var S2 = ["textarea", "input"].join(",");
function H(e3) {
  var r7, t16;
  return (t16 = (r7 = e3 == null ? void 0 : e3.matches) == null ? void 0 : r7.call(e3, S2)) != null ? t16 : false;
}
function I(e3, r7 = (t16) => t16) {
  return e3.slice().sort((t16, l10) => {
    let o8 = r7(t16), i6 = r7(l10);
    if (o8 === null || i6 === null)
      return 0;
    let n6 = o8.compareDocumentPosition(i6);
    return n6 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n6 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function _(e3, r7) {
  return O2(f4(), r7, { relativeTo: e3 });
}
function O2(e3, r7, { sorted: t16 = true, relativeTo: l10 = null, skipElements: o8 = [] } = {}) {
  let i6 = Array.isArray(e3) ? e3.length > 0 ? e3[0].ownerDocument : document : e3.ownerDocument, n6 = Array.isArray(e3) ? t16 ? I(e3) : e3 : f4(e3);
  o8.length > 0 && n6.length > 1 && (n6 = n6.filter((s13) => !o8.includes(s13))), l10 = l10 != null ? l10 : i6.activeElement;
  let E5 = (() => {
    if (r7 & 5)
      return 1;
    if (r7 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x3 = (() => {
    if (r7 & 1)
      return 0;
    if (r7 & 2)
      return Math.max(0, n6.indexOf(l10)) - 1;
    if (r7 & 4)
      return Math.max(0, n6.indexOf(l10)) + 1;
    if (r7 & 8)
      return n6.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p6 = r7 & 32 ? { preventScroll: true } : {}, d14 = 0, a7 = n6.length, u9;
  do {
    if (d14 >= a7 || d14 + a7 <= 0)
      return 0;
    let s13 = x3 + d14;
    if (r7 & 16)
      s13 = (s13 + a7) % a7;
    else {
      if (s13 < 0)
        return 3;
      if (s13 >= a7)
        return 1;
    }
    u9 = n6[s13], u9 == null || u9.focus(p6), d14 += E5;
  } while (u9 !== i6.activeElement);
  return r7 & 6 && H(u9) && u9.select(), 2;
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
function P2(t16) {
  if (!t16)
    return /* @__PURE__ */ new Set();
  if (typeof t16 == "function")
    return new Set(t16());
  let n6 = /* @__PURE__ */ new Set();
  for (let e3 of t16.current)
    e3.current instanceof HTMLElement && n6.add(e3.current);
  return n6;
}
var X = "div";
var _2 = ((r7) => (r7[r7.None = 1] = "None", r7[r7.InitialFocus = 2] = "InitialFocus", r7[r7.TabLock = 4] = "TabLock", r7[r7.FocusLock = 8] = "FocusLock", r7[r7.RestoreFocus = 16] = "RestoreFocus", r7[r7.All = 30] = "All", r7))(_2 || {});
function z(t16, n6) {
  let e3 = (0, import_react14.useRef)(null), o8 = y(e3, n6), { initialFocus: l10, containers: c8, features: r7 = 30, ...s13 } = t16;
  l2() || (r7 = 1);
  let i6 = n2(e3);
  Y({ ownerDocument: i6 }, Boolean(r7 & 16));
  let u9 = Z({ ownerDocument: i6, container: e3, initialFocus: l10 }, Boolean(r7 & 2));
  $({ ownerDocument: i6, container: e3, containers: c8, previousActiveElement: u9 }, Boolean(r7 & 8));
  let y6 = n3(), R3 = o4((a7) => {
    let m9 = e3.current;
    if (!m9)
      return;
    ((B) => B())(() => {
      u3(y6.current, { [s6.Forwards]: () => {
        O2(m9, M.First, { skipElements: [a7.relatedTarget] });
      }, [s6.Backwards]: () => {
        O2(m9, M.Last, { skipElements: [a7.relatedTarget] });
      } });
    });
  }), h5 = p(), H3 = (0, import_react14.useRef)(false), j3 = { ref: o8, onKeyDown(a7) {
    a7.key == "Tab" && (H3.current = true, h5.requestAnimationFrame(() => {
      H3.current = false;
    }));
  }, onBlur(a7) {
    let m9 = P2(c8);
    e3.current instanceof HTMLElement && m9.add(e3.current);
    let T5 = a7.relatedTarget;
    T5 instanceof HTMLElement && T5.dataset.headlessuiFocusGuard !== "true" && (S3(m9, T5) || (H3.current ? O2(e3.current, u3(y6.current, { [s6.Forwards]: () => M.Next, [s6.Backwards]: () => M.Previous }) | M.WrapAround, { relativeTo: a7.target }) : a7.target instanceof HTMLElement && y2(a7.target)));
  } };
  return import_react14.default.createElement(import_react14.default.Fragment, null, Boolean(r7 & 4) && import_react14.default.createElement(f3, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: R3, features: s8.Focusable }), C({ ourProps: j3, theirProps: s13, defaultTag: X, name: "FocusTrap" }), Boolean(r7 & 4) && import_react14.default.createElement(f3, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: R3, features: s8.Focusable }));
}
var D2 = U(z);
var de = Object.assign(D2, { features: _2 });
function Q(t16 = true) {
  let n6 = (0, import_react14.useRef)(t9.slice());
  return m(([e3], [o8]) => {
    o8 === true && e3 === false && t(() => {
      n6.current.splice(0);
    }), o8 === false && e3 === true && (n6.current = t9.slice());
  }, [t16, t9, n6]), o4(() => {
    var e3;
    return (e3 = n6.current.find((o8) => o8 != null && o8.isConnected)) != null ? e3 : null;
  });
}
function Y({ ownerDocument: t16 }, n6) {
  let e3 = Q(n6);
  m(() => {
    n6 || (t16 == null ? void 0 : t16.activeElement) === (t16 == null ? void 0 : t16.body) && y2(e3());
  }, [n6]), c2(() => {
    n6 && y2(e3());
  });
}
function Z({ ownerDocument: t16, container: n6, initialFocus: e3 }, o8) {
  let l10 = (0, import_react14.useRef)(null), c8 = f();
  return m(() => {
    if (!o8)
      return;
    let r7 = n6.current;
    r7 && t(() => {
      if (!c8.current)
        return;
      let s13 = t16 == null ? void 0 : t16.activeElement;
      if (e3 != null && e3.current) {
        if ((e3 == null ? void 0 : e3.current) === s13) {
          l10.current = s13;
          return;
        }
      } else if (r7.contains(s13)) {
        l10.current = s13;
        return;
      }
      e3 != null && e3.current ? y2(e3.current) : O2(r7, M.First) === N2.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), l10.current = t16 == null ? void 0 : t16.activeElement;
    });
  }, [o8]), l10;
}
function $({ ownerDocument: t16, container: n6, containers: e3, previousActiveElement: o8 }, l10) {
  let c8 = f();
  E(t16 == null ? void 0 : t16.defaultView, "focus", (r7) => {
    if (!l10 || !c8.current)
      return;
    let s13 = P2(e3);
    n6.current instanceof HTMLElement && s13.add(n6.current);
    let i6 = o8.current;
    if (!i6)
      return;
    let u9 = r7.target;
    u9 && u9 instanceof HTMLElement ? S3(s13, u9) ? (o8.current = u9, y2(u9)) : (r7.preventDefault(), r7.stopPropagation(), y2(i6)) : y2(o8.current);
  }, true);
}
function S3(t16, n6) {
  for (let e3 of t16)
    if (e3.contains(n6))
      return true;
  return false;
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
var import_react16 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/internal/portal-force-root.js
var import_react15 = __toESM(require_react(), 1);
var e = (0, import_react15.createContext)(false);
function a2() {
  return (0, import_react15.useContext)(e);
}
function l5(o8) {
  return import_react15.default.createElement(e.Provider, { value: o8.force }, o8.children);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
function F3(p6) {
  let n6 = a2(), l10 = (0, import_react16.useContext)(_3), e3 = n2(p6), [a7, o8] = (0, import_react16.useState)(() => {
    if (!n6 && l10 !== null || s2.isServer)
      return null;
    let t16 = e3 == null ? void 0 : e3.getElementById("headlessui-portal-root");
    if (t16)
      return t16;
    if (e3 === null)
      return null;
    let r7 = e3.createElement("div");
    return r7.setAttribute("id", "headlessui-portal-root"), e3.body.appendChild(r7);
  });
  return (0, import_react16.useEffect)(() => {
    a7 !== null && (e3 != null && e3.body.contains(a7) || e3 == null || e3.body.appendChild(a7));
  }, [a7, e3]), (0, import_react16.useEffect)(() => {
    n6 || l10 !== null && o8(l10.current);
  }, [l10, o8, n6]), a7;
}
var U2 = import_react16.Fragment;
function N3(p6, n6) {
  let l10 = p6, e3 = (0, import_react16.useRef)(null), a7 = y(T((u9) => {
    e3.current = u9;
  }), n6), o8 = n2(e3), t16 = F3(e3), [r7] = (0, import_react16.useState)(() => {
    var u9;
    return s2.isServer ? null : (u9 = o8 == null ? void 0 : o8.createElement("div")) != null ? u9 : null;
  }), i6 = (0, import_react16.useContext)(f5), v2 = l2();
  return l(() => {
    !t16 || !r7 || t16.contains(r7) || (r7.setAttribute("data-headlessui-portal", ""), t16.appendChild(r7));
  }, [t16, r7]), l(() => {
    if (r7 && i6)
      return i6.register(r7);
  }, [i6, r7]), c2(() => {
    var u9;
    !t16 || !r7 || (r7 instanceof Node && t16.contains(r7) && t16.removeChild(r7), t16.childNodes.length <= 0 && ((u9 = t16.parentElement) == null || u9.removeChild(t16)));
  }), v2 ? !t16 || !r7 ? null : (0, import_react_dom.createPortal)(C({ ourProps: { ref: a7 }, theirProps: l10, defaultTag: U2, name: "Portal" }), r7) : null;
}
var S4 = import_react16.Fragment;
var _3 = (0, import_react16.createContext)(null);
function j2(p6, n6) {
  let { target: l10, ...e3 } = p6, o8 = { ref: y(n6) };
  return import_react16.default.createElement(_3.Provider, { value: l10 }, C({ ourProps: o8, theirProps: e3, defaultTag: S4, name: "Popover.Group" }));
}
var f5 = (0, import_react16.createContext)(null);
function ee() {
  let p6 = (0, import_react16.useContext)(f5), n6 = (0, import_react16.useRef)([]), l10 = o4((o8) => (n6.current.push(o8), p6 && p6.register(o8), () => e3(o8))), e3 = o4((o8) => {
    let t16 = n6.current.indexOf(o8);
    t16 !== -1 && n6.current.splice(t16, 1), p6 && p6.unregister(o8);
  }), a7 = (0, import_react16.useMemo)(() => ({ register: l10, unregister: e3, portals: n6 }), [l10, e3, n6]);
  return [n6, (0, import_react16.useMemo)(() => function({ children: t16 }) {
    return import_react16.default.createElement(f5.Provider, { value: a7 }, t16);
  }, [a7])];
}
var D3 = U(N3);
var I2 = U(j2);
var te = Object.assign(D3, { Group: I2 });

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var e2 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimClient.js
var l6 = __toESM(require_react(), 1);
function i3(e3, t16) {
  return e3 === t16 && (e3 !== 0 || 1 / e3 === 1 / t16) || e3 !== e3 && t16 !== t16;
}
var d6 = typeof Object.is == "function" ? Object.is : i3;
var { useState: u4, useEffect: h3, useLayoutEffect: f6, useDebugValue: p3 } = l6;
function y3(e3, t16, c8) {
  const a7 = t16(), [{ inst: n6 }, o8] = u4({ inst: { value: a7, getSnapshot: t16 } });
  return f6(() => {
    n6.value = a7, n6.getSnapshot = t16, r4(n6) && o8({ inst: n6 });
  }, [e3, a7, t16]), h3(() => (r4(n6) && o8({ inst: n6 }), e3(() => {
    r4(n6) && o8({ inst: n6 });
  })), [e3]), p3(a7), a7;
}
function r4(e3) {
  const t16 = e3.getSnapshot, c8 = e3.value;
  try {
    const a7 = t16();
    return !d6(c8, a7);
  } catch {
    return true;
  }
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimServer.js
function t11(r7, e3, n6) {
  return e3();
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var r5 = typeof window != "undefined" && typeof window.document != "undefined" && typeof window.document.createElement != "undefined";
var s10 = !r5;
var c5 = s10 ? t11 : y3;
var a3 = "useSyncExternalStore" in e2 ? ((n6) => n6.useSyncExternalStore)(e2) : c5;

// node_modules/@headlessui/react/dist/hooks/use-store.js
function S5(t16) {
  return a3(t16.subscribe, t16.getSnapshot, t16.getSnapshot);
}

// node_modules/@headlessui/react/dist/utils/store.js
function a4(o8, r7) {
  let t16 = o8(), n6 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t16;
  }, subscribe(e3) {
    return n6.add(e3), () => n6.delete(e3);
  }, dispatch(e3, ...s13) {
    let i6 = r7[e3].call(t16, ...s13);
    i6 && (t16 = i6, n6.forEach((c8) => c8()));
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function c6() {
  let o8;
  return { before({ doc: e3 }) {
    var l10;
    let n6 = e3.documentElement;
    o8 = ((l10 = e3.defaultView) != null ? l10 : window).innerWidth - n6.clientWidth;
  }, after({ doc: e3, d: n6 }) {
    let t16 = e3.documentElement, l10 = t16.clientWidth - t16.offsetWidth, r7 = o8 - l10;
    n6.style(t16, "paddingRight", `${r7}px`);
  } };
}

// node_modules/@headlessui/react/dist/utils/platform.js
function t12() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i4() {
  return /Android/gi.test(window.navigator.userAgent);
}
function n4() {
  return t12() || i4();
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function d7() {
  return t12() ? { before({ doc: r7, d: l10, meta: c8 }) {
    function o8(a7) {
      return c8.containers.flatMap((n6) => n6()).some((n6) => n6.contains(a7));
    }
    l10.microTask(() => {
      var s13;
      if (window.getComputedStyle(r7.documentElement).scrollBehavior !== "auto") {
        let t16 = o();
        t16.style(r7.documentElement, "scrollBehavior", "auto"), l10.add(() => l10.microTask(() => t16.dispose()));
      }
      let a7 = (s13 = window.scrollY) != null ? s13 : window.pageYOffset, n6 = null;
      l10.addEventListener(r7, "click", (t16) => {
        if (t16.target instanceof HTMLElement)
          try {
            let e3 = t16.target.closest("a");
            if (!e3)
              return;
            let { hash: f9 } = new URL(e3.href), i6 = r7.querySelector(f9);
            i6 && !o8(i6) && (n6 = i6);
          } catch {
          }
      }, true), l10.addEventListener(r7, "touchstart", (t16) => {
        if (t16.target instanceof HTMLElement)
          if (o8(t16.target)) {
            let e3 = t16.target;
            for (; e3.parentElement && o8(e3.parentElement); )
              e3 = e3.parentElement;
            l10.style(e3, "overscrollBehavior", "contain");
          } else
            l10.style(t16.target, "touchAction", "none");
      }), l10.addEventListener(r7, "touchmove", (t16) => {
        if (t16.target instanceof HTMLElement)
          if (o8(t16.target)) {
            let e3 = t16.target;
            for (; e3.parentElement && e3.dataset.headlessuiPortal !== "" && !(e3.scrollHeight > e3.clientHeight || e3.scrollWidth > e3.clientWidth); )
              e3 = e3.parentElement;
            e3.dataset.headlessuiPortal === "" && t16.preventDefault();
          } else
            t16.preventDefault();
      }, { passive: false }), l10.add(() => {
        var e3;
        let t16 = (e3 = window.scrollY) != null ? e3 : window.pageYOffset;
        a7 !== t16 && window.scrollTo(0, a7), n6 && n6.isConnected && (n6.scrollIntoView({ block: "nearest" }), n6 = null);
      });
    });
  } } : {};
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
function l7() {
  return { before({ doc: e3, d: o8 }) {
    o8.style(e3.documentElement, "overflow", "hidden");
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
function m4(e3) {
  let n6 = {};
  for (let t16 of e3)
    Object.assign(n6, t16(n6));
  return n6;
}
var a5 = a4(() => /* @__PURE__ */ new Map(), { PUSH(e3, n6) {
  var o8;
  let t16 = (o8 = this.get(e3)) != null ? o8 : { doc: e3, count: 0, d: o(), meta: /* @__PURE__ */ new Set() };
  return t16.count++, t16.meta.add(n6), this.set(e3, t16), this;
}, POP(e3, n6) {
  let t16 = this.get(e3);
  return t16 && (t16.count--, t16.meta.delete(n6)), this;
}, SCROLL_PREVENT({ doc: e3, d: n6, meta: t16 }) {
  let o8 = { doc: e3, d: n6, meta: m4(t16) }, c8 = [d7(), c6(), l7()];
  c8.forEach(({ before: r7 }) => r7 == null ? void 0 : r7(o8)), c8.forEach(({ after: r7 }) => r7 == null ? void 0 : r7(o8));
}, SCROLL_ALLOW({ d: e3 }) {
  e3.dispose();
}, TEARDOWN({ doc: e3 }) {
  this.delete(e3);
} });
a5.subscribe(() => {
  let e3 = a5.getSnapshot(), n6 = /* @__PURE__ */ new Map();
  for (let [t16] of e3)
    n6.set(t16, t16.documentElement.style.overflow);
  for (let t16 of e3.values()) {
    let o8 = n6.get(t16.doc) === "hidden", c8 = t16.count !== 0;
    (c8 && !o8 || !c8 && o8) && a5.dispatch(t16.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t16), t16.count === 0 && a5.dispatch("TEARDOWN", t16);
  }
});

// node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function p4(e3, r7, n6) {
  let f9 = S5(a5), o8 = e3 ? f9.get(e3) : void 0, i6 = o8 ? o8.count > 0 : false;
  return l(() => {
    if (!(!e3 || !r7))
      return a5.dispatch("PUSH", e3, n6), () => a5.dispatch("POP", e3, n6);
  }, [r7, e3]), i6;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react17 = __toESM(require_react(), 1);
var o6;
var I3 = (o6 = import_react17.default.useId) != null ? o6 : function() {
  let n6 = l2(), [e3, u9] = import_react17.default.useState(n6 ? () => s2.nextId() : null);
  return l(() => {
    e3 === null && u9(s2.nextId());
  }, [e3]), e3 != null ? "" + e3 : void 0;
};

// node_modules/@headlessui/react/dist/hooks/use-inert.js
var u5 = /* @__PURE__ */ new Map();
var t14 = /* @__PURE__ */ new Map();
function b(r7, l10 = true) {
  l(() => {
    var o8;
    if (!l10)
      return;
    let e3 = typeof r7 == "function" ? r7() : r7.current;
    if (!e3)
      return;
    function a7() {
      var d14;
      if (!e3)
        return;
      let i6 = (d14 = t14.get(e3)) != null ? d14 : 1;
      if (i6 === 1 ? t14.delete(e3) : t14.set(e3, i6 - 1), i6 !== 1)
        return;
      let n6 = u5.get(e3);
      n6 && (n6["aria-hidden"] === null ? e3.removeAttribute("aria-hidden") : e3.setAttribute("aria-hidden", n6["aria-hidden"]), e3.inert = n6.inert, u5.delete(e3));
    }
    let f9 = (o8 = t14.get(e3)) != null ? o8 : 0;
    return t14.set(e3, f9 + 1), f9 !== 0 || (u5.set(e3, { "aria-hidden": e3.getAttribute("aria-hidden"), inert: e3.inert }), e3.setAttribute("aria-hidden", "true"), e3.inert = true), a7;
  }, [r7, l10]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react19 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react18 = __toESM(require_react(), 1);
function d8(e3, r7, n6) {
  let o8 = s3(r7);
  (0, import_react18.useEffect)(() => {
    function t16(u9) {
      o8.current(u9);
    }
    return document.addEventListener(e3, t16, n6), () => document.removeEventListener(e3, t16, n6);
  }, [e3, n6]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function y4(s13, m9, a7 = true) {
  let i6 = (0, import_react19.useRef)(false);
  (0, import_react19.useEffect)(() => {
    requestAnimationFrame(() => {
      i6.current = a7;
    });
  }, [a7]);
  function c8(e3, r7) {
    if (!i6.current || e3.defaultPrevented)
      return;
    let t16 = r7(e3);
    if (t16 === null || !t16.getRootNode().contains(t16) || !t16.isConnected)
      return;
    let E5 = function u9(n6) {
      return typeof n6 == "function" ? u9(n6()) : Array.isArray(n6) || n6 instanceof Set ? n6 : [n6];
    }(s13);
    for (let u9 of E5) {
      if (u9 === null)
        continue;
      let n6 = u9 instanceof HTMLElement ? u9 : u9.current;
      if (n6 != null && n6.contains(t16) || e3.composed && e3.composedPath().includes(n6))
        return;
    }
    return !h2(t16, T2.Loose) && t16.tabIndex !== -1 && e3.preventDefault(), m9(e3, t16);
  }
  let o8 = (0, import_react19.useRef)(null);
  d8("pointerdown", (e3) => {
    var r7, t16;
    i6.current && (o8.current = ((t16 = (r7 = e3.composedPath) == null ? void 0 : r7.call(e3)) == null ? void 0 : t16[0]) || e3.target);
  }, true), d8("mousedown", (e3) => {
    var r7, t16;
    i6.current && (o8.current = ((t16 = (r7 = e3.composedPath) == null ? void 0 : r7.call(e3)) == null ? void 0 : t16[0]) || e3.target);
  }, true), d8("click", (e3) => {
    n4() || o8.current && (c8(e3, () => o8.current), o8.current = null);
  }, true), d8("touchend", (e3) => c8(e3, () => e3.target instanceof HTMLElement ? e3.target : null), true), s5("blur", (e3) => c8(e3, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-root-containers.js
var import_react20 = __toESM(require_react(), 1);
function N4({ defaultContainers: o8 = [], portals: r7, mainTreeNodeRef: u9 } = {}) {
  var f9;
  let t16 = (0, import_react20.useRef)((f9 = u9 == null ? void 0 : u9.current) != null ? f9 : null), l10 = n2(t16), c8 = o4(() => {
    var i6, s13, a7;
    let n6 = [];
    for (let e3 of o8)
      e3 !== null && (e3 instanceof HTMLElement ? n6.push(e3) : "current" in e3 && e3.current instanceof HTMLElement && n6.push(e3.current));
    if (r7 != null && r7.current)
      for (let e3 of r7.current)
        n6.push(e3);
    for (let e3 of (i6 = l10 == null ? void 0 : l10.querySelectorAll("html > *, body > *")) != null ? i6 : [])
      e3 !== document.body && e3 !== document.head && e3 instanceof HTMLElement && e3.id !== "headlessui-portal-root" && (e3.contains(t16.current) || e3.contains((a7 = (s13 = t16.current) == null ? void 0 : s13.getRootNode()) == null ? void 0 : a7.host) || n6.some((L) => e3.contains(L)) || n6.push(e3));
    return n6;
  });
  return { resolveContainers: c8, contains: o4((n6) => c8().some((i6) => i6.contains(n6))), mainTreeNodeRef: t16, MainTreeNode: (0, import_react20.useMemo)(() => function() {
    return u9 != null ? null : import_react20.default.createElement(f3, { features: s8.Hidden, ref: t16 });
  }, [t16, u9]) };
}

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react21 = __toESM(require_react(), 1);
var n5 = (0, import_react21.createContext)(null);
n5.displayName = "OpenClosedContext";
var d11 = ((e3) => (e3[e3.Open = 1] = "Open", e3[e3.Closed = 2] = "Closed", e3[e3.Closing = 4] = "Closing", e3[e3.Opening = 8] = "Opening", e3))(d11 || {});
function u6() {
  return (0, import_react21.useContext)(n5);
}
function s11({ value: o8, children: r7 }) {
  return import_react21.default.createElement(n5.Provider, { value: o8 }, r7);
}

// node_modules/@headlessui/react/dist/internal/stack-context.js
var import_react22 = __toESM(require_react(), 1);
var a6 = (0, import_react22.createContext)(() => {
});
a6.displayName = "StackContext";
var s12 = ((e3) => (e3[e3.Add = 0] = "Add", e3[e3.Remove = 1] = "Remove", e3))(s12 || {});
function x2() {
  return (0, import_react22.useContext)(a6);
}
function b2({ children: i6, onUpdate: r7, type: e3, element: n6, enabled: u9 }) {
  let l10 = x2(), o8 = o4((...t16) => {
    r7 == null || r7(...t16), l10(...t16);
  });
  return l(() => {
    let t16 = u9 === void 0 || u9 === true;
    return t16 && o8(0, e3, n6), () => {
      t16 && o8(1, e3, n6);
    };
  }, [o8, e3, n6, u9]), import_react22.default.createElement(a6.Provider, { value: o8 }, i6);
}

// node_modules/@headlessui/react/dist/utils/bugs.js
function r6(n6) {
  let e3 = n6.parentElement, l10 = null;
  for (; e3 && !(e3 instanceof HTMLFieldSetElement); )
    e3 instanceof HTMLLegendElement && (l10 = e3), e3 = e3.parentElement;
  let t16 = (e3 == null ? void 0 : e3.getAttribute("disabled")) === "";
  return t16 && i5(l10) ? false : t16;
}
function i5(n6) {
  if (!n6)
    return false;
  let e3 = n6.previousElementSibling;
  for (; e3 !== null; ) {
    if (e3 instanceof HTMLLegendElement)
      return false;
    e3 = e3.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/components/description/description.js
var import_react23 = __toESM(require_react(), 1);
var d13 = (0, import_react23.createContext)(null);
function f8() {
  let r7 = (0, import_react23.useContext)(d13);
  if (r7 === null) {
    let t16 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t16, f8), t16;
  }
  return r7;
}
function w2() {
  let [r7, t16] = (0, import_react23.useState)([]);
  return [r7.length > 0 ? r7.join(" ") : void 0, (0, import_react23.useMemo)(() => function(e3) {
    let i6 = o4((s13) => (t16((o8) => [...o8, s13]), () => t16((o8) => {
      let p6 = o8.slice(), c8 = p6.indexOf(s13);
      return c8 !== -1 && p6.splice(c8, 1), p6;
    }))), n6 = (0, import_react23.useMemo)(() => ({ register: i6, slot: e3.slot, name: e3.name, props: e3.props }), [i6, e3.slot, e3.name, e3.props]);
    return import_react23.default.createElement(d13.Provider, { value: n6 }, e3.children);
  }, [t16])];
}
var I4 = "p";
function S6(r7, t16) {
  let a7 = I3(), { id: e3 = `headlessui-description-${a7}`, ...i6 } = r7, n6 = f8(), s13 = y(t16);
  l(() => n6.register(e3), [e3, n6.register]);
  let o8 = { ref: s13, ...n6.props, id: e3 };
  return C({ ourProps: o8, theirProps: i6, slot: n6.slot || {}, defaultTag: I4, name: n6.name || "Description" });
}
var h4 = U(S6);
var G = Object.assign(h4, {});

// node_modules/@headlessui/react/dist/components/keyboard.js
var o7 = ((r7) => (r7.Space = " ", r7.Enter = "Enter", r7.Escape = "Escape", r7.Backspace = "Backspace", r7.Delete = "Delete", r7.ArrowLeft = "ArrowLeft", r7.ArrowUp = "ArrowUp", r7.ArrowRight = "ArrowRight", r7.ArrowDown = "ArrowDown", r7.Home = "Home", r7.End = "End", r7.PageUp = "PageUp", r7.PageDown = "PageDown", r7.Tab = "Tab", r7))(o7 || {});

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var Me = ((r7) => (r7[r7.Open = 0] = "Open", r7[r7.Closed = 1] = "Closed", r7))(Me || {});
var we = ((e3) => (e3[e3.SetTitleId = 0] = "SetTitleId", e3))(we || {});
var He = { [0](t16, e3) {
  return t16.titleId === e3.id ? t16 : { ...t16, titleId: e3.id };
} };
var I5 = (0, import_react24.createContext)(null);
I5.displayName = "DialogContext";
function b3(t16) {
  let e3 = (0, import_react24.useContext)(I5);
  if (e3 === null) {
    let r7 = new Error(`<${t16} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r7, b3), r7;
  }
  return e3;
}
function Be(t16, e3, r7 = () => [document.body]) {
  p4(t16, e3, (i6) => {
    var n6;
    return { containers: [...(n6 = i6.containers) != null ? n6 : [], r7] };
  });
}
function Ge(t16, e3) {
  return u3(e3.type, He, t16, e3);
}
var Ne = "div";
var Ue = O.RenderStrategy | O.Static;
function We(t16, e3) {
  let r7 = I3(), { id: i6 = `headlessui-dialog-${r7}`, open: n6, onClose: l10, initialFocus: s13, role: a7 = "dialog", __demoMode: T5 = false, ...m9 } = t16, [M3, f9] = (0, import_react24.useState)(0), U3 = (0, import_react24.useRef)(false);
  a7 = function() {
    return a7 === "dialog" || a7 === "alertdialog" ? a7 : (U3.current || (U3.current = true, console.warn(`Invalid role [${a7}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let E5 = u6();
  n6 === void 0 && E5 !== null && (n6 = (E5 & d11.Open) === d11.Open);
  let D5 = (0, import_react24.useRef)(null), ee2 = y(D5, e3), g3 = n2(D5), W = t16.hasOwnProperty("open") || E5 !== null, $2 = t16.hasOwnProperty("onClose");
  if (!W && !$2)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!W)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!$2)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof n6 != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n6}`);
  if (typeof l10 != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l10}`);
  let p6 = n6 ? 0 : 1, [h5, te2] = (0, import_react24.useReducer)(Ge, { titleId: null, descriptionId: null, panelRef: (0, import_react24.createRef)() }), P4 = o4(() => l10(false)), Y2 = o4((o8) => te2({ type: 0, id: o8 })), S7 = l2() ? T5 ? false : p6 === 0 : false, x3 = M3 > 1, j3 = (0, import_react24.useContext)(I5) !== null, [oe, re] = ee(), ne = { get current() {
    var o8;
    return (o8 = h5.panelRef.current) != null ? o8 : D5.current;
  } }, { resolveContainers: w3, mainTreeNodeRef: L, MainTreeNode: le } = N4({ portals: oe, defaultContainers: [ne] }), ae = x3 ? "parent" : "leaf", J = E5 !== null ? (E5 & d11.Closing) === d11.Closing : false, ie = (() => j3 || J ? false : S7)(), se = (0, import_react24.useCallback)(() => {
    var o8, c8;
    return (c8 = Array.from((o8 = g3 == null ? void 0 : g3.querySelectorAll("body > *")) != null ? o8 : []).find((d14) => d14.id === "headlessui-portal-root" ? false : d14.contains(L.current) && d14 instanceof HTMLElement)) != null ? c8 : null;
  }, [L]);
  b(se, ie);
  let pe = (() => x3 ? true : S7)(), de2 = (0, import_react24.useCallback)(() => {
    var o8, c8;
    return (c8 = Array.from((o8 = g3 == null ? void 0 : g3.querySelectorAll("[data-headlessui-portal]")) != null ? o8 : []).find((d14) => d14.contains(L.current) && d14 instanceof HTMLElement)) != null ? c8 : null;
  }, [L]);
  b(de2, pe);
  let ue = (() => !(!S7 || x3))();
  y4(w3, P4, ue);
  let fe = (() => !(x3 || p6 !== 0))();
  E(g3 == null ? void 0 : g3.defaultView, "keydown", (o8) => {
    fe && (o8.defaultPrevented || o8.key === o7.Escape && (o8.preventDefault(), o8.stopPropagation(), P4()));
  });
  let ge = (() => !(J || p6 !== 0 || j3))();
  Be(g3, ge, w3), (0, import_react24.useEffect)(() => {
    if (p6 !== 0 || !D5.current)
      return;
    let o8 = new ResizeObserver((c8) => {
      for (let d14 of c8) {
        let F4 = d14.target.getBoundingClientRect();
        F4.x === 0 && F4.y === 0 && F4.width === 0 && F4.height === 0 && P4();
      }
    });
    return o8.observe(D5.current), () => o8.disconnect();
  }, [p6, D5, P4]);
  let [Te, ce] = w2(), De = (0, import_react24.useMemo)(() => [{ dialogState: p6, close: P4, setTitleId: Y2 }, h5], [p6, h5, P4, Y2]), X2 = (0, import_react24.useMemo)(() => ({ open: p6 === 0 }), [p6]), me = { ref: ee2, id: i6, role: a7, "aria-modal": p6 === 0 ? true : void 0, "aria-labelledby": h5.titleId, "aria-describedby": Te };
  return import_react24.default.createElement(b2, { type: "Dialog", enabled: p6 === 0, element: D5, onUpdate: o4((o8, c8) => {
    c8 === "Dialog" && u3(o8, { [s12.Add]: () => f9((d14) => d14 + 1), [s12.Remove]: () => f9((d14) => d14 - 1) });
  }) }, import_react24.default.createElement(l5, { force: true }, import_react24.default.createElement(te, null, import_react24.default.createElement(I5.Provider, { value: De }, import_react24.default.createElement(te.Group, { target: D5 }, import_react24.default.createElement(l5, { force: false }, import_react24.default.createElement(ce, { slot: X2, name: "Dialog.Description" }, import_react24.default.createElement(de, { initialFocus: s13, containers: w3, features: S7 ? u3(ae, { parent: de.features.RestoreFocus, leaf: de.features.All & ~de.features.FocusLock }) : de.features.None }, import_react24.default.createElement(re, null, C({ ourProps: me, theirProps: m9, slot: X2, defaultTag: Ne, features: Ue, visible: p6 === 0, name: "Dialog" }))))))))), import_react24.default.createElement(le, null));
}
var $e = "div";
function Ye(t16, e3) {
  let r7 = I3(), { id: i6 = `headlessui-dialog-overlay-${r7}`, ...n6 } = t16, [{ dialogState: l10, close: s13 }] = b3("Dialog.Overlay"), a7 = y(e3), T5 = o4((f9) => {
    if (f9.target === f9.currentTarget) {
      if (r6(f9.currentTarget))
        return f9.preventDefault();
      f9.preventDefault(), f9.stopPropagation(), s13();
    }
  }), m9 = (0, import_react24.useMemo)(() => ({ open: l10 === 0 }), [l10]);
  return C({ ourProps: { ref: a7, id: i6, "aria-hidden": true, onClick: T5 }, theirProps: n6, slot: m9, defaultTag: $e, name: "Dialog.Overlay" });
}
var je = "div";
function Je(t16, e3) {
  let r7 = I3(), { id: i6 = `headlessui-dialog-backdrop-${r7}`, ...n6 } = t16, [{ dialogState: l10 }, s13] = b3("Dialog.Backdrop"), a7 = y(e3);
  (0, import_react24.useEffect)(() => {
    if (s13.panelRef.current === null)
      throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.");
  }, [s13.panelRef]);
  let T5 = (0, import_react24.useMemo)(() => ({ open: l10 === 0 }), [l10]);
  return import_react24.default.createElement(l5, { force: true }, import_react24.default.createElement(te, null, C({ ourProps: { ref: a7, id: i6, "aria-hidden": true }, theirProps: n6, slot: T5, defaultTag: je, name: "Dialog.Backdrop" })));
}
var Xe = "div";
function Ke(t16, e3) {
  let r7 = I3(), { id: i6 = `headlessui-dialog-panel-${r7}`, ...n6 } = t16, [{ dialogState: l10 }, s13] = b3("Dialog.Panel"), a7 = y(e3, s13.panelRef), T5 = (0, import_react24.useMemo)(() => ({ open: l10 === 0 }), [l10]), m9 = o4((f9) => {
    f9.stopPropagation();
  });
  return C({ ourProps: { ref: a7, id: i6, onClick: m9 }, theirProps: n6, slot: T5, defaultTag: Xe, name: "Dialog.Panel" });
}
var Ve = "h2";
function qe(t16, e3) {
  let r7 = I3(), { id: i6 = `headlessui-dialog-title-${r7}`, ...n6 } = t16, [{ dialogState: l10, setTitleId: s13 }] = b3("Dialog.Title"), a7 = y(e3);
  (0, import_react24.useEffect)(() => (s13(i6), () => s13(null)), [i6, s13]);
  let T5 = (0, import_react24.useMemo)(() => ({ open: l10 === 0 }), [l10]);
  return C({ ourProps: { ref: a7, id: i6 }, theirProps: n6, slot: T5, defaultTag: Ve, name: "Dialog.Title" });
}
var ze = U(We);
var Qe = U(Je);
var Ze = U(Ke);
var et = U(Ye);
var tt = U(qe);
var _t = Object.assign(ze, { Backdrop: Qe, Panel: Ze, Overlay: et, Title: tt, Description: G });

// node_modules/@heroicons/react/24/outline/esm/Bars3Icon.js
var React = __toESM(require_react(), 1);
function Bars3Icon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  }));
}
var ForwardRef = React.forwardRef(Bars3Icon);
var Bars3Icon_default = ForwardRef;

// node_modules/@heroicons/react/24/outline/esm/CalendarIcon.js
var React2 = __toESM(require_react(), 1);
function CalendarIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React2.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React2.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React2.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
  }));
}
var ForwardRef2 = React2.forwardRef(CalendarIcon);
var CalendarIcon_default = ForwardRef2;

// node_modules/@heroicons/react/24/outline/esm/ChartPieIcon.js
var React3 = __toESM(require_react(), 1);
function ChartPieIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React3.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React3.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React3.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
  }), /* @__PURE__ */ React3.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
  }));
}
var ForwardRef3 = React3.forwardRef(ChartPieIcon);
var ChartPieIcon_default = ForwardRef3;

// node_modules/@heroicons/react/24/outline/esm/DocumentDuplicateIcon.js
var React4 = __toESM(require_react(), 1);
function DocumentDuplicateIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React4.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React4.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React4.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
  }));
}
var ForwardRef4 = React4.forwardRef(DocumentDuplicateIcon);
var DocumentDuplicateIcon_default = ForwardRef4;

// node_modules/@heroicons/react/24/outline/esm/FolderIcon.js
var React5 = __toESM(require_react(), 1);
function FolderIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React5.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React5.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React5.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
  }));
}
var ForwardRef5 = React5.forwardRef(FolderIcon);
var FolderIcon_default = ForwardRef5;

// node_modules/@heroicons/react/24/outline/esm/HomeIcon.js
var React6 = __toESM(require_react(), 1);
function HomeIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React6.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React6.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React6.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
  }));
}
var ForwardRef6 = React6.forwardRef(HomeIcon);
var HomeIcon_default = ForwardRef6;

// node_modules/@heroicons/react/24/outline/esm/UsersIcon.js
var React7 = __toESM(require_react(), 1);
function UsersIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React7.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React7.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React7.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
  }));
}
var ForwardRef7 = React7.forwardRef(UsersIcon);
var UsersIcon_default = ForwardRef7;

// node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js
var React8 = __toESM(require_react(), 1);
function XMarkIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React8.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React8.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React8.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18 18 6M6 6l12 12"
  }));
}
var ForwardRef8 = React8.forwardRef(XMarkIcon);
var XMarkIcon_default = ForwardRef8;

// node_modules/@heroicons/react/24/outline/esm/CheckCircleIcon.js
var React9 = __toESM(require_react(), 1);
function CheckCircleIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React9.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React9.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React9.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  }));
}
var ForwardRef9 = React9.forwardRef(CheckCircleIcon);
var CheckCircleIcon_default = ForwardRef9;

export {
  l,
  s3 as s,
  o4 as o,
  o as o2,
  p,
  l2,
  I3 as I,
  u3 as u,
  o5 as o3,
  M,
  T2 as T,
  h2 as h,
  D,
  I as I2,
  _,
  y4 as y,
  n2 as n,
  y as y2,
  t7 as t,
  O,
  v,
  C,
  U,
  d11 as d,
  u6 as u2,
  s11 as s2,
  r6 as r,
  o7 as o4,
  f,
  _t,
  Bars3Icon_default,
  CalendarIcon_default,
  ChartPieIcon_default,
  CheckCircleIcon_default,
  DocumentDuplicateIcon_default,
  FolderIcon_default,
  HomeIcon_default,
  UsersIcon_default,
  XMarkIcon_default
};
//# sourceMappingURL=/build/_shared/chunk-WCAGU2R2.js.map
