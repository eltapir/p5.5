// =================================================================================================
// IMPORTS
// =================================================================================================

import pkg from '../../package.json';

import GUI from './external/lil-gui/lil-gui.esm.js';


// =================================================================================================
// CONSTANTS
// =================================================================================================

const guiHTML = `

    <div class="gui" id="gui">
        <div class="gui-inner">
            <div class="gui-content">
                <div class="gui-header">
                    <div class="gui-header-box">
                        <span class="title">${pkg.name.toUpperCase()}</span>
                        <span class="version">${pkg.version}</span>
                    </div>
                    <div class="gui-header-box">
                        <span class="pixels"></span>
                        <span class="units"></span>
                    </div>
                </div>
                <div class="gui-body">
                    <div class="gui-body-content"></div>
                </div>
                <div class="gui-footer">
                    <div class="gui-coords-wrapper">
                        <button id="gui-coords" class="gui-coords-box" type="button">
                            <span class="pixels">000</span>
                            <span class="units">000</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

const guiButtonHTML = `

    <div class="gui-button" id="gui-button">
        <div class="arrow">
            <svg 
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                width="28" height="28"
                viewBox="0 0 28 28"
                fill="none"
            >
                <path 
                    stroke-miterlimit="10"
                    d="M16.909,10.259l8.533-2.576l1.676,5.156l-8.498,2.899l5.275,7.48l-4.447,3.225l-5.553-7.348L8.487,26.25l-4.318-3.289l5.275-7.223L0.88,12.647l1.678-5.16l8.598,2.771V1.364h5.754V10.259z"
                >
                </path>
            </svg>
        </div>
    </div>
