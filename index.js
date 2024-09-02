
document.addEventListener('DOMContentLoaded', function() {
  const socialNetworkItem = document.querySelector('.grid-item.social-network')

  if(socialNetworkItem) {
    socialNetworkItem.addEventListener('click', function() {
      this.classList.toggle('expanded')
    })
  }
})