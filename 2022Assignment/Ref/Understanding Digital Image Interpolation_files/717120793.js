if (typeof window.awf_Form_=='undefined') window.awf_Form_ = new Object();
awf_Form_.isPreview = false;
awf_Form_.setCookie = function(name, value, expires, path, domain, secure) {
    var curCookie = name + "=" + escape(value) +
        ((expires) ? "; expires=" + expires.toGMTString() : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
    document.cookie = curCookie;
}

awf_Form_.getCookie = function(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    } else
        begin += 2;
    var end = document.cookie.indexOf(";", begin);
    if (end == -1)
        end = dc.length;
    return unescape(dc.substring(begin + prefix.length, end));
}
awf_Form_.showForm = function() {
    /*@cc_on
    /*@if (@_jscript_version > 5.5)
           var isIE = true;
      @else
           var deprecatedBrowser = true;
      @end @*/
    if (typeof isIE == 'undefined') {
        var isIE = false;
    }
    if (!isIE && !window.XMLHttpRequest) {
        var deprecatedBrowser = true;
    }

    // Exit early for TY Landing Page option
    if (document.location.href.indexOf('meta_web_form_id') > 0) return;

    if (deprecatedBrowser) {
       window.open('https://forms.aweber.com/form/93/717120793.html','winPopUp','resizable=1,scrollbars=1,location=0,width=490,height=356');
       awf_Form_.setExpirationCookie();
       return true;
    }
    if (typeof awf_Form_.scriptAppended=='undefined') {
        try {
            var script = document.createElement('script');
            script.src = "https://forms.aweber.com/form/styled_popovers_and_lightboxes.js";
            script.type = 'text/javascript';
            document.getElementsByTagName('HEAD')[0].appendChild(script);
        } catch(e) {
            //IE5 for Mac and IE timeout issues
            try {
                document.write('<script type="text/javascript" src="' + src + '"></scr'+'ipt>');
            } catch(e) { }
        }
        awf_Form_.scriptAppended = true;
    }
    var loadForm = function() {
        var formProps = {"_log":null,"id":"717120793","form":"<form method=\"post\" class=\"af-form-wrapper\" accept-charset=\"UTF-8\" action=\"https:\/\/www.aweber.com\/scripts\/addlead.pl\"  >\n<div style=\"display: none;\">\n<input type=\"hidden\" name=\"meta_web_form_id\" value=\"717120793\" \/>\n<input type=\"hidden\" name=\"meta_split_id\" value=\"\" \/>\n<input type=\"hidden\" name=\"listname\" value=\"cinc\" \/>\n<input type=\"hidden\" name=\"redirect\" value=\"http:\/\/www.cambridgeincolour.com\/subscribe\/requested.htm\" id=\"redirect_aabeda5bc914f4f9fcee6d8e3fcae1b8\" \/>\n\n<input type=\"hidden\" name=\"meta_adtracking\" value=\"Popover_-_10s_-_180day_-_newtheme\" \/>\n<input type=\"hidden\" name=\"meta_message\" value=\"1\" \/>\n<input type=\"hidden\" name=\"meta_required\" value=\"email\" \/>\n\n<input type=\"hidden\" name=\"meta_tooltip\" value=\"email||enter your email here\" \/>\n<\/div>\n<div id=\"af-form-717120793\" class=\"af-form\"><div id=\"af-header-717120793\" class=\"af-header\"><div class=\"bodyText\"><\/div><\/div>\n<div id=\"af-body-717120793\" class=\"af-body af-standards\">\n<div class=\"af-element\">\n<div class=\"bodyText\"><p><span style=\"color: #ffffff; font-size: 14px;\">Get free updates when new tutorials are added.<\/span><\/p><\/div><div class=\"af-clear\"><\/div>\n<\/div>\n<div class=\"af-element\">\n<label class=\"previewLabel\" for=\"awf_field-113562378\"><\/label>\n<div class=\"af-textWrap\"><input class=\"text\" id=\"awf_field-113562378\" type=\"text\" name=\"email\" value=\"enter your email here\" tabindex=\"500\" onfocus=\" if (this.value == 'enter your email here') { this.value = ''; }\" onblur=\"if (this.value == '') { this.value='enter your email here';} \" \/>\n<\/div><div class=\"af-clear\"><\/div>\n<\/div>\n<div class=\"af-element buttonContainer\">\n<input name=\"submit\" class=\"submit\" type=\"submit\" value=\"Submit\" tabindex=\"501\" \/>\n<div class=\"af-clear\"><\/div>\n<\/div>\n<\/div>\n<div id=\"af-footer-717120793\" class=\"af-footer\"><div class=\"bodyText\"><p style=\"text-align: right;\"><span style=\"color: #c0c0c0;\"><span style=\"font-size: 10px;\">Note: This message only appears on your first visit to this website.<\/span><\/span><\/p>\n<p style=\"text-align: right;\"><span style=\"color: #c0c0c0; font-size: 10px;\"><span style=\"font-size: 10px;\">Email addresses are kept strictly private.<\/span><\/span><\/p><\/div><\/div>\n<\/div>\n<\/form>\n<script type=\"text\/javascript\">\n\/\/ Special handling for in-app browsers that don't always support new windows\n(function() {\n    function browserSupportsNewWindows(userAgent) {\n        var rules = [\n            'FBIOS',\n            'Twitter for iPhone',\n            'WebView',\n            '(iPhone|iPod|iPad)(?!.*Safari\\\/)',\n            'Android.*(wv|\\.0\\.0\\.0)'\n        ];\n        var pattern = new RegExp('(' + rules.join('|') + ')', 'ig');\n        return !pattern.test(userAgent);\n    }\n\n    if (!browserSupportsNewWindows(navigator.userAgent || navigator.vendor || window.opera)) {\n        document.getElementById('af-form-717120793').parentElement.removeAttribute('target');\n    }\n})();\n<\/script>","styles":"#af-form-717120793 .af-body .af-textWrap{width:98%;display:block;float:none;}\n#af-form-717120793 .af-body a{color:#094C80;text-decoration:underline;font-style:normal;font-weight:normal;}\n#af-form-717120793 .af-body input.text, #af-form-717120793 .af-body textarea{background-color:#FFFFFF;border-color:#919191;border-width:1px;border-style:solid;color:#000000;text-decoration:none;font-style:normal;font-weight:normal;font-size:13px;font-family:Verdana, sans-serif;}\n#af-form-717120793 .af-body input.text:focus, #af-form-717120793 .af-body textarea:focus{background-color:#FFFAD6;border-color:#030303;border-width:1px;border-style:solid;}\n#af-form-717120793 .af-body label.previewLabel{display:block;float:none;text-align:left;width:auto;color:#FFFFFF;text-decoration:none;font-style:normal;font-weight:normal;font-size:12px;font-family:Verdana, sans-serif;}\n#af-form-717120793 .af-body{padding-bottom:15px;padding-top:15px;background-repeat:no-repeat;background-position:inherit;background-image:none;color:#000000;font-size:11px;font-family:Verdana, sans-serif;}\n#af-form-717120793 .af-footer{padding-bottom:5px;padding-top:5px;padding-right:15px;padding-left:15px;background-color:#transparent;border-width:1px;border-bottom-style:none;border-left-style:none;border-right-style:none;border-top-style:none;color:#000000;font-size:12px;font-family:Verdana, sans-serif;}\n#af-form-717120793 .af-header{padding-bottom:50px;padding-top:50px;padding-right:10px;padding-left:10px;background-color:#000000;background-repeat:no-repeat;background-position:center;background-image:url(\"\/\/cdn.cambridgeincolour.com\/images\/ciclogo-550b.png\");border-color:#000000;border-width:5px;border-bottom-style:none;border-left-style:none;border-right-style:none;border-top-style:none;color:#FFFFFF;font-size:16px;font-family:Verdana, sans-serif;}\n#af-form-717120793 .af-quirksMode .bodyText{padding-top:2px;padding-bottom:2px;}\n#af-form-717120793 .af-quirksMode{padding-right:75px;padding-left:75px;}\n#af-form-717120793 .af-standards .af-element{padding-right:75px;padding-left:75px;}\n#af-form-717120793 .bodyText p{margin:1em 0;}\n#af-form-717120793 .buttonContainer input.submit{background-image:none;background-color:#2B78AB;color:#FFFFFF;text-decoration:none;font-style:normal;font-weight:normal;font-size:12px;font-family:Verdana, sans-serif;}\n#af-form-717120793 .buttonContainer input.submit{width:auto;}\n#af-form-717120793 .buttonContainer{text-align:left;}\n#af-form-717120793 body,#af-form-717120793 dl,#af-form-717120793 dt,#af-form-717120793 dd,#af-form-717120793 h1,#af-form-717120793 h2,#af-form-717120793 h3,#af-form-717120793 h4,#af-form-717120793 h5,#af-form-717120793 h6,#af-form-717120793 pre,#af-form-717120793 code,#af-form-717120793 fieldset,#af-form-717120793 legend,#af-form-717120793 blockquote,#af-form-717120793 th,#af-form-717120793 td{float:none;color:inherit;position:static;margin:0;padding:0;}\n#af-form-717120793 button,#af-form-717120793 input,#af-form-717120793 submit,#af-form-717120793 textarea,#af-form-717120793 select,#af-form-717120793 label,#af-form-717120793 optgroup,#af-form-717120793 option{float:none;position:static;margin:0;}\n#af-form-717120793 div{margin:0;}\n#af-form-717120793 fieldset{border:0;}\n#af-form-717120793 form,#af-form-717120793 textarea,.af-form-wrapper,.af-form-close-button,#af-form-717120793 img{float:none;color:inherit;position:static;background-color:none;border:none;margin:0;padding:0;}\n#af-form-717120793 input,#af-form-717120793 button,#af-form-717120793 textarea,#af-form-717120793 select{font-size:100%;}\n#af-form-717120793 p{color:inherit;}\n#af-form-717120793 select,#af-form-717120793 label,#af-form-717120793 optgroup,#af-form-717120793 option{padding:0;}\n#af-form-717120793 table{border-collapse:collapse;border-spacing:0;}\n#af-form-717120793 ul,#af-form-717120793 ol{list-style-image:none;list-style-position:outside;list-style-type:disc;padding-left:40px;}\n#af-form-717120793,#af-form-717120793 .quirksMode{width:100%;max-width:490px;}\n#af-form-717120793.af-quirksMode{overflow-x:hidden;}\n#af-form-717120793{background-color:#3E3E3E;border-color:#000000;border-width:5px;border-style:none;}\n#af-form-717120793{display:block;}\n.af-body .af-textWrap{text-align:left;}\n.af-body input.image{border:none!important;}\n.af-body input.submit,.af-body input.image,.af-form .af-element input.button{float:none!important;}\n.af-body input.submit{white-space:inherit;}\n.af-body input.text{width:100%;float:none;padding:2px!important;}\n.af-body.af-standards input.submit{padding:4px 12px;}\n.af-clear{clear:both;}\n.af-element label{text-align:left;display:block;float:left;}\n.af-element{padding-bottom:5px;padding-top:5px;}\n.af-form-wrapper{text-indent:0;}\n.af-form{box-sizing:border-box;text-align:left;margin:auto;}\n.af-header,.af-footer{margin-bottom:0;margin-top:0;padding:10px;}\n.af-quirksMode .af-element{padding-left:0!important;padding-right:0!important;}\n.dropShadowBottom717120793{background:url(https:\/\/awas.aweber-static.com\/images\/wfg\/drop-bottom.png) repeat-x;width:488px;height:10px;float:left;margin-bottom:0;line-height:0;font-size:0;padding:0;}\n.dropShadowL717120793{background:url(https:\/\/awas.aweber-static.com\/images\/wfg\/drop-left.png) repeat-y;line-height:0;font-size:0;width:10px;height:100%;float:left;margin-bottom:0;}\n.dropShadowLL717120793{background:url(https:\/\/awas.aweber-static.com\/images\/wfg\/drop-bottomLeft.png) no-repeat;width:10px;height:10px;float:left;margin-bottom:0;line-height:0;font-size:0;padding:0;}\n.dropShadowLR717120793{background:url(https:\/\/awas.aweber-static.com\/images\/wfg\/drop-bottomRight.png) no-repeat;width:10px;height:10px;float:left;margin-bottom:0;line-height:0;font-size:0;padding:0;}\n.dropShadowR717120793{background:url(https:\/\/awas.aweber-static.com\/images\/wfg\/drop-right.png) repeat-y;width:10px;height:100%;float:right;margin-bottom:0;}\n.dropShadowTop717120793{background:url(https:\/\/awas.aweber-static.com\/images\/wfg\/drop-top.png) repeat-x;width:488px;height:10px!important;line-height:0;font-size:0;float:left;margin-bottom:0;padding:0;}\n.dropShadowUL717120793{background:url(https:\/\/awas.aweber-static.com\/images\/wfg\/drop-topLeft.png) no-repeat;width:10px;height:10px!important;float:left;margin-bottom:0;line-height:0;font-size:0;padding:0;}\n.dropShadowUR717120793{background:url(https:\/\/awas.aweber-static.com\/images\/wfg\/drop-topRight.png) no-repeat;width:10px;line-height:0;font-size:0;height:10px!important;float:left;margin-bottom:0;padding:0;}\n.lbl-right .af-element label{text-align:right;}\nbody {\n}\n","height":"356","width":"490","plPath":"forms.aweber.com","delay":"500","popupURL":"https:\/\/forms.aweber.com\/form\/93\/717120793.html","formType":"lightbox","animation":"default","redirectId":"redirect_aabeda5bc914f4f9fcee6d8e3fcae1b8","returnToPage":0};
        
        awf_Form_.form = new awf_Form_.AWFormGenerator(formProps);
    };
    if (typeof awf_Form_.AWFormGenerator == 'undefined') {
        var unique_track = new Image();
        unique_track.src = "https://forms.aweber.com/form/displays.htm?id=7IzsjEwM7JzM";
        if (typeof awf_Form_.FormQueue == 'undefined') { awf_Form_.FormQueue = []; }
        awf_Form_.FormQueue.push(loadForm);
    } else {
        var unique_track = new Image();
        unique_track.src = "https://forms.aweber.com/form/displays.htm?id=7IzsjEwM7JzM";
        loadForm();
    }
    awf_Form_.setExpirationCookie();
}

awf_Form_.setExpirationCookie = function() {
    awf_Form_.expDate = new Date();
    awf_Form_.expDate.setTime(awf_Form_.expDate.getTime() + 15552000000);
    awf_Form_.setCookie('awpopup_717120793', '1', awf_Form_.expDate, '/', document.domain, 0);
}

if ((awf_Form_.isPreview || !awf_Form_.getCookie('awpopup_717120793')) && typeof hide_awf_Form=='undefined') {
    awf_Form_.showForm();
}