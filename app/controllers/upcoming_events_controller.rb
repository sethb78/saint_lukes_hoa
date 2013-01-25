class UpcomingEventsController < ApplicationController
  def index
  	@event = UpcomingEvent.all
  end

  	def show
  		@upcoming_event = UpcomingEvent.find(params[:id])
  	end
end