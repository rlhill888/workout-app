class PostsController < ApplicationController

    def create
        post = Post.create!(create_post_params)
        post.likes= 0
        post.dislikes= 0
        render json: post  
    end

    def load_posts
        
        user = find_user
        
        posts= []
        followings= user.followings

        

        followings.map do |a|
            
            user_getting_followed= User.find(a.user_getting_followed_id)
            
            user_getting_followed.posts.map do |p|
                posts.push(p)
            end
        end 

       posts.sort! { |a, b|  b.id <=> a.id }
       
        return render json: posts, status: :ok
    end

    def increment_like
        post = find_post
        post.increment(:likes, 1)
        render json: post.likes
    end

    def increment_dislike
        post = find_post
        post.increment(:dislikes, 1)
        render json: post.dislikes
    end

    private

    def create_post_params
        params.permit(:user_id, :title, :image, :description, :meal_post, :routine_post, :share_routine_id)
    end

    def update_post_params
        params.permit( :title, :image, :description, :meal_post, :routine_post, :likes, :dislikes)
    end

    def find_post
        Post.find(params[:id])
    end

    def find_user
        User.find(params[:id])
    end

end
