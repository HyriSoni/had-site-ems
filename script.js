// Получаем элементы
const applyBtn = document.getElementById("applyBtn");
const modal = document.getElementById("applyModal");
const closeBtn = document.querySelector(".close-btn");

// Функция для открытия модального окна
applyBtn.addEventListener("click", function() {
    modal.style.display = "flex"; // Показываем модальное окно
});

// Функция для закрытия модального окна
closeBtn.addEventListener("click", function() {
    modal.style.display = "none"; // Скрываем модальное окно
});

// Закрытие модального окна, если кликнуть за его пределами
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Скрываем модальное окно
    }
});
