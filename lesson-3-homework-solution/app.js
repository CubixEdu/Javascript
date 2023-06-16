const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        (Math.random() < 0.5) 
            ? resolve('successful promise') 
            : reject('promise error');
    }, 1000);
});

myPromise
    .then((value) => console.log(value))
    .catch(e => console.error(e))
    .finally(() => console.log('Promise finished'));

const testAwait = async () => {
    try {
        const value = await myPromise;
        console.log(value);
    } catch(e) {
        console.error(e);
    } finally {
        console.log('Promise finished');
    }
    
}

testAwait();

const testRequest = async () => {
    try {
        const res = await fetch('https://api.geadscnderize.io/?name=peter');
        const parsedRes = await res.json();
        console.log(parsedRes);
    } catch (e) {
        console.error(e)
    }
    
    
    // fetch('https://api.genderize.io/?name=peter').then(async res => console.log(await res.json()))
}

testRequest();

async function testAwait() {
    const value = await myPromise;
    console.log(value)
}


const steak = new Promise(resolve => {
    setTimeout(() => {
        resolve('steak');
    }, 15000);
});

const vegetables = new Promise(resolve => {
    setTimeout(() => {
        resolve('vegetables');
    }, 5000);
});

const bun = new Promise(resolve => {
    setTimeout(() => {
        resolve('bun');
    }, 7000);
});

Promise.all([steak, vegetables, bun])
.then(([cookedSteak, choppedVegetable, bakedBun]) => {
    setTimeout(() => {
        console.log(cookedSteak, choppedVegetable, bakedBun);
    }, 10000);
})