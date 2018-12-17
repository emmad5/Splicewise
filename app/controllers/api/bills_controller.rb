class Api::BillsController < ApplicationController

    def create
        @bill = Bill.new(bill_params)
        @bill.balance = @bill.balance.to_f
        @bill.creator_id = current_user.id
        if @bill.save
            render :show
        else
            render json: @bill.errors.full_messages, status: 422
        end
    end

    def index
        payments = Payment.where(user_id: current_user.id)
        bill_ids = []
        payments.each do |payment|
            bill_ids.push(payment.bill_id)
        end
        @bills = Bill.where(creator_id: current_user.id).or(Bill.where(id: bill_ids))
        render :index
    end

    def show
        @bill = Bill.find(params[:id])
        render :show
    end

    def destroy
        @bill = Bill.find(params[:id])
        render json: ['can not find bill'] unless @bill
        if current_user.id === @bill.creator_id
            @bill.destroy
            render json: @bill
        else
            render json: ['You did not create this bill'], status: 422
        end
    end

    def update
        @bill = Bill.includes(:creator, :payments, :participants).find_by(id: params[:id])
        render json: ['no bill'] unless @bill
        if @bill.update(bill_params)
            render :show
        else
            render json: @bill.errors.full_messages, status: 422
        end
    end

    def bill_params
        params.require(:bill).permit(:category, :balance, :description)
    end
end