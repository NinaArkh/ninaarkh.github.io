const ip = document.querySelector('#ip')
const city = document.querySelector('#location')
const time = document.querySelector('#timezone')
const provider = document.querySelector('#ISP')
let button = document.querySelector('button')
let topDiv = document.querySelector('.top-section')
let input = document.querySelector('#input-section input')
let error = document.querySelector('#message')
let regex = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/
let latitude, longitude

button.addEventListener('click', function(e) {
  e.preventDefault()

 if(!input.value) {
  error.textContent = 'Поле не должно быть пустым'
 } else if (!regex.test(input.value)) {
  error.textContent = 'Некорректный IP-адрес'
  return 
  // Остановить выполнение функции
 } else
  error.textContent = ''
 
  getIP(input.value)
    .then( data => {
      fillData(data)
      console.log(data)
      latitude = data.lat
      longitude = data.lon

      console.log('latitude is ' + data.lat)
      console.log('longitude is ' + data.lon)
  })
    .catch( err => {
      console.error('Rejected: ', err)
  })
})
  
const getIP = async (userIP) => {
  let response = await fetch(`http://ip-api.com/json/?fields=61439`)

  if(!input.value) {
    let data = await response.json()
    return data
  } else 
    response = await fetch(`http://ip-api.com/json/${userIP}`) 
  let data = await response.json()
  return data
  //fillData(data)
 // initMap()
}

function fillData(data) {
  ip.textContent = data.query
  city.textContent = data.city
  time.textContent = data.timezone
  provider.textContent = data.isp
}

let result = getIP() // пришел Promise
result
  .then(response => {
    if(!response.query || !response.city || !response.timezone ||!response.isp) {
      throw new Error('Invalid API link')
    } else
      fillData(response)
     // console.log(response)
    })
  .catch(err => {
    console.log('rejected ', err)
  })
// если опечатка в GET-параметрах, придет пустой ответ, но status все равно будет 200 и OK

let map = L.map('map').setView([latitude, longitude], 13)