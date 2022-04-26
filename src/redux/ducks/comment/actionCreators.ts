import { instance } from "../../../config/instance";
import { PostlTypes, Post } from "./types";

const fetchPostsLoadingAction = () => {
  return { type: PostlTypes.FETCH_POST_LOADING };
};
const fetchPostsErrorAction = (error: string | null) => {
  return { type: PostlTypes.FETCH_POST_ERROR, payload: error };
};
const fetchPostsSecceesAction = (obj: Post) => {
  return { type: PostlTypes.FETCH_POST_SECCEES, payload: obj };
};

//получение всех постов (GET)
export const fetchAllPostsAction: any = () => {
  return async (dispatch: any) => {
    try {
      dispatch(fetchPostsLoadingAction());
      const respons = await instance.get("search?country=United+Kingdom");
      dispatch(fetchPostsSecceesAction(respons.data));
    } catch (error) {
      dispatch(fetchPostsErrorAction("Не удалось получить посты"));
      console.log(error);
    }
  };
};
