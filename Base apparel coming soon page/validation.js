function validateEmail(event) {
  let input = document.getElementById('email-box');
  let regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

  if (!input.value) {
    document.getElementById('message').innerHTML = 'This field cannot be left blank';
  } else if (regex.test(input.value)) { 
    document.getElementById('message').innerHTML ="Subscribed successfully!"
  } else {
    document.getElementById('message').innerHTML = "Invalid email address"
  }
}


