class RemoveApprovedFromUsers < ActiveRecord::Migration
  def up
    remove_column :users, :approved
  end

  def down
    add_column :users, :approved, :boolean
  end
end
