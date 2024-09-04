// store.js
const axios = require("axios");
const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;

// Initial state
const initialState = {
  data: [],
  loading: false,
  error: null,
};

// Action types
const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

// Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

// Thunk action creator
function getPosts() {
  return async (dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });

    try {
      // Simulate an API call
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_DATA_FAILURE, error: "Failed to fetch data" });
    }
  };
}

// Create the store with thunk middleware
const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

store.dispatch(getPosts());
