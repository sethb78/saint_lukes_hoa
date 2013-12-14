ActiveAdmin::Dashboards.build do

  section "Documents" do
    table_for Document.order("created_at desc").all do
      column :doctype
      column :title
    end
    strong { link_to "Edit Documents", admin_documents_path, id: "link" }
    strong { link_to "Add Document", new_admin_document_path, id: "link" }
  end

  section" Board Members" do
    table_for BoardMember.all.sort_by  &:heirarchy_rank do
      column :position
      column :name
    end
    strong { link_to "Edit Board Members", admin_board_members_path }
  end 

  section "Updates" do
    table_for Update.order("created_at DESC").all do
      column :title
      column :created_at
    end
  strong { link_to "Edit Updates", admin_updates_path }
end



  section "Upcoming Events" do
    table_for UpcomingEvent.find(:all, :conditions => ["event_start > ? ", DateTime.now], :order => 'event_start') do
      column :event_start
      column :title
      column :location
    end
    strong { link_to "Edit Events", admin_upcoming_events_path, id: "link" }
    strong { link_to "Add Event", new_admin_upcoming_event_path, id: "link" }
  end
end