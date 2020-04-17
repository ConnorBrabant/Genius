export const fetchJokes = (start) => (
    $.ajax({
        method: 'GET',
        url: '/api/jokes',
        data: { start }
    })
)

export const fetchJoke = jokeId => (
    $.ajax({
        method: 'GET',
        url: `/api/jokes/${jokeId}`
    })

)

export const postJoke = joke => (
    $.ajax({
        method: 'POST',
        url: '/api/jokes',
        data: joke,
        contentType: false,
        processData: false
    })
)

export const updateJoke = joke => (
    $.ajax({
        method: 'PATCH',
        url: `/api/jokes/${joke.id}`,
        data: { joke }
    })
)

export const deleteJoke = jokeId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/jokes/${jokeId}`
    })
)