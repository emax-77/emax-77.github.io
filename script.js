document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.createElement('span');
    yearSpan.textContent = new Date().getFullYear();
    document.querySelector('footer p').append(` ${yearSpan.textContent}`);
});
