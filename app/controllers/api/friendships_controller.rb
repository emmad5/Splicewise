class Api::FriendshipsController < ApplicationController

    def create

        @friendship = Friendship.new(user_id: current_user.id, friend_id: User.find_by(username: params[:friend]).id)
        
        if @friendship.save
            @user = current_user
            render '/api/users/show/'
        else
            render json: @friendship.errors.full_messages
        end
    end

   def update
    @friendship = Friendship.find_by(user_id: User.find(params[:id]).id, friend_id: current_user.id)  
    @friendship.confirmed = true
    if @friendship.save
        @user = current_user
        render '/api/users/show/'
    else
        render json: @friendship.errors.full_messages
    end
   end



    def destroy
        @friendship = Friendship.find(params[:id])
        @friendship.destroy
    end

end
