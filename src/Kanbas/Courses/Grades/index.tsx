import { IoSettingsSharp } from "react-icons/io5";
import { TbFileImport } from "react-icons/tb";
import { TbFileExport } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";
import React, { useState } from 'react';

export default function ModulesControls() {
  const [grades, setGrades] = useState({
    janeAdamsA4: '66.22%',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGrades({ ...grades, janeAdamsA4: e.target.value });
  };
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-3 float-end">
        <IoSettingsSharp className="position-relative me-2" style={{ bottom: "1px" }} />
      </button>
      <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-3 float-end">
        <TbFileExport className="position-relative" style={{ bottom: "1px" }} />
        Export
        <IoIosArrowDown className="position-relative" style={{ bottom: "1px" }} />
      </button>
      <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-3 float-end">
        <TbFileImport className="position-relative me-2" style={{ bottom: "1px" }} />
        Import
      </button><br /><br /><br /><br />
    <div className="row">
      <div className="col-5 mb-3">
        <label className="from label">
          <strong>Student Names</strong></label>
          <div className="input-group mb-3">
            <span className="input-group-text mb-3"><IoSearchOutline className="position-relative" style={{ bottom: "1px" }} /></span>
            <input
              type="text"
              placeholder="Search Students"
            />
          </div>
      </div>
      <div className="col-5 mb-3">
        <label className="from label">
          <strong>Assignment Names</strong>
        </label>
        <div className="input-group mb-3">
          <span className="input-group-text mb-3"><IoSearchOutline className="position-relative" style={{ bottom: "1px" }} /></span>
          <input
            type="text"
            placeholder="Search Assignments"
          />
        </div>
      </div>
    </div>
    
    
    <button className="btn btn-lg btn-secondary text-start">
        <FiFilter className="me-2 fs-5" />
        Apply Filters
      </button><br /><br />
      <div id="wd-grades-tables">
      <table className="table">
        <thead>
          <tr className="table-secondary"><th scope="col">Student Name</th><th>A1 SETUP Out of 100</th><th>A2 HTML Out of 100</th><th>A3 CSS Out of 100</th><th>A4 BOOTSTRAP Out of 100</th></tr>
        </thead>
        <tbody>
          <tr className="table-white"><td>Jane Adams</td><td>100%</td><td>96.67%</td><td>92.18%</td><td><input
                type="text"
                value={"66.22%"}
                onChange={handleInputChange}
                className="form-control"
              /></td></tr>
          <tr className="table-secondary"><td>Christina Allen</td><td>100%</td><td>100%</td><td>100%</td><td>90%</td></tr>
          <tr className="table-white"><td>Samreen Ansari</td><td>100%</td><td>100%</td><td>100%</td><td>90%</td></tr>
          <tr className="table-secondary"><td>Han Bao</td><td>100%</td><td>100%</td><td>100%</td><td>100%</td></tr>
          <tr className="table-white"><td>Mahi Sai Srinivas Bobbili</td><td>100%</td><td>96.67%</td><td>98.37%</td><td>100%</td></tr>
          <tr className="table-secondary"><td>Siran Cao</td><td>100%</td><td>100%</td><td>100%</td><td>100%</td></tr>
        </tbody>
      </table>
    </div>
    </div>
    
  );
}