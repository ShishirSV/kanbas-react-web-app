export interface Assignment {
    _id: string;
    title: string;
    course: string;
    points: number;
    description: string;
    dueDate: string;
    availableFromDate: string;
    availableUntilDate: string;
  }
  
  export interface AssignmentsState {
    assignments: Assignment[];
    assignment: Assignment;
  }