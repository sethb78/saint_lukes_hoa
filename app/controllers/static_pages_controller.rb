class StaticPagesController < ApplicationController
    before_filter :authenticate_user!, except: [:location, :home, :contact]
 
    def home
      @blog = HomeBlog.last
        @update = Update.order('created_at DESC').find(:all, :conditions => ["created_at between ? and ?", (DateTime.now - 1.month), DateTime.now]).first

    end
end