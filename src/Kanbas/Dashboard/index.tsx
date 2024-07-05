export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses">
          {/* Course 1 - 1234 */}
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>

            {/* Course 2 - 1235 */}
          <div className="wd-dashboard-course"> 
          <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1235/Home">
                CS1235 Node JS
              </a>
              <p className="wd-dashboard-course-title">
                Backend software developer
              </p>
              <a href="#/Kanbas/Courses/1235/Home"> Go </a>
            </div>
          </div>

            {/* Course 3 - 2456 */}
          <div className="wd-dashboard-course"> 
          <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/2456/Home">
                CS2456 Algorithms
              </a>
              <p className="wd-dashboard-course-title">
                Software developer
              </p>
              <a href="#/Kanbas/Courses/2456/Home"> Go </a>
            </div>
          </div>

            {/* Course 4 - 1239 */}
          <div className="wd-dashboard-course"> 
          <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1239/Home">
                CS1239 Networks
              </a>
              <p className="wd-dashboard-course-title">
                Networks developer
              </p>
              <a href="#/Kanbas/Courses/1239/Home"> Go </a>
            </div>
          </div>

            {/* Course 5 - 1250 */}
          <div className="wd-dashboard-course"> 
          <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1250/Home">
                CS1250 LLM
              </a>
              <p className="wd-dashboard-course-title">
                LLM developer
              </p>
              <a href="#/Kanbas/Courses/1250/Home"> Go </a>
            </div>
          </div>

            {/* Course 6 - 3000 */}
          <div className="wd-dashboard-course"> 
          <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/3000/Home">
                CS3000 Machine Learning
              </a>
              <p className="wd-dashboard-course-title">
                Machine Learning developer
              </p>
              <a href="#/Kanbas/Courses/3000/Home"> Go </a>
            </div>
          </div>

            {/* Course 7 - 2510 */}
          <div className="wd-dashboard-course"> 
          <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/2510/Home">
                CS2510 Blockchain Development
              </a>
              <p className="wd-dashboard-course-title">
                Blockchain developer
              </p>
              <a href="#/Kanbas/Courses/2510/Home"> Go </a>
            </div>
          </div>

        </div>
      </div>
  );
}
  