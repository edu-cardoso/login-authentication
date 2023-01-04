const username = document.querySelector('#input-name')
const email = document.querySelector('#input-email')
const password = document.querySelector('#input-password')
const passwordVerify = document.querySelector('#input-password-verify')
const registerBtn = document.querySelector('#register-btn')


let users = JSON.parse(localStorage.getItem('users')) || []

function setUsersOnDB() {
  users.push({
    name: username.value,
    email: email.value,
    password: password.value,
  })
  localStorage.setItem('users', JSON.stringify(users))
  clearForm()
}

function validatePassword() {
  registerBtn.addEventListener('click', () => {
    if (password.value.length >= 6 && password.value === passwordVerify.value) {
      setUsersOnDB()
    }
  })
}

validatePassword()

function clearForm() {
  username.value = ''
  email.value = ''
  password.value = ''
  passwordVerify.value = ''
}






