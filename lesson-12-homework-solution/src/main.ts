import { SearchForm } from './search/search';
import './style.css';
import { WeatherService } from './weather/weather';

document.addEventListener('DOMContentLoaded', () => {
  const weatherService = new WeatherService();
  const searchForm = new SearchForm(weatherService);
});
