class UsersController < ApplicationController

    def index
        render json: User.all
    end 

    def create

        user= User.create!(user_params)

        bmi_calculation= (user.weight * 703)/(user.height * user.height)
        bmr_calculation= 66.47+(6.24 * user.weight)+(12.7*user.height)-(6.75*user.age)

        user.bmi = bmi_calculation
        user.bmr = bmr_calculation

        render json: user, status: :created
    end

    def show
        render json: find_user
    end

    def update
        user= find_user
        user.update!(user_params)
        render json: user
    end

    def delete
        find_user.destroy
        head :no_content
    end

    

    private

    def find_user
        User.find(params[:id])
    end


    def user_params
        params.permit(:first_name, :last_name, :user_name, :email, :form_questions_answered, :watched_tutorial, :goal_type, :age, :weight, :height, :initial_form_activity_level, :profile_pic, :password)
    end
end
