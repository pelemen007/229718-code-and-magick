'use strict';

// рисование облачка
window.renderStatistics = function (ctx, times, names) {

// Отрисовка тёмного прямоугольника тени
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

// Очистка области под белый прямоугольник
  ctx.clearRect(100, 10, 420, 270);

// Отрисовка белого прямоугольника
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);

// Пишем текст
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);
};

// Нахождение максимального времени
  window.renderStatistics = function (times) {

    var max = -1;

    for (var i = 0; i < times.length; i++) {
      var time = times[i];
      if (time > max) {
        max = time;
      }
    }
  };

// рисуем гистограмму
  window.renderStatistics = function (ctx, names, times) {
  var histogramHeight = 150;              // высота гистограммы px;
  var step = histogramHeight / (max - 0); // шаг px;
  var barWidth = 40; // ширина колонки px;
  var indent = 50;    // расстояние между колонками px;
  var initialX = 130; // начальная точка по х px;
  var initialY = 250;  // начальная точка по у px;


  for (var i = 0; i < times.length; i++) {
    ctx.fillRect(initialX + (indent * i) + (barWidth * i), initialY, barWidth, -(times[i] * step));

    ctx.textBaseline = 'top'; // положение надписи имени;
    ctx.fillText(names[i], initialX + indent * i + barWidth * i, initialY);

    ctx.textBaseline = 'bottom'; // положение надписи времени;
    ctx.fillText(Math.round(times[i]), initialX + indent * i + barWidth * i, initialY - (times[i] * step));
  }
};
