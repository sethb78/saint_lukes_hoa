class AddEventStartToUpcomingEvent < ActiveRecord::Migration
  def change
    add_column :upcoming_events, :event_start, :datetime
  end
end
