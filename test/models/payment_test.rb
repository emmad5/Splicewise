# == Schema Information
#
# Table name: payments
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  bill_id    :integer          not null
#  amount     :decimal(, )      not null
#  paid       :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class PaymentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
