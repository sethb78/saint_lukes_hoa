class UpcomingEventsController < ApplicationController


  	def show
  		@upcoming_event = UpcomingEvent.find(params[:id])
  	end
end