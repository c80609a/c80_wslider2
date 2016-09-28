
var LeftClickIcon = function ($wrapper) {

    var _html_str = '<div class="container with_left_click_icon white_icon"><div></div></div>'; // TODO_MY:: хардкод white_icon. А что, если я хочу чёрную иконку?
    var _$wrapper = null;

    var _fInit = function ($wrapper) {
        _$wrapper = $wrapper;
    };

    var _fEnableLeftClickIcon = function () {
        _$wrapper.prepend(_html_str);
    };

    _fInit($wrapper);
    _fEnableLeftClickIcon();

};