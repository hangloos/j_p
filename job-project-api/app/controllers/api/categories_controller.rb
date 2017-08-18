class Api::CategoriesController < ApplicationController

  def index
    render json: Category.all, :include => :jobs 
  end 


end