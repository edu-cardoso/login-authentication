const emailLogin = document.querySelector('#input-email-login')
const passwordLogin = document.querySelector('#input-password-login')
const loginBtn = document.querySelector('#login-btn')

let registeredUsers = JSON.parse(localStorage.getItem('users'))

loginBtn.addEventListener('click', () => {
  registeredUsers.forEach(user => {
    if(emailLogin.value === user.email && passwordLogin.value === user.password) {
      console.log('ok');
      emailLogin.value = ''
      passwordLogin.value = ''
    }
  });
})
