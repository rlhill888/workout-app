class SessionsController < ApplicationController

    def login
        
        user = User.find_by(email: params[:email])
        
        
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, include: ['routines', 'routines.workouts', 'routines.workout_routines', 'meals', 'meals.ingredients', 'meals.meal_ingredients', 'user_routines', 'posts', 'posts.user', 'post.comments'], status: :ok
        else
            render json: { errors: ["Invalid email or password"] }, status: :unauthorized
        end
    end

    def logout
        session.delete :user_id
        head :no_content
    end
end
