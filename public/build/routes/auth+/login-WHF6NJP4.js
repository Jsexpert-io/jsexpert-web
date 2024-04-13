import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import {
  Link,
  esm_exports,
  init_esm,
  useLocation
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
  __commonJS,
  __toCommonJS,
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// node_modules/remix-auth/build/authenticator.js
var require_authenticator = __commonJS({
  "node_modules/remix-auth/build/authenticator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Authenticator = void 0;
    var server_runtime_1 = (init_esm(), __toCommonJS(esm_exports));
    var Authenticator = class {
      /**
       * Create a new instance of the Authenticator.
       *
       * It receives a instance of the SessionStorage. This session storage could
       * be created using any method exported by Remix, this includes:
       * - `createSessionStorage`
       * - `createFileSystemSessionStorage`
       * - `createCookieSessionStorage`
       * - `createMemorySessionStorage`
       *
       * It optionally receives an object with extra options. The supported options
       * are:
       * - `sessionKey`: The key used to store and read the user in the session storage.
       * @example
       * import { sessionStorage } from "./session.server";
       * let authenticator = new Authenticator(sessionStorage);
       * @example
       * import { sessionStorage } from "./session.server";
       * let authenticator = new Authenticator(sessionStorage, {
       *   sessionKey: "token",
       * });
       */
      constructor(sessionStorage, options = {}) {
        var _a;
        this.sessionStorage = sessionStorage;
        this.strategies = /* @__PURE__ */ new Map();
        this.sessionKey = options.sessionKey || "user";
        this.sessionErrorKey = options.sessionErrorKey || "auth:error";
        this.sessionStrategyKey = options.sessionStrategyKey || "strategy";
        this.throwOnError = (_a = options.throwOnError) !== null && _a !== void 0 ? _a : false;
      }
      /**
       * Call this method with the Strategy, the optional name allows you to setup
       * the same strategy multiple times with different names.
       * It returns the Authenticator instance for concatenation.
       * @example
       * authenticator
       *  .use(new SomeStrategy({}, (user) => Promise.resolve(user)))
       *  .use(new SomeStrategy({}, (user) => Promise.resolve(user)), "another");
       */
      use(strategy, name) {
        this.strategies.set(name !== null && name !== void 0 ? name : strategy.name, strategy);
        return this;
      }
      /**
       * Call this method with the name of the strategy you want to remove.
       * It returns the Authenticator instance for concatenation.
       * @example
       * authenticator.unuse("another").unuse("some");
       */
      unuse(name) {
        this.strategies.delete(name);
        return this;
      }
      authenticate(strategy, request, options = {}) {
        const strategyObj = this.strategies.get(strategy);
        if (!strategyObj)
          throw new Error(`Strategy ${strategy} not found.`);
        return strategyObj.authenticate(new Request(request.url, request), this.sessionStorage, {
          throwOnError: this.throwOnError,
          ...options,
          name: strategy,
          sessionKey: this.sessionKey,
          sessionErrorKey: this.sessionErrorKey,
          sessionStrategyKey: this.sessionStrategyKey
        });
      }
      async isAuthenticated(request, options = {}) {
        var _a;
        let session = (0, server_runtime_1.isSession)(request) ? request : await this.sessionStorage.getSession(request.headers.get("Cookie"));
        let user = (_a = session.get(this.sessionKey)) !== null && _a !== void 0 ? _a : null;
        if (user) {
          if (options.successRedirect) {
            throw (0, server_runtime_1.redirect)(options.successRedirect, { headers: options.headers });
          } else
            return user;
        }
        if (options.failureRedirect) {
          throw (0, server_runtime_1.redirect)(options.failureRedirect, { headers: options.headers });
        } else
          return null;
      }
      /**
       * Destroy the user session throw a redirect to another URL.
       * @example
       * async function action({ request }: ActionArgs) {
       *   await authenticator.logout(request, { redirectTo: "/login" });
       * }
       */
      async logout(request, options) {
        let session = (0, server_runtime_1.isSession)(request) ? request : await this.sessionStorage.getSession(request.headers.get("Cookie"));
        throw (0, server_runtime_1.redirect)(options.redirectTo, {
          headers: {
            "Set-Cookie": await this.sessionStorage.destroySession(session)
          }
        });
      }
    };
    exports.Authenticator = Authenticator;
  }
});

