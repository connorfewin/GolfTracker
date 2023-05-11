import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CourseHeader from "./CourseHeader";
import ScoreRow from "./InputScoreRow";
import CourseSelector from "./CourseSelector";
import { fetchAllCourses } from "../api";
import "../styles/Date.css";

const Scorecard = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [stats, setStats] = useState([
    { roundId: null, holeId: null, score: null, puts: null, playable2nd: null, greenInReg: null },
    { roundId: null, holeId: null, score: null, puts: null, playable2nd: null, greenInReg: null },
    { roundId: null, holeId: null, score: null, puts: null, playable2nd: null, greenInReg: null },
    { roundId: null, holeId: null, score: null, puts: null, playable2nd: null, greenInReg: null },
    { roundId: null, holeId: null, score: null, puts: null, playable2nd: null, greenInReg: null },
    { roundId: null, holeId: null, score: null, puts: null, playable2nd: null, greenInReg: null },
    { roundId: null, holeId: null, score: null, puts: null, playable2nd: null, greenInReg: null },
    { roundId: null, holeId: null, score: null, puts: null, playable2nd: null, greenInReg: null },
    { roundId: null, holeId: null, score: null, puts: null, playable2nd: null, greenInReg: null },
  ]);
  

  useEffect(() => {
    const getCoursesAndSetStats = async () => {
      const response = await fetchAllCourses();
      console.log("Courses response:", response);
      setCourses(response);
      setSelectedCourse(response[0]);

      // wait for the response from fetchAllCourses before setting the stats
      const statsWithHoleIds = response[0].holes.map((hole) => ({
        holeId: hole.id,
        score: null,
        puts: null,
        playable2nd: null,
        greenInReg: null,
      }));
      setStats(statsWithHoleIds);
      console.log("Stats with holeIds: ", statsWithHoleIds);
    };

    getCoursesAndSetStats();
  }, []);

  const handleCourseChange = (event) => {
    const courseName = event.target.value;
    const selected = courses.find((c) => c.name === courseName);
    setSelectedCourse(selected);
  };

  const handleScoreChange = (event, holeNumber) => {
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
    navigate("/new-course");
  }

  const handleSubmit = () => {};
  return (
    <div>
      <CourseSelector
        courses={courses}
        selectedCourse={selectedCourse}
        handleCourseChange={handleCourseChange}
        handleNewCourse={handleNewCourse}
      />
      {selectedCourse && (
        <div className="scorecard">
          <h2>{selectedCourse.name}</h2>
          <form>
            <div className="date-picker">
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                value={selectedDate}
                onChange={(event) => setSelectedDate(event.target.value)}
              />
            </div>
            <table>
              <CourseHeader course={selectedCourse} />
              <ScoreRow
                course={selectedCourse}
                handleInputChange={handleScoreChange}
              />
            </table>
            <button className="submit-button">Submit Score</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Scorecard;
