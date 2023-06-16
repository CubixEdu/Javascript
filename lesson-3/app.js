const callACatInside = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Kitty');
    }, 300)
});

callACatInside
    .then(cat => console.log(cat))
    .catch(error => console.error(error));

const waitForACat = async () => {
    try {
        const cat = await callACatInside;
        console.log(cat);
    } catch(e) {
        console.error(e);
    }

}

waitForACat();

const genderizeName = async (name) => {
    const response = await fetch(`https://api.genderize.io/?name=${name}`);
    const jsonObject = await response.json();

    console.log(jsonObject);
}

genderizeName('Peter');