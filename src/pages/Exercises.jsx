import { useState } from "react";
import { Search } from "../components";
import WorkoutCard from "../components/WorkoutCard";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  const imageUrl =
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  console.log(exercises);
  return (
    <div>
      <img src={imageUrl} alt="workout" className="object-cover h-96 w-full" />

      <div className="mt-5">
        <Search
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </div>
      <div
        id="exercises"
        className="max-w-7xl mx-auto flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Showing Results</h1>
        <div className="flex flex-wrap gap-4 ">
          {exercises.map((exercise, index) => (
            <WorkoutCard key={index} exercise={exercise} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exercises;
