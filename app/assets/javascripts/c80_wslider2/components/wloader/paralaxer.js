// добавляем фичу "изменение background-position-y при скролле"

var Paralaxer = function (_$wimages) {

    var _fInit = function (_$wimages) {

        $(document).on('scroll', function(){
            var xx = $(this).scrollTop();
            _$wimages.css('background-position-y', parseInt(xx/3)+'px');
        });

    };

    _fInit(_$wimages);

};
