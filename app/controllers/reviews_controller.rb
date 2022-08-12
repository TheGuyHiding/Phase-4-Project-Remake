class ReviewsController < ApplicationController
    def index
        render json: Review.all
    end

    def show
        review = Review.find(params[:id])
        render json: review, include: :airlines
    end
    
    def create
        review = Review.create(review_params)
        render json: review, status: :created
    end

    def update
        review = Review.find_by(id: params[:id])
        if review
            review.update(review_params)
            render json: review
        else
            render json: { error: "Review not found" }, status: :not_found
        end
    end

    
    def destroy
        review = Review.find_by(id: params[:id])
        if review
            review.destroy
            head :no_content
        else
            render json: { error: "Review not found" }, status: :not_found
        end
    end

    private

    def review_params
        params.permit(:title, :description, :score, :airline_id, :user_id)
    end
end
