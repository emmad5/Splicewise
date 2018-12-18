
json.extract! payment, :id, :bill_id, :user_id
json.amount ('%.2f' % payment.amount)
