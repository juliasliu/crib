class House < ApplicationRecord
  validates :name, presence: true
  validates :house_code, presence: true
  has_many :users
end
