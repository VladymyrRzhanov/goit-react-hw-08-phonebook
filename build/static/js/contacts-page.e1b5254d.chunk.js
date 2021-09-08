(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[2],{166:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var i,a=t(4),r=t(5).a.div(i||(i=Object(a.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    background-color: rgb(255 255 255 / 77%);\n"]))),o=(t(2),r)},176:function(e,n,t){e.exports=t(184)},177:function(e,n,t){"use strict";var i=t(87),a=t(88);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),o=(0,i(t(89)).default)(r.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");n.default=o},183:function(e,n,t){e.exports={enter:"alert_enter__1sAM6",enterActive:"alert_enterActive__2zzrE",exit:"alert_exit__3bEJB",exitActive:"alert_exitActive__3sS2w"}},184:function(e,n,t){"use strict";function i(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=t(0),r=i(a),o=t(24);t(6);var c=i(t(185));function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function s(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}function u(e){return requestAnimationFrame(e)}function d(e){cancelAnimationFrame(e)}function f(e){var n=e.ownerDocument;return n.hasFocus()&&n.activeElement===e}function p(e){return null==e?void 0:e.ownerDocument}function b(e){return a.useCallback((function(){var n=e.current,t="undefined"!=typeof window&&function(e){var n=function(e){var n;return null==(n=p(e))?void 0:n.defaultView}(e);return!!n&&e instanceof n.HTMLElement}(n);if(!n||!t)return null;if("INPUT"!==n.nodeName&&(n=n.querySelector("input")),!n)throw new Error("react-input-mask: inputComponent doesn't contain input node");return n}),[e])}function h(e,n){var t,i,r,o,c=a.useRef({start:null,end:null}),l=b(e),s=a.useCallback((function(){return function(e){var n=e.selectionStart,t=e.selectionEnd;return{start:n,end:t,length:t-n}}(l())}),[l]),p=a.useCallback((function(){return c.current}),[]),h=a.useCallback((function(e){var n=l();n&&f(n)&&(function(e,n,t){void 0===t&&(t=n),e.setSelectionRange(n,t)}(n,e.start,e.end),c.current=s())}),[l,s]),m=a.useCallback((function(){c.current=s()}),[s]),g=(t=m,i=a.useRef(null),r=a.useCallback((function(){null===i.current&&function e(){t(),i.current=u(e)}()}),[t]),o=a.useCallback((function(){d(i.current),i.current=null}),[]),a.useEffect((function(){i.current&&(o(),r())}),[r,o]),a.useEffect(d,[]),[r,o]),v=g[0],x=g[1];return a.useLayoutEffect((function(){if(n){var e=l();return e.addEventListener("focus",v),e.addEventListener("blur",x),f(e)&&v(),function(){e.removeEventListener("focus",v),e.removeEventListener("blur",x),x()}}})),{getSelection:s,getLastSelection:p,setSelection:h}}function m(e,n){var t=a.useRef(),i=h(t,n),r=i.getSelection,o=i.getLastSelection,c=i.setSelection,l=function(e,n){var t=b(e),i=a.useRef(n);return{getValue:a.useCallback((function(){return t().value}),[t]),getLastValue:a.useCallback((function(){return i.current}),[]),setValue:a.useCallback((function(e){i.current=e;var n=t();n&&(n.value=e)}),[t])}}(t,e),s=l.getValue,u=l.getLastValue,d=l.setValue;return{inputRef:t,getInputState:function(){return{value:s(),selection:r()}},getLastInputState:function(){return{value:u(),selection:o()}},setInputState:function(e){var n=e.value,t=e.selection;d(n),c(t)}}}t(186);var g=["disabled","onBlur","onChange","onFocus","onMouseDown","readOnly","value"],v={9:/[0-9]/,a:/[A-Za-z]/,"*":/[A-Za-z0-9]/},x=function(e){var n=this;this.isCharacterAllowedAtPosition=function(e,t){var i=n.maskOptions.maskPlaceholder;return!!n.isCharacterFillingPosition(e,t)||!!i&&i[t]===e},this.isCharacterFillingPosition=function(e,t){var i=n.maskOptions.mask;if(!e||t>=i.length)return!1;if(!n.isPositionEditable(t))return i[t]===e;var a=i[t];return new RegExp(a).test(e)},this.isPositionEditable=function(e){var t=n.maskOptions,i=t.mask,a=t.permanents;return e<i.length&&-1===a.indexOf(e)},this.isValueEmpty=function(e){return e.split("").every((function(e,t){return!n.isPositionEditable(t)||!n.isCharacterFillingPosition(e,t)}))},this.isValueFilled=function(e){return n.getFilledLength(e)===n.maskOptions.lastEditablePosition+1},this.getDefaultSelectionForValue=function(e){var t=n.getFilledLength(e),i=n.getRightEditablePosition(t);return{start:i,end:i}},this.getFilledLength=function(e){return function(e,n){for(var t=e.length-1;t>=0;t--)if(n(e[t],t))return t;return-1}(e.split(""),(function(e,t){return n.isPositionEditable(t)&&n.isCharacterFillingPosition(e,t)}))+1},this.getStringFillingLengthAtPosition=function(e,t){return e.split("").reduce((function(e,t){return n.insertCharacterAtPosition(e,t,e.length)}),function(e,n){void 0===n&&(n=1);for(var t="",i=0;i<n;i++)t+=" ";return t}(0,t)).length-t},this.getLeftEditablePosition=function(e){for(var t=e;t>=0;t--)if(n.isPositionEditable(t))return t;return null},this.getRightEditablePosition=function(e){for(var t=n.maskOptions.mask,i=e;i<t.length;i++)if(n.isPositionEditable(i))return i;return null},this.formatValue=function(e){var t=n.maskOptions,i=t.maskPlaceholder,a=t.mask;if(!i){for(e=n.insertStringAtPosition("",e,0);e.length<a.length&&!n.isPositionEditable(e.length);)e+=a[e.length];return e}return n.insertStringAtPosition(i,e,0)},this.clearRange=function(e,t,i){if(!i)return e;var a=t+i,r=n.maskOptions,o=r.maskPlaceholder,c=r.mask,l=e.split("").map((function(e,i){var r=n.isPositionEditable(i);return!o&&i>=a&&!r?"":i<t||i>=a?e:r?o?o[i]:"":c[i]})).join("");return n.formatValue(l)},this.insertCharacterAtPosition=function(e,t,i){var a=n.maskOptions,r=a.mask,o=a.maskPlaceholder;if(i>=r.length)return e;var c=n.isCharacterAllowedAtPosition(t,i),l=n.isPositionEditable(i),s=n.getRightEditablePosition(i),u=o&&s?t===o[s]:null,d=e.slice(0,i);return!c&&l||(e=d+(c?t:r[i])),c||l||u||(e=n.insertCharacterAtPosition(e,t,i+1)),e},this.insertStringAtPosition=function(e,t,i){var a=n.maskOptions,r=a.mask,o=a.maskPlaceholder;if(!t||i>=r.length)return e;var c=t.split(""),l=n.isValueFilled(e)||!!o,s=e.slice(i);return e=c.reduce((function(e,t){return n.insertCharacterAtPosition(e,t,e.length)}),e.slice(0,i)),l?e+=s.slice(e.length-i):n.isValueFilled(e)?e+=r.slice(e.length).join(""):e=s.split("").filter((function(e,t){return n.isPositionEditable(i+t)})).reduce((function(e,t){var i=n.getRightEditablePosition(e.length);return null===i?e:(n.isPositionEditable(e.length)||(e+=r.slice(e.length,i).join("")),n.insertCharacterAtPosition(e,t,e.length))}),e),e},this.processChange=function(e,t){var i=n.maskOptions,a=i.mask,r=i.prefix,o=i.lastEditablePosition,c=e.value,l=e.selection,s=t.value,u=t.selection,d=c,f="",p=0,b=0,h=Math.min(u.start,l.start);return l.end>u.start?(f=d.slice(u.start,l.end),b=(p=n.getStringFillingLengthAtPosition(f,h))?u.length:0):d.length<s.length&&(b=s.length-d.length),d=s,b&&(1!==b||u.length||(h=u.start===l.start?n.getRightEditablePosition(l.start):n.getLeftEditablePosition(l.start)),d=n.clearRange(d,h,b)),d=n.insertStringAtPosition(d,f,h),(h+=p)>=a.length?h=a.length:h<r.length&&!p?h=r.length:h>=r.length&&h<o&&p&&(h=n.getRightEditablePosition(h)),{value:d=n.formatValue(d),enteredString:f,selection:{start:h,end:h}}},this.maskOptions=function(e){var n=e.mask,t=e.maskPlaceholder,i=[];if(!n)return{maskPlaceholder:null,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};if("string"==typeof n){var a=!1,r="";n.split("").forEach((function(e){a||"\\"!==e?(!a&&v[e]||i.push(r.length),r+=e,a=!1):a=!0})),n=r.split("").map((function(e,n){return-1===i.indexOf(n)?v[e]:e}))}else n.forEach((function(e,n){"string"==typeof e&&i.push(n)}));t&&(t=1===t.length?n.map((function(e,n){return-1!==i.indexOf(n)?e:t})):t.split(""),i.forEach((function(e){t[e]=n[e]})),t=t.join(""));for(var o=i.filter((function(e,n){return e===n})).map((function(e){return n[e]})).join(""),c=n.length-1;-1!==i.indexOf(c);)c--;return{maskPlaceholder:t,prefix:o,mask:n,lastEditablePosition:c,permanents:i}}(e)},j=function(e){function n(){return e.apply(this,arguments)||this}return function(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,function(e,n){for(var t=Object.getOwnPropertyNames(n),i=0;i<t.length;i++){var a=t[i],r=Object.getOwnPropertyDescriptor(n,a);r&&r.configurable&&void 0===e[a]&&Object.defineProperty(e,a,r)}}(e,n)}(n,e),n.prototype.render=function(){var e=this.props,n=e.children,t=s(e,["children"]);return r.cloneElement(n,t)},n}(r.Component),O=a.forwardRef((function(e,n){var t=e.alwaysShowMask,i=e.children,d=e.mask,h=e.maskPlaceholder,v=e.beforeMaskedStateChange,O=s(e,["alwaysShowMask","children","mask","maskPlaceholder","beforeMaskedStateChange"]);!function(e){var n=e.mask,t=e.maskPlaceholder;n&&t&&1!==t.length&&t.length!==n.length&&c(!1)}(e);var w,k,y=new x({mask:d,maskPlaceholder:h}),E=!!d,P=!O.disabled&&!O.readOnly,C=null!==e.value&&void 0!==e.value,S=(w=E,k=a.useRef(),a.useEffect((function(){k.current=w})),k.current),_=m(function(e){return""+e}((C?e.value:e.defaultValue)||""),E),L=_.inputRef,A=_.getInputState,F=_.setInputState,M=_.getLastInputState,V=b(L);if(E&&C){var z=V(),N=z&&f(z)||t||e.value?y.formatValue(e.value):e.value;v&&(N=v({nextState:{value:N,selection:{start:null,end:null}}}).value),F(l({},M(),{value:N}))}var D=M(),R=D.selection,I=D.value;a.useLayoutEffect((function(){if(E){var e=f(V()),n=R,i=A(),a=l({},i);if(!C){var r=i.value,o=y.formatValue(r),c=y.isValueEmpty(o);!c||e||t?a.value=o:c&&!e&&(a.value="")}e&&!S?a.selection=y.getDefaultSelectionForValue(a.value):C&&e&&n&&null!==n.start&&null!==n.end&&(a.selection=n),v&&(a=v({currentState:i,nextState:a})),F(a)}}));var q=l({},O,{onFocus:function(n){L.current=n.target;var t=A().value;if(E&&!y.isValueFilled(t)){var i=y.formatValue(t),a=y.getDefaultSelectionForValue(i),r={value:i,selection:a};v&&(i=(r=v({currentState:A(),nextState:r})).value,a=r.selection),F(r),i!==t&&e.onChange&&e.onChange(n),u((function(){F(M())}))}e.onFocus&&e.onFocus(n)},onBlur:function(n){var i=A().value,a=M().value;if(E&&!t&&y.isValueEmpty(a)){var r="",o={value:r,selection:{start:null,end:null}};v&&(r=(o=v({currentState:A(),nextState:o})).value),F(o),r!==i&&e.onChange&&e.onChange(n)}e.onBlur&&e.onBlur(n)},onChange:E&&P?function(n){var t=A(),i=M(),a=y.processChange(t,i);v&&(a=v({currentState:t,previousState:i,nextState:a})),F(a),e.onChange&&e.onChange(n)}:e.onChange,onMouseDown:E&&P?function(n){var t=V(),i=A().value,a=p(t);if(!f(t)&&!y.isValueFilled(i)){var r=n.clientX,o=n.clientY,c=(new Date).getTime();a.addEventListener("mouseup",(function e(n){if(a.removeEventListener("mouseup",e),f(t)){var i=Math.abs(n.clientX-r),s=Math.abs(n.clientY-o),u=Math.max(i,s),d=(new Date).getTime()-c;if(u<=10&&d<=200||u<=5&&d<=300){var p=M(),b=l({},p,{selection:y.getDefaultSelectionForValue(p.value)});F(b)}}}))}e.onMouseDown&&e.onMouseDown(n)}:e.onMouseDown,ref:function(e){L.current=o.findDOMNode(e),function(e){return"function"==typeof e}(n)?n(e):null!==n&&"object"==typeof n&&(n.current=e)},value:E&&C?I:e.value});return i?(function(e,n){g.filter((function(t){return null!=n.props[t]&&n.props[t]!==e[t]})).length&&c(!1)}(e,i),r.createElement(j,q,i)):r.createElement("input",q)}));O.displayName="InputMask",O.defaultProps={alwaysShowMask:!1,maskPlaceholder:"_"},e.exports=O},185:function(e,n,t){"use strict";e.exports=function(e,n,t,i,a,r,o,c){if(!e){var l;if(void 0===n)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[t,i,a,r,o,c],u=0;(l=new Error(n.replace(/%s/g,(function(){return s[u++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},186:function(e,n,t){"use strict";var i=function(){};e.exports=i},187:function(e,n,t){"use strict";var i=t(87),a=t(88);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),o=(0,i(t(89)).default)(r.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");n.default=o},188:function(e,n,t){"use strict";var i=t(87),a=t(88);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),o=(0,i(t(89)).default)(r.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");n.default=o},189:function(e,n,t){e.exports={overlay:"Modal_overlay__1lbFu",modal:"Modal_modal__34DeK",image:"Modal_image__3DgXv"}},190:function(e,n,t){"use strict";var i=t(87),a=t(88);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(0)),o=(0,i(t(89)).default)(r.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever");n.default=o},191:function(e,n,t){e.exports={enter:"slice_enter__3oe2d",enterActive:"slice_enterActive__1cSAq",exit:"slice_exit__2TxX8",exitActive:"slice_exitActive__f5ijz"}},192:function(e,n,t){e.exports={enter:"pop_enter__1OZa_",enterActive:"pop_enterActive__UXnjO",exit:"pop_exit__11VsC",exitActive:"pop_exitActive__38eRy"}},212:function(e,n,t){"use strict";t.r(n);var i={};t.r(i),t.d(i,"getItems",(function(){return D})),t.d(i,"getFilterName",(function(){return R}));var a,r,o,c,l,s,u,d,f,p,b,h,m,g,v,x,j,O,w,k,y,E,P,C,S,_,L,A,F=t(14),M=t(165),V=t(0),z=t(23),N=(t(45),t(38)),D=function(e){return e.contacts.items},R=Object(N.a)([D,function(e){return e.contacts.filter}],(function(e,n){var t=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))})),I=t(4),q=t(5),T=q.a.div(a||(a=Object(I.a)(["\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  padding: 20px;\n  border-radius: 10px;\n  background-color: red;\n  color: #fff;\n"]))),X=t(2),Y=function(e){var n=e.alertName;return Object(X.jsx)(T,{children:Object(X.jsx)("h1",{children:n})})},B=t(183),H=t.n(B),J=t(160),W=t(50),Z=t(210),U=t(211),K=t(187),G=t.n(K),Q=t(176),$=t.n(Q),ee=t(209),ne=Object(q.a)(ee.a)(r||(r=Object(I.a)(["\n    width: 220px;\n    margin: 10px;\n\n@media screen and (min-width: 768px) {\n    width: 430px;\n  }\n"]))),te=q.a.form(o||(o=Object(I.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 20px 0;\n  margin-bottom: 40px;\n  border: 1px solid rgb(161 161 161 / 50%);;\n  box-shadow: 13px 13px 25px -5px rgba(34, 60, 80, 0.3);\n\n  @media screen and (min-width: 768px) {\n    width: 600px;\n  }\n"]))),ie=(q.a.label(c||(c=Object(I.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  width: 100%;\n"]))),q.a.input(l||(l=Object(I.a)(["\n  width: 300px;\n  padding: 10px 20px;\n  font-size: 16px;\n  border-radius: 5px;\n"]))),Object(q.a)($.a)(s||(s=Object(I.a)(["\n  width: 180px;\n  position: absolute;\n  bottom: 2px;\n  left: 2px;\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 5px;\n  border: none;\n@media screen and (min-width: 768px) {\n      width: 300px;\n  }\n  &:hover, &:focus {\n    outline: none;\n  }\n"])))),ae=(q.a.span(u||(u=Object(I.a)(["\n  font-size: 18px;\n  font-weight: 500;\n"]))),q.a.button(d||(d=Object(I.a)(["\n  background-color: rgb(51 147 216);\n  border-radius: 5px;\n  border: none;\n  cursor: pointer;\n  transition: 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 20px;\n  color: #fff;\n\n  &:hover {\n    transform: scale(1.1);\n  }\n"])))),re=q.a.span(f||(f=Object(I.a)(["\n  margin-right: 10px;\n  font-weight: 700;\n  font-size: 16px;\n"]))),oe=function(){var e=Object(V.useState)(""),n=Object(M.a)(e,2),t=n[0],a=n[1],r=Object(V.useState)(""),o=Object(M.a)(r,2),c=o[0],l=o[1],s=Object(V.useState)(""),u=Object(M.a)(s,2),d=u[0],f=u[1],p=Object(F.c)(),b=Object(F.d)(i.getItems),h=Object(Z.a)((function(e){return{root:{display:"flex",flexWrap:"wrap"},margin:{margin:e.spacing(1)},withoutLabel:{marginTop:e.spacing(3)},textField:{width:"50ch"}}}))(),m=function(e){var n=e.target,t=n.name,i=n.value;switch(t){case"name":a(i);break;case"number":l(i);break;default:return}},g=function(){a(""),l("")};return Object(X.jsxs)(te,{onSubmit:function(e){e.preventDefault(),b.some((function(e){return e.name===t}))?f("".concat(t," is already in your contacts book!")):p(z.addContact({name:t,number:c})),g()},children:[Object(X.jsx)(J.a,{in:d.length>0,timeout:{enter:3e3,exit:50},classNames:H.a,unmountOnExit:!0,onEntered:function(){f("")},children:Object(X.jsx)(Y,{alertName:d})}),Object(X.jsx)(ne,{className:Object(W.a)(h.margin),variant:"outlined",children:Object(X.jsx)(U.a,{label:"Name",type:"text",autoComplete:"off",name:"name",value:t,variant:"outlined",required:!0,onChange:m})}),Object(X.jsxs)(ne,{className:Object(W.a)(h.margin),variant:"outlined",children:[Object(X.jsx)(U.a,{label:"Phone",type:"tel",name:"number",value:c,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",variant:"outlined",autoComplete:"off",required:!0,onChange:m}),Object(X.jsx)(ie,{label:"Phone",mask:"+99(999)999-99-99",type:"tel",autoComplete:"off",name:"number",value:c,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,variant:"outlined",onChange:m})]}),Object(X.jsxs)(ae,{type:"submit",children:[Object(X.jsx)(re,{children:"Add contact"}),Object(X.jsx)(G.a,{width:"32",height:"32"})]})]})},ce=t(74),le=t(188),se=t.n(le),ue=Object(q.a)(se.a)(p||(p=Object(I.a)(["\n  position: absolute;\n  color: rgb(154 154 154);\n  width: 50px;\n  bottom: 50%;\n  transform: translate(50%, 50%);\n  right: 20px;\n"]))),de=Object(q.a)(U.a)(b||(b=Object(I.a)(["\n&:visited ~ "," {\n    fill: rgb(51 147 216);\n  }\n"])),ue),fe=(q.a.label(h||(h=Object(I.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n  width: 600px;\n"]))),q.a.span(m||(m=Object(I.a)(["\n  font-size: 18px;\n  font-weight: 500;\n"]))),function(){var e=Object(F.c)(),n=Object(Z.a)((function(e){return{root:{display:"flex",flexWrap:"wrap"},margin:{margin:e.spacing(1)},withoutLabel:{marginTop:e.spacing(3)},textField:{width:"50ch"}}}))();return Object(X.jsxs)(ee.a,{className:Object(W.a)(n.margin,n.textField),variant:"outlined",children:[Object(X.jsx)(de,{id:"outlined-basic",label:"Search",type:"text",variant:"outlined",onChange:function(n){var t=n.target.value;return e(Object(ce.a)(t))}}),Object(X.jsx)(ue,{})]})}),pe=t(166),be=t(24),he=t(189),me=t.n(he),ge=document.querySelector("#modal"),ve=function(e){var n=e.onClose,t=(e.index,e.children);Object(V.useEffect)((function(){var e=function(e){"Escape"===e.code&&n()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}));return Object(be.createPortal)(Object(X.jsx)("div",{className:me.a.overlay,onClick:function(e){e.currentTarget===e.target&&n()},children:Object(X.jsx)("div",{className:me.a.modal,children:t})}),ge)},xe=t(177),je=t.n(xe),Oe=Object(q.a)(ee.a)(g||(g=Object(I.a)(["\n    width: 220px;\n    margin: 10px;\n\n@media screen and (min-width: 768px) {\n    width: 430px;\n  }\n"]))),we=q.a.form(v||(v=Object(I.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 20px 0;\n  border: 1px solid rgb(161 161 161 / 50%);;\n  box-shadow: 13px 13px 25px -5px rgba(34, 60, 80, 0.3);\n\n  @media screen and (min-width: 768px) {\n    width: 600px;\n  }\n"]))),ke=(q.a.label(x||(x=Object(I.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  width: 100%;\n"]))),q.a.input(j||(j=Object(I.a)(["\n  width: 300px;\n  padding: 10px 20px;\n  font-size: 16px;\n  border-radius: 5px;\n"]))),Object(q.a)($.a)(O||(O=Object(I.a)(["\n  width: 180px;\n  position: absolute;\n  bottom: 2px;\n  left: 2px;\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 5px;\n  border: none;\n@media screen and (min-width: 768px) {\n      width: 300px;\n  }\n  &:hover, &:focus {\n    outline: none;\n  }\n"])))),ye=(q.a.span(w||(w=Object(I.a)(["\n  font-size: 18px;\n  font-weight: 500;\n"]))),q.a.button(k||(k=Object(I.a)(["\n  background-color: rgb(51 147 216);\n  border-radius: 5px;\n  border: none;\n  cursor: pointer;\n  transition: 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 20px;\n  color: #fff;\n\n  &:hover {\n    transform: scale(1.1);\n  }\n"])))),Ee=q.a.span(y||(y=Object(I.a)(["\n  margin-right: 10px;\n  font-weight: 700;\n  font-size: 16px;\n"]))),Pe=function(e){var n=e.userName,t=e.userNumber,i=e.userId,a=e.onClose,r=Object(F.c)(),o=Object(V.useState)(""),c=Object(M.a)(o,2),l=c[0],s=c[1],u=Object(V.useState)(""),d=Object(M.a)(u,2),f=d[0],p=d[1],b=Object(Z.a)((function(e){return{root:{display:"flex",flexWrap:"wrap"},margin:{margin:e.spacing(1)},withoutLabel:{marginTop:e.spacing(3)},textField:{width:"50ch"}}}))();Object(V.useEffect)((function(){s(n),p(t)}),[n,t]);var h=function(e){var n=e.target,t=n.name,i=n.value;switch(t){case"name":s(i);break;case"number":p(i);break;default:return}},m=function(){s(""),p("")};return Object(X.jsxs)(we,{onSubmit:function(e){e.preventDefault(),r(z.editContact({userId:i,name:l,number:f})),m(),a()},children:[Object(X.jsx)(Oe,{className:Object(W.a)(b.margin),variant:"outlined",children:Object(X.jsx)(U.a,{label:"Name",type:"text",autoComplete:"off",name:"name",value:l,variant:"outlined",required:!0,onChange:h})}),Object(X.jsxs)(Oe,{className:Object(W.a)(b.margin),variant:"outlined",children:[Object(X.jsx)(U.a,{label:"Phone",type:"tel",name:"number",value:f,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",variant:"outlined",autoComplete:"off",required:!0,onChange:h}),Object(X.jsx)(ke,{label:"Phone",mask:"+99(999)999-99-99",type:"tel",autoComplete:"off",name:"number",value:f,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,variant:"outlined",onChange:h})]}),Object(X.jsxs)(ye,{type:"submit",children:[Object(X.jsx)(Ee,{children:"Edit contact"}),Object(X.jsx)(je.a,{width:"32",height:"32"})]})]})},Ce=t(190),Se=t.n(Ce),_e=q.a.div(E||(E=Object(I.a)(["\n  width: 100%;\n\n  @media screen and (min-width: 768px) {\n    width: 70%;\n  }\n"]))),Le=q.a.li(P||(P=Object(I.a)(["\n  position: relative;\n  font-size: 18px;\n  font-weight: 500;\n  list-style: none;\n  box-shadow: 13px 13px 25px -5px rgb(34 60 80 / 30%);\n\n  &:not(:last-child) {\n  margin-bottom: 10px;\n}\n"]))),Ae=q.a.div(C||(C=Object(I.a)(["\n  width: 50%;\n  padding: 20px 50px;\n  \n  @media screen and (min-width: 768px) {\n      width: 70%;\n  }\n"]))),Fe=q.a.div(S||(S=Object(I.a)(['\n  position: relative;\n  font-size: 12px;\n  transition: 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  display: flex;\n  justify-content: space-between;\n  \n  @media screen and (min-width: 768px) {\n    font-size: 18px;\n  }\n\n  &::before {\n    content: "";\n    position: absolute;\n    bottom: -5px;\n    left: 0;\n    width: 100%;\n    height: 4px;\n    background-color: rgb(51 147 216);    \n    transform: scaleX(0);\n    transition: 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  }\n']))),Me=Object(q.a)(Se.a)(_||(_=Object(I.a)(["\n  position: absolute;\n  right: 20px;\n  cursor: pointer;\n  bottom: 50%;\n  transform: translateY(50%);\n  color: rgb(51 147 216);\n  transition: 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n\n  &:hover {\n    transform: scale(1.2) translateY(50%);\n  }\n\n  &:hover ~ "," {\n    transform: scale(1.1);\n  }\n\n  &:hover ~ ","::before {\n    transform: scaleX(1);\n  }\n"])),Fe,Fe),Ve=Object(q.a)(je.a)(L||(L=Object(I.a)(["\n  position: absolute;\n  right: 60px;\n  color: rgb(51 147 216);\n  bottom: 50%;\n  transform: translateY(50%);\n  cursor: pointer;\n  transition: 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);\n\n  &:hover {\n    transform: scale(1.2) translateY(50%);\n  }\n\n  &:hover ~ "," {\n    transform: scale(1.1);\n  }\n\n  &:hover ~ ","::before {\n    transform: scaleX(1);\n  }\n"])),Fe,Fe),ze=function(e){var n=e.onDelete,t=e.name,i=e.number,a=e.id,r=Object(V.useState)(!1),o=Object(M.a)(r,2),c=o[0],l=o[1],s=function(){l(!c)};return Object(X.jsxs)(X.Fragment,{children:[c&&Object(X.jsx)(ve,{onClose:s,children:Object(X.jsx)(Pe,{userName:t,userNumber:i,userId:a,onClose:s})}),Object(X.jsx)(Le,{children:Object(X.jsxs)(Ae,{children:[Object(X.jsx)(Me,{type:"button",onClick:n,children:"Delete X"}),Object(X.jsx)(Ve,{onClick:s}),Object(X.jsxs)(Fe,{children:[Object(X.jsxs)("span",{children:[t,":"]}),Object(X.jsx)("span",{children:i})]})]})})]})},Ne=t(191),De=t.n(Ne),Re=t(217),Ie=Object(F.b)((function(e){return{contacts:i.getFilterName(e)}}),(function(e){return{onDelete:function(n){return e(z.deleteContact(n))}}}))((function(e){var n=e.contacts,t=e.onDelete,i=Object(F.c)();return Object(V.useEffect)((function(){i(z.fetchContacts())}),[i]),Object(X.jsx)(_e,{children:Object(X.jsx)(Re.a,{component:"ul",children:n.map((function(e){var n=e.id,i=e.name,a=e.number;return Object(X.jsx)(J.a,{timeout:250,classNames:De.a,unmountOnExit:!0,children:Object(X.jsx)(ze,{name:i,number:a,id:n,onDelete:function(){return t(n)}})},n)}))})})})),qe=q.a.h2(A||(A=Object(I.a)(["\n    margin-bottom: 20px;\n"]))),Te=t(192),Xe=t.n(Te);n.default=Object(F.b)((function(e){return{contacts:i.getItems(e)}}))((function(e){var n=e.contacts;return Object(X.jsxs)(pe.a,{children:[Object(X.jsx)(oe,{}),Object(X.jsx)(J.a,{in:n.length>1,classNames:Xe.a,timeout:500,unmountOnExit:!0,children:Object(X.jsx)(fe,{})}),Object(X.jsx)(J.a,{in:!!n.length,classNames:Xe.a,timeout:500,unmountOnExit:!0,children:Object(X.jsx)(qe,{children:"Contacts"})}),Object(X.jsx)(Ie,{})]})}))}}]);
//# sourceMappingURL=contacts-page.e1b5254d.chunk.js.map