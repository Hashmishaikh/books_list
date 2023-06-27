import * as actionTypes from "../actionTypes";

export const searchAction = (userDetails) => {
  // console.log("userDetails", userDetails);
  return {
    type: actionTypes.SEARCH_BOOK,
    payload: userDetails,
  };
};
export const EditAction = (userDetails) => {
  // console.log("userDetails", userDetails);
  return {
    type: actionTypes.EDIT_DETAILS,
    payload: userDetails,
  };
};