// =================================================================================================
// EXTENSIONS
// =================================================================================================

const utilities = {

    // public methods
    // ---------------------------------------------------------------------------------------------

    getCSSVariable(prop, element = document.documentElement) {

        return window.getComputedStyle(element).getPropertyValue(prop);
    },

    setCSSVariable(prop, value, element = document.documentElement) {

        element.style.setProperty(prop, value);
    },

    getElementBackgroundColor(el) {

        return window.getComputedStyle(el, null).getPropertyValue('background-color');
    },

    // console.log(aw.getInvertedColor('rgba(100%, 50%, 50%, 50%)'))
    // console.log(aw.getInvertedColor(bgColor, { black: 'rgb(0, 0, 0)', white: 'rgb(255, 255, 255)'}));
    // console.log(aw.getInvertedColor(bgColor));
    getInvertedColor(rgbString, bw) {

        const rgbArray = this.__rgbStringToArray(rgbString);

        if (bw && typeof bw === 'object') {

            if (rgbArray[0] * 0.299 + rgbArray[1] * 0.587 + rgbArray[2] * 0.114 > 186) {

                return bw.black;

            } else {

                return bw.white;
            }
        }

        rgbArray[0] = 255 - rgbArray[0];
        rgbArray[1] = 255 - rgbArray[1];
        rgbArray[2] = 255 - rgbArray[2];

        if (rgbArray.length === 3) {

            return `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`;

        } else {

            return `rgba(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]}, ${rgbArray[3]})`;
        }
    },

    
    // private methods
    // ---------------------------------------------------------------------------------------------

    __rgbStringToArray(rgbString) {

        // result of Gemini AI Chat
        // -----------------------------------------------------------------------------------------

        const sep = rgbString.indexOf(',') > -1 ? ',' : ' ';
        let rgbArray;

        // convert multiple spaces to one space
        rgbString = rgbString.replace(/ {1,}/g, ' ');

        // check for rgb or rgba
        if (rgbString.indexOf('rgba') === 0) {
            
            rgbArray = rgbString.substr(5).split(')')[0].split(sep);

            if (rgbArray.indexOf('/') > -1) {
                rgbArray.splice(3, 1);
            }

        } else {

            rgbArray = rgbString.substr(4).split(')')[0].split(sep);
        }

        for (let colOrAlpha in rgbArray) {

            let coa = rgbArray[colOrAlpha];

            if (coa.indexOf("%") > -1) {

                let pct = coa.substr(0, coa.length - 1) / 100;

                if (colOrAlpha < 3) {

                    rgbArray[colOrAlpha] = Math.round(pct * 255);

                } else {

                    rgbArray[colOrAlpha] = pct;
                }
            }
        }

        return rgbArray.map(el => parseFloat(el));
    },

    __getHtmlFragment(htmlString) {
        
        // SOURCE:
        // https://love2dev.com/blog/inserting-html-using-createdocumentfragment-instead-of-using-jquery/
    
        let frag = document.createDocumentFragment();
        let temp = document.createElement('div');
    
        temp.innerHTML = htmlString;
    
        while (temp.firstChild) {
    
            frag.appendChild(temp.firstChild);
        }
    
        return (frag);
    },

    __addBeforeScriptsInHead(el) {

        let firstScriptTag = document.head.getElementsByTagName('script')[0];
    
        if (firstScriptTag) document.head.insertBefore(el, firstScriptTag)
        else document.head.appendChild(el);
    },


    __addBeforeScriptsInBody(el) {

        let firstScriptTag = document.body.getElementsByTagName('script')[0];
    
        if (firstScriptTag) document.body.insertBefore(el, firstScriptTag)
        else document.body.appendChild(el);
    },

    __removeEmptyMainTags() {

        let mainTags = document.getElementsByTagName('main');

        mainTags.forEach(mt => {

            if (!mt.hasChildNodes()) {

                mt.remove();
            }
        });
    },

    __removeComments(node) {

        // SOURCE:
        // https://www.sitepoint.com/removing-useless-nodes-from-the-dom/
    
        for (let n = 0; n < node.childNodes.length; n++) {
    
            let child = node.childNodes[n];
    
            if (child.nodeType === Node.COMMENT_NODE) { // 8
    
                node.removeChild(child);
                n--;
    
            } else if (child.nodeType === Node.ELEMENT_NODE) { // 1
    
                this.__removeComments.bind(this, child);
            }
        }
    },

    __getDateString() {

        let d = new Date();

        return d.getFullYear() +
            ('' + (d.getMonth() + 1)).padStart(2, '0') +
            ('' + d.getDate()).padStart(2, '0') + '-' +
            ('' + d.getHours()).padStart(2, '0') +
            ('' + d.getMinutes()).padStart(2, '0') +
            ('' + d.getSeconds()).padStart(2, '0');
    },

    
    __getCssVarPixelValue(element, variableName) {
        
        // result of Gemini AI Chat
        // -----------------------------------------------------------------------------------------
    
        const computedStyle = window.getComputedStyle(element);
        const value = computedStyle.getPropertyValue(variableName);

        // Remove any trailing whitespace
        const trimmedValue = value.trim();

        // Handle pixel values directly
        if (trimmedValue.endsWith('px')) {
            return parseFloat(trimmedValue);
        }

        // Handle em and rem (requires font size)
        if (trimmedValue.endsWith('em') || trimmedValue.endsWith('rem')) {
            const fontSize = parseFloat(computedStyle.fontSize);
            return parseFloat(trimmedValue) * fontSize;
        }

        // Handle percentages (requires containing element size)
        if (trimmedValue.endsWith('%')) {
            const parent = element.parentElement;
            if (!parent) {
                console.warn(`Failed to convert "${variableName}" (percentage) - no parent element found`);
                return null;
            }

            const parentWidth = parent.clientWidth;
            const parentHeight = parent.clientHeight;

            const percentValue = parseFloat(trimmedValue);
            let pixelValue;

            if (variableName.endsWith('width')) {
                pixelValue = parentWidth * (percentValue / 100);
            } else if (variableName.endsWith('height')) {
                pixelValue = parentHeight * (percentValue / 100);
            } else {
                console.warn(`Failed to convert "${variableName}" (percentage) - unsupported property`);
                return null;
            }

            return pixelValue;
        }

        // Handle basic calculations with supported units (basic implementation)
        const match = trimmedValue.match(/^([0-9.]+)([a-z]+)$/);
        if (match) {
            const numberValue = parseFloat(match[1]);
            const unit = match[2];

            if (unit === 'em' || unit === 'rem') {
                const fontSize = parseFloat(computedStyle.fontSize);
                return numberValue * fontSize;
            } else if (unit === '%') {
                // (Same logic as percentage handling above)
                const parent = element.parentElement;
                if (!parent) {
                    console.warn(`Failed to convert "${variableName}" (calculation with %) - no parent element found`);
                    return null;
                }

                const parentWidth = parent.clientWidth;
                const parentHeight = parent.clientHeight;

                let pixelValue;
                if (variableName.endsWith('width')) {
                    pixelValue = parentWidth * (numberValue / 100);
                } else if (variableName.endsWith('height')) {
                    pixelValue = parentHeight * (numberValue / 100);
                } else {
                    console.warn(`Failed to convert "${variableName}" (calculation with %) - unsupported property`);
                    return null;
                }

                return pixelValue;
            } else {
                console.warn(`Failed to convert "${variableName}" (calculation) - unsupported unit: ${unit}`);
                return null;
            }
        }

        // Handle other units or complex calculations (optional)
        // You can add logic here to handle other units (vh, vw, etc.) or more complex calculations,
        // but be aware of potential limitations and edge cases.

        console.warn(`Failed to convert "${variableName}" - unsupported format`);
        return null;
    }
}


// =================================================================================================
// EXPORTS
// =================================================================================================

export { utilities };

