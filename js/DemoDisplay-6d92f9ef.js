import{_ as e,a as t}from"./Upload.vue_vue_type_style_index_0_lang-6f8c50e7.js";import{d as a,k as n,r as s,C as r,N as i,o as l,c as o,b as u,y as c,F as d,g,h as p,n as h,m as f,l as m,u as v,t as y,v as b,_ as x,e as w,w as k,x as F,i as A,I as _,z as $,T as S}from"./index-d39056ad.js";import{_ as C}from"./SubMenu.vue_vue_type_style_index_0_lang-346dfb0a.js";const E={class:"ui-anchor-indicator"},T=a({__name:"Anchor",props:{customClass:{default:"custom-class"},scrollContainer:{type:[Function,null],default:null},affix:{type:Boolean,default:!0}},setup(e){const t=e,{scrollContainer:a,affix:y}=n(t);let b=[];(()=>{let e=[];v().default&&(e=v().default()),b=1===e.length&&e[0].children?e[0].children:e})();const x=s({}),w=s([]),k=s(0),F=s(null);w.value=b.map(((e,t)=>({titleVNode:e,targetOffsetTop:0,targetClientHeight:0,active:0===t,order:t})));const A=()=>{w.value.forEach((e=>{let t;e.titleVNode&&e.titleVNode.props&&(t=document.querySelector(e.titleVNode.props.href),t?(e.targetOffsetTop=t.offsetTop-F.value.offsetTop,e.targetClientHeight=t.clientHeight):(e.targetOffsetTop=0,e.targetClientHeight=0))}))};const _=function(e,t){let a=(new Date).getTime();return()=>{const n=(new Date).getTime();n-a>=t&&(e(),a=n)}}((function(){A();let e=0;F.value&&(e=F.value.scrollTop),w.value.forEach((t=>{t.targetOffsetTop>=e-t.targetClientHeight&&t.targetOffsetTop<=e+80&&(x.value=t,k.value=t.order),t.active=!1})),x.value.active=!0}),20);return r((()=>{"window"!==a.value()&&a.value()?F.value=a.value():F.value=document.documentElement,A(),x.value=w.value[0],F.value&&F.value.addEventListener("scroll",_)})),i((()=>{F.value.removeEventListener("scroll",_)})),(t,a)=>(l(),o("div",{class:h(["ui-anchor-wrap",{customClass:e.customClass,"ui-anchor-fix":m(y)}])},[u("div",E,[u("span",{class:"anchor-indicator-radius",style:c({top:4+23*k.value+"px"})},null,4)]),(l(!0),o(d,null,g(w.value,(e=>(l(),p(f(e.titleVNode),{key:e.titleVNode,class:h({active:e.active})},null,8,["class"])))),128))],2))}}),j=a({__name:"AnchorLink",props:{title:{default:""},href:null,nested:{type:Boolean,default:!1}},setup(e){const t=e,{href:a}=n(t),s=()=>{a.value&&document.querySelector(a.value)&&document.querySelector(a.value).scrollIntoView({behavior:"smooth"})};return(t,a)=>(l(),o("span",{onClick:s,class:h(["ui-anchorLink-title",{"ui-anchorLink-nested":e.nested}])},y(e.title),3))}}),L={class:"ui-divider-wrap"},N={class:"inner"},O=a({__name:"Divider",props:{position:null,leftDistance:{default:"100%"},rightDistance:{default:"100%"}},setup:e=>(t,a)=>(l(),o("div",L,[u("div",{class:h(["left",{positionLeft:"left"===e.position}]),style:c({width:e.position?"8%":e.leftDistance})},null,6),u("div",N,[b(t.$slots,"default")]),u("div",{class:h(["right",{positionRight:"right"===e.position}]),style:c({width:e.position?"8%":e.rightDistance})},null,6)]))}),D={class:"ui-typography-wrap"};var P=x({},[["render",function(e,t){return l(),o("div",D,[b(e.$slots,"default")])}]]);const z=a({__name:"Title",props:{level:{default:4}},setup:e=>(t,a)=>(l(),o("div",{class:h(["ui-typography-title",`level${e.level}`])},[b(t.$slots,"default")],2))}),H={class:"ui-typography-paragraph"};var M=x({},[["render",function(e,t){return l(),o("p",H,[b(e.$slots,"default")])}]]);const q={key:0,class:"nav"},R={class:"title"},I={class:"title-description"},B={class:"example"},Z={class:"example-wrap"},W={key:1,class:"api"},V={class:"apiIntro scroll-container"},U=a({__name:"ComponentContent",props:{navArr:{default:()=>[]},title:null,componentName:null},setup(e){const t=s(null);return(a,n)=>(l(),o("div",{class:"ui-template-wrap scroll-container",ref_key:"wrap",ref:t,id:"display-container-wrap"},[e.navArr[0]?(l(),o("section",q,[w(m(T),{customClass:"customClass",style:{top:"60px",right:"16px"},"scroll-container":()=>t.value},{default:k((()=>[(l(!0),o(d,null,g(e.navArr,(e=>(l(),p(m(j),{key:e.id,href:e.id,title:e.title,nested:e.nested},null,8,["href","title","nested"])))),128))])),_:1},8,["scroll-container"])])):F("",!0),u("section",R,[w(m(z),{level:2,id:`ex-${e.componentName}-title`},{default:k((()=>[A(y(e.title),1)])),_:1},8,["id"]),u("div",I,[b(a.$slots,"intro")])]),u("section",B,[w(m(z),{level:4,class:"demo",id:`ex-${e.componentName}-demo`},{default:k((()=>[A("案例")])),_:1},8,["id"]),u("div",Z,[b(a.$slots,"demo")])]),a.$slots.api?(l(),o("section",W,[w(m(z),{level:4,id:`ex-${e.componentName}-api`},{default:k((()=>[A("接口")])),_:1},8,["id"]),u("div",V,[b(a.$slots,"api")])])):F("",!0)],512))}});var G,J;G={exports:{}},J=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,a=0,n={},s={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof r?new r(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++a}),e.__id},clone:function e(t,a){var n,r;switch(a=a||{},s.util.type(t)){case"Object":if(r=s.util.objId(t),a[r])return a[r];for(var i in n={},a[r]=n,t)t.hasOwnProperty(i)&&(n[i]=e(t[i],a));return n;case"Array":return r=s.util.objId(t),a[r]?a[r]:(n=[],a[r]=n,t.forEach((function(t,s){n[s]=e(t,a)})),n);default:return t}},getLanguage:function(e){for(;e;){var a=t.exec(e.className);if(a)return a[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,a){e.className=e.className.replace(RegExp(t,"gi"),""),e.classList.add("language-"+a)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(n){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(n.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var a in t)if(t[a].src==e)return t[a]}return null}},isActive:function(e,t,a){for(var n="no-"+t;e;){var s=e.classList;if(s.contains(t))return!0;if(s.contains(n))return!1;e=e.parentElement}return!!a}},languages:{plain:n,plaintext:n,text:n,txt:n,extend:function(e,t){var a=s.util.clone(s.languages[e]);for(var n in t)a[n]=t[n];return a},insertBefore:function(e,t,a,n){var r=(n=n||s.languages)[e],i={};for(var l in r)if(r.hasOwnProperty(l)){if(l==t)for(var o in a)a.hasOwnProperty(o)&&(i[o]=a[o]);a.hasOwnProperty(l)||(i[l]=r[l])}var u=n[e];return n[e]=i,s.languages.DFS(s.languages,(function(t,a){a===u&&t!=e&&(this[t]=i)})),i},DFS:function e(t,a,n,r){r=r||{};var i=s.util.objId;for(var l in t)if(t.hasOwnProperty(l)){a.call(t,l,t[l],n||l);var o=t[l],u=s.util.type(o);"Object"!==u||r[i(o)]?"Array"!==u||r[i(o)]||(r[i(o)]=!0,e(o,a,l,r)):(r[i(o)]=!0,e(o,a,null,r))}}},plugins:{},highlightAll:function(e,t){s.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var n={callback:a,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",n),n.elements=Array.prototype.slice.apply(n.container.querySelectorAll(n.selector)),s.hooks.run("before-all-elements-highlight",n);for(var r,i=0;r=n.elements[i++];)s.highlightElement(r,!0===t,n.callback)},highlightElement:function(t,a,n){var r=s.util.getLanguage(t),i=s.languages[r];s.util.setLanguage(t,r);var l=t.parentElement;l&&"pre"===l.nodeName.toLowerCase()&&s.util.setLanguage(l,r);var o={element:t,language:r,grammar:i,code:t.textContent};function u(e){o.highlightedCode=e,s.hooks.run("before-insert",o),o.element.innerHTML=o.highlightedCode,s.hooks.run("after-highlight",o),s.hooks.run("complete",o),n&&n.call(o.element)}if(s.hooks.run("before-sanity-check",o),(l=o.element.parentElement)&&"pre"===l.nodeName.toLowerCase()&&!l.hasAttribute("tabindex")&&l.setAttribute("tabindex","0"),!o.code)return s.hooks.run("complete",o),void(n&&n.call(o.element));if(s.hooks.run("before-highlight",o),o.grammar)if(a&&e.Worker){var c=new Worker(s.filename);c.onmessage=function(e){u(e.data)},c.postMessage(JSON.stringify({language:o.language,code:o.code,immediateClose:!0}))}else u(s.highlight(o.code,o.grammar,o.language));else u(s.util.encode(o.code))},highlight:function(e,t,a){var n={code:e,grammar:t,language:a};if(s.hooks.run("before-tokenize",n),!n.grammar)throw new Error('The language "'+n.language+'" has no grammar.');return n.tokens=s.tokenize(n.code,n.grammar),s.hooks.run("after-tokenize",n),r.stringify(s.util.encode(n.tokens),n.language)},tokenize:function(e,t){var a=t.rest;if(a){for(var n in a)t[n]=a[n];delete t.rest}var s=new o;return u(s,s.head,e),l(e,s,t,s.head,0),function(e){for(var t=[],a=e.head.next;a!==e.tail;)t.push(a.value),a=a.next;return t}(s)},hooks:{all:{},add:function(e,t){var a=s.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=s.hooks.all[e];if(a&&a.length)for(var n,r=0;n=a[r++];)n(t)}},Token:r};function r(e,t,a,n){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length}function i(e,t,a,n){e.lastIndex=t;var s=e.exec(a);if(s&&n&&s[1]){var r=s[1].length;s.index+=r,s[0]=s[0].slice(r)}return s}function l(e,t,a,n,o,d){for(var g in a)if(a.hasOwnProperty(g)&&a[g]){var p=a[g];p=Array.isArray(p)?p:[p];for(var h=0;h<p.length;++h){if(d&&d.cause==g+","+h)return;var f=p[h],m=f.inside,v=!!f.lookbehind,y=!!f.greedy,b=f.alias;if(y&&!f.pattern.global){var x=f.pattern.toString().match(/[imsuy]*$/)[0];f.pattern=RegExp(f.pattern.source,x+"g")}for(var w=f.pattern||f,k=n.next,F=o;k!==t.tail&&!(d&&F>=d.reach);F+=k.value.length,k=k.next){var A=k.value;if(t.length>e.length)return;if(!(A instanceof r)){var _,$=1;if(y){if(!(_=i(w,F,e,v))||_.index>=e.length)break;var S=_.index,C=_.index+_[0].length,E=F;for(E+=k.value.length;S>=E;)E+=(k=k.next).value.length;if(F=E-=k.value.length,k.value instanceof r)continue;for(var T=k;T!==t.tail&&(E<C||"string"==typeof T.value);T=T.next)$++,E+=T.value.length;$--,A=e.slice(F,E),_.index-=F}else if(!(_=i(w,0,A,v)))continue;S=_.index;var j=_[0],L=A.slice(0,S),N=A.slice(S+j.length),O=F+A.length;d&&O>d.reach&&(d.reach=O);var D=k.prev;if(L&&(D=u(t,D,L),F+=L.length),c(t,D,$),k=u(t,D,new r(g,m?s.tokenize(j,m):j,b,j)),N&&u(t,k,N),$>1){var P={cause:g+","+h,reach:O};l(e,t,a,k.prev,F,P),d&&P.reach>d.reach&&(d.reach=P.reach)}}}}}}function o(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function u(e,t,a){var n=t.next,s={value:a,prev:t,next:n};return t.next=s,n.prev=s,e.length++,s}function c(e,t,a){for(var n=t.next,s=0;s<a&&n!==e.tail;s++)n=n.next;t.next=n,n.prev=t,e.length-=s}if(e.Prism=s,r.stringify=function e(t,a){if("string"==typeof t)return t;if(Array.isArray(t)){var n="";return t.forEach((function(t){n+=e(t,a)})),n}var r={type:t.type,content:e(t.content,a),tag:"span",classes:["token",t.type],attributes:{},language:a},i=t.alias;i&&(Array.isArray(i)?Array.prototype.push.apply(r.classes,i):r.classes.push(i)),s.hooks.run("wrap",r);var l="";for(var o in r.attributes)l+=" "+o+'="'+(r.attributes[o]||"").replace(/"/g,"&quot;")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+l+">"+r.content+"</"+r.tag+">"},!e.document)return e.addEventListener?(s.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var a=JSON.parse(t.data),n=a.language,r=a.code,i=a.immediateClose;e.postMessage(s.highlight(r,s.languages[n],n)),i&&e.close()}),!1),s):s;var d=s.util.currentScript();function g(){s.manual||s.highlightAll()}if(d&&(s.filename=d.src,d.hasAttribute("data-manual")&&(s.manual=!0)),!s.manual){var p=document.readyState;"loading"===p||"interactive"===p&&d&&d.defer?document.addEventListener("DOMContentLoaded",g):window.requestAnimationFrame?window.requestAnimationFrame(g):window.setTimeout(g,16)}return s}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{}),G.exports&&(G.exports=J),void 0!==_&&(_.Prism=J),J.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},J.languages.markup.tag.inside["attr-value"].inside.entity=J.languages.markup.entity,J.languages.markup.doctype.inside["internal-subset"].inside=J.languages.markup,J.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(J.languages.markup.tag,"addInlined",{value:function(e,t){var a={};a["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:J.languages[t]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};n["language-"+t]={pattern:/[\s\S]+/,inside:J.languages[t]};var s={};s[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:n},J.languages.insertBefore("markup","cdata",s)}}),Object.defineProperty(J.languages.markup.tag,"addAttribute",{value:function(e,t){J.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:J.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),J.languages.html=J.languages.markup,J.languages.mathml=J.languages.markup,J.languages.svg=J.languages.markup,J.languages.xml=J.languages.extend("markup",{}),J.languages.ssml=J.languages.xml,J.languages.atom=J.languages.xml,J.languages.rss=J.languages.xml,function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var a=e.languages.markup;a&&(a.tag.addInlined("style","css"),a.tag.addAttribute("style","css"))}(J),J.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},J.languages.javascript=J.languages.extend("clike",{"class-name":[J.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),J.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,J.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:J.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:J.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:J.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:J.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:J.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),J.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:J.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),J.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),J.languages.markup&&(J.languages.markup.tag.addInlined("script","javascript"),J.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),J.languages.js=J.languages.javascript,function(){if(void 0!==J&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},t="data-src-status",a="loading",n="loaded",s='pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])';J.hooks.add("before-highlightall",(function(e){e.selector+=", "+s})),J.hooks.add("before-sanity-check",(function(r){var i=r.element;if(i.matches(s)){r.code="",i.setAttribute(t,a);var l=i.appendChild(document.createElement("CODE"));l.textContent="Loading…";var o=i.getAttribute("data-src"),u=r.language;if("none"===u){var c=(/\.(\w+)$/.exec(o)||[,"none"])[1];u=e[c]||c}J.util.setLanguage(l,u),J.util.setLanguage(i,u);var d=J.plugins.autoloader;d&&d.loadLanguages(u),function(e,t,a){var n=new XMLHttpRequest;n.open("GET",e,!0),n.onreadystatechange=function(){4==n.readyState&&(n.status<400&&n.responseText?t(n.responseText):n.status>=400?a("✖ Error "+n.status+" while fetching file: "+n.statusText):a("✖ Error: File does not exist or is empty"))},n.send(null)}(o,(function(e){i.setAttribute(t,n);var a=function(e){var t=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e||"");if(t){var a=Number(t[1]),n=t[2],s=t[3];return n?s?[a,Number(s)]:[a,void 0]:[a,a]}}(i.getAttribute("data-range"));if(a){var s=e.split(/\r\n?|\n/g),r=a[0],o=null==a[1]?s.length:a[1];r<0&&(r+=s.length),r=Math.max(0,Math.min(r-1,s.length)),o<0&&(o+=s.length),o=Math.max(0,Math.min(o,s.length)),e=s.slice(r,o).join("\n"),i.hasAttribute("data-start")||i.setAttribute("data-start",String(r+1))}l.textContent=e,J.highlightElement(l)}),(function(e){i.setAttribute(t,"failed"),l.textContent=e}))}})),J.plugins.fileHighlight={highlight:function(e){for(var t,a=(e||document).querySelectorAll(s),n=0;t=a[n++];)J.highlightElement(t)}};var r=!1;J.fileHighlight=function(){r||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),r=!0),J.plugins.fileHighlight.highlight.apply(this,arguments)}}}();const X=window.Prism,Y=(e,t,a)=>({html:e.__sourceCode,title:e.__sourceTitle,id:`${t}-demo-${a.toString()}`,demo:e}),K=(e,t)=>[...[{id:`#ex-${e}-title`,title:"简介",nested:!1},{id:`#ex-${e}-demo`,title:"案例",nested:!1}],...t.map(((t,a)=>({id:`#${e}-demo-${a}`,title:`${t}`,nested:!0}))),{id:`#ex-${e}-api`,title:"接口",nested:!1}],Q=a({__name:"HideCode",setup:t=>(t,a)=>(l(),p(m(e),{type:"link",style:{padding:"4px 10px"}},{default:k((()=>[w(m(C),{name:"code_hide",height:"1.2em",width:"1.2em",fill:"#00000073"})])),_:1}))}),ee=a({__name:"ShowCode",setup:t=>(t,a)=>(l(),p(m(e),{type:"link",style:{padding:"4px 10px"}},{default:k((()=>[w(m(C),{name:"display",height:"1.2em",width:"1.2em",fill:"#00000073"})])),_:1}))});const te={class:"ui-preview-wrap"},ae={class:"actions"},ne=["innerHTML"],se=a({__name:"Preview",props:{html:{default:""}},setup(a){const r=a,{html:i}=n(r),c=$((()=>{return i.value&&(e=i.value)?X.highlight(e,X.languages.html,"html"):"";var e})),d=s(!1),g=s(null),h=s(null),v=$((()=>d.value?{vNode:Q,key:"hide"}:{vNode:ee,key:"show"})),y=s(0);function b(){y.value+=40,g.value.style.height=`${y.value}px`,y.value<h.value.clientHeight+14&&window.requestAnimationFrame(b)}function x(){y.value-=40,g.value.style.height=`${y.value}px`,y.value>=0&&window.requestAnimationFrame(x)}const A=()=>{d.value=!d.value,d.value&&h.value&&g.value?window.requestAnimationFrame(b):g.value&&window.requestAnimationFrame(x)},_=async()=>{try{await navigator.clipboard.writeText(i.value),t.success("复制成功")}catch(e){t.error("复制失败")}};return(t,a)=>(l(),o("div",te,[u("div",ae,[w(S,{name:"button",mode:"out-in"},{default:k((()=>[(l(),p(f(m(v).vNode),{key:m(v).key,onClick:A}))])),_:1}),w(m(e),{type:"link",onClick:_,style:{padding:"4px 10px"}},{default:k((()=>[w(m(C),{name:"copy",height:"1.2em",width:"1.2em",fill:"#00000073"})])),_:1})]),u("div",{class:"html-show",ref_key:"codeWrapRef",ref:g},[m(i)?(l(),o("pre",{key:0,class:"language-html scroll-container",innerHTML:m(c),ref_key:"codeRef",ref:h},null,8,ne)):F("",!0)],512)]))}});const re={class:"demo-wrap"},ie=["id"],le={class:"item-display-wrap"},oe={class:"item-display"},ue={class:"sourceCode-display"};var ce=x(a({__name:"DemoDisplay",props:{demoArr:null},setup:e=>(t,a)=>(l(),o("div",re,[(l(!0),o(d,null,g(e.demoArr,(e=>(l(),o("div",{key:e.id,class:"demo-wrap-item",id:e.id},[u("section",le,[w(m(O),{leftDistance:"40px"},{default:k((()=>[A(y(e.title),1)])),_:2},1024),u("div",oe,[(l(),p(f(e.demo)))]),u("div",ue,[w(se,{html:e.html},null,8,["html"])])])],8,ie)))),128))]))}),[["__scopeId","data-v-e57c7bae"]]);export{ce as D,M as P,P as T,z as _,U as a,K as b,O as c,j as d,T as e,Y as g};