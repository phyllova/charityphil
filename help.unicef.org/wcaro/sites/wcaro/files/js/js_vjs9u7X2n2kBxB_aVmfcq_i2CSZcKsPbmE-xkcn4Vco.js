/* Source and licensing information for the line(s) below can be found at https://help.unicef.org/wcaro/libraries/custom/consoleLogger.js. */
(function($,window,Drupal,drupalSettings){$.fn.consoleLogger=function(data){return this.each(function(){if(typeof drupalSettings.unicef_donation_form!=='undefined')if(typeof drupalSettings.unicef_donation_form.debug_form!=='undefined'){var debug_form=drupalSettings.unicef_donation_form.debug_form;if(debug_form)console.log(data)}})}})(jQuery,window,Drupal,drupalSettings)
/* Source and licensing information for the above line(s) can be found at https://help.unicef.org/wcaro/libraries/custom/consoleLogger.js. */;
