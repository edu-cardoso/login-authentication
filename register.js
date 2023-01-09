const username = document.querySelector('#input-name')
const email = document.querySelector('#input-email')
const password = document.querySelector('#input-password')
const passwordLength = document.querySelector('#passwordLength')
const passwordVerify = document.querySelector('#input-password-verify')
const registerBtn = document.querySelector('#register-btn')

function checkPasswordLength() {
  password.addEventListener('keyup', () => {
    if(password.value.length < 6 && password.value.length !== 0) {
      passwordLength.innerHTML = 'A senha deve conter 6 ou mais caracteres'
      passwordLength.style.color = 'red'
    } else {
      passwordLength.innerHTML = ''
    }
  })
}

checkPasswordLength()

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
  if (password.value.length >= 6 && password.value === passwordVerify.value) {
    return true
  } else {
    alert('As senhas digitas não se coincidem')
    clearForm()
  }
}

function validateEmail(email) {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}

registerBtn.addEventListener('click', () => {
  if (username.value !== '' && validatePassword() && validateEmail(email.value) && userExists()) {
    alert('Cadastro realizado com sucesso!')
    setUsersOnDB()
  }
})

function clearForm() {
  username.value = ''
  email.value = ''
  password.value = ''
  passwordVerify.value = ''
}

function userExists() {
  let emails = users.map(user => {
    return user.email
  });
  if (emails.includes(email.value)) {
    alert('Email já cadastrado')
    clearForm()
    return false
  }
  return true
}






















