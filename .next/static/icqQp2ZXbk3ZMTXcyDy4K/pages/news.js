(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"5p4b":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),o=n("HQvw"),a=n("hfKm"),c=n.n(a),f=n("2Eek"),u=n.n(f),l=n("XoMD"),p=n.n(l),s=n("Jo+v"),d=n.n(s),v=n("4mXO"),m=n.n(v),y=n("pLtp"),w=n.n(y),h=n("vYYK"),$=n("rt45"),_=n("lTCR"),b=n.n(_),T=n("ttZb");function g(){var e=Object($.a)(["\n    query news($skip: Int, $first: Int, $searchText: String, $from: DateTime, $to: DateTime, $province: String) {\n  news(first: $first, skip: $skip, where: {recordAt: {gte: $from, lte: $to}, province: {equals: $province}, OR: [{title: {contains: $searchText}, content: {contains: $searchText}, province: {contains: $searchText}, infoSource: {contains: $searchText}}]}, orderBy: {recordAt: desc}) {\n    id\n    title\n    content\n    province\n    sourceUrl\n    infoSource\n    recordAt\n  }\n}\n    "]);return g=function(){return e},e}var x=b()(g());function k(e){return T.c(x,e)}var E=n("B7j8"),O={_type:"card",model:E.d,title:{items:[{_type:"field",field:{field:"title",type:"value"}}]},footer:{items:[{_type:"field",field:{field:"province",type:"value"},type:"paragraph"},{_type:"field",field:{field:"recordAt",type:"value"},type:"paragraph"},{_type:"field",field:{field:"infoSource",type:"value"},type:"paragraph"}]},items:[{_type:"field",type:"markdown",field:{field:"content",type:"value"}}]};function S(e,t){var n=w()(e);if(m.a){var r=m()(e);t&&(r=r.filter((function(t){return d()(e,t).enumerable}))),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){Object(h.a)(e,t,n[t])})):p.a?u()(e,p()(n)):S(Object(n)).forEach((function(t){c()(e,t,d()(n,t))}))}return e}var j=function(e){return{_type:"row",model:E.d,query:{useQuery:k,queryName:"news",infiniteScroll:!0,variable:e},title:{items:[{_type:"field",field:"\u75ab\u60c5\u65b0\u95fb"}]},grid:{xs:12,sm:12,md:12},isList:!0,transform:function(e){return e},items:X({},O,{grid:{xs:12,sm:12,md:6}})}},q=i.a.createElement;t.default=function(){return q(o.a,{model:j({first:50})})}},NLxX:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news",function(){return n("5p4b")}])}},[["NLxX",2,1,3,6,0,4,5,7]]]);