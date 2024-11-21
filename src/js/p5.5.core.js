// =================================================================================================
// EXTENSION
// =================================================================================================

const core = {

    // private methods
    // ---------------------------------------------------------------------------------------------

    __initArtwork() {

        document.body.classList.add(`gui-theme-${this.__guiTheme}` || 'gui-theme-dark');

        // app
        this.__app = document.createElement('div');
        this.__app.classList.add(this.APP_CLASS);
        this.__addBeforeScriptsInBody(this.__app);

        // artwork wrapper
        this.__awWrapper = document.createElement('div');
        this.__awWrapper.classList.add(this.ARTWORK_WRAPPER_CLASS);
        this.__app.appendChild(this.__awWrapper);

        // artwork
        this.__aw = document.createElement('div');
        this.__aw.classList.add(this.ARTWORK_CLASS);
        this.__awWrapper.appendChild(this.__aw);

        // artwork content
        this.__awContent = document.createElement('div');
        this.__awContent.classList.add(this.ARTWORK_CONTENT_CLASS);
        this.__aw.appendChild(this.__awContent);

        // custom properties
        document.documentElement.style.setProperty('--wallpaper-color', this.__wallpaperColor);
    },

    __initListeners() {

        const waitForFinalEvent = (() => {
    
            // SOURCE :
            // https://gist.github.com/mazell/289e13ccf01759fcb921
        
            let timers = {};
        
            return function (callback, ms, uniqueId) {
                if (!uniqueId) { uniqueId = 'Don\'t call this twice without a uniqueId'; }
                if (timers[uniqueId]) { clearTimeout(timers[uniqueId]); }
                timers[uniqueId] = setTimeout(callback, ms);
            };
        
        })();

        window.addEventListener('resize', (ev) => {

            waitForFinalEvent(this.__onFinalWindowResize.bind(this, ev), 200, `unique resize key`);
        });

        this.__cvs.addEventListener('mousemove', this.__onMouseMove.bind(this));
        this.__cvs.addEventListener('mousedown', this.__onMouseDown.bind(this));
        this.__cvs.addEventListener('mouseup', this.__onMouseUpOrLeave.bind(this));
        this.__cvs.addEventListener('wheel', this.__onMouseWheel.bind(this), { passive: false });

        this.loopingToggledEvent = new CustomEvent('loopingtoggled');
        // this.loopsChangedEvent = new CustomEvent('loopschanged');
        this.tfrChangedEvent = new CustomEvent('tfrchanged');
        this.frChangedEvent = new CustomEvent('frchanged');
        this.zoomedEvent = new CustomEvent('zoomed');
        this.windowResizedEvent = new CustomEvent('windowresized');
        this.mouseMovedEvent = new CustomEvent('mousemoved');
        this.mousePressedEvent = new CustomEvent('mousepressed');
        this.mouseReleasedEvent = new CustomEvent('mousereleased');

    },

    __initPanZoom() {

        let awWrapperBoundings = this.__awWrapper.getBoundingClientRect();

        document.documentElement.style.setProperty('--screen-padding-top', this.__screenPaddingTop);            
        document.documentElement.style.setProperty('--screen-padding-right', this.__screenPaddingRight);            
        document.documentElement.style.setProperty('--screen-padding-bottom', this.__screenPaddingBottom);            
        document.documentElement.style.setProperty('--screen-padding-left', this.__screenPaddingLeft);            

        this.__awWidth = this.__aw.offsetWidth;
        this.__awHeight = this.__aw.offsetHeight;        
        this.__awContentWidth = this.__awContent.offsetWidth;
        this.__awContentHeight = this.__awContent.offsetHeight;
        this.__scrPaddingT = parseFloat(window.getComputedStyle(this.__aw).getPropertyValue('padding-top'));
        this.__scrPaddingL = parseFloat(window.getComputedStyle(this.__aw).getPropertyValue('padding-left'));
        this.__scrPaddingL += awWrapperBoundings.x;
        this.__scrPaddingT += awWrapperBoundings.y;

        const kw = this.__awContentWidth / this.__cvsWidth;
        const kh = this.__awContentHeight / this.__cvsHeight;

        this.__zoomMinScaled = Math.min(this.__zoomMin, this.__zoomMin / p5.__exportPPI * this.__cssScreenPPI);
        this.__zoomMaxScaled = Math.min(this.__zoomMax, this.__zoomMax / p5.__exportPPI * this.__cssScreenPPI);
        
        this.__zoomFit = Math.min(this.__zoomMaxScaled, Math.min(kw, kh));
        this.__zoomMinCurrent = this.__zoomFit < this.__zoomMinScaled ? this.__zoomFit : this.__zoomMinScaled;

        this.__zoomFit = Math.min(1 / p5.__exportPPI * this.__cssScreenPPI, this.__zoomFit);
        this.__zoom = this.__setupZoom ?  this.__setupZoom : this.__zoomFit;

        this.__initialZoom = this.__zoom;
        this.__initialX = (this.__awContentWidth - this.__cvsWidth * this.__initialZoom) / 2;
        this.__initialY = (this.__awContentHeight - this.__cvsHeight * this.__initialZoom) / 2;

        this.__positionArtwork(this.__initialX + this.__scrPaddingL, this.__initialY + this.__scrPaddingT);
    },

    __positionArtwork(left, top) {

        let deltaX;
        let deltaY;

        if (!(left || top)) {

            deltaX = (this.__awContentWidth - this.__cvsWidth * this.__zoom) / 2;
            deltaY = (this.__awContentHeight - this.__cvsHeight * this.__zoom) / 2;

        } else {

            deltaX = left - this.__scrPaddingL;
            deltaY = top - this.__scrPaddingT;
        }    

        this.__cvs.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${this.__zoom})`;

        if (this.__shadowVisible) this.__drawShadow();
    },

    __onFinalWindowResize(ev) {

        this.__initPanZoom();
        this.__et.dispatchEvent(this.zoomedEvent);
        this.__et.dispatchEvent(this.windowResizedEvent);
    },

    __initMoreListeners() {

        this.__prevFPS = -1;
        
        setInterval(() => {

            this.__fps = this.frameRate();
            
            if (this.__prevFPS !== this.__fps && this.isLooping()) {

                this.__et.dispatchEvent(this.frChangedEvent);

            } else if (!this.isLooping()) {

                this.__fps = 0;
                this.__et.dispatchEvent(this.frChangedEvent);
            }

            this.__prevFPS = this.__fps

        }, 1000);

        // adding global event listeners
        // -----------------------------------------------------------------------------------------

        let context = this._isGlobal ? window : this;

        if (context.onZoom) {

            this.__et.addEventListener('zoomed', (e) => {

                if (this.__zoomPrev !== this.__zoom) {

                    context.onZoom(e);
                    this.__zoomPrev = this.__zoom;
                }
            });
        };
    },

    __onMouseMove(ev) {

        const rect = this.__cvs.getBoundingClientRect();
        const cvsScale = this.__cvsWidth / rect.width;
        const screenX = (ev.clientX - rect.left) * cvsScale;
        const screenY = (ev.clientY - rect.top) * cvsScale;
        const transform = this.drawingContext.getTransform();

        if (transform.isIdentity) {

            this.__mouseX = screenX;
            this.__mouseY = screenY;

        } else {

            const invMat = transform.invertSelf();
            this.__mouseX =  Math.round(screenX * invMat.a + screenY * invMat.c + invMat.e);
            this.__mouseY =  Math.round(screenX * invMat.b + screenY * invMat.d + invMat.f);
        }

        this._setProperty('mouseTX', this.__mouseX);
        this._setProperty('mouseTY', this.__mouseY);

        this.__et.dispatchEvent(this.mouseMovedEvent);
    },

    __onMouseDown(ev) {

        this.__mouseDown = true;
        
        this.__cvsStartPos = this.__cvs.getBoundingClientRect();
        this.__mouseStartDragX = ev.clientX;
        this.__mouseStartDragY = ev.clientY;

        this.__cvs.addEventListener('mousemove', this.__onMouseDragged.bind(this));
        this.__cvs.addEventListener('mouseleave', this.__onMouseUpOrLeave.bind(this));

        this.__et.dispatchEvent(this.mousePressedEvent);
    },

    __onMouseDragged(ev) {

        if (this.__mouseDown === true) {

            let newLeft = this.__cvsStartPos.x + (ev.clientX - this.__mouseStartDragX);
            let newTop = this.__cvsStartPos.y + (ev.clientY - this.__mouseStartDragY);

            this.__mouseDragging = true;

            this.__positionArtwork(newLeft, newTop);
        }
    },

    __onMouseUpOrLeave(ev) {

        if (this.__mouseDragging === true) {

            this.__cvs.removeEventListener('mousemove', this.__onMouseDragged);
            this.__cvs.removeEventListener('mouseleave', this.__onMouseUpOrLeave);
        }

        this.__mouseDown = false;
        this.__mouseDragging = false;

        this.__et.dispatchEvent(this.mouseReleasedEvent);
    },

    __onMouseWheel(ev) {

        this.__zoomInOut(ev, ev.offsetX, ev.offsetY);
        this.__et.dispatchEvent(this.zoomedEvent);
    },

    __zoomInOut(ev, mX, mY) {

        const oldZoom = this.__zoom;
        const pctLeft = mX ? mX / this.__cvsWidth : 0;
        const pctTop = mY ? mY / this.__cvsHeight : 0;
        const pos = this.__cvs.getBoundingClientRect();
        
        let zoomInc = this.__zoomInc;
        let newLeft, newTop;

        if (ev) {

            ev.preventDefault();

            if (ev.ctrlKey) {
                zoomInc *= 2;
            }

            if (ev.altKey) {
                zoomInc *= 0.25;
            }

            if (ev.deltaY > 0) {

                // zoom out
                
                if (this.__zoom > this.__zoomMinCurrent / p5.__exportPPI * this.__cssScreenPPI) {
                    
                    this.__zoom = Math.max(this.__zoomMinCurrent, this.__zoom - zoomInc);
                }

            } else if (ev.deltaY < 0) {

                // zoom in

                if (this.__zoom < this.__zoomMaxScaled) {

                    this.__zoom = Math.min(this.__zoomMaxScaled, this.__zoom + zoomInc);
                }
            }
        }

        newLeft = pos.x + (this.__cvsWidth * oldZoom - this.__cvsWidth * this.__zoom) * pctLeft;
        newTop = pos.y + (this.__cvsHeight * oldZoom - this.__cvsHeight * this.__zoom) * pctTop;

        this.__positionArtwork(newLeft, newTop);
    },

    __initShadow() {

        const xoff = `${this.__shadowX}px`;
        const yoff = `${this.__shadowY}px`;
        const blur = `${this.__shadowBlur}px`;
        const sprd = `${this.__shadowSpread}px`;
        const colr = `${this.__shadowColor}`;

        this.__canvasShadow = xoff + ' ' + yoff + ' ' + blur + ' ' + sprd + ' ' + colr;

        if (this.__shadowVisible) this.__drawShadow();
        else this.__clearShadow();
    },

    __drawShadow() {

        let thisCVS = this.__useRootCanvas ? this.__cvsRoot : this.__cvs;

        thisCVS.style.setProperty('--canvas-shadow', this.__canvasShadow);
    },

    __clearShadow() {

        let thisCVS = this.__useRootCanvas ? this.__cvsRoot : this.__cvs;

        thisCVS.style.setProperty('--canvas-shadow', 'none');
    },

    // public methods
    // ---------------------------------------------------------------------------------------------
    
    fps() {

        return this.__fps;
    },

    wallpaperBackground(bg) {

        if (bg) {

            this.__wallpaperColor = bg;
            document.documentElement.style.setProperty('--wallpaper-color', this.__wallpaperColor);
        }

        return this.__wallpaperColor;
    },

    zoomFactor(factor) {

        if (!this._setupDone) this.__setupZoom = factor  * this.__cssScreenPPI / p5.__exportPPI;

        if (factor) {

            this.cmdZoom(factor);
        }

        return this.__zoom / this.__cssScreenPPI * p5.__exportPPI;
    }
}

// =================================================================================================
// EXTENSION
// =================================================================================================

export { core }

