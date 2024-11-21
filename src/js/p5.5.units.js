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

    // public methods
    // ---------------------------------------------------------------------------------------------

    exportPPI() {
        if (!p5.__metricsSet) throw new Error(`You have to run 'p5.initMetrics(...) before setup.`);
        return p5.__exportPPI;
    },
    screenPPI() {
        if (!p5.__metricsSet) throw new Error(`You have to run 'p5.initMetrics(...) before setup.`);
        return p5.__screenPPI;
    },

    mmpx(mm, ppi = p5.__exportPPI) {
        if (!p5.__metricsSet) throw new Error(`You have to run 'p5.initMetrics(...) before setup.`);
        return Math.round(mm / MM_INCH * ppi);
    },
    cmpx(cm, ppi = p5.__exportPPI) {
        if (!p5.__metricsSet) throw new Error(`You have to run 'p5.initMetrics(...) before setup.`);
        return Math.round(cm / CM_INCH * ppi);
    },
    inpx(inch, ppi = p5.__exportPPI) {
        if (!p5.__metricsSet) throw new Error(`You have to run 'p5.initMetrics(...) before setup.`);
        return Math.round(inch * ppi);
    },

    pxmm(px, ppi = p5.__exportPPI) {
        if (!p5.__metricsSet) throw new Error(`You have to run 'p5.initMetrics(...) before setup.`);
        return px / ppi * MM_INCH;
    },
    pxcm(px, ppi = p5.__exportPPI) {
        if (!p5.__metricsSet) throw new Error(`You have to run 'p5.initMetrics(...) before setup.`);
        return px / ppi * CM_INCH;
    },
    pxin(px, ppi = p5.__exportPPI) {
        if (!p5.__metricsSet) throw new Error(`You have to run 'p5.initMetrics(...) before setup.`);
        return px / ppi;
    }
}


// =================================================================================================
// EXPORTS
// =================================================================================================

export { units };