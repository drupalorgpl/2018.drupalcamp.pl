/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function(e,t){typeof module!="undefined"?module.exports=t():typeof define=="function"&&typeof define.amd=="object"?define(t):this[e]=t()}("domready",function(){var e=[],t,n=document,r=n.documentElement.doScroll,i="DOMContentLoaded",s=(r?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return s||n.addEventListener(i,t=function(){n.removeEventListener(i,t),s=1;while(t=e.shift())t()}),function(t){s?setTimeout(t,0):e.push(t)}});
/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});
;
/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=window.getComputedStyle(e,null);return t?o[t]:o}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e||-1!==['HTML','BODY','#document'].indexOf(e.nodeName))return window.document.body;var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll)/.test(r+s+p)?e:n(o(e))}function r(e){var o=e&&e.offsetParent,i=o&&o.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(o.nodeName)&&'static'===t(o,'position')?r(o):o:window.document.documentElement}function p(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||r(e.firstElementChild)===e)}function s(e){return null===e.parentNode?e:s(e.parentNode)}function d(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return window.document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=o?e:t,n=o?t:e,a=document.createRange();a.setStart(i,0),a.setEnd(n,0);var l=a.commonAncestorContainer;if(e!==l&&t!==l||i.contains(n))return p(l)?l:r(l);var f=s(e);return f.host?d(f.host,t):d(e,s(t).host)}function a(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',i=e.nodeName;if('BODY'===i||'HTML'===i){var n=window.document.documentElement,r=window.document.scrollingElement||n;return r[o]}return e[o]}function l(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=a(t,'top'),n=a(t,'left'),r=o?-1:1;return e.top+=i*r,e.bottom+=i*r,e.left+=n*r,e.right+=n*r,e}function f(e,t){var o='x'===t?'Left':'Top',i='Left'==o?'Right':'Bottom';return+e['border'+o+'Width'].split('px')[0]+ +e['border'+i+'Width'].split('px')[0]}function m(e,t,o,i){return X(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],ne()?o['offset'+e]+i['margin'+('Height'===e?'Top':'Left')]+i['margin'+('Height'===e?'Bottom':'Right')]:0)}function c(){var e=window.document.body,t=window.document.documentElement,o=ne()&&window.getComputedStyle(t);return{height:m('Height',e,t,o),width:m('Width',e,t,o)}}function h(e){return de({},e,{right:e.left+e.width,bottom:e.top+e.height})}function g(e){var o={};if(ne())try{o=e.getBoundingClientRect();var i=a(e,'top'),n=a(e,'left');o.top+=i,o.left+=n,o.bottom+=i,o.right+=n}catch(e){}else o=e.getBoundingClientRect();var r={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},p='HTML'===e.nodeName?c():{},s=p.width||e.clientWidth||r.right-r.left,d=p.height||e.clientHeight||r.bottom-r.top,l=e.offsetWidth-s,m=e.offsetHeight-d;if(l||m){var g=t(e);l-=f(g,'x'),m-=f(g,'y'),r.width-=l,r.height-=m}return h(r)}function u(e,o){var i=ne(),r='HTML'===o.nodeName,p=g(e),s=g(o),d=n(e),a=t(o),f=+a.borderTopWidth.split('px')[0],m=+a.borderLeftWidth.split('px')[0],c=h({top:p.top-s.top-f,left:p.left-s.left-m,width:p.width,height:p.height});if(c.marginTop=0,c.marginLeft=0,!i&&r){var u=+a.marginTop.split('px')[0],b=+a.marginLeft.split('px')[0];c.top-=f-u,c.bottom-=f-u,c.left-=m-b,c.right-=m-b,c.marginTop=u,c.marginLeft=b}return(i?o.contains(d):o===d&&'BODY'!==d.nodeName)&&(c=l(c,o)),c}function b(e){var t=window.document.documentElement,o=u(e,t),i=X(t.clientWidth,window.innerWidth||0),n=X(t.clientHeight,window.innerHeight||0),r=a(t),p=a(t,'left'),s={top:r-o.top+o.marginTop,left:p-o.left+o.marginLeft,width:i,height:n};return h(s)}function y(e){var i=e.nodeName;return'BODY'===i||'HTML'===i?!1:'fixed'===t(e,'position')||y(o(e))}function w(e,t,i,r){var p={top:0,left:0},s=d(e,t);if('viewport'===r)p=b(s);else{var a;'scrollParent'===r?(a=n(o(e)),'BODY'===a.nodeName&&(a=window.document.documentElement)):'window'===r?a=window.document.documentElement:a=r;var l=u(a,s);if('HTML'===a.nodeName&&!y(s)){var f=c(),m=f.height,h=f.width;p.top+=l.top-l.marginTop,p.bottom=m+l.top,p.left+=l.left-l.marginLeft,p.right=h+l.left}else p=l}return p.left+=i,p.top+=i,p.right-=i,p.bottom-=i,p}function E(e){var t=e.width,o=e.height;return t*o}function v(e,t,o,i,n){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=w(o,i,r,n),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return de({key:e},s[e],{area:E(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,i=e.height;return t>=o.clientWidth&&i>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function x(e,t,o){var i=d(t,o);return u(o,i)}function O(e){var t=window.getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight),n={width:e.offsetWidth+i,height:e.offsetHeight+o};return n}function L(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function S(e,t,o){o=o.split('-')[0];var i=O(e),n={width:i.width,height:i.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return n[p]=t[p]+t[d]/2-i[d]/2,n[s]=o===s?t[s]-i[a]:t[L(s)],n}function T(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function C(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var i=T(e,function(e){return e[t]===o});return e.indexOf(i)}function N(t,o,i){var n=void 0===i?t:t.slice(0,C(t,'name',i));return n.forEach(function(t){t.function&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var i=t.function||t.fn;t.enabled&&e(i)&&(o.offsets.popper=h(o.offsets.popper),o.offsets.reference=h(o.offsets.reference),o=i(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=x(this.state,this.popper,this.reference),e.placement=v(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=S(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position='absolute',e=N(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,i=e.enabled;return i&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length-1;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof window.document.body.style[r])return r}return null}function P(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.left='',this.popper.style.position='',this.popper.style.top='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function D(e,t,o,i){var r='BODY'===e.nodeName,p=r?window:e;p.addEventListener(t,o,{passive:!0}),r||D(n(p.parentNode),t,o,i),i.push(p)}function H(e,t,o,i){o.updateBound=i,window.addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return D(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function A(){this.state.eventsEnabled||(this.state=H(this.reference,this.options,this.state,this.scheduleUpdate))}function M(e,t){return window.removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function I(){this.state.eventsEnabled&&(window.cancelAnimationFrame(this.scheduleUpdate),this.state=M(this.reference,this.state))}function R(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function U(e,t){Object.keys(t).forEach(function(o){var i='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&R(t[o])&&(i='px'),e.style[o]=t[o]+i})}function Y(e,t){Object.keys(t).forEach(function(o){var i=t[o];!1===i?e.removeAttribute(o):e.setAttribute(o,t[o])})}function F(e,t,o){var i=T(e,function(e){var o=e.name;return o===t}),n=!!i&&e.some(function(e){return e.name===o&&e.enabled&&e.order<i.order});if(!n){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return n}function j(e){return'end'===e?'start':'start'===e?'end':e}function K(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=le.indexOf(e),i=le.slice(o+1).concat(le.slice(0,o));return t?i.reverse():i}function q(e,t,o,i){var n=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+n[1],p=n[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=i;}var d=h(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?X(document.documentElement.clientHeight,window.innerHeight||0):X(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function G(e,t,o,i){var n=[0,0],r=-1!==['right','left'].indexOf(i),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(T(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,i){var n=(1===i?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return q(e,n,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,i){R(o)&&(n[t]+=o*('-'===e[i-1]?-1:1))})}),n}function z(e,t){var o,i=t.offset,n=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=n.split('-')[0];return o=R(+i)?[+i,0]:G(i,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var V=Math.min,_=Math.floor,X=Math.max,Q=['native code','[object MutationObserverConstructor]'],J=function(e){return Q.some(function(t){return-1<(e||'').toString().indexOf(t)})},Z='undefined'!=typeof window,$=['Edge','Trident','Firefox'],ee=0,te=0;te<$.length;te+=1)if(Z&&0<=navigator.userAgent.indexOf($[te])){ee=1;break}var i,oe=Z&&J(window.MutationObserver),ie=oe?function(e){var t=!1,o=0,i=document.createElement('span'),n=new MutationObserver(function(){e(),t=!1});return n.observe(i,{attributes:!0}),function(){t||(t=!0,i.setAttribute('x-index',o),++o)}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},ee))}},ne=function(){return void 0==i&&(i=-1!==navigator.appVersion.indexOf('MSIE 10')),i},re=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},pe=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),se=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},de=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},ae=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],le=ae.slice(3),fe={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},me=function(){function t(o,i){var n=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};re(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=ie(this.update.bind(this)),this.options=de({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o.jquery?o[0]:o,this.popper=i.jquery?i[0]:i,this.options.modifiers={},Object.keys(de({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){n.options.modifiers[e]=de({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return de({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return pe(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return P.call(this)}},{key:'enableEventListeners',value:function(){return A.call(this)}},{key:'disableEventListeners',value:function(){return I.call(this)}}]),t}();return me.Utils=('undefined'==typeof window?global:window).PopperUtils,me.placements=ae,me.Defaults={placement:'bottom',eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],i=t.split('-')[1];if(i){var n=e.offsets,r=n.reference,p=n.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:se({},d,r[d]),end:se({},d,r[d]+r[a]-p[a])};e.offsets.popper=de({},p,l[i])}return e}},offset:{order:200,enabled:!0,fn:z,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||r(e.instance.popper);e.instance.reference===o&&(o=r(o));var i=w(e.instance.popper,e.instance.reference,t.padding,o);t.boundaries=i;var n=t.priority,p=e.offsets.popper,s={primary:function(e){var o=p[e];return p[e]<i[e]&&!t.escapeWithReference&&(o=X(p[e],i[e])),se({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=p[o];return p[e]>i[e]&&!t.escapeWithReference&&(n=V(p[o],i[e]-('right'===e?p.width:p.height))),se({},o,n)}};return n.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';p=de({},p,s[t](e))}),e.offsets.popper=p,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,i=t.reference,n=e.placement.split('-')[0],r=_,p=-1!==['top','bottom'].indexOf(n),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(i[d])&&(e.offsets.popper[d]=r(i[d])-o[a]),o[d]>r(i[s])&&(e.offsets.popper[d]=r(i[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){if(!F(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var n=e.placement.split('-')[0],r=e.offsets,p=r.popper,s=r.reference,d=-1!==['left','right'].indexOf(n),a=d?'height':'width',l=d?'Top':'Left',f=l.toLowerCase(),m=d?'left':'top',c=d?'bottom':'right',g=O(i)[a];s[c]-g<p[f]&&(e.offsets.popper[f]-=p[f]-(s[c]-g)),s[f]+g>p[c]&&(e.offsets.popper[f]+=s[f]+g-p[c]);var u=s[f]+s[a]/2-g/2,b=t(e.instance.popper,'margin'+l).replace('px',''),y=u-h(e.offsets.popper)[f]-b;return y=X(V(p[a]-g,y),0),e.arrowElement=i,e.offsets.arrow={},e.offsets.arrow[f]=Math.round(y),e.offsets.arrow[m]='',e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=w(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),i=e.placement.split('-')[0],n=L(i),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case fe.FLIP:p=[i,n];break;case fe.CLOCKWISE:p=K(i);break;case fe.COUNTERCLOCKWISE:p=K(i,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(i!==s||p.length===d+1)return e;i=e.placement.split('-')[0],n=L(i);var a=e.offsets.popper,l=e.offsets.reference,f=_,m='left'===i&&f(a.right)>f(l.left)||'right'===i&&f(a.left)<f(l.right)||'top'===i&&f(a.bottom)>f(l.top)||'bottom'===i&&f(a.top)<f(l.bottom),c=f(a.left)<f(o.left),h=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===i&&c||'right'===i&&h||'top'===i&&g||'bottom'===i&&u,y=-1!==['top','bottom'].indexOf(i),w=!!t.flipVariations&&(y&&'start'===r&&c||y&&'end'===r&&h||!y&&'start'===r&&g||!y&&'end'===r&&u);(m||b||w)&&(e.flipped=!0,(m||b)&&(i=p[d+1]),w&&(r=j(r)),e.placement=i+(r?'-'+r:''),e.offsets.popper=de({},e.offsets.popper,S(e.instance.popper,e.offsets.reference,e.placement)),e=N(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],i=e.offsets,n=i.popper,r=i.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return n[p?'left':'top']=r[o]-(s?n[p?'width':'height']:0),e.placement=L(t),e.offsets.popper=h(n),e}},hide:{order:800,enabled:!0,fn:function(e){if(!F(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=T(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,i=t.y,n=e.offsets.popper,p=T(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==p&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===p?t.gpuAcceleration:p,l=r(e.instance.popper),f=g(l),m={position:n.position},c={left:_(n.left),top:_(n.top),bottom:_(n.bottom),right:_(n.right)},h='bottom'===o?'top':'bottom',u='right'===i?'left':'right',b=B('transform');if(d='bottom'==h?-f.height+c.bottom:c.top,s='right'==u?-f.width+c.right:c.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[h]=0,m[u]=0,m.willChange='transform';else{var y='bottom'==h?-1:1,w='right'==u?-1:1;m[h]=d*y,m[u]=s*w,m.willChange=h+', '+u}var E={"x-placement":e.placement};return e.attributes=de({},E,e.attributes),e.styles=de({},m,e.styles),e.arrowStyles=de({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return U(e.instance.popper,e.styles),Y(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&U(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,i,n){var r=x(n,t,e),p=v(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),U(t,{position:'absolute'}),o},gpuAcceleration:void 0}}},me});

;
/*!
 * jQuery Once v2.2.0 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){"use strict";var n=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};e.fn.once=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)!==true}).data(r,true)};e.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+n(e))};e.fn.findOnce=function(t){var r="jquery-once-"+n(t);return this.filter(function(){return e(this).data(r)===true})}});

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function () {
  var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');

  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();;
window.drupalTranslations = {"strings":{"":{"Home":"Strona g\u0142\u00f3wna","Next":"Dalej","closed":"zamkni\u0119ta","Cancel":"Anuluj","Disabled":"Wy\u0142\u0105czone","Enabled":"W\u0142\u0105czone","Edit":"Edytuj","Link":"Link","Image":"Image","Open":"Otwarte","Sunday":"niedziela","Monday":"poniedzia\u0142ek","Tuesday":"wtorek","Wednesday":"\u015broda","Thursday":"czwartek","Friday":"pi\u0105tek","Saturday":"sobota","Add":"Dodaj","Continue":"Kontynuuj","Done":"Gotowe","Prev":"Poprzedni","Mon":"pon.","Tue":"wt.","Wed":"\u015br.","Thu":"czw.","Fri":"pt.","Sat":"sob.","Sun":"ndz.","May":"Maj","Select all":"Zaznacz wszystko","Close":"Close","Add group":"Dodaj grup\u0119","Show":"Poka\u017c","Select all rows in this table":"Zaznacza wszystkie wiersze tabeli","Deselect all rows in this table":"Cofa zaznaczenie wszystkich wierszy tabeli","Today":"Dzisiaj","Jan":"sty","Feb":"lut","Mar":"mar","Apr":"kwi","Jun":"cze","Jul":"lip","Aug":"sie","Sep":"wrz","Oct":"pa\u017a","Nov":"lis","Dec":"gru","Extend":"Rozszerz","Su":"Ni","Mo":"Po","Tu":"Wt","We":"\u015ar","Th":"Cz","Fr":"Pi","Sa":"So","Changed":"Zmieniono","Not published":"Nie do publikacji","Loading...":"Wczytuj\u0119...","Apply":"Apply","Please wait...":"Prosz\u0119 czeka\u0107...","Hide":"Ukryj","Unlink":"Usu\u0144 odno\u015bnik","Not promoted":"Niepromowane","mm\/dd\/yy":"dd.mm.yy","button":"przycisk","Edit Link":"Link edycji","Remove group":"Usu\u0144 grup\u0119","By @name on @date":"Przez @name w @date","By @name":"Przez @name","Not in menu":"Nie ma w menu","Alias: @alias":"Alias: @alias","No alias":"Brak aliasu","@label":"@label","New revision":"Nowa wersja","Drag to re-order":"Chwy\u0107, by zmieni\u0107 kolejno\u015b\u0107","Changes made in this table will not be saved until the form is submitted.":"Zmiany wprowadzone w tabeli zachowuje si\u0119 przyciskiem u do\u0142u formularza.","Show description":"Wy\u015bwietl opis","New group":"Nowa grupa","No revision":"Brak wersji","Requires a title":"Tytu\u0142 wymagany","(active tab)":"(aktywna karta)","An AJAX HTTP error occurred.":"Wyst\u0105pi\u0142 b\u0142\u0105d w AJAX HTTP.","HTTP Result Code: !status":"B\u0142\u0105d HTTP: !status","An AJAX HTTP request terminated abnormally.":"Zapytanie AJAX HTTP zosta\u0142o przerwane.","Debugging information follows.":"Informacje diagnostyczne.","Path: !uri":"\u015acie\u017cka: !uri","StatusText: !statusText":"StatusText: !statusText","ResponseText: !responseText":"ResponseText: !responseText","ReadyState: !readyState":"ReadyState: !readyState","Restricted to certain pages":"Ograniczenie do okre\u015blonych stron.","The block cannot be placed in this region.":"Blok nie mo\u017ce by\u0107 umieszczony w tym regionie.","Hide summary":"Ukryj podsumowanie","Edit summary":"Edycja podsumowania","Don\u0027t display post information":"Ukrycie informacji o wpisie","Collapse":"Zwi\u0144","The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"Wybrany plik %filename nie m\u00f3g\u0142 zosta\u0107 wys\u0142any. Dozwolone s\u0105 jedynie nast\u0119puj\u0105ce rozszerzenia: %extensions.","Re-order rows by numerical weight instead of dragging.":"Zmie\u0144 kolejno\u015b\u0107 wierszy podaj\u0105c warto\u015bci numeryczne zamiast przeci\u0105gaj\u0105c.","Show row weights":"Poka\u017c wagi wierszy","Hide row weights":"Ukryj wagi wierszy","Apply (all displays)":"Zastosuj (wszystkie formaty)","Apply (this display)":"Zastosuj (ten format)","Revert to default":"Przywr\u00f3\u0107 domy\u015blne","Hide description":"Ukryj opis","Needs to be updated":"Nale\u017cy zaktualizowa\u0107","Does not need to be updated":"Nie musi by\u0107 aktualizowane","Show all columns":"Poka\u017c wszystkie kolumny","Show table cells that were hidden to make the table fit within a small screen.":"Poka\u017c kom\u00f3rki tabeli, kt\u00f3re zosta\u0142y ukryte aby dopasowa\u0107 tabel\u0119 do ma\u0142ego ekranu.","List additional actions":"Poka\u017c dodatkowe kolumny","Flag other translations as outdated":"Oznacz pozosta\u0142e t\u0142umaczenia jako nieaktualne","Do not flag other translations as outdated":"Nie oznaczaj pozosta\u0142ych t\u0142umacze\u0144 jako nieaktualnych","opened":"otwarty","Horizontal orientation":"Poziomo","Vertical orientation":"Pionowo","Tray orientation changed to @orientation.":"Zmieniono kierunek ustawienia zasobnika na @orientation.","You have unsaved changes.":"Masz niezapisane zmiany","No styles configured":"Nie skonfigurowano styl\u00f3w","@count styles configured":"Skonfigurowana liczba styl\u00f3w: @count","@action @title configuration options":"Opcje konfiguracji - @action @title","Tabbing is no longer constrained by the Contextual module.":"Nawigacja za pomoc\u0105 klawisza TAB nie jest ju\u017c ograniczana przez modu\u0142 Contextual.","Tabbing is constrained to a set of @contextualsCount and the edit mode toggle.":"Nawigacja za pomoc\u0105 klawisza TAB jest ograniczona zestawem @contextualsCount oraz prze\u0142\u0105cznikiem trybu edycji.","Press the esc key to exit.":"Naci\u015bnij ESC, aby wyj\u015b\u0107.","@count contextual link\u0003@count contextual links":"@count odno\u015bnik kontekstowy\u0003@count odno\u015bniki kontekstowe\u0003@count odno\u015bnik\u00f3w kontekstowych","Based on the text editor configuration, these tags have automatically been added: \u003Cstrong\u003E@tag-list\u003C\/strong\u003E.":"Zgodnie z konfiguracj\u0105 edytora tekstowego automatycznie dodano nast\u0119puj\u0105ce znaczniki: \u003Cstrong\u003E@tag-list\u003C\/strong\u003E.","Uploads disabled":"Wy\u0142\u0105czono wysy\u0142anie plik\u00f3w","Uploads enabled, max size: @size @dimensions":"W\u0142\u0105czono wysy\u0142anie plik\u00f3w, maksymalny rozmiar: @size @dimensions","The toolbar cannot be set to a horizontal orientation when it is locked.":"Pasek narz\u0119dziowy nie mo\u017ce by\u0107 ustawiony poziomo kiedy jest zablokowany.","Hide group names":"Ukryj nazwy grup","Show group names":"Poka\u017c nazwy grup","@groupName button group in position @position of @positionCount in row @row of @rowCount.":"Grupa przycisk\u00f3w @groupName na pozycji numer @position z @positionCount w wierszu numer @row z @rowCount.","Press the down arrow key to create a new row.":"Naci\u015bnij klawisz strza\u0142ki w d\u00f3\u0142 aby utworzy\u0107 nowy wiersz.","@name @type.":"Przycisk @name typu @type.","Press the down arrow key to activate.":"Naci\u015bnij klawisz strza\u0142ki w d\u00f3\u0142 aby uaktywni\u0107.","@name @type in position @position of @positionCount in @groupName button group in row @row of @rowCount.":"Przycisk @name typu @type w pozycji numer @position z @positionCount w grupie przycisk\u00f3w @groupName w wierszu @row z @rowCount.","Press the down arrow key to create a new button group in a new row.":"Naci\u015bnij klawisz strza\u0142ki w d\u00f3\u0142 aby w nowym wierszu utworzy\u0107 now\u0105 grup\u0119 przycisk\u00f3w.","This is the last group. Move the button forward to create a new group.":"To ostatnia grupa. Przesu\u0144 przycisk do przodu aby utworzy\u0107 now\u0105 grup\u0119.","The \u0022@name\u0022 button is currently enabled.":"Przycisk \u0022@name\u0022 jest aktualnie w\u0142\u0105czony.","Use the keyboard arrow keys to change the position of this button.":"U\u017cyj klawiszy strza\u0142ek aby zmieni\u0107 pozycj\u0119 przycisku.","Press the up arrow key on the top row to disable the button.":"Naci\u015bnij klawisz strza\u0142ki w g\u00f3r\u0119 w g\u00f3rnym wierszu aby wy\u0142\u0105czy\u0107 ten przycisk.","The \u0022@name\u0022 button is currently disabled.":"Przycisk \u0022@name\u0022 jest aktualnie wy\u0142\u0105czony.","Use the down arrow key to move this button into the active toolbar.":"U\u017cyj przycisku strza\u0142ki w d\u00f3\u0142 aby przesun\u0105\u0107 ten przycisk do aktywnego paska narz\u0119dziowego.","This @name is currently enabled.":"Ten @name jest aktualnie w\u0142\u0105czony.","Use the keyboard arrow keys to change the position of this separator.":"U\u017cyj klawiszy strza\u0142ek aby zmieni\u0107 pozycj\u0119 separatora.","Separators are used to visually split individual buttons.":"Separatory s\u0105 u\u017cywane do wizualnego oddzielenia pojedynczych przycisk\u00f3w.","This @name is currently disabled.":"Ten @name jest aktualnie wy\u0142\u0105czony.","Use the down arrow key to move this separator into the active toolbar.":"U\u017cyj przycisku strza\u0142ki w d\u00f3\u0142 aby przenie\u015b\u0107 ten separator do aktywnego paska narz\u0119dziowego.","You may add multiple separators to each button group.":"Mo\u017cna doda\u0107 wiele separator\u00f3w do ka\u017cdej grupy przycisk\u00f3w.","Please provide a name for the button group.":"Nale\u017cy poda\u0107 nazw\u0119 grupy przycisk\u00f3w.","Button group name":"Nazwa grupy przycisk\u00f3w","Editing the name of the new button group in a dialog.":"Edycja nazwy nowej grupy przycisk\u00f3w w oknie dialogowym.","Editing the name of the \u0022@groupName\u0022 button group in a dialog.":"Edycja nazwy grupy przycisk\u00f3w w \u0022@groupName\u0022 w oknie dialogowym.","Place a button to create a new button group.":"Umie\u015b\u0107 przycisk aby utworzy\u0107 now\u0105 grup\u0119 przycisk\u00f3w.","Add a CKEditor button group to the end of this row.":"Dodaj grup\u0119 przycisk\u00f3w edytora CKEditor na ko\u0144cu tego wiersza.","Changing the text format to %text_format will permanently remove content that is not allowed in that text format.\u003Cbr\u003E\u003Cbr\u003ESave your changes before switching the text format to avoid losing data.":"Zmiana formatu tekstu na %text_format spowoduje trwa\u0142e usuni\u0119cie zawarto\u015bci, kt\u00f3ra jest niedozwolona w tym formacie tekstu.\u003Cbr\u003E\u003Cbr\u003EZapisz zmiany przed prze\u0142\u0105czeniem formatu tekstu aby unikn\u0105\u0107 utraty danych.","Change text format?":"Zmieni\u0107 format tekstu?","Rich Text Editor, !label field":"Edytor tekstowy, pole !label","Leave preview?":"Zamkn\u0105\u0107 podgl\u0105d?","Leave preview":"Zamknij podgl\u0105d","Leaving the preview will cause unsaved changes to be lost. Are you sure you want to leave the preview?":"Opuszczenie podgl\u0105du spowoduje utrat\u0119 niezapisanych zmian. Czy na pewno opu\u015bci\u0107 podgl\u0105d?","CTRL+Left click will prevent this dialog from showing and proceed to the clicked link.":"Naci\u015bni\u0119cie CTRL wraz z lewy klawiszem myszki uniemo\u017cliwi otwarcie si\u0119 okna dialogowego i przej\u015bcie do klikni\u0119tego odno\u015bnika.","Tray \u0022@tray\u0022 @action.":"Zasobnik \u0022@tray\u0022 @action.","Tray @action.":"Zasobnik @action.","Hide lower priority columns":"Ukryj kolumny o niskim priorytecie","!modules modules are available in the modified list.":"Na zmodyfikowanej li\u015bcie jest dost\u0119pnych !modules modu\u0142\u00f3w.","The response failed verification so will not be processed.":"Odpowied\u017a nie zosta\u0142a zweryfikowana zatem nie zostanie przetworzona.","The callback URL is not local and not trusted: !url":"Adres URL wywo\u0142ania zwrotnego nie jest lokalny i nie mo\u017cna uzna\u0107 go za zaufany: !url","CustomMessage: !customMessage":"CustomMessage: !customMessage","Authored on @date":"Dodane w dniu @date","1 block is available in the modified list.\u0003@count blocks are available in the modified list.":"1 blok jest dost\u0119pny na zmodyfikowanej li\u015bcie.\u0003@count bloki s\u0105 dost\u0119pne na zmodyfikowanej li\u015bcie.\u0003@count blok\u00f3w jest dost\u0119pnych na zmodyfikowanej li\u015bcie.","Not restricted":"Bez ogranicze\u0144","Downloads":"Pobrania","Not customizable":"Niekonfigurowalne","Colorbox":"Colorbox","Site search":"Wyszukiwanie strony","On by default with opt out":"Domy\u015blnie w\u0142\u0105czone z mo\u017cliwo\u015bci\u0105 odst\u0105pienia","Off by default with opt in":"Domy\u015blnie wy\u0142\u0105czone z mo\u017cliwo\u015bci\u0105 przyst\u0105pienia","Not tracked":"Nie \u015bledzone","One domain with multiple subdomains":"Jedna domena z wieloma subdomenami","Multiple top-level domains":"Wiele domen najwy\u017cszego poziomu","All pages with exceptions":"Wszystkie strony z wyj\u0105tkami","Excepted: @roles":"Wykluczone: @roles","A single domain":"Pojedyncza domena","No privacy":"Brak prywatno\u015bci","@items enabled":"@items aktywne","Priority":"Priorytet","Change frequency":"Cz\u0119stotliwo\u015b\u0107 zmian"},"Long month name":{"January":"Stycze\u0144","February":"luty","March":"Marzec","April":"Kwiecie\u0144","May":"Maj","June":"Czerwiec","July":"Lipiec","August":"Sierpie\u0144","September":"Wrzesie\u0144","October":"Pa\u017adziernik","November":"Listopad","December":"Grudzie\u0144"}},"pluralFormula":{"1":0,"2":1,"3":1,"4":1,"22":1,"23":1,"24":1,"32":1,"33":1,"34":1,"42":1,"43":1,"44":1,"52":1,"53":1,"54":1,"62":1,"63":1,"64":1,"72":1,"73":1,"74":1,"82":1,"83":1,"84":1,"92":1,"93":1,"94":1,"102":1,"103":1,"104":1,"122":1,"123":1,"124":1,"132":1,"133":1,"134":1,"142":1,"143":1,"144":1,"152":1,"153":1,"154":1,"162":1,"163":1,"164":1,"172":1,"173":1,"174":1,"182":1,"183":1,"184":1,"192":1,"193":1,"194":1,"default":2}};;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

window.Drupal = { behaviors: {}, locale: {} };

(function (Drupal, drupalSettings, drupalTranslations) {
  Drupal.throwError = function (error) {
    setTimeout(function () {
      throw error;
    }, 0);
  };

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].attach === 'function') {
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    var behaviors = Drupal.behaviors;

    Object.keys(behaviors || {}).forEach(function (i) {
      if (typeof behaviors[i].detach === 'function') {
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  Drupal.checkPlain = function (str) {
    str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return str;
  };

  Drupal.formatString = function (str, args) {
    var processedArgs = {};

    Object.keys(args || {}).forEach(function (key) {
      switch (key.charAt(0)) {
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        case '!':
          processedArgs[key] = args[key];
          break;

        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });

    return Drupal.stringReplace(str, processedArgs, null);
  };

  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});

      keys.sort(function (a, b) {
        return a.length - b.length;
      });
    }

    if (keys.length === 0) {
      return str;
    }

    var key = keys.pop();
    var fragments = str.split(key);

    if (keys.length) {
      for (var i = 0; i < fragments.length; i++) {
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };

  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  Drupal.url.toAbsolute = function (url) {
    var urlParsingNode = document.createElement('a');

    try {
      url = decodeURIComponent(url);
    } catch (e) {}

    urlParsingNode.setAttribute('href', url);

    return urlParsingNode.cloneNode(false).href;
  };

  Drupal.url.isLocal = function (url) {
    var absoluteUrl = Drupal.url.toAbsolute(url);
    var protocol = location.protocol;

    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    var baseUrl = protocol + '//' + location.host + drupalSettings.path.baseUrl.slice(0, -1);

    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}
    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}

    return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0;
  };

  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;

    var pluralDelimiter = drupalSettings.pluralDelimiter;
    var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
    var index = 0;

    if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
      index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  Drupal.theme = function (func) {
    if (func in Drupal.theme) {
      var _Drupal$theme;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
    }
  };

  Drupal.theme.placeholder = function (str) {
    return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
  };
})(Drupal, window.drupalSettings, window.drupalTranslations);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (window.jQuery) {
  jQuery.noConflict();
}

document.documentElement.className += ' js';

(function (domready, Drupal, drupalSettings) {
  domready(function () {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(domready, Drupal, window.drupalSettings);;
/*! Picturefill - v3.0.1 - 2015-09-30
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
!function(a){var b=navigator.userAgent;a.HTMLPictureElement&&/ecko/.test(b)&&b.match(/rv\:(\d+)/)&&RegExp.$1<41&&addEventListener("resize",function(){var b,c=document.createElement("source"),d=function(a){var b,d,e=a.parentNode;"PICTURE"===e.nodeName.toUpperCase()?(b=c.cloneNode(),e.insertBefore(b,e.firstElementChild),setTimeout(function(){e.removeChild(b)})):(!a._pfLastSize||a.offsetWidth>a._pfLastSize)&&(a._pfLastSize=a.offsetWidth,d=a.sizes,a.sizes+=",100vw",setTimeout(function(){a.sizes=d}))},e=function(){var a,b=document.querySelectorAll("picture > img, img[srcset][sizes]");for(a=0;a<b.length;a++)d(b[a])},f=function(){clearTimeout(b),b=setTimeout(e,99)},g=a.matchMedia&&matchMedia("(orientation: landscape)"),h=function(){f(),g&&g.addListener&&g.addListener(f)};return c.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?h():document.addEventListener("DOMContentLoaded",h),f}())}(window),function(a,b,c){"use strict";function d(a){return" "===a||"	"===a||"\n"===a||"\f"===a||"\r"===a}function e(b,c){var d=new a.Image;return d.onerror=function(){z[b]=!1,aa()},d.onload=function(){z[b]=1===d.width,aa()},d.src=c,"pending"}function f(){L=!1,O=a.devicePixelRatio,M={},N={},s.DPR=O||1,P.width=Math.max(a.innerWidth||0,y.clientWidth),P.height=Math.max(a.innerHeight||0,y.clientHeight),P.vw=P.width/100,P.vh=P.height/100,r=[P.height,P.width,O].join("-"),P.em=s.getEmValue(),P.rem=P.em}function g(a,b,c,d){var e,f,g,h;return"saveData"===A.algorithm?a>2.7?h=c+1:(f=b-c,e=Math.pow(a-.6,1.5),g=f*e,d&&(g+=.1*e),h=a+g):h=c>1?Math.sqrt(a*b):a,h>c}function h(a){var b,c=s.getSet(a),d=!1;"pending"!==c&&(d=r,c&&(b=s.setRes(c),s.applySetCandidate(b,a))),a[s.ns].evaled=d}function i(a,b){return a.res-b.res}function j(a,b,c){var d;return!c&&b&&(c=a[s.ns].sets,c=c&&c[c.length-1]),d=k(b,c),d&&(b=s.makeUrl(b),a[s.ns].curSrc=b,a[s.ns].curCan=d,d.res||_(d,d.set.sizes)),d}function k(a,b){var c,d,e;if(a&&b)for(e=s.parseSet(b),a=s.makeUrl(a),c=0;c<e.length;c++)if(a===s.makeUrl(e[c].url)){d=e[c];break}return d}function l(a,b){var c,d,e,f,g=a.getElementsByTagName("source");for(c=0,d=g.length;d>c;c++)e=g[c],e[s.ns]=!0,f=e.getAttribute("srcset"),f&&b.push({srcset:f,media:e.getAttribute("media"),type:e.getAttribute("type"),sizes:e.getAttribute("sizes")})}function m(a,b){function c(b){var c,d=b.exec(a.substring(m));return d?(c=d[0],m+=c.length,c):void 0}function e(){var a,c,d,e,f,i,j,k,l,m=!1,o={};for(e=0;e<h.length;e++)f=h[e],i=f[f.length-1],j=f.substring(0,f.length-1),k=parseInt(j,10),l=parseFloat(j),W.test(j)&&"w"===i?((a||c)&&(m=!0),0===k?m=!0:a=k):X.test(j)&&"x"===i?((a||c||d)&&(m=!0),0>l?m=!0:c=l):W.test(j)&&"h"===i?((d||c)&&(m=!0),0===k?m=!0:d=k):m=!0;m||(o.url=g,a&&(o.w=a),c&&(o.d=c),d&&(o.h=d),d||c||a||(o.d=1),1===o.d&&(b.has1x=!0),o.set=b,n.push(o))}function f(){for(c(S),i="",j="in descriptor";;){if(k=a.charAt(m),"in descriptor"===j)if(d(k))i&&(h.push(i),i="",j="after descriptor");else{if(","===k)return m+=1,i&&h.push(i),void e();if("("===k)i+=k,j="in parens";else{if(""===k)return i&&h.push(i),void e();i+=k}}else if("in parens"===j)if(")"===k)i+=k,j="in descriptor";else{if(""===k)return h.push(i),void e();i+=k}else if("after descriptor"===j)if(d(k));else{if(""===k)return void e();j="in descriptor",m-=1}m+=1}}for(var g,h,i,j,k,l=a.length,m=0,n=[];;){if(c(T),m>=l)return n;g=c(U),h=[],","===g.slice(-1)?(g=g.replace(V,""),e()):f()}}function n(a){function b(a){function b(){f&&(g.push(f),f="")}function c(){g[0]&&(h.push(g),g=[])}for(var e,f="",g=[],h=[],i=0,j=0,k=!1;;){if(e=a.charAt(j),""===e)return b(),c(),h;if(k){if("*"===e&&"/"===a[j+1]){k=!1,j+=2,b();continue}j+=1}else{if(d(e)){if(a.charAt(j-1)&&d(a.charAt(j-1))||!f){j+=1;continue}if(0===i){b(),j+=1;continue}e=" "}else if("("===e)i+=1;else if(")"===e)i-=1;else{if(","===e){b(),c(),j+=1;continue}if("/"===e&&"*"===a.charAt(j+1)){k=!0,j+=2;continue}}f+=e,j+=1}}}function c(a){return k.test(a)&&parseFloat(a)>=0?!0:l.test(a)?!0:"0"===a||"-0"===a||"+0"===a?!0:!1}var e,f,g,h,i,j,k=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(f=b(a),g=f.length,e=0;g>e;e++)if(h=f[e],i=h[h.length-1],c(i)){if(j=i,h.pop(),0===h.length)return j;if(h=h.join(" "),s.matchesMedia(h))return j}return"100vw"}b.createElement("picture");var o,p,q,r,s={},t=function(){},u=b.createElement("img"),v=u.getAttribute,w=u.setAttribute,x=u.removeAttribute,y=b.documentElement,z={},A={algorithm:""},B="data-pfsrc",C=B+"set",D=navigator.userAgent,E=/rident/.test(D)||/ecko/.test(D)&&D.match(/rv\:(\d+)/)&&RegExp.$1>35,F="currentSrc",G=/\s+\+?\d+(e\d+)?w/,H=/(\([^)]+\))?\s*(.+)/,I=a.picturefillCFG,J="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",K="font-size:100%!important;",L=!0,M={},N={},O=a.devicePixelRatio,P={px:1,"in":96},Q=b.createElement("a"),R=!1,S=/^[ \t\n\r\u000c]+/,T=/^[, \t\n\r\u000c]+/,U=/^[^ \t\n\r\u000c]+/,V=/[,]+$/,W=/^\d+$/,X=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,Y=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d||!1):a.attachEvent&&a.attachEvent("on"+b,c)},Z=function(a){var b={};return function(c){return c in b||(b[c]=a(c)),b[c]}},$=function(){var a=/^([\d\.]+)(em|vw|px)$/,b=function(){for(var a=arguments,b=0,c=a[0];++b in a;)c=c.replace(a[b],a[++b]);return c},c=Z(function(a){return"return "+b((a||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(b,d){var e;if(!(b in M))if(M[b]=!1,d&&(e=b.match(a)))M[b]=e[1]*P[e[2]];else try{M[b]=new Function("e",c(b))(P)}catch(f){}return M[b]}}(),_=function(a,b){return a.w?(a.cWidth=s.calcListLength(b||"100vw"),a.res=a.w/a.cWidth):a.res=a.d,a},aa=function(a){var c,d,e,f=a||{};if(f.elements&&1===f.elements.nodeType&&("IMG"===f.elements.nodeName.toUpperCase()?f.elements=[f.elements]:(f.context=f.elements,f.elements=null)),c=f.elements||s.qsa(f.context||b,f.reevaluate||f.reselect?s.sel:s.selShort),e=c.length){for(s.setupRun(f),R=!0,d=0;e>d;d++)s.fillImg(c[d],f);s.teardownRun(f)}};o=a.console&&console.warn?function(a){console.warn(a)}:t,F in u||(F="src"),z["image/jpeg"]=!0,z["image/gif"]=!0,z["image/png"]=!0,z["image/svg+xml"]=b.implementation.hasFeature("http://wwwindow.w3.org/TR/SVG11/feature#Image","1.1"),s.ns=("pf"+(new Date).getTime()).substr(0,9),s.supSrcset="srcset"in u,s.supSizes="sizes"in u,s.supPicture=!!a.HTMLPictureElement,s.supSrcset&&s.supPicture&&!s.supSizes&&!function(a){u.srcset="data:,a",a.src="data:,a",s.supSrcset=u.complete===a.complete,s.supPicture=s.supSrcset&&s.supPicture}(b.createElement("img")),s.selShort="picture>img,img[srcset]",s.sel=s.selShort,s.cfg=A,s.supSrcset&&(s.sel+=",img["+C+"]"),s.DPR=O||1,s.u=P,s.types=z,q=s.supSrcset&&!s.supSizes,s.setSize=t,s.makeUrl=Z(function(a){return Q.href=a,Q.href}),s.qsa=function(a,b){return a.querySelectorAll(b)},s.matchesMedia=function(){return a.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?s.matchesMedia=function(a){return!a||matchMedia(a).matches}:s.matchesMedia=s.mMQ,s.matchesMedia.apply(this,arguments)},s.mMQ=function(a){return a?$(a):!0},s.calcLength=function(a){var b=$(a,!0)||!1;return 0>b&&(b=!1),b},s.supportsType=function(a){return a?z[a]:!0},s.parseSize=Z(function(a){var b=(a||"").match(H);return{media:b&&b[1],length:b&&b[2]}}),s.parseSet=function(a){return a.cands||(a.cands=m(a.srcset,a)),a.cands},s.getEmValue=function(){var a;if(!p&&(a=b.body)){var c=b.createElement("div"),d=y.style.cssText,e=a.style.cssText;c.style.cssText=J,y.style.cssText=K,a.style.cssText=K,a.appendChild(c),p=c.offsetWidth,a.removeChild(c),p=parseFloat(p,10),y.style.cssText=d,a.style.cssText=e}return p||16},s.calcListLength=function(a){if(!(a in N)||A.uT){var b=s.calcLength(n(a));N[a]=b?b:P.width}return N[a]},s.setRes=function(a){var b;if(a){b=s.parseSet(a);for(var c=0,d=b.length;d>c;c++)_(b[c],a.sizes)}return b},s.setRes.res=_,s.applySetCandidate=function(a,b){if(a.length){var c,d,e,f,h,k,l,m,n,o=b[s.ns],p=s.DPR;if(k=o.curSrc||b[F],l=o.curCan||j(b,k,a[0].set),l&&l.set===a[0].set&&(n=E&&!b.complete&&l.res-.1>p,n||(l.cached=!0,l.res>=p&&(h=l))),!h)for(a.sort(i),f=a.length,h=a[f-1],d=0;f>d;d++)if(c=a[d],c.res>=p){e=d-1,h=a[e]&&(n||k!==s.makeUrl(c.url))&&g(a[e].res,c.res,p,a[e].cached)?a[e]:c;break}h&&(m=s.makeUrl(h.url),o.curSrc=m,o.curCan=h,m!==k&&s.setSrc(b,h),s.setSize(b))}},s.setSrc=function(a,b){var c;a.src=b.url,"image/svg+xml"===b.set.type&&(c=a.style.width,a.style.width=a.offsetWidth+1+"px",a.offsetWidth+1&&(a.style.width=c))},s.getSet=function(a){var b,c,d,e=!1,f=a[s.ns].sets;for(b=0;b<f.length&&!e;b++)if(c=f[b],c.srcset&&s.matchesMedia(c.media)&&(d=s.supportsType(c.type))){"pending"===d&&(c=d),e=c;break}return e},s.parseSets=function(a,b,d){var e,f,g,h,i=b&&"PICTURE"===b.nodeName.toUpperCase(),j=a[s.ns];(j.src===c||d.src)&&(j.src=v.call(a,"src"),j.src?w.call(a,B,j.src):x.call(a,B)),(j.srcset===c||d.srcset||!s.supSrcset||a.srcset)&&(e=v.call(a,"srcset"),j.srcset=e,h=!0),j.sets=[],i&&(j.pic=!0,l(b,j.sets)),j.srcset?(f={srcset:j.srcset,sizes:v.call(a,"sizes")},j.sets.push(f),g=(q||j.src)&&G.test(j.srcset||""),g||!j.src||k(j.src,f)||f.has1x||(f.srcset+=", "+j.src,f.cands.push({url:j.src,d:1,set:f}))):j.src&&j.sets.push({srcset:j.src,sizes:null}),j.curCan=null,j.curSrc=c,j.supported=!(i||f&&!s.supSrcset||g),h&&s.supSrcset&&!j.supported&&(e?(w.call(a,C,e),a.srcset=""):x.call(a,C)),j.supported&&!j.srcset&&(!j.src&&a.src||a.src!==s.makeUrl(j.src))&&(null===j.src?a.removeAttribute("src"):a.src=j.src),j.parsed=!0},s.fillImg=function(a,b){var c,d=b.reselect||b.reevaluate;a[s.ns]||(a[s.ns]={}),c=a[s.ns],(d||c.evaled!==r)&&((!c.parsed||b.reevaluate)&&s.parseSets(a,a.parentNode,b),c.supported?c.evaled=r:h(a))},s.setupRun=function(){(!R||L||O!==a.devicePixelRatio)&&f()},s.supPicture?(aa=t,s.fillImg=t):!function(){var c,d=a.attachEvent?/d$|^c/:/d$|^c|^i/,e=function(){var a=b.readyState||"";f=setTimeout(e,"loading"===a?200:999),b.body&&(s.fillImgs(),c=c||d.test(a),c&&clearTimeout(f))},f=setTimeout(e,b.body?9:99),g=function(a,b){var c,d,e=function(){var f=new Date-d;b>f?c=setTimeout(e,b-f):(c=null,a())};return function(){d=new Date,c||(c=setTimeout(e,b))}},h=y.clientHeight,i=function(){L=Math.max(a.innerWidth||0,y.clientWidth)!==P.width||y.clientHeight!==h,h=y.clientHeight,L&&s.fillImgs()};Y(a,"resize",g(i,99)),Y(b,"readystatechange",e)}(),s.picturefill=aa,s.fillImgs=aa,s.teardownRun=t,aa._=s,a.picturefillCFG={pf:s,push:function(a){var b=a.shift();"function"==typeof s[b]?s[b].apply(s,a):(A[b]=a[0],R&&s.fillImgs({reselect:!0}))}};for(;I&&I.length;)a.picturefillCFG.push(I.shift());a.picturefill=aa,"object"==typeof module&&"object"==typeof module.exports?module.exports=aa:"function"==typeof define&&define.amd&&define("picturefill",function(){return aa}),s.supPicture||(z["image/webp"]=e("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document);;
/**
 * @file
 * Attaches several event listener to a web page.
 */

(function ($, Drupal, drupalSettings) {

  /* eslint max-nested-callbacks: ["error", 4] */

  'use strict';

  Drupal.google_analytics = {};

  $(document).ready(function () {

    // Attach mousedown, keyup, touchstart events to document only and catch
    // clicks on all elements.
    $(document.body).on('mousedown keyup touchstart', function (event) {

      // Catch the closest surrounding link of a clicked element.
      $(event.target).closest('a,area').each(function () {

        // Is the clicked URL internal?
        if (Drupal.google_analytics.isInternal(this.href)) {
          // Skip 'click' tracking, if custom tracking events are bound.
          if ($(this).is('.colorbox') && (drupalSettings.google_analytics.trackColorbox)) {
            // Do nothing here. The custom event will handle all tracking.
            // console.info('Click on .colorbox item has been detected.');
          }
          // Is download tracking activated and the file extension configured
          // for download tracking?
          else if (drupalSettings.google_analytics.trackDownload && Drupal.google_analytics.isDownload(this.href)) {
            // Download link clicked.
            ga('send', {
              hitType: 'event',
              eventCategory: 'Downloads',
              eventAction: Drupal.google_analytics.getDownloadExtension(this.href).toUpperCase(),
              eventLabel: Drupal.google_analytics.getPageUrl(this.href),
              transport: 'beacon'
            });
          }
          else if (Drupal.google_analytics.isInternalSpecial(this.href)) {
            // Keep the internal URL for Google Analytics website overlay intact.
            ga('send', {
              hitType: 'pageview',
              page: Drupal.google_analytics.getPageUrl(this.href),
              transport: 'beacon'
            });
          }
        }
        else {
          if (drupalSettings.google_analytics.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
            // Mailto link clicked.
            ga('send', {
              hitType: 'event',
              eventCategory: 'Mails',
              eventAction: 'Click',
              eventLabel: this.href.substring(7),
              transport: 'beacon'
            });
          }
          else if (drupalSettings.google_analytics.trackOutbound && this.href.match(/^\w+:\/\//i)) {
            if (drupalSettings.google_analytics.trackDomainMode !== 2 || (drupalSettings.google_analytics.trackDomainMode === 2 && !Drupal.google_analytics.isCrossDomain(this.hostname, drupalSettings.google_analytics.trackCrossDomains))) {
              // External link clicked / No top-level cross domain clicked.
              ga('send', {
                hitType: 'event',
                eventCategory: 'Outbound links',
                eventAction: 'Click',
                eventLabel: this.href,
                transport: 'beacon'
              });
            }
          }
        }
      });
    });

    // Track hash changes as unique pageviews, if this option has been enabled.
    if (drupalSettings.google_analytics.trackUrlFragments) {
      window.onhashchange = function () {
        ga('send', {
          hitType: 'pageview',
          page: location.pathname + location.search + location.hash
        });
      };
    }

    // Colorbox: This event triggers when the transition has completed and the
    // newly loaded content has been revealed.
    if (drupalSettings.google_analytics.trackColorbox) {
      $(document).on('cbox_complete', function () {
        var href = $.colorbox.element().attr('href');
        if (href) {
          ga('send', {
            hitType: 'pageview',
            page: Drupal.google_analytics.getPageUrl(href)
          });
        }
      });
    }

  });

  /**
   * Check whether the hostname is part of the cross domains or not.
   *
   * @param {string} hostname
   *   The hostname of the clicked URL.
   * @param {array} crossDomains
   *   All cross domain hostnames as JS array.
   *
   * @return {boolean} isCrossDomain
   */
  Drupal.google_analytics.isCrossDomain = function (hostname, crossDomains) {
    return $.inArray(hostname, crossDomains) > -1 ? true : false;
  };

  /**
   * Check whether this is a download URL or not.
   *
   * @param {string} url
   *   The web url to check.
   *
   * @return {boolean} isDownload
   */
  Drupal.google_analytics.isDownload = function (url) {
    var isDownload = new RegExp('\\.(' + drupalSettings.google_analytics.trackDownloadExtensions + ')([\?#].*)?$', 'i');
    return isDownload.test(url);
  };

  /**
   * Check whether this is an absolute internal URL or not.
   *
   * @param {string} url
   *   The web url to check.
   *
   * @return {boolean} isInternal
   */
  Drupal.google_analytics.isInternal = function (url) {
    var isInternal = new RegExp('^(https?):\/\/' + window.location.host, 'i');
    return isInternal.test(url);
  };

  /**
   * Check whether this is a special URL or not.
   *
   * URL types:
   *  - gotwo.module /go/* links.
   *
   * @param {string} url
   *   The web url to check.
   *
   * @return {boolean} isInternalSpecial
   */
  Drupal.google_analytics.isInternalSpecial = function (url) {
    var isInternalSpecial = new RegExp('(\/go\/.*)$', 'i');
    return isInternalSpecial.test(url);
  };

  /**
   * Extract the relative internal URL from an absolute internal URL.
   *
   * Examples:
   * - http://mydomain.com/node/1 -> /node/1
   * - http://example.com/foo/bar -> http://example.com/foo/bar
   *
   * @param {string} url
   *   The web url to check.
   *
   * @return {string} getPageUrl
   *   Internal website URL.
   */
  Drupal.google_analytics.getPageUrl = function (url) {
    var extractInternalUrl = new RegExp('^(https?):\/\/' + window.location.host, 'i');
    return url.replace(extractInternalUrl, '');
  };

  /**
   * Extract the download file extension from the URL.
   *
   * @param {string} url
   *   The web url to check.
   *
   * @return {string} getDownloadExtension
   *   The file extension of the passed url. e.g. 'zip', 'txt'
   */
  Drupal.google_analytics.getDownloadExtension = function (url) {
    var extractDownloadextension = new RegExp('\\.(' + drupalSettings.google_analytics.trackDownloadExtensions + ')([\?#].*)?$', 'i');
    var extension = extractDownloadextension.exec(url);
    return (extension === null) ? '' : extension[1];
  };

})(jQuery, Drupal, drupalSettings);
;
!function(r,o){"use strict";Drupal.behaviors.droopler_theme={attach:function(o,e){var s=r("body");s.hasClass("d-theme-preceded")||(r(window).scroll(function(){50<r(this).scrollTop()?r("body").addClass("scrolled"):r("body").removeClass("scrolled")}),r("#header .dropdown, .language-switcher-language-url").hover(function(){r(this).addClass("force-show"),r(this).find(".dropdown-menu").addClass("force-show")},function(){r(this).removeClass("force-show").removeClass("show"),r(this).find(".dropdown-menu").removeClass("force-show").removeClass("show")}),r(".menu-dropdown-icon").on({touchstart:function(){r(this).parent().removeClass("force-show"),r(this).parent().find(".dropdown-menu").removeClass("force-show")}}),s.addClass("d-theme-preceded"))}}}(jQuery);

;
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");!function(t){var e=jQuery.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||4<=e[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),function(){var T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}();function I(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o,t,r,e,n,s,a,l,h,i,c,u,d,f,p,g,_,m,v,y,E,C,w,S,D,A,N,O,k,P,j,x,H,L,R,Q,W,U,K,M,B,F,V,Y,q,z,Z,J,G,$,X,tt,et,nt,it,ot,rt,st,at,lt,ht,ct,ut,dt,ft,pt,gt,_t,mt,vt,yt,Et,Ct,Tt,bt,It,wt,St,Dt,At,Nt,Ot,kt,Pt,jt,xt,Ht,Lt,Rt,Qt,Wt,Ut,Kt,Mt,Bt,Ft,Vt,Yt,qt,zt,Zt,Jt,Gt,$t,Xt,te,ee,ne,ie,oe,re,se,ae,le,he,ce,ue,de,fe,pe,ge,_e,me,ve,ye,Ee,Ce,Te,be,Ie,we,Se,De,Ae,Ne,Oe,ke,Pe,je,xe,He,Le,Re,Qe=function(i){var e=!1,n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};function t(t){var e=this,n=!1;return i(this).one(o.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||o.triggerTransitionEnd(e)},t),this}var o={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");e&&"#"!==e||(e=t.getAttribute("href")||"");try{return 0<i(e).length?e:null}catch(t){return null}},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){i(t).trigger(e.end)},supportsTransitionEnd:function(){return Boolean(e)},typeCheckConfig:function(t,e,n){for(var i in n)if(n.hasOwnProperty(i)){var o=n[i],r=e[i],s=r&&((l=r)[0]||l).nodeType?"element":(a=r,{}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a,l}};return e=function(){if(window.QUnit)return!1;var t=document.createElement("bootstrap");for(var e in n)if(void 0!==t.style[e])return{end:n[e]};return!1}(),i.fn.emulateTransitionEnd=t,o.supportsTransitionEnd()&&(i.event.special[o.TRANSITION_END]={bindType:e.end,delegateType:e.end,handle:function(t){if(i(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}}),o}(jQuery),We=(o=jQuery,t="alert",e="."+(r="bs.alert"),n=o.fn[t],s={CLOSE:"close"+e,CLOSED:"closed"+e,CLICK_DATA_API:"click"+e+".data-api"},a="alert",l="fade",h="show",i=function(){function i(t){I(this,i),this._element=t}return i.prototype.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},i.prototype.dispose=function(){o.removeData(this._element,r),this._element=null},i.prototype._getRootElement=function(t){var e=Qe.getSelectorFromElement(t),n=!1;return e&&(n=o(e)[0]),n||(n=o(t).closest("."+a)[0]),n},i.prototype._triggerCloseEvent=function(t){var e=o.Event(s.CLOSE);return o(t).trigger(e),e},i.prototype._removeElement=function(e){var n=this;o(e).removeClass(h),Qe.supportsTransitionEnd()&&o(e).hasClass(l)?o(e).one(Qe.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(150):this._destroyElement(e)},i.prototype._destroyElement=function(t){o(t).detach().trigger(s.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=o(this),e=t.data(r);e||(e=new i(this),t.data(r,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},b(i,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}}]),i}(),o(document).on(s.CLICK_DATA_API,'[data-dismiss="alert"]',i._handleDismiss(new i)),o.fn[t]=i._jQueryInterface,o.fn[t].Constructor=i,o.fn[t].noConflict=function(){return o.fn[t]=n,i._jQueryInterface},c=jQuery,u="button",f="."+(d="bs.button"),p=".data-api",g=c.fn[u],_="active",m="btn",y='[data-toggle^="button"]',E='[data-toggle="buttons"]',C="input",w=".active",S=".btn",D={CLICK_DATA_API:"click"+f+p,FOCUS_BLUR_DATA_API:(v="focus")+f+p+" blur"+f+p},A=function(){function n(t){I(this,n),this._element=t}return n.prototype.toggle=function(){var t=!0,e=!0,n=c(this._element).closest(E)[0];if(n){var i=c(this._element).find(C)[0];if(i){if("radio"===i.type)if(i.checked&&c(this._element).hasClass(_))t=!1;else{var o=c(n).find(w)[0];o&&c(o).removeClass(_)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!c(this._element).hasClass(_),c(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!c(this._element).hasClass(_)),t&&c(this._element).toggleClass(_)},n.prototype.dispose=function(){c.removeData(this._element,d),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=c(this).data(d);t||(t=new n(this),c(this).data(d,t)),"toggle"===e&&t[e]()})},b(n,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}}]),n}(),c(document).on(D.CLICK_DATA_API,y,function(t){t.preventDefault();var e=t.target;c(e).hasClass(m)||(e=c(e).closest(S)),A._jQueryInterface.call(c(e),"toggle")}).on(D.FOCUS_BLUR_DATA_API,y,function(t){var e=c(t.target).closest(S)[0];c(e).toggleClass(v,/^focus(in)?$/.test(t.type))}),c.fn[u]=A._jQueryInterface,c.fn[u].Constructor=A,c.fn[u].noConflict=function(){return c.fn[u]=g,A._jQueryInterface},N=jQuery,O="carousel",P="."+(k="bs.carousel"),j=".data-api",x=N.fn[O],H={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},L={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},R="next",Q="prev",W="left",U="right",K={SLIDE:"slide"+P,SLID:"slid"+P,KEYDOWN:"keydown"+P,MOUSEENTER:"mouseenter"+P,MOUSELEAVE:"mouseleave"+P,TOUCHEND:"touchend"+P,LOAD_DATA_API:"load"+P+j,CLICK_DATA_API:"click"+P+j},M="carousel",B="active",F="slide",V="carousel-item-right",Y="carousel-item-left",q="carousel-item-next",z="carousel-item-prev",Z=".active",J=".active.carousel-item",G=".carousel-item",$=".carousel-item-next, .carousel-item-prev",X=".carousel-indicators",tt="[data-slide], [data-slide-to]",et='[data-ride="carousel"]',nt=function(){function r(t,e){I(this,r),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(e),this._element=N(t)[0],this._indicatorsElement=N(this._element).find(X)[0],this._addEventListeners()}return r.prototype.next=function(){this._isSliding||this._slide(R)},r.prototype.nextWhenVisible=function(){document.hidden||this.next()},r.prototype.prev=function(){this._isSliding||this._slide(Q)},r.prototype.pause=function(t){t||(this._isPaused=!0),N(this._element).find($)[0]&&Qe.supportsTransitionEnd()&&(Qe.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},r.prototype.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},r.prototype.to=function(t){var e=this;this._activeElement=N(this._element).find(J)[0];var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)N(this._element).one(K.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?R:Q;this._slide(i,this._items[t])}},r.prototype.dispose=function(){N(this._element).off(P),N.removeData(this._element,k),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},r.prototype._getConfig=function(t){return t=N.extend({},H,t),Qe.typeCheckConfig(O,t,L),t},r.prototype._addEventListeners=function(){var e=this;this._config.keyboard&&N(this._element).on(K.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(N(this._element).on(K.MOUSEENTER,function(t){return e.pause(t)}).on(K.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&N(this._element).on(K.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},r.prototype._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next();break;default:return}},r.prototype._getItemIndex=function(t){return this._items=N.makeArray(N(t).parent().find(G)),this._items.indexOf(t)},r.prototype._getItemByDirection=function(t,e){var n=t===R,i=t===Q,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===Q?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},r.prototype._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(N(this._element).find(J)[0]),o=N.Event(K.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return N(this._element).trigger(o),o},r.prototype._setActiveIndicatorElement=function(t){if(this._indicatorsElement){N(this._indicatorsElement).find(Z).removeClass(B);var e=this._indicatorsElement.children[this._getItemIndex(t)];e&&N(e).addClass(B)}},r.prototype._slide=function(t,e){var n=this,i=N(this._element).find(J)[0],o=this._getItemIndex(i),r=e||i&&this._getItemByDirection(t,i),s=this._getItemIndex(r),a=Boolean(this._interval),l=void 0,h=void 0,c=void 0;if(t===R?(l=Y,h=q,c=W):(l=V,h=z,c=U),r&&N(r).hasClass(B))this._isSliding=!1;else if(!this._triggerSlideEvent(r,c).isDefaultPrevented()&&i&&r){this._isSliding=!0,a&&this.pause(),this._setActiveIndicatorElement(r);var u=N.Event(K.SLID,{relatedTarget:r,direction:c,from:o,to:s});Qe.supportsTransitionEnd()&&N(this._element).hasClass(F)?(N(r).addClass(h),Qe.reflow(r),N(i).addClass(l),N(r).addClass(l),N(i).one(Qe.TRANSITION_END,function(){N(r).removeClass(l+" "+h).addClass(B),N(i).removeClass(B+" "+h+" "+l),n._isSliding=!1,setTimeout(function(){return N(n._element).trigger(u)},0)}).emulateTransitionEnd(600)):(N(i).removeClass(B),N(r).addClass(B),this._isSliding=!1,N(this._element).trigger(u)),a&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var t=N(this).data(k),e=N.extend({},H,N(this).data());"object"===(void 0===i?"undefined":T(i))&&N.extend(e,i);var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),N(this).data(k,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if(void 0===t[n])throw new Error('No method named "'+n+'"');t[n]()}else e.interval&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function(t){var e=Qe.getSelectorFromElement(this);if(e){var n=N(e)[0];if(n&&N(n).hasClass(M)){var i=N.extend({},N(n).data(),N(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(N(n),i),o&&N(n).data(k).to(o),t.preventDefault()}}},b(r,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return H}}]),r}(),N(document).on(K.CLICK_DATA_API,tt,nt._dataApiClickHandler),N(window).on(K.LOAD_DATA_API,function(){N(et).each(function(){var t=N(this);nt._jQueryInterface.call(t,t.data())})}),N.fn[O]=nt._jQueryInterface,N.fn[O].Constructor=nt,N.fn[O].noConflict=function(){return N.fn[O]=x,nt._jQueryInterface},it=jQuery,ot="collapse",st="."+(rt="bs.collapse"),at=it.fn[ot],lt={toggle:!0,parent:""},ht={toggle:"boolean",parent:"string"},ct={SHOW:"show"+st,SHOWN:"shown"+st,HIDE:"hide"+st,HIDDEN:"hidden"+st,CLICK_DATA_API:"click"+st+".data-api"},ut="show",dt="collapse",ft="collapsing",pt="collapsed",gt="width",_t="height",mt=".show, .collapsing",vt='[data-toggle="collapse"]',yt=function(){function a(t,e){I(this,a),this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=it.makeArray(it('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=it(vt),i=0;i<n.length;i++){var o=n[i],r=Qe.getSelectorFromElement(o);null!==r&&0<it(r).filter(t).length&&this._triggerArray.push(o)}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}return a.prototype.toggle=function(){it(this._element).hasClass(ut)?this.hide():this.show()},a.prototype.show=function(){var t=this;if(!this._isTransitioning&&!it(this._element).hasClass(ut)){var e=void 0,n=void 0;if(this._parent&&((e=it.makeArray(it(this._parent).children().children(mt))).length||(e=null)),!(e&&(n=it(e).data(rt))&&n._isTransitioning)){var i=it.Event(ct.SHOW);if(it(this._element).trigger(i),!i.isDefaultPrevented()){e&&(a._jQueryInterface.call(it(e),"hide"),n||it(e).data(rt,null));var o=this._getDimension();it(this._element).removeClass(dt).addClass(ft),this._element.style[o]=0,this._triggerArray.length&&it(this._triggerArray).removeClass(pt).attr("aria-expanded",!0),this.setTransitioning(!0);var r=function(){it(t._element).removeClass(ft).addClass(dt).addClass(ut),t._element.style[o]="",t.setTransitioning(!1),it(t._element).trigger(ct.SHOWN)};if(Qe.supportsTransitionEnd()){var s="scroll"+(o[0].toUpperCase()+o.slice(1));it(this._element).one(Qe.TRANSITION_END,r).emulateTransitionEnd(600),this._element.style[o]=this._element[s]+"px"}else r()}}}},a.prototype.hide=function(){var t=this;if(!this._isTransitioning&&it(this._element).hasClass(ut)){var e=it.Event(ct.HIDE);if(it(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();if(this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",Qe.reflow(this._element),it(this._element).addClass(ft).removeClass(dt).removeClass(ut),this._triggerArray.length)for(var i=0;i<this._triggerArray.length;i++){var o=this._triggerArray[i],r=Qe.getSelectorFromElement(o);if(null!==r)it(r).hasClass(ut)||it(o).addClass(pt).attr("aria-expanded",!1)}this.setTransitioning(!0);var s=function(){t.setTransitioning(!1),it(t._element).removeClass(ft).addClass(dt).trigger(ct.HIDDEN)};this._element.style[n]="",Qe.supportsTransitionEnd()?it(this._element).one(Qe.TRANSITION_END,s).emulateTransitionEnd(600):s()}}},a.prototype.setTransitioning=function(t){this._isTransitioning=t},a.prototype.dispose=function(){it.removeData(this._element,rt),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},a.prototype._getConfig=function(t){return(t=it.extend({},lt,t)).toggle=Boolean(t.toggle),Qe.typeCheckConfig(ot,t,ht),t},a.prototype._getDimension=function(){return it(this._element).hasClass(gt)?gt:_t},a.prototype._getParent=function(){var n=this,t=it(this._config.parent)[0],e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return it(t).find(e).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},a.prototype._addAriaAndCollapsedClass=function(t,e){if(t){var n=it(t).hasClass(ut);e.length&&it(e).toggleClass(pt,!n).attr("aria-expanded",n)}},a._getTargetFromElement=function(t){var e=Qe.getSelectorFromElement(t);return e?it(e)[0]:null},a._jQueryInterface=function(i){return this.each(function(){var t=it(this),e=t.data(rt),n=it.extend({},lt,t.data(),"object"===(void 0===i?"undefined":T(i))&&i);if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(rt,e)),"string"==typeof i){if(void 0===e[i])throw new Error('No method named "'+i+'"');e[i]()}})},b(a,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return lt}}]),a}(),it(document).on(ct.CLICK_DATA_API,vt,function(t){/input|textarea/i.test(t.target.tagName)||t.preventDefault();var n=it(this),e=Qe.getSelectorFromElement(this);it(e).each(function(){var t=it(this),e=t.data(rt)?"toggle":n.data();yt._jQueryInterface.call(t,e)})}),it.fn[ot]=yt._jQueryInterface,it.fn[ot].Constructor=yt,it.fn[ot].noConflict=function(){return it.fn[ot]=at,yt._jQueryInterface},function(h){if("undefined"==typeof Popper)throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");var n="dropdown",c="bs.dropdown",t="."+c,e=".data-api",i=h.fn[n],s=new RegExp("38|40|27"),u={HIDE:"hide"+t,HIDDEN:"hidden"+t,SHOW:"show"+t,SHOWN:"shown"+t,CLICK:"click"+t,CLICK_DATA_API:"click"+t+e,KEYDOWN_DATA_API:"keydown"+t+e,KEYUP_DATA_API:"keyup"+t+e},a="disabled",d="show",r="dropup",f="dropdown-menu-right",p="dropdown-menu-left",g='[data-toggle="dropdown"]',o=".dropdown form",_=".dropdown-menu",m=".navbar-nav",v=".dropdown-menu .dropdown-item:not(.disabled)",y={TOP:"top-start",TOPEND:"top-end",BOTTOM:"bottom-start",BOTTOMEND:"bottom-end"},E={placement:y.BOTTOM,offset:0,flip:!0},C={placement:"string",offset:"(number|string)",flip:"boolean"},l=function(){function l(t,e){I(this,l),this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}return l.prototype.toggle=function(){if(!this._element.disabled&&!h(this._element).hasClass(a)){var t=l._getParentFromElement(this._element),e=h(this._menu).hasClass(d);if(l._clearMenus(),!e){var n={relatedTarget:this._element},i=h.Event(u.SHOW,n);if(h(t).trigger(i),!i.isDefaultPrevented()){var o=this._element;h(t).hasClass(r)&&(h(this._menu).hasClass(p)||h(this._menu).hasClass(f))&&(o=t),this._popper=new Popper(o,this._menu,this._getPopperConfig()),"ontouchstart"in document.documentElement&&!h(t).closest(m).length&&h("body").children().on("mouseover",null,h.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),h(this._menu).toggleClass(d),h(t).toggleClass(d).trigger(h.Event(u.SHOWN,n))}}}},l.prototype.dispose=function(){h.removeData(this._element,c),h(this._element).off(t),this._element=null,(this._menu=null)!==this._popper&&this._popper.destroy(),this._popper=null},l.prototype.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},l.prototype._addEventListeners=function(){var e=this;h(this._element).on(u.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},l.prototype._getConfig=function(t){var e=h(this._element).data();return void 0!==e.placement&&(e.placement=y[e.placement.toUpperCase()]),t=h.extend({},this.constructor.Default,h(this._element).data(),t),Qe.typeCheckConfig(n,t,this.constructor.DefaultType),t},l.prototype._getMenuElement=function(){if(!this._menu){var t=l._getParentFromElement(this._element);this._menu=h(t).find(_)[0]}return this._menu},l.prototype._getPlacement=function(){var t=h(this._element).parent(),e=this._config.placement;return t.hasClass(r)||this._config.placement===y.TOP?(e=y.TOP,h(this._menu).hasClass(f)&&(e=y.TOPEND)):h(this._menu).hasClass(f)&&(e=y.BOTTOMEND),e},l.prototype._detectNavbar=function(){return 0<h(this._element).closest(".navbar").length},l.prototype._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:{offset:this._config.offset},flip:{enabled:this._config.flip}}};return this._inNavbar&&(t.modifiers.applyStyle={enabled:!this._inNavbar}),t},l._jQueryInterface=function(n){return this.each(function(){var t=h(this).data(c),e="object"===(void 0===n?"undefined":T(n))?n:null;if(t||(t=new l(this,e),h(this).data(c,t)),"string"==typeof n){if(void 0===t[n])throw new Error('No method named "'+n+'"');t[n]()}})},l._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=h.makeArray(h(g)),n=0;n<e.length;n++){var i=l._getParentFromElement(e[n]),o=h(e[n]).data(c),r={relatedTarget:e[n]};if(o){var s=o._menu;if(h(i).hasClass(d)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&h.contains(i,t.target))){var a=h.Event(u.HIDE,r);h(i).trigger(a),a.isDefaultPrevented()||("ontouchstart"in document.documentElement&&h("body").children().off("mouseover",null,h.noop),e[n].setAttribute("aria-expanded","false"),h(s).removeClass(d),h(i).removeClass(d).trigger(h.Event(u.HIDDEN,r)))}}}},l._getParentFromElement=function(t){var e=void 0,n=Qe.getSelectorFromElement(t);return n&&(e=h(n)[0]),e||t.parentNode},l._dataApiKeydownHandler=function(t){if(!(!s.test(t.which)||/button/i.test(t.target.tagName)&&32===t.which||/input|textarea/i.test(t.target.tagName)||(t.preventDefault(),t.stopPropagation(),this.disabled||h(this).hasClass(a)))){var e=l._getParentFromElement(this),n=h(e).hasClass(d);if((n||27===t.which&&32===t.which)&&(!n||27!==t.which&&32!==t.which)){var i=h(e).find(v).get();if(i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var r=h(e).find(g)[0];h(r).trigger("focus")}h(this).trigger("click")}}},b(l,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return E}},{key:"DefaultType",get:function(){return C}}]),l}();h(document).on(u.KEYDOWN_DATA_API,g,l._dataApiKeydownHandler).on(u.KEYDOWN_DATA_API,_,l._dataApiKeydownHandler).on(u.CLICK_DATA_API+" "+u.KEYUP_DATA_API,l._clearMenus).on(u.CLICK_DATA_API,g,function(t){t.preventDefault(),t.stopPropagation(),l._jQueryInterface.call(h(this),"toggle")}).on(u.CLICK_DATA_API,o,function(t){t.stopPropagation()}),h.fn[n]=l._jQueryInterface,h.fn[n].Constructor=l,h.fn[n].noConflict=function(){return h.fn[n]=i,l._jQueryInterface}}(jQuery),Et=jQuery,Ct="modal",bt="."+(Tt="bs.modal"),It=Et.fn[Ct],wt={backdrop:!0,keyboard:!0,focus:!0,show:!0},St={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},Dt={HIDE:"hide"+bt,HIDDEN:"hidden"+bt,SHOW:"show"+bt,SHOWN:"shown"+bt,FOCUSIN:"focusin"+bt,RESIZE:"resize"+bt,CLICK_DISMISS:"click.dismiss"+bt,KEYDOWN_DISMISS:"keydown.dismiss"+bt,MOUSEUP_DISMISS:"mouseup.dismiss"+bt,MOUSEDOWN_DISMISS:"mousedown.dismiss"+bt,CLICK_DATA_API:"click"+bt+".data-api"},At="modal-scrollbar-measure",Nt="modal-backdrop",Ot="modal-open",kt="fade",Pt="show",jt=".modal-dialog",xt='[data-toggle="modal"]',Ht='[data-dismiss="modal"]',Lt=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Rt=".navbar-toggler",Qt=function(){function o(t,e){I(this,o),this._config=this._getConfig(e),this._element=t,this._dialog=Et(t).find(jt)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}return o.prototype.toggle=function(t){return this._isShown?this.hide():this.show(t)},o.prototype.show=function(t){var e=this;if(!this._isTransitioning){Qe.supportsTransitionEnd()&&Et(this._element).hasClass(kt)&&(this._isTransitioning=!0);var n=Et.Event(Dt.SHOW,{relatedTarget:t});Et(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),Et(document.body).addClass(Ot),this._setEscapeEvent(),this._setResizeEvent(),Et(this._element).on(Dt.CLICK_DISMISS,Ht,function(t){return e.hide(t)}),Et(this._dialog).on(Dt.MOUSEDOWN_DISMISS,function(){Et(e._element).one(Dt.MOUSEUP_DISMISS,function(t){Et(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},o.prototype.hide=function(t){var e=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var n=Qe.supportsTransitionEnd()&&Et(this._element).hasClass(kt);n&&(this._isTransitioning=!0);var i=Et.Event(Dt.HIDE);Et(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()&&(this._isShown=!1,this._setEscapeEvent(),this._setResizeEvent(),Et(document).off(Dt.FOCUSIN),Et(this._element).removeClass(Pt),Et(this._element).off(Dt.CLICK_DISMISS),Et(this._dialog).off(Dt.MOUSEDOWN_DISMISS),n?Et(this._element).one(Qe.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(300):this._hideModal())}},o.prototype.dispose=function(){Et.removeData(this._element,Tt),Et(window,document,this._element,this._backdrop).off(bt),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},o.prototype.handleUpdate=function(){this._adjustDialog()},o.prototype._getConfig=function(t){return t=Et.extend({},wt,t),Qe.typeCheckConfig(Ct,t,St),t},o.prototype._showElement=function(t){var e=this,n=Qe.supportsTransitionEnd()&&Et(this._element).hasClass(kt);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,n&&Qe.reflow(this._element),Et(this._element).addClass(Pt),this._config.focus&&this._enforceFocus();var i=Et.Event(Dt.SHOWN,{relatedTarget:t}),o=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,Et(e._element).trigger(i)};n?Et(this._dialog).one(Qe.TRANSITION_END,o).emulateTransitionEnd(300):o()},o.prototype._enforceFocus=function(){var e=this;Et(document).off(Dt.FOCUSIN).on(Dt.FOCUSIN,function(t){document===t.target||e._element===t.target||Et(e._element).has(t.target).length||e._element.focus()})},o.prototype._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?Et(this._element).on(Dt.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||Et(this._element).off(Dt.KEYDOWN_DISMISS)},o.prototype._setResizeEvent=function(){var e=this;this._isShown?Et(window).on(Dt.RESIZE,function(t){return e.handleUpdate(t)}):Et(window).off(Dt.RESIZE)},o.prototype._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){Et(document.body).removeClass(Ot),t._resetAdjustments(),t._resetScrollbar(),Et(t._element).trigger(Dt.HIDDEN)})},o.prototype._removeBackdrop=function(){this._backdrop&&(Et(this._backdrop).remove(),this._backdrop=null)},o.prototype._showBackdrop=function(t){var e=this,n=Et(this._element).hasClass(kt)?kt:"";if(this._isShown&&this._config.backdrop){var i=Qe.supportsTransitionEnd()&&n;if(this._backdrop=document.createElement("div"),this._backdrop.className=Nt,n&&Et(this._backdrop).addClass(n),Et(this._backdrop).appendTo(document.body),Et(this._element).on(Dt.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),i&&Qe.reflow(this._backdrop),Et(this._backdrop).addClass(Pt),!t)return;if(!i)return void t();Et(this._backdrop).one(Qe.TRANSITION_END,t).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){Et(this._backdrop).removeClass(Pt);var o=function(){e._removeBackdrop(),t&&t()};Qe.supportsTransitionEnd()&&Et(this._element).hasClass(kt)?Et(this._backdrop).one(Qe.TRANSITION_END,o).emulateTransitionEnd(150):o()}else t&&t()},o.prototype._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},o.prototype._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},o.prototype._checkScrollbar=function(){this._isBodyOverflowing=document.body.clientWidth<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},o.prototype._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){Et(Lt).each(function(t,e){var n=Et(e)[0].style.paddingRight,i=Et(e).css("padding-right");Et(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),Et(Rt).each(function(t,e){var n=Et(e)[0].style.marginRight,i=Et(e).css("margin-right");Et(e).data("margin-right",n).css("margin-right",parseFloat(i)+o._scrollbarWidth+"px")});var t=document.body.style.paddingRight,e=Et("body").css("padding-right");Et("body").data("padding-right",t).css("padding-right",parseFloat(e)+this._scrollbarWidth+"px")}},o.prototype._resetScrollbar=function(){Et(Lt).each(function(t,e){var n=Et(e).data("padding-right");void 0!==n&&Et(e).css("padding-right",n).removeData("padding-right")}),Et(Rt).each(function(t,e){var n=Et(e).data("margin-right");void 0!==n&&Et(e).css("margin-right",n).removeData("margin-right")});var t=Et("body").data("padding-right");void 0!==t&&Et("body").css("padding-right",t).removeData("padding-right")},o.prototype._getScrollbarWidth=function(){var t=document.createElement("div");t.className=At,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(n,i){return this.each(function(){var t=Et(this).data(Tt),e=Et.extend({},o.Default,Et(this).data(),"object"===(void 0===n?"undefined":T(n))&&n);if(t||(t=new o(this,e),Et(this).data(Tt,t)),"string"==typeof n){if(void 0===t[n])throw new Error('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},b(o,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return wt}}]),o}(),Et(document).on(Dt.CLICK_DATA_API,xt,function(t){var e=this,n=void 0,i=Qe.getSelectorFromElement(this);i&&(n=Et(i)[0]);var o=Et(n).data(Tt)?"toggle":Et.extend({},Et(n).data(),Et(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=Et(n).one(Dt.SHOW,function(t){t.isDefaultPrevented()||r.one(Dt.HIDDEN,function(){Et(e).is(":visible")&&e.focus()})});Qt._jQueryInterface.call(Et(n),o,this)}),Et.fn[Ct]=Qt._jQueryInterface,Et.fn[Ct].Constructor=Qt,Et.fn[Ct].noConflict=function(){return Et.fn[Ct]=It,Qt._jQueryInterface},Wt=jQuery,Ut="scrollspy",Mt="."+(Kt="bs.scrollspy"),Bt=Wt.fn[Ut],Ft={offset:10,method:"auto",target:""},Vt={offset:"number",method:"string",target:"(string|element)"},Yt={ACTIVATE:"activate"+Mt,SCROLL:"scroll"+Mt,LOAD_DATA_API:"load"+Mt+".data-api"},qt="dropdown-item",zt="active",Zt='[data-spy="scroll"]',Jt=".active",Gt=".nav, .list-group",$t=".nav-link",Xt=".list-group-item",te=".dropdown",ee=".dropdown-item",ne=".dropdown-toggle",ie="offset",oe="position",re=function(){function i(t,e){var n=this;I(this,i),this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+$t+","+this._config.target+" "+Xt+","+this._config.target+" "+ee,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,Wt(this._scrollElement).on(Yt.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}return i.prototype.refresh=function(){var e=this,t=this._scrollElement!==this._scrollElement.window?oe:ie,o="auto"===this._config.method?t:this._config.method,r=o===oe?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),Wt.makeArray(Wt(this._selector)).map(function(t){var e=void 0,n=Qe.getSelectorFromElement(t);if(n&&(e=Wt(n)[0]),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[Wt(e)[o]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},i.prototype.dispose=function(){Wt.removeData(this._element,Kt),Wt(this._scrollElement).off(Mt),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},i.prototype._getConfig=function(t){if("string"!=typeof(t=Wt.extend({},Ft,t)).target){var e=Wt(t.target).attr("id");e||(e=Qe.getUID(Ut),Wt(t.target).attr("id",e)),t.target="#"+e}return Qe.typeCheckConfig(Ut,t,Vt),t},i.prototype._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},i.prototype._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},i.prototype._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},i.prototype._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&(void 0===this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},i.prototype._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",");t=t.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var n=Wt(t.join(","));n.hasClass(qt)?(n.closest(te).find(ne).addClass(zt),n.addClass(zt)):(n.addClass(zt),n.parents(Gt).prev($t+", "+Xt).addClass(zt)),Wt(this._scrollElement).trigger(Yt.ACTIVATE,{relatedTarget:e})},i.prototype._clear=function(){Wt(this._selector).filter(Jt).removeClass(zt)},i._jQueryInterface=function(n){return this.each(function(){var t=Wt(this).data(Kt),e="object"===(void 0===n?"undefined":T(n))&&n;if(t||(t=new i(this,e),Wt(this).data(Kt,t)),"string"==typeof n){if(void 0===t[n])throw new Error('No method named "'+n+'"');t[n]()}})},b(i,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return Ft}}]),i}(),Wt(window).on(Yt.LOAD_DATA_API,function(){for(var t=Wt.makeArray(Wt(Zt)),e=t.length;e--;){var n=Wt(t[e]);re._jQueryInterface.call(n,n.data())}}),Wt.fn[Ut]=re._jQueryInterface,Wt.fn[Ut].Constructor=re,Wt.fn[Ut].noConflict=function(){return Wt.fn[Ut]=Bt,re._jQueryInterface},se=jQuery,le="."+(ae="bs.tab"),he=se.fn.tab,ce={HIDE:"hide"+le,HIDDEN:"hidden"+le,SHOW:"show"+le,SHOWN:"shown"+le,CLICK_DATA_API:"click"+le+".data-api"},ue="dropdown-menu",de="active",fe="disabled",pe="fade",ge="show",_e=".dropdown",me=".nav, .list-group",ve=".active",ye='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Ee=".dropdown-toggle",Ce="> .dropdown-menu .active",Te=function(){function i(t){I(this,i),this._element=t}return i.prototype.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&se(this._element).hasClass(de)||se(this._element).hasClass(fe))){var t=void 0,i=void 0,e=se(this._element).closest(me)[0],o=Qe.getSelectorFromElement(this._element);e&&(i=(i=se.makeArray(se(e).find(ve)))[i.length-1]);var r=se.Event(ce.HIDE,{relatedTarget:this._element}),s=se.Event(ce.SHOW,{relatedTarget:i});if(i&&se(i).trigger(r),se(this._element).trigger(s),!s.isDefaultPrevented()&&!r.isDefaultPrevented()){o&&(t=se(o)[0]),this._activate(this._element,e);var a=function(){var t=se.Event(ce.HIDDEN,{relatedTarget:n._element}),e=se.Event(ce.SHOWN,{relatedTarget:i});se(i).trigger(t),se(n._element).trigger(e)};t?this._activate(t,t.parentNode,a):a()}}},i.prototype.dispose=function(){se.removeData(this._element,ae),this._element=null},i.prototype._activate=function(t,e,n){var i=this,o=se(e).find(ve)[0],r=n&&Qe.supportsTransitionEnd()&&o&&se(o).hasClass(pe),s=function(){return i._transitionComplete(t,o,r,n)};o&&r?se(o).one(Qe.TRANSITION_END,s).emulateTransitionEnd(150):s(),o&&se(o).removeClass(ge)},i.prototype._transitionComplete=function(t,e,n,i){if(e){se(e).removeClass(de);var o=se(e.parentNode).find(Ce)[0];o&&se(o).removeClass(de),e.setAttribute("aria-expanded",!1)}if(se(t).addClass(de),t.setAttribute("aria-expanded",!0),n?(Qe.reflow(t),se(t).addClass(ge)):se(t).removeClass(pe),t.parentNode&&se(t.parentNode).hasClass(ue)){var r=se(t).closest(_e)[0];r&&se(r).find(Ee).addClass(de),t.setAttribute("aria-expanded",!0)}i&&i()},i._jQueryInterface=function(n){return this.each(function(){var t=se(this),e=t.data(ae);if(e||(e=new i(this),t.data(ae,e)),"string"==typeof n){if(void 0===e[n])throw new Error('No method named "'+n+'"');e[n]()}})},b(i,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}}]),i}(),se(document).on(ce.CLICK_DATA_API,ye,function(t){t.preventDefault(),Te._jQueryInterface.call(se(this),"show")}),se.fn.tab=Te._jQueryInterface,se.fn.tab.Constructor=Te,se.fn.tab.noConflict=function(){return se.fn.tab=he,Te._jQueryInterface},function(c){if("undefined"==typeof Popper)throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)");var e="tooltip",i="bs.tooltip",t="."+i,n=c.fn[e],o="bs-tooltip",r=new RegExp("(^|\\s)"+o+"\\S+","g"),s={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)"},a={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},l={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip"},u="show",d="out",f={HIDE:"hide"+t,HIDDEN:"hidden"+t,SHOW:"show"+t,SHOWN:"shown"+t,INSERTED:"inserted"+t,CLICK:"click"+t,FOCUSIN:"focusin"+t,FOCUSOUT:"focusout"+t,MOUSEENTER:"mouseenter"+t,MOUSELEAVE:"mouseleave"+t},p="fade",g="show",_=".tooltip-inner",m=".arrow",v="hover",y="focus",E="click",C="manual",h=function(){function h(t,e){I(this,h),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}return h.prototype.enable=function(){this._isEnabled=!0},h.prototype.disable=function(){this._isEnabled=!1},h.prototype.toggleEnabled=function(){this._isEnabled=!this._isEnabled},h.prototype.toggle=function(t){if(t){var e=this.constructor.DATA_KEY,n=c(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),c(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(c(this.getTipElement()).hasClass(g))return void this._leave(null,this);this._enter(null,this)}},h.prototype.dispose=function(){clearTimeout(this._timeout),c.removeData(this.element,this.constructor.DATA_KEY),c(this.element).off(this.constructor.EVENT_KEY),c(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&c(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},h.prototype.show=function(){var e=this;if("none"===c(this.element).css("display"))throw new Error("Please use show on visible elements");var t=c.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){c(this.element).trigger(t);var n=c.contains(this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!n)return;var i=this.getTipElement(),o=Qe.getUID(this.constructor.NAME);i.setAttribute("id",o),this.element.setAttribute("aria-describedby",o),this.setContent(),this.config.animation&&c(i).addClass(p);var r="function"==typeof this.config.placement?this.config.placement.call(this,i,this.element):this.config.placement,s=this._getAttachment(r);this.addAttachmentClass(s);var a=!1===this.config.container?document.body:c(this.config.container);c(i).data(this.constructor.DATA_KEY,this),c.contains(this.element.ownerDocument.documentElement,this.tip)||c(i).appendTo(a),c(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new Popper(this.element,i,{placement:s,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:m}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),c(i).addClass(g),"ontouchstart"in document.documentElement&&c("body").children().on("mouseover",null,c.noop);var l=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,c(e.element).trigger(e.constructor.Event.SHOWN),t===d&&e._leave(null,e)};Qe.supportsTransitionEnd()&&c(this.tip).hasClass(p)?c(this.tip).one(Qe.TRANSITION_END,l).emulateTransitionEnd(h._TRANSITION_DURATION):l()}},h.prototype.hide=function(t){var e=this,n=this.getTipElement(),i=c.Event(this.constructor.Event.HIDE),o=function(){e._hoverState!==u&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),c(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};c(this.element).trigger(i),i.isDefaultPrevented()||(c(n).removeClass(g),"ontouchstart"in document.documentElement&&c("body").children().off("mouseover",null,c.noop),this._activeTrigger[E]=!1,this._activeTrigger[y]=!1,this._activeTrigger[v]=!1,Qe.supportsTransitionEnd()&&c(this.tip).hasClass(p)?c(n).one(Qe.TRANSITION_END,o).emulateTransitionEnd(150):o(),this._hoverState="")},h.prototype.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},h.prototype.isWithContent=function(){return Boolean(this.getTitle())},h.prototype.addAttachmentClass=function(t){c(this.getTipElement()).addClass(o+"-"+t)},h.prototype.getTipElement=function(){return this.tip=this.tip||c(this.config.template)[0]},h.prototype.setContent=function(){var t=c(this.getTipElement());this.setElementContent(t.find(_),this.getTitle()),t.removeClass(p+" "+g)},h.prototype.setElementContent=function(t,e){var n=this.config.html;"object"===(void 0===e?"undefined":T(e))&&(e.nodeType||e.jquery)?n?c(e).parent().is(t)||t.empty().append(e):t.text(c(e).text()):t[n?"html":"text"](e)},h.prototype.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},h.prototype._getAttachment=function(t){return a[t.toUpperCase()]},h.prototype._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)c(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==C){var e=t===v?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===v?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;c(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}c(i.element).closest(".modal").on("hide.bs.modal",function(){return i.hide()})}),this.config.selector?this.config=c.extend({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},h.prototype._fixTitle=function(){var t=T(this.element.getAttribute("data-original-title"));(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},h.prototype._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||c(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),c(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?y:v]=!0),c(e.getTipElement()).hasClass(g)||e._hoverState===u?e._hoverState=u:(clearTimeout(e._timeout),e._hoverState=u,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===u&&e.show()},e.config.delay.show):e.show())},h.prototype._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||c(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),c(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?y:v]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=d,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===d&&e.hide()},e.config.delay.hide):e.hide())},h.prototype._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},h.prototype._getConfig=function(t){return(t=c.extend({},this.constructor.Default,c(this.element).data(),t)).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t.title&&"number"==typeof t.title&&(t.title=t.title.toString()),t.content&&"number"==typeof t.content&&(t.content=t.content.toString()),Qe.typeCheckConfig(e,t,this.constructor.DefaultType),t},h.prototype._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},h.prototype._cleanTipClass=function(){var t=c(this.getTipElement()),e=t.attr("class").match(r);null!==e&&0<e.length&&t.removeClass(e.join(""))},h.prototype._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},h.prototype._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(c(t).removeClass(p),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},h._jQueryInterface=function(n){return this.each(function(){var t=c(this).data(i),e="object"===(void 0===n?"undefined":T(n))&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new h(this,e),c(this).data(i,t)),"string"==typeof n)){if(void 0===t[n])throw new Error('No method named "'+n+'"');t[n]()}})},b(h,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return l}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return i}},{key:"Event",get:function(){return f}},{key:"EVENT_KEY",get:function(){return t}},{key:"DefaultType",get:function(){return s}}]),h}();return c.fn[e]=h._jQueryInterface,c.fn[e].Constructor=h,c.fn[e].noConflict=function(){return c.fn[e]=n,h._jQueryInterface},h}(jQuery));be=jQuery,Ie="popover",Se="."+(we="bs.popover"),De=be.fn[Ie],Ae="bs-popover",Ne=new RegExp("(^|\\s)"+Ae+"\\S+","g"),Oe=be.extend({},We.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),ke=be.extend({},We.DefaultType,{content:"(string|element|function)"}),Pe="fade",xe=".popover-header",He=".popover-body",Le={HIDE:"hide"+Se,HIDDEN:"hidden"+Se,SHOW:(je="show")+Se,SHOWN:"shown"+Se,INSERTED:"inserted"+Se,CLICK:"click"+Se,FOCUSIN:"focusin"+Se,FOCUSOUT:"focusout"+Se,MOUSEENTER:"mouseenter"+Se,MOUSELEAVE:"mouseleave"+Se},Re=function(t){function i(){return I(this,i),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(i,t),i.prototype.isWithContent=function(){return this.getTitle()||this._getContent()},i.prototype.addAttachmentClass=function(t){be(this.getTipElement()).addClass(Ae+"-"+t)},i.prototype.getTipElement=function(){return this.tip=this.tip||be(this.config.template)[0]},i.prototype.setContent=function(){var t=be(this.getTipElement());this.setElementContent(t.find(xe),this.getTitle()),this.setElementContent(t.find(He),this._getContent()),t.removeClass(Pe+" "+je)},i.prototype._getContent=function(){return this.element.getAttribute("data-content")||("function"==typeof this.config.content?this.config.content.call(this.element):this.config.content)},i.prototype._cleanTipClass=function(){var t=be(this.getTipElement()),e=t.attr("class").match(Ne);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=be(this).data(we),e="object"===(void 0===n?"undefined":T(n))?n:null;if((t||!/destroy|hide/.test(n))&&(t||(t=new i(this,e),be(this).data(we,t)),"string"==typeof n)){if(void 0===t[n])throw new Error('No method named "'+n+'"');t[n]()}})},b(i,null,[{key:"VERSION",get:function(){return"4.0.0-beta"}},{key:"Default",get:function(){return Oe}},{key:"NAME",get:function(){return Ie}},{key:"DATA_KEY",get:function(){return we}},{key:"Event",get:function(){return Le}},{key:"EVENT_KEY",get:function(){return Se}},{key:"DefaultType",get:function(){return ke}}]),i}(We),be.fn[Ie]=Re._jQueryInterface,be.fn[Ie].Constructor=Re,be.fn[Ie].noConflict=function(){return be.fn[Ie]=De,Re._jQueryInterface}}();

;
!function(r,a){"use strict";Drupal.behaviors.droopler_subtheme={attach:function(a,t){var e=r(".path-frontpage .paragraph-sections > section:nth-child(1) > .paragraph h2"),n=e.text();n=(n="<span>"+(n=(n=(n=n.replace(/\s/g,"")).replace(/([A-Z])/g,"</span><span>$1")).replace(/(\d\d\d\d)/g,"</span><span>$1"))+"</span>").replace("<span></span>",""),e.html(n),e.find("span:odd").addClass("invert");var s=r(".path-frontpage .paragraph-sections > section:nth-child(3)");s.prepend('<div id="mobile-bg" class="d-block d-lg-none position-absolute"></div>'),r(window).resize(function(){r("#mobile-bg").css({top:0,bottom:s.find(".col-lg-6").last().outerHeight(),left:0,right:0})}),r(window).trigger("resize");var i=r(".page-node-9 .paragraph-sections > section:nth-child(3) h2, .page-node-10 .paragraph-sections > section:nth-child(3) h2"),p=i.text().split("-");i.html("<span>"+p.join("</span><span>")+"</span>"),r(document).ready(function(){r(".fb-page-widget").each(function(){var a=r(this).width(),t=r(this).attr("src");t=t.replace(/width=\d+/,"width="+a),r(this).attr("src",t)})})}}}(jQuery);

;
/*
 * Backstretch
 * http://srobbin.com/jquery-plugins/backstretch/
 *
 * Copyright (c) 2013 Scott Robbin
 * Licensed under the MIT license.
 */

;(function ($, window, undefined) {
  'use strict';

  /** @const */
  var YOUTUBE_REGEXP = /^.*(youtu\.be\/|youtube\.com\/v\/|youtube\.com\/embed\/|youtube\.com\/watch\?v=|youtube\.com\/watch\?.*\&v=)([^#\&\?]*).*/i;
  
  /* PLUGIN DEFINITION
   * ========================= */

  $.fn.backstretch = function (images, options) {
    var args = arguments;

    /*
     * Scroll the page one pixel to get the right window height on iOS
     * Pretty harmless for everyone else
    */
    if ($(window).scrollTop() === 0 ) {
      window.scrollTo(0, 0);
    }

    var returnValues;
    
    this.each(function (eachIndex) {
      var $this = $(this)
        , obj = $this.data('backstretch');

      // Do we already have an instance attached to this element?
      if (obj) {

        // Is this a method they're trying to execute?
        if (typeof args[0] === 'string' &&
            typeof obj[args[0]] === 'function') {
              
          // Call the method
          var returnValue = obj[args[0]].apply(obj, Array.prototype.slice.call(args, 1));
          if (returnValue === obj) { // If a method is chaining
            returnValue = undefined;
          }
          if (returnValue !== undefined) {
            returnValues = returnValues || [];
            returnValues[eachIndex] = returnValue;
          }
          
          return; // Nothing further to do
        }

        // Merge the old options with the new
        options = $.extend(obj.options, options);

        // Remove the old instance
        if ( obj.hasOwnProperty('destroy') ) {
          obj.destroy(true);
        }
      }

      // We need at least one image
      if (!images || (images && images.length === 0)) {
        var cssBackgroundImage = $this.css('background-image');
        if (cssBackgroundImage && cssBackgroundImage !== 'none') {
          images = [ { url: $this.css('backgroundImage').replace(/url\(|\)|"|'/g,"") } ];
        } else {
          $.error('No images were supplied for Backstretch, or element must have a CSS-defined background image.');
        }
      }

      obj = new Backstretch(this, images, options || {});
      $this.data('backstretch', obj);
    });
    
    return returnValues ? returnValues.length === 1 ? returnValues[0] : returnValues : this;
  };

  // If no element is supplied, we'll attach to body
  $.backstretch = function (images, options) {
    // Return the instance
    return $('body')
            .backstretch(images, options)
            .data('backstretch');
  };

  // Custom selector
  $.expr[':'].backstretch = function(elem) {
    return $(elem).data('backstretch') !== undefined;
  };

  /* DEFAULTS
   * ========================= */

  $.fn.backstretch.defaults = {
    duration: 5000                // Amount of time in between slides (if slideshow)
    , transition: 'fade'          // Type of transition between slides
    , transitionDuration: 0       // Duration of transition between slides
    , animateFirst: true          // Animate the transition of first image of slideshow in?
    , alignX: 0.5                 // The x-alignment for the image, can be 'left'|'center'|'right' or any number between 0.0 and 1.0
    , alignY: 0.5                 // The y-alignment for the image, can be 'top'|'center'|'bottom' or any number between 0.0 and 1.0
    , paused: false               // Whether the images should slide after given duration
    , start: 0                    // Index of the first image to show
    , preload: 2                  // How many images preload at a time?
    , preloadSize: 1              // How many images can we preload in parallel?
    , resolutionRefreshRate: 2500 // How long to wait before switching resolution?
    , resolutionChangeRatioThreshold: 0.1 // How much a change should it be before switching resolution?
  };

  /* STYLES
   *
   * Baked-in styles that we'll apply to our elements.
   * In an effort to keep the plugin simple, these are not exposed as options.
   * That said, anyone can override these in their own stylesheet.
   * ========================= */
  var styles = {
    wrap: {
      left: 0
      , top: 0
      , overflow: 'hidden'
      , margin: 0
      , padding: 0
      , height: '100%'
      , width: '100%'
      , zIndex: -999999
    }
    , itemWrapper: {
      position: 'absolute'
      , display: 'none'
      , margin: 0
      , padding: 0
      , border: 'none'
      , width: '100%'
      , height: '100%'
      , zIndex: -999999
    }
    , item: {
      position: 'absolute'
      , margin: 0
      , padding: 0
      , border: 'none'
      , width: '100%'
      , height: '100%'
      , maxWidth: 'none'
    }
  };

  /* Given an array of different options for an image,
   * choose the optimal image for the container size.
   *
   * Given an image template (a string with {{ width }} and/or
   * {{height}} inside) and a container object, returns the
   * image url with the exact values for the size of that
   * container.
   *
   * Returns an array of urls optimized for the specified resolution.
   *
   */
  var optimalSizeImages = (function () {

    /* Sorts the array of image sizes based on width */
    var widthInsertSort = function (arr) {
      for (var i = 1; i < arr.length; i++) {
        var tmp = arr[i],
            j = i;
        while (arr[j - 1] && parseInt(arr[j - 1].width, 10) > parseInt(tmp.width, 10)) {
          arr[j] = arr[j - 1];
          --j;
        }
        arr[j] = tmp;
      }

      return arr;
    };

    /* Given an array of various sizes of the same image and a container width,
     * return the best image.
     */
    var selectBest = function (containerWidth, containerHeight, imageSizes) {

      var devicePixelRatio = window.devicePixelRatio || 1;
      var deviceOrientation = getDeviceOrientation();
      var windowOrientation = getWindowOrientation();
      var wrapperOrientation = (containerHeight > containerWidth) ?
        'portrait' :
        (containerWidth > containerHeight ? 'landscape' : 'square');

      var lastAllowedImage = 0;
      var testWidth;

      for (var j = 0, image; j < imageSizes.length; j++) {

          image = imageSizes[j];

          // In case a new image was pushed in, process it:
          if (typeof image === 'string') {
              image = imageSizes[j] = { url: image };
          }

          if (image.pixelRatio && image.pixelRatio !== 'auto' && parseFloat(image.pixelRatio) !== devicePixelRatio) {
              // We disallowed choosing this image for current device pixel ratio,
              // So skip this one.
              continue;
          }

          if (image.deviceOrientation && image.deviceOrientation !== deviceOrientation) {
              // We disallowed choosing this image for current device orientation,
              // So skip this one.
              continue;
          }

          if (image.windowOrientation && image.windowOrientation !== deviceOrientation) {
              // We disallowed choosing this image for current window orientation,
              // So skip this one.
              continue;
          }

          if (image.orientation && image.orientation !== wrapperOrientation) {
              // We disallowed choosing this image for current element's orientation,
              // So skip this one.
              continue;
          }

          // Mark this one as the last one we investigated
          // which does not violate device pixel ratio rules.
          // We may choose this one later if there's no match.
          lastAllowedImage = j;

          // For most images, we match the specified width against element width,
          // And enforcing a limit depending on the "pixelRatio" property if specified.
          // But if a pixelRatio="auto", then we consider the width as the physical width of the image,
          // And match it while considering the device's pixel ratio.
          testWidth = containerWidth;
          if (image.pixelRatio === 'auto') {
              containerWidth *= devicePixelRatio;
          }

          // Stop when the width of the image is larger or equal to the container width
          if (image.width >= testWidth) {
              break;
          }
      }

      // Use the image located at where we stopped
      return imageSizes[Math.min(j, lastAllowedImage)];
    };
    
    var replaceTagsInUrl = function (url, templateReplacer) {
        
        if (typeof url === 'string') {
            url = url.replace(/{{(width|height)}}/g, templateReplacer);
        } else if (url instanceof Array) {
            for (var i = 0; i < url.length; i++) {
                if (url[i].src) {
                    url[i].src = replaceTagsInUrl(url[i].src, templateReplacer);
                } else {
                    url[i] = replaceTagsInUrl(url[i], templateReplacer);
                }
            }
        }
        
        return url;
    };

    return function ($container, images) {
      var containerWidth = $container.width(),
          containerHeight = $container.height();

      var chosenImages = [];

      var templateReplacer = function (match, key) {
        if (key === 'width') {
          return containerWidth;
        }
        if (key === 'height') {
          return containerHeight;
        }
        return match;
      };

      for (var i = 0; i < images.length; i++) {
        if ($.isArray(images[i])) {
          images[i] = widthInsertSort(images[i]);
          var chosen = selectBest(containerWidth, containerHeight, images[i]);
          chosenImages.push(chosen);
        } else {
          // In case a new image was pushed in, process it:
          if (typeof images[i] === 'string') {
              images[i] = { url: images[i] };
          }

          var item = $.extend({}, images[i]);
          item.url = replaceTagsInUrl(item.url, templateReplacer);
          chosenImages.push(item);
        }
      }
      return chosenImages;
    };

  })();
  
  var isVideoSource = function (source) {
    return YOUTUBE_REGEXP.test(source.url) || source.isVideo;
  };

  /* Preload images */
  var preload = (function (sources, startAt, count, batchSize, callback) {
    // Plugin cache
    var cache = [];

    // Wrapper for cache
    var caching = function(image){
      for (var i = 0; i < cache.length; i++) {
        if (cache[i].src === image.src) {
          return cache[i];
        }
      }
      cache.push(image);
      return image;
    };

    // Execute callback
    var exec = function(sources, callback, last){
      if (typeof callback === 'function') {
        callback.call(sources, last);
      }
    };

    // Closure to hide cache
    return function preload (sources, startAt, count, batchSize, callback){
      // Check input data
      if (typeof sources === 'undefined') {
        return;
      }
      if (!$.isArray(sources)) {
        sources = [sources];
      }

      if (arguments.length < 5 && typeof arguments[arguments.length - 1] === 'function') {
        callback = arguments[arguments.length - 1];
      }

      startAt = (typeof startAt === 'function' || !startAt) ? 0 : startAt;
      count = (typeof count === 'function' || !count || count < 0) ? sources.length : Math.min(count, sources.length);
      batchSize = (typeof batchSize === 'function' || !batchSize) ? 1 : batchSize;

      if (startAt >= sources.length) {
          startAt = 0;
          count = 0;
      }
      if (batchSize < 0) {
          batchSize = count;
      }
      batchSize = Math.min(batchSize, count);

      var next = sources.slice(startAt + batchSize, count - batchSize);
      sources = sources.slice(startAt, batchSize);
      count = sources.length;

      // If sources array is empty
      if (!count) {
        exec(sources, callback, true);
        return;
      }

      // Image loading callback
      var countLoaded = 0;

      var loaded = function() {
        countLoaded++;
        if (countLoaded !== count) {
          return;
        }

        exec(sources, callback, !next);
        preload(next, 0, 0, batchSize, callback);
      };

      // Loop sources to preload
      var image;

      for (var i = 0; i < sources.length; i++) {
        
        if (isVideoSource(sources[i])) {
          
          // Do not preload videos. There are issues with that.
          // First - we need to keep an instance of the preloaded and use that exactly, not a copy.
          // Second - there are memory issues.
          // If there will be a requirement from users - I'll try to implement this.

          continue;
            
        } else {
      
          image = new Image();
          image.src = sources[i].url;

          image = caching(image);

          if (image.complete) {
            loaded();
          } else {
            $(image).on('load error', loaded);
          }
            
        }
        
      }
    };
  })();

  /* Process images array */
  var processImagesArray = function (images) {
    var processed = [];
    for (var i = 0; i < images.length; i++) {
      if (typeof images[i] === 'string') {
        processed.push({ url: images[i] });
      }
      else if ($.isArray(images[i])) {
        processed.push(processImagesArray(images[i]));
      }
      else {
        processed.push(processOptions(images[i]));
      }
    }
    return processed;
  };

  /* Process options */
  var processOptions = function (options, required) {

    // Convert old options

    // centeredX/centeredY are deprecated
    if (options.centeredX || options.centeredY) {
      if (window.console && window.console.log) {
        window.console.log('jquery.backstretch: `centeredX`/`centeredY` is deprecated, please use `alignX`/`alignY`');
      }
      if (options.centeredX) {
        options.alignX = 0.5;
      }
      if (options.centeredY) {
        options.alignY = 0.5;
      }
    }

    // Deprecated spec
    if (options.speed !== undefined) {

      if (window.console && window.console.log) {
        window.console.log('jquery.backstretch: `speed` is deprecated, please use `transitionDuration`');
      }

      options.transitionDuration = options.speed;
      options.transition = 'fade';
    }

    // Typo
    if (options.resolutionChangeRatioTreshold !== undefined) {
      window.console.log('jquery.backstretch: `treshold` is a typo!');
      options.resolutionChangeRatioThreshold = options.resolutionChangeRatioTreshold;
    }

    // Current spec that needs processing

    if (options.fadeFirst !== undefined) {
      options.animateFirst = options.fadeFirst;
    }

    if (options.fade !== undefined) {
      options.transitionDuration = options.fade;
      options.transition = 'fade';
    }

    if (options.scale) {
      options.scale = validScale(options.scale);
    }
    
    return processAlignOptions(options);
  };

  /* Process align options */
  var processAlignOptions = function (options, required) {
    if (options.alignX === 'left') {
      options.alignX = 0.0;
    }
    else if (options.alignX === 'center') {
      options.alignX = 0.5;
    }
    else if (options.alignX === 'right') {
      options.alignX = 1.0;
    }
    else {
      if (options.alignX !== undefined || required) {
        options.alignX = parseFloat(options.alignX);
        if (isNaN(options.alignX)) {
          options.alignX = 0.5;
        }
      }
    }

    if (options.alignY === 'top') {
      options.alignY = 0.0;
    }
    else if (options.alignY === 'center') {
      options.alignY = 0.5;
    }
    else if (options.alignY === 'bottom') {
      options.alignY = 1.0;
    }
    else {
      if (options.alignX !== undefined || required) {
        options.alignY = parseFloat(options.alignY);
        if (isNaN(options.alignY)) {
          options.alignY = 0.5;
        }
      }
    }

    return options;
  };

  var SUPPORTED_SCALE_OPTIONS = {
      'cover': 'cover',
      'fit': 'fit',
      'fit-smaller': 'fit-smaller',
      'fill': 'fill'
  };
  
  function validScale(scale) {
    if (!SUPPORTED_SCALE_OPTIONS.hasOwnProperty(scale)) {
      return 'cover';
    }
    return scale;
  }
  
  /* CLASS DEFINITION
   * ========================= */
  var Backstretch = function (container, images, options) {
    this.options = $.extend({}, $.fn.backstretch.defaults, options || {});

    this.firstShow = true;

    // Process options
    processOptions(this.options, true);

    /* In its simplest form, we allow Backstretch to be called on an image path.
     * e.g. $.backstretch('/path/to/image.jpg')
     * So, we need to turn this back into an array.
     */
    this.images = processImagesArray($.isArray(images) ? images : [images]);

    /**
     * Paused-Option
     */
    if (this.options.paused) {
        this.paused = true;
    }

    /**
     * Start-Option (Index)
     */
    if (this.options.start >= this.images.length)
    {
        this.options.start = this.images.length - 1;
    }
    if (this.options.start < 0)
    {
        this.options.start = 0;
    }

    // Convenience reference to know if the container is body.
    this.isBody = container === document.body;

    /* We're keeping track of a few different elements
     *
     * Container: the element that Backstretch was called on.
     * Wrap: a DIV that we place the image into, so we can hide the overflow.
     * Root: Convenience reference to help calculate the correct height.
     */
    var $window = $(window);
    this.$container = $(container);
    this.$root = this.isBody ? supportsFixedPosition ? $window : $(document) : this.$container;

    this.originalImages = this.images;
    this.images = optimalSizeImages(
        this.options.alwaysTestWindowResolution ? $window : this.$root, 
        this.originalImages);

    /**
     * Pre-Loading.
     * This is the first image, so we will preload a minimum of 1 images.
     */
    preload(this.images, this.options.start || 0, this.options.preload || 1);

    // Don't create a new wrap if one already exists (from a previous instance of Backstretch)
    var $existing = this.$container.children(".backstretch").first();
    this.$wrap = $existing.length ? $existing : 
        $('<div class="backstretch"></div>')
        .css(this.options.bypassCss ? {} : styles.wrap)
        .appendTo(this.$container);

    if (!this.options.bypassCss) {
        
        // Non-body elements need some style adjustments
        if (!this.isBody) {
          // If the container is statically positioned, we need to make it relative,
          // and if no zIndex is defined, we should set it to zero.
          var position = this.$container.css('position')
            , zIndex = this.$container.css('zIndex');

          this.$container.css({
              position: position === 'static' ? 'relative' : position
            , zIndex: zIndex === 'auto' ? 0 : zIndex
          });

          // Needs a higher z-index
          this.$wrap.css({zIndex: -999998});
        }

        // Fixed or absolute positioning?
        this.$wrap.css({
            position: this.isBody && supportsFixedPosition ? 'fixed' : 'absolute'
        });
    
    }

    // Set the first image
    this.index = this.options.start;
    this.show(this.index);

    // Listen for resize
    $window.on('resize.backstretch', $.proxy(this.resize, this))
           .on('orientationchange.backstretch', $.proxy(function () {
              // Need to do this in order to get the right window height
              if (this.isBody && window.pageYOffset === 0) {
                window.scrollTo(0, 1);
                this.resize();
              }
           }, this));
  };

  var performTransition = function (options) {

    var transition = options.transition || 'fade';

    // Look for multiple options
    if (typeof transition === 'string' && transition.indexOf('|') > -1) {
      transition = transition.split('|');
    }

    if (transition instanceof Array) {
      transition = transition[Math.round(Math.random() * (transition.length - 1))];
    }
    
    var $new = options['new'];
    var $old = options['old'] ? options['old'] : $([]);

    switch (transition.toString().toLowerCase()) {

      default:
      case 'fade':
        $new.fadeIn({
          duration: options.duration,
          complete: options.complete,
          easing: options.easing || undefined
        });
        break;
        
      case 'fadeinout':
      case 'fade_in_out':
            
        var fadeInNew = function () {
            $new.fadeIn({
              duration: options.duration / 2,
              complete: options.complete,
              easing: options.easing || undefined
            });
        };
        
        if ($old.length) {
            $old.fadeOut({
              duration: options.duration / 2,
              complete: fadeInNew,
              easing: options.easing || undefined
            });
        } else {
            fadeInNew();
        }
        
        break;

      case 'pushleft':
      case 'push_left':
      case 'pushright':
      case 'push_right':
      case 'pushup':
      case 'push_up':
      case 'pushdown':
      case 'push_down':
      case 'coverleft':
      case 'cover_left':
      case 'coverright':
      case 'cover_right':
      case 'coverup':
      case 'cover_up':
      case 'coverdown':
      case 'cover_down':

        var transitionParts = transition.match(/^(cover|push)_?(.*)$/);

        var animProp = transitionParts[2] === 'left' ? 'right' :
            transitionParts[2] === 'right' ? 'left' :
                transitionParts[2] === 'down' ? 'top' :
                    transitionParts[2] === 'up' ? 'bottom' :
                        'right';

        var newCssStart = {
          'display': ''
        }, newCssAnim = {};
        newCssStart[animProp] = '-100%';
        newCssAnim[animProp] = 0;

        $new
            .css(newCssStart)
            .animate(newCssAnim, {
              duration: options.duration,
              complete: function () {
                $new.css(animProp, '');
                options.complete.apply(this, arguments);
              },
              easing: options.easing || undefined
            });

        if (transitionParts[1] === 'push' && $old.length) {
            var oldCssAnim = {};
            oldCssAnim[animProp] = '100%';

            $old
                .animate(oldCssAnim, {
                  duration: options.duration,
                  complete: function () {
                    $old.css('display', 'none');
                  },
                  easing: options.easing || undefined
                });
        }

        break;
    }

  };

  /* PUBLIC METHODS
   * ========================= */
  Backstretch.prototype = {

      resize: function () {
        try {

          // Check for a better suited image after the resize
          var $resTest = this.options.alwaysTestWindowResolution ? $(window) : this.$root;
          var newContainerWidth = $resTest.width();
          var newContainerHeight = $resTest.height();
          var changeRatioW = newContainerWidth / (this._lastResizeContainerWidth || 0);
          var changeRatioH = newContainerHeight / (this._lastResizeContainerHeight || 0);
          var resolutionChangeRatioThreshold = this.options.resolutionChangeRatioThreshold || 0.0;

          // check for big changes in container size
          if ((newContainerWidth !== this._lastResizeContainerWidth ||
               newContainerHeight !== this._lastResizeContainerHeight) &&
              ((Math.abs(changeRatioW - 1) >= resolutionChangeRatioThreshold || isNaN(changeRatioW)) ||
              (Math.abs(changeRatioH - 1) >= resolutionChangeRatioThreshold || isNaN(changeRatioH)))) {

            this._lastResizeContainerWidth = newContainerWidth;
            this._lastResizeContainerHeight = newContainerHeight;

            // Big change: rebuild the entire images array
            this.images = optimalSizeImages($resTest, this.originalImages);

            // Preload them (they will be automatically inserted on the next cycle)
            if (this.options.preload) {
              preload(this.images, (this.index + 1) % this.images.length, this.options.preload);
            }

            // In case there is no cycle and the new source is different than the current
            if (this.images.length === 1 &&
                this._currentImage.url !== this.images[0].url) {

              // Wait a little an update the image being showed
              var that = this;
              clearTimeout(that._selectAnotherResolutionTimeout);
              that._selectAnotherResolutionTimeout = setTimeout(function () {
                that.show(0);
              }, this.options.resolutionRefreshRate);
            }
          }

          var bgCSS = {left: 0, top: 0, right: 'auto', bottom: 'auto'}
          
            , boxWidth = this.isBody ? this.$root.width() : this.$root.innerWidth()
            , boxHeight = this.isBody ? ( window.innerHeight ? window.innerHeight : this.$root.height() ) : this.$root.innerHeight()
            
            , naturalWidth = this.$itemWrapper.data('width')
            , naturalHeight = this.$itemWrapper.data('height')
            
            , ratio = (naturalWidth / naturalHeight) || 1
                    
            , alignX = this._currentImage.alignX === undefined ? this.options.alignX : this._currentImage.alignX
            , alignY = this._currentImage.alignY === undefined ? this.options.alignY : this._currentImage.alignY
            , scale = validScale(this._currentImage.scale || this.options.scale);
          
          var width, height;
                
          if (scale === 'fit' || scale === 'fit-smaller') {
            width = naturalWidth;
            height = naturalHeight;
            
            if (width > boxWidth || 
                height > boxHeight || 
                scale === 'fit-smaller') {
              var boxRatio = boxWidth / boxHeight;
              if (boxRatio > ratio) {
                width = Math.floor(boxHeight * ratio);
                height = boxHeight;
              } else if (boxRatio < ratio) {
                width = boxWidth;
                height = Math.floor(boxWidth / ratio);
              } else {
                width = boxWidth;
                height = boxHeight;
              }
            }
          } else if (scale === 'fill') {
            width = boxWidth;
            height = boxHeight;
          } else { // 'cover'
            width = Math.max(boxHeight * ratio, boxWidth);
            height = Math.max(width / ratio, boxHeight);
          }
          
          // Make adjustments based on image ratio
          bgCSS.top = -(height - boxHeight) * alignY;
          bgCSS.left = -(width - boxWidth) * alignX;
          bgCSS.width = width;
          bgCSS.height = height;
          
          if (!this.options.bypassCss) {

            this.$wrap
                .css({width: boxWidth, height: boxHeight})
                .find('>.backstretch-item').not('.deleteable')
                .each(function () {
                  var $wrapper = $(this);
                  $wrapper.find('img,video,iframe')
                          .css(bgCSS);
                });
          }

          var evt = $.Event('backstretch.resize', {
                      relatedTarget: this.$container[0]
                    });
          this.$container.trigger(evt, this);
          
        } catch(err) {
            // IE7 seems to trigger resize before the image is loaded.
            // This try/catch block is a hack to let it fail gracefully.
        }

        return this;
      }

      // Show the slide at a certain position
    , show: function (newIndex, overrideOptions) {

        // Validate index
        if (Math.abs(newIndex) > this.images.length - 1) {
          return;
        }

        // Vars
        var that = this
          , $oldItemWrapper = that.$wrap.find('>.backstretch-item').addClass('deleteable')
          , oldVideoWrapper = that.videoWrapper
          , evtOptions = { relatedTarget: that.$container[0] };

        // Trigger the "before" event
        that.$container.trigger($.Event('backstretch.before', evtOptions), [that, newIndex]);

        // Set the new frame index
        this.index = newIndex;
        var selectedImage = that.images[newIndex];

        // Pause the slideshow
        clearTimeout(that._cycleTimeout);

        // New image

        delete that.videoWrapper; // Current item may not be a video

        var isVideo = isVideoSource(selectedImage);
        if (isVideo) {
          that.videoWrapper = new VideoWrapper(selectedImage);
          that.$item = that.videoWrapper.$video.css('pointer-events', 'none');
        } else {
          that.$item = $('<img />');
        }

        that.$itemWrapper = $('<div class="backstretch-item">')
            .append(that.$item);

        if (this.options.bypassCss) {
            that.$itemWrapper.css({
              'display': 'none'
            });
        } else {
          that.$itemWrapper.css(styles.itemWrapper);
          that.$item.css(styles.item);
        }

        that.$item.bind(isVideo ? 'canplay' : 'load', function (e) {
            var $this = $(this)
              , $wrapper = $this.parent()
              , options = $wrapper.data('options');
              
            if (overrideOptions) {
              options = $.extend({}, options, overrideOptions);
            }

            var imgWidth = this.naturalWidth || this.videoWidth || this.width
              , imgHeight = this.naturalHeight || this.videoHeight || this.height;

            // Save the natural dimensions
            $wrapper
                .data('width', imgWidth)
                .data('height', imgHeight);

            var getOption = function (opt) {
              return options[opt] !== undefined ?
                options[opt] :
                that.options[opt];
            };

            var transition = getOption('transition');
            var transitionEasing = getOption('transitionEasing');
            var transitionDuration = getOption('transitionDuration');

            // Show the image, then delete the old one
            var bringInNextImage = function () {
              
              if (oldVideoWrapper) {
                oldVideoWrapper.stop();
                oldVideoWrapper.destroy();
              }
              
              $oldItemWrapper.remove();

              // Resume the slideshow
              if (!that.paused && that.images.length > 1) {
                that.cycle();
              }

              // Now we can clear the background on the element, to spare memory
              if (!that.options.bypassCss && !that.isBody) {
                that.$container.css('background-image', 'none');
              }

              // Trigger the "after" and "show" events
              // "show" is being deprecated
              $(['after', 'show']).each(function () {
                that.$container.trigger($.Event('backstretch.' + this, evtOptions), [that, newIndex]);
              });
              
              if (isVideo) {
                that.videoWrapper.play();
              }
            };

            if ((that.firstShow && !that.options.animateFirst) || !transitionDuration || !transition) {
                // Avoid transition on first show or if there's no transitionDuration value
                $wrapper.show();
                bringInNextImage();
            } else {

                performTransition({
                    'new': $wrapper,
                    old: $oldItemWrapper,
                    transition: transition,
                    duration: transitionDuration,
                    easing: transitionEasing,
                    complete: bringInNextImage
                });

            }

            that.firstShow = false;

            // Resize
            that.resize();
        });

        that.$itemWrapper.appendTo(that.$wrap);

        that.$item.attr('alt', selectedImage.alt || '');
        that.$itemWrapper.data('options', selectedImage);

        if (!isVideo) {
          that.$item.attr('src', selectedImage.url);
        }
        
        that._currentImage = selectedImage;

        return that;
      }

    , current: function () {
        return this.index;
      }

    , next: function () {
        var args = Array.prototype.slice.call(arguments, 0);
        args.unshift(this.index < this.images.length - 1 ? this.index + 1 : 0);
        return this.show.apply(this, args);
      }

    , prev: function () {
        var args = Array.prototype.slice.call(arguments, 0);
        args.unshift(this.index === 0 ? this.images.length - 1 : this.index - 1);
        return this.show.apply(this, args);
      }

    , pause: function () {
        // Pause the slideshow
        this.paused = true;
        
        if (this.videoWrapper) {
          this.videoWrapper.pause();
        }
        
        return this;
      }

    , resume: function () {
        // Resume the slideshow
        this.paused = false;
        
        if (this.videoWrapper) {
          this.videoWrapper.play();
        }
        
        this.cycle();
        return this;
      }

    , cycle: function () {
        // Start/resume the slideshow
        if(this.images.length > 1) {
          // Clear the timeout, just in case
          clearTimeout(this._cycleTimeout);

          var duration = (this._currentImage && this._currentImage.duration) || this.options.duration;
          var isVideo = isVideoSource(this._currentImage);
          
          var callNext = function () {
            this.$item.off('.cycle');
            
            // Check for paused slideshow
            if (!this.paused) {
              this.next();
            }
          };

          // Special video handling
          if (isVideo) {

            // Leave video at last frame
            if (!this._currentImage.loop) {
              var lastFrameTimeout = 0;

              this.$item
                .on('playing.cycle', function () {
                  var player = $(this).data('player');

                  clearTimeout(lastFrameTimeout);
                  lastFrameTimeout = setTimeout(function () {
                    player.pause();
                    player.$video.trigger('ended');
                  }, (player.getDuration() - player.getCurrentTime()) * 1000);
                })
                .on('ended.cycle', function () {
                  clearTimeout(lastFrameTimeout);
                });
            }

            // On error go to next
            this.$item.on('error.cycle initerror.cycle', $.proxy(callNext, this));
          }

          if (isVideo && !this._currentImage.duration) {
            // It's a video - playing until end
            this.$item.on('ended.cycle', $.proxy(callNext, this));
            
          } else {
            // Cycling according to specified duration
            this._cycleTimeout = setTimeout($.proxy(callNext, this), duration);
          }
          
        }
        return this;
      }

    , destroy: function (preserveBackground) {
        // Stop the resize events
        $(window).off('resize.backstretch orientationchange.backstretch');

        // Stop any videos
        if (this.videoWrapper) {
          this.videoWrapper.destroy();
        }
        
        // Clear the timeout
        clearTimeout(this._cycleTimeout);

        // Remove Backstretch
        if(!preserveBackground) {
          this.$wrap.remove();
        }
        this.$container.removeData('backstretch');
      }
  };
    
 /**
  * Video Abstraction Layer
  *
  * Static methods:
  * > VideoWrapper.loadYoutubeAPI() -> Call in order to load the Youtube API. 
  *                                   An 'youtube_api_load' event will be triggered on $(window) when the API is loaded.
  *
  * Generic:
  * > player.type -> type of the video
  * > player.video / player.$video -> contains the element holding the video
  * > player.play() -> plays the video
  * > player.pause() -> pauses the video
  * > player.setCurrentTime(position) -> seeks to a position by seconds
  * 
  * Youtube:
  * > player.ytId will contain the youtube ID if the source is a youtube url
  * > player.ytReady is a flag telling whether the youtube source is ready for playback
  * */

  var VideoWrapper = function () { this.init.apply(this, arguments); };

  /**
   * @param {Object} options
   * @param {String|Array<String>|Array<{{src: String, type: String?}}>} options.url
   * @param {Boolean} options.loop=false
   * @param {Boolean?} options.mute=true
   * @param {String?} options.poster
   * loop, mute, poster
   */
  VideoWrapper.prototype.init = function (options) {

    var that = this;
    
    var $video;

    var setVideoElement = function () {
      that.$video = $video;
      that.video = $video[0];
    };
    
    // Determine video type
    
    var videoType = 'video';
    
    if (!(options.url instanceof Array) &&
      YOUTUBE_REGEXP.test(options.url)) {
      videoType = 'youtube';
    }
    
    that.type = videoType;

    if (videoType === 'youtube') {

      // Try to load the API in the meantime
      VideoWrapper.loadYoutubeAPI();

      that.ytId = options.url.match(YOUTUBE_REGEXP)[2];
      var src = 'https://www.youtube.com/embed/' + that.ytId +
        '?rel=0&autoplay=0&showinfo=0&controls=0&modestbranding=1' +
        '&cc_load_policy=0&disablekb=1&iv_load_policy=3&loop=0' +
        '&enablejsapi=1&origin=' + encodeURIComponent(window.location.origin);

      that.__ytStartMuted = !!options.mute || options.mute === undefined;

      $video = $('<iframe />')
        .attr({ 'src_to_load': src })
        .css({ 'border': 0, 'margin': 0, 'padding': 0 })
        .data('player', that);
        
      if (options.loop) {
        $video.on('ended.loop', function () {
          if (!that.__manuallyStopped) {
           that.play();
          }
        });
      }

      that.ytReady = false;

      setVideoElement();

      if (window['YT']) {
        that._initYoutube();
        $video.trigger('initsuccess');
      } else {
        $(window).one('youtube_api_load', function () {
          that._initYoutube();
          $video.trigger('initsuccess');
        });
      }
      
    }
    else {
      // Traditional <video> tag with multiple sources
      
      $video = $('<video>')
        .prop('autoplay', false)
        .prop('controls', false)
        .prop('loop', !!options.loop)
        .prop('muted', !!options.mute || options.mute === undefined)
        
        // Let the first frames be available before playback, as we do transitions
        .prop('preload', 'auto')
        .prop('poster', options.poster || '');
        
      var sources = (options.url instanceof Array) ? options.url : [options.url];

      for (var i = 0; i < sources.length; i++) {
        var sourceItem = sources[i];
        if (typeof(sourceItem) === 'string') {
          sourceItem = { src: sourceItem };
        }
        $('<source>')
          .attr('src', sourceItem.src)
          // Make sure to not specify type if unknown - 
          //   so the browser will try to autodetect.
          .attr('type', sourceItem.type || null)
          .appendTo($video);
      }
      
      if (!$video[0].canPlayType || !sources.length) {
        $video.trigger('initerror');
      } else {
        $video.trigger('initsuccess');
      }

      setVideoElement();
    }

  };

  VideoWrapper.prototype._initYoutube = function () {
    var that = this;
    
    var YT = window['YT'];

    that.$video
      .attr('src', that.$video.attr('src_to_load'))
      .removeAttr('src_to_load');

    // It won't init if it's not in the DOM, so we emulate that
    var hasParent = !!that.$video[0].parentNode;
    if (!hasParent) {
      var $tmpParent = $('<div>').css('display', 'none !important').appendTo(document.body);
      that.$video.appendTo($tmpParent);
    }

    var player = new YT.Player(that.video, {
      events: {
        'onReady': function () {

          if (that.__ytStartMuted) {
            player.mute();
          }

          if (!hasParent) {
            // Restore parent to old state - without interrupting any changes
            if (that.$video[0].parentNode === $tmpParent[0]) {
              that.$video.detach();
            }
            $tmpParent.remove();
          }

          that.ytReady = true;
          that._updateYoutubeSize();
          that.$video.trigger('canplay');
        },
        'onStateChange': function (event) {
          switch (event.data) {
            case YT.PlayerState.PLAYING:
              that.$video.trigger('playing');
              break;
            case YT.PlayerState.ENDED:
              that.$video.trigger('ended');
              break;
            case YT.PlayerState.PAUSED:
              that.$video.trigger('pause');
              break;
            case YT.PlayerState.BUFFERING:
              that.$video.trigger('waiting');
              break;
            case YT.PlayerState.CUED:
              that.$video.trigger('canplay');
              break;
          }
        },
        'onPlaybackQualityChange': function () {
          that._updateYoutubeSize();
          that.$video.trigger('resize');
        },
        'onError': function (err) {
          that.hasError = true;
          that.$video.trigger({ 'type': 'error', 'error': err });
        }
      }
    });

    that.ytPlayer = player;

    return that;
  };    
    
  VideoWrapper.prototype._updateYoutubeSize = function () {
    var that = this;

    switch (that.ytPlayer.getPlaybackQuality() || 'medium') {
      case 'small':
        that.video.videoWidth = 426;
        that.video.videoHeight = 240;
        break;
      case 'medium':
        that.video.videoWidth = 640;
        that.video.videoHeight = 360;
        break;
      default:
      case 'large':
        that.video.videoWidth = 854;
        that.video.videoHeight = 480;
        break;
      case 'hd720':
        that.video.videoWidth = 1280;
        that.video.videoHeight = 720;
        break;
      case 'hd1080':
        that.video.videoWidth = 1920;
        that.video.videoHeight = 1080;
        break;
      case 'highres':
        that.video.videoWidth = 2560;
        that.video.videoHeight = 1440;
        break;
    }

    return that;
  };

  VideoWrapper.prototype.play = function () {
    var that = this;

    that.__manuallyStopped = false;
    
    if (that.type === 'youtube') {
      if (that.ytReady) {
        that.$video.trigger('play');
        that.ytPlayer.playVideo();
      }
    } else {
      that.video.play();
    }

    return that;
  };

  VideoWrapper.prototype.pause = function () {
    var that = this;

    that.__manuallyStopped = false;
    
    if (that.type === 'youtube') {
      if (that.ytReady) {
        that.ytPlayer.pauseVideo();
      }
    } else {
      that.video.pause();
    }

    return that;
  };

  VideoWrapper.prototype.stop = function () {
    var that = this;

    that.__manuallyStopped = true;
    
    if (that.type === 'youtube') {
      if (that.ytReady) {
        that.ytPlayer.pauseVideo();
        that.ytPlayer.seekTo(0);
      }
    } else {
      that.video.pause();
      that.video.currentTime = 0;
    }

    return that;
  };

  VideoWrapper.prototype.destroy = function () {
    var that = this;

    if (that.ytPlayer) {
      that.ytPlayer.destroy();
    }

    that.$video.remove();

    return that;
  };

  VideoWrapper.prototype.getCurrentTime = function (seconds) {
    var that = this;

    if (that.type === 'youtube') {
      if (that.ytReady) {
        return that.ytPlayer.getCurrentTime();
      }
    } else {
      return that.video.currentTime;
    }

    return 0;
  };

  VideoWrapper.prototype.setCurrentTime = function (seconds) {
    var that = this;

    if (that.type === 'youtube') {
      if (that.ytReady) {
        that.ytPlayer.seekTo(seconds, true);
      }
    } else {
      that.video.currentTime = seconds;
    }

    return that;
  };

  VideoWrapper.prototype.getDuration = function () {
    var that = this;

    if (that.type === 'youtube') {
      if (that.ytReady) {
        return that.ytPlayer.getDuration();
      }
    } else {
      return that.video.duration;
    }

    return 0;
  };

  /**
   * This will load the youtube API (if not loaded yet)
   * Use $(window).one('youtube_api_load', ...) to listen for API loaded event
   */
  VideoWrapper.loadYoutubeAPI = function () {
    if (window['YT']) {
      return;
    }
    if (!$('script[src*=www\\.youtube\\.com\\/iframe_api]').length) {
      $('<script type="text/javascript" src="https://www.youtube.com/iframe_api">').appendTo('body');
    }
    var ytAPILoadInt = setInterval(function () {
      if (window['YT'] && window['YT'].loaded) {
        $(window).trigger('youtube_api_load');
        clearTimeout(ytAPILoadInt);
      }
    }, 50);
  };

  var getDeviceOrientation = function () {

    if ('matchMedia' in window) {
      if (window.matchMedia("(orientation: portrait)").matches) {
         return 'portrait';
      } else if (window.matchMedia("(orientation: landscape)").matches) {
         return 'landscape';
      }
    }

    if (screen.height > screen.width) {
      return 'portrait';
    }

    // Even square devices have orientation,
    //   but a desktop browser may be too old for `matchMedia`.
    // Defaulting to `landscape` for the VERY rare case of a square desktop screen is good enough.
    return 'landscape';
  };

  var getWindowOrientation = function () {
    if (window.innerHeight > window.innerWidth) {
      return 'portrait';
    }
    if (window.innerWidth > window.innerHeight) {
      return 'landscape';
    }

    return 'square';
  };

  /* SUPPORTS FIXED POSITION?
   *
   * Based on code from jQuery Mobile 1.1.0
   * http://jquerymobile.com/
   *
   * In a nutshell, we need to figure out if fixed positioning is supported.
   * Unfortunately, this is very difficult to do on iOS, and usually involves
   * injecting content, scrolling the page, etc.. It's ugly.
   * jQuery Mobile uses this workaround. It's not ideal, but works.
   *
   * Modified to detect IE6
   * ========================= */

  var supportsFixedPosition = (function () {
    var ua = navigator.userAgent
      , platform = navigator.platform
        // Rendering engine is Webkit, and capture major version
      , wkmatch = ua.match( /AppleWebKit\/([0-9]+)/ )
      , wkversion = !!wkmatch && wkmatch[ 1 ]
      , ffmatch = ua.match( /Fennec\/([0-9]+)/ )
      , ffversion = !!ffmatch && ffmatch[ 1 ]
      , operammobilematch = ua.match( /Opera Mobi\/([0-9]+)/ )
      , omversion = !!operammobilematch && operammobilematch[ 1 ]
      , iematch = ua.match( /MSIE ([0-9]+)/ )
      , ieversion = !!iematch && iematch[ 1 ];

    return !(
      // iOS 4.3 and older : Platform is iPhone/Pad/Touch and Webkit version is less than 534 (ios5)
      ((platform.indexOf( "iPhone" ) > -1 || platform.indexOf( "iPad" ) > -1  || platform.indexOf( "iPod" ) > -1 ) && wkversion && wkversion < 534) ||

      // Opera Mini
      (window.operamini && ({}).toString.call( window.operamini ) === "[object OperaMini]") ||
      (operammobilematch && omversion < 7458) ||

      //Android lte 2.1: Platform is Android and Webkit version is less than 533 (Android 2.2)
      (ua.indexOf( "Android" ) > -1 && wkversion && wkversion < 533) ||

      // Firefox Mobile before 6.0 -
      (ffversion && ffversion < 6) ||

      // WebOS less than 3
      ("palmGetResource" in window && wkversion && wkversion < 534) ||

      // MeeGo
      (ua.indexOf( "MeeGo" ) > -1 && ua.indexOf( "NokiaBrowser/8.5.0" ) > -1) ||

      // IE6
      (ieversion && ieversion <= 6)
    );
  }());

}(jQuery, window));
;
(function ($) {
  'use strict';

  Drupal.behaviors.d_p_banner = {
    attach: function (context, settings) {

      $(document).ready(function () {
        d_p_resize_image(true);
        $(window).resize(function () {
          d_p_resize_image(false);
        });
      });

      /**
       * Resize image and vertical align paragraph.
       */
      function d_p_resize_image(fade_in) {
        fade_in = (fade_in == true) ? 500 : 0;
        var $background_image = $('.background-image');
        var $paragraph_settings;
        var url = [];
        var i;
        $background_image.each(function () {
          if (typeof drupalSettings.image_background[$(this).data("id")] !== 'undefined') {
            $paragraph_settings = drupalSettings.image_background[$(this).data("id")];
            url = [];
            for (i = 0; i < $paragraph_settings.length; i++) {
              url[i] = {
                "width": $paragraph_settings[i].width,
                "url": $paragraph_settings[i].url,
                "fade": fade_in,
              };
            }
            
            var container_half_outer = $(this).next('.container-half').outerHeight();
            if (typeof container_half_outer !== 'undefined') {
              $(this).css('height', container_half_outer + 50 + 'px');
            }
            $(this).backstretch([url]);
          }
        });
      }
    }
  };
})(jQuery);
;
window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),i=document.getElementsByTagName("script")[0],n=null;t.type="text/css";t.id="matchmediajs-test";i.parentNode.insertBefore(t,i);n="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle;e={matchMedium:function(e){var i="@media "+e+"{ #matchmediajs-test { width: 1px; } }";if(t.styleSheet){t.styleSheet.cssText=i}else{t.textContent=i}return n.width==="1px"}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}());
;
/*global Drupal, document, jQuery */

(function ($) {
  "use strict";


  Drupal.behaviors.d_lang_dropdown = {
    attach: function (context, settings) {
      $(document).ready(function () {
        var $body = $('body');
        if ($body.hasClass('d-lang-added')) {
          return;
        }
        var  $languageswitcher = $('#block-languageswitcher:not(dropdown)');
        var  $active_lang = $languageswitcher.find("ul li.is-active");
        var  active_lang_code = $active_lang.attr("hreflang");
        var  $div = $("<div>", {
          "class": "active-lang-code dropdown-toggle",
          "aria-haspopup": "false",
          "data-toggle": "dropdown"
        });
        $div.html(active_lang_code);
        $languageswitcher.find(".content").prepend($div);
        $languageswitcher.attr("aria-labelledby", "dropdownMenuLink");
        $languageswitcher.find(".links").addClass("dropdown-menu");
        $languageswitcher.find(".links")
          .prepend("<li>" + $active_lang.first().text() + "</li>");
        $languageswitcher.addClass("dropdown");
        $body.addClass("d-lang-added")
      });
    }
  };
})(jQuery);
;
