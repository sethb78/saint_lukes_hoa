class UsersController < ApplicationController
  
	def index
	  if params[:approved] == "false"
	    @users = User.find_all_by_approved(false)
	  else
	    @users = User.all
	  end
	end

	def approve
		@user = User.find(params[:id])
		@user.toggle!(:approved)
		UserMailer.signup_confirmation(@user).deliver

		redirect_to users_path, :action => "index", :approved => "false", notice: "#{@user.email} has been approved, and an email sent."
	end


end