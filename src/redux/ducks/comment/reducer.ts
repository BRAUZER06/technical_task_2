import { Actions, InitState, PostlTypes } from "./types";

const initState: InitState = {
  error: null,
  loading: false,
  posts: [
    {
      "state-province": "",
      country: "",
      name: "",
      web_pages: "",
      domains: "",
      alpha_two_code: "",
    },
  ],
};

export const postlReducer = (state = initState, action: Actions): InitState => {
  switch (action.type) {
    case PostlTypes.FETCH_POST_LOADING:
      return { ...state, error: null, loading: true };

    case PostlTypes.FETCH_POST_ERROR:
      return { ...state, loading: false, error: action.payload };

    case PostlTypes.FETCH_POST_SECCEES:
      return {
        ...state,
        loading: false,
        error: null,
        posts: action.payload,
      };
    default:
      return state;
  }
};
