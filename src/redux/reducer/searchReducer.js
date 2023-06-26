import * as actionTypes from "../actionTypes";
const inititalState = {
  searchData:"",
};

export const searchReducer = (state = inititalState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_BOOK:
          return {
            ...state,
            searchData: action.payload,
          };
          default:
      return state;
        }
}