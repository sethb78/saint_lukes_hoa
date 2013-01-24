require 'spec_helper'

describe "documents/index" do
  before(:each) do
    assign(:documents, [
      stub_model(Document,
        :title => "Title",
        :path => "Path",
        :doctype => "Doctype"
      ),
      stub_model(Document,
        :title => "Title",
        :path => "Path",
        :doctype => "Doctype"
      )
    ])
  end

  it "renders a list of documents" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Title".to_s, :count => 2
    assert_select "tr>td", :text => "Path".to_s, :count => 2
    assert_select "tr>td", :text => "Doctype".to_s, :count => 2
  end
end
