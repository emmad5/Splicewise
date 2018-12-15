class Api::PaymentsController < ApplicationController

    def create
        @payment = Payment.new(payment_params)
        if @payment.save 
            render 'api/bills/show'
        else
            render json: @payment.errors.full_messages, status: 422
        end
    end


    def payment_params
        params.require(:payment).permit(:amount, :user_id, :bill_id)
    end

end