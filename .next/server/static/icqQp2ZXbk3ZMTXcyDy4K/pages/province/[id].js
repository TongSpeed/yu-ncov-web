module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+/YZ":
/***/ (function(module, exports) {

module.exports = require("fp-ts/lib/Array");

/***/ }),

/***/ "+1zY":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Store");

/***/ }),

/***/ "0NNv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/components/TView.tsx + 29 modules
var TView = __webpack_require__("HQvw");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./src/generated/hook/statByProvince.generated.ts
var statByProvince_generated = __webpack_require__("nk7e");

// EXTERNAL MODULE: ./src/virus/helper.ts
var helper = __webpack_require__("1V0G");

// EXTERNAL MODULE: ./src/virus/model.ts
var model = __webpack_require__("B7j8");

// EXTERNAL MODULE: ./src/virus/common.ts
var common = __webpack_require__("KXd2");

// EXTERNAL MODULE: external "fp-ts/lib/Array"
var Array_ = __webpack_require__("+/YZ");

// EXTERNAL MODULE: external "fp-ts/lib/pipeable"
var pipeable_ = __webpack_require__("PJ1Q");

// EXTERNAL MODULE: external "fp-ts/lib/Option"
var Option_ = __webpack_require__("LtHl");

// EXTERNAL MODULE: ./src/helper/typeHelper.ts
var typeHelper = __webpack_require__("B7Nh");

// EXTERNAL MODULE: ./src/generated/hook/statByCity.generated.ts
var statByCity_generated = __webpack_require__("NsTv");

// EXTERNAL MODULE: ./src/components/Link.tsx
var Link = __webpack_require__("nQb1");

// CONCATENATED MODULE: ./src/virus/cities.tsx

var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const provinces = variable => ({
  _type: 'card',
  model: model["b" /* CityRecord */],
  query: {
    useQuery: statByCity_generated["a" /* useStatByCityQuery */],
    queryName: "cityRecords",
    variable
  },
  title: {
    items: [{
      _type: 'field',
      field: "城市疫情表"
    }]
  },
  subTitle: {
    items: [{
      _type: 'field',
      field: date => date.length > 0 ? Object(typeHelper["a" /* formatDate */])(date[0].recordAt) : "疫情表"
    }]
  },
  grid: {
    xs: 12,
    sm: 12,
    md: 12
  },
  transform: as => {
    const values = as.map(a => _objectSpread({}, a, {
      province: a.province.title,
      country: a.country.title,
      city: a.city.title,
      provinceId: a.province.cuid,
      countryId: a.country.cuid,
      cityId: a.city.cuid
    }));
    return Object(pipeable_["pipe"])(values, helper["d" /* getCityByLastDate */]);
  },
  items: {
    _type: 'table',
    grid: {
      xs: 12,
      sm: 12,
      md: 12
    },
    model: _objectSpread({}, model["b" /* CityRecord */], {
      fields: model["b" /* CityRecord */].fields.map(a => {
        if (a.name === 'city') {
          return _objectSpread({}, a, {
            formating: value => {
              const name = value ? value.city : 'null';
              const id = value ? value.cityId : 'null';
              return __jsx(Link["a" /* default */], {
                href: `/city/[id]`,
                as: `/city/${id}`
              }, __jsx("a", null, name));
            }
          });
        } else {
          return a;
        }
      })
    }),
    names: helper["a" /* cityTable */]
  }
});
/* harmony default export */ var cities = (provinces);
// CONCATENATED MODULE: ./src/virus/province.ts
function province_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function province_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { province_ownKeys(Object(source), true).forEach(function (key) { province_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { province_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function province_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const province = variable => ({
  _type: 'page',
  model: model["e" /* ProvinceRecord */],
  query: {
    useQuery: statByProvince_generated["a" /* useStatByProvinceQuery */],
    queryName: "provinceRecords",
    variable
  },
  titles: as => Object(pipeable_["pipe"])(as, Array_["head"], Option_["map"](a => [Object(helper["l" /* getWorldLink */])(), Object(helper["g" /* getCountryLink */])(a), Object(helper["i" /* getProvinceLink */])(a)]), Option_["getOrElse"](() => [])),
  title: {
    items: [{
      _type: 'field',
      field: as => Object(helper["h" /* getLastRecordAtString */])(as)
    }]
  },
  transform: as => {
    return Object(pipeable_["pipe"])(as, Array_["map"](a => province_objectSpread({}, a, {
      country: a.country.title,
      province: a.province.title,
      countryId: a.country.cuid,
      provinceId: a.province.cuid
    })), Array_["sort"](helper["m" /* ordRecordAt */]), Array_["reverse"], as => Object(helper["q" /* toVirusRecords */])(as), Array_["reverse"]);
  },
  items: [...Object(common["a" /* template */])("province", model["e" /* ProvinceRecord */]), cities(province_objectSpread({
    province: variable.province[0]
  }, Object(typeHelper["d" /* today5Day */])()))]
});
/* harmony default export */ var virus_province = (province);
// CONCATENATED MODULE: ./pages/province/[id].tsx

var _id_jsx = external_react_default.a.createElement;



/* harmony default export */ var _id_ = __webpack_exports__["default"] = (() => {
  const {
    query
  } = Object(router_["useRouter"])();
  return _id_jsx(TView["a" /* default */], {
    model: virus_province({
      province: [query.id]
    })
  });
});

/***/ }),

/***/ "1V0G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export add */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return toVirusRecords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return defaultValue; });
/* unused harmony export ordDeadCount */
/* unused harmony export ordSuspectedCount */
/* unused harmony export ordConfirmedCount */
/* unused harmony export ordCuredCount */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return ordRecordAt; });
/* unused harmony export VirusRecordMonoid */
/* unused harmony export group */
/* unused harmony export groupByProvince */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getSumCountry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getProvincesByLastDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getCountryByLastDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getCityByLastDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getCountryLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getProvinceLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getCityLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getWorldLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getLastRecordAtString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return standChinaTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return standTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return countryTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return provinceTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cityTable; });
/* harmony import */ var fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+/YZ");
/* harmony import */ var fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fp_ts_lib_Ord__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("psiT");
/* harmony import */ var fp_ts_lib_Ord__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fp_ts_lib_Ord__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fp_ts_lib_pipeable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("PJ1Q");
/* harmony import */ var fp_ts_lib_pipeable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fp_ts_lib_pipeable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fp_ts_lib_Monoid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5LV/");
/* harmony import */ var fp_ts_lib_Monoid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fp_ts_lib_Monoid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fp_ts_lib_Eq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("46Jp");
/* harmony import */ var fp_ts_lib_Eq__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fp_ts_lib_Eq__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helper_typeHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("B7Nh");
/* harmony import */ var macoolka_predicate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("l2LG");
/* harmony import */ var macoolka_predicate__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(macoolka_predicate__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var fp_ts_lib_Option__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("LtHl");
/* harmony import */ var fp_ts_lib_Option__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fp_ts_lib_Option__WEBPACK_IMPORTED_MODULE_7__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const _defaultValue = {
  recordAt: 0,
  curedCount: 0,
  deadCount: 0,
  suspectedCount: 0,
  confirmedCount: 0
};
const add = keys => ([a, b]) => Object(fp_ts_lib_pipeable__WEBPACK_IMPORTED_MODULE_2__["pipe"])(keys, fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_0__["reduce"]({}, (result, key) => _objectSpread({}, result, {
  [key + 'Add']: Number(a[key]) - Number(b[key]),
  [key + 'AddRate']: Number(b[key]) === 0 ? 0 : ((Number(a[key]) - Number(b[key])) / Number(b[key])).toFixed(2)
})));
const toVirusRecords = as => {
  if (as.length >= 2) {
    return Object(fp_ts_lib_pipeable__WEBPACK_IMPORTED_MODULE_2__["pipe"])(fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_0__["zip"](as, [...as.slice(1), _defaultValue]), fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_0__["map"](([a, b]) => _objectSpread({}, a, {}, add(['deadCount', 'suspectedCount', 'confirmedCount', 'curedCount'])([a, b]))));
  } else if (as.length === 1) {
    return add(['deadCount', 'suspectedCount', 'confirmedCount', 'curedCount'])([as[0], _defaultValue]);
  } else {
    return [];
  }
};
const defaultValue = _objectSpread({}, _defaultValue, {}, toVirusRecords([_defaultValue, _defaultValue])[0]);
const ordDeadCount = Object(fp_ts_lib_Ord__WEBPACK_IMPORTED_MODULE_1__["contramap"])(a => a.deadCount)(fp_ts_lib_Ord__WEBPACK_IMPORTED_MODULE_1__["ordNumber"]);
const ordSuspectedCount = Object(fp_ts_lib_Ord__WEBPACK_IMPORTED_MODULE_1__["contramap"])(a => a.suspectedCount)(fp_ts_lib_Ord__WEBPACK_IMPORTED_MODULE_1__["ordNumber"]);
const ordConfirmedCount = Object(fp_ts_lib_Ord__WEBPACK_IMPORTED_MODULE_1__["contramap"])(a => a.confirmedCount)(fp_ts_lib_Ord__WEBPACK_IMPORTED_MODULE_1__["ordNumber"]);
const ordCuredCount = Object(fp_ts_lib_Ord__WEBPACK_IMPORTED_MODULE_1__["contramap"])(a => a.curedCount)(fp_ts_lib_Ord__WEBPACK_IMPORTED_MODULE_1__["ordNumber"]);
const ordRecordAt = Object(fp_ts_lib_Ord__WEBPACK_IMPORTED_MODULE_1__["contramap"])(a => new Date(a.recordAt))(fp_ts_lib_Ord__WEBPACK_IMPORTED_MODULE_1__["ordDate"]);
const VirusRecordMonoid = () => {
  const m = {
    empty: _defaultValue,
    concat: (a, b) => {
      return _objectSpread({}, b, {}, mVRecord.concat(a, b));
    }
  };
  return m;
};
const mVRecord = Object(fp_ts_lib_Monoid__WEBPACK_IMPORTED_MODULE_3__["getStructMonoid"])({
  curedCount: fp_ts_lib_Monoid__WEBPACK_IMPORTED_MODULE_3__["monoidSum"],
  deadCount: fp_ts_lib_Monoid__WEBPACK_IMPORTED_MODULE_3__["monoidSum"],
  suspectedCount: fp_ts_lib_Monoid__WEBPACK_IMPORTED_MODULE_3__["monoidSum"],
  confirmedCount: fp_ts_lib_Monoid__WEBPACK_IMPORTED_MODULE_3__["monoidSum"]
});
const group = S => {
  return fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_0__["chop"](as => {
    const {
      init,
      rest
    } = fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_0__["spanLeft"](a => S.equals(a, as[0]))(as);
    return [init, rest];
  });
};
const ordProvince = Object(fp_ts_lib_Ord__WEBPACK_IMPORTED_MODULE_1__["contramap"])(a => a.province)(fp_ts_lib_Ord__WEBPACK_IMPORTED_MODULE_1__["ordString"]);
const eqProvince = fp_ts_lib_Eq__WEBPACK_IMPORTED_MODULE_4__["contramap"](a => a.province)(fp_ts_lib_Eq__WEBPACK_IMPORTED_MODULE_4__["eqString"]);
const eqCity = fp_ts_lib_Eq__WEBPACK_IMPORTED_MODULE_4__["contramap"](a => a.city)(fp_ts_lib_Eq__WEBPACK_IMPORTED_MODULE_4__["eqString"]);
const ordCity = Object(fp_ts_lib_Ord__WEBPACK_IMPORTED_MODULE_1__["contramap"])(a => a.city)(fp_ts_lib_Ord__WEBPACK_IMPORTED_MODULE_1__["ordString"]);
const eqCountry = fp_ts_lib_Eq__WEBPACK_IMPORTED_MODULE_4__["contramap"](a => a.country)(fp_ts_lib_Eq__WEBPACK_IMPORTED_MODULE_4__["eqString"]);
const ordCountry = Object(fp_ts_lib_Ord__WEBPACK_IMPORTED_MODULE_1__["contramap"])(a => a.country)(fp_ts_lib_Ord__WEBPACK_IMPORTED_MODULE_1__["ordString"]);
const dayEq = {
  equals: (a, b) => {
    return Object(_helper_typeHelper__WEBPACK_IMPORTED_MODULE_5__[/* formatDate */ "a"])(a) === Object(_helper_typeHelper__WEBPACK_IMPORTED_MODULE_5__[/* formatDate */ "a"])(b);
  }
};
const eqDateByDay = fp_ts_lib_Eq__WEBPACK_IMPORTED_MODULE_4__["contramap"](a => a.recordAt)(dayEq);
const groupByProvince = as => Object(fp_ts_lib_pipeable__WEBPACK_IMPORTED_MODULE_2__["pipe"])(as, fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_0__["sort"](ordProvince), group(eqProvince), fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_0__["map"](b => Object(fp_ts_lib_pipeable__WEBPACK_IMPORTED_MODULE_2__["pipe"])(b, fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_0__["sort"](ordRecordAt), fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_0__["reverse"], toVirusRecords)));

const getListRecord = (eq, ord) => as => Object(fp_ts_lib_pipeable__WEBPACK_IMPORTED_MODULE_2__["pipe"])(as, fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_0__["sort"](ord), group(eq), fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_0__["map"](b => Object(fp_ts_lib_pipeable__WEBPACK_IMPORTED_MODULE_2__["pipe"])(b, fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_0__["sort"](ordRecordAt), fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_0__["reverse"], toVirusRecords)), fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_0__["map"](a => Object(fp_ts_lib_pipeable__WEBPACK_IMPORTED_MODULE_2__["pipe"])(a, fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_0__["head"])), fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_0__["compact"], fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_0__["sort"](ordConfirmedCount), fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_0__["reverse"], fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_0__["filter"](macoolka_predicate__WEBPACK_IMPORTED_MODULE_6__["notMaybe"]));

const sumRecords = (eq, ord) => as => Object(fp_ts_lib_pipeable__WEBPACK_IMPORTED_MODULE_2__["pipe"])(as, fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_0__["sort"](ord), group(eq), fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_0__["map"](value => Object(fp_ts_lib_pipeable__WEBPACK_IMPORTED_MODULE_2__["pipe"])(value, Object(fp_ts_lib_Monoid__WEBPACK_IMPORTED_MODULE_3__["fold"])(VirusRecordMonoid()))), fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_0__["sort"](ordRecordAt), fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_0__["reverse"], toVirusRecords, fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_0__["reverse"]);

const getSumCountry = sumRecords(eqDateByDay, ordRecordAt);
const getProvincesByLastDate = getListRecord(eqProvince, ordProvince);
const getCountryByLastDate = getListRecord(eqCountry, ordCountry);
const getCityByLastDate = getListRecord(eqCity, ordCity);
const getCountryLink = a => ({
  title: a.country,
  href: `/country/[id]`,
  as: `/country/${a.countryId}`
});
const getProvinceLink = a => ({
  title: a.province,
  href: `/province/[id]`,
  as: `/province/${a.provinceId}`
});
const getCityLink = a => ({
  title: a.city,
  href: `/city/[id]`,
  as: `/city/${a.city}`
});
const getWorldLink = () => ({
  title: '全球',
  href: '/world'
});
const getLastRecordAtString = as => Object(fp_ts_lib_pipeable__WEBPACK_IMPORTED_MODULE_2__["pipe"])(as, fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_0__["sort"](ordRecordAt), fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_0__["reverse"], fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_0__["head"], fp_ts_lib_Option__WEBPACK_IMPORTED_MODULE_7__["map"](a => `最后更新时间：${Object(_helper_typeHelper__WEBPACK_IMPORTED_MODULE_5__[/* formatDateTime */ "b"])()(a.recordAt)}`), fp_ts_lib_Option__WEBPACK_IMPORTED_MODULE_7__["getOrElse"](() => ''));
const standChinaTable = [['recordAt', 'confirmedCount', 'suspectedCount', 'deadCount', 'curedCount'], ['recordAt', 'confirmedCount', 'confirmedCountAdd', 'suspectedCount', 'deadCount', 'curedCount'], ['recordAt', 'confirmedCount', 'confirmedCountAdd', 'suspectedCount', 'suspectedCountAdd', 'deadCount', 'curedCount'], ['recordAt', 'confirmedCount', 'confirmedCountAdd', 'confirmedCountAddRate', 'suspectedCount', 'suspectedCountAdd', 'deadCount', 'deadCountAdd', 'curedCount', 'curedCountAdd']];
const standTable = [['recordAt', 'confirmedCount', 'deadCount', 'curedCount'], ['recordAt', 'confirmedCount', 'confirmedCountAdd', 'deadCount', 'curedCount'], ['recordAt', 'confirmedCount', 'confirmedCountAdd', 'deadCount', 'deadCountAdd', 'curedCount'], ['recordAt', 'confirmedCount', 'confirmedCountAdd', 'confirmedCountAddRate', 'deadCount', 'deadCountAdd', 'curedCount', 'curedCountAdd']];
const countryTable = [['country', 'confirmedCount', 'deadCount', 'curedCount'], ['continents', 'country', 'confirmedCount', 'deadCount', 'curedCount'], ['continents', 'country', 'confirmedCount', 'confirmedCountAdd', 'deadCount', 'curedCount'], ['continents', 'country', 'confirmedCount', 'confirmedCountAddRate', 'confirmedCountAdd', 'deadCount', 'deadCountAdd', 'curedCount', 'curedCountAdd']];
const provinceTable = [['province', 'confirmedCount', 'deadCount', 'curedCount'], ['province', 'confirmedCount', 'confirmedCountAdd', 'deadCount', 'curedCount'], ['province', 'confirmedCount', 'confirmedCountAdd', 'deadCount', 'deadCountAdd', 'curedCount'], ['province', 'confirmedCount', 'confirmedCountAdd', 'confirmedCountAddRate', 'deadCount', 'deadCountAdd', 'curedCount', 'curedCountAdd']];
const cityTable = [['city', 'confirmedCount', 'deadCount', 'curedCount'], ['city', 'confirmedCount', 'confirmedCountAdd', 'deadCount', 'curedCount'], ['city', 'confirmedCount', 'confirmedCountAdd', 'deadCount', 'deadCountAdd', 'curedCount'], ['city', 'confirmedCount', 'confirmedCountAdd', 'confirmedCountAddRate', 'deadCount', 'deadCountAdd', 'curedCount', 'curedCountAdd']];

/***/ }),

