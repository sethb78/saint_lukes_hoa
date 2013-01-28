class UpcomingEvent < ActiveRecord::Base
  attr_accessible :description, :title, :event_start, :location
end
