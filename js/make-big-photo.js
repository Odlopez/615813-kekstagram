'use strict';

(function () {
  var bigPicture = document.querySelector('.big-picture');
  var fragment = document.createDocumentFragment();

  var makeComments = function (obj) {
    var templateComment = document.querySelector('#social-comment').content.cloneNode(true);

    templateComment.querySelector('.social__picture').src = obj.avatar;
    templateComment.querySelector('.social__text').textContent = obj.message;

    return templateComment;
  };

  var initbigPicture = function (dataArray) {
    var socialComments = bigPicture.querySelector('.social__comments');
    bigPicture.classList.remove('hidden');

    bigPicture.querySelector('.big-picture__img img').src = dataArray.url;
    bigPicture.querySelector('.likes-count').textContent = dataArray.likes;
    bigPicture.querySelector('.comments-count').textContent = dataArray.comments.length;

    socialComments.innerHTML = '';

    dataArray.comments.forEach(function (it) {
      fragment.appendChild(makeComments(it));
    });

    socialComments.appendChild(fragment);
    bigPicture.querySelector('.social__comment-count').classList.add('visually-hidden');
    bigPicture.querySelector('.comments-loader').classList.add('visually-hidden');
  };

  window.makeBigPhoto = initbigPicture;
})();
