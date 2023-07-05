import 'zizi-card';

export const addCard = (city, date, weatherData) => {
    console.log(city, date, weatherData);

    const minTemp = Math.round(weatherData.minTemp);
    const maxTemp = Math.round(weatherData.maxTemp);

    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.insertAdjacentHTML('afterbegin', `
        <zizi-card title="${city} - ${date}">
            <div class="card-content">
                <div>${minTemp}°C</div>
                <div>${maxTemp}°C</div>
            </div>
        </zizi-card>
    `)
}