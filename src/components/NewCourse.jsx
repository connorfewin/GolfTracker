import React, { useState } from "react";
import "../styles/Scorecard.css";
import { createGolfCourse,fetchAllCourses } from "../api";

const NewCourse = () => {
  const [courseName, setCourseName] = useState("Oak Forest");
  const [courseNameError, setCourseNameError] = useState(false);
  const [holeCount, setHoleCount] = useState(9);
  const [holes, setHoles] = useState([
    { number: 1, par: null, handicap: null, yardage: null },
    { number: 2, par: null, handicap: null, yardage: null },
    { number: 3, par: null, handicap: null, yardage: null },
    { number: 4, par: null, handicap: null, yardage: null },
    { number: 5, par: null, handicap: null, yardage: null },
    { number: 6, par: null, handicap: null, yardage: null },
    { number: 7, par: null, handicap: null, yardage: null },
    { number: 8, par: null, handicap: null, yardage: null },
    { number: 9, par: null, handicap: null, yardage: null },
  ]);
  const handleNameChange = async (event) => {
    const courseName = event.target.value;
    setCourseName(courseName);
    const courses = await fetchAllCourses();
    const courseNames = courses.map((course) => course.name);
    if (courseNames.includes(courseName)) {
      setCourseNameError(true);
    } else {
      setCourseNameError(false);
    }
  };

  const handleHoleCountChange = (event) => {
    setHoleCount(parseInt(event.target.value));
  };

  const handleYardageChange = (event, holeNumber) => {
    const newHoles = [...holes];
    const holeIndex = newHoles.findIndex((hole) => hole.number === holeNumber);
    newHoles[holeIndex] = {
      ...newHoles[holeIndex],
      yardage: parseInt(event.target.value),
    };
    setHoles(newHoles);
  };

  const handleParChange = (event, holeNumber) => {
    const newHoles = [...holes];
    const holeIndex = newHoles.findIndex((hole) => hole.number === holeNumber);
    newHoles[holeIndex] = {
      ...newHoles[holeIndex],
      par: parseInt(event.target.value),
    };
    setHoles(newHoles);
  };

  const handleHandicapChange = (event, holeNumber) => {
    const newHoles = [...holes];
    const holeIndex = newHoles.findIndex((hole) => hole.number === holeNumber);
    newHoles[holeIndex] = {
      ...newHoles[holeIndex],
      handicap: parseInt(event.target.value),
    };
    setHoles(newHoles);
  };

  const handleSubmit = () => {
    const hasNullValues = holes.some(hole => hole.par === null || hole.handicap === null || hole.yardage === null);
    
    if (hasNullValues) {
      console.log('Error: Null values in holes');
    } else if (courseNameError) {
      console.log('Error: Course name is invalid');
    } else {
      console.log('Create Course');
      createGolfCourse(courseName, holes);
    }
  };
  
  

  return (
    <div>
      <h2>Create a New Golf Course</h2>
      <div className="course-info">
        <label>Course Name:</label>
        <input
          type="text"
          value={courseName}
          onChange={handleNameChange}
          required
        />
        <label>Hole Count:</label>
        <select value={holeCount} onChange={handleHoleCountChange}>
          <option value={9}>9 Holes</option>
          <option value={18}>18 Holes</option>
        </select>
      </div>
      {courseNameError && <p style={{ color: "red" }}>Course name already exists</p>}
      <table>
        <thead>
          <tr>
            <th>White</th>
            {holes.map((hole) => (
              <th key={`yardage-${hole.number}`}>
                <input
                  type="number"
                  min="0"
                  value={hole.yardage}
                  onChange={(e) => handleYardageChange(e, hole.number)}
                  style={{ width: "50px", textAlign: "center" }}
                />
              </th>
            ))}
            <th>{holes.reduce((acc, hole) => acc + hole.yardage, 0)}</th>
          </tr>
          <tr>
            <th>Hole</th>
            {holes.map((hole) => (
              <th key={`number-${hole.number}`}>{hole.number}</th>
            ))}
            <th>Out</th>
          </tr>
          <tr>
            <th>Par</th>
            {holes.map((hole) => (
              <th key={`par-${hole.number}`}>
                <input
                  type="number"
                  min="0"
                  value={hole.par}
                  onChange={(e) => handleParChange(e, hole.number)}
                  style={{ width: "50px", textAlign: "center" }}
                />
              </th>
            ))}
            <th>{holes.reduce((acc, hole) => acc + hole.par, 0)}</th>
          </tr>
          <tr>
            <th>Handicap</th>
            {holes.map((hole) => (
              <th key={`handicap-${hole.number}`}>
                <input
                  type="number"
                  min="0"
                  value={hole.handicap}
                  onChange={(e) => handleHandicapChange(e, hole.number)}
                  style={{ width: "50px", textAlign: "center" }}
                />
              </th>
            ))}
            <th></th>
          </tr>
        </thead>
      </table>
      <button className="submit-button" onClick={handleSubmit}>Submit Score</button>
    </div>
  );
};

export default NewCourse;
