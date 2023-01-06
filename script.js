const emailLogin = document.querySelector('#input-email-login')
const passwordLogin = document.querySelector('#input-password-login')
const loginBtn = document.querySelector('#login-btn')

let registeredUsers = JSON.parse(localStorage.getItem('users'))

function userLogin() {
  loginBtn.addEventListener('click', () => {
    getUserLoggedData()
    registeredUsers.forEach(user => {
      if (emailLogin.value === user.email && passwordLogin.value === user.password) {
        alert('Usuário logado')
        emailLogin.value = ''
        passwordLogin.value = ''
      }
    })
  })
}

userLogin()

function getUserLoggedData() {
  let userData = registeredUsers.filter(user => user.email === emailLogin.value)
  localStorage.setItem('userLogged', JSON.stringify(userData))
}




