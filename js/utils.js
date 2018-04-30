'use strict';

(function () {
  var DEBOUNCE_INTERVAL = 500;
  var lastTimeout;

  window.utils = {
    randomItem: function (items) {
      return items[Math.floor(Math.random() * items.length)];
    },

    showError: function (message) {
      var errorNode = document.createTextNode(message);
      document.body.prepend(errorNode);
      window.scrollTo(0, 0);
      setTimeout(function () {
        errorNode.remove();
      }, 2000);
    },

    debounce: function (f) {
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(f, DEBOUNCE_INTERVAL);
    }
  };
})();
