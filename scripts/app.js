(function (document) {
    'use strict';

    var app = document.querySelector('#app');

    app.displayInstalledToast = function () {
        if (!document.querySelector('platinum-sw-cache').disabled) {
            document.querySelector('#caching-complete').show();
        }
    };

    app.addEventListener('dom-change', function () {
        console.log('Our app is ready to rock!');
    });

    window.addEventListener('WebComponentsReady', function () {
    });

    addEventListener('paper-header-transform', function (e) {
        var appName = document.querySelector('#mainToolbar .app-name');
        var middleContainer = document.querySelector('#mainToolbar .middle-container');
        var bottomContainer = document.querySelector('#mainToolbar .bottom-container');
        var detail = e.detail;
        var heightDiff = detail.height - detail.condensedHeight;
        var yRatio = Math.min(1, detail.y / heightDiff);
        var maxMiddleScale = 0.50;
        var scaleMiddle = Math.max(maxMiddleScale, (heightDiff - detail.y) / (heightDiff / (1 - maxMiddleScale)) + maxMiddleScale);
        var scaleBottom = 1 - yRatio;

        Polymer.Base.transform('translate3d(0,' + yRatio * 100 + '%,0)', middleContainer);
        Polymer.Base.transform('scale(' + scaleBottom + ') translateZ(0)', bottomContainer);
        Polymer.Base.transform('scale(' + scaleMiddle + ') translateZ(0)', appName);
    });

    app.onDataRouteClick = function () {
        var drawerPanel = document.querySelector('#paperDrawerPanel');
        if (drawerPanel.narrow) {
            drawerPanel.closeDrawer();
        }
    };

    app.scrollPageToTop = function () {
        document.getElementById('mainContainer').scrollTop = 0;
    };

    app.goToStackOverflow = function () {
        window.location.href = 'http://stackoverflow.com/users/1408086/sliskicode';
    };

    app.goToGitHub = function () {
        window.location.href = 'https://github.com/sliskiCode';
    };

    app.goToLinkedIn = function () {
        window.location.href = 'https://pl.linkedin.com/pub/piotr-slesarew/5/147/240';
    };

})(document);
