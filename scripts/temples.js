document.addEventListener("DOMContentLoaded", function() {
    
    const currentYear = new Date().getFullYear();
    document.getElementById("current-year").innerText = currentYear;

    
    const lastModified = document.lastModified;
    document.getElementById("lastModified").innerText = "Last Modified: " + lastModified;
});

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const header = document.querySelector('header');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    header.classList.toggle('show'); // <--- nuevo
});