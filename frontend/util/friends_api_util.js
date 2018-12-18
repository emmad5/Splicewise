export const addFriend = (friend) => (
    $.ajax({
        method: 'POST',
        url: '/api/friendships',
        data: friend
    })
)

export const fetchFriendships = () => (
    $.ajax({
        method: 'GET',
        url: '/api/friendships'
    })
)

