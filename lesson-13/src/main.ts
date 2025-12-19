import { DarkModeToggle } from './dark-toggle/dark-mode-toggle';
import { SearchForm } from './search/search';
import './style.scss';
import { WeatherService } from './weather/weather';

document.addEventListener('DOMContentLoaded', () => {
  const weatherService = new WeatherService();
  const searchForm = new SearchForm(weatherService);

  const darkModeService = new DarkModeToggle();
  document
    .getElementById('dark-mode-switch')
    ?.addEventListener('click', () => darkModeService.toggleDarkMode());
});
