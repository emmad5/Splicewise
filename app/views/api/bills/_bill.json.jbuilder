
json.extract! bill, :id, :description, :settled, :category, :creator_id, :created_at
json.balance ('%.2f' % bill.balance)

  json.payments(bill.payments) do |payment|
    json.id payment.id
    json.userId payment.user_id
    json.user User.find(payment.user_id).username
    json.createdAt payment.created_at
    json.amount ('%.2f' % payment.amount)
  end