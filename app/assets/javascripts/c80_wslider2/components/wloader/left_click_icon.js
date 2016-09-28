
var LeftClickIcon = function ($wrapper, onClick) {

    var _html_str = '<div class="container with_left_click_icon white_icon"><div></div></div>'; // TODO_MY:: хардкод white_icon. А что, если я хочу чёрную иконку?
    var _$html_div = null;
    var _$wrapper = null;
    var _onClick = null;

    var _fInit = function ($wrapper, onClick) {
        _$wrapper = $wrapper;
        _onClick = onClick;
    };

    var _fEnableLeftClickIcon = function () {
        _$html_div = _$wrapper.prepend(_html_str);
    };

    var _fStartListenClicks = function () {
        _$html_div.on('click', onClick);
    };

    _fInit($wrapper,onClick);
    _fEnableLeftClickIcon();
    _fStartListenClicks();

};