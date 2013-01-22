class StaticPagesController < ApplicationController
    before_filter :authenticate_user!, except: [:location, :show]
 
  def admin
  end


  def location
  end

end