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
  payload: string|null;
}
interface PostSeccees {
  type: PostlTypes.FETCH_POST_SECCEES;
  payload: any;
}

export interface Post {
  "state-province": string | null;
  country: string;
  name: string;
  web_pages: any[];
  domains: any[];
  alpha_two_code: string;
}

 export interface InitState {
  error: string | null;
  loading: boolean;
  posts: Post[];
}

export type Actions = PostLoading | PostError | PostSeccees;
