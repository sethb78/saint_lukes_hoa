class AddSendEmailToUpdates < ActiveRecord::Migration
  def change
    add_column :updates, :send_email, :boolean, default: true
  end
end
