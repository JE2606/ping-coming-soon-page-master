const form = document.querySelector('.form');
const input = document.querySelector('.input');
const message = document.querySelector('.message');
const messageText = 'Please provide a valid email '
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const mail = input.value.trim();
    let formIsValid = true;
    if (!validEmail(mail)) {
        input.classList.toggle('error-input');
        message.innerHTML = messageText;
        message.classList.toggle('error-message');
        formIsValid = false;
    }
    if (formIsValid) {
        form.submit();
    }
})

validEmail = email => {
    const expression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expression.test(email);
}