import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { exerciseOption, fetchData } from "../utils/fetchData";
import ExerciseDetail from "../components/ExerciseDetail";
const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      // const youtubeSearchUrl =
      //         "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOption
      );
      setExerciseDetail(exerciseDetailData);

      setExerciseDetail(exerciseDetailData);
    };
    fetchExercisesData();
  }, [id]);
  return (
    <div>
      <ExerciseDetail exerciseDetail={exerciseDetail} />
    </div>
  );
};

export default ExerciseDetails;
