class C80Wslider2CreateFrames < ActiveRecord::Migration
  def change
    create_table :c80_wslider2_frames, :options => 'COLLATE=utf8_unicode_ci' do |t|
      t.string :image
      t.string :title
      t.timestamps null: false
    end
  end
end
