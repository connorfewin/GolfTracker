import React from "react";

export default function ScoreRow({ course, handleInputChange }) {
    return (
      <tbody>
        <tr>
          <td>Score</td>
          {course.holes.map((hole) => (
            <td key={`score-${hole.number}`}>
              <input 
                type="number" 
                min="0" 
                max="10" 
                value={hole.score || ""} 
                onChange={(event) => handleInputChange(event, hole.number)}
                style={{ width: "50px", textAlign: "center" }}
              />
            </td>
          ))}
          <td>{course.holes.reduce((acc, hole) => acc + hole.score, 0)}</td>
        </tr>
      </tbody>
    );
  }
  