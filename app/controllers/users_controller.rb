class UsersController < ApplicationController
 before_filter :authenticate_user!
 before_filter :verify_is_admin





	def index
	  if params[:approved] == "false"
	    @users = User.find_all_by_approved(false)
	  else
	    @users = User.find(:all, :conditions => ["id != 1"])
	  end
	end

	def approve
		@user = User.find(params[:id])
		@user.toggle!(:approved)
		UserMailer.signup_confirmation(@user).deliver

		redirect_to users_path, :action => "index", :approved => "false", notice: "#{@user.email} has been approved, and an email sent."
	end

	def make_admin
		user = User.find(params[:id])
		user.toggle!(:admin)
		redirect_to users_path
		flash[:sucess] = "#{user.name} has been updated"
	end


	def destroy
	  user = User.find(params[:id])
	  if (user.admin?)
	    flash[:error] = "You cannot delete an Administrator!"
	  else
	    user.destroy
	    flash[:success] = "User destroyed. Name: #{user.name}"
	  end
	  redirect_to users_path
	end
	
private

def verify_is_admin
  (current_user.nil?) ? redirect_to(root_path) : (redirect_to(root_path, notice: "You do not have the priviledges to proceed") unless current_user.admin?)
end
  

end