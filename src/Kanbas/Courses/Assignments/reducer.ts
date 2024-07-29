import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
import { act } from "react";

const initialState = {
  assignments: assignments, 
  assignment: {
    "_id": "C123", 
    "title": "Title", 
    "course": "Course", 
    "description": "Description", 
    "points": 100, 
    "dueDate": new Date("07/28/2024").toDateString(), 
    "availableFromDate": new Date("06/28/2024").toDateString(), 
    "availableUntilDate": new Date("07/30/2024").toDateString()
 },
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
      addAssignment: (state, action) => {
        state.assignments = [
          ...state.assignments,
          {
            ...action.payload
          }
          
        ];
      },
      deleteAssignment: (state, action) => {
        state.assignments = state.assignments.filter(
          (assignment) => assignment._id !== action.payload
        );
      },
      updateAssignment: (state, action) => {
        state.assignments = state.assignments.map((assignment) => {
          if (assignment._id === action.payload._id) {
            return action.payload;
          } else {
            return assignment;
          }
        });
      },
      setAssignment: (state, action) => {
        state.assignment = action.payload;
      },
    },
  });
export const { setAssignment, addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;