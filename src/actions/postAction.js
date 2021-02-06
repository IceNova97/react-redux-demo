import { postRequest } from "../services/loadApi";
import { achieveAction } from "../actions/loadAction";
export const postAction = async (dispatch) => {
  const res = await postRequest();
  dispatch({
    type: "POST_ACTION",
    payload: res.data,
  });
  await dispatch(achieveAction);
};
