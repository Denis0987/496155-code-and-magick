'use strict';

(function () {
  var TOTAL_WIZARDS = 4;
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var COAT_COLORS = [
    'rgb(146, 100, 161)',
    'rgb(215, 210, 55)',
    'rgb(241, 43, 107)',
    'rgb(101, 137, 164)',
    'rgb(0, 0, 0)',
    'rgb(215, 210, 55)',
    'rgb(56, 159, 117)',
    'rgb(241, 43, 107)'
  ];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var colorEyes;
  var colorCoat;
  var colorFireball;

  var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var makeWizard = function (wizardObject) {
    var template = wizardTemplate.cloneNode(true);

    template.querySelector('.setup-similar-label').textContent = wizardObject.name;
    template.querySelector('.wizard-coat').style.fill = wizardObject.colorCoat;
    template.querySelector('.wizard-eyes').style.fill = wizardObject.colorEyes;

    return template;
  };

  var generateWizards = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < TOTAL_WIZARDS; i++) {
      fragment.appendChild(makeWizard(wizards[i]));
    }

    var containerElement = document.querySelector('.setup-similar-list');
    containerElement.innerHTML = '';
    containerElement.appendChild(fragment);
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.backend.load(function (response) {
    window.data = response;
    generateWizards(window.data);
  }, window.utils.showError);


  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === colorCoat) {
      rank += 2;
    }

    if (wizard.colorEyes === colorEyes) {
      rank += 1;
    }

    return rank;
  };

  var updateWizards = function () {
    var wizards = window.data.sort(function (left, right) {
      return getRank(right) - getRank(left);
    });
    generateWizards(wizards);
  };

  var setupEyes = window.setup.querySelector('.setup-wizard .wizard-eyes');
  var eyesColorField = document.getElementsByName('eyes-color')[0];
  setupEyes.addEventListener('click', function () {
    colorEyes = window.utils.randomItem(EYES_COLORS);
    eyesColorField.value = colorEyes;
    document.querySelector('.wizard-eyes').style.fill = colorEyes;
    window.utils.debounce(updateWizards);
  });

  var setupCoat = window.setup.querySelector('.setup-wizard .wizard-coat');
  var coatColorField = document.getElementsByName('coat-color')[0];
  setupCoat.addEventListener('click', function () {
    colorCoat = window.utils.randomItem(COAT_COLORS);
    coatColorField.value = colorCoat;
    document.querySelector('.wizard-coat').style.fill = colorCoat;
    window.utils.debounce(updateWizards);
  });

  var setupFireball = window.setup.querySelector('.setup-fireball-wrap');
  var fireballColorField = document.getElementsByName('fireball-color')[0];
  setupFireball.addEventListener('click', function () {
    colorFireball = window.utils.randomItem(FIREBALL_COLORS);
    fireballColorField.value = colorFireball;
    document.querySelector('.setup-fireball-wrap').style.backgroundColor = colorFireball;
    window.utils.debounce(updateWizards);
  });
})();
