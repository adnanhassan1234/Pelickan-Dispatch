import * as t from "../types";

const initialState = {
  data: [],
  loading: null,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.GET_DRIVERS_DOC:
    case t.UPLOAD_DRIVERS_DOC:
    case t.GET_DRIVERS:
    case t.GET_ONE_DRIVERS:
      return {
        ...state,
        loading: true,
      };

    case t.UPLOAD_DRIVERS_DOC_SUCCESS:
    case t.GET_DRIVERS_DOC_SUCCESS:
    case t.GET_DRIVERS_SUCCESS:
    case t.GET_ONE_DRIVERS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case t.GET_DRIVERS_DOC_FAIL:
    case t.UPLOAD_DRIVERS_DOC_FAIL:
    case t.GET_DRIVERS_FAIL:
    case t.GET_ONE_DRIVERS_FAIL:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default mainReducer;
