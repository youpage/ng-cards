class ImagePreloader {
    constructor($q, $timeout) {
        this._$q = $q;
        this._$timeout = $timeout;
        this._body = document.getElementsByTagName('body')[0];
    }

    renderImage(imgPath) {
        let _this = this;
        return _this._$q(function (resolve) {

            // Create an image element
            let element = document.createElement('img');
            let timeoutId;

            // Assign properties to the element making it tiny and invisible to the viewer
            element.src = imgPath;
            element.height = "1";
            element.width = "1";
            element.style.opacity = 0;

            // Begin a timeout.  If image has failed to load, resolve anyway and remove element
            timeoutId = _this._$timeout(function () {
                _this._body.removeChild(element);
                element.removeEventListener('load', processLoadEvent);
                resolve();
            }, 1750);

            element.addEventListener('load', processLoadEvent);

            // Wait for the image to load and then remove it
            // Cancel the timeout event
            function processLoadEvent() {
                _this._body.removeChild(element);
                _this._$timeout.cancel(timeoutId);
                resolve();
            }
            console.info(`${imgPath} should be here by now`);
            // Add the image element to the DOM
            _this._body.appendChild(element);
        });
    }

    preloadImages(images) {
        let _this = this;
        if (!images || images.length === 0) {
            return _this._$q.when();
        }

        return _this._$q.all(images.map((image) =>
            _this.renderImage(image)
        ));

    }
}

ImagePreloader.$inject = ['$q', '$timeout'];

export default ImagePreloader;