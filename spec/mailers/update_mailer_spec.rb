require "spec_helper"

describe UpdateMailer do
  describe "building_update" do
    let(:mail) { UpdateMailer.building_update }

    it "renders the headers" do
      mail.subject.should eq("Building update")
      mail.to.should eq(["to@example.org"])
      mail.from.should eq(["from@example.com"])
    end

    it "renders the body" do
      mail.body.encoded.should match("Hi")
    end
  end

end
