// =================================================================================================
// EXTENSIONS
// =================================================================================================

const ppi = {

    // private properties
    // ---------------------------------------------------------------------------------------------

    __metricsSet: false,

    __displaySize: 0,               // diagonal size of the display

    __exportPPI: 0,                 // export resolution (0 => equal to screen resolution)
                                    // for a good export/printing result, set to >= 300

    __screenPPI: 0,                 // screen resolution gets calculated by screen width and height
                                    // and display size


    // private methods
    // ---------------------------------------------------------------------------------------------

    __calculatePPI(pxW, pxH, inchSize, devPixRatio = 1) {

        return ((Math.sqrt( pxW * pxW + pxH * pxH) / inchSize) * devPixRatio);
    },


    // public methods
    // ---------------------------------------------------------------------------------------------

    initMetrics(displaySize, exportPPI = 0, forcedScreenPPI = 0) {

        if (!displaySize) {

            throw new Error(`The 'displaySize' argument is required.`);
        }

        if (forcedScreenPPI === 0) {

            p5.__screenPPI = p5.__calculatePPI(
                window.screen.width, window.screen.height, displaySize, devicePixelRatio
            );

        } else {

            p5.__screenPPI = forcedScreenPPI;
        }

        console.log('p5.__screenPPI:', p5.__screenPPI)
    
        p5.__exportPPI = exportPPI === 0 ? p5.__screenPPI : exportPPI;
    
        p5.__metricsSet = true;
    },
    
}


// =================================================================================================
// EXPORTS
// =================================================================================================

export { ppi };
