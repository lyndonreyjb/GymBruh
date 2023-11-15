import { Link } from "react-router-dom";

const WorkoutCard = ({ exercise }) => {
  return (
    <div className="card w-96 shadow-xl">
      <div className="card-body ">
        <Link to={`/${exercise.id}`}>
          <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
          <div className="card-actions justify-end">
            <button className="btn btn-primary">{exercise.bodyPart}</button>
            <button className="btn btn-accent">{exercise.target}</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WorkoutCard;
