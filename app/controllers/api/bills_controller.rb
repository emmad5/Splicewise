class Api::SessionsController < ApplicationController

    def create
    end

    def destroy
    end

    def update
    end

    def bill_params
        params.require(:bill).permit(:description, :category, :balance)
    end
end