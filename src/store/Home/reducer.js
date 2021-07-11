const initialState = {
    data: []
};

const homeReducer = ((state = initialState, action) => {
    let { type, data } = action;

    switch (type) {
        case "GET_TWEET":
            return { ...state, data: data }
        default:
            return state
    }
})

export default homeReducer;