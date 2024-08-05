import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignments: [], 
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
      setAssignments: (state, action) => {
        state.assignments = action.payload;
      },
      addAssignment: (state, action) => {
        state.assignments = [
          ...state.assignments,
          {
            ...action.payload
          }
          
        ] as any;
      },

      deleteAssignment: (state, action) => {
        state.assignments = state.assignments.filter(
          (assignment: any) => assignment._id !== action.payload
        );
      },

      updateAssignment: (state, action) => {
        state.assignments = state.assignments.map((assignment: any) => {
          if (assignment._id === action.payload._id) {
            return action.payload;
          } else {
            return assignment;
          }
        }) as any;
      },
      
    },
  });
export const { addAssignment, deleteAssignment, updateAssignment, setAssignments } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;