import {
  require_project
} from "/build/_shared/chunk-FGSXWGNP.js";
import {
  require_auth
} from "/build/_shared/chunk-6F6PMZ7E.js";
import {
  Link,
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
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/projects/projectDetails/projectTabs.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/projects/projectDetails/projectTabs.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/projects/projectDetails/projectTabs.tsx"
  );
  import.meta.hot.lastModified = "1710506976262.3171";
}
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
var allowedTabs = ["details", "members", "settings", "billing"];
function ProjectDetailTabs({
  project
}) {
  _s();
  const {
    pathname
  } = useLocation();
  let currentTabname = pathname.split("/").pop();
  let currentTab = allowedTabs.includes(currentTabname) ? currentTabname : "details";
  console.log("url", pathname, currentTab);
  const tabs = [{
    name: "Analytics",
    href: `/dashboard/projects/${project.slug}/analytics`,
    current: currentTab === "analytics"
  }, {
    name: "Insights",
    href: `/dashboard/projects/${project.slug}/insights`,
    current: currentTab === "insights"
  }, {
    name: "Endpoints",
    href: `/dashboard/projects/${project.slug}/endpoints`,
    current: currentTab === "endpoints"
  }, {
    name: "Billing",
    href: `/dashboard/projects/${project.slug}/billing`,
    current: currentTab === "billing"
  }, {
    name: "Settings",
    href: `/dashboard/projects/${project.slug}/settings`,
    current: currentTab === "settings"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "tabs", className: "sr-only", children: "Select a tab" }, void 0, false, {
        fileName: "app/components/projects/projectDetails/projectTabs.tsx",
        lineNumber: 75,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "tabs", name: "tabs", className: "block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500", defaultValue: tabs?.find((tab) => tab.current)?.name, children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: tab.name }, tab.name, false, {
        fileName: "app/components/projects/projectDetails/projectTabs.tsx",
        lineNumber: 80,
        columnNumber: 38
      }, this)) }, void 0, false, {
        fileName: "app/components/projects/projectDetails/projectTabs.tsx",
        lineNumber: 79,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/projects/projectDetails/projectTabs.tsx",
      lineNumber: 74,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b border-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "-mb-px flex", "aria-label": "Tabs", children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: tab.href, className: classNames(tab.current ? "border-indigo-500 text-indigo-600" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700", "w-1/4 py-4 px-1 text-center text-sm font-medium border-b-2"), "aria-current": tab.current ? "page" : void 0, children: tab.name }, tab.name, false, {
      fileName: "app/components/projects/projectDetails/projectTabs.tsx",
      lineNumber: 86,
      columnNumber: 42
    }, this)) }, void 0, false, {
      fileName: "app/components/projects/projectDetails/projectTabs.tsx",
      lineNumber: 85,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/projects/projectDetails/projectTabs.tsx",
      lineNumber: 84,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/projects/projectDetails/projectTabs.tsx",
      lineNumber: 83,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/projects/projectDetails/projectTabs.tsx",
    lineNumber: 73,
    columnNumber: 10
  }, this);
}
_s(ProjectDetailTabs, "qVMqkCpYCjknUqSjfMln5RFSkbo=", false, function() {
  return [useLocation];
});
_c = ProjectDetailTabs;
var _c;
$RefreshReg$(_c, "ProjectDetailTabs");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/dashboard+/projects+/$slug.tsx
var import_auth = __toESM(require_auth(), 1);
var import_project = __toESM(require_project(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard+/projects+/$slug.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard+/projects+/$slug.tsx"
  );
  import.meta.hot.lastModified = "1710506976278.3171";
}
function ProjectDetail() {
  _s2();
  const {
    project,
    currentTab
  } = useLoaderData();
  const {
    pathname
  } = useLocation();
  let currentTabname = pathname.split("/").pop();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-auto ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProjectDetailTabs, { project }, void 0, false, {
      fileName: "app/routes/dashboard+/projects+/$slug.tsx",
      lineNumber: 80,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/dashboard+/projects+/$slug.tsx",
      lineNumber: 82,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard+/projects+/$slug.tsx",
      lineNumber: 81,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard+/projects+/$slug.tsx",
    lineNumber: 77,
    columnNumber: 10
  }, this);
}
_s2(ProjectDetail, "LGl80+btWBEPntuyYp3/k+geCmE=", false, function() {
  return [useLoaderData, useLocation];
});
_c2 = ProjectDetail;
var PageHeader = ({
  title,
  description,
  tabName
}) => {
  if (tabName === "members") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "border-b border-gray-200 bg-white px-4 py-5 sm:px-6 sm:flex sm:items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "sm:flex-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-base font-semibold leading-6 text-gray-900", children: "Project Members" }, void 0, false, {
          fileName: "app/routes/dashboard+/projects+/$slug.tsx",
          lineNumber: 98,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-2 text-sm text-gray-700", children: "Invite your team members to collaborate on this project." }, void 0, false, {
          fileName: "app/routes/dashboard+/projects+/$slug.tsx",
          lineNumber: 99,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard+/projects+/$slug.tsx",
        lineNumber: 97,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-4 sm:ml-16 sm:mt-0 sm:flex-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "?action=addMember", className: "block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", children: "Add user" }, void 0, false, {
        fileName: "app/routes/dashboard+/projects+/$slug.tsx",
        lineNumber: 104,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard+/projects+/$slug.tsx",
        lineNumber: 103,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard+/projects+/$slug.tsx",
      lineNumber: 96,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "border-b border-gray-200 bg-white px-4 py-5 sm:px-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-base font-semibold leading-6 text-gray-900", children: title }, void 0, false, {
      fileName: "app/routes/dashboard+/projects+/$slug.tsx",
      lineNumber: 111,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500", children: description }, void 0, false, {
      fileName: "app/routes/dashboard+/projects+/$slug.tsx",
      lineNumber: 114,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard+/projects+/$slug.tsx",
    lineNumber: 110,
    columnNumber: 10
  }, this);
};
_c22 = PageHeader;
var _c2;
var _c22;
$RefreshReg$(_c2, "ProjectDetail");
$RefreshReg$(_c22, "PageHeader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ProjectDetail as default
};
//# sourceMappingURL=/build/routes/dashboard+/projects+/$slug-43OPDOAT.js.map
