@payments.each do |payment|
  json.set! payment.id do
      json.partial! 'api/payments/payment', payment: payment
      json.user payment.user.username
  end
end