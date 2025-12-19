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
                <div>
                    <button id="delete-btn">Delete</button>
                </div>
            </div>
        </zizi-card>
    `)

    document.querySelector('#delete-btn')
        .addEventListener('click', (e) => e.target.closest('zizi-card').remove());


    // container.insertAdjacentHTML('afterbegin', `
    //     <zizi-card id="card-${cardIdCounter}" title="${city} - ${date}">
    //         <div class="card-content">
    //             <div>${minTemp}°C</div>
    //             <div>${maxTemp}°C</div>
    //             <div>
    //                 <button id="delete-btn-${cardIdCounter}" 
    //                     data-cardIdCounter="${cardIdCounter}">Törlés</button>
    //             </div>
    //         </div>
    //     </zizi-card>
    // `);

    // document.getElementById(`delete-btn-${cardIdCounter}`)
    //     .addEventListener('click', e => {
    //         const counterId = e.target.getAttribute('data-cardIdCounter')
    //         e.target.getAttribute('data-cardIdCounter')
    //         document.getElementById(`card-${counterId}`).remove()
    //     })

    // cardIdCounter++;
}