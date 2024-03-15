import {
  qe
} from "/build/_shared/chunk-EHNHN7LZ.js";
import {
  require_project
} from "/build/_shared/chunk-FGSXWGNP.js";
import {
  require_auth
} from "/build/_shared/chunk-6F6PMZ7E.js";
import {
  C,
  CalendarIcon_default,
  ChartPieIcon_default,
  D,
  DocumentDuplicateIcon_default,
  FolderIcon_default,
  HomeIcon_default,
  I,
  I2,
  M,
  O,
  T,
  U,
  UsersIcon_default,
  _,
  _t,
  d,
  h,
  l,
  n,
  o,
  o2,
  o3,
  o4,
  p,
  r,
  s2 as s,
  u,
  u2,
  y,
  y2
} from "/build/_shared/chunk-WCAGU2R2.js";
import {
  Bars3Icon_default,
  ChevronDownIcon_default,
  Cog6ToothIcon_default,
  MagnifyingGlassIcon_default,
  XMarkIcon_default
} from "/build/_shared/chunk-IZGS4CIT.js";
import {
  Outlet,
  useLoaderData,
  useNavigate
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
function i(t2) {
  var n2;
  if (t2.type)
    return t2.type;
  let e = (n2 = t2.as) != null ? n2 : "button";
  if (typeof e == "string" && e.toLowerCase() === "button")
    return "button";
}
function T2(t2, e) {
  let [n2, u5] = (0, import_react.useState)(() => i(t2));
  return l(() => {
    u5(i(t2));
  }, [t2.type, t2.as]), l(() => {
    n2 || e.current && e.current instanceof HTMLButtonElement && !e.current.hasAttribute("type") && u5("button");
  }, [n2, e]), n2;
}

// node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
var import_react2 = __toESM(require_react(), 1);
function t(e) {
  return [e.screenX, e.screenY];
}
function u3() {
  let e = (0, import_react2.useRef)([-1, -1]);
  return { wasMoved(r2) {
    let n2 = t(r2);
    return e.current[0] === n2[0] && e.current[1] === n2[1] ? false : (e.current = n2, true);
  }, update(r2) {
    e.current = t(r2);
  } };
}

// node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
var import_react3 = __toESM(require_react(), 1);
function F({ container: e, accept: t2, walk: r2, enabled: c2 = true }) {
  let o8 = (0, import_react3.useRef)(t2), l3 = (0, import_react3.useRef)(r2);
  (0, import_react3.useEffect)(() => {
    o8.current = t2, l3.current = r2;
  }, [t2, r2]), l(() => {
    if (!e || !c2)
      return;
    let n2 = o3(e);
    if (!n2)
      return;
    let f2 = o8.current, p2 = l3.current, d2 = Object.assign((i2) => f2(i2), { acceptNode: f2 }), u5 = n2.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, d2, false);
    for (; u5.nextNode(); )
      p2(u5.currentNode);
  }, [e, c2, o8, l3]);
}

