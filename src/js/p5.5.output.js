// =================================================================================================
// EXTENSIONS
// =================================================================================================

const output = {

    // private methods
    // ---------------------------------------------------------------------------------------------

    __getFullName() {

        let fullName = this.__outputFileName.replace('@date', this.__getDateString());
        fullName = fullName.replace('@seed', this.__seed);
        fullName = fullName.replace('@loops', this.frameCount);

        return fullName;
    },


    // public methods
    // ---------------------------------------------------------------------------------------------

    saveToPNG() {

        // *** P5 ***
        // this.save(this.__getFullName());

        // *** custom ***
        this.__saveToPNG(this.__getFullName());
    },

    __saveToPNG(file) {

        let ext = '.png';
        let a = document.createElement('a');

        if (this.exportPPI() < 300) {

            alert(
                'Just letting you know that you are exporting an image with a ' +
                'resolution less then 300ppi.\n\n' +
                'This could be too low for decent quality prints.'
            );
        }

        this.__startExportAnim();

        this.__cvs.toBlob((blob) => {

            document.body.appendChild(a);

            a.type = 'image/png';
            a.style.display = 'none';
            a.href = (window.URL || window.webkitURL).createObjectURL(blob);
            a.download = file.endsWith(ext) ? file : file + ext;
            a.target = '_blank';
            a.click();
            a.remove();

            this.__stopExportAnim();
        });
    },

    __startExportAnim() {

        this.__bodyCover = document.createElement('div');
        this.__bodyCover.style.position = 'fixed';
        this.__bodyCover.style.inset = 0;
        this.__bodyCover.style.backgroundColor = 'rgba(0, 0, 0, 0.5';
        this.__bodyCover.style.cursor = 'progress';
        this.__bodyCover.style.zIndex = 1000000;

        document.body.appendChild(this.__bodyCover);
    },

    __stopExportAnim() {

        document.body.removeChild(this.__bodyCover);
    }
}


// =================================================================================================
// EXPORTS
// =================================================================================================

export { output };