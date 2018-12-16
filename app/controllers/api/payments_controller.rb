class Api::PaymentsController < ApplicationController

    def create
        @payment = Payment.new(bill_id: params[:payment][:bill_id], amount: params[:payment][:amount])
        if params[:payment][:paid]
            @payment.paid = params[:payment][:paid]
        end
        if params[:payment][:user_id]
            @payment.user_id = params[:payment][:user_id]
        end
 
        if @payment.user_id == nil
            user = User.find_by(username: params[:payment][:username])
            if user
                @payment.user_id = user.id
                if @payment.save 
                    render 'api/payments/show'
                else
                    render json: @payment.errors.full_messages, status: 422
                end
            else
                render json: ['Invalid User'], status: 422
            end
        elsif @payment.save 
            render 'api/payments/show'
        else
            render json: @payment.errors.full_messages, status: 422
        end
    end

    def show
        @payment = Payment.find(params[:id])
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