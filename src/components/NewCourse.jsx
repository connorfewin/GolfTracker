import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NewCourseInfo from "./NewCourseInfo";
import "../styles/Scorecard.css";
import "../styles/BackButton.css";
import { createGolfCourse, fetchAllCourses } from "../api";

const NewCourse = () => {
  const navigate = useNavigate();
  const [courseName, setCourseName] = useState("");
  const [courseNameError, setCourseNameError] = useState(false);
  const [holeCount, setHoleCount] = useState(9);
  const [holes, setHoles] = useState([
    {
      number: 1,
      par: null,
      handicap: null,
      black: null,
      blue: null,
      white: null,
    },
    {
      number: 2,
      par: null,
      handicap: null,
      black: null,
      blue: null,
      white: null,
    },
    {
      number: 3,
      par: null,
      handicap: null,
      black: null,
      blue: null,
      white: null,
    },
    {
      number: 4,
      par: null,
      handicap: null,
      black: null,
      blue: null,
      white: null,
    },
    {
      number: 5,
      par: null,
      handicap: null,
      black: null,
      blue: null,
      white: null,
    },
    {
      number: 6,
      par: null,
      handicap: null,
      black: null,
      blue: null,
      white: null,
    },
    {
      number: 7,
      par: null,
      handicap: null,
      black: null,
      blue: null,
      white: null,
    },
    {
      number: 8,
      par: null,
      handicap: null,
      black: null,
      blue: null,
      white: null,
    },
    {
      number: 9,
      par: null,
      handicap: null,
      black: null,
      blue: null,
      white: null,
    },
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

  const handleYardageChange = (event, teeColor, holeNumber) => {
    const newHoles = [...holes];
    const holeIndex = newHoles.findIndex((hole) => hole.number === holeNumber);
    newHoles[holeIndex] = {
      ...newHoles[holeIndex],
      [teeColor]: parseInt(event.target.value),
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
    const hasNullValues = holes.some(
      (hole) =>
        hole.par === null || hole.handicap === null || hole.white === null
    );

    if (hasNullValues) {
      console.log("Error: Null values in holes");
    } else if (courseNameError) {
      console.log("Error: Course name is invalid");
    } else {
      console.log("Create Course");
      createGolfCourse(courseName, holes);
    }
  };

  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div>
      <h2>Create a New Golf Course</h2>
      <button className="back-button" onClick={handleClick}>
        <i className="fa fa-arrow-left"></i>
        Go back
      </button>

      <NewCourseInfo
        courseName={courseName}
        handleNameChange={handleNameChange}
        holeCount={holeCount}
        handleHoleCountChange={handleHoleCountChange}
      />
      {courseNameError && (
        <p style={{ textAlign: "center", color: "red" }}>
          Course name already exists
        </p>
      )}
      <table>
        <thead>
          <tr className="black">
            <th>Black</th>
            {holes.map((hole) => (
              <th key={`black-${hole.number}`}>
                <input
                  type="number"
                  min="0"
                  value={hole.black}
                  onChange={(e) => handleYardageChange(e, "black", hole.number)}
                  style={{ width: "50px", textAlign: "center" }}
                />
              </th>
            ))}
            <th>{holes.reduce((acc, hole) => acc + hole.black, 0)}</th>
          </tr>
          <tr className="blue">
            <th>Blue</th>
            {holes.map((hole) => (
              <th key={`blue-${hole.number}`}>
                <input
                  type="number"
                  min="0"
                  value={hole.blue}
                  onChange={(e) => handleYardageChange(e, "blue", hole.number)}
                  style={{ width: "50px", textAlign: "center" }}
                />
              </th>
            ))}
            <th>{holes.reduce((acc, hole) => acc + hole.blue, 0)}</th>
          </tr>
          <tr className="white">
            <th>White</th>
            {holes.map((hole) => (
              <th key={`white-${hole.number}`}>
                <input
                  type="number"
                  min="0"
                  value={hole.white}
                  onChange={(e) => handleYardageChange(e, "white", hole.number)}
                  style={{ width: "50px", textAlign: "center" }}
                />
              </th>
            ))}
            <th>{holes.reduce((acc, hole) => acc + hole.white, 0)}</th>
          </tr>
          <tr className="hole">
            <th>Hole</th>
            {holes.map((hole) => (
              <th key={`number-${hole.number}`}>{hole.number}</th>
            ))}
            <th>Out</th>
          </tr>
          <tr className="par">
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
          <tr className="handicap">
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
      <div className="create-course">
        <button className="submit-button" onClick={handleSubmit}>
          Create Course
        </button>
      </div>
    </div>
  );
};

export default NewCourse;
