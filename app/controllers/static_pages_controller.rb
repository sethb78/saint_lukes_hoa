class StaticPagesController < ApplicationController
    before_filter :authenticate_user!, except: [:location, :home, :contact]
 
    def home
      @blog = HomeBlog.last
    end
end