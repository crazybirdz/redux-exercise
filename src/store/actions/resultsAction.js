import actionTypes from "./actionTypes";

export const storeResult = (result) => {
  return {
    type: actionTypes.STORE_RESULT,
    result,
  };
};
export const storeResultAsync = (result) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(storeResult(result));
    }, 2000);
  };
};
export const deleteResult = (resultEleId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultEleId,
  };
};
