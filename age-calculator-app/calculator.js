
document.getElementById('arrow').addEventListener('click', function() {
  let isCalculated = false

  const userYear = document.getElementById('year').value
  const userMonth = document.getElementById('month').value
  const userDay = document.getElementById('day').value

  function validateDay(day) {
    if (!day) {
      document.getElementById('message').innerHTML = 'This field cannot be left blank'
      return false
      } else if(Number(day) === false || day < 1 || day > 31) {
      document.getElementById('message').innerHTML = 'Must be a valid day'
      return false
    } else 
      document.getElementById('message').innerHTML = '' //это условие нужно, чтобы сообщение об ошибке убиралось, когда ввели правильное число
    return true
  }

  function validateMonth(month) {
    if (!month) {
      document.getElementById('message2').innerHTML = 'This field cannot be left blank'
      return false
      } else if(Number(month) === false || month < 1 || month > 12) {
      document.getElementById('message2').innerHTML = 'Must be a valid month'
      return false
    } else 
        document.getElementById('message2').innerHTML = ''
    return true
}

  function validateYear(year) {
    if (!year) {
      document.getElementById('message3').innerHTML = 'This field cannot be left blank'
      return false
    } else if(Number(year) === false || year < 1 || year > new Date().getFullYear()) {
      document.getElementById('message3').innerHTML = 'Must be in the past'
      return false
    } else 
        document.getElementById('message3').innerHTML = ''
    return true
}

  if(!isCalculated) {
    if (validateDay(userDay) && validateMonth(userMonth) && validateYear(userYear)) {
    const today = new Date();
    const userDate = new Date(userYear, userMonth - 1, userDay);
    const ageInMilliseconds = today - userDate;

    const ageDate = new Date(ageInMilliseconds);
    const years = ageDate.getFullYear() - 1970
    const months = ageDate.getMonth()
    const days = ageDate.getDate() - 1 
    //иначе будет один лишний день

    document.getElementById('result-years').innerHTML = years
    document.getElementById('result-months').innerHTML = months
    document.getElementById('result-days').innerHTML = days
    isCalculated = true
  } else {
      document.getElementById('result-years').innerHTML = '--'
      document.getElementById('result-months').innerHTML = '--'
      document.getElementById('result-days').innerHTML = '--'
      isCalculated = false
    }
  }
})
