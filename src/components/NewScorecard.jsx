import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CourseHeader from "./CourseHeader";
import InputStatsRow from "./InputStatsRow";
import SelectStatsRow from "./SelectStatsRow";
import CourseSelector from "./CourseSelector";
import { fetchAllCourses } from "../api";
import "../styles/Date.css";

const Scorecard = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const getCoursesAndSetStats = async () => {
      const response = await fetchAllCourses();
      console.log("Courses response:", response);
      setCourses(response);
      setSelectedCourse(response[0]);

      // Create the stats array based on the response from fetchAllCourses
      const statsWithHoleIds = response[0].holes.map((hole) => ({
        holeId: hole.id,
        score: null,
        putts: null,
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

  const handleChange = (event, holeId, statName) => {
    const newValue =
      statName === "playable2nd" || statName === "greensInReg"
        ? event.target.checked
        : parseInt(event.target.value);
    console.log("NEW VALUE", newValue);
    setStats((prevStats) => {
      const updatedStats = prevStats.map((stat) => {
        if (stat.holeId === holeId) {
          return { ...stat, [statName]: newValue };
        }
        return stat;
      });
      console.log("Updated Stats: ", updatedStats);
      return updatedStats;
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
              <InputStatsRow
                type="score"
                course={selectedCourse}
                stats={stats}
                handleChange={handleChange}
              />
              <InputStatsRow
                type="putts"
                course={selectedCourse}
                stats={stats}
                handleChange={handleChange}
              />
              <SelectStatsRow
                type="playable2nd"
                course={selectedCourse}
                stats={stats}
                handleChange={handleChange}
              />
              <SelectStatsRow
                type="greensInReg"
                course={selectedCourse}
                stats={stats}
                handleChange={handleChange}
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
