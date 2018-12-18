json.extract! user, :id, :username

  json.friends(user.friends) do |friend|
    json.username friend.username
  end

  json.pending_friends(user.pending_friends) do |friend|
    json.username friend.username
  end