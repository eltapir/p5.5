# P5.5
### (early development stage, things can change. More/better documentation will follow)
### (more updates when p5.js v2.0 is ready)


## p5.5.js is an addon for the p5.js library. It is a combination of a UI with panning and zooming and more nice things. The UI tweaks are an implementation of the [lil-gui.js](https://lil-gui.georgealways.com/) library. The hotkeys are made possible by using the [tinykeys.js](https://jamiebuilds.github.io/tinykeys/) library.

![p5.5.js screenshot](./screenshot/SCREENSHOT.jpg "P5.5 Screenshot")


## The extension is aimed at people who want to generate 2D art on a larger canvas, suited for printing. The panning and zooming makes it possible to always see the canvas in its entirety, or to show certain parts in detail. Exporting to a png file is just a button away. Of course, p5.5.js can be used well for teaching purposes.


### CREDITS

[p5.js](https://p5js.org/) : &nbsp;No p5 extension without p5 library

[lil-gui](https://lil-gui.georgealways.com/) : &nbsp;Floating panel for controllers on the web (replacement for dat.gui)

[tinykeys](https://jamiebuilds.github.io/tinykeys/) : &nbsp;Tiny but very nice library for keybindings


### USAGE: &nbsp;<span style="font-size: 0.5em; font-weight: 400;">(see examples)

1. In the index.html file, add the p5.5.js library after the p5.js library
    ```
    <script defer src="https://cdn.jsdelivr.net/npm/p5@1.11.1/lib/p5.min.js">
    <script defer src="https://cdn.jsdelivr.net/gh/eltapir/p5.5@master/dist/p5.5.min.js"></script>
    ```

2. Create an artwork.js file and add it in the html file after the p5.5.js script
    ```
    <script defer src="artwork.js"></script>
    ```

3. On top of your artwork.js file you call the p5.initMetrics() function
   with two parameters.

   parameter #1:
   The diagonal size (in inches) of your monitor where the browser is running.
   <br>
   <br>
   parameter #2:
   The resolution (ppi) of your png file when saving the canvas. If left out or 0 (zero) the resolution will be equal to your screen resolution.
    ```
    p5.initMetrics(16, 300);
    ```

4. The rest is bussiness as usual, except for createCanvas().
   The createCanvas() function takes 3 parameters:<br>
   parameter #1: The canvas width in pixels<br>
   parameter #2: The canvas height in pixels<br>
   parameter #3: (optional) The options for the UI and the canvas<br>

   (for a list of options, see below)

    ```
    p5.initMetrics(16, 300);

    function setup() {

        // mmpx => converts millimeters to pixels
        createCanvas(mmpx(200), mmpx(100), {});
    }

    function draw() {

        let x1 = random(width);
        let y1 = random(height);
        let x2 = random(width);
        let y2 = random(height);

        let red = random(256);
        let green = random(256);
        let blue = random(256);

        strokeWeight(mmpx(2)); // mmpx => millimeters to pixels
        stroke(red, green, blue);

        line(x1, y1, x2, y2);
    }

    ```

### OPTIONS:
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

    commandHotKeys: {},             // object: see HOTKEYS below

### HOTKEYS: <span style="font-size: 0.8em; font-weight: 400;">(between ' ')<br>

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


### ADDED METHODS:

    p5.extend(src, prtt, force, ign)    // Extends the p5 library
                                        // src       : Object with properties and methods to add to p5
                                        // prtt      : boolean : true => adds property to p5.prototype
                                        //                       false => adds property to p5
                                        // force     : boolean : forces overriding existing p5 property   
                                        // ign       : Array of properties in the src to ignore

    screenPPI()                         // return    : Pixels Per Inch of the screen
                                        //           : depends on your settings in p5.initMetrics()

    exportPPI()                         // return    : Pixels Per Inch of your export file
                                        //           : depends on your settings in p5.initMetrics()

    mmpx(mm, exportPPI)                 // mm        : size in millimeters
                                        // exportPPI : export resolution
                                        //             defaults to resolution set in p5.initMetrics()
                                        // return    : size in pixels

    cmpx(cm, exportPPI)                 // param #1  : size in centimeters
                                        // exportPPI : export resolution
                                        //             defaults to resolution set in p5.initMetrics()
                                        // return    : size in pixels

    inpx(in, exportPPI)                 // param #1  : size in inches
                                        // exportPPI : export resolution
                                        //             defaults to resolution set in p5.initMetrics()
                                        // return    : size in pixels

    pxmm(px, exportPPI)                 // px        : size in pixels
                                        // exportPPI : export resolution
                                        //             defaults to resolution set in p5.initMetrics()
                                        // return    : value in millimeters

    pxcm(px, exportPPI)                 // px        : size in pixels
                                        // exportPPI : export resolution
                                        //             defaults to resolution set in p5.initMetrics()
                                        // return    : value in centimeters

    inmm(px, exportPPI)                 // px        : size in pixels
                                        // exportPPI : export resolution
                                        //             defaults to resolution set in p5.initMetrics()
                                        // return    : value in inches

    fps()                               // return    : Current Frames Per Second

    zoomFactor(factor)                  // factor    : (optional) zoom factor (1.0 == 100%)
                                        // return    : current zoom factor

    wallpaperBackground(color)          // color     : (optional) color for the wallpaper
                                        // return    : current wallpaper color

    addGUI(title)                       // title     : title of the lil-gui tweak
                                        // return    : lil-gui tweak (see lil-gui for more info)

