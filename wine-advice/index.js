
const wineName = document.querySelector('.title')
const company = document.querySelector('.winery')

const pictures = Array.from(document.querySelectorAll('.wine-selection'))
const rating = document.querySelector('.rating')
const popUp = document.querySelector('.wine-content')

const button = document.getElementById('close-button')
const winePicture = document.querySelector('.wine-picture')

const loadingMessage = document.querySelector('.message')
loadingMessage.style.display = 'none'


let isVisible = false

pictures.forEach(getData)

function getData(item) {
  item.addEventListener('click', async (e) => {

    let rect = item.getBoundingClientRect() // координаты

    loadingMessage.style.display = 'block'
    loadingMessage.style.top = `${rect.top + window.scrollY}px`

    e.target.setAttribute('data-active', 'active')

    try {
      let key = e.target.id
      let data = await getInfo(key)
      const length = data.length + 1
      let index = data[Math.floor(Math.random() * length)]
      fillData(index)

      loadingMessage.style.display = 'none'

      if(e.target.dataset.active) {
        popUp.style.display = 'block'
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

button.addEventListener('click', function closeDialog(e) {
  if(isVisible) {
    popUp.style.display = 'none'
    isVisible = false
  } 
})

// popUp.style.left = `${rect.center + window.scrollX}px`