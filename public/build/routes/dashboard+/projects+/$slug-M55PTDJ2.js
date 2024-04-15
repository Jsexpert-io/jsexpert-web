import {
  Bars2Icon_default
} from "/build/_shared/chunk-VA6DG662.js";
import {
  require_project
} from "/build/_shared/chunk-ZG5R5SPC.js";
import {
  require_auth
} from "/build/_shared/chunk-IIJR6JWD.js";
import {
  CircleStackIcon_default,
  TrashIcon_default,
  TvIcon_default,
  UsersIcon_default
} from "/build/_shared/chunk-7K3LRQSG.js";
import {
  Link,
  Outlet,
  useLoaderData,
  useLocation
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

// app/components/projects/projectDetails/projectMenuItems.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/projects/projectDetails/projectMenuItems.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/projects/projectDetails/projectMenuItems.tsx"
  );
  import.meta.hot.lastModified = "1713000535334.4854";
}
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Example({
  project,
  currentTab
}) {
  const navigation = [{
    name: "Analytics",
    href: `/dashboard/projects/${project.slug}/analytics`,
    icon: Bars2Icon_default,
    current: currentTab === "analytics"
  }, {
    name: "Insights",
    href: `/dashboard/projects/${project.slug}/insights`,
    icon: CircleStackIcon_default,
    current: currentTab === "insights"
  }, {
    name: "Endpoints",
    href: `/dashboard/projects/${project.slug}/endpoints`,
    icon: TvIcon_default,
    current: currentTab === "endpoints"
  }];
  const teams = [{
    name: "Billing",
    initial: "B",
    href: `/dashboard/projects/${project.slug}/billing`,
    icon: UsersIcon_default,
    current: currentTab === "billing"
  }, {
    name: "Settings",
    initial: "S",
    href: `/dashboard/projects/${project.slug}/settings`,
    icon: UsersIcon_default,
    current: currentTab === "settings"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex grow flex-col gap-y-8 overflow-y-auto border-r border-gray-200 bg-white px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex flex-1 flex-col gap-y-7", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold leading-6 text-gray-400", children: "Project Insights" }, void 0, false, {
        fileName: "app/components/projects/projectDetails/projectMenuItems.tsx",
        lineNumber: 66,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "-mx-2 space-y-1", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: item.href, className: classNames(item.current ? "bg-gray-50 text-indigo-600" : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50", "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(item.icon, { className: classNames(item.current ? "text-indigo-600" : "text-gray-400 group-hover:text-indigo-600", "h-6 w-6 shrink-0"), "aria-hidden": "true" }, void 0, false, {
          fileName: "app/components/projects/projectDetails/projectMenuItems.tsx",
          lineNumber: 70,
          columnNumber: 41
        }, this),
        item.name,
        item.count ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-gray-600 ring-1 ring-inset ring-gray-200", "aria-hidden": "true", children: item.count }, void 0, false, {
          fileName: "app/components/projects/projectDetails/projectMenuItems.tsx",
          lineNumber: 72,
          columnNumber: 55
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/components/projects/projectDetails/projectMenuItems.tsx",
        lineNumber: 69,
        columnNumber: 37
      }, this) }, item.name, false, {
        fileName: "app/components/projects/projectDetails/projectMenuItems.tsx",
        lineNumber: 68,
        columnNumber: 53
      }, this)) }, void 0, false, {
        fileName: "app/components/projects/projectDetails/projectMenuItems.tsx",
        lineNumber: 67,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/projects/projectDetails/projectMenuItems.tsx",
      lineNumber: 64,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xs font-semibold leading-6 text-gray-400", children: "Your teams" }, void 0, false, {
        fileName: "app/components/projects/projectDetails/projectMenuItems.tsx",
        lineNumber: 80,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "-mx-2 mt-2 space-y-1", children: teams.map((team) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: team.href, className: classNames(team.current ? "bg-gray-50 text-indigo-600" : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50", "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: classNames(team.current ? "text-indigo-600 border-indigo-600" : "text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600", "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white"), children: team.initial }, void 0, false, {
          fileName: "app/components/projects/projectDetails/projectMenuItems.tsx",
          lineNumber: 84,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "truncate", children: team.name }, void 0, false, {
          fileName: "app/components/projects/projectDetails/projectMenuItems.tsx",
          lineNumber: 87,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/projects/projectDetails/projectMenuItems.tsx",
        lineNumber: 83,
        columnNumber: 37
      }, this) }, team.name, false, {
        fileName: "app/components/projects/projectDetails/projectMenuItems.tsx",
        lineNumber: 82,
        columnNumber: 48
      }, this)) }, void 0, false, {
        fileName: "app/components/projects/projectDetails/projectMenuItems.tsx",
        lineNumber: 81,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/projects/projectDetails/projectMenuItems.tsx",
      lineNumber: 79,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "w-full mt-auto ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/dashboard/projects?action=delete&projectId=${project.id}`, className: "flex items-center bg-red-400 rounded-md gap-x-4 px-6 py-3\n                             text-sm font-semibold leading-6 text-gray-100 hover:bg-red-600", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrashIcon_default, { className: "h-6 w-6 shrink-0", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/components/projects/projectDetails/projectMenuItems.tsx",
        lineNumber: 96,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "aria-hidden": "true", children: "Delete Project" }, void 0, false, {
        fileName: "app/components/projects/projectDetails/projectMenuItems.tsx",
        lineNumber: 97,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/projects/projectDetails/projectMenuItems.tsx",
      lineNumber: 93,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/projects/projectDetails/projectMenuItems.tsx",
      lineNumber: 92,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/projects/projectDetails/projectMenuItems.tsx",
    lineNumber: 63,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/components/projects/projectDetails/projectMenuItems.tsx",
    lineNumber: 62,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/projects/projectDetails/projectMenuItems.tsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
}
_c = Example;
var _c;
$RefreshReg$(_c, "Example");
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
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard+/projects+/$slug.tsx"
  );
  import.meta.hot.lastModified = "1712996132349.435";
}
function ProjectDetail() {
  _s();
  const {
    project,
    currentTab
  } = useLoaderData();
  const {
    pathname
  } = useLocation();
  const currentTabname = pathname.split("/").pop();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex space-x-4 h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Example, { project, currentTab }, void 0, false, {
      fileName: "app/routes/dashboard+/projects+/$slug.tsx",
      lineNumber: 80,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "w-10/12 p-8  min-h-[85vh] ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/dashboard+/projects+/$slug.tsx",
      lineNumber: 83,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard+/projects+/$slug.tsx",
      lineNumber: 82,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard+/projects+/$slug.tsx",
    lineNumber: 79,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/dashboard+/projects+/$slug.tsx",
    lineNumber: 77,
    columnNumber: 10
  }, this);
}
_s(ProjectDetail, "LGl80+btWBEPntuyYp3/k+geCmE=", false, function() {
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
          lineNumber: 101,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-2 text-sm text-gray-700", children: "Invite your team members to collaborate on this project." }, void 0, false, {
          fileName: "app/routes/dashboard+/projects+/$slug.tsx",
          lineNumber: 102,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard+/projects+/$slug.tsx",
        lineNumber: 100,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-4 sm:ml-16 sm:mt-0 sm:flex-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "?action=addMember", className: "block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", children: "Add user" }, void 0, false, {
        fileName: "app/routes/dashboard+/projects+/$slug.tsx",
        lineNumber: 107,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard+/projects+/$slug.tsx",
        lineNumber: 106,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard+/projects+/$slug.tsx",
      lineNumber: 99,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "border-b border-gray-200 bg-white px-4 py-5 sm:px-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-base font-semibold leading-6 text-gray-900", children: title }, void 0, false, {
      fileName: "app/routes/dashboard+/projects+/$slug.tsx",
      lineNumber: 114,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500", children: description }, void 0, false, {
      fileName: "app/routes/dashboard+/projects+/$slug.tsx",
      lineNumber: 117,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard+/projects+/$slug.tsx",
    lineNumber: 113,
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
//# sourceMappingURL=/build/routes/dashboard+/projects+/$slug-M55PTDJ2.js.map
