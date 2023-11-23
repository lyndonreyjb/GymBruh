import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { exerciseOption, fetchData, youtubeOption } from "../utils/fetchData";
import ExerciseDetail from "../components/ExerciseDetail";
import YoutubeVideos from "../components/YoutubeVideos";
const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseYoutube, setExerciseYoutubeVideo] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOption
      );
      setExerciseDetail(exerciseDetailData);
      //

      const exerciseYoutube = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercises`,
        youtubeOption
      );
      setExerciseYoutubeVideo(exerciseYoutube.contents);
    };
    fetchExercisesData();
  }, [id]);

  return (
    <div className="max-w-6xl py-20 mx-auto">
      <ExerciseDetail exerciseDetail={exerciseDetail} />
      <YoutubeVideos
        exerciseYoutube={exerciseYoutube}
        name={exerciseDetail.name}
      />
    </div>
  );
};

export default ExerciseDetails;
