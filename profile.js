const username = document.querySelector('#username')
const userEmail = document.querySelector('#email')
const leaveBtn = document.querySelector('#leaveBtn')

let getUserData = JSON.parse(localStorage.getItem('userLogged'))

getUserData.forEach(user => {
  username.innerHTML = `Nome: ${user.name}`
  userEmail.innerHTML = `Email: ${user.email}`
});

leaveBtn.addEventListener('click', () => {
  window.location.replace('index.html')
})



