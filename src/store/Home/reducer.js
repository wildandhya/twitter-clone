const initialState = {
  tweetData: [],
};

const homeReducer = (state = initialState, action) => {
  let { type, data } = action;

  switch (type) {
    case "GET_TWEET":
      return { ...state, tweetData: data };
    case "SET_TWEET":
      return { ...state, tweetData: [data].concat(state.tweetData) };
    case "EDIT_TWEET":
      return { ...state, tweetData: [data].concat(state.tweetData) };
    case "REMOVE_TWEET":
      return {
        ...state,
        tweetData: state.tweetData.filter(
          (provinsiData) => provinsiData._id !== data
        ),
      };
    default:
      return state;
  }
};

export default homeReducer;
