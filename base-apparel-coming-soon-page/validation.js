const button = document.querySelector('button')
const email = document.querySelector('form input')
const message = document.querySelector('#message')

button.addEventListener('click', function(event) {
  let regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
  event.preventDefault()

  if(!email.value) {
    message.textContent = 'Поле не должно быть пустым'
  } else if(regex.test(email.value) === false) {
    message.textContent = 'Пожалуйста, введите корректный адрес эл.почты'
  } else
    message.textContent = 'Вы успешно подписались на обновления!'
})