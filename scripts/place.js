document.addEventListener("DOMContentLoaded", function() {
    
    const currentYear = new Date().getFullYear();
    document.getElementById("current-year").innerText = currentYear;

    
    const lastModified = document.lastModified;
    document.getElementById("lastModified").innerText = "Last Modified: " + lastModified;
});



const temperature = 23; 
const windSpeed = 10;   

function calculateWindChill(tempC, speedKmh) {
    return (
        13.12 +
        0.6215 * tempC -
        11.37 * Math.pow(speedKmh, 0.16) +
        0.3965 * tempC * Math.pow(speedKmh, 0.16)
    ).toFixed(1);
}

function displayWindChill() {
    const windChillElement = document.getElementById("wind");

    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill} °C`;
    } else {
        windChillElement.textContent = "N/A";
    }
}

window.addEventListener("load", displayWindChill);
