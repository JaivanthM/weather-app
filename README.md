# Weather Master

A lightweight, browser-based weather application that fetches real-time weather data, displays condition-based visuals, and shows air quality information — all without any API key.

## Features

- **City Search** — Type any city name and get instant weather results via the Open-Meteo Geocoding API.
- **Current Weather** — Shows temperature, wind speed, and a descriptive condition (Clear Sky, Rain, Snow, Thunderstorm, Fog, etc.).
- **Weather Visuals** — Dynamic weather icons/images that change based on the current condition code.
- **Air Quality** — Displays current carbon monoxide (CO) levels from the Open-Meteo Air Quality API.
- **No API Key Required** — Uses free, open APIs (Open-Meteo) — zero setup needed.

## Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **APIs:** Open-Meteo Geocoding API, Open-Meteo Weather API, Open-Meteo Air Quality API
- **Fonts:** Google Fonts (Rubik)

## Project Structure

```
weather-master/
├── index.html        # Main weather app interface
├── weather.css       # Styling
├── weather.js        # Core logic — API calls, weather mapping, UI updates
├── blanket.html      # Additional page
├── heart.html        # Additional page
├── inde.html         # Additional page
├── index3.html       # Additional page
├── weather.css       # Stylesheet
├── *.png             # Weather condition images (sun, cloudy, rain, snow, fog, thunderstorm)
└── .vscode/          # editor config
```

## How It Works

1. User enters a city name.
2. The app calls the Open-Meteo Geocoding API to resolve the city to latitude/longitude.
3. It then fetches current weather and air quality data for those coordinates.
4. A `weatherCodeMap` translates WMO weather codes into human-readable conditions and matching images.
5. Results are rendered in the UI — temperature, wind speed, condition label, weather image, and CO level.

## APIs Used

| API | Endpoint | Purpose |
|-----|----------|---------|
| Open-Meteo Geocoding | `https://geocoding-api.open-meteo.com/v1/search` | City → coordinates |
| Open-Meteo Weather | `https://api.open-meteo.com/v1/forecast` | Current temperature, wind, weather code |
| Open-Meteo Air Quality | `https://air-quality-api.open-meteo.com/v1/air-quality` | Carbon monoxide levels |

## Usage

Open `index.html` in any modern browser — no build step, no server required. Just type a city and hit search.

## License

Free to use and modify.
