// =================================================================================================
// EXTENSIONS
// =================================================================================================

const commands = {

    // public methods
    // ---------------------------------------------------------------------------------------------

    cmdLoop(dispatch = true) {

        if (this.isLooping()) {

            this.noLoop();

        } else {

            this.loop();
        }

        this.__et.dispatchEvent(this.loopingToggledEvent);
    },

    cmdLoopStep() {

        if (this._loop === false) {
                    
            this.redraw(1);
        }
    },

    cmdLoopMultiStep() {

        if (this._loop === false) {
                    
            this.redraw(this.__multiLoopSteps);
        }
    },

    cmdZoom(value) {
        
        this.__zoom = value * this.__cssScreenPPI / p5.__exportPPI;
        this.__positionArtwork();
        this.__et.dispatchEvent(this.zoomedEvent);
    },

    cmdZoomFit() {
        
        this.__zoom = this.__zoomFit;
        this.__positionArtwork();
        this.__et.dispatchEvent(this.zoomedEvent);
    },

    cmdZoomOne() {

        this.__zoom = 1 / p5.__exportPPI * this.__cssScreenPPI;
        this.__positionArtwork();
        this.__et.dispatchEvent(this.zoomedEvent);
    },

    cmdZoomMax() {

        this.__zoom = this.__zoomMaxScaled;
        this.__positionArtwork();
        this.__et.dispatchEvent(this.zoomedEvent);
    },

    cmdExport() {

        this.saveToPNG();
    },

    cmdShadowToggle() {

        if (this.__shadowVisible === true) {

            this.__clearShadow();
            this.__shadowVisible = false;

        } else {

            this.__drawShadow();
            this.__shadowVisible = true;
        }
    },

    cmdGuiToggle() {

        this.__guiButtonClicked();
    },

    cmdGuiLeft() {

        this.__app.classList.remove(this.GUI_RIGHT);
        this.__app.classList.add(this.GUI_LEFT);
    },
    
    cmdGuiRight() {

        this.__app.classList.remove(this.GUI_LEFT);
        this.__app.classList.add(this.GUI_RIGHT);
    },
    
    cmdFullScreenToggle() {
        
        this.__toggleFullScreen();
    },

    __toggleFullScreen() {

        let elem = this.__awWrapper;

        if (!document.fullscreenElement) {

            elem.requestFullscreen().then(() => {

                console.log('OK');

            }).catch((err) => {

                alert(
                    `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`,
                );
            });

        } else {

            document.exitFullscreen();
        }
    }
}


// =================================================================================================
// EXPORTS
// =================================================================================================

export { commands }

