document.addEventListener("DOMContentLoaded", function() {
    
    const currentYear = new Date().getFullYear();
    document.getElementById("current-year").innerText = currentYear;

    
    const lastModified = document.lastModified;
    document.getElementById("lastModified").innerText = "Last Modified: " + lastModified;
});



let counter = localStorage.getItem('reviewCount');
if (counter === null) {
  counter = 1;
} else {
  counter = parseInt(counter) + 1;
}
localStorage.setItem('reviewCount', counter);
document.getElementById('counter').textContent = counter;