import React, { useState } from "react";
import OakForest from '../courses/Weschott_OakForest.json';
import '../styles/Scorecard.css'

const Scorecard = () => {
    const [course, setCourse] = useState(OakForest);
    const handleInputChange = (event, holeNumber) => {
        const newScore = parseInt(event.target.value);
        setCourse(prevState => {
          const updatedHoles = prevState.holes.map(hole => {
            if (hole.number === holeNumber) {
              return { ...hole, score: newScore };
            }
            return hole;
          });
          return { ...prevState, holes: updatedHoles };
        });
    }

    return (
      <div>
        <h2>{course.name}</h2>
        <table>
          <thead>
            <tr>
              <th>White</th>
              {course.holes.map((hole) => (
                <th key={`yardage-${hole.number}`}>{hole.yardage}</th>
              ))}
              <th></th>
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
        </table>
        <button className="submit-button">Submit Score</button>
      </div>
    );
      
}

export default Scorecard;
