import './App.css'
import { useState } from "react";
import { useWeather } from "./hooks";
import WeatherInfo from "./components/weather-info";
import NotFound from "./components/not-found";
import SearchForm from "./components/search-form";
import { motion } from "framer-motion";
import Comments from "./Comments";


function App() {
  const [city, setCity] = useState("");
  const { weather, notFound, searchWeatherByCity } = useWeather();
  const isCitySearched = !!weather;
  const [resetCommentsKey, setResetCommentsKey] = useState(0);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    searchWeatherByCity(city);
    setCity("");
    setResetCommentsKey(prev => prev + 1); 
  };

  // Weather effect
  const getWeatherEffect = () => {
    if (!weather || !weather.description) return null;
    const palabras = weather.description.split(" ");

    // On case of storm in description, show storm effect
    if (palabras.some(p => p.includes("tormenta"))) {
      return (
        <motion.div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          {/* rain effect */}
          {[...Array(80)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-blue-400 rounded-full"
              style={{
                width: "2px",
                height: `${Math.random() * 30 + 25}px`,
                left: `${Math.random() * 100}vw`,
                top: `${Math.random() * 100}vh`
              }}
              animate={{ y: "100vh" }}
              transition={{
                duration: Math.random() * 0.7 + 0.3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}

          {/* lightning effect */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-white opacity-0"
            animate={{ opacity: [0, 0.8, 0] }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: Math.random() * 3 + 1
            }}
          />
        </motion.div>
      );
    }

    // On case of rain in description, show rain effect
    if (palabras.some(p => p.includes("lluvia")) || palabras.some(p => p.includes("llovizna"))) {
      return ( 
        <motion.div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-blue-400 rounded-full"
              style={{
                width: "2px",
                height: `${Math.random() * 30 +25}px`,
                left: `${Math.random() * 100}vw`,
                top: `${Math.random() * 100}vh`,
              }}
              animate={{ y: "100vh" }}
              transition={{ repeat: Infinity,
                duration: Math.random() * 1.5 + 0.5,
                ease: "linear"
              }}
            />
          ))}
        </motion.div>
      );
    }

    // On case of snow in description, show snow effect
    if (palabras.some(p => p.includes("nevada")) || palabras.some(p => p.includes("nieve"))) {
      return (
        <motion.div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: `${Math.random() * 5 + 2}px`,
                height: `${Math.random() * 5 + 2}px`,
                left: `${Math.random() * 100}vw`,
                top: `${Math.random() * 100}vh`
              }}
              animate={{
                y: ["0vh", "100vh"],
                x: ["0vw", `${Math.random() * 10 - 5}vw`]
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </motion.div>
      );
    }

    // On case of fog in description, show fog effect
    if (palabras.some(p => p.includes("niebla")) || palabras.some(p => p.includes("neblina"))) {
      return (
        <motion.div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-gray-300 rounded-full opacity-15"
              style={{
                width: `${Math.random() * 300 + 84}px`,
                height: `${Math.random() * 12 + 8}px`,
                left: `${Math.random() * 100}vw`,
                top: `${Math.random() * 100}vh`
              }}
              animate={{ x: ["0vw", "20vw", "10vw", "-10vw", "0vw"], y: ["0vh", "5vh", "-5vh", "3vh", "0vh"] }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </motion.div>
      );
    }

    return null
  }

  // Wind effect
  const getWindEffect = () => {
    if (!weather || !weather.windSpeed) return null;
    const num1 = parseInt(weather.windSpeed.match(/\d+/)?.[0] || "0", 10);

    if (num1 >= 11) {
      return (
        <motion.div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full opacity-50"
              style={{
                width: `${Math.random() * 24 + 20}px`,
                height: `${Math.random() * 8 + 4}px`,
                left: `${Math.random() * 90}vw`,
                top: `${Math.random() * 100}vh`
              }}
              animate={{ x: ["0vw", "150vw"] }}
              transition={{
                duration: Math.random() * 4 + 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </motion.div>
      );
    }

    return null
  }

  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="w-full max-w-sm bg-white/20 p-4 rounded-xl flex flex-col">
          <SearchForm city={city} setCity={setCity} handleSubmit={handleSubmit} />
          {notFound && <NotFound />}
          {!notFound && weather && (
            <WeatherInfo
              city={weather.city}
              icon={weather.icon}
              description={weather.description}
              temperature={weather.temperature}
              humidity={weather.humidity}
              windSpeed={weather.windSpeed}
            />
          )}
          {getWeatherEffect()}
          {getWindEffect()}
        </div>
      </div>
      <Comments isCitySearched={isCitySearched} resetKey={resetCommentsKey} />
    </>
  );
}


export default App;
