import React from "react";
import { Link } from "react-router-dom";

const Exercise = props => {
  return (
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.substring(0, 10)}</td>
      <td>
        <Link
          to={"/edit/" + props.exercise._id}
          className="btn btn-info btn-sm"
        >
          Edit
        </Link>{" "}
        |{" "}
        <button
          onClick={() => {
            props.deleteExercise(props.exercise._id);
          }}
          className="btn btn-info btn-sm"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Exercise;