Rails.application.routes.draw do
  
  default_url_options :host => 'http://crib-server.herokuapp.com'

  resources :houses
  resources :users

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
