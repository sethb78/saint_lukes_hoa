class AddLocationToUpcomingEvents < ActiveRecord::Migration
  def change
    add_column :upcoming_events, :location, :string
  end
end
