class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable
  attr_accessible :email, :password, :password_confirmation, :unit, :approved, :name
	after_create :send_admin_mail

	validates :name, presence: true
	validates :unit, presence: true

	def send_admin_mail
	  UserMailer.new_user_waiting_for_approval(self).deliver
	end
	 
	 def active_for_authentication? 
	  	super && approved? 
	end 

	def inactive_message 
	  if !approved? 
	    :not_approved 
	  else 
	    super # Use whatever other message 
	  end 
	end

end


