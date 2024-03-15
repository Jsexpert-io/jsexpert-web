import {
  C,
  O,
  U,
  d,
  f,
  l,
  l2,
  o,
  o2,
  p,
  s,
  s2,
  t,
  u,
  u2,
  v,
  y2 as y
} from "/build/_shared/chunk-WCAGU2R2.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@headlessui/react/dist/components/transitions/transition.js
var import_react2 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-flags.js
var import_react = __toESM(require_react(), 1);
function c(a = 0) {
  let [l4, r] = (0, import_react.useState)(a), t2 = f(), o3 = (0, import_react.useCallback)((e) => {
    t2.current && r((u3) => u3 | e);
  }, [l4, t2]), m2 = (0, import_react.useCallback)((e) => Boolean(l4 & e), [l4]), s3 = (0, import_react.useCallback)((e) => {
    t2.current && r((u3) => u3 & ~e);
  }, [r, t2]), g2 = (0, import_react.useCallback)((e) => {
    t2.current && r((u3) => u3 ^ e);
  }, [r]);
  return { flags: l4, addFlag: o3, hasFlag: m2, removeFlag: s3, toggleFlag: g2 };
}

// node_modules/@headlessui/react/dist/utils/once.js
function l3(r) {
  let e = { called: false };
  return (...t2) => {
    if (!e.called)
      return e.called = true, r(...t2);
  };
}

