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



