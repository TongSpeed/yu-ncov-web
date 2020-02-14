module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+/JJ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/BubbleChart");

/***/ }),

/***/ "+FwM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "+YD5":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LibraryBooks");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "0ezn":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Notifications");

/***/ }),

/***/ "3bqf":
/***/ (function(module, exports) {

module.exports = require("macoolka-ui-components/lib//Toolbar");

/***/ }),

/***/ "4D1s":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

var _typeof = __webpack_require__("iZP3");

var _WeakMap = __webpack_require__("G4HQ");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "7fVs":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-ssr");

/***/ }),

/***/ "7gG7":
/***/ (function(module, exports) {

module.exports = require("macoolka-ui-core");

/***/ }),

/***/ "84Bk":
/***/ (function(module, exports) {

module.exports = require("macoolka-ui-components/lib/List");

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "8HVz":
/***/ (function(module, exports) {

module.exports = require("macoolka-ui-components/lib/Tooltip");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "9r64":
/***/ (function(module, exports) {

module.exports = require("macoolka-ui-core/lib/event");

/***/ }),

/***/ "AJJM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("g/15");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, Object.assign({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "BPz9":
/***/ (function(module, exports) {

module.exports = require("macoolka-ui-components/lib/Divider");

/***/ }),

/***/ "Bjmp":
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "D+hd":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Language");

/***/ }),

/***/ "EDPY":
/***/ (function(module, exports) {

module.exports = require("macoolka-ui-components/lib/ListItem");

/***/ }),

/***/ "G4HQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lhFH");

/***/ }),

/***/ "GvLQ":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "H4Qj":
/***/ (function(module, exports) {

module.exports = require("macoolka-ui-core/lib/utils");

/***/ }),

