# Weather Master

A lightweight, browser-based weather application that fetches real-time weather data and displays condition-based visuals — all without any API key.

**Live Project:** https://github.com/JaivanthM/weather-app

## Features

- **City Search** — Type any city name and get instant weather results via the Open-Meteo Geocoding API.
- **Current Weather** — Shows temperature, wind speed, and a descriptive condition (Clear Sky, Rain, Snow, Thunderstorm, Fog, etc.).
- **Weather Visuals** — Dynamic weather icons/images that change based on the current condition code.
- **No API Key Required** — Uses free, open APIs (Open-Meteo) — zero setup needed.

## Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **APIs:** Open-Meteo Geocoding API, Open-Meteo Weather API
- **Fonts:** Google Fonts (Rubik)

## Project Structure

```
weather-app/
├── inde.html          # Main weather app interface
├── weather.css        # Styling
├── weather.js         # Core logic — API calls, weather mapping, UI updates
├── *.png              # Weather condition images (sun, cloudy, rain, snow, fog, thunderstorm)
└── .vscode/           # Editor config
```

## How It Works

1. User enters a city name.
2. The app calls the Open-Meteo Geocoding API to resolve the city to latitude/longitude.
3. It then fetches current weather data for those coordinates.
4. A `weatherCodeMap` translates WMO weather codes into human-readable conditions and matching images.
5. Results are rendered in the UI — temperature, wind speed, condition label, and weather image.

## APIs Used

| API | Endpoint | Purpose |
|-----|----------|---------|
| Open-Meteo Geocoding | `https://geocoding-api.open-meteo.com/v1/search` | City → coordinates |
| Open-Meteo Weather | `https://api.open-meteo.com/v1/forecast` | Current temperature, wind, weather code |

## Usage

Open `inde.html` in any modern browser — no build step, no server required. Just type a city and hit search.

## License

Free to use and modify.
