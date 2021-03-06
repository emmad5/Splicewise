# == Schema Information
#
# Table name: bills
#
#  id          :bigint(8)        not null, primary key
#  creator_id  :integer          not null
#  description :string           not null
#  category    :string           default("Uncategorized"), not null
#  settled     :boolean          default(FALSE)
#  balance     :decimal(10, 2)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bill < ApplicationRecord
    validates :creator_id, :category, :balance, :description, presence: true
    validates :category, inclusion: { in: ["Uncategorized", "Food and Drink", 'Home', 'Life', 'Transportation', 'Utilities'] }

    belongs_to :creator,
    foreign_key: :creator_id,
    class_name: :User

    has_many :payments,
    dependent: :destroy

end