/***/ "1imS":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "30mr":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),

/***/ "46Jp":
/***/ (function(module, exports) {

module.exports = require("fp-ts/lib/Eq");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5LV/":
/***/ (function(module, exports) {

module.exports = require("fp-ts/lib/Monoid");

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("0NNv");


/***/ }),

/***/ "9BML":
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "9r64":
/***/ (function(module, exports) {

module.exports = require("macoolka-ui-core/lib/event");

/***/ }),

/***/ "Ai9N":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),

/***/ "B7Nh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export addOneDay */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatDateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return formatShortMonthDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatDate; });
/* unused harmony export getDateFromTo */
/* unused harmony export getDateStart */
/* unused harmony export getDateEnd */
/* unused harmony export today */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return today5Day; });
/* harmony import */ var macoolka_predicate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("l2LG");
/* harmony import */ var macoolka_predicate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(macoolka_predicate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9BML");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);


const addOneDay = a => {
  return date_fns__WEBPACK_IMPORTED_MODULE_1__["addDays"](new Date(a), 1).toISOString();
};
const formatDateTime = (format = "yyyy年MM月dd日 HH:mm") => a => {
  return date_fns__WEBPACK_IMPORTED_MODULE_1__["format"](new Date(a), format);
};
const formatShortMonthDay = formatDateTime("MM.dd");
const formatDate = formatDateTime("yyyy年MM月dd日");
const getDateFromTo = a => {
  const cloneValue = new Date(Object(macoolka_predicate__WEBPACK_IMPORTED_MODULE_0__["isString"])(a) ? a : a.toISOString());
  const b = new Date(cloneValue.setHours(0, 0, 0, 0));
  return {
    from: b,
    to: date_fns__WEBPACK_IMPORTED_MODULE_1__["addDays"](b, 1)
  };
};
const getDateStart = a => {
  const cloneValue = new Date(Object(macoolka_predicate__WEBPACK_IMPORTED_MODULE_0__["isString"])(a) ? a : a.toISOString());
  const b = new Date(cloneValue.setHours(0, 0, 0, 0));
  return b;
};
const getDateEnd = a => {
  const cloneValue = new Date(Object(macoolka_predicate__WEBPACK_IMPORTED_MODULE_0__["isString"])(a) ? a : a.toISOString());
  const b = new Date(cloneValue.setHours(24, 24, 60, 0));
  return b;
};
const today = () => ({
  from: getDateStart(new Date()),
  to: getDateEnd(new Date())
});
const today5Day = () => ({
  from: getDateStart(date_fns__WEBPACK_IMPORTED_MODULE_1__["addDays"](new Date(), -5)),
  to: getDateStart(date_fns__WEBPACK_IMPORTED_MODULE_1__["addDays"](new Date(), 1))
});

/***/ }),

