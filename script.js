// toUpper of lower


function getCity() {

    let cityEntry = search.value
    let city = capitalize(cityEntry)
    console.log(city)
    return city
}

async function chicago() {
    console.log('hhhh')
    let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=e0f83fec2147e0ea83534ac3c079a047');
    // console.log(response)
    let data = await response.json();
    console.log(data);
    chicago1.innerHTML = data.weather[0].main
}

async function austin() {
    console.log('hhhh')
    let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Austin&appid=e0f83fec2147e0ea83534ac3c079a047');
    // console.log(response)
    let data = await response.json();
    console.log(data);
    let image = null;
    let altImage = null;
    if (data.weather[0].main == 'Clear') {
        image = 'assets/some_sun.png'
        altImage = 'Sun'
    } else {
        image = 'assets/some_clouds.png'
        altImage = 'cloud'
    }
    today.innerHTML =
        `<p class = "display-6" > Today </p>
    <img src = ${image} alt = ${ altImage } >
    <p> ${data.weather[0].description} </p> 
    <div class = "temp-container" >
    <p class = "high temp" > ${data.main.temp_max} </p>
     <p class = "low temp" > 20 </p>`
}




async function display() {
    let city = getCity();
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e0f83fec2147e0ea83534ac3c079a047`)
    let data = await response.json()
    console.log(data.weather[0].main);
    //if statements for img display
    let image = null;
    let altImage = null;
    if (data.weather[0].main == 'Clear') {
        image = 'assets/some_sun.png'
        altImage = 'Sun'
    } else {
        image = 'assets/some_clouds.png'
        altImage = 'cloud'
    }
    today.innerHTML =
        `<p class = "display-6"> Today </p> 
    <img src = ${ image } alt=${ altImage } >
    <p> ${data.weather[0].description } </p> 
    <div class = "temp-container" >
    <p class = "high temp" > ${ data.main.temp_max } </p>
     <p class = "low temp" > 20 </p>`
};




// const apiKey = 'e0f83fec2147e0ea83534ac3c079a047'30.2672° N, 97.7431° W
async function work() {
    const response = await fetch(`https://api.tomorrow.io/v4/timelines?location=30.2672,97.7431&fields=temperature&timesteps=1h&units=metric&apikey=OxqgX1BTrQDc5s9Y122iP92fiXmTC6fA`);
    const data = await response.json();
    console.log(data.weather);
}




function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

document.addEventListener('DOMContentLoaded', function() {
    let tempDisplay = document.querySelectorAll('.temp');
    for (i = 0; i < tempDisplay.length; i++) {
        if (i % 2 == 0) {
            tempDisplay[i].innerHTML = 45 + '°';
        } else {
            tempDisplay[i].innerHTML = 20 + '°';
        }
        // console.log(tempDisplay[i]);
    }
    // const newLocal = document.getElementsById('tempSetting').oninput = () => {
    //     convert();
})



function convert() {
    let currentTemps = document.querySelector('#tempSetting').value;
    let tempDisplay = document.querySelectorAll('.temp');
    if (currentTemps === 'celcius')
        for (i = 0; i < tempDisplay.length; i++) {
            tempDisplay[i].innerHTML = parseInt(tempDisplay[i].innerHTML) //parsInt needed to remove °
            tempDisplay[i].innerHTML = Math.round((tempDisplay[i].innerHTML - 32) * 5 / 9) + '°';
        }
    else {
        for (i = 0; i < tempDisplay.length; i++) {
            tempDisplay[i].innerHTML = parseInt(tempDisplay[i].innerHTML)
            tempDisplay[i].innerHTML = Math.round((tempDisplay[i].innerHTML * 9 / 5 + 32)) + '°';
        }
    }
}

async function quote() {
    let response = await fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes/5");
    let data = await response.json();
    for (i = 0; i <= 5; i++) {
        displayQ.innerHTML += `<p>${data[i].quote} + '- ' + ${data[i].author}<\p>`
        console.log(data)
    }
}