'use strict';

(function () {
  var photosDataArray = window.currentData();

  window.makesPhotos(photosDataArray);
  window.makeBigPhoto(photosDataArray[0]);
})();

