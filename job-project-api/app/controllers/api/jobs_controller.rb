class Api::JobsController < ApplicationController

  def index
    render json: Job.all
  end

  def show
    render json: Job.find_by(id: params[:id])
  end

end