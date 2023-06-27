import * as actionTypes from "../actionTypes";
const inititalState = {
  searchData: "",
  editData: "",
};

export const searchReducer = (state = inititalState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_BOOK:
      return {
        ...state,
        searchData: action.payload,
      };
    case actionTypes.EDIT_DETAILS:
      return {
        ...state,
        editData: action.payload,
      };
    default:
      return state;
  }
};
