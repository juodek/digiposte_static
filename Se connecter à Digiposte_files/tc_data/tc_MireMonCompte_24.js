/*
 * tagContainer Generator v61
 * Copyright Commanders Act
 * https://www.commandersact.com/fr/
 * Generated: 2021-07-08 14:25:27 Europe/Paris
 * ---
 * Version	: 3.00
 * IDTC 	: 24
 * IDS		: 4589
 */
/*!compressed by terser*/ "undefined"==typeof tC&&(void 0!==document.domain&&void 0!==document.referrer||(document=window.document),function(t,e){var n,o=t.document,i=t.location,a=(t.navigator,t.tC,t.$,Array.prototype.push,Array.prototype.slice,Array.prototype.indexOf,Object.prototype.toString),r=(Object.prototype.hasOwnProperty,String.prototype.trim,function(t,e){return new r.fn.init(t,e,n)}),c=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,d=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,s={};r.fn=r.prototype={constructor:r,init:function(t,e,n){var i,a,s;if(!t)return this;if(t.nodeType)return this.context=this[0]=t,this.length=1,this;if("string"==typeof t){if(!(i="<"===t.charAt(0)&&">"===t.charAt(t.length-1)&&t.length>=3?[null,t,null]:c.exec(t))||!i[1]&&e)return!e||e.tC?(e||n).find(t):this.constructor(e).find(t);if(i[1])return s=(e=e instanceof r?e[0]:e)&&e.nodeType?e.ownerDocument||e:o,t=r.parseHTML(i[1],s,!0),d.test(i[1])&&r.isPlainObject(e)&&this.attr.call(t,e,!0),r.merge(this,t);if((a=o.getElementById(i[2]))&&a.parentNode){if(a.id!==i[2])return n.find(t);this.length=1,this[0]=a}return this.context=o,this.selector=t,this}return r.isFunction(t)?n.ready(t):(undefined!==t.selector&&(this.selector=t.selector,this.context=t.context),r.makeArray(t,this))},each:function(t,e){return r.each(this,t,e)},ready:function(t){return r.ready.promise(t),this}},r.fn.init.prototype=r.fn,r.extend=r.fn.extend=function(){var t,e,n,o,i,a,c=arguments[0]||{},d=1,s=arguments.length,u=!1;for("boolean"==typeof c&&(u=c,c=arguments[1]||{},d=2),"object"==typeof c||r.isFunction(c)||(c={}),s===d&&(c=this,--d);d<s;d++)if(null!=(t=arguments[d]))for(e in t)n=c[e],c!==(o=t[e])&&(u&&o&&(r.isPlainObject(o)||(i=r.isArray(o)))?(i?(i=!1,a=n&&r.isArray(n)?n:[]):a=n&&r.isPlainObject(n)?n:{},c[e]=r.extend(u,a,o)):undefined!==o&&(c[e]=o));return c},r.extend({ssl:"https://manager.",randOrd:function(){return Math.round(Math.random())-.5},nodeNames:"abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",rnocache:/<(?:script|object|embed|option|style)/i,rnoshimcache:new RegExp("<(?:"+r.nodeNames+")[\\s/>]","i"),rchecked:/checked\s*(?:[^=]|=\s*.checked.)/i,containersLaunched:{}}),r.extend({inArray:function(t,e,n){var o,i=Array.prototype.indexOf;if(e){if(i)return i.call(e,t,n);for(o=e.length,n=n?n<0?Math.max(0,o+n):n:0;n<o;n++)if(n in e&&e[n]===t)return n}return-1},isFunction:function(t){return"function"===r.type(t)},isArray:Array.isArray||function(t){return"array"===r.type(t)},isWindow:function(t){return null!=t&&t==t.window},isNumeric:function(t){return!isNaN(parseFloat(t))&&isFinite(t)},type:function(t){return null==t?String(t):s[a.call(t)]||"object"},each:function(t,e,n){var o,i=0,a=t.length,c=undefined===a||r.isFunction(t);if(n)if(c){for(o in t)if(!1===e.apply(t[o],n))break}else for(;i<a&&!1!==e.apply(t[i++],n););else if(c){for(o in t)if(!1===e.call(t[o],o,t[o]))break}else for(;i<a&&!1!==e.call(t[i],i,t[i++]););return t},log:function(t,e){try{r.getCookie("tCdebugLib")&&console&&console[e||"log"](t)}catch(t){}}}),r.each("Boolean Number String Function Array Date RegExp Object".split(" "),(function(t,e){s["[object "+e+"]"]=e.toLowerCase()})),n=r(o);r.buildFragment=function(t,e,n){var i,a,c,d=t[0];return e=(e=!(e=e||o).nodeType&&e[0]||e).ownerDocument||e,!(1===t.length&&"string"==typeof d&&d.length<512&&e===o&&"<"===d.charAt(0))||r.rnocache.test(d)||!r.support.checkClone&&r.rchecked.test(d)||!r.support.html5Clone&&r.rnoshimcache.test(d)||(a=!0,c=undefined!==(i=jQuery.fragments[d])),i||(i=e.createDocumentFragment(),r.clean(t,e,i,n),a&&(r.fragments[d]=c&&i)),{fragment:i,cacheable:a}};var u=i.hostname,l=u.split(".");l.length<2||u.match("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")?r.maindomain=u:r.maindomain=l[l.length-2]+"."+l[l.length-1],t.tC=r}(window)),tC.extend({internalvars:void 0!==tC.internalvars?tC.internalvars:{},internalFunctions:void 0!==tC.internalFunctions?tC.internalFunctions:{},privacyVersion:tC.privacyVersion||"",containerVersion:String(3),id_container:String(24),id_site:String(4589),generatorVersion:"1.0.0",dedup_done:void 0!==tC.dedup_done&&tC.dedup_done}),function(){var t={};t.internalvars_4589=void 0!==tC.internalvars_4589?tC.internalvars_4589:{},tC.extend(t)}(),window.tC_4589_24={id_container:String(24),id_site:String(4589),frequency:String(910),containerVersion:String(3),generatorVersion:61},tC.extend({launchTag:function(t,e,n,o,i,a){void 0===a&&(a=0),tC.array_launched_tags.push(e),tC.array_launched_tags_keys.push(t),tC.containersLaunched[o][i].t.push({id:t,label:e,idTpl:n}),window.top.postMessage('TC.EX:{"id":"'+t+'","idc":"'+i+'","idt":"'+n+'","ids":"'+o+'","lb":"'+e.replace(/"/g,'\\"')+'","idtr":"'+a+'"}',"*")}}),void 0===tC.containersLaunched&&(tC.containersLaunched={}),void 0===tC.containersLaunched[4589]&&(tC.containersLaunched[4589]={}),tC.containersLaunched[4589][24]={v:String(3),t:[],g:61},tC.coreReadyStandalone=!0,tC.isDOMReady&&(tC.coreReadyStandalone=!1),tC.domReady=tC.domReady||!1,tC.isDOMReady=tC.isDOMReady||function(){if("complete"==document.readyState||"loaded"==document.readyState)return!0;if("interactive"!=document.readyState)return!1;if(!document.documentElement.doScroll)return!0;try{return document.documentElement.doScroll("left"),!0}catch(t){return!1}},tC.waitingOnDomReadyCallBacks=tC.waitingOnDomReadyCallBacks||[],tC.excuteOnDomReadyCallBacks=tC.excuteOnDomReadyCallBacks||function(){for(var t=0;t<tC.waitingOnDomReadyCallBacks.length;t++)tC.waitingOnDomReadyCallBacks[t]();tC.waitingOnDomReadyCallBacks=[]},tC.onDomReady=tC.onDomReady||function(t){if(this.domReady)t();else{tC.waitingOnDomReadyCallBacks.push(t);var e=!1;document.addEventListener?(e=!0,document.addEventListener("DOMContentLoaded",(function(){document.removeEventListener("DOMContentLoaded",arguments.callee,!1),tC.excuteOnDomReadyCallBacks()}),!1)):document.attachEvent&&(e=!0,document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",arguments.callee),tC.excuteOnDomReadyCallBacks())})),document.documentElement.doScroll&&window==window.top&&function(){if(!tC.domReady){try{document.documentElement.doScroll("left")}catch(t){return void setTimeout(arguments.callee,0)}tC.excuteOnDomReadyCallBacks()}}()),e||(window.onload=tC.excuteOnDomReadyCallBacks)}},!0===tC.coreReadyStandalone&&(tC.isDOMReady()?tC.domReady=!0:tC.onDomReady((function(){tC.domReady=!0}))),function(){"use strict";var t=window.tC;if(null!=t&&!t.cact){window.caReady=window.caReady||[],window.cact=window.cact||function(){window.caReady.push(arguments)},t.cact={};var e=function(t){return"[object Arguments]"===t.toString()||Array.isArray(t)},n=function(){},o=function(e){var o=e.event;if(null!=t.cact[o]){var i=e.callback||n;e._done=!0,t.cact[o](e,i)}else null==o&&(e._done=!0)},i=function(t){var e,n;return"object"==typeof t[1]?(e=t[1],n=t[2]):"function"==typeof t[1]?(e={},n=t[1]):e={},e.event=t[0],null!=n&&(e.callback=n),e};Object.defineProperty(window.caReady,"push",{value:function(t){e(t)&&(t=i(t)),null!=t.event&&(Array.prototype.push.call(window.caReady,t),o(t))}}),t.cact.exec=function(){for(var t=0;t<window.caReady.length;++t){var n=window.caReady[t];n._done||(e(n)&&(n=i(n),window.caReady[t]=n),o(n))}},t.cact.exec()}}(),tC.extend({isCurrentVersion:function(){if(1==tC.bypassBookmarklet)return!0;var t=tC.getCookie("tc_mode_test");return"1"!=t||"1"==t&&!1}}),tC.pixelTrack=tC.pixelTrack||{add:function(t,e){t=t||0,e=e||"img",tC.onDomReady((function(){var n;"iframe"==e?((n=document.createElement(e)).src=t,n.width=1,n.height=1,n.style.display="none",document.body.appendChild(n)):(n=new Image).src=t}))}},tC.tc_hdoc=tC.tc_hdoc||!1,tC.domain||(tC.domain=function(t){t=t>2?t:2;try{this.tc_hdoc=tC.isCrossDomainContext()?window.document:window.top.document;var e=void 0!==this.tc_hdoc.domain&&this.tc_hdoc.domain.toLowerCase().split("."),n=e.length;return n<2||this.tc_hdoc.domain.match("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$")?"":(-1!==["co","com"].indexOf(e[n-2])&&(t+=1),t>n?"":"."+e.slice(n-t,n).join("."))}catch(t){tC.log(["tC.domain error : ",t],"warn")}},tC.isSubdomain=function(t){return t&&"."===t[0]&&(t=t.substr(1,t.length-1)),new RegExp(t+"$").test(tC.tc_hdoc.domain)},tC.isCrossDomainContext=function(){try{return window.top.document,!1}catch(t){return!0}},tC.domain()),tC.setCookie=tC.setCookie||function(t,e,n,o,i,a,r){var c=!1;i||(c=!0,i=tC.domain()),tC.cookieForceSameSite=tC.cookieForceSameSite||"",r=r||tC.cookieForceSameSite;var d=tC.isSubdomain(i);r||(r=d?"Lax":"None"),tC.isCrossDomainContext()&&(r="None"),tC.cookieForceSecure=null!=tC.cookieForceSecure?tC.cookieForceSecure:"0",a=null==a?Boolean(Number(tC.cookieForceSecure)):a,"none"===r.toLowerCase()&&(a=!0);var s=new Date;s.setTime(s.getTime()),n&&(n=1e3*n*60*60*24);var u=new Date(s.getTime()+n),l=!0,p=3;do{var C=t+"="+escape(e)+(n?";expires="+u.toGMTString():"")+(o?";path="+o:";path=/")+(i?";domain="+i:"")+(a?";secure":"")+";SameSite="+r;document.cookie=C,l=-1===document.cookie.indexOf(t+"="),i=tC.domain(p++)}while(c&&l&&i&&d)},tC.getCookie=tC.getCookie||function(t){if(null==t)return"";var e="@$".split("").some((function(e){return-1!==t.indexOf(e)}));t=e?t.replace("$","\\$"):encodeURIComponent(t);var n=new RegExp("(?:^|; )"+t+"=([^;]*)").exec(document.cookie);return n?unescape(n[1]):""},tC.isCookieEnabled=function(){if(navigator.cookieEnabled&&-1===window.navigator.userAgent.indexOf("MSIE"))return!0;document.cookie="tc_cookietest=1;";var t=-1!==document.cookie.indexOf("tc_cookietest=");return document.cookie="tc_cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",t},tC.removeCookie=tC.removeCookie||function(t,e){this.setCookie(t,"",-1,"/",e)},function(){"use strict";var t=window.tC;t.eventTarget=t.eventTarget||{_eventTarget:document.createElement("null"),addEventListener:function(t,e,n){this._eventTarget.addEventListener(t,e,n)},removeEventListener:function(t,e){this._eventTarget.removeEventListener(t,e)},dispatchEvent:function(t){var e;"string"!=typeof t?e=t:(e=document.createEvent("Event")).initEvent(t,!0,!0),this._eventTarget.dispatchEvent(e)}}}(),tC.storage={has:function(){try{return"localStorage"in window&&null!=window.localStorage&&(window.localStorage.setItem("TC_CHECK","1"),window.localStorage.removeItem("TC_CHECK"),!0)}catch(t){return!1}},isAvailable:function(){try{return window.localStorage,!0}catch(t){return!1}},get:function(t){if(this.isAvailable())return window.localStorage.getItem(t)},set:function(t,e){if(this.isAvailable())try{return window.localStorage.setItem(t,e)||!0}catch(t){return!1}},remove:function(t){if(this.isAvailable())return window.localStorage.removeItem(t)||!0},setWithExpiry:function(t,e,n){if(this.isAvailable()){var o=(new Date).getTime(),i=1e3*n*60*60*24,a=JSON.stringify({value:e,expires:o+i});try{window.localStorage.setItem(t,a)}catch(t){}}},getWithExpiry:function(t){if(this.isAvailable()){var e=window.localStorage.getItem(t);if(null==e)return null;var n=(new Date).getTime();return(e=JSON.parse(e)).expires<n?(this.remove(t),null):e.value}}},function(){var t={};t.hitCounter_4589_24=function(){var t=window.tC_4589_24;0==Math.floor(Math.random()*parseInt(t.frequency))&&tC.pixelTrack.add("https://manager.tagcommander.com/utils/hit.php?id="+t.id_container+"&site="+t.id_site+"&version="+t.containerVersion+"&frequency="+t.frequency+"&position="+tC.container_position+"&rand="+Math.random())},tC.extend(t),tC.container_position="undefined"!=typeof tc_container_position?tc_container_position:void 0!==tC.container_position?tC.container_position:0,tC.container_position++,"undefined"!=typeof tc_container_position&&tc_container_position++,tC.hitCounter_4589_24()}(),tC.script={add:function(t,e,n){var o=document.getElementsByTagName("body")[0]||document.getElementsByTagName("script")[0].parentNode,i=document.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,i.charset="utf-8",i.id="tc_script_"+Math.random(),o?(e&&(i.addEventListener?i.addEventListener("load",(function(){e()}),!1):i.onreadystatechange=function(){i.readyState in{loaded:1,complete:1}&&(i.onreadystatechange=null,e())}),n&&"number"==typeof n&&setTimeout((function(){o&&i.parentNode&&o.removeChild(i)}),n),o.insertBefore(i,o.firstChild)):tC.log("tC.script error : the element <script> or <body> is not found ! the file "+t+" is not implemented !","warn")}},tC.bypassBookmarklet=!0,tC.extend({container:{reload:function(){var t=arguments[0];tC.reload_events=!0,tC.container_position=0,tC.containerList&&tC.each(tC.containerList,(function(e,n){"object"==typeof tC["container_"+n]&&"function"==typeof tC["container_"+n].reload&&(tC["container_"+n].reload(t,!0),tC.reload_events=!1)}))}}}),function(){var t={};t.container_4589_24={load:function(t,e){tC.container_position++,tC.hitCounter_4589_24(),this.datalayer(),tC.array_launched_tags=[],tC.array_launched_tags_keys=[],"object"!=typeof t&&(t={}),"boolean"!=typeof e&&(e=!1),void 0===t.exclusions&&(t.exclusions=[]),-1==t.exclusions.indexOf("datastorage")&&this.datastorage(),-1==t.exclusions.indexOf("deduplication")&&this.deduplication(),-1==t.exclusions.indexOf("internalvars")&&this.internalvars(),-1==t.exclusions.indexOf("privacy")&&this.privacy(),-1==t.exclusions.indexOf("eventlisteners")&&this.eventlisteners(),!1!==tC.reload_events&&void 0!==t.events||(t.events={}),tC.each(t.events,(function(t,e){tC.event&&"function"==typeof tC.event[t]&&e.length>0&&(void 0===e[1]?tC.event[t](e[0]):tC.event[t](e[0],e[1]))}))},reload:function(t,e){"boolean"!=typeof e&&(e=!1),e||(tC.container_position=0,tC.reload_events=!0),this.load(arguments[0],!0)},datalayer:function(){"undefined"==typeof tc_vars&&(window.tc_vars=[]);var t="chapitre2|chapitre3|chapitre4|page_type|page_name|xiti_xtn2|xiti_xtn2_accostant|xiti_xtsite|user_id|user_logged|user_statut|user_type|contexte_accostant|version_utilisee|partenaire|type_template|page|xtn2_accostant|step|motif_bascule_manuel|entry_type|chapter1|chapter2|chapter3|new_page_name|user_gender|eligible_guest|guest|user_configurator|pack_demenagement|user_logged_IN|statut_certification_RL|client_id|env_channel|env_template|env_work|langue|nom_site|chapitre1".split("|");for(var e in t)tc_vars.hasOwnProperty(t[e])||(tc_vars[t[e]]="");window.top.postMessage("TC.EX.EXT_VARS.RELOAD","*")},datastorage:function(){window.top.postMessage("TC.EX.DATASTORAGE.RELOAD","*")},deduplication:function(){tC.dedup&&(tC.dedup.LeA=!1,tC.dedup.LeAD=!1,tC.dedup.LeC=!1,tC.dedup.LeCD=!1,tC.dedup.LeV=!1,tC.dedup.LeVD=!1,tC.dedup.FeA=!1,tC.dedup.FeAD=!1,tC.dedup.FeC=!1,tC.dedup.FeCD=!1,tC.dedup.FeV=!1,tC.dedup.FeVD=!1,tC.dedup.AeA=[],tC.dedup.AeC=[],tC.dedup.AeV=[],tC.dedup.init(),tC.dedup.setEventList())},eventlisteners:function(){},internalvars:function(){var t=tC.internalvars_4589_24.listVar;if(t.length>0)for(var e=0;e<t.length;e++)tC.internalvars_4589.initiators["var"+t[e]]();window.top.postMessage("TC.EX.INT_VARS.RELOAD","*")},privacy:function(){tC.privacy&&tC.privacy.init()},init_tc_array_events:function(t){void 0===t&&(t={});var e="event|name|chapter1|chapter2|chapter3|level2|type_clic|optinLaPoste|optinPartenaires|page|xiti_xtn2|hit_type|type|id".split("|");for(var n in e)t.hasOwnProperty(e[n])||(t[e[n]]="");return t}},tC.extend(t),void 0===tC.containerList&&(tC.containerList=[]),tC.containerList.push("4589_24"),window.tc_array_events=tC.container_4589_24.init_tc_array_events([])}(),window.tC4589_24=tC,window.postMessage('TC.EX.CONTAINER:{"id":24,"ids":4589,"v":"3","g":61,"p":'+tC.container_position+',"url":"'+(document.currentScript?document.currentScript.src:"")+'"}',"*");
tC.container_4589_24.datalayer();tC.array_launched_tags=[];tC.array_launched_tags_keys=[];

