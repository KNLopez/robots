import {
  FETCH_USER_LIST,
  UPDATE_USER,
  DELETE_USER,
  CREATE_USER,
} from "./constants";

const initialState = {
  users: [],
  headers: ["name", "email", "address", "phone", "website"],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_LIST:
      return {
        ...state,
        users: action.payload,
      };

    case CREATE_USER:
      const user = {
        id: state.users.length + 1,
        ...action.payload,
      };
      return {
        ...state,
        users: [user, ...state.users],
      };

    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? action.payload : user
        ),
      };

    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };

    default:
      return state;
  }
}
