(function(e){function o(o){for(var l,s,d=o[0],m=o[1],a=o[2],h=0,c=[];h<d.length;h++)s=d[h],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&c.push(r[s][0]),r[s]=0;for(l in m)Object.prototype.hasOwnProperty.call(m,l)&&(e[l]=m[l]);p&&p(o);while(c.length)c.shift()();return i.push.apply(i,a||[]),t()}function t(){for(var e,o=0;o<i.length;o++){for(var t=i[o],l=!0,d=1;d<t.length;d++){var m=t[d];0!==r[m]&&(l=!1)}l&&(i.splice(o--,1),e=s(s.s=t[0]))}return e}var l={},r={app:0},i=[];function s(o){if(l[o])return l[o].exports;var t=l[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=l,s.d=function(e,o,t){s.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,o){if(1&o&&(e=s(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var l in e)s.d(t,l,function(o){return e[o]}.bind(null,l));return t},s.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(o,"a",o),o},s.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},s.p="";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],m=d.push.bind(d);d.push=o,d=d.slice();for(var a=0;a<d.length;a++)o(d[a]);var p=m;i.push([0,"chunk-vendors"]),t()})({0:function(e,o,t){e.exports=t("56d7")},"034f":function(e,o,t){"use strict";var l=t("64a9"),r=t.n(l);r.a},"1e5a":function(e,o,t){},4486:function(e,o,t){"use strict";var l=t("1e5a"),r=t.n(l);r.a},"56d7":function(e,o,t){"use strict";t.r(o);t("cadf"),t("551c"),t("f751"),t("097d");var l=t("2b0e"),r=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{attrs:{id:"app"}},[t("HelloWorld")],1)},i=[],s=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"container"},e._l(e.css,function(o){return t("div",{key:o.title,staticClass:"section-item",style:{backgroundColor:o.color}},[t("div",{staticClass:"title"},[t("div",{staticClass:"title-name"},[e._v(e._s(o.title))]),t("div",{staticClass:"title-en"},[e._v(e._s(o.title_en))])]),e._l(o.list,function(o){return t("a",{key:o.item,staticClass:"content-item",attrs:{target:"_blank",href:o.url}},[e._v(e._s(o.item))])})],2)}),0)},d=[],m=[{title:"元素选择符",title_en:"Element Selectors",color:"#ffce54",list:[{item:"*",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Universal_selectors"},{item:"E",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Type_selectors"},{item:"#id",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Class_selectors"},{item:".class",url:"https://developer.mozilla.org/zh-CN/docs/CSS/Class_selectors"}]},{title:"关系选择符",title_en:"Relationship Sele...",color:"#ffce54",list:[{item:"EF",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Descendant_combinator"},{item:"E>F",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Child_combinator"},{item:"E+F",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Adjacent_sibling_combinator"},{item:"E~F",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/General_sibling_combinator"}]},{title:"伪对象选择符",title_en:"Pseudo-Elemen...",color:"#ffce54",list:[{item:"::first-letter",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/::first-letter"},{item:"::first-line",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/::first-line"},{item:"::before",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/::before"},{item:"::after",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/::after"},{item:"::selection",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/::selection"}]},{title:"变换",title_en:"Transform",color:"#a0d468",list:[{item:"transform",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform"},{item:"transform-origin",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin"}]},{title:"过渡",title_en:"Transition",color:"#a0d468",list:[{item:"transition",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition"},{item:"transition-property",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-property"},{item:"transition-duration",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-duration"},{item:"transition-timing-function",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function"},{item:"transition-delay",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-delay"}]},{title:"动画",title_en:"Animation",color:"#a0d468",list:[{item:"animation",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation"},{item:"animation-name",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-name"},{item:"animation-duration",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-duration"},{item:"animation-timing-function",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function"},{item:"animation-delay",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay"},{item:"animation-iteration-count",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count"},{item:"animation-direction",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-direction"},{item:"animation-play-state",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state"},{item:"animation-fill-mode",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-fill-mode"}]},{title:"伪类选择符",title_en:"Pseudo-Classes S...",color:"#a0d468",list:[{item:":link",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/:link"},{item:":visited",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/:visited"},{item:":hover",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/:hover"},{item:":active",url:"https://developer.mozilla.org/zh-CN/docs/CSS/:active"},{item:":focus",url:"https://developer.mozilla.org/zh-CN/docs/CSS/:focus"},{item:":lang()",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:lang"},{item:":not()",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:not"},{item:":root",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:root"},{item:":first-child",url:"https://developer.mozilla.org/zh-CN/docs/CSS/:first-child"},{item:":last-child",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:last-child"},{item:":only-child",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:only-child"},{item:":nth-child(n)",url:"https://developer.mozilla.org/zh-CN/docs/CSS/:nth-child"},{item:":nth-last-child()",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-child"},{item:":first-of-type",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type"},{item:":last-of-type",url:"https://developer.mozilla.org/zh-CN/docs/CSS/:last-of-type"},{item:":only-of-type",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:only-of-type"},{item:":nth-of-type()",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type"},{item:":nth-last-of-type",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-last-of-type"},{item:":empty",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/:empty"},{item:":checked",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/:checked"},{item:":enabled",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/:enabled"},{item:":disabled",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled"},{item:":target",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/:target"},{item:"@page:first",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:first"},{item:"@page:left",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:left"},{item:"@page:right",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/:right"}]},{title:"内容",title_en:"Content",color:"#a0d468",list:[{item:"content",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/content"},{item:"counter-increment",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/counter-increment"},{item:"counter-reset",url:"https://developer.mozilla.org/zh-CN/docs/CSS/counter-reset"},{item:"quotes",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/quotes"}]},{title:"颜色值",title_en:"Values",color:"#ac92ec",list:[{item:"Color Name",url:"https://developer.mozilla.org/zh-CN/docs/CSS/color_value#Color_keywords"},{item:"HEX",url:"https://developer.mozilla.org/zh-CN/docs/CSS/color_value#rgb()"},{item:"RGB",url:"https://developer.mozilla.org/zh-CN/docs/CSS/color_value#rgb()"},{item:"RGBA",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value#rgba()"},{item:"HSL",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value#hsl()"},{item:"HSLA",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value#hsla()"},{item:"transparent",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value#transparent_keyword"}]},{title:"文本值",title_en:"Textual",color:"#ac92ec",list:[{item:"<string>",url:"https://developer.mozilla.org/zh-CN/docs/CSS/string"},{item:"<url>",url:"https://developer.mozilla.org/zh-CN/docs/CSS/uri"},{item:"<identifier>",url:"https://developer.mozilla.org/zh-CN/docs/CSS/@keyframes"}]},{title:"函数值",title_en:"Functional",color:"#ac92ec",list:[{item:"counter()",url:"https://developer.mozilla.org/zh-CN/docs/CSS/counter"},{item:"attr()",url:"https://developer.mozilla.org/zh-CN/docs/CSS/attr"},{item:"calc()",url:"https://developer.mozilla.org/zh-CN/docs/CSS/calc"},{item:"cycle()",url:"https://developer.mozilla.org/zh-CN/docs/CSS/cycle"}]},{title:"图像值",title_en:"Image",color:"#ac92ec",list:[{item:"linear-gradient()",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient"},{item:"radial-gradient()",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/radial-gradient"},{item:"repeating-linear-gradient()",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/repeating-linear-gradient"}]},{title:"数字值",title_en:"Numeric",color:"#ac92ec",list:[{item:"<integer>",url:"https://developer.mozilla.org/zh-CN/docs/CSS/integer"},{item:"<number>",url:"https://developer.mozilla.org/zh-CN/docs/CSS/number"}]},{title:"其它类型值",title_en:"Other",color:"#ac92ec",list:[{item:"<length>",url:"https://developer.mozilla.org/zh-CN/docs/CSS/length"},{item:"<percentage>",url:"https://developer.mozilla.org/zh-CN/docs/CSS/percentage"},{item:"<angle>",url:"https://developer.mozilla.org/zh-CN/docs/CSS/angle"},{item:"<time>",url:"https://developer.mozilla.org/zh-CN/docs/CSS/time"},{item:"<frequency>",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/frequency"}]},{title:"布局",title_en:"Layout",color:"#a0d468",list:[{item:"clear",url:"https://developer.mozilla.org/zh-CN/docs/CSS/clear"},{item:"display",url:"https://developer.mozilla.org/zh-CN/docs/CSS/display"},{item:"float",url:"https://developer.mozilla.org/zh-CN/docs/CSS/float"},{item:"overflow",url:"https://developer.mozilla.org/zh-CN/docs/CSS/overflow"},{item:"overflow-x",url:"https://developer.mozilla.org/zh-CN/docs/CSS/overflow-x"},{item:"overflow-y",url:"https://developer.mozilla.org/zh-CN/docs/CSS/overflow-y"},{item:"visibility",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/visibility"}]},{title:"定位",title_en:"Positioning",color:"#a0d468",list:[{item:"position",url:"https://developer.mozilla.org/zh-CN/docs/CSS/position"},{item:"top",url:"https://developer.mozilla.org/zh-CN/docs/CSS/top"},{item:"right",url:"https://developer.mozilla.org/zh-CN/docs/CSS/right"},{item:"bottom",url:"https://developer.mozilla.org/zh-CN/docs/CSS/bottom"},{item:"left",url:"https://developer.mozilla.org/zh-CN/docs/CSS/left"},{item:"z-index",url:"https://developer.mozilla.org/zh-CN/docs/CSS/z-index"},{item:"clip",url:"https://developer.mozilla.org/zh-CN/docs/CSS/clip"}]},{title:"列表",title_en:"List",color:"#a0d468",list:[{item:"list-style",url:"https://developer.mozilla.org/zh-CN/docs/CSS/list-style"},{item:"list-style-image",url:"https://developer.mozilla.org/zh-CN/docs/CSS/list-style-image"},{item:"list-style-position",url:"https://developer.mozilla.org/zh-CN/docs/CSS/list-style-position"},{item:"list-style-type",url:"https://developer.mozilla.org/zh-CN/docs/CSS/list-style-type"}]},{title:"表格",title_en:"Table",color:"#a0d468",list:[{item:"table-layout",url:"https://developer.mozilla.org/zh-CN/docs/CSS/table-layout"},{item:"border-collapse",url:"https://developer.mozilla.org/zh-CN/docs/CSS/border-collapse"},{item:"border-spacing",url:"https://developer.mozilla.org/zh-CN/docs/CSS/border-spacing"},{item:"caption-side",url:"https://developer.mozilla.org/zh-CN/docs/CSS/caption-side"},{item:"empty-cells",url:"https://developer.mozilla.org/zh-CN/docs/CSS/empty-cells"}]},{title:"用户界面",title_en:"User Interface",color:"#a0d468",list:[{item:"box-sizing",url:"https://developer.mozilla.org/zh-CN/docs/CSS/box-sizing"},{item:"nav-index",url:"https://developer.mozilla.org/zh-CN/docs/CSS/nav-index"},{item:"nav-up",url:"https://developer.mozilla.org/zh-CN/docs/CSS/nav-up"},{item:"nav-right",url:"https://developer.mozilla.org/zh-CN/docs/CSS/nav-right"},{item:"nav-down",url:"https://developer.mozilla.org/zh-CN/docs/CSS/nav-down"},{item:"nav-left",url:"https://developer.mozilla.org/zh-CN/docs/CSS/nav-left"},{item:"outline",url:"https://developer.mozilla.org/zh-CN/docs/CSS/outline"},{item:"outline-width",url:"https://developer.mozilla.org/zh-CN/docs/CSS/outline-width"},{item:"outline-style",url:"https://developer.mozilla.org/zh-CN/docs/CSS/outline-style"},{item:"outline-color",url:"https://developer.mozilla.org/zh-CN/docs/CSS/outline-color"},{item:"outline-offset",url:"https://developer.mozilla.org/zh-CN/docs/CSS/outline-offset"},{item:"text-overflow",url:"https://developer.mozilla.org/zh-CN/docs/CSS/text-overflow"},{item:"ime-mode",url:"https://developer.mozilla.org/zh-CN/docs/CSS/ime-mode"},{item:"cursor",url:"https://developer.mozilla.org/zh-CN/docs/CSS/cursor"},{item:"resize",url:"https://developer.mozilla.org/zh-CN/docs/CSS/resize"},{item:"user-select",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/user-select"}]},{title:"伸缩盒（新）",title_en:"Flexible Box",color:"#a0d468",list:[{item:"flex",url:"https://developer.mozilla.org/zh-CN/docs/CSS/flex"},{item:"flex-grow",url:"https://developer.mozilla.org/zh-CN/docs/CSS/flex-grow"},{item:"flex-shrink",url:"https://developer.mozilla.org/zh-CN/docs/CSS/flex-shrink"},{item:"flex-basis",url:"https://developer.mozilla.org/zh-CN/docs/CSS/flex-basis"},{item:"flex-flow",url:"https://developer.mozilla.org/zh-CN/docs/CSS/flex-flow"},{item:"flex-direction",url:"https://developer.mozilla.org/zh-CN/docs/CSS/flex-direction"},{item:"flex-wrap",url:"https://developer.mozilla.org/zh-CN/docs/CSS/flex-wrap"},{item:"align-content",url:"https://developer.mozilla.org/zh-CN/docs/CSS/align-content"},{item:"align-items",url:"https://developer.mozilla.org/zh-CN/docs/CSS/align-items"},{item:"align-self",url:"https://developer.mozilla.org/zh-CN/docs/CSS/align-self"},{item:"justify-content",url:"https://developer.mozilla.org/zh-CN/docs/CSS/justify-content"},{item:"order",url:"https://developer.mozilla.org/zh-CN/docs/CSS/order"}]},{title:"多列",title_en:"Multi-column",color:"#a0d468",list:[{item:"columns",url:"https://developer.mozilla.org/zh-CN/docs/CSS/columns"},{item:"column-width",url:"https://developer.mozilla.org/zh-CN/docs/CSS/column-width"},{item:"column-count",url:"https://developer.mozilla.org/zh-CN/docs/CSS/column-count"},{item:"column-gap",url:"https://developer.mozilla.org/zh-CN/docs/CSS/column-gap"},{item:"column-rule",url:"https://developer.mozilla.org/zh-CN/docs/CSS/column-rule"},{item:"column-rule-width",url:"https://developer.mozilla.org/zh-CN/docs/CSS/column-rule-width"},{item:"column-rule-style",url:"https://developer.mozilla.org/zh-CN/docs/CSS/column-rule-style"},{item:"column-rule-color",url:"https://developer.mozilla.org/zh-CN/docs/CSS/column-rule-color"},{item:"column-span",url:"https://developer.mozilla.org/zh-CN/docs/CSS/column-span"},{item:"column-fill",url:"https://developer.mozilla.org/zh-CN/docs/CSS/column-fill"},{item:"column-break-before",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/break-before"},{item:"column-break-after",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/break-after"},{item:"column-break-inside",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/break-inside"}]},{title:"语法与规则",title_en:"Rules",color:"rgb(200, 218, 168)",list:[{item:"!important",url:"https://developer.mozilla.org/zh-CN/docs/CSS/Specificity"},{item:"/* Comment */",url:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Comments"},{item:"@charset",url:"https://developer.mozilla.org/zh-CN/docs/CSS/@charset"},{item:"@import",url:"https://developer.mozilla.org/zh-CN/docs/CSS/@import"},{item:"@media",url:"https://developer.mozilla.org/zh-CN/docs/CSS/@media"},{item:"@font-face",url:"https://developer.mozilla.org/zh-CN/docs/CSS/@font-face"},{item:"@page",url:"https://developer.mozilla.org/zh-CN/docs/CSS/@page"},{item:"@keyframes",url:"https://developer.mozilla.org/zh-CN/docs/CSS/@keyframes"}]},{title:"长度单位",title_en:"Length",color:"#4fc1e9",list:[{item:"em"},{item:"ex"},{item:"ch"},{item:"rem"},{item:"vw"},{item:"vh"},{item:"vm"},{item:"cm"},{item:"mm"},{item:"in"},{item:"pt"},{item:"pc"},{item:"px"}]},{title:"角度问题",title_en:"Angle",color:"#4fc1e9",list:[{item:"deg"},{item:"grad"},{item:"rad"},{item:"turn"}]},{title:"时间单位",title_en:"Time",color:"#4fc1e9",list:[{item:"s"},{item:"ms"}]},{title:"频率单位",title_en:"Frequency",color:"#4fc1e9",list:[{item:"Hz"},{item:"kHz"}]},{title:"尺寸",title_en:"Dimension",color:"#4fc1e9",list:[{item:"width",url:"https://developer.mozilla.org/zh-CN/docs/CSS/width"},{item:"min-width",url:"https://developer.mozilla.org/zh-CN/docs/CSS/min-width"},{item:"max-width",url:"https://developer.mozilla.org/zh-CN/docs/CSS/max-width"},{item:"height",url:"https://developer.mozilla.org/zh-CN/docs/CSS/height"},{item:"min-height",url:"https://developer.mozilla.org/zh-CN/docs/CSS/min-height"},{item:"max-height",url:"https://developer.mozilla.org/zh-CN/docs/CSS/max-height"}]},{title:"外边距",title_en:"Margin",color:"#4fc1e9",list:[{item:"margin",url:"https://developer.mozilla.org/zh-CN/docs/CSS/margin"},{item:"margin-top",url:"https://developer.mozilla.org/zh-CN/docs/CSS/margin-top"},{item:"margin-right",url:"https://developer.mozilla.org/zh-CN/docs/CSS/margin-right"},{item:"margin-bottom",url:"https://developer.mozilla.org/zh-CN/docs/CSS/margin-bottom"},{item:"margin-left",url:"https://developer.mozilla.org/zh-CN/docs/CSS/margin-left"}]},{title:"内边距",title_en:"Padding",color:"#4fc1e9",list:[{item:"padding",url:"https://developer.mozilla.org/zh-CN/docs/CSS/padding"},{item:"padding-top",url:"https://developer.mozilla.org/zh-CN/docs/CSS/padding-top"},{item:"padding-right",url:"https://developer.mozilla.org/zh-CN/docs/CSS/padding-right"},{item:"padding-bottom",url:"https://developer.mozilla.org/zh-CN/docs/CSS/padding-bottom"},{item:"padding-left",url:"https://developer.mozilla.org/zh-CN/docs/CSS/padding-left"}]},{title:"边框",title_en:"Border",color:"#a0d468",list:[{item:"border",url:"https://developer.mozilla.org/zh-CN/docs/CSS/border"},{item:"border-widht",url:"https://developer.mozilla.org/zh-CN/docs/CSS/border-width"},{item:"border-style",url:"https://developer.mozilla.org/zh-CN/docs/CSS/border-style"},{item:"border-color",url:"https://developer.mozilla.org/zh-CN/docs/CSS/border-color"},{item:"border-top",url:"https://developer.mozilla.org/zh-CN/docs/CSS/border-top"},{item:"border-top-width",url:"https://developer.mozilla.org/zh-CN/docs/CSS/border-top-width"},{item:"border-top-style",url:"https://developer.mozilla.org/zh-CN/docs/CSS/border-top-style"},{item:"border-top-color",url:"https://developer.mozilla.org/zh-CN/docs/CSS/border-right-color"},{item:"border-right",url:"https://developer.mozilla.org/zh-CN/docs/CSS/border-right"},{item:"border-right-width",url:"https://developer.mozilla.org/zh-CN/docs/CSS/border-right-width"},{item:"border-right-style",url:"https://developer.mozilla.org/zh-CN/docs/CSS/border-right-style"},{item:"border-right-color",url:"https://developer.mozilla.org/zh-CN/docs/CSS/border-right-color"},{item:"border-bottom",url:"https://developer.mozilla.org/zh-CN/docs/CSS/border-bottom"},{item:"border-bottom-width",url:"https://developer.mozilla.org/zh-CN/docs/CSS/border-bottom-width"},{item:"border-bottom-style",url:"https://developer.mozilla.org/zh-CN/docs/CSS/border-bottom-style"},{item:"border-bottom-color",url:"https://developer.mozilla.org/zh-CN/docs/CSS/border-bottom-color"},{item:"border-left",url:"https://developer.mozilla.org/zh-CN/docs/CSS/border-left"},{item:"border-left-width",url:"https://developer.mozilla.org/zh-CN/docs/CSS/border-left-width"},{item:"border-left-style",url:"https://developer.mozilla.org/zh-CN/docs/CSS/border-left-style"},{item:"border-left-color",url:"https://developer.mozilla.org/zh-CN/docs/CSS/border-left-color"},{item:"border-radius",url:"https://developer.mozilla.org/zh-CN/docs/CSS/border-radius"},{item:"border-top-left-radius",url:"https://developer.mozilla.org/zh-CN/docs/CSS/border-top-left-radius"},{item:"border-top-right-radius",url:"https://developer.mozilla.org/zh-CN/docs/CSS/border-top-right-radius"},{item:"border-bottom-left-radius",url:"https://developer.mozilla.org/zh-CN/docs/CSS/border-bottom-left-radius"},{item:"border-bottom-right-radius",url:"https://developer.mozilla.org/zh-CN/docs/CSS/border-bottom-right-radius"},{item:"border-shadow",url:"https://developer.mozilla.org/zh-CN/docs/CSS/box-shadow"},{item:"border-image",url:"https://developer.mozilla.org/zh-CN/docs/CSS/border-image"},{item:"border-image-source",url:"https://developer.mozilla.org/zh-CN/docs/CSS/border-image-source"},{item:"border-image-slice",url:"https://developer.mozilla.org/zh-CN/docs/CSS/border-image-slice"},{item:"border-image-width",url:"https://developer.mozilla.org/zh-CN/docs/CSS/border-image-width"},{item:"border-image-outset",url:"https://developer.mozilla.org/zh-CN/docs/CSS/border-image-outset"},{item:"border-image-repeat",url:"https://developer.mozilla.org/zh-CN/docs/CSS/border-image-repeat"}]},{title:"背景",title_en:"Background",color:"#a0d468",list:[{item:"background",url:"https://developer.mozilla.org/zh-CN/docs/CSS/background"},{item:"background-color",url:"https://developer.mozilla.org/zh-CN/docs/CSS/background-color"},{item:"background-image",url:"https://developer.mozilla.org/zh-CN/docs/CSS/background-image"},{item:"background-repeat",url:"https://developer.mozilla.org/zh-CN/docs/CSS/background-repeat"},{item:"background-attachment",url:"https://developer.mozilla.org/zh-CN/docs/CSS/background-attachment"},{item:"background-position",url:"https://developer.mozilla.org/zh-CN/docs/CSS/background-position"},{item:"background-origin",url:"https://developer.mozilla.org/zh-CN/docs/CSS/background-origin"},{item:"background-clip",url:"https://developer.mozilla.org/zh-CN/docs/CSS/background-clip"},{item:"background-size",url:"https://developer.mozilla.org/zh-CN/docs/CSS/background-size"}]},{title:"颜色",title_en:"Color",color:"#a0d468",list:[{item:"color",url:"https://developer.mozilla.org/zh-CN/docs/CSS/color"},{item:"opacity",url:"https://developer.mozilla.org/zh-CN/docs/CSS/opacity"}]},{title:"字体",title_en:"Font",color:"#a0d468",list:[{item:"font",url:"https://developer.mozilla.org/zh-CN/docs/CSS/font"},{item:"font-style",url:"https://developer.mozilla.org/zh-CN/docs/CSS/font-style"},{item:"font-variant",url:"https://developer.mozilla.org/zh-CN/docs/CSS/font-variant"},{item:"font-weigh",url:"https://developer.mozilla.org/zh-CN/docs/CSS/font-weight"},{item:"font-size",url:"https://developer.mozilla.org/zh-CN/docs/CSS/font-size"},{item:"font-family",url:"https://developer.mozilla.org/zh-CN/docs/CSS/font-family"},{item:"font-stretch",url:"https://developer.mozilla.org/zh-CN/docs/CSS/font-stretch"}]},{title:"文本",title_en:"Text",color:"#a0d468",list:[{item:"line-height",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/line-height"},{item:"letter-spacing",url:"https://developer.mozilla.org/zh-CN/docs/CSS/letter-spacing"},{item:"text-align",url:"https://developer.mozilla.org/zh-CN/docs/CSS/text-align"},{item:"text-align-last",url:"https://developer.mozilla.org/zh-CN/docs/CSS/text-align-last"},{item:"text-indent",url:"https://developer.mozilla.org/zh-CN/docs/CSS/text-indent"},{item:"text-justify",url:"http://msdn.microsoft.com/zh-cn/library/gg721783(v=Expression.40).aspx"},{item:"text-transform",url:"https://developer.mozilla.org/zh-CN/docs/CSS/text-transform"},{item:"tab-size",url:"https://developer.mozilla.org/zh-CN/docs/CSS/tab-size"},{item:"vertical-align",url:"https://developer.mozilla.org/zh-CN/docs/CSS/vertical-align"},{item:"white-space",url:"https://developer.mozilla.org/zh-CN/docs/CSS/white-space"},{item:"word-break",url:"https://developer.mozilla.org/zh-CN/docs/CSS/word-break"},{item:"word-spacing",url:"https://developer.mozilla.org/zh-CN/docs/CSS/word-spacing"},{item:"word-wrap",url:"https://developer.mozilla.org/zh-CN/docs/CSS/word-wrap"},{item:"overflow-wrap",url:"https://developer.mozilla.org/zh-CN/docs/CSS/overflow-wrap"}]},{title:"文本装饰",title_en:"Text Decoration",color:"#a0d468",list:[{item:"text-decoration",url:"https://developer.mozilla.org/zh-CN/docs/CSS/text-decoration"},{item:"text-decoration-line",url:"https://developer.mozilla.org/zh-CN/docs/CSS/text-decoration-line"},{item:"text-decoration-style",url:"https://developer.mozilla.org/zh-CN/docs/CSS/text-decoration-style"},{item:"text-decoration-color",url:"https://developer.mozilla.org/zh-CN/docs/CSS/text-decoration-color"},{item:"text-shadow",url:"https://developer.mozilla.org/zh-CN/docs/CSS/text-shadow"}]},{title:"书写模式",title_en:"Writing Modes",color:"#a0d468",list:[{item:"direction",url:"https://developer.mozilla.org/zh-CN/docs/CSS/direction"},{item:"unicode-bidi",url:"https://developer.mozilla.org/zh-CN/docs/CSS/unicode-bidi"},{item:"writing-mode",url:"https://developer.mozilla.org/zh-CN/docs/CSS/writing-mode"}]}],a=m,p={data:function(){return{css:a}}},h=p,c=(t("4486"),t("2877")),n=Object(c["a"])(h,s,d,!1,null,"129c47fc",null),S=n.exports,C={name:"app",components:{HelloWorld:S}},z=C,u=(t("034f"),Object(c["a"])(z,r,i,!1,null,null,null)),g=u.exports;l["a"].config.productionTip=!1,new l["a"]({render:function(e){return e(g)}}).$mount("#app")},"64a9":function(e,o,t){}});
//# sourceMappingURL=app.00da863a.js.map