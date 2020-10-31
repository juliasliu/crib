json.extract! user, :id, :username, :name, :email, :password_digest, :house_code, :points, :created_at, :updated_at
json.url user_url(user, format: :json)
