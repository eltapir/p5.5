// =================================================================================================
// EXTENSION
// =================================================================================================

const renderer = {
    
    __ctx: null,
    __cvs: null,

    __initRenderer() {

        this.__cvs = document.createElement('canvas');
        this.__cvs.width = this.__cvsWidth;
        this.__cvs.height = this.__cvsHeight;
        this.__cvs.style.transformOrigin = '0 0';
        this.__cvs.classList.add(this.CANVAS_CLASS);
    
        this.__awContent.appendChild(this.__cvs);
    
        this.__ctx = this.__cvs.getContext('2d');
        this.__ctx.imageSmoothingEnabled = true;
        this.__ctx.imageSmoothingQuality = 'high';
    }
}


// =================================================================================================
// EXPORTS
// =================================================================================================

export { renderer };