/*DYNAMIC JS BLOCK 1*/

/*END DYNAMIC JS BLOCK 1*/

/*CUSTOM_JS_BLOCK1*/

/*END_CUSTOM_JS_BLOCK1*/
if(tC.privacyCookieDisallowed){tC.setCookie('TCPID','',-1,'',tC.domain());}
tC.id_site='4589';tC.internalFunctions.tc_function_6=function(str,a,b){return str.replace(new RegExp(a,"g"),b);};
/*VARIABLES_BLOCK*/
tC.internalvars_4589.initiators=tC.internalvars_4589.initiators||{};tC.internalvars_4589_24={listVar:[]}
tC.internalvars_4589.initiators.var285=typeof tC.internalvars_4589.initiators.var285=="function"?tC.internalvars_4589.initiators.var285:function(){tC.internalvars.atconfiglpfrdestkop=tC.internalvars.atconfiglpfrdestkop?tC.internalvars.atconfiglpfrdestkop:"";}
tC.internalvars_4589.initiators.var285();tC.internalvars_4589_24.listVar.push(285);tC.internalvars_4589.initiators.var286=typeof tC.internalvars_4589.initiators.var286=="function"?tC.internalvars_4589.initiators.var286:function(){tC.internalvars.userconnectelpfr=tC.internalvars.userconnectelpfr?tC.internalvars.userconnectelpfr:"";}
tC.internalvars_4589.initiators.var286();tC.internalvars_4589_24.listVar.push(286);tC.internalvars_4589.initiators.var289=typeof tC.internalvars_4589.initiators.var289=="function"?tC.internalvars_4589.initiators.var289:function(){tC.internalvars.boutiqueDesktopPart=tC.internalvars.boutiqueDesktopPart?tC.internalvars.boutiqueDesktopPart:"";}
tC.internalvars_4589.initiators.var289();tC.internalvars_4589_24.listVar.push(289);tC.internalvars_4589.initiators.var290=typeof tC.internalvars_4589.initiators.var290=="function"?tC.internalvars_4589.initiators.var290:function(){tC.internalvars.atconfigIN=tC.internalvars.atconfigIN?tC.internalvars.atconfigIN:"";}
tC.internalvars_4589.initiators.var290();tC.internalvars_4589_24.listVar.push(290);tC.internalvars_4589.initiators.var291=typeof tC.internalvars_4589.initiators.var291=="function"?tC.internalvars_4589.initiators.var291:function(){tC.internalvars.atconfigDigiposte=tC.internalvars.atconfigDigiposte?tC.internalvars.atconfigDigiposte:"";}
tC.internalvars_4589.initiators.var291();tC.internalvars_4589_24.listVar.push(291);tC.internalvars_4589.initiators.var292=typeof tC.internalvars_4589.initiators.var292=="function"?tC.internalvars_4589.initiators.var292:function(){tC.internalvars.atconfiglpfrmobile=tC.internalvars.atconfiglpfrmobile?tC.internalvars.atconfiglpfrmobile:"";}
tC.internalvars_4589.initiators.var292();tC.internalvars_4589_24.listVar.push(292);tC.internalvars_4589.initiators.var293=typeof tC.internalvars_4589.initiators.var293=="function"?tC.internalvars_4589.initiators.var293:function(){tC.internalvars.atconfigeBoutiquePartMobile=tC.internalvars.atconfigeBoutiquePartMobile?tC.internalvars.atconfigeBoutiquePartMobile:"";}
tC.internalvars_4589.initiators.var293();tC.internalvars_4589_24.listVar.push(293);tC.internalvars_4589.initiators.var294=typeof tC.internalvars_4589.initiators.var294=="function"?tC.internalvars_4589.initiators.var294:function(){tC.internalvars.atconfigeBoutiqueProMobile=tC.internalvars.atconfigeBoutiqueProMobile?tC.internalvars.atconfigeBoutiqueProMobile:"";}
tC.internalvars_4589.initiators.var294();tC.internalvars_4589_24.listVar.push(294);tC.internalvars_4589.initiators.var295=typeof tC.internalvars_4589.initiators.var295=="function"?tC.internalvars_4589.initiators.var295:function(){tC.internalvars.boutiqueDesktopPro=tC.internalvars.boutiqueDesktopPro?tC.internalvars.boutiqueDesktopPro:"";}
tC.internalvars_4589.initiators.var295();tC.internalvars_4589_24.listVar.push(295);tC.internalvars_4589.initiators.var296=typeof tC.internalvars_4589.initiators.var296=="function"?tC.internalvars_4589.initiators.var296:function(){tC.internalvars.optinIDN=tC.internalvars.optinIDN?tC.internalvars.optinIDN:"";}
tC.internalvars_4589.initiators.var296();tC.internalvars_4589_24.listVar.push(296);tC.internalvars_4589.initiators.var297=typeof tC.internalvars_4589.initiators.var297=="function"?tC.internalvars_4589.initiators.var297:function(){tC.internalvars.optinDigiPoste=tC.internalvars.optinDigiPoste?tC.internalvars.optinDigiPoste:"";}
tC.internalvars_4589.initiators.var297();tC.internalvars_4589_24.listVar.push(297);tC.internalvars_4589.initiators.var304=typeof tC.internalvars_4589.initiators.var304=="function"?tC.internalvars_4589.initiators.var304:function(){tC.internalvars.accostant=tC.internalvars.accostant?tC.internalvars.accostant:"";}
tC.internalvars_4589.initiators.var304();tC.internalvars_4589_24.listVar.push(304);tC.internalvars_4589.initiators.var306=typeof tC.internalvars_4589.initiators.var306=="function"?tC.internalvars_4589.initiators.var306:function(){tC.internalvars.device=tC.internalvars.device?tC.internalvars.device:"";}
tC.internalvars_4589.initiators.var306();tC.internalvars_4589_24.listVar.push(306);tC.internalvars_4589.initiators.var308=typeof tC.internalvars_4589.initiators.var308=="function"?tC.internalvars_4589.initiators.var308:function(){tC.internalvars.creationAccueil=tC.internalvars.creationAccueil?tC.internalvars.creationAccueil:"";}
tC.internalvars_4589.initiators.var308();tC.internalvars_4589_24.listVar.push(308);tC.internalvars_4589.initiators.var336=typeof tC.internalvars_4589.initiators.var336=="function"?tC.internalvars_4589.initiators.var336:function(){tC.internalvars.statut_RL=tC.internalvars.statut_RL?tC.internalvars.statut_RL:"";}
tC.internalvars_4589.initiators.var336();tC.internalvars_4589_24.listVar.push(336);
/*END_VARIABLES_BLOCK*/


