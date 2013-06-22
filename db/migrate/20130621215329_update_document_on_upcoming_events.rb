class UpdateDocumentOnUpcomingEvents < ActiveRecord::Migration
  def up
    rename_column :upcoming_events, :document, :agenda
  end

  def down
  end
end
