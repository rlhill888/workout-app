class FollowingsController < ApplicationController

    def create
        following = Following.create!(following_params)
        user_being_followed = User.find(following.user_getting_followed_id)
        following.name_of_user_being_followed = user_being_followed.user_name
        render json: following, status: :created
    end


    private

    def following_params
        params.permit(:favorite, :user_id, :user_getting_followed_id)
    end


end
