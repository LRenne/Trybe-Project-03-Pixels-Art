window.onload = () => {
    sessionStorage.setItem('backgroundColor', 'black');
  };
  
const pixelBoard = document.getElementById('pixel-board');
const resetBtn = document.querySelector('.btn')
const selectedColor = document.querySelector('selectColor')

const colorBlack = document.getElementById('black');
const colorBlue = document.getElementById('blue');
const colorRed = document.getElementById('red');
const colorGreen = document.getElementById('green');
const selected = document.getElementsByClassName('selected');
const pixelDiv = document.getElementsByClassName('pixel');

function fill(a){

    for (let index = 0; index < a; index ++) {
        let newPixel = document.createElement('div');
        newPixel.setAttribute('class', 'pixel');
        document.getElementById('pixel-board').appendChild(newPixel);
    }
}
fill(25);

   colorBlack.addEventListener('click', () =>{
    sessionStorage.setItem('backgroundColor', 'black');
    selected[0].classList.remove('selected');
    colorBlack.classList.add('selected');
  })
  colorBlue.addEventListener('click', () =>{
    sessionStorage.setItem('backgroundColor', 'blue');
    selected[0].classList.remove('selected');
    colorBlue.classList.add('selected');
  })
  colorRed.addEventListener('click', () =>{
    sessionStorage.setItem('backgroundColor', 'red');
    selected[0].classList.remove('selected');
    colorRed.classList.add('selected');
  })
  colorGreen.addEventListener('click', () =>{
    sessionStorage.setItem('backgroundColor', 'green');
    selected[0].classList.remove('selected');
    colorGreen.classList.add('selected');
  })

resetBtn.addEventListener('click', () => {
    for (let index = 0; index < pixelDiv.length; index += 1) {
        pixelDiv[index].style.backgroundColor = 'white';
    }
});
    
for (let index = 0; index < pixelDiv.length; index += 1) {
  pixelDiv[index].addEventListener('click', (event) => {
    const color = sessionStorage.getItem('backgroundColor');
    const place = event.target;
    place.style.backgroundColor = color;
  });
}