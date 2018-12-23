'use strict';

(function () {
  var picturesQuantity = 25;
  var avatarsQuantity = 6;
  var likesScope = [15, 200];
  var commentsArray = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
  var namesArray = [
    'Коля',
    'Дура',
    'Шура',
    'Жора',
    'Гога',
    'Жопа',
    'Петя',
    'Лера',
    'Саша',
  ];

  var getPhotosSRC = function (quantity) {
    var resultArray = [];

    for (var i = 1; i <= quantity; i++) {
      resultArray.push('photos/' + i + '.jpg');
    }

    return resultArray;
  };

  var getRandomComment = function () {
    var resultObject = {};

    resultObject.avatar = 'img/avatar-' + window.utilities.getRandomNumber(avatarsQuantity, 1) + '.svg';
    resultObject.message = commentsArray[window.utilities.getRandomNumber(commentsArray.length - 1)];
    resultObject.name = namesArray[window.utilities.getRandomNumber(namesArray.length - 1)];

    return resultObject;
  };

  var getRandomComments = function (quantity) {
    var resultArray = [];

    for (var i = 1; i <= quantity; i++) {
      resultArray.push(getRandomComment());
    }

    return resultArray;
  };

  var photosSRCArray = getPhotosSRC(picturesQuantity);
  photosSRCArray = window.utilities.shuffleArray(photosSRCArray);

  var getPictureData = function (index) {
    var resultObject = {};

    resultObject.url = photosSRCArray[index];
    resultObject.likes = window.utilities.getRandomNumber(likesScope);
    resultObject.comments = getRandomComments(window.utilities.getRandomNumber(avatarsQuantity, 1));

    return resultObject;
  };

  var getPictureDataArray = function () {
    var resultArray = [];

    for (var i = 0; i < picturesQuantity; i++) {
      resultArray[i] = getPictureData(i);
    }

    return resultArray;
  };

  window.currentData = getPictureDataArray;
})();

