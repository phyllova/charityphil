/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/core/misc/drupalSettingsLoader.js. */
(function(){var settingsElement=document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');window.drupalSettings={};if(settingsElement!==null)window.drupalSettings=JSON.parse(settingsElement.textContent)})()
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/core/misc/drupalSettingsLoader.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/core/assets/vendor/js-cookie/js.cookie.min.js. */
/*! js-cookie v3.0.1 | MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,function(){var n=e.Cookies,o=e.Cookies=t();o.noConflict=function(){return e.Cookies=n,o}}())}(this,(function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)e[o]=n[o]}return e}return function t(n,o){function r(t,r,i){if("undefined"!=typeof document){"number"==typeof(i=e({},o,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=t+"="+n.write(r,t)+c}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],o={},r=0;r<t.length;r++){var i=t[r].split("="),c=i.slice(1).join("=");try{var u=decodeURIComponent(i[0]);if(o[u]=n.read(c,u),e===u)break}catch(e){}}return e?o[e]:o}},remove:function(t,n){r(t,"",e({},n,{expires:-1}))},withAttributes:function(n){return t(this.converter,e({},this.attributes,n))},withConverter:function(n){return t(e({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(n)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}));

/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/core/assets/vendor/js-cookie/js.cookie.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/libraries/url-search-params-polyfill/index.js. */
(function(self){'use strict';var nativeURLSearchParams=(self.URLSearchParams&&self.URLSearchParams.prototype.get)?self.URLSearchParams:null,isSupportObjectConstructor=nativeURLSearchParams&&(new nativeURLSearchParams({a:1})).toString()==='a=1',decodesPlusesCorrectly=nativeURLSearchParams&&(new nativeURLSearchParams('s=%2B').get('s')==='+'),__URLSearchParams__="__URLSearchParams__",encodesAmpersandsCorrectly=nativeURLSearchParams?(function(){var ampersandTest=new nativeURLSearchParams();ampersandTest.append('s',' &');return ampersandTest.toString()==='s=+%26'})():true,prototype=URLSearchParamsPolyfill.prototype,iterable=!!(self.Symbol&&self.Symbol.iterator);if(nativeURLSearchParams&&isSupportObjectConstructor&&decodesPlusesCorrectly&&encodesAmpersandsCorrectly)return
function URLSearchParamsPolyfill(search){search=search||"";if(search instanceof URLSearchParams||search instanceof URLSearchParamsPolyfill)search=search.toString();this[__URLSearchParams__]=parseToDict(search)};prototype.append=function(name,value){appendTo(this[__URLSearchParams__],name,value)};prototype['delete']=function(name){delete this[__URLSearchParams__][name]};prototype.get=function(name){var dict=this[__URLSearchParams__];return name in dict?dict[name][0]:null};prototype.getAll=function(name){var dict=this[__URLSearchParams__];return name in dict?dict[name].slice(0):[]};prototype.has=function(name){return name in this[__URLSearchParams__]};prototype.set=function set(name,value){this[__URLSearchParams__][name]=[''+value]};prototype.toString=function(){var dict=this[__URLSearchParams__],query=[],i,key,name,value;for(key in dict){name=encode(key);for(i=0,value=dict[key];i<value.length;i++)query.push(name+'='+encode(value[i]))};return query.join('&')};var forSureUsePolyfill=!decodesPlusesCorrectly,useProxy=(!forSureUsePolyfill&&nativeURLSearchParams&&!isSupportObjectConstructor&&self.Proxy);Object.defineProperty(self,'URLSearchParams',{value:(useProxy?new Proxy(nativeURLSearchParams,{construct:function(target,args){return new target((new URLSearchParamsPolyfill(args[0]).toString()))}}):URLSearchParamsPolyfill)});var USPProto=self.URLSearchParams.prototype;USPProto.polyfill=true;USPProto.forEach=USPProto.forEach||function(callback,thisArg){var dict=parseToDict(this.toString());Object.getOwnPropertyNames(dict).forEach(function(name){dict[name].forEach(function(value){callback.call(thisArg,value,name,this)},this)},this)};USPProto.sort=USPProto.sort||function(){var dict=parseToDict(this.toString()),keys=[],k,i,j;for(k in dict)keys.push(k);keys.sort();for(i=0;i<keys.length;i++)this['delete'](keys[i]);for(i=0;i<keys.length;i++){var key=keys[i],values=dict[key];for(j=0;j<values.length;j++)this.append(key,values[j])}};USPProto.keys=USPProto.keys||function(){var items=[];this.forEach(function(item,name){items.push(name)});return makeIterator(items)};USPProto.values=USPProto.values||function(){var items=[];this.forEach(function(item){items.push(item)});return makeIterator(items)};USPProto.entries=USPProto.entries||function(){var items=[];this.forEach(function(item,name){items.push([name,item])});return makeIterator(items)};if(iterable)USPProto[self.Symbol.iterator]=USPProto[self.Symbol.iterator]||USPProto.entries
function encode(str){var replace={'!':'%21',"'":'%27','(':'%28',')':'%29','~':'%7E','%20':'+','%00':'\x00'};return encodeURIComponent(str).replace(/[!'\(\)~]|%20|%00/g,function(match){return replace[match]})}
function decode(str){return str.replace(/[ +]/g,'%20').replace(/(%[a-f0-9]{2})+/ig,function(match){return decodeURIComponent(match)})}
function makeIterator(arr){var iterator={next:function(){var value=arr.shift();return{done:value===undefined,value:value}}};if(iterable)iterator[self.Symbol.iterator]=function(){return iterator};return iterator}
function parseToDict(search){var dict={};if(typeof search==="object"){if(isArray(search)){for(var i=0;i<search.length;i++){var item=search[i];if(isArray(item)&&item.length===2){appendTo(dict,item[0],item[1])}else throw new TypeError("Failed to construct 'URLSearchParams': Sequence initializer must only contain pair elements")}}else for(var key in search)if(search.hasOwnProperty(key))appendTo(dict,key,search[key])}else{if(search.indexOf("?")===0)search=search.slice(1);var pairs=search.split("&");for(var j=0;j<pairs.length;j++){var value=pairs[j],index=value.indexOf('=');if(-1<index){appendTo(dict,decode(value.slice(0,index)),decode(value.slice(index+1)))}else if(value)appendTo(dict,decode(value),'')}};return dict}
function appendTo(dict,name,value){var val=typeof value==='string'?value:(value!==null&&value!==undefined&&typeof value.toString==='function'?value.toString():JSON.stringify(value));if(name in dict){dict[name].push(val)}else dict[name]=[val]}
function isArray(val){return!!val&&'[object Array]'===Object.prototype.toString.call(val)}})(typeof global!=='undefined'?global:(typeof window!=='undefined'?window:this))
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/libraries/url-search-params-polyfill/index.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/modules/custom/unicef_locale_redirect/js/cookie_redirect.js. */
(function (window, drupalSettings) {
    // Redirect to URL if localstorage country data is present.
    try {
        // Default vars.
        let enable_clientside_redirect = true;
        let clientside_redirect_expiration = 3600;
        // Get configured settings.
        if (typeof drupalSettings.unicef_locale_redirect !== "undefined") {
            if (typeof drupalSettings.unicef_locale_redirect.enable_clientside_redirect !== "undefined") {
                enable_clientside_redirect = drupalSettings.unicef_locale_redirect.enable_clientside_redirect;
            }
            if (typeof drupalSettings.unicef_locale_redirect.clientside_redirect_expiration !== "undefined") {
                clientside_redirect_expiration = drupalSettings.unicef_locale_redirect.clientside_redirect_expiration;
            }
        }
        // Return if functionality is disabled.
        if (enable_clientside_redirect === false) {
            return;
        }
        // Setup vars for previous selection and timestamps.
        let previous_country_selection = JSON.parse(localStorage.getItem("unicef_locale.selected_country_code"));
        let country = previous_country_selection.country;
        let previous_country_selection_timestamp = previous_country_selection.timestamp;
        let date = new Date();
        // Set timestamp to current minutes - expiration time.
        date.setMinutes(date.getMinutes() - clientside_redirect_expiration);
        let now_minus_days_timestamp = date.getTime();
        // Only redirect if the request is within the permitted timeframe e.g. 1 day.
        if (now_minus_days_timestamp < previous_country_selection_timestamp) {
            var urlParams = new URLSearchParams(window.location.search);
            var country_param = urlParams.get('country');
            if (country && !country_param && country_param !== '') {
                urlParams.append('country', country);
                window.location.search = encodeURI(urlParams.toString());
            }
        }
    } catch (e) {
        // Do nothing.
    }
})(window, drupalSettings);

/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/modules/custom/unicef_locale_redirect/js/cookie_redirect.js. */;
