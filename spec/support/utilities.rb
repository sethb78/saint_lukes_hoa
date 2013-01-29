include ApplicationHelper

def signup
  fill_in "Name", with: "Example User"
  fill_in "Email", with: "user@example.com"
  fill_in "unit", with: "123"
  fill_in "Password", with: "foobar"
  fill_in "Confirmation", with: "foobar"

end
def sign_in(user)
  visit new_user_session_path
  fill_in "Email", with: user.email
  fill_in "Password", with: user.password
  click_button "Sign in"
  # Sign in when not using Capybara as well.
  cookies[:remember_token] = user.remember_token
end