require 'spec_helper'

describe UpcomingEvent do

  before do
    @upcoming_event = UpcomingEvent.new(date: "02/10/2013", time: "13:00:00", title: "Ice Cream Social", description: "the place to be")
  end

  subject { @upcoming_event }

  it { should respond_to(:date, :title, :time, :description) }
end


