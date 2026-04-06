

const auth = {
    isAuth: false,
    user: null
}


export const authenReducer = (state = auth, action) => {
    switch (action.type) {
        case 'LOGIN':
            console.log(action.payload)
            return {
                ...state,
                isAuth: true,
                user: action.payload.user

            }
        case 'LOGOUT':
            return state - 1
        default: {
            return state
        }
    }
}