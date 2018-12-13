# == Schema Information
#
# Table name: friendships
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  friend_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Friendship < ApplicationRecord
    validates :user_id, :friend_id, presence: true
    validates :friend_id, uniqueness: { scope: :user_id }

  

end
