class BoardMember < ActiveRecord::Base
  attr_accessible :email, :heirarchy_rank, :name, :phone, :position, :unit
end
