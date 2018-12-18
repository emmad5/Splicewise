class Api::PaymentsController < ApplicationController

    def create
        @payment = Payment.new(bill_id: params[:bill_id], amount: params[:amount], paid: params[:paid])
 
        
        if @payment.save 
            render 'api/payments/show'
        else
            render json: @payment.errors.full_messages, status: 422
        end
    end

    def show
        @payment = Payment.find(params[:id])
    end

    def index
        @payments = Payment.all
    end

    def update
        @payment = Payment.find(params[:id])
        if @payment.update(bill_id: params[:payment][:bill_id], amount: params[:payment][:amount], user_id: params[:payment][:user_id])
            render 'api/payments/show'
        else
            render json: @payment.errors.full_messages, status: 422
        end
    end


end