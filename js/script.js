let link = document.querySelector(".login-link");
let popup = document.querySelector(".modal-login");
let close = popup.querySelector(".modal-close");
let form = popup.querySelector("form");
let login = popup.querySelector("[name=login]");
let password = popup.querySelector("[name=password]");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    login.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
    if (!login.value || !password.value ) {
        evt.preventDefault();
        console.log("Нужно ввести логин и пароль");
    }
});

console.log(document.querySelector('.main-navigation'));

let amount = 5;
let amountDiscount;

if (amount <= 5) {
    amountDiscount = 'Новый клиент';
} else if (amount > 5) {
    amountDiscount = 'Частый посетитель';
} else if (amount >= 10 && amount <= 20) {
    amountDiscount = 'Уверенный заказчик';
}