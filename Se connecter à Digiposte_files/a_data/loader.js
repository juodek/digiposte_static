!function(){var t=window.opera!==undefined&&"[object Opera]"===window.opera.toString();window.DimeloAsyncLoader={loadScript:function(e,n){var a=document.createElement("script");a.type="text/javascript",a.async=!0,!a.attachEvent||a.attachEvent.toString&&a.attachEvent.toString().indexOf("[native code")<0||t?a.addEventListener("load",function(){n()},!1):a.attachEvent("onreadystatechange",function(t){/^(complete|loaded)$/.test((t.currentTarget||t.srcElement).readyState)&&n()}),"/"===e[0]&&"/"===e[1]&&(e=("https:"===document.location.protocol?"https:":"http:")+e),a.src=e,(document.getElementsByTagName("body")[0]||document.getElementsByTagName("head")[0]).appendChild(a)}}}();

var _internal_chatq = _internal_chatq || [];

_internal_chatq.push(["_setDomainName","digiposte"]);
_internal_chatq.push(["_setToken","7072a99ec0081f28f7fd4f12"]);
_internal_chatq.push(["_setClientOptions",{"liveChat":true,"messageImpossibleDelay":480,"multiDomain":false,"webNotificationsEnabled":true,"jwtMode":"reject","disableAttachmentsUpload":false,"title":"Digiposte vous aide"}]);


// Triggers
_internal_chatq.push(["_addTriggers",[{"id":"5f91bbd73298c99919d9ed6b","label":"Default trigger","conditions":[{"source_name":"PAGE_URL","historical_position":"CURRENT_PAGE","operator":"IS","value":"fake.trigger"}],"supported_modes":["online"],"actions":[{"name":"SHOW_MESSAGING_OPEN"}],"processings":[],"debug":false,"check_presence":false,"last":false,"once":false}]]);




// Items


_internal_chatq.push(["_start"]);