// node_modules/@headlessui/react/dist/utils/calculate-active-index.js
function u4(l3) {
  throw new Error("Unexpected object: " + l3);
}
var c = ((i2) => (i2[i2.First = 0] = "First", i2[i2.Previous = 1] = "Previous", i2[i2.Next = 2] = "Next", i2[i2.Last = 3] = "Last", i2[i2.Specific = 4] = "Specific", i2[i2.Nothing = 5] = "Nothing", i2))(c || {});
function f(l3, n2) {
  let t2 = n2.resolveItems();
  if (t2.length <= 0)
    return null;
  let r2 = n2.resolveActiveIndex(), s3 = r2 != null ? r2 : -1;
  switch (l3.focus) {
    case 0: {
      for (let e = 0; e < t2.length; ++e)
        if (!n2.resolveDisabled(t2[e], e, t2))
          return e;
      return r2;
    }
    case 1: {
      for (let e = s3 - 1; e >= 0; --e)
        if (!n2.resolveDisabled(t2[e], e, t2))
          return e;
      return r2;
    }
    case 2: {
      for (let e = s3 + 1; e < t2.length; ++e)
        if (!n2.resolveDisabled(t2[e], e, t2))
          return e;
      return r2;
    }
    case 3: {
      for (let e = t2.length - 1; e >= 0; --e)
        if (!n2.resolveDisabled(t2[e], e, t2))
          return e;
      return r2;
    }
    case 4: {
      for (let e = 0; e < t2.length; ++e)
        if (n2.resolveId(t2[e], e, t2) === l3.id)
          return e;
      return r2;
    }
    case 5:
      return null;
    default:
      u4(l3);
  }
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/get-text-value.js
var a = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o7(e) {
  var r2, i2;
  let n2 = (r2 = e.innerText) != null ? r2 : "", t2 = e.cloneNode(true);
  if (!(t2 instanceof HTMLElement))
    return n2;
  let u5 = false;
  for (let f2 of t2.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    f2.remove(), u5 = true;
  let l3 = u5 ? (i2 = t2.innerText) != null ? i2 : "" : n2;
  return a.test(l3) && (l3 = l3.replace(a, "")), l3;
}
function g(e) {
  let n2 = e.getAttribute("aria-label");
  if (typeof n2 == "string")
    return n2.trim();
  let t2 = e.getAttribute("aria-labelledby");
  if (t2) {
    let u5 = t2.split(" ").map((l3) => {
      let r2 = document.getElementById(l3);
      if (r2) {
        let i2 = r2.getAttribute("aria-label");
        return typeof i2 == "string" ? i2.trim() : o7(r2).trim();
      }
      return null;
    }).filter(Boolean);
    if (u5.length > 0)
      return u5.join(", ");
  }
  return o7(e).trim();
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
function s2(c2) {
  let t2 = (0, import_react4.useRef)(""), r2 = (0, import_react4.useRef)("");
  return o(() => {
    let e = c2.current;
    if (!e)
      return "";
    let u5 = e.innerText;
    if (t2.current === u5)
      return r2.current;
    let n2 = g(e).trim().toLowerCase();
    return t2.current = u5, r2.current = n2, n2;
  });
}

// node_modules/@headlessui/react/dist/components/menu/menu.js
var import_react5 = __toESM(require_react(), 1);
var me = ((r2) => (r2[r2.Open = 0] = "Open", r2[r2.Closed = 1] = "Closed", r2))(me || {});
var de = ((r2) => (r2[r2.Pointer = 0] = "Pointer", r2[r2.Other = 1] = "Other", r2))(de || {});
var fe = ((a2) => (a2[a2.OpenMenu = 0] = "OpenMenu", a2[a2.CloseMenu = 1] = "CloseMenu", a2[a2.GoToItem = 2] = "GoToItem", a2[a2.Search = 3] = "Search", a2[a2.ClearSearch = 4] = "ClearSearch", a2[a2.RegisterItem = 5] = "RegisterItem", a2[a2.UnregisterItem = 6] = "UnregisterItem", a2))(fe || {});
function w(e, u5 = (r2) => r2) {
  let r2 = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null, s3 = I2(u5(e.items.slice()), (t2) => t2.dataRef.current.domRef.current), i2 = r2 ? s3.indexOf(r2) : null;
  return i2 === -1 && (i2 = null), { items: s3, activeItemIndex: i2 };
}
var Te = { [1](e) {
  return e.menuState === 1 ? e : { ...e, activeItemIndex: null, menuState: 1 };
}, [0](e) {
  return e.menuState === 0 ? e : { ...e, __demoMode: false, menuState: 0 };
}, [2]: (e, u5) => {
  var i2;
  let r2 = w(e), s3 = f(u5, { resolveItems: () => r2.items, resolveActiveIndex: () => r2.activeItemIndex, resolveId: (t2) => t2.id, resolveDisabled: (t2) => t2.dataRef.current.disabled });
  return { ...e, ...r2, searchQuery: "", activeItemIndex: s3, activationTrigger: (i2 = u5.trigger) != null ? i2 : 1 };
}, [3]: (e, u5) => {
  let s3 = e.searchQuery !== "" ? 0 : 1, i2 = e.searchQuery + u5.value.toLowerCase(), o8 = (e.activeItemIndex !== null ? e.items.slice(e.activeItemIndex + s3).concat(e.items.slice(0, e.activeItemIndex + s3)) : e.items).find((l3) => {
    var m2;
    return ((m2 = l3.dataRef.current.textValue) == null ? void 0 : m2.startsWith(i2)) && !l3.dataRef.current.disabled;
  }), a2 = o8 ? e.items.indexOf(o8) : -1;
  return a2 === -1 || a2 === e.activeItemIndex ? { ...e, searchQuery: i2 } : { ...e, searchQuery: i2, activeItemIndex: a2, activationTrigger: 1 };
}, [4](e) {
  return e.searchQuery === "" ? e : { ...e, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (e, u5) => {
  let r2 = w(e, (s3) => [...s3, { id: u5.id, dataRef: u5.dataRef }]);
  return { ...e, ...r2 };
}, [6]: (e, u5) => {
  let r2 = w(e, (s3) => {
    let i2 = s3.findIndex((t2) => t2.id === u5.id);
    return i2 !== -1 && s3.splice(i2, 1), s3;
  });
  return { ...e, ...r2, activationTrigger: 1 };
} };
var U2 = (0, import_react5.createContext)(null);
U2.displayName = "MenuContext";
function C2(e) {
  let u5 = (0, import_react5.useContext)(U2);
  if (u5 === null) {
    let r2 = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r2, C2), r2;
  }
  return u5;
}
function ye(e, u5) {
  return u(u5.type, Te, e, u5);
}
var Ie = import_react5.Fragment;
function Me(e, u5) {
  let { __demoMode: r2 = false, ...s3 } = e, i2 = (0, import_react5.useReducer)(ye, { __demoMode: r2, menuState: r2 ? 0 : 1, buttonRef: (0, import_react5.createRef)(), itemsRef: (0, import_react5.createRef)(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: t2, itemsRef: o8, buttonRef: a2 }, l3] = i2, m2 = y2(u5);
  y([a2, o8], (g2, R) => {
    var p2;
    l3({ type: 1 }), h(R, T.Loose) || (g2.preventDefault(), (p2 = a2.current) == null || p2.focus());
  }, t2 === 0);
  let I3 = o(() => {
    l3({ type: 1 });
  }), A = (0, import_react5.useMemo)(() => ({ open: t2 === 0, close: I3 }), [t2, I3]), f2 = { ref: m2 };
  return import_react5.default.createElement(U2.Provider, { value: i2 }, import_react5.default.createElement(s, { value: u(t2, { [0]: d.Open, [1]: d.Closed }) }, C({ ourProps: f2, theirProps: s3, slot: A, defaultTag: Ie, name: "Menu" })));
}
var ge = "button";
function Re(e, u5) {
  var R;
  let r2 = I(), { id: s3 = `headlessui-menu-button-${r2}`, ...i2 } = e, [t2, o8] = C2("Menu.Button"), a2 = y2(t2.buttonRef, u5), l3 = p(), m2 = o((p2) => {
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
  }), I3 = o((p2) => {
    switch (p2.key) {
      case o4.Space:
        p2.preventDefault();
        break;
    }
  }), A = o((p2) => {
    if (r(p2.currentTarget))
      return p2.preventDefault();
    e.disabled || (t2.menuState === 0 ? (o8({ type: 1 }), l3.nextFrame(() => {
      var M2;
      return (M2 = t2.buttonRef.current) == null ? void 0 : M2.focus({ preventScroll: true });
    })) : (p2.preventDefault(), o8({ type: 0 })));
  }), f2 = (0, import_react5.useMemo)(() => ({ open: t2.menuState === 0 }), [t2]), g2 = { ref: a2, id: s3, type: T2(e, t2.buttonRef), "aria-haspopup": "menu", "aria-controls": (R = t2.itemsRef.current) == null ? void 0 : R.id, "aria-expanded": t2.menuState === 0, onKeyDown: m2, onKeyUp: I3, onClick: A };
  return C({ ourProps: g2, theirProps: i2, slot: f2, defaultTag: ge, name: "Menu.Button" });
}
var Ae = "div";
var be = O.RenderStrategy | O.Static;
function Ee(e, u5) {
  var M2, b;
  let r2 = I(), { id: s3 = `headlessui-menu-items-${r2}`, ...i2 } = e, [t2, o8] = C2("Menu.Items"), a2 = y2(t2.itemsRef, u5), l3 = n(t2.itemsRef), m2 = p(), I3 = u2(), A = (() => I3 !== null ? (I3 & d.Open) === d.Open : t2.menuState === 0)();
  (0, import_react5.useEffect)(() => {
    let n2 = t2.itemsRef.current;
    n2 && t2.menuState === 0 && n2 !== (l3 == null ? void 0 : l3.activeElement) && n2.focus({ preventScroll: true });
  }, [t2.menuState, t2.itemsRef, l3]), F({ container: t2.itemsRef.current, enabled: t2.menuState === 0, accept(n2) {
    return n2.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : n2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(n2) {
    n2.setAttribute("role", "none");
  } });
  let f2 = o((n2) => {
    var E2, x;
    switch (m2.dispose(), n2.key) {
      case o4.Space:
        if (t2.searchQuery !== "")
          return n2.preventDefault(), n2.stopPropagation(), o8({ type: 3, value: n2.key });
      case o4.Enter:
        if (n2.preventDefault(), n2.stopPropagation(), o8({ type: 1 }), t2.activeItemIndex !== null) {
          let { dataRef: S } = t2.items[t2.activeItemIndex];
          (x = (E2 = S.current) == null ? void 0 : E2.domRef.current) == null || x.click();
        }
        D(t2.buttonRef.current);
        break;
      case o4.ArrowDown:
        return n2.preventDefault(), n2.stopPropagation(), o8({ type: 2, focus: c.Next });
      case o4.ArrowUp:
        return n2.preventDefault(), n2.stopPropagation(), o8({ type: 2, focus: c.Previous });
      case o4.Home:
      case o4.PageUp:
        return n2.preventDefault(), n2.stopPropagation(), o8({ type: 2, focus: c.First });
      case o4.End:
      case o4.PageDown:
        return n2.preventDefault(), n2.stopPropagation(), o8({ type: 2, focus: c.Last });
      case o4.Escape:
        n2.preventDefault(), n2.stopPropagation(), o8({ type: 1 }), o2().nextFrame(() => {
          var S;
          return (S = t2.buttonRef.current) == null ? void 0 : S.focus({ preventScroll: true });
        });
        break;
      case o4.Tab:
        n2.preventDefault(), n2.stopPropagation(), o8({ type: 1 }), o2().nextFrame(() => {
          _(t2.buttonRef.current, n2.shiftKey ? M.Previous : M.Next);
        });
        break;
      default:
        n2.key.length === 1 && (o8({ type: 3, value: n2.key }), m2.setTimeout(() => o8({ type: 4 }), 350));
        break;
    }
  }), g2 = o((n2) => {
    switch (n2.key) {
      case o4.Space:
        n2.preventDefault();
        break;
    }
  }), R = (0, import_react5.useMemo)(() => ({ open: t2.menuState === 0 }), [t2]), p2 = { "aria-activedescendant": t2.activeItemIndex === null || (M2 = t2.items[t2.activeItemIndex]) == null ? void 0 : M2.id, "aria-labelledby": (b = t2.buttonRef.current) == null ? void 0 : b.id, id: s3, onKeyDown: f2, onKeyUp: g2, role: "menu", tabIndex: 0, ref: a2 };
  return C({ ourProps: p2, theirProps: i2, slot: R, defaultTag: Ae, features: be, visible: A, name: "Menu.Items" });
}
var Se = import_react5.Fragment;
function xe(e, u5) {
  let r2 = I(), { id: s3 = `headlessui-menu-item-${r2}`, disabled: i2 = false, ...t2 } = e, [o8, a2] = C2("Menu.Item"), l3 = o8.activeItemIndex !== null ? o8.items[o8.activeItemIndex].id === s3 : false, m2 = (0, import_react5.useRef)(null), I3 = y2(u5, m2);
  l(() => {
    if (o8.__demoMode || o8.menuState !== 0 || !l3 || o8.activationTrigger === 0)
      return;
    let T3 = o2();
    return T3.requestAnimationFrame(() => {
      var P, B;
      (B = (P = m2.current) == null ? void 0 : P.scrollIntoView) == null || B.call(P, { block: "nearest" });
    }), T3.dispose;
  }, [o8.__demoMode, m2, l3, o8.menuState, o8.activationTrigger, o8.activeItemIndex]);
  let A = s2(m2), f2 = (0, import_react5.useRef)({ disabled: i2, domRef: m2, get textValue() {
    return A();
  } });
  l(() => {
    f2.current.disabled = i2;
  }, [f2, i2]), l(() => (a2({ type: 5, id: s3, dataRef: f2 }), () => a2({ type: 6, id: s3 })), [f2, s3]);
  let g2 = o(() => {
    a2({ type: 1 });
  }), R = o((T3) => {
    if (i2)
      return T3.preventDefault();
    a2({ type: 1 }), D(o8.buttonRef.current);
  }), p2 = o(() => {
    if (i2)
      return a2({ type: 2, focus: c.Nothing });
    a2({ type: 2, focus: c.Specific, id: s3 });
  }), M2 = u3(), b = o((T3) => M2.update(T3)), n2 = o((T3) => {
    M2.wasMoved(T3) && (i2 || l3 || a2({ type: 2, focus: c.Specific, id: s3, trigger: 0 }));
  }), E2 = o((T3) => {
    M2.wasMoved(T3) && (i2 || l3 && a2({ type: 2, focus: c.Nothing }));
  }), x = (0, import_react5.useMemo)(() => ({ active: l3, disabled: i2, close: g2 }), [l3, i2, g2]);
  return C({ ourProps: { id: s3, ref: I3, role: "menuitem", tabIndex: i2 === true ? void 0 : -1, "aria-disabled": i2 === true ? true : void 0, disabled: void 0, onClick: R, onFocus: p2, onPointerEnter: b, onMouseEnter: b, onPointerMove: n2, onMouseMove: n2, onPointerLeave: E2, onMouseLeave: E2 }, theirProps: t2, slot: x, defaultTag: Se, name: "Menu.Item" });
}
var Pe = U(Me);
var ve = U(Re);
var he = U(Ee);
var De = U(xe);
var qe2 = Object.assign(Pe, { Button: ve, Items: he, Item: De });

// app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx
var import_react7 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx"
  );
  import.meta.hot.lastModified = "1710506976274.3171";
}
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
var MobileSideBarButton = ({
  navigation: navigation2,
  teams: teams2,
  showNavigations
}) => {
  _s();
  const [sidebarOpen, setSidebarOpen] = (0, import_react7.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MobileSideBar, { showNavigations, sidebarOpen, setSidebarOpen, navigation: navigation2, teams: teams2 }, void 0, false, {
      fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "-m-2.5 p-2.5 text-gray-700 lg:hidden", onClick: () => setSidebarOpen(true), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open sidebar" }, void 0, false, {
        fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
        lineNumber: 38,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bars3Icon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
        lineNumber: 39,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
};
_s(MobileSideBarButton, "5rGDkYpGQ8fHM9RkMWnKOwsxadk=");
_c = MobileSideBarButton;
var MobileSideBar = ({
  sidebarOpen,
  setSidebarOpen,
  navigation: navigation2,
  teams: teams2,
  showNavigations
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(qe.Root, { show: sidebarOpen, as: import_react7.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t, { as: "div", className: "relative z-50 lg:hidden", onClose: setSidebarOpen, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(qe.Child, { as: import_react7.Fragment, enter: "transition-opacity ease-linear duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "transition-opacity ease-linear duration-300", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 bg-gray-900/80" }, void 0, false, {
      fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
      lineNumber: 55,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
      lineNumber: 54,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(qe.Child, { as: import_react7.Fragment, enter: "transition ease-in-out duration-300 transform", enterFrom: "-translate-x-full", enterTo: "translate-x-0", leave: "transition ease-in-out duration-300 transform", leaveFrom: "translate-x-0", leaveTo: "-translate-x-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t.Panel, { className: "relative mr-16 flex w-full max-w-xs flex-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(qe.Child, { as: import_react7.Fragment, enter: "ease-in-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in-out duration-300", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute left-full top-0 flex w-16 justify-center pt-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "-m-2.5 p-2.5", onClick: () => setSidebarOpen(false), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Close sidebar" }, void 0, false, {
          fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
          lineNumber: 64,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6 text-white", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
          lineNumber: 65,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
        lineNumber: 63,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
        lineNumber: 62,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
        lineNumber: 61,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-16 shrink-0 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "h-8 w-auto", src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600", alt: "Your Company" }, void 0, false, {
          fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
          lineNumber: 72,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
          lineNumber: 71,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "flex flex-1 flex-col gap-y-7", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "-mx-2 space-y-1", children: navigation2.filter((item) => showNavigations.includes(item.name)).map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: item.href, className: classNames(item.current ? "bg-gray-50 text-indigo-600" : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50", "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(item.icon, { className: classNames(item.current ? "text-indigo-600" : "text-gray-400 group-hover:text-indigo-600", "h-6 w-6 shrink-0"), "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
              lineNumber: 80,
              columnNumber: 65
            }, this),
            item.name
          ] }, void 0, true, {
            fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
            lineNumber: 79,
            columnNumber: 61
          }, this) }, item.name, false, {
            fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
            lineNumber: 78,
            columnNumber: 125
          }, this)) }, void 0, false, {
            fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
            lineNumber: 77,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
            lineNumber: 76,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold leading-6 text-gray-400", children: "Your teams" }, void 0, false, {
              fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
              lineNumber: 87,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "-mx-2 mt-2 space-y-1", children: teams2.map((team) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: team.href, className: classNames(team.current ? "bg-gray-50 text-indigo-600" : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50", "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"), children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: classNames(team.current ? "text-indigo-600 border-indigo-600" : "text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600", "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white"), children: team.initial }, void 0, false, {
                fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
                lineNumber: 91,
                columnNumber: 61
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "truncate", children: team.name }, void 0, false, {
                fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
                lineNumber: 94,
                columnNumber: 61
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
              lineNumber: 90,
              columnNumber: 57
            }, this) }, team.name, false, {
              fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
              lineNumber: 89,
              columnNumber: 68
            }, this)) }, void 0, false, {
              fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
              lineNumber: 88,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
            lineNumber: 86,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "mt-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cog6ToothIcon_default, { className: "h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
              lineNumber: 101,
              columnNumber: 49
            }, this),
            "Settings"
          ] }, void 0, true, {
            fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
            lineNumber: 100,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
            lineNumber: 99,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
          lineNumber: 75,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
          lineNumber: 74,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
        lineNumber: 70,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
      lineNumber: 60,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
      lineNumber: 59,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
      lineNumber: 58,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
    lineNumber: 53,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/dashboard+/dashboardLayoutComponents/mobileSideBar.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
};
_c2 = MobileSideBar;
var _c;
var _c2;
$RefreshReg$(_c, "MobileSideBarButton");
$RefreshReg$(_c2, "MobileSideBar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/dashboard+/dashboardLayoutComponents/navbar.tsx
var import_react9 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard+/dashboardLayoutComponents/navbar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard+/dashboardLayoutComponents/navbar.tsx"
  );
  import.meta.hot.lastModified = "1710506976274.3171";
}
var userNavigation = [{
  name: "Your profile",
  href: "#"
}, {
  name: "Sign out",
  href: "/auth/logout"
}];
function classNames2(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Navbar({
  user
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-1 gap-x-4 self-stretch lg:gap-x-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { className: "relative flex flex-1", action: "#", method: "GET", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { htmlFor: "search-field", className: "sr-only", children: "Search" }, void 0, false, {
        fileName: "app/routes/dashboard+/dashboardLayoutComponents/navbar.tsx",
        lineNumber: 39,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MagnifyingGlassIcon_default, { className: "pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/routes/dashboard+/dashboardLayoutComponents/navbar.tsx",
        lineNumber: 42,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { id: "search-field", className: "block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm", placeholder: "Search...", type: "search", name: "search" }, void 0, false, {
        fileName: "app/routes/dashboard+/dashboardLayoutComponents/navbar.tsx",
        lineNumber: 43,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard+/dashboardLayoutComponents/navbar.tsx",
      lineNumber: 38,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center gap-x-4 lg:gap-x-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/routes/dashboard+/dashboardLayoutComponents/navbar.tsx",
        lineNumber: 49,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe2, { as: "div", className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe2.Button, { className: "-m-1.5 flex items-center p-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Open user menu" }, void 0, false, {
            fileName: "app/routes/dashboard+/dashboardLayoutComponents/navbar.tsx",
            lineNumber: 54,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { className: "h-8 w-8 rounded-full bg-gray-50", src: user?.image.url, alt: "" }, void 0, false, {
            fileName: "app/routes/dashboard+/dashboardLayoutComponents/navbar.tsx",
            lineNumber: 55,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "hidden lg:flex lg:items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "ml-4 text-sm font-semibold leading-6 text-gray-900", "aria-hidden": "true", children: user?.name }, void 0, false, {
              fileName: "app/routes/dashboard+/dashboardLayoutComponents/navbar.tsx",
              lineNumber: 57,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronDownIcon_default, { className: "ml-2 h-5 w-5 text-gray-400", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/dashboard+/dashboardLayoutComponents/navbar.tsx",
              lineNumber: 60,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/dashboard+/dashboardLayoutComponents/navbar.tsx",
            lineNumber: 56,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard+/dashboardLayoutComponents/navbar.tsx",
          lineNumber: 53,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe, { as: import_react9.Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe2.Items, { className: "absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none", children: userNavigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(qe2.Item, { children: ({
          active
        }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: item.href, className: classNames2(active ? "bg-gray-50" : "", "block px-3 py-1 text-sm leading-6 text-gray-900"), children: item.name }, void 0, false, {
          fileName: "app/routes/dashboard+/dashboardLayoutComponents/navbar.tsx",
          lineNumber: 68,
          columnNumber: 21
        }, this) }, item.name, false, {
          fileName: "app/routes/dashboard+/dashboardLayoutComponents/navbar.tsx",
          lineNumber: 65,
          columnNumber: 57
        }, this)) }, void 0, false, {
          fileName: "app/routes/dashboard+/dashboardLayoutComponents/navbar.tsx",
          lineNumber: 64,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard+/dashboardLayoutComponents/navbar.tsx",
          lineNumber: 63,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard+/dashboardLayoutComponents/navbar.tsx",
        lineNumber: 52,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard+/dashboardLayoutComponents/navbar.tsx",
      lineNumber: 45,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard+/dashboardLayoutComponents/navbar.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_c3 = Navbar;
var _c3;
$RefreshReg$(_c3, "Navbar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
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
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx"
  );
  import.meta.hot.lastModified = "1710506976274.3171";
}
function classNames3(...classes) {
  return classes.filter(Boolean).join(" ");
}
var SideBar = ({
  navigation: navigation2,
  teams: teams2,
  showNavigations,
  projects,
  currentProject,
  setCurrentProject
}) => {
  _s2();
  const navigate = useNavigate();
  console.log("navigation", navigation2);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex h-16 shrink-0 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "h-8 w-auto", src: "/logow.png", alt: "Your Company" }, void 0, false, {
      fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
      lineNumber: 43,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
      lineNumber: 42,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { role: "list", className: "flex flex-1 flex-col gap-y-7", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { role: "list", className: "-mx-2 space-y-1", children: navigation2.filter((item) => showNavigations.includes(item.name)).map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: item.href, className: classNames3(item.current ? "bg-gray-50 text-slate-600" : "text-gray-700 hover:text-slate-600 hover:bg-gray-50", "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(item.icon, { className: classNames3(item.current ? "text-slate-600" : "text-gray-400 group-hover:text-slate-600", "h-6 w-6 shrink-0"), "aria-hidden": "true" }, void 0, false, {
          fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
          lineNumber: 52,
          columnNumber: 49
        }, this),
        item.name
      ] }, void 0, true, {
        fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
        lineNumber: 51,
        columnNumber: 45
      }, this) }, item.name, false, {
        fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
        lineNumber: 50,
        columnNumber: 109
      }, this)) }, void 0, false, {
        fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
        lineNumber: 49,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
        lineNumber: 48,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-xs font-semibold leading-6 text-gray-400", children: "Your teams" }, void 0, false, {
          fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
          lineNumber: 59,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { role: "list", className: "-mx-2 mt-2 space-y-1", children: teams2.map((team) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: team.href, className: classNames3(team.current ? "bg-gray-50 text-slate-600" : "text-gray-700 hover:text-slate-600 hover:bg-gray-50", "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: classNames3(team.current ? "text-slate-600 border-slate-600" : "text-gray-400 border-gray-200 group-hover:border-slate-600 group-hover:text-slate-600", "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white"), children: team.initial }, void 0, false, {
            fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
            lineNumber: 63,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "truncate", children: team.name }, void 0, false, {
            fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
            lineNumber: 66,
            columnNumber: 45
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
          lineNumber: 62,
          columnNumber: 41
        }, this) }, team.name, false, {
          fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
          lineNumber: 61,
          columnNumber: 52
        }, this)) }, void 0, false, {
          fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
          lineNumber: 60,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
        lineNumber: 58,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "mt-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#", className: "group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-slate-600", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Cog6ToothIcon_default, { className: "h-6 w-6 shrink-0 text-gray-400 group-hover:text-slate-600", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
          lineNumber: 73,
          columnNumber: 33
        }, this),
        "Settings"
      ] }, void 0, true, {
        fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
        lineNumber: 72,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
        lineNumber: 71,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
      lineNumber: 46,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
      lineNumber: 45,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
    lineNumber: 41,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/dashboard+/dashboardLayoutComponents/sideBar.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
};
_s2(SideBar, "CzcTeTziyjMsSrAVmHuCCb6+Bfg=", false, function() {
  return [useNavigate];
});
_c4 = SideBar;
var _c4;
$RefreshReg$(_c4, "SideBar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/dashboard.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
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
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard.tsx"
  );
  import.meta.hot.lastModified = "1710506976278.3171";
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
  href: "#",
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
function Example() {
  _s3();
  const {
    user,
    navigations,
    projects,
    current
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SideBar, { navigation, teams, showNavigations: navigations, projects, currentProject: current, setCurrentProject: () => {
      console.log("set current project");
    } }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 111,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "lg:pl-72", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "sticky top-0 z-40 \n                    flex h-16 shrink-0 items-center gap-x-4 border-b\n                     border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(MobileSideBarButton, { navigation, showNavigations: navigations, teams }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 118,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "h-6 w-px bg-gray-200 lg:hidden", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 121,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Navbar, { user }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 123,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 115,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 127,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 126,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 114,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 108,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 106,
    columnNumber: 10
  }, this);
}
_s3(Example, "PdiOMPxpwQc55KoAH95KWNKSIK4=", false, function() {
  return [useLoaderData];
});
_c5 = Example;
var _c5;
$RefreshReg$(_c5, "Example");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Example as default
};
//# sourceMappingURL=/build/routes/dashboard-7ENZTLC5.js.map
