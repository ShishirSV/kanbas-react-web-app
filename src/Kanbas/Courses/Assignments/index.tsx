import { useParams } from "react-router";
import AssignmentControlButtons from "./AssignmentControlButtons"
import { VscNotebook } from "react-icons/vsc";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { deleteAssignment, setAssignments } from './reducer';
import { useSelector, useDispatch } from 'react-redux';
import * as client from "./client";
import React, { useEffect } from "react";

export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const courseAssignments = useSelector((state:any) => state.assignments.assignments.filter((a:any) => a.course === cid));

  const fetchAssignments = async () => {
    const assignments = await client.fetchAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);

  const handleAddAssignment = () => {
    const newAssignmentId = new Date().getTime().toString();
    navigate(`/Kanbas/Courses/${cid}/Assignments/${newAssignmentId}`);
  }

  const handleDelete = async(assignmentId: string) => {
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      await client.deleteAssignment(assignmentId);
      dispatch(deleteAssignment(assignmentId));
    }
  };


    return (
      <div id="wd-assignments">
        <input id="wd-search-assignment"
               placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment" onClick={handleAddAssignment}>+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total 
        </h3>
        <ul id="wd-assignment-list">
        {courseAssignments
          .map((assignment:any) => (
            <li className="wd-assignment-list-item" key={assignment._id}>
              <VscNotebook className="wd-assignment-icon" />
              <a className="wd-assignment-link" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                {assignment.title}
              </a>
              <div className="wd-assignment-dates">
                <div className="wd-availability-date">Available: {"07-18-2024"}</div>
                <div className="wd-due-date">Due: {"07-22-2024"}</div>
              </div>
              <div className="wd-control-buttons">
                  <AssignmentControlButtons assignmentId={assignment._id} deleteAssignment={(assignmentId) => {
                    handleDelete(assignmentId);
                  }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
  );
}
  