import { instance } from "../../../config/instance";
import { PostlTypes } from "./types";

const fetchPostsLoadingAction = () => {
  return { type: PostlTypes.FETCH_POST_LOADING };
};
const fetchPostsErrorAction = (error: any) => {
  return { type: PostlTypes.FETCH_POST_ERROR, payload: error };
};
const fetchPostsSecceesAction = (obj: any) => {
  return { type: PostlTypes.FETCH_POST_SECCEES, payload: obj };
};

//получение всех постов (GET)
export const fetchAllPostsAction: any = () => {
  return async (dispatch: any) => {
    try {
      dispatch(fetchPostsLoadingAction());
      const respons = await instance.get("search?country=United+Kingdom");
      dispatch(fetchPostsSecceesAction(respons.data.items));
    } catch (error) {
      dispatch(fetchPostsErrorAction("Не удалось получить посты"));
      console.log(error);
    }
  };
};
