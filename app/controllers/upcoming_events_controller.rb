class UpcomingEventsController < ApplicationController
  def index
  	@event = UpcomingEvent.find, conditions: [:date > time.now && :date < 6.months.from_now ]
  end

  	def show
  		@upcoming_event = UpcomingEvent.find(params[:id])
  	end
end