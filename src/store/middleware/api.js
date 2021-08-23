import axios from "axios";
import * as actions from "../actionTypes";
import { API_BASE_URL } from "../config";

export default ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiRequest.type) return next(action);

    const { url, method, data, onSuccess, onError, onStart } = action.payload;
    if (onStart) dispatch({ type: onStart });
    next(action);

    try {
      const response = await axios.request({
        baseURL: API_BASE_URL,
        url,
        method,
        data,
      });
      if (onSuccess)
        return dispatch({ type: onSuccess, payload: response.data });
      return dispatch(actions.successReq(response.data));
    } catch (error) {
      if (onError) return dispatch({ type: onError, payload: error.message });
      return dispatch(actions.failedReq(error.message));
    }
  };
