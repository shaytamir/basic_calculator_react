(this.webpackJsonpcalculator_react=this.webpackJsonpcalculator_react||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},function(e,t,n){},function(e,t){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),u=(n(11),n(12),n(1));var l=function(){var e=Object(a.useContext)(p).state;return console.log("show",String(e)),r.a.createElement("div",{id:"display"},e)},o=n(5),s=[{id:"one",value:"1",action:"num"},{id:"two",value:"2",action:"num"},{id:"three",value:"3",action:"num"},{id:"four",value:"4",action:"num"},{id:"five",value:"5",action:"num"},{id:"six",value:"6",action:"num"},{id:"seven",value:"7",action:"num"},{id:"eight",value:"8",action:"num"},{id:"nine",value:"9",action:"num"},{id:"zero",value:"0",action:"numO"},{id:"add",value:" + ",action:"addition"},{id:"subtract",value:" - ",action:"subtract",minus:"-"},{id:"multiply",value:" x ",action:"multiply"},{id:"divide",value:" / ",action:"divide"},{id:"decimal",value:".",action:"decimal"},{id:"clear",value:"c",action:"clear"},{id:"del",value:"del",action:"del"}];var d=function(){var e=Object(a.useContext)(p),t=e.state;return r.a.createElement("div",{id:"equals",className:"keys_style",onClick:function(){console.log(t),0!==t&&e.dispatch([e.state,"equal"])}},"=")};var v=function(){var e=Object(a.useContext)(p);return r.a.createElement("div",{id:"keys_div"},function(){var t,n=[],a=Object(o.a)(s);try{var i=function(){var a=t.value,i=r.a.createElement("button",{key:a.id,id:a.id,className:"keys_style",style:{gridArea:a.id},onClick:function(){return e.dispatch([a.value,a.action,"-"])}},a.value);n.push(i)};for(a.s();!(t=a.n()).done;)i()}catch(c){a.e(c)}finally{a.f()}return n}(),r.a.createElement(d,{onClick:function(){return e.dispatch([" = ","equal"])}}))};function m(e,t,n){var a=Number(t[e-1]),r=Number(t[e+1]);t.splice(e-1,3,String(g[n](a,r))),console.log(t)}var f=function(e){for(var t in console.log(e),e){var n=t-1,a=t-2;t>1&&(console.log(Number(e[t])),console.log(e[t],e[n],e[a]),Number(e[t])||Number(e[n])||Number(e[a])||(console.log("yesss"),console.log("i",t),e.splice(a,2),console.log(e)))}return e},g={addition:function(e,t){return e+t},substruct:function(e,t){return e-t},multyply:function(e,t){return e*t},devide:function(e,t){return e/t},cleanSplitFormula:f};var b=function(e){console.log("formula: ",e);var t=e.split(" ");console.log(t);var n=f(t);console.log(n);for(var a=0;a<n.length;a++)"x"===n[a]&&(m(a,n,"multyply"),a--),"/"===n[a]&&(m(a,n,"devide"),a--);for(var r=0;r<n.length;r++)"-"===n[r]&&(m(r,n,"substruct"),r--),"+"===n[r]&&(m(r,n,"addition"),r--);var i=function(e){if(-1!==(e=String(e)).indexOf(".")){var t=e.split(".");return 1===t.length?Number(e):Number(t[0]+"."+t[1].charAt(0)+t[1].charAt(1)+t[1].charAt(2)+t[1].charAt(3))}return Number(e)}(n);return(i===1/0||isNaN(i))&&(i=0),console.log(i),i},h=[function(e,t){var n=Object(u.a)(t,3),a=n[0],r=n[1],i=n[2],c=e[e.length-1];switch(r){case"addition":return 0===e?e="+":" "===c?e:e+=a;case"subtract":return 0===e?e=i:e+=" "===c?i:a;case"multiply":case"divide":return 0===e||" "===c||"-"===c?e:e+=a;case"num":return 0===e?e=a:e+=a;case"numO":return 0==e?e:e+=a;case"decimal":return function(e){for(var t=String(e),n=t.length-1;n>=0;n--){if("."===t[n])return!0;if(" "===t[n]||0===n)return!1}}(e)?e:e+=a;case"equal":return 0===e?e:e=b(e);case"del":return 0===e?e:function(e){var t=String(e),n=t.slice(t.length-1),a=t.slice(0,t.length-1);return" "===n&&(a=a.slice(0,a.length-2)),""===a&&(a=0),console.log("new Value :",a),a}(e);case"clear":return 0;default:return e}},0],p=r.a.createContext();var y=function(){var e=Object(u.a)(h,2),t=e[0],n=e[1],i=Object(a.useReducer)(t,n),c=Object(u.a)(i,2),o=c[0],s=c[1];return r.a.createElement("div",{id:"main_calc_div"},r.a.createElement(p.Provider,{value:{state:o,dispatch:s}},r.a.createElement(l,null),r.a.createElement(v,null)))};var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null))};n(13);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.72648f3e.chunk.js.map