// node_modules/remix-auth/build/authorizer.js
var require_authorizer = __commonJS({
  "node_modules/remix-auth/build/authorizer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Authorizer = void 0;
    var server_runtime_1 = (init_esm(), __toCommonJS(esm_exports));
    var Authorizer = class {
      constructor(authenticator2, rules = []) {
        this.authenticator = authenticator2;
        this.rules = rules;
      }
      async authorize(args, { failureRedirect, raise = "response", rules = [] } = {}) {
        let user = await this.authenticator.isAuthenticated(args.request);
        if (!user) {
          if (raise === "response") {
            throw (0, server_runtime_1.json)({ message: "Not authenticated." }, { status: 401 });
          }
          if (raise === "redirect") {
            throw (0, server_runtime_1.redirect)(failureRedirect);
          }
          throw new Error("Not authenticated.");
        }
        for (let rule of [...this.rules, ...rules]) {
          if (await rule({ user, ...args }))
            continue;
          if (raise === "redirect")
            throw (0, server_runtime_1.redirect)(failureRedirect);
          if (raise === "response") {
            if (!rule.name)
              throw (0, server_runtime_1.json)({ message: "Forbidden" }, { status: 403 });
            throw (0, server_runtime_1.json)({ message: `Forbidden by policy ${rule.name}` }, { status: 403 });
          }
          if (!rule.name)
            throw new Error("Forbidden.");
          throw new Error(`Forbidden by policy ${rule.name}`);
        }
        return user;
      }
    };
    exports.Authorizer = Authorizer;
  }
});

// node_modules/remix-auth/build/error.js
var require_error = __commonJS({
  "node_modules/remix-auth/build/error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AuthorizationError = void 0;
    var AuthorizationError2 = class extends Error {
      constructor(message, cause) {
        super(message);
        this.cause = cause;
      }
    };
    exports.AuthorizationError = AuthorizationError2;
  }
});

// node_modules/remix-auth/build/strategy.js
var require_strategy = __commonJS({
  "node_modules/remix-auth/build/strategy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Strategy = void 0;
    var server_runtime_1 = (init_esm(), __toCommonJS(esm_exports));
    var error_1 = require_error();
    var Strategy = class {
      constructor(verify) {
        this.verify = verify;
      }
      /**
       * Throw an AuthorizationError or a redirect to the failureRedirect.
       * @param message The error message to set in the session.
       * @param request The request to get the cookie out of.
       * @param sessionStorage The session storage to retrieve the session from.
       * @param options The strategy options.
       * @throws {AuthorizationError} If the throwOnError is set to true.
       * @throws {Response} If the failureRedirect is set or throwOnError is false.
       * @returns {Promise<never>}
       */
      async failure(message, request, sessionStorage, options, cause) {
        if (!options.failureRedirect) {
          if (options.throwOnError)
            throw new error_1.AuthorizationError(message, cause);
          throw (0, server_runtime_1.json)({ message }, 401);
        }
        let session = await sessionStorage.getSession(request.headers.get("Cookie"));
        session.flash(options.sessionErrorKey, { message });
        throw (0, server_runtime_1.redirect)(options.failureRedirect, {
          headers: { "Set-Cookie": await sessionStorage.commitSession(session) }
        });
      }
      /**
       * Returns the user data or throw a redirect to the successRedirect.
       * @param user The user data to set in the session.
       * @param request The request to get the cookie out of.
       * @param sessionStorage The session storage to retrieve the session from.
       * @param options The strategy options.
       * @returns {Promise<User>} The user data.
       * @throws {Response} If the successRedirect is set, it will redirect to it.
       */
      async success(user, request, sessionStorage, options) {
        var _a;
        if (!options.successRedirect)
          return user;
        let session = await sessionStorage.getSession(request.headers.get("Cookie"));
        session.set(options.sessionKey, user);
        session.set(options.sessionStrategyKey, (_a = options.name) !== null && _a !== void 0 ? _a : this.name);
        throw (0, server_runtime_1.redirect)(options.successRedirect, {
          headers: { "Set-Cookie": await sessionStorage.commitSession(session) }
        });
      }
    };
    exports.Strategy = Strategy;
  }
});

