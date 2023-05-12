import React from "react";

export default function SelectStatsRow({ type, course, stats, handleChange }) {
  let label, reduceFunction;

  switch (type) {
    case "playable2nd":
      label = "Playable 2nd";
      reduceFunction = (acc, stat) => acc + (stat.playable2nd ? 1 : 0);
      break;
    case "greensInReg":
      label = "Greens in Reg";
      reduceFunction = (acc, stat) => acc + (stat.greensInReg ? 1 : 0);
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
              type="checkbox"
              checked={stats.find((stat) => stat.holeId === hole.id)?.[type] || false}
              onChange={(event) => handleChange(event, hole.id, type)}
            />
          </td>
        ))}
        <td>{stats.reduce(reduceFunction, 0)}</td>
      </tr>
    </tbody>
  );
}
