import {
  Bars3Icon_default,
  XMarkIcon_default,
  _t
} from "/build/_shared/chunk-WCAGU2R2.js";
import {
  ArrowPathIcon_default,
  CloudArrowUpIcon_default,
  Cog6ToothIcon_default,
  FingerPrintIcon_default,
  LockClosedIcon_default,
  ServerIcon_default
} from "/build/_shared/chunk-IZGS4CIT.js";
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
  import.meta.hot.lastModified = "1710508207842.9763";
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
var navigation = [];
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "absolute inset-x-0 top-0 z-50", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "flex items-center justify-between p-6 lg:px-8", "aria-label": "Global", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex lg:flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/", className: "-m-1.5 p-1.5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "JsExpert" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 118,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "h-8 w-auto", src: "/logow.png", alt: "" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 119,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 117,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 116,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex lg:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400", onClick: () => setMobileMenuOpen(true), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 124,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bars3Icon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 125,
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden lg:flex lg:gap-x-12", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: item.href, className: "text-sm font-semibold leading-6 text-white", children: item.name }, item.name, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 129,
          columnNumber: 37
        }, this)) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 128,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden lg:flex lg:flex-1 lg:justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/auth/login", className: "text-sm font-semibold leading-6 text-white", children: [
          "Log in ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "aria-hidden": "true", children: "\u2192" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 135,
            columnNumber: 22
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 134,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 133,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t, { as: "div", className: "lg:hidden", open: mobileMenuOpen, onClose: setMobileMenuOpen, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 z-50" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 140,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(_t.Panel, { className: "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/", className: "-m-1.5 p-1.5", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Your Company" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 144,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "h-8 w-auto", src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600", alt: "" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 145,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 143,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "-m-2.5 rounded-md p-2.5 text-gray-700", onClick: () => setMobileMenuOpen(false), children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Close menu" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 148,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 149,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 147,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 142,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "-my-6 divide-y divide-gray-500/10", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2 py-6", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: item.href, className: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50", children: item.name }, item.name, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 155,
              columnNumber: 43
            }, this)) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 154,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/", className: "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50", children: "Log in" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 160,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 159,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 153,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 152,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 141,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 139,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 114,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]", style: {
          clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        } }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 179,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 178,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-2xl py-32 sm:py-48 lg:py-56", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:mb-8 sm:flex sm:justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20", children: [
              "Stay Tuned for our Launch.",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/", className: "font-semibold text-white", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute inset-0", "aria-hidden": "true" }, void 0, false, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 189,
                  columnNumber: 21
                }, this),
                "Read more ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "aria-hidden": "true", children: "\u2192" }, void 0, false, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 190,
                  columnNumber: 31
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 188,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 186,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 185,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-bold tracking-tight text-white sm:text-6xl", children: "Unleash the Full Potential of Your APIs" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 195,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-6 text-lg leading-8 text-gray-300", children: "Monitor, Analyze, and Improve your API and Database Performance" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 198,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 flex items-center justify-center gap-x-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/", className: "rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400", children: "Get started" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 202,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 201,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 194,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 184,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 211,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 183,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]", style: {
          clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        } }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 216,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 215,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 172,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-32 sm:mt-56", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-2xl sm:text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-base font-semibold leading-7 text-indigo-600", children: "Make sense of your insights" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 226,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl", children: "Monitor, Analyze, and Improve your API and Database Performance" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 227,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-6 text-lg leading-8 text-gray-600", children: "Our platform provides a comprehensive set of tools to help you understand and optimize your API and MongoDB performance. Gain deep insights into key performance metrics, identify usage patterns, and troubleshoot errors to ensure seamless API operations." }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 230,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 225,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 224,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative overflow-hidden pt-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/dashboard.png", alt: "App screenshot", className: "mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10", width: 2432, height: 1442 }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 237,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 239,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 238,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 236,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 235,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", { className: "mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16", children: features.map((feature) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative pl-9", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", { className: "inline font-semibold text-gray-900", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(feature.icon, { className: "absolute left-1 top-1 h-5 w-5 text-indigo-600", "aria-hidden": "true" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 247,
              columnNumber: 21
            }, this),
            feature.name
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 246,
            columnNumber: 19
          }, this),
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", { className: "inline", children: feature.description }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 250,
            columnNumber: 19
          }, this)
        ] }, feature.name, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 245,
          columnNumber: 40
        }, this)) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 244,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 243,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 223,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 170,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", { className: "mt-32 bg-gray-900 sm:mt-56", "aria-labelledby": "footer-heading", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { id: "footer-heading", className: "sr-only", children: "Footer" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 262,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "xl:grid xl:grid-cols-3 xl:gap-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "h-7", src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500", alt: "Company name" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 267,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:grid md:grid-cols-2 md:gap-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-semibold leading-6 text-white", children: "Solutions" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 271,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "mt-6 space-y-4", children: footerNavigation.solutions.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: item.href, className: "text-sm leading-6 text-gray-300 hover:text-white", children: item.name }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 274,
                columnNumber: 25
              }, this) }, item.name, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 273,
                columnNumber: 61
              }, this)) }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 272,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 270,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 md:mt-0", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-semibold leading-6 text-white", children: "Support" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 281,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "mt-6 space-y-4", children: footerNavigation.support.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: item.href, className: "text-sm leading-6 text-gray-300 hover:text-white", children: item.name }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 284,
                columnNumber: 25
              }, this) }, item.name, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 283,
                columnNumber: 59
              }, this)) }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 282,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 280,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 269,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:grid md:grid-cols-2 md:gap-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-semibold leading-6 text-white", children: "Company" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 293,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "mt-6 space-y-4", children: footerNavigation.company.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: item.href, className: "text-sm leading-6 text-gray-300 hover:text-white", children: item.name }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 296,
                columnNumber: 25
              }, this) }, item.name, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 295,
                columnNumber: 59
              }, this)) }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 294,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 292,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 md:mt-0", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-semibold leading-6 text-white", children: "Legal" }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 303,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { role: "list", className: "mt-6 space-y-4", children: footerNavigation.legal.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: item.href, className: "text-sm leading-6 text-gray-300 hover:text-white", children: item.name }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 306,
                columnNumber: 25
              }, this) }, item.name, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 305,
                columnNumber: 57
              }, this)) }, void 0, false, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 304,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 302,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 291,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 268,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 266,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 265,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 261,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 112,
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
//# sourceMappingURL=/build/routes/_index-CDVGDGJT.js.map
