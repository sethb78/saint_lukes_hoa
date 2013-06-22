class AddDocumentToDocuments < ActiveRecord::Migration
  def change
    add_column :upcoming_events, :agenda, :string
  end
end
