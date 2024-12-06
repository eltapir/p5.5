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

    createCanvas(mmpx(200), mmpx(100), {
        seed: 1234,
        guiTheme: 'dark'
    });

    // textAlign(CENTER);
    // textSize(mmpx(textSizeInMullimeters));
    // text(`If you entered the right parameters in p5.initMetrics(),`, width * 0.5, height * 0.5 - mmpx(10));
    // text(`( see at the top of the source file 'artwork.js' )`, width * 0.5, height * 0.5 + mmpx(0));
    // text(`you should see a canvas of 200 x 100 mm when zoomed 1:1`, width * 0.5, height * 0.5 + mmpx(10));
    // text(`Use mouse buttons and mouse wheel to pan/zoom`, width * 0.5, height * 0.5 + mmpx(20));


    // add a custom tweak (see lil-gui docs: https://lil-gui.georgealways.com/)
    // -------------------------------------------------------------------------
    
    let gObj = {

        lineWeightInMillimeters
    };

    addGUI('CUSTOM TWEAKS ...')
        .add(gObj, 'lineWeightInMillimeters', 1, 10, 1).name('lineWeight')
        .onChange(value => { lineWeightInMillimeters = value; });
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
