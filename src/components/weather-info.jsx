import { DropletIcon, WindIcon } from "./icons";
import PropTypes from 'prop-types';

function WeatherInfo({ city, icon, description, temperature, humidity, windSpeed }) {
  return (
    <div>
      <div>
        <h5 className="text-3xl text-white text-center pt-6">{city}</h5>
      </div>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
        alt=""
        className="mx-auto"
      />
      <h2 className="text-7xl text-center font-black flex items-start justify-center text-white">
        {temperature}
        <span className="text-2xl font-bold">°C</span>
      </h2>
      <h5 className="text-xl text-center first-letter:capitalize mt-2 mb-12 font-medium text-white uppercase">
        {description}
      </h5>
      <div className="flex justify-between px-4 gap-x-4">
        <div className="w-1/2 flex gap-x-2 items-center">
          <DropletIcon />
          <div className="flex flex-col">
            <span className="font-medium text-xl">{humidity}</span>
            <span className="text-lg">Humedad</span>
          </div>
        </div>
        <div className="w-1/2 flex gap-x-2 items-center">
          <WindIcon />
          <div className="flex flex-col">
            <span className="font-medium text-xl">{windSpeed}</span>
            <span className="text-lg">Viento</span>
          </div>
        </div>
      </div>
    </div>
  );
}
WeatherInfo.propTypes = {
  city: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  windSpeed: PropTypes.number.isRequired,
};

export default WeatherInfo;