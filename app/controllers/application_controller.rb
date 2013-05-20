class ApplicationController < ActionController::Base
  protect_from_forgery


before_filter :set_layout_variables

def set_layout_variables
  @event = UpcomingEvent.order('event_start ASC').find(:all, :conditions => ["event_start between ? and ?", DateTime.now, (DateTime.now + 6.months)])
end
end