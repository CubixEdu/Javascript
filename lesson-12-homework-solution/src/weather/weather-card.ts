import { WeatherData } from './weather-data.model';

export class WeatherCard {
  constructor(city: string, date: string, weatherData: WeatherData) {
    const minTemp = Math.round(weatherData.minTemp);
    const maxTemp = Math.round(weatherData.maxTemp);

    const cardsContainer = document.getElementById('weather-container')!;
    cardsContainer.insertAdjacentHTML(
      'afterbegin',
      `
        <div class="weather-card">
          <h4>${city} - ${date}</h4>
          <p>Min: ${minTemp}°C</p>
          <p>Max: ${maxTemp}°C</p>
          <div>
            <button id="delete-btn">Delete</button>
          </div>
        </div>
        `,
    );

    document
      .querySelector('#delete-btn')
      ?.addEventListener('click', (e) =>
        (e.target as HTMLElement)?.closest('.weather-card')?.remove(),
      );
  }
}
