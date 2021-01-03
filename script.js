
let URL ='https://www.cbr-xml-daily.ru/daily_json.js'
const usd = document.querySelector('.USD')
const eur =document.querySelector('.EUR')


fetch(URL)
    .then(data => data.json())
    .then(data => {
        eur.innerHTML =data.Valute.EUR.Value.toFixed(2)
        usd.innerHTML =data.Valute.USD.Value.toFixed(2)
    })



