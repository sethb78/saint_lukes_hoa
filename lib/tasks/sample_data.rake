namespace :db do
  desc "Fill database with sample data"
  task :populate => :environment do
    Rake::Task['db:reset'].invoke
	make upcoming_events
  end
end

def upcoming_events
	10.times do |n|
    title = "HOA Meeting"
    location = "4th Floor Lobby"
    event_start = DateTime.now
    UpcomingEvent.create!(:title => title,
                 :location => location,
                 :event_start => event_start)
  end
end