import {
  FETCH_USER_LIST,
  UPDATE_USER,
  DELETE_USER,
  CREATE_USER,
} from "./constants";

export const fetchUserList = (payload) => {
  return { type: FETCH_USER_LIST, payload };
};

export const createUser = (payload) => {
  return { type: CREATE_USER, payload };
};

export const updateUser = (id, payload) => {
  return { type: UPDATE_USER, id, payload };
};

export const deleteUser = (id) => {
  return { type: DELETE_USER, id };
};
