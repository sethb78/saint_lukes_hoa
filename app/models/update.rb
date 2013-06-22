class Update < ActiveRecord::Base
  attr_accessible :title, :content, :send_email
  after_save :send_update_email
  validates :title, presence: true, length: {maximum: 100}
  validates :content, presence: true


private
  def send_update_email
    if self.send_email == true
      User.all.each do |user|
        UpdateMailer.building_update(user, self).deliver
      end
    end
  end
end
