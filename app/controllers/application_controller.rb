class ApplicationController < ActionController::Base
  protect_from_forgery


before_filter :set_layout_variables

def set_layout_variables
  @event = UpcomingEvent.all

end
end