/***/ "B7j8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BasicValue */
/* unused harmony export AddValue */
/* unused harmony export AddRateValue */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CountryRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ProvinceRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CityRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return RumorModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NewsModel; });
const BasicValue = {
  name: 'BasicRecord',
  title: '疫情记录',
  fields: [{
    name: "confirmedCount",
    title: '确诊病例',
    helperText: "确诊病例数量",
    type: "number",
    defaultValue: 0,
    color: 'danger'
  }, {
    name: "suspectedCount",
    title: '疑似病例',
    helperText: "新疑似病例数量",
    type: "number",
    defaultValue: 0,
    color: 'warning'
  }, {
    name: "deadCount",
    title: '死亡病例',
    helperText: "死亡病例数量",
    type: "number",
    defaultValue: 0,
    color: 'primary'
  }, {
    name: "curedCount",
    title: '治愈病例',
    helperText: "治愈病例数量",
    type: "number",
    defaultValue: 0,
    color: 'info'
  }]
};
const AddValue = {
  name: 'BasicRecord',
  title: '疫情记录',
  fields: [{
    name: "confirmedCountAdd",
    title: '确诊增量',
    helperText: "确诊病例增加数量",
    type: "number",
    defaultValue: 0
  }, {
    name: "suspectedCountAdd",
    title: '疑似增量',
    helperText: "疑似病例增加数量",
    type: "number",
    defaultValue: 0
  }, {
    name: "deadCountAdd",
    title: '死亡增量',
    helperText: "死亡病例增加数量",
    type: "number",
    defaultValue: 0
  }, {
    name: "curedCountAdd",
    title: '治愈增量',
    helperText: "治愈病例增加数量",
    type: "number",
    defaultValue: 0
  }]
};
const AddRateValue = {
  name: 'BasicRecord',
  title: '疫情记录',
  fields: [{
    name: "confirmedCountAddRate",
    title: '确诊增率',
    helperText: "确诊病例增加比率",
    type: "number",
    defaultValue: 0
  }, {
    name: "suspectedCountAddRate",
    title: '疑似增率',
    helperText: "疑似病例增加比率",
    type: "number",
    defaultValue: 0
  }, {
    name: "deadCountAddRate",
    title: '死亡增率',
    helperText: "死亡病例增加比率",
    type: "number",
    defaultValue: 0
  }, {
    name: "curedCountAddRate",
    title: '治愈增率',
    helperText: "治愈病例增加比率",
    type: "number",
    defaultValue: 0
  }]
};
const BasicRecord = {
  name: 'BasicRecord',
  title: '疫情记录',
  fields: [...BasicValue.fields, ...AddValue.fields, ...AddRateValue.fields, {
    name: "recordAt",
    title: "发生日期",
    helperText: "到当天24点为止",
    type: "date",
    required: true,
    format: 'yyyy年MM月dd日',
    defaultValue: 'yesterday'
  }, {
    name: "country",
    title: '所在国家',
    helperText: "疫情所在国家",
    required: true,
    type: 'string',
    defaultValue: '中国'
  }]
};
const CountryRecord = {
  name: 'CountryRecord',
  title: '国家疫情记录',
  fields: [...BasicRecord.fields, {
    name: "continents",
    title: '所在洲',
    helperText: "疫情所在洲",
    type: 'string',
    defaultValue: '亚洲'
  }]
};
const ProvinceRecord = {
  name: 'ProvinceRecord',
  title: '省份疫情记录',
  fields: [...CountryRecord.fields, {
    name: "province",
    title: '所在省份',
    helperText: "疫情所在省份",
    required: true,
    type: 'string',
    defaultValue: '中国'
  }]
};
const CityRecord = {
  name: 'CityRecord',
  title: '城市疫情记录',
  fields: [...ProvinceRecord.fields, {
    name: "city",
    title: '所在城市',
    helperText: "疫情所在省份",
    required: true,
    type: 'string',
    defaultValue: '中国'
  }]
};
const RumorModel = {
  name: 'Rumor',
  title: '谣言',
  fields: [{
    name: "id",
    title: '主键',
    helperText: "",
    type: 'string'
  }, {
    name: "title",
    title: '标题',
    helperText: "",
    type: 'string'
  }, {
    name: "subTitle",
    title: '副标题',
    helperText: "",
    type: 'string'
  }, {
    name: "recordAt",
    title: '发布时间',
    helperText: "",
    type: 'datetime'
  }, {
    name: "content",
    title: '内容',
    helperText: "",
    type: 'string'
  }]
};
const NewsModel = {
  name: 'News',
  title: '疫情相关新闻',
  fields: [{
    name: "id",
    title: '主键',
    helperText: "",
    type: 'string'
  }, {
    name: "title",
    title: '标题',
    helperText: "",
    type: 'string'
  }, {
    name: "infoSource",
    title: '来源',
    helperText: "",
    type: 'string'
  }, {
    name: "sourceUrl",
    title: '来源网址',
    helperText: "",
    type: 'string'
  }, {
    name: "recordAt",
    title: '发布时间',
    helperText: "",
    type: 'datetime'
  }, {
    name: "content",
    title: '内容',
    helperText: "",
    type: 'string'
  }, {
    name: "province",
    title: '地点',
    helperText: "",
    type: 'string'
  }]
};

/***/ }),

/***/ "BjFw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),

/***/ "H4Qj":
/***/ (function(module, exports) {

module.exports = require("macoolka-ui-core/lib/utils");

/***/ }),

/***/ "HQvw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// CONCATENATED MODULE: ./src/dashboard/Grid/GridContainer.tsx
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // @material-ui/core components



const styles = {
  grid: {
    margin: "0 -15px !important",
    width: "unset"
  }
};
const useStyles = Object(styles_["makeStyles"])(styles);
function GridContainer(props) {
  const classes = useStyles();

  const {
    children
  } = props,
        rest = _objectWithoutProperties(props, ["children"]);

  return __jsx(Grid_default.a, _extends({
    container: true
  }, rest, {
    className: classes.grid
  }), children);
}
// CONCATENATED MODULE: ./src/dashboard/Grid/GridItem.tsx
var GridItem_jsx = external_react_default.a.createElement;

function GridItem_extends() { GridItem_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return GridItem_extends.apply(this, arguments); }

function GridItem_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = GridItem_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function GridItem_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // @material-ui/core components



const GridItem_styles = {
  grid: {
    padding: "0 15px !important"
  }
};
const GridItem_useStyles = Object(styles_["makeStyles"])(GridItem_styles);
function GridItem(props) {
  const classes = GridItem_useStyles();

  const {
    children
  } = props,
        rest = GridItem_objectWithoutProperties(props, ["children"]);

  return GridItem_jsx(Grid_default.a, GridItem_extends({
    item: true
  }, rest, {
    className: classes.grid
  }), children);
}
// EXTERNAL MODULE: external "macoolka-predicate"
var external_macoolka_predicate_ = __webpack_require__("l2LG");

// EXTERNAL MODULE: external "macoolka-ui-components/lib/Element"
var Element_ = __webpack_require__("YzID");
var Element_default = /*#__PURE__*/__webpack_require__.n(Element_);

// EXTERNAL MODULE: external "macoolka-ui-components/lib/Breadcrumbs"
var Breadcrumbs_ = __webpack_require__("Ir8c");
var Breadcrumbs_default = /*#__PURE__*/__webpack_require__.n(Breadcrumbs_);

// EXTERNAL MODULE: ./src/app/AppContext.tsx
var AppContext = __webpack_require__("LiA4");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./src/components/PageTitle.tsx
var PageTitle_jsx = external_react_default.a.createElement;





const PageTitle = ({
  pageTitles
}) => {
  const info = Object(AppContext["d" /* useAppInfo */])();
  const Link = Object(AppContext["g" /* useLink */])(); //React.use

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
      mkTextColor: "text.hint",
      key: title
    }, title);

    return href ? PageTitle_jsx(Link, {
      key: title,
      href: href,
      as: as
    }, PageTitle_jsx(Element_default.a, {
      mkCursor: "pointer",
      mkTextColor: "text.hint"
    }, t)) : t;
  })));
};
/* harmony default export */ var components_PageTitle = (PageTitle);
// CONCATENATED MODULE: ./src/components/Page.tsx
var Page_jsx = external_react_default.a.createElement;






const Page = ({
  title,
  subTitle,
  model,
  value,
  children
}) => {
  const {
    titles
  } = model;
  return Page_jsx("main", null, Page_jsx(components_PageTitle, {
    pageTitles: Object(external_macoolka_predicate_["isFunction"])(titles) ? titles(value) : titles
  }), Page_jsx(Element_default.a, {
    mkTypography: "subtitle1",
    mkTextColor: "text.secondary"
  }, title), Page_jsx(Element_default.a, {
    mkTypography: "subtitle1",
    mkTextColor: "text.secondary"
  }, subTitle), Page_jsx(GridContainer, null, children));
};

/* harmony default export */ var components_Page = (Page);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: ./src/dashboard/constants.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*!

 =========================================================
 * Material Dashboard React - v1.8.0 based on Material Dashboard - v1.2.0
 =========================================================

 * Product Page: http://www.creative-tim.com/product/material-dashboard-react
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
// ##############################
// // // Function that converts from hex color to rgb color
// // // Example: input = #9c27b0 => output = 156, 39, 176
// // // Example: input = 9c27b0 => output = 156, 39, 176
// // // Example: input = #999 => output = 153, 153, 153
// // // Example: input = 999 => output = 153, 153, 153
// #############################
const hexToRgb = input => {
  input = input + "";
  input = input.replace("#", "");
  let hexRegex = /[0-9A-Fa-f]/g;

  if (!hexRegex.test(input) || input.length !== 3 && input.length !== 6) {
    throw new Error("input is not a valid hex color.");
  }

  if (input.length === 3) {
    let first = input[0];
    let second = input[1];
    let last = input[2];
    input = first + first + second + second + last + last;
  }

  input = input.toUpperCase();
  let first = input[0] + input[1];
  let second = input[2] + input[3];
  let last = input[4] + input[5];
  return parseInt(first, 16) + ", " + parseInt(second, 16) + ", " + parseInt(last, 16);
}; // ##############################
// // // Variables - Styles that are used on more than one component
// #############################


