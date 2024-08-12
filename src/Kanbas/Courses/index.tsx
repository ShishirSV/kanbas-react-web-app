import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Grades from "./Grades";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/Table";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import "./index.css";
import Quizzes from "./Quizzes";
import QuizEditor from "./Quizzes/QuizEditor";
import QuizPreview from "./Quizzes/QuizPreview";
import QuizQuestionsEditorWrapper from "./Quizzes/QuizQuestionsEditorWrapper";
// import * as peopleClient from "./People/client";
// import {Course} from "C:/2024/summer/webdev/kanbas-react-web-app/src/types" ;


export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}

      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules/>} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="Grades" element={<Grades/>} />
              <Route path="People" element={<PeopleTable />} />
              <Route path="People/:uid" element={<PeopleTable />} />
              <Route path="Quizzes" element={<Quizzes />} />
              <Route path="Quizzes/:quizId" element={<QuizEditor />} />
              <Route path="Quizzes/:quizId/*" element={<QuizPreview />} />
              <Route path="Quizzes/:quizId/QuizQuestionsEditor" element={<QuizQuestionsEditorWrapper />} />
            </Routes>
        </div>
      </div>
    </div>
  );
}
  