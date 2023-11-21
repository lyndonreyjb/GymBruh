import axios from "axios";

export const exerciseOption = {
  method: "GET",
  params: { limit: "100" },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    // Handle error if needed
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error to be handled by the calling code
  }
};