// node_modules/@headlessui/react/dist/components/transitions/utils/transition.js
function g(t2, ...e) {
  t2 && e.length > 0 && t2.classList.add(...e);
}
function v2(t2, ...e) {
  t2 && e.length > 0 && t2.classList.remove(...e);
}
function b(t2, e) {
  let n2 = o2();
  if (!t2)
    return n2.dispose;
  let { transitionDuration: m2, transitionDelay: a } = getComputedStyle(t2), [u3, p2] = [m2, a].map((l4) => {
    let [r = 0] = l4.split(",").filter(Boolean).map((i) => i.includes("ms") ? parseFloat(i) : parseFloat(i) * 1e3).sort((i, T) => T - i);
    return r;
  }), o3 = u3 + p2;
  if (o3 !== 0) {
    n2.group((r) => {
      r.setTimeout(() => {
        e(), r.dispose();
      }, o3), r.addEventListener(t2, "transitionrun", (i) => {
        i.target === i.currentTarget && r.dispose();
      });
    });
    let l4 = n2.addEventListener(t2, "transitionend", (r) => {
      r.target === r.currentTarget && (e(), l4());
    });
  } else
    e();
  return n2.add(() => e()), n2.dispose;
}
function M(t2, e, n2, m2) {
  let a = n2 ? "enter" : "leave", u3 = o2(), p2 = m2 !== void 0 ? l3(m2) : () => {
  };
  a === "enter" && (t2.removeAttribute("hidden"), t2.style.display = "");
  let o3 = u(a, { enter: () => e.enter, leave: () => e.leave }), l4 = u(a, { enter: () => e.enterTo, leave: () => e.leaveTo }), r = u(a, { enter: () => e.enterFrom, leave: () => e.leaveFrom });
  return v2(t2, ...e.base, ...e.enter, ...e.enterTo, ...e.enterFrom, ...e.leave, ...e.leaveFrom, ...e.leaveTo, ...e.entered), g(t2, ...e.base, ...o3, ...r), u3.nextFrame(() => {
    v2(t2, ...e.base, ...o3, ...r), g(t2, ...e.base, ...o3, ...l4), b(t2, () => (v2(t2, ...e.base, ...o3), g(t2, ...e.base, ...e.entered), p2()));
  }), u3.dispose;
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
function D({ immediate: t2, container: s3, direction: n2, classes: u3, onStart: a, onStop: c3 }) {
  let l4 = f(), d2 = p(), e = s(n2);
  l(() => {
    t2 && (e.current = "enter");
  }, [t2]), l(() => {
    let r = o2();
    d2.add(r.dispose);
    let i = s3.current;
    if (i && e.current !== "idle" && l4.current)
      return r.dispose(), a.current(e.current), r.add(M(i, u3.current, e.current === "enter", () => {
        r.dispose(), c3.current(e.current);
      })), r.dispose;
  }, [n2]);
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
function S(t2 = "") {
  return t2.split(/\s+/).filter((n2) => n2.length > 1);
}
var I = (0, import_react2.createContext)(null);
I.displayName = "TransitionContext";
var Se = ((r) => (r.Visible = "visible", r.Hidden = "hidden", r))(Se || {});
function ye() {
  let t2 = (0, import_react2.useContext)(I);
  if (t2 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t2;
}
function xe() {
  let t2 = (0, import_react2.useContext)(M2);
  if (t2 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t2;
}
var M2 = (0, import_react2.createContext)(null);
M2.displayName = "NestingContext";
function U2(t2) {
  return "children" in t2 ? U2(t2.children) : t2.current.filter(({ el: n2 }) => n2.current !== null).filter(({ state: n2 }) => n2 === "visible").length > 0;
}
function se(t2, n2) {
  let r = s(t2), s3 = (0, import_react2.useRef)([]), R = f(), D2 = p(), p2 = o((i, e = v.Hidden) => {
    let a = s3.current.findIndex(({ el: o3 }) => o3 === i);
    a !== -1 && (u(e, { [v.Unmount]() {
      s3.current.splice(a, 1);
    }, [v.Hidden]() {
      s3.current[a].state = "hidden";
    } }), D2.microTask(() => {
      var o3;
      !U2(s3) && R.current && ((o3 = r.current) == null || o3.call(r));
    }));
  }), x = o((i) => {
    let e = s3.current.find(({ el: a }) => a === i);
    return e ? e.state !== "visible" && (e.state = "visible") : s3.current.push({ el: i, state: "visible" }), () => p2(i, v.Unmount);
  }), h = (0, import_react2.useRef)([]), v3 = (0, import_react2.useRef)(Promise.resolve()), u3 = (0, import_react2.useRef)({ enter: [], leave: [], idle: [] }), g2 = o((i, e, a) => {
    h.current.splice(0), n2 && (n2.chains.current[e] = n2.chains.current[e].filter(([o3]) => o3 !== i)), n2 == null || n2.chains.current[e].push([i, new Promise((o3) => {
      h.current.push(o3);
    })]), n2 == null || n2.chains.current[e].push([i, new Promise((o3) => {
      Promise.all(u3.current[e].map(([f3, N]) => N)).then(() => o3());
    })]), e === "enter" ? v3.current = v3.current.then(() => n2 == null ? void 0 : n2.wait.current).then(() => a(e)) : a(e);
  }), d2 = o((i, e, a) => {
    Promise.all(u3.current[e].splice(0).map(([o3, f3]) => f3)).then(() => {
      var o3;
      (o3 = h.current.shift()) == null || o3();
    }).then(() => a(e));
  });
  return (0, import_react2.useMemo)(() => ({ children: s3, register: x, unregister: p2, onStart: g2, onStop: d2, wait: v3, chains: u3 }), [x, p2, s3, g2, d2, u3, v3]);
}
function Ne() {
}
var Pe = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function ae(t2) {
  var r;
  let n2 = {};
  for (let s3 of Pe)
    n2[s3] = (r = t2[s3]) != null ? r : Ne;
  return n2;
}
function Re(t2) {
  let n2 = (0, import_react2.useRef)(ae(t2));
  return (0, import_react2.useEffect)(() => {
    n2.current = ae(t2);
  }, [t2]), n2;
}
var De = "div";
var le = O.RenderStrategy;
function He(t2, n2) {
  var Q, Y;
  let { beforeEnter: r, afterEnter: s3, beforeLeave: R, afterLeave: D2, enter: p2, enterFrom: x, enterTo: h, entered: v3, leave: u3, leaveFrom: g2, leaveTo: d2, ...i } = t2, e = (0, import_react2.useRef)(null), a = y(e, n2), o3 = (Q = i.unmount) == null || Q ? v.Unmount : v.Hidden, { show: f3, appear: N, initial: T } = ye(), [l4, j] = (0, import_react2.useState)(f3 ? "visible" : "hidden"), z = xe(), { register: L, unregister: O2 } = z;
  (0, import_react2.useEffect)(() => L(e), [L, e]), (0, import_react2.useEffect)(() => {
    if (o3 === v.Hidden && e.current) {
      if (f3 && l4 !== "visible") {
        j("visible");
        return;
      }
      return u(l4, { ["hidden"]: () => O2(e), ["visible"]: () => L(e) });
    }
  }, [l4, e, L, O2, f3, o3]);
  let k = s({ base: S(i.className), enter: S(p2), enterFrom: S(x), enterTo: S(h), entered: S(v3), leave: S(u3), leaveFrom: S(g2), leaveTo: S(d2) }), V = Re({ beforeEnter: r, afterEnter: s3, beforeLeave: R, afterLeave: D2 }), G = l2();
  (0, import_react2.useEffect)(() => {
    if (G && l4 === "visible" && e.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [e, l4, G]);
  let Te = T && !N, K = N && f3 && T, de = (() => !G || Te ? "idle" : f3 ? "enter" : "leave")(), H = c(0), fe = o((C2) => u(C2, { enter: () => {
    H.addFlag(d.Opening), V.current.beforeEnter();
  }, leave: () => {
    H.addFlag(d.Closing), V.current.beforeLeave();
  }, idle: () => {
  } })), me = o((C2) => u(C2, { enter: () => {
    H.removeFlag(d.Opening), V.current.afterEnter();
  }, leave: () => {
    H.removeFlag(d.Closing), V.current.afterLeave();
  }, idle: () => {
  } })), w = se(() => {
    j("hidden"), O2(e);
  }, z), B = (0, import_react2.useRef)(false);
  D({ immediate: K, container: e, classes: k, direction: de, onStart: s((C2) => {
    B.current = true, w.onStart(e, C2, fe);
  }), onStop: s((C2) => {
    B.current = false, w.onStop(e, C2, me), C2 === "leave" && !U2(w) && (j("hidden"), O2(e));
  }) });
  let P = i, ce = { ref: a };
  return K ? P = { ...P, className: t(i.className, ...k.current.enter, ...k.current.enterFrom) } : B.current && (P.className = t(i.className, (Y = e.current) == null ? void 0 : Y.className), P.className === "" && delete P.className), import_react2.default.createElement(M2.Provider, { value: w }, import_react2.default.createElement(s2, { value: u(l4, { ["visible"]: d.Open, ["hidden"]: d.Closed }) | H.flags }, C({ ourProps: ce, theirProps: P, defaultTag: De, features: le, visible: l4 === "visible", name: "Transition.Child" })));
}
function Fe(t2, n2) {
  let { show: r, appear: s3 = false, unmount: R = true, ...D2 } = t2, p2 = (0, import_react2.useRef)(null), x = y(p2, n2);
  l2();
  let h = u2();
  if (r === void 0 && h !== null && (r = (h & d.Open) === d.Open), ![true, false].includes(r))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [v3, u3] = (0, import_react2.useState)(r ? "visible" : "hidden"), g2 = se(() => {
    u3("hidden");
  }), [d2, i] = (0, import_react2.useState)(true), e = (0, import_react2.useRef)([r]);
  l(() => {
    d2 !== false && e.current[e.current.length - 1] !== r && (e.current.push(r), i(false));
  }, [e, r]);
  let a = (0, import_react2.useMemo)(() => ({ show: r, appear: s3, initial: d2 }), [r, s3, d2]);
  (0, import_react2.useEffect)(() => {
    if (r)
      u3("visible");
    else if (!U2(g2))
      u3("hidden");
    else {
      let T = p2.current;
      if (!T)
        return;
      let l4 = T.getBoundingClientRect();
      l4.x === 0 && l4.y === 0 && l4.width === 0 && l4.height === 0 && u3("hidden");
    }
  }, [r, g2]);
  let o3 = { unmount: R }, f3 = o(() => {
    var T;
    d2 && i(false), (T = t2.beforeEnter) == null || T.call(t2);
  }), N = o(() => {
    var T;
    d2 && i(false), (T = t2.beforeLeave) == null || T.call(t2);
  });
  return import_react2.default.createElement(M2.Provider, { value: g2 }, import_react2.default.createElement(I.Provider, { value: a }, C({ ourProps: { ...o3, as: import_react2.Fragment, children: import_react2.default.createElement(ue, { ref: x, ...o3, ...D2, beforeEnter: f3, beforeLeave: N }) }, theirProps: {}, defaultTag: import_react2.Fragment, features: le, visible: v3 === "visible", name: "Transition" })));
}
function _e(t2, n2) {
  let r = (0, import_react2.useContext)(I) !== null, s3 = u2() !== null;
  return import_react2.default.createElement(import_react2.default.Fragment, null, !r && s3 ? import_react2.default.createElement(q, { ref: n2, ...t2 }) : import_react2.default.createElement(ue, { ref: n2, ...t2 }));
}
var q = U(Fe);
var ue = U(He);
var Le = U(_e);
var qe = Object.assign(q, { Child: Le, Root: q });

export {
  qe
};
//# sourceMappingURL=/build/_shared/chunk-EHNHN7LZ.js.map
