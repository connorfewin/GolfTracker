import React from "react";

export default function CourseHeader({ course }) {
    return (
      <thead>
        <tr>
          <th>White</th>
          {course.holes.map((hole) => (
            <th key={`yardage-${hole.number}`}>{hole.yardage}</th>
          ))}
          <th>{course.holes.reduce((acc, hole) => acc + hole.yardage, 0)}</th>
        </tr>
        <tr>
          <th>Hole</th>
          {course.holes.map((hole) => (
            <th key={`number-${hole.number}`}>{hole.number}</th>
          ))}
          <th>Out</th>
        </tr>
        <tr>
          <th>Par</th>
          {course.holes.map((hole) => (
            <th key={`par-${hole.number}`}>{hole.par}</th>
          ))}
          <th>{course.holes.reduce((acc, hole) => acc + hole.par, 0)}</th>
        </tr>
      </thead>
    );
  }
  