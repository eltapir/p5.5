// =================================================================================================
// IMPORTS
// =================================================================================================

import { tinykeys, parseKeybinding } from './external/tinykeys/tinykeys.esm.js';


// =================================================================================================
// EXTENSIONS
// =================================================================================================

const hotkeys = {

    tinykeys,
    parseKeybinding,

    __initHotKeys() {

        const commands = [

            'cmdLoop',
            'cmdLoopStep',
            'cmdLoopMultiStep',
            'cmdZoomFit',
            'cmdZoomOne',
            'cmdZoomMax',
            'cmdExport',
            'cmdShadowToggle',
            'cmdGuiToggle',
            'cmdGuiLeft',
            'cmdGuiRight',
            'cmdFullScreenToggle'
        ];

        const commandsObject = {};

        commands.forEach((cmd) => {
            commandsObject[this.__cmdHotKeys[cmd]] = (e) => {
                e.preventDefault();
                this[cmd]();
            }
        })

        tinykeys(window, commandsObject);

        // tinykeys(window, {
        //
        //     [this.__cmdHotKeys.cmdLoop]: (e) => {
        //
        //         e.preventDefault();
        //         this.cmdLoop();
        //     },
        //
        //     ...
        //
        // }

    },

    getHotKeyToolTip(hotkey = 'X', escaped = true) {

        let parsedKeys = parseKeybinding(hotkey);
        let retVal = '';

        let lt = escaped ? '&lt; ' : '< ';
        let gt = escaped ? ' &gt;' : ' >';

        parsedKeys.forEach(el1 => {

            el1.forEach(el2 => {

                if (Array.isArray(el2) && el2.length) {

                    el2.forEach(el3 => {

                        retVal += lt + el3 + gt;
                    });

                } else if (typeof el2 === 'string') {

                    retVal += lt + el2 + gt;
                }
            });

            retVal += ' ';
        });

        return retVal.trim();
    },

    cmdLoopTip() { return this.getHotKeyToolTip(this.__cmdHotKeys.cmdLoop, false); },
    cmdLoopStepTip() { return this.getHotKeyToolTip(this.__cmdHotKeys.cmdLoopStep, false); },
    cmdLoopMultiStepTip() { return this.getHotKeyToolTip(this.__cmdHotKeys.cmdLoopMultiStep, false); },

    cmdZoomFitTip() { return this.getHotKeyToolTip(this.__cmdHotKeys.cmdZoomFit, false); },
    cmdZoomOneTip() { return this.getHotKeyToolTip(this.__cmdHotKeys.cmdZoomOne, false); },
    cmdZoomMaxTip() { return this.getHotKeyToolTip(this.__cmdHotKeys.cmdZoomMax, false); },

    cmdExportTip() { return this.getHotKeyToolTip(this.__cmdHotKeys.cmdExport, false); },

    cmdGuiToggleTip() { return this.getHotKeyToolTip(this.__cmdHotKeys.cmdGuiToggle, false); },
    cmdGuiLeftTip() { return this.getHotKeyToolTip(this.__cmdHotKeys.cmdGuiLeft, false); },
    cmdGuiRightTip() { return this.getHotKeyToolTip(this.__cmdHotKeys.cmdGuiRight, false); },

    cmdFullScreenToggleTip() { return this.getHotKeyToolTip(this.__cmdHotKeys.cmdFullScreenToggle, false); },
}


// EXPORTS
// =================================================================================================

export { hotkeys };
