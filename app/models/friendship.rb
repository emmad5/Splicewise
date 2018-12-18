# == Schema Information
#
# Table name: friendships
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  friend_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  confirmed  :boolean
#

class Friendship < ApplicationRecord
    validates :friend_id, uniqueness: { scope: :user_id }

    belongs_to :user
    belongs_to :friend, class_name: :User
  

end
