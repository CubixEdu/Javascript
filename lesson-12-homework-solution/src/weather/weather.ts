import { Coordinates } from './coordinates.model';

export class WeatherService {
  public async getWeatherData(city: string, date: string) {
    try {
      const coordinates = await this.getCoordinates(city);
      const weatherData = await this.loadWeatherData(coordinates, date);

      return weatherData;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  private getCoordinates(city: string): Promise<Coordinates> {
    const geocoding: { [key: string]: Coordinates } = {
      berlin: { lat: 52.5235, lon: 13.4115 },
      budapest: { lat: 47.4984, lon: 19.0408 },
      london: { lat: 51.5002, lon: -0.1262 },
    };

    return new Promise((resolve, reject) => {
      const result = geocoding[city.toLowerCase()];

      if (result) {
        resolve(result);
      } else {
        reject(new Error(`Couldn't geocode ${city}`));
      }
    });
  }

  private async loadWeatherData(coordinates: Coordinates, date: string) {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.lat}&longitude=${coordinates.lon}&daily=apparent_temperature_max,apparent_temperature_min&timezone=Europe/Budapest`,
    );
    const body = await response.json();

    const dateIndex = body.daily.time.findIndex((d: string) => d === date);

    return {
      minTemp: body.daily.apparent_temperature_min[dateIndex],
      maxTemp: body.daily.apparent_temperature_max[dateIndex],
    };
  }
}
