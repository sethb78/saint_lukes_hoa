class DocumentsController < InheritedResources::Base
	before_filter :authenticate_user!

	def index 
  		@documents_rules = Document.where(:doctype => "rules")
  		@documents_other = Document.where(:doctype => "other")
  		@documents_meeting = Document.where(:doctype => "meetings").all.sort_by(&:meeting_date).reverse
      @documents_memorandums = Document.where(:doctype => "memorandums")
      @documents_financials = Document.where(:doctype => "financials")
  	end
  	
	def show
		flash[:error] = "This document is restricted.  Please sign in or register to proceed."
	    redirect_to new_user_session_path
	end
end