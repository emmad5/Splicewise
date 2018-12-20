class Api::FriendshipsController < ApplicationController

    def create
        
        if !User.find_by(username: params[:friend])
            render json: ['User does not exist'], status: 422  
        elsif current_user.pending_friends.include?(User.find_by(username: params[:friend]))
            render json: ['You already added this friend!'], status: 422  
        elsif current_user.friends.include?(User.find_by(username: params[:friend]))
            render json: ['You are already friends :) '], status: 422  
        else
            @friendship = Friendship.new(user_id: current_user.id, friend_id: User.find_by(username: params[:friend]).id)
        
            if @friendship.save
                @user = current_user
                render '/api/users/show/'
            else
                render json: ['User does not exist'], status: 422
            end
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
        @friendship = Friendship.find_by(user_id: params[:id], friend_id: current_user.id)
        if !@friendship 
            @friendship = Friendship.find_by(friend_id: params[:id], user_id: current_user.id)
        end
        
        @friendship.destroy
        @user = current_user
        render '/api/users/show/'
    end

end
