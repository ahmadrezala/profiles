import { ADD_USER, GET_USER, UPDATE_USER, DELETE_USER } from "./actionType";

const initialState = {
  users: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      console.log(state.users);
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "UPDATE_USER":
      console.log(action.payload);

      state.users = state.users.map((user) =>
        user.id === action.payload.id
          ? {
              ...user,
              name: action.payload.name,
              gender: action.payload.gender,
              birthday: action.payload.birthday,
              img: action.payload.img,
              age: action.payload.age,
            }
          : user
      );
      return {
        ...state,
        users: state.users,
      };

    case "GET_USER":
      return {
        ...state,
        users: action.payload,
      };

    case "DELETE_USER":
      state.users = state.users.filter((user) => user.id !== action.payload.id);
      return {
        ...state,
        users: state.users,
      };

    default:
      return state;
  }
};
