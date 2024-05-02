let button = document.querySelector('button')
button.addEventListener('click', switchColor)

function switchColor() {
  top1.classList.toggle('second-color-theme-top')
  bottom.classList.toggle('second-color-theme-bottom')
  main.classList.toggle('second-color-theme-main')
  
  grid.forEach(function(item) {
    item.classList.toggle('second-color-theme-grid')
  })
}

let main = document.querySelector('main')
let top1 = document.querySelector('#top-section')
let bottom = document.querySelector('#bottom-section')  
let grid = document.querySelectorAll('.grid-item')
let display = document.querySelector('.calculator-display')

let calculate = (num1, operator, num2) => {
  let firstNum = parseFloat(num1)
  let secondNum = parseFloat(num2)

  if(operator === 'add') {
    return firstNum + secondNum
  }
  if(operator === 'substract') {
    return firstNum - secondNum
  }
  if(operator === 'multiply') {
    return firstNum * secondNum
  }
  if(operator === 'divide') {
    return (firstNum / secondNum).toFixed(6)
  }
}

bottom.addEventListener('click', e => {
  if(e.target.matches('div')) {
    let key = e.target
    let action = key.dataset.action

    let keyContent = key.textContent
    let pressedKey = main.dataset.previousKey

    /*Array.from(key.parentNode.children).forEach(item => {
      item.classList.remove('is-pressed')
    }) */ 

    if(!action) {
      if(display.textContent === '0' || 
      pressedKey === 'operator' ||
      pressedKey === 'equals'
      ) {
        display.textContent = keyContent
      } else {
        display.textContent += keyContent
      }
      main.dataset.previousKey = 'number'
    } 
    
    if(action === 'decimal') { 
      if(display.textContent.includes('.') === false) {
        display.textContent += '.'
      } else if(pressedKey === 'operator') {
        display.textContent = '0. '
      }
      main.dataset.previousKey = 'decimal'
    }
   
    if(
      action === 'add' ||
      action === 'substract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      key.classList.add('is-pressed')
      // добавить data attribute = "previous-key"
      main.dataset.previousKey = 'operator'
      main.dataset.firstValue = display.textContent
      main.dataset.operator = action
      }

      if(action === 'equals') {
        let firstValue = main.dataset.firstValue
        let operator = main.dataset.operator
        let secondValue = display.textContent
        main.dataset.previousKey = 'equals'

        display.textContent = calculate(firstValue, operator, secondValue)
      }
  }
})

