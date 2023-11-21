import { useEffect, useState } from "react";
import { Search } from "../components";
import { exerciseOption, fetchData } from "../utils/fetchData";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import WorkoutCard from "../components/WorkoutCard";

const Exercises = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(9);
  const imageUrl =
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  //fetch data

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOption
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOption
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (!currentExercises.length) return <Loading />;
  return (
    <div>
      <img src={imageUrl} alt="workout" className="object-cover h-96 w-full" />

      <div className="mt-5 p-2">
        <Search
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </div>
      <div
        id="exercises"
        className="max-w-7xl mx-auto flex flex-col items-center py-20 ">
        <h1 className="text-2xl font-bold mb-4 ">Showing Results</h1>
        <div className="flex flex-wrap gap-4 justify-center ">
          {currentExercises.map((exercise, id) => (
            <WorkoutCard key={id} exercise={exercise} />
          ))}
        </div>
        <Pagination
          totalItems={exercises.length}
          itemsPerPage={exercisesPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Exercises;
