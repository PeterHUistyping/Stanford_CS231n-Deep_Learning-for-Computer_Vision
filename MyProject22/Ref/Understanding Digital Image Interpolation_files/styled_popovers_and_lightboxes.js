/**
 * AWFormGenerator
 *
 * Creates an instance of a web form.
 * @param {object}  properties  Key value pairs of properties used in
 *      generating the form.  The properties specified below can be
 *      passed in as arguments.
 * @access public
 * @return void
 */
awf_Form_.AWFormGenerator = function(properties) {

    this.delay = 1;
    this.form = '';
    this.formType = 'popover';
    this.plPath = 'www.aweber.com';
    this.closeButtonPath = '/images/closebox.png';
    this.closeButtonGIF  = '/images/closebox.gif';
    this.closeButtonClass = 'af-form-close-button';
    this.animation = 'bottom';
    this.width = 400;
    this.height = 400;
    this.timeOut = false;
    this.div = document.createElement('DIV');
    this.xIncrement = 10;
    this.frameSpeed = 1;
    this.opacityIncrement = 5;
    this.yIncrement = 10;
    this.easingPercent = 0.2;
    this.popOverZIndex = 10000;
    this.redirectId = false;
    this.returnToPage = 0;
    this.quirksMode = false; // Currently, only correct for IE

    /*@if(true)
           this.IE = true;
      @end @*/
    if (this.IE && !window.XMLHttpRequest) {
        this.IE6 = true;
    }
    if (this.IE && window.msPerformance) {
        this.IE9 = true;
        this.xIncrement = this.yIncrement = 70; // animation fixes
    }
    if ('opacity' in document.body.style) {
        this.hasOpacity = true;
    }
    if (this.IE) this.opacityIncrement = 20;

    for (property in properties) {
        this[property] = properties[property];
    }

    if (this.IE) {
        // Snag IE render mode
        if (document.compatMode && document.compatMode == 'BackCompat') {
            this.quirksMode = true;
        }

        // Load the styles BEFORE the delay
        // This way, we can start downloading images in advance
        var cssNode = document.createElement('style');
        cssNode.type = 'text/css';
        cssNode.rel = 'stylesheet';
        cssNode.media = 'screen';
        cssNode.title = 'dynamicSheet';
        document.getElementsByTagName("head")[0].appendChild(cssNode);
        if (!document.styleSheets) {
            document.styleSheets = [{cssText: this.styles}];
        } else if (!document.styleSheets[0]) {
            document.styleSheets = [{cssText: this.styles}];
        } else {
            document.styleSheets[0].cssText += this.styles;
        }
    } else {
        var styleBlock = document.createElement('DIV');
        styleBlock.innerHTML = '<style type="text/css">'+this.styles+'</style>';
        document.getElementsByTagName('body')[0].appendChild(styleBlock);
    }

    /**
     * Creates an instance of light box.
     */
    this.initialize = function() {

        this.recordScrollPosition();
        this.div.innerHTML = this.form;
        this.div.style.position = 'absolute';
        if (this.width == 'auto') {
            this.div.style.width = this.width;
        } else {
            this.div.style.width = this.width+'px';
        }
        if (this.height == 'auto') {
            this.div.style.height = this.height;
        } else {
            this.div.style.height = this.height+'px';
        }

        if (this.animation == 'fade in') {
            this.curOpacity = 0;
            this.div.style.MozOpacity = this.curOpacity;
            this.div.style.opacity = this.curOpactiy;
            if (this.IE && !this.hasOpacity) {
                this.div.style.filter = 'alpha(opacity='+this.curOpacity+')';
            } else {
                this.div.style.MozOpacity = this.curOpacity;
                this.div.style.opacity = this.curOpactiy;
            }
        }

        document.getElementsByTagName('body')[0].appendChild(this.div);

        // Will the entire form fit inside the viewport?
        this.formFits = !!((this.windowEdgeY - this.windowY) > this.height);
        if (this.formFits && this.formType == 'lightbox') this.lockScrolling();

        // Calculate initial positions based on animation
        this.stopPositionX = this.calculateStopPosition('x');
        this.stopPositionY = this.calculateStopPosition('y');

        switch(this.animation) {
            case 'slide from left':
                this.curPositionY = this.stopPositionY;
                this.curPositionX = (this.windowX-this.width);
                this.yIncrement = 0;
                break;

            case 'slide from top':
                this.curPositionY = (this.windowY-this.height);
                this.curPositionX = this.stopPositionX;
                this.xIncrement = 0;
                break;

            case 'slide from right':
                this.curPositionY = this.stopPositionY;
                this.curPositionX = (parseInt(this.windowEdgeX)+parseInt(this.width));
                this.xIncrement = -1*this.xIncrement;
                this.yIncrement = 0;
                break;

            case 'slide from bottom':
                this.curPositionY = (parseInt(this.windowEdgeY)+parseInt(this.height));
                this.curPositionX = this.stopPositionX;
                this.yIncrement = -1*this.yIncrement;
                this.xIncrement = 0;
                break;
            case 'default':
            default:
                this.curPositionY = this.stopPositionY;
                this.curPositionX = this.stopPositionX;
                this.yIncrement = 0;
                this.xIncrement = 0;
                break;

        }

        if (this.formType == 'lightbox') {
            this.showOverlay();
        }

        if (this.quirksMode) {
            var body = document.getElementById('af-body-'+this.id);
            if (body) {
                body.className = 'af-body inline af-quirksMode';
            }
            var header = document.getElementById('af-header-'+this.id);
            if (header) {
                header.className = 'af-header af-quirksMode';
            }
            var footer = document.getElementById('af-footer-'+this.id);
            if (footer) {
                footer.className = 'af-footer af-quirksMode';
            }
        }

        this.showShadow();
        this.attachImageLoads();
        var form = '';
        me = this;
        if (document.getElementById('af-iframe-'+this.id) == null) {
            form = document.getElementById('af-form-'+this.id);
        }
        else {
            form = document.getElementById('af-iframe-'+this.id);
        }
        this.resizePopUp();
        this.addEvent(form, 'load', function() { me.resizePopUp(); });
        this.processRedirect();

        this.div.style.top  = Math.floor(this.curPositionY)+'px';
        this.div.style.left = Math.floor(this.curPositionX)+'px';

        this.div.style.zIndex = this.popOverZIndex;
        this.div.id = 'popForm-'+this.id;

        this.closeButtonId = 'close_Button_'+this.id+'_'+Math.floor(Math.random()*1000000)+'_'+Math.floor(Math.random()*1000000);
        this.closeButton = new Image();
        this.closeButton.id = this.closeButtonId;
        this.closeButton.className = this.closeButtonClass;

        // Use GIF not PNG for IE6
        if (this.IE6) this.closeButtonPath = this.closeButtonGIF;
        this.closeButton.src = 'https://' + this.plPath + this.closeButtonPath;
        this.closeButton.style.position = 'absolute';
        this.closeButton.style.top  = (parseInt(this.curPositionY)-10)+'px';
        this.closeButton.style.left = (parseInt(this.curPositionX)+(this.width - 20))+'px';
        this.closeButton.style.zIndex = this.popOverZIndex+20;
        document.getElementsByTagName('body')[0].appendChild(this.closeButton);

        this.distanceX = Math.abs(this.curPositionX - this.stopPositionX);
        this.distanceY = Math.abs(this.curPositionY - this.stopPositionY);
        var myself = this;
        this.closeButton.onclick = function() { myself.closeForm(); }
        this.addEvent (window, 'keypress', function(e) {
            var evt = e || window.evt;
            var charCode = evt.charCode || evt.keyCode;
            if (charCode==27) {
                myself.closeForm();
            }
        });

        if (this.animation == 'fade in') {
            if (this.formType == 'lightbox' && this.IE6) {
                this.opacityIncrement = 20;
            }
            this.fadeDiv();
        } else {
            this.moveDiv(this.xIncrement, this.yIncrement, this.frameSpeed);
        }
        window.setTimeout(function() {
            // Special handling for facebook iOS since it cannot open new windows
            if (navigator.userAgent.indexOf('FBIOS') !== -1 || navigator.userAgent.indexOf('Twitter for iPhone') !== -1) {
                document.getElementById('af-form-' + me.id).parentElement.removeAttribute('target');
            }
        }, 0);

        // Optional callback
        if (window.postFormAppend) {
            postFormAppend();
        }
    }

    this.processRedirect = function() {
        if ((parseInt(this.returnToPage)==1) && this.redirectId) {
            var redirect = document.getElementById(this.redirectId);
            if (redirect) {
                redirect.value = document.location;
            }
        }
    }

    this.addEvent = function(obj, event, func) {
        if (obj.addEventListener) {
            obj.addEventListener(event, func, false);
            return true;
        } else if (obj.attachEvent){
            var newEvent = obj.attachEvent("on"+event, func);
            return newEvent;
        }
    }

    this.attachImageLoads = function() {
        var images = this.div.getElementsByTagName('img');
        var me = this;
        var update = function() { me.resizePopUp(); };

        // If the submit button was an image, it would have this id.
        var submitButton = document.getElementById('af-submit-image-'+this.id);
        if (submitButton) {
            this.addEvent(submitButton, 'load', update);
        }
        var i = images.length;
        while (i > 0 ) {
            i--;
            this.addEvent(images[i], 'load', update);
        }
    }

    this.resizePopUp = function() {
        var form = '';
        var isFacebookShown = false;
        if (document.getElementById('af-iframe-'+this.id) == null) {
            form = document.getElementById('af-form-'+this.id);
        }
        else {
            form = document.getElementById('af-iframe-'+this.id);
            isFacebookShown = true;
        }
        var oldHeight = this.height;
        var oldWidth  = this.width;
        if (this.IE){
            var height = form.offsetHeight;
            var width  = form.offsetWidth;
        } else {
            var height = document.defaultView.getComputedStyle(form, '').getPropertyValue("height");
            var width = document.defaultView.getComputedStyle(form, '').getPropertyValue("width");
            height = height.replace('px','');
            width = width.replace('px', '');
        }
        height = parseInt(height);
        width = parseInt(width);

        if (isFacebookShown) {
            height = height - 18;
            if(this.IE) {
                width = width - 19;
            } else {
                width = width - 15;
            }
        }

        if (oldHeight != height) {
            this.height = height;
            this.div.style.height = height+'px';
            this.stopPositionY = this.calculateStopPosition('y');

            if (this.shadow) {
                this.shadow.style.height = height+'px';
            }
        }
        if (oldWidth != width) {
            this.width  = width;
            this.div.style.width  = width+'px';
            this.calculateStopPosition('x');
            this.stopPositionX = this.calculateStopPosition('x');
        }
        this.div.style.overflow = 'hidden';
    }

    this.getDocumentHeight = function() {
        var D = document;
        return Math.max(
                Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
                Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
                Math.max(D.body.clientHeight, D.documentElement.clientHeight)
                );
    }

    this.closeForm = function() {
        if (this.closeButton.parentNode) {
            // Only run these the first time a lightbox is closed
            this.closeButton.parentNode.removeChild(this.closeButton);
            this.div.parentNode.removeChild(this.div);
        }
        if (this.formType == 'lightbox') {
            this.hideOverlay();
        }
        if (this.shadow) {
            this.hideShadow();
        }
        this.unlockScrolling();
        this.closeButton.style.display = 'none';
    }

    this.fadeDiv = function() {
        clearTimeout(this.timeOut);
        if (this.curOpacity < 100) {
            this.curOpacity += this.opacityIncrement;
            if (this.curOpacity > 100) {
                this.curOpacity = 100;
            }
            if (this.IE && !this.hasOpacity) {
                this.div.style.filter = 'alpha(opacity='+this.curOpacity+')';
            } else {
                this.div.style.MozOpacity = (this.curOpacity/100);
                this.div.style.opacity = (this.curOpacity/100);
            }
            if (typeof this.overlay != 'undefined') {
                this.overlay.style.MozOpacity = (this.curOpacity/100)*0.8;
                if (this.IE && !this.hasOpacity) {
                    this.overlay.style.filter = 'alpha(opacity='+(0.8*this.curOpacity)+')';
                } else {
                    this.overlay.style.MozOpacity = (this.curOpacity/100)*0.8;
                    this.overlay.style.opacity = (this.curOpacity/100)*0.8;
                }
            }
            if (typeof this.shadow != 'undefined') {
                this.shadow.style.MozOpacity = (this.curOpacity/100);
                if (this.IE && !this.hasOpacity) {
                    this.shadow.style.filter = 'alpha(opacity='+(this.curOpacity)+')';
                } else {
                    this.shadow.style.MozOpacity = (this.curOpacity/100);
                    this.shadow.style.opacity = (this.curOpacity/100);
                }
            }

            var me = this;
            this.timeOut = setTimeout(function() {
                    me.fadeDiv();
                }, this.frameSpeed);

        } else {
            this.div.style.filter = 'none'; // Removes black border on forms in IE
        }
    }

    /**
     * Records the scroll position of where the customer currently is on the
     * page. This is used to calculate the starting and ending position of the form,
     * as well as prevent the customer from scrolling while the form is displayed.
     * @return void
     */
    this.recordScrollPosition = function() {
        // windowX/Y is the upper-left corner of viewport
        // windowEdgeX/Y is the lower-right corner

        this.windowX = document.body.scrollLeft || window.pageXOffset || document.documentElement.scrollLeft;
        this.windowY = document.body.scrollTop || window.pageYOffset  || document.documentElement.scrollTop;


        if (typeof window.innerWidth != 'undefined') {
            this.windowEdgeX = this.windowX + window.innerWidth;
            this.windowEdgeY = this.windowY + window.innerHeight;
        } else if (typeof document.body.offsetWidth != 'undefined') {
            this.windowEdgeX = this.windowX + document.body.offsetWidth;
            this.windowEdgeY = this.windowY + document.body.offsetHeight;
        }
        if (this.IE && !this.quirksMode) {
            this.windowEdgeX = document.documentElement.clientWidth;
            this.windowEdgeY = document.documentElement.clientHeight;
        }
    }

    /**
     * Scrolls the window back into place if the user tries to move.
     */
    this.scrollBackToPlace = function() {
        if (awf_Form_.form.scrollLock)
            window.scrollTo(parseInt(awf_Form_.form.windowX), parseInt(awf_Form_.form.windowY));
    }

    this.unlockScrolling = function() {
        document.body.style.overflow = 'auto';
        awf_Form_.form.scrollLock = false;
    }

    /**
     * Freezes the window to the current position of windowY and windowX if the
     * user attempts to scroll.
     */
    this.lockScrolling = function() {
        if (typeof awf_Form_.form.scrollLock=='undefined') {
            // Only add the event once
            this.addEvent(document, 'scroll', function(){
                    awf_Form_.form.scrollBackToPlace();
            });
        }
        awf_Form_.form.scrollLock = true;
        document.body.style.overflow = 'hidden';
    }

    this.showOverlay = function() {
        this.overlay = document.createElement('DIV');
        this.overlay.style.width   = '120%';
        this.overlay.style.height = this.getDocumentHeight() + 'px';
        this.overlay.style.position = 'absolute';
        this.overlay.style.top      = 0;
        this.overlay.style.left     = 0;
        this.overlay.style.backgroundColor = '#000000';
        this.overlay.style.zIndex = this.popOverZIndex-2;
        document.getElementsByTagName('body')[0].appendChild(this.overlay);
        if (this.animation == 'fade in') {
            if (this.IE  && !this.hasOpacity) {
                this.overlay.style.filter = 'alpha(opacity=0)';
            } else {
                this.overlay.style.MozOpacity = 0;
                this.overlay.style.opacity = 0;
            }
        } else {
            if (this.IE  && !this.hasOpacity) {
                this.overlay.style.filter = 'alpha(opacity=80)';
            } else {
                this.overlay.style.MozOpacity = 0.8;
                this.overlay.style.opacity = 0.8;
            }
        }
    }


    this.showShadow = function() {
        if (this.IE && this.animation == 'fade in') {
            return false;
        }
        // Create drop shadow - not in IE6
        if (!this.IE6) {
            this.shadow = document.createElement('DIV');
            this.shadow.style.zIndex = this.popOverZIndex-1;
            this.shadow.innerHTML =
                '<div class="dropShadowUL'+this.id+'"></div><div class="dropShadowTop'+this.id+'"></div><div class="dropShadowUR'+this.id+'"></div><div class="af-clear"></div>'+
                '<div class="dropShadowL'+this.id+'"></div><div class="dropShadowR'+this.id+'"></div><div class="af-clear"></div>'+
                '<div class="dropShadowLL'+this.id+'"></div><div class="dropShadowBottom'+this.id+'"></div><div class="dropShadowLR'+this.id+'"></div><div class="af-clear"></div>';
            document.getElementsByTagName('body')[0].appendChild(this.shadow);
            this.shadow.style.width  = (parseInt(this.width)+18)+'px';
            this.shadow.style.height = '0px';
            this.shadow.style.position = 'absolute';

            this.shadow.style.top  = (parseInt(this.curPositionY)-10)+'px';
            this.shadow.style.left = (parseInt(this.curPositionX)-9)+'px';
            if (this.animation == 'fade in') {
                if (this.IE  && !this.hasOpacity) {
                    this.shadow.style.filter = 'alpha(opacity=0)';
                } else {
                    this.shadow.style.MozOpacity = 0;
                    this.shadow.style.opacity = 0;
                }
            }
        }
    }

    this.hideOverlay = function() {
        this.overlay.style.display = 'none';
        if (this.overlay.parentNode)
            this.overlay.parentNode.removeChild(this.overlay);
    }

    this.hideShadow = function() {
        this.shadow.style.display = 'none';
        if (this.shadow.parentNode)
            this.shadow.parentNode.removeChild(this.shadow);
    }

    /**
     * Increments the div's position so that it ends up where we want it to.
     */
    this.moveDiv = function(xIncrement, yIncrement, frameSpeed) {
        clearTimeout(this.timeOut);
        var movedX = false;
        var movedY = false;
        var percentLeft = 0;
        if (xIncrement != 0 && (Math.abs(this.curPositionX - this.stopPositionX) > Math.abs(xIncrement))) {

            // Easing! Pull the xIncrement closer to 0 as we approach our stopPosition
            percentLeft = (Math.abs(this.curPositionX - this.stopPositionX) / this.distanceX);
            if (percentLeft < this.easingPercent) {
                // If there is less than 20% of the distance to travel left, start scaling down
                // the increments.
                var curX = xIncrement * (percentLeft * (1/this.easingPercent));

                // If we've descreased below 1, make it 1. Use curX / curX to account
                // for positives or negatives.
                if (Math.abs(curX) < 1) {
                    curX = 1 * (curX / Math.abs(curX));
                }
            } else {
                var curX = xIncrement;
            }
            this.curPositionX = Math.floor(this.curPositionX + Math.round(curX));
            this.div.style.left = this.curPositionX+'px';
            this.closeButton.style.left = (parseInt(this.curPositionX)+(this.width - 20))+'px';
            if (this.shadow) {
                this.shadow.style.left = (parseInt(this.curPositionX)-9)+'px';
            }
            movedX = true;
        }
        if ((yIncrement != 0) && (Math.abs(this.curPositionY - this.stopPositionY) > Math.abs(yIncrement))) {

            // Easing! Pull the xIncrement closer to 0 as we approach our stopPosition
            percentLeft = (Math.abs(this.curPositionY - this.stopPositionY) / this.distanceY);
            if (percentLeft < this.easingPercent) {
                // If there is less than 20% of the distance to travel left, start scaling down
                // the increments.
                var curY = yIncrement * (percentLeft * (1/this.easingPercent));

                if (Math.abs(curX) < 1) {
                    curX = 1 * (curX / Math.abs(curX));
                }
            } else {
                var curY = yIncrement;
            }
            this.curPositionY = Math.floor(this.curPositionY + Math.round(curY));
            this.div.style.top = this.curPositionY+'px';
            this.closeButton.style.top  = (parseInt(this.curPositionY)-10)+'px';
            if (this.shadow) {
                this.shadow.style.top = (parseInt(this.curPositionY)-10)+'px';
            }

            movedY = true;
        }

        if (movedY || movedX) {
            var myself = this;
            this.timeOut = setTimeout(function() {
                myself.moveDiv(xIncrement, yIncrement, frameSpeed);
            }, frameSpeed);
        }
    }

    this.calculateStopPosition = function(direction) {
        if (direction == 'x') {
            return ((this.windowEdgeX-this.windowX)/2)+this.windowX-(this.width/2);
        } else {
            if (!this.formFits) {
                // default to top if it wouldn't fit anyway
                return this.windowY + 30;
            } else {
                return ((this.windowEdgeY-this.windowY)/2)+this.windowY-(this.height/2);
            }
        }
    }

    // Set a delay, then initialize the form
    var myself = this;
    setTimeout(function() {
            myself.initialize();
        }, (this.delay*1000));
}

if (awf_Form_.FormQueue) {
    for(func in awf_Form_.FormQueue) {
        if (typeof awf_Form_.FormQueue[func] == 'function') { awf_Form_.FormQueue[func](); }
    }
}