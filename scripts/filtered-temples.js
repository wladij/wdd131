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


const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Barranquilla Colombia",
      location: "Barranquilla, Colombia",
      dedicated: "2018, December, 9",
      area: 25800,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/barranquilla-colombia-temple/barranquilla-colombia-temple-4804.jpg"
    },
    {
      templeName: "Paris France",
      location: "Le Chesnay, France",
      dedicated: "2017, May, 21",
      area: 44000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-55206.jpg"
    },
    {
      templeName: "Salt Lake Temple",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6",
      area: 253015,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-6813.jpg"
    }
  ];
  
  const cardsContainer = document.querySelector('#temple-cards');
  
  function renderTemples(filteredTemples) {
    cardsContainer.innerHTML = ''; 
    filteredTemples.forEach(temple => {
      const card = document.createElement('section');
      card.innerHTML = `
        <h3>${temple.templeName}</h3>
        <p><strong>Ubicación:</strong> ${temple.location}</p>
        <p><strong>Dedicado:</strong> ${temple.dedicated}</p>
        <p><strong>Área:</strong> ${temple.area.toLocaleString()} ft²</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      `;
      cardsContainer.appendChild(card);
    });
  }
  
 
  document.querySelector('#filter-old').addEventListener('click', () => {
    const oldTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
    renderTemples(oldTemples);
  });
  
  document.querySelector('#filter-new').addEventListener('click', () => {
    const newTemples = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
    renderTemples(newTemples);
  });
  
  document.querySelector('#filter-large').addEventListener('click', () => {
    const largeTemples = temples.filter(t => t.area > 90000);
    renderTemples(largeTemples);
  });
  
  document.querySelector('#filter-small').addEventListener('click', () => {
    const smallTemples = temples.filter(t => t.area < 10000);
    renderTemples(smallTemples);
  });
  
  document.querySelector('#filter-home').addEventListener('click', () => {
    renderTemples(temples);
  });
  
 
  renderTemples(temples);
  