Weather App

Description

A simple weather app that fetches and displays real-time weather information based on the city entered by the user. The app shows the current temperature, humidity, wind speed, and weather conditions (e.g., clear, cloudy, rainy, etc.) with an associated weather icon.

The app also features an input bar for users to search for a specific city's weather. When the user presses Enter or clicks the Search button, it fetches weather data from the OpenWeatherMap API.

Features

- **Search by City Name**: Enter a city name to fetch its current weather.
- **Weather Information Display**: Shows temperature, humidity, wind speed, and weather conditions.
- **Weather Icons**: Displays an icon based on the weather condition (Clear, Clouds, Rain, Snow, etc.).
- **Responsive Design**: Styled to work well across different screen sizes.

Technologies Used

- HTML: Structure of the application.
- CSS: Styling and layout of the app, ensuring a clean and responsive design.
- JavaScript: Fetching data from the OpenWeatherMap API, handling user interaction (clicks, keyboard events), and updating the UI dynamically.

How to Use

1. Search for Weather: Type the name of a city into the input field and press Enter or click the Search button to retrieve weather information for that city.
2. Weather Data: The app will display:
   - Temperature in Celsius
   - Humidity percentage
   - Wind speed in km/h
   - An appropriate weather icon (e.g., Clear, Clouds, Rain, etc.)

API Used

This app uses the [OpenWeatherMap API](https://openweathermap.org/api) to get the weather data. You need to sign up for an API key and replace it in the JavaScript code for the app to work.

Future Improvements

- Error handling for invalid city input (e.g., city not found).
- Add support for multiple languages or units (imperial/metric).
- Add additional weather information such as forecast, sunrise/sunset times, etc.




