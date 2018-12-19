export const addFriend = (friend) => (
    $.ajax({
        method: 'POST',
        url: '/api/friendships',
        data: friend
    })
);

export const acceptFriend = (friendship) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/friendships/${friendship.id}`,
        data: friendship
    })
);

export const removeFriend = (id) => (
    $.ajax({
        method: "DELETE",
        url: `/api/friendships/${id}`
    })
)


