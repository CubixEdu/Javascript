import { WeatherService } from '../weather/weather';
import { WeatherCard } from '../weather/weather-card';

export class SearchForm {
  form: HTMLFormElement;
  cityInput: HTMLInputElement;
  dateInput: HTMLInputElement;
  submitButton: HTMLButtonElement;

  constructor(private readonly weatherService: WeatherService) {
    this.form = document.getElementById('weather-form')! as HTMLFormElement;
    this.cityInput = document.getElementById('city-input')! as HTMLInputElement;
    this.dateInput = document.getElementById('date-input')! as HTMLInputElement;
    this.submitButton = document.getElementById(
      'submit-btn',
    )! as HTMLButtonElement;

    this.setDateRange();
    this.submitHandler();
  }

  private submitHandler() {
    this.form.addEventListener('submit', async (e) => {
      e.preventDefault();

      this.submitButton.disabled = true;
      try {
        const weatherData = await this.weatherService.getWeatherData(
          this.cityInput.value,
          this.dateInput.value,
        );

        new WeatherCard(
          this.cityInput.value,
          this.dateInput.value,
          weatherData,
        );

        this.form.reset();
      } catch (e) {
        console.log(e);
      } finally {
        this.submitButton.disabled = false;
      }
    });
  }

  private setDateRange() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    this.dateInput.min = `${year}-${this.padNumber(month)}-${this.padNumber(day)}`;

    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 6);
    const maxYear = maxDate.getFullYear();
    const maxMonth = maxDate.getMonth() + 1;
    const maxDay = maxDate.getDate();

    this.dateInput.max = `${maxYear}-${this.padNumber(maxMonth)}-${this.padNumber(maxDay)}`;
  }

  private padNumber(value: number): string {
    return value < 10 ? value.toString().padStart(2, '0') : value.toString();
  }
}
