export const fetchAnnotations = (jokeId) => {
    return $.ajax({
        method: "GET",
        url: `/api/jokes/${jokeId}/annotations`,
        
    })
}

export const postAnnotation = (annotation) => (
    $.ajax({
        method: "POST",
        url: `/api/jokes/${annotation.joke_id}/annotations`,
        data: { annotation }
    })
)

export const updateAnnotation = (annotation) => (
    $.ajax({
        method: "PATCH",
        url: `/api/jokes/${annotation.joke_id}/annotations/${annotation.id}`,
        data: { annotation }
    })
)

export const deleteAnnotation = (annotation) => (
    $.ajax({
        method: "DELETE",
        url: `/api/jokes/${annotation.joke_id}/annotations/${annotation.id}`
    })
)

