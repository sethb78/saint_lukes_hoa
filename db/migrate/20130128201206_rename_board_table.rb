class RenameBoardTable < ActiveRecord::Migration
    def change
        rename_table :boards, :board_members
    end 
 end

