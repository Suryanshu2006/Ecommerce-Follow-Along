const initialState = {
    name: null,
    email: null,
    image: null,
}

const UserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SET_NAME":
            return {
                ...state,
                name: payload.name,
            }
        case "SET_EMAIL":
            return {
                ...state,
                email: payload.email,
            }
        case "SET_IMAGE":
            return {
                ...state,
                image: payload.image,
            }
    }
}
export default UserReducer;