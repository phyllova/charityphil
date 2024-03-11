"use strict";(self.funElementsApi=self.funElementsApi||[]).push([[5478],{13295:(e,t,n)=>{var a;n.d(t,{X:()=>a}),function(e){e.NO="no",e.CHECKOUT="checkout",e.CUSTOM="custom"}(a||(a={}))},38147:(e,t,n)=>{n.d(t,{H:()=>m});var a=n(99010);class s{constructor(e){this.checkoutTypes=e.checkoutTypes,this.donorPortalUrl=e.donorPortalUrl,this.window=e.window,this.campaignKey=e.campaignKey,this.customHash=e.customHash}shouldRedirect(){var e,t;return!!this.donorPortalUrl&&!!(null===(e=this.checkoutTypes)||void 0===e?void 0:e.campaignPage)&&!(null===(t=this.checkoutTypes)||void 0===t?void 0:t.checkoutModal)}getCampaignPageUrl(){return this.donorPortalUrl?function(e,t,n){const a=new URL(`${e}/page/${t}`);return a.toString()}(this.donorPortalUrl,this.customHash||this.campaignKey):""}openCampaignPage(e){const{searchParams:t,elementType:n,element:s,checkoutData:i,checkoutIntent:r,elementTitle:o,elementName:l}=e||{},c=this.getCampaignPageUrl();if(!c)return;const m=new URL(c),h=null!=t?t:new URLSearchParams;n&&h.set("elementType",n),o&&h.set("elementTitle",o),l&&h.set("elementName",l),s&&h.set("element",s),i&&h.set("elementCheckoutData",this.encodeCheckoutData(i)),r&&h.set("checkoutIntent",this.encodeCheckoutData(r));const u=m.toString(),d=h.size?`?${(0,a.VJ)(h)}`:"";this.window.location.href=`${u}${d}`}encodeCheckoutData(e){const t=JSON.stringify(e),n=encodeURIComponent(t).replace(/%([0-9A-F]{2})/g,((e,t)=>{const n=parseInt(t,16);return String.fromCharCode(n)}));return btoa(n)}}var i=n(12952),r=n(24984);class o extends r.f{get eventType(){return i.uF}}var l=n(57518),c=n(57814);class m{constructor(e){this.checkoutData={},this.elementData=e.elementData,this.tracker=e.tracker,e.elementData.elementType===l.Yq.REMINDER&&(this.elementData.elementReminderKey=this.elementData.elementKey),e.checkoutData&&(this.checkoutData=e.checkoutData),this.queryParams=e.queryParams}open(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};null===this.checkoutData.designationId&&(this.checkoutData.modifyDesignation=!0);const a=Object.assign({},this.checkoutData,t);this.elementTrackingData=t.elementTrackingData;const i={provideCustomAmount:Boolean(a.amount),screen:t.screen,elementReminderKey:t.elementReminderKey},r=t.intent||void 0,o=Object.assign({},this.elementData,i),l=(0,c.aN)();l&&(n.fundraiseupLivemode=l),this.mutateLauncherForReminder(o,t),this.trackElementOpenCheckout(e);const m={launcher:o,checkoutData:a,checkoutIntent:r,test:{name:this.elementData.splitTestName,variant:this.elementData.splitTestVariant},elementTrackingData:this.elementTrackingData,queryParams:Object.assign(Object.assign({},this.queryParams||{}),n)},h=new s({checkoutTypes:this.elementData.checkoutTypes,donorPortalUrl:this.elementData.donorPortalUrl,window,campaignKey:e,customHash:this.elementData.customHash});return h.shouldRedirect()?(h.openCampaignPage({elementType:this.elementData.elementType,elementTitle:this.elementData.elementTitle,elementName:this.elementData.elementName,element:this.elementData.elementKey,searchParams:new URL(window.location.href).searchParams,checkoutData:{recurring:a.recurring,modifyAmount:a.modifyAmount,amount:a.amount,designationId:a.designationId,currency:a.currency,allowCentsForCharges:a.allowCentsForCharges,tribute:a.tribute?{type:a.tribute.type,inHonorOf:a.tribute.inHonorOf,labelType:a.tribute.labelType}:void 0,customFields:a.customFields,fundraiser:a.fundraiser,modifyDesignation:a.modifyDesignation,successUrl:a.successUrl,hints:a.hints,selectedHint:a.selectedHint,isCustomAmount:a.isCustomAmount}}),Promise.resolve()):(window.FUN.checkout.open(e,m),Promise.resolve())}trackElementOpenCheckout(e){this.tracker.track(new o({widgetKey:e,elementKey:this.elementData.elementKey,elementType:this.elementData.elementType,elementLocale:this.elementData.elementLocale,elementReminderKey:this.elementData.elementReminderKey,splitTestName:this.elementData.splitTestName,splitTestVariant:this.elementData.splitTestVariant,fundraisingPageKey:this.elementData.fundraisingPageKey,elementData:this.elementTrackingData}))}mutateLauncherForReminder(e,t){var n,a;t.intent&&this.elementData.elementType===l.Yq.REMINDER&&(e.elementReminderKey=this.elementData.elementKey,t.intent.element&&(e.elementKey=null!==(n=t.intent.element.key)&&void 0!==n?n:e.elementKey,e.elementType=null!==(a=t.intent.element.type)&&void 0!==a?a:e.elementType))}}},98403:(e,t,n)=>{function a(e,t){let n=t;return e.isWidgetCustomHash(t)&&(n=e.getWidgetKeyByCustomHash(t)||t),n.toUpperCase()}n.r(t),n.d(t,{default:()=>l});var s=n(57518),i=n(12548),r=n(57814),o=n(23827);class l extends o.H{constructor(e){e.elementKey="",super(e)}render(){var e;this.initViewPortTracker(this.node),null===(e=this.viewportTracker)||void 0===e||e.checkVisibility();const t=(0,r.BR)(this,this.tracker);return this.node.addEventListener("click",(e=>{e.preventDefault(),function(e){let{tracker:t,keysKeeper:n,widgetKey:r,splitTestVariant:o,splitTestName:l,elementKey:c="",elementType:m=s.Yq.LINK}=e;t.track(new i.q({widgetKey:n?a(n,r):r,elementKey:c,elementType:m,splitTestName:l,splitTestVariant:o}))}({tracker:this.tracker,splitTestName:this.splitTestName,splitTestVariant:this.splitTestVariant,widgetKey:this.widgetKey});const n=(0,r.G6)(e.target);t.open(this.widgetKey,{},n).catch(console.error)})),this}}}}]);