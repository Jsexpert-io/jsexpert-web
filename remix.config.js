/** @type {import('@remix-run/dev').AppConfig} */
import pkg from 'remix-flat-routes';
const { flatRoutes } = pkg;

export default {
  ignoredRouteFiles: ['**/*'],
  routes: async defineRoutes => {
    return flatRoutes('routes', defineRoutes)
  },
  tailwind: true,
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
};
