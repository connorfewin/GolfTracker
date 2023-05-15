import React from "react";

export default function CourseHeader({ course }) {
    return (
      <thead>
        <tr className="white">
          <th>White</th>
          {course.holes.map((hole) => (
            <th key={`white-${hole.number}`}>{hole.white}</th>
          ))}
          <th>{course.holes.reduce((acc, hole) => acc + hole.white, 0)}</th>
        </tr>
        <tr className="hole">
          <th>Hole</th>
          {course.holes.map((hole) => (
            <th key={`number-${hole.number}`}>{hole.number}</th>
          ))}
          <th>Out</th>
        </tr>
        <tr className="par">
          <th>Par</th>
          {course.holes.map((hole) => (
            <th key={`par-${hole.number}`}>{hole.par}</th>
          ))}
          <th>{course.holes.reduce((acc, hole) => acc + hole.par, 0)}</th>
        </tr>
      </thead>
    );
  }
  