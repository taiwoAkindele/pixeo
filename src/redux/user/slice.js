import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  user: {},
  accessToken: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    LOADING: (state) => {
      state.isLoading = true;
    },
    STOP_LOADING: (state) => {
      state.isLoading = false;
    },
    SAVE_USER: (state, action) => {
      state.user = action.payload;
    },
    SAVE_ACCESS_TOKEN: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});

export const { LOADING, STOP_LOADING, SAVE_ACCESS_TOKEN, SAVE_USER } =
  userSlice.actions;

export default userSlice.reducer;
