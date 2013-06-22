class CreateUpdates < ActiveRecord::Migration
  def change
    create_table :updates do |t|
      t.text :title
      t.text :content

      t.timestamps
    end
  end
end
