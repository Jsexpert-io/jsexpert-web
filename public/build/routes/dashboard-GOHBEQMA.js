import {
  Bars3Icon_default,
  BellIcon_default,
  C,
  CalendarIcon_default,
  ChartPieIcon_default,
  D,
  DocumentDuplicateIcon_default,
  E,
  FolderIcon_default,
  HomeIcon_default,
  I,
  I2,
  I3,
  M,
  N,
  N2,
  O,
  O2,
  T,
  T2,
  U,
  UsersIcon_default,
  XMarkIcon_default,
  _,
  d,
  ee,
  f,
  f2,
  h,
  l,
  n,
  n2,
  o,
  o2,
  o3,
  o4,
  p,
  qe,
  r,
  s,
  s2,
  s3,
  s4,
  u,
  u2,
  y2 as y,
  y3 as y2,
  y4 as y3
} from "/build/_shared/chunk-HRZQL6R3.js";
import {
  require_project
} from "/build/_shared/chunk-FGSXWGNP.js";
import {
  require_auth
} from "/build/_shared/chunk-6F6PMZ7E.js";
import {
  ChevronDownIcon_default
} from "/build/_shared/chunk-KUQUCDFE.js";
import {
  Outlet,
  useLoaderData,
  useLocation
} from "/build/_shared/chunk-U7HRMV6J.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-ZGRPQXWE.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/dashboard.tsx
var import_auth = __toESM(require_auth(), 1);
var import_project = __toESM(require_project(), 1);

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react = __toESM(require_react(), 1);
function i(t3) {
  var n3;
  if (t3.type)
    return t3.type;
  let e = (n3 = t3.as) != null ? n3 : "button";
  if (typeof e == "string" && e.toLowerCase() === "button")
    return "button";
}
function T3(t3, e) {
  let [n3, u5] = (0, import_react.useState)(() => i(t3));
  return l(() => {
    u5(i(t3));
  }, [t3.type, t3.as]), l(() => {
    n3 || e.current && e.current instanceof HTMLButtonElement && !e.current.hasAttribute("type") && u5("button");
  }, [n3, e]), n3;
}

// node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
var import_react2 = __toESM(require_react(), 1);
function t(e) {
  return [e.screenX, e.screenY];
}
function u3() {
  let e = (0, import_react2.useRef)([-1, -1]);
  return { wasMoved(r3) {
    let n3 = t(r3);
    return e.current[0] === n3[0] && e.current[1] === n3[1] ? false : (e.current = n3, true);
  }, update(r3) {
    e.current = t(r3);
  } };
}

// node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
var import_react3 = __toESM(require_react(), 1);
function F({ container: e, accept: t3, walk: r3, enabled: c2 = true }) {
  let o8 = (0, import_react3.useRef)(t3), l3 = (0, import_react3.useRef)(r3);
  (0, import_react3.useEffect)(() => {
    o8.current = t3, l3.current = r3;
  }, [t3, r3]), l(() => {
    if (!e || !c2)
      return;
    let n3 = o3(e);
    if (!n3)
      return;
    let f4 = o8.current, p2 = l3.current, d2 = Object.assign((i2) => f4(i2), { acceptNode: f4 }), u5 = n3.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, d2, false);
    for (; u5.nextNode(); )
      p2(u5.currentNode);
  }, [e, c2, o8, l3]);
}

