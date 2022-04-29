class FollowingsController < ApplicationController

    def create
        user_getting_followed = User.find(following_params[:user_getting_followed_id])

        if user_getting_followed.public_user== false
            return render json: {error: "User's profile is not public"}
        end
        if user_getting_followed.public_user== true
            following = Following.create!(following_params)
            user_being_followed = User.find(following.user_getting_followed_id)
            following.name_of_user_being_followed = user_being_followed.user_name
            return render json: following, status: :created
        end
    end


    private

    def following_params
        params.permit(:favorite, :user_id, :user_getting_followed_id)
    end


end