/***/ "Ir8c":
/***/ (function(module, exports) {

module.exports = require("macoolka-ui-components/lib/Breadcrumbs");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "JtBz":
/***/ (function(module, exports) {

module.exports = require("macoolka-ui-components/lib/Button");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "L1JV":
/***/ (function(module, exports) {

module.exports = require("macoolka-reactive");

/***/ }),

/***/ "LFxp":
/***/ (function(module, exports) {

module.exports = require("macoolka-ui-components/lib/FlexGrow");

/***/ }),

/***/ "LiA4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AppContext */
/* unused harmony export useAppState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useAppComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return useLink; });
/* unused harmony export useRouter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return useAppInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useAppConstant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return useAppResource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return useAppStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return useNavItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return usePageTitles; });
/* unused harmony export useSetPageTitles */
/* unused harmony export usePage */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var macoolka_ui_core_lib_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9r64");
/* harmony import */ var macoolka_ui_core_lib_event__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(macoolka_ui_core_lib_event__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var macoolka_reactive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("L1JV");
/* harmony import */ var macoolka_reactive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(macoolka_reactive__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fp_ts_lib_pipeable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("PJ1Q");
/* harmony import */ var fp_ts_lib_pipeable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fp_ts_lib_pipeable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var macoolka_object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("rVfI");
/* harmony import */ var macoolka_object__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(macoolka_object__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var macoolka_ui_core_lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("H4Qj");
/* harmony import */ var macoolka_ui_core_lib_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(macoolka_ui_core_lib_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const AppContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
const useAppState = ({
  style,
  info,
  components,
  constant,
  resource,
  functions,
  navItems
}) => {
  const {
    state: pageTitles = [],
    callback: setPageTitles
  } = Object(macoolka_ui_core_lib_event__WEBPACK_IMPORTED_MODULE_1__["useEventCallback"])({
    callback: ({
      event
    }) => event,
    initialState: []
  });
  const {
    state: isShowBar = true,
    callback: setShowBar
  } = Object(macoolka_ui_core_lib_event__WEBPACK_IMPORTED_MODULE_1__["useEventCallback"])({
    callback: ({
      event
    }) => event,
    initialState: Object(macoolka_object__WEBPACK_IMPORTED_MODULE_4__["get"])(style, 'isShowBar', true)
  });
  const {
    state: isOpenNav,
    callback: toggleNav
  } = Object(macoolka_ui_core_lib_event__WEBPACK_IMPORTED_MODULE_1__["useEventCallback"])({
    callback: ({
      event,
      state
    }) => Object(fp_ts_lib_pipeable__WEBPACK_IMPORTED_MODULE_3__["pipe"])(event, Object(macoolka_reactive__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(state), Object(macoolka_reactive__WEBPACK_IMPORTED_MODULE_2__["map"])(([_, state]) => !state)),
    initialState: Object(macoolka_object__WEBPACK_IMPORTED_MODULE_4__["get"])(style, 'isOpenNav', true)
  });
  const {
    state: isOpenExpandNav,
    callback: toggleExpandNav
  } = Object(macoolka_ui_core_lib_event__WEBPACK_IMPORTED_MODULE_1__["useEventCallback"])({
    callback: ({
      event,
      state
    }) => Object(fp_ts_lib_pipeable__WEBPACK_IMPORTED_MODULE_3__["pipe"])(event, Object(macoolka_reactive__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(state), Object(macoolka_reactive__WEBPACK_IMPORTED_MODULE_2__["map"])(([_, state]) => !state)),
    initialState: Object(macoolka_object__WEBPACK_IMPORTED_MODULE_4__["get"])(style, 'isOpenExpandNav', false)
  });
  const {
    state: isLight,
    callback: toggleLight
  } = Object(macoolka_ui_core_lib_event__WEBPACK_IMPORTED_MODULE_1__["useEventCallback"])({
    callback: ({
      event,
      state
    }) => Object(fp_ts_lib_pipeable__WEBPACK_IMPORTED_MODULE_3__["pipe"])(event, Object(macoolka_reactive__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(state), Object(macoolka_reactive__WEBPACK_IMPORTED_MODULE_2__["map"])(([_, state]) => {
      return !state;
    })),
    initialState: Object(macoolka_object__WEBPACK_IMPORTED_MODULE_4__["get"])(style, 'isLight', true)
  });
  const {
    state: locale,
    callback: setLocale
  } = Object(macoolka_ui_core_lib_event__WEBPACK_IMPORTED_MODULE_1__["useEventCallback"])({
    callback: ({
      event
    }) => event,
    initialState: Object(macoolka_object__WEBPACK_IMPORTED_MODULE_4__["get"])(style, 'locale', 'en')
  });
  /*     const { state: pageTitle, callback: setPageTitle } = useEventCallback<PageTitle[], PageTitle[]>(
       {
         callback: ({ event }) => event,
         initialState: [],
       })  */
  // let pageTitle=[]

  return {
    style: {
      isShowBar,
      setShowBar,
      isOpenNav,
      toggleNav,
      isOpenExpandNav,
      toggleExpandNav,
      isLight,
      toggleLight,
      locale,
      setLocale
    },
    page: {
      pageTitles,
      setPageTitles
    },
    info: _objectSpread({}, info, {
      i18n: false
    }),
    navItems,
    components,
    functions,
    constant,
    resource
  };
};
const AppProvider = ({
  children,
  data
}) => {
  const appState = useAppState(data);
  const {
    style: {
      isLight,
      toggleLight
    },
    info: {}
  } = appState;
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (false) {}
  }, []); // persist paletteType

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    document.cookie = `paletteType=${isLight ? 'light' : 'dark'};path=/;max-age=31536000`;
  }, [isLight]);
  const theme = data.style.theme;
  /*  React.useMemo(() => {
    return createTheme(data.style.theme, locale as any)(data.style.buildComponents);
   }, [isLight]); */

  return __jsx(AppContext.Provider, {
    value: appState
  }, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["ThemeProvider"], {
    theme: theme
  }, children));
};
const useAppComponents = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(AppContext).components;
const useLink = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(AppContext).components.Link;
const useRouter = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(AppContext).functions.useRouter();
const useAppInfo = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(AppContext).info;
const useAppConstant = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(AppContext).constant;
const useAppResource = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(AppContext).resource;
const useAppStyle = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(AppContext).style;
const useNavItems = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(AppContext).navItems;
const usePageTitles = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(AppContext).page.pageTitles;
const useSetPageTitles = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(AppContext).page.setPageTitles; //export const useQuery = () => React.useContext(AppContext).functions.query

const usePage = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(AppContext).page;

/***/ }),

/***/ "NgPL":
/***/ (function(module, exports) {

module.exports = require("macoolka-ui-components/lib/Html");

/***/ }),

/***/ "Ojzm":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Unarchive");

/***/ }),

/***/ "Oyez":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "PJ1Q":
/***/ (function(module, exports) {

module.exports = require("fp-ts/lib/pipeable");

/***/ }),

/***/ "Q01v":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "TG1l":
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "VJzK":
/***/ (function(module, exports) {

module.exports = require("macoolka-ui-components/lib/Container");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "XWCx":
/***/ (function(module, exports) {

module.exports = require("macoolka-ui-components/lib/AppBar");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "YzID":
/***/ (function(module, exports) {

module.exports = require("macoolka-ui-components/lib/Element");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _interopRequireWildcard = __webpack_require__("5Uuq");

exports.__esModule = true;
exports.default = void 0;

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _utils = __webpack_require__("g/15");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getHref() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    return (0, _url.resolve)(pathname, parsedHref);
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getHref()];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var href = this.getHref();

    _router.default.prefetch(href);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cVmi":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocationOn");

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "@material-ui/core/CssBaseline"
var CssBaseline_ = __webpack_require__("AJJM");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__("GvLQ");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "macoolka-ui-components/lib/NoSsr"
var NoSsr_ = __webpack_require__("sRIR");
var NoSsr_default = /*#__PURE__*/__webpack_require__.n(NoSsr_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./src/app/components/NProgressBar.tsx
var __jsx = external_react_default.a.createElement;





external_nprogress_default.a.configure({
  template: `
    <div class="nprogress-bar" role="bar">
      <dt></dt>
      <dd></dd>
    </div>
  `
});
router_default.a.events.on('routeChangeStart', () => {
  external_nprogress_default.a.start();
});
router_default.a.events.on('routeChangeComplete', () => {
  external_nprogress_default.a.done();
});
router_default.a.events.on('routeChangeError', () => {
  external_nprogress_default.a.done();
});
const GlobalStyles = Object(styles_["withStyles"])(theme => {
  return {
    '@global': {
      '#nprogress': {
        direction: 'ltr',
        pointerEvents: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        zIndex: theme.zIndex.tooltip,
        backgroundColor: '#e0e0e0',
        '& .nprogress-bar': {
          position: 'fixed',
          backgroundColor: theme.app.nprogress.color,
          top: 0,
          left: 0,
          right: 0,
          height: 2
        },
        '& dd, & dt': {
          position: 'absolute',
          top: 0,
          height: 2,
          boxShadow: `${theme.app.nprogress.color} 1px 0 6px 1px`,
          borderRadius: '100%',
          animation: 'mui-nprogress-pulse 2s ease-out 0s infinite'
        },
        '& dd': {
          opacity: 0.6,
          width: 20,
          right: 0,
          clip: 'rect(-6px,22px,14px,10px)'
        },
        '& dt': {
          opacity: 0.6,
          width: 180,
          right: -80,
          clip: 'rect(-6px,90px,14px,-6px)'
        }
      },
      '@keyframes mui-nprogress-pulse': {
        '30%': {
          opacity: 0.6
        },
        '60%': {
          opacity: 0
        },
        to: {
          opacity: 0.6
        }
      }
    }
  };
}, {
  flip: false,
  name: 'App.ProgressBar'
})(() => null);
/**
 * Elegant and ready to use wrapper on top of https://github.com/rstacruz/nprogress/.
 * The implementation is highly inspired by the YouTube one.
 */

const NProgressBar = props => {
  return __jsx(NoSsr_default.a, null, props.children, __jsx(GlobalStyles, null));
};

/* harmony default export */ var components_NProgressBar = (NProgressBar);
// EXTERNAL MODULE: external "macoolka-ui-components/lib/List"
var List_ = __webpack_require__("84Bk");
var List_default = /*#__PURE__*/__webpack_require__.n(List_);

// EXTERNAL MODULE: external "macoolka-ui-components/lib/Divider"
var Divider_ = __webpack_require__("BPz9");
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);

// EXTERNAL MODULE: external "macoolka-ui-components/lib/ListItem"
var ListItem_ = __webpack_require__("EDPY");
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);

// EXTERNAL MODULE: external "macoolka-ui-components/lib/Button"
var Button_ = __webpack_require__("JtBz");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "macoolka-ui-components/lib/Collapse"
var Collapse_ = __webpack_require__("ssEw");
var Collapse_default = /*#__PURE__*/__webpack_require__.n(Collapse_);

// EXTERNAL MODULE: external "macoolka-ui-components/lib/Element"
var Element_ = __webpack_require__("YzID");
var Element_default = /*#__PURE__*/__webpack_require__.n(Element_);

// EXTERNAL MODULE: ./src/app/AppContext.tsx
var AppContext = __webpack_require__("LiA4");

// EXTERNAL MODULE: external "macoolka-object"
var external_macoolka_object_ = __webpack_require__("rVfI");

// EXTERNAL MODULE: external "macoolka-ui-core"
var external_macoolka_ui_core_ = __webpack_require__("7gG7");

// CONCATENATED MODULE: ./src/app/components/AppDrawerNavItem.tsx
var AppDrawerNavItem_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 //import clsx from 'clsx';









const useStyles = Object(styles_["makeStyles"])(theme => ({
  item: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0
  },
  itemLeaf: _objectSpread({
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
    height: "50px"
  }, Object(external_macoolka_ui_core_["parseStandProp"])(theme)({
    mkMarginH: "medium",
    mkPaddingH: "medium",
    mkPaddingV: "small",
    mkMarginTop: "small"
  }), {}, Object(external_macoolka_object_["get"])(theme, ["components", "NavItem"], {})),
  button: {
    letterSpacing: 0,
    justifyContent: 'flex-start',
    textTransform: 'none',
    width: '100%',
    color: theme.palette.secondary.main
  },
  buttonLeaf: {
    letterSpacing: 0,
    justifyContent: 'flex-start',
    textTransform: 'none',
    width: '100%',
    fontWeight: theme.typography.fontWeightRegular,
    '&.depth-0': {
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium
  }
}));

const AppDrawerNavItem = (_ref) => {
  let {
    children,
    depth,
    data,
    // href,
    onClick,
    openImmediately = false,
    topLevel = false
  } = _ref,
      other = _objectWithoutProperties(_ref, ["children", "depth", "data", "onClick", "openImmediately", "topLevel"]);

  const classes = useStyles();
  const [open, setOpen] = external_react_default.a.useState(openImmediately);

  const handleClick = () => {
    setOpen(oldOpen => !oldOpen);
  };

  const style = {
    paddingLeft: 8 * (3 + 2 * depth)
  }; //  const LinkProps = useNavItemLinkProp()(data)

  const Link = Object(AppContext["g" /* useLink */])();
  const Icon = data.icon;

  if (data.id) {
    return AppDrawerNavItem_jsx(Link, {
      href: data.href,
      as: data.as
    }, AppDrawerNavItem_jsx(ListItem_default.a, _extends({
      component: Button_default.a,
      onClick: onClick,
      disableTouchRipple: true,
      className: classes.itemLeaf,
      disableGutters: true
    }, other, {
      button: true,
      mkTextColor: "inherit"
    }), AppDrawerNavItem_jsx(Icon, null), AppDrawerNavItem_jsx(Element_default.a, {
      mkMarginLeft: "medium",
      mkTypography: "subtitle1"
    }, data.title)));
  }

  return AppDrawerNavItem_jsx(ListItem_default.a, _extends({
    className: classes.item,
    disableGutters: true,
    button: true
  }, other), AppDrawerNavItem_jsx(Button_default.a, {
    classes: {
      root: classes.button,
      label: topLevel ? 'algolia-lvl0' : ''
    },
    onClick: handleClick,
    style: style
  }, data.title), AppDrawerNavItem_jsx(Collapse_default.a, {
    in: open,
    timeout: "auto",
    unmountOnExit: true
  }, children));
};

/* harmony default export */ var components_AppDrawerNavItem = (AppDrawerNavItem);
// EXTERNAL MODULE: external "macoolka-ui-components/lib/Html"
var Html_ = __webpack_require__("NgPL");

// CONCATENATED MODULE: ./src/app/components/AppTitle.tsx
var AppTitle_jsx = external_react_default.a.createElement;




/* harmony default export */ var AppTitle = (() => {
  const Link = Object(AppContext["g" /* useLink */])();
  const {
    title,
    href,
    as,
    logo
  } = Object(AppContext["d" /* useAppInfo */])();
  return AppTitle_jsx(Element_default.a, {
    mkFlex: "rowCenter",
    mkHeight: "appbar",
    mkPadding: "medium",
    mkCursor: "pointer",
    mkAbsolute: "top",
    mkColor: "inherit"
  }, AppTitle_jsx(Html_["img"], {
    mkMarginLeft: "medium",
    src: logo,
    mkWidth: "element_small",
    mkHeight: "element_small"
  }), AppTitle_jsx(Link, {
    href: href,
    as: as
  }, AppTitle_jsx(Element_default.a, {
    mkTypography: "h6",
    mkTextColor: "inherit",
    mkMarginLeft: "medium"
  }, title)));
});
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "@material-ui/core/Drawer"
var Drawer_ = __webpack_require__("Q01v");
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_);

// CONCATENATED MODULE: ./src/app/components/Sidebar.tsx
var Sidebar_jsx = external_react_default.a.createElement;

function Sidebar_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Sidebar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Sidebar_ownKeys(Object(source), true).forEach(function (key) { Sidebar_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Sidebar_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Sidebar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*eslint-disable*/





const Sidebar_useStyles = Object(styles_["makeStyles"])(theme => ({
  drawerPaper: () => Sidebar_objectSpread({}, Object(external_macoolka_ui_core_["parseStandProp"])(theme)({
    mkShadow: 0,
    zIndex: 1,
    mkPosition: 'fixed',
    mkPositionAlign: 'left',
    mkBorder: "none",
    flexShrink: 0,
    mkWidth: 'nav',
    mkScrollBar: "none",
    paddingTop: theme.box.height.bar_large,
    mkMedia: [{}, {
      mkHeight: 'fullScreen',
      mkShadow: 4,
      mkZIndex: "drawer"
    }, {
      //   left: "auto",
      mkHeight: "fullScreen",
      //  mkZIndex: "drawer",
      transform: `translate3d(${theme.box.width.nav}px, 0, 0)`,
      transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
      mkTextAlign: "left",
      borderTop: "none",
      mkPaddingH: "none"
    }]
  })),
  drawerPaperRTL: Sidebar_objectSpread({}, Object(external_macoolka_ui_core_["parseStandProp"])(theme)({
    mkMedia: [{}, {
      left: "auto !important",
      right: "0 !important"
    }, {
      left: "0  !important",
      right: "auto !important"
    }]
  })),
  hideOnlyXl: Sidebar_objectSpread({}, Object(external_macoolka_ui_core_["parseStandProp"])(theme)({
    mkMedia: [{}, {}, {
      mkVisible: "visible"
    }, {
      mkVisible: "none"
    }]
  })),
  showOnlyxl: Sidebar_objectSpread({}, Object(external_macoolka_ui_core_["parseStandProp"])(theme)({
    mkMedia: [{}, {}, {
      mkVisible: "none"
    }, {
      mkVisible: "visible"
    }]
  }))
}));

const Sidebar = ({
  rtlActive = false,
  open,
  children,
  handleDrawerToggle
}) => {
  const classes = Sidebar_useStyles();
  return Sidebar_jsx("div", null, Sidebar_jsx("div", {
    className: classes.hideOnlyXl
  }, Sidebar_jsx(Drawer_default.a, {
    variant: "temporary",
    anchor: rtlActive ? "left" : "right",
    open: open,
    classes: {
      paper: external_classnames_default()(classes.drawerPaper, {
        [classes.drawerPaperRTL]: rtlActive
      })
    },
    onClose: handleDrawerToggle,
    ModalProps: {
      keepMounted: true // Better open performance on mobile.

    }
  }, children)), Sidebar_jsx("div", {
    className: classes.showOnlyxl
  }, Sidebar_jsx(Drawer_default.a, {
    anchor: rtlActive ? "left" : "right",
    variant: "permanent",
    open: open,
    classes: {
      paper: external_classnames_default()(classes.drawerPaper, {
        [classes.drawerPaperRTL]: rtlActive
      })
    }
  }, children)));
};

/* harmony default export */ var components_Sidebar = (Sidebar);
// CONCATENATED MODULE: ./src/app/components/AppDrawer.tsx
var AppDrawer_jsx = external_react_default.a.createElement;

function AppDrawer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function AppDrawer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { AppDrawer_ownKeys(Object(source), true).forEach(function (key) { AppDrawer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { AppDrawer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function AppDrawer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









 //import { QueryCategories } from '../../schema/ggl'

let savedScrollTop = undefined;

const PersistScroll = ({
  children
}) => {
  const rootRef = external_react_default.a.useRef(null);
  external_react_default.a.useEffect(() => {
    const parent = rootRef.current ? rootRef.current.parentElement : null;
    const activeElement = document.querySelector('.drawer-active');

    if (!parent || !activeElement || !activeElement.scrollIntoView) {
      return undefined;
    }

    const activeBox = activeElement.getBoundingClientRect();

    if (savedScrollTop !== null || activeBox.top < savedScrollTop) {
      // Center the selected item in the list container.
      activeElement.scrollIntoView(); // Fix a Chrome issue, reset the tabbable ring back to the top of the document.

      document.body.scrollIntoView();
    } else {
      parent.scrollTop = savedScrollTop;
    }

    return () => {
      savedScrollTop = parent.scrollTop;
    };
  }, []);
  return AppDrawer_jsx("div", {
    ref: rootRef
  }, children);
};

const AppDrawer_useStyles = Object(styles_["makeStyles"])(theme => {
  return {
    appNav: AppDrawer_objectSpread({}, Object(external_macoolka_ui_core_["parseStandProp"])(theme)({
      mkScrollBar: "vertical",
      height: 'calc(100vh - 75px)'
    })),
    root: AppDrawer_objectSpread({}, Object(external_macoolka_ui_core_["parseStandProp"])(theme)({
      color: theme.app.appNav.color,
      backgroundColor: theme.app.appNav.backgroundColor
    })),
    divider: {
      background: theme.app.appNavDivider.backgroundColor
    }
  };
});

const NavItem = ({
  data,
  depth,
  props
}) => {
  const title = data.title;
  /*   if (page.forest.length > 0) {
           const topLevel = isNone(activePage) ? false : activePage.value.id.indexOf(`${page.value.id}`) === 0;
        return <AppDrawerNavItem
            // linkProps={page.linkProps}
            depth={depth}
            key={title}
            topLevel={topLevel}
            openImmediately={topLevel}
            title={title}
        >
            <List>
                {page.forest.map(a =>
                    <NavItem key={a.value.id} page={a} activePage={activePage} depth={depth + 1} props={props}{...params}></NavItem>
                   )}
            </List>
   
        </AppDrawerNavItem>
       } else { */

  return AppDrawer_jsx(components_AppDrawerNavItem //linkProps={page.linkProps}
  , {
    depth: depth,
    key: title,
    data: data
  });
  /*    href='/[id]'
     as={`/${page.id}`} */
  //   onClick={props.onClose}
}; // iOS is hosted on high-end devices. We can enable the backdrop transition without
// dropping frames. The performance will be good enough.
// So: <SwipeableDrawer disableBackdropTransition={false} />
//const iOS = (process as any).browser && /iPad|iPhone|iPod/.test(navigator.userAgent);


const AppDrawer = props => {
  const {
    toggleExpandNav,
    isOpenExpandNav
  } = Object(AppContext["f" /* useAppStyle */])();
  const classes = AppDrawer_useStyles();
  const navItems = Object(AppContext["h" /* useNavItems */])();
  return AppDrawer_jsx(components_Sidebar, {
    open: isOpenExpandNav,
    handleDrawerToggle: () => toggleExpandNav({}),
    rtlActive: false
  }, AppDrawer_jsx("div", {
    className: classes.root
  }, AppDrawer_jsx(AppTitle, null), AppDrawer_jsx(Divider_default.a, {
    className: classes.divider
  }), AppDrawer_jsx(PersistScroll, null, AppDrawer_jsx(List_default.a, {
    className: classes.appNav
  }, navItems.map(a => AppDrawer_jsx(NavItem, {
    key: a.id,
    data: a,
    depth: 0,
    props: props
  }))))));
};

/* harmony default export */ var components_AppDrawer = (AppDrawer);
// EXTERNAL MODULE: external "macoolka-ui-components/lib/Tooltip"
var Tooltip_ = __webpack_require__("8HVz");
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);

// EXTERNAL MODULE: external "macoolka-ui-components/lib/IconButton"
var IconButton_ = __webpack_require__("sTux");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/icons/Menu"
var Menu_ = __webpack_require__("4D1s");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);

// CONCATENATED MODULE: ./src/app/components/MenuAction.tsx
var MenuAction_jsx = external_react_default.a.createElement;






const MenuAction_useStyles = Object(styles_["makeStyles"])(theme => ({
  navIconHide: {
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  }
}));
/* harmony default export */ var MenuAction = (() => {
  const classes = MenuAction_useStyles();
  const {
    openDrawer
  } = Object(AppContext["c" /* useAppConstant */])();
  const {
    toggleExpandNav
  } = Object(AppContext["f" /* useAppStyle */])();
  return MenuAction_jsx(Tooltip_default.a, {
    title: openDrawer,
    enterDelay: 300
  }, MenuAction_jsx(IconButton_default.a, {
    edge: "start",
    color: "inherit",
    "aria-label": openDrawer,
    onClick: toggleExpandNav,
    className: classes.navIconHide
  }, MenuAction_jsx(Menu_default.a, null)));
});
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: external "macoolka-ui-components/lib/Container"
var Container_ = __webpack_require__("VJzK");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);

// CONCATENATED MODULE: ./src/app/components/AppContent.tsx
var AppContent_jsx = external_react_default.a.createElement;

function AppContent_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function AppContent_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { AppContent_ownKeys(Object(source), true).forEach(function (key) { AppContent_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { AppContent_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function AppContent_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const AppContent_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: AppContent_objectSpread({
    //flex: '1 1 100%',
    position: 'relative',
    //  width: '1160px',
    outline: 0
  }, Object(external_macoolka_ui_core_["parseStandProp"])(theme)({
    mkPaddingBottom: 'large',
    paddingTop: 80 + 16,
    left: 0,
    mkMedia: [{
      // mkContentWidth: 'small',
      mkWidth: 'full',
      mkPaddingH: 'large'
    }, {
      mkWidth: 'app_medium'
    }, {
      mkWidth: 'app_large',
      mkBlock: 'center',
      left: 0
    }, {
      left: theme.box.width.nav,
      width: `calc(100% - ${theme.box.width.nav}px)`,
      mkPaddingH: 'large'
    }]
  }))
}));

const AppContent = ({
  children,
  className
}) => {
  const classes = AppContent_useStyles();
  return AppContent_jsx(Container_default.a, {
    component: "main",
    id: "main-content",
    tabIndex: -1,
    className: external_clsx_default()(classes.root, className)
  }, children);
};

/* harmony default export */ var components_AppContent = (AppContent);
// CONCATENATED MODULE: ./src/app/components/AppBody.ts

/* harmony default export */ var AppBody = (Object(external_macoolka_ui_core_["esn"])({
  name: 'App.Body',
  defaultProps: {},
  tag: 'div',
  style: () => ({
    mkColor: 'background.default',
    mkScrollBar: 'none',
    textRendering: 'optimizeLegibility',
    mkMinHeight: 'fullScreen',
    display: 'flex'
  })
}));
// EXTERNAL MODULE: external "macoolka-ui-components/lib/Breadcrumbs"
var Breadcrumbs_ = __webpack_require__("Ir8c");
var Breadcrumbs_default = /*#__PURE__*/__webpack_require__.n(Breadcrumbs_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./src/app/components/PageTitle.tsx
var PageTitle_jsx = external_react_default.a.createElement;





function AppHeader() {
  const info = Object(AppContext["d" /* useAppInfo */])();
  const Link = Object(AppContext["g" /* useLink */])();
  const pageTitles = Object(AppContext["i" /* usePageTitles */])(); //React.use

  const title = pageTitles.reduce((b, a) => {
    return `${a.title}_${b}`;
  }, info.title);
  return PageTitle_jsx(external_react_default.a.Fragment, null, PageTitle_jsx(head_default.a, null, PageTitle_jsx("title", null, title)), PageTitle_jsx(Breadcrumbs_default.a, {
    maxItems: 5,
    "aria-label": "breadcrumb",
    color: "inherit"
  }, pageTitles.map(({
    title,
    href,
    as
  }) => {
    const t = PageTitle_jsx(Element_default.a, {
      mkColor: "inherit",
      key: title
    }, title);

    return href ? PageTitle_jsx(Link, {
      key: title,
      href: href,
      as: as
    }, PageTitle_jsx(Element_default.a, {
      mkCursor: "pointer",
      mkColor: "inherit"
    }, t)) : t;
  })));
}
// EXTERNAL MODULE: external "macoolka-ui-components/lib/AppBar"
var AppBar_ = __webpack_require__("XWCx");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "macoolka-ui-components/lib//Toolbar"
var Toolbar_ = __webpack_require__("3bqf");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);

// CONCATENATED MODULE: ./src/app/components/AppBar.tsx
var AppBar_jsx = external_react_default.a.createElement;

function AppBar_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function AppBar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { AppBar_ownKeys(Object(source), true).forEach(function (key) { AppBar_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { AppBar_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function AppBar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const AppBar_useStyles = Object(styles_["makeStyles"])(theme => ({
  appBar: AppBar_objectSpread({}, Object(external_macoolka_ui_core_["parseStandProp"])(theme)({
    mkHeight: "bar_large",
    mkMedia: [{
      mkHeight: "bar_small"
    }, {
      mkHeight: "bar_medium"
    }, {
      width: '100%'
    }, {
      width: `calc(100% - ${theme.box.width.nav}px)`
    }]
  }), {
    color: theme.app.appBar.color,
    backgroundColor: theme.app.appBar.backgroundColor,
    transition: theme.transitions.create('left')
  })
  /*  appBarShift: {
    [theme.breakpoints.up('lg')]: {
      
    },
  }, */

}));

const AppBar = ({
  children
}) => {
  const classes = AppBar_useStyles();
  let appBarClassName = classes.appBar; // appBarClassName += ` ${classes.appBarShift}`;

  return AppBar_jsx(AppBar_default.a, {
    className: appBarClassName
  }, AppBar_jsx(Toolbar_default.a, null, children));
};

/* harmony default export */ var components_AppBar = (AppBar);
// EXTERNAL MODULE: external "jss"
var external_jss_ = __webpack_require__("q1C7");

// EXTERNAL MODULE: external "macoolka-ui-core/lib/utils"
var utils_ = __webpack_require__("H4Qj");

// CONCATENATED MODULE: ./src/app/helper.ts

async function registerServiceWorker() {
  if ('serviceWorker' in navigator && true && window.location.host.indexOf('material-ui.com') <= 0) {
    // register() automatically attempts to refresh the sw.js.
    const registration = await navigator.serviceWorker.register('/sw.js'); // Force the page reload for users.

    forcePageReload(registration);
  }
} // Inspired by
// https://developers.google.com/web/tools/workbox/guides/advanced-recipes#offer_a_page_reload_for_users

function forcePageReload(registration) {
  if (!navigator.serviceWorker.controller) {
    // The window client isn't currently controlled so it's a new service
    // worker that will activate immediately.
    return;
  }

  if (registration.waiting) {
    // SW is waiting to activate. Can occur if multiple clients open and
    // one of the clients is refreshed.
    registration.waiting.postMessage('skipWaiting');
    return;
  }

  function listenInstalledStateChange() {
    registration.installing.addEventListener('statechange', event => {
      if (event.target.state === 'installed' && registration.waiting) {
        // A new service worker is available, inform the user
        registration.waiting.postMessage('skipWaiting');
      } else if (event.target.state === 'activated') {
        // Force the control of the page by the activated service worker.
        window.location.reload();
      }
    });
  }

  if (registration.installing) {
    listenInstalledStateChange();
    return;
  } // We are currently controlled so a new SW may be found...
  // Add a listener in case a new SW is found,


  registration.addEventListener('updatefound', listenInstalledStateChange);
}

function loadDependencies(r) {
  Object.keys(r.loadJavscript).map(a => {
    Object(utils_["loadScript"])(a, document.querySelector(r.loadJavscript[a]));
  });
  Object.keys(r.loadJavscript).map(a => {
    Object(utils_["loadCSS"])(a, document.querySelector(r.loadJavscript[a]));
  });
}
// EXTERNAL MODULE: external "@material-ui/styles"
var external_material_ui_styles_ = __webpack_require__("Bjmp");

// EXTERNAL MODULE: external "macoolka-ui-components/lib/FlexGrow"
var FlexGrow_ = __webpack_require__("LFxp");
var FlexGrow_default = /*#__PURE__*/__webpack_require__.n(FlexGrow_);

// CONCATENATED MODULE: ./src/app/App.tsx
var App_jsx = external_react_default.a.createElement;





 //import AppSearch from './components/AppSearch'










let dependenciesLoaded = false; // Configure JSS

const jss = Object(external_jss_["create"])({
  plugins: [...Object(external_material_ui_styles_["jssPreset"])().plugins],
  insertionPoint:  false ? undefined : undefined
});

const AppFrame = ({
  children
}) => {
  const resource = Object(AppContext["e" /* useAppResource */])();
  const {
    bgImgUrl
  } = Object(AppContext["d" /* useAppInfo */])();
  const {
    isShowBar
  } = Object(AppContext["f" /* useAppStyle */])();
  const {
    PageRoot,
    PageToolBar
  } = Object(AppContext["b" /* useAppComponents */])();
  external_react_default.a.useEffect(() => {
    if (dependenciesLoaded) return;
    dependenciesLoaded = true;
    loadDependencies(resource);
    registerServiceWorker(); // Remove the server-side injected CSS.

    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return App_jsx(external_material_ui_styles_["StylesProvider"], {
    jss: jss
  }, App_jsx(AppBody, null, App_jsx(components_NProgressBar, null), App_jsx(CssBaseline_default.a, null), bgImgUrl && isShowBar ? App_jsx(Html_["img"], {
    src: bgImgUrl,
    mkImage: "center",
    mkWidth: "full",
    mkHeight: "full",
    mkFixed: "full"
  }) : undefined, App_jsx(components_AppBar, null, App_jsx(MenuAction, null), App_jsx(AppHeader, null), App_jsx(FlexGrow_default.a, null)), App_jsx(components_AppDrawer, {
    disablePermanent: true
  }), App_jsx(components_AppContent, null, App_jsx(PageRoot, null, children))));
};

/* harmony default export */ var App = (AppFrame);
// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "apollo-client"
var external_apollo_client_ = __webpack_require__("Oyez");

// EXTERNAL MODULE: external "apollo-cache-inmemory"
var external_apollo_cache_inmemory_ = __webpack_require__("oz4i");

// EXTERNAL MODULE: external "apollo-link-http"
var external_apollo_link_http_ = __webpack_require__("TG1l");

// EXTERNAL MODULE: external "@material-ui/core/colors"
var colors_ = __webpack_require__("+FwM");

// CONCATENATED MODULE: ./src/app/Theme.tsx



const createTheme = (a = {}) => {
  const {
    options,
    buildComponents
  } = a;
  return Object(external_macoolka_ui_core_["createTheme"])({
    options: Object(external_macoolka_object_["merge"])({}, {
      app: {
        nprogress: {
          color: '#000'
        },
        appNav: {
          backgroundColor: "#fff",
          color: "inherit"
        },
        appBar: {
          backgroundColor: colors_["blue"][700],
          color: "#fff"
        },
        appContent: {
          backgroundColor: colors_["grey"][100],
          color: "inherit"
        },
        appNavDivider: {
          backgroundColor: "rgba(0, 0, 0,0.38)"
        }
      }
    }, options),
    buildComponents
  });
};
const highDensity = {
  props: {
    MuiButton: {
      size: 'small'
    },
    MuiFilledInput: {
      margin: 'dense'
    },
    MuiFormControl: {
      margin: 'dense'
    },
    MuiFormHelperText: {
      margin: 'dense'
    },
    MuiIconButton: {
      size: 'small'
    },
    MuiInputBase: {
      margin: 'dense'
    },
    MuiInputLabel: {
      margin: 'dense'
    },
    MuiListItem: {
      dense: true
    },
    MuiOutlinedInput: {
      margin: 'dense'
    },
    MuiFab: {
      size: 'small'
    },
    MuiTable: {
      size: 'small'
    },
    MuiTextField: {
      margin: 'dense'
    },
    MuiToolbar: {
      variant: 'dense'
    }
  },
  overrides: {
    MuiIconButton: {
      sizeSmall: {
        // minimal touch target hit spacing
        marginLeft: 4,
        marginRight: 4,
        padding: 12
      }
    }
  }
};
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "@material-ui/icons/Dashboard"
var Dashboard_ = __webpack_require__("vFf/");
var Dashboard_default = /*#__PURE__*/__webpack_require__.n(Dashboard_);

// EXTERNAL MODULE: external "@material-ui/icons/LibraryBooks"
var LibraryBooks_ = __webpack_require__("+YD5");
var LibraryBooks_default = /*#__PURE__*/__webpack_require__.n(LibraryBooks_);

// EXTERNAL MODULE: external "@material-ui/icons/BubbleChart"
var BubbleChart_ = __webpack_require__("+/JJ");
var BubbleChart_default = /*#__PURE__*/__webpack_require__.n(BubbleChart_);

// EXTERNAL MODULE: external "@material-ui/icons/LocationOn"
var LocationOn_ = __webpack_require__("cVmi");
var LocationOn_default = /*#__PURE__*/__webpack_require__.n(LocationOn_);

// EXTERNAL MODULE: external "@material-ui/icons/Notifications"
var Notifications_ = __webpack_require__("0ezn");
var Notifications_default = /*#__PURE__*/__webpack_require__.n(Notifications_);

// EXTERNAL MODULE: external "@material-ui/icons/Unarchive"
var Unarchive_ = __webpack_require__("Ojzm");
var Unarchive_default = /*#__PURE__*/__webpack_require__.n(Unarchive_);

// EXTERNAL MODULE: external "@material-ui/icons/Language"
var Language_ = __webpack_require__("D+hd");
var Language_default = /*#__PURE__*/__webpack_require__.n(Language_);

// CONCATENATED MODULE: ./data.ts












const data_theme = createTheme();
data_theme.app.appNav.backgroundColor = "#313131";
data_theme.app.appNav.color = "#fff";
data_theme.app.appNavDivider.backgroundColor = "rgba(255, 255, 255,0.38)";
data_theme.app.appBar.backgroundColor = data_theme.palette.primary.light;
data_theme.app.appBar.color = data_theme.palette.common.white;
const appData = {
  constant: {
    mainNavigation: "主导航",
    openDrawer: "打开主导航栏",
    close: "关闭",
    toggleTheme: "切换浅色/深色主题"
  },
  info: {
    title: '玉彤 nCoV',
    i18n: false,
    name: 'Macoolka',
    logo: '/static/logo.png',
    email: "macoolka@gmail.com",
    href: "/"
  },
  style: {
    isOpenNav: false,
    isOpenExpandNav: false,
    isShowBar: true,
    isLight: true,
    locale: 'zh',
    theme: data_theme
  },
  resource: {
    loadCss: {},
    loadJavscript: {// 'https://www.google-analytics.com/analytics.js':'head'
    },
    css: {
      '/static/root.css': '#material-icon-font' // 'https://fonts.googleapis.com/icon?family=Material+Icons':'#material-icon-font'

    },
    javascript: {}
  },
  navItems: [{
    id: 'world',
    title: "世界疫情",
    href: '/world',
    icon: Object(external_macoolka_ui_core_["styledCommon"])(Dashboard_default.a)
  }, {
    id: 'china',
    title: "全国疫情",
    href: '/',
    icon: Object(external_macoolka_ui_core_["styledCommon"])(Dashboard_default.a)
  }, {
    id: 'history',
    title: "省份疫情",
    href: '/provinces/[id]',
    as: '/provinces/ck6gr8hlb0000gh7c2a0f397x',
    icon: Object(external_macoolka_ui_core_["styledCommon"])(LibraryBooks_default.a)
  }, {
    id: 'news',
    title: "疫情新闻",
    href: '/news',
    icon: Object(external_macoolka_ui_core_["styledCommon"])(Dashboard_default.a)
  }, {
    id: 'rumor',
    title: "流言粉碎机",
    href: '/rumor',
    icon: Object(external_macoolka_ui_core_["styledCommon"])(Dashboard_default.a)
  }, {
    id: 'hubei',
    title: "湖北疫情",
    href: '/province/[id]',
    as: '/province/ck6gr8q4u001bgh7c8qgzfi4o',
    icon: Object(external_macoolka_ui_core_["styledCommon"])(BubbleChart_default.a)
  }, {
    id: 'liaoning',
    title: "辽宁疫情",
    href: '/province/[id]',
    as: '/province/ck6gr8lji000ugh7c9h38ey1g',
    icon: Object(external_macoolka_ui_core_["styledCommon"])(LocationOn_default.a)
  }, {
    id: 'zj',
    title: "浙江疫情",
    href: '/province/[id]',
    as: '/province/ck6gr8m9w000zgh7cdznx1s6s',
    icon: Object(external_macoolka_ui_core_["styledCommon"])(Unarchive_default.a)
  }, {
    id: 'bj',
    title: "北京疫情",
    href: '/province/[id]',
    as: '/province/ck6gr8qgu001dgh7cgcuydjf0',
    icon: Object(external_macoolka_ui_core_["styledCommon"])(Notifications_default.a)
  }, {
    id: 'dalian',
    title: "大连疫情",
    href: '/city/[id]',
    as: '/city/ck6gr96li003dgh7c8vfphaab',
    icon: Object(external_macoolka_ui_core_["styledCommon"])(Notifications_default.a)
  }, {
    id: 'shengayng',
    title: "沈阳疫情",
    href: '/city/[id]',
    as: '/city/ck6gr96e4003cgh7c6izd4uaz',
    icon: Object(external_macoolka_ui_core_["styledCommon"])(Language_default.a)
  }],
  components: {
    Link: link_default.a,
    AppHeader: external_react_default.a.Fragment,
    PageRoot: external_react_default.a.Fragment,
    PageToolBar: external_react_default.a.Fragment
  },
  functions: {
    useRouter: router_["useRouter"]
  }
};
/* harmony default export */ var data_0 = (appData);
// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// CONCATENATED MODULE: ./pages/_app.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apolloClient", function() { return apolloClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initApolloClient", function() { return initApolloClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _app_MyApp; });
var _app_jsx = external_react_default.a.createElement;

function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












let apolloClient = null;
const initApolloClient = (initialState = {}) => {
  console.log(process.env.GRAPHQL_URL);
  const link = new external_apollo_link_http_["HttpLink"]({
    uri: "http://localhost:3000/api/graphql",
    credentials: 'same-origin',
    fetch: external_isomorphic_unfetch_default.a
  });

  const createApolloClient = (initialState = {}) => {
    return new external_apollo_client_["ApolloClient"]({
      ssrMode: true,
      link,
      cache: new external_apollo_cache_inmemory_["InMemoryCache"]().restore(initialState)
    });
  };

  if (true) {
    return createApolloClient(initialState);
  }

  if (!apolloClient) {
    apolloClient = createApolloClient(initialState);
  }

  return apolloClient;
};
class _app_MyApp extends app_default.a {
  constructor(...args) {
    super(...args);

    _app_defineProperty(this, "client", apolloClient || initApolloClient(this.props.apolloState));
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return _app_jsx(react_hooks_["ApolloProvider"], {
      client: this.client
    }, _app_jsx(AppContext["a" /* AppProvider */], {
      data: data_0
    }, _app_jsx(App, null, _app_jsx(Component, pageProps))));
  }

}

_app_MyApp.getInitialProps = async ({
  ctx
}) => {
  const {
    AppTree
  } = ctx;
  apolloClient = initApolloClient();
  let pageProps = {};

  if (true) {
    try {
      const {
        getDataFromTree
      } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "7fVs", 7));
      await getDataFromTree(_app_jsx(AppTree, {
        pageProps: _app_objectSpread({}, pageProps)
      }));
    } catch (error) {
      console.error('Error while running `getDataFromTree`', error);
    }

    head_default.a.rewind();
  }

  const apolloState = apolloClient.cache.extract();
  return {
    pageProps,
    apolloState
  };
};

/***/ }),

/***/ "dYMV":
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

function addBasePath(path) {
  // @ts-ignore variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = (asPath, _cachedData) => {
      let pathname = url_1.parse(asPath).pathname;
      pathname = toRoute(!pathname || pathname === '/' ? '/index' : pathname);
      return  true && (_cachedData = this.sdc[pathname]) ? Promise.resolve(_cachedData) : fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load static props`);
        }

        return res.json();
      }).then(data => {
        this.sdc[pathname] = data;
        return data;
      }).catch(err => {
        ;
        err.code = 'PAGE_LOAD_ERROR';
        throw err;
      });
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);
        const hash = window.location.hash.substring(1);

        if (false) {} // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, Object.assign(Object.assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (false) {}

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {} // @ts-ignore pathname is always defined


      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "lhFH":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "oz4i":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "q1C7":
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "rVfI":
/***/ (function(module, exports) {

module.exports = require("macoolka-object");

/***/ }),

/***/ "sRIR":
/***/ (function(module, exports) {

module.exports = require("macoolka-ui-components/lib/NoSsr");

/***/ }),

/***/ "sTux":
/***/ (function(module, exports) {

module.exports = require("macoolka-ui-components/lib/IconButton");

/***/ }),

/***/ "ssEw":
/***/ (function(module, exports) {

module.exports = require("macoolka-ui-components/lib/Collapse");

/***/ }),

/***/ "vFf/":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Dashboard");

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });