# == Schema Information
#
# Table name: bills
#
#  id          :bigint(8)        not null, primary key
#  creator_id  :integer          not null
#  description :string           default("Uncategorized"), not null
#  category    :string           not null
#  settled     :boolean          default(FALSE)
#  balance     :decimal(10, 2)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bill < ApplicationRecord

end
