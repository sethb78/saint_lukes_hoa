class BoardMembersController < ApplicationController
  def index
  	@board_member = BoardMember.all.sort_by  &:heirarchy_rank
  end
end
