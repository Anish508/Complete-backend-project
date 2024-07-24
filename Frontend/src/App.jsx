import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [courses, setCourse] = useState([]);

  useEffect(() => {
    axios
      .get("/api/course")
      .then((response) => {
        setCourse(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <h1>Complete Backend with frontend</h1>
      <p>Course : {courses.length}</p>

      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.course_name}</h3>
          <h3>{course.course_price}</h3>
        </div>
      ))}
    </>
  );
}

export default App;
