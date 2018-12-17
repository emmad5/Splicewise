json.partial! 'api/payments/payment', payment: @payment
json.user @payment.user.username