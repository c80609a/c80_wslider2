'use strict';

var Wslider2 = function (options) {

    //---[ VARS ]-------------------------------------------------------------------------------------------------------

    // добавлена для того, чтобы передавать ссылку на wslider находясь внутри вложенных функций
    var _this = this;

    // по этим параметрам отрисован слайдер
    var _options = {
        parent_node: 'body',
        height: 100
    };

    // здесь содержится список урлов картинок, которые надо отобразить в слайдере
    var _images = null;

    // 2 дива, в которых отрисовываются картинки (они сменяют друг друга)
    var _$wimages = null;

    // указатель на текущий фрейм
    var _current_frame = 0;

    // контейнер, в который упакован слайдер
    var _$wrapper = null;

    // в ответе за загрузку и показ картинок фрейма (во время загрузки покажет прелодаер)
    var _wloader = null;

    // добавляет параллакс при скролле
    var _parallaxer = null;

    //---[ FUNCTIONS ]--------------------------------------------------------------------------------------------------

    // инициализация
    var _fInit = function (options) {

        // акуализируем параметры слайдера
        _options = $.extend(_options, options);

        // зафиксируем VIEW: контейнер и дивы, в которых будут жить картинки
        _$wrapper = $(_options.parent_node).find('.wslider2');
        _$wimages = _$wrapper.find('div.frame');

        // зафиксируем MODEL: список картинок для отображения
        _images = _$wrapper.data('images');

        // инициализация механизма загрузки и показа картинок
        _wloader = new Wloader(
            _images,
            _$wimages,
            _$wrapper
        );

        // добавляем параллакс
        _parallaxer = new Paralaxer(_$wimages);


    };

    var _fStart = function () {
        _wloader.checkAndShowFrame(_current_frame);
    };

    //---[ RUN ]--------------------------------------------------------------------------------------------------

    _fInit(options);
    _fStart();

};