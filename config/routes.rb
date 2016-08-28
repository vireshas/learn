Rails.application.routes.draw do
  devise_for :users, :skip => [:registrations]

  devise_scope :user do
    get "/login", :to => 'devise/sessions#new' , as: :login
    get "/logout", :to => 'devise/sessions#destroy' , as: :logout
  end

  root :to => "welcome#home"
  get 'welcome/index'
end
