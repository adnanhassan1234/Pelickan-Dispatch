import * as t from "../types";

export const onGetDriversDoc = () => {
  return {
    type: t.GET_DRIVERS_DOC,
  };
};

export const onUploadDriversDoc = (data) => {
  return {
    type: t.UPLOAD_DRIVERS_DOC,
    payload: data,
  };
};
export const onGetDrivers = (data) => {
  return {
    type: t.GET_DRIVERS,
    payload: data,
  };
};
export const onGetOneDrivers = (data) => {
  return {
    type: t.GET_ONE_DRIVERS,
    payload: data,
  };
};
