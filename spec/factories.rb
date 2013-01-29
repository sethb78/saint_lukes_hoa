FactoryGirl.define do
	factory :user do
		name "Example User"
		email "example@user.com"
		unit "435"
		password "foobar"
		password_confirmation "foobar"
	end

  	factory :upcoming_event do
	    title "Event 1" 
	    event_start { DateTime.now }
	    location "4th Floor Lobby"
	end
end