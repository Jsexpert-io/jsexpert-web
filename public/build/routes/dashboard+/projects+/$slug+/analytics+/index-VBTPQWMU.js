import {
  require_moment
} from "/build/_shared/chunk-YZYPWNAG.js";
import {
  Link,
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

// app/components/projects/projectDetails/projectTracesTable.tsx
var import_moment = __toESM(require_moment(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/projects/projectDetails/projectTracesTable.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/projects/projectDetails/projectTracesTable.tsx"
  );
  import.meta.hot.lastModified = "1713161326960.354";
}
function ProjectTracesTable({
  traces
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:flex sm:items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:flex-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-base font-semibold leading-6 text-gray-900", children: "Endpoints" }, void 0, false, {
        fileName: "app/components/projects/projectDetails/projectTracesTable.tsx",
        lineNumber: 29,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-sm text-gray-700" }, void 0, false, {
        fileName: "app/components/projects/projectDetails/projectTracesTable.tsx",
        lineNumber: 30,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/projects/projectDetails/projectTracesTable.tsx",
      lineNumber: 28,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/projects/projectDetails/projectTracesTable.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-300", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "divide-x divide-gray-200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0", children: "Name" }, void 0, false, {
          fileName: "app/components/projects/projectDetails/projectTracesTable.tsx",
          lineNumber: 42,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-4 py-3.5 text-left text-sm font-semibold text-gray-900", children: "Duration (milliseconds)" }, void 0, false, {
          fileName: "app/components/projects/projectDetails/projectTracesTable.tsx",
          lineNumber: 45,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-4 py-3.5 text-left text-sm font-semibold text-gray-900", children: "StartTime" }, void 0, false, {
          fileName: "app/components/projects/projectDetails/projectTracesTable.tsx",
          lineNumber: 49,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-4 py-3.5 text-left text-sm font-semibold text-gray-900", children: "EndTime" }, void 0, false, {
          fileName: "app/components/projects/projectDetails/projectTracesTable.tsx",
          lineNumber: 52,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0", children: "Role" }, void 0, false, {
          fileName: "app/components/projects/projectDetails/projectTracesTable.tsx",
          lineNumber: 55,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/projects/projectDetails/projectTracesTable.tsx",
        lineNumber: 41,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/components/projects/projectDetails/projectTracesTable.tsx",
        lineNumber: 40,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { className: "divide-y divide-gray-200 bg-white", children: traces.map((trace) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "divide-x divide-gray-200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: trace.name }, void 0, false, {
            fileName: "app/components/projects/projectDetails/projectTracesTable.tsx",
            lineNumber: 64,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs font-light text-green-800", children: trace.path }, void 0, false, {
            fileName: "app/components/projects/projectDetails/projectTracesTable.tsx",
            lineNumber: 65,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/projects/projectDetails/projectTracesTable.tsx",
          lineNumber: 63,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/components/projects/projectDetails/projectTracesTable.tsx",
          lineNumber: 62,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "whitespace-nowrap p-4 text-sm text-gray-500", children: trace.duration }, void 0, false, {
          fileName: "app/components/projects/projectDetails/projectTracesTable.tsx",
          lineNumber: 69,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "whitespace-nowrap p-4 text-sm text-gray-500", children: (0, import_moment.default)(trace.startTime / 1e6).format("DD-MM-YYYY, h:mm:ss a") }, void 0, false, {
          fileName: "app/components/projects/projectDetails/projectTracesTable.tsx",
          lineNumber: 70,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "whitespace-nowrap p-4 text-sm text-gray-500", children: (0, import_moment.default)(trace.endTime / 1e6).format("DD-MM-YYYY, h:mm:ss a") }, void 0, false, {
          fileName: "app/components/projects/projectDetails/projectTracesTable.tsx",
          lineNumber: 71,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `${trace.traceId}/details`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-indigo-600 hover:text-indigo-900", children: "View More" }, void 0, false, {
          fileName: "app/components/projects/projectDetails/projectTracesTable.tsx",
          lineNumber: 76,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/components/projects/projectDetails/projectTracesTable.tsx",
          lineNumber: 75,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/components/projects/projectDetails/projectTracesTable.tsx",
          lineNumber: 73,
          columnNumber: 41
        }, this)
      ] }, trace.id, true, {
        fileName: "app/components/projects/projectDetails/projectTracesTable.tsx",
        lineNumber: 61,
        columnNumber: 54
      }, this)) }, void 0, false, {
        fileName: "app/components/projects/projectDetails/projectTracesTable.tsx",
        lineNumber: 60,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/projects/projectDetails/projectTracesTable.tsx",
      lineNumber: 39,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/projects/projectDetails/projectTracesTable.tsx",
      lineNumber: 38,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/projects/projectDetails/projectTracesTable.tsx",
      lineNumber: 37,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/projects/projectDetails/projectTracesTable.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/projects/projectDetails/projectTracesTable.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = ProjectTracesTable;
var _c;
$RefreshReg$(_c, "ProjectTracesTable");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/dashboard+/projects+/$slug+/analytics+/index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard+/projects+/$slug+/analytics+/index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard+/projects+/$slug+/analytics+/index.tsx"
  );
  import.meta.hot.lastModified = "1713161624494.402";
}
function Analytics() {
  _s();
  const traces = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-7xl  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectTracesTable, { traces: traces.traces }, void 0, false, {
    fileName: "app/routes/dashboard+/projects+/$slug+/analytics+/index.tsx",
    lineNumber: 42,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/dashboard+/projects+/$slug+/analytics+/index.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}
_s(Analytics, "YD0rUnu8Lc74l7cNn3DWzqXp+gY=", false, function() {
  return [useLoaderData];
});
_c2 = Analytics;
var _c2;
$RefreshReg$(_c2, "Analytics");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Analytics as default
};
//# sourceMappingURL=/build/routes/dashboard+/projects+/$slug+/analytics+/index-VBTPQWMU.js.map
