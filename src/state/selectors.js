export const getAllUsers = (state) => state.users;
export const getHeaders = (state) => state.headers;
export const getUser = (state, id) =>
  state.users.find((user) => user.id === id);
