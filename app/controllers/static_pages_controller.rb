class StaticPagesController < ApplicationController
    before_filter :authenticate_user!, except: [:location, :home, :contact]
 
  def admin
  end


  def location
  end

  def home
  		@documents_rules = Document.where(:doctype => "rules")
  		@documents_other = Document.where(:doctype => "other")
  end

end