'use strict';

<<<<<<< HEAD
(function () {
  var MARGIN_LEFT = 120;
  var MARGIN_TOP = 40;
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var WIN_TEXT = 'Ура вы победили!\nСписок результатов:';
  var HISTOGRAM_HEIGHT = 150;
  var HISTOGRAM_MARGIN_TOP = 50;
  var COL_WIDTH = 40;
  var COL_MARGIN = 50;
  var MARGIN_FOR_TEXT = 20;
  var MARGIN_FOR_COL_NUMBER = 5;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, 100, 10, '#fff');

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    WIN_TEXT.split('\n').forEach(function (line, i) {
      ctx.fillText(line, MARGIN_LEFT, MARGIN_TOP + MARGIN_FOR_TEXT * i);
    });

    var maxTime = times.sort().reverse()[0];
    var scale = HISTOGRAM_HEIGHT / maxTime;

    for (var i = 0; i < names.length; i++) {
      var rectHeight = times[i] * scale;
      var rectX = MARGIN_LEFT + i * (COL_WIDTH + COL_MARGIN);
      var rectY = MARGIN_TOP + HISTOGRAM_MARGIN_TOP + HISTOGRAM_HEIGHT - rectHeight;

      var opacity = 0.2 + Math.random() * 0.8;
      var rectColor = (names[i] === 'Вы') ? 'rgb(255, 0, 0)' : 'rgba(0, 0, 255, ' + opacity + ')';
      ctx.fillStyle = rectColor;
      ctx.fillRect(rectX, rectY, COL_WIDTH, rectHeight);

      ctx.fillStyle = '#000';
      ctx.fillText(Math.round(times[i]), rectX, rectY - MARGIN_FOR_COL_NUMBER);
      ctx.fillText(names[i], rectX, MARGIN_TOP + HISTOGRAM_MARGIN_TOP + HISTOGRAM_HEIGHT + MARGIN_FOR_TEXT);
    }
  };
})();
=======
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 230, 40);
  ctx.fillText('Список результатов:', 220, 60);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText(names[i], CLOUD_X + BAR_GAP + ((BAR_GAP + BAR_WIDTH) * i), CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + ((BAR_GAP + BAR_WIDTH) * i), CLOUD_HEIGHT - FONT_GAP * 2 - ((BAR_HEIGHT * times[i]) / maxTime));

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255,' + Math.random() + ')';
    }

    ctx.fillRect(CLOUD_X + BAR_GAP + ((BAR_GAP + BAR_WIDTH) * i), CLOUD_HEIGHT - (GAP + FONT_GAP), BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);
  }
};
>>>>>>> 04232db6e7275178f8c1549dde4bac7a5076c87a
