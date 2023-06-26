import * as actionTypes from "../actionTypes";

export const searchAction = (userDetails) => {
  // console.log("userDetails", userDetails);
  return {
    type: actionTypes.SEARCH_BOOK,
    payload: userDetails,
  };
};