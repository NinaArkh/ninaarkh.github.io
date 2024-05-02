let form = document.querySelector('#bill input')
let firstDiv = document.querySelector('#first-section')
let form2Div = document.querySelector('#number')
let form2 = document.querySelector('#number input')
let button = document.querySelector('#reset')
let billPerPerson = document.querySelector('.price2')
let tipPerPerson = document.querySelector('.price1')
let error = document.getElementById('error-text')
let tips = document.querySelector('#tip-selection')
let message = document.createElement('p')
let tipValue //  это % чаевых

let calculateTip = (result, tipValue) => {
  let tipAmount = result * tipValue / 100
  tipPerPerson.textContent = '₽' + tipAmount.toFixed(2)
}

tips.addEventListener('click', function(e) {
  if(e.target.className === 'item') {
    document.querySelectorAll('.item').forEach(item => {
      item.classList.remove('active')
      item.style.backgroundColor = 'hsl(183, 100%, 15%)'
    })
    e.target.classList.add('active')
    e.target.style.backgroundColor = 'hsl(172, 67%, 45%)'
    
    tipValue = parseInt(e.target.textContent.slice(0, -1))  // убираем значок % с конца
  }
})

button.addEventListener('click', function() {
  if(form.value ==='' || isNaN(Number(form.value))){
    error.textContent = 'Введите, пожалуйста, число'
  } else if(form2.value === '' || isNaN(Number(form2.value))) { 
    message.textContent = 'Введите, пожалуйста, число'
    form2Div.appendChild(message)
  } else if(tipValue === undefined) {
    error.textContent = 'Выберите процент чаевых'
    //tipValue объявили, но ничего не присвоили
  }
  else {
    error.textContent = ''
    message.textContent = ''
    let result = parseFloat(form.value) / parseFloat(form2.value)
    billPerPerson.textContent = '₽' + result.toFixed(2)

    calculateTip(result, tipValue)
  }
})




/*
function formSubmit(event) {
  let bill = document.querySelector('#bill input').value
  if(Number(bill) < 0 || isNaN(bill)) {
    document.getElementById('error-text').innerText = 'Пожалуйста, введите положительное число'
  } else
  document.getElementById('error-text').innerText = ''
  event.preventDefault()
}
form.addEventListener('submit', formSubmit)

let count = 0
form2.addEventListener('submit', function(e) {
  e.preventDefault()
  let people = document.querySelector('#number input').value
  let error = document.createElement('p')

  if(Number(people) < 0 || isNaN(people)) {
    if(count === 0) {   
      error.classList.add('number-error')
      error.innerText = 'Пожалуйста, введите положительное число'
      form2.appendChild(error)
      count++
    }
  } else if(Number(people) > 0){
    document.querySelector('.number-error').innerText = ''
    count = 0
  }
})

button.addEventListener('click', function(e) {
  let bill = Number(document.querySelector('#bill input').value)
  let people = Number(document.querySelector('#number input').value)
  let price2 = document.querySelector('.price2')

  if(document.querySelector('#error-text').textContent === '') {
    price2.textContent = Math.floor(bill / people)
  }
})
*/