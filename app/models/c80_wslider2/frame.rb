module C80Wslider2
  class Frame < ActiveRecord::Base
    mount_uploader :image, FrameUploader
  end
end