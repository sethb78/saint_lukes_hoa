require 'spec_helper'

describe "Authentication" do

    subject { page }
    before { visit new_user_session_path }

    describe "signin page" do
        it { should have_selector('title', text: 'Sign In') }
    end

    describe "signing in" do
        let(:user) { FactoryGirl.create(:user) }
        before { sign_in user }
        it { should have_link('Sign Out') }
        it { should have_selector('p', text: user.name) }
        describe "then signing out" do
            before { click_link 'Sign Out' }
            it { should have_link('Sign in') }
        end
    end
end

