const url = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'
const key = '68a8e3b463944055378d22954989d669'


const setQuery = (e) => {
    if(e.keyCode == '13')
    getResult(searchBar.value)
}

const getResult = (cityName)  => {
  
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
   fetch(query)
   .then(
    weather
   )

}

const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress', setQuery)
