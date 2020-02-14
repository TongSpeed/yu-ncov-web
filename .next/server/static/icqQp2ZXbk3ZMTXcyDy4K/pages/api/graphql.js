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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/SmY":
/***/ (function(module, exports) {

module.exports = require("nexus");

/***/ }),

/***/ "1N0Q":
/***/ (function(module, exports) {

module.exports = require("@prisma/client");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("EMmV");


/***/ }),

/***/ "EMmV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var types_namespaceObject = {};
__webpack_require__.r(types_namespaceObject);
__webpack_require__.d(types_namespaceObject, "Country", function() { return Country; });
__webpack_require__.d(types_namespaceObject, "Province", function() { return Province; });
__webpack_require__.d(types_namespaceObject, "City", function() { return City; });
__webpack_require__.d(types_namespaceObject, "Area", function() { return Area; });
__webpack_require__.d(types_namespaceObject, "Mutation", function() { return Mutation; });
__webpack_require__.d(types_namespaceObject, "VirusInfo", function() { return VirusInfo; });
__webpack_require__.d(types_namespaceObject, "Rumor", function() { return Rumor; });
__webpack_require__.d(types_namespaceObject, "News", function() { return News; });
__webpack_require__.d(types_namespaceObject, "CountryRecord", function() { return CountryRecord; });
__webpack_require__.d(types_namespaceObject, "ProvinceRecord", function() { return ProvinceRecord; });
__webpack_require__.d(types_namespaceObject, "CityRecord", function() { return CityRecord; });
__webpack_require__.d(types_namespaceObject, "Query", function() { return Query; });
__webpack_require__.d(types_namespaceObject, "User", function() { return User; });
__webpack_require__.d(types_namespaceObject, "AuthPayload", function() { return AuthPayload; });

// EXTERNAL MODULE: external "apollo-server-micro"
var external_apollo_server_micro_ = __webpack_require__("re1k");

// EXTERNAL MODULE: external "nexus-prisma"
var external_nexus_prisma_ = __webpack_require__("to8o");

// EXTERNAL MODULE: external "nexus"
var external_nexus_ = __webpack_require__("/SmY");

// CONCATENATED MODULE: ./server/types/Position.ts

const Country = Object(external_nexus_["objectType"])({
  name: 'Country',

  definition(t) {
    t.model.id();
    t.model.title();
    t.model.provinces();
    t.model.continents();
    t.model.cuid();
    t.model.tags();
  }

});
const Province = Object(external_nexus_["objectType"])({
  name: 'Province',

  definition(t) {
    t.model.id();
    t.model.title();
    t.model.country();
    t.model.cities();
    t.model.cuid();
    t.model.tags();
  }

});
const City = Object(external_nexus_["objectType"])({
  name: 'City',

  definition(t) {
    t.model.id();
    t.model.title();
    t.model.province();
    t.model.areas();
    t.model.cuid();
    t.model.tags();
  }

});
const Area = Object(external_nexus_["objectType"])({
  name: 'Area',

  definition(t) {
    t.model.id();
    t.model.title();
    t.model.city();
    t.model.cuid();
    t.model.tags();
  }

});
// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__("tMJi");

// EXTERNAL MODULE: external "bcryptjs"
var external_bcryptjs_ = __webpack_require__("yFn1");

// CONCATENATED MODULE: ./server/constants.ts
/* harmony default export */ var constants = ({
  APP_SECRET: 'appsecretmacoolka'
});
// CONCATENATED MODULE: ./server/utils.ts



function getUserId(context) {
  const Authorization = context.request.get('Authorization');

  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const verifiedToken = Object(external_jsonwebtoken_["verify"])(token, constants.APP_SECRET);
    return verifiedToken && verifiedToken.userId;
  }
}
const hashPassword = (size = 10) => password => async () => await Object(external_bcryptjs_["hash"])(password, size);
const utils_token = userId => Object(external_jsonwebtoken_["sign"])({
  userId
}, constants.APP_SECRET);
const passwordValid = (password, userPassword) => async () => await Object(external_bcryptjs_["compare"])(password, userPassword);
// CONCATENATED MODULE: ./server/types/Mutation.ts


