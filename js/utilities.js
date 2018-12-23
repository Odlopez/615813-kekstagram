'use strict';

(function () {
  var getRandomNumber = function (max, min) {
    min = min || 0;

    if (typeof max === 'object') {
      min = max[0];
      max = max[1];
    }

    return Math.round(Math.random() * (max - min) + min);
  };

  var shuffleArray = function (array, isNewArary) {
    array = isNewArary ? array.slice(0) : array;

    array.forEach(function (it, index) {
      var temporal = it;
      var randomIndex = getRandomNumber(array.length - 1);

      it = array[randomIndex];
      array[randomIndex] = temporal;
      array[index] = it;
    });

    return array;
  };

  window.utilities = {
    getRandomNumber: getRandomNumber,
    shuffleArray: shuffleArray
  };
})();
