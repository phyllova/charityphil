/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/core/misc/drupalSettingsLoader.js. */
(function(){var settingsElement=document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');window.drupalSettings={};if(settingsElement!==null)window.drupalSettings=JSON.parse(settingsElement.textContent)})()
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/core/misc/drupalSettingsLoader.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/core/assets/vendor/js-cookie/js.cookie.min.js. */
/*! js-cookie v3.0.1 | MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,function(){var n=e.Cookies,o=e.Cookies=t();o.noConflict=function(){return e.Cookies=n,o}}())}(this,(function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)e[o]=n[o]}return e}return function t(n,o){function r(t,r,i){if("undefined"!=typeof document){"number"==typeof(i=e({},o,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=t+"="+n.write(r,t)+c}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],o={},r=0;r<t.length;r++){var i=t[r].split("="),c=i.slice(1).join("=");try{var u=decodeURIComponent(i[0]);if(o[u]=n.read(c,u),e===u)break}catch(e){}}return e?o[e]:o}},remove:function(t,n){r(t,"",e({},n,{expires:-1}))},withAttributes:function(n){return t(this.converter,e({},this.attributes,n))},withConverter:function(n){return t(e({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(n)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}));

/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/core/assets/vendor/js-cookie/js.cookie.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/modules/custom/unicef_locale_redirect/js/cookie_redirect.js. */
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

/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/modules/custom/unicef_locale_redirect/js/cookie_redirect.js. */;
