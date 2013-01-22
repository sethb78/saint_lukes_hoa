require "spec_helper"

describe UserMailer do
  describe "account_request" do
    let(:mail) { UserMailer.account_request }

    it "renders the headers" do
      mail.subject.should eq("Account request")
      mail.to.should eq(["to@example.org"])
      mail.from.should eq(["from@example.com"])
    end

    it "renders the body" do
      mail.body.encoded.should match("Hi")
    end
  end

end
