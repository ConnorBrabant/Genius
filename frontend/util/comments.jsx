export const fetchComments = (commentId, start) => (
    $.ajax({
        method: 'GET',
        url: `/api/jokes/${commentId}/comments`,
        data: { start }
    })
)

export const postComment = (comment) => (
    $.ajax({
        method: "POST",
        url: `/api/jokes/${comment.comment_type}/comments`,
        data: { comment }
    })
)

export const updateComment = (comment) => (
    $.ajax({
        method: "PATCH",
        url: `/api/jokes/${comment.comment_type}/comments/${comment.id}`,
        data: { comment }
    })
)

export const deleteComment = (comment) => (
    $.ajax({
        method: "DELETE",
        url: `/api/jokes/${comment.comment_type}/comments/${comment.id}`
    })
)