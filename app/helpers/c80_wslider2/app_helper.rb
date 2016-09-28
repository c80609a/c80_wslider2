module C80Wslider2
  module AppHelper

    def render_wslider2

      # извлечём фреймы
      frames = C80Wslider2::Frame.all.order('rand()')

      # пути до картинок соберём сюда
      images = []

      # соберём пути
      frames.each do |frame|
        images << image_path(frame.image.thumb_big)
      end
      #Rails.logger.debug "[TRACE] <render_wslider2> images: #{images}"

      render :partial => 'c80_wslider2/wslider2',
             :locals => {
                 images: images # ["/uploads/wslider2/thumb_big_photo_23bd.jpg"]
             }

    end

  end
end