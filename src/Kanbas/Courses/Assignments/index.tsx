import { assignments } from "../../Database";
import { useParams } from "react-router";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { VscNotebook } from "react-icons/vsc";
import "./index.css";

export default function Assignments() {
  const { cid } = useParams();
  const courseAssignments = assignments.filter((assignment) => assignment.course === cid);

    return (
      <div id="wd-assignments">
        <input id="wd-search-assignment"
               placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        <ul id="wd-assignment-list">
        {courseAssignments
          .map((assignment) => (
            <li className="wd-assignment-list-item" key={assignment._id}>
              <VscNotebook className="wd-assignment-icon" />
              <a className="wd-assignment-link" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                {assignment.title}
              </a>
              <div className="wd-control-buttons">
                  <LessonControlButtons />
              </div>
            </li>
          ))}
        </ul>
      </div>
  );
}
  