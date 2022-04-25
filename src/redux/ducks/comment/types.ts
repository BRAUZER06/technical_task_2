export enum PostlTypes {
  FETCH_POST_LOADING = "FETCH_POST_LOADING",
  FETCH_POST_ERROR = "FETCH_POST_ERROR",
  FETCH_POST_SECCEES = "FETCH_POST_SECCEES",
}

interface PostLoading {
  type: PostlTypes.FETCH_POST_LOADING;
}
interface PostError {
  type: PostlTypes.FETCH_POST_ERROR;
  payload: string;
}
interface PostSeccees {
  type: PostlTypes.FETCH_POST_SECCEES;
  payload: any;
}

interface Post {
  "state-province": string;
  country: string;
  name: string;
  web_pages: string;
  domains: string;
  alpha_two_code: string;
}

export interface InitState {
  error: string | null;
  loading: boolean;
  posts: Post[];
}

export type Actions = PostLoading | PostError | PostSeccees;
