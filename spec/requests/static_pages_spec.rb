require 'spec_helper'

describe "StaticPages" do

	subject { page }

	before do
		UpcomingEvent.create!(title: "HOA Meeting", event_start: DateTime.now, location: "4th Floor Lobby")
		UpcomingEvent.create!(title: "HOA Meeting in 7 Months", event_start: 7.months.from_now, location: "4th Floor Lobby")
	end

	shared_examples_for "all static pages" do
		it { should have_selector('title', text: full_title(page_title)) }
		it { should have_selector('div.upcoming-events', text: "HOA Meeting") }
		it { should_not have_selector('div.upcoming-events', text: "HOA Meeting in 7 Months") }

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
	        let(:user) { FactoryGirl.create(:user) }
	        before { sign_in user }
			describe "board members page" do
				before { visit board_members_path }
				it { should have_selector('title', text: full_title('Board of Directors')) }
			end
			describe "documents page" do
				before { visit documents_path }
				it { should have_selector('title', text: full_title('Documents')) }			
			end
			describe "issues/concerns page" do
				before { visit issues_concerns_path }
				it { should have_selector('title', text: full_title('Issues and Concerns')) }
			end
		end
	end
end
