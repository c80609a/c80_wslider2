// механику показа картинки фрейма содержит этот вспомогательный класс
// класс знает, что имеются два фрейма, один из которых видим, а другой, в это же время, скрыт
// класс показывает фреймы, жонглирует css-классом shown_right_now

// slider_height передаётся для того, чтобы можно было позиционировать текстовый блок по вертикали
var Shower = function ($wimages) {

    // ссылка на дивы, в которых отрисовываются картинки
    // изначально оба дива приходят "чистыми"
    // В таком случае: берём первый попавшийся див , помещаем в него картинку, делаем его "показанным сейчас"
    var _$wimages = null;

    // после первого вызова show(), когда дивы перестают быть "чистыми", эта переменная сбросится в false
    // нужна для того, чтобы при первом вызове взять первый попавшийся див и сделать его "показанным сейчас"
    var _mark_first_call = true;

    var _fInit = function ($wimages) {
        _$wimages = $wimages;
    };

    // низкоуровневый механизм показа картинки с подписями (вызывается только из this.show)
    var _fShow = function ($div, url, props) {
        console.log("<shower2._fShow>\t div class:" + $div.attr('class') + ", url: " + url);

        // убираем плавность, возвращаем в начальное состояние
        $div.removeClass('eased').css('opacity', '0');

        // помещаем в него картинку
        $div.css('background-image', 'url(' + url + ')');

        // плавно проявляем фрейм
        $div.addClass('eased').css('opacity','1');

        // помечаем его как "показанный сейчас"
        $div.addClass('shown_right_now');

    };

    // низкоуровневый механизм плавного сокрытия картинки (вызывается только из this.hide)
    var _fHide = function ($div) {
        console.log("<shower2._fHide>\t div class: " + $div.attr('class'));

        // плавно скрываем фрейм
        $div.css('opacity', '0');

        // удаляем пометку "показанный сейчас" у фрейма
        $div.removeClass('shown_right_now');

    };

    // плавно показать картинку url
    // Этот метод зафиксирован в маршруте "Показать Картинку"
    // диаграммы d:\Distrs\drakon\drakon_editor1.27\work\vapehub\slider.drn
    this.show = function (url, props) {

        // если это первый вызов show() - сбрасываем переменную _mark_first_call, берем первый див и делаем его "показанным сейчас"
        if (_mark_first_call) {
            console.log("<shower2.show>\t Первый вызов.");

            _mark_first_call = false;

            // фиксируем видимый фрейм слайдера (он один из двух имеющихся)
            //var $fi = $(_$wimages[0]);
            var $fi = _$wimages.filter('.shown_right_now');

            // покажем картинку с подписями
            _fShow($fi, url, props);

        }

        // если это не первый вызов show() - значит какой-то фрейм уже показан
        //
        else {
            console.log("<shower2.show>\t НЕ-первый вызов.");

            // фиксируем показанный фрейм (shown image)
            var $si = _$wimages.filter('.shown_right_now');

            // фиксируем спрятанный фрейм (hidden image)
            var $hi = _$wimages.not('.shown_right_now');

            // прячем показанный фрейм
            _fHide($si);

            // показываем спрятанный фрейм
            _fShow($hi, url, props);

        }

    };

    _fInit($wimages);

};