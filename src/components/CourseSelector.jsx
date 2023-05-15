import React from "react";

const CourseSelector = ({ courses, selectedCourse, handleCourseChange, handleNewCourse }) => {
  return (
    <div className="course-selector">
      <h2 style={{ marginRight: "10px" }}>Select Course:</h2>
      <select value={selectedCourse?.name} onChange={handleCourseChange}>
        {courses.map((c) => (
          <option key={c.id} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>
      <button className="submit-button" onClick={handleNewCourse}>
        New Course
      </button>
    </div>
  );
};

export default CourseSelector;
