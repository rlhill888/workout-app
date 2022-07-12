class UsersController < ApplicationController
   
    before_action :authorize_user
    skip_before_action :authorize_user, only: [:create, :index]

    def index
        render json: User.all, each_serializer: UserFollowingDetailsSerializer
    end 

    def create
        
        
        user= User.new(create_user_params)

        bmi_calculation= (user.weight / (user.height * user.height).to_d * 703).to_d 
        bmr_calculation= 66+(13.7 * (user.weight * 0.453592))+(5*(user.height * 2.54))-(6.8 * user.age)

        user.bmi= bmi_calculation 
        user.bmr= bmr_calculation
        user.public_user= false
        user.protein_macros= user.weight
      

        if user.initial_form_activity_level == "Little or no exercise"
            user.calories = user.bmr * 1.2
        end 
        if user.initial_form_activity_level == "Light exercise a few times a week"
            user.calories = user.bmr * 1.375
        end 
        if user.initial_form_activity_level == "Moderate exercise 3-5 times a week"
            user.calories = user.bmr * 1.55
        end 
        if user.initial_form_activity_level == "Heavy exercise 6-7 times per week"
            user.calories = user.bmr * 1.725
        end 
   
    
        if user.goal_type == "To Tone muscles and get muscle definition"
            user.calories = user.calories - 350
            user.fat_macros = user.weight*0.30
            protein_calorie_measurement = user.protein_macros * 4
            fat_calorie_measurement = user.fat_macros * 9
            user.carb_macros = (user.calories - protein_calorie_measurement - fat_calorie_measurement)/4
            UserRoutine.create!(user_id: user.id, routine_id: (Routine.find_by(description: 'Back And Biceps Workout For toning muscle and building definition', default_workout4me_routine: true).id), currently_using: true)
            UserRoutine.create!(user_id: user.id, routine_id: (Routine.find_by(description: 'Chest and Tricep Workout for toning muscle and building definition', default_workout4me_routine: true).id), currently_using: true)
            UserRoutine.create!(user_id: user.id, routine_id: (Routine.find_by(description: 'Lag Day workout for toning muscle and building definition', default_workout4me_routine: true).id), currently_using: true)
            user.save
        end

        if user.goal_type == "To gain muscle mass"
            user.calories = user.calories + 400
            user.fat_macros = user.weight*0.30
            protein_calorie_measurement = user.protein_macros * 4
            fat_calorie_measurement = user.fat_macros * 9
            user.carb_macros = (user.calories - protein_calorie_measurement - fat_calorie_measurement)/4
            UserRoutine.create!(user_id: user.id, routine_id: (Routine.find_by(description: 'Leg day workout for gaining muscle mass', default_workout4me_routine: true).id), currently_using: true)
            UserRoutine.create!(user_id: user.id, routine_id: (Routine.find_by(description: 'Chest and Tricep workout for gaining muscle mass', default_workout4me_routine: true).id), currently_using: true)
            UserRoutine.create!(user_id: user.id, routine_id: (Routine.find_by(description: 'Back and biceps workout for gaining overall muscle mass', default_workout4me_routine: true).id), currently_using: true)
            user.save
        end

        if user.goal_type == "To Loose Overall Weight"
            user.calories = user.calories - 700
            user.fat_macros = user.weight*0.25
            protein_calorie_measurement = user.protein_macros * 4
            fat_calorie_measurement = user.fat_macros * 9
            user.carb_macros = (user.calories - protein_calorie_measurement - fat_calorie_measurement)/4
            UserRoutine.create!(user_id: user.id, routine_id: (Routine.find_by(description: 'Leg Day Workout for Loosing Overall Weight', default_workout4me_routine: true).id), currently_using: true)
            UserRoutine.create!(user_id: user.id, routine_id: (Routine.find_by(description: 'Chest and Tricep Workout for Loosing Overall Weight', default_workout4me_routine: true).id), currently_using: true)
            UserRoutine.create!(user_id: user.id, routine_id: (Routine.find_by(description: 'Back and Biceps workout for loosing overall weight', default_workout4me_routine: true).id), currently_using: true)
            user.save
        end

        if user.goal_type == "To Gain Overall Weight"
            user.calories = user.calories + 650
            user.fat_macros = user.weight*0.45
            protein_calorie_measurement = user.protein_macros * 4
            fat_calorie_measurement = user.fat_macros * 9
            user.carb_macros = (user.calories - protein_calorie_measurement - fat_calorie_measurement)/4
            UserRoutine.create!(user_id: user.id, routine_id: (Routine.find_by(description: 'Leg workout for gaining over all body weight', default_workout4me_routine: true).id), currently_using: true)
            UserRoutine.create!(user_id: user.id, routine_id: (Routine.find_by(description: 'Chest and tricep workout for gaining overall body weight', default_workout4me_routine: true).id), currently_using: true)
            UserRoutine.create!(user_id: user.id, routine_id: (Routine.find_by(description: 'Back and bicep workout for gaining overall body weight', default_workout4me_routine: true).id), currently_using: true)
            user.save
        end
        render json: user, status: :created
    end
    

    def show
        render json: current_user, include: ['routines', 'routines.workouts', 'routines.workout_routines', 'meals', 'meals.ingredients', 'meals.meal_ingredients', 'user_routines', 'posts', 'posts.user', 'posts.comments'], status: :ok
    end

    def update
        # byebug
        user= current_user
        user.update!(update_user_params)
        
        bmi_calculation= (user.weight * 703)/(user.height * user.height)
        bmr_calculation= 66.47+(6.24 * user.weight)+(12.7*user.height)-(6.75*user.age)
        
        user.bmi = bmi_calculation
        user.bmr = bmr_calculation
        user.save
        
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
        params.permit( :height, :age, :weight, :profile_pic, :public_user, :calories, :carb_macros, :protein_macros, :fat_macros)
    end
end
