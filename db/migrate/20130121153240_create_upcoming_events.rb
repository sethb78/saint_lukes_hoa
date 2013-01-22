class CreateUpcomingEvents < ActiveRecord::Migration
  def change
    create_table :upcoming_events do |t|
      t.date :date
      t.time :time
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end
