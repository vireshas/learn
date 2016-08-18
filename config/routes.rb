Rails.application.routes.draw do
  devise_for :users

  devise_scope :user do
    get "/login", :to => 'devise/sessions#new' , as: :login
  end

  root :to => "welcome#home"
  get 'welcome/index'
end
