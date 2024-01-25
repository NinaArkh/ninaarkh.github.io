let menu = document.getElementById('hamburger-menu')

document.addEventListener('DOMContentLoaded', function () {
  let hamburger = document.getElementById('hamburger')
  hamburger.addEventListener('click', function () {
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block'
  })
})

  let contact = document.getElementById('contact')
  let contact2 = document.getElementById('contact2')
  contact.addEventListener('click', function(){
    scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})
    menu.style.display = 'none'
  })
  contact2.addEventListener('click', function() {
    scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})
    menu.style.display = 'none'
  })