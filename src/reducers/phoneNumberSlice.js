// phoneNumberSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phoneNumber: "",
};

const phoneNumberSlice = createSlice({
  name: "phone",
  initialState,
  reducers: {
    setPhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
  },
});

export const { setPhoneNumber } = phoneNumberSlice.actions;
export default phoneNumberSlice.reducer;
