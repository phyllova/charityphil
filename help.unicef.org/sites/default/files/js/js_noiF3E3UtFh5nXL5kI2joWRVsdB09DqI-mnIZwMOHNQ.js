/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/core/misc/progress.js. */
(function($,Drupal){Drupal.theme.progressBar=function(id){return"<div id=\"".concat(id,"\" class=\"progress\" aria-live=\"polite\">")+'<div class="progress__label">&nbsp;</div><div class="progress__track"><div class="progress__bar"></div></div><div class="progress__percentage"></div><div class="progress__description">&nbsp;</div></div>'};Drupal.ProgressBar=function(id,updateCallback,method,errorCallback){this.id=id;this.method=method||'GET';this.updateCallback=updateCallback;this.errorCallback=errorCallback;this.element=$(Drupal.theme('progressBar',id))};$.extend(Drupal.ProgressBar.prototype,{setProgress:function setProgress(percentage,message,label){if(percentage>=0&&percentage<=100){$(this.element).find('div.progress__bar').css('width',"".concat(percentage,"%"));$(this.element).find('div.progress__percentage').html("".concat(percentage,"%"))};$('div.progress__description',this.element).html(message);$('div.progress__label',this.element).html(label);if(this.updateCallback)this.updateCallback(percentage,message,this)},startMonitoring:function startMonitoring(uri,delay){this.delay=delay;this.uri=uri;this.sendPing()},stopMonitoring:function stopMonitoring(){clearTimeout(this.timer);this.uri=null},sendPing:function sendPing(){if(this.timer)clearTimeout(this.timer);if(this.uri){var pb=this,uri=this.uri;if(uri.indexOf('?')===-1){uri+='?'}else uri+='&';uri+='_format=json';$.ajax({type:this.method,url:uri,data:'',dataType:'json',success:function success(progress){if(progress.status===0){pb.displayError(progress.data);return};pb.setProgress(progress.percentage,progress.message,progress.label);pb.timer=setTimeout(function(){pb.sendPing()},pb.delay)},error:function error(xmlhttp){var e=new Drupal.AjaxError(xmlhttp,pb.uri);pb.displayError("<pre>".concat(e.message,"</pre>"))}})}},displayError:function displayError(string){var error=$('<div class="messages messages--error"></div>').html(string);$(this.element).before(error).hide();if(this.errorCallback)this.errorCallback(this)}})})(jQuery,Drupal)
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/core/misc/progress.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/themes/contrib/bootstrap/js/misc/progress.js. */
(function($,Drupal){'use strict';Drupal.theme.progressBar=function(id){return'<div class="progress-wrapper" aria-live="polite"><div class="message"></div><div id ="'+id+'" class="progress progress-striped active"><div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span class="percentage"></span></div></div><div class="progress-label"></div></div>'};$.extend(Drupal.ProgressBar.prototype,{setProgress:function(percentage,message,label){if(percentage>=0&&percentage<=100){$(this.element).find('.progress-bar').css('width',percentage+'%').attr('aria-valuenow',percentage);$(this.element).find('.percentage').html(percentage+'%')};if(message){message=message.replace(/<br\/>&nbsp;|\s*$/,'');$('.message',this.element).html(message)};if(label)$('.progress-label',this.element).html(label);if(this.updateCallback)this.updateCallback(percentage,message,this)},displayError:function(string){var error=$('<div class="alert alert-block alert-error"><button class="close" data-dismiss="alert">&times;</button><h4>'+Drupal.t('Error message')+'</h4></div>').append(string);$(this.element).before(error).hide();if(this.errorCallback)this.errorCallback(this)}})})(jQuery,Drupal)
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/themes/contrib/bootstrap/js/misc/progress.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/core/assets/vendor/loadjs/loadjs.min.js. */
loadjs=function(){var h=function(){},c={},u={},f={};function o(e,n){if(e){var r=f[e];if(u[e]=n,r)for(;r.length;)r[0](e,n),r.splice(0,1)}}function l(e,n){e.call&&(e={success:e}),n.length?(e.error||h)(n):(e.success||h)(e)}function d(r,t,s,i){var c,o,e=document,n=s.async,u=(s.numRetries||0)+1,f=s.before||h,l=r.replace(/[\?|#].*$/,""),a=r.replace(/^(css|img)!/,"");i=i||0,/(^css!|\.css$)/.test(l)?((o=e.createElement("link")).rel="stylesheet",o.href=a,(c="hideFocus"in o)&&o.relList&&(c=0,o.rel="preload",o.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(l)?(o=e.createElement("img")).src=a:((o=e.createElement("script")).src=r,o.async=void 0===n||n),!(o.onload=o.onerror=o.onbeforeload=function(e){var n=e.type[0];if(c)try{o.sheet.cssText.length||(n="e")}catch(e){18!=e.code&&(n="e")}if("e"==n){if((i+=1)<u)return d(r,t,s,i)}else if("preload"==o.rel&&"style"==o.as)return o.rel="stylesheet";t(r,n,e.defaultPrevented)})!==f(r,o)&&e.head.appendChild(o)}function r(e,n,r){var t,s;if(n&&n.trim&&(t=n),s=(t?r:n)||{},t){if(t in c)throw"LoadJS";c[t]=!0}function i(n,r){!function(e,t,n){var r,s,i=(e=e.push?e:[e]).length,c=i,o=[];for(r=function(e,n,r){if("e"==n&&o.push(e),"b"==n){if(!r)return;o.push(e)}--i||t(o)},s=0;s<c;s++)d(e[s],r,n)}(e,function(e){l(s,e),n&&l({success:n,error:r},e),o(t,e)},s)}if(s.returnPromise)return new Promise(i);i()}return r.ready=function(e,n){return function(e,r){e=e.push?e:[e];var n,t,s,i=[],c=e.length,o=c;for(n=function(e,n){n.length&&i.push(e),--o||r(i)};c--;)t=e[c],(s=u[t])?n(t,s):(f[t]=f[t]||[]).push(n)}(e,function(e){l(n,e)}),r},r.done=function(e){o(e,[])},r.reset=function(){c={},u={},f={}},r.isDefined=function(e){return e in c},r}();
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/core/assets/vendor/loadjs/loadjs.min.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/core/modules/responsive_image/js/responsive_image.ajax.js. */
(function(Drupal){Drupal.behaviors.responsiveImageAJAX={attach:function attach(){if(window.picturefill)window.picturefill()}}})(Drupal)
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/core/modules/responsive_image/js/responsive_image.ajax.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/core/misc/ajax.js. */
function _toConsumableArray(arr){return _arrayWithoutHoles(arr)||_iterableToArray(arr)||_unsupportedIterableToArray(arr)||_nonIterableSpread()}
function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}
function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}
function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&iter[Symbol.iterator]!=null||iter["@@iterator"]!=null)return Array.from(iter)}
function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}
function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2};(function($,window,Drupal,drupalSettings,loadjs,_ref){var isFocusable=_ref.isFocusable,tabbable=_ref.tabbable;Drupal.behaviors.AJAX={attach:function attach(context,settings){function loadAjaxBehavior(base){var elementSettings=settings.ajax[base];if(typeof elementSettings.selector==='undefined')elementSettings.selector="#".concat(base);once('drupal-ajax',$(elementSettings.selector)).forEach(function(el){elementSettings.element=el;elementSettings.base=base;Drupal.ajax(elementSettings)})};Object.keys(settings.ajax||{}).forEach(function(base){return loadAjaxBehavior(base)});Drupal.ajax.bindAjaxLinks(document.body);once('ajax','.use-ajax-submit').forEach(function(el){var elementSettings={};elementSettings.url=$(el.form).attr('action');elementSettings.setClick=true;elementSettings.event='click';elementSettings.progress={type:'throbber'};elementSettings.base=el.id;elementSettings.element=el;Drupal.ajax(elementSettings)})},detach:function detach(context,settings,trigger){if(trigger==='unload')Drupal.ajax.expired().forEach(function(instance){Drupal.ajax.instances[instance.instanceIndex]=null})}};Drupal.AjaxError=function(xmlhttp,uri,customMessage){var statusCode,statusText,responseText;if(xmlhttp.status){statusCode="\n".concat(Drupal.t('An AJAX HTTP error occurred.'),"\n").concat(Drupal.t('HTTP Result Code: !status',{'!status':xmlhttp.status}))}else statusCode="\n".concat(Drupal.t('An AJAX HTTP request terminated abnormally.'));statusCode+="\n".concat(Drupal.t('Debugging information follows.'));var pathText="\n".concat(Drupal.t('Path: !uri',{'!uri':uri}));statusText='';try{statusText="\n".concat(Drupal.t('StatusText: !statusText',{'!statusText':xmlhttp.statusText.trim()}))}catch(e){};responseText='';try{responseText="\n".concat(Drupal.t('ResponseText: !responseText',{'!responseText':xmlhttp.responseText.trim()}))}catch(e){};responseText=responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi,'');responseText=responseText.replace(/[\n]+\s+/g,'\n');var readyStateText=xmlhttp.status===0?"\n".concat(Drupal.t('ReadyState: !readyState',{'!readyState':xmlhttp.readyState})):'';customMessage=customMessage?"\n".concat(Drupal.t('CustomMessage: !customMessage',{'!customMessage':customMessage})):'';this.message=statusCode+pathText+statusText+customMessage+responseText+readyStateText;this.name='AjaxError'};Drupal.AjaxError.prototype=new Error();Drupal.AjaxError.prototype.constructor=Drupal.AjaxError;Drupal.ajax=function(settings){if(arguments.length!==1)throw new Error('Drupal.ajax() function must be called with one configuration object only');var base=settings.base||false,element=settings.element||false;delete settings.base;delete settings.element;if(!settings.progress&&!element)settings.progress=false;var ajax=new Drupal.Ajax(base,element,settings);ajax.instanceIndex=Drupal.ajax.instances.length;Drupal.ajax.instances.push(ajax);return ajax};Drupal.ajax.instances=[];Drupal.ajax.expired=function(){return Drupal.ajax.instances.filter(function(instance){return instance&&instance.element!==false&&!document.body.contains(instance.element)})};Drupal.ajax.bindAjaxLinks=function(element){once('ajax','.use-ajax',element).forEach(function(ajaxLink){var $linkElement=$(ajaxLink),elementSettings={progress:{type:'throbber'},dialogType:$linkElement.data('dialog-type'),dialog:$linkElement.data('dialog-options'),dialogRenderer:$linkElement.data('dialog-renderer'),base:$linkElement.attr('id'),element:ajaxLink},href=$linkElement.attr('href');if(href){elementSettings.url=href;elementSettings.event='click'};Drupal.ajax(elementSettings)})};Drupal.Ajax=function(base,element,elementSettings){var defaults={event:element?'mousedown':null,keypress:true,selector:base?"#".concat(base):null,effect:'none',speed:'none',method:'replaceWith',progress:{type:'throbber',message:Drupal.t('Please wait...')},submit:{js:true}};$.extend(this,defaults,elementSettings);this.commands=new Drupal.AjaxCommands();this.instanceIndex=false;if(this.wrapper)this.wrapper="#".concat(this.wrapper);this.element=element;this.element_settings=elementSettings;this.elementSettings=elementSettings;if(this.element&&this.element.form)this.$form=$(this.element.form);if(!this.url){var $element=$(this.element);if($element.is('a')){this.url=$element.attr('href')}else if(this.element&&element.form)this.url=this.$form.attr('action')};var originalUrl=this.url;this.url=this.url.replace(/\/nojs(\/|$|\?|#)/,'/ajax$1');if(drupalSettings.ajaxTrustedUrl[originalUrl])drupalSettings.ajaxTrustedUrl[this.url]=true;var ajax=this;ajax.options={url:ajax.url,data:ajax.submit,isInProgress:function isInProgress(){return ajax.ajaxing},beforeSerialize:function beforeSerialize(elementSettings,options){return ajax.beforeSerialize(elementSettings,options)},beforeSubmit:function beforeSubmit(formValues,elementSettings,options){ajax.ajaxing=true;return ajax.beforeSubmit(formValues,elementSettings,options)},beforeSend:function beforeSend(xmlhttprequest,options){ajax.ajaxing=true;return ajax.beforeSend(xmlhttprequest,options)},success:function success(response,status,xmlhttprequest){var _this=this;if(typeof response==='string')response=$.parseJSON(response);if(response!==null&&!drupalSettings.ajaxTrustedUrl[ajax.url])if(xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token')!=='1'){var customMessage=Drupal.t('The response failed verification so will not be processed.');return ajax.error(xmlhttprequest,ajax.url,customMessage)};return Promise.resolve(ajax.success(response,status)).then(function(){ajax.ajaxing=false;$(document).trigger('ajaxSuccess',[xmlhttprequest,_this]);$(document).trigger('ajaxComplete',[xmlhttprequest,_this]);if(--$.active===0)$(document).trigger('ajaxStop')})},error:function error(xmlhttprequest,status,_error){ajax.ajaxing=false},complete:function complete(xmlhttprequest,status){if(status==='error'||status==='parsererror')return ajax.error(xmlhttprequest,ajax.url)},dataType:'json',jsonp:false,type:'POST'};if(elementSettings.dialog)ajax.options.data.dialogOptions=elementSettings.dialog;if(ajax.options.url.indexOf('?')===-1){ajax.options.url+='?'}else ajax.options.url+='&';var wrapper="drupal_".concat(elementSettings.dialogType||'ajax');if(elementSettings.dialogRenderer)wrapper+=".".concat(elementSettings.dialogRenderer);ajax.options.url+="".concat(Drupal.ajax.WRAPPER_FORMAT,"=").concat(wrapper);$(ajax.element).on(elementSettings.event,function(event){if(!drupalSettings.ajaxTrustedUrl[ajax.url]&&!Drupal.url.isLocal(ajax.url))throw new Error(Drupal.t('The callback URL is not local and not trusted: !url',{'!url':ajax.url}));return ajax.eventResponse(this,event)});if(elementSettings.keypress)$(ajax.element).on('keypress',function(event){return ajax.keypressResponse(this,event)});if(elementSettings.prevent)$(ajax.element).on(elementSettings.prevent,false)};Drupal.ajax.WRAPPER_FORMAT='_wrapper_format';Drupal.Ajax.AJAX_REQUEST_PARAMETER='_drupal_ajax';Drupal.Ajax.prototype.execute=function(){if(this.ajaxing)return;try{this.beforeSerialize(this.element,this.options);return $.ajax(this.options)}catch(e){this.ajaxing=false;window.alert("An error occurred while attempting to process ".concat(this.options.url,": ").concat(e.message));return $.Deferred().reject()}};Drupal.Ajax.prototype.keypressResponse=function(element,event){var ajax=this;if(event.which===13||event.which===32&&element.type!=='text'&&element.type!=='textarea'&&element.type!=='tel'&&element.type!=='number'){event.preventDefault();event.stopPropagation();$(element).trigger(ajax.elementSettings.event)}};Drupal.Ajax.prototype.eventResponse=function(element,event){event.preventDefault();event.stopPropagation();var ajax=this;if(ajax.ajaxing)return;try{if(ajax.$form){if(ajax.setClick)element.form.clk=element;ajax.$form.ajaxSubmit(ajax.options)}else{ajax.beforeSerialize(ajax.element,ajax.options);$.ajax(ajax.options)}}catch(e){ajax.ajaxing=false;window.alert("An error occurred while attempting to process ".concat(ajax.options.url,": ").concat(e.message))}};Drupal.Ajax.prototype.beforeSerialize=function(element,options){if(this.$form&&document.body.contains(this.$form.get(0))){var settings=this.settings||drupalSettings;Drupal.detachBehaviors(this.$form.get(0),settings,'serialize')};options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER]=1;var pageState=drupalSettings.ajaxPageState;options.data['ajax_page_state[theme]']=pageState.theme;options.data['ajax_page_state[theme_token]']=pageState.theme_token;options.data['ajax_page_state[libraries]']=pageState.libraries};Drupal.Ajax.prototype.beforeSubmit=function(formValues,element,options){};Drupal.Ajax.prototype.beforeSend=function(xmlhttprequest,options){if(this.$form){options.extraData=options.extraData||{};options.extraData.ajax_iframe_upload='1';var v=$.fieldValue(this.element);if(v!==null)options.extraData[this.element.name]=v};$(this.element).prop('disabled',true);if(!this.progress||!this.progress.type)return;var progressIndicatorMethod="setProgressIndicator".concat(this.progress.type.slice(0,1).toUpperCase()).concat(this.progress.type.slice(1).toLowerCase());if(progressIndicatorMethod in this&&typeof this[progressIndicatorMethod]==='function')this[progressIndicatorMethod].call(this)};Drupal.theme.ajaxProgressThrobber=function(message){var messageMarkup=typeof message==='string'?Drupal.theme('ajaxProgressMessage',message):'',throbber='<div class="throbber">&nbsp;</div>';return"<div class=\"ajax-progress ajax-progress-throbber\">".concat(throbber).concat(messageMarkup,"</div>")};Drupal.theme.ajaxProgressIndicatorFullscreen=function(){return'<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>'};Drupal.theme.ajaxProgressMessage=function(message){return"<div class=\"message\">".concat(message,"</div>")};Drupal.theme.ajaxProgressBar=function($element){return $('<div class="ajax-progress ajax-progress-bar"></div>').append($element)};Drupal.Ajax.prototype.setProgressIndicatorBar=function(){var progressBar=new Drupal.ProgressBar("ajax-progress-".concat(this.element.id),$.noop,this.progress.method,$.noop);if(this.progress.message)progressBar.setProgress(-1,this.progress.message);if(this.progress.url)progressBar.startMonitoring(this.progress.url,this.progress.interval||1500);this.progress.element=$(Drupal.theme('ajaxProgressBar',progressBar.element));this.progress.object=progressBar;$(this.element).after(this.progress.element)};Drupal.Ajax.prototype.setProgressIndicatorThrobber=function(){this.progress.element=$(Drupal.theme('ajaxProgressThrobber',this.progress.message));$(this.element).after(this.progress.element)};Drupal.Ajax.prototype.setProgressIndicatorFullscreen=function(){this.progress.element=$(Drupal.theme('ajaxProgressIndicatorFullscreen'));$('body').append(this.progress.element)};Drupal.Ajax.prototype.commandExecutionQueue=function(response,status){var _this2=this,ajaxCommands=this.commands;return Object.keys(response||{}).reduce(function(executionQueue,key){return executionQueue.then(function(){var command=response[key].command;if(command&&ajaxCommands[command])return ajaxCommands[command](_this2,response[key],status)})},Promise.resolve())};Drupal.Ajax.prototype.success=function(response,status){var _this3=this;if(this.progress.element)$(this.progress.element).remove();if(this.progress.object)this.progress.object.stopMonitoring();$(this.element).prop('disabled',false);var elementParents=$(this.element).parents('[data-drupal-selector]').addBack().toArray(),focusChanged=Object.keys(response||{}).some(function(key){var _response$key=response[key],command=_response$key.command,method=_response$key.method;return command==='focusFirst'||command==='invoke'&&method==='focus'});return this.commandExecutionQueue(response,status).then(function(){if(!focusChanged&&_this3.element&&!$(_this3.element).data('disable-refocus')){var target=false;for(var n=elementParents.length-1;!target&&n>=0;n--)target=document.querySelector("[data-drupal-selector=\"".concat(elementParents[n].getAttribute('data-drupal-selector'),"\"]"));if(target)$(target).trigger('focus')};if(_this3.$form&&document.body.contains(_this3.$form.get(0))){var settings=_this3.settings||drupalSettings;Drupal.attachBehaviors(_this3.$form.get(0),settings)};_this3.settings=null}).catch(function(error){return console.error(Drupal.t('An error occurred during the execution of the Ajax response: !error',{'!error':error}))})};Drupal.Ajax.prototype.getEffect=function(response){var type=response.effect||this.effect,speed=response.speed||this.speed,effect={};if(type==='none'){effect.showEffect='show';effect.hideEffect='hide';effect.showSpeed=''}else if(type==='fade'){effect.showEffect='fadeIn';effect.hideEffect='fadeOut';effect.showSpeed=speed}else{effect.showEffect="".concat(type,"Toggle");effect.hideEffect="".concat(type,"Toggle");effect.showSpeed=speed};return effect};Drupal.Ajax.prototype.error=function(xmlhttprequest,uri,customMessage){if(this.progress.element)$(this.progress.element).remove();if(this.progress.object)this.progress.object.stopMonitoring();$(this.wrapper).show();$(this.element).prop('disabled',false);if(this.$form&&document.body.contains(this.$form.get(0))){var settings=this.settings||drupalSettings;Drupal.attachBehaviors(this.$form.get(0),settings)};throw new Drupal.AjaxError(xmlhttprequest,uri,customMessage)};Drupal.theme.ajaxWrapperNewContent=function($newContent,ajax,response){return(response.effect||ajax.effect)!=='none'&&$newContent.filter(function(i){return!($newContent[i].nodeName==='#comment'||$newContent[i].nodeName==='#text'&&/^(\s|\n|\r)*$/.test($newContent[i].textContent))}).length>1?Drupal.theme('ajaxWrapperMultipleRootElements',$newContent):$newContent};Drupal.theme.ajaxWrapperMultipleRootElements=function($elements){return $('<div></div>').append($elements)};Drupal.AjaxCommands=function(){};Drupal.AjaxCommands.prototype={insert:function insert(ajax,response){var $wrapper=response.selector?$(response.selector):$(ajax.wrapper),method=response.method||ajax.method,effect=ajax.getEffect(response),settings=response.settings||ajax.settings||drupalSettings,$newContent=$($.parseHTML(response.data,document,true));$newContent=Drupal.theme('ajaxWrapperNewContent',$newContent,ajax,response);switch(method){case'html':case'replaceWith':case'replaceAll':case'empty':case'remove':Drupal.detachBehaviors($wrapper.get(0),settings);break;default:break};$wrapper[method]($newContent);if(effect.showEffect!=='show')$newContent.hide();var $ajaxNewContent=$newContent.find('.ajax-new-content');if($ajaxNewContent.length){$ajaxNewContent.hide();$newContent.show();$ajaxNewContent[effect.showEffect](effect.showSpeed)}else if(effect.showEffect!=='show')$newContent[effect.showEffect](effect.showSpeed);if($newContent.parents('html').length)$newContent.each(function(index,element){if(element.nodeType===Node.ELEMENT_NODE)Drupal.attachBehaviors(element,settings)})},remove:function remove(ajax,response,status){var settings=response.settings||ajax.settings||drupalSettings;$(response.selector).each(function(){Drupal.detachBehaviors(this,settings)}).remove()},changed:function changed(ajax,response,status){var $element=$(response.selector);if(!$element.hasClass('ajax-changed')){$element.addClass('ajax-changed');if(response.asterisk)$element.find(response.asterisk).append(" <abbr class=\"ajax-changed\" title=\"".concat(Drupal.t('Changed'),"\">*</abbr> "))}},alert:function alert(ajax,response,status){window.alert(response.text)},announce:function announce(ajax,response){if(response.priority){Drupal.announce(response.text,response.priority)}else Drupal.announce(response.text)},redirect:function redirect(ajax,response,status){window.location=response.url},css:function css(ajax,response,status){$(response.selector).css(response.argument)},settings:function settings(ajax,response,status){var ajaxSettings=drupalSettings.ajax;if(ajaxSettings)Drupal.ajax.expired().forEach(function(instance){if(instance.selector){var selector=instance.selector.replace('#','');if(selector in ajaxSettings)delete ajaxSettings[selector]}});if(response.merge){$.extend(true,drupalSettings,response.settings)}else ajax.settings=response.settings},data:function data(ajax,response,status){$(response.selector).data(response.name,response.value)},focusFirst:function focusFirst(ajax,response,status){var focusChanged=false,container=document.querySelector(response.selector);if(container){var tabbableElements=tabbable(container);if(tabbableElements.length){tabbableElements[0].focus();focusChanged=true}else if(isFocusable(container)){container.focus();focusChanged=true}};if(ajax.hasOwnProperty('element')&&!focusChanged)ajax.element.focus()},invoke:function invoke(ajax,response,status){var $element=$(response.selector);$element[response.method].apply($element,_toConsumableArray(response.args))},restripe:function restripe(ajax,response,status){$(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even')},update_build_id:function update_build_id(ajax,response,status){document.querySelectorAll("input[name=\"form_build_id\"][value=\"".concat(response.old,"\"]")).forEach(function(item){item.value=response.new})},add_css:function add_css(ajax,response,status){$('head').prepend(response.data)},message:function message(ajax,response){var messages=new Drupal.Message(document.querySelector(response.messageWrapperQuerySelector));if(response.clearPrevious)messages.clear();messages.add(response.message,response.messageOptions)},add_js:function add_js(ajax,response,status){var parentEl=document.querySelector(response.selector||'body'),settings=ajax.settings||drupalSettings,allUniqueBundleIds=response.data.map(function(script){var uniqueBundleId=script.src+ajax.instanceIndex;loadjs(script.src,uniqueBundleId,{async:false,before:function before(path,scriptEl){Object.keys(script).forEach(function(attributeKey){scriptEl.setAttribute(attributeKey,script[attributeKey])});parentEl.appendChild(scriptEl);return false}});return uniqueBundleId});return new Promise(function(resolve,reject){loadjs.ready(allUniqueBundleIds,{success:function success(){Drupal.attachBehaviors(parentEl,settings);resolve()},error:function error(depsNotFound){var message=Drupal.t("The following files could not be loaded: @dependencies",{'@dependencies':depsNotFound.join(', ')});reject(message)}})})}};var stopEvent=function stopEvent(xhr,settings){return xhr.getResponseHeader('X-Drupal-Ajax-Token')==='1'&&settings.isInProgress&&settings.isInProgress()};$.extend(true,$.event.special,{ajaxSuccess:{trigger:function trigger(event,xhr,settings){if(stopEvent(xhr,settings))return false}},ajaxComplete:{trigger:function trigger(event,xhr,settings){if(stopEvent(xhr,settings)){$.active++;return false}}}})})(jQuery,window,Drupal,drupalSettings,loadjs,window.tabbable)
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/core/misc/ajax.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/themes/contrib/bootstrap/js/misc/ajax.js. */
(function($,window,Drupal,drupalSettings){Drupal.Ajax.prototype.findGlyphicon=function(element){return $(element).closest('.form-item').find('.ajax-progress.glyphicon')};Drupal.Ajax.prototype.glyphiconStart=function(element,message){var $glyphicon=this.findGlyphicon(element);if($glyphicon[0]){$glyphicon.addClass('glyphicon-spin');if($.fn.tooltip&&drupalSettings.bootstrap.tooltip_enabled){$glyphicon.removeAttr('data-toggle').removeAttr('data-original-title').removeAttr('title').tooltip('destroy');if(message)$glyphicon.attr('data-toggle','tooltip').attr('title',message).tooltip()};if(message)$glyphicon.parent().append('<div class="sr-only message">'+message+'</div>')};return $glyphicon};Drupal.Ajax.prototype.glyphiconStop=function(element){var $glyphicon=this.findGlyphicon(element);if($glyphicon[0]){$glyphicon.removeClass('glyphicon-spin');if($.fn.tooltip&&drupalSettings.bootstrap.tooltip_enabled)$glyphicon.removeAttr('data-toggle').removeAttr('data-original-title').removeAttr('title').tooltip('destroy')}};Drupal.Ajax.prototype.setProgressIndicatorThrobber=function(){var $element=$(this.element),$glyphicon=this.glyphiconStart($element,this.progress.message);if($glyphicon[0]){this.progress.element=$glyphicon.parent();this.progress.glyphicon=true;return};if(!this.progress.element)this.progress.element=$(Drupal.theme('ajaxThrobber'));if(this.progress.message)this.progress.element.after('<div class="message">'+this.progress.message+'</div>');if($element.is('input')){$element.after(this.progress.element)}else $element.append(this.progress.element)};var success=Drupal.Ajax.prototype.success;Drupal.Ajax.prototype.success=function(response,status){if(this.progress.element){if(this.progress.glyphicon){this.glyphiconStop(this.progress.element)}else this.progress.element.remove();this.progress.element.parent().find('.message').remove()};return success.apply(this,[response,status])}})(jQuery,this,Drupal,drupalSettings)
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/themes/contrib/bootstrap/js/misc/ajax.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/modules/custom/commerce_donation_stripe/js/commerce_donation_stripe_elements_payment_intent.js. */

(function ($, window, Drupal, drupalSettings) {
    'use strict';
    var _this;
    var init = false;
    var customer = null;
    var $donation_form;
    var donation_form_index;
    var stripe_element_index = 0;
    var cards = [];
    var $stripe_payment_button;
    var $payment_wrapper;
    var $error_element;
    var country_code;
    var plugin_id;
    var action_type = null;
    var stripe_result;
    window.stripe_object = null;
    window.stripe_elements = [];
    /**
     * @type {Drupal~behavior}
     *
     * @prop {Drupal~behaviorAttach} attach
     *   Attaches the behavior for the Stripe elements processing.
     */
    Drupal.behaviors.commerceDonationStripeElements = {
        attach: function (context, settings) {
            // Set up closure reference and attach AJAX events
            _this = this;
            _this.ajaxEvents();
            // Iterate over elements.
            $('.commerce-donation-stripe-elements', context).once('commerceDonationStripeElements').each(function (e, i) {
                // Setup default vars.
                _this.setUpVars($(this));
                // Set Stripe object
                _this.setStripeObject();
                // clicked button, shared in the Stripe Outcome function
                if (action_type === '3dsecure') {
                    _this.processStripeElements();
                } else if (action_type === 'sepa') {
                    var $iban = $(this).find('#iban');
                    var stripe_options = _this.getStripeOptions();
                    var elements = window.stripe_object.elements(stripe_options);
                    // CSS styling for Stripe Elements
                    var options = {
                        supportedCountries: ['SEPA'],
                        placeholderCountry: country_code,
                    };
                    var options = $.extend(_this.getStyles(), options);
                    // Create instances of the card UI components
                    _this.addStripeElement($iban, 'iban', options, elements);
                    //enable submit button once stripe elements mounted
                    $stripe_payment_button.prop("disabled", false);
                    // Create an instance of the IBAN Element
                } else {
                    var $card_number_element = $(this).find('#cardNumber');
                    // grab the elements
                    var $card_expiry_element = $(this).find('#cardExpiry');
                    var $card_cvc_element = $(this).find('#cardCvc');
                    var $payment_request_button_element = $(this).find('#payment-request-button');
                    // create the Stripe elements JS object
                    var stripe_options = _this.getStripeOptions();
                    var elements = window.stripe_object.elements(stripe_options);
                    // CSS styling for Stripe Elements
                    var options = _this.getStyles();
                    // Add payment request button
                    _this.addStripePaymentRequestButton($payment_request_button_element, options, elements);
                    // Create instances of the card UI components
                    _this.addStripeElement($card_number_element, 'cardNumber', options, elements);
                    _this.addStripeElement($card_expiry_element, 'cardExpiry', options, elements);
                    _this.addStripeElement($card_cvc_element, 'cardCvc', options, elements);
                    // Enable submit button once stripe elements mounted.
                    $stripe_payment_button.prop("disabled", false);
                }
            });
        },
        ajaxEvents: function () {
            //Override default AJAX submit by providing validation when next button is clicked
            if (typeof Drupal.Ajax !== 'undefined' && typeof Drupal.Ajax.prototype.commerceDonationStripeSubmitOriginal === 'undefined') {
                Drupal.Ajax.prototype.commerceDonationStripeSubmitOriginal = Drupal.Ajax.prototype.beforeSubmit;
                Drupal.Ajax.prototype.beforeSubmit = function (formValues, element_settings, options) {
                    let $el = $(this.element);
                    if ($el.hasClass('stripe_elements_payment_intent_submit') && !$el.hasClass('stripe-processed')) {
                        _this.setUpVars($el);
                        $el.prop('disabled', true);
                        var $loading_icon = $el.find('.loading-icon');
                        if (!$loading_icon.length) {
                            $el.append('<span class="loading-icon"></span>');
                        }
                        let $error_element = $(this.$form).find('.error');
                        _this.processStripeElements();
                        this.ajaxing = false;
                        return false;
                    }
                    return this.commerceDonationStripeSubmitOriginal(formValues, element_settings, options);
                };
            }
        },
        setUpVars: function ($el) {
            $donation_form = $el.closest('form');
            donation_form_index = $donation_form.index();
            let $step_wrapper = $el.closest('.step_wrapper');
            let $payment_panel = $step_wrapper.find('.panel.payment-method');
            //Setup stripe element index and payment button
            if ($payment_panel.length) {
                stripe_element_index = $el.closest($payment_panel).index();
                $stripe_payment_button = $el.closest($payment_panel).find('.stripe_elements_payment_intent_submit');
            } else {
                $stripe_payment_button = $step_wrapper.find('.stripe_elements_payment_intent_submit');
            }
            plugin_id = $stripe_payment_button.data('unicef-plugin-id');
            $stripe_payment_button.prop("disabled", true);
            // Setup error element
            $error_element = $donation_form.find('.error');
            if ($error_element) {
                $error_element.removeClass('visible');
            }
            // Get country code
            country_code = _this.getCountryCode();
            // Set action type
            if (typeof drupalSettings.commerce_donation_stripe[plugin_id] !== "undefined") {
                action_type = drupalSettings.commerce_donation_stripe[plugin_id].action_type;
            }
            // Special case for /pledge_request which is a single step form.
            if ($stripe_payment_button.hasClass('pledge-request-button')) {
                $stripe_payment_button.on('click', function () {
                    if (!$stripe_payment_button.hasClass('stripe-processed')) {
                        _this.processStripeElements();
                        return false;
                    }
                });
            }
        },
        setStripeObject: function () {
            if (!window.stripe_object) {
                if (!drupalSettings.commerce_donation_stripe.connected_account) {
                    window.stripe_object = Stripe(drupalSettings.commerce_donation_stripe.publishable_key);
                } else {
                    window.stripe_object = Stripe(drupalSettings.commerce_donation_stripe.publishable_key, {stripeAccount: drupalSettings.commerce_donation_stripe.connected_account});
                }
            }
        },
        getStripeOptions: function () {
            return {
                locale: drupalSettings.commerce_donation_stripe.locale,
            };
        },
        getStyles: function () {
            return {
                style: {
                    base: {
                        iconColor: drupalSettings.commerce_donation_stripe.styles.iconColor,
                        color: drupalSettings.commerce_donation_stripe.styles.color,
                        backgroundColor: drupalSettings.commerce_donation_stripe.styles.backgroundColor,
                        lineHeight: drupalSettings.commerce_donation_stripe.styles.lineHeight,
                        fontWeight: drupalSettings.commerce_donation_stripe.styles.fontWeight,
                        fontFamily: drupalSettings.commerce_donation_stripe.styles.fontFamily,
                        fontSize: drupalSettings.commerce_donation_stripe.styles.fontSize,
                        '::placeholder': {
                            color: drupalSettings.commerce_donation_stripe.placeholderColor
                        }
                    }
                }
            };
        },
        getCountryCode: function () {
            country_code = drupalSettings.unicef_locale.country_code;
            if (drupalSettings.unicef_locale.country_code === '31') {
                country_code = 'US';
            }
            return country_code;
        },
        addStripeElement: function (selector, elementType, options, elements) {
            var $selector_div = $donation_form.find(selector);
            if ($selector_div.length && !$selector_div.hasClass('stripe-processed')) {
                var card_element = elements.create(elementType, options);
                card_element.mount($selector_div[0]);
                if (typeof window.stripe_elements[donation_form_index] === "undefined") {
                    window.stripe_elements[donation_form_index] = [];
                }
                if (typeof window.stripe_elements[donation_form_index][stripe_element_index] === "undefined") {
                    window.stripe_elements[donation_form_index][stripe_element_index] = [];
                }
                if (typeof window.stripe_elements[donation_form_index][stripe_element_index][plugin_id] === "undefined") {
                    window.stripe_elements[donation_form_index][stripe_element_index][plugin_id] = [];
                }
                window.stripe_elements[donation_form_index][stripe_element_index][plugin_id] = card_element;
                $selector_div.addClass('stripe-processed');
                //Input validation - this needs improvement
                card_element.on('change', function (event) {
                    // setup button reference and error display
                    if (event.error) {
                        $error_element.addClass('visible');
                        $error_element.text(event.error.message);
                    } else {
                        $error_element.removeClass('visible');
                        $error_element.text('');
                    }
                });
            }
        },
        addStripePaymentRequestButton: function (selector, options, elements) {
            // Check if we have a payment request button container.
            let $payment_request_button = $('#payment-request-button');
            if ($payment_request_button.length === 0) {
                return;
            }
            // Return if don't have any donation form vars.
            if (typeof drupalSettings.unicef_donation_form === "undefined") {
                return;
            }
            // Check if we have required donation amount keys else return.
            let required_keys = [
                'country',
                'currency_code',
                'donation_type_label',
                'donation_amount'
            ];
            let intersect_array = required_keys.filter((key) => {
                return drupalSettings.unicef_donation_form.hasOwnProperty(key);
            });
            if (intersect_array.length !== required_keys.length) {
                return;
            }
            // Format amount to int.
            let amount = parseInt(drupalSettings.unicef_donation_form.donation_amount);
            if (isNaN(amount)) {
                return;
            }
            amount = amount * 100;
            // Get correct country code for default group / 31.
            let country = _this.getCountryCode();
            // Try catch integration errors.
            try {
                // Setup paymentRequest with user values.
                const paymentRequest = window.stripe_object.paymentRequest({
                    country: country,
                    currency: drupalSettings.unicef_donation_form.currency_code.toLowerCase(),
                    total: {
                        label: drupalSettings.unicef_donation_form.donation_type_label,
                        amount: amount,
                    },
                    //requestPayerName: true,
                    requestPayerEmail: true,
                });
                const prButton = elements.create('paymentRequestButton', {
                    paymentRequest,
                });
                // Check the availability of the Payment Request API first.
                paymentRequest.canMakePayment().then(function (result) {
                    if (result) {
                        prButton.mount($payment_request_button[0]);
                        let $block = $payment_request_button.closest('.block-donation-form-block');
                        let $wrapper = $block.find('.donate-form-wrapper');
                        let $overlay = $('<div/>', {
                            class: 'payment-request-button-overlay'
                        }).appendTo($wrapper);
                        $overlay.append('<span class="loading-icon"></span>');
                    } else {
                        $payment_request_button.hide();
                    }
                });
                // Make the payment
                paymentRequest.on('paymentmethod', function (ev) {
                    let $block = $payment_request_button.closest('.block-donation-form-block');
                    let $wrapper = $block.find('.donate-form-wrapper');
                    let $overlay = $wrapper.find('.payment-request-button-overlay');
                    $overlay.addClass('active');
                    let $step_wrapper = $payment_request_button.closest('.step_wrapper');
                    $stripe_payment_button = $step_wrapper.find('.stripe_elements_payment_request_button');
                    var client_secret = drupalSettings.commerce_donation_stripe['stripe_elements_payment_intent'].action_client_secret;
                    // Confirm the PaymentIntent without handling potential next actions (yet).
                    window.stripe_object.confirmCardPayment(client_secret, {payment_method: ev.paymentMethod.id}).then(function (result) {
                        ev.complete('success');
                        stripe_result = result;
                        if (stripe_result.error) {
                            _this.displayError();
                           _this.passToken('failed');
                        } else {
                            // add the token to the input to include in the post back
                            var token = stripe_result.paymentIntent.id;
                            _this.passToken(token);
                        }
                        _this.processDatalayer();
                    });
                });
            } catch (error) {
                console.error(error);
            }
        },
        processStripeElements: function () {
            var client_secret = drupalSettings.commerce_donation_stripe[plugin_id].action_client_secret;
            var extraDetails;
            if (typeof drupalSettings.commerce_donation_stripe[plugin_id].customer !== 'undefined') {
                customer = JSON.parse(drupalSettings.commerce_donation_stripe[plugin_id].customer);
            }
            if (action_type === '3dsecure') {
                window.stripe_object.confirmCardPayment(client_secret).then(function (result) {
                    stripe_result = result;
                    if (stripe_result.error) {
                        _this.displayError();
                        _this.passToken('failed');
                    } else {
                        // add the token to the input to include in the post back
                        var token = stripe_result.paymentIntent.id;
                        _this.passToken(token);
                    }
                    _this.processDatalayer();
                });
            } else if (action_type === 'setupIntent') {
                extraDetails = {
                    payment_method: {
                        card: window.stripe_elements[donation_form_index][stripe_element_index][plugin_id]
                    }
                };
                window.stripe_object.confirmCardSetup(client_secret, extraDetails).then(function (result) {
                    stripe_result = result;
                    if (stripe_result.error) {
                        _this.displayError();
                    } else {
                        // add the token to the input to include in the post back
                        var token = stripe_result.setupIntent.id;
                        _this.passToken(token);
                    }
                    _this.processDatalayer();
                });
            } else if (action_type === 'one-time') {
                extraDetails = {
                    payment_method: {
                        card: window.stripe_elements[donation_form_index][stripe_element_index][plugin_id]
                    }
                };
                window.stripe_object.confirmCardPayment(client_secret, extraDetails).then(function (result) {
                    stripe_result = result;
                    if (stripe_result.error) {
                        _this.displayError();
                    } else {
                        // add the token to the input to include in the post back
                        var token = stripe_result.paymentIntent.id;
                        _this.passToken(token);
                    }
                    _this.processDatalayer();
                });
            } else if (action_type === 'sepa') {
                extraDetails = {
                    payment_method: {
                        sepa_debit: window.stripe_elements[donation_form_index][stripe_element_index][plugin_id],
                        billing_details: {
                            name: customer.name,
                            email: customer.email,
                        },
                    },
                };
                window.stripe_object.confirmSepaDebitSetup(client_secret, extraDetails).then(function (result) {
                    stripe_result = result;
                    if (stripe_result.error) {
                        _this.displayError();
                    } else {
                        // add the token to the input to include in the post back
                        var token = stripe_result.setupIntent.id;
                        _this.passToken(token);
                    }
                    _this.processDatalayer();
                });
            } else {
                extraDetails = {
                    'type': 'card',
                    'card': window.stripe_elements[donation_form_index][stripe_element_index][plugin_id]
                };
                window.stripe_object.createPaymentMethod(extraDetails).then(function (result) {
                    stripe_result = result;
                    if (stripe_result.error) {
                        _this.displayError();
                    } else {
                        // add the token to the input to include in the post back
                        var token = stripe_result.paymentMethod.id;
                        _this.passToken(token);
                    }
                    _this.processDatalayer();
                });
            }
        },
        displayError: function () {
            $error_element.text(stripe_result.error.message);
            $error_element.addClass('visible');
            $stripe_payment_button.prop("disabled", false);
            $stripe_payment_button.find('.loading-icon').remove();
        },
        passToken: function (token) {
            $('input.stripe_token').val(token);
            $stripe_payment_button.addClass('stripe-processed');
            $stripe_payment_button.click();
        },
        processDatalayer: function () {
            if (typeof Drupal.behaviors.unicef_datalayers_v2 !== "undefined") {
                Drupal.behaviors.unicef_datalayers_v2.donationEvents($donation_form, 'Donation Submit');
                if (!stripe_result.error) {
                    Drupal.behaviors.unicef_datalayers_v2.paymentProcessing($donation_form);
                }
            }
            if (typeof Drupal.behaviors.unicef_datalayers_v3 !== "undefined") {
                if (stripe_result.error) {
                    Drupal.behaviors.unicef_datalayers_v3.checkErrors('submit');
                }
            }
        }
    };
})(jQuery, window, Drupal, drupalSettings);
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/modules/custom/commerce_donation_stripe/js/commerce_donation_stripe_elements_payment_intent.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/libraries/custom/unicodeCharacters.js. */
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

/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/libraries/custom/unicodeCharacters.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/modules/custom/unicef_validation/modules/unicef_clientside_validation/js/unicef_csv_settings.js. */
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
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/modules/custom/unicef_validation/modules/unicef_clientside_validation/js/unicef_csv_settings.js. */;
/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/libraries/custom/consoleLogger.js. */
(function($,window,Drupal,drupalSettings){$.fn.consoleLogger=function(data){return this.each(function(){if(typeof drupalSettings.unicef_donation_form!=='undefined')if(typeof drupalSettings.unicef_donation_form.debug_form!=='undefined'){var debug_form=drupalSettings.unicef_donation_form.debug_form;if(debug_form)console.log(data)}})}})(jQuery,window,Drupal,drupalSettings)
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/libraries/custom/consoleLogger.js. */;
