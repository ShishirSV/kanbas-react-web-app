import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { addAssignment, updateAssignment } from './reducer';
import { Assignment, AssignmentsState } from './types'

export default function AssignmentEditor() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { aid, cid } = useParams();
  const existingAssignment = useSelector((state: { assignments: AssignmentsState }) =>
    state.assignments.assignments.find((a) => a._id === aid)
  );

  const [assignment, setAssignment] = useState(
    existingAssignment || {
      _id: aid,
      title: '',
      points: 100,
      course: cid,
      description: '',
      dueDate: '',
      availableFromDate: '',
      availableUntilDate: '',
    }
  );

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setAssignment((prevAssignment) => ({
      ...prevAssignment,
      [name]: value
    }));
  };

  const handleSave = () => {
    if (existingAssignment) {
      dispatch(updateAssignment(assignment));
    } else {
      dispatch(addAssignment(assignment));
    }
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  if (!assignment) {
    return (
      <div>
        <h1>Assignment not found</h1>
      </div>
    );}

    return (
      <div id="wd-assignments-editor">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Assignment Name</label>
        <input type="text" className="form-control" id="title" name="title"
               placeholder="New Assignment" value={assignment.title}
               onChange={handleChange}/>
      </div>
      <div className="mb-3">
        <textarea className="form-control" id="description" name="description"
                  placeholder="New Assignment Description"
                  value={assignment.description} onChange={handleChange}/>
      </div>
<div className="mb-3 row">
        <label htmlFor="points" className="col-sm-4 col-form-label text-end">Points</label>
        <div className="col-sm-8">
        <input type="text" className="form-control" id="points" name="points"
               value={assignment.points} onChange={handleChange}/>
        </div>
      </div>
      <div className="mb-3 row">
      <label htmlFor="assign-group"
        className="col-sm-4 col-form-label text-end">
        Assignment Group
      </label>
      <div className="col-sm-8" id="wd-assign-group-dropdown">
      <select className="form-select">
         <option selected>ASSIGNMENT</option>
         <option value="1">One</option>
         <option value="2">Two</option>
         <option value="3">Three</option>
      </select>
      </div>
      </div>
      <div className="mb-3 row">
      <label htmlFor="assign-group"
        className="col-sm-4 col-form-label text-end">
        Display Grade as
      </label>
      <div className="col-sm-8" id="wd-assign-group-dropdown">
      <select className="form-select">
         <option selected>Percentage</option>
         <option value="1">One</option>
         <option value="2">Two</option>
         <option value="3">Three</option>
      </select>
      </div>
      </div>
      <div className="mb-3 row">
      <label htmlFor="assign-group"
        className="col-sm-4 col-form-label text-end">
        Submission Type
      </label>
      <div className="col-sm-8" id="wd-assign-group-dropdown" style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px' }}>
      <select className="form-select">
         <option selected>Online</option>
         <option value="1">One</option>
         <option value="2">Two</option>
         <option value="3">Three</option>
      </select><br></br>
      <h5>Online Entry Options</h5>
      <div className="row mb-3">
        <div className="ccol-sm-8">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" 
                   id="r1" />
            <label className="form-check-label" htmlFor="r1">
              Text Entry </label> <br/><br/>
            <input className="form-check-input" type="checkbox" 
                   id="r2" />
            <label className="form-check-label" htmlFor="r2">
              Media Recordings </label> <br/><br/>
            <input className="form-check-input" type="checkbox" 
                   id="r3" />
            <label className="form-check-label" htmlFor="r3">
              Website URL </label> <br/><br/>
            <input className="form-check-input" type="checkbox" 
                   id="r4" />
            <label className="form-check-label" htmlFor="r4">
              Student Annotation </label> <br/><br/>
            <input className="form-check-input" type="checkbox" 
                   id="r5" />
            <label className="form-check-label" htmlFor="r5">
              File Upload </label> <br/>
          </div> 
        </div>
      </div>
    </div>
  </div>
  <div className="mb-3 row">
  <label htmlFor="assign-group" className="col-sm-4 col-form-label text-end">Assign</label>
  <div className="col-sm-8" id="wd-assign-assign-to" style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px' }}>
    <h5>Assign to</h5>
    <input type="text" className="form-control" id="assign-to" value="Everyone" /><br></br>
    <h5>Due</h5>  
    <input type="datetime-local" className="form-control" id="dueDate" name="dueDate"
               value={assignment.dueDate} onChange={handleChange}/><br/>
    <div className="row">
      <div className="col-sm-6">
        <h5>Available from</h5>
        <input type="datetime-local" className="form-control" id="availableFromDate" name="availableFromDate"
               value={assignment.availableFromDate} onChange={handleChange}/>
      </div>
      <div className="col-sm-6">
        <h5>Until</h5>
        <input type="date" className="form-control" id="availableUntilDate" name="availableUntilDate"
               value={assignment.availableUntilDate} onChange={handleChange}/>
      </div>
    </div>
  </div>
</div>
  <hr />
  <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
  <button id="wd-save-btn" className="btn btn-danger me-1 float-end" onClick={handleSave}>
        Save
      </button>
      </Link>
      <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
      <button id="wd-cancel-btn" className="btn btn-secondary me-1 float-end" onClick={handleCancel}>
        Cancel
      </button>
      </Link>
</div>
  );
}  
  
  