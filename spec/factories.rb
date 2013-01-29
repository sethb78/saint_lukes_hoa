FactoryGirl.define do
  factory :user do
name "example user"
email "example@user.com"
	unit "345"
    password "foobar"
    password_confirmation "foobar"
    approved true

    end

end