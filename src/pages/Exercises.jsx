import { useState } from "react";
import { Search } from "../components";
import WorkoutCard from "../components/WorkoutCard";
import landing from "../assets/gym.jpg";
const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  console.log(exercises);
  return (
    <div>
      <img src={landing} alt="workout" className="object-cover h-96 w-full" />

      <div className="mt-5">
        <Search
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </div>
      <div id="exercises" className="max-w-7xl mx-auto">
        <h1>Showing Results</h1>
        <div>
          {exercises.map((exercise, index) => (
            <WorkoutCard key={index} exercise={exercise} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exercises;
