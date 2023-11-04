// Данный код будет выполняться после загрузки контента страницы
window.addEventListener('DOMContentLoaded', () => {
    // Получаем ссылки на элементы меню и гамбургер-кнопку
    const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu_item'),
        hamburger = document.querySelector('.hamburger');

    // Добавляем обработчик события клика на гамбургер-кнопку
    hamburger.addEventListener('click', () => {
        // Переключаем классы для анимации гамбургера и показа/скрытия меню
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    // Добавляем обработчики события клика на каждый пункт меню
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            // При клике на пункт меню также переключаем классы для гамбургера и меню
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
});

// Добавляем обработчики события клика на все ссылки, которые начинаются с символа "#"
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Получаем идентификатор целевого элемента из атрибута href ссылки
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Вычисляем вертикальное смещение до целевого элемента
            const offsetTop = targetElement.offsetTop;

            // Прокручиваем окно браузера к целевому элементу с плавной анимацией
            window.scroll({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
// Получаем ссылку на элемент, который нужно показать при прокрутке
const elementToShow = document.getElementById("myElement");

// Функция для проверки, виден ли элемент в видимой области экрана
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Функция для показа элемента при прокрутке
function showElementOnScroll() {
    if (isElementInViewport(elementToShow)) {
        // Если элемент виден, делаем его видимым
        elementToShow.style.display = "block";
    } else {
        // Если элемент не виден, проверяем, находится ли пользователь в верхней части страницы
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop <= 0) {
            elementToShow.style.display = "none"; // Если пользователь в верхней части, скрываем элемент
        }
    }
}

new WOW().init();
$(document).ready(function () {
    $('#phone-input').inputmask("+7 (999) 999-99-99");
    $('#phone-input-submit').inputmask("+7 (999) 999-99-99");

    $('#open-modal-call').click(function () {
        $('body').addClass('_lock');
        $('.modal-call').fadeIn(300).css('display', 'flex');
    });

    $('.modal__form-close, .modal').click(function (e) {
        if (e.target == this) {
            $('body').removeClass('_lock');
            $('.modal-call').fadeOut(300);
            $('.modal').fadeOut(300);
        }
    });
    
    $('#open-modal-submit').click(function () {
        $('body').addClass('_lock');
        $('.modal-submit').fadeIn(300).css('display', 'flex');
    });

    $('.modal__form-close, .modal').click(function (e) {
        if (e.target == this) {
            $('body').removeClass('_lock');
            $('.modal-submit').fadeOut(300);
        }
    });
});
const swiper = new Swiper('.swiper', {
    slidesPerView: "2",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        767: {
            slidesPerView: '2',
        },
        320: {
            slidesPerView: '1',
        },
    },
});
