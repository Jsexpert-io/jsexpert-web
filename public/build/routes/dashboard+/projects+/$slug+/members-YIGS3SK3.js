import {
  qe
} from "/build/_shared/chunk-EHNHN7LZ.js";
import {
  require_auth
} from "/build/_shared/chunk-6F6PMZ7E.js";
import {
  XMarkIcon_default,
  _t
} from "/build/_shared/chunk-WCAGU2R2.js";
import {
  Form,
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

// app/components/projects/projectMembers/addProjectMemberForm.tsx
var import_react3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/projects/projectMembers/addProjectMemberForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/projects/projectMembers/addProjectMemberForm.tsx"
  );
  import.meta.hot.lastModified = "1710506976266.3171";
}
function Example({
  open,
  projectMember,
  setOpen
}) {
  console.log("project", open);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(qe.Root, { show: open, as: import_react3.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t, { as: "div", className: "relative z-auto", style: {
    zIndex: 1e3
  }, onClose: setOpen, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0" }, void 0, false, {
      fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
      lineNumber: 35,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(qe.Child, { as: import_react3.Fragment, enter: "transform transition ease-in-out duration-500 sm:duration-700", enterFrom: "translate-x-full", enterTo: "translate-x-0", leave: "transform transition ease-in-out duration-500 sm:duration-700", leaveFrom: "translate-x-0", leaveTo: "translate-x-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t.Panel, { className: "pointer-events-auto w-screen max-w-md", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", action: "/dashboard/projects", className: "flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id", value: projectMember?.id }, void 0, false, {
        fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
        lineNumber: 43,
        columnNumber: 41
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-0 flex-1 overflow-y-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-indigo-700 px-4 py-6 sm:px-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t.Title, { className: "text-base font-semibold leading-6 text-white", children: "New Project" }, void 0, false, {
              fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
              lineNumber: 47,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-3 flex h-7 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "relative rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white", onClick: () => setOpen(false), children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute -inset-2.5" }, void 0, false, {
                fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
                lineNumber: 52,
                columnNumber: 61
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Close panel" }, void 0, false, {
                fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
                lineNumber: 53,
                columnNumber: 61
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
                fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
                lineNumber: 54,
                columnNumber: 61
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
              lineNumber: 51,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
              lineNumber: 50,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
            lineNumber: 46,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-indigo-300", children: "Get started by filling in the information below to create your new project." }, void 0, false, {
            fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
            lineNumber: 59,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
            lineNumber: 58,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
          lineNumber: 45,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 flex-col justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "divide-y divide-gray-200 px-4 sm:px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6 pb-5 pt-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "memberName", className: "block text-sm font-medium leading-6 text-gray-900", children: "Member name" }, void 0, false, {
              fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
              lineNumber: 68,
              columnNumber: 61
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "memberName", defaultValue: projectMember?.name, id: "memberName", className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" }, void 0, false, {
              fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
              lineNumber: 72,
              columnNumber: 65
            }, this) }, void 0, false, {
              fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
              lineNumber: 71,
              columnNumber: 61
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
            lineNumber: 67,
            columnNumber: 57
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "memberEmail", className: "block text-sm font-medium leading-6 text-gray-900", children: "Member Email" }, void 0, false, {
              fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
              lineNumber: 76,
              columnNumber: 61
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "memberEmail", defaultValue: projectMember?.email, id: "memberEmail", className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" }, void 0, false, {
              fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
              lineNumber: 80,
              columnNumber: 65
            }, this) }, void 0, false, {
              fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
              lineNumber: 79,
              columnNumber: 61
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
            lineNumber: 75,
            columnNumber: 57
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "memberRole", className: "block text-sm font-medium leading-6 text-gray-900", children: "Select Project Role" }, void 0, false, {
              fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
              lineNumber: 84,
              columnNumber: 61
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { id: "memberRole", name: "memberRole", className: "mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6", defaultValue: "Member", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Admin", children: "Project Admin" }, void 0, false, {
                fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
                lineNumber: 89,
                columnNumber: 69
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "Member", children: "Project Member" }, void 0, false, {
                fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
                lineNumber: 90,
                columnNumber: 69
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
              lineNumber: 88,
              columnNumber: 65
            }, this) }, void 0, false, {
              fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
              lineNumber: 87,
              columnNumber: 61
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
            lineNumber: 83,
            columnNumber: 57
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
          lineNumber: 66,
          columnNumber: 53
        }, this) }, void 0, false, {
          fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
          lineNumber: 65,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
          lineNumber: 64,
          columnNumber: 45
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
        lineNumber: 44,
        columnNumber: 41
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-shrink-0 justify-end px-4 py-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50", onClick: () => setOpen(false), children: "Cancel" }, void 0, false, {
          fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
          lineNumber: 102,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", children: "Save" }, void 0, false, {
          fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
          lineNumber: 105,
          columnNumber: 45
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
        lineNumber: 101,
        columnNumber: 41
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
      lineNumber: 42,
      columnNumber: 37
    }, this) }, void 0, false, {
      fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
      lineNumber: 41,
      columnNumber: 33
    }, this) }, void 0, false, {
      fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
      lineNumber: 40,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
      lineNumber: 39,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
      lineNumber: 38,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
      lineNumber: 37,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
    lineNumber: 32,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/projects/projectMembers/addProjectMemberForm.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c = Example;
var _c;
$RefreshReg$(_c, "Example");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/dashboard+/projects+/$slug+/members.tsx
var import_auth = __toESM(require_auth(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard+/projects+/$slug+/members.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard+/projects+/$slug+/members.tsx"
  );
  import.meta.hot.lastModified = "1710506976278.3171";
}
var people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member"
  }
  // More people...
];
function Example2() {
  _s();
  const {
    user,
    projectSlug,
    action
  } = useLoaderData();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Example, { open: action === "addMember", setOpen: () => {
      navigate(`/dashboard/projects/${projectSlug}/members`);
    } }, void 0, false, {
      fileName: "app/routes/dashboard+/projects+/$slug+/members.tsx",
      lineNumber: 56,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-8 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("table", { className: "min-w-full divide-y divide-gray-300", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("tr", { className: "divide-x divide-gray-200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { scope: "col", className: "py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0", children: "Name" }, void 0, false, {
          fileName: "app/routes/dashboard+/projects+/$slug+/members.tsx",
          lineNumber: 67,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { scope: "col", className: "px-4 py-3.5 text-left text-sm font-semibold text-gray-900", children: "Title" }, void 0, false, {
          fileName: "app/routes/dashboard+/projects+/$slug+/members.tsx",
          lineNumber: 70,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { scope: "col", className: "px-4 py-3.5 text-left text-sm font-semibold text-gray-900", children: "Email" }, void 0, false, {
          fileName: "app/routes/dashboard+/projects+/$slug+/members.tsx",
          lineNumber: 73,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("th", { scope: "col", className: "py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0", children: "Role" }, void 0, false, {
          fileName: "app/routes/dashboard+/projects+/$slug+/members.tsx",
          lineNumber: 76,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard+/projects+/$slug+/members.tsx",
        lineNumber: 66,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/dashboard+/projects+/$slug+/members.tsx",
        lineNumber: 65,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("tbody", { className: "divide-y divide-gray-200 bg-white", children: people.map((person) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("tr", { className: "divide-x divide-gray-200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0", children: person.name }, void 0, false, {
          fileName: "app/routes/dashboard+/projects+/$slug+/members.tsx",
          lineNumber: 83,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "whitespace-nowrap p-4 text-sm text-gray-500", children: person.title }, void 0, false, {
          fileName: "app/routes/dashboard+/projects+/$slug+/members.tsx",
          lineNumber: 86,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "whitespace-nowrap p-4 text-sm text-gray-500", children: person.email }, void 0, false, {
          fileName: "app/routes/dashboard+/projects+/$slug+/members.tsx",
          lineNumber: 87,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("td", { className: "whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0", children: person.role }, void 0, false, {
          fileName: "app/routes/dashboard+/projects+/$slug+/members.tsx",
          lineNumber: 88,
          columnNumber: 41
        }, this)
      ] }, person.email, true, {
        fileName: "app/routes/dashboard+/projects+/$slug+/members.tsx",
        lineNumber: 82,
        columnNumber: 55
      }, this)) }, void 0, false, {
        fileName: "app/routes/dashboard+/projects+/$slug+/members.tsx",
        lineNumber: 81,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard+/projects+/$slug+/members.tsx",
      lineNumber: 64,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard+/projects+/$slug+/members.tsx",
      lineNumber: 63,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard+/projects+/$slug+/members.tsx",
      lineNumber: 62,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard+/projects+/$slug+/members.tsx",
      lineNumber: 61,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard+/projects+/$slug+/members.tsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
}
_s(Example2, "4Mq3su5vu8h4tCT2YHsQai7bXxU=", false, function() {
  return [useLoaderData, useNavigate];
});
_c2 = Example2;
var _c2;
$RefreshReg$(_c2, "Example");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Example2 as default
};
//# sourceMappingURL=/build/routes/dashboard+/projects+/$slug+/members-YIGS3SK3.js.map
