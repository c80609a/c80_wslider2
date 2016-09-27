# rake db:seed:c80_wslider2_01_fill_props

C80Wslider2::Prop.delete_all
C80Wslider2::Prop.create!({
                               preview_width:250,   # пока используется только для показа картинки в админке
                               preview_height:164,  # пока используется только для показа картинки в админке
                               big_width:1600       # под эту ширину подгоняется картинка, вставляемая в слайдер
                           })