DimeloAsyncLoader.loadScript("https://digiposte.dimelochat.com/assets/messaging-39db01e207c751b6e3f1905cec4e80f95364d87e7ec0de362ae689bed542787f.js", function () {

  

var $ = Dimelo.Messaging.jQuery;
var Client = Dimelo.Messaging.Client;
var Manager = Dimelo.Messaging.Manager;
var SDK = Dimelo.Messaging.SDK;

var base_url = "//%{domainName}.dimelochat.com";
var dm_url = "https://%{domain_name}.messaging.dimelo.com/web";

$.extend(Client, {
  COBROWSING_URL: base_url + "/chat/%{token}/cobrowsing.js",
  EMOJIONE_URL: base_url + "/images/emojione/%{imageType}/"
});

$.extend(Manager, {
  STATUS_URL: base_url + "/chat/%{token}/status.js",
  CROSS_STORAGE_HUB_URL: base_url + "/chat/%{token}/cross-storage-hub.html"
});

$.extend(SDK, {
  SSL_SUPPORTED: true,
  ATTACHMENT_URL: dm_url + "/attachments",
  DIMELO_MOBILE_URL: dm_url,
  ENV: "production",
  FAYE_URL: "https://%{domainName}.ws.dimelo.com/faye",
});


  
    "2021-12-02 10:22:00 +0200";
    Dimelo.Messaging.Manager.registerCustomVariable({"variable_name":"CUSTOM_ACTIF","type":"BOOLEAN","in_page_filling":false});
  

  
  
    var customStyleSheet = "@import url(\"https://fonts.googleapis.com/css2?family=Roboto\u0026display=swap\");.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper{}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-container{color:#212121}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-header{color:#fff;background-color:#4481eb;-webkit-tap-highlight-color:transparent}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-body{background:#fff}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-frame{background-color:#fff;background-color:rgba(255,255,255,0.9)}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-survey-frame{background:white}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-round-button{background-color:#4481eb;-webkit-tap-highlight-color:transparent}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-round-button:hover::before{content:'';position:absolute;display:block;top:0;left:0;width:100%;height:100%;border-radius:50%;background-color:rgba(0,0,0,0.12)}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-bubble-notification{background-color:#f0512a;color:#fff}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-bubble .dimelo-chat-bubble-icon svg g path:last-child{fill:#fff}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-bubble .dimelo-chat-bubble-minimize-icon svg,.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-bubble .dimelo-chat-bubble-minimize-icon svg g g{fill:#fff}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-wrapper.dimelo-chat-embedded .dimelo-chat-container .dimelo-chat-threads-frame,.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-wrapper.dimelo-chat-embedded .dimelo-chat-container .dimelo-chat-window,.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-wrapper.dimelo-chat-embedded .dimelo-chat-container .dimelo-chat-conversation-header{border-color:#E7E7E7}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-wrapper.dimelo-chat-embedded .dimelo-chat-container .dimelo-chat-embedded-header{background-color:#ffffff}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-wrapper.dimelo-chat-embedded .dimelo-chat-container .dimelo-chat-conversation-header-title{color:#A1A1A1}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-wrapper.dimelo-chat-embedded:not(.dimelo-chat-condensed) .dimelo-chat-container .dimelo-chat-thread.dimelo-chat-thread-selected{background-color:rgba(68,129,235,0.07)}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-global-notification{background-color:#f0512a}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-header .dimelo-chat-global-notification:hover+.dimelo-chat-control,.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-header .dimelo-chat-control:hover{background-color:#3d74d4}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-header{border-color:rgba(0,0,0,0.19)}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-control-quit-icon svg path,.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-control-close-right-icon svg path,.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-control-close-left-icon svg path,.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-control-back-icon svg path{fill:#fff}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-button{background-color:#4481eb;color:#fff}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-button:hover{background-color:#2d71e9}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-textarea::-webkit-input-placeholder{color:#A1A1A1}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-textarea:-ms-input-placeholder{color:#A1A1A1}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-textarea::placeholder{color:#A1A1A1}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-attachment-frame{background-color:#fff;background-color:rgba(255,255,255,0.9)}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-drop-zone{border-color:#4481eb;background-color:transparent}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-drag-active .dimelo-chat-drop-zone{background-color:rgba(68,129,235,0.1)}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-drop-zone-text{color:#4481eb}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-cobrowsing-status{background-color:#667080}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-cobrowsing-status .dimelo-chat-cobrowsing-status-text{color:white}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-cobrowsing-status .dimelo-chat-cobrowsing-status-close{color:black;background-color:#EFEFF0}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-cobrowsing-status .dimelo-chat-cobrowsing-status-close:hover{background-color:#d7d7d8}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-message-date{display:none}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-message-body{color:#212121;background-color:#ecf0f6}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-message-body a{color:#212121}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-select-button{background-color:#ffffff;border-color:#4481eb;color:#4481eb}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-select-button:hover{background-color:#4481eb;color:#fff}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-message-self .dimelo-chat-message-body{color:#fff;background-color:#4481eb}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-message-self .dimelo-chat-message-body a{color:#fff}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-message-attachment-pending .dimelo-chat-message-attachment-progress{outline-color:white}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-message-attachment-pending .dimelo-chat-message-attachment-progress-bar{background:white}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-message-attachment-pending .dimelo-chat-message-attachment-progress-bar.dimelo-chat-message-attachment-progress-bar-processing::before{background:rgba(68,129,235,0.6)}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-message-attachment.dimelo-chat-message-attachment-image .dimelo-chat-message-attachment-preview{border-color:#ecf0f6}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-timestamp p,.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-welcome-message p{background:#fff}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-timestamp span,.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-welcome-message span{background:linear-gradient(left, rgba(0,0,0,0.01), rgba(0,0,0,0.1), rgba(0,0,0,0.01))}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-queuing-update,.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-timestamp,.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-welcome-message,.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-message-identity-screenname,.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-message-date,.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-simple-timeline-item{color:#A1A1A1}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-thread-closure{color:#757575}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-emoji-zone{border-color:#D1D1D1;background:#fff}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-textarea-zone{border-color:#D1D1D1;background:white}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-container.dimelo-chat-container-disabled .dimelo-chat-textarea-zone{border-color:transparent;background-color:#F6F7F8}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-container.dimelo-chat-container-disabled .dimelo-chat-textarea-zone .dimelo-chat-control-emoji svg path{fill:#E0E0E0}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-container.dimelo-chat-container-disabled .dimelo-chat-textarea-zone .dimelo-chat-textarea::-webkit-input-placeholder{color:#D1D1D1}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-container.dimelo-chat-container-disabled .dimelo-chat-textarea-zone .dimelo-chat-textarea:-ms-input-placeholder{color:#D1D1D1}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-container.dimelo-chat-container-disabled .dimelo-chat-textarea-zone .dimelo-chat-textarea::placeholder{color:#D1D1D1}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-container.dimelo-chat-container-disabled .dimelo-chat-control-attachment{background-color:#F6F7F8}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-container.dimelo-chat-container-disabled .dimelo-chat-control-attachment svg path{fill:#E0E0E0}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-container.dimelo-chat-container-disabled .dimelo-chat-control-send{background-color:#F6F7F8}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-textarea,.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-textarea:disabled{background:transparent}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-status{background-color:#cdd9ef}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-control-attachment{background-color:#EFEFF0}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-container:not(.dimelo-chat-container-disabled) .dimelo-chat-control-emoji:hover svg path,.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-container:not(.dimelo-chat-container-disabled) .dimelo-chat-control-emoji.dimelo-chat-opened svg path{fill:#212121}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-container:not(.dimelo-chat-container-disabled) .dimelo-chat-control-attachment:hover{background-color:#E0E0E0}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-container:not(.dimelo-chat-container-disabled) .dimelo-chat-control-attachment:hover svg path{fill:#757575}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-control-attachment,.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-control-emoji{-webkit-tap-highlight-color:transparent}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-attachments-upload-disabled.dimelo-chat-container:not(.dimelo-chat-container-disabled) .dimelo-chat-input-zone:not(.typing) .dimelo-chat-control-send{background-color:#E7E7E7}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-attachments-upload-disabled.dimelo-chat-container:not(.dimelo-chat-container-disabled) .dimelo-chat-input-zone:not(.typing) .dimelo-chat-control-send:hover{background-color:#E7E7E7}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-attachments-upload-enabled .dimelo-chat-input-zone .dimelo-chat-control-send,.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-attachments-upload-disabled .dimelo-chat-input-zone.typing .dimelo-chat-control-send{background-color:#4481eb}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-attachments-upload-enabled .dimelo-chat-input-zone .dimelo-chat-control-send:hover,.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-attachments-upload-disabled .dimelo-chat-input-zone.typing .dimelo-chat-control-send:hover{background-color:#3d74d4}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-attachments-upload-enabled .dimelo-chat-input-zone .dimelo-chat-control-send svg path,.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-attachments-upload-disabled .dimelo-chat-input-zone.typing .dimelo-chat-control-send svg path{fill:#fff}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-rich-link-message .dimelo-chat-message-attachment.dimelo-chat-message-attachment-image,.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-template-message .dimelo-chat-message-attachment.dimelo-chat-message-attachment-image{border-color:#ecf0f6}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-message:not(.dimelo-chat-carousel-message) .dimelo-chat-template-body,.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-message.dimelo-chat-single-template .dimelo-chat-template-body{background-color:#ecf0f6}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-template-message .dimelo-chat-structured-attachment+.dimelo-chat-template-body{border-color:#ecf0f6;background-color:#ffffff}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-conversation .dimelo-chat-message.dimelo-chat-rich-link-message .dimelo-chat-message-body,.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-conversation .dimelo-chat-message.dimelo-chat-template-message .dimelo-chat-message-body{background-color:#ffffff}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-template-url .dimelo-chat-template-item-url-icon svg g path+path{fill:#A1A1A1}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-template-url a{color:#A1A1A1}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-template-items{border-color:#ecf0f6}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-template-item,.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-template-item a{color:#4481eb}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-template-item:not(:first-child){border-color:#ecf0f6}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-template-item:hover{background-color:#ecf2fd}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-template-item-url-icon svg g path+path{fill:#4481eb}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-carousel-message:not(.dimelo-chat-single-template) .dimelo-chat-template-body{border-color:#ecf0f6}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-carousel-slider-arrow,.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-carousel-slider-steps{color:#E0E0E0}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-carousel-slider-arrow{border-color:#E0E0E0;background-color:white}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-carousel-slider-arrow svg path{fill:#E0E0E0}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-carousel-slider-arrow.dimelo-chat-active{border-color:#ABABAB}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-carousel-slider-arrow.dimelo-chat-active svg path{fill:#ABABAB}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-carousel-slider-arrow.dimelo-chat-active:hover{border-color:#757575}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-carousel-slider-arrow.dimelo-chat-active:hover svg path{fill:#757575}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-carousel-slider-step span{background-color:#E0E0E0}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-carousel-slider-step.dimelo-chat-active span,.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-carousel-slider-step:hover span{background-color:#ABABAB}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-prompt-input-zone{background-color:white}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-prompt-input-zone.dimelo-chat-prompt-in-error{border-color:#f44336}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-prompt-input input::-webkit-input-placeholder{color:#A1A1A1}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-prompt-input input:-ms-input-placeholder{color:#A1A1A1}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-prompt-input input::placeholder{color:#A1A1A1}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-prompt-submit{background-color:#4481eb}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-container-disabled .dimelo-chat-prompt-submit{background-color:#F6F7F8}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-container-disabled .dimelo-chat-prompt-submit svg path{fill:#E0E0E0}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-container-disabled .dimelo-chat-prompt-input input:disabled{color:#E0E0E0;background-color:#F6F7F8}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-prompt-error{color:#f44336}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-prompt-loading{background-color:#F6F7F8}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-prompt-loader-background,.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-container-loading .dimelo-chat-conversation-frame::before,.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-threads-loading::before{border-color:#D1D1D1}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-prompt-loader,.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-container-loading .dimelo-chat-conversation-frame::after,.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-threads-loading::after{border-color:transparent;border-top-color:#A1A1A1}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-banner{color:white;background-color:#f44336}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-dialog{background:white}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-dialog-title{color:#1863e4}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-dialog-frame-error .dimelo-chat-dialog-title{color:#f44336}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-dialog-frame-error{background-color:rgba(254,236,235,0.9)}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-dialog-frame-error .dimelo-chat-button{background-color:#f44336}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-dialog-frame-error .dimelo-chat-button:hover{background-color:#f32c1e}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-end-frame{background:white}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-end-option{border-color:#4481eb;color:#4481eb;background-color:white}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-end-option svg path{fill:#4481eb}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-end-option:hover{background-color:#4481eb;color:white}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-end-option:hover svg path{fill:white}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-end-option-leave{border-color:#f0512a;color:#f0512a}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-end-option-leave svg path{fill:#f0512a}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-end-option-leave:hover{background-color:#f0512a;color:white}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-end-option-leave:hover svg path{fill:white}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-threads-frame{background-color:#fff}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-thread{-webkit-tap-highlight-color:transparent}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-thread:hover{background-color:#F6F7F8}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-thread-element{border-color:#E7E7E7}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-thread-agent-name,.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-thread-waiting-agent,.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-thread-time{color:#A1A1A1}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-thread-badge{background-color:#f0512a;color:#fff}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-locked-thread-badge svg path{fill:#A1A1A1}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-threads-listing-empty-text{color:#A1A1A1}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-em-web-webview-container-loading::after{border-color:transparent;border-top-color:#A1A1A1}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-em-web-webview-container-loading::before{border-color:#D1D1D1}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-em-web-webview-header{background-color:#fff;border-color:rgba(0,0,0,0.19);-webkit-tap-highlight-color:transparent}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-em-web-webview-header-title{color:#212121}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-em-web-webview-body{background-color:#fff}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-control-webview-close svg{fill:#212121}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-control-webview-close .dimelo-chat-control-webview-close-icon:hover{background-color:#e6e6e6}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-container{width:354px;height:539px;font-family:'Roboto', sans-serif;font-size:14px;z-index:99999999}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-header{background:url(https://dimelo-chat.s3.amazonaws.com/digiposte/avatar.svg) 12px 9px no-repeat #fafafc;background-size:32px 33px;padding:0px;color:#393939;box-shadow:inset 0 4px 0 0 #ffc928;height:48px;min-height:48px;border-bottom:#efefef}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-title{margin:0 auto;padding-left:24px;padding-top:15px}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-title .dimelo-chat-chat-title{font-family:'Roboto', sans-serif;font-size:14px;font-weight:600;text-align:center}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-title .dimelo-chat-title-agent-name{display:none}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-header .dimelo-chat-control-quit-icon{width:24px;height:24px;padding:0}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-control-quit-icon svg{transform:scale(0.6);top:0px}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-control-quit-icon svg path{fill:#706f6f}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-control-quit{height:20px;margin-right:12px;padding:0px;margin-top:16px}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-header .dimelo-chat-control:hover{background:none}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-round-button{background-color:#ffbe28}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-round-button:hover::before{display:none}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-bubble .dimelo-chat-bubble-icon svg{display:none}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-bubble .dimelo-chat-bubble-icon{background:url(https://dimelo-chat.s3.amazonaws.com/digiposte/avatar.svg) 0px 3px no-repeat transparent;background-size:60px 60px;width:60px;height:60px;min-height:60px}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-control-attachment svg{display:none}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-input-zone .dimelo-chat-control-attachment{background:url(https://dimelo-chat.s3.amazonaws.com/digiposte/piece_jointe.svg) center center no-repeat #efefef;background-size:32px 32px}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-control-emoji{background:url(https://dimelo-chat.s3.amazonaws.com/digiposte/smileys.svg) center center no-repeat transparent;background-size:15px 15px}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-control-emoji svg{display:none}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-textarea-zone{border-color:#efefef;height:42px}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-textarea{font-family:'Roboto', sans-serif;font-size:14px;font-style:italic;color:#706f6f;max-height:42px;overflow:auto}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-input-zone .dimelo-chat-control-send{background-color:#ffc928}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-message-self .dimelo-chat-message-body{max-width:223px;padding:12px 14px;background-color:#5c5bff;border-radius:5px 0 5px 5px}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-message-someone-else .dimelo-chat-message-body{max-width:268px;background-color:#efefef;padding:12px 14px;border-radius:0 5px 5px 5px;color:#393939}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-timestamp p,.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-welcome-message p{font-size:11px;color:#706f6f}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-message-date{font-family:'Roboto', sans-serif;font-size:11px;font-weight:normal;color:#706f6f;padding:0px}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-message-attachment.dimelo-chat-message-attachment-image .dimelo-chat-message-attachment-preview{width:195px;height:auto}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-message-self .dimelo-chat-message-body .dimelo-chat-message-attachments\u003e.dimelo-chat-message-attachment-full-size:first-child{border-radius:0px}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-message-identity-screenname{font-family:'Roboto', sans-serif;font-size:11px;font-weight:normal;color:#706f6f;letter-spacing:normal}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-message-someone-else .dimelo-chat-message-identity-screenname:after{content:', ';margin-left:-2px}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-message-last-in-group+.dimelo-chat-message-first-in-group{margin-top:15px}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-end-frame-message{margin-bottom:10px}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-end-option-label{font-family:'Roboto', sans-serif;font-size:14px}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-end-option-leave{border-color:#ffc928;color:#ffc928}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-end-option-leave .dimelo-chat-end-option-icon svg path{fill:#ffc928}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-end-option-leave:hover{background-color:#ffc928;color:#393939}.dimelo-chat-7072a99ec0081f28f7fd4f12-wrapper .dimelo-chat-end-option-leave:hover .dimelo-chat-end-option-icon svg path{fill:#393939}\n";
    Dimelo.Messaging.Client.insertStyleSheet(customStyleSheet);
  

  Dimelo.Messaging.Debug.enabled = true;

});


