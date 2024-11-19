$(document).ready(function() {
    var altura = $('.menu').offset().top;

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > altura) {
            $('.menu').addClass('menu-fixed');
        } else {
            $('.menu').removeClass('menu-fixed');
        }
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.querySelector('.products');
    productsContainer.addEventListener('click', (event) => {
        const productElement = event.target.closest('.product');
        if (productElement) {
            const id = productElement.getAttribute('data-id');
            window.location.href = `producto.html?id=${id}`;
        }
    });
});