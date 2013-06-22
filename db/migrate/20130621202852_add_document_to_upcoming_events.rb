class AddDocumentToUpcomingEvents < ActiveRecord::Migration
  def change
    add_column :upcoming_events, :document, :string
  end
end