const drawerWidth = 260;
const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};
const container = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto"
};
const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};
const primaryColor = ["#9c27b0", "#ab47bc", "#8e24aa", "#af2cc5"];
const warningColor = ["#ff9800", "#ffa726", "#fb8c00", "#ffa21a"];
const dangerColor = ["#f44336", "#ef5350", "#e53935", "#f55a4e"];
const successColor = ["#4caf50", "#66bb6a", "#43a047", "#5cb860"];
const infoColor = ["#00acc1", "#26c6da", "#00acc1", "#00d3ee"];
const roseColor = ["#e91e63", "#ec407a", "#d81b60", "#eb3573"];
const grayColor = ["#999", "#777", "#3C4858", "#AAAAAA", "#D2D2D2", "#DDD", "#b4b4b4", "#555555", "#333", "#a9afbb", "#eee", "#e7e7e7"];
const blackColor = "#000";
const whiteColor = "#FFF";
const boxShadow = {
  boxShadow: "0 10px 30px -12px rgba(" + hexToRgb(blackColor) + ", 0.42), 0 4px 25px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)"
};
const primaryBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(primaryColor[0]) + ",.4)"
};
const infoBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(infoColor[0]) + ",.4)"
};
const successBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(successColor[0]) + ",.4)"
};
const mainBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(whiteColor) + ",.4)"
};
const warningBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(warningColor[0]) + ",.4)"
};
const dangerBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(dangerColor[0]) + ",.4)"
};
const roseBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(roseColor[0]) + ",.4)"
};

const warningCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + warningColor[1] + ", " + warningColor[2] + ")"
}, warningBoxShadow);

const successCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + successColor[1] + ", " + successColor[2] + ")"
}, successBoxShadow);

const mainCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + grayColor[1] + ", " + grayColor[2] + ")"
}, mainBoxShadow);

const dangerCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + dangerColor[1] + ", " + dangerColor[2] + ")"
}, dangerBoxShadow);

const infoCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + infoColor[1] + ", " + infoColor[2] + ")"
}, infoBoxShadow);

const primaryCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + primaryColor[1] + ", " + primaryColor[2] + ")"
}, primaryBoxShadow);

const roseCardHeader = _objectSpread({
  background: "linear-gradient(60deg, " + roseColor[1] + ", " + roseColor[2] + ")"
}, roseBoxShadow);

const cardActions = _objectSpread({
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid " + grayColor[10],
  height: "auto"
}, defaultFont);

const cardHeader = {
  margin: "-20px 15px 0",
  borderRadius: "3px",
  padding: "15px"
};
const card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
  borderRadius: "3px",
  color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
  background: whiteColor
};
const defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow: "0 10px 20px -12px rgba(" + hexToRgb(blackColor) + ", 0.42), 0 3px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s"
};
const constants_title = {
  color: grayColor[2],
  textDecoration: "none",
  fontWeight: "300",
  marginTop: "30px",
  marginBottom: "25px",
  minHeight: "32px",
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  "& small": {
    color: grayColor[1],
    fontWeight: "400",
    lineHeight: "1"
  }
};

const cardTitle = _objectSpread({}, constants_title, {
  marginTop: "0",
  marginBottom: "3px",
  minHeight: "auto",
  "& a": _objectSpread({}, constants_title, {
    marginTop: ".625rem",
    marginBottom: "0.75rem",
    minHeight: "auto"
  })
});

const cardSubtitle = {
  marginTop: "-.375rem"
};
const cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem"
  }
};

// CONCATENATED MODULE: ./src/dashboard/Card/cardStyle.ts

const cardStyle = {
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
    background: whiteColor,
    width: "100%",
    boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem"
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardProfile: {
    marginTop: "30px",
    textAlign: "center"
  },
  cardChart: {
    "& p": {
      marginTop: "0px",
      paddingTop: "0px"
    }
  }
};
/* harmony default export */ var Card_cardStyle = (cardStyle);
// CONCATENATED MODULE: ./src/dashboard/Card/Card.tsx
var Card_jsx = external_react_default.a.createElement;

function Card_extends() { Card_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Card_extends.apply(this, arguments); }

