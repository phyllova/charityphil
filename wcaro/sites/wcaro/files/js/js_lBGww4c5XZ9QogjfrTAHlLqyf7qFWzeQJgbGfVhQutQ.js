/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/themes/contrib/bootstrap/js/popover.js. */
var Drupal=Drupal||{};(function($,Drupal,Bootstrap){"use strict";var $document=$(document);Bootstrap.extendPlugin('popover',function(settings){return{DEFAULTS:{animation:!!settings.popover_animation,autoClose:!!settings.popover_auto_close,enabled:settings.popover_enabled,html:!!settings.popover_html,placement:settings.popover_placement,selector:settings.popover_selector,trigger:settings.popover_trigger,title:settings.popover_title,content:settings.popover_content,delay:parseInt(settings.popover_delay,10),container:settings.popover_container}}});Drupal.behaviors.bootstrapPopovers={$activePopover:null,attach:function(context){if(!$.fn.popover||!$.fn.popover.Constructor.DEFAULTS.enabled)return;var _this=this;$document.on('show.bs.popover','[data-toggle=popover]',function(){var $trigger=$(this),popover=$trigger.data('bs.popover');if(popover.options.originalTrigger==='click'){if(_this.$activePopover&&_this.getOption('autoClose')&&!_this.$activePopover.is($trigger))_this.$activePopover.popover('hide');_this.$activePopover=$trigger}}).on('focus.bs.popover',':visible',function(e){var $target=$(e.target);if(_this.$activePopover&&_this.getOption('autoClose')&&!_this.$activePopover.is($target)&&!$target.closest('.popover.in')[0]){_this.$activePopover.popover('hide');_this.$activePopover=null}}).on('click.bs.popover',function(e){var $target=$(e.target);if(_this.$activePopover&&_this.getOption('autoClose')&&!$target.is('[data-toggle=popover]')&&!$target.closest('.popover.in')[0]){_this.$activePopover.popover('hide');_this.$activePopover=null}}).on('keyup.bs.popover',function(e){if(_this.$activePopover&&_this.getOption('autoClose')&&e.which===27){_this.$activePopover.popover('hide');_this.$activePopover=null}});var elements=$(context).find('[data-toggle=popover]').toArray();for(var i=0;i<elements.length;i++){var $element=$(elements[i]),options=$.extend({},$.fn.popover.Constructor.DEFAULTS,$element.data());options.originalTrigger=options.trigger;if(options.trigger==='click')options.trigger='manual';var target=options.target||$element.is('a[href^="#"]')&&$element.attr('href'),$target=$document.find(target).clone();if(!options.content&&$target[0]){$target.removeClass('visually-hidden hidden').removeAttr('aria-hidden');options.content=$target.wrap('<div/>').parent()[options.html?'html':'text']()||''};$element.popover(options);if(options.originalTrigger==='click')$element.off('click.drupal.bootstrap.popover').on('click.drupal.bootstrap.popover',function(e){$(this).popover('toggle');e.preventDefault();e.stopPropagation()})}},detach:function(context){if(!$.fn.popover||!$.fn.popover.Constructor.DEFAULTS.enabled)return;$(context).find('[data-toggle="popover"]').off('click.drupal.bootstrap.popover').popover('destroy')},getOption:function(name,defaultValue,element){var $element=element?$(element):this.$activePopover,options=$.extend(true,{},$.fn.popover.Constructor.DEFAULTS,($element&&$element.data('bs.popover')||{}).options);if(options[name]!==void(0))return options[name];return defaultValue!==void(0)?defaultValue:void(0)}}})(window.jQuery,window.Drupal,window.Drupal.bootstrap)
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/themes/contrib/bootstrap/js/popover.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/themes/contrib/bootstrap/js/tooltip.js. */
var Drupal=Drupal||{};(function($,Drupal,Bootstrap){"use strict";Bootstrap.extendPlugin('tooltip',function(settings){return{DEFAULTS:{animation:!!settings.tooltip_animation,enabled:settings.tooltip_enabled,html:!!settings.tooltip_html,placement:settings.tooltip_placement,selector:settings.tooltip_selector,trigger:settings.tooltip_trigger,delay:parseInt(settings.tooltip_delay,10),container:settings.tooltip_container}}});Drupal.behaviors.bootstrapTooltips={attach:function(context){if(!$.fn.tooltip||!$.fn.tooltip.Constructor.DEFAULTS.enabled)return;var elements=$(context).find('[data-toggle="tooltip"]').toArray();for(var i=0;i<elements.length;i++){var $element=$(elements[i]),options=$.extend({},$.fn.tooltip.Constructor.DEFAULTS,$element.data());$element.tooltip(options)}},detach:function(context){if(!$.fn.tooltip||!$.fn.tooltip.Constructor.DEFAULTS.enabled)return;$(context).find('[data-toggle="tooltip"]').tooltip('destroy')}}})(window.jQuery,window.Drupal,window.Drupal.bootstrap)
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/themes/contrib/bootstrap/js/tooltip.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/modules/custom/device_fingerprint/js/DeviceFP.js. */
function hashCode(string){var hash=0,i,chr;if(string.length===0)return hash;for(i=0;i<string.length;i++){chr=string.charCodeAt(i);hash=((hash<<5)-hash)+chr;hash|=0};return hash}
function getDeviceDetails(window){var unknown='-',navAppVersion=navigator.appVersion,navUserAgent=navigator.userAgent,browser=navigator.appName,version=''+parseFloat(navigator.appVersion),majorVersion=parseInt(navigator.appVersion,10),screenSize='',nameOffset,verOffset,ix,width,height;if(typeof screen.width!=='undefined'){width=(screen.width)?screen.width:'';height=(screen.height)?screen.height:'';screenSize+=''+width+" x "+height};if((verOffset=navUserAgent.indexOf('Opera'))!=-1){browser='Opera';version=navUserAgent.substring(verOffset+6);if((verOffset=navUserAgent.indexOf('Version'))!=-1)version=navUserAgent.substring(verOffset+8)};if((verOffset=navUserAgent.indexOf('OPR'))!=-1){browser='Opera';version=navUserAgent.substring(verOffset+4)}else if((verOffset=navUserAgent.indexOf('Edge'))!=-1){browser='Microsoft Edge';version=navUserAgent.substring(verOffset+5)}else if((verOffset=navUserAgent.indexOf('MSIE'))!=-1){browser='Microsoft Internet Explorer';version=navUserAgent.substring(verOffset+5)}else if((verOffset=navUserAgent.indexOf('Chrome'))!=-1){browser='Chrome';version=navUserAgent.substring(verOffset+7)}else if((verOffset=navUserAgent.indexOf('Safari'))!=-1){browser='Safari';version=navUserAgent.substring(verOffset+7);if((verOffset=navUserAgent.indexOf('Version'))!=-1)version=navUserAgent.substring(verOffset+8)}else if((verOffset=navUserAgent.indexOf('Firefox'))!=-1){browser='Firefox';version=navUserAgent.substring(verOffset+8)}else if(navUserAgent.indexOf('Trident/')!=-1){browser='Microsoft Internet Explorer';version=navUserAgent.substring(navUserAgent.indexOf('rv:')+3)}else if((nameOffset=navUserAgent.lastIndexOf(' ')+1)<(verOffset=navUserAgent.lastIndexOf('/'))){browser=navUserAgent.substring(nameOffset,verOffset);version=navUserAgent.substring(verOffset+1);if(browser.toLowerCase()==browser.toUpperCase())browser=navigator.appName};if((ix=version.indexOf(';'))!=-1)version=version.substring(0,ix);if((ix=version.indexOf(' '))!=-1)version=version.substring(0,ix);if((ix=version.indexOf(')'))!=-1)version=version.substring(0,ix);majorVersion=parseInt(''+version,10);if(isNaN(majorVersion)){version=''+parseFloat(navigator.appVersion);majorVersion=parseInt(navigator.appVersion,10)};var mobile=/Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navAppVersion),cookieEnabled=(navigator.cookieEnabled)?true:false;if(typeof navigator.cookieEnabled=='undefined'&&!cookieEnabled){document.cookie='testcookie';cookieEnabled=(document.cookie.indexOf('testcookie')!=-1)?true:false};var os=unknown,clientStrings=[{s:'Windows 10',r:/(Windows 10.0|Windows NT 10.0)/},{s:'Windows 8.1',r:/(Windows 8.1|Windows NT 6.3)/},{s:'Windows 8',r:/(Windows 8|Windows NT 6.2)/},{s:'Windows 7',r:/(Windows 7|Windows NT 6.1)/},{s:'Windows Vista',r:/Windows NT 6.0/},{s:'Windows Server 2003',r:/Windows NT 5.2/},{s:'Windows XP',r:/(Windows NT 5.1|Windows XP)/},{s:'Windows 2000',r:/(Windows NT 5.0|Windows 2000)/},{s:'Windows ME',r:/(Win 9x 4.90|Windows ME)/},{s:'Windows 98',r:/(Windows 98|Win98)/},{s:'Windows 95',r:/(Windows 95|Win95|Windows_95)/},{s:'Windows NT 4.0',r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},{s:'Windows CE',r:/Windows CE/},{s:'Windows 3.11',r:/Win16/},{s:'Android',r:/Android/},{s:'Open BSD',r:/OpenBSD/},{s:'Sun OS',r:/SunOS/},{s:'Linux',r:/(Linux|X11)/},{s:'iOS',r:/(iPhone|iPad|iPod)/},{s:'Mac OS X',r:/Mac OS X/},{s:'Mac OS',r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{s:'QNX',r:/QNX/},{s:'UNIX',r:/UNIX/},{s:'BeOS',r:/BeOS/},{s:'OS/2',r:/OS\/2/},{s:'Search Bot',r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}];for(var id in clientStrings){var cs=clientStrings[id];if(cs.r.test(navUserAgent)){os=cs.s;break}};var osVersion=unknown;if(/Windows/.test(os)){osVersion=/Windows (.*)/.exec(os)[1];os='Windows'};switch(os){case'Mac OS X':osVersion=/Mac OS X (10[\.\_\d]+)/.exec(navUserAgent)[1];break;case'Android':osVersion=/Android ([\.\_\d]+)/.exec(navUserAgent)[1];break;case'iOS':osVersion=/OS (\d+)_(\d+)_?(\d+)?/.exec(navAppVersion);if(osVersion!==null)osVersion=osVersion[1]+'.'+osVersion[2]+'.'+(osVersion[3]|0);break};var flashVersion='no check';if(typeof swfobject!='undefined'){var fv=swfobject.getFlashPlayerVersion();if(fv.major>0){flashVersion=fv.major+'.'+fv.minor+' r'+fv.release}else flashVersion=unknown};var canvas=document.createElement('canvas'),ctx=canvas.getContext('2d'),txt='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-={}|[]\:"<>?;,.';ctx.textBaseline="top";ctx.font="14px 'Arial'";ctx.textBaseline="alphabetic";ctx.fillStyle="#f60";ctx.fillRect(125,1,62,20);ctx.fillStyle="#069";ctx.fillText(txt,2,15);ctx.fillStyle="rgba(102, 204, 0, 0.7)";ctx.fillText(txt,4,17);const canvasData=canvas.toDataURL();var jscd={screen:screenSize,browser:browser,browserVersion:version,browserMajorVersion:majorVersion,mobile:mobile,os:os,osVersion:osVersion,cookies:cookieEnabled,flashVersion:flashVersion,canvasData:canvasData},payload={OS:(jscd.os+' '+jscd.osVersion).toString(),Browser:(jscd.browser+' '+jscd.browserMajorVersion+' ('+jscd.browserVersion+')').toString(),Mobile:(jscd.mobile).toString(),Flash:(jscd.flashVersion).toString(),Cookies:(jscd.cookies).toString(),ScreenSize:(jscd.screen).toString(),FullUserAgent:(navigator.userAgent).toString()};return payload}
function buildHash(){const deviceObject=getDeviceDetails();var hashString="",keyString="";Object.keys(deviceObject).forEach(function(key){keyString+='#'+key;hashString+='#'+hashCode(deviceObject[key])})}
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/modules/custom/device_fingerprint/js/DeviceFP.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/modules/custom/device_fingerprint/js/device_fingerprint.js. */
(function($,window,Drupal){'use strict';Drupal.behaviors.deviceFingerprint={attach:function(context,settings){$(once('user-logged-in','body',context)).on('click',function(e){$('input[name="device_fingerprint"]').val(JSON.stringify(getDeviceDetails(window)))})}}})(jQuery,window,Drupal)
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/modules/custom/device_fingerprint/js/device_fingerprint.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/core/misc/states.js. */
(function($,Drupal){var states={postponed:[]};Drupal.states=states
function invert(a,invertState){return invertState&&typeof a!=='undefined'?!a:a}
function _compare2(a,b){if(a===b)return typeof a==='undefined'?a:true;return typeof a==='undefined'||typeof b==='undefined'}
function ternary(a,b){if(typeof a==='undefined')return b;if(typeof b==='undefined')return a;return a&&b};Drupal.behaviors.states={attach:function attach(context,settings){var $states=$(context).find('[data-drupal-states]'),il=$states.length,_loop=function _loop(i){var config=JSON.parse($states[i].getAttribute('data-drupal-states'));Object.keys(config||{}).forEach(function(state){new states.Dependent({element:$($states[i]),state:states.State.sanitize(state),constraints:config[state]})})};for(var i=0;i<il;i++)_loop(i);while(states.postponed.length)states.postponed.shift()()}};states.Dependent=function(args){var _this=this;$.extend(this,{values:{},oldValue:null},args);this.dependees=this.getDependees();Object.keys(this.dependees||{}).forEach(function(selector){_this.initializeDependee(selector,_this.dependees[selector])})};states.Dependent.comparisons={RegExp:function RegExp(reference,value){return reference.test(value)},Function:function Function(reference,value){return reference(value)},Number:function Number(reference,value){return typeof value==='string'?_compare2(reference.toString(),value):_compare2(reference,value)}};states.Dependent.prototype={initializeDependee:function initializeDependee(selector,dependeeStates){var _this2=this;this.values[selector]={};Object.keys(dependeeStates).forEach(function(i){var state=dependeeStates[i];if($.inArray(state,dependeeStates)===-1)return;state=states.State.sanitize(state);_this2.values[selector][state.name]=null;$(selector).on("state:".concat(state),{selector:selector,state:state},function(e){_this2.update(e.data.selector,e.data.state,e.value)});new states.Trigger({selector:selector,state:state})})},compare:function compare(reference,selector,state){var value=this.values[selector][state.name];if(reference.constructor.name in states.Dependent.comparisons)return states.Dependent.comparisons[reference.constructor.name](reference,value);return _compare2(reference,value)},update:function update(selector,state,value){if(value!==this.values[selector][state.name]){this.values[selector][state.name]=value;this.reevaluate()}},reevaluate:function reevaluate(){var value=this.verifyConstraints(this.constraints);if(value!==this.oldValue){this.oldValue=value;value=invert(value,this.state.invert);this.element.trigger({type:"state:".concat(this.state),value:value,trigger:true})}},verifyConstraints:function verifyConstraints(constraints,selector){var result;if($.isArray(constraints)){var hasXor=$.inArray('xor',constraints)===-1,len=constraints.length;for(var i=0;i<len;i++)if(constraints[i]!=='xor'){var constraint=this.checkConstraints(constraints[i],selector,i);if(constraint&&(hasXor||result))return hasXor;result=result||constraint}}else if($.isPlainObject(constraints))for(var n in constraints)if(constraints.hasOwnProperty(n)){result=ternary(result,this.checkConstraints(constraints[n],selector,n));if(result===false)return false};return result},checkConstraints:function checkConstraints(value,selector,state){if(typeof state!=='string'||/[0-9]/.test(state[0])){state=null}else if(typeof selector==='undefined'){selector=state;state=null};if(state!==null){state=states.State.sanitize(state);return invert(this.compare(value,selector,state),state.invert)};return this.verifyConstraints(value,selector)},getDependees:function getDependees(){var cache={},_compare=this.compare;this.compare=function(reference,selector,state){(cache[selector]||(cache[selector]=[])).push(state.name)};this.verifyConstraints(this.constraints);this.compare=_compare;return cache}};states.Trigger=function(args){$.extend(this,args);if(this.state in states.Trigger.states){this.element=$(this.selector);if(!this.element.data("trigger:".concat(this.state)))this.initialize()}};states.Trigger.prototype={initialize:function initialize(){var _this3=this,trigger=states.Trigger.states[this.state];if(typeof trigger==='function'){trigger.call(window,this.element)}else Object.keys(trigger||{}).forEach(function(event){_this3.defaultTrigger(event,trigger[event])});this.element.data("trigger:".concat(this.state),true)},defaultTrigger:function defaultTrigger(event,valueFn){var oldValue=valueFn.call(this.element);this.element.on(event,$.proxy(function(e){var value=valueFn.call(this.element,e);if(oldValue!==value){this.element.trigger({type:"state:".concat(this.state),value:value,oldValue:oldValue});oldValue=value}},this));states.postponed.push($.proxy(function(){this.element.trigger({type:"state:".concat(this.state),value:oldValue,oldValue:null})},this))}};states.Trigger.states={empty:{keyup:function keyup(){return this.val()===''},change:function change(){return this.val()===''}},checked:{change:function change(){var checked=false;this.each(function(){checked=$(this).prop('checked');return!checked});return checked}},value:{keyup:function keyup(){if(this.length>1)return this.filter(':checked').val()||false;return this.val()},change:function change(){if(this.length>1)return this.filter(':checked').val()||false;return this.val()}},collapsed:{collapsed:function collapsed(e){return typeof e!=='undefined'&&'value'in e?e.value:!this.is('[open]')}}};states.State=function(state){this.pristine=state;this.name=state;var process=true;do{while(this.name.charAt(0)==='!'){this.name=this.name.substring(1);this.invert=!this.invert};if(this.name in states.State.aliases){this.name=states.State.aliases[this.name]}else process=false}while(process)};states.State.sanitize=function(state){if(state instanceof states.State)return state;return new states.State(state)};states.State.aliases={enabled:'!disabled',invisible:'!visible',invalid:'!valid',untouched:'!touched',optional:'!required',filled:'!empty',unchecked:'!checked',irrelevant:'!relevant',expanded:'!collapsed',open:'!collapsed',closed:'collapsed',readwrite:'!readonly'};states.State.prototype={invert:false,toString:function toString(){return this.name}};var $document=$(document);$document.on('state:disabled',function(e){if(e.trigger)$(e.target).closest('.js-form-item, .js-form-submit, .js-form-wrapper').toggleClass('form-disabled',e.value).find('select, input, textarea').prop('disabled',e.value)});$document.on('state:required',function(e){if(e.trigger)if(e.value){var label="label".concat(e.target.id?"[for=".concat(e.target.id,"]"):''),$label=$(e.target).attr({required:'required','aria-required':'true'}).closest('.js-form-item, .js-form-wrapper').find(label);if(!$label.hasClass('js-form-required').length)$label.addClass('js-form-required form-required')}else $(e.target).removeAttr('required aria-required').closest('.js-form-item, .js-form-wrapper').find('label.js-form-required').removeClass('js-form-required form-required')});$document.on('state:visible',function(e){if(e.trigger)$(e.target).closest('.js-form-item, .js-form-submit, .js-form-wrapper').toggle(e.value)});$document.on('state:checked',function(e){if(e.trigger)$(e.target).closest('.js-form-item, .js-form-wrapper').find('input').prop('checked',e.value).trigger('change')});$document.on('state:collapsed',function(e){if(e.trigger)if($(e.target).is('[open]')===e.value)$(e.target).find('> summary').trigger('click')})})(jQuery,Drupal)
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/core/misc/states.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/themes/contrib/bootstrap/js/misc/states.js. */
(function($){$(document).unbind('state:disabled');$(document).bind('state:disabled',function(e){if(e.trigger)$(e.target).attr('disabled',e.value).closest('.form-item, .form-submit, .form-wrapper').toggleClass('form-disabled',e.value).find(':input').attr('disabled',e.value)})})(jQuery)
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/themes/contrib/bootstrap/js/misc/states.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/libraries/custom/scrollToElement.js. */
(function($){$.fn.scrollToElement=function(scroll_to_element,scroll_element,adjustment,speed,transition){if(typeof adjustment==='undefined')adjustment=0;if(typeof speed==='undefined')speed=700;if(typeof transition==='undefined')transition='swing';scroll_to_element=$(scroll_to_element);if(scroll_to_element.length!==0){var top=scroll_to_element.offset().top,totalScroll=top+adjustment;$(scroll_element).animate({scrollTop:totalScroll},speed,transition)}}})(jQuery)
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/libraries/custom/scrollToElement.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/libraries/custom/isVisible.js. */
(function ($, window, Drupal, drupalSettings) {
    $.fn.isVisible = function (type) {
        let el = $(this)[0];
        let rect = el.getBoundingClientRect();
        let elemTop = rect.top;
        let elemBottom = rect.bottom;
        let isVisible = false;
        // Only completely visible elements return true:
        if (type === 'all') {
            isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        }
        // Return when top of element is halve way above viewport
        if (type === 'half') {
            isVisible = (elemTop <= (window.innerHeight / 2));
        }
        // Partially visible elements return true:
        if (type === 'partial') {
            isVisible = elemTop < window.innerHeight && elemBottom >= 0;
        }
        // Return when bottom of element is minus / above viewport
        if (type === 'bottom') {
            isVisible = (elemBottom > 0);
        }
        // Return when top of element is minus / above viewport
        if (type === 'top') {
            isVisible = (elemTop > 0);
        }

        return isVisible;
    };
})(jQuery, window, Drupal, drupalSettings);

