'use strict';

window.renderStatistics = function (ctx, names, times) {
  var max = window.getMaxTime(times);
  window.drawCloud(ctx);
  window.drawGistagramm(ctx, names, times, max);
};


// рисование облачка
window.drawCloud = function (ctx) {

// Отрисовка тёмного прямоугольника тени
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

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
window.getMaxTime = function (times) {

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  return max;
};

// рисуем гистограмму
window.drawGistagramm = function (ctx, names, times, max) {
  var histogramHeight = 150;              // высота гистограммы px;
  var step = histogramHeight / (max - 0); // шаг px;
  var barWidth = 40; // ширина колонки px;
  var indent = 50;    // расстояние между колонками px;
  var initialX = 130; // начальная точка по х px;
  var initialY = 250;  // начальная точка по у px;


  for (var i = 0; i < times.length; i++) {

    // Задаём красный для себя и оттенки синего для остальных
    var j = Math.random();
    var colorName = function () {
      if (names[i] === 'Вы') {
        return ('rgba(255, 0, 0, 1)');
      }
      else (
        return ('rgba(0,0,255,'+ j +')')
      )
    };
    ctx.fillStyle = colorName(names, i, j);

    // Рисуем саму гистограмму
    ctx.fillRect(initialX + (indent * i) + (barWidth * i), initialY, barWidth, -(times[i] * step));

    // Добавляем Имя и Время
    ctx.fillStyle = 'rgba(0,0,0,1)';
    ctx.textBaseline = 'top'; // положение надписи имени;
    ctx.fillText(names[i], initialX + indent * i + barWidth * i, initialY);

    ctx.textBaseline = 'bottom'; // положение надписи времени;
    ctx.fillText(Math.round(times[i]), initialX + indent * i + barWidth * i, initialY - (times[i] * step));
  }

};

