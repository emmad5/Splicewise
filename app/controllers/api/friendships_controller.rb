class Api::FriendshipsController < ApplicationController

    def create
        @friendship = Friendship.new(user_id: params[:user_id], friend_id: params[:friend_id])
    end

    def destroy
        @friendship = Friendships.find(params[:id])
        @friendship.destroy
    end

end