/*DYNAMIC JS BLOCK 2*/

/*END DYNAMIC JS BLOCK 2*/

/*CUSTOM_JS_BLOCK2*/

/*END_CUSTOM_JS_BLOCK2*/
tC.container_4589_24.datastorage();

//----------------------------------------------------




//----

if((tC.internalvars.creationAccueil=='OK')||(tC.internalvars.optinDigiPoste=='OK')){if(tc_vars["env_work"]=='recette'){tC.launchTag(160,'Free input (custom)',26,4589,24,10);(function(d,e,f,g,a,b,c){d._troq||(a=d._troq=function(){a.callTro?a.callTro.apply(a,arguments):a.queue.push(arguments)},a.push=a,a.queue=[],a.version="1.0",b=e.createElement(f),b.async=!0,b.src=g,c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}
(window,document,"script","https://mmtro.com/tro.js"));_troq('session_ttl',1800);_troq('init','6577906-c5daaf53a19d23975c9e1fd9bee04a2a');_troq('tag',{rtgpg:'form',rtgidform:'registration',rtgenv:'particulier'});}}
tC.launchTag(162,'SaleCyle',1361,4589,24,10);try{var __scS=document.createElement("script");__scS.id="tc_script__1";__scS.type="text/javascript";__scS.async=true;__scS.src="https://s.salecycle.com/"+'laposte'+"/bundle.js";document.getElementsByTagName("head")[0].appendChild(__scS);}catch(e){}
if((tc_vars["nom_site"]=='certification_rl'||tc_vars["chapter1"]=='creation')){tC.launchTag(164,'Technique - force tc_events_20',26,4589,24,10);tC.temp=tc_array_events;if(typeof window.tc_events_20!=="undefined"){window.tc_events_20(this,'click',tC.temp);}}
function tc_events_24(tc_elt,tc_id_event,tc_array_events){tc_array_events["id"]=tc_id_event;(function(){var l='event|name|chapter1|chapter2|chapter3|level2|type_clic|optinLaPoste|optinPartenaires|page|xiti_xtn2|hit_type|type|id'.split('|');for(var k in l){if(!tc_array_events.hasOwnProperty(l[k])){tc_array_events[l[k]]='';}}})();if(tc_array_events["id"]=='click'){tC.launchTag('eclick','WEBA AT Internet | Click','-1','4589','24');if(typeof tag!=='undefined'){if(tc_array_events["event"].toLowerCase()=="c"){return tag.click.send({elem:this,name:tc_array_events["name"],chapter1:tc_array_events["chapter1"],chapter2:tc_array_events["chapter2"],chapter3:tc_array_events["chapter3"],level2:document.referrer.indexOf("https://www.laposte.fr/panier")>-1?"111":"2",type:tc_array_events["type_clic"]});}
if(tc_array_events["event"].toLowerCase()=="f"){tag.page.send({name:tc_array_events["name"],chapter1:tc_array_events["chapter1"],chapter2:tc_array_events["chapter2"],chapter3:tc_array_events["chapter3"],level2:document.referrer.indexOf("https://www.laposte.fr/panier")>-1?"111":"2"});tag.identifiedVisitor.set({id:tc_vars["user_id"]});}}}}
tC.onDomReady(function(){tC.container_4589_24.eventlisteners();});