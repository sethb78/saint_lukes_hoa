class AddNameUnitToUser < ActiveRecord::Migration
  def change
    add_column :users, :name, :string
    add_column :users, :unit, :string
  end
end
