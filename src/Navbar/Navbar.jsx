import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{
        width: '100%',
        padding: '1rem 0',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        top: 0,
        left: 0,
        zIndex: 1000
      }}
    >
      <div className="container">


        <Link className="navbar-brand fw-bold" to="/">
          <span style={{ color: "#D19C97" }}>React</span>
          &nbsp;
          <span style={{ color: "black" }}>Assignments</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
        

            <li className="nav-item"  onMouseEnter={(e) => e.target.style.color = "red"} onMouseLeave={(e) => e.target.style.color = "black"}>
              <Link className="nav-link fw-semibold" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/Quiz">Quiz</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/QuizWithArray">Quiz With Array</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/PlanetsWithArray">Planets Array</Link>
            </li>

         
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/feedback">Feedback Form</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/todo">To-Do List</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/word-count">Letter & Word Count</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/props-demo">Props</Link>
            </li>

          </ul>
        </div>

       
        <Link to="/logout" className="btn btn-danger ms-3">
          <i className="fas fa-sign-out-alt"></i>Logout
        </Link>

      </div>
    </nav>
  );
}






// import React from 'react';
// import { Link } from 'react-router-dom'; 

// export default function Navbar() {
//   return (
//     <div>
//       <nav className="nav bg-dark justify-content-center w-100 py-2" >
//         <Link className="nav-link active text-white" to="/" aria-current="page">Home</Link>
//         <Link className="nav-link text-white" to="/Quiz">Quiz</Link>
//         <Link className="nav-link text-white" to="/QuizWithArray">Quiz with Array</Link>
//         <Link className="nav-link text-white" to="/blog">Blog</Link>
//         <Link className="nav-link text-white" to="/pp">Privacy Policy</Link>
//         <Link className="nav-link text-white" to="/NewPolicy">New Policy</Link>
//         <Link className="nav-link text-white" to="/Events">Events</Link>
//         <Link className="nav-link text-white" to="/StateMangement">StateMangement</Link>
//         <Link className="nav-link text-white" to="/Marksheet">Marksheet</Link>



//       </nav>
//     </div>
//   );
// }
