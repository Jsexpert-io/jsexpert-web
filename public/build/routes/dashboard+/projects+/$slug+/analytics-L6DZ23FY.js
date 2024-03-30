import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-ZGRPQXWE.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/projects/projectDetails/projectEndpointTable.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/projects/projectDetails/projectEndpointTable.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/projects/projectDetails/projectEndpointTable.tsx"
  );
  import.meta.hot.lastModified = "1711776784244.0498";
}
var people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member"
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member"
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member"
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member"
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member"
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member"
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member"
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member"
  }
  // More people...
];
function ProjectEndpointsTable() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:flex sm:items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:flex-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-base font-semibold leading-6 text-gray-900", children: "Endpoints" }, void 0, false, {
        fileName: "app/components/projects/projectDetails/projectEndpointTable.tsx",
        lineNumber: 69,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-sm text-gray-700" }, void 0, false, {
        fileName: "app/components/projects/projectDetails/projectEndpointTable.tsx",
        lineNumber: 70,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/projects/projectDetails/projectEndpointTable.tsx",
      lineNumber: 68,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/projects/projectDetails/projectEndpointTable.tsx",
      lineNumber: 67,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-300", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "divide-x divide-gray-200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0", children: "Name" }, void 0, false, {
          fileName: "app/components/projects/projectDetails/projectEndpointTable.tsx",
          lineNumber: 82,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-4 py-3.5 text-left text-sm font-semibold text-gray-900", children: "Title" }, void 0, false, {
          fileName: "app/components/projects/projectDetails/projectEndpointTable.tsx",
          lineNumber: 85,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "px-4 py-3.5 text-left text-sm font-semibold text-gray-900", children: "Email" }, void 0, false, {
          fileName: "app/components/projects/projectDetails/projectEndpointTable.tsx",
          lineNumber: 88,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { scope: "col", className: "py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0", children: "Role" }, void 0, false, {
          fileName: "app/components/projects/projectDetails/projectEndpointTable.tsx",
          lineNumber: 91,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/projects/projectDetails/projectEndpointTable.tsx",
        lineNumber: 81,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/components/projects/projectDetails/projectEndpointTable.tsx",
        lineNumber: 80,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { className: "divide-y divide-gray-200 bg-white", children: people.map((person) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "divide-x divide-gray-200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0", children: person.name }, void 0, false, {
          fileName: "app/components/projects/projectDetails/projectEndpointTable.tsx",
          lineNumber: 98,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "whitespace-nowrap p-4 text-sm text-gray-500", children: person.title }, void 0, false, {
          fileName: "app/components/projects/projectDetails/projectEndpointTable.tsx",
          lineNumber: 101,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "whitespace-nowrap p-4 text-sm text-gray-500", children: person.email }, void 0, false, {
          fileName: "app/components/projects/projectDetails/projectEndpointTable.tsx",
          lineNumber: 102,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0", children: person.role }, void 0, false, {
          fileName: "app/components/projects/projectDetails/projectEndpointTable.tsx",
          lineNumber: 103,
          columnNumber: 41
        }, this)
      ] }, person.email, true, {
        fileName: "app/components/projects/projectDetails/projectEndpointTable.tsx",
        lineNumber: 97,
        columnNumber: 55
      }, this)) }, void 0, false, {
        fileName: "app/components/projects/projectDetails/projectEndpointTable.tsx",
        lineNumber: 96,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/projects/projectDetails/projectEndpointTable.tsx",
      lineNumber: 79,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/projects/projectDetails/projectEndpointTable.tsx",
      lineNumber: 78,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/projects/projectDetails/projectEndpointTable.tsx",
      lineNumber: 77,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/projects/projectDetails/projectEndpointTable.tsx",
      lineNumber: 76,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/projects/projectDetails/projectEndpointTable.tsx",
    lineNumber: 66,
    columnNumber: 10
  }, this);
}
_c = ProjectEndpointsTable;
var _c;
$RefreshReg$(_c, "ProjectEndpointsTable");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/dashboard+/projects+/$slug+/analytics.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard+/projects+/$slug+/analytics.tsx"
  );
  import.meta.hot.lastModified = "1711776800904.137";
}
function analytics() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-7xl  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectEndpointsTable, {}, void 0, false, {
    fileName: "app/routes/dashboard+/projects+/$slug+/analytics.tsx",
    lineNumber: 18,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/dashboard+/projects+/$slug+/analytics.tsx",
    lineNumber: 16,
    columnNumber: 9
  }, this);
}
export {
  analytics as default
};
//# sourceMappingURL=/build/routes/dashboard+/projects+/$slug+/analytics-L6DZ23FY.js.map
