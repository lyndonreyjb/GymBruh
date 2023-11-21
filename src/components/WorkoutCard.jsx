import { Link } from "react-router-dom";

const WorkoutCard = ({ exercise }) => {
  return (
    <Link
      className="card sm:w-96 w-auto shadow-xl sm:m-0 ml-2 mr-2"
      to={`/exercise/${exercise.id}`}>
      <div className="card-body ">
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />

        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-primary">
            {exercise.bodyPart}
          </button>
          <button className="btn btn-outline btn-accent">
            {exercise.target}
          </button>
        </div>
        <h2 className="text-black mt-4 font-semibold text-2xl capitalize">
          {exercise.name}
        </h2>
      </div>
    </Link>
  );
};

export default WorkoutCard;
