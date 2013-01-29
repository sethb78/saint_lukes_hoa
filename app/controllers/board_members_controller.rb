class BoardMembersController < ApplicationController
	before_filter :authenticate_user!
  def index
  	@board_member = BoardMember.all.sort_by  &:heirarchy_rank
  end
end
