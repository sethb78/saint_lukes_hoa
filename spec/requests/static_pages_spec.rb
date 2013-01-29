require 'spec_helper'

describe "StaticPages" do

	subject { page }
	let(:user) { FactoryGirl.create(:user) }
	before { @upcoming_event = UpcomingEvent.new(title: "HOA Meeting", event_start: DateTime.now, location: "4th Floor Lobby") }
	before { @upcoming_event_10_months = UpcomingEvent.new(title: "HOA Meeting 10 months", event_start: 10.months.from_now, location: "4th Floor Lobby") }


	shared_examples_for "all static pages" do
		it { should have_selector('title', text: full_title(page_title)) }
		it { should have_selector('div.upcoming-events', text: @upcoming_event.title) }
		it { should_not have_selector('div.upcoming-events', text: @upcoming_event_10_months.title) }

	end

	describe "non-resident pages" do

		describe "home page" do
			before { visit root_path }
			let(:page_title) { '' }
			it_should_behave_like "all static pages"
		end

		describe "location page" do
			before { visit location_path }
			let(:page_title) {'Location'}
			it_should_behave_like "all static pages"
		end

		describe "contact us page" do
			before { visit contact_us_path }
			let(:page_title) { 'Contact Us' }
			it_should_behave_like "all static pages"
		end
	end

	describe "resident pages" do

		describe "without signing in" do
			describe "board members page" do
				before { visit board_members_path }
				it { should have_selector('title', text: full_title('Sign In')) }
			end
			describe "documents page" do
				before { visit documents_path }
				it { should have_selector('title', text: full_title('Sign In')) }			
			end
			describe "issues/concerns page" do
				before { visit issues_concerns_path }
				it { should have_selector('title', text: full_title('Sign In')) }
			end
		end

		describe "after signing in" do
			before { sign_in(user) }
		end

	end
end