// node_modules/@headlessui/react/dist/utils/calculate-active-index.js
function u4(l3) {
  throw new Error("Unexpected object: " + l3);
}
var c = ((i2) => (i2[i2.First = 0] = "First", i2[i2.Previous = 1] = "Previous", i2[i2.Next = 2] = "Next", i2[i2.Last = 3] = "Last", i2[i2.Specific = 4] = "Specific", i2[i2.Nothing = 5] = "Nothing", i2))(c || {});
function f3(l3, n3) {
  let t3 = n3.resolveItems();
  if (t3.length <= 0)
    return null;
  let r3 = n3.resolveActiveIndex(), s6 = r3 != null ? r3 : -1;
  switch (l3.focus) {
    case 0: {
      for (let e = 0; e < t3.length; ++e)
        if (!n3.resolveDisabled(t3[e], e, t3))
          return e;
      return r3;
    }
    case 1: {
      for (let e = s6 - 1; e >= 0; --e)
        if (!n3.resolveDisabled(t3[e], e, t3))
          return e;
      return r3;
    }
    case 2: {
      for (let e = s6 + 1; e < t3.length; ++e)
        if (!n3.resolveDisabled(t3[e], e, t3))
          return e;
      return r3;
    }
    case 3: {
      for (let e = t3.length - 1; e >= 0; --e)
        if (!n3.resolveDisabled(t3[e], e, t3))
          return e;
      return r3;
    }
    case 4: {
      for (let e = 0; e < t3.length; ++e)
        if (n3.resolveId(t3[e], e, t3) === l3.id)
          return e;
      return r3;
    }
    case 5:
      return null;
    default:
      u4(l3);
  }
}

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var import_react5 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/start-transition.js
var import_react4 = __toESM(require_react(), 1);
var t2;
var a = (t2 = import_react4.default.startTransition) != null ? t2 : function(i2) {
  i2();
};

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var Q = ((o8) => (o8[o8.Open = 0] = "Open", o8[o8.Closed = 1] = "Closed", o8))(Q || {});
var V = ((t3) => (t3[t3.ToggleDisclosure = 0] = "ToggleDisclosure", t3[t3.CloseDisclosure = 1] = "CloseDisclosure", t3[t3.SetButtonId = 2] = "SetButtonId", t3[t3.SetPanelId = 3] = "SetPanelId", t3[t3.LinkPanel = 4] = "LinkPanel", t3[t3.UnlinkPanel = 5] = "UnlinkPanel", t3))(V || {});
var Y = { [0]: (e) => ({ ...e, disclosureState: u(e.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e) => e.disclosureState === 1 ? e : { ...e, disclosureState: 1 }, [4](e) {
  return e.linkedPanel === true ? e : { ...e, linkedPanel: true };
}, [5](e) {
  return e.linkedPanel === false ? e : { ...e, linkedPanel: false };
}, [2](e, n3) {
  return e.buttonId === n3.buttonId ? e : { ...e, buttonId: n3.buttonId };
}, [3](e, n3) {
  return e.panelId === n3.panelId ? e : { ...e, panelId: n3.panelId };
} };
var M2 = (0, import_react5.createContext)(null);
M2.displayName = "DisclosureContext";
function _2(e) {
  let n3 = (0, import_react5.useContext)(M2);
  if (n3 === null) {
    let o8 = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o8, _2), o8;
  }
  return n3;
}
var v = (0, import_react5.createContext)(null);
v.displayName = "DisclosureAPIContext";
function K(e) {
  let n3 = (0, import_react5.useContext)(v);
  if (n3 === null) {
    let o8 = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o8, K), o8;
  }
  return n3;
}
var F2 = (0, import_react5.createContext)(null);
F2.displayName = "DisclosurePanelContext";
function Z() {
  return (0, import_react5.useContext)(F2);
}
function ee2(e, n3) {
  return u(n3.type, Y, e, n3);
}
var te = import_react5.Fragment;
function ne(e, n3) {
  let { defaultOpen: o8 = false, ...i2 } = e, f4 = (0, import_react5.useRef)(null), l3 = y2(n3, T2((u5) => {
    f4.current = u5;
  }, e.as === void 0 || e.as === import_react5.Fragment)), t3 = (0, import_react5.useRef)(null), d2 = (0, import_react5.useRef)(null), s6 = (0, import_react5.useReducer)(ee2, { disclosureState: o8 ? 0 : 1, linkedPanel: false, buttonRef: d2, panelRef: t3, buttonId: null, panelId: null }), [{ disclosureState: c2, buttonId: a3 }, D2] = s6, p2 = o((u5) => {
    D2({ type: 1 });
    let y4 = o3(f4);
    if (!y4 || !a3)
      return;
    let r3 = (() => u5 ? u5 instanceof HTMLElement ? u5 : u5.current instanceof HTMLElement ? u5.current : y4.getElementById(a3) : y4.getElementById(a3))();
    r3 == null || r3.focus();
  }), P = (0, import_react5.useMemo)(() => ({ close: p2 }), [p2]), T4 = (0, import_react5.useMemo)(() => ({ open: c2 === 0, close: p2 }), [c2, p2]), C4 = { ref: l3 };
  return import_react5.default.createElement(M2.Provider, { value: s6 }, import_react5.default.createElement(v.Provider, { value: P }, import_react5.default.createElement(s3, { value: u(c2, { [0]: d.Open, [1]: d.Closed }) }, C({ ourProps: C4, theirProps: i2, slot: T4, defaultTag: te, name: "Disclosure" }))));
}
var le = "button";
function oe(e, n3) {
  let o8 = I(), { id: i2 = `headlessui-disclosure-button-${o8}`, ...f4 } = e, [l3, t3] = _2("Disclosure.Button"), d2 = Z(), s6 = d2 === null ? false : d2 === l3.panelId, c2 = (0, import_react5.useRef)(null), a3 = y2(c2, n3, s6 ? null : l3.buttonRef), D2 = I3();
  (0, import_react5.useEffect)(() => {
    if (!s6)
      return t3({ type: 2, buttonId: i2 }), () => {
        t3({ type: 2, buttonId: null });
      };
  }, [i2, t3, s6]);
  let p2 = o((r3) => {
    var m2;
    if (s6) {
      if (l3.disclosureState === 1)
        return;
      switch (r3.key) {
        case o4.Space:
        case o4.Enter:
          r3.preventDefault(), r3.stopPropagation(), t3({ type: 0 }), (m2 = l3.buttonRef.current) == null || m2.focus();
          break;
      }
    } else
      switch (r3.key) {
        case o4.Space:
        case o4.Enter:
          r3.preventDefault(), r3.stopPropagation(), t3({ type: 0 });
          break;
      }
  }), P = o((r3) => {
    switch (r3.key) {
      case o4.Space:
        r3.preventDefault();
        break;
    }
  }), T4 = o((r3) => {
    var m2;
    r(r3.currentTarget) || e.disabled || (s6 ? (t3({ type: 0 }), (m2 = l3.buttonRef.current) == null || m2.focus()) : t3({ type: 0 }));
  }), C4 = (0, import_react5.useMemo)(() => ({ open: l3.disclosureState === 0 }), [l3]), u5 = T3(e, c2), y4 = s6 ? { ref: a3, type: u5, onKeyDown: p2, onClick: T4 } : { ref: a3, id: i2, type: u5, "aria-expanded": l3.disclosureState === 0, "aria-controls": l3.linkedPanel ? l3.panelId : void 0, onKeyDown: p2, onKeyUp: P, onClick: T4 };
  return C({ mergeRefs: D2, ourProps: y4, theirProps: f4, slot: C4, defaultTag: le, name: "Disclosure.Button" });
}
var re = "div";
var se = O2.RenderStrategy | O2.Static;
function ue(e, n3) {
  let o8 = I(), { id: i2 = `headlessui-disclosure-panel-${o8}`, ...f4 } = e, [l3, t3] = _2("Disclosure.Panel"), { close: d2 } = K("Disclosure.Panel"), s6 = I3(), c2 = y2(n3, l3.panelRef, (T4) => {
    a(() => t3({ type: T4 ? 4 : 5 }));
  });
  (0, import_react5.useEffect)(() => (t3({ type: 3, panelId: i2 }), () => {
    t3({ type: 3, panelId: null });
  }), [i2, t3]);
  let a3 = u2(), D2 = (() => a3 !== null ? (a3 & d.Open) === d.Open : l3.disclosureState === 0)(), p2 = (0, import_react5.useMemo)(() => ({ open: l3.disclosureState === 0, close: d2 }), [l3, d2]), P = { ref: c2, id: i2 };
  return import_react5.default.createElement(F2.Provider, { value: l3.panelId }, C({ mergeRefs: s6, ourProps: P, theirProps: f4, slot: p2, defaultTag: re, features: se, visible: D2, name: "Disclosure.Panel" }));
}
var ie = U(ne);
var ae = U(oe);
var pe = U(ue);
var Ae = Object.assign(ie, { Button: ae, Panel: pe });

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
var import_react6 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/get-text-value.js
var a2 = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o7(e) {
  var r3, i2;
  let n3 = (r3 = e.innerText) != null ? r3 : "", t3 = e.cloneNode(true);
  if (!(t3 instanceof HTMLElement))
    return n3;
  let u5 = false;
  for (let f4 of t3.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    f4.remove(), u5 = true;
  let l3 = u5 ? (i2 = t3.innerText) != null ? i2 : "" : n3;
  return a2.test(l3) && (l3 = l3.replace(a2, "")), l3;
}
function g(e) {
  let n3 = e.getAttribute("aria-label");
  if (typeof n3 == "string")
    return n3.trim();
  let t3 = e.getAttribute("aria-labelledby");
  if (t3) {
    let u5 = t3.split(" ").map((l3) => {
      let r3 = document.getElementById(l3);
      if (r3) {
        let i2 = r3.getAttribute("aria-label");
        return typeof i2 == "string" ? i2.trim() : o7(r3).trim();
      }
      return null;
    }).filter(Boolean);
    if (u5.length > 0)
      return u5.join(", ");
  }
  return o7(e).trim();
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
function s5(c2) {
  let t3 = (0, import_react6.useRef)(""), r3 = (0, import_react6.useRef)("");
  return o(() => {
    let e = c2.current;
    if (!e)
      return "";
    let u5 = e.innerText;
    if (t3.current === u5)
      return r3.current;
    let n3 = g(e).trim().toLowerCase();
    return t3.current = u5, r3.current = n3, n3;
  });
}

// node_modules/@headlessui/react/dist/components/menu/menu.js
var import_react7 = __toESM(require_react(), 1);
var me = ((r3) => (r3[r3.Open = 0] = "Open", r3[r3.Closed = 1] = "Closed", r3))(me || {});
var de = ((r3) => (r3[r3.Pointer = 0] = "Pointer", r3[r3.Other = 1] = "Other", r3))(de || {});
var fe = ((a3) => (a3[a3.OpenMenu = 0] = "OpenMenu", a3[a3.CloseMenu = 1] = "CloseMenu", a3[a3.GoToItem = 2] = "GoToItem", a3[a3.Search = 3] = "Search", a3[a3.ClearSearch = 4] = "ClearSearch", a3[a3.RegisterItem = 5] = "RegisterItem", a3[a3.UnregisterItem = 6] = "UnregisterItem", a3))(fe || {});
function w(e, u5 = (r3) => r3) {
  let r3 = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null, s6 = I2(u5(e.items.slice()), (t3) => t3.dataRef.current.domRef.current), i2 = r3 ? s6.indexOf(r3) : null;
  return i2 === -1 && (i2 = null), { items: s6, activeItemIndex: i2 };
}
var Te = { [1](e) {
  return e.menuState === 1 ? e : { ...e, activeItemIndex: null, menuState: 1 };
}, [0](e) {
  return e.menuState === 0 ? e : { ...e, __demoMode: false, menuState: 0 };
}, [2]: (e, u5) => {
  var i2;
  let r3 = w(e), s6 = f3(u5, { resolveItems: () => r3.items, resolveActiveIndex: () => r3.activeItemIndex, resolveId: (t3) => t3.id, resolveDisabled: (t3) => t3.dataRef.current.disabled });
  return { ...e, ...r3, searchQuery: "", activeItemIndex: s6, activationTrigger: (i2 = u5.trigger) != null ? i2 : 1 };
}, [3]: (e, u5) => {
  let s6 = e.searchQuery !== "" ? 0 : 1, i2 = e.searchQuery + u5.value.toLowerCase(), o8 = (e.activeItemIndex !== null ? e.items.slice(e.activeItemIndex + s6).concat(e.items.slice(0, e.activeItemIndex + s6)) : e.items).find((l3) => {
    var m2;
    return ((m2 = l3.dataRef.current.textValue) == null ? void 0 : m2.startsWith(i2)) && !l3.dataRef.current.disabled;
  }), a3 = o8 ? e.items.indexOf(o8) : -1;
  return a3 === -1 || a3 === e.activeItemIndex ? { ...e, searchQuery: i2 } : { ...e, searchQuery: i2, activeItemIndex: a3, activationTrigger: 1 };
}, [4](e) {
  return e.searchQuery === "" ? e : { ...e, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (e, u5) => {
  let r3 = w(e, (s6) => [...s6, { id: u5.id, dataRef: u5.dataRef }]);
  return { ...e, ...r3 };
}, [6]: (e, u5) => {
  let r3 = w(e, (s6) => {
    let i2 = s6.findIndex((t3) => t3.id === u5.id);
    return i2 !== -1 && s6.splice(i2, 1), s6;
  });
  return { ...e, ...r3, activationTrigger: 1 };
} };
var U2 = (0, import_react7.createContext)(null);
U2.displayName = "MenuContext";
function C2(e) {
  let u5 = (0, import_react7.useContext)(U2);
  if (u5 === null) {
    let r3 = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r3, C2), r3;
  }
  return u5;
}
function ye(e, u5) {
  return u(u5.type, Te, e, u5);
}
var Ie = import_react7.Fragment;
function Me(e, u5) {
  let { __demoMode: r3 = false, ...s6 } = e, i2 = (0, import_react7.useReducer)(ye, { __demoMode: r3, menuState: r3 ? 0 : 1, buttonRef: (0, import_react7.createRef)(), itemsRef: (0, import_react7.createRef)(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: t3, itemsRef: o8, buttonRef: a3 }, l3] = i2, m2 = y2(u5);
  y([a3, o8], (g2, R2) => {
    var p2;
    l3({ type: 1 }), h(R2, T.Loose) || (g2.preventDefault(), (p2 = a3.current) == null || p2.focus());
  }, t3 === 0);
  let I5 = o(() => {
    l3({ type: 1 });
  }), A = (0, import_react7.useMemo)(() => ({ open: t3 === 0, close: I5 }), [t3, I5]), f4 = { ref: m2 };
  return import_react7.default.createElement(U2.Provider, { value: i2 }, import_react7.default.createElement(s3, { value: u(t3, { [0]: d.Open, [1]: d.Closed }) }, C({ ourProps: f4, theirProps: s6, slot: A, defaultTag: Ie, name: "Menu" })));
}
var ge = "button";
function Re(e, u5) {
  var R2;
  let r3 = I(), { id: s6 = `headlessui-menu-button-${r3}`, ...i2 } = e, [t3, o8] = C2("Menu.Button"), a3 = y2(t3.buttonRef, u5), l3 = p(), m2 = o((p2) => {
    switch (p2.key) {
      case o4.Space:
      case o4.Enter:
      case o4.ArrowDown:
        p2.preventDefault(), p2.stopPropagation(), o8({ type: 0 }), l3.nextFrame(() => o8({ type: 2, focus: c.First }));
        break;
      case o4.ArrowUp:
        p2.preventDefault(), p2.stopPropagation(), o8({ type: 0 }), l3.nextFrame(() => o8({ type: 2, focus: c.Last }));
        break;
    }
  }), I5 = o((p2) => {
    switch (p2.key) {
      case o4.Space:
        p2.preventDefault();
        break;
    }
  }), A = o((p2) => {
    if (r(p2.currentTarget))
      return p2.preventDefault();
    e.disabled || (t3.menuState === 0 ? (o8({ type: 1 }), l3.nextFrame(() => {
      var M3;
      return (M3 = t3.buttonRef.current) == null ? void 0 : M3.focus({ preventScroll: true });
    })) : (p2.preventDefault(), o8({ type: 0 })));
  }), f4 = (0, import_react7.useMemo)(() => ({ open: t3.menuState === 0 }), [t3]), g2 = { ref: a3, id: s6, type: T3(e, t3.buttonRef), "aria-haspopup": "menu", "aria-controls": (R2 = t3.itemsRef.current) == null ? void 0 : R2.id, "aria-expanded": t3.menuState === 0, onKeyDown: m2, onKeyUp: I5, onClick: A };
  return C({ ourProps: g2, theirProps: i2, slot: f4, defaultTag: ge, name: "Menu.Button" });
}
var Ae2 = "div";
var be = O2.RenderStrategy | O2.Static;
function Ee(e, u5) {
  var M3, b;
  let r3 = I(), { id: s6 = `headlessui-menu-items-${r3}`, ...i2 } = e, [t3, o8] = C2("Menu.Items"), a3 = y2(t3.itemsRef, u5), l3 = n(t3.itemsRef), m2 = p(), I5 = u2(), A = (() => I5 !== null ? (I5 & d.Open) === d.Open : t3.menuState === 0)();
  (0, import_react7.useEffect)(() => {
    let n3 = t3.itemsRef.current;
    n3 && t3.menuState === 0 && n3 !== (l3 == null ? void 0 : l3.activeElement) && n3.focus({ preventScroll: true });
  }, [t3.menuState, t3.itemsRef, l3]), F({ container: t3.itemsRef.current, enabled: t3.menuState === 0, accept(n3) {
    return n3.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : n3.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(n3) {
    n3.setAttribute("role", "none");
  } });
  let f4 = o((n3) => {
    var E4, x2;
    switch (m2.dispose(), n3.key) {
      case o4.Space:
        if (t3.searchQuery !== "")
          return n3.preventDefault(), n3.stopPropagation(), o8({ type: 3, value: n3.key });
      case o4.Enter:
        if (n3.preventDefault(), n3.stopPropagation(), o8({ type: 1 }), t3.activeItemIndex !== null) {
          let { dataRef: S2 } = t3.items[t3.activeItemIndex];
          (x2 = (E4 = S2.current) == null ? void 0 : E4.domRef.current) == null || x2.click();
        }
        D(t3.buttonRef.current);
        break;
      case o4.ArrowDown:
        return n3.preventDefault(), n3.stopPropagation(), o8({ type: 2, focus: c.Next });
      case o4.ArrowUp:
        return n3.preventDefault(), n3.stopPropagation(), o8({ type: 2, focus: c.Previous });
      case o4.Home:
      case o4.PageUp:
        return n3.preventDefault(), n3.stopPropagation(), o8({ type: 2, focus: c.First });
      case o4.End:
      case o4.PageDown:
        return n3.preventDefault(), n3.stopPropagation(), o8({ type: 2, focus: c.Last });
      case o4.Escape:
        n3.preventDefault(), n3.stopPropagation(), o8({ type: 1 }), o2().nextFrame(() => {
          var S2;
          return (S2 = t3.buttonRef.current) == null ? void 0 : S2.focus({ preventScroll: true });
        });
        break;
      case o4.Tab:
        n3.preventDefault(), n3.stopPropagation(), o8({ type: 1 }), o2().nextFrame(() => {
          _(t3.buttonRef.current, n3.shiftKey ? M.Previous : M.Next);
        });
        break;
      default:
        n3.key.length === 1 && (o8({ type: 3, value: n3.key }), m2.setTimeout(() => o8({ type: 4 }), 350));
        break;
    }
  }), g2 = o((n3) => {
    switch (n3.key) {
      case o4.Space:
        n3.preventDefault();
        break;
    }
  }), R2 = (0, import_react7.useMemo)(() => ({ open: t3.menuState === 0 }), [t3]), p2 = { "aria-activedescendant": t3.activeItemIndex === null || (M3 = t3.items[t3.activeItemIndex]) == null ? void 0 : M3.id, "aria-labelledby": (b = t3.buttonRef.current) == null ? void 0 : b.id, id: s6, onKeyDown: f4, onKeyUp: g2, role: "menu", tabIndex: 0, ref: a3 };
  return C({ ourProps: p2, theirProps: i2, slot: R2, defaultTag: Ae2, features: be, visible: A, name: "Menu.Items" });
}
var Se = import_react7.Fragment;
function xe(e, u5) {
  let r3 = I(), { id: s6 = `headlessui-menu-item-${r3}`, disabled: i2 = false, ...t3 } = e, [o8, a3] = C2("Menu.Item"), l3 = o8.activeItemIndex !== null ? o8.items[o8.activeItemIndex].id === s6 : false, m2 = (0, import_react7.useRef)(null), I5 = y2(u5, m2);
  l(() => {
    if (o8.__demoMode || o8.menuState !== 0 || !l3 || o8.activationTrigger === 0)
      return;
    let T4 = o2();
    return T4.requestAnimationFrame(() => {
      var P, B;
      (B = (P = m2.current) == null ? void 0 : P.scrollIntoView) == null || B.call(P, { block: "nearest" });
    }), T4.dispose;
  }, [o8.__demoMode, m2, l3, o8.menuState, o8.activationTrigger, o8.activeItemIndex]);
  let A = s5(m2), f4 = (0, import_react7.useRef)({ disabled: i2, domRef: m2, get textValue() {
    return A();
  } });
  l(() => {
    f4.current.disabled = i2;
  }, [f4, i2]), l(() => (a3({ type: 5, id: s6, dataRef: f4 }), () => a3({ type: 6, id: s6 })), [f4, s6]);
  let g2 = o(() => {
    a3({ type: 1 });
  }), R2 = o((T4) => {
    if (i2)
      return T4.preventDefault();
    a3({ type: 1 }), D(o8.buttonRef.current);
  }), p2 = o(() => {
    if (i2)
      return a3({ type: 2, focus: c.Nothing });
    a3({ type: 2, focus: c.Specific, id: s6 });
  }), M3 = u3(), b = o((T4) => M3.update(T4)), n3 = o((T4) => {
    M3.wasMoved(T4) && (i2 || l3 || a3({ type: 2, focus: c.Specific, id: s6, trigger: 0 }));
  }), E4 = o((T4) => {
    M3.wasMoved(T4) && (i2 || l3 && a3({ type: 2, focus: c.Nothing }));
  }), x2 = (0, import_react7.useMemo)(() => ({ active: l3, disabled: i2, close: g2 }), [l3, i2, g2]);
  return C({ ourProps: { id: s6, ref: I5, role: "menuitem", tabIndex: i2 === true ? void 0 : -1, "aria-disabled": i2 === true ? true : void 0, disabled: void 0, onClick: R2, onFocus: p2, onPointerEnter: b, onMouseEnter: b, onPointerMove: n3, onMouseMove: n3, onPointerLeave: E4, onMouseLeave: E4 }, theirProps: t3, slot: x2, defaultTag: Se, name: "Menu.Item" });
}
var Pe = U(Me);
var ve = U(Re);
var he = U(Ee);
var De = U(xe);
var qe2 = Object.assign(Pe, { Button: ve, Items: he, Item: De });

// node_modules/@headlessui/react/dist/components/popover/popover.js
var import_react8 = __toESM(require_react(), 1);
var he2 = ((u5) => (u5[u5.Open = 0] = "Open", u5[u5.Closed = 1] = "Closed", u5))(he2 || {});
var He = ((e) => (e[e.TogglePopover = 0] = "TogglePopover", e[e.ClosePopover = 1] = "ClosePopover", e[e.SetButton = 2] = "SetButton", e[e.SetButtonId = 3] = "SetButtonId", e[e.SetPanel = 4] = "SetPanel", e[e.SetPanelId = 5] = "SetPanelId", e))(He || {});
var Ge = { [0]: (t3) => {
  let o8 = { ...t3, popoverState: u(t3.popoverState, { [0]: 1, [1]: 0 }) };
  return o8.popoverState === 0 && (o8.__demoMode = false), o8;
}, [1](t3) {
  return t3.popoverState === 1 ? t3 : { ...t3, popoverState: 1 };
}, [2](t3, o8) {
  return t3.button === o8.button ? t3 : { ...t3, button: o8.button };
}, [3](t3, o8) {
  return t3.buttonId === o8.buttonId ? t3 : { ...t3, buttonId: o8.buttonId };
}, [4](t3, o8) {
  return t3.panel === o8.panel ? t3 : { ...t3, panel: o8.panel };
}, [5](t3, o8) {
  return t3.panelId === o8.panelId ? t3 : { ...t3, panelId: o8.panelId };
} };
var ue2 = (0, import_react8.createContext)(null);
ue2.displayName = "PopoverContext";
function oe2(t3) {
  let o8 = (0, import_react8.useContext)(ue2);
  if (o8 === null) {
    let u5 = new Error(`<${t3} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u5, oe2), u5;
  }
  return o8;
}
var ie2 = (0, import_react8.createContext)(null);
ie2.displayName = "PopoverAPIContext";
function fe2(t3) {
  let o8 = (0, import_react8.useContext)(ie2);
  if (o8 === null) {
    let u5 = new Error(`<${t3} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u5, fe2), u5;
  }
  return o8;
}
var Pe2 = (0, import_react8.createContext)(null);
Pe2.displayName = "PopoverGroupContext";
function Ee2() {
  return (0, import_react8.useContext)(Pe2);
}
var re2 = (0, import_react8.createContext)(null);
re2.displayName = "PopoverPanelContext";
function Ne() {
  return (0, import_react8.useContext)(re2);
}
function ke(t3, o8) {
  return u(o8.type, Ge, t3, o8);
}
var we = "div";
function Ue(t3, o8) {
  var B;
  let { __demoMode: u5 = false, ...M3 } = t3, x2 = (0, import_react8.useRef)(null), n3 = y2(o8, T2((l3) => {
    x2.current = l3;
  })), e = (0, import_react8.useRef)([]), c2 = (0, import_react8.useReducer)(ke, { __demoMode: u5, popoverState: u5 ? 0 : 1, buttons: e, button: null, buttonId: null, panel: null, panelId: null, beforePanelSentinel: (0, import_react8.createRef)(), afterPanelSentinel: (0, import_react8.createRef)() }), [{ popoverState: f4, button: s6, buttonId: I5, panel: a3, panelId: v3, beforePanelSentinel: y4, afterPanelSentinel: A }, P] = c2, p2 = n((B = x2.current) != null ? B : s6), E4 = (0, import_react8.useMemo)(() => {
    if (!s6 || !a3)
      return false;
    for (let W of document.querySelectorAll("body > *"))
      if (Number(W == null ? void 0 : W.contains(s6)) ^ Number(W == null ? void 0 : W.contains(a3)))
        return true;
    let l3 = f(), S2 = l3.indexOf(s6), q2 = (S2 + l3.length - 1) % l3.length, U3 = (S2 + 1) % l3.length, z2 = l3[q2], be2 = l3[U3];
    return !a3.contains(z2) && !a3.contains(be2);
  }, [s6, a3]), F3 = s(I5), D2 = s(v3), _3 = (0, import_react8.useMemo)(() => ({ buttonId: F3, panelId: D2, close: () => P({ type: 1 }) }), [F3, D2, P]), O3 = Ee2(), L = O3 == null ? void 0 : O3.registerPopover, $2 = o(() => {
    var l3;
    return (l3 = O3 == null ? void 0 : O3.isFocusWithinPopoverGroup()) != null ? l3 : (p2 == null ? void 0 : p2.activeElement) && ((s6 == null ? void 0 : s6.contains(p2.activeElement)) || (a3 == null ? void 0 : a3.contains(p2.activeElement)));
  });
  (0, import_react8.useEffect)(() => L == null ? void 0 : L(_3), [L, _3]);
  let [i2, b] = ee(), T4 = N2({ mainTreeNodeRef: O3 == null ? void 0 : O3.mainTreeNodeRef, portals: i2, defaultContainers: [s6, a3] });
  E(p2 == null ? void 0 : p2.defaultView, "focus", (l3) => {
    var S2, q2, U3, z2;
    l3.target !== window && l3.target instanceof HTMLElement && f4 === 0 && ($2() || s6 && a3 && (T4.contains(l3.target) || (q2 = (S2 = y4.current) == null ? void 0 : S2.contains) != null && q2.call(S2, l3.target) || (z2 = (U3 = A.current) == null ? void 0 : U3.contains) != null && z2.call(U3, l3.target) || P({ type: 1 })));
  }, true), y(T4.resolveContainers, (l3, S2) => {
    P({ type: 1 }), h(S2, T.Loose) || (l3.preventDefault(), s6 == null || s6.focus());
  }, f4 === 0);
  let d2 = o((l3) => {
    P({ type: 1 });
    let S2 = (() => l3 ? l3 instanceof HTMLElement ? l3 : "current" in l3 && l3.current instanceof HTMLElement ? l3.current : s6 : s6)();
    S2 == null || S2.focus();
  }), r3 = (0, import_react8.useMemo)(() => ({ close: d2, isPortalled: E4 }), [d2, E4]), m2 = (0, import_react8.useMemo)(() => ({ open: f4 === 0, close: d2 }), [f4, d2]), g2 = { ref: n3 };
  return import_react8.default.createElement(re2.Provider, { value: null }, import_react8.default.createElement(ue2.Provider, { value: c2 }, import_react8.default.createElement(ie2.Provider, { value: r3 }, import_react8.default.createElement(s3, { value: u(f4, { [0]: d.Open, [1]: d.Closed }) }, import_react8.default.createElement(b, null, C({ ourProps: g2, theirProps: M3, slot: m2, defaultTag: we, name: "Popover" }), import_react8.default.createElement(T4.MainTreeNode, null))))));
}
var We = "button";
function Ke(t3, o8) {
  let u5 = I(), { id: M3 = `headlessui-popover-button-${u5}`, ...x2 } = t3, [n3, e] = oe2("Popover.Button"), { isPortalled: c2 } = fe2("Popover.Button"), f4 = (0, import_react8.useRef)(null), s6 = `headlessui-focus-sentinel-${I()}`, I5 = Ee2(), a3 = I5 == null ? void 0 : I5.closeOthers, y4 = Ne() !== null;
  (0, import_react8.useEffect)(() => {
    if (!y4)
      return e({ type: 3, buttonId: M3 }), () => {
        e({ type: 3, buttonId: null });
      };
  }, [y4, M3, e]);
  let [A] = (0, import_react8.useState)(() => Symbol()), P = y2(f4, o8, y4 ? null : (r3) => {
    if (r3)
      n3.buttons.current.push(A);
    else {
      let m2 = n3.buttons.current.indexOf(A);
      m2 !== -1 && n3.buttons.current.splice(m2, 1);
    }
    n3.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), r3 && e({ type: 2, button: r3 });
  }), p2 = y2(f4, o8), E4 = n(f4), F3 = o((r3) => {
    var m2, g2, B;
    if (y4) {
      if (n3.popoverState === 1)
        return;
      switch (r3.key) {
        case o4.Space:
        case o4.Enter:
          r3.preventDefault(), (g2 = (m2 = r3.target).click) == null || g2.call(m2), e({ type: 1 }), (B = n3.button) == null || B.focus();
          break;
      }
    } else
      switch (r3.key) {
        case o4.Space:
        case o4.Enter:
          r3.preventDefault(), r3.stopPropagation(), n3.popoverState === 1 && (a3 == null || a3(n3.buttonId)), e({ type: 0 });
          break;
        case o4.Escape:
          if (n3.popoverState !== 0)
            return a3 == null ? void 0 : a3(n3.buttonId);
          if (!f4.current || E4 != null && E4.activeElement && !f4.current.contains(E4.activeElement))
            return;
          r3.preventDefault(), r3.stopPropagation(), e({ type: 1 });
          break;
      }
  }), D2 = o((r3) => {
    y4 || r3.key === o4.Space && r3.preventDefault();
  }), _3 = o((r3) => {
    var m2, g2;
    r(r3.currentTarget) || t3.disabled || (y4 ? (e({ type: 1 }), (m2 = n3.button) == null || m2.focus()) : (r3.preventDefault(), r3.stopPropagation(), n3.popoverState === 1 && (a3 == null || a3(n3.buttonId)), e({ type: 0 }), (g2 = n3.button) == null || g2.focus()));
  }), O3 = o((r3) => {
    r3.preventDefault(), r3.stopPropagation();
  }), L = n3.popoverState === 0, $2 = (0, import_react8.useMemo)(() => ({ open: L }), [L]), i2 = T3(t3, f4), b = y4 ? { ref: p2, type: i2, onKeyDown: F3, onClick: _3 } : { ref: P, id: n3.buttonId, type: i2, "aria-expanded": n3.popoverState === 0, "aria-controls": n3.panel ? n3.panelId : void 0, onKeyDown: F3, onKeyUp: D2, onClick: _3, onMouseDown: O3 }, T4 = n2(), d2 = o(() => {
    let r3 = n3.panel;
    if (!r3)
      return;
    function m2() {
      u(T4.current, { [s4.Forwards]: () => O(r3, M.First), [s4.Backwards]: () => O(r3, M.Last) }) === N.Error && O(f().filter((B) => B.dataset.headlessuiFocusGuard !== "true"), u(T4.current, { [s4.Forwards]: M.Next, [s4.Backwards]: M.Previous }), { relativeTo: n3.button });
    }
    m2();
  });
  return import_react8.default.createElement(import_react8.default.Fragment, null, C({ ourProps: b, theirProps: x2, slot: $2, defaultTag: We, name: "Popover.Button" }), L && !y4 && c2 && import_react8.default.createElement(f2, { id: s6, features: s2.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: d2 }));
}
var je = "div";
var Ve = O2.RenderStrategy | O2.Static;
function $e(t3, o8) {
  let u5 = I(), { id: M3 = `headlessui-popover-overlay-${u5}`, ...x2 } = t3, [{ popoverState: n3 }, e] = oe2("Popover.Overlay"), c2 = y2(o8), f4 = u2(), s6 = (() => f4 !== null ? (f4 & d.Open) === d.Open : n3 === 0)(), I5 = o((y4) => {
    if (r(y4.currentTarget))
      return y4.preventDefault();
    e({ type: 1 });
  }), a3 = (0, import_react8.useMemo)(() => ({ open: n3 === 0 }), [n3]);
  return C({ ourProps: { ref: c2, id: M3, "aria-hidden": true, onClick: I5 }, theirProps: x2, slot: a3, defaultTag: je, features: Ve, visible: s6, name: "Popover.Overlay" });
}
var Je = "div";
var Xe = O2.RenderStrategy | O2.Static;
function Ye(t3, o8) {
  let u5 = I(), { id: M3 = `headlessui-popover-panel-${u5}`, focus: x2 = false, ...n3 } = t3, [e, c2] = oe2("Popover.Panel"), { close: f4, isPortalled: s6 } = fe2("Popover.Panel"), I5 = `headlessui-focus-sentinel-before-${I()}`, a3 = `headlessui-focus-sentinel-after-${I()}`, v3 = (0, import_react8.useRef)(null), y4 = y2(v3, o8, (i2) => {
    c2({ type: 4, panel: i2 });
  }), A = n(v3), P = I3();
  l(() => (c2({ type: 5, panelId: M3 }), () => {
    c2({ type: 5, panelId: null });
  }), [M3, c2]);
  let p2 = u2(), E4 = (() => p2 !== null ? (p2 & d.Open) === d.Open : e.popoverState === 0)(), F3 = o((i2) => {
    var b;
    switch (i2.key) {
      case o4.Escape:
        if (e.popoverState !== 0 || !v3.current || A != null && A.activeElement && !v3.current.contains(A.activeElement))
          return;
        i2.preventDefault(), i2.stopPropagation(), c2({ type: 1 }), (b = e.button) == null || b.focus();
        break;
    }
  });
  (0, import_react8.useEffect)(() => {
    var i2;
    t3.static || e.popoverState === 1 && ((i2 = t3.unmount) == null || i2) && c2({ type: 4, panel: null });
  }, [e.popoverState, t3.unmount, t3.static, c2]), (0, import_react8.useEffect)(() => {
    if (e.__demoMode || !x2 || e.popoverState !== 0 || !v3.current)
      return;
    let i2 = A == null ? void 0 : A.activeElement;
    v3.current.contains(i2) || O(v3.current, M.First);
  }, [e.__demoMode, x2, v3, e.popoverState]);
  let D2 = (0, import_react8.useMemo)(() => ({ open: e.popoverState === 0, close: f4 }), [e, f4]), _3 = { ref: y4, id: M3, onKeyDown: F3, onBlur: x2 && e.popoverState === 0 ? (i2) => {
    var T4, d2, r3, m2, g2;
    let b = i2.relatedTarget;
    b && v3.current && ((T4 = v3.current) != null && T4.contains(b) || (c2({ type: 1 }), ((r3 = (d2 = e.beforePanelSentinel.current) == null ? void 0 : d2.contains) != null && r3.call(d2, b) || (g2 = (m2 = e.afterPanelSentinel.current) == null ? void 0 : m2.contains) != null && g2.call(m2, b)) && b.focus({ preventScroll: true })));
  } : void 0, tabIndex: -1 }, O3 = n2(), L = o(() => {
    let i2 = v3.current;
    if (!i2)
      return;
    function b() {
      u(O3.current, { [s4.Forwards]: () => {
        var d2;
        O(i2, M.First) === N.Error && ((d2 = e.afterPanelSentinel.current) == null || d2.focus());
      }, [s4.Backwards]: () => {
        var T4;
        (T4 = e.button) == null || T4.focus({ preventScroll: true });
      } });
    }
    b();
  }), $2 = o(() => {
    let i2 = v3.current;
    if (!i2)
      return;
    function b() {
      u(O3.current, { [s4.Forwards]: () => {
        var B;
        if (!e.button)
          return;
        let T4 = f(), d2 = T4.indexOf(e.button), r3 = T4.slice(0, d2 + 1), g2 = [...T4.slice(d2 + 1), ...r3];
        for (let l3 of g2.slice())
          if (l3.dataset.headlessuiFocusGuard === "true" || (B = e.panel) != null && B.contains(l3)) {
            let S2 = g2.indexOf(l3);
            S2 !== -1 && g2.splice(S2, 1);
          }
        O(g2, M.First, { sorted: false });
      }, [s4.Backwards]: () => {
        var d2;
        O(i2, M.Previous) === N.Error && ((d2 = e.button) == null || d2.focus());
      } });
    }
    b();
  });
  return import_react8.default.createElement(re2.Provider, { value: M3 }, E4 && s6 && import_react8.default.createElement(f2, { id: I5, ref: e.beforePanelSentinel, features: s2.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: L }), C({ mergeRefs: P, ourProps: _3, theirProps: n3, slot: D2, defaultTag: Je, features: Xe, visible: E4, name: "Popover.Panel" }), E4 && s6 && import_react8.default.createElement(f2, { id: a3, ref: e.afterPanelSentinel, features: s2.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: $2 }));
}
var qe3 = "div";
function ze(t3, o8) {
  let u5 = (0, import_react8.useRef)(null), M3 = y2(u5, o8), [x2, n3] = (0, import_react8.useState)([]), e = y3(), c2 = o((P) => {
    n3((p2) => {
      let E4 = p2.indexOf(P);
      if (E4 !== -1) {
        let F3 = p2.slice();
        return F3.splice(E4, 1), F3;
      }
      return p2;
    });
  }), f4 = o((P) => (n3((p2) => [...p2, P]), () => c2(P))), s6 = o(() => {
    var E4;
    let P = o3(u5);
    if (!P)
      return false;
    let p2 = P.activeElement;
    return (E4 = u5.current) != null && E4.contains(p2) ? true : x2.some((F3) => {
      var D2, _3;
      return ((D2 = P.getElementById(F3.buttonId.current)) == null ? void 0 : D2.contains(p2)) || ((_3 = P.getElementById(F3.panelId.current)) == null ? void 0 : _3.contains(p2));
    });
  }), I5 = o((P) => {
    for (let p2 of x2)
      p2.buttonId.current !== P && p2.close();
  }), a3 = (0, import_react8.useMemo)(() => ({ registerPopover: f4, unregisterPopover: c2, isFocusWithinPopoverGroup: s6, closeOthers: I5, mainTreeNodeRef: e.mainTreeNodeRef }), [f4, c2, s6, I5, e.mainTreeNodeRef]), v3 = (0, import_react8.useMemo)(() => ({}), []), y4 = t3, A = { ref: M3 };
  return import_react8.default.createElement(Pe2.Provider, { value: a3 }, C({ ourProps: A, theirProps: y4, slot: v3, defaultTag: qe3, name: "Popover.Group" }), import_react8.default.createElement(e.MainTreeNode, null));
}
var Qe = U(Ue);
var Ze = U(Ke);
var et = U($e);
var tt = U(Ye);
var ot = U(ze);
var Ct = Object.assign(Qe, { Button: Ze, Overlay: et, Panel: tt, Group: ot });

// app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx
var import_react12 = __toESM(require_react(), 1);

// app/routes/dashboard+/dashboardLayoutComponents/projectSelect.tsx
var import_react10 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard+/dashboardLayoutComponents/projectSelect.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard+/dashboardLayoutComponents/projectSelect.tsx"
  );
  import.meta.hot.lastModified = "1711773982533.4111";
}
function Example({
  projects,
  currentProject
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ct, { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ct.Button, { className: "inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: currentProject?.name || "Select Project" }, void 0, false, {
        fileName: "app/routes/dashboard+/dashboardLayoutComponents/projectSelect.tsx",
        lineNumber: 49,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDownIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/routes/dashboard+/dashboardLayoutComponents/projectSelect.tsx",
        lineNumber: 50,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard+/dashboardLayoutComponents/projectSelect.tsx",
      lineNumber: 48,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(qe, { as: import_react10.Fragment, enter: "transition ease-out duration-200", enterFrom: "opacity-0 translate-y-1", enterTo: "opacity-100 translate-y-0", leave: "transition ease-in duration-150", leaveFrom: "opacity-100 translate-y-0", leaveTo: "opacity-0 translate-y-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ct.Panel, { className: "absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5", children: projects.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: `/dashboard/projects/${item.slug}/analytics`, className: "block p-2 hover:text-indigo-600", children: item.name }, item.name, false, {
      fileName: "app/routes/dashboard+/dashboardLayoutComponents/projectSelect.tsx",
      lineNumber: 56,
      columnNumber: 47
    }, this)) }, void 0, false, {
      fileName: "app/routes/dashboard+/dashboardLayoutComponents/projectSelect.tsx",
      lineNumber: 55,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard+/dashboardLayoutComponents/projectSelect.tsx",
      lineNumber: 54,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard+/dashboardLayoutComponents/projectSelect.tsx",
      lineNumber: 53,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard+/dashboardLayoutComponents/projectSelect.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
}
_c = Example;
var _c;
$RefreshReg$(_c, "Example");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx"
  );
  import.meta.hot.lastModified = "1711777166377.5154";
}
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Example2({
  navigation: navigation2,
  teams: teams2,
  showNavigations,
  projects,
  currentProject,
  setCurrentProject,
  user,
  currentPath
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae, { as: "nav", className: "bg-white shadow", children: ({
    open
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex h-16 justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "-ml-2 mr-2 flex items-center md:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae.Button, { className: "relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "absolute -inset-0.5" }, void 0, false, {
            fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
            lineNumber: 48,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, false, {
            fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
            lineNumber: 49,
            columnNumber: 41
          }, this),
          open ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(XMarkIcon_default, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
            lineNumber: 50,
            columnNumber: 49
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Bars3Icon_default, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
            lineNumber: 50,
            columnNumber: 110
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
          lineNumber: 47,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
          lineNumber: 45,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-shrink-0 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { className: "h-8 w-auto", src: "/logob.png", alt: "Your Company" }, void 0, false, {
          fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
          lineNumber: 54,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
          lineNumber: 53,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden md:ml-6 md:flex md:space-x-8", children: navigation2?.map((a3) => {
          console.log("currentPath", currentPath);
          const isActive = currentPath == a3.href;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: a3.href, className: `inline-flex items-center   px-1 pt-1 text-sm font-medium text-gray-900 border-indigo-500${isActive ? " border-b-2" : ""}`, children: a3.name }, void 0, false, {
            fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
            lineNumber: 61,
            columnNumber: 24
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
          lineNumber: 56,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
        lineNumber: 44,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Example, { projects, currentProject }, void 0, false, {
          fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
          lineNumber: 70,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
          lineNumber: 69,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", className: "relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "absolute -inset-1.5" }, void 0, false, {
              fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
              lineNumber: 74,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "View notifications" }, void 0, false, {
              fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
              lineNumber: 75,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BellIcon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
              lineNumber: 76,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
            lineNumber: 73,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe2, { as: "div", className: "relative ml-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe2.Button, { className: "relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "absolute -inset-1.5" }, void 0, false, {
                fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
                lineNumber: 83,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Open user menu" }, void 0, false, {
                fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
                lineNumber: 84,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { className: "h-8 w-8 rounded-full", src: user?.image?.url, alt: "" }, void 0, false, {
                fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
                lineNumber: 85,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
              lineNumber: 82,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
              lineNumber: 81,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe, { as: import_react12.Fragment, enter: "transition ease-out duration-200", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe2.Items, { className: "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe2.Item, { children: ({
                active
              }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", className: classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"), children: "Your Profile" }, void 0, false, {
                fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
                lineNumber: 93,
                columnNumber: 29
              }, this) }, void 0, false, {
                fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
                lineNumber: 90,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe2.Item, { children: ({
                active
              }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/auth/logout", className: classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700"), children: "Sign out" }, void 0, false, {
                fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
                lineNumber: 101,
                columnNumber: 29
              }, this) }, void 0, false, {
                fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
                lineNumber: 98,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
              lineNumber: 89,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
              lineNumber: 88,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
            lineNumber: 80,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
          lineNumber: 72,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
        lineNumber: 68,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
      lineNumber: 43,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
      lineNumber: 42,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae.Panel, { className: "md:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-1 pb-3 pt-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae.Button, { as: "a", href: "#", className: "block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700 sm:pl-5 sm:pr-6", children: "Dashboard" }, void 0, false, {
          fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
          lineNumber: 116,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae.Button, { as: "a", href: "#", className: "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6", children: "Team" }, void 0, false, {
          fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
          lineNumber: 119,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae.Button, { as: "a", href: "#", className: "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6", children: "Projects" }, void 0, false, {
          fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
          lineNumber: 122,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae.Button, { as: "a", href: "#", className: "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6", children: "Calendar" }, void 0, false, {
          fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
          lineNumber: 125,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
        lineNumber: 114,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "border-t border-gray-200 pb-3 pt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center px-4 sm:px-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { className: "h-10 w-10 rounded-full", src: user?.image?.url, alt: "" }, void 0, false, {
            fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
            lineNumber: 132,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
            lineNumber: 131,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ml-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-base font-medium text-gray-800", children: user?.name }, void 0, false, {
              fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
              lineNumber: 135,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-sm font-medium text-gray-500", children: user?.email }, void 0, false, {
              fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
              lineNumber: 136,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
            lineNumber: 134,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", className: "relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "absolute -inset-1.5" }, void 0, false, {
              fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
              lineNumber: 139,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "View notifications" }, void 0, false, {
              fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
              lineNumber: 140,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BellIcon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
              lineNumber: 141,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
            lineNumber: 138,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
          lineNumber: 130,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-3 space-y-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae.Button, { as: "a", href: "#", className: "block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6", children: "Your Profile" }, void 0, false, {
            fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
            lineNumber: 145,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Ae.Button, { as: "a", href: "/auth/logout", className: "block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6", children: "Sign out" }, void 0, false, {
            fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
            lineNumber: 149,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
          lineNumber: 144,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
        lineNumber: 129,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
      lineNumber: 113,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
    lineNumber: 41,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_c2 = Example2;
var _c2;
$RefreshReg$(_c2, "Example");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/dashboard.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard.tsx"
  );
  import.meta.hot.lastModified = "1711774297231.6328";
}
var navigation = [{
  name: "Dashboard",
  href: "#",
  icon: HomeIcon_default,
  current: true
}, {
  name: "Projects",
  href: "/dashboard/projects",
  icon: FolderIcon_default,
  current: false
}, {
  name: "Team",
  href: "/dashboard/Team",
  icon: UsersIcon_default,
  current: false
}, {
  name: "Calendar",
  href: "#",
  icon: CalendarIcon_default,
  current: false
}, {
  name: "Documents",
  href: "#",
  icon: DocumentDuplicateIcon_default,
  current: false
}, {
  name: "Reports",
  href: "#",
  icon: ChartPieIcon_default,
  current: false
}];
var teams = [{
  id: 1,
  name: "Heroicons",
  href: "#",
  initial: "H",
  current: false
}, {
  id: 2,
  name: "Tailwind Labs",
  href: "#",
  initial: "T",
  current: false
}, {
  id: 3,
  name: "Workcation",
  href: "#",
  initial: "W",
  current: false
}];
function Example3() {
  _s();
  const {
    user,
    navigations,
    projects,
    current,
    slug
  } = useLoaderData();
  const {
    pathname
  } = useLocation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Example2, { navigation, teams, showNavigations: navigations, projects, currentProject: current, setCurrentProject: () => {
      console.log("set current project");
    }, user, currentPath: `${pathname}` }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 114,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: " p-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 118,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 117,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 109,
    columnNumber: 10
  }, this);
}
_s(Example3, "HLa0iWCwBfU3gCSwxfg2x0CnXSQ=", false, function() {
  return [useLoaderData, useLocation];
});
_c3 = Example3;
var _c3;
$RefreshReg$(_c3, "Example");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Example3 as default
};
//# sourceMappingURL=/build/routes/dashboard-GOHBEQMA.js.map
