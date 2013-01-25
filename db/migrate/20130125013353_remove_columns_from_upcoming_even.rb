class RemoveColumnsFromUpcomingEven < ActiveRecord::Migration
  def up
    remove_column :upcoming_events, :date
    remove_column :upcoming_events, :time
  end

  def down
    add_column :upcoming_events, :time, :time
    add_column :upcoming_events, :date, :date
  end
end
