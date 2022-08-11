class AirlinesController < ApplicationController
    def index
        render json: Airline.all
    end

    def show
        airline = Airline.find(params[:id])
        render json: airline, include: :reviews
    end
    
    def create
        airline = Airline.create(name: params[:name], image_url: params[:image_url])
        render json: airline, status: :created
    end

    def update
        airline = Airline.find_by(id: params[:id])
        if airline
            airline.update(airline_params)
            render json: airline
        else
            render json: { error: "Airline not found" }, status: :not_found
        end
    end

    def destroy
        airline = Airline.find_by(id: params[:id])
        if airline
            airline.destroy
            head :no_content
        else
            render json: { error: "Airline not found" }, status: :not_found
        end
    end


    private

    def airline_params
        params.permit(:name, :image_url)
    end
end
