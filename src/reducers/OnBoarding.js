// OnboardingSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Onboarding: null,
};

const OnboardingSlice = createSlice({
  name: "onboard",
  initialState,
  reducers: {
    setOnboarding(state, action) {
      state.Onboarding = action.payload;
    },
  },
});

export const { setOnboarding } = OnboardingSlice.actions;
export default OnboardingSlice.reducer;
