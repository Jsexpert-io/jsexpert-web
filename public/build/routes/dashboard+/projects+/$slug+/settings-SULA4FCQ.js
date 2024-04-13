import {
  require_project
} from "/build/_shared/chunk-ZG5R5SPC.js";
import {
  require_auth
} from "/build/_shared/chunk-IIJR6JWD.js";
import {
  ClipboardDocumentIcon_default
} from "/build/_shared/chunk-7K3LRQSG.js";
import {
  useLoaderData
} from "/build/_shared/chunk-LAE4N3SI.js";
import "/build/_shared/chunk-WEAPBHQG.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-7PHB3BFD.js";
import {
  createHotContext
} from "/build/_shared/chunk-LJW5VNMI.js";
import "/build/_shared/chunk-JR22VO6P.js";
import "/build/_shared/chunk-CJ4MY3PQ.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/dashboard+/projects+/$slug+/settings.tsx
var import_auth = __toESM(require_auth(), 1);
var import_project = __toESM(require_project(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard+/projects+/$slug+/settings.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard+/projects+/$slug+/settings.tsx"
  );
  import.meta.hot.lastModified = "1711711034173.0066";
}
function Detail() {
  _s();
  const {
    project,
    currentTab
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto max-w-8xl py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-6 sm:col-span-2 sm:px-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "text-sm font-medium leading-6 text-gray-900", children: "Project Credentials" }, void 0, false, {
      fileName: "app/routes/dashboard+/projects+/$slug+/settings.tsx",
      lineNumber: 49,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "mt-2 text-sm text-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "divide-y divide-gray-100 rounded-md border border-gray-200", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-0 flex-1 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mr-8 text-gray-500", children: "Client Id " }, void 0, false, {
            fileName: "app/routes/dashboard+/projects+/$slug+/settings.tsx",
            lineNumber: 54,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4 flex min-w-0 flex-1 gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "truncate font-medium", children: project?.clientId }, void 0, false, {
            fileName: "app/routes/dashboard+/projects+/$slug+/settings.tsx",
            lineNumber: 56,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard+/projects+/$slug+/settings.tsx",
            lineNumber: 55,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard+/projects+/$slug+/settings.tsx",
          lineNumber: 53,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4 flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
          navigator.clipboard.writeText(project?.clientId);
          alert("Client Id copied");
        }, className: "font-medium flex items-center gap-4 text-indigo-600 hover:text-indigo-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClipboardDocumentIcon_default, { className: "h-5 w-5 flex-shrink-0 text-gray-400", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/routes/dashboard+/projects+/$slug+/settings.tsx",
          lineNumber: 65,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard+/projects+/$slug+/settings.tsx",
          lineNumber: 61,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard+/projects+/$slug+/settings.tsx",
          lineNumber: 60,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard+/projects+/$slug+/settings.tsx",
        lineNumber: 52,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex w-0 flex-1 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mr-8 text-gray-500", children: "Client Secret " }, void 0, false, {
            fileName: "app/routes/dashboard+/projects+/$slug+/settings.tsx",
            lineNumber: 71,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4 flex min-w-0 flex-1 gap-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "truncate font-medium", children: project?.clientSecret }, void 0, false, {
            fileName: "app/routes/dashboard+/projects+/$slug+/settings.tsx",
            lineNumber: 73,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/dashboard+/projects+/$slug+/settings.tsx",
            lineNumber: 72,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard+/projects+/$slug+/settings.tsx",
          lineNumber: 70,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4 flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
          navigator.clipboard.writeText(project?.clientSecret);
          alert("Client Secret copied");
        }, className: "font-medium flex items-center gap-4 text-indigo-600 hover:text-indigo-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClipboardDocumentIcon_default, { className: "h-5 w-5 flex-shrink-0 text-gray-400", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/routes/dashboard+/projects+/$slug+/settings.tsx",
          lineNumber: 84,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard+/projects+/$slug+/settings.tsx",
          lineNumber: 80,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/dashboard+/projects+/$slug+/settings.tsx",
          lineNumber: 79,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard+/projects+/$slug+/settings.tsx",
        lineNumber: 69,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard+/projects+/$slug+/settings.tsx",
      lineNumber: 51,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard+/projects+/$slug+/settings.tsx",
      lineNumber: 50,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard+/projects+/$slug+/settings.tsx",
    lineNumber: 48,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/dashboard+/projects+/$slug+/settings.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
}
_s(Detail, "2qhXluH+a//4v5fiBraX8Pak3D4=", false, function() {
  return [useLoaderData];
});
_c = Detail;
var _c;
$RefreshReg$(_c, "Detail");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Detail as default
};
//# sourceMappingURL=/build/routes/dashboard+/projects+/$slug+/settings-SULA4FCQ.js.map
