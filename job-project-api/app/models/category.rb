class Category < ApplicationRecord
has_many :categorizations
has_many :jobs, :through => :categorizations

end
