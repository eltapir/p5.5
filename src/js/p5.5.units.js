// =================================================================================================
// CONSTANTS
// =================================================================================================

const MM_INCH = 25.4;
const CM_INCH = 2.54;


// =================================================================================================
// EXTENSIONS
// =================================================================================================

const units = {

    // private properties
    // ---------------------------------------------------------------------------------------------

    __metricsErrorTest() {

        if (!p5.__metricsSet) throw new Error(`You have to run 'p5.initMetrics(...) before setup.`);
    },


    // public methods
    // ---------------------------------------------------------------------------------------------

    exportPPI() {
        this.__metricsErrorTest();
        return p5.__exportPPI;
    },
    screenPPI() {
        this.__metricsErrorTest();
        return p5.__screenPPI;
    },

    mmpx(mm, ppi = p5.__exportPPI) {
        this.__metricsErrorTest();
        return Math.round(mm / MM_INCH * ppi);
    },
    cmpx(cm, ppi = p5.__exportPPI) {
        this.__metricsErrorTest();
        return Math.round(cm / CM_INCH * ppi);
    },
    inpx(inch, ppi = p5.__exportPPI) {
        this.__metricsErrorTest();
        return Math.round(inch * ppi);
    },

    pxmm(px, ppi = p5.__exportPPI) {
        this.__metricsErrorTest();
        return px / ppi * MM_INCH;
    },
    pxcm(px, ppi = p5.__exportPPI) {
        this.__metricsErrorTest();
        return px / ppi * CM_INCH;
    },
    pxin(px, ppi = p5.__exportPPI) {
        this.__metricsErrorTest();
        return px / ppi;
    }
}


// =================================================================================================
// EXPORTS
// =================================================================================================

export { units };