let timer = 0;

const buttonClick = () => {
    console.log('Button clicked');
}

const worker = new Worker('worker.js');

worker.onmessage = function(e) {
    console.log(e.data);
}

setInterval(() => {
    timer += 100;
    document.getElementById('counter').innerHTML = timer;
}, 100);

setTimeout(() => {
    worker.postMessage(15000000);
}, 1000);

