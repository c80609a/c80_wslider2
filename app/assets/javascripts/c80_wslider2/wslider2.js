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

    // MODEL: здесь содержится список урлов картинок, которые надо отобразить в слайдере
    var _images = null;

    // MODEL: здесь содержится список описаний каждой картинки: h4 - крупный текст и p - мелкий
    var _frames_props = null;

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

    // если картинок более 1 - добавляем иконку мышки
    var _left_click_icon = null;

    //---[ FUNCTIONS ]--------------------------------------------------------------------------------------------------

    // микро-контроллер: меняет переменную _current_frame, управляет Wloader
    var _fNextFrame = function () {
        _current_frame += 1;
        if (_current_frame >= _images.length) {
            _current_frame = 0;
        }
        //console.log("<wslider._fNextFrame> _current_frame = " + _current_frame);
        _wloader.checkAndShowFrame(_current_frame);
    };
    var _fPrevFrame = function () {
        _current_frame -= 1;
        if (_current_frame < 0) {
            _current_frame = _images.length-1;
        }
        //console.log("<wslider._fPrevFrame> _current_frame = " + _current_frame);
        _wloader.checkAndShowFrame(_current_frame);
    };

    // инициализация
    var _fInit = function (options) {

        // акуализируем параметры слайдера
        _options = $.extend(_options, options);

        // зафиксируем VIEW: контейнер и дивы, в которых будут жить картинки
        _$wrapper = $(_options.parent_node).find('.wslider2');
        _$wimages = _$wrapper.find('div.frame');

        // зафиксируем MODEL: список картинок для отображения
        _images = _$wrapper.data('images');

        // зафиксируем MODEL: массив свойств картинок (текстовые подписи фреймов), разложенные в том же порядке что и _images
        _frames_props = _$wrapper.data('props');

        // инициализация механизма загрузки и показа картинок
        _wloader = new Wloader(
            _images,
            _frames_props,
            _$wimages,
            _$wrapper
        );

        // добавляем параллакс
        _parallaxer = new Paralaxer(_$wimages);

        // если фреймов более 1 - добавляем иконку "кликните левой мышкой для смены кадра"
        if (_$wimages.length > 1) {
            _left_click_icon = new LeftClickIcon(_$wrapper, _fNextFrame);
        }

    };

    var _fStart = function () {
        _wloader.checkAndShowFrame(_current_frame);
    };

    //---[ RUN ]--------------------------------------------------------------------------------------------------

    _fInit(options);
    _fStart();

};