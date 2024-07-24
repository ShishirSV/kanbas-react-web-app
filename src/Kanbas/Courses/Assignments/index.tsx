import { FaPlus } from "react-icons/fa6";
import { BsGripVertical } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { IoSearchOutline } from "react-icons/io5";

export default function Assignments() {
    return (
      <div id="wd-assignments">
        <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
      <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>
        <IoSearchOutline className="position-relative" style={{ bottom: "1px" }} />
        <input id="wd-search-assignment"
        placeholder="Search..." /><br/><br/><br/><br/>
        <ul id="wd-modules" className="list-group rounded-0">
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary">
        <BsGripVertical className="me-2 fs-3" />
        <MdArrowDropDown className="me-1 fs-3" />
        ASSIGNMENTS
      </div>
      <ul className="wd-lessons list-group rounded-0">
        <li className="wd-lesson list-group-item p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" />
          <TfiWrite className="wd-fg-color-green me-2 fs-3 " />
          <strong>A1</strong>
          <h6><p className="wd-fg-color-red">
          Multiple Modules
          <span className="wd-fg-color-black">| <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100 pts</span>
          </p></h6>

        </li>
        <li className="wd-lesson list-group-item p-3 ps-1">
          <BsGripVertical className="me-2 fs-3" />
          <TfiWrite className="wd-fg-color-green me-2 fs-3 " />
          <strong>A2</strong>
          <h6><p className="wd-fg-color-red">
          Multiple Modules
          <span className="wd-fg-color-black">| <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59pm | 100 pts</span>
          </p></h6>

        </li>
      </ul>
    </li>
  </ul>
</div>
  );
}
  