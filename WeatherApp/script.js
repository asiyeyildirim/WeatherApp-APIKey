const url = 'https://api.openweathermap.org/data/2.5/weather';

const key = 'your API Key';

const setQuery = (e) => {
    if (e.keyCode == '13') {
        getResult(searchBar.value);
    }
};

const getResult = (sehirAdi) => {
    let query = `${url}?q=${sehirAdi}&appid=${key}&units=metric&lang=tr`;
    fetch(query)
        .then((weather) => {
            if (!weather.ok) {
                throw new Error('Ağ yanıtı başarılı değil');
            }
            return weather.json();
        })
        .then(displayResult)
        .catch((hata) => {
            console.error('Hata:', hata.message);
        });
};

const displayResult = (result) => {
   let city = document.querySelector('.city')
   city.innerText = `${result.name}, ${result.sys.country}`

   let temp = document.querySelector('.temp')
   temp.innerText = `${Math.round(result.main.temp)}°C`

   let desc = document.querySelector('.desc')
   desc.innerText = result.weather[0].description

   let minmax = document.querySelector('.minmax')
   minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C `


};

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keypress', setQuery);






