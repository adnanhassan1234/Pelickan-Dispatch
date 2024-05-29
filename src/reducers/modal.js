import { OPEN_MODAL, CLOSE_MODAL, RESET_MODAL } from "../types";

const initialState = {
  main: {},
  cPosition: 0,
};

const modalReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case OPEN_MODAL:
      return {
        main: {
          ...(payload.position === 0 && { impotent: true }),
          ...(payload.position === 1 && {
            ...state.main,
            parent: payload.tag,
          }),
          ...(payload.position === 2 && {
            ...state.main,
            child: payload.tag,
          }),
          ...(payload.position === 3 && {
            ...state.main,
            grandChild: payload.tag,
          }),
          ...(payload.position === 4 && {
            ...state.main,
            greatGrandChild: payload.tag,
          }),
        },
        cPosition: payload.position,
      };
    case CLOSE_MODAL:
      return {
        main: {
          ...(payload.position === 0 && { impotent: true }),
          ...(payload.position === 1 && {
            ...state.main,
            parent: "",
          }),
          ...(payload.position === 2 && {
            ...state.main,
            child: "",
          }),
          ...(payload.position === 3 && {
            ...state.main,
            grandChild: "",
          }),
          ...(payload.position === 4 && {
            ...state.main,
            greatGrandChild: "",
          }),
        },
        cPosition: payload.position - 1,
      };
    case RESET_MODAL:
      return {
        main: {},
        cPosition: 0,
      };
    default:
      return state;
  }
};
export default modalReducer;
