let pages = {
  1: '10K',
  2: '50K',
  3: '100K',
  4: '500K',
  5: '1M'
}
let prices = {
  1: 8,
  2: 12,
  3: 16,
  4: 24,
  5: 36
}
let isDiscount = false

function updatePrice() {
  let rangeInput = document.getElementById('range')
  let pageviewsElement = document.getElementById('output1')
  let priceElement = document.getElementById('price')

  let currentValue = rangeInput.value
  pageviewsElement.textContent = pages[currentValue]

  let currentPrice = prices[currentValue]
  if (isDiscount) {
    currentPrice *= 0.75
  }
  priceElement.textContent = '$ ' + currentPrice.toFixed(2)
}

function discount() {
  let toggleElement = document.getElementById('toggle')
  isDiscount = toggleElement.checked
  updatePrice()
}
