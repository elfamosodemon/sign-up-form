const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const confirm_password = document.getElementById('confirm-password')

form.addEventListener('submit', (e) => {
    let messages = []
    if (password.value != confirm_password.value) {
        e.preventDefault()
        messages.push("* Passwords do not match")
        errorElement.innerText = messages.join(', ')
    }
})