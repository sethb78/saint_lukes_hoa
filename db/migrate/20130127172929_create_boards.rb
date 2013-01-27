class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|
      t.string :name
      t.string :position
      t.string :email
      t.string :phone
      t.string :unit
      t.integer :heirarchy_rank

      t.timestamps
    end
  end
end