/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/libraries/custom/isVisible.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/modules/custom/unicef_donation_form/js/unicef_donation_form.js. */
(function ($, window, Drupal, drupalSettings) {

    'use strict';

    let selected_tab_type; // This is the a[data-donation-type] value as a string. Ex. one-time, monthly.
    let ignored_validation_css_class = "ignore-jquery-validation";
    let _this;

    // Rewrite tab focus to include .active and .selected on tab items.
    // This allows Bootstrap vertical tabs to be decoupled from codebase.
    (function ($) {
        var tabFocusOriginal = Drupal.verticalTab.prototype.focus;
        Drupal.verticalTab.prototype.focus = function () {
            this.details.siblings('.vertical-tabs__pane').each(function () {
                let tab = $(this).data('verticalTab');
                tab.item.removeClass('active');
                tab.item.removeClass('selected');
                tab.item.trigger('form.tab.hide', [tab]);
            });
            // Mimic bootstrap 3 contrib theme behaviour.
            let $active_tab = $('input.vertical-tabs-active-tab');
            $active_tab.val(this.details.attr('id'));
            // Set active classes.
            this.item.addClass('active');
            this.item.addClass('selected');
            this.item.trigger('form.tab.show', [this]);
            return tabFocusOriginal.apply(this);
        };
    })(jQuery);

    // Override vertical tabs to aid accessibility.
    Drupal.theme.verticalTab = function (settings) {
        // Add role attribute to tabs.
        var role = '';
        if (settings.details[0].attributes.role) {
            var role_value = settings.details[0].attributes.role.value;
            role = ' role="' + role_value + '" ';
        }
        var tab = {};
        var $el = $(settings.details[0]);
        var donation_type_text = 'data-donation-type-text="' + $el.data('donationTypeText') + '"';
        var donation_type = 'data-donation-type="' + $el.data('donationType') + '"';
        tab.item = $('<li class="vertical-tab-button "' + role + ' ' + donation_type_text + ' ></li>')
            .append(tab.link = $('<a href="#' + settings.details[0].id + '"' + donation_type + ' data-toggle="tab"></a>')
                .append(tab.title = $('<span></span>').html(settings.title))
                .append(tab.summary = $('<div class="summary"></div>')
                )
            );
        return tab;
    };

    /**
     * @type {Drupal~behavior}
     *
     * @prop {Drupal~behaviorAttach} attach
     *   Generic donation page JS
     */
    Drupal.behaviors.unicef_donation_form = {
        setDefaultAmounts: function () {
            if ($('input[name="donation_amount_defaults"]').length) {
                let frequency = $('input[name=donation_amount_defaults]').data('frequency');
                $('.block-unicef-donation-form .donation-tabs a[data-toggle="tab"]').each(function (i, obj) {
                    let data_frequency = $(this).attr('data-donation-type');
                    if (data_frequency === frequency) {
                        $(this).addClass('fake-click');
                        $(this).click();
                        $(this).removeClass('fake-click');
                    }
                });
            }
        },
        restoreTab: function () {
            /**
             * This is for the donation frequency.
             * Eg. Monthly or One Time.
             */
            $('.block-unicef-donation-form .donation-tabs a[data-toggle="tab"]').on('click', function (e) {
                // Store the selected tab type in a variable.
                selected_tab_type = $(this).attr('data-donation-type');
            });

            // Check if there are any messages visible.
            let messages_visible = !!$('.messages__wrapper .alert').length;

            // If there is a selected tab && form errors,
            // reclick the id of the previously selected tab,
            // because we shouldn't change the already selected donation frequency. (e.g. monthly, one-time).
            if (selected_tab_type !== null && messages_visible) {
                let $selected_tab_element = $('.block-unicef-donation-form .donation-tabs a[data-toggle="tab"][data-donation-type="' + selected_tab_type + '"]');
                $selected_tab_element.addClass('fake-click');
                $selected_tab_element.click();
                $selected_tab_element.removeClass('fake-click');
            }
        },
        applyActions: function () {
            let action = $('.payment-processor-action');
            if (action.length !== 0) {
                action.closest('form').attr('action', action.val());
            }
        },
        paymentPanel: function (context) {
            $('.block-donation-form-block').each(function () {
                //Prevent double clicks on payment buttons
                $(once('unicef_donation_form', '.panel.payment-method a.btn', this)).each(function () {
                    let $el = $(this);
                    if ($el.data('clicked') === true) {
                        // Previously clicked, stop actions
                        e.preventDefault();
                        e.stopPropagation();
                        return false;
                    }
                    $el.data('clicked', true);
                });
                //Set hidden fields to be ignored for validation
                $(this).find('.panel-collapse').not('.in').find('input, select, textarea').addClass(ignored_validation_css_class);
                //Add panel group quick open and icons for fake radios
                $(this).find('.panel.payment-method [data-toggle="collapse"]').on('click', function (e) {
                    //Prevent BS from doing its animations
                    e.preventDefault();
                    e.stopPropagation();

                    //Get the target panel from link attr
                    let target_href = $(this).attr('href');

                    // Remove Stripe errors from panels
                    let $stripe_elements = $(this).closest('form').find('.commerce-donation-stripe-elements');
                    if ($stripe_elements.length > 0) {
                        let $error_el = $stripe_elements.find('.outcome .error.visible');
                        if ($error_el.length) {
                            $error_el.removeClass('visible').text("");
                        }
                    }

                    //Close all open panels
                    $(this)
                        .closest('.step_wrapper_payment_processor')
                        .find('.panel')
                        .removeClass('payment-method-active')
                        .find('.panel-body')
                        .removeClass('in');

                    //Set all radios icons to default / not active
                    $(this)
                        .closest('.step_wrapper_payment_processor')
                        .find('.check-mark-radio i.fa-regular')
                        .removeClass('fa-circle-dot')
                        .addClass('fa-circle');

                    //Set this button's icon to active
                    $(this)
                        .addClass('payment-method-active')
                        .find('.check-mark-radio i.fa-regular')
                        .removeClass('fa-circle')
                        .addClass('fa-circle-dot');

                    //Set this panels body to open and remove validation ignore class
                    $(this)
                        .closest('.step_wrapper_payment_processor')
                        .find(target_href).addClass('in')
                        .find('input, select, textarea')
                        .not('.states-hidden')
                        .removeClass(ignored_validation_css_class);

                    //Disable validation for hidden elements
                    $(this)
                        .closest('.step_wrapper_payment_processor')
                        .find('.panel-collapse')
                        .not('.in')
                        .find('input, select, textarea')
                        .addClass(ignored_validation_css_class);

                    //Autoscroll on mobile
                    if ($(window).width() <= 767) {
                        $(document).scrollToElement($(this), 'body,html', -30, 100);
                    }

                });
            });
        },
        setRequestField: function () {
            //Add URL string to hidden field
            if ($('input[name="window_href"]').length) {
                let $input = $('input[name="window_href"]');
                if (!$input.val()) {
                    $input.val(window.location.href);
                }
            }
        },
        donationTabs: function () {
            $('.block-unicef-donation-form .donation-tabs .vertical-tabs__menu').addClass('nav nav-tabs vertical-tabs-list');
            // Ensure client side validation is not triggered when switching tabs.
            $(document).on('form.tab.hide', function (e, tab) {
                let $target = $(tab.link.attr('href'));
                $target.find('.other-amount-wrapper').each(function () {
                    $(this).find('input.other-amount').addClass(ignored_validation_css_class);
                });
            });
            $(document).on('form.tab.show', function (e, tab) {
                let $target = $(tab.link.attr('href'));
                $target.find('.donation-amounts-fieldset').each(function () {
                    let $selected_amount = $(this).find('input.form-radio:checked');
                    if ($selected_amount.is('.other')) {
                        $(this).find('input.other-amount').removeClass(ignored_validation_css_class);
                    }
                });
            });
        },
        attach: function (context, settings) {

            _this = this;

            //Client side validation
            if (typeof Drupal.behaviors.unicef_csv_settings !== 'undefined') {
                ignored_validation_css_class = Drupal.behaviors.unicef_csv_settings.getIgnoredValidationCssClass(true);
            }

            // Donation tabs.
            _this.donationTabs();

            //Set request field
            _this.setRequestField();

            //Check for default settings e.g. frequency set via params and action it
            _this.setDefaultAmounts();

            //Restore tab when user hits error on first step
            _this.restoreTab();

            // search for actions
            _this.applyActions();

            //Payment methods panel groups UX
            _this.paymentPanel(context);

            //Make sure we reload the page if webkit back button click
            if (once('event_persisted', 'html').length) {
                $(window).on("pageshow", function (event) {
                    if (event.originalEvent.persisted) {
                        let step = $('#donation-form-attributes').data('donation-form-step');
                        if (step === 2) {
                            window.location.reload();
                        }
                    }
                });
            }
        },
    };
})(jQuery, window, Drupal, drupalSettings);

