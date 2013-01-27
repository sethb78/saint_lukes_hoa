class BoardMembersController < ApplicationController
  def index
  	@board_member = Board.all.sort_by  &:heirarchy_rank
  end
end
