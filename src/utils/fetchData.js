export const exerciseOption = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options, limit = 10) => {
  // Add the limit query parameter to the URL
  const urlWithLimit = new URL(url);
  urlWithLimit.searchParams.append("limit", limit);

  const response = await fetch(urlWithLimit, options);
  const data = await response.json();
  return data;
};

// Example usage to fetch 15 endpoints
const url = "your_api_endpoint_here";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

const fetchedData = await fetchData(url, options, 15);
console.log(fetchedData);