/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/modules/custom/unicef_donation_form/js/unicef_donation_form.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/modules/custom/unicef_donation_form/js/unicef_donation_form_dynamic_font_sizes.js. */
(function ($, window, Drupal, drupalSettings) {

    'use strict';

    let resize_timer;

    // Vertical tab dynamic font sizes.
    var tabFocusOriginal = Drupal.verticalTab.prototype.focus;
    Drupal.verticalTab.prototype.focus = function () {
        $('html').removeClass('no-javascript');
        return tabFocusOriginal.apply(this);
    };

    /**
     * @type {Drupal~behavior}
     *
     * @prop {Drupal~behaviorAttach} attach
     *   Generic donation page JS
     */
    Drupal.behaviors.unicef_dynamic_font_sizes = {
        attach: function (context, settings) {

            // Hack to get around Drupal attach on multiple contexts
            let element_type = $(context).prop('nodeName');
            let allowed_contexts = ['#document', 'FORM'];
            if (!allowed_contexts.includes(element_type)) {
                return;
            }

            if (typeof $(document).dynamicFontSizes !== "function") {
                return;
            }

            let resize_array = [
                {
                    'parent': '.unicef-ajax-multistep-donation-form .form-item',
                    'child': '.js-form-item-title',
                    'ratio_adjust': 1,
                    'line_height': null,
                },
                {
                    'parent': '.unicef-ajax-multistep-donation-form .vertical-tabs__menu li a',
                    'child': 'span:first-of-type',
                    'ratio_adjust': 1,
                    'line_height': 1.5,
                },
                {
                    'parent': '.unicef-ajax-multistep-donation-form .donation-radios-wrapper .form-item label',
                    'child': 'span i',
                    'ratio_adjust': 1,
                    'strip_styles': ['padding'],
                }
            ];

            $.each(resize_array, function (index, settings) {
                $(document).dynamicFontSizes(settings);
            });

            $(window).on('resize', function () {
                clearTimeout(resize_timer);
                resize_timer = setTimeout(function () {
                    $.each(resize_array, function (index, settings) {
                        $(document).dynamicFontSizes(settings);
                    });
                }, 200);
            });
        }
    };

})(jQuery, window, Drupal, drupalSettings);

