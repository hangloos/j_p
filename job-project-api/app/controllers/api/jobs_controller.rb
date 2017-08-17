require 'pry'
class Api::JobsController < ApplicationController

  def index
    binding.pry
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
    @job = set_job
    render json: @job
  end

  def update
    @job = set_job
    if @job.update(job_params)
      render json: @job
    else
      render json: { message: @job.errors }, status: 422
    end
  end

  def destroy
    @job = set_job
    if @job.destroy
      render json: { message: "Successful Destroy"}, status: 204
    else
      render json: { message: "Unable to Destroy" }, status: 422
    end
  end



  private

  def set_job
    Job.find(params[:id])
  end

  def job_params
    params.require(:job).permit(:id, :title, :description, :url, :company, :category_id, :type_id)
  end


end