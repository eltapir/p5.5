// =================================================================================================
// IMPORTS
// =================================================================================================

// styles
import '../css/p5.5.props.css';
import '../css/p5.5.preset.css';
import '../css/p5.5.preloader.css';
import '../css/p5.5.app.css';

// extension scripts
import { commands } from './p5.5.commands.js';
import { constants } from './p5.5.constants.js';
import { core } from './p5.5.core.js';
import { gui } from './p5.5.gui.js';
import { hotkeys } from './p5.5.hotkeys.js';
import { output } from './p5.5.output.js';
import { renderer } from './p5.5.renderer.js';
import { units } from './p5.5.units.js';
import { utilities } from './p5.5.utilities.js';

import { ppi } from './p5.5.ppi.js';


// =================================================================================================
// P5 CLASS EXTENSIONS
// =================================================================================================

p5.__extensionsToInit = [];

p5.extend = (src, proto, forceOverride, ignores = []) => {

    if (src?.[0]) src.forEach(srcObj => p5.__extend(srcObj, proto, forceOverride, ignores));
    else p5.__extend(src, proto, forceOverride, ignores);
};

p5.__extend = (srcObj, proto = true, forceOverride = false, ignores = []) => {

    const tgtObj = proto ? p5.prototype : p5;

    for (let key in srcObj) {

        if (ignores.indexOf(key) === -1 && key !== '__name__' && key !== '__init__') {

            if (tgtObj.hasOwnProperty(key) && !forceOverride) {

                console.log('\n');
                console.warn(p5.__getWarningText('p5', key));
            }
    
            tgtObj[key] = srcObj[key];
        }
    }

    // save the plugins __init__() functions so we can
    // run them when the renderer is set up
    if (srcObj.hasOwnProperty('__init__')) {

        p5.__extensionsToInit.push(srcObj['__init__']);
    }

    // give message when the plugin is loaded
    // (plugins with __name__ property value starting with '_' do not output message)
    if (srcObj.hasOwnProperty('__name__')) {

        if (srcObj.__name__.substring(0, 1) !== '_') {

            console.log(`=> Loaded plugin: ${srcObj.__name__ || '<annonymus>'}`);
        }
    }
};

p5.__getWarningText = (objText, key) => {

    return `
        ${objText} already has a property/method called "${key}".\n
        If you did override it on purpose, you can just ignore this warning \n
        or you can use the forceOverride option to avoid future warnings.\n
        Otherwize, try to rename your new "${key}" property/method.\n
    `;
}

// =================================================================================================
// P5 METHOD OVERRIDES
// =================================================================================================

// createCanvas

