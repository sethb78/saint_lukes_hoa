require 'spec_helper'

describe UpcomingEvent do

before { @upcoming_event = UpcomingEvent.new(title: "HOA Meeting", event_start: DateTime.now, location: "4th Floor Lobby") }

subject { @upcoming_event }

it { should respond_to(:title, :event_start, :location) }
end