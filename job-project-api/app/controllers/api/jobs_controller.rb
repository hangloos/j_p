class Api::JobsController < ApplicationController

  def index
    render json: Job.all
  end

  def create
    job = Job.new(job_params)
    if job.save
      render json: job
    else
      render json: { message: job.errors }, status: 422
    end
  end

  def show
    render json: @job
  end

  def update
    if @job.update(job_params)
      render json: @job
    else
      render json: { message: @job.errors }, status: 422
    end
  end



  private

  def set_job
    @job = Job.find_by(id: params[:id])
  end

  def job_params
    params.require(:job).permit(:id, :title, :description, :url, :company, :category_id, :type_id)
  end


end