// node_modules/remix-auth/build/index.js
var require_build = __commonJS({
  "node_modules/remix-auth/build/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_authenticator(), exports);
    __exportStar(require_authorizer(), exports);
    __exportStar(require_error(), exports);
    __exportStar(require_strategy(), exports);
  }
});

// empty-module:../../server/services/auth.server
var require_auth = __commonJS({
  "empty-module:../../server/services/auth.server"(exports, module) {
    module.exports = {};
  }
});

// empty-module:../../server/services/user.session.server
var require_user_session = __commonJS({
  "empty-module:../../server/services/user.session.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/auth+/login.tsx
var import_node = __toESM(require_node(), 1);
var import_remix_auth = __toESM(require_build(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_user_session = __toESM(require_user_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/auth+/login.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/auth+/login.tsx"
  );
  import.meta.hot.lastModified = "1711711034173.0066";
}
function useQuery(key) {
  _s();
  return new URLSearchParams(useLocation().search).get(key);
}
_s(useQuery, "EuD9q2dZ34PfN/QO2OBhBzeMxmY=", false, function() {
  return [useLocation];
});
function Login({}) {
  _s2();
  const type = useQuery("type");
  console.log("type", type);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex min-h-full flex-1 flex-col\n            gap-8\n            justify-center py-12 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:mx-auto sm:w-full sm:max-w-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "mx-auto h-10 w-auto", src: "/logow.png", alt: "Your Company" }, void 0, false, {
        fileName: "app/routes/auth+/login.tsx",
        lineNumber: 67,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900", children: "Sign in to your account" }, void 0, false, {
        fileName: "app/routes/auth+/login.tsx",
        lineNumber: 68,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/auth+/login.tsx",
      lineNumber: 66,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " sm:mx-auto sm:w-full sm:max-w-[480px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white px-6 py-6 shadow sm:rounded-lg sm:px-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/auth/google`, className: "flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5", "aria-hidden": "true", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z", fill: "#EA4335" }, void 0, false, {
            fileName: "app/routes/auth+/login.tsx",
            lineNumber: 82,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z", fill: "#4285F4" }, void 0, false, {
            fileName: "app/routes/auth+/login.tsx",
            lineNumber: 83,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z", fill: "#FBBC05" }, void 0, false, {
            fileName: "app/routes/auth+/login.tsx",
            lineNumber: 84,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z", fill: "#34A853" }, void 0, false, {
            fileName: "app/routes/auth+/login.tsx",
            lineNumber: 85,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth+/login.tsx",
          lineNumber: 81,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-semibold leading-6", children: "Google" }, void 0, false, {
          fileName: "app/routes/auth+/login.tsx",
          lineNumber: 87,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/auth+/login.tsx",
        lineNumber: 80,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/auth/github`, className: "flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "h-5 w-5 fill-[#24292F]", "aria-hidden": "true", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { fillRule: "evenodd", d: "M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z", clipRule: "evenodd" }, void 0, false, {
          fileName: "app/routes/auth+/login.tsx",
          lineNumber: 92,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/auth+/login.tsx",
          lineNumber: 91,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-semibold leading-6", children: "GitHub (soon)" }, void 0, false, {
          fileName: "app/routes/auth+/login.tsx",
          lineNumber: 94,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/auth+/login.tsx",
        lineNumber: 90,
        columnNumber: 33
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/auth+/login.tsx",
      lineNumber: 79,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/auth+/login.tsx",
      lineNumber: 77,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/auth+/login.tsx",
      lineNumber: 75,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/auth+/login.tsx",
      lineNumber: 73,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/auth+/login.tsx",
    lineNumber: 63,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/auth+/login.tsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
}
_s2(Login, "GWrjPuowT8ZR4o/wphma6XyDw4g=", false, function() {
  return [useQuery];
});
_c = Login;
var _c;
$RefreshReg$(_c, "Login");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Login as default
};
//# sourceMappingURL=/build/routes/auth+/login-WHF6NJP4.js.map
