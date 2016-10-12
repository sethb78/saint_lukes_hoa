class CreateUpates < ActiveRecord::Migration
  def change
    create_table :upates do |t|
      t.string :title
      t.string :content

      t.timestamps
    end
  end
end
