(this.webpackJsonpcalculator_react=this.webpackJsonpcalculator_react||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),i=n.n(c),u=(n(15),n(16),n(9)),l=n(1);var o=function(){var e=Object(a.useContext)(N).state;return console.log("show",String(e)),r.a.createElement("div",{id:"display"},e)};var s=function(e){var t=Object(a.useContext)(N);return t.state,r.a.createElement("div",{id:"calc_history"},r.a.createElement("h4",null,"History"),r.a.createElement("ul",{id:"history_ul"},e.history.map((function(e,n){return r.a.createElement("li",{key:n,onClick:function(){var n=e.slice(0,e.indexOf("=")-1);t.dispatch([n,"fromHistory"])}},e)}))))},d=n(7),v=[{id:"one",value:"1",action:"num"},{id:"two",value:"2",action:"num"},{id:"three",value:"3",action:"num"},{id:"four",value:"4",action:"num"},{id:"five",value:"5",action:"num"},{id:"six",value:"6",action:"num"},{id:"seven",value:"7",action:"num"},{id:"eight",value:"8",action:"num"},{id:"nine",value:"9",action:"num"},{id:"zero",value:"0",action:"numO"},{id:"add",value:" + ",action:"addition"},{id:"subtract",value:" - ",action:"subtract",minus:"-"},{id:"multiply",value:" x ",action:"multiply"},{id:"divide",value:" / ",action:"divide"},{id:"decimal",value:".",action:"decimal"},{id:"clear",value:"c",action:"clear"},{id:"del",value:"del",action:"del"}],m=n(4),f=n.n(m),h=n(8);var y=function(){var e=Object(a.useContext)(N),t=e.state;return r.a.createElement("div",{id:"equals",className:"keys_style",onClick:Object(h.a)(f.a.mark((function n(){var a;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:0!==t&&(e.dispatch([t,"equal"]),a=t+" = ",e.dispatchistory([a,"history"]));case 1:case"end":return n.stop()}}),n)})))},"=")};var b=function(){var e=Object(a.useContext)(N);return r.a.createElement("div",{id:"keys_div"},function(){var t,n=[],a=Object(d.a)(v);try{var c=function(){var a=t.value,c=r.a.createElement("button",{key:a.id,id:a.id,className:"keys_style",style:{gridArea:a.id},onClick:function(){return e.dispatch([a.value,a.action,"-"])}},a.value);n.push(c)};for(a.s();!(t=a.n()).done;)c()}catch(i){a.e(i)}finally{a.f()}return n}(),r.a.createElement(y,null))};function p(e,t,n){var a=Number(t[e-1]),r=Number(t[e+1]);t.splice(e-1,3,String(E[n](a,r))),console.log(t)}var g=function(e){for(var t in console.log(e),e){var n=t-1,a=t-2;t>1&&(console.log(Number(e[t])),console.log(e[t],e[n],e[a]),Number(e[t])||Number(e[n])||Number(e[a])||(console.log("yesss"),console.log("i",t),e.splice(a,2),console.log(e)))}return e},E={addition:function(e,t){return e+t},substruct:function(e,t){return e-t},multyply:function(e,t){return e*t},devide:function(e,t){return e/t},cleanSplitFormula:g};var O=function(e){console.log("formula: ",e),console.log("check",e.split(" "));var t=e.split(" ");console.log(t);var n=g(t);console.log(n);for(var a=0;a<n.length;a++)"x"===n[a]&&(p(a,n,"multyply"),a--),"/"===n[a]&&(p(a,n,"devide"),a--);for(var r=0;r<n.length;r++)"-"===n[r]&&(p(r,n,"substruct"),r--),"+"===n[r]&&(p(r,n,"addition"),r--);var c=function(e){if(-1!==(e=String(e)).indexOf(".")){var t=e.split(".");return 1===t.length?Number(e):Number(t[0]+"."+t[1].charAt(0)+t[1].charAt(1)+t[1].charAt(2)+t[1].charAt(3))}return Number(e)}(n);return(c===1/0||isNaN(c))&&(c=0),console.log(c),c},j=[function(e,t){var n,a=Object(l.a)(t,3),r=a[0],c=a[1],i=a[2];switch(e&&(n=e[e.length-1]),c){case"addition":return 0===e?e="+":" "===n?e:e+=r;case"subtract":return 0===e?e=i:e+=" "===n?i:r;case"multiply":case"divide":return 0===e||" "===n||"-"===n?e:e+=r;case"num":return 0===e?e=r:e+=r;case"numO":return 0==e?e:e+=r;case"decimal":return function(e){for(var t=String(e),n=t.length-1;n>=0;n--){if("."===t[n])return!0;if(" "===t[n]||0===n)return!1}}(e)?e:e+=r;case"equal":return 0===e?e:e=O(e);case"del":return 0===e?e:function(e){var t=String(e),n=t.slice(t.length-1),a=t.slice(0,t.length-1);return" "===n&&(a=a.slice(0,a.length-2)),""===a&&(a=0),console.log("new Value :",a),a}(e);case"fromHistory":return r;case"clear":return 0;default:return e}},0],N=r.a.createContext();var k=function(){var e=Object(l.a)(j,2),t=e[0],n=e[1],c=Object(a.useReducer)(t,n),i=Object(l.a)(c,2),d=i[0],v=i[1],m=[],f=Object(a.useReducer)((function(e,t){var n=Object(l.a)(t,2),a=n[0];switch(n[1]){case"history":return[].concat(Object(u.a)(e),[a+d]);case"clearHhistory":return m;default:return e}}),m),h=Object(l.a)(f,2),y=h[0],p=h[1];return r.a.createElement("div",{id:"main_calc_div"},r.a.createElement(N.Provider,{value:{state:d,dispatch:v,historyState:y,dispatchistory:p}},r.a.createElement(o,null),r.a.createElement(b,null),r.a.createElement(s,{history:y})))};var x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.c2352b1a.chunk.js.map