class UserMailer < ActionMailer::Base
  default from: "executiveboard@saintlukeslofts.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.account_request.subject
  #


def signup_confirmation(user)
  @user = user

  mail to: user.email, subject: "Saint Lukes Lofts Homeowners Association Account Verified"
end

def new_user_waiting_for_approval(user)
	@user = user
	mail to:("executiveboard@saintlukeslofts.com, rlklein@gmail.com"), subject: "New User Requesting Approval"
end

end

