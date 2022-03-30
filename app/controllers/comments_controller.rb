class CommentsController < ApplicationController

    def create
        comment = Comment.create!(comment_params)
        comment.likes= 0
        comment.dislikes= 0
        user = User.find(comment.user_id)
        comment.created_by = user.user_name
        render json: comment, status: :created
    end

    def delete
        find_comment.destroy
        head :no_content
    end

    def increment_like
        comment = find_comment
        comment.increment(:likes, 1)
        render json: comment.likes
    end

    def increment_dislike
        comment = find_comment
        comment.increment(:dislikes, 1)
        render json: comment.dislikes
    end




    private 

    def find_comment
        Comment.find(params[:id])
    end

    def  comment_params
        params.permit(:user_id, :post_id, :comment_text)
    end

end
