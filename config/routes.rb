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

  get '/loadposts/:id', to: 'posts#load_posts'

  get '/me', to: 'users#show'

  post '/login', to: 'sessions#login'

  delete '/logout', to: 'sessions#logout'

  get '/current_user_routines', to: 'routines#current_user_routines'

  get 'increment_post_like/:id', to: 'posts#increment_like'
  get 'increment_post_dislike/:id', to: 'posts#increment_dislike'

  get 'increment_comment_like/:id', to: 'comment#increment_like'
  get 'increment_comment_dislike/:id', to: 'comment#increment_dislike'
end
