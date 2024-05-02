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

      console.log('longitude is ' + data.lon)
      console.log('latitude is ' + data.lat)
     // initMap()
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
// если опечатка в GET-параметрах, придет пустой ответ, а status все равно будет 200 и OK

/*
initMap()
async function initMap() {
  await ymaps3.ready
  const {YMap, YMapDefaultSchemeLayer} = ymaps3

  const map = new YMap(
    document.getElementById('map'), 
    {
      location: {
      center: [59.929687,30.289512],
      zoom: 10
      }
    }
  )
  map.addChild(new YMapDefaultSchemeLayer())
}
// [37.588144, 55.733842],
*/

/*

 map.setLocation({
    center: [latitude, longitude], 
    duration: 200
  })  



const getMap = async () => {
  let response = await fetch('https://static-maps.yandex.ru/v1?ll=37.620070,55.753630&size=600,450&z=13&pt=37.620070,55.753630,pmwtm1~37.64,55.76363,pmwtm99&apikey=4702e0db-f494-49e5-b54a-f3850a8905f6')
  if(response.ok) {
    let blob = await response.blob()
    let imageURL = URL.createObjectURL(blob)
    let image = document.createElement('img')
    image.src = imageURL
    map.appendChild(image)
  }
}
getMap()
.catch(error => {
  console.error('Rejected: ', error)
})
*/


/*
const getIP = (resource) => {
   return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
      if(request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText)
        resolve(data)
      } else if(request.responseText === '{}'){
        reject("Couldn't fetch the data")
      }
    })
    request.open('GET', resource)
    request.send()
   })
}


getIP('http://ip-api.com/json/?fields=61439')
   .then(response => {
    ip.textContent = response.query
    city.textContent = response.city
    time.textContent = response.timezone
    provider.textContent = response.isp
    console.log('promise resolved: ', response)
   }).catch(err => {
    console.log(err)
   }) 
*/


/*
fetch('http://ip-api.com/json/?fields=61439')
.then(response => {
  console.log('fetch resolved', response)
  return response.json()
}).then(data => {
  console.log(data)
}).catch(err => {
  console.log('rejected', err)
})
*/