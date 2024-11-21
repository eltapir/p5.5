// =================================================================================================
// EXTENSION
// =================================================================================================

const constants = {

    // default hotkeys

    DEFAULT_COMMAND_HOT_KEYS: {

        // loop
        cmdLoop: 'L',
        cmdLoopStep: '+',
        cmdLoopMultiStep: '*',
    
        // zoom
        cmdZoomFit: 'F',
        cmdZoomOne: 'O',
        cmdZoomMax: 'M',

        // export
        cmdExport: 'E',
    
        // show/hide shadow
        cmdShadowToggle: 'Alt+Shift+S',

        // show/hide ui
        cmdGuiToggle: 'Tab',

        // place ui left or right
        cmdGuiLeft: 'Shift+L',
        cmdGuiRight: 'Shift+R',

        // toggle fullscreen
        cmdFullScreenToggle: 'Shift+F'
    },

    
    // default artwork properties

    DEFAULT_ARTWORK_PROPS: {

        renderer: 'p2d',        // string: only 'p2d' !!! no 'webgl'

        zoomMax: 5.0,           // number: maximum zoom
        zoomMin: 0.1,           // number: minimum zoom => can change to fit on screen
        zoomInc: 0.03,          // number: zoom / scroll step size

        screenPaddingTop: '3rem',       // string: min. space betw. canvas and window => css format
                                        // number: min. space betw. canvas and window => pixels
        screenPaddingRight: '3rem',     // string: min. space betw. canvas and window => css format
                                        // number: min. space betw. canvas and window => pixels
        screenPaddingBottom: '3rem',    // string: min. space betw. canvas and window => css format
                                        // number: min. space betw. canvas and window => pixels
        screenPaddingLeft: '3rem',      // string: min. space betw. canvas and window => css format
                                        // number: min. space betw. canvas and window => pixels

        wallpaperColor: '#ebebff',      // string: css element color
                                
        shadowVisible: true,                        // boolean: shadow visible
        shadowColor: 'rgba(64, 64, 64, 0.5)',       // string: shadow color (css notation)
        shadowX: 0,                                 // number: x offset in units
        shadowY: 64,                                // number: y offset in units
        shadowBlur: 64,                             // number: blur in units
        shadowSpread: -16,                          // number: spread in units

        outputFileName: 'aw-S@seed-D@date-L@loops', // string: output file name
                                                    // @seed == current seed value
                                                    // @date == date & time
                                                    // @loops == number of loops made (frameCount)
                                                    // eg: artwork-@seed-@date-@loops
                                                    // =>  name    seed   date    time  loops
                                                    // =>  artwork-1234-20190513-161132-10000

        seed: null,                     // number: random seed (null == random seed number)

        targetFrameRate: 60,            // number: target loop frame rate
        multiLoopSteps: 10,             // number of loops for multi loop
        loop: false,                    // boolean: if false, draw function gets called only once
                                        //          if true, draw function gets called continuously

        disableFriendlyErrors: true,    // boolean: p5 friendly errors or not

        guiOpen: true,                  // boolean: show info/commands pane
        guiScale: 1.0,                  // number: scale of the gui layout (NOT IN USE)
        guiPosition: 'left',            // string: 'left' or 'right'
        guiCoordsUnits: 'mm',           // string: unit type for coordinates in ui (mm, cm, in)
        guiTheme: 'light',              // string: 'light' or 'dark'

        commandHotKeys: {},             // object: see const DEFAULT_COMMAND_HOT_KEYS above

    },


    // html element id's and classes

    APP_CLASS: 'app',
    ARTWORK_WRAPPER_CLASS: 'artwork-wrapper',
    ARTWORK_ID: 'artwork',
    ARTWORK_CLASS: 'artwork',
    ARTWORK_CONTENT_CLASS: 'artwork-content',
    CANVAS_CLASS: 'canvas',

    GUI_LEFT: 'left',
    GUI_RIGHT: 'right',
    GUI_OPEN: 'open',
}


// EXPORTS
// =================================================================================================

export { constants };
