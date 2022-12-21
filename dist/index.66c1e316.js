/* Notiflix (https://notiflix.github.io) - Version: 3.2.5 - Author: Furkan MT (https://github.com/furcan) - Copyright 2019 - 2022 Notiflix, MIT Licence (https://opensource.org/licenses/MIT) */ (function(t, e) {
    "function" == typeof define && define.amd ? define([], function() {
        return e(t);
    }) : "object" == typeof module && "object" == typeof module.exports ? module.exports = e(t) : t.Notiflix = e(t);
})("undefined" == typeof global ? "undefined" == typeof window ? this : window : global, function(t1) {
    "use strict";
    if ("undefined" == typeof t1 && "undefined" == typeof t1.document) return !1;
    var e1, a1, n1, i1, o1, s1 = "\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation", r1 = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif', l1 = {
        Success: "Success",
        Failure: "Failure",
        Warning: "Warning",
        Info: "Info"
    }, c1 = {
        wrapID: "NotiflixNotifyWrap",
        overlayID: "NotiflixNotifyOverlay",
        width: "280px",
        position: "right-top",
        distance: "10px",
        opacity: 1,
        borderRadius: "5px",
        rtl: !1,
        timeout: 3e3,
        messageMaxLength: 110,
        backOverlay: !1,
        backOverlayColor: "rgba(0,0,0,0.5)",
        plainText: !0,
        showOnlyTheLastOne: !1,
        clickToClose: !1,
        pauseOnHover: !0,
        ID: "NotiflixNotify",
        className: "notiflix-notify",
        zindex: 4001,
        fontFamily: "Quicksand",
        fontSize: "13px",
        cssAnimation: !0,
        cssAnimationDuration: 400,
        cssAnimationStyle: "fade",
        closeButton: !1,
        useIcon: !0,
        useFontAwesome: !1,
        fontAwesomeIconStyle: "basic",
        fontAwesomeIconSize: "34px",
        success: {
            background: "#32c682",
            textColor: "#fff",
            childClassName: "notiflix-notify-success",
            notiflixIconColor: "rgba(0,0,0,0.2)",
            fontAwesomeClassName: "fas fa-check-circle",
            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
            backOverlayColor: "rgba(50,198,130,0.2)"
        },
        failure: {
            background: "#ff5549",
            textColor: "#fff",
            childClassName: "notiflix-notify-failure",
            notiflixIconColor: "rgba(0,0,0,0.2)",
            fontAwesomeClassName: "fas fa-times-circle",
            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
            backOverlayColor: "rgba(255,85,73,0.2)"
        },
        warning: {
            background: "#eebf31",
            textColor: "#fff",
            childClassName: "notiflix-notify-warning",
            notiflixIconColor: "rgba(0,0,0,0.2)",
            fontAwesomeClassName: "fas fa-exclamation-circle",
            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
            backOverlayColor: "rgba(238,191,49,0.2)"
        },
        info: {
            background: "#26c0d3",
            textColor: "#fff",
            childClassName: "notiflix-notify-info",
            notiflixIconColor: "rgba(0,0,0,0.2)",
            fontAwesomeClassName: "fas fa-info-circle",
            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
            backOverlayColor: "rgba(38,192,211,0.2)"
        }
    }, m1 = {
        Success: "Success",
        Failure: "Failure",
        Warning: "Warning",
        Info: "Info"
    }, p1 = {
        ID: "NotiflixReportWrap",
        className: "notiflix-report",
        width: "320px",
        backgroundColor: "#f8f8f8",
        borderRadius: "25px",
        rtl: !1,
        zindex: 4002,
        backOverlay: !0,
        backOverlayColor: "rgba(0,0,0,0.5)",
        backOverlayClickToClose: !1,
        fontFamily: "Quicksand",
        svgSize: "110px",
        plainText: !0,
        titleFontSize: "16px",
        titleMaxLength: 34,
        messageFontSize: "13px",
        messageMaxLength: 400,
        buttonFontSize: "14px",
        buttonMaxLength: 34,
        cssAnimation: !0,
        cssAnimationDuration: 360,
        cssAnimationStyle: "fade",
        success: {
            svgColor: "#32c682",
            titleColor: "#1e1e1e",
            messageColor: "#242424",
            buttonBackground: "#32c682",
            buttonColor: "#fff",
            backOverlayColor: "rgba(50,198,130,0.2)"
        },
        failure: {
            svgColor: "#ff5549",
            titleColor: "#1e1e1e",
            messageColor: "#242424",
            buttonBackground: "#ff5549",
            buttonColor: "#fff",
            backOverlayColor: "rgba(255,85,73,0.2)"
        },
        warning: {
            svgColor: "#eebf31",
            titleColor: "#1e1e1e",
            messageColor: "#242424",
            buttonBackground: "#eebf31",
            buttonColor: "#fff",
            backOverlayColor: "rgba(238,191,49,0.2)"
        },
        info: {
            svgColor: "#26c0d3",
            titleColor: "#1e1e1e",
            messageColor: "#242424",
            buttonBackground: "#26c0d3",
            buttonColor: "#fff",
            backOverlayColor: "rgba(38,192,211,0.2)"
        }
    }, d1 = {
        Show: "Show",
        Ask: "Ask",
        Prompt: "Prompt"
    }, f1 = {
        ID: "NotiflixConfirmWrap",
        className: "notiflix-confirm",
        width: "300px",
        zindex: 4003,
        position: "center",
        distance: "10px",
        backgroundColor: "#f8f8f8",
        borderRadius: "25px",
        backOverlay: !0,
        backOverlayColor: "rgba(0,0,0,0.5)",
        rtl: !1,
        fontFamily: "Quicksand",
        cssAnimation: !0,
        cssAnimationDuration: 300,
        cssAnimationStyle: "fade",
        plainText: !0,
        titleColor: "#32c682",
        titleFontSize: "16px",
        titleMaxLength: 34,
        messageColor: "#1e1e1e",
        messageFontSize: "14px",
        messageMaxLength: 110,
        buttonsFontSize: "15px",
        buttonsMaxLength: 34,
        okButtonColor: "#f8f8f8",
        okButtonBackground: "#32c682",
        cancelButtonColor: "#f8f8f8",
        cancelButtonBackground: "#a9a9a9"
    }, x1 = {
        Standard: "Standard",
        Hourglass: "Hourglass",
        Circle: "Circle",
        Arrows: "Arrows",
        Dots: "Dots",
        Pulse: "Pulse",
        Custom: "Custom",
        Notiflix: "Notiflix"
    }, g1 = {
        ID: "NotiflixLoadingWrap",
        className: "notiflix-loading",
        zindex: 4e3,
        backgroundColor: "rgba(0,0,0,0.8)",
        rtl: !1,
        fontFamily: "Quicksand",
        cssAnimation: !0,
        cssAnimationDuration: 400,
        clickToClose: !1,
        customSvgUrl: null,
        customSvgCode: null,
        svgSize: "80px",
        svgColor: "#32c682",
        messageID: "NotiflixLoadingMessage",
        messageFontSize: "15px",
        messageMaxLength: 34,
        messageColor: "#dcdcdc"
    }, u1 = {
        Standard: "Standard",
        Hourglass: "Hourglass",
        Circle: "Circle",
        Arrows: "Arrows",
        Dots: "Dots",
        Pulse: "Pulse"
    }, b1 = {
        ID: "NotiflixBlockWrap",
        querySelectorLimit: 200,
        className: "notiflix-block",
        position: "absolute",
        zindex: 1e3,
        backgroundColor: "rgba(255,255,255,0.9)",
        rtl: !1,
        fontFamily: "Quicksand",
        cssAnimation: !0,
        cssAnimationDuration: 300,
        svgSize: "45px",
        svgColor: "#383838",
        messageFontSize: "14px",
        messageMaxLength: 34,
        messageColor: "#383838"
    }, y1 = function(t) {
        return console.error("%c Notiflix Error ", "padding:2px;border-radius:20px;color:#fff;background:#ff5549", "\n" + t + s1);
    }, h1 = function(t) {
        return console.log("%c Notiflix Info ", "padding:2px;border-radius:20px;color:#fff;background:#26c0d3", "\n" + t + s1);
    }, k = function(e) {
        return e || (e = "head"), null !== t1.document[e] || (y1('\nNotiflix needs to be appended to the "<' + e + '>" element, but you called it before the "<' + e + '>" element has been created.'), !1);
    }, w1 = function(e, a) {
        if (!k("head")) return !1;
        if (null !== e() && !t1.document.getElementById(a)) {
            var n = t1.document.createElement("style");
            n.id = a, n.innerHTML = e(), t1.document.head.appendChild(n);
        }
    }, v = function() {
        var t = {}, e = !1, a2 = 0;
        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (e = arguments[0], a2++);
        for(var n2 = function(a) {
            for(var n in a)Object.prototype.hasOwnProperty.call(a, n) && (t[n] = e && "[object Object]" === Object.prototype.toString.call(a[n]) ? v(t[n], a[n]) : a[n]);
        }; a2 < arguments.length; a2++)n2(arguments[a2]);
        return t;
    }, N = function(e) {
        var a = t1.document.createElement("div");
        return a.innerHTML = e, a.textContent || a.innerText || "";
    }, C1 = function(t, e) {
        t || (t = "110px"), e || (e = "#32c682");
        var a = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="' + t + '" height="' + t + '" fill="' + e + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
        return a;
    }, z1 = function(t, e) {
        t || (t = "110px"), e || (e = "#ff5549");
        var a = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="' + t + '" height="' + t + '" fill="' + e + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
        return a;
    }, S1 = function(t, e) {
        t || (t = "110px"), e || (e = "#eebf31");
        var a = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="' + t + '" height="' + t + '" fill="' + e + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
        return a;
    }, L1 = function(t, e) {
        t || (t = "110px"), e || (e = "#26c0d3");
        var a = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="' + t + '" height="' + t + '" fill="' + e + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
        return a;
    }, I1 = function(t, e) {
        t || (t = "60px"), e || (e = "#32c682");
        var a = '<svg xmlns="http://www.w3.org/2000/svg" stroke="' + e + '" width="' + t + '" height="' + t + '" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';
        return a;
    }, A1 = function(t, e) {
        t || (t = "60px"), e || (e = "#32c682");
        var a = '<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="' + e + '" width="' + t + '" height="' + t + '" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>';
        return a;
    }, M1 = function(t, e) {
        t || (t = "60px"), e || (e = "#32c682");
        var a = '<svg xmlns="http://www.w3.org/2000/svg" width="' + t + '" height="' + t + '" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:' + t + ";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:" + t + ';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="' + e + '" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>';
        return a;
    }, X1 = function(t, e) {
        t || (t = "60px"), e || (e = "#32c682");
        var a = '<svg xmlns="http://www.w3.org/2000/svg" fill="' + e + '" width="' + t + '" height="' + t + '" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>';
        return a;
    }, R = function(t, e) {
        t || (t = "60px"), e || (e = "#32c682");
        var a = '<svg xmlns="http://www.w3.org/2000/svg" fill="' + e + '" width="' + t + '" height="' + t + '" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>';
        return a;
    }, B = function(t, e) {
        t || (t = "60px"), e || (e = "#32c682");
        var a = '<svg xmlns="http://www.w3.org/2000/svg" stroke="' + e + '" width="' + t + '" height="' + t + '" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>';
        return a;
    }, D1 = function(t, e, a) {
        t || (t = "60px"), e || (e = "#f8f8f8"), a || (a = "#32c682");
        var n = '<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="' + t + '" height="' + t + '" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:' + e + ';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="' + a + '" stroke="' + a + '" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>';
        return n;
    }, T1 = function() {
        return null;
    }, F1 = 0, E1 = function(a, n, o, s) {
        if (!k("body")) return !1;
        e1 || G.Notify.init({});
        var m = v(!0, e1, {});
        if ("object" == typeof o && !Array.isArray(o) || "object" == typeof s && !Array.isArray(s)) {
            var p = {};
            "object" == typeof o ? p = o : "object" == typeof s && (p = s), e1 = v(!0, e1, p);
        }
        var d = e1[a.toLocaleLowerCase("en")];
        F1++, "string" != typeof n && (n = "Notiflix " + a), e1.plainText && (n = N(n)), !e1.plainText && n.length > e1.messageMaxLength && (e1 = v(!0, e1, {
            closeButton: !0,
            messageMaxLength: 150
        }), n = 'Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'), n.length > e1.messageMaxLength && (n = n.substring(0, e1.messageMaxLength) + "..."), "shadow" === e1.fontAwesomeIconStyle && (d.fontAwesomeIconColor = d.background), e1.cssAnimation || (e1.cssAnimationDuration = 0);
        var f = t1.document.getElementById(c1.wrapID) || t1.document.createElement("div");
        if (f.id = c1.wrapID, f.style.width = e1.width, f.style.zIndex = e1.zindex, f.style.opacity = e1.opacity, "center-center" === e1.position ? (f.style.left = e1.distance, f.style.top = e1.distance, f.style.right = e1.distance, f.style.bottom = e1.distance, f.style.margin = "auto", f.classList.add("nx-flex-center-center"), f.style.maxHeight = "calc((100vh - " + e1.distance + ") - " + e1.distance + ")", f.style.display = "flex", f.style.flexWrap = "wrap", f.style.flexDirection = "column", f.style.justifyContent = "center", f.style.alignItems = "center", f.style.pointerEvents = "none") : "center-top" === e1.position ? (f.style.left = e1.distance, f.style.right = e1.distance, f.style.top = e1.distance, f.style.bottom = "auto", f.style.margin = "auto") : "center-bottom" === e1.position ? (f.style.left = e1.distance, f.style.right = e1.distance, f.style.bottom = e1.distance, f.style.top = "auto", f.style.margin = "auto") : "right-bottom" === e1.position ? (f.style.right = e1.distance, f.style.bottom = e1.distance, f.style.top = "auto", f.style.left = "auto") : "left-top" === e1.position ? (f.style.left = e1.distance, f.style.top = e1.distance, f.style.right = "auto", f.style.bottom = "auto") : "left-bottom" === e1.position ? (f.style.left = e1.distance, f.style.bottom = e1.distance, f.style.top = "auto", f.style.right = "auto") : (f.style.right = e1.distance, f.style.top = e1.distance, f.style.left = "auto", f.style.bottom = "auto"), e1.backOverlay) {
            var x = t1.document.getElementById(c1.overlayID) || t1.document.createElement("div");
            x.id = c1.overlayID, x.style.width = "100%", x.style.height = "100%", x.style.position = "fixed", x.style.zIndex = e1.zindex - 1, x.style.left = 0, x.style.top = 0, x.style.right = 0, x.style.bottom = 0, x.style.background = d.backOverlayColor || e1.backOverlayColor, x.className = e1.cssAnimation ? "nx-with-animation" : "", x.style.animationDuration = e1.cssAnimation ? e1.cssAnimationDuration + "ms" : "", t1.document.getElementById(c1.overlayID) || t1.document.body.appendChild(x);
        }
        t1.document.getElementById(c1.wrapID) || t1.document.body.appendChild(f);
        var g = t1.document.createElement("div");
        g.id = e1.ID + "-" + F1, g.className = e1.className + " " + d.childClassName + " " + (e1.cssAnimation ? "nx-with-animation" : "") + " " + (e1.useIcon ? "nx-with-icon" : "") + " nx-" + e1.cssAnimationStyle + " " + (e1.closeButton && "function" != typeof o ? "nx-with-close-button" : "") + " " + ("function" == typeof o ? "nx-with-callback" : "") + " " + (e1.clickToClose ? "nx-notify-click-to-close" : ""), g.style.fontSize = e1.fontSize, g.style.color = d.textColor, g.style.background = d.background, g.style.borderRadius = e1.borderRadius, g.style.pointerEvents = "all", e1.rtl && (g.setAttribute("dir", "rtl"), g.classList.add("nx-rtl-on")), g.style.fontFamily = '"' + e1.fontFamily + '", ' + r1, e1.cssAnimation && (g.style.animationDuration = e1.cssAnimationDuration + "ms");
        var u = "";
        if (e1.closeButton && "function" != typeof o && (u = '<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="' + d.notiflixIconColor + '" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'), !e1.useIcon) g.innerHTML = '<span class="nx-message">' + n + "</span>" + (e1.closeButton ? u : "");
        else if (e1.useFontAwesome) g.innerHTML = '<i style="color:' + d.fontAwesomeIconColor + "; font-size:" + e1.fontAwesomeIconSize + ';" class="nx-message-icon nx-message-icon-fa ' + d.fontAwesomeClassName + " " + ("shadow" === e1.fontAwesomeIconStyle ? "nx-message-icon-fa-shadow" : "nx-message-icon-fa-basic") + '"></i><span class="nx-message nx-with-icon">' + n + "</span>" + (e1.closeButton ? u : "");
        else {
            var b = "";
            a === l1.Success ? b = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + d.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>' : a === l1.Failure ? b = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + d.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>' : a === l1.Warning ? b = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + d.notiflixIconColor + '" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>' : a === l1.Info && (b = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + d.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'), g.innerHTML = b + '<span class="nx-message nx-with-icon">' + n + "</span>" + (e1.closeButton ? u : "");
        }
        if ("left-bottom" === e1.position || "right-bottom" === e1.position) {
            var y = t1.document.getElementById(c1.wrapID);
            y.insertBefore(g, y.firstChild);
        } else t1.document.getElementById(c1.wrapID).appendChild(g);
        var h = t1.document.getElementById(g.id);
        if (h) {
            var w, C, z = function() {
                h.classList.add("nx-remove");
                var e = t1.document.getElementById(c1.overlayID);
                e && 0 >= f.childElementCount && e.classList.add("nx-remove"), clearTimeout(w);
            }, S = function() {
                if (h && null !== h.parentNode && h.parentNode.removeChild(h), 0 >= f.childElementCount && null !== f.parentNode) {
                    f.parentNode.removeChild(f);
                    var e = t1.document.getElementById(c1.overlayID);
                    e && null !== e.parentNode && e.parentNode.removeChild(e);
                }
                clearTimeout(C);
            };
            if (e1.closeButton && "function" != typeof o) {
                var L = t1.document.getElementById(g.id).querySelector("span.nx-close-button");
                L.addEventListener("click", function() {
                    z();
                    var t = setTimeout(function() {
                        S(), clearTimeout(t);
                    }, e1.cssAnimationDuration);
                });
            }
            if (("function" == typeof o || e1.clickToClose) && h.addEventListener("click", function() {
                "function" == typeof o && o(), z();
                var t = setTimeout(function() {
                    S(), clearTimeout(t);
                }, e1.cssAnimationDuration);
            }), !e1.closeButton && "function" != typeof o) {
                var I = function() {
                    w = setTimeout(function() {
                        z();
                    }, e1.timeout), C = setTimeout(function() {
                        S();
                    }, e1.timeout + e1.cssAnimationDuration);
                };
                I(), e1.pauseOnHover && (h.addEventListener("mouseenter", function() {
                    h.classList.add("nx-paused"), clearTimeout(w), clearTimeout(C);
                }), h.addEventListener("mouseleave", function() {
                    h.classList.remove("nx-paused"), I();
                }));
            }
        }
        if (e1.showOnlyTheLastOne && 0 < F1) for(var A, M = t1.document.querySelectorAll("[id^=" + e1.ID + "-]:not([id=" + e1.ID + "-" + F1 + "])"), X = 0; X < M.length; X++)A = M[X], null !== A.parentNode && A.parentNode.removeChild(A);
        e1 = v(!0, e1, m);
    }, O1 = function() {
        return null;
    }, H1 = function(e2, n3, i, o, s, l) {
        if (!k("body")) return !1;
        a1 || G.Report.init({});
        var c = {};
        if ("object" == typeof s && !Array.isArray(s) || "object" == typeof l && !Array.isArray(l)) {
            var d = {};
            "object" == typeof s ? d = s : "object" == typeof l && (d = l), c = v(!0, a1, {}), a1 = v(!0, a1, d);
        }
        var f = a1[e2.toLocaleLowerCase("en")];
        "string" != typeof n3 && (n3 = "Notiflix " + e2), "string" != typeof i && (e2 === m1.Success ? i = '"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein' : e2 === m1.Failure ? i = '"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford' : e2 === m1.Warning ? i = '"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk' : e2 === m1.Info && (i = '"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')), "string" != typeof o && (o = "Okay"), a1.plainText && (n3 = N(n3), i = N(i), o = N(o)), a1.plainText || (n3.length > a1.titleMaxLength && (n3 = "Possible HTML Tags Error", i = 'The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.', o = "Okay"), i.length > a1.messageMaxLength && (n3 = "Possible HTML Tags Error", i = 'The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.', o = "Okay"), o.length > a1.buttonMaxLength && (n3 = "Possible HTML Tags Error", i = 'The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.', o = "Okay")), n3.length > a1.titleMaxLength && (n3 = n3.substring(0, a1.titleMaxLength) + "..."), i.length > a1.messageMaxLength && (i = i.substring(0, a1.messageMaxLength) + "..."), o.length > a1.buttonMaxLength && (o = o.substring(0, a1.buttonMaxLength) + "..."), a1.cssAnimation || (a1.cssAnimationDuration = 0);
        var x = t1.document.createElement("div");
        x.id = p1.ID, x.className = a1.className, x.style.zIndex = a1.zindex, x.style.borderRadius = a1.borderRadius, x.style.fontFamily = '"' + a1.fontFamily + '", ' + r1, a1.rtl && (x.setAttribute("dir", "rtl"), x.classList.add("nx-rtl-on")), x.style.display = "flex", x.style.flexWrap = "wrap", x.style.flexDirection = "column", x.style.alignItems = "center", x.style.justifyContent = "center";
        var g = "", u = !0 === a1.backOverlayClickToClose;
        a1.backOverlay && (g = '<div class="' + a1.className + "-overlay" + (a1.cssAnimation ? " nx-with-animation" : "") + (u ? " nx-report-click-to-close" : "") + '" style="background:' + (f.backOverlayColor || a1.backOverlayColor) + ";animation-duration:" + a1.cssAnimationDuration + 'ms;"></div>');
        var b = "";
        if (e2 === m1.Success ? b = C1(a1.svgSize, f.svgColor) : e2 === m1.Failure ? b = z1(a1.svgSize, f.svgColor) : e2 === m1.Warning ? b = S1(a1.svgSize, f.svgColor) : e2 === m1.Info && (b = L1(a1.svgSize, f.svgColor)), x.innerHTML = g + '<div class="' + a1.className + "-content" + (a1.cssAnimation ? " nx-with-animation " : "") + " nx-" + a1.cssAnimationStyle + '" style="width:' + a1.width + "; background:" + a1.backgroundColor + "; animation-duration:" + a1.cssAnimationDuration + 'ms;"><div style="width:' + a1.svgSize + "; height:" + a1.svgSize + ';" class="' + a1.className + '-icon">' + b + '</div><h5 class="' + a1.className + '-title" style="font-weight:500; font-size:' + a1.titleFontSize + "; color:" + f.titleColor + ';">' + n3 + '</h5><p class="' + a1.className + '-message" style="font-size:' + a1.messageFontSize + "; color:" + f.messageColor + ';">' + i + '</p><a id="NXReportButton" class="' + a1.className + '-button" style="font-weight:500; font-size:' + a1.buttonFontSize + "; background:" + f.buttonBackground + "; color:" + f.buttonColor + ';">' + o + "</a></div>", !t1.document.getElementById(x.id)) {
            t1.document.body.appendChild(x);
            var y = function() {
                var e = t1.document.getElementById(x.id);
                e.classList.add("nx-remove");
                var n = setTimeout(function() {
                    null !== e.parentNode && e.parentNode.removeChild(e), clearTimeout(n);
                }, a1.cssAnimationDuration);
            }, h = t1.document.getElementById("NXReportButton");
            if (h.addEventListener("click", function() {
                "function" == typeof s && s(), y();
            }), g && u) {
                var w = t1.document.querySelector(".nx-report-click-to-close");
                w.addEventListener("click", function() {
                    y();
                });
            }
        }
        a1 = v(!0, a1, c);
    }, W1 = function() {
        return null;
    }, j1 = function(e, a3, i2, o, s, l, c, m, p) {
        if (!k("body")) return !1;
        n1 || G.Confirm.init({});
        var x = v(!0, n1, {});
        "object" != typeof p || Array.isArray(p) || (n1 = v(!0, n1, p)), "string" != typeof a3 && (a3 = "Notiflix Confirm"), "string" != typeof i2 && (i2 = "Do you agree with me?"), "string" != typeof s && (s = "Yes"), "string" != typeof l && (l = "No"), "function" != typeof c && (c = void 0), "function" != typeof m && (m = void 0), n1.plainText && (a3 = N(a3), i2 = N(i2), s = N(s), l = N(l)), n1.plainText || (a3.length > n1.titleMaxLength && (a3 = "Possible HTML Tags Error", i2 = 'The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.', s = "Okay", l = "..."), i2.length > n1.messageMaxLength && (a3 = "Possible HTML Tags Error", i2 = 'The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.', s = "Okay", l = "..."), (s.length || l.length) > n1.buttonsMaxLength && (a3 = "Possible HTML Tags Error", i2 = 'The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.', s = "Okay", l = "...")), a3.length > n1.titleMaxLength && (a3 = a3.substring(0, n1.titleMaxLength) + "..."), i2.length > n1.messageMaxLength && (i2 = i2.substring(0, n1.messageMaxLength) + "..."), s.length > n1.buttonsMaxLength && (s = s.substring(0, n1.buttonsMaxLength) + "..."), l.length > n1.buttonsMaxLength && (l = l.substring(0, n1.buttonsMaxLength) + "..."), n1.cssAnimation || (n1.cssAnimationDuration = 0);
        var g = t1.document.createElement("div");
        g.id = f1.ID, g.className = n1.className + (n1.cssAnimation ? " nx-with-animation nx-" + n1.cssAnimationStyle : ""), g.style.zIndex = n1.zindex, g.style.padding = n1.distance, n1.rtl && (g.setAttribute("dir", "rtl"), g.classList.add("nx-rtl-on"));
        var u = "string" == typeof n1.position ? n1.position.trim() : "center";
        g.classList.add("nx-position-" + u), g.style.fontFamily = '"' + n1.fontFamily + '", ' + r1;
        var b = "";
        n1.backOverlay && (b = '<div class="' + n1.className + "-overlay" + (n1.cssAnimation ? " nx-with-animation" : "") + '" style="background:' + n1.backOverlayColor + ";animation-duration:" + n1.cssAnimationDuration + 'ms;"></div>');
        var y = "";
        "function" == typeof c && (y = '<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:' + n1.cancelButtonColor + ";background:" + n1.cancelButtonBackground + ";font-size:" + n1.buttonsFontSize + ';">' + l + "</a>");
        var h = "", w = null, C = void 0;
        if (e === d1.Ask || e === d1.Prompt) {
            w = o || "";
            var z = e === d1.Ask ? Math.ceil(1.5 * w.length) : 200 < w.length ? Math.ceil(1.5 * w.length) : 250, S = e === d1.Prompt ? 'value="' + w + '"' : "";
            h = '<div><input id="NXConfirmValidationInput" type="text" ' + S + ' maxlength="' + z + '" style="font-size:' + n1.messageFontSize + ";border-radius: " + n1.borderRadius + ';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>';
        }
        if (g.innerHTML = b + '<div class="' + n1.className + '-content" style="width:' + n1.width + "; background:" + n1.backgroundColor + "; animation-duration:" + n1.cssAnimationDuration + "ms; border-radius: " + n1.borderRadius + ';"><div class="' + n1.className + '-head"><h5 style="color:' + n1.titleColor + ";font-size:" + n1.titleFontSize + ';">' + a3 + '</h5><div style="color:' + n1.messageColor + ";font-size:" + n1.messageFontSize + ';">' + i2 + h + '</div></div><div class="' + n1.className + '-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok' + ("function" == typeof c ? "" : " nx-full") + '" style="color:' + n1.okButtonColor + ";background:" + n1.okButtonBackground + ";font-size:" + n1.buttonsFontSize + ';">' + s + "</a>" + y + "</div></div>", !t1.document.getElementById(g.id)) {
            t1.document.body.appendChild(g);
            var L = t1.document.getElementById(g.id), I = t1.document.getElementById("NXConfirmButtonOk"), A = t1.document.getElementById("NXConfirmValidationInput");
            if (A && (A.focus(), A.setSelectionRange(0, (A.value || "").length), A.addEventListener("keyup", function(t) {
                var a = t.target.value;
                if (e === d1.Ask && a !== w) t.preventDefault(), A.classList.add("nx-validation-failure"), A.classList.remove("nx-validation-success");
                else {
                    e === d1.Ask && (A.classList.remove("nx-validation-failure"), A.classList.add("nx-validation-success"));
                    var n = "enter" === (t.key || "").toLocaleLowerCase("en") || 13 === t.keyCode;
                    n && I.dispatchEvent(new Event("click"));
                }
            })), I.addEventListener("click", function(t) {
                if (e === d1.Ask && w && A) {
                    var a = (A.value || "").toString();
                    if (a !== w) return A.focus(), A.classList.add("nx-validation-failure"), t.stopPropagation(), t.preventDefault(), t.returnValue = !1, t.cancelBubble = !0, !1;
                    A.classList.remove("nx-validation-failure");
                }
                "function" == typeof c && (e === d1.Prompt && A && (C = A.value || ""), c(C)), L.classList.add("nx-remove");
                var i = setTimeout(function() {
                    null !== L.parentNode && (L.parentNode.removeChild(L), clearTimeout(i));
                }, n1.cssAnimationDuration);
            }), "function" == typeof c) {
                var M = t1.document.getElementById("NXConfirmButtonCancel");
                M.addEventListener("click", function() {
                    "function" == typeof m && (e === d1.Prompt && A && (C = A.value || ""), m(C)), L.classList.add("nx-remove");
                    var t = setTimeout(function() {
                        null !== L.parentNode && (L.parentNode.removeChild(L), clearTimeout(t));
                    }, n1.cssAnimationDuration);
                });
            }
        }
        n1 = v(!0, n1, x);
    }, P1 = function() {
        return null;
    }, V1 = function(e, a, n, o, s) {
        if (!k("body")) return !1;
        i1 || G.Loading.init({});
        var l = v(!0, i1, {});
        if ("object" == typeof a && !Array.isArray(a) || "object" == typeof n && !Array.isArray(n)) {
            var c = {};
            "object" == typeof a ? c = a : "object" == typeof n && (c = n), i1 = v(!0, i1, c);
        }
        var m = "";
        if ("string" == typeof a && 0 < a.length && (m = a), o) {
            m = m.length > i1.messageMaxLength ? N(m).toString().substring(0, i1.messageMaxLength) + "..." : N(m).toString();
            var p = "";
            0 < m.length && (p = '<p id="' + i1.messageID + '" class="nx-loading-message" style="color:' + i1.messageColor + ";font-size:" + i1.messageFontSize + ';">' + m + "</p>"), i1.cssAnimation || (i1.cssAnimationDuration = 0);
            var d = "";
            if (e === x1.Standard) d = I1(i1.svgSize, i1.svgColor);
            else if (e === x1.Hourglass) d = A1(i1.svgSize, i1.svgColor);
            else if (e === x1.Circle) d = M1(i1.svgSize, i1.svgColor);
            else if (e === x1.Arrows) d = X1(i1.svgSize, i1.svgColor);
            else if (e === x1.Dots) d = R(i1.svgSize, i1.svgColor);
            else if (e === x1.Pulse) d = B(i1.svgSize, i1.svgColor);
            else if (e === x1.Custom && null !== i1.customSvgCode && null === i1.customSvgUrl) d = i1.customSvgCode || "";
            else if (e === x1.Custom && null !== i1.customSvgUrl && null === i1.customSvgCode) d = '<img class="nx-custom-loading-icon" width="' + i1.svgSize + '" height="' + i1.svgSize + '" src="' + i1.customSvgUrl + '" alt="Notiflix">';
            else {
                if (e === x1.Custom && (null === i1.customSvgUrl || null === i1.customSvgCode)) return y1('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'), !1;
                d = D1(i1.svgSize, "#f8f8f8", "#32c682");
            }
            var f = parseInt((i1.svgSize || "").replace(/[^0-9]/g, "")), u = t1.innerWidth, b = f >= u ? u - 40 + "px" : f + "px", h = '<div style="width:' + b + "; height:" + b + ';" class="' + i1.className + "-icon" + (0 < m.length ? " nx-with-message" : "") + '">' + d + "</div>", w = t1.document.createElement("div");
            if (w.id = g1.ID, w.className = i1.className + (i1.cssAnimation ? " nx-with-animation" : "") + (i1.clickToClose ? " nx-loading-click-to-close" : ""), w.style.zIndex = i1.zindex, w.style.background = i1.backgroundColor, w.style.animationDuration = i1.cssAnimationDuration + "ms", w.style.fontFamily = '"' + i1.fontFamily + '", ' + r1, w.style.display = "flex", w.style.flexWrap = "wrap", w.style.flexDirection = "column", w.style.alignItems = "center", w.style.justifyContent = "center", i1.rtl && (w.setAttribute("dir", "rtl"), w.classList.add("nx-rtl-on")), w.innerHTML = h + p, !t1.document.getElementById(w.id) && (t1.document.body.appendChild(w), i1.clickToClose)) {
                var C = t1.document.getElementById(w.id);
                C.addEventListener("click", function() {
                    w.classList.add("nx-remove");
                    var t = setTimeout(function() {
                        null !== w.parentNode && (w.parentNode.removeChild(w), clearTimeout(t));
                    }, i1.cssAnimationDuration);
                });
            }
        } else if (t1.document.getElementById(g1.ID)) var z = t1.document.getElementById(g1.ID), S = setTimeout(function() {
            z.classList.add("nx-remove");
            var t = setTimeout(function() {
                null !== z.parentNode && (z.parentNode.removeChild(z), clearTimeout(t));
            }, i1.cssAnimationDuration);
            clearTimeout(S);
        }, s);
        i1 = v(!0, i1, l);
    }, q1 = function(e) {
        "string" != typeof e && (e = "");
        var a = t1.document.getElementById(g1.ID);
        if (a) {
            if (0 < e.length) {
                e = e.length > i1.messageMaxLength ? N(e).substring(0, i1.messageMaxLength) + "..." : N(e);
                var n = a.getElementsByTagName("p")[0];
                if (n) n.innerHTML = e;
                else {
                    var o = t1.document.createElement("p");
                    o.id = i1.messageID, o.className = "nx-loading-message nx-loading-message-new", o.style.color = i1.messageColor, o.style.fontSize = i1.messageFontSize, o.innerHTML = e, a.appendChild(o);
                }
            } else y1("Where is the new message?");
        }
    }, Y1 = function() {
        return null;
    }, U = 0, Q1 = function(e3, a4, n4, i3, s, l) {
        var c;
        if (Array.isArray(n4)) {
            if (1 > n4.length) return y1("Array of HTMLElements should contains at least one HTMLElement."), !1;
            c = n4;
        } else if (Object.prototype.isPrototypeOf.call(NodeList.prototype, n4)) {
            if (1 > n4.length) return y1("NodeListOf<HTMLElement> should contains at least one HTMLElement."), !1;
            c = Array.prototype.slice.call(n4);
        } else {
            var m = "string" != typeof n4 || 1 > (n4 || "").length || 1 === (n4 || "").length && ("#" === (n4 || "")[0] || "." === (n4 || "")[0]);
            if (m) return y1("The selector parameter must be a string and matches a specified CSS selector(s)."), !1;
            var p = t1.document.querySelectorAll(n4);
            if (1 > p.length) return y1('You called the "Notiflix.Block..." function with "' + n4 + '" selector, but there is no such element(s) in the document.'), !1;
            c = p;
        }
        o1 || G.Block.init({});
        var d = v(!0, o1, {});
        if ("object" == typeof i3 && !Array.isArray(i3) || "object" == typeof s && !Array.isArray(s)) {
            var f = {};
            "object" == typeof i3 ? f = i3 : "object" == typeof s && (f = s), o1 = v(!0, o1, f);
        }
        var x = "";
        "string" == typeof i3 && 0 < i3.length && (x = i3), o1.cssAnimation || (o1.cssAnimationDuration = 0);
        var g = b1.className;
        "string" == typeof o1.className && (g = o1.className.trim());
        var w = "number" == typeof o1.querySelectorLimit ? o1.querySelectorLimit : 200, C = (c || []).length >= w ? w : c.length, z = "nx-block-temporary-position";
        if (e3) {
            for(var S, L = [
                "area",
                "base",
                "br",
                "col",
                "command",
                "embed",
                "hr",
                "img",
                "input",
                "keygen",
                "link",
                "meta",
                "param",
                "source",
                "track",
                "wbr",
                "html",
                "head",
                "title",
                "script",
                "style",
                "iframe"
            ], D = 0; D < C; D++)if (S = c[D], S) {
                if (-1 < L.indexOf(S.tagName.toLocaleLowerCase("en"))) break;
                var T = S.querySelectorAll("[id^=" + b1.ID + "]");
                if (1 > T.length) {
                    var F = "";
                    a4 && (a4 === u1.Hourglass ? F = A1(o1.svgSize, o1.svgColor) : a4 === u1.Circle ? F = M1(o1.svgSize, o1.svgColor) : a4 === u1.Arrows ? F = X1(o1.svgSize, o1.svgColor) : a4 === u1.Dots ? F = R(o1.svgSize, o1.svgColor) : a4 === u1.Pulse ? F = B(o1.svgSize, o1.svgColor) : F = I1(o1.svgSize, o1.svgColor));
                    var E = '<span class="' + g + '-icon" style="width:' + o1.svgSize + ";height:" + o1.svgSize + ';">' + F + "</span>", O = "";
                    0 < x.length && (x = x.length > o1.messageMaxLength ? N(x).substring(0, o1.messageMaxLength) + "..." : N(x), O = '<span style="font-size:' + o1.messageFontSize + ";color:" + o1.messageColor + ';" class="' + g + '-message">' + x + "</span>"), U++;
                    var H = t1.document.createElement("div");
                    H.id = b1.ID + "-" + U, H.className = g + (o1.cssAnimation ? " nx-with-animation" : ""), H.style.position = o1.position, H.style.zIndex = o1.zindex, H.style.background = o1.backgroundColor, H.style.animationDuration = o1.cssAnimationDuration + "ms", H.style.fontFamily = '"' + o1.fontFamily + '", ' + r1, H.style.display = "flex", H.style.flexWrap = "wrap", H.style.flexDirection = "column", H.style.alignItems = "center", H.style.justifyContent = "center", o1.rtl && (H.setAttribute("dir", "rtl"), H.classList.add("nx-rtl-on")), H.innerHTML = E + O;
                    var W = t1.getComputedStyle(S).getPropertyValue("position"), j = "string" == typeof W ? W.toLocaleLowerCase("en") : "relative", P = Math.round(1.25 * parseInt(o1.svgSize)) + 40, V = S.offsetHeight || 0, q = "";
                    P > V && (q = "min-height:" + P + "px;");
                    var Y = "";
                    Y = S.getAttribute("id") ? "#" + S.getAttribute("id") : S.classList[0] ? "." + S.classList[0] : (S.tagName || "").toLocaleLowerCase("en");
                    var Q = "", K = -1 >= [
                        "absolute",
                        "relative",
                        "fixed",
                        "sticky"
                    ].indexOf(j);
                    if (K || 0 < q.length) {
                        if (!k("head")) return !1;
                        K && (Q = "position:relative!important;");
                        var J = '<style id="Style-' + b1.ID + "-" + U + '">' + Y + "." + z + "{" + Q + q + "}</style>", Z = t1.document.createRange();
                        Z.selectNode(t1.document.head);
                        var $ = Z.createContextualFragment(J);
                        t1.document.head.appendChild($), S.classList.add(z);
                    }
                    S.appendChild(H);
                }
            }
        } else var _ = function(e) {
            var a = setTimeout(function() {
                null !== e.parentNode && e.parentNode.removeChild(e);
                var n = e.getAttribute("id"), i = t1.document.getElementById("Style-" + n);
                i && null !== i.parentNode && i.parentNode.removeChild(i), clearTimeout(a);
            }, o1.cssAnimationDuration);
        }, tt = function(t) {
            if (t && 0 < t.length) for(var e, a = 0; a < t.length; a++)e = t[a], e && (e.classList.add("nx-remove"), _(e));
            else "string" == typeof n4 ? h1('"Notiflix.Block.remove();" function called with "' + n4 + '" selector, but this selector does not have a "Block" element to remove.') : h1('"Notiflix.Block.remove();" function called with "' + n4 + '", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.');
        }, et = function(t) {
            var e = setTimeout(function() {
                t.classList.remove(z), clearTimeout(e);
            }, o1.cssAnimationDuration + 300);
        }, at = setTimeout(function() {
            for(var t, e = 0; e < C; e++)t = c[e], t && (et(t), T = t.querySelectorAll("[id^=" + b1.ID + "]"), tt(T));
            clearTimeout(at);
        }, l);
        o1 = v(!0, o1, d);
    }, G = {
        Notify: {
            init: function(t) {
                e1 = v(!0, c1, t), w1(T1, "NotiflixNotifyInternalCSS");
            },
            merge: function(t) {
                return e1 ? void (e1 = v(!0, e1, t)) : (y1("You have to initialize the Notify module before call Merge function."), !1);
            },
            success: function(t, e, a) {
                E1(l1.Success, t, e, a);
            },
            failure: function(t, e, a) {
                E1(l1.Failure, t, e, a);
            },
            warning: function(t, e, a) {
                E1(l1.Warning, t, e, a);
            },
            info: function(t, e, a) {
                E1(l1.Info, t, e, a);
            }
        },
        Report: {
            init: function(t) {
                a1 = v(!0, p1, t), w1(O1, "NotiflixReportInternalCSS");
            },
            merge: function(t) {
                return a1 ? void (a1 = v(!0, a1, t)) : (y1("You have to initialize the Report module before call Merge function."), !1);
            },
            success: function(t, e, a, n, i) {
                H1(m1.Success, t, e, a, n, i);
            },
            failure: function(t, e, a, n, i) {
                H1(m1.Failure, t, e, a, n, i);
            },
            warning: function(t, e, a, n, i) {
                H1(m1.Warning, t, e, a, n, i);
            },
            info: function(t, e, a, n, i) {
                H1(m1.Info, t, e, a, n, i);
            }
        },
        Confirm: {
            init: function(t) {
                n1 = v(!0, f1, t), w1(W1, "NotiflixConfirmInternalCSS");
            },
            merge: function(t) {
                return n1 ? void (n1 = v(!0, n1, t)) : (y1("You have to initialize the Confirm module before call Merge function."), !1);
            },
            show: function(t, e, a, n, i, o, s) {
                j1(d1.Show, t, e, null, a, n, i, o, s);
            },
            ask: function(t, e, a, n, i, o, s, r) {
                j1(d1.Ask, t, e, a, n, i, o, s, r);
            },
            prompt: function(t, e, a, n, i, o, s, r) {
                j1(d1.Prompt, t, e, a, n, i, o, s, r);
            }
        },
        Loading: {
            init: function(t) {
                i1 = v(!0, g1, t), w1(P1, "NotiflixLoadingInternalCSS");
            },
            merge: function(t) {
                return i1 ? void (i1 = v(!0, i1, t)) : (y1("You have to initialize the Loading module before call Merge function."), !1);
            },
            standard: function(t, e) {
                V1(x1.Standard, t, e, !0, 0);
            },
            hourglass: function(t, e) {
                V1(x1.Hourglass, t, e, !0, 0);
            },
            circle: function(t, e) {
                V1(x1.Circle, t, e, !0, 0);
            },
            arrows: function(t, e) {
                V1(x1.Arrows, t, e, !0, 0);
            },
            dots: function(t, e) {
                V1(x1.Dots, t, e, !0, 0);
            },
            pulse: function(t, e) {
                V1(x1.Pulse, t, e, !0, 0);
            },
            custom: function(t, e) {
                V1(x1.Custom, t, e, !0, 0);
            },
            notiflix: function(t, e) {
                V1(x1.Notiflix, t, e, !0, 0);
            },
            remove: function(t) {
                "number" != typeof t && (t = 0), V1(null, null, null, !1, t);
            },
            change: function(t) {
                q1(t);
            }
        },
        Block: {
            init: function(t) {
                o1 = v(!0, b1, t), w1(Y1, "NotiflixBlockInternalCSS");
            },
            merge: function(t) {
                return o1 ? void (o1 = v(!0, o1, t)) : (y1('You have to initialize the "Notiflix.Block" module before call Merge function.'), !1);
            },
            standard: function(t, e, a) {
                Q1(!0, u1.Standard, t, e, a);
            },
            hourglass: function(t, e, a) {
                Q1(!0, u1.Hourglass, t, e, a);
            },
            circle: function(t, e, a) {
                Q1(!0, u1.Circle, t, e, a);
            },
            arrows: function(t, e, a) {
                Q1(!0, u1.Arrows, t, e, a);
            },
            dots: function(t, e, a) {
                Q1(!0, u1.Dots, t, e, a);
            },
            pulse: function(t, e, a) {
                Q1(!0, u1.Pulse, t, e, a);
            },
            remove: function(t, e) {
                "number" != typeof e && (e = 0), Q1(!1, null, t, null, null, e);
            }
        }
    };
    return {
        Notify: G.Notify,
        Report: G.Report,
        Confirm: G.Confirm,
        Loading: G.Loading,
        Block: G.Block
    };
});

//# sourceMappingURL=index.66c1e316.js.map
