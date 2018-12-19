
json.extract! payment, :id, :bill_id, :user_id, :paid
json.amount ('%.2f' % payment.amount)
