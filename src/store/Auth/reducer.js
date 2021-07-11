const initialState = {
    isLoading: false
};

const authReducer = ((state = initialState, action) => {
    let { type, data } = action;

    switch (type) {
        case "SET_LOADING":
            return { ...state, isLoading: data }
        default:
            return state
    }
})

export default authReducer;