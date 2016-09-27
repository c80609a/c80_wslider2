ActiveAdmin.register C80Wslider2::Frame, as: 'Frame' do

  menu :label => 'Фреймы', # TODO_MY:: название пункта меню перенесести в параметры в базу
       priority: 2,
       parent: 'Слайдер'# TODO_MY:: название пункта меню перенесести в параметры в базу

  permit_params :title,
                :image

  # batch_action :destroy, false
  config.per_page = 100
  config.sort_order = 'id_asc'
  before_filter :skip_sidebar!, :only => :index

  index do
    selectable_column
    column :title
    column :image do |frame|
      if frame.image.present?
        link_to image_tag(frame.image.thumb_preview), image_path(frame.image.thumb_big), target: '_blank'
      end
    end
    actions
  end

  form(:html => {:multipart => true}) do |f|

    f.inputs 'Свойства' do

      f.input :title
      f.input :image,
               :as => :file,
               :hint => image_tag(f.object.image.thumb_preview)

    end

    f.actions
  end

end