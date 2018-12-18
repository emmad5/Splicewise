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

   def index  
        
   end

    def destroy
        @friendship = Friendships.find(params[:id])
        @friendship.destroy
    end

end
