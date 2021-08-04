const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (let i=1; i<6; i++) {
  let newImage = document.createElement('img');
  newImage.setAttribute('src', `images/pic${i}.jpg`);
  thumbBar.appendChild(newImage);
  newImage.onclick = function(e) {
    displayedImage.src = newImage.src
  }
}

/* Wiring up the Darken/Lighten button */
// const image = document.querySelectorAll('image')
// console.log(image)
btn.addEventListener('click', darken)

function darken() {
  const btnClass = btn.getAttribute('class')
  // console.log('전 됨')
  console.log(btnClass)
  if (btnClass === 'dark') {
    // console.log('됨')
    btn.setAttribute('class', 'light')
    btn.textContent = 'Lighten'
    console.log(overlay)
    console.log(overlay.style)
    console.log(overlay.style.backgroundColor)
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'
    console.log(overlay.style.backgroundColor)
    
  } else {
    btn.setAttribute('class', 'dark')
    btn.textContent = 'darken'
    overlay.style.backgroundColor = 'rgba(0,0,0,0)'
  }

}
