import { setImportBuildGetters } from "vike/__internal/loadImportBuild";
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const pageConfigsSerialized = [
  {
    pageId: "/src/pages/_error",
    isErrorPage: true,
    routeFilesystem: void 0,
    loadConfigValuesAll: () => import("./entries/src_pages_error.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/src/pages/account",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/account", "definedBy": "/src/pages/account/" },
    loadConfigValuesAll: () => import("./entries/src_pages_account.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/src/pages/index",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/", "definedBy": "/src/pages/index/" },
    loadConfigValuesAll: () => import("./entries/src_pages_index.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/src/pages/search",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/search", "definedBy": "/src/pages/search/" },
    loadConfigValuesAll: () => import("./entries/src_pages_search.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  }
];
const pageConfigGlobalSerialized = {
  configValuesSerialized: {}
};
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesExportNamesEagerIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerIsomorph = { ...pageFilesExportNamesEagerIsomorph1 };
pageFilesExportNamesEager[".page"] = pageFilesExportNamesEagerIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesExportNamesEagerServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerServer = { ...pageFilesExportNamesEagerServer1 };
pageFilesExportNamesEager[".page.server"] = pageFilesExportNamesEagerServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({});
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
const pageFiles = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  neverLoaded,
  pageConfigGlobalSerialized,
  pageConfigsSerialized,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
}, Symbol.toStringTag, { value: "Module" }));
{
  const assetsManifest = {
  "_chunk-!~{006}~.js": {
    "file": "assets/static/src_pages_error_Page-d3bdd0c8.CiuEmDiX.css",
    "src": "_chunk-!~{006}~.js"
  },
  "_chunk-!~{007}~.js": {
    "file": "assets/static/src_pages_index_Page-36bfbe09.BfyhQT6q.css",
    "src": "_chunk-!~{007}~.js"
  },
  "_chunk-!~{008}~.js": {
    "file": "assets/static/src_pages_styles-d7b37ea3.BqIwxAj2.css",
    "src": "_chunk-!~{008}~.js"
  },
  "_chunk-!~{009}~.js": {
    "file": "assets/static/vike-react-26061bd6.B6DZbHFi.css",
    "src": "_chunk-!~{009}~.js"
  },
  "_chunk-C1Bk22SA.js": {
    "file": "assets/chunks/chunk-C1Bk22SA.js",
    "name": "_Layout",
    "css": [
      "assets/static/vike-react-26061bd6.B6DZbHFi.css",
      "assets/static/src_pages_styles-d7b37ea3.BqIwxAj2.css"
    ]
  },
  "node_modules/vike/dist/esm/client/client-routing-runtime/entry.js": {
    "file": "assets/entries/entry-client-routing.DwCkUBgY.js",
    "name": "entries/entry-client-routing",
    "src": "node_modules/vike/dist/esm/client/client-routing-runtime/entry.js",
    "isEntry": true,
    "dynamicImports": [
      "virtual:vike:pageConfigValuesAll:client:/src/pages/_error",
      "virtual:vike:pageConfigValuesAll:client:/src/pages/account",
      "virtual:vike:pageConfigValuesAll:client:/src/pages/index",
      "virtual:vike:pageConfigValuesAll:client:/src/pages/search"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/src/pages/_error": {
    "file": "assets/entries/src_pages_error.DwiPaM9i.js",
    "name": "entries/src/pages/_error",
    "src": "virtual:vike:pageConfigValuesAll:client:/src/pages/_error",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-C1Bk22SA.js"
    ],
    "css": [
      "assets/static/src_pages_error_Page-d3bdd0c8.CiuEmDiX.css",
      "assets/static/vike-react-26061bd6.B6DZbHFi.css",
      "assets/static/src_pages_styles-d7b37ea3.BqIwxAj2.css"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/src/pages/account": {
    "file": "assets/entries/src_pages_account.F2utzOxZ.js",
    "name": "entries/src/pages/account",
    "src": "virtual:vike:pageConfigValuesAll:client:/src/pages/account",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-C1Bk22SA.js"
    ],
    "css": [
      "assets/static/vike-react-26061bd6.B6DZbHFi.css",
      "assets/static/src_pages_styles-d7b37ea3.BqIwxAj2.css"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/src/pages/index": {
    "file": "assets/entries/src_pages_index.DcnKZozf.js",
    "name": "entries/src/pages/index",
    "src": "virtual:vike:pageConfigValuesAll:client:/src/pages/index",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-C1Bk22SA.js"
    ],
    "css": [
      "assets/static/src_pages_index_Page-36bfbe09.BfyhQT6q.css",
      "assets/static/vike-react-26061bd6.B6DZbHFi.css",
      "assets/static/src_pages_styles-d7b37ea3.BqIwxAj2.css"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/src/pages/search": {
    "file": "assets/entries/src_pages_search.DooiQ5WS.js",
    "name": "entries/src/pages/search",
    "src": "virtual:vike:pageConfigValuesAll:client:/src/pages/search",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-C1Bk22SA.js"
    ],
    "css": [
      "assets/static/vike-react-26061bd6.B6DZbHFi.css",
      "assets/static/src_pages_styles-d7b37ea3.BqIwxAj2.css"
    ]
  }
};
  const pluginManifest = {
    "version": "0.4.196",
    "usesClientRouter": false,
    "baseServer": "/ns/",
    "baseAssets": "/ns/",
    "includeAssetsImportedByServer": true,
    "redirects": {},
    "trailingSlash": false,
    "disableUrlNormalization": false
  };
  setImportBuildGetters({
    pageFiles: () => pageFiles,
    getAssetsManifest: () => assetsManifest,
    pluginManifest: () => pluginManifest
  });
}
