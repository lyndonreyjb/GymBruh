import { useEffect, useState } from "react";
import { exerciseOption, fetchData } from "../utils/fetchData";
import Categories from "./Categories";
import Loading from "./Loading";
const Search = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Inside the useEffect hook
  useEffect(() => {
    const fetchExcerData = async () => {
      try {
        setLoading(true); // Set loading to true before fetching data
        const bodyPartsData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          exerciseOption
        );
        setBodyParts(["all", ...bodyPartsData]);
      } catch (error) {
        console.error("Error fetching body parts:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching data (whether successful or not)
      }
    };
    fetchExcerData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOption
      );

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <div className=" mx-auto">
      {loading ? (
        // Render loader while data is still fetching
        <Loading />
      ) : (
        // Render search input and categories once data is fetched
        <>
          <Categories
            bodyParts={bodyParts}
            setBodyPart={setBodyPart}
            bodyPart={bodyPart}
          />

          <div className="max-w-2xl mx-auto mt-5  p-2">
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20">
                  <path
                    stroke="currentColor"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                type="text"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  outline-none"
                placeholder="Search Workouts"
                required
              />
              <button
                type="submit"
                onClick={handleSearch}
                className="text-white absolute end-2.5 bottom-2.5 bg-primary hover:bg-green-600 font-medium rounded-lg text-sm px-4 py-2 ">
                Search
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
