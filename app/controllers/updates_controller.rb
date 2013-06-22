class UpdatesController < ApplicationController
before_filter :verify_is_admin, only: [:new, :create, :update]
    before_filter :authenticate_user!

def index
  @updates=Update.order("created_at DESC").all
end
def show
@update = Update.find(params[:id])
end



private

def verify_is_admin
  (current_user.nil?) ? redirect_to(root_path) : (redirect_to(root_path, notice: "You do not have the priviledges to proceed") unless current_user.admin?)
end
 
end
