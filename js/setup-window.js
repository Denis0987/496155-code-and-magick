'use strict';

(function () {
  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;

  window.setup = document.querySelector('.setup');
  var openSetupButton = document.querySelector('.setup-open');
  var closeSetupButton = window.setup.querySelector('.setup-close');

  var onSetupPressEsc = function (e) {
    if (e.keyCode === ESC_KEYCODE) {
      if (e.target.className !== 'setup-user-name') {
        hideSetup();
      }
    }
  };

  var onSetupClosePressEnter = function (e) {
    if (e.keyCode === ENTER_KEYCODE) {
      hideSetup();
    }
  };

  var showSetup = function () {
    window.setup.classList.remove('hidden');
    document.addEventListener('keydown', onSetupPressEsc);
  };

  var hideSetup = function () {
    window.setup.classList.add('hidden');
    document.removeEventListener('keydown', onSetupPressEsc);
    window.setup.style.top = '80px';
    window.setup.style.left = '50%';
  };

  openSetupButton.addEventListener('click', function () {
    showSetup();
  });

  openSetupButton.addEventListener('keydown', function (e) {
    if (e.keyCode === ENTER_KEYCODE) {
      showSetup();
    }
  });

  closeSetupButton.addEventListener('click', function () {
    hideSetup();
  });

  closeSetupButton.addEventListener('focus', function () {
    closeSetupButton.addEventListener('keydown', onSetupClosePressEnter);
  });

  closeSetupButton.addEventListener('blur', function () {
    closeSetupButton.removeEventListener('keydown', onSetupClosePressEnter);
  });

  var submitButton = window.setup.querySelector('.setup-submit');
  var submitForm = document.querySelector('.setup-wizard-form');

  submitButton.addEventListener('click', function () {
    // submitForm.submit();
  });

  var onSubmitPressEnter = function (e) {
    if (e.keyCode === ENTER_KEYCODE) {
      // submitForm.submit();
    }
  };

  submitButton.addEventListener('focus', function () {
    submitButton.addEventListener('keydown', onSubmitPressEnter);
  });

  submitButton.addEventListener('blur', function () {
    submitButton.removeEventListener('keydown', onSubmitPressEnter);
  });

  submitForm.addEventListener('submit', function (evt) {
    window.backend.save(
        new FormData(submitForm),
        function () {
          hideSetup();
        },
        function (errorMessage) {
          window.utils.showError(errorMessage);
        });
    evt.preventDefault();
  });
})();
