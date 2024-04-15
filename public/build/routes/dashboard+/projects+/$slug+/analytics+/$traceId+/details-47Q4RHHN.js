import {
  require_moment
} from "/build/_shared/chunk-YZYPWNAG.js";
import {
  useLoaderData
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

// app/routes/dashboard+/projects+/$slug+/analytics+/$traceId+/details.tsx
var import_moment = __toESM(require_moment(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard+/projects+/$slug+/analytics+/$traceId+/details.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard+/projects+/$slug+/analytics+/$traceId+/details.tsx"
  );
  import.meta.hot.lastModified = "1713162644589.482";
}
function Analytics() {
  _s();
  const traces = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: traces.traces.map((trace) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: trace.name }, void 0, false, {
      fileName: "app/routes/dashboard+/projects+/$slug+/analytics+/$traceId+/details.tsx",
      lineNumber: 46,
      columnNumber: 29
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: (0, import_moment.default)(trace.startTimeUnixNano / 1e6).format("DD-MM-YYYY, h:mm:ss a") }, void 0, false, {
      fileName: "app/routes/dashboard+/projects+/$slug+/analytics+/$traceId+/details.tsx",
      lineNumber: 47,
      columnNumber: 29
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: (0, import_moment.default)(trace.endTimeUnixNano / 1e6).format("DD-MM-YYYY, h:mm:ss a") }, void 0, false, {
      fileName: "app/routes/dashboard+/projects+/$slug+/analytics+/$traceId+/details.tsx",
      lineNumber: 48,
      columnNumber: 29
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard+/projects+/$slug+/analytics+/$traceId+/details.tsx",
    lineNumber: 45,
    columnNumber: 25
  }, this) }, trace.traceId, false, {
    fileName: "app/routes/dashboard+/projects+/$slug+/analytics+/$traceId+/details.tsx",
    lineNumber: 44,
    columnNumber: 45
  }, this)) }, void 0, false, {
    fileName: "app/routes/dashboard+/projects+/$slug+/analytics+/$traceId+/details.tsx",
    lineNumber: 43,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/dashboard+/projects+/$slug+/analytics+/$traceId+/details.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}
_s(Analytics, "YD0rUnu8Lc74l7cNn3DWzqXp+gY=", false, function() {
  return [useLoaderData];
});
_c = Analytics;
var _c;
$RefreshReg$(_c, "Analytics");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Analytics as default
};
//# sourceMappingURL=/build/routes/dashboard+/projects+/$slug+/analytics+/$traceId+/details-47Q4RHHN.js.map
