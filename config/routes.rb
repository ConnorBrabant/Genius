Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: { format: :json} do 
    resources :users 
    resource :session, only: [:create, :destroy]
    resources :jokes, only: [:create, :update, :destroy, :show, :index] do
      resources :annotations, only: [:create, :destroy, :update, :show, :index]
      resources :comments, only: [:create, :destroy, :update, :index]
    end
    resources :likes, only: [:create, :destroy, :update]
  end 
  root to: 'root#root'
end
