class UpcomingEventsController < ApplicationController
  def index
  @event = UpcomingEvent.find(:all, :conditions => ["event_start between ? and ?", DateTime.now, (DateTime.now + 6.months)])
  end

  	def show
  		@upcoming_event = UpcomingEvent.find(params[:id])
  	end
end