Rails.application.routes.draw do
  
  resources :meal_ingredients
  resources :workout_routines
  resources :user_meals
  resources :user_routines
  resources :ingredients
  resources :meals
  resources :workouts
  resources :routines
  resources :comments
  resources :posts
  resources :followings
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