/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/modules/custom/unicef_donation_form/js/unicef_donation_form_dynamic_font_sizes.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/modules/custom/unicef_donation_form/js/unicef_donation_form_ajax_event_listener.js. */
(function($,window,Drupal,drupalSettings){'use strict';var ajax_init=false;$.unicef_donation_form_ajax_event_listener=function(ajax_event_route){var route=$.parseJSON(ajax_event_route);drupalSettings.unicef_donation_form.ajax_event_route=undefined;$(document).consoleLogger(ajax_event_route);$.ajax({url:route,cache:false,method:"POST"}).done(function(response){$(document).consoleLogger('Success: route: '+route+' response: '+JSON.stringify(response))}).fail(function(response){$(document).consoleLogger('Failed:  route: '+route+' response: '+response.responseText)}).always(function(response){$(document).consoleLogger('Debug:  route: '+route+' response: '+JSON.stringify(response));ajax_init=false})};Drupal.behaviors.unicef_donation_page={attach:function(context,settings){if(typeof drupalSettings.unicef_donation_form!=='undefined')if(typeof drupalSettings.unicef_donation_form.ajax_event_route!=='undefined'&&drupalSettings.unicef_donation_form.ajax_event_route!==false)if(ajax_init===false){ajax_init=true;$.unicef_donation_form_ajax_event_listener(drupalSettings.unicef_donation_form.ajax_event_route)}}}})(jQuery,window,Drupal,drupalSettings)
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/modules/custom/unicef_donation_form/js/unicef_donation_form_ajax_event_listener.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/libraries/jquery-validation/dist/jquery.validate.min.js. */
/*! jQuery Validation Plugin - v1.19.3 - 1/9/2021
 * https://jqueryvalidation.org/
 * Copyright (c) 2021 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.submitButton=b.currentTarget,a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.submitButton&&(c.settings.submitHandler||c.formSubmitted)&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),!(c.settings.submitHandler&&!c.settings.debug)||(e=c.settings.submitHandler.call(c,c.currentForm,b),d&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0],k="undefined"!=typeof this.attr("contenteditable")&&"false"!==this.attr("contenteditable");if(null!=j&&(!j.form&&k&&(j.form=this.closest("form")[0],j.name=this.attr("name")),null!=j.form)){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(a,b){i[b]=f[b],delete f[b]}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g)),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}});var b=function(a){return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")};a.extend(a.expr.pseudos||a.expr[":"],{blank:function(c){return!b(""+a(c).val())},filled:function(c){var d=a(c).val();return null!==d&&!!b(""+d)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");if(!this.form&&c&&(this.form=a(this).closest("form")[0],this.name=a(this).attr("name")),d===this.form){var e=a.data(this.form,"validator"),f="on"+b.type.replace(/^validate/,""),g=e.settings;g[f]&&!a(this).is(g.ignore)&&g[f].call(e,this,b)}}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.currentForm,e=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){e[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)void 0!==a[b]&&null!==a[b]&&a[b]!==!1&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").trigger("focus").trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name"),e="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),e&&(this.form=a(this).closest("form")[0],this.name=d),this.form===b.currentForm&&(!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0))})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type,g="undefined"!=typeof e.attr("contenteditable")&&"false"!==e.attr("contenteditable");return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=g?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f,g=a(b).rules(),h=a.map(g,function(a,b){return b}).length,i=!1,j=this.elementValue(b);"function"==typeof g.normalizer?f=g.normalizer:"function"==typeof this.settings.normalizer&&(f=this.settings.normalizer),f&&(j=f.call(b,j),delete g.normalizer);for(d in g){e={method:d,parameters:g[d]};try{if(c=a.validator.methods[d].call(this,j,b,e.parameters),"dependency-mismatch"===c&&1===h){i=!0;continue}if(i=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(k){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",k),k instanceof TypeError&&(k.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),k}}if(!i)return this.objectLength(g)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.submitButton&&a("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),""===d&&(d=!0),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(a,d){b[a]="function"==typeof d&&"normalizer"!==a?d(c):d}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var a;b[this]&&(Array.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(a=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(a[0]),Number(a[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:void 0!==b&&null!==b&&b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)},date:function(){var a=!1;return function(b,c){return a||(a=!0,this.settings.debug&&window.console&&console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")),this.optional(c)||!/Invalid|NaN/.test(new Date(b).toString())}}(),dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(a,b,c){var d=Array.isArray(a)?a.length:this.getLength(a,b);return this.optional(b)||d>=c},maxlength:function(a,b,c){var d=Array.isArray(a)?a.length:this.getLength(a,b);return this.optional(b)||d<=c},rangelength:function(a,b,c){var d=Array.isArray(a)?a.length:this.getLength(a,b);return this.optional(b)||d>=c[0]&&d<=c[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var c,d={};return a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,c){var e=a.port;"abort"===a.mode&&(d[e]&&d[e].abort(),d[e]=c)}):(c=a.ajax,a.ajax=function(b){var e=("mode"in b?b:a.ajaxSettings).mode,f=("port"in b?b:a.ajaxSettings).port;return"abort"===e?(d[f]&&d[f].abort(),d[f]=c.apply(this,arguments),d[f]):c.apply(this,arguments)}),a});
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/libraries/jquery-validation/dist/jquery.validate.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/libraries/jquery_mask/dist/jquery.mask.js. */
(function(factory,jQuery,Zepto){if(typeof define==='function'&&define.amd){define(['jquery'],factory)}else if(typeof exports==='object'&&typeof Meteor==='undefined'){module.exports=factory(require('jquery'))}else factory(jQuery||Zepto)}(function($){'use strict';var Mask=function(el,mask,options){var p={invalid:[],getCaret:function(){try{var sel,pos=0,ctrl=el.get(0),dSel=document.selection,cSelStart=ctrl.selectionStart;if(dSel&&navigator.appVersion.indexOf('MSIE 10')===-1){sel=dSel.createRange();sel.moveStart('character',-p.val().length);pos=sel.text.length}else if(cSelStart||cSelStart==='0')pos=cSelStart;return pos}catch(e){}},setCaret:function(pos){try{if(el.is(':focus')){var range,ctrl=el.get(0);if(ctrl.setSelectionRange){ctrl.setSelectionRange(pos,pos)}else{range=ctrl.createTextRange();range.collapse(true);range.moveEnd('character',pos);range.moveStart('character',pos);range.select()}}}catch(e){}},events:function(){el.on('keydown.mask',function(e){el.data('mask-keycode',e.keyCode||e.which);el.data('mask-previus-value',el.val());el.data('mask-previus-caret-pos',p.getCaret());p.maskDigitPosMapOld=p.maskDigitPosMap}).on($.jMaskGlobals.useInput?'input.mask':'keyup.mask',p.behaviour).on('paste.mask drop.mask',function(){setTimeout(function(){el.keydown().keyup()},100)}).on('change.mask',function(){el.data('changed',true)}).on('blur.mask',function(){if(oldValue!==p.val()&&!el.data('changed'))el.trigger('change');el.data('changed',false)}).on('blur.mask',function(){oldValue=p.val()}).on('focus.mask',function(e){if(options.selectOnFocus===true)$(e.target).select()}).on('focusout.mask',function(){if(options.clearIfNotMatch&&!regexMask.test(p.val()))p.val('')})},getRegexMask:function(){var maskChunks=[],translation,pattern,optional,recursive,oRecursive,r;for(var i=0;i<mask.length;i++){translation=jMask.translation[mask.charAt(i)];if(translation){pattern=translation.pattern.toString().replace(/.{1}$|^.{1}/g,'');optional=translation.optional;recursive=translation.recursive;if(recursive){maskChunks.push(mask.charAt(i));oRecursive={digit:mask.charAt(i),pattern:pattern}}else maskChunks.push(!optional&&!recursive?pattern:(pattern+'?'))}else maskChunks.push(mask.charAt(i).replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&'))};r=maskChunks.join('');if(oRecursive)r=r.replace(new RegExp('('+oRecursive.digit+'(.*'+oRecursive.digit+')?)'),'($1)?').replace(new RegExp(oRecursive.digit,'g'),oRecursive.pattern);return new RegExp(r)},destroyEvents:function(){el.off(['input','keydown','keyup','paste','drop','blur','focusout',''].join('.mask '))},val:function(v){var isInput=el.is('input'),method=isInput?'val':'text',r;if(arguments.length>0){if(el[method]()!==v)el[method](v);r=el}else r=el[method]();return r},calculateCaretPosition:function(oldVal){var newVal=p.getMasked(),caretPosNew=p.getCaret();if(oldVal!==newVal){var caretPosOld=el.data('mask-previus-caret-pos')||0,newValL=newVal.length,oldValL=oldVal.length,maskDigitsBeforeCaret=0,maskDigitsAfterCaret=0,maskDigitsBeforeCaretAll=0,maskDigitsBeforeCaretAllOld=0,i=0;for(i=caretPosNew;i<newValL;i++){if(!p.maskDigitPosMap[i])break;maskDigitsAfterCaret++};for(i=caretPosNew-1;i>=0;i--){if(!p.maskDigitPosMap[i])break;maskDigitsBeforeCaret++};for(i=caretPosNew-1;i>=0;i--)if(p.maskDigitPosMap[i])maskDigitsBeforeCaretAll++;for(i=caretPosOld-1;i>=0;i--)if(p.maskDigitPosMapOld[i])maskDigitsBeforeCaretAllOld++;if(caretPosNew>oldValL){caretPosNew=newValL*10}else if(caretPosOld>=caretPosNew&&caretPosOld!==oldValL){if(!p.maskDigitPosMapOld[caretPosNew]){var caretPos=caretPosNew;caretPosNew-=maskDigitsBeforeCaretAllOld-maskDigitsBeforeCaretAll;caretPosNew-=maskDigitsBeforeCaret;if(p.maskDigitPosMap[caretPosNew])caretPosNew=caretPos}}else if(caretPosNew>caretPosOld){caretPosNew+=maskDigitsBeforeCaretAll-maskDigitsBeforeCaretAllOld;caretPosNew+=maskDigitsAfterCaret}};return caretPosNew},behaviour:function(e){e=e||window.event;p.invalid=[];var keyCode=el.data('mask-keycode');if($.inArray(keyCode,jMask.byPassKeys)===-1){var newVal=p.getMasked(),caretPos=p.getCaret(),oldVal=el.data('mask-previus-value')||'';setTimeout(function(){p.setCaret(p.calculateCaretPosition(oldVal))},$.jMaskGlobals.keyStrokeCompensation);p.val(newVal);p.setCaret(caretPos);return p.callbacks(e)}},getMasked:function(skipMaskChars,val){var buf=[],value=val===undefined?p.val():val+'',m=0,maskLen=mask.length,v=0,valLen=value.length,offset=1,addMethod='push',resetPos=-1,maskDigitCount=0,maskDigitPosArr=[],lastMaskChar,check;if(options.reverse){addMethod='unshift';offset=-1;lastMaskChar=0;m=maskLen-1;v=valLen-1;check=function(){return m>-1&&v>-1}}else{lastMaskChar=maskLen-1;check=function(){return m<maskLen&&v<valLen}};var lastUntranslatedMaskChar;while(check()){var maskDigit=mask.charAt(m),valDigit=value.charAt(v),translation=jMask.translation[maskDigit];if(translation){if(valDigit.match(translation.pattern)){buf[addMethod](valDigit);if(translation.recursive){if(resetPos===-1){resetPos=m}else if(m===lastMaskChar&&m!==resetPos)m=resetPos-offset;if(lastMaskChar===resetPos)m-=offset};m+=offset}else if(valDigit===lastUntranslatedMaskChar){maskDigitCount--;lastUntranslatedMaskChar=undefined}else if(translation.optional){m+=offset;v-=offset}else if(translation.fallback){buf[addMethod](translation.fallback);m+=offset;v-=offset}else p.invalid.push({p:v,v:valDigit,e:translation.pattern});v+=offset}else{if(!skipMaskChars)buf[addMethod](maskDigit);if(valDigit===maskDigit){maskDigitPosArr.push(v);v+=offset}else{lastUntranslatedMaskChar=maskDigit;maskDigitPosArr.push(v+maskDigitCount);maskDigitCount++};m+=offset}};var lastMaskCharDigit=mask.charAt(lastMaskChar);if(maskLen===valLen+1&&!jMask.translation[lastMaskCharDigit])buf.push(lastMaskCharDigit);var newVal=buf.join('');p.mapMaskdigitPositions(newVal,maskDigitPosArr,valLen);return newVal},mapMaskdigitPositions:function(newVal,maskDigitPosArr,valLen){var maskDiff=options.reverse?newVal.length-valLen:0;p.maskDigitPosMap={};for(var i=0;i<maskDigitPosArr.length;i++)p.maskDigitPosMap[maskDigitPosArr[i]+maskDiff]=1},callbacks:function(e){var val=p.val(),changed=val!==oldValue,defaultArgs=[val,e,el,options],callback=function(name,criteria,args){if(typeof options[name]==='function'&&criteria)options[name].apply(this,args)};callback('onChange',changed===true,defaultArgs);callback('onKeyPress',changed===true,defaultArgs);callback('onComplete',val.length===mask.length,defaultArgs);callback('onInvalid',p.invalid.length>0,[val,e,el,p.invalid,options])}};el=$(el);var jMask=this,oldValue=p.val(),regexMask;mask=typeof mask==='function'?mask(p.val(),undefined,el,options):mask;jMask.mask=mask;jMask.options=options;jMask.remove=function(){var caret=p.getCaret();if(jMask.options.placeholder)el.removeAttr('placeholder');if(el.data('mask-maxlength'))el.removeAttr('maxlength');p.destroyEvents();p.val(jMask.getCleanVal());p.setCaret(caret);return el};jMask.getCleanVal=function(){return p.getMasked(true)};jMask.getMaskedVal=function(val){return p.getMasked(false,val)};jMask.init=function(onlyMask){onlyMask=onlyMask||false;options=options||{};jMask.clearIfNotMatch=$.jMaskGlobals.clearIfNotMatch;jMask.byPassKeys=$.jMaskGlobals.byPassKeys;jMask.translation=$.extend({},$.jMaskGlobals.translation,options.translation);jMask=$.extend(true,{},jMask,options);regexMask=p.getRegexMask();if(onlyMask){p.events();p.val(p.getMasked())}else{if(options.placeholder)el.attr('placeholder',options.placeholder);if(el.data('mask'))el.attr('autocomplete','off');for(var i=0,maxlength=true;i<mask.length;i++){var translation=jMask.translation[mask.charAt(i)];if(translation&&translation.recursive){maxlength=false;break}};if(maxlength)el.attr('maxlength',mask.length).data('mask-maxlength',true);p.destroyEvents();p.events();var caret=p.getCaret();p.val(p.getMasked());p.setCaret(caret)}};jMask.init(!el.is('input'))};$.maskWatchers={};var HTMLAttributes=function(){var input=$(this),options={},prefix='data-mask-',mask=input.attr('data-mask');if(input.attr(prefix+'reverse'))options.reverse=true;if(input.attr(prefix+'clearifnotmatch'))options.clearIfNotMatch=true;if(input.attr(prefix+'selectonfocus')==='true')options.selectOnFocus=true;if(notSameMaskObject(input,mask,options))return input.data('mask',new Mask(this,mask,options))},notSameMaskObject=function(field,mask,options){options=options||{};var maskObject=$(field).data('mask'),stringify=JSON.stringify,value=$(field).val()||$(field).text();try{if(typeof mask==='function')mask=mask(value);return typeof maskObject!=='object'||stringify(maskObject.options)!==stringify(options)||maskObject.mask!==mask}catch(e){}},eventSupported=function(eventName){var el=document.createElement('div'),isSupported;eventName='on'+eventName;isSupported=(eventName in el);if(!isSupported){el.setAttribute(eventName,'return;');isSupported=typeof el[eventName]==='function'};el=null;return isSupported};$.fn.mask=function(mask,options){options=options||{};var selector=this.selector,globals=$.jMaskGlobals,interval=globals.watchInterval,watchInputs=options.watchInputs||globals.watchInputs,maskFunction=function(){if(notSameMaskObject(this,mask,options))return $(this).data('mask',new Mask(this,mask,options))};$(this).each(maskFunction);if(selector&&selector!==''&&watchInputs){clearInterval($.maskWatchers[selector]);$.maskWatchers[selector]=setInterval(function(){$(document).find(selector).each(maskFunction)},interval)};return this};$.fn.masked=function(val){return this.data('mask').getMaskedVal(val)};$.fn.unmask=function(){clearInterval($.maskWatchers[this.selector]);delete $.maskWatchers[this.selector];return this.each(function(){var dataMask=$(this).data('mask');if(dataMask)dataMask.remove().removeData('mask')})};$.fn.cleanVal=function(){return this.data('mask').getCleanVal()};$.applyDataMask=function(selector){selector=selector||$.jMaskGlobals.maskElements;var $selector=(selector instanceof $)?selector:$(selector);$selector.filter($.jMaskGlobals.dataMaskAttr).each(HTMLAttributes)};var globals={maskElements:'input,td,span,div',dataMaskAttr:'*[data-mask]',dataMask:true,watchInterval:300,watchInputs:true,keyStrokeCompensation:10,useInput:!/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent)&&eventSupported('input'),watchDataMask:false,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{'0':{pattern:/\d/},'9':{pattern:/\d/,optional:true},'#':{pattern:/\d/,recursive:true},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};$.jMaskGlobals=$.jMaskGlobals||{};globals=$.jMaskGlobals=$.extend(true,{},globals,$.jMaskGlobals);if(globals.dataMask)$.applyDataMask();setInterval(function(){if($.jMaskGlobals.watchDataMask)$.applyDataMask()},globals.watchInterval)},window.jQuery,window.Zepto))
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/libraries/jquery_mask/dist/jquery.mask.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/modules/custom/unicef_validation/modules/unicef_clientside_validation/js/unicef_csv_jquery_mask.js. */
(function($,Drupal,drupalSettings){var _this;Drupal.behaviors.unicef_csv_jquery_mask={applyMask:function($element,mask){$element.mask(mask)},applyJsonMask:function($parent_element,json_masks){try{var masks=JSON.parse(json_masks);Object.keys(masks).forEach(function(key){var $target_element=$('*[name$="['+key+']"]');_this.applyMask($target_element,masks[key])})}catch(e){}},getJsonMask:function($element,attr){return $element.attr(attr)},setTargettedMask:function(context){$(context).once('unicef_csv_targetted_jquery_mask').each(function(){var $element=$('*[data-mask-controller]');$($element).each(function(index,element){var json_masks=_this.getJsonMask($(this).find(":selected"),'data-input-mask');_this.applyJsonMask($(this),json_masks);$(this).on('change',function(){json_masks=_this.getJsonMask($(this).find(":selected"),'data-input-mask');_this.applyJsonMask($(this),json_masks)})})})},setStandardMask:function(context){$(context).once('unicef_csv_standard_jquery_mask').each(function(){var $element=$('*[data-mask]');$($element).each(function(index,element){$(this).mask($(this).attr('data-mask'))})})},attach:function(context){_this=this;_this.setTargettedMask(context);_this.setStandardMask(context)}}})(jQuery,Drupal,drupalSettings)
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/modules/custom/unicef_validation/modules/unicef_clientside_validation/js/unicef_csv_jquery_mask.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/libraries/custom/unicodeCharacters.js. */
(function ($) {
    $.fn.unicodeCharacters = function (type) {
        // \p{L} Pattern derived from: https://github.com/slevithan/xregexp/blob/master/tools/output/categories.js
        let pattern = 'A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC';
        // Utility function for returning pattern.
        return {
            getPattern: function () {
                return pattern;
            },
        }
    };
})(jQuery);

/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/libraries/custom/unicodeCharacters.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/modules/custom/unicef_validation/modules/unicef_clientside_validation/js/unicef_csv_settings.js. */
(function ($, window, Drupal, drupalSettings) {

    var _this;
    var $field_error_element;
    var ignored_validation_css_class;
    var ignored_validation_ajax_triggers;
    window.unicef_clientside_validation = [];

    // React on state changes.
    $(document).on('state:visible', function (e) {
        let ignored = Drupal.behaviors.unicef_csv_settings.getIgnoredValidationCssClass(true);
        if (e.value === false) {
            $(e.target).find('input, select, textarea').addClass(ignored).addClass('states-hidden');
        } else {
            $(e.target).find('input, select, textarea').removeClass(ignored).removeClass('states-hidden');
        }
    });

    $(document).on('state:required', function (e) {
        let ignored = Drupal.behaviors.unicef_csv_settings.getIgnoredValidationCssClass(true);
        if ($(e.target).is(':hidden')) {
            $(e.target).addClass(ignored);
        }
    });

    Drupal.behaviors.unicef_csv_settings = {
        getIgnoredValidationCssClass: function (strip_dot) {
            ignored_validation_css_class = ".ignore-jquery-validation";
            if (typeof drupalSettings.unicef_clientside_validation !== 'undefined') {
                if (typeof drupalSettings.unicef_clientside_validation.ignored_validation_css_class !== 'undefined') {
                    ignored_validation_css_class = drupalSettings.unicef_clientside_validation.ignored_validation_css_class;
                }
            }
            if (strip_dot === true) {
                ignored_validation_css_class = ignored_validation_css_class.replace(/\./g, '');
            }
            return ignored_validation_css_class;
        },
        getIgnoredValidationAjaxTriggers: function () {
            ignored_validation_ajax_triggers = [
                'previous',
                'address[country_code]',
                'address[administrative_area]'
            ];
            if (typeof drupalSettings.unicef_clientside_validation !== 'undefined') {
                if (typeof drupalSettings.unicef_clientside_validation.ignored_validation_ajax_triggers !== 'undefined') {
                    var parsed_ajax_triggers = JSON.parse(drupalSettings.unicef_clientside_validation.ignored_validation_ajax_triggers);
                    if (parsed_ajax_triggers.length > 0) {
                        var filtered = parsed_ajax_triggers.filter(function (el) {
                            return el;
                        });
                        if (filtered.length > 0) {
                            ignored_validation_ajax_triggers = filtered;
                        }
                    }
                }
            }
            return ignored_validation_ajax_triggers;
        },
        getConfigSettings: function () {
            _this.getIgnoredValidationCssClass();
            _this.getIgnoredValidationAjaxTriggers();
            return JSON.stringify({
                'ignored_validation_css_class': ignored_validation_css_class,
                'ignored_validation_ajax_triggers': ignored_validation_ajax_triggers
            });
        },
        isFormValid: function ($form) {
            let $current_form = $form;
            $current_form.validate();
            if (!$current_form.valid()) {
                var errors = $current_form.validate().errorList;
                _this.setValidationErrors(errors);
                //If not valid find the first field and scroll to it
                $field_error_element = errors[0].element;
                $field_error_element.focus();
                if ($(window).width() <= 767) {
                    let form_height = $current_form.height();
                    $(document).scrollToElement($field_error_element, 'body,html', -form_height/2, 100);
                }
                return false;
            }
            return true;
        },
        getErrorsList: function ($form) {
            return window.unicef_clientside_validation.form_errors ?? [];
        },
        setValidationErrors: function (errors) {
            window.unicef_clientside_validation.form_errors = [];
            $.each(errors, function (index, value) {
                var $error_element = $(value.element);
                window.unicef_clientside_validation.form_errors.push({
                        'element_name': $error_element.attr('name'),
                        'element_error': value.message
                    }
                );
            });
        },
        clientsideValidationInit: function () {

            //Get the config from Drupal settings
            _this.getConfigSettings();

            //Set validation defaults
            drupalSettings.cvJqueryValidateOptions = {
                validClass: "success",
                errorClass: "error field-error",
                errorElement: 'small'
            };

            // Custom defaults for client side validation
            // Add an ignore class so validation doesn't apply to elements with this class
            // Set custom error placement for telephone field
            $.validator.setDefaults({
                ignore: ignored_validation_css_class,
                errorPlacement: function (error, element) {
                    if (element.is(".js-telephone-international, .clone")) {
                        error.insertAfter(element.closest('.iti'));
                    } else {
                        error.insertAfter(element);
                    }
                }
            });

            //Override default AJAX submit by providing validation when next button is clicked
            if (typeof Drupal.Ajax !== 'undefined' && typeof Drupal.Ajax.prototype.unicefCsvSubmitOriginal === 'undefined') {
                // Overrride prototype function supplied by clientside_validation module.
                Drupal.Ajax.prototype.beforeSubmitCVOriginal = function (formValues, element, options) {
                    // Do nothing.
                };
                Drupal.Ajax.prototype.unicefCsvSubmitOriginal = Drupal.Ajax.prototype.beforeSubmit;
                Drupal.Ajax.prototype.beforeSubmit = function (formValues, element_settings, options) {

                    //Set window errors array to empty
                    window.unicef_clientside_validation.form_errors = [];

                    //Test if our triggering element is in the array - true is for previous button clicks etc
                    if (ignored_validation_ajax_triggers.includes(options.data._triggering_element_name) === true) {
                        $(this.$form).removeClass('form-field-error');
                    }

                    //Test if our triggering element is in the array - false is for next button clicks
                    if (ignored_validation_ajax_triggers.includes(options.data._triggering_element_name) === false) {
                        //Default validation for standard form fields
                        if (!_this.isFormValid(this.$form)) {
                            this.ajaxing = false;
                            return false;
                        }
                    }
                    if (!$(this.element).hasClass('single-payment-button') && $(window).width() <= 767) {
                        $(document).scrollToElement($(this.$form), 'body,html', -20, 100);
                    }
                    return this.unicefCsvSubmitOriginal(formValues, element_settings, options);
                };
            }

            // Generic submit handler for all non ajax forms.
            $('.form-submit').on('click', function (e) {
                let $form = $(this).closest('form');
                _this.isFormValid($form);
            });

        },
        emailOverride: function () {
            $.validator.methods.email = function (value, element) {
                return this.optional(element) || /\.[a-z-A-Z]{2,4}$/.test(value);
            }
        },
        attach: function (context) {
            _this = this;
            _this.clientsideValidationInit();
            _this.emailOverride();
        }
    }
})(jQuery, window, Drupal, drupalSettings);
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/modules/custom/unicef_validation/modules/unicef_clientside_validation/js/unicef_csv_settings.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/modules/contrib/clientside_validation/clientside_validation_jquery/js/cv.jquery.validate.js. */
(function($,Drupal,once,drupalSettings){'use strict';if(typeof drupalSettings.cvJqueryValidateOptions==='undefined')drupalSettings.cvJqueryValidateOptions={};if(drupalSettings.clientside_validation_jquery.force_validate_on_blur)drupalSettings.cvJqueryValidateOptions.onfocusout=function(element){this.element(element)};$.extend($.validator.messages,drupalSettings.clientside_validation_jquery.messages);Drupal.behaviors.cvJqueryValidate={attach:function(context){if(typeof Drupal.Ajax!=='undefined')if(typeof Drupal.Ajax.prototype.beforeSubmitCVOriginal==='undefined'){var validateAll=2;try{validateAll=drupalSettings.clientside_validation_jquery.validate_all_ajax_forms}catch(e){};Drupal.Ajax.prototype.beforeSubmitCVOriginal=Drupal.Ajax.prototype.beforeSubmit;Drupal.Ajax.prototype.beforeSubmit=function(form_values,element_settings,options){if(typeof this.$form!=='undefined'&&(validateAll===1||$(this.element).hasClass('cv-validate-before-ajax'))&&$(this.element).attr("formnovalidate")==undefined){$(this.$form).removeClass('ajax-submit-prevented');$(this.$form).validate();if(!($(this.$form).valid())){this.ajaxing=false;$(this.$form).addClass('ajax-submit-prevented');return false}};return this.beforeSubmitCVOriginal.apply(this,arguments)}};$(document).trigger('cv-jquery-validate-options-update',drupalSettings.cvJqueryValidateOptions);once('cvJqueryValidate','body form').forEach(function(element){$(element).validate(drupalSettings.cvJqueryValidateOptions)})}}})(jQuery,Drupal,once,drupalSettings)
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/modules/contrib/clientside_validation/clientside_validation_jquery/js/cv.jquery.validate.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/modules/contrib/clientside_validation/clientside_validation_jquery/js/cv.jquery.ckeditor.js. */
(function($,Drupal,debounce,CKEDITOR){Drupal.behaviors.cvJqueryValidateCKEditor={attach:function(context){if(typeof CKEDITOR==='undefined')return;var ignore=':hidden',not=[];for(var instance in CKEDITOR.instances)if(CKEDITOR.instances.hasOwnProperty(instance))not.push('#'+instance);ignore+=not.length?':not('+not.join(', ')+')':'';$('form').each(function(){var validator=$(this).data('validator');if(!validator)return;validator.settings.ignore=ignore;validator.settings.errorPlacement=function(place,$element){var id=$element.attr('id'),afterElement=$element[0];if(CKEDITOR.instances.hasOwnProperty(id))afterElement=CKEDITOR.instances[id].container.$;place.insertAfter(afterElement)}});var updateText=function(instance){return debounce(function(e){instance.updateElement();var event=$.extend(true,{},e.data.$);delete event.target;delete event.explicitOriginalTarget;delete event.originalTarget;delete event.currentTarget;$(instance.element.$).trigger(new $.Event(e.name,event))},250)};CKEDITOR.on('instanceReady',function(){for(var instance in CKEDITOR.instances)if(CKEDITOR.instances.hasOwnProperty(instance)){CKEDITOR.instances[instance].document.on("keyup",updateText(CKEDITOR.instances[instance]));CKEDITOR.instances[instance].document.on("paste",updateText(CKEDITOR.instances[instance]));CKEDITOR.instances[instance].document.on("keypress",updateText(CKEDITOR.instances[instance]));CKEDITOR.instances[instance].document.on("blur",updateText(CKEDITOR.instances[instance]));CKEDITOR.instances[instance].document.on("change",updateText(CKEDITOR.instances[instance]))}})}}})(jQuery,Drupal,Drupal.debounce,(typeof CKEDITOR==='undefined')?undefined:CKEDITOR)
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/modules/contrib/clientside_validation/clientside_validation_jquery/js/cv.jquery.ckeditor.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/core/assets/vendor/jquery-form/jquery.form.min.js. */
/*!
 * jQuery Form Plugin
 * version: 4.3.0
 * Requires jQuery v1.7.2 or later
 * Project repository: https://github.com/jquery-form/form

 * Copyright 2017 Kevin Morris
 * Copyright 2006 M. Alsup

 * Dual licensed under the LGPL-2.1+ or MIT licenses
 * https://github.com/jquery-form/form#license

 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 */
!function(r){"function"==typeof define&&define.amd?define(["jquery"],r):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),r(t),t}:r(jQuery)}(function(q){"use strict";var m=/\r?\n/g,S={};S.fileapi=void 0!==q('<input type="file">').get(0).files,S.formdata=void 0!==window.FormData;var _=!!q.fn.prop;function o(e){var t=e.data;e.isDefaultPrevented()||(e.preventDefault(),q(e.target).closest("form").ajaxSubmit(t))}function i(e){var t=e.target,r=q(t);if(!r.is("[type=submit],[type=image]")){var a=r.closest("[type=submit]");if(0===a.length)return;t=a[0]}var n,o=t.form;"image"===(o.clk=t).type&&(void 0!==e.offsetX?(o.clk_x=e.offsetX,o.clk_y=e.offsetY):"function"==typeof q.fn.offset?(n=r.offset(),o.clk_x=e.pageX-n.left,o.clk_y=e.pageY-n.top):(o.clk_x=e.pageX-t.offsetLeft,o.clk_y=e.pageY-t.offsetTop)),setTimeout(function(){o.clk=o.clk_x=o.clk_y=null},100)}function N(){var e;q.fn.ajaxSubmit.debug&&(e="[jquery.form] "+Array.prototype.join.call(arguments,""),window.console&&window.console.log?window.console.log(e):window.opera&&window.opera.postError&&window.opera.postError(e))}q.fn.attr2=function(){if(!_)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},q.fn.ajaxSubmit=function(M,e,t,r){if(!this.length)return N("ajaxSubmit: skipping submit process - no element selected"),this;var O,a,n,o,X=this;"function"==typeof M?M={success:M}:"string"==typeof M||!1===M&&0<arguments.length?(M={url:M,data:e,dataType:t},"function"==typeof r&&(M.success=r)):void 0===M&&(M={}),O=M.method||M.type||this.attr2("method"),n=(n=(n="string"==typeof(a=M.url||this.attr2("action"))?q.trim(a):"")||window.location.href||"")&&(n.match(/^([^#]+)/)||[])[1],o=/(MSIE|Trident)/.test(navigator.userAgent||"")&&/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",M=q.extend(!0,{url:n,success:q.ajaxSettings.success,type:O||q.ajaxSettings.type,iframeSrc:o},M);var i={};if(this.trigger("form-pre-serialize",[this,M,i]),i.veto)return N("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(M.beforeSerialize&&!1===M.beforeSerialize(this,M))return N("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var s=M.traditional;void 0===s&&(s=q.ajaxSettings.traditional);var u,c,C=[],l=this.formToArray(M.semantic,C,M.filtering);if(M.data&&(c=q.isFunction(M.data)?M.data(l):M.data,M.extraData=c,u=q.param(c,s)),M.beforeSubmit&&!1===M.beforeSubmit(l,this,M))return N("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[l,this,M,i]),i.veto)return N("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var f=q.param(l,s);u&&(f=f?f+"&"+u:u),"GET"===M.type.toUpperCase()?(M.url+=(0<=M.url.indexOf("?")?"&":"?")+f,M.data=null):M.data=f;var d,m,p,h=[];M.resetForm&&h.push(function(){X.resetForm()}),M.clearForm&&h.push(function(){X.clearForm(M.includeHidden)}),!M.dataType&&M.target?(d=M.success||function(){},h.push(function(e,t,r){var a=arguments,n=M.replaceTarget?"replaceWith":"html";q(M.target)[n](e).each(function(){d.apply(this,a)})})):M.success&&(q.isArray(M.success)?q.merge(h,M.success):h.push(M.success)),M.success=function(e,t,r){for(var a=M.context||this,n=0,o=h.length;n<o;n++)h[n].apply(a,[e,t,r||X,X])},M.error&&(m=M.error,M.error=function(e,t,r){var a=M.context||this;m.apply(a,[e,t,r,X])}),M.complete&&(p=M.complete,M.complete=function(e,t){var r=M.context||this;p.apply(r,[e,t,X])});var v=0<q("input[type=file]:enabled",this).filter(function(){return""!==q(this).val()}).length,g="multipart/form-data",x=X.attr("enctype")===g||X.attr("encoding")===g,y=S.fileapi&&S.formdata;N("fileAPI :"+y);var b,T=(v||x)&&!y;!1!==M.iframe&&(M.iframe||T)?M.closeKeepAlive?q.get(M.closeKeepAlive,function(){b=w(l)}):b=w(l):b=(v||x)&&y?function(e){for(var r=new FormData,t=0;t<e.length;t++)r.append(e[t].name,e[t].value);if(M.extraData){var a=function(e){var t,r,a=q.param(e,M.traditional).split("&"),n=a.length,o=[];for(t=0;t<n;t++)a[t]=a[t].replace(/\+/g," "),r=a[t].split("="),o.push([decodeURIComponent(r[0]),decodeURIComponent(r[1])]);return o}(M.extraData);for(t=0;t<a.length;t++)a[t]&&r.append(a[t][0],a[t][1])}M.data=null;var n=q.extend(!0,{},q.ajaxSettings,M,{contentType:!1,processData:!1,cache:!1,type:O||"POST"});M.uploadProgress&&(n.xhr=function(){var e=q.ajaxSettings.xhr();return e.upload&&e.upload.addEventListener("progress",function(e){var t=0,r=e.loaded||e.position,a=e.total;e.lengthComputable&&(t=Math.ceil(r/a*100)),M.uploadProgress(e,r,a,t)},!1),e});n.data=null;var o=n.beforeSend;return n.beforeSend=function(e,t){M.formData?t.data=M.formData:t.data=r,o&&o.call(this,e,t)},q.ajax(n)}(l):q.ajax(M),X.removeData("jqxhr").data("jqxhr",b);for(var j=0;j<C.length;j++)C[j]=null;return this.trigger("form-submit-notify",[this,M]),this;function w(e){var t,r,l,f,o,d,m,p,a,n,h,v,i=X[0],g=q.Deferred();if(g.abort=function(e){p.abort(e)},e)for(r=0;r<C.length;r++)t=q(C[r]),_?t.prop("disabled",!1):t.removeAttr("disabled");(l=q.extend(!0,{},q.ajaxSettings,M)).context=l.context||l,o="jqFormIO"+(new Date).getTime();var s=i.ownerDocument,u=X.closest("body");if(l.iframeTarget?(n=(d=q(l.iframeTarget,s)).attr2("name"))?o=n:d.attr2("name",o):(d=q('<iframe name="'+o+'" src="'+l.iframeSrc+'" />',s)).css({position:"absolute",top:"-1000px",left:"-1000px"}),m=d[0],p={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(e){var t="timeout"===e?"timeout":"aborted";N("aborting upload... "+t),this.aborted=1;try{m.contentWindow.document.execCommand&&m.contentWindow.document.execCommand("Stop")}catch(e){}d.attr("src",l.iframeSrc),p.error=t,l.error&&l.error.call(l.context,p,t,e),f&&q.event.trigger("ajaxError",[p,l,t]),l.complete&&l.complete.call(l.context,p,t)}},(f=l.global)&&0==q.active++&&q.event.trigger("ajaxStart"),f&&q.event.trigger("ajaxSend",[p,l]),l.beforeSend&&!1===l.beforeSend.call(l.context,p,l))return l.global&&q.active--,g.reject(),g;if(p.aborted)return g.reject(),g;(a=i.clk)&&(n=a.name)&&!a.disabled&&(l.extraData=l.extraData||{},l.extraData[n]=a.value,"image"===a.type&&(l.extraData[n+".x"]=i.clk_x,l.extraData[n+".y"]=i.clk_y));var x=1,y=2;function b(t){var r=null;try{t.contentWindow&&(r=t.contentWindow.document)}catch(e){N("cannot get iframe.contentWindow document: "+e)}if(r)return r;try{r=t.contentDocument?t.contentDocument:t.document}catch(e){N("cannot get iframe.contentDocument: "+e),r=t.document}return r}var c=q("meta[name=csrf-token]").attr("content"),T=q("meta[name=csrf-param]").attr("content");function j(){var e=X.attr2("target"),t=X.attr2("action"),r=X.attr("enctype")||X.attr("encoding")||"multipart/form-data";i.setAttribute("target",o),O&&!/post/i.test(O)||i.setAttribute("method","POST"),t!==l.url&&i.setAttribute("action",l.url),l.skipEncodingOverride||O&&!/post/i.test(O)||X.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),l.timeout&&(v=setTimeout(function(){h=!0,A(x)},l.timeout));var a=[];try{if(l.extraData)for(var n in l.extraData)l.extraData.hasOwnProperty(n)&&(q.isPlainObject(l.extraData[n])&&l.extraData[n].hasOwnProperty("name")&&l.extraData[n].hasOwnProperty("value")?a.push(q('<input type="hidden" name="'+l.extraData[n].name+'">',s).val(l.extraData[n].value).appendTo(i)[0]):a.push(q('<input type="hidden" name="'+n+'">',s).val(l.extraData[n]).appendTo(i)[0]));l.iframeTarget||d.appendTo(u),m.attachEvent?m.attachEvent("onload",A):m.addEventListener("load",A,!1),setTimeout(function e(){try{var t=b(m).readyState;N("state = "+t),t&&"uninitialized"===t.toLowerCase()&&setTimeout(e,50)}catch(e){N("Server abort: ",e," (",e.name,")"),A(y),v&&clearTimeout(v),v=void 0}},15);try{i.submit()}catch(e){document.createElement("form").submit.apply(i)}}finally{i.setAttribute("action",t),i.setAttribute("enctype",r),e?i.setAttribute("target",e):X.removeAttr("target"),q(a).remove()}}T&&c&&(l.extraData=l.extraData||{},l.extraData[T]=c),l.forceSync?j():setTimeout(j,10);var w,S,k,D=50;function A(e){if(!p.aborted&&!k){if((S=b(m))||(N("cannot access response document"),e=y),e===x&&p)return p.abort("timeout"),void g.reject(p,"timeout");if(e===y&&p)return p.abort("server abort"),void g.reject(p,"error","server abort");if(S&&S.location.href!==l.iframeSrc||h){m.detachEvent?m.detachEvent("onload",A):m.removeEventListener("load",A,!1);var t,r="success";try{if(h)throw"timeout";var a="xml"===l.dataType||S.XMLDocument||q.isXMLDoc(S);if(N("isXml="+a),!a&&window.opera&&(null===S.body||!S.body.innerHTML)&&--D)return N("requeing onLoad callback, DOM not available"),void setTimeout(A,250);var n=S.body?S.body:S.documentElement;p.responseText=n?n.innerHTML:null,p.responseXML=S.XMLDocument?S.XMLDocument:S,a&&(l.dataType="xml"),p.getResponseHeader=function(e){return{"content-type":l.dataType}[e.toLowerCase()]},n&&(p.status=Number(n.getAttribute("status"))||p.status,p.statusText=n.getAttribute("statusText")||p.statusText);var o,i,s,u=(l.dataType||"").toLowerCase(),c=/(json|script|text)/.test(u);c||l.textarea?(o=S.getElementsByTagName("textarea")[0])?(p.responseText=o.value,p.status=Number(o.getAttribute("status"))||p.status,p.statusText=o.getAttribute("statusText")||p.statusText):c&&(i=S.getElementsByTagName("pre")[0],s=S.getElementsByTagName("body")[0],i?p.responseText=i.textContent?i.textContent:i.innerText:s&&(p.responseText=s.textContent?s.textContent:s.innerText)):"xml"===u&&!p.responseXML&&p.responseText&&(p.responseXML=F(p.responseText));try{w=E(p,u,l)}catch(e){r="parsererror",p.error=t=e||r}}catch(e){N("error caught: ",e),r="error",p.error=t=e||r}p.aborted&&(N("upload aborted"),r=null),p.status&&(r=200<=p.status&&p.status<300||304===p.status?"success":"error"),"success"===r?(l.success&&l.success.call(l.context,w,"success",p),g.resolve(p.responseText,"success",p),f&&q.event.trigger("ajaxSuccess",[p,l])):r&&(void 0===t&&(t=p.statusText),l.error&&l.error.call(l.context,p,r,t),g.reject(p,"error",t),f&&q.event.trigger("ajaxError",[p,l,t])),f&&q.event.trigger("ajaxComplete",[p,l]),f&&!--q.active&&q.event.trigger("ajaxStop"),l.complete&&l.complete.call(l.context,p,r),k=!0,l.timeout&&clearTimeout(v),setTimeout(function(){l.iframeTarget?d.attr("src",l.iframeSrc):d.remove(),p.responseXML=null},100)}}}var F=q.parseXML||function(e,t){return window.ActiveXObject?((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!==t.documentElement.nodeName?t:null},L=q.parseJSON||function(e){return window.eval("("+e+")")},E=function(e,t,r){var a=e.getResponseHeader("content-type")||"",n=("xml"===t||!t)&&0<=a.indexOf("xml"),o=n?e.responseXML:e.responseText;return n&&"parsererror"===o.documentElement.nodeName&&q.error&&q.error("parsererror"),r&&r.dataFilter&&(o=r.dataFilter(o,t)),"string"==typeof o&&(("json"===t||!t)&&0<=a.indexOf("json")?o=L(o):("script"===t||!t)&&0<=a.indexOf("javascript")&&q.globalEval(o)),o};return g}},q.fn.ajaxForm=function(e,t,r,a){if(("string"==typeof e||!1===e&&0<arguments.length)&&(e={url:e,data:t,dataType:r},"function"==typeof a&&(e.success=a)),(e=e||{}).delegation=e.delegation&&q.isFunction(q.fn.on),e.delegation||0!==this.length)return e.delegation?(q(document).off("submit.form-plugin",this.selector,o).off("click.form-plugin",this.selector,i).on("submit.form-plugin",this.selector,e,o).on("click.form-plugin",this.selector,e,i),this):(e.beforeFormUnbind&&e.beforeFormUnbind(this,e),this.ajaxFormUnbind().on("submit.form-plugin",e,o).on("click.form-plugin",e,i));var n={s:this.selector,c:this.context};return!q.isReady&&n.s?(N("DOM not ready, queuing ajaxForm"),q(function(){q(n.s,n.c).ajaxForm(e)})):N("terminating; zero elements found by selector"+(q.isReady?"":" (DOM not ready)")),this},q.fn.ajaxFormUnbind=function(){return this.off("submit.form-plugin click.form-plugin")},q.fn.formToArray=function(e,t,r){var a=[];if(0===this.length)return a;var n,o,i,s,u,c,l,f,d,m,p=this[0],h=this.attr("id"),v=(v=e||void 0===p.elements?p.getElementsByTagName("*"):p.elements)&&q.makeArray(v);if(h&&(e||/(Edge|Trident)\//.test(navigator.userAgent))&&(n=q(':input[form="'+h+'"]').get()).length&&(v=(v||[]).concat(n)),!v||!v.length)return a;for(q.isFunction(r)&&(v=q.map(v,r)),o=0,c=v.length;o<c;o++)if((m=(u=v[o]).name)&&!u.disabled)if(e&&p.clk&&"image"===u.type)p.clk===u&&(a.push({name:m,value:q(u).val(),type:u.type}),a.push({name:m+".x",value:p.clk_x},{name:m+".y",value:p.clk_y}));else if((s=q.fieldValue(u,!0))&&s.constructor===Array)for(t&&t.push(u),i=0,l=s.length;i<l;i++)a.push({name:m,value:s[i]});else if(S.fileapi&&"file"===u.type){t&&t.push(u);var g=u.files;if(g.length)for(i=0;i<g.length;i++)a.push({name:m,value:g[i],type:u.type});else a.push({name:m,value:"",type:u.type})}else null!=s&&(t&&t.push(u),a.push({name:m,value:s,type:u.type,required:u.required}));return e||!p.clk||(m=(d=(f=q(p.clk))[0]).name)&&!d.disabled&&"image"===d.type&&(a.push({name:m,value:f.val()}),a.push({name:m+".x",value:p.clk_x},{name:m+".y",value:p.clk_y})),a},q.fn.formSerialize=function(e){return q.param(this.formToArray(e))},q.fn.fieldSerialize=function(n){var o=[];return this.each(function(){var e=this.name;if(e){var t=q.fieldValue(this,n);if(t&&t.constructor===Array)for(var r=0,a=t.length;r<a;r++)o.push({name:e,value:t[r]});else null!=t&&o.push({name:this.name,value:t})}}),q.param(o)},q.fn.fieldValue=function(e){for(var t=[],r=0,a=this.length;r<a;r++){var n=this[r],o=q.fieldValue(n,e);null==o||o.constructor===Array&&!o.length||(o.constructor===Array?q.merge(t,o):t.push(o))}return t},q.fieldValue=function(e,t){var r=e.name,a=e.type,n=e.tagName.toLowerCase();if(void 0===t&&(t=!0),t&&(!r||e.disabled||"reset"===a||"button"===a||("checkbox"===a||"radio"===a)&&!e.checked||("submit"===a||"image"===a)&&e.form&&e.form.clk!==e||"select"===n&&-1===e.selectedIndex))return null;if("select"!==n)return q(e).val().replace(m,"\r\n");var o=e.selectedIndex;if(o<0)return null;for(var i=[],s=e.options,u="select-one"===a,c=u?o+1:s.length,l=u?o:0;l<c;l++){var f=s[l];if(f.selected&&!f.disabled){var d=(d=f.value)||(f.attributes&&f.attributes.value&&!f.attributes.value.specified?f.text:f.value);if(u)return d;i.push(d)}}return i},q.fn.clearForm=function(e){return this.each(function(){q("input,select,textarea",this).clearFields(e)})},q.fn.clearFields=q.fn.clearInputs=function(r){var a=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var e=this.type,t=this.tagName.toLowerCase();a.test(e)||"textarea"===t?this.value="":"checkbox"===e||"radio"===e?this.checked=!1:"select"===t?this.selectedIndex=-1:"file"===e?/MSIE/.test(navigator.userAgent)?q(this).replaceWith(q(this).clone(!0)):q(this).val(""):r&&(!0===r&&/hidden/.test(e)||"string"==typeof r&&q(this).is(r))&&(this.value="")})},q.fn.resetForm=function(){return this.each(function(){var t=q(this),e=this.tagName.toLowerCase();switch(e){case"input":this.checked=this.defaultChecked;case"textarea":return this.value=this.defaultValue,!0;case"option":case"optgroup":var r=t.parents("select");return r.length&&r[0].multiple?"option"===e?this.selected=this.defaultSelected:t.find("option").resetForm():r.resetForm(),!0;case"select":return t.find("option").each(function(e){if(this.selected=this.defaultSelected,this.defaultSelected&&!t[0].multiple)return t[0].selectedIndex=e,!1}),!0;case"label":var a=q(t.attr("for")),n=t.find("input,select,textarea");return a[0]&&n.unshift(a[0]),n.resetForm(),!0;case"form":return"function"!=typeof this.reset&&("object"!=typeof this.reset||this.reset.nodeType)||this.reset(),!0;default:return t.find("form,input,label,select,textarea").resetForm(),!0}})},q.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},q.fn.selected=function(r){return void 0===r&&(r=!0),this.each(function(){var e,t=this.type;"checkbox"===t||"radio"===t?this.checked=r:"option"===this.tagName.toLowerCase()&&(e=q(this).parent("select"),r&&e[0]&&"select-one"===e[0].type&&e.find("option").selected(!1),this.selected=r)})},q.fn.ajaxSubmit.debug=!1});

/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/core/assets/vendor/jquery-form/jquery.form.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/core/misc/progress.js. */
(function($,Drupal){Drupal.theme.progressBar=function(id){return"<div id=\"".concat(id,"\" class=\"progress\" aria-live=\"polite\">")+'<div class="progress__label">&nbsp;</div><div class="progress__track"><div class="progress__bar"></div></div><div class="progress__percentage"></div><div class="progress__description">&nbsp;</div></div>'};Drupal.ProgressBar=function(id,updateCallback,method,errorCallback){this.id=id;this.method=method||'GET';this.updateCallback=updateCallback;this.errorCallback=errorCallback;this.element=$(Drupal.theme('progressBar',id))};$.extend(Drupal.ProgressBar.prototype,{setProgress:function setProgress(percentage,message,label){if(percentage>=0&&percentage<=100){$(this.element).find('div.progress__bar').css('width',"".concat(percentage,"%"));$(this.element).find('div.progress__percentage').html("".concat(percentage,"%"))};$('div.progress__description',this.element).html(message);$('div.progress__label',this.element).html(label);if(this.updateCallback)this.updateCallback(percentage,message,this)},startMonitoring:function startMonitoring(uri,delay){this.delay=delay;this.uri=uri;this.sendPing()},stopMonitoring:function stopMonitoring(){clearTimeout(this.timer);this.uri=null},sendPing:function sendPing(){if(this.timer)clearTimeout(this.timer);if(this.uri){var pb=this,uri=this.uri;if(uri.indexOf('?')===-1){uri+='?'}else uri+='&';uri+='_format=json';$.ajax({type:this.method,url:uri,data:'',dataType:'json',success:function success(progress){if(progress.status===0){pb.displayError(progress.data);return};pb.setProgress(progress.percentage,progress.message,progress.label);pb.timer=setTimeout(function(){pb.sendPing()},pb.delay)},error:function error(xmlhttp){var e=new Drupal.AjaxError(xmlhttp,pb.uri);pb.displayError("<pre>".concat(e.message,"</pre>"))}})}},displayError:function displayError(string){var error=$('<div class="messages messages--error"></div>').html(string);$(this.element).before(error).hide();if(this.errorCallback)this.errorCallback(this)}})})(jQuery,Drupal)
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/core/misc/progress.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/themes/contrib/bootstrap/js/misc/progress.js. */
(function($,Drupal){'use strict';Drupal.theme.progressBar=function(id){return'<div class="progress-wrapper" aria-live="polite"><div class="message"></div><div id ="'+id+'" class="progress progress-striped active"><div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span class="percentage"></span></div></div><div class="progress-label"></div></div>'};$.extend(Drupal.ProgressBar.prototype,{setProgress:function(percentage,message,label){if(percentage>=0&&percentage<=100){$(this.element).find('.progress-bar').css('width',percentage+'%').attr('aria-valuenow',percentage);$(this.element).find('.percentage').html(percentage+'%')};if(message){message=message.replace(/<br\/>&nbsp;|\s*$/,'');$('.message',this.element).html(message)};if(label)$('.progress-label',this.element).html(label);if(this.updateCallback)this.updateCallback(percentage,message,this)},displayError:function(string){var error=$('<div class="alert alert-block alert-error"><button class="close" data-dismiss="alert">&times;</button><h4>'+Drupal.t('Error message')+'</h4></div>').append(string);$(this.element).before(error).hide();if(this.errorCallback)this.errorCallback(this)}})})(jQuery,Drupal)
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/themes/contrib/bootstrap/js/misc/progress.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/core/assets/vendor/loadjs/loadjs.min.js. */
loadjs=function(){var h=function(){},c={},u={},f={};function o(e,n){if(e){var r=f[e];if(u[e]=n,r)for(;r.length;)r[0](e,n),r.splice(0,1)}}function l(e,n){e.call&&(e={success:e}),n.length?(e.error||h)(n):(e.success||h)(e)}function d(r,t,s,i){var c,o,e=document,n=s.async,u=(s.numRetries||0)+1,f=s.before||h,l=r.replace(/[\?|#].*$/,""),a=r.replace(/^(css|img)!/,"");i=i||0,/(^css!|\.css$)/.test(l)?((o=e.createElement("link")).rel="stylesheet",o.href=a,(c="hideFocus"in o)&&o.relList&&(c=0,o.rel="preload",o.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(l)?(o=e.createElement("img")).src=a:((o=e.createElement("script")).src=r,o.async=void 0===n||n),!(o.onload=o.onerror=o.onbeforeload=function(e){var n=e.type[0];if(c)try{o.sheet.cssText.length||(n="e")}catch(e){18!=e.code&&(n="e")}if("e"==n){if((i+=1)<u)return d(r,t,s,i)}else if("preload"==o.rel&&"style"==o.as)return o.rel="stylesheet";t(r,n,e.defaultPrevented)})!==f(r,o)&&e.head.appendChild(o)}function r(e,n,r){var t,s;if(n&&n.trim&&(t=n),s=(t?r:n)||{},t){if(t in c)throw"LoadJS";c[t]=!0}function i(n,r){!function(e,t,n){var r,s,i=(e=e.push?e:[e]).length,c=i,o=[];for(r=function(e,n,r){if("e"==n&&o.push(e),"b"==n){if(!r)return;o.push(e)}--i||t(o)},s=0;s<c;s++)d(e[s],r,n)}(e,function(e){l(s,e),n&&l({success:n,error:r},e),o(t,e)},s)}if(s.returnPromise)return new Promise(i);i()}return r.ready=function(e,n){return function(e,r){e=e.push?e:[e];var n,t,s,i=[],c=e.length,o=c;for(n=function(e,n){n.length&&i.push(e),--o||r(i)};c--;)t=e[c],(s=u[t])?n(t,s):(f[t]=f[t]||[]).push(n)}(e,function(e){l(n,e)}),r},r.done=function(e){o(e,[])},r.reset=function(){c={},u={},f={}},r.isDefined=function(e){return e in c},r}();
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/core/assets/vendor/loadjs/loadjs.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/core/modules/responsive_image/js/responsive_image.ajax.js. */
(function(Drupal){Drupal.behaviors.responsiveImageAJAX={attach:function attach(){if(window.picturefill)window.picturefill()}}})(Drupal)
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/core/modules/responsive_image/js/responsive_image.ajax.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/core/misc/ajax.js. */
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread()}
function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}
function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}
function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&iter[Symbol.iterator]!=null||iter["@@iterator"]!=null)return Array.from(iter)}
function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}
function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2};(function($,window,Drupal,drupalSettings,loadjs,_ref){var isFocusable=_ref.isFocusable,tabbable=_ref.tabbable;Drupal.behaviors.AJAX={attach:function attach(context,settings){function loadAjaxBehavior(base){var elementSettings=settings.ajax[base];if(typeof elementSettings.selector==='undefined')elementSettings.selector="#".concat(base);once('drupal-ajax',$(elementSettings.selector)).forEach(function(el){elementSettings.element=el;elementSettings.base=base;Drupal.ajax(elementSettings)})};Object.keys(settings.ajax||{}).forEach(function(base){return loadAjaxBehavior(base)});Drupal.ajax.bindAjaxLinks(document.body);once('ajax','.use-ajax-submit').forEach(function(el){var elementSettings={};elementSettings.url=$(el.form).attr('action');elementSettings.setClick=true;elementSettings.event='click';elementSettings.progress={type:'throbber'};elementSettings.base=el.id;elementSettings.element=el;Drupal.ajax(elementSettings)})},detach:function detach(context,settings,trigger){if(trigger==='unload')Drupal.ajax.expired().forEach(function(instance){Drupal.ajax.instances[instance.instanceIndex]=null})}};Drupal.AjaxError=function(xmlhttp,uri,customMessage){var statusCode,statusText,responseText;if(xmlhttp.status){statusCode="\n".concat(Drupal.t('An AJAX HTTP error occurred.'),"\n").concat(Drupal.t('HTTP Result Code: !status',{'!status':xmlhttp.status}))}else statusCode="\n".concat(Drupal.t('An AJAX HTTP request terminated abnormally.'));statusCode+="\n".concat(Drupal.t('Debugging information follows.'));var pathText="\n".concat(Drupal.t('Path: !uri',{'!uri':uri}));statusText='';try{statusText="\n".concat(Drupal.t('StatusText: !statusText',{'!statusText':xmlhttp.statusText.trim()}))}catch(e){};responseText='';try{responseText="\n".concat(Drupal.t('ResponseText: !responseText',{'!responseText':xmlhttp.responseText.trim()}))}catch(e){};responseText=responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi,'');responseText=responseText.replace(/[\n]+\s+/g,'\n');var readyStateText=xmlhttp.status===0?"\n".concat(Drupal.t('ReadyState: !readyState',{'!readyState':xmlhttp.readyState})):'';customMessage=customMessage?"\n".concat(Drupal.t('CustomMessage: !customMessage',{'!customMessage':customMessage})):'';this.message=statusCode+pathText+statusText+customMessage+responseText+readyStateText;this.name='AjaxError'};Drupal.AjaxError.prototype=new Error();Drupal.AjaxError.prototype.constructor=Drupal.AjaxError;Drupal.ajax=function(settings){if(arguments.length!==1)throw new Error('Drupal.ajax() function must be called with one configuration object only');var base=settings.base||false,element=settings.element||false;delete settings.base;delete settings.element;if(!settings.progress&&!element)settings.progress=false;var ajax=new Drupal.Ajax(base,element,settings);ajax.instanceIndex=Drupal.ajax.instances.length;Drupal.ajax.instances.push(ajax);return ajax};Drupal.ajax.instances=[];Drupal.ajax.expired=function(){return Drupal.ajax.instances.filter(function(instance){return instance&&instance.element!==false&&!document.body.contains(instance.element)})};Drupal.ajax.bindAjaxLinks=function(element){once('ajax','.use-ajax',element).forEach(function(ajaxLink){var $linkElement=$(ajaxLink),elementSettings={progress:{type:'throbber'},dialogType:$linkElement.data('dialog-type'),dialog:$linkElement.data('dialog-options'),dialogRenderer:$linkElement.data('dialog-renderer'),base:$linkElement.attr('id'),element:ajaxLink},href=$linkElement.attr('href');if(href){elementSettings.url=href;elementSettings.event='click'};Drupal.ajax(elementSettings)})};Drupal.Ajax=function(base,element,elementSettings){var defaults={event:element?'mousedown':null,keypress:true,selector:base?"#".concat(base):null,effect:'none',speed:'none',method:'replaceWith',progress:{type:'throbber',message:Drupal.t('Please wait...')},submit:{js:true}};$.extend(this,defaults,elementSettings);this.commands=new Drupal.AjaxCommands();this.instanceIndex=false;if(this.wrapper)this.wrapper="#".concat(this.wrapper);this.element=element;this.element_settings=elementSettings;this.elementSettings=elementSettings;if(this.element&&this.element.form)this.$form=$(this.element.form);if(!this.url){var $element=$(this.element);if($element.is('a')){this.url=$element.attr('href')}else if(this.element&&element.form)this.url=this.$form.attr('action')};var originalUrl=this.url;this.url=this.url.replace(/\/nojs(\/|$|\?|#)/,'/ajax$1');if(drupalSettings.ajaxTrustedUrl[originalUrl])drupalSettings.ajaxTrustedUrl[this.url]=true;var ajax=this;ajax.options={url:ajax.url,data:ajax.submit,isInProgress:function isInProgress(){return ajax.ajaxing},beforeSerialize:function beforeSerialize(elementSettings,options){return ajax.beforeSerialize(elementSettings,options)},beforeSubmit:function beforeSubmit(formValues,elementSettings,options){ajax.ajaxing=true;return ajax.beforeSubmit(formValues,elementSettings,options)},beforeSend:function beforeSend(xmlhttprequest,options){ajax.ajaxing=true;return ajax.beforeSend(xmlhttprequest,options)},success:function success(response,status,xmlhttprequest){var _this=this;if(typeof response==='string')response=$.parseJSON(response);if(response!==null&&!drupalSettings.ajaxTrustedUrl[ajax.url])if(xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token')!=='1'){var customMessage=Drupal.t('The response failed verification so will not be processed.');return ajax.error(xmlhttprequest,ajax.url,customMessage)};return Promise.resolve(ajax.success(response,status)).then(function(){ajax.ajaxing=false;$(document).trigger('ajaxSuccess',[xmlhttprequest,_this]);$(document).trigger('ajaxComplete',[xmlhttprequest,_this]);if(--$.active===0)$(document).trigger('ajaxStop')})},error:function error(xmlhttprequest,status,_error){ajax.ajaxing=false},complete:function complete(xmlhttprequest,status){if(status==='error'||status==='parsererror')return ajax.error(xmlhttprequest,ajax.url)},dataType:'json',jsonp:false,type:'POST'};if(elementSettings.dialog)ajax.options.data.dialogOptions=elementSettings.dialog;if(ajax.options.url.indexOf('?')===-1){ajax.options.url+='?'}else ajax.options.url+='&';var wrapper="drupal_".concat(elementSettings.dialogType||'ajax');if(elementSettings.dialogRenderer)wrapper+=".".concat(elementSettings.dialogRenderer);ajax.options.url+="".concat(Drupal.ajax.WRAPPER_FORMAT,"=").concat(wrapper);$(ajax.element).on(elementSettings.event,function(event){if(!drupalSettings.ajaxTrustedUrl[ajax.url]&&!Drupal.url.isLocal(ajax.url))throw new Error(Drupal.t('The callback URL is not local and not trusted: !url',{'!url':ajax.url}));return ajax.eventResponse(this,event)});if(elementSettings.keypress)$(ajax.element).on('keypress',function(event){return ajax.keypressResponse(this,event)});if(elementSettings.prevent)$(ajax.element).on(elementSettings.prevent,false)};Drupal.ajax.WRAPPER_FORMAT='_wrapper_format';Drupal.Ajax.AJAX_REQUEST_PARAMETER='_drupal_ajax';Drupal.Ajax.prototype.execute=function(){if(this.ajaxing)return;try{this.beforeSerialize(this.element,this.options);return $.ajax(this.options)}catch(e){this.ajaxing=false;window.alert("An error occurred while attempting to process ".concat(this.options.url,": ").concat(e.message));return $.Deferred().reject()}};Drupal.Ajax.prototype.keypressResponse=function(element,event){var ajax=this;if(event.which===13||event.which===32&&element.type!=='text'&&element.type!=='textarea'&&element.type!=='tel'&&element.type!=='number'){event.preventDefault();event.stopPropagation();$(element).trigger(ajax.elementSettings.event)}};Drupal.Ajax.prototype.eventResponse=function(element,event){event.preventDefault();event.stopPropagation();var ajax=this;if(ajax.ajaxing)return;try{if(ajax.$form){if(ajax.setClick)element.form.clk=element;ajax.$form.ajaxSubmit(ajax.options)}else{ajax.beforeSerialize(ajax.element,ajax.options);$.ajax(ajax.options)}}catch(e){ajax.ajaxing=false;window.alert("An error occurred while attempting to process ".concat(ajax.options.url,": ").concat(e.message))}};Drupal.Ajax.prototype.beforeSerialize=function(element,options){if(this.$form&&document.body.contains(this.$form.get(0))){var settings=this.settings||drupalSettings;Drupal.detachBehaviors(this.$form.get(0),settings,'serialize')};options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER]=1;var pageState=drupalSettings.ajaxPageState;options.data['ajax_page_state[theme]']=pageState.theme;options.data['ajax_page_state[theme_token]']=pageState.theme_token;options.data['ajax_page_state[libraries]']=pageState.libraries};Drupal.Ajax.prototype.beforeSubmit=function(formValues,element,options){};Drupal.Ajax.prototype.beforeSend=function(xmlhttprequest,options){if(this.$form){options.extraData=options.extraData||{};options.extraData.ajax_iframe_upload='1';var v=$.fieldValue(this.element);if(v!==null)options.extraData[this.element.name]=v};$(this.element).prop('disabled',true);if(!this.progress||!this.progress.type)return;var progressIndicatorMethod="setProgressIndicator".concat(this.progress.type.slice(0,1).toUpperCase()).concat(this.progress.type.slice(1).toLowerCase());if(progressIndicatorMethod in this&&typeof this[progressIndicatorMethod]==='function')this[progressIndicatorMethod].call(this)};Drupal.theme.ajaxProgressThrobber=function(message){var messageMarkup=typeof message==='string'?Drupal.theme('ajaxProgressMessage',message):'',throbber='<div class="throbber">&nbsp;</div>';return"<div class=\"ajax-progress ajax-progress-throbber\">".concat(throbber).concat(messageMarkup,"</div>")};Drupal.theme.ajaxProgressIndicatorFullscreen=function(){return'<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>'};Drupal.theme.ajaxProgressMessage=function(message){return"<div class=\"message\">".concat(message,"</div>")};Drupal.theme.ajaxProgressBar=function($element){return $('<div class="ajax-progress ajax-progress-bar"></div>').append($element)};Drupal.Ajax.prototype.setProgressIndicatorBar=function(){var progressBar=new Drupal.ProgressBar("ajax-progress-".concat(this.element.id),$.noop,this.progress.method,$.noop);if(this.progress.message)progressBar.setProgress(-1,this.progress.message);if(this.progress.url)progressBar.startMonitoring(this.progress.url,this.progress.interval||1500);this.progress.element=$(Drupal.theme('ajaxProgressBar',progressBar.element));this.progress.object=progressBar;$(this.element).after(this.progress.element)};Drupal.Ajax.prototype.setProgressIndicatorThrobber=function(){this.progress.element=$(Drupal.theme('ajaxProgressThrobber',this.progress.message));$(this.element).after(this.progress.element)};Drupal.Ajax.prototype.setProgressIndicatorFullscreen=function(){this.progress.element=$(Drupal.theme('ajaxProgressIndicatorFullscreen'));$('body').append(this.progress.element)};Drupal.Ajax.prototype.commandExecutionQueue=function(response,status){var _this2=this,ajaxCommands=this.commands;return Object.keys(response||{}).reduce(function(executionQueue,key){return executionQueue.then(function(){var command=response[key].command;if(command&&ajaxCommands[command])return ajaxCommands[command](_this2,response[key],status)})},Promise.resolve())};Drupal.Ajax.prototype.success=function(response,status){var _this3=this;if(this.progress.element)$(this.progress.element).remove();if(this.progress.object)this.progress.object.stopMonitoring();$(this.element).prop('disabled',false);var elementParents=$(this.element).parents('[data-drupal-selector]').addBack().toArray(),focusChanged=Object.keys(response||{}).some(function(key){var _response$key=response[key],command=_response$key.command,method=_response$key.method;return command==='focusFirst'||command==='invoke'&&method==='focus'});return this.commandExecutionQueue(response,status).then(function(){if(!focusChanged&&_this3.element&&!$(_this3.element).data('disable-refocus')){var target=false;for(var n=elementParents.length-1;!target&&n>=0;n--)target=document.querySelector("[data-drupal-selector=\"".concat(elementParents[n].getAttribute('data-drupal-selector'),"\"]"));if(target)$(target).trigger('focus')};if(_this3.$form&&document.body.contains(_this3.$form.get(0))){var settings=_this3.settings||drupalSettings;Drupal.attachBehaviors(_this3.$form.get(0),settings)};_this3.settings=null}).catch(function(error){return console.error(Drupal.t('An error occurred during the execution of the Ajax response: !error',{'!error':error}))})};Drupal.Ajax.prototype.getEffect=function(response){var type=response.effect||this.effect,speed=response.speed||this.speed,effect={};if(type==='none'){effect.showEffect='show';effect.hideEffect='hide';effect.showSpeed=''}else if(type==='fade'){effect.showEffect='fadeIn';effect.hideEffect='fadeOut';effect.showSpeed=speed}else{effect.showEffect="".concat(type,"Toggle");effect.hideEffect="".concat(type,"Toggle");effect.showSpeed=speed};return effect};Drupal.Ajax.prototype.error=function(xmlhttprequest,uri,customMessage){if(this.progress.element)$(this.progress.element).remove();if(this.progress.object)this.progress.object.stopMonitoring();$(this.wrapper).show();$(this.element).prop('disabled',false);if(this.$form&&document.body.contains(this.$form.get(0))){var settings=this.settings||drupalSettings;Drupal.attachBehaviors(this.$form.get(0),settings)};throw new Drupal.AjaxError(xmlhttprequest,uri,customMessage)};Drupal.theme.ajaxWrapperNewContent=function($newContent,ajax,response){return(response.effect||ajax.effect)!=='none'&&$newContent.filter(function(i){return!($newContent[i].nodeName==='#comment'||$newContent[i].nodeName==='#text'&&/^(\s|\n|\r)*$/.test($newContent[i].textContent))}).length>1?Drupal.theme('ajaxWrapperMultipleRootElements',$newContent):$newContent};Drupal.theme.ajaxWrapperMultipleRootElements=function($elements){return $('<div></div>').append($elements)};Drupal.AjaxCommands=function(){};Drupal.AjaxCommands.prototype={insert:function insert(ajax,response){var $wrapper=response.selector?$(response.selector):$(ajax.wrapper),method=response.method||ajax.method,effect=ajax.getEffect(response),settings=response.settings||ajax.settings||drupalSettings,$newContent=$($.parseHTML(response.data,document,true));$newContent=Drupal.theme('ajaxWrapperNewContent',$newContent,ajax,response);switch(method){case'html':case'replaceWith':case'replaceAll':case'empty':case'remove':Drupal.detachBehaviors($wrapper.get(0),settings);break;default:break};$wrapper[method]($newContent);if(effect.showEffect!=='show')$newContent.hide();var $ajaxNewContent=$newContent.find('.ajax-new-content');if($ajaxNewContent.length){$ajaxNewContent.hide();$newContent.show();$ajaxNewContent[effect.showEffect](effect.showSpeed)}else if(effect.showEffect!=='show')$newContent[effect.showEffect](effect.showSpeed);if($newContent.parents('html').length)$newContent.each(function(index,element){if(element.nodeType===Node.ELEMENT_NODE)Drupal.attachBehaviors(element,settings)})},remove:function remove(ajax,response,status){var settings=response.settings||ajax.settings||drupalSettings;$(response.selector).each(function(){Drupal.detachBehaviors(this,settings)}).remove()},changed:function changed(ajax,response,status){var $element=$(response.selector);if(!$element.hasClass('ajax-changed')){$element.addClass('ajax-changed');if(response.asterisk)$element.find(response.asterisk).append(" <abbr class=\"ajax-changed\" title=\"".concat(Drupal.t('Changed'),"\">*</abbr> "))}},alert:function alert(ajax,response,status){window.alert(response.text)},announce:function announce(ajax,response){if(response.priority){Drupal.announce(response.text,response.priority)}else Drupal.announce(response.text)},redirect:function redirect(ajax,response,status){window.location=response.url},css:function css(ajax,response,status){$(response.selector).css(response.argument)},settings:function settings(ajax,response,status){var ajaxSettings=drupalSettings.ajax;if(ajaxSettings)Drupal.ajax.expired().forEach(function(instance){if(instance.selector){var selector=instance.selector.replace('#','');if(selector in ajaxSettings)delete ajaxSettings[selector]}});if(response.merge){$.extend(true,drupalSettings,response.settings)}else ajax.settings=response.settings},data:function data(ajax,response,status){$(response.selector).data(response.name,response.value)},focusFirst:function focusFirst(ajax,response,status){var focusChanged=false,container=document.querySelector(response.selector);if(container){var tabbableElements=tabbable(container);if(tabbableElements.length){tabbableElements[0].focus();focusChanged=true}else if(isFocusable(container)){container.focus();focusChanged=true}};if(ajax.hasOwnProperty('element')&&!focusChanged)ajax.element.focus()},invoke:function invoke(ajax,response,status){var $element=$(response.selector);$element[response.method].apply($element,_toConsumableArray(response.args))},restripe:function restripe(ajax,response,status){$(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even')},update_build_id:function update_build_id(ajax,response,status){document.querySelectorAll("input[name=\"form_build_id\"][value=\"".concat(response.old,"\"]")).forEach(function(item){item.value=response.new})},add_css:function add_css(ajax,response,status){$('head').prepend(response.data)},message:function message(ajax,response){var messages=new Drupal.Message(document.querySelector(response.messageWrapperQuerySelector));if(response.clearPrevious)messages.clear();messages.add(response.message,response.messageOptions)},add_js:function add_js(ajax,response,status){var parentEl=document.querySelector(response.selector||'body'),settings=ajax.settings||drupalSettings,allUniqueBundleIds=response.data.map(function(script){var uniqueBundleId=script.src+ajax.instanceIndex;loadjs(script.src,uniqueBundleId,{async:false,before:function before(path,scriptEl){Object.keys(script).forEach(function(attributeKey){scriptEl.setAttribute(attributeKey,script[attributeKey])});parentEl.appendChild(scriptEl);return false}});return uniqueBundleId});return new Promise(function(resolve,reject){loadjs.ready(allUniqueBundleIds,{success:function success(){Drupal.attachBehaviors(parentEl,settings);resolve()},error:function error(depsNotFound){var message=Drupal.t("The following files could not be loaded: @dependencies",{'@dependencies':depsNotFound.join(', ')});reject(message)}})})}};var stopEvent=function stopEvent(xhr,settings){return xhr.getResponseHeader('X-Drupal-Ajax-Token')==='1'&&settings.isInProgress&&settings.isInProgress()};$.extend(true,$.event.special,{ajaxSuccess:{trigger:function trigger(event,xhr,settings){if(stopEvent(xhr,settings))return false}},ajaxComplete:{trigger:function trigger(event,xhr,settings){if(stopEvent(xhr,settings)){$.active++;return false}}}})})(jQuery,window,Drupal,drupalSettings,loadjs,window.tabbable)
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/core/misc/ajax.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/themes/contrib/bootstrap/js/misc/ajax.js. */
(function($,window,Drupal,drupalSettings){Drupal.Ajax.prototype.findGlyphicon=function(element){return $(element).closest('.form-item').find('.ajax-progress.glyphicon')};Drupal.Ajax.prototype.glyphiconStart=function(element,message){var $glyphicon=this.findGlyphicon(element);if($glyphicon[0]){$glyphicon.addClass('glyphicon-spin');if($.fn.tooltip&&drupalSettings.bootstrap.tooltip_enabled){$glyphicon.removeAttr('data-toggle').removeAttr('data-original-title').removeAttr('title').tooltip('destroy');if(message)$glyphicon.attr('data-toggle','tooltip').attr('title',message).tooltip()};if(message)$glyphicon.parent().append('<div class="sr-only message">'+message+'</div>')};return $glyphicon};Drupal.Ajax.prototype.glyphiconStop=function(element){var $glyphicon=this.findGlyphicon(element);if($glyphicon[0]){$glyphicon.removeClass('glyphicon-spin');if($.fn.tooltip&&drupalSettings.bootstrap.tooltip_enabled)$glyphicon.removeAttr('data-toggle').removeAttr('data-original-title').removeAttr('title').tooltip('destroy')}};Drupal.Ajax.prototype.setProgressIndicatorThrobber=function(){var $element=$(this.element),$glyphicon=this.glyphiconStart($element,this.progress.message);if($glyphicon[0]){this.progress.element=$glyphicon.parent();this.progress.glyphicon=true;return};if(!this.progress.element)this.progress.element=$(Drupal.theme('ajaxThrobber'));if(this.progress.message)this.progress.element.after('<div class="message">'+this.progress.message+'</div>');if($element.is('input')){$element.after(this.progress.element)}else $element.append(this.progress.element)};var success=Drupal.Ajax.prototype.success;Drupal.Ajax.prototype.success=function(response,status){if(this.progress.element){if(this.progress.glyphicon){this.glyphiconStop(this.progress.element)}else this.progress.element.remove();this.progress.element.parent().find('.message').remove()};return success.apply(this,[response,status])}})(jQuery,this,Drupal,drupalSettings)
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/themes/contrib/bootstrap/js/misc/ajax.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/modules/custom/webform_donation_placeholders/js/donation_amounts.js. */
(function ($, window, Drupal, drupalSettings) {

    'use strict';

    let _this;
    let ignored_validation_css_class;
    let other_amount_timeout;
    const donation_forms = [];

    // Donation amounts functions.
    Drupal.behaviors.webform_donation_placeholders_donation_amounts = {
        attach: function (context, settings) {
            let element_type = $(context).prop('nodeName');
            if (element_type === 'SCRIPT') {
                return;
            }
            _this = this;
            if (typeof Drupal.behaviors.unicef_csv_settings !== 'undefined') {
                ignored_validation_css_class = Drupal.behaviors.unicef_csv_settings.getIgnoredValidationCssClass(true);
            }
            $('.donate-form-wrapper', context).once('webform_donation_placeholders_donation_amounts').each(function (index, element) {
                let $donation_form = $(this).closest('form');
                let $donation_amounts_wrapper = $donation_form.find('.donation-amounts-wrapper');
                let $tab_el = $donation_amounts_wrapper.find('.donation-tabs a[data-toggle="tab"]');
                let tab_href = $tab_el.attr('href');
                let $tab_target = $(tab_href);
                let $other_amount_wrapper = $donation_form.find('.other-amount-wrapper');
                let $other_amount = $other_amount_wrapper.find('input.other-amount');
                donation_forms[index] = [];
                donation_forms[index]['parent'] = $(this);
                donation_forms[index]['donation_form'] = $donation_form;
                donation_forms[index]['donation_amounts_wrapper'] = $donation_amounts_wrapper;
                donation_forms[index]['tab_element'] = $tab_el;
                donation_forms[index]['tab_href'] = tab_href;
                donation_forms[index]['tab_target'] = $tab_target;
                donation_forms[index]['button'] = $donation_form.find('button.donate-form-next-btn');
                donation_forms[index]['selected_amount'] = $tab_target.find('input.form-radio:checked');
                donation_forms[index]['other_amount_wrapper'] = $other_amount_wrapper;
                donation_forms[index]['other_amount'] = $other_amount;
                if ($donation_amounts_wrapper.length && $donation_amounts_wrapper.attr('data-amount-button') === 'true') {
                    donation_forms[index]['apply_amount_to_button'] = true;
                }
                // Set up default variables and initialize.
                _this.initButtonAmounts(index, context);
                _this.initOtherAmounts(index);
            });
        },
        getDonationFormProperty: function (index, property) {
            return donation_forms[index][property];
        },
        setDonationFormProperty: function (index, property, value) {
            donation_forms[index][property] = value;
        },
        initButtonAmounts: function (index, context) {
            if (donation_forms[index]['apply_amount_to_button'] === true) {
                let $amount_buttons = donation_forms[index]['donation_amounts_wrapper'].find('.donation-tabs-wrapper input.form-radio:not(.other-only)');
                if ($amount_buttons.length) {
                    // Tab clicks including fake tab click on form load.
                    if ($(context).prop('nodeName') === '#document') {
                        _this.tabClick(index);
                    }
                    donation_forms[index]['tab_element'].on('click', function () {
                        donation_forms[index]['tab_href'] = $(this).attr('href');
                        donation_forms[index]['tab_target'] = $(donation_forms[index]['tab_href']);
                        _this.tabClick(index);
                    });
                    // Amount button clicks.
                    $amount_buttons.on('click', function () {
                        _this.amountButtonClick(index, $(this));
                    });
                }
            }
        },
        initOtherAmounts: function (index) {
            // Other amount interactions.
            if (donation_forms[index]['other_amount_wrapper'].length) {
                if (donation_forms[index]['other_amount_wrapper'].hasClass('standalone')) {
                    donation_forms[index]['other_amount'].on('click', function () {
                        $(this).removeClass(ignored_validation_css_class);
                    });
                }
                donation_forms[index]['other_amount'].on('input', function () {
                    let $self = $(this);
                    if (other_amount_timeout !== null) {
                        clearTimeout(other_amount_timeout);
                    }
                    other_amount_timeout = setTimeout(function () {
                        _this.otherAmountBlur(index, $self);
                    }, 100);
                });
                donation_forms[index]['other_amount'].on('blur', function () {
                    _this.otherAmountBlur(index, $(this));
                });
            }
        },
        getButton: function ($el) {
            return $el.find('button.donate-form-next-btn');
        },
        setButtonMarkup: function ($button, text) {
            text = " " + text;
            let css_class = 'button-amount-text';
            let $span = $('<span>', {
                class: css_class,
                html: text
            });
            if ($button.find('.' + css_class).length) {
                $button.find('.' + css_class).text(text);
            } else {
                $button.append($span);
            }
        },
        getSelectedAmount(index, $amount_el) {
            let selectedAmount = $amount_el.attr('data-plain-sku');
            if ($amount_el.hasClass('other')) {
                let $other_amount_el = donation_forms[index]['tab_target'].find('input.other-amount');
                let other_amount_val = $other_amount_el.val();
                if (!isNaN(parseInt(other_amount_val))) {
                    selectedAmount = $other_amount_el.attr('data-currency-code') + other_amount_val;
                }
            }
            return selectedAmount;
        },
        tabClick: function (index) {
            let $amount_el = donation_forms[index]['tab_target'].find('input.form-radio:checked');
            let selectedAmount = _this.getSelectedAmount(index, $amount_el);
            _this.setDonationFormProperty(index, 'selected_amount', selectedAmount);
            _this.setButtonMarkup(donation_forms[index]['button'], selectedAmount);
        },
        amountButtonClick: function (index, $amount_el) {
            let selectedAmount = _this.getSelectedAmount(index, $amount_el);
            _this.setDonationFormProperty(index, 'selected_amount', selectedAmount);
            _this.setButtonMarkup(donation_forms[index]['button'], selectedAmount);
        },
        otherAmountBlur: function (index, $other_amount_el) {
            // Uncheck amount radios and set button amount if we have a value in other amount field.
            if ($other_amount_el.val().length) {
                // Get active / checked donation amount and uncheck it.
                let $active_radio = donation_forms[index]['tab_target'].find('input.form-radio:checked').not('.other');
                $active_radio.prop('checked', false);
                // Get the hidden other amount radio and click it - required for datalayer events.
                let $other_radio = donation_forms[index]['tab_target'].find('input.form-radio.other.standalone');
                $other_radio.click();
                // Apply the other amount to the submit button.
                if (donation_forms[index]['apply_amount_to_button'] === true) {
                    let selectedAmount = $other_amount_el.attr('data-currency-code') + $other_amount_el.val();
                    _this.setButtonMarkup(donation_forms[index]['button'], selectedAmount);
                }
            }
        }
    };
})(jQuery, window, Drupal, drupalSettings);

/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/modules/custom/webform_donation_placeholders/js/donation_amounts.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/core/misc/details-summarized-content.js. */
(function($,Drupal){function DetailsSummarizedContent(node){this.$node=$(node);this.setupSummary()};$.extend(DetailsSummarizedContent,{instances:[]});$.extend(DetailsSummarizedContent.prototype,{setupSummary:function setupSummary(){this.$detailsSummarizedContentWrapper=$(Drupal.theme('detailsSummarizedContentWrapper'));this.$node.on('summaryUpdated',$.proxy(this.onSummaryUpdated,this)).trigger('summaryUpdated').find('> summary').append(this.$detailsSummarizedContentWrapper)},onSummaryUpdated:function onSummaryUpdated(){var text=this.$node.drupalGetSummary();this.$detailsSummarizedContentWrapper.html(Drupal.theme('detailsSummarizedContentText',text))}});Drupal.behaviors.detailsSummary={attach:function attach(context){DetailsSummarizedContent.instances=DetailsSummarizedContent.instances.concat(once('details','details',context).map(function(details){return new DetailsSummarizedContent(details)}))}};Drupal.DetailsSummarizedContent=DetailsSummarizedContent;Drupal.theme.detailsSummarizedContentWrapper=function(){return"<span class=\"summary\"></span>"};Drupal.theme.detailsSummarizedContentText=function(text){return text?" (".concat(text,")"):''}})(jQuery,Drupal)
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/core/misc/details-summarized-content.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/core/misc/details-aria.js. */
(function($,Drupal){Drupal.behaviors.detailsAria={attach:function attach(){$(once('detailsAria','body')).on('click.detailsAria','summary',function(event){var $summary=$(event.currentTarget),open=$(event.currentTarget.parentNode).attr('open')==='open'?'false':'true';$summary.attr({'aria-expanded':open,'aria-pressed':open})})}}})(jQuery,Drupal)
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/core/misc/details-aria.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/core/misc/collapse.js. */
(function($,Modernizr,Drupal){function CollapsibleDetails(node){this.$node=$(node);this.$node.data('details',this);var anchor=window.location.hash&&window.location.hash!=='#'?", ".concat(window.location.hash):'';if(this.$node.find(".error".concat(anchor)).length)this.$node.attr('open',true);this.setupSummaryPolyfill()};$.extend(CollapsibleDetails,{instances:[]});$.extend(CollapsibleDetails.prototype,{setupSummaryPolyfill:function setupSummaryPolyfill(){var $summary=this.$node.find('> summary');$summary.attr('tabindex','-1');$('<span class="details-summary-prefix visually-hidden"></span>').append(this.$node.attr('open')?Drupal.t('Hide'):Drupal.t('Show')).prependTo($summary).after(document.createTextNode(' '));$('<a class="details-title"></a>').attr('href',"#".concat(this.$node.attr('id'))).prepend($summary.contents()).appendTo($summary);$summary.append(this.$summary).on('click',$.proxy(this.onSummaryClick,this))},onSummaryClick:function onSummaryClick(e){this.toggle();e.preventDefault()},toggle:function toggle(){var _this=this,isOpen=!!this.$node.attr('open'),$summaryPrefix=this.$node.find('> summary span.details-summary-prefix');if(isOpen){$summaryPrefix.html(Drupal.t('Show'))}else $summaryPrefix.html(Drupal.t('Hide'));setTimeout(function(){_this.$node.attr('open',!isOpen)},0)}});Drupal.behaviors.collapse={attach:function attach(context){if(Modernizr.details)return;once('collapse','details',context).forEach(function(detail){detail.classList.add('collapse-processed');CollapsibleDetails.instances.push(new CollapsibleDetails(detail))})}};var handleFragmentLinkClickOrHashChange=function handleFragmentLinkClickOrHashChange(e,$target){$target.parents('details').not('[open]').find('> summary').trigger('click')};$('body').on('formFragmentLinkClickOrHashChange.details',handleFragmentLinkClickOrHashChange);Drupal.CollapsibleDetails=CollapsibleDetails})(jQuery,Modernizr,Drupal)
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/core/misc/collapse.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/modules/custom/unicef_validation/modules/unicef_clientside_validation/js/unicef_csv_maximum_amounts.js. */
(function($,Drupal,drupalSettings){Drupal.behaviors.unicef_csv_maximum_amounts={attach:function(context){$(context).once('unicef_csv_maximum_amounts').each(function(){$.validator.addMethod("maximum_amounts",function(value,element){if(!value&&this.optional(element))return true;var $element=$(element),number;if(value.match('^\\d+(,\\d{0,2})?$')){number=value.replace(',','.')}else if(value.match(',')){number=value.replaceAll(',','')}else number=value;var maximum_amount=$element.attr('data-maximum-amount');if(typeof maximum_amount!=='undefined'&&typeof number!=='undefined')if(Number(number)>Number(maximum_amount))return false;return true},$.validator.format(Drupal.t("Please enter a valid amount")))})}}})(jQuery,Drupal,drupalSettings)
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/modules/custom/unicef_validation/modules/unicef_clientside_validation/js/unicef_csv_maximum_amounts.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/modules/custom/unicef_validation/modules/unicef_clientside_validation/js/unicef_csv_minimum_amounts.js. */
(function($,Drupal,drupalSettings){Drupal.behaviors.unicef_csv_minimum_amounts={attach:function(context){$(context).once('unicef_csv_minimum_amounts').each(function(){$.validator.addMethod("minimum_amounts",function(value,element){if(!value&&this.optional(element))return true;var $element=$(element),number;if(value.match('^\\d+(,\\d{0,2})?$')){number=value.replace(',','.')}else if(value.match(',')){number=value.replaceAll(',','')}else number=value;var minimum_amount=$element.attr('data-minimum-amount');if(typeof minimum_amount!=='undefined'&&typeof number!=='undefined')if(Number(number)<Number(minimum_amount))return false;return true},$.validator.format(Drupal.t("Please enter a valid amount")))})}}})(jQuery,Drupal,drupalSettings)
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/modules/custom/unicef_validation/modules/unicef_clientside_validation/js/unicef_csv_minimum_amounts.js. */;
