import {
  _t
} from "/build/_shared/chunk-AFDGCEUY.js";
import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import {
  qe
} from "/build/_shared/chunk-EF2BYS4Z.js";
import {
  CheckCircleIcon_default,
  XMarkIcon_default as XMarkIcon_default2
} from "/build/_shared/chunk-VA6DG662.js";
import {
  require_project
} from "/build/_shared/chunk-ZG5R5SPC.js";
import {
  require_auth
} from "/build/_shared/chunk-IIJR6JWD.js";
import {
  PencilSquareIcon_default,
  PlusIcon_default,
  TrashIcon_default,
  XMarkIcon_default
} from "/build/_shared/chunk-7K3LRQSG.js";
import {
  Form,
  Link,
  useFetcher,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-LAE4N3SI.js";
import "/build/_shared/chunk-WEAPBHQG.js";
import {
  createHotContext
} from "/build/_shared/chunk-LJW5VNMI.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-7PHB3BFD.js";
import {
  require_react
} from "/build/_shared/chunk-CJ4MY3PQ.js";
import "/build/_shared/chunk-JR22VO6P.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/projects/addProjectForm.tsx
var import_react3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/projects/addProjectForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/projects/addProjectForm.tsx"
  );
  import.meta.hot.lastModified = "1711711034173.0066";
}
function Example({
  open,
  project,
  setOpen
}) {
  console.log("project", open);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(qe.Root, { show: open, as: import_react3.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t, { as: "div", className: "relative z-auto", style: {
    zIndex: 1e3
  }, onClose: setOpen, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0" }, void 0, false, {
      fileName: "app/components/projects/addProjectForm.tsx",
      lineNumber: 35,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(qe.Child, { as: import_react3.Fragment, enter: "transform transition ease-in-out duration-500 sm:duration-700", enterFrom: "translate-x-full", enterTo: "translate-x-0", leave: "transform transition ease-in-out duration-500 sm:duration-700", leaveFrom: "translate-x-0", leaveTo: "translate-x-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t.Panel, { className: "pointer-events-auto w-screen max-w-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", action: "/dashboard/projects", className: "flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", value: project?.id }, void 0, false, {
        fileName: "app/components/projects/addProjectForm.tsx",
        lineNumber: 43,
        columnNumber: 41
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-0 flex-1 overflow-y-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-indigo-700 px-4 py-6 sm:px-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t.Title, { className: "text-base font-semibold leading-6 text-white", children: "New Project" }, void 0, false, {
              fileName: "app/components/projects/addProjectForm.tsx",
              lineNumber: 47,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3 flex h-7 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "relative rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white", onClick: () => setOpen(false), children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute -inset-2.5" }, void 0, false, {
                fileName: "app/components/projects/addProjectForm.tsx",
                lineNumber: 52,
                columnNumber: 61
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Close panel" }, void 0, false, {
                fileName: "app/components/projects/addProjectForm.tsx",
                lineNumber: 53,
                columnNumber: 61
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default2, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
                fileName: "app/components/projects/addProjectForm.tsx",
                lineNumber: 54,
                columnNumber: 61
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/projects/addProjectForm.tsx",
              lineNumber: 51,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/components/projects/addProjectForm.tsx",
              lineNumber: 50,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/projects/addProjectForm.tsx",
            lineNumber: 46,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-indigo-300", children: "Get started by filling in the information below to create your new project." }, void 0, false, {
            fileName: "app/components/projects/addProjectForm.tsx",
            lineNumber: 59,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/components/projects/addProjectForm.tsx",
            lineNumber: 58,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/projects/addProjectForm.tsx",
          lineNumber: 45,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "divide-y divide-gray-200 px-4 sm:px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6 pb-5 pt-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "project-name", className: "block text-sm font-medium leading-6 text-gray-900", children: "Project name" }, void 0, false, {
              fileName: "app/components/projects/addProjectForm.tsx",
              lineNumber: 68,
              columnNumber: 61
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "project-name", defaultValue: project?.name, id: "project-name", className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" }, void 0, false, {
              fileName: "app/components/projects/addProjectForm.tsx",
              lineNumber: 72,
              columnNumber: 65
            }, this) }, void 0, false, {
              fileName: "app/components/projects/addProjectForm.tsx",
              lineNumber: 71,
              columnNumber: 61
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/projects/addProjectForm.tsx",
            lineNumber: 67,
            columnNumber: 57
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "description", className: "block text-sm font-medium leading-6 text-gray-900", children: "Description" }, void 0, false, {
              fileName: "app/components/projects/addProjectForm.tsx",
              lineNumber: 76,
              columnNumber: 61
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { id: "description", name: "description", defaultValue: project?.description, rows: 4, className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" }, void 0, false, {
              fileName: "app/components/projects/addProjectForm.tsx",
              lineNumber: 80,
              columnNumber: 65
            }, this) }, void 0, false, {
              fileName: "app/components/projects/addProjectForm.tsx",
              lineNumber: 79,
              columnNumber: 61
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/projects/addProjectForm.tsx",
            lineNumber: 75,
            columnNumber: 57
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/projects/addProjectForm.tsx",
          lineNumber: 66,
          columnNumber: 53
        }, this) }, void 0, false, {
          fileName: "app/components/projects/addProjectForm.tsx",
          lineNumber: 65,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/components/projects/addProjectForm.tsx",
          lineNumber: 64,
          columnNumber: 45
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/projects/addProjectForm.tsx",
        lineNumber: 44,
        columnNumber: 41
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-shrink-0 justify-end px-4 py-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50", onClick: () => setOpen(false), children: "Cancel" }, void 0, false, {
          fileName: "app/components/projects/addProjectForm.tsx",
          lineNumber: 90,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", children: "Save" }, void 0, false, {
          fileName: "app/components/projects/addProjectForm.tsx",
          lineNumber: 93,
          columnNumber: 45
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/projects/addProjectForm.tsx",
        lineNumber: 89,
        columnNumber: 41
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/projects/addProjectForm.tsx",
      lineNumber: 42,
      columnNumber: 37
    }, this) }, void 0, false, {
      fileName: "app/components/projects/addProjectForm.tsx",
      lineNumber: 41,
      columnNumber: 33
    }, this) }, void 0, false, {
      fileName: "app/components/projects/addProjectForm.tsx",
      lineNumber: 40,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/components/projects/addProjectForm.tsx",
      lineNumber: 39,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/projects/addProjectForm.tsx",
      lineNumber: 38,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/projects/addProjectForm.tsx",
      lineNumber: 37,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/projects/addProjectForm.tsx",
    lineNumber: 32,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/projects/addProjectForm.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c = Example;
var _c;
$RefreshReg$(_c, "Example");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/projects/newProjectButton.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/projects/newProjectButton.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/projects/newProjectButton.tsx"
  );
  import.meta.hot.lastModified = "1711711034173.0066";
}
function NewProjectButton({
  action
}) {
  _s();
  const navigate = useNavigate();
  console.log("action", action);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Example, { open: action === "new", setOpen: () => {
      navigate(`/dashboard/projects`);
    } }, void 0, false, {
      fileName: "app/components/projects/newProjectButton.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: `/dashboard/projects?action=new`, className: "inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PlusIcon_default, { className: "-ml-0.5 mr-1.5 h-5 w-5", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/components/projects/newProjectButton.tsx",
        lineNumber: 38,
        columnNumber: 17
      }, this),
      "New Project"
    ] }, void 0, true, {
      fileName: "app/components/projects/newProjectButton.tsx",
      lineNumber: 37,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/projects/newProjectButton.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_s(NewProjectButton, "CzcTeTziyjMsSrAVmHuCCb6+Bfg=", false, function() {
  return [useNavigate];
});
_c2 = NewProjectButton;
var _c2;
$RefreshReg$(_c2, "NewProjectButton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/EmptyStates/emptyProjectCard.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/EmptyStates/emptyProjectCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/EmptyStates/emptyProjectCard.tsx"
  );
  import.meta.hot.lastModified = "1711711034173.0066";
}
function EmptyProjectCard({
  action
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { className: "mx-auto h-12 w-12 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { vectorEffect: "non-scaling-stroke", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" }, void 0, false, {
      fileName: "app/components/EmptyStates/emptyProjectCard.tsx",
      lineNumber: 27,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/EmptyStates/emptyProjectCard.tsx",
      lineNumber: 26,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "mt-2 text-sm font-semibold text-gray-900", children: "No projects" }, void 0, false, {
      fileName: "app/components/EmptyStates/emptyProjectCard.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500", children: "Get started by creating a new project." }, void 0, false, {
      fileName: "app/components/EmptyStates/emptyProjectCard.tsx",
      lineNumber: 30,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NewProjectButton, { action }, void 0, false, {
      fileName: "app/components/EmptyStates/emptyProjectCard.tsx",
      lineNumber: 32,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/EmptyStates/emptyProjectCard.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/EmptyStates/emptyProjectCard.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c3 = EmptyProjectCard;
var _c3;
$RefreshReg$(_c3, "EmptyProjectCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/dashboard+/projects+/index.tsx
var import_node = __toESM(require_node(), 1);

// app/components/Shared/Notification.tsx
var import_react6 = __toESM(require_react(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Shared/Notification.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Shared/Notification.tsx"
  );
  import.meta.hot.lastModified = "1711711034173.0066";
}
function Notification({
  open,
  setOpen,
  message,
  type,
  title
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { "aria-live": "assertive", className: "pointer-events-none absolute z-50 inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex w-full flex-col items-center space-y-4 sm:items-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(qe, { show: open, as: import_react6.Fragment, enter: "transform ease-out duration-300 transition", enterFrom: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2", enterTo: "translate-y-0 opacity-100 sm:translate-x-0", leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-start", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex-shrink-0", children: [
      type === "success" && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CheckCircleIcon_default, { className: "h-6 w-6 text-green-400", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/components/Shared/Notification.tsx",
        lineNumber: 42,
        columnNumber: 64
      }, this),
      type === "error" && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6 text-red-400", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/components/Shared/Notification.tsx",
        lineNumber: 42,
        columnNumber: 159
      }, this),
      type === "warning" && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6 text-yellow-400", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/components/Shared/Notification.tsx",
        lineNumber: 42,
        columnNumber: 248
      }, this),
      type === "info" && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6 text-blue-400", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/components/Shared/Notification.tsx",
        lineNumber: 42,
        columnNumber: 337
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Shared/Notification.tsx",
      lineNumber: 41,
      columnNumber: 37
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "ml-3 w-0 flex-1 pt-0.5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-sm font-medium text-gray-900", children: title }, void 0, false, {
        fileName: "app/components/Shared/Notification.tsx",
        lineNumber: 45,
        columnNumber: 41
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mt-1 text-sm text-gray-500", children: message }, void 0, false, {
        fileName: "app/components/Shared/Notification.tsx",
        lineNumber: 46,
        columnNumber: 41
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Shared/Notification.tsx",
      lineNumber: 44,
      columnNumber: 37
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "ml-4 flex flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "button", className: "inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2", onClick: () => {
      setOpen(false);
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "sr-only", children: "Close" }, void 0, false, {
        fileName: "app/components/Shared/Notification.tsx",
        lineNumber: 52,
        columnNumber: 45
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(XMarkIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/components/Shared/Notification.tsx",
        lineNumber: 53,
        columnNumber: 45
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Shared/Notification.tsx",
      lineNumber: 49,
      columnNumber: 41
    }, this) }, void 0, false, {
      fileName: "app/components/Shared/Notification.tsx",
      lineNumber: 48,
      columnNumber: 37
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Shared/Notification.tsx",
    lineNumber: 40,
    columnNumber: 33
  }, this) }, void 0, false, {
    fileName: "app/components/Shared/Notification.tsx",
    lineNumber: 39,
    columnNumber: 29
  }, this) }, void 0, false, {
    fileName: "app/components/Shared/Notification.tsx",
    lineNumber: 38,
    columnNumber: 25
  }, this) }, void 0, false, {
    fileName: "app/components/Shared/Notification.tsx",
    lineNumber: 37,
    columnNumber: 21
  }, this) }, void 0, false, {
    fileName: "app/components/Shared/Notification.tsx",
    lineNumber: 35,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/components/Shared/Notification.tsx",
    lineNumber: 34,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/Shared/Notification.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_c4 = Notification;
var _c4;
$RefreshReg$(_c4, "Notification");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/projects/projectSmallCard.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/projects/projectSmallCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/projects/projectSmallCard.tsx"
  );
  import.meta.hot.lastModified = "1711711034173.0066";
}
var getRandomBgColor = () => {
  const colors = ["bg-indigo-600", "bg-pink-600", "bg-green-600", "bg-yellow-600", "bg-blue-600", "bg-red-600", "bg-purple-600"];
  return colors[Math.floor(Math.random() * colors.length)];
};
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function ProjectSmallCard({
  project,
  projectId
}) {
  _s2();
  const navigate = useNavigate();
  console.log("projectId", projectId, project);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { className: "col-span-1 \n                            relative\n                            flex rounded-md shadow-sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: `/dashboard/projects/${project.slug}/analytics`, className: classNames(getRandomBgColor(), "flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white"), children: project.name[0] }, void 0, false, {
      fileName: "app/components/projects/projectSmallCard.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex-1 truncate px-4 py-2 text-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: `/dashboard/projects/${project.slug}`, className: "font-medium text-gray-900 hover:text-gray-600", children: project.name }, void 0, false, {
        fileName: "app/components/projects/projectSmallCard.tsx",
        lineNumber: 47,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-gray-500", children: [
        project.members,
        " ",
        project.description
      ] }, void 0, true, {
        fileName: "app/components/projects/projectSmallCard.tsx",
        lineNumber: 50,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: " flex  mt-4  py-1.5 \n                                    px-3 rounded-lg gap-5 flex-shrink-0 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { className: "text-gray-600 hover:text-gray-900 flex  items-center justify-center gap-2", to: `/dashboard/projects?action=edit&projectId=${project.id}`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PencilSquareIcon_default, { className: "h-4 w-4", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/components/projects/projectSmallCard.tsx",
            lineNumber: 54,
            columnNumber: 29
          }, this),
          " Edit"
        ] }, void 0, true, {
          fileName: "app/components/projects/projectSmallCard.tsx",
          lineNumber: 53,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { className: "text-gray-600 hover:text-gray-900 flex  items-center justify-center gap-2", to: `/dashboard/projects?action=delete&projectId=${project.id}`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TrashIcon_default, { className: "h-4 w-4", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/components/projects/projectSmallCard.tsx",
            lineNumber: 57,
            columnNumber: 29
          }, this),
          " Delete"
        ] }, void 0, true, {
          fileName: "app/components/projects/projectSmallCard.tsx",
          lineNumber: 56,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/projects/projectSmallCard.tsx",
        lineNumber: 51,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/projects/projectSmallCard.tsx",
      lineNumber: 46,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/projects/projectSmallCard.tsx",
      lineNumber: 45,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Example, { open: project.id === projectId, setOpen: () => {
      debugger;
      navigate(`/dashboard/projects`);
    }, project }, void 0, false, {
      fileName: "app/components/projects/projectSmallCard.tsx",
      lineNumber: 65,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/projects/projectSmallCard.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
_s2(ProjectSmallCard, "CzcTeTziyjMsSrAVmHuCCb6+Bfg=", false, function() {
  return [useNavigate];
});
_c5 = ProjectSmallCard;
var _c5;
$RefreshReg$(_c5, "ProjectSmallCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/dashboard+/projects+/index.tsx
var import_auth = __toESM(require_auth(), 1);
var import_project = __toESM(require_project(), 1);
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard+/projects+/index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard+/projects+/index.tsx"
  );
  import.meta.hot.lastModified = "1711774299843.6514";
}
function Hello() {
  _s3();
  const {
    projects,
    action,
    projectId,
    projectStatus
  } = useLoaderData();
  const navigate = useNavigate();
  console.log("projects", action, projectId, projects);
  const fetcher = useFetcher();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "max-w-7xl mx-auto", children: [
    projectStatus === "success" && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Notification, { type: "success", message: "Project created successfully", open: true, setOpen: () => {
      navigate("/dashboard/projects");
    }, title: "Success" }, void 0, false, {
      fileName: "app/routes/dashboard+/projects+/index.tsx",
      lineNumber: 63,
      columnNumber: 45
    }, this),
    projects?.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "text-base font-semibold leading-6 text-gray-900", children: "Projects" }, void 0, false, {
          fileName: "app/routes/dashboard+/projects+/index.tsx",
          lineNumber: 68,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mt-3 sm:ml-4 sm:mt-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(NewProjectButton, { action }, void 0, false, {
          fileName: "app/routes/dashboard+/projects+/index.tsx",
          lineNumber: 70,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard+/projects+/index.tsx",
          lineNumber: 69,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard+/projects+/index.tsx",
        lineNumber: 67,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { role: "list", className: "mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3", children: projects.map((project) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ProjectSmallCard, { projectId, project }, project.id, false, {
        fileName: "app/routes/dashboard+/projects+/index.tsx",
        lineNumber: 75,
        columnNumber: 50
      }, this)) }, void 0, false, {
        fileName: "app/routes/dashboard+/projects+/index.tsx",
        lineNumber: 73,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard+/projects+/index.tsx",
      lineNumber: 66,
      columnNumber: 37
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(EmptyProjectCard, { action }, void 0, false, {
      fileName: "app/routes/dashboard+/projects+/index.tsx",
      lineNumber: 77,
      columnNumber: 26
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard+/projects+/index.tsx",
    lineNumber: 62,
    columnNumber: 10
  }, this);
}
_s3(Hello, "kGOCwn+vT7is+G31dUC8c8IcRJw=", false, function() {
  return [useLoaderData, useNavigate, useFetcher];
});
_c6 = Hello;
var _c6;
$RefreshReg$(_c6, "Hello");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Hello as default
};
//# sourceMappingURL=/build/routes/dashboard+/projects+/index-UP7FQLJN.js.map
