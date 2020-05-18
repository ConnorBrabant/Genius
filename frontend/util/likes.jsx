export const postLike = (like) => (
    $.ajax ({
        method: 'POST',
        url: '/api/likes',
        data: { like }
    })
)

export const updateLike = (like) => (
    $.ajax ({
        method: 'PATCH',
        url: `/api/likes/${like}`,
    })
)

export const deleteLike = (likeId) => (
    $.ajax({
        method: 'DELETE',
        url: `api/likes/${likeId}`
    })
)