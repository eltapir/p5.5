// #############################################################################
// #                                                                           #
// # Use this p5.initMetrics() function to achieve the correct dimensions on   #
// # your active display                                                       #
// #                                                                           #
// # parameter #1 : diagonal size in inches of your display                    #
// # parameter #2 : export/print resolution (ppi) of your saved image          #
// #                default value is 0 (zero) which results in a resolution    #
// #                that is equal to the screen resolution                     #
// #                                                                           #
// #############################################################################

p5.initMetrics(31.5, 300);


// #############################################################################
// # VARIABLES / CONSTANTS                                                     #
// #############################################################################

let lineWeightInMillimeters = 1;
let textSizeInMullimeters = 5;


// #############################################################################
// # SETUP                                                                     #
// #############################################################################

function setup() {

    // #########################################
    // added all options with the default values
    //       ( no need to add them all )
    // #########################################

    createCanvas(mmpx(200), mmpx(100), {

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
        guiPosition: 'left',            // string: 'left' or 'right'
        guiCoordsUnits: 'mm',           // string: unit type for coordinates in ui (mm, cm, in)
        guiTheme: 'light',              // string: 'light' or 'dark'

        commandHotKeys: {                       // object

            // loop
            cmdLoop: 'L',                       // run draw function continuously or pause drawing
            cmdLoopStep: '+',                   // run draw function only once
            cmdLoopMultiStep: '*',              // run draw function multiple times
                                                // see multiLoopSteps
        
            // zoom
            cmdZoomFit: 'F',                    // zoom canvas to fit the screen
            cmdZoomOne: 'O',                    // zoom canvas to real size
            cmdZoomMax: 'M',                    // zoom canvas to maximum size

            // export
            cmdExport: 'E',                     // export canvas to PNG file
        
            // show/hide shadow
            cmdShadowToggle: 'Alt+Shift+S',     // show/hide the shadow underneath the canvas

            // show/hide ui
            cmdGuiToggle: 'Tab',                // show/hide the gui pane

            // place ui left or right
            cmdGuiLeft: 'Shift+L',              // place the gui pane to the left
            cmdGuiRight: 'Shift+R',             // place the gui pane to the right

            // toggle fullscreen
            cmdFullScreenToggle: 'Shift+F'      // toggle fullscreen

        }

    });

    textAlign(CENTER);
    textSize(mmpx(textSizeInMullimeters));
    text(`If you entered the right parameters in p5.initMetrics(),`, width * 0.5, height * 0.5 - mmpx(10));
    text(`( see at the top of the source file 'artwork.js' )`, width * 0.5, height * 0.5 + mmpx(0));
    text(`you should see a canvas of 200 x 100 mm when zoomed 1:1`, width * 0.5, height * 0.5 + mmpx(10));
    text(`(!!! browser zoom level at 100%)`, width * 0.5, height * 0.5 + mmpx(20));
    text(`Use mouse buttons and mouse wheel to pan/zoom`, width * 0.5, height * 0.5 + mmpx(30));

}


// #############################################################################
// # DRAW                                                                      #
// #############################################################################

function draw() {

    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);

    let red = random(256);
    let green = random(256);
    let blue = random(256);

    strokeWeight(mmpx(lineWeightInMillimeters));
    stroke(red, green, blue);

    line(x1, y1, x2, y2);
}
