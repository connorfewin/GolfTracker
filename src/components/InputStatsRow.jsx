import React from "react";

export default function InputStatsRow({ type, course, stats, handleChange }) {
  let label, inputMin, inputMax, reduceFunction;

  switch (type) {
    case "score":
      label = "Score";
      inputMin = 0;
      inputMax = 10;
      reduceFunction = (acc, stat) => acc + stat.score;
      break;
    case "putts":
      label = "Putts";
      inputMin = 0;
      inputMax = 99;
      reduceFunction = (acc, stat) => acc + stat.putts;
      break;
    default:
      throw new Error(`Invalid type: ${type}`);
  }

  return (
    <tbody>
      <tr>
        <td>{label}</td>
        {course.holes.map((hole) => (
          <td key={`score-${hole.number}`}>
            <input
              type="number"
              min={inputMin}
              max={inputMax}
              value={stats.find((stat) => stat.holeId === hole.id)?.[type] || ""}
              onChange={(event) => handleChange(event, hole.id, type)}
              style={{ width: "50px", textAlign: "center" }}
            />
          </td>
        ))}
        <td>{stats.reduce(reduceFunction, 0)}</td>
      </tr>
    </tbody>
  );
}
