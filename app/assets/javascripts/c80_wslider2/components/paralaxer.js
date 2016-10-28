"use strict";

/**
 * добавляем фичу "изменение background-position-y при скролле"
 *
 * @param p_$wimages
 * @param p_$wrapper
 * @constructor
 */
var Paralaxer = function (p_$wimages, p_$wrapper) {

    var _scrollIntervalID;
    var _used_window_scroll;

    var _fCheckAndDoScroll = function() {

        var curr_window_scroll = window.scrollY;

        if (_used_window_scroll != curr_window_scroll) {
            _used_window_scroll = curr_window_scroll;

            var document_scrolltop = $(document).scrollTop();
            var wrapper_scrolltop = p_$wrapper.offset().top;//[0].scrollTop;
            var wrapper_height = p_$wrapper.height();

            //console.log("document_scrolltop: " + document_scrolltop);
            //console.log("wrapper scroll top: " + wrapper_scrolltop);
            //console.log("wrapper height: " + wrapper_height);

            if (document_scrolltop < wrapper_scrolltop + wrapper_height) {
                //console.log('<EXE>');
                //p_$wimages.css('background-position-y', "-"+parseInt(document_scrolltop/2)+'px');
                var style_transform = 'translate3d(0px,' + (-curr_window_scroll/3) + 'px, 0px)';
                p_$wimages.css('transform', style_transform);
            }

        }

    };

    var _fInit = function (p_$wimages, p_$wrapper) {

        //$(document).on('scroll', _fCheckAndDoScroll);

        _scrollIntervalID = setInterval(_fCheckAndDoScroll, 10);

    };

    _fInit(p_$wimages, p_$wrapper);

};
