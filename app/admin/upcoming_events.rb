ActiveAdmin.register UpcomingEvent do
  index do
  	column :title
  	column :description
  	column :event_start
  	column :location
  	default_actions
  end

  form do |f|
  	f.inputs "Upcoming Events" do
  		f.input :title
  		f.input :description
  		f.input :event_start
  		f.input :location
  	end
  	f.actions
  end
end