`;

// =================================================================================================
// EXTENSION
// =================================================================================================

const gui = {

    // private methods
    // ---------------------------------------------------------------------------------------------

    __initGUI() {

        this.__app.appendChild(this.__getHtmlFragment(guiButtonHTML))
        this.__guiButton = document.getElementById('gui-button');

        this.__app.appendChild(this.__getHtmlFragment(guiHTML));
        this.__gui = document.getElementById('gui');
        this.__guiInner = this.__gui.querySelector('.gui-inner');
        this.__guiContent = this.__gui.querySelector('.gui-content');
        this.__guiBody = this.__gui.querySelector('.gui-body');
        this.__guiBodyContent = this.__guiBody.querySelector('.gui-body-content');
        this.__guiHeader = this.__gui.querySelector('.gui-header');

        // -----------------------------------------------------------------------------------------

        this.__initGuiTweeks();
        this.__initGuiCoords();

        // -----------------------------------------------------------------------------------------

        this.__lilgui = this.__lilguiLoop; // just take the first one
        this.__lilguiWidth = this.__lilgui.domElement.offsetWidth || 245;
        this.__guiSizeSmallCSS = getComputedStyle(document.documentElement).getPropertyValue('--size-small');
        this.__guiWidthCSS = `calc(${this.__guiSizeSmallCSS} + ${this.__lilguiWidth * this.__guiScale}px + ${this.__guiSizeSmallCSS})`;

        document.documentElement.style.setProperty('--gui-width', this.__guiWidthCSS);
        document.documentElement.style.setProperty('--gui-scale', this.__guiScale);

        // -----------------------------------------------------------------------------------------

        if (this.__guiOpen) {

            this.__app.classList.add(this.GUI_OPEN);

        } else {

            this.__app.classList.remove(this.GUI_OPEN);
        }

        if (this.__guiPosition === this.GUI_LEFT) {

            this.__app.classList.remove(this.GUI_RIGHT);
            this.__app.classList.add(this.GUI_LEFT);

        } else {

            this.__app.classList.add(this.GUI_RIGHT);
            this.__app.classList.remove(this.GUI_LEFT);
        }

        this.__guiButton.addEventListener('click', this.__guiButtonClicked.bind(this));

        this.__initPanZoom();

        // -----------------------------------------------------------------------------------------

        this.__guiHeader.querySelector('.pixels')
            .innerText = `${this.__cvsWidth.toLocaleString()}px / ${this.__cvsHeight.toLocaleString()}px`;
        // this.__guiHeader.querySelector('.units')
        //     .innerText = `${(this.pxmm(this.__cvsWidth).toFixed(2)).toLocaleString()}mm / ${(this.pxmm(this.__cvsHeight).toFixed(2)).toLocaleString()}mm`;

        this.__setCanvasSizeInUnits();
    },

    __setCanvasSizeInUnits() {

        if (this.__guiCoordsUnits === 'mm') {

            this.__guiHeader.querySelector('.units')
            .innerText = `${(this.pxmm(this.__cvsWidth).toFixed(2)).toLocaleString()}mm / ${(this.pxmm(this.__cvsHeight).toFixed(2)).toLocaleString()}mm`;

        } else if (this.__guiCoordsUnits === 'cm') {

            this.__guiHeader.querySelector('.units')
            .innerText = `${(this.pxcm(this.__cvsWidth).toFixed(2)).toLocaleString()}cm / ${(this.pxcm(this.__cvsHeight).toFixed(2)).toLocaleString()}cm`;

        } else {

            this.__guiHeader.querySelector('.units')
            .innerText = `${(this.pxin(this.__cvsWidth).toFixed(2)).toLocaleString()}" / ${(this.pxin(this.__cvsHeight).toFixed(2)).toLocaleString()}"`;

        }

    },

    __guiButtonClicked(ev) {

        if (this.__app.classList.contains(this.GUI_LEFT)) {

            // LEFT SIDE

            if (this.__app.classList.contains(this.GUI_OPEN)) {
    
                this.__app.classList.remove(this.GUI_OPEN);
                this.__gui.classList.add('animating');

                this.__guiInner.addEventListener('transitionend', ev => {
    
                    this.__gui.classList.remove('animating');
                    this.__initPanZoom();
    
                }, { once: true });
    
            } else {
    
                this.__app.classList.add(this.GUI_OPEN);
                this.__gui.classList.add('animating');

                this.__guiInner.addEventListener('transitionend', ev => {

                    this.__gui.classList.remove('animating');
                    this.__initPanZoom();
    
                }, { once: true });
            }

        } else {

            // RIGHT SIDE

            if (this.__app.classList.contains(this.GUI_OPEN)) {
    
                this.__app.classList.remove(this.GUI_OPEN);
                this.__gui.classList.add('animating');

                this.__guiInner.addEventListener('transitionend', ev => {
    
                    this.__gui.classList.remove('animating');
                    this.__initPanZoom();
    
                }, { once: true });
    
            } else {
    
                this.__app.classList.add(this.GUI_OPEN);
                this.__gui.classList.add('animating');

                this.__guiInner.addEventListener('transitionend', ev => {

                    this.__gui.classList.remove('animating');
                    this.__initPanZoom();
    
                }, { once: true });
            }
        }
    },

    __initGuiTweeks() {

        this.__guiObject = {

            loop: (test) => { this.cmdLoop(true); },
            loopStep: () => { this.cmdLoopStep(); },
            loopMultiStep: () => { this.cmdLoopMultiStep(); },

            zoomFit: () => { this.cmdZoomFit(); },
            zoomOne: () => { this.cmdZoomOne(); },
            zoomMax: () => { this.cmdZoomMax(); },

            exportToPNG: () => { this.cmdExport(); },

            wallpaper: this.wallpaperBackground(),

            theme: '',

            panepos: '',

            scrppi: 96
        }


        // loop
        // -----------------------------------------------------------------------------------------

        this.__lilguiLoop = new GUI({

            container: this.__guiBodyContent,
            title: 'LOOP'
        });

        this.__guiLoop = this.__lilguiLoop.add(this.__guiObject, 'loop').name(this.isLooping() ? '\ue901' : '\ue902');
        this.__guiLoopStep = this.__lilguiLoop.add(this.__guiObject, 'loopStep').name('\ue903');
        this.__guiLoopMultiStep = this.__lilguiLoop.add(this.__guiObject, 'loopMultiStep').name(`\ue900`);

        this.__guiLoopStep.disable(this.isLooping());
        this.__guiLoopMultiStep.disable(this.isLooping());

        let loopContainer = this.__lilguiLoop.domElement.querySelector('.children');
        loopContainer.classList.add('gui-hor-btn-container');

        this.__et.addEventListener('loopingtoggled', ev => {

            this.__guiLoop.name(this.isLooping() ? '\ue901' : '\ue902');
            this.__guiLoopStep.disable(this.isLooping());
            this.__guiLoopMultiStep.disable(this.isLooping());
        });

        this.__et.addEventListener('frchanged', (ev) => {

            this.__lilguiLoop.title().$title.innerHTML = `LOOP &nbsp; &nbsp; ( ~ ${this.round(this.fps())} fps )`;
        });


        // zoom
        // -----------------------------------------------------------------------------------------

        this.__lilguiZoom = new GUI({

            container: this.__guiBodyContent,
            title: 'ZOOM'
        });

        this.__lilguiZoom.title().$title.innerHTML = `ZOOM &nbsp; &nbsp; ( x ${this.zoomFactor().toFixed(2)} )`;
        this.__lilguiZoom.title().$title.innerHTML = `ZOOM &nbsp; &nbsp; ( x ${(this.__zoom / p5.__screenPPI * p5.__exportPPI).toFixed(2)} )`;
        this.__lilguiZoom.add(this.__guiObject, 'zoomFit').name('\ue906');
        this.__lilguiZoom.add(this.__guiObject, 'zoomOne').name('1:1');
        this.__lilguiZoom.add(this.__guiObject, 'zoomMax').name('\ue905');

        let zoomContainer = this.__lilguiZoom.domElement.querySelector('.children');
        let zoomOneController = this.__lilguiZoom.controllers[1].domElement;
        let zoomOneNameEl = zoomOneController.querySelector('.name');
        zoomContainer.classList.add('gui-hor-btn-container');
        zoomOneNameEl.classList.add('text')

        this.__et.addEventListener('zoomed', (ev) => {

            this.__lilguiZoom.title().$title.innerHTML = `ZOOM &nbsp; &nbsp; ( x ${this.zoomFactor().toFixed(2)} )`;
        });


        // export
        // -----------------------------------------------------------------------------------------

        this.__lilguiExport = new GUI({

            container: this.__guiBodyContent,
            title: 'EXPORT'
        });

        let exportContainer = this.__lilguiExport.domElement.querySelector('.children');
        let exportEl = this.__lilguiExport.add(this.__guiObject, 'exportToPNG').name('\ue904');
        let exportController = this.__lilguiExport.controllers[0].domElement;
        let exportNameEl = exportController.querySelector('.name');

        exportContainer.classList.add('gui-hor-btn-container');
        // exportContainer.classList.add('gui-hor-btn-container', 'extra-bottom-margin');
        exportNameEl.innerHTML += '<span class="png-in-name">PNG</span>';


        // look
        // -----------------------------------------------------------------------------------------

        this.__lilguiLook = new GUI({

            container: this.__guiBodyContent,
            title: 'LOOK . . .'
        });

        let lookContainer = this.__lilguiLook.domElement.querySelector('.children');
        lookContainer.classList.add('extra-bottom-margin');

        this.wallpaperBackground(this.getElementBackgroundColor(this.__app));
        
        // look - theme
        let themes = ['dark', 'light'];
        this.__guiLookTheme = this.__lilguiLook
            .add(this.__guiObject, 'theme').name('Theme').options(themes)
            .onChange(value => {

                themes.forEach(t => document.body.classList.remove(`gui-theme-${t}`));
                document.body.classList.add(`gui-theme-${value}`);
            });
        this.__guiLookTheme.setValue(this.__guiTheme);

        // look - pane position
        let panepos = ['left', 'right'];
        this.__guiLookPanePos = this.__lilguiLook
            .add(this.__guiObject, 'panepos').name('GUI position').options(panepos)
            .onChange(value => {

                panepos.forEach(pos => this.__app.classList.remove(pos));
                this.__guiPosition = value;
                this.__app.classList.add(value);
                this.__initPanZoom();
            });
        this.__guiLookPanePos.setValue(this.__guiPosition);

        // look - wallpaper
        this.__guiWallpaper = this.__lilguiLook
            .addColor(this.__guiObject, 'wallpaper').name('Wallpaper')
            .onChange(value => { this.wallpaperBackground(value) });
        this.__guiWallpaper.setValue(this.getElementBackgroundColor(this.__app));

    },


    // 
    // !!! TODO: CLEANING UP CODE
    //

    __initGuiCoords() {

        const units = ['mm', 'cm', 'in'];
        const unitsLong = { mm: 'millimeters', cm: 'centimeters', in: 'inches' };

        const displayCoords = (ev) =>  {

            if (!this.__guiOpen) return;

            const rect = this.__cvs.getBoundingClientRect();
            const cvsScale = this.__cvsWidth / rect.width;
            const screenX = (ev.clientX - rect.left) * cvsScale;
            const screenY = (ev.clientY - rect.top) * cvsScale;
            const cvsX = Math.round(screenX);
            const cvsY = Math.round(screenY);

            this.__coordsPixels.innerText = `${cvsX.toLocaleString()}px / ${cvsY.toLocaleString()}px`;

            if (this.__guiCoordsUnits === 'mm')
                this.__coordsUnits.innerText = `${(this.pxmm(cvsX).toFixed(2)).toLocaleString()}mm / ${(this.pxmm(cvsY).toFixed(2)).toLocaleString()}mm`;
            else if (this.__guiCoordsUnits === 'cm')
                this.__coordsUnits.innerText = `${(this.pxcm(cvsX).toFixed(2)).toLocaleString()}cm / ${(this.pxcm(cvsY).toFixed(2)).toLocaleString()}cm`;
            else if (this.__guiCoordsUnits === 'in')
                this.__coordsUnits.innerText = `${(this.pxin(cvsX).toFixed(2)).toLocaleString()}" / ${(this.pxin(cvsY).toFixed(2)).toLocaleString()}"`;
            else
                this.__coordsUnits.innerText = `${cvsX.toLocaleString()}px / ${cvsY.toLocaleString()}px`;
        }

        this.__coordsButton = document.getElementById('gui-coords');
        this.__coordsPixels = this.__coordsButton.querySelector('.pixels');
        this.__coordsUnits = this.__coordsButton.querySelector('.units');

        this.__coordsPixels.innerText = `pixels`;
        this.__coordsUnits.innerText = unitsLong[this.__guiCoordsUnits].toUpperCase() + ' (click)';

        // 
        // !!! TODO: Listen only when gui is open
        // 

        this.__cvs.addEventListener('mouseover', ev => {

            this.__cvs.addEventListener('mousemove', displayCoords);
        });

        this.__cvs.addEventListener('mouseout', ev => {

            this.__cvs.removeEventListener('mousemove', displayCoords);
            
            this.__coordsPixels.innerText = `pixels`;
            this.__coordsUnits.innerText = unitsLong[this.__guiCoordsUnits].toUpperCase() + ' (click)';
        });

        this.__coordsButton.addEventListener('click', (ev) => {

            let idx = units.indexOf(this.__guiCoordsUnits) + 1;
            idx = idx === units.length ? 0 : idx;
            this.__guiCoordsUnits = units[idx];

            this.__coordsPixels.innerText = `pixels`;
            this.__coordsUnits.innerText = unitsLong[this.__guiCoordsUnits].toUpperCase() + ' (click)';

            this.__setCanvasSizeInUnits();
        });
    },

    // public methods
    // ---------------------------------------------------------------------------------------------

    addGUI(title = 'CUSTOM TWEAKS') {

        let props = {

            container: this.__guiBodyContent,
            width: this.__guiBodyContent.offsetWidth,
            autoPlace: false,
            title
        }

        return new GUI(props);
    }
}

// =================================================================================================
// EXPORTS
// =================================================================================================

export { gui };

