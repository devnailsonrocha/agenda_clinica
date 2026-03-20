import axios from "axios";

export async function getWeather() {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather?q=Salvador&appid=API_KEY"
  );
  return response.data;
}