const Mutation = Object(external_nexus_["mutationType"])({
  definition(t) {
    t.field('signup', {
      type: 'AuthPayload',
      args: {
        name: Object(external_nexus_["stringArg"])(),
        nickname: Object(external_nexus_["stringArg"])(),
        email: Object(external_nexus_["stringArg"])({
          nullable: false
        }),
        password: Object(external_nexus_["stringArg"])({
          nullable: false
        })
      },
      resolve: async (_parent, {
        name,
        email,
        password,
        nickname
      }, ctx) => {
        const hashedPassword = await hashPassword()(password)();
        const user = await ctx.prisma.user.create({
          data: {
            name,
            nickname: nickname,
            email,
            password: hashedPassword
          }
        });
        return {
          token: utils_token(user.id),
          user
        };
      }
    });
    t.field('login', {
      type: 'AuthPayload',
      args: {
        email: Object(external_nexus_["stringArg"])({
          nullable: false
        }),
        password: Object(external_nexus_["stringArg"])({
          nullable: false
        })
      },
      resolve: async (_parent, {
        email,
        password
      }, ctx) => {
        const user = await ctx.prisma.user.findOne({
          where: {
            email
          }
        });

        if (!user) {
          throw new Error(`No user found for email: ${email}`);
        }

        const passwordPass = await passwordValid(password, user.password)();

        if (!passwordPass) {
          throw new Error('Invalid password');
        }

        return {
          token: utils_token(user.id),
          user
        };
      }
    });
  }

});
// CONCATENATED MODULE: ./server/types/Virus.ts

const VirusInfo = Object(external_nexus_["objectType"])({
  name: 'VirusInfo',

  definition(t) {
    t.model.id();
    t.model.title();
    t.model.description();
  }

});
const Rumor = Object(external_nexus_["objectType"])({
  name: 'Rumor',

  definition(t) {
    t.model.id();
    t.model.title();
    t.model.subTitle();
    t.model.recordAt();
    t.model.content();
  }

});
const News = Object(external_nexus_["objectType"])({
  name: 'News',

  definition(t) {
    t.model.id();
    t.model.title();
    t.model.subTitle();
    t.model.recordAt();
    t.model.content();
    t.model.sourceUrl();
    t.model.infoSource();
    t.model.province();
  }

});
const CountryRecord = Object(external_nexus_["objectType"])({
  name: 'CountryRecord',

  definition(t) {
    t.model.id();
    t.model.country();
    t.model.recordAt();
    t.model.virus();
    t.model.sourceUrl();
    t.model.seriousCount();
    t.model.suspectedCount();
    t.model.confirmedCount();
    t.model.deadCount();
    t.model.curedCount();
    t.model.continents();
    t.model.seriousAddCount();
    t.model.suspectedAddCount();
    t.model.confirmedAddCount();
    t.model.deadAddCount();
    t.model.curedAddCount();
    t.model.createdAt();
    t.model.updatedAt();
  }

});
const ProvinceRecord = Object(external_nexus_["objectType"])({
  name: 'ProvinceRecord',

  definition(t) {
    t.model.id();
    t.model.country();
    t.model.province();
    t.model.recordAt();
    t.model.virus();
    t.model.sourceUrl();
    t.model.suspectedCount();
    t.model.confirmedCount();
    t.model.deadCount();
    t.model.curedCount();
    t.model.createdAt();
    t.model.updatedAt();
  }

});
const CityRecord = Object(external_nexus_["objectType"])({
  name: 'CityRecord',

  definition(t) {
    t.model.id();
    t.model.country();
    t.model.province();
    t.model.city();
    t.model.recordAt();
    t.model.virus();
    t.model.sourceUrl();
    t.model.suspectedCount();
    t.model.confirmedCount();
    t.model.deadCount();
    t.model.curedCount();
    t.model.createdAt();
    t.model.updatedAt();
  }

});
// CONCATENATED MODULE: ./server/types/Query.ts


