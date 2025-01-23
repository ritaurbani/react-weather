# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Loading/Error Handling: Handle loading states and errors (e.g., invalid city names or network issues).

2.4. Time Handling

Convert Local Time to User’s Time Zone: Convert the time displayed (location.localtime) into the user’s local time using the timezone (location.tz_id), or use libraries like moment.js or date-fns for time formatting.

2.5. Weather History

Previous Weather: Allow users to view historical weather data by showing the last updated time (current.last_updated) and comparing it to the current time.

3.3. Temperature Unit Toggle

Toggle Between Celsius and Fahrenheit: Let users toggle between Celsius and Fahrenheit for the temperature, updating the displayed values accordingly.
3.4. Weather Forecast

Next-Day Forecast: Use the API’s forecast data (if available) to show the weather forecast for the next few days. You can expand this by using additional endpoints for daily forecasts (if your API offers it).