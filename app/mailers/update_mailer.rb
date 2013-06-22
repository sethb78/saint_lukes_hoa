class UpdateMailer < ActionMailer::Base
  default from: "executiveboard@saintlukeslofts.com"

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.update_mailer.building_update.subject
  #
  def building_update(user, update)
    @update = update

    mail to: user.email, subject: "Saint Lukes Lofts Update"
  end
end
