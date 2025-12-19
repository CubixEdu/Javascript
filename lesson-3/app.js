document.addEventListener('DOMContentLoaded', () => {
    registerSubmitBtn();
    registerListNumberChange();
    renderSendCounter();
})

const registerSubmitBtn = () => {
    document.getElementById('sendBtn').addEventListener('click', () => {
        document.getElementById('feedback').value = '';

        let sendCounter = localStorage.getItem('sendCounter') || 0;
        localStorage.setItem('sendCounter', ++sendCounter) ;

        renderSendCounter();
    })
}

const renderSendCounter = () => {
    document.getElementById('sendCounter').innerText = localStorage.getItem('sendCounter') || 0;
}

const registerListNumberChange = () => {
    document.getElementById('listNumber').addEventListener('change', (event) => {
        const number = event.target.value;
        const listElement = document.getElementById('list');
        listElement.innerHTML = '';

        for(let i = 0; i < number; i++) {
            listElement.innerHTML += `<li>${i}. elem</li>`;
        }
    })
}