p5.prototype.createCanvas = function($_createCanvas) {

    const parsePadding = (p) => {

        return (typeof p === 'number' || `${parseInt(p)}` === p) ? p + 'px' : p;
    }

    return function() {

        let cvs;

        if (!p5.__metricsSet) throw new Error(`You have to run 'p5.initMetrics(...) before setup.`);
        
        this.__p5Mode = true;
        
        this.__aw = null;
        
        if (typeof arguments[2] === 'object') {
            
            this.__p5Mode = false;
            this.__changing_ppi_disabled = true;

            this.__et = new EventTarget();

            this.__fps = 0;

            this.__props = { ...this.DEFAULT_ARTWORK_PROPS, ...arguments[2] };
            
            p5.disableFriendlyErrors = this.__props.disableFriendlyErrors;

            this.__cvsWidth = arguments[0];
            this.__cvsHeight = arguments[1];

            // !!! only 2D for now
            if (this.__props.renderer != 'p2d') {

                throw new Error('Sorry, only 2D Global mode is supported');
            }

            this.__renderer = this.__props.renderer;
            
            this.__screenPaddingTop = parsePadding(this.__props.screenPaddingTop);
            this.__screenPaddingRight = parsePadding(this.__props.screenPaddingRight);
            this.__screenPaddingBottom = parsePadding(this.__props.screenPaddingBottom);
            this.__screenPaddingLeft = parsePadding(this.__props.screenPaddingLeft);

            this.__cssScreenPPI = this.screenPPI() / (Math.ceil(window.devicePixelRatio) || 1);

            this.__zoomMin = this.__props.zoomMin;
            this.__zoomMinCurrent = this.__zoomMin;
            this.__zoomMax = this.__props.zoomMax;
            this.__zoomInc = this.__props.zoomInc;

            this.__shadowVisible = !!this.__props.shadowVisible;
            this.__shadowColor = this.__props.shadowColor;
            this.__shadowX = this.__props.shadowX;
            this.__shadowY = this.__props.shadowY;
            this.__shadowBlur = this.__props.shadowBlur;
            this.__shadowSpread = this.__props.shadowSpread;

            this.__seed = this.__props.seed
                ? this.__props.seed
                : Math.floor(Math.random() * (10000 - 1000) + 1000);
                
            this.__noiseSeed = this.__seed;

            this.__targetFrameRate = this.__props.targetFrameRate;
            this.frameRate(this.__props.targetFrameRate);

            this.__wallpaperColor = this.__props.wallpaperColor;
            this.__wallpaperImage = this.__props.wallpaperImage;
            this.__wallpaperPosition = this.__props.wallpaperPosition;
            this.__wallpaperRepeat = this.__props.wallpaperRepeat;
            this.__wallpaperSize = this.__props.wallpaperSize;
        
            this.__outputFileName = this.__props.outputFileName;

            this.__loop = this.__props.loop;
            this.__multiLoopSteps = this.__props.multiLoopSteps;
            this.__initialNumberOfLoops = this.__props.initialNumberOfLoops;

            this.__cmdHotKeys = { ...this.DEFAULT_COMMAND_HOT_KEYS, ...this.__props.commandHotKeys };
    
            this.__guiOpen = this.__props.guiOpen;
            this.__guiScale = this.__props.guiScale;
            this.__guiPosition = this.__props.guiPosition;
            this.__guiCoordsUnits = this.__props.guiCoordsUnits;
            this.__guiTheme = this.__props.guiTheme;
        
            this.__zoomPrev = 0;
            
            this.__initArtwork();
            this.__initRenderer();
            this.__initPanZoom();
            this.__initListeners();
            this.__initMoreListeners();
            this.__initShadow();
            this.__initHotKeys();

            this.randomSeed(this.__seed);
            this.noiseSeed(this.__noiseSeed);

            this.__initGUI();
            this.cmdZoomFit();  // HACK to show correct zoom factor in gui pane
                                // Should be ok whitout this hack, but it isn't ;)
                                // Soo...

            if (this.__loop) this.loop();
            else this.noLoop();

            // set global properties
            this._setProperty('events', this.__et);
            this._setProperty('mouseTX', this.__mouseX || 0);
            this._setProperty('mouseTY', this.__mouseY || 0);

            // create p5 createCanvas
            cvs = $_createCanvas.call(this, arguments[0], arguments[1], this.__renderer, this.__cvs);

            // remove empty <main> elements
            // created and added by default
            this.__removeEmptyMainTags();
        

            // run the __init__() method for the respective extensions/plugins (if one is present)
            // -------------------------------------------------------------------------------------
            p5.__extensionsToInit.forEach(el => el(this));

        } else {

            cvs = $_createCanvas.apply(this, arguments);
        }

        // remove comments in html
        this.__removeComments(document.head);
        this.__removeComments(document.body);

        return cvs;
    }

}(p5.prototype.createCanvas);


// noLoop

p5.prototype.$_noLoop = p5.prototype.noLoop;
p5.prototype.noLoop = function() {

    this.$_noLoop(); // used in cmdLoop()
    this.__et.dispatchEvent(this.loopingToggledEvent);
}


// loop

p5.prototype.$_loop = p5.prototype.loop;
p5.prototype.loop = function() {

    this.$_loop(); // used in cmdLoop()
    this.__et.dispatchEvent(this.loopingToggledEvent);
}


// randomSeed

p5.prototype.randomSeed = function($_randomSeed) {

    return function(s) {

        $_randomSeed.call(this, s);
        this.__seed = s;
    }
    
}(p5.prototype.randomSeed);


// noiseSeed

p5.prototype.noiseSeed = function($_noiseSeed) {

    return function(s) {

        $_noiseSeed.call(this, s);
        this.__noiseSeed = s;
    }

}(p5.prototype.noiseSeed);


// simplexSeed

// no need to override simplexSeed
// this.__simplexSeed is changed in p5.5.simplex.js


// =================================================================================================
// EXTEND P5 INSTANCE
// =================================================================================================

p5.extend(commands);
p5.extend(constants);
p5.extend(core);
p5.extend(gui);
p5.extend(hotkeys);
p5.extend(output);
p5.extend(renderer);
p5.extend(units);
p5.extend(utilities);

p5.extend(ppi, false);

