import React from "react";

export default function CourseInfo(props) {
    const { courseName, handleNameChange, holeCount, handleHoleCountChange } = props;
  
    return (
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
    );
  }
  