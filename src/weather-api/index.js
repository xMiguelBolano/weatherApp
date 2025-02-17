export const getWeather = async (city) => {
    const appid = "2c57ed397c106a830a2ec13a32e1fbf3";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=es&units=metric&appid=${appid}`;
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}