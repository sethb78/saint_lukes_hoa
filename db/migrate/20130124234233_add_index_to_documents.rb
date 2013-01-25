class AddIndexToDocuments < ActiveRecord::Migration
  def change
  	    add_index :documents, :meeting_date
  	    
  end
end
