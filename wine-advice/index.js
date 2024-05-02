
let wineName = document.querySelector('.title')
let company = document.querySelector('.winery')

let pictures = Array.from(document.querySelectorAll('.wine-selection'))
let rating = document.querySelector('.rating')
let popUp = document.querySelector('.wine-content')

let button = document.getElementById('close-button')
let winePicture = document.querySelector('.wine-picture')

let loadingMessage = document.querySelector('.message')
loadingMessage.style.display = 'none'


pictures.forEach(getData)
let isVisible = false

function getData(item) {
  item.addEventListener('click', async (e) => {

    loadingMessage.style.display = 'block'
   // popUp.style.display = 'none'

    e.target.setAttribute('data-active', 'active')
    let rect = item.getBoundingClientRect() // координаты


    try {
      let key = e.target.id
      let data = await getInfo(key)
      const length = data.length + 1
      let index = data[Math.floor(Math.random() * length)]
      fillData(index)

      loadingMessage.style.display = 'none'

      if(e.target.dataset.active && !isVisible) {
        popUp.style.display = 'block'
        popUp.style.left = `${rect.center + window.scrollX}px`
        popUp.style.top = `${rect.top + window.scrollY}px`
        isVisible = true
      }
    }
    catch(err) {
      console.log('Ошибка: ', err)
      loadingMessage.style.display = 'none'
    }
  })
}

let getInfo = async function (key) {
  let response= await fetch(`https://api.sampleapis.com/wines/${key}`)
  if(!response.ok) {
    throw new Error('Ошибка: '+ response.statusText)
  }
  return response.json()
}
  
function fillData(data) {
  wineName.textContent = data.wine
  company.textContent = data.winery
  rating.textContent = data.rating.average
  winePicture.src = data.image
}

button.addEventListener('click', function(e) {
  if(isVisible) {
    popUp.style.display = 'none'
    isVisible = false
  } 
})

/*
let wineType = ['whites', 'reds', 'rose', 'sparkling', 'dessert', 'port']

let map = new Map()
function createMap(array) {
  for(let i = 0; i < array.length; i++) {
    map.set(i, array[i])
  }
}
createMap(wineType)

getInfo()
.then(data => {
const length = data.length + 1
let index = data[Math.floor(Math.random() * length)]
fillData(index)
})
.catch(err => console.log('Ошибка: ', err))
*/