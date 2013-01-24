class Document < ActiveRecord::Base
  attr_accessible :doctype, :meeting_date, :path, :title

  validate :doctype, presence: true
  validate :path, presence: true
  validate :title, presence: true
  validates :doctype, :inclusion => {:in => ["rules","meetings", "other"]}
end
