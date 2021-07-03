class Request < ActiveRecord::Base

  belongs_to :user, foreign_key: :user_id

  validates :title, presence: true
  validates :description, presence: true
  validates :request_type, presence: true


  def to_json
    [:title => self.title, :description => self.description, :requesttype => self.requesttype].to_json
  end
end