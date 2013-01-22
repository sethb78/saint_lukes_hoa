class UpcomingEvent < ActiveRecord::Base
  attr_accessible :date, :description, :time, :title
end