const Query = Object(external_nexus_["queryType"])({
  definition(t) {
    t.crud.countryRecords({
      filtering: true,
      ordering: true
    });
    t.crud.provinceRecords({
      filtering: true,
      ordering: true
    });
    t.crud.cityRecords({
      filtering: true,
      ordering: true
    });
    t.crud.rumors({
      filtering: true,
      ordering: true
    });
    t.crud.news({
      filtering: true,
      ordering: true
    }); // t.crud.news({filtering:true,ordering:true})

    t.crud.countries();
    t.crud.provinces({
      filtering: true,
      ordering: true
    });
    t.crud.cities({
      filtering: true,
      ordering: true
    });
    t.crud.areas({
      filtering: true,
      ordering: true
    });
    t.crud.virusInfo();
    t.crud.country();
    t.crud.provinces({
      filtering: true,
      ordering: true
    });
    t.crud.city();
    t.field('me', {
      type: 'User',
      nullable: true,
      resolve: (parent, args, ctx) => {
        const userId = getUserId(ctx);
        return ctx.prisma.user.findOne({
          where: {
            id: userId
          }
        });
      }
    });
  }

});
// CONCATENATED MODULE: ./server/types/User.ts

const User = Object(external_nexus_["objectType"])({
  name: 'User',

  definition(t) {
    t.model.id();
    t.model.name();
    t.model.email();
    t.model.avatar();
    t.model.nickname();
    t.model.role();
    t.model.createdAt();
    t.model.updatedAt();
  }

});
// CONCATENATED MODULE: ./server/types/AuthPayload.ts

const AuthPayload = Object(external_nexus_["objectType"])({
  name: 'AuthPayload',

  definition(t) {
    t.string('token');
    t.field('user', {
      type: 'User'
    });
  }

});
// CONCATENATED MODULE: ./server/types/index.ts






// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__("oyvS");

// CONCATENATED MODULE: ./server/schema.ts



 //import getConfig from 'next/config'
//const { serverRuntimeConfig } = getConfig()

const getPath = fileName => Object(external_path_["join"])(process.cwd(), "server", "generated", fileName);

console.log(getPath('schema.graphql'));
const schema = Object(external_nexus_["makeSchema"])({
  types: types_namespaceObject,
  plugins: [Object(external_nexus_prisma_["nexusPrismaPlugin"])()],
  outputs: {
    schema: getPath('schema.graphql'),
    typegen: getPath('nexus.ts')
  },
  typegenAutoConfig: {
    sources: [{
      source: '@prisma/client',
      alias: 'client'
    }, {
      source: /*require.resolve*/("JZbz"),
      alias: 'Context'
    }],
    contextType: 'Context.Context'
  }
});
// EXTERNAL MODULE: ./server/context.ts
var server_context = __webpack_require__("JZbz");

// CONCATENATED MODULE: ./pages/api/graphql.tsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });



/* import timer from '../../server/data'
timer()  */

const apolloServer = new external_apollo_server_micro_["ApolloServer"]({
  schema: schema,
  context: server_context["createContext"]
});
const config = {
  api: {
    bodyParser: false
  }
};
/* harmony default export */ var graphql = __webpack_exports__["default"] = (apolloServer.createHandler({
  path: '/api/graphql'
}));

/***/ }),

/***/ "JZbz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return createContext; });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1N0Q");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__["PrismaClient"]();
function createContext(request) {
  return _objectSpread({}, request, {
    prisma
  });
}

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "re1k":
/***/ (function(module, exports) {

module.exports = require("apollo-server-micro");

/***/ }),

/***/ "tMJi":
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "to8o":
/***/ (function(module, exports) {

module.exports = require("nexus-prisma");

/***/ }),

/***/ "yFn1":
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ })

/******/ });