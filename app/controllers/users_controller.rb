class UsersController < ApplicationController
   
    before_action :authorize_user
    skip_before_action :authorize_user, only: [:create, :index]

    def index
        render json: User.all, each_serializer: UserFollowingDetailsSerializer
    end 

    def create
        
        
        user= User.create!(create_user_params)

        bmi_calculation= (user.weight / (user.height * user.height).to_d * 703).to_d * 100
        bmr_calculation= 66.47+(6.24 * user.weight)+(12.7*user.height)-(6.75*user.age)

        user.bmi= bmi_calculation 
        user.bmr= bmr_calculation
        user.public_user= false
        user.save
    
        if user.goal_type == "To Tone muscles and get muscle definition"
            UserRoutine.create!(user_id: user.id, routine_id: 208, currently_using: true)
            UserRoutine.create!(user_id: user.id, routine_id: 209, currently_using: true)
            UserRoutine.create!(user_id: user.id, routine_id: 210, currently_using: true)
        end
        
        
        render json: user, status: :created
        

        
    end
    

    def show
        render json: current_user, include: ['routines', 'routines.workouts', 'routines.workout_routines', 'meals', 'meals.ingredients', 'meals.meal_ingredients'], status: :ok
    end

    def update
        user= current_user
        bmi_calculation= (user.weight * 703)/(user.height * user.height)
        bmr_calculation= 66.47+(6.24 * user.weight)+(12.7*user.height)-(6.75*user.age)
        user.update!(update_user_params)
        
        user.bmi = bmi_calculation
        user.bmr = bmr_calculation
        
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
        params.permit( :age, :weight, :profile_pic, :public_user)
    end
end
