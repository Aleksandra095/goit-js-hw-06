const counterValue = document.getElementById("value");
let count = 0;

document.querySelectorAll('[data-action="increment"]').forEach(button => {
    button.addEventListener("click", () => {
    count++;
    counterValue.textContent = count;
    });
});

document.querySelectorAll('[data-action="decrement"]').forEach(button => {
    button.addEventListener("click", () => {
    count--;
    counterValue.textContent = count;
    });
});