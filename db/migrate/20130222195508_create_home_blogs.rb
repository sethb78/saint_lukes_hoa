class CreateHomeBlogs < ActiveRecord::Migration
  def change
    create_table :home_blogs do |t|
      t.string :title
      t.text :text
      t.text :tagline

      t.timestamps
    end
  end
end
