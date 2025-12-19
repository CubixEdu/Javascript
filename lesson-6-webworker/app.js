
let timer = 0;

const buttonClick = () => {
    console.log('Button clicked');
}

const heavyOperation = () => {
    console.time('heavyOperation');

    const items = [];
    for(let i = 1; i < 15000000; i++) {
        items.push({value: i^2});
    }

    console.log(items)

    console.timeEnd('heavyOperation');
}

setInterval(() => {
    timer += 100;
    document.getElementById('counter').innerHTML = timer;
}, 100);

setTimeout(heavyOperation, 1000);