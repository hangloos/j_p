Rails.application.routes.draw do

  namespace :api do
    resources :jobs
  end
  
end
