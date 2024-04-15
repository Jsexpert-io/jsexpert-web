import {
  Outlet
} from "/build/_shared/chunk-LAE4N3SI.js";
import "/build/_shared/chunk-WEAPBHQG.js";
import {
  createHotContext
} from "/build/_shared/chunk-LJW5VNMI.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-7PHB3BFD.js";
import "/build/_shared/chunk-CJ4MY3PQ.js";
import "/build/_shared/chunk-JR22VO6P.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/dashboard+/projects+/$slug+/analytics.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard+/projects+/$slug+/analytics.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard+/projects+/$slug+/analytics.tsx"
  );
  import.meta.hot.lastModified = "1713162425935.961";
}
function Analytics() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/routes/dashboard+/projects+/$slug+/analytics.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c = Analytics;
var _c;
$RefreshReg$(_c, "Analytics");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Analytics as default
};
//# sourceMappingURL=/build/routes/dashboard+/projects+/$slug+/analytics-WUU2WRH6.js.map