function Card_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Card_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Card_ownKeys(Object(source), true).forEach(function (key) { Card_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Card_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Card_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Card_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Card_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Card_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // @material-ui/core components

 // @material-ui/icons
// core components


const Card_useStyles = Object(styles_["makeStyles"])(Card_cardStyle);

const Card = props => {
  const classes = Card_useStyles();

  const {
    className,
    children,
    plain,
    profile,
    chart
  } = props,
        rest = Card_objectWithoutProperties(props, ["className", "children", "plain", "profile", "chart"]);

  const cardClasses = external_classnames_default()(Card_objectSpread({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile,
    [classes.cardChart]: chart
  }, className ? {
    [className]: true
  } : {}));
  return Card_jsx("div", Card_extends({
    className: cardClasses
  }, rest), children);
};

/* harmony default export */ var Card_Card = (Card);
// CONCATENATED MODULE: ./src/dashboard/Card/cardHeaderStyle.ts
function cardHeaderStyle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function cardHeaderStyle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { cardHeaderStyle_ownKeys(Object(source), true).forEach(function (key) { cardHeaderStyle_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { cardHeaderStyle_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function cardHeaderStyle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const cardHeaderStyle = {
  cardHeader: {
    padding: "0.75rem 1.25rem",
    marginBottom: "0",
    borderBottom: "none",
    background: "transparent",
    zIndex: "3 !important",
    "&$cardHeaderPlain,&$cardHeaderIcon,&$cardHeaderStats,&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
      margin: "0 15px",
      padding: "0",
      position: "relative",
      color: whiteColor
    },
    "&:first-child": {
      borderRadius: "calc(.25rem - 1px) calc(.25rem - 1px) 0 0"
    },
    "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
      "&:not($cardHeaderIcon)": {
        borderRadius: "3px",
        marginTop: "-20px",
        padding: "15px"
      }
    },
    "&$cardHeaderStats svg": {
      fontSize: "36px",
      lineHeight: "56px",
      textAlign: "center",
      width: "36px",
      height: "36px",
      margin: "10px 10px 4px"
    },
    "&$cardHeaderStats i,&$cardHeaderStats .material-icons": {
      fontSize: "36px",
      lineHeight: "56px",
      width: "56px",
      height: "56px",
      textAlign: "center",
      overflow: "unset",
      marginBottom: "1px"
    },
    "&$cardHeaderStats$cardHeaderIcon": {
      textAlign: "right"
    }
  },
  cardHeaderPlain: {
    marginLeft: "0px !important",
    marginRight: "0px !important"
  },
  cardHeaderStats: {
    "& $cardHeaderIcon": {
      textAlign: "right"
    },
    "& h1,& h2,& h3,& h4,& h5,& h6": {
      margin: "0 !important"
    }
  },
  cardHeaderIcon: {
    "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
      background: "transparent",
      boxShadow: "none"
    },
    "& i,& .material-icons": {
      width: "33px",
      height: "33px",
      textAlign: "center",
      lineHeight: "33px"
    },
    "& svg": {
      width: "24px",
      height: "24px",
      textAlign: "center",
      lineHeight: "33px",
      margin: "5px 4px 0px"
    }
  },
  warningCardHeader: {
    color: whiteColor,
    "&:not($cardHeaderIcon)": cardHeaderStyle_objectSpread({}, warningCardHeader)
  },
  successCardHeader: {
    color: whiteColor,
    "&:not($cardHeaderIcon)": cardHeaderStyle_objectSpread({}, successCardHeader)
  },
  dangerCardHeader: {
    color: whiteColor,
    "&:not($cardHeaderIcon)": cardHeaderStyle_objectSpread({}, dangerCardHeader)
  },
  infoCardHeader: {
    color: whiteColor,
    "&:not($cardHeaderIcon)": cardHeaderStyle_objectSpread({}, infoCardHeader)
  },
  primaryCardHeader: {
    color: whiteColor,
    "&:not($cardHeaderIcon)": cardHeaderStyle_objectSpread({}, primaryCardHeader)
  },
  roseCardHeader: {
    color: whiteColor,
    "&:not($cardHeaderIcon)": cardHeaderStyle_objectSpread({}, roseCardHeader)
  }
};
/* harmony default export */ var Card_cardHeaderStyle = (cardHeaderStyle);
// CONCATENATED MODULE: ./src/dashboard/Card/CardHeader.tsx
var CardHeader_jsx = external_react_default.a.createElement;

function CardHeader_extends() { CardHeader_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CardHeader_extends.apply(this, arguments); }

function CardHeader_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CardHeader_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CardHeader_ownKeys(Object(source), true).forEach(function (key) { CardHeader_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CardHeader_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CardHeader_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CardHeader_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CardHeader_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CardHeader_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // @material-ui/core components

 // @material-ui/icons
// core components


const CardHeader_useStyles = Object(styles_["makeStyles"])(Card_cardHeaderStyle);

const CardHeader = props => {
  const classes = CardHeader_useStyles();

  const {
    className,
    children,
    color,
    plain,
    stats,
    icon
  } = props,
        rest = CardHeader_objectWithoutProperties(props, ["className", "children", "color", "plain", "stats", "icon"]);

  const cardHeaderClasses = external_classnames_default()(CardHeader_objectSpread({
    [classes.cardHeader]: true,
    [classes[color + "CardHeader"]]: color,
    [classes.cardHeaderPlain]: plain,
    [classes.cardHeaderStats]: stats,
    [classes.cardHeaderIcon]: icon
  }, className ? {
    [className]: true
  } : {}));
  return CardHeader_jsx("div", CardHeader_extends({
    className: cardHeaderClasses
  }, rest), children);
};

/* harmony default export */ var Card_CardHeader = (CardHeader);
// CONCATENATED MODULE: ./src/dashboard/Card/cardIconStyle.ts

const cardIconStyle = {
  cardIcon: {
    "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
      borderRadius: "3px",
      backgroundColor: grayColor[0],
      padding: "15px",
      marginTop: "-20px",
      marginRight: "15px",
      float: "left"
    }
  },
  warningCardHeader: warningCardHeader,
  successCardHeader: successCardHeader,
  dangerCardHeader: dangerCardHeader,
  infoCardHeader: infoCardHeader,
  primaryCardHeader: primaryCardHeader,
  roseCardHeader: roseCardHeader
};
/* harmony default export */ var Card_cardIconStyle = (cardIconStyle);
// CONCATENATED MODULE: ./src/dashboard/Card/CardIcon.tsx
var CardIcon_jsx = external_react_default.a.createElement;

function CardIcon_extends() { CardIcon_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CardIcon_extends.apply(this, arguments); }

function CardIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CardIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CardIcon_ownKeys(Object(source), true).forEach(function (key) { CardIcon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CardIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CardIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CardIcon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CardIcon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CardIcon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // @material-ui/core components

 // @material-ui/icons
// core components


const CardIcon_useStyles = Object(styles_["makeStyles"])(Card_cardIconStyle);

const CardIcon = props => {
  const classes = CardIcon_useStyles();

  const {
    className,
    children,
    color
  } = props,
        rest = CardIcon_objectWithoutProperties(props, ["className", "children", "color"]);

  const colorHeader = color + "CardHeader";
  const cardIconClasses = external_classnames_default()(CardIcon_objectSpread({
    [classes.cardIcon]: true,
    [classes[colorHeader]]: color
  }, className ? {
    [className]: true
  } : {}));
  return CardIcon_jsx("div", CardIcon_extends({
    className: cardIconClasses
  }, rest), children);
};

/* harmony default export */ var Card_CardIcon = (CardIcon);
// CONCATENATED MODULE: ./src/dashboard/Card/cardFooterStyle.tsx

const cardFooterStyle = {
  cardFooter: {
    padding: "0",
    paddingTop: "10px",
    margin: "0 15px 10px",
    borderRadius: "0",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    backgroundColor: "transparent",
    border: "0"
  },
  cardFooterProfile: {
    marginTop: "-15px"
  },
  cardFooterPlain: {
    paddingLeft: "5px",
    paddingRight: "5px",
    backgroundColor: "transparent"
  },
  cardFooterStats: {
    borderTop: "1px solid " + grayColor[10],
    marginTop: "20px",
    "& svg": {
      position: "relative",
      top: "4px",
      marginRight: "3px",
      marginLeft: "3px",
      width: "16px",
      height: "16px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      fontSize: "16px",
      position: "relative",
      top: "4px",
      marginRight: "3px",
      marginLeft: "3px"
    }
  },
  cardFooterChart: {
    borderTop: "1px solid " + grayColor[10]
  }
};
/* harmony default export */ var Card_cardFooterStyle = (cardFooterStyle);
// CONCATENATED MODULE: ./src/dashboard/Card/CardFooter.tsx
var CardFooter_jsx = external_react_default.a.createElement;

function CardFooter_extends() { CardFooter_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CardFooter_extends.apply(this, arguments); }

function CardFooter_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CardFooter_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CardFooter_ownKeys(Object(source), true).forEach(function (key) { CardFooter_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CardFooter_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CardFooter_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CardFooter_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CardFooter_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CardFooter_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // @material-ui/core components

 // @material-ui/icons
// core components


const CardFooter_useStyles = Object(styles_["makeStyles"])(Card_cardFooterStyle);

const CardFooter = props => {
  const classes = CardFooter_useStyles();

  const {
    className,
    children,
    plain,
    profile,
    stats,
    chart
  } = props,
        rest = CardFooter_objectWithoutProperties(props, ["className", "children", "plain", "profile", "stats", "chart"]);

  const cardFooterClasses = external_classnames_default()(CardFooter_objectSpread({
    [classes.cardFooter]: true,
    [classes.cardFooterPlain]: plain,
    [classes.cardFooterProfile]: profile,
    [classes.cardFooterStats]: stats,
    [classes.cardFooterChart]: chart
  }, className ? {
    [className]: true
  } : {}));
  return CardFooter_jsx("div", CardFooter_extends({
    className: cardFooterClasses
  }, rest), children);
};

/* harmony default export */ var Card_CardFooter = (CardFooter);
// CONCATENATED MODULE: ./src/style.ts
// @material-ui/core components


const style_useStyles = Object(styles_["makeStyles"])({
  successText: {
    color: successColor[0]
  },
  upArrowCardCategory: {
    width: "16px",
    height: "16px"
  },
  stats: {
    color: grayColor[0],
    display: "inline-flex",
    fontSize: "12px",
    lineHeight: "22px",
    "& svg": {
      top: "4px",
      width: "16px",
      height: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      top: "4px",
      fontSize: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    }
  },
  cardCategory: {
    color: grayColor[0],
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0"
  },
  cardCategoryWhite: {
    color: "rgba(" + hexToRgb(whiteColor) + ",.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitle: {
    color: grayColor[2],
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: 300,
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: 400,
      lineHeight: "1"
    }
  },
  cardTitleWhite: {
    color: whiteColor,
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: 300,
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: 400,
      lineHeight: "1"
    }
  }
});
/* harmony default export */ var style = (style_useStyles);
// EXTERNAL MODULE: external "@material-ui/icons/Store"
var Store_ = __webpack_require__("+1zY");
var Store_default = /*#__PURE__*/__webpack_require__.n(Store_);

// EXTERNAL MODULE: external "@material-ui/icons/LocalOffer"
var LocalOffer_ = __webpack_require__("RmX+");
var LocalOffer_default = /*#__PURE__*/__webpack_require__.n(LocalOffer_);

// CONCATENATED MODULE: ./src/components/KeyCard.tsx
var KeyCard_jsx = external_react_default.a.createElement;









const ModelCard = ({
  title,
  subTitle,
  footer: _footer,
  model: {
    color = "primary",
    HeadIcon = Store_default.a,
    InfoIcon = LocalOffer_default.a
  }
}) => {
  const classes = style();
  const footer = _footer ? KeyCard_jsx(Card_CardFooter, {
    stats: true
  }, KeyCard_jsx("div", {
    className: classes.stats
  }, _footer)) : null;
  return KeyCard_jsx(Card_Card, null, KeyCard_jsx(Card_CardHeader, {
    color: color,
    stats: true,
    icon: true
  }, KeyCard_jsx(Card_CardIcon, {
    color: color
  }, KeyCard_jsx(HeadIcon, null)), KeyCard_jsx("p", {
    className: classes.cardCategory
  }, title), subTitle ? KeyCard_jsx("h3", {
    className: classes.cardTitle
  }, subTitle) : null), footer);
};

/* harmony default export */ var KeyCard = (ModelCard);
// EXTERNAL MODULE: external "react-chartist"
var external_react_chartist_ = __webpack_require__("pmNG");
var external_react_chartist_default = /*#__PURE__*/__webpack_require__.n(external_react_chartist_);

// EXTERNAL MODULE: external "chartist"
var external_chartist_ = __webpack_require__("QhLl");
var external_chartist_default = /*#__PURE__*/__webpack_require__.n(external_chartist_);

// CONCATENATED MODULE: ./src/dashboard/Chart/chartStyle.ts

const lineAnimation = ({
  delays = 80,
  durations = 500
}) => ({
  draw: function (data) {
    if (data.type === "line" || data.type === "area") {
      data.element.animate({
        d: {
          begin: 600,
          dur: 700,
          from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
          to: data.path.clone().stringify(),
          easing: external_chartist_default.a.Svg.Easing.easeOutQuint
        }
      });
    } else if (data.type === "point") {
      data.element.animate({
        opacity: {
          begin: (data.index + 1) * delays,
          dur: durations,
          from: 0,
          to: 1,
          easing: "ease"
        }
      });
    } else if (data.type === "bar") {
      data.element.animate({
        opacity: {
          begin: (data.index + 1) * delays,
          dur: durations,
          from: 0,
          to: 1,
          easing: "ease"
        }
      });
    }
  }
});
const lineOption = ({
  type,
  low,
  high
}) => {
  if (type === 'Bar') {
    return {
      axisX: {
        showGrid: false
      },
      // low: 0,
      //   high: 1000,
      chartPadding: {
        top: 0,
        right: 5,
        bottom: 0,
        left: 0
      }
    };
  } else {
    return {
      lineSmooth: external_chartist_default.a.Interpolation.cardinal({
        tension: 0
      }),
      //low,
      // high, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    };
  }
};
const responsiveOptions = () => [["screen and (max-width: 640px)", {
  seriesBarDistance: 5,
  axisX: {
    labelInterpolationFnc: function (value) {
      return value[0];
    }
  }
}]];
// CONCATENATED MODULE: ./src/dashboard/Chart/Chart.tsx
var Chart_jsx = external_react_default.a.createElement;




const Chart = ({
  data,
  type = 'Line'
}) => {
  return Chart_jsx(external_react_chartist_default.a, {
    className: "ct-chart",
    data: data,
    type: type,
    options: lineOption({
      low: 0,
      high: 2000,
      type
    }),
    listener: lineAnimation({})
  });
};

/* harmony default export */ var Chart_Chart = (Chart);
// EXTERNAL MODULE: external "macoolka-object"
var external_macoolka_object_ = __webpack_require__("rVfI");

// EXTERNAL MODULE: external "fp-ts/lib/Array"
var Array_ = __webpack_require__("+/YZ");

// EXTERNAL MODULE: external "fp-ts/lib/Option"
var Option_ = __webpack_require__("LtHl");

// EXTERNAL MODULE: external "fp-ts/lib/pipeable"
var pipeable_ = __webpack_require__("PJ1Q");

// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__("9BML");

// CONCATENATED MODULE: ./src/helper/modelHelper.ts







const getDefaultValue = defaultValue => defaultValue === 'now' ? new Date().toISOString() : defaultValue === 'yesterday' ? external_date_fns_["addDays"](new Date(), -1).toISOString() : defaultValue;

const getFieldValue = field => a => {
  return Object(external_macoolka_object_["get"])(a, field.name, getDefaultValue(field.defaultValue));
};
const convertFieldValueToString = field => a => {
  const value = getFieldValue(field)(a);

  if (Object(external_macoolka_predicate_["isMaybe"])(value)) {
    return '';
  }

  switch (field.type) {
    case 'int':
    case 'number':
      return String(value);

    case 'date':
      return external_date_fns_["format"](new Date(value), field.format ? field.format : 'yyyy年MM月dd日');

    case 'datetime':
      return external_date_fns_["format"](new Date(value), field.format ? field.format : 'yyyy年MM月dd日 HH:mm');

    default:
      return value;
  }
};
const convertFieldValueToNode = field => a => {
  const value = getFieldValue(field)(a);

  if (Object(external_macoolka_predicate_["isMaybe"])(value)) {
    return null;
  }

  switch (field.type) {
    case 'date':
      return external_date_fns_["format"](new Date(value), field.format ? field.format : 'yyyy年MM月dd日');

    case 'datetime':
      return external_date_fns_["format"](new Date(value), field.format ? field.format : 'yyyy年MM月dd日 HH:mm');

    default:
      return value;
  }
};
const getField = ({
  fields
}) => name => {
  const value = Object(pipeable_["pipe"])(fields, Array_["findFirst"](a => a.name === name));

  if (Option_["isSome"](value)) {
    return value.value;
  } else {
    throw new Error(`Field${name} not found `);
  }
};
const getFields = model => names => {
  return names.map(getField(model));
};
const group = S => {
  return Array_["chop"](as => {
    const {
      init,
      rest
    } = Array_["spanLeft"](a => S.equals(a, as[0]))(as);
    return [init, rest];
  });
};
const getTFieldValue = model => value => fieldValue => {
  if (Object(external_macoolka_predicate_["isMaybe"])(fieldValue)) return undefined;
  if (Object(external_macoolka_predicate_["isString"])(fieldValue)) return fieldValue;else if (Object(external_macoolka_predicate_["isFunction"])(fieldValue)) return fieldValue(value);else {
    let field;

    if (!Object(external_macoolka_predicate_["isString"])(fieldValue.field)) {
      field = fieldValue.field;
    } else {
      if (Object(external_macoolka_predicate_["isMaybe"])(model)) {
        throw new Error(`model can not is null ${fieldValue.field} `);
      }

      field = getField(model)(fieldValue.field);
    }

    if (fieldValue.type === 'label') {
      return field.title;
    } else {
      if (field.formating) {
        return field.formating(value);
      } else {
        return convertFieldValueToNode(field)(value);
      }
    }
  }
};
// EXTERNAL MODULE: external "@material-ui/core/Hidden"
var Hidden_ = __webpack_require__("Y8uC");
var Hidden_default = /*#__PURE__*/__webpack_require__.n(Hidden_);

// EXTERNAL MODULE: ./src/helper/typeHelper.ts
var typeHelper = __webpack_require__("B7Nh");

// CONCATENATED MODULE: ./src/components/Chart.tsx
var components_Chart_jsx = external_react_default.a.createElement;

function Chart_extends() { Chart_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Chart_extends.apply(this, arguments); }

function Chart_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Chart_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Chart_ownKeys(Object(source), true).forEach(function (key) { Chart_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Chart_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Chart_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const hiddenProps = [{
  only: ['lg', 'sm', 'md', 'xl']
}, {
  only: ['xs', 'md', 'lg', 'xl']
}, {
  only: ['xs', 'sm', 'lg',, 'xl']
}, {
  only: ['xs', 'sm', 'md']
}];

const fieldToChartData = model => ({
  lableName,
  valueNames
}, hideLabel = false) => as => {
  const labelField = getField(model)(lableName);
  const seriesFields = getFields(model)(valueNames);
  const labels = as.map(value => {
    const _lableValue = getFieldValue(labelField)(value);

    return labelField.type === 'date' || labelField.type === 'datetime' ? Object(typeHelper["c" /* formatShortMonthDay */])(_lableValue) : _lableValue;
  });
  const seriesValue = seriesFields.map(seriesField => as.map(value => {
    const _value = getFieldValue(seriesField)(value);

    return _value;
  }));
  return {
    labels: hideLabel ? labels.map(() => '') : labels,
    series: seriesValue
  };
};

const ChartCard = ({
  model: {
    chartType,
    model,
    lableName,
    valueNames,
    hideLabels
  },
  value
}) => {
  return components_Chart_jsx(external_react_default.a.Fragment, null, hideLabels.map((v, i) => components_Chart_jsx(Hidden_default.a, Chart_extends({}, hiddenProps[i], {
    key: i
  }), components_Chart_jsx(Chart_Chart, {
    data: Chart_objectSpread({}, fieldToChartData(model)({
      lableName,
      valueNames
    }, v)(value)),
    type: chartType
  }))));
};

/* harmony default export */ var components_Chart = (ChartCard);
// EXTERNAL MODULE: external "@material-ui/core/Table"
var Table_ = __webpack_require__("BjFw");
var Table_default = /*#__PURE__*/__webpack_require__.n(Table_);

// EXTERNAL MODULE: external "@material-ui/core/TableHead"
var TableHead_ = __webpack_require__("TWtx");
var TableHead_default = /*#__PURE__*/__webpack_require__.n(TableHead_);

// EXTERNAL MODULE: external "@material-ui/core/TableRow"
var TableRow_ = __webpack_require__("iDDF");
var TableRow_default = /*#__PURE__*/__webpack_require__.n(TableRow_);

// EXTERNAL MODULE: external "@material-ui/core/TableBody"
var TableBody_ = __webpack_require__("30mr");
var TableBody_default = /*#__PURE__*/__webpack_require__.n(TableBody_);

// EXTERNAL MODULE: external "@material-ui/core/TableCell"
var TableCell_ = __webpack_require__("Ai9N");
var TableCell_default = /*#__PURE__*/__webpack_require__.n(TableCell_);

// CONCATENATED MODULE: ./src/dashboard/Table/tableStyle.ts
function tableStyle_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function tableStyle_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { tableStyle_ownKeys(Object(source), true).forEach(function (key) { tableStyle_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { tableStyle_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function tableStyle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const tableStyle = theme => ({
  warningTableHeader: {
    color: warningColor[0]
  },
  primaryTableHeader: {
    color: primaryColor[0]
  },
  dangerTableHeader: {
    color: dangerColor[0]
  },
  successTableHeader: {
    color: successColor[0]
  },
  infoTableHeader: {
    color: infoColor[0]
  },
  roseTableHeader: {
    color: roseColor[0]
  },
  grayTableHeader: {
    color: grayColor[0]
  },
  table: {
    marginBottom: "0",
    width: "100%",
    maxWidth: "100%",
    backgroundColor: "transparent",
    borderSpacing: "0",
    borderCollapse: "collapse"
  },
  tableHeadCell: tableStyle_objectSpread({
    color: "inherit"
  }, defaultFont, {
    "&, &$tableCell": {
      fontSize: "1em"
    }
  }),
  tableCell: tableStyle_objectSpread({}, defaultFont, {
    lineHeight: "1.42857143",
    padding: "12px 8px",
    verticalAlign: "middle",
    fontSize: "0.8125rem"
  }),
  tableResponsive: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  tableHeadRow: {
    height: "56px",
    color: "inherit",
    display: "table-row",
    outline: "none",
    verticalAlign: "middle"
  },
  tableBodyRow: {
    height: "48px",
    color: "inherit",
    display: "table-row",
    outline: "none",
    verticalAlign: "middle"
  }
});

/* harmony default export */ var Table_tableStyle = (tableStyle);
// CONCATENATED MODULE: ./src/dashboard/Table/Table.tsx
var Table_jsx = external_react_default.a.createElement;






 // core components


const Table_useStyles = Object(styles_["makeStyles"])(Table_tableStyle);

const CustomTable = props => {
  const classes = Table_useStyles();
  const {
    tableHead,
    tableData,
    tableHeaderColor = "gray"
  } = props;
  return Table_jsx("div", {
    className: classes.tableResponsive
  }, Table_jsx(Table_default.a, {
    className: classes.table
  }, tableHead !== undefined ? Table_jsx(TableHead_default.a, {
    className: classes[tableHeaderColor + "TableHeader"]
  }, Table_jsx(TableRow_default.a, {
    className: classes.tableHeadRow
  }, tableHead.map((prop, key) => {
    return Table_jsx(TableCell_default.a, {
      className: classes.tableCell + " " + classes.tableHeadCell,
      key: key
    }, prop);
  }))) : null, Table_jsx(TableBody_default.a, null, tableData.map((prop, key) => {
    return Table_jsx(TableRow_default.a, {
      key: key,
      className: classes.tableBodyRow
    }, prop.map((prop, key) => {
      return Table_jsx(TableCell_default.a, {
        className: classes.tableCell,
        key: key
      }, prop);
    }));
  }))));
};

/* harmony default export */ var Table = (CustomTable);
// CONCATENATED MODULE: ./src/components/Table.tsx
var components_Table_jsx = external_react_default.a.createElement;

function Table_extends() { Table_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Table_extends.apply(this, arguments); }





const Table_hiddenProps = [{
  only: ['lg', 'sm', 'md', 'xl']
}, {
  only: ['xs', 'md', 'lg', 'xl']
}, {
  only: ['xs', 'sm', 'lg',, 'xl']
}, {
  only: ['xs', 'sm', 'md']
}];
const TableList = ({
  value,
  model: {
    color = "primary",
    model,
    names
  }
}) => {
  const titles = names.map(as => as.map(a => getTFieldValue(model)(value)({
    field: a,
    type: 'label'
  })));
  const values = names.map(as => value.map(v => as.map(a => getTFieldValue(model)(v)({
    field: a,
    type: 'value'
  }))));
  return components_Table_jsx(external_react_default.a.Fragment, null, values.map((value, i) => components_Table_jsx(Hidden_default.a, Table_extends({}, Table_hiddenProps[i], {
    key: i
  }), components_Table_jsx(Table, {
    tableHeaderColor: color,
    tableHead: titles[i],
    tableData: value
  }))));
};
/* harmony default export */ var components_Table = (TableList);
// CONCATENATED MODULE: ./src/dashboard/Card/cardBodyStyle.tsx
const cardBodyStyle = {
  cardBody: {
    padding: "0.9375rem 20px",
    flex: "1 1 auto",
    WebkitBoxFlex: "1",
    position: "relative"
  },
  cardBodyPlain: {
    paddingLeft: "5px",
    paddingRight: "5px"
  },
  cardBodyProfile: {
    marginTop: "15px"
  }
};
/* harmony default export */ var Card_cardBodyStyle = (cardBodyStyle);
// CONCATENATED MODULE: ./src/dashboard/Card/CardBody.tsx
var CardBody_jsx = external_react_default.a.createElement;

function CardBody_extends() { CardBody_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return CardBody_extends.apply(this, arguments); }

function CardBody_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function CardBody_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { CardBody_ownKeys(Object(source), true).forEach(function (key) { CardBody_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { CardBody_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CardBody_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CardBody_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = CardBody_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function CardBody_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // nodejs library that concatenates classes

 // @material-ui/core components

 // @material-ui/icons
// core components


const CardBody_useStyles = Object(styles_["makeStyles"])(Card_cardBodyStyle);

const CardBody = props => {
  const classes = CardBody_useStyles();

  const {
    className,
    children,
    plain,
    profile
  } = props,
        rest = CardBody_objectWithoutProperties(props, ["className", "children", "plain", "profile"]);

  const cardBodyClasses = external_classnames_default()(CardBody_objectSpread({
    [classes.cardBody]: true,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyProfile]: profile
  }, className ? {
    [className]: true
  } : {}));
  return CardBody_jsx("div", CardBody_extends({
    className: cardBodyClasses
  }, rest), children);
};

/* harmony default export */ var Card_CardBody = (CardBody);
// CONCATENATED MODULE: ./src/components/Card.tsx
var components_Card_jsx = external_react_default.a.createElement;








const Card_ModelCard = ({
  children,
  footer: footerNode,
  title,
  subTitle,
  model: {
    color = "primary",
    cardType = 'stand'
  }
}) => {
  const classes = style();
  const footer = footerNode ? components_Card_jsx(Card_CardFooter, {
    stats: true
  }, components_Card_jsx("div", {
    className: classes.stats
  }, footerNode)) : null;

  switch (cardType) {
    case 'media':
      return components_Card_jsx(Card_Card, {
        chart: true
      }, components_Card_jsx(Card_CardHeader, {
        color: color
      }, children), components_Card_jsx(Card_CardBody, null, components_Card_jsx("p", {
        className: classes.cardCategory
      }, subTitle), components_Card_jsx("h3", {
        className: classes.cardTitle
      }, title)), footer);

    case 'article':
      return components_Card_jsx(Card_Card, {
        chart: true
      }, components_Card_jsx(Card_CardHeader, null, components_Card_jsx(Element_default.a, {
        mkTypography: "h6"
      }, title), components_Card_jsx(Element_default.a, {
        mkTypography: "subtitle1",
        mkTextColor: "warning.dark"
      }, subTitle)), components_Card_jsx(Card_CardBody, null, children), footer);

    default:
      return components_Card_jsx(Card_Card, null, components_Card_jsx(Card_CardHeader, {
        color: color
      }, components_Card_jsx("h4", {
        className: classes.cardTitleWhite
      }, title), components_Card_jsx("p", {
        className: classes.cardCategoryWhite
      }, subTitle)), components_Card_jsx(Card_CardBody, null, children), footer);
  }
};

/* harmony default export */ var components_Card = (Card_ModelCard);
// CONCATENATED MODULE: ./src/components/Contaner.tsx
var Contaner_jsx = external_react_default.a.createElement;




const Contaner_ChartCard = ({
  title,
  children,
  model: {
    divider
  }
}) => {
  return Contaner_jsx(Element_default.a, {
    mkMarginV: "small",
    mkBorder: "bottom",
    mkBorderColor: "divider"
  }, Contaner_jsx(Element_default.a, {
    mkMarginBottom: "medium",
    mkTypography: "h6"
  }, title), Contaner_jsx(GridContainer, null, children));
};

/* harmony default export */ var Contaner = (Contaner_ChartCard);
// EXTERNAL MODULE: external "react-markdown"
var external_react_markdown_ = __webpack_require__("id0+");
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_);

// CONCATENATED MODULE: ./src/components/Mdx.tsx
var Mdx_jsx = external_react_default.a.createElement;



const Mdx_ModelCard = ({
  value
}) => {
  return Mdx_jsx(external_react_markdown_default.a, {
    source: value
  });
};

/* harmony default export */ var Mdx = (Mdx_ModelCard);
// CONCATENATED MODULE: ./src/components/FieldDisplay.tsx
var FieldDisplay_jsx = external_react_default.a.createElement;





const formatMarkdown = a => {
  if (Object(external_macoolka_predicate_["isString"])(a)) {
    return a.trim().replace('\n', '\n\n');
  } else {
    return a;
  }
};

const FieldDisplay = ({
  model,
  value,
  children
}) => {
  const {
    model: _model,
    field,
    type
  } = model;
  const fieldValue = getTFieldValue(_model)(value)(field);

  switch (type) {
    case 'markdown':
      {
        return FieldDisplay_jsx(Mdx, {
          value: formatMarkdown(fieldValue)
        });
      }

    default:
      {
        return fieldValue; //isString(fieldValue)?<Element>{fieldValue}</Element>:fieldValue as any
      }
  }
};

/* harmony default export */ var components_FieldDisplay = (FieldDisplay);
// EXTERNAL MODULE: external "macoolka-ui-components/lib/Error"
var Error_ = __webpack_require__("UZ8c");
var Error_default = /*#__PURE__*/__webpack_require__.n(Error_);

// EXTERNAL MODULE: external "macoolka-ui-components/lib/InfiniteScroll"
var InfiniteScroll_ = __webpack_require__("MRHO");
var InfiniteScroll_default = /*#__PURE__*/__webpack_require__.n(InfiniteScroll_);

// EXTERNAL MODULE: external "@material-ui/core/CircularProgress"
var CircularProgress_ = __webpack_require__("1imS");
var CircularProgress_default = /*#__PURE__*/__webpack_require__.n(CircularProgress_);

// CONCATENATED MODULE: ./src/components/Query.tsx
var Query_jsx = external_react_default.a.createElement;

function Query_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Query_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Query_ownKeys(Object(source), true).forEach(function (key) { Query_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Query_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Query_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const InfiniteScrollQuery = ({
  model: {
    query
  },
  callback,
  value
}) => {
  if (query) {
    const {
      infiniteScroll,
      useQuery,
      queryName,
      variable
    } = query;
    const {
      loading,
      error,
      data,
      fetchMore
    } = useQuery({
      variables: variable
    });

    if (error) {
      return Query_jsx(Error_default.a, {
        title: error.name,
        content: error.message
      });
    }

    let hasMore = true;

    if (data) {
      const _dataValue = queryName ? data[queryName] : data;

      if (infiniteScroll) {
        return Query_jsx(InfiniteScroll_default.a, {
          isLoading: loading,
          hasMore: hasMore,
          onLoadMore: () => fetchMore({
            variables: Query_objectSpread({}, variable, {
              skip: _dataValue.length
            }),
            updateQuery: (prev, {
              fetchMoreResult
            }) => {
              if (!fetchMoreResult) {
                hasMore = false;
                return prev;
              }

              if (fetchMoreResult[queryName].length === 0) {
                hasMore = false;
                return prev;
              }

              return Object.assign({}, prev, {
                [queryName]: [...prev[queryName], ...fetchMoreResult[queryName]]
              });
            }
          })
        }, callback(data[queryName]));
      } else {
        return callback(_dataValue);
      }
    } else if (loading) {
      return Query_jsx(CircularProgress_default.a, null);
    }
  } else {
    return callback(value);
  }
};

/* harmony default export */ var Query = (InfiniteScrollQuery);
// CONCATENATED MODULE: ./src/components/TView.tsx
var TView_jsx = external_react_default.a.createElement;

function TView_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function TView_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { TView_ownKeys(Object(source), true).forEach(function (key) { TView_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { TView_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function TView_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













let TView_key = 0;

const toChildModel = parent => child => TView_objectSpread({
  model: parent.model
}, child);

const ModelView = ({
  model,
  value
}) => {
  const {
    transform
  } = model;

  const toGrid = ({
    grid
  }) => a => grid ? TView_jsx(GridItem, grid, a) : a;

  const toItems = v => param => {
    if (param) {
      const {
        items,
        isList = false
      } = param;

      const toDataList = f => {
        return isList ? v.map(f) : f(v);
      };

      if (Object(external_macoolka_predicate_["isArray"])(items)) {
        return toDataList(a => items.map(m => TView_jsx(ModelView, {
          key: TView_key++,
          model: toChildModel(model)(m),
          value: a
        })));
      } else {
        return toDataList(a => TView_jsx(ModelView, {
          key: TView_key++,
          model: toChildModel(model)(items),
          value: a
        }));
      }
    } else {
      return null;
    }
  };

  const to = _a => {
    const a = transform ? transform(_a) : _a;
    let R;

    switch (model._type) {
      case 'row':
        {
          R = TView_jsx(Contaner, {
            model: model,
            value: a,
            title: toItems(a)(model.title),
            subTitle: toItems(a)(model.subTitle)
          }, " ", toItems(a)(model));
          break;
        }

      case 'page':
        {
          R = TView_jsx(components_Page, {
            model: model,
            value: a,
            title: toItems(a)(model.title),
            subTitle: toItems(a)(model.subTitle)
          }, " ", toItems(a)(model));
          break;
        }

      case 'keycard':
        R = TView_jsx(KeyCard, {
          model: model,
          value: a,
          title: toItems(a)(model.title),
          subTitle: toItems(a)(model.subTitle),
          footer: toItems(a)(model.footer)
        }, " ");
        break;

      case 'card':
        R = TView_jsx(components_Card, {
          model: model,
          value: a,
          title: toItems(a)(model.title),
          subTitle: toItems(a)(model.subTitle),
          footer: toItems(a)(model.footer)
        }, " ", toItems(a)(model));
        break;

      case 'chart':
        R = TView_jsx(components_Chart, {
          model: model,
          value: a
        }, " ");
        break;

      case 'table':
        R = TView_jsx(components_Table, {
          model: model,
          value: a
        }, " ");
        break;

      case 'field':
        R = TView_jsx(components_FieldDisplay, {
          model: model,
          value: a
        }, " ");
        break;

      default:
        R = TView_jsx(GridContainer, null, " ");
        break;
    }

    return toGrid(model)(R);
  };

  return TView_jsx(Query, {
    callback: to,
    model: model,
    value: value
  });
};

/* harmony default export */ var TView = __webpack_exports__["a"] = (ModelView);

/***/ }),

/***/ "Ir8c":
/***/ (function(module, exports) {

module.exports = require("macoolka-ui-components/lib/Breadcrumbs");

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KXd2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export keyCard */
/* unused harmony export chart */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return template; });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1V0G");
/* harmony import */ var _material_ui_icons_Accessibility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("owLd");
/* harmony import */ var _material_ui_icons_Accessibility__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Accessibility__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+/YZ");
/* harmony import */ var fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fp_ts_lib_pipeable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("PJ1Q");
/* harmony import */ var fp_ts_lib_pipeable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fp_ts_lib_pipeable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fp_ts_lib_Option__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("LtHl");
/* harmony import */ var fp_ts_lib_Option__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fp_ts_lib_Option__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("B7j8");
/* harmony import */ var _helper_typeHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("B7Nh");








const keys = (isCountry = true) => [{
  name: 'confirmedCount',
  color: 'danger'
}, ...(isCountry ? [{
  name: 'suspectedCount',
  color: 'warning'
}] : []), {
  name: 'deadCount',
  color: 'primary'
}, {
  name: 'curedCount',
  color: 'info'
}];

const keysAdd = (isCountry = true) => [{
  name: 'confirmedCountAdd',
  color: 'danger'
}, ...(isCountry ? [{
  name: 'suspectedCountAdd',
  color: 'warning'
}] : []), {
  name: 'deadCountAdd',
  color: 'primary'
}, {
  name: 'curedCountAdd',
  color: 'info'
}];

const keysAddRate = (isCountry = true) => [{
  name: 'confirmedCountAddRate',
  color: 'danger'
}, ...(isCountry ? [{
  name: 'suspectedCountAddRate',
  color: 'warning'
}] : []), {
  name: 'deadCountAddRate',
  color: 'primary'
}, {
  name: 'curedCountAddRate',
  color: 'info'
}];

const keyCard = ({
  name,
  color
}) => ({
  _type: 'keycard',
  grid: {
    xs: 12,
    sm: 6,
    md: 3
  },
  HeadIcon: _material_ui_icons_Accessibility__WEBPACK_IMPORTED_MODULE_1___default.a,
  title: {
    items: [{
      _type: 'field',
      field: {
        field: name,
        type: 'label'
      }
    }]
  },
  subTitle: {
    items: [{
      _type: 'field',
      field: {
        field: name,
        type: 'value'
      }
    }]
  },
  footer: {
    items: {
      _type: 'field',
      field: a => `比昨日 增加数量:${a[name + 'Add']}`,
      type: 'paragraph'
    }
  },
  color
}); //增加比率:${a[name + 'AddRate']

const chart = ({
  name,
  color
}) => ({
  _type: 'card',
  model: _model__WEBPACK_IMPORTED_MODULE_5__[/* BasicRecord */ "a"],
  grid: {
    xs: 12,
    sm: 12,
    md: 6
  },
  title: {
    items: [{
      _type: 'field',
      field: {
        field: name,
        type: 'label'
      }
    }]
  },
  color,
  cardType: 'media',
  subTitle: {
    items: [{
      _type: 'field',
      field: _ => "疫情趋势图"
    }]
  },
  items: {
    model: _model__WEBPACK_IMPORTED_MODULE_5__[/* BasicRecord */ "a"],
    _type: 'chart',
    lableName: 'recordAt',
    valueNames: [name],
    hideLabels: [true, true, false, false]
  }
});
const template = (type, model, getData) => [{
  _type: 'row',
  title: {
    items: [{
      _type: 'field',
      field: '关键指标'
    }]
  },
  divider: 'down',
  grid: {
    xs: 12,
    sm: 12,
    md: 12
  },
  transform: as => {
    as = getData ? getData(as) : as;
    return Object(fp_ts_lib_pipeable__WEBPACK_IMPORTED_MODULE_3__["pipe"])(as, fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_2__["reverse"], fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_2__["head"], fp_ts_lib_Option__WEBPACK_IMPORTED_MODULE_4__["getOrElse"](() => _helper__WEBPACK_IMPORTED_MODULE_0__[/* defaultValue */ "c"]));
  },
  items: keys(type === 'country').map(keyCard)
}, {
  _type: 'row',
  title: {
    items: [{
      _type: 'field',
      field: '疫情标准统计图'
    }]
  },
  divider: 'down',
  transform: as => {
    as = getData ? getData(as) : as;
    return Object(fp_ts_lib_pipeable__WEBPACK_IMPORTED_MODULE_3__["pipe"])(as, fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_2__["reverse"], as => as.slice(0, 14), fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_2__["reverse"]);
  },
  grid: {
    xs: 12,
    sm: 12,
    md: 12
  },
  items: keys(type === 'country').map(chart)
}, {
  _type: 'row',
  title: {
    items: [{
      _type: 'field',
      field: '疫情增量统计图'
    }]
  },
  divider: 'down',
  transform: as => {
    as = getData ? getData(as) : as;
    return Object(fp_ts_lib_pipeable__WEBPACK_IMPORTED_MODULE_3__["pipe"])(as, fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_2__["reverse"], as => as.slice(0, 14), fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_2__["reverse"]);
  },
  grid: {
    xs: 12,
    sm: 12,
    md: 12
  },
  items: keysAdd(type === 'country').map(chart)
}, {
  _type: 'row',
  title: {
    items: [{
      _type: 'field',
      field: '疫情增率统计图'
    }]
  },
  divider: 'down',
  transform: as => {
    as = getData ? getData(as) : as;
    return Object(fp_ts_lib_pipeable__WEBPACK_IMPORTED_MODULE_3__["pipe"])(as, fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_2__["reverse"], as => as.slice(0, 14), fp_ts_lib_Array__WEBPACK_IMPORTED_MODULE_2__["reverse"]);
  },
  grid: {
    xs: 12,
    sm: 12,
    md: 12
  },
  items: keysAddRate(type === 'country').map(chart)
}, {
  _type: 'card',
  title: {
    items: [{
      _type: 'field',
      field: '疫情数据'
    }]
  },
  transform: as => {
    as = getData ? getData(as) : as;
    return as;
  },
  subTitle: {
    items: [{
      _type: 'field',
      field: data => data.length > 0 ? Object(_helper_typeHelper__WEBPACK_IMPORTED_MODULE_6__[/* formatDateTime */ "b"])()(data[data.length - 1].recordAt) : ""
    }]
  },
  divider: 'down',
  grid: {
    xs: 12,
    sm: 12,
    md: 12
  },
  items: {
    model,
    _type: 'table',
    names: type === 'country' ? _helper__WEBPACK_IMPORTED_MODULE_0__[/* standChinaTable */ "o"] : _helper__WEBPACK_IMPORTED_MODULE_0__[/* standTable */ "p"]
  }
}];

/***/ }),

/***/ "L1JV":
/***/ (function(module, exports) {

module.exports = require("macoolka-reactive");

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

/***/ "LtHl":
/***/ (function(module, exports) {

module.exports = require("fp-ts/lib/Option");

/***/ }),

/***/ "MRHO":
/***/ (function(module, exports) {

module.exports = require("macoolka-ui-components/lib/InfiniteScroll");

/***/ }),

/***/ "NsTv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export StatByCityDocument */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useStatByCityQuery; });
/* unused harmony export useStatByCityLazyQuery */
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
// eslint-disable
// ⚠️ DO NOT EDIT ⚠️
// This file is automatically generated, run yarn run graphql:codegen to update


const StatByCityDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query statByCity($orderBy: CityRecordOrderByInput = {recordAt: desc}, $from: DateTime, $to: DateTime, $province: String, $city: [String!]) {
  cityRecords(orderBy: $orderBy, where: {recordAt: {gte: $from, lte: $to}, city: {cuid: {in: $city}, NOT: {id: {contains: "�"}}}, province: {cuid: {equals: $province}, NOT: {id: {contains: "�"}}}}) {
    country {
      title
      cuid
      id
    }
    province {
      id
      cuid
      title
    }
    city {
      id
      title
      cuid
    }
    curedCount
    recordAt
    deadCount
    suspectedCount
    confirmedCount
  }
}
    `;
/**
 * __useStatByCityQuery__
 *
 * To run a query within a React component, call `useStatByCityQuery` and pass it any options that fit your needs.
 * When your component renders, `useStatByCityQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStatByCityQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      from: // value for 'from'
 *      to: // value for 'to'
 *      province: // value for 'province'
 *      city: // value for 'city'
 *   },
 * });
 */

function useStatByCityQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"](StatByCityDocument, baseOptions);
}
function useStatByCityLazyQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"](StatByCityDocument, baseOptions);
}

/***/ }),

/***/ "PJ1Q":
/***/ (function(module, exports) {

module.exports = require("fp-ts/lib/pipeable");

/***/ }),

/***/ "QhLl":
/***/ (function(module, exports) {

module.exports = require("chartist");

/***/ }),

/***/ "RmX+":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocalOffer");

/***/ }),

/***/ "TWtx":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),

/***/ "UZ8c":
/***/ (function(module, exports) {

module.exports = require("macoolka-ui-components/lib/Error");

/***/ }),

/***/ "Y8uC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "YzID":
/***/ (function(module, exports) {

module.exports = require("macoolka-ui-components/lib/Element");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "iDDF":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),

/***/ "id0+":
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "l2LG":
/***/ (function(module, exports) {

module.exports = require("macoolka-predicate");

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "nQb1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Link */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("LiA4");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Link = ({
  as,
  href,
  children
}) => {
  const Link = Object(_app_AppContext__WEBPACK_IMPORTED_MODULE_1__[/* useLink */ "g"])();
  return __jsx(Link, {
    as: as,
    href: href
  }, children);
};
/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),

/***/ "nk7e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export StatByProvinceDocument */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useStatByProvinceQuery; });
/* unused harmony export useStatByProvinceLazyQuery */
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
// eslint-disable
// ⚠️ DO NOT EDIT ⚠️
// This file is automatically generated, run yarn run graphql:codegen to update


const StatByProvinceDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query statByProvince($orderBy: ProvinceRecordOrderByInput = {recordAt: desc}, $from: DateTime, $to: DateTime, $country: String, $province: [String!]) {
  provinceRecords(orderBy: $orderBy, where: {recordAt: {gte: $from, lte: $to}, province: {cuid: {in: $province}, NOT: {id: {contains: "�"}}}, country: {cuid: {equals: $country}, NOT: {id: {contains: "�"}}}}) {
    country {
      id
      title
      cuid
    }
    province {
      id
      title
      cuid
    }
    curedCount
    recordAt
    deadCount
    suspectedCount
    confirmedCount
  }
}
    `;
/**
 * __useStatByProvinceQuery__
 *
 * To run a query within a React component, call `useStatByProvinceQuery` and pass it any options that fit your needs.
 * When your component renders, `useStatByProvinceQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStatByProvinceQuery({
 *   variables: {
 *      orderBy: // value for 'orderBy'
 *      from: // value for 'from'
 *      to: // value for 'to'
 *      country: // value for 'country'
 *      province: // value for 'province'
 *   },
 * });
 */

function useStatByProvinceQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"](StatByProvinceDocument, baseOptions);
}
function useStatByProvinceLazyQuery(baseOptions) {
  return _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"](StatByProvinceDocument, baseOptions);
}

/***/ }),

/***/ "owLd":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Accessibility");

/***/ }),

/***/ "pmNG":
/***/ (function(module, exports) {

module.exports = require("react-chartist");

/***/ }),

/***/ "psiT":
/***/ (function(module, exports) {

module.exports = require("fp-ts/lib/Ord");

/***/ }),

/***/ "rVfI":
/***/ (function(module, exports) {

module.exports = require("macoolka-object");

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });