import {
  C,
  E,
  I,
  M,
  N,
  N2,
  O,
  O2,
  U,
  c,
  d,
  ee,
  f2 as f,
  f3 as f2,
  l,
  l2,
  l3,
  n,
  n2,
  o,
  o2,
  o4 as o3,
  p,
  r,
  s2 as s,
  s4 as s2,
  t,
  t2,
  te,
  u,
  u2,
  y,
  y2,
  y3
} from "/build/_shared/chunk-HRZQL6R3.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var import_react5 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
var import_react2 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-watch.js
var import_react = __toESM(require_react(), 1);
function m(u7, t7) {
  let e2 = (0, import_react.useRef)([]), r4 = o(u7);
  (0, import_react.useEffect)(() => {
    let o4 = [...e2.current];
    for (let [n3, a5] of t7.entries())
      if (e2.current[n3] !== a5) {
        let l7 = r4(t7, o4);
        return e2.current = t7, l7;
      }
  }, [r4, ...t7]);
}

// node_modules/@headlessui/react/dist/utils/document-ready.js
function t3(n3) {
  function e2() {
    document.readyState !== "loading" && (n3(), document.removeEventListener("DOMContentLoaded", e2));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e2), e2());
}

// node_modules/@headlessui/react/dist/utils/active-element-history.js
var t4 = [];
t3(() => {
  function e2(n3) {
    n3.target instanceof HTMLElement && n3.target !== document.body && t4[0] !== n3.target && (t4.unshift(n3.target), t4 = t4.filter((r4) => r4 != null && r4.isConnected), t4.splice(10));
  }
  window.addEventListener("click", e2, { capture: true }), window.addEventListener("mousedown", e2, { capture: true }), window.addEventListener("focus", e2, { capture: true }), document.body.addEventListener("click", e2, { capture: true }), document.body.addEventListener("mousedown", e2, { capture: true }), document.body.addEventListener("focus", e2, { capture: true });
});

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
function P(t7) {
  if (!t7)
    return /* @__PURE__ */ new Set();
  if (typeof t7 == "function")
    return new Set(t7());
  let n3 = /* @__PURE__ */ new Set();
  for (let e2 of t7.current)
    e2.current instanceof HTMLElement && n3.add(e2.current);
  return n3;
}
var X = "div";
var _ = ((r4) => (r4[r4.None = 1] = "None", r4[r4.InitialFocus = 2] = "InitialFocus", r4[r4.TabLock = 4] = "TabLock", r4[r4.FocusLock = 8] = "FocusLock", r4[r4.RestoreFocus = 16] = "RestoreFocus", r4[r4.All = 30] = "All", r4))(_ || {});
function z(t7, n3) {
  let e2 = (0, import_react2.useRef)(null), o4 = y3(e2, n3), { initialFocus: l7, containers: c5, features: r4 = 30, ...s6 } = t7;
  l2() || (r4 = 1);
  let i2 = n(e2);
  Y({ ownerDocument: i2 }, Boolean(r4 & 16));
  let u7 = Z({ ownerDocument: i2, container: e2, initialFocus: l7 }, Boolean(r4 & 2));
  $({ ownerDocument: i2, container: e2, containers: c5, previousActiveElement: u7 }, Boolean(r4 & 8));
  let y6 = n2(), R = o((a5) => {
    let m5 = e2.current;
    if (!m5)
      return;
    ((B) => B())(() => {
      u(y6.current, { [s2.Forwards]: () => {
        O(m5, M.First, { skipElements: [a5.relatedTarget] });
      }, [s2.Backwards]: () => {
        O(m5, M.Last, { skipElements: [a5.relatedTarget] });
      } });
    });
  }), h3 = p(), H2 = (0, import_react2.useRef)(false), j = { ref: o4, onKeyDown(a5) {
    a5.key == "Tab" && (H2.current = true, h3.requestAnimationFrame(() => {
      H2.current = false;
    }));
  }, onBlur(a5) {
    let m5 = P(c5);
    e2.current instanceof HTMLElement && m5.add(e2.current);
    let T2 = a5.relatedTarget;
    T2 instanceof HTMLElement && T2.dataset.headlessuiFocusGuard !== "true" && (S(m5, T2) || (H2.current ? O(e2.current, u(y6.current, { [s2.Forwards]: () => M.Next, [s2.Backwards]: () => M.Previous }) | M.WrapAround, { relativeTo: a5.target }) : a5.target instanceof HTMLElement && y(a5.target)));
  } };
  return import_react2.default.createElement(import_react2.default.Fragment, null, Boolean(r4 & 4) && import_react2.default.createElement(f, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: R, features: s.Focusable }), C({ ourProps: j, theirProps: s6, defaultTag: X, name: "FocusTrap" }), Boolean(r4 & 4) && import_react2.default.createElement(f, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: R, features: s.Focusable }));
}
var D = U(z);
var de = Object.assign(D, { features: _ });
function Q(t7 = true) {
  let n3 = (0, import_react2.useRef)(t4.slice());
  return m(([e2], [o4]) => {
    o4 === true && e2 === false && t(() => {
      n3.current.splice(0);
    }), o4 === false && e2 === true && (n3.current = t4.slice());
  }, [t7, t4, n3]), o(() => {
    var e2;
    return (e2 = n3.current.find((o4) => o4 != null && o4.isConnected)) != null ? e2 : null;
  });
}
function Y({ ownerDocument: t7 }, n3) {
  let e2 = Q(n3);
  m(() => {
    n3 || (t7 == null ? void 0 : t7.activeElement) === (t7 == null ? void 0 : t7.body) && y(e2());
  }, [n3]), c(() => {
    n3 && y(e2());
  });
}
function Z({ ownerDocument: t7, container: n3, initialFocus: e2 }, o4) {
  let l7 = (0, import_react2.useRef)(null), c5 = f2();
  return m(() => {
    if (!o4)
      return;
    let r4 = n3.current;
    r4 && t(() => {
      if (!c5.current)
        return;
      let s6 = t7 == null ? void 0 : t7.activeElement;
      if (e2 != null && e2.current) {
        if ((e2 == null ? void 0 : e2.current) === s6) {
          l7.current = s6;
          return;
        }
      } else if (r4.contains(s6)) {
        l7.current = s6;
        return;
      }
      e2 != null && e2.current ? y(e2.current) : O(r4, M.First) === N.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), l7.current = t7 == null ? void 0 : t7.activeElement;
    });
  }, [o4]), l7;
}
function $({ ownerDocument: t7, container: n3, containers: e2, previousActiveElement: o4 }, l7) {
  let c5 = f2();
  E(t7 == null ? void 0 : t7.defaultView, "focus", (r4) => {
    if (!l7 || !c5.current)
      return;
    let s6 = P(e2);
    n3.current instanceof HTMLElement && s6.add(n3.current);
    let i2 = o4.current;
    if (!i2)
      return;
    let u7 = r4.target;
    u7 && u7 instanceof HTMLElement ? S(s6, u7) ? (o4.current = u7, y(u7)) : (r4.preventDefault(), r4.stopPropagation(), y(i2)) : y(o4.current);
  }, true);
}
function S(t7, n3) {
  for (let e2 of t7)
    if (e2.contains(n3))
      return true;
  return false;
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var e = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimClient.js
var l4 = __toESM(require_react(), 1);
function i(e2, t7) {
  return e2 === t7 && (e2 !== 0 || 1 / e2 === 1 / t7) || e2 !== e2 && t7 !== t7;
}
var d3 = typeof Object.is == "function" ? Object.is : i;
var { useState: u3, useEffect: h, useLayoutEffect: f4, useDebugValue: p2 } = l4;
function y4(e2, t7, c5) {
  const a5 = t7(), [{ inst: n3 }, o4] = u3({ inst: { value: a5, getSnapshot: t7 } });
  return f4(() => {
    n3.value = a5, n3.getSnapshot = t7, r2(n3) && o4({ inst: n3 });
  }, [e2, a5, t7]), h(() => (r2(n3) && o4({ inst: n3 }), e2(() => {
    r2(n3) && o4({ inst: n3 });
  })), [e2]), p2(a5), a5;
}
function r2(e2) {
  const t7 = e2.getSnapshot, c5 = e2.value;
  try {
    const a5 = t7();
    return !d3(c5, a5);
  } catch {
    return true;
  }
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimServer.js
function t5(r4, e2, n3) {
  return e2();
}

// node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js
var r3 = typeof window != "undefined" && typeof window.document != "undefined" && typeof window.document.createElement != "undefined";
var s4 = !r3;
var c2 = s4 ? t5 : y4;
var a = "useSyncExternalStore" in e ? ((n3) => n3.useSyncExternalStore)(e) : c2;

// node_modules/@headlessui/react/dist/hooks/use-store.js
function S2(t7) {
  return a(t7.subscribe, t7.getSnapshot, t7.getSnapshot);
}

// node_modules/@headlessui/react/dist/utils/store.js
function a2(o4, r4) {
  let t7 = o4(), n3 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t7;
  }, subscribe(e2) {
    return n3.add(e2), () => n3.delete(e2);
  }, dispatch(e2, ...s6) {
    let i2 = r4[e2].call(t7, ...s6);
    i2 && (t7 = i2, n3.forEach((c5) => c5()));
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function c3() {
  let o4;
  return { before({ doc: e2 }) {
    var l7;
    let n3 = e2.documentElement;
    o4 = ((l7 = e2.defaultView) != null ? l7 : window).innerWidth - n3.clientWidth;
  }, after({ doc: e2, d: n3 }) {
    let t7 = e2.documentElement, l7 = t7.clientWidth - t7.offsetWidth, r4 = o4 - l7;
    n3.style(t7, "paddingRight", `${r4}px`);
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function d4() {
  return t2() ? { before({ doc: r4, d: l7, meta: c5 }) {
    function o4(a5) {
      return c5.containers.flatMap((n3) => n3()).some((n3) => n3.contains(a5));
    }
    l7.microTask(() => {
      var s6;
      if (window.getComputedStyle(r4.documentElement).scrollBehavior !== "auto") {
        let t7 = o2();
        t7.style(r4.documentElement, "scrollBehavior", "auto"), l7.add(() => l7.microTask(() => t7.dispose()));
      }
      let a5 = (s6 = window.scrollY) != null ? s6 : window.pageYOffset, n3 = null;
      l7.addEventListener(r4, "click", (t7) => {
        if (t7.target instanceof HTMLElement)
          try {
            let e2 = t7.target.closest("a");
            if (!e2)
              return;
            let { hash: f6 } = new URL(e2.href), i2 = r4.querySelector(f6);
            i2 && !o4(i2) && (n3 = i2);
          } catch {
          }
      }, true), l7.addEventListener(r4, "touchstart", (t7) => {
        if (t7.target instanceof HTMLElement)
          if (o4(t7.target)) {
            let e2 = t7.target;
            for (; e2.parentElement && o4(e2.parentElement); )
              e2 = e2.parentElement;
            l7.style(e2, "overscrollBehavior", "contain");
          } else
            l7.style(t7.target, "touchAction", "none");
      }), l7.addEventListener(r4, "touchmove", (t7) => {
        if (t7.target instanceof HTMLElement)
          if (o4(t7.target)) {
            let e2 = t7.target;
            for (; e2.parentElement && e2.dataset.headlessuiPortal !== "" && !(e2.scrollHeight > e2.clientHeight || e2.scrollWidth > e2.clientWidth); )
              e2 = e2.parentElement;
            e2.dataset.headlessuiPortal === "" && t7.preventDefault();
          } else
            t7.preventDefault();
      }, { passive: false }), l7.add(() => {
        var e2;
        let t7 = (e2 = window.scrollY) != null ? e2 : window.pageYOffset;
        a5 !== t7 && window.scrollTo(0, a5), n3 && n3.isConnected && (n3.scrollIntoView({ block: "nearest" }), n3 = null);
      });
    });
  } } : {};
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
function l5() {
  return { before({ doc: e2, d: o4 }) {
    o4.style(e2.documentElement, "overflow", "hidden");
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
function m2(e2) {
  let n3 = {};
  for (let t7 of e2)
    Object.assign(n3, t7(n3));
  return n3;
}
var a3 = a2(() => /* @__PURE__ */ new Map(), { PUSH(e2, n3) {
  var o4;
  let t7 = (o4 = this.get(e2)) != null ? o4 : { doc: e2, count: 0, d: o2(), meta: /* @__PURE__ */ new Set() };
  return t7.count++, t7.meta.add(n3), this.set(e2, t7), this;
}, POP(e2, n3) {
  let t7 = this.get(e2);
  return t7 && (t7.count--, t7.meta.delete(n3)), this;
}, SCROLL_PREVENT({ doc: e2, d: n3, meta: t7 }) {
  let o4 = { doc: e2, d: n3, meta: m2(t7) }, c5 = [d4(), c3(), l5()];
  c5.forEach(({ before: r4 }) => r4 == null ? void 0 : r4(o4)), c5.forEach(({ after: r4 }) => r4 == null ? void 0 : r4(o4));
}, SCROLL_ALLOW({ d: e2 }) {
  e2.dispose();
}, TEARDOWN({ doc: e2 }) {
  this.delete(e2);
} });
a3.subscribe(() => {
  let e2 = a3.getSnapshot(), n3 = /* @__PURE__ */ new Map();
  for (let [t7] of e2)
    n3.set(t7, t7.documentElement.style.overflow);
  for (let t7 of e2.values()) {
    let o4 = n3.get(t7.doc) === "hidden", c5 = t7.count !== 0;
    (c5 && !o4 || !c5 && o4) && a3.dispatch(t7.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t7), t7.count === 0 && a3.dispatch("TEARDOWN", t7);
  }
});

// node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function p3(e2, r4, n3) {
  let f6 = S2(a3), o4 = e2 ? f6.get(e2) : void 0, i2 = o4 ? o4.count > 0 : false;
  return l(() => {
    if (!(!e2 || !r4))
      return a3.dispatch("PUSH", e2, n3), () => a3.dispatch("POP", e2, n3);
  }, [r4, e2]), i2;
}

// node_modules/@headlessui/react/dist/hooks/use-inert.js
var u4 = /* @__PURE__ */ new Map();
var t6 = /* @__PURE__ */ new Map();
function b(r4, l7 = true) {
  l(() => {
    var o4;
    if (!l7)
      return;
    let e2 = typeof r4 == "function" ? r4() : r4.current;
    if (!e2)
      return;
    function a5() {
      var d7;
      if (!e2)
        return;
      let i2 = (d7 = t6.get(e2)) != null ? d7 : 1;
      if (i2 === 1 ? t6.delete(e2) : t6.set(e2, i2 - 1), i2 !== 1)
        return;
      let n3 = u4.get(e2);
      n3 && (n3["aria-hidden"] === null ? e2.removeAttribute("aria-hidden") : e2.setAttribute("aria-hidden", n3["aria-hidden"]), e2.inert = n3.inert, u4.delete(e2));
    }
    let f6 = (o4 = t6.get(e2)) != null ? o4 : 0;
    return t6.set(e2, f6 + 1), f6 !== 0 || (u4.set(e2, { "aria-hidden": e2.getAttribute("aria-hidden"), inert: e2.inert }), e2.setAttribute("aria-hidden", "true"), e2.inert = true), a5;
  }, [r4, l7]);
}

// node_modules/@headlessui/react/dist/internal/stack-context.js
var import_react3 = __toESM(require_react(), 1);
var a4 = (0, import_react3.createContext)(() => {
});
a4.displayName = "StackContext";
var s5 = ((e2) => (e2[e2.Add = 0] = "Add", e2[e2.Remove = 1] = "Remove", e2))(s5 || {});
function x() {
  return (0, import_react3.useContext)(a4);
}
function b2({ children: i2, onUpdate: r4, type: e2, element: n3, enabled: u7 }) {
  let l7 = x(), o4 = o((...t7) => {
    r4 == null || r4(...t7), l7(...t7);
  });
  return l(() => {
    let t7 = u7 === void 0 || u7 === true;
    return t7 && o4(0, e2, n3), () => {
      t7 && o4(1, e2, n3);
    };
  }, [o4, e2, n3, u7]), import_react3.default.createElement(a4.Provider, { value: o4 }, i2);
}

// node_modules/@headlessui/react/dist/components/description/description.js
var import_react4 = __toESM(require_react(), 1);
var d6 = (0, import_react4.createContext)(null);
function f5() {
  let r4 = (0, import_react4.useContext)(d6);
  if (r4 === null) {
    let t7 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t7, f5), t7;
  }
  return r4;
}
function w() {
  let [r4, t7] = (0, import_react4.useState)([]);
  return [r4.length > 0 ? r4.join(" ") : void 0, (0, import_react4.useMemo)(() => function(e2) {
    let i2 = o((s6) => (t7((o4) => [...o4, s6]), () => t7((o4) => {
      let p4 = o4.slice(), c5 = p4.indexOf(s6);
      return c5 !== -1 && p4.splice(c5, 1), p4;
    }))), n3 = (0, import_react4.useMemo)(() => ({ register: i2, slot: e2.slot, name: e2.name, props: e2.props }), [i2, e2.slot, e2.name, e2.props]);
    return import_react4.default.createElement(d6.Provider, { value: n3 }, e2.children);
  }, [t7])];
}
var I2 = "p";
function S3(r4, t7) {
  let a5 = I(), { id: e2 = `headlessui-description-${a5}`, ...i2 } = r4, n3 = f5(), s6 = y3(t7);
  l(() => n3.register(e2), [e2, n3.register]);
  let o4 = { ref: s6, ...n3.props, id: e2 };
  return C({ ourProps: o4, theirProps: i2, slot: n3.slot || {}, defaultTag: I2, name: n3.name || "Description" });
}
var h2 = U(S3);
var G = Object.assign(h2, {});

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var Me = ((r4) => (r4[r4.Open = 0] = "Open", r4[r4.Closed = 1] = "Closed", r4))(Me || {});
var we = ((e2) => (e2[e2.SetTitleId = 0] = "SetTitleId", e2))(we || {});
var He = { [0](t7, e2) {
  return t7.titleId === e2.id ? t7 : { ...t7, titleId: e2.id };
} };
var I3 = (0, import_react5.createContext)(null);
I3.displayName = "DialogContext";
function b3(t7) {
  let e2 = (0, import_react5.useContext)(I3);
  if (e2 === null) {
    let r4 = new Error(`<${t7} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r4, b3), r4;
  }
  return e2;
}
function Be(t7, e2, r4 = () => [document.body]) {
  p3(t7, e2, (i2) => {
    var n3;
    return { containers: [...(n3 = i2.containers) != null ? n3 : [], r4] };
  });
}
function Ge(t7, e2) {
  return u(e2.type, He, t7, e2);
}
var Ne = "div";
var Ue = O2.RenderStrategy | O2.Static;
function We(t7, e2) {
  let r4 = I(), { id: i2 = `headlessui-dialog-${r4}`, open: n3, onClose: l7, initialFocus: s6, role: a5 = "dialog", __demoMode: T2 = false, ...m5 } = t7, [M2, f6] = (0, import_react5.useState)(0), U2 = (0, import_react5.useRef)(false);
  a5 = function() {
    return a5 === "dialog" || a5 === "alertdialog" ? a5 : (U2.current || (U2.current = true, console.warn(`Invalid role [${a5}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let E3 = u2();
  n3 === void 0 && E3 !== null && (n3 = (E3 & d.Open) === d.Open);
  let D3 = (0, import_react5.useRef)(null), ee2 = y3(D3, e2), g = n(D3), W = t7.hasOwnProperty("open") || E3 !== null, $2 = t7.hasOwnProperty("onClose");
  if (!W && !$2)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!W)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!$2)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof n3 != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n3}`);
  if (typeof l7 != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l7}`);
  let p4 = n3 ? 0 : 1, [h3, te2] = (0, import_react5.useReducer)(Ge, { titleId: null, descriptionId: null, panelRef: (0, import_react5.createRef)() }), P2 = o(() => l7(false)), Y2 = o((o4) => te2({ type: 0, id: o4 })), S4 = l2() ? T2 ? false : p4 === 0 : false, x2 = M2 > 1, j = (0, import_react5.useContext)(I3) !== null, [oe, re] = ee(), ne = { get current() {
    var o4;
    return (o4 = h3.panelRef.current) != null ? o4 : D3.current;
  } }, { resolveContainers: w2, mainTreeNodeRef: L, MainTreeNode: le } = N2({ portals: oe, defaultContainers: [ne] }), ae = x2 ? "parent" : "leaf", J = E3 !== null ? (E3 & d.Closing) === d.Closing : false, ie = (() => j || J ? false : S4)(), se = (0, import_react5.useCallback)(() => {
    var o4, c5;
    return (c5 = Array.from((o4 = g == null ? void 0 : g.querySelectorAll("body > *")) != null ? o4 : []).find((d7) => d7.id === "headlessui-portal-root" ? false : d7.contains(L.current) && d7 instanceof HTMLElement)) != null ? c5 : null;
  }, [L]);
  b(se, ie);
  let pe = (() => x2 ? true : S4)(), de2 = (0, import_react5.useCallback)(() => {
    var o4, c5;
    return (c5 = Array.from((o4 = g == null ? void 0 : g.querySelectorAll("[data-headlessui-portal]")) != null ? o4 : []).find((d7) => d7.contains(L.current) && d7 instanceof HTMLElement)) != null ? c5 : null;
  }, [L]);
  b(de2, pe);
  let ue = (() => !(!S4 || x2))();
  y2(w2, P2, ue);
  let fe = (() => !(x2 || p4 !== 0))();
  E(g == null ? void 0 : g.defaultView, "keydown", (o4) => {
    fe && (o4.defaultPrevented || o4.key === o3.Escape && (o4.preventDefault(), o4.stopPropagation(), P2()));
  });
  let ge = (() => !(J || p4 !== 0 || j))();
  Be(g, ge, w2), (0, import_react5.useEffect)(() => {
    if (p4 !== 0 || !D3.current)
      return;
    let o4 = new ResizeObserver((c5) => {
      for (let d7 of c5) {
        let F = d7.target.getBoundingClientRect();
        F.x === 0 && F.y === 0 && F.width === 0 && F.height === 0 && P2();
      }
    });
    return o4.observe(D3.current), () => o4.disconnect();
  }, [p4, D3, P2]);
  let [Te, ce] = w(), De = (0, import_react5.useMemo)(() => [{ dialogState: p4, close: P2, setTitleId: Y2 }, h3], [p4, h3, P2, Y2]), X2 = (0, import_react5.useMemo)(() => ({ open: p4 === 0 }), [p4]), me = { ref: ee2, id: i2, role: a5, "aria-modal": p4 === 0 ? true : void 0, "aria-labelledby": h3.titleId, "aria-describedby": Te };
  return import_react5.default.createElement(b2, { type: "Dialog", enabled: p4 === 0, element: D3, onUpdate: o((o4, c5) => {
    c5 === "Dialog" && u(o4, { [s5.Add]: () => f6((d7) => d7 + 1), [s5.Remove]: () => f6((d7) => d7 - 1) });
  }) }, import_react5.default.createElement(l3, { force: true }, import_react5.default.createElement(te, null, import_react5.default.createElement(I3.Provider, { value: De }, import_react5.default.createElement(te.Group, { target: D3 }, import_react5.default.createElement(l3, { force: false }, import_react5.default.createElement(ce, { slot: X2, name: "Dialog.Description" }, import_react5.default.createElement(de, { initialFocus: s6, containers: w2, features: S4 ? u(ae, { parent: de.features.RestoreFocus, leaf: de.features.All & ~de.features.FocusLock }) : de.features.None }, import_react5.default.createElement(re, null, C({ ourProps: me, theirProps: m5, slot: X2, defaultTag: Ne, features: Ue, visible: p4 === 0, name: "Dialog" }))))))))), import_react5.default.createElement(le, null));
}
var $e = "div";
function Ye(t7, e2) {
  let r4 = I(), { id: i2 = `headlessui-dialog-overlay-${r4}`, ...n3 } = t7, [{ dialogState: l7, close: s6 }] = b3("Dialog.Overlay"), a5 = y3(e2), T2 = o((f6) => {
    if (f6.target === f6.currentTarget) {
      if (r(f6.currentTarget))
        return f6.preventDefault();
      f6.preventDefault(), f6.stopPropagation(), s6();
    }
  }), m5 = (0, import_react5.useMemo)(() => ({ open: l7 === 0 }), [l7]);
  return C({ ourProps: { ref: a5, id: i2, "aria-hidden": true, onClick: T2 }, theirProps: n3, slot: m5, defaultTag: $e, name: "Dialog.Overlay" });
}
var je = "div";
function Je(t7, e2) {
  let r4 = I(), { id: i2 = `headlessui-dialog-backdrop-${r4}`, ...n3 } = t7, [{ dialogState: l7 }, s6] = b3("Dialog.Backdrop"), a5 = y3(e2);
  (0, import_react5.useEffect)(() => {
    if (s6.panelRef.current === null)
      throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.");
  }, [s6.panelRef]);
  let T2 = (0, import_react5.useMemo)(() => ({ open: l7 === 0 }), [l7]);
  return import_react5.default.createElement(l3, { force: true }, import_react5.default.createElement(te, null, C({ ourProps: { ref: a5, id: i2, "aria-hidden": true }, theirProps: n3, slot: T2, defaultTag: je, name: "Dialog.Backdrop" })));
}
var Xe = "div";
function Ke(t7, e2) {
  let r4 = I(), { id: i2 = `headlessui-dialog-panel-${r4}`, ...n3 } = t7, [{ dialogState: l7 }, s6] = b3("Dialog.Panel"), a5 = y3(e2, s6.panelRef), T2 = (0, import_react5.useMemo)(() => ({ open: l7 === 0 }), [l7]), m5 = o((f6) => {
    f6.stopPropagation();
  });
  return C({ ourProps: { ref: a5, id: i2, onClick: m5 }, theirProps: n3, slot: T2, defaultTag: Xe, name: "Dialog.Panel" });
}
var Ve = "h2";
function qe(t7, e2) {
  let r4 = I(), { id: i2 = `headlessui-dialog-title-${r4}`, ...n3 } = t7, [{ dialogState: l7, setTitleId: s6 }] = b3("Dialog.Title"), a5 = y3(e2);
  (0, import_react5.useEffect)(() => (s6(i2), () => s6(null)), [i2, s6]);
  let T2 = (0, import_react5.useMemo)(() => ({ open: l7 === 0 }), [l7]);
  return C({ ourProps: { ref: a5, id: i2 }, theirProps: n3, slot: T2, defaultTag: Ve, name: "Dialog.Title" });
}
var ze = U(We);
var Qe = U(Je);
var Ze = U(Ke);
var et = U(Ye);
var tt = U(qe);
var _t = Object.assign(ze, { Backdrop: Qe, Panel: Ze, Overlay: et, Title: tt, Description: G });

export {
  _t
};
//# sourceMappingURL=/build/_shared/chunk-EUPUCIDS.js.map
