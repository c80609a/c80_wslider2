// грузит картинки в "невидимом", фоновом режиме, показывает их
// другими словами: содержит механику загрузки и показа картинок

var Wloader = function (images, frames_props, $wimages, $slider_wrapper) {

    //---[ VARS ]-------------------------------------------------------------------------------------------------------

    // ссылка на враппер вокруг всего слайдера (подаётся для того, чтобы можно было прицепить прелоадер)
    var _$slider_wrapper = $slider_wrapper;

    // механику показа картинки фрейма содержит этот вспомогательный класс
    var _shower = new Shower($wimages);

    // images - ссылка на полный список урлов картинок для загрузки и отображения
    var _images = images;

    // ссылка на список описаний каждой картинки: h4 - крупный текст и p - мелкий
    var _frames_props = frames_props;

    // собственно, с помощью этого грузим
    var _loader = null;
    var _$loader = null;

    // индикатор загрузки
    var _preloader = new Preloader(_$slider_wrapper);

    //---[ PUBLIC ]--------------------------------------------------------------------------------------------------

    // либо покажем картинку, либо сначала загрузим, затем покажем картинку
    this.checkAndShowFrame = function (frame_index) {
        console.log('<wloader2.checkAndShowFrame>\t Покажем картинку с проверкой: frame_index = ' + frame_index);

        // предварительно создадим то, с помощью чего будем непосредственно грузить
        _loader = new Image();
        _$loader = $(_loader);

        // фиксируем урл текущей картинки
        var u = _images[frame_index];

        // фиксируем свойства картинки (подпись)
        var pr = _frames_props[frame_index];

        // инициация внутреннего механизма загрузки картинки (из кэша или из сети)
        _$loader.attr({ src:u });

        // если картинка уже есть в кэше - просто покажем её
        if (_loader.complete || _loader.readyState === 4) {
            __fShowFrame(u, pr);
        }

        // если картинки нет в кэше - запросим её с сервера
        else {
            __fLoadFrame(u, __fShowFrame, pr);
        }

    };

    //---[ PRIVATE ]--------------------------------------------------------------------------------------------------

    // вызывается только из _fCheckAndShowFrame
    // отобразить картинку фрейма url со свойствами props
    var __fShowFrame = function (url, props) {
        console.log("<wloader2.__fShowFrame>\t Отображем картинку фрейма: url = " + url);
        _shower.show(url, props);
    };

    // вызывается только из _fCheckAndShowFrame
    // загрузить картинку фрейма
    // будет показан прелоадер
    // fCallBack - вызовется в конце успешной загрузки (скорее всего - это __fShowFrame)
    // fCallBackParameter - можно передать один параметр, который дополнительно отдастся fCallBack (скорее всего это pr)
    var __fLoadFrame = function (url, fCallBack, fCallBackParameter) {
        console.log("<wloader2.__fLoadFrame>\t ГРУЗИМ картинку фрейма: url = " + url);

        // покажем прелоадер
        _preloader.show();

        // загрузим
        _$loader.load(function (responce, status, xhr) {

            // картинку загрузить не получилось
            if (status == 'error') {

            }

            // картинка успешно загружена
            else {

                // прячем прелоадер
                _preloader.hide();

                console.log("<wloader2.__fLoadFrame>\t Загрузили картинку, url: " + url);

                fCallBack(url,fCallBackParameter);

            }
        });

    };

};