import * as t from "../types";

export const onShowModal = (tag, position) => {
  return {
    type: t.OPEN_MODAL,
    payload: { tag, position },
  };
};

export const onCloseModal = (position) => {
  return {
    type: t.CLOSE_MODAL,
    payload: { position },
  };
};
export const onResetModal = () => {
  return {
    type: t.RESET_MODAL,
  };
};
