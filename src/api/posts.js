const { NODE_ENV } = process.env
const BASE_URL = NODE_ENV === 'development' ?
    'http://localhost:5000' :
    'tbd' // Once we deploy, we need to change this

export const remove = async(user, post) => {
    const token = window.localStorage.getItem('journal-app')
    const postId = post._id
    const userId = user._id
    const response = await fetch(`${BASE_URL}/${userId}posts/${postId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        method: 'DELETE'
    })
    const json = await response.json()
    const responseUser = json.response

    return responseUser
}