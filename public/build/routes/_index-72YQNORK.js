import {
  ArrowPathIcon_default,
  CloudArrowUpIcon_default,
  Cog6ToothIcon_default,
  FingerPrintIcon_default,
  LockClosedIcon_default,
  ServerIcon_default
} from "/build/_shared/chunk-7K3LRQSG.js";
import {
  Link
} from "/build/_shared/chunk-LAE4N3SI.js";
import "/build/_shared/chunk-WEAPBHQG.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-7PHB3BFD.js";
import {
  createHotContext
} from "/build/_shared/chunk-LJW5VNMI.js";
import "/build/_shared/chunk-JR22VO6P.js";
import {
  require_react
} from "/build/_shared/chunk-CJ4MY3PQ.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/_index.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1711711034173.0066";
}
var footerNavigation = {
  solutions: [{
    name: "Marketing",
    href: "#"
  }, {
    name: "Analytics",
    href: "#"
  }, {
    name: "Commerce",
    href: "#"
  }, {
    name: "Insights",
    href: "#"
  }],
  support: [{
    name: "Pricing",
    href: "#"
  }, {
    name: "Documentation",
    href: "#"
  }, {
    name: "Guides",
    href: "#"
  }, {
    name: "API Status",
    href: "#"
  }],
  company: [{
    name: "About",
    href: "#"
  }, {
    name: "Blog",
    href: "#"
  }, {
    name: "Jobs",
    href: "#"
  }, {
    name: "Press",
    href: "#"
  }, {
    name: "Partners",
    href: "#"
  }],
  legal: [{
    name: "Claim",
    href: "#"
  }, {
    name: "Privacy",
    href: "#"
  }, {
    name: "Terms",
    href: "#"
  }]
};
var features = [{
  name: "Real-time Performance Monitoring.",
  description: "Monitor your API and MongoDB performance in real-time, allowing you to proactively identify and address any issues that arise.",
  icon: CloudArrowUpIcon_default
}, {
  name: "Performance Metrics and Analytics.",
  description: "Gain deep insights into key performance metrics such as response time, latency, throughput, and error rate. Our intuitive analytics enable you to track trends, make data-driven decisions, and enhance the overall user experience.",
  icon: LockClosedIcon_default
}, {
  name: "Customizable Middleware",
  description: "Our easy-to-integrate middleware provides tailored profiling capabilities specific to your project. Add it to your API endpoints effortlessly and start capturing valuable performance data instantly.",
  icon: ArrowPathIcon_default
}, {
  name: "Error Analysis and Troubleshooting",
  description: "Dive deep into error logs and diagnostics to identify the root causes of failures. Quickly troubleshoot issues and reduce downtime by pinpointing and resolving problematic API calls.",
  icon: FingerPrintIcon_default
}, {
  name: "API Usage Patterns",
  description: "Understand how your APIs are being used by analyzing usage patterns. Identify popular endpoints, peak usage times, and user behavior to optimize resource allocation and improve scalability.",
  icon: Cog6ToothIcon_default
}, {
  name: "Boost MongoDB Performance",
  description: "Fine-tune your MongoDB operations, optimize queries, and improve database performance for seamless integration with your APIs.",
  icon: ServerIcon_default
}];
function Example() {
  _s();
  const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react2.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto", children: "Convert your analytics into actionable insights" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 124,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg leading-8 text-gray-600", children: "JsExpert is a powerful platform that helps you monitor, analyze, and improve your API and MongoDB performance. Gain deep insights into key performance metrics, identify usage patterns, and troubleshoot errors to ensure seamless API operations." }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 128,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 flex items-center gap-x-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/auth/login", className: "rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", children: "Get started" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 132,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "text-sm font-semibold leading-6 text-gray-900", children: [
                "Learn more ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "aria-hidden": "true", children: "\u2192" }, void 0, false, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 136,
                  columnNumber: 32
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 135,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 131,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 127,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80", alt: "", className: "mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 140,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 123,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 122,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 143,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-32 sm:mt-56", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-2xl sm:text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-base font-semibold leading-7 text-indigo-600", children: "Make sense of your insights" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 150,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl", children: "Monitor, Analyze, and Improve your API and Database Performance" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 151,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-6 text-lg leading-8 text-gray-600", children: "Our platform provides a comprehensive set of tools to help you understand and optimize your API and MongoDB performance. Gain deep insights into key performance metrics, identify usage patterns, and troubleshoot errors to ensure seamless API operations." }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 154,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 149,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 148,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative overflow-hidden pt-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/dashboard.png", alt: "App screenshot", className: "mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10", width: 2432, height: 1442 }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 161,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 163,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 162,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 160,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 159,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16", children: features.map((feature) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative pl-9", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "inline font-semibold text-gray-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(feature.icon, { className: "absolute left-1 top-1 h-5 w-5 text-indigo-600", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 171,
              columnNumber: 21
            }, this),
            feature.name
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 170,
            columnNumber: 19
          }, this),
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "inline", children: feature.description }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 174,
            columnNumber: 19
          }, this)
        ] }, feature.name, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 169,
          columnNumber: 40
        }, this)) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 168,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 167,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 147,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 115,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", { className: "mt-32 bg-gray-900 sm:mt-56", "aria-labelledby": "footer-heading", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { id: "footer-heading", className: "sr-only", children: "Footer" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 186,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "xl:grid xl:grid-cols-3 xl:gap-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "h-7", src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500", alt: "Company name" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 191,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:grid md:grid-cols-2 md:gap-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-semibold leading-6 text-white", children: "Solutions" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 195,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "mt-6 space-y-4", children: footerNavigation.solutions.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: item.href, className: "text-sm leading-6 text-gray-300 hover:text-white", children: item.name }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 198,
                columnNumber: 25
              }, this) }, item.name, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 197,
                columnNumber: 61
              }, this)) }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 196,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 194,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 md:mt-0", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-semibold leading-6 text-white", children: "Support" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 205,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "mt-6 space-y-4", children: footerNavigation.support.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: item.href, className: "text-sm leading-6 text-gray-300 hover:text-white", children: item.name }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 208,
                columnNumber: 25
              }, this) }, item.name, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 207,
                columnNumber: 59
              }, this)) }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 206,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 204,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 193,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:grid md:grid-cols-2 md:gap-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-semibold leading-6 text-white", children: "Company" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 217,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "mt-6 space-y-4", children: footerNavigation.company.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: item.href, className: "text-sm leading-6 text-gray-300 hover:text-white", children: item.name }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 220,
                columnNumber: 25
              }, this) }, item.name, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 219,
                columnNumber: 59
              }, this)) }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 218,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 216,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 md:mt-0", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-semibold leading-6 text-white", children: "Legal" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 227,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "mt-6 space-y-4", children: footerNavigation.legal.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: item.href, className: "text-sm leading-6 text-gray-300 hover:text-white", children: item.name }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 230,
                columnNumber: 25
              }, this) }, item.name, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 229,
                columnNumber: 57
              }, this)) }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 228,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 226,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 215,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 192,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 190,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 189,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 185,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 111,
    columnNumber: 10
  }, this);
}
_s(Example, "d7gXMF6mPDUhHBNUSEb8mLK4AII=");
_c = Example;
var _c;
$RefreshReg$(_c, "Example");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Example as default
};
//# sourceMappingURL=/build/routes/_index-72YQNORK.js.map
