const nameInput = document.getElementById("name");
const messageInput = document.getElementById("message");
const phoneInput = document.getElementById("phoneNumber");
const emailInput = document.getElementById("email");

nameInput.addEventListener("blur", validateName);
messageInput.addEventListener("blur", validateMessage);
phoneInput.addEventListener("blur", validatePhone);
emailInput.addEventListener("blur", validateEmail);

function validateName() {
    const error = document.getElementById("nameError");
    error.textContent = nameInput.value.trim() === "" ? "Ім’я обов’язкове" : "";
}

function validateMessage() {
    const error = document.getElementById("messageError");
    error.textContent = messageInput.value.trim().length < 5 ? "Повідомлення повинне містити щонайменше 5 символів" : "";
}

function validatePhone() {
    const error = document.getElementById("phoneError");
    const phoneRegex = /^\+380\d{9}$/;
    error.textContent = !phoneRegex.test(phoneInput.value.trim()) ? "Невірний номер. Формат: +380XXXXXXXXX" : "";
}

function validateEmail() {
    const error = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    error.textContent = !emailRegex.test(emailInput.value.trim()) ? "Невірна електронна адреса" : "";
}

document.getElementById("helper").addEventListener("submit", function(event) {
    event.preventDefault();

    validateName();
    validateMessage();
    validatePhone();
    validateEmail();

    const hasError = document.querySelectorAll(".error")
        .length && Array.from(document.querySelectorAll(".error")).some(e => e.textContent !== "");

    if (!hasError) {
        console.log({
            name: nameInput.value.trim(),
            message: messageInput.value.trim(),
            phone: phoneInput.value.trim(),
            email: emailInput.value.trim()
        });
        alert("Дані надіслано!");

    }
});