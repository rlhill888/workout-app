class UsersController < ApplicationController
   
    before_action :authorize_user
    skip_before_action :authorize_user, only: [:create, :index]

    def index
        render json: User.all
    end 

    def create
        
        
        user= User.create!(create_user_params)

        bmi_calculation= (user.weight * 703)/(user.height * user.height)
        bmr_calculation= 66.47+(6.24 * user.weight)+(12.7*user.height)-(6.75*user.age)

        user.bmi = bmi_calculation
        user.bmr = bmr_calculation
        user.watched_tutorial = false
        
        render json: user, status: :created

        
    end
    

    def show
        render json: current_user, include: ['routines', 'routines.workouts'], status: :ok
    end

    def update
        user= current_user
        user.update!(update_user_params)
        render json: user
    end

    def delete
        current_user.destroy
        head :no_content
    end

    # def reset_user_password
    #     user = find_user
    #     user.reset_password(params[:password])
    #     render json: user
    # end

    

    private

    def find_user
        User.find(params[:id])
    end


    def create_user_params
        params.permit(:first_name, :last_name, :user_name, :email, :goal_type, :age, :weight, :height, :initial_form_activity_level, :profile_pic, :password)
    end

    def update_user_params
        params.permit(:first_name, :last_name, :goal_type, :age, :weight, :height, :initial_form_activity_level, :profile_pic)
    end
end
