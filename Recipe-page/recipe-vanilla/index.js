let ing = document.querySelectorAll('#ingredients-section li')
ing.forEach(item => item.textContent += '(ingredient)')

let title = document.getElementsByTagName('h1')
// вылезла HTML Collection, поэтому нужно превратить ее в массив

Array.from(title).forEach(item => item.innerHTML +=  ' <p> dynamically added </p>')
