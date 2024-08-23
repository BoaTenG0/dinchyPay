// studentSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  studentDetails: [],
  selectedGenCourses: [],
  selectedDepCourses: [],
  classes: [],
  studentUser: {},
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setStudentDetails(state, action) {
      state.studentDetails = action.payload;
    },
    setSelectedGenCourses(state, action) {
      state.selectedGenCourses = action.payload;
    },
    setSelectedDepCourses(state, action) {
      state.selectedDepCourses = action.payload;
    },
    setClasses(state, action) {
      state.classes = action.payload;
    },
    setStudentUser(state, action) {
      state.studentUser = action.payload;
    },
  },
});

export const {
  setStudentDetails,
  setSelectedGenCourses,
  setSelectedDepCourses,
  setClasses,
  setStudentUser,
} = studentSlice.actions;
export default studentSlice.reducer;
