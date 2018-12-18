json.extract! user, :id, :username

  json.friends(user.friends) do |friend|
    json.username friend.username
  end