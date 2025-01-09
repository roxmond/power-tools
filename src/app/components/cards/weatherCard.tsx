'use client'
import { WeatherData } from '@/app/api/getWeather';
import Image from 'next/image';

const getBackgroundImage = (icon: string) => {
    const imageMapping: Record<string, string> = {
      '01d': 'url(/clear-sky.png)',
      '01n': 'url(/clear-sky-night.png)',
      '02d': 'url(/few-clouds.png)',
      '02n': 'url(/few-clouds-night.png)',
      '03d': 'url(/few-clouds.png)',
      '03n': 'url(/few-clouds-night.png)',
      '04d': 'url(/few-clouds.png)',
      '04n': 'url(/few-clouds-night.png)',
      '09d': 'url(/rain.png)',
      '09n': 'url(/rain-night.png)',
      '10d': 'url(/rain.png)',
      '10n': 'url(/rain-night.png)',
      '11d': 'url(/thunderstorm.png)',
      '11n': 'url(/thunderstorm.png)',
      '13d': 'url(/snow.png)',
      '13n': 'url(/snow-night.png)',
      '50d': 'url(/mist.png)',
      '50n': 'url(/mist.png)',
    };
    return imageMapping[icon] || 'url(/path/to/defaultBackground.png)'; // Fallback background
  };
  


// WeatherCard component
export default function WeatherCard({ weatherData }: { weatherData: WeatherData }) {
    
    const bgImage = {
        backgroundImage: getBackgroundImage(weatherData.weather[0].icon),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        margin: '12px'
      };

    const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;


  return (
    <div className="flex flex-col w-[93vw] h-auto text-slate-300 rounded-xl sm:w-fit" style={bgImage}>
        <div className='flex w-auto flex-col h-fit justify-between glassphorm items-center sm:flex-row'>
            <div className='flex flex-row'>
                <div className='flex flex-col  p-4 m-4'>
                    
                    <p className='text-4xl text-shadow'>{weatherData.name}</p>
                    
                    
                    <div className='flex flex-row justify-start items-center'>
                    <p className='text-shadow'>{weatherData.weather[0].main}</p>
                    <img src={`${iconUrl}`} alt="Weather Icon" />
                    </div>
                    <p className='text-shadow'>Humidity: {weatherData.main.humidity}%</p>
                    <p className='text-shadow mt-2'>Wind: {weatherData.wind.speed}m/s</p>
                    <p className='text-shadow mt-2'>Clouds: {weatherData.clouds.all}%</p>
                </div>
            </div>

            <div className='flex flex-col w-fit justify-center items-center glass p-2 m-4 text-white'>
            <p className='text-6xl mb-2 text-shadow'>{weatherData.main.temp}°C</p>
            <div className='flex flex-row h-20 w-fit '>  
               <div className='w-16 flex items-end justify-end'>
                    <p className='text-sm text-blue-300 mr-1 text-shadow'>{weatherData.main.temp_min}°C</p>
                </div>
                <div className='w-20 graph'>
                
                </div>
                <div className='w-16 flex items-start justify-start'>
                    <p className='text-sm text-red-300 ml-1 text-shadow'>{weatherData.main.temp_max}°C</p>
                </div>
            </div>
            <p className='text-sm mt-2 text-shadow'>Feels like: {weatherData.main.feels_like}°C</p>
            </div>

            
        </div> 
    </div>
  );
}