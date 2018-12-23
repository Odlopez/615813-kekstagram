'use strict';

(function () {
  var templatePicture = document.querySelector('#picture').content;
  var pictures = document.querySelector('.pictures');

  var makePhoto = function (pictureDataObj) {
    var picture = templatePicture.cloneNode(true);
    var pictureLikes = picture.querySelector('.picture__likes');
    var comments = picture.querySelector('.picture__comments');
    var image = picture.querySelector('.picture__img');

    image.src = pictureDataObj.url;
    pictureLikes.textContent = pictureDataObj.likes;
    comments.textContent = pictureDataObj.comments.length;

    return picture;
  };

  var makesPhotos = function (dataArray) {
    var fragment = document.createDocumentFragment();

    dataArray.forEach(function (it) {
      var picture = makePhoto(it);
      fragment.appendChild(picture);
    });

    pictures.appendChild(fragment);
  };

  window.makesPhotos = makesPhotos;
})();
