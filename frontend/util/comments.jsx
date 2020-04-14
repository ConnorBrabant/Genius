export const fetchComments = (comment, start) => (
    $.ajax({
        method: 'GET',
        url: `/api/jokes/${comment.commentableId}/comments`,
        data: { comment, start }
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
        url: `/api/jokes/${comment.commentable_id}/comments/${comment.id}`
    })
)