class Document < ActiveRecord::Base
  attr_accessible :doctype, :meeting_date, :title, :document, :path
  mount_uploader :document, DocumentUploader

  validates :doctype, presence: true
  validates :document, presence: true
  validates :title, presence: true
  validates :doctype, :inclusion => {:in => ["rules","meetings", "other", "memorandums"]}
  validates :meeting_date, presence: true, :if => :a_meeting

  def a_meeting
    doctype == "meetings"
  end
end
