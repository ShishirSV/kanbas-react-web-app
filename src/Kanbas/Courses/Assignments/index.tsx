import { VscNotebook } from "react-icons/vsc";
import LessonControlButtons from "../Modules/LessonControlButtons";
import "./index.css";

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <input id="wd-search-assignment" placeholder="Search for Assignments" />
            <button id="wd-add-assignment-group">+ Group</button>
            <button id="wd-add-assignment">+ Assignment</button>
            <h3 id="wd-assignments-title">
                ASSIGNMENTS <span className="wd-percentage">40% of Total</span> <button>+</button>
            </h3>
            <ul id="wd-assignment-list">
                <li className="wd-assignment-list-item">
                    <div className="wd-assignment-header">
                        <VscNotebook className="wd-assignment-icon" />
                        <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                            A1
                        </a>
                        <div className="wd-control-buttons">
                            <LessonControlButtons />
                        </div>
                    </div>
                    <div className="wd-assignment-details">
                        <span className="wd-multiple-modules">Multiple Modules</span> | <span className="wd-bold-text">Not available until</span> May 6 at 12:00am |
                        <br />
                        <span className="wd-bold-text">Due</span> May 13 at 11:59pm | 100 pts
                    </div>
                </li>
                <li className="wd-assignment-list-item">
                    <div className="wd-assignment-header">
                        <VscNotebook className="wd-assignment-icon" />
                        <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/124">
                            A2
                        </a>
                        <div className="wd-control-buttons">
                            <LessonControlButtons />
                        </div>
                    </div>
                    <div className="wd-assignment-details">
                        <span className="wd-multiple-modules">Multiple Modules</span> | <span className="wd-bold-text">Not available until</span> May 13 at 12:00am |
                        <br />
                        <span className="wd-bold-text">Due</span> May 20 at 11:59pm | 100 pts
                    </div>
                </li>
                <li className="wd-assignment-list-item">
                    <div className="wd-assignment-header">
                        <VscNotebook className="wd-assignment-icon" />
                        <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/125">
                            A3
                        </a>
                        <div className="wd-control-buttons">
                            <LessonControlButtons />
                        </div>
                    </div>
                    <div className="wd-assignment-details">
                        <span className="wd-multiple-modules">Multiple Modules</span> | <span className="wd-bold-text">Not available until</span> May 20 at 12:00am |
                        <br />
                        <span className="wd-bold-text">Due</span> May 27 at 11:59pm | 100 pts
                    </div>
                </li>
            </ul>
        </div>
    );
}