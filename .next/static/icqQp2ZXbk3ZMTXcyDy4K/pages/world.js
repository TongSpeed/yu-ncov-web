(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"1V0G":function(n,t,e){"use strict";e.d(t,"q",(function(){return B})),e.d(t,"c",(function(){return x})),e.d(t,"m",(function(){return k})),e.d(t,"k",(function(){return L})),e.d(t,"j",(function(){return H})),e.d(t,"f",(function(){return P})),e.d(t,"d",(function(){return W})),e.d(t,"g",(function(){return F})),e.d(t,"i",(function(){return Z})),e.d(t,"e",(function(){return U})),e.d(t,"l",(function(){return nn})),e.d(t,"h",(function(){return tn})),e.d(t,"o",(function(){return en})),e.d(t,"p",(function(){return rn})),e.d(t,"b",(function(){return on})),e.d(t,"n",(function(){return un})),e.d(t,"a",(function(){return dn}));var r=e("hfKm"),o=e.n(r),u=e("2Eek"),d=e.n(u),c=e("XoMD"),i=e.n(c),a=e("Jo+v"),f=e.n(a),m=e("4mXO"),s=e.n(m),l=e("pLtp"),C=e.n(l),p=e("dfwq"),y=e("vYYK"),b=e("doui"),v=e("5B8g"),A=e("W5BZ"),O=e("fVTT"),j=e("K6zt"),h=e("Qn12"),g=e("B7Nh"),_=e("Fw8T"),w=e("kGzW");function N(n,t){var e=C()(n);if(s.a){var r=s()(n);t&&(r=r.filter((function(t){return f()(n,t).enumerable}))),e.push.apply(e,r)}return e}function T(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?N(Object(e),!0).forEach((function(t){Object(y.a)(n,t,e[t])})):i.a?d()(n,i()(e)):N(Object(e)).forEach((function(t){o()(n,t,f()(e,t))}))}return n}var q,R,E={recordAt:0,curedCount:0,deadCount:0,suspectedCount:0,confirmedCount:0},S=function(n){return function(t){var e=Object(b.a)(t,2),r=e[0],o=e[1];return Object(O.pipe)(n,v.reduce({},(function(n,t){var e;return T({},n,(e={},Object(y.a)(e,t+"Add",Number(r[t])-Number(o[t])),Object(y.a)(e,t+"AddRate",0===Number(o[t])?0:((Number(r[t])-Number(o[t]))/Number(o[t])).toFixed(2)),e))})))}},B=function(n){return n.length>=2?Object(O.pipe)(v.zip(n,[].concat(Object(p.a)(n.slice(1)),[E])),v.map((function(n){var t=Object(b.a)(n,2),e=t[0],r=t[1];return T({},e,{},S(["deadCount","suspectedCount","confirmedCount","curedCount"])([e,r]))}))):1===n.length?S(["deadCount","suspectedCount","confirmedCount","curedCount"])([n[0],E]):[]},x=T({},E,{},B([E,E])[0]),X=(Object(A.contramap)((function(n){return n.deadCount}))(A.ordNumber),Object(A.contramap)((function(n){return n.suspectedCount}))(A.ordNumber),Object(A.contramap)((function(n){return n.confirmedCount}))(A.ordNumber)),k=(Object(A.contramap)((function(n){return n.curedCount}))(A.ordNumber),Object(A.contramap)((function(n){return new Date(n.recordAt)}))(A.ordDate)),I=Object(j.getStructMonoid)({curedCount:j.monoidSum,deadCount:j.monoidSum,suspectedCount:j.monoidSum,confirmedCount:j.monoidSum}),$=function(n){return v.chop((function(t){var e=v.spanLeft((function(e){return n.equals(e,t[0])}))(t);return[e.init,e.rest]}))},K=Object(A.contramap)((function(n){return n.province}))(A.ordString),Q=h.contramap((function(n){return n.province}))(h.eqString),V=h.contramap((function(n){return n.city}))(h.eqString),z=Object(A.contramap)((function(n){return n.city}))(A.ordString),D=h.contramap((function(n){return n.country}))(h.eqString),J=Object(A.contramap)((function(n){return n.country}))(A.ordString),M={equals:function(n,t){return Object(g.a)(n)===Object(g.a)(t)}},Y=h.contramap((function(n){return n.recordAt}))(M),G=function(n,t){return function(e){return Object(O.pipe)(e,v.sort(t),$(n),v.map((function(n){return Object(O.pipe)(n,v.sort(k),v.reverse,B)})),v.map((function(n){return Object(O.pipe)(n,v.head)})),v.compact,v.sort(X),v.reverse,v.filter(_.notMaybe))}},L=(q=Y,R=k,function(n){return Object(O.pipe)(n,v.sort(R),$(q),v.map((function(n){return Object(O.pipe)(n,Object(j.fold)({empty:E,concat:function(n,t){return T({},t,{},I.concat(n,t))}}))})),v.sort(k),v.reverse,B,v.reverse)}),H=G(Q,K),P=G(D,J),W=G(V,z),F=function(n){return{title:n.country,href:"/country/[id]",as:"/country/".concat(n.countryId)}},Z=function(n){return{title:n.province,href:"/province/[id]",as:"/province/".concat(n.provinceId)}},U=function(n){return{title:n.city,href:"/city/[id]",as:"/city/".concat(n.city)}},nn=function(){return{title:"\u5168\u7403",href:"/world"}},tn=function(n){return Object(O.pipe)(n,v.sort(k),v.reverse,v.head,w.map((function(n){return"\u6700\u540e\u66f4\u65b0\u65f6\u95f4\uff1a".concat(Object(g.b)()(n.recordAt))})),w.getOrElse((function(){return""})))},en=[["recordAt","confirmedCount","suspectedCount","deadCount","curedCount"],["recordAt","confirmedCount","confirmedCountAdd","suspectedCount","deadCount","curedCount"],["recordAt","confirmedCount","confirmedCountAdd","suspectedCount","suspectedCountAdd","deadCount","curedCount"],["recordAt","confirmedCount","confirmedCountAdd","confirmedCountAddRate","suspectedCount","suspectedCountAdd","deadCount","deadCountAdd","curedCount","curedCountAdd"]],rn=[["recordAt","confirmedCount","deadCount","curedCount"],["recordAt","confirmedCount","confirmedCountAdd","deadCount","curedCount"],["recordAt","confirmedCount","confirmedCountAdd","deadCount","deadCountAdd","curedCount"],["recordAt","confirmedCount","confirmedCountAdd","confirmedCountAddRate","deadCount","deadCountAdd","curedCount","curedCountAdd"]],on=[["country","confirmedCount","deadCount","curedCount"],["continents","country","confirmedCount","deadCount","curedCount"],["continents","country","confirmedCount","confirmedCountAdd","deadCount","curedCount"],["continents","country","confirmedCount","confirmedCountAddRate","confirmedCountAdd","deadCount","deadCountAdd","curedCount","curedCountAdd"]],un=[["province","confirmedCount","deadCount","curedCount"],["province","confirmedCount","confirmedCountAdd","deadCount","curedCount"],["province","confirmedCount","confirmedCountAdd","deadCount","deadCountAdd","curedCount"],["province","confirmedCount","confirmedCountAdd","confirmedCountAddRate","deadCount","deadCountAdd","curedCount","curedCountAdd"]],dn=[["city","confirmedCount","deadCount","curedCount"],["city","confirmedCount","confirmedCountAdd","deadCount","curedCount"],["city","confirmedCount","confirmedCountAdd","deadCount","deadCountAdd","curedCount"],["city","confirmedCount","confirmedCountAdd","confirmedCountAddRate","deadCount","deadCountAdd","curedCount","curedCountAdd"]]},KXd2:function(n,t,e){"use strict";e.d(t,"a",(function(){return b}));var r=e("dfwq"),o=e("1V0G"),u=e("vS8f"),d=e.n(u),c=e("5B8g"),i=e("fVTT"),a=e("kGzW"),f=e("B7j8"),m=e("B7Nh"),s=function(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return[{name:"confirmedCount",color:"danger"}].concat(Object(r.a)(n?[{name:"suspectedCount",color:"warning"}]:[]),[{name:"deadCount",color:"primary"},{name:"curedCount",color:"info"}])},l=function(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return[{name:"confirmedCountAdd",color:"danger"}].concat(Object(r.a)(n?[{name:"suspectedCountAdd",color:"warning"}]:[]),[{name:"deadCountAdd",color:"primary"},{name:"curedCountAdd",color:"info"}])},C=function(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return[{name:"confirmedCountAddRate",color:"danger"}].concat(Object(r.a)(n?[{name:"suspectedCountAddRate",color:"warning"}]:[]),[{name:"deadCountAddRate",color:"primary"},{name:"curedCountAddRate",color:"info"}])},p=function(n){var t=n.name,e=n.color;return{_type:"keycard",grid:{xs:12,sm:6,md:3},HeadIcon:d.a,title:{items:[{_type:"field",field:{field:t,type:"label"}}]},subTitle:{items:[{_type:"field",field:{field:t,type:"value"}}]},footer:{items:{_type:"field",field:function(n){return"\u6bd4\u6628\u65e5 \u589e\u52a0\u6570\u91cf:".concat(n[t+"Add"])},type:"paragraph"}},color:e}},y=function(n){var t=n.name,e=n.color;return{_type:"card",model:f.a,grid:{xs:12,sm:12,md:6},title:{items:[{_type:"field",field:{field:t,type:"label"}}]},color:e,cardType:"media",subTitle:{items:[{_type:"field",field:function(n){return"\u75ab\u60c5\u8d8b\u52bf\u56fe"}}]},items:{model:f.a,_type:"chart",lableName:"recordAt",valueNames:[t],hideLabels:[!0,!0,!1,!1]}}},b=function(n,t,e){return[{_type:"row",title:{items:[{_type:"field",field:"\u5173\u952e\u6307\u6807"}]},divider:"down",grid:{xs:12,sm:12,md:12},transform:function(n){return n=e?e(n):n,Object(i.pipe)(n,c.reverse,c.head,a.getOrElse((function(){return o.c})))},items:s("country"===n).map(p)},{_type:"row",title:{items:[{_type:"field",field:"\u75ab\u60c5\u6807\u51c6\u7edf\u8ba1\u56fe"}]},divider:"down",transform:function(n){return n=e?e(n):n,Object(i.pipe)(n,c.reverse,(function(n){return n.slice(0,14)}),c.reverse)},grid:{xs:12,sm:12,md:12},items:s("country"===n).map(y)},{_type:"row",title:{items:[{_type:"field",field:"\u75ab\u60c5\u589e\u91cf\u7edf\u8ba1\u56fe"}]},divider:"down",transform:function(n){return n=e?e(n):n,Object(i.pipe)(n,c.reverse,(function(n){return n.slice(0,14)}),c.reverse)},grid:{xs:12,sm:12,md:12},items:l("country"===n).map(y)},{_type:"row",title:{items:[{_type:"field",field:"\u75ab\u60c5\u589e\u7387\u7edf\u8ba1\u56fe"}]},divider:"down",transform:function(n){return n=e?e(n):n,Object(i.pipe)(n,c.reverse,(function(n){return n.slice(0,14)}),c.reverse)},grid:{xs:12,sm:12,md:12},items:C("country"===n).map(y)},{_type:"card",title:{items:[{_type:"field",field:"\u75ab\u60c5\u6570\u636e"}]},transform:function(n){return n=e?e(n):n},subTitle:{items:[{_type:"field",field:function(n){return n.length>0?Object(m.b)()(n[n.length-1].recordAt):""}}]},divider:"down",grid:{xs:12,sm:12,md:12},items:{model:t,_type:"table",names:"country"===n?o.o:o.p}}]}},QeNl:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/world",function(){return e("X0dJ")}])},X0dJ:function(n,t,e){"use strict";e.r(t);var r=e("q1tI"),o=e.n(r),u=e("HQvw"),d=e("hfKm"),c=e.n(d),i=e("2Eek"),a=e.n(i),f=e("XoMD"),m=e.n(f),s=e("Jo+v"),l=e.n(s),C=e("4mXO"),p=e.n(C),y=e("pLtp"),b=e.n(y),v=e("dfwq"),A=e("vYYK"),O=e("Yl2u"),j=e("1V0G"),h=e("B7j8"),g=e("B7Nh"),_=e("KXd2"),w=e("nQb1"),N=o.a.createElement;function T(n,t){var e=b()(n);if(p.a){var r=p()(n);t&&(r=r.filter((function(t){return l()(n,t).enumerable}))),e.push.apply(e,r)}return e}function q(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?T(Object(e),!0).forEach((function(t){Object(A.a)(n,t,e[t])})):m.a?a()(n,m()(e)):T(Object(e)).forEach((function(t){c()(n,t,l()(e,t))}))}return n}var R=function(n){return{_type:"page",model:h.c,query:{useQuery:O.a,queryName:"countryRecords",variable:n},titles:[Object(j.l)()],title:{items:[{_type:"field",field:function(n){return Object(j.h)(n.items)}}]},grid:{xs:12,sm:12,md:12},transform:function(n){var t=n.map((function(n){return q({},n,{country:n.country.title,countryId:n.country.cuid})}));return{current:Object(j.k)(t),items:Object(j.f)(t)}},items:[].concat(Object(v.a)(Object(_.a)("world",h.c,(function(n){return n.current}))),[{_type:"card",title:{items:[{_type:"field",field:"\u5404\u56fd\u75ab\u60c5\u8868"}]},subTitle:{items:[{_type:"field",field:function(n){return n.length>0?Object(g.a)(n[0].recordAt):"\u75ab\u60c5\u8868"}}]},grid:{xs:12,sm:12,md:12},transform:function(n){return n.items},items:{_type:"table",grid:{xs:12,sm:12,md:12},model:q({},h.c,{fields:h.c.fields.map((function(n){return"country"===n.name?q({},n,{formating:function(n){var t=n?n.country:"null",e=n?n.countryId:"null";return N(w.a,{href:"/country/[id]",as:"/country/".concat(e)},N("a",null,t))}}):n}))}),names:j.b}}])}},E=o.a.createElement;t.default=function(){return E(u.a,{model:R({})})}},Yl2u:function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var r=e("rt45"),o=e("lTCR"),u=e.n(o),d=e("ttZb");function c(){var n=Object(r.a)(['\n    query statByCountry($orderBy: CountryRecordOrderByInput = {recordAt: desc}, $from: DateTime, $to: DateTime, $country: [String!]) {\n  countryRecords(orderBy: $orderBy, where: {recordAt: {gte: $from, lte: $to}, country: {cuid: {in: $country}, NOT: {id: {contains: "\ufffd"}}}}) {\n    country {\n      id\n      title\n      cuid\n    }\n    curedCount\n    recordAt\n    deadCount\n    suspectedCount\n    confirmedCount\n    continents\n  }\n}\n    ']);return c=function(){return n},n}var i=u()(c());function a(n){return d.c(i,n)}},nQb1:function(n,t,e){"use strict";var r=e("q1tI"),o=e.n(r),u=e("LiA4"),d=o.a.createElement;t.a=function(n){var t=n.as,e=n.href,r=n.children,o=Object(u.g)();return d(o,{as:t,href:e},r)}},vS8f:function(n,t,e){"use strict";var r=e("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(e("q1tI")),u=(0,r(e("8/g6")).default)(o.default.createElement("path",{d:"M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"}),"Accessibility");t.default=u}},[["QeNl",2,1,3,6,0,4,5,7]]]);