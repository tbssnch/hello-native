import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_FAIL,
  FETCHING_COIN_DATA_SUCCESS
} from './../Utils/ActionTypes';

const initialState = {
  isFetching: null,
  data: [],
  hasError: false,
  errorMessage: null,
};

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCHING_COIN_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        data: null,
        hasError: false,
        errorMessage: null
      });

      default:
        return state;
  }
}
