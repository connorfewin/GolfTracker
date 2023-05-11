import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import CourseHeader from "./CourseHeader";
import ScoreRow from "./InputScoreRow";
import CourseSelector from "./CourseSelector";
import { fetchAllCourses } from "../api";

const Scorecard = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    const getCourses = async () => {
      const response = await fetchAllCourses();
      console.log("Courses response:", response); // add this line
      setCourses(response);
      setSelectedCourse(response[0]);
    };
    getCourses();
  }, []);

  const handleCourseChange = (event) => {
    const courseName = event.target.value;
    const selected = courses.find((c) => c.name === courseName);
    setSelectedCourse(selected);
  };

  const handleInputChange = (event, holeNumber) => {
    const newScore = parseInt(event.target.value);
    setSelectedCourse((prevCourse) => {
      const updatedHoles = prevCourse.holes.map((hole) => {
        if (hole.number === holeNumber) {
          return { ...hole, score: newScore };
        }
        return hole;
      });
      return { ...prevCourse, holes: updatedHoles };
    });
  };

  function handleNewCourse() {
    navigate('/new-course');
  }

  return (
    <div>
      <CourseSelector
        courses={courses}
        selectedCourse={selectedCourse}
        handleCourseChange={handleCourseChange}
        handleNewCourse={handleNewCourse}
      />
      {selectedCourse && (
        <div>
          <h2>{selectedCourse.name}</h2>
          <table>
            <CourseHeader course={selectedCourse} />
            <ScoreRow
              course={selectedCourse}
              handleInputChange={handleInputChange}
            />
          </table>
          <button className="submit-button">Submit Score</button>
        </div>
      )}
    </div>
  );
};

export default Scorecard;
