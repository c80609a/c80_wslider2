class C80Wslider2CreateProps < ActiveRecord::Migration
  def change
    create_table :c80_wslider2_props, :options => 'COLLATE=utf8_unicode_ci' do |t|
      t.integer :big_width     # под эту ширину подгоняется картинка, вставляемая в слайдер (высота рассчитаеся автоматом)
      t.integer :preview_width  # пока используется только для показа картинки в админке
      t.integer :preview_height # пока используется только для показа картинки в админке
      t.timestamps null: false
    end
  end
end
