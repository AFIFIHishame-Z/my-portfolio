import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fillUser: (state: any, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
});

export const { fillUser } = userSlice.actions;
export const connectedUser = (state: any) => state.user;
export default userSlice.reducer;
