json.extract! user, :id, :username

  json.friends(user.friends) do |friend|
    json.username friend.username
    json.id friend.id
  end

  json.friend_requests(user.friend_requests) do |friend|
    json.username friend.username
    json.id friend.id
  end