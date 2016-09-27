"use strict";

// Анимированная индикация загрузки картинки

var Preloader = function ($slider_wrapper) {

    // див, в котором живёт анимация загрузки (view)
    var _$preloader;

    // анимация загрузки
    var _$spinner;

    //slider_height РАССЧИТЫВАЕТСЯ для того, чтобы можно было сделать прелоадер высотой равной высоте слайдера
    var _slider_height = null;

    // инициализация
    var _fInit = function ($slider_wrapper) {

        // фиксируем view
        _$preloader = $slider_wrapper.find('.preloader');

        // рассчитываем высоту
        _slider_height = $slider_wrapper.outerHeight();

        // фиксируем анимацию загрузки
        _$spinner = _$preloader.find('.spinner');

        // корректируем высоту области прелоадера
        _$preloader.css('height', _slider_height+'px');

        // корректируем положение по вертикали блока spinner
        var t = (_slider_height - _$spinner.outerHeight())/2;
        _$spinner.css('top', t);

    };

    // показать анимацию загрузки
    this.show = function () {
        console.log('<preloader2.show>\t Покажем прелоадер.');
        _$preloader.css('display','block');
        _$preloader.css('opacity','1');
    };

    // скрыть анимацию загрузки
    this.hide = function () {
        console.log('<preloader2.hide>\t Спрячем прелоадер.');

        _$preloader.css('opacity','0');

        // NOTE:: по хардкоду подогнали время под длительность анимации, заданной в scss
        setTimeout(function () {
            _$preloader.css('display','none');
        },400);

    };

    // поехали
    _fInit($slider_wrapper);

};