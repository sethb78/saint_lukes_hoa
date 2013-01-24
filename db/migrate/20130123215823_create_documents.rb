class CreateDocuments < ActiveRecord::Migration
  def change
    create_table :documents do |t|
      t.string :title
      t.date :meeting_date
      t.string :path
      t.string :doctype

      t.timestamps
    end
  end
end
