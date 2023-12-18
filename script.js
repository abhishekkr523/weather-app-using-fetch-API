// const apiKey = '0d11b3cd4ec7214dc3bf39c0ceed2398';

// function searchWeather() {
//     var data;
//     const cityInput = document.getElementById('cityInput');
//     const weatherTitle = document.getElementById('weatherTitle');
//     const countryName = document.getElementById('countryName');
//     const temperature = document.getElementById('temperature');
//     const humidity = document.getElementById('humidity');
//     const windSpeed = document.getElementById('windSpeed');

//     const cityName = cityInput.value;

//     fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`)
//         .then((response) => {
//             if (response.ok) {
//                 return response.json();
//             } else {
//                 throw new Error('Something went wrong!!!');
//             }
//         })
//         .then((data) => {
//             console.log(data);

//             // Update the HTML elements with fetched data
//             weatherTitle.textContent = `Weather of ${cityName}`;
//             countryName.textContent = data.city.country;
//             temperature.textContent = `Temperature ${data.list[0].main.temp} °C`;
//             humidity.textContent = `Humidity ${data.list[0].main.humidity}%`;
//             windSpeed.textContent = `Wind Speed ${data.list[0].wind.speed} m/s`;
//         })
//         .catch((error) => {
//             console.error(error);
//             alert('Something is wrong!!!');
//         });

//         for (let i = 0; i < data.list.length; i++) {
//             console.log(`Temperature for interval ${i + 1}: ${data.list[i].main.temp}`);
//           }
// }



const apiKey = '0d11b3cd4ec7214dc3bf39c0ceed2398';

function searchWeather() {
    var data; // Declare data locally

    const cityInput = document.getElementById('cityInput');
    const weatherTitle = document.getElementById('weatherTitle');
    const countryName = document.getElementById('countryName');
    const temperature = document.getElementById('temperature');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('windSpeed');
    const pressure = document.getElementById('pressure')
    const weathermain = document.getElementById('weathermain')
    const weatherdescription = document.getElementById('weatherdescription')

    const cityName = cityInput.value;

    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong!!!');
            }
        })
        .then((responseData) => {
            data = responseData; // Assign the fetched data to the local variable
            console.log(data);

            // Update the HTML elements with fetched data
            weatherTitle.textContent = `Weather of ${cityName}`;
            countryName.textContent = data.city.country;

            // Check if 'list' property exists and has at least one item
            if (data.list && data.list.length > 0) {
                if (temperature) {
                    temperature.textContent = `Temperature : ${data.list[0].main.temp} °C`;
                } else {
                    console.error('Element with ID "temperature" not found.');
                }
                humidity.textContent = `Humidity : ${data.list[0].main.humidity}%`;
                windSpeed.textContent = `Wind Speed : ${data.list[0].wind.speed} m/s`;
                pressure.textContent = `Pressure : ${data.list[0].main.pressure} pascal`;
                weathermain.textContent = `Weather : ${data.list[0].weather[0].main} `;
                weatherdescription.textContent = `Weather Description :${data.list[0].weather[0].description} `;
                // to show all temperature interval list
                // for (let i = 0; i < data.list.length; i++) {
                //     console.log(`Temperature for interval ${i + 1}: ${data.list[i].main.temp}`);
                // }
            } else {
                console.error('Invalid data structure received from the API');
                alert('Invalid data structure received from the API');
            }
        })
        .catch((error) => {
            console.error(error);
            alert('Something is wrong!!!');
        });
}

