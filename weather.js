const weatherCodeMap = {
    0: ["Clear Sky", "sun.png", "fever"],
    1: ["Mainly Clear", "sun.png", "fever"],
    2: ["Partly Cloudy", "cloudy.png", "cloudyy"],
    3: ["Overcast", "overcast.png", "overcast"],
    45: ["Fog", "fog.png", "fogggyy"],
    48: ["Depositing Rime Fog", "fog.png", "fogggyy"],
    51: ["Light Drizzle", "rain.png", "rainyy"],
    53: ["Moderate Drizzle", "rain.png", "rainyy"],
    55: ["Dense Drizzle", "rain.png", "rainyy"],
    56: ["Light Freezing Drizzle", "rain.png", "rainyy"],
    57: ["Dense Freezing Drizzle", "rain.png", "rainyy"],
    61: ["Slight Rain", "rain.png", "rainyy"],
    63: ["Moderate Rain", "rain.png", "rainyy"],
    65: ["Heavy Rain", "rain.png", "rainyy"],
    66: ["Light Freezing Rain", "rain.png", "rainyy"],
    67: ["Dense Freezing Rain", "rain.png", "rainyy"],
    71: ["Light Snow", "snow.png", "snowyy"],
    73: ["Moderate Snow", "snow.png", "snowyy"],
    75: ["Heavy Snow", "snow.png", "snowyy"],
    77: ["Snow Grains", "snow.png", "snowyy"],
    80: ["Slight Rain Showers", "rain.png", "rainyy"],
    81: ["Moderate Rain Showers", "rain.png", "rainyy"],
    82: ["Violent Rain Showers", "rain.png", "rainyy"],
    85: ["Slight Snow Showers", "snow.png", "snowyy"],
    86: ["Heavy Snow Showers", "snow.png", "snowyy"],
    95: ["Thunderstorm", "thunderstorm.png", "thunder"],
    96: ["Thunderstorm With Slight Hail", "thunderstorm.png", "thunder"],
    99: ["Thunderstorm With Heavy Hail", "thunderstorm.png", "thunder"]
};

const cityInput = document.getElementById("city-input");
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", getWeather);

async function getWeather() {
    const city = cityInput.value.trim();

    if (!city) {
        alert("Please enter a city name.");
        return;
    }

        const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;
        const geoResponse = await fetch(geoUrl);
        const geoData = await geoResponse.json();

        if (!geoData.results || !geoData.results.length) {
            alert("City not found. Please try another name.");
            return;
        }

        const { latitude, longitude, name, country } = geoData.results[0];

        document.getElementById("city").innerText = `${name}, ${country}`;

        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`;
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();

        const airQualityUrl = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&current=carbon_monoxide&hourly=carbon_monoxide&timezone=auto`;
        const airQualityResponse = await fetch(airQualityUrl);
        const airQualityData = await airQualityResponse.json();

        const coValues = airQualityData.current?.carbon_monoxide != null
            ? [airQualityData.current.carbon_monoxide]
            : airQualityData.hourly?.carbon_monoxide || [];

        const carbonMonoxide = Array.isArray(coValues) && coValues.length > 0 && Number.isFinite(coValues[coValues.length - 1])
            ? coValues[coValues.length - 1]
            : "N/A";

        const temperature = weatherData.current_weather.temperature;
        const windSpeed = weatherData.current_weather.windspeed;
        const weatherCode = weatherData.current_weather.weathercode;
        const [weatherCondition, weatherImage, weatherDatas] = weatherCodeMap[weatherCode] || ["Unknown", "cloudy.png", "cloudyy"];

        document.getElementById("weather-image").src = weatherImage;
        document.getElementById("weather-datas").innerText = weatherDatas;
        document.getElementById("temperature").innerText = temperature;
        document.getElementById("weather-condition").innerText = weatherCondition;
        document.getElementById("wind-speed").innerText = windSpeed;
        document.getElementById("CO-content").innerText = carbonMonoxide;
    }