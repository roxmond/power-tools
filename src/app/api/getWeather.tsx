import axios from "axios";

export interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  weather: {
    main: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
  clouds: {
    all: number;
  };
}

const API = process.env.NEXT_PUBLIC_WEATHER;

const getWeather = async (city: string): Promise<WeatherData | null> => {
  try {
    const response = await axios.get<WeatherData>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`
    );
    const data = response.data;
    data.main.temp = Math.round(data.main.temp);
    data.main.feels_like = Math.round(data.main.feels_like);
    data.main.temp_min = Math.round(data.main.temp_min);
    data.main.temp_max = Math.round(data.main.temp_max);

    return data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
};

export default getWeather;
