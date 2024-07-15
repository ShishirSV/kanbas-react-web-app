export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {/* Course 1 - 1234 */}
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1234/Home">
                  <img src="/images/reactjs.jpg" width="100%" alt="course-image"/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS1234 React JS
                    </h5>
                    <p className="card-text">
                        Full Stack software developer
                      </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </a>
              </div>
            </div>


            {/* Course 2 - 1235 */}
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1235/Home">
                  <img src="/images/reactjs.jpg" width="100%" alt="course-image"/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS1235 Node JS
                    </h5>
                    <p className="card-text">
                        Software developer
                      </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </a>
              </div>
            </div>

            {/* Course 3 - 2456 */}
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/2456/Home">
                  <img src="/images/reactjs.jpg" width="100%" alt="course-image"/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS2456 Networks
                    </h5>
                    <p className="card-text">
                        Software developer
                      </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </a>
              </div>
            </div>

            {/* Course 4 - 1239 */}
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1239/Home">
                  <img src="/images/reactjs.jpg" width="100%" alt="course-image"/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS1239 Algorithms
                    </h5>
                    <p className="card-text">
                        Software developer
                      </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </a>
              </div>
            </div>

            {/* Course 5 - 1250 */}
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1250/Home">
                  <img src="/images/reactjs.jpg" width="100%" alt="course-image"/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS1250 Blockchain
                    </h5>
                    <p className="card-text">
                        Software developer
                      </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </a>
              </div>
            </div>

            {/* Course 6 - 3000 */}
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/3000/Home">
                  <img src="/images/reactjs.jpg" width="100%" alt="course-image"/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS3000 Database
                    </h5>
                    <p className="card-text">
                        Software developer
                      </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </a>
              </div>
            </div>

            {/* Course 7 - 2510
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card">
                <a className="wd-dashboard-course-link text-decoration-none text-dark"
                  href="#/Kanbas/Courses/1234/Home">
                  <img src="/images/reactjs.jpg" width="100%" alt="course-image"/>
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS1234 React JS
                    </h5>
                    <p className="card-text">
                        Full Stack software developer
                      </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </a>
              </div>
            </div> */}



          </div>
        </div>
      </div>
  );
}
  