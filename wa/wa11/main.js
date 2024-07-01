const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
// const imageFileNames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const imageFileNames = ['Mav.jpeg', 'Mav2.jpeg', 'MeAndBro.jpeg', 'Skiing.jpeg', 'SnoopOnAStoop.jpeg'];

/* Declaring the alternative text for each image file */

const imageAltText = {
    // 'pic1.jpg': 'Closeup of a blue human eye',
    // 'pic2.jpg': 'Rock',
    // 'pic3.jpg': 'Purple flowers',
    // 'pic4.jpg': '',
    // 'pic5.jpg': ''

    'Mav.jpeg': 'My dog Maverick',
    'Mav2.jpeg': 'My dog Maverick',
    'MeAndBro.jpeg': 'Me and my roommate in Flagstaff',
    'Skiing.jpeg': 'Me skiing',
    'SnoopOnAStoop.jpeg': 'Snoop on a Stoop'

}

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', '`images/${filename}');
newImage.setAttribute('alt', imageFileName['/images']);
thumbBar.appendChild(newImage);
newImage.addEventListener('click', (e) => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class', 'light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class', 'dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });