class User < ActiveRecord::Base

  validates :name, presence: true
  validates :email, presence: true
  validates :password, presence: true


  def to_json
    [:name => self.name, :email => self.email, :password => self.password, :admin => self.admin].to_json
  end
end