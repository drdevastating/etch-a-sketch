function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let container = document.querySelector('.container');
let changeGrid = document.getElementById('changeGrid');

changeGrid.addEventListener('click',() => {
    let rows = parseInt(document.getElementById('rowsInput').value);
    let columns = parseInt(document.getElementById('columnsInput').value);

    if (rows>100 || columns>100 || rows <= 0 || columns <= 0) {
        alert('Please enter valid numbers for rows and columns (between 0-100).');
        return;
    }

    // Clear previous content in container
    container.innerHTML = '';

    container.style.setProperty('--rows', rows);
    container.style.setProperty('--columns', columns);

    // Create squares dynamically based on rows and columns
    for (let i = 0; i < rows * columns; i++) {
        let square = document.createElement('div');
        square.classList.add("square");
        container.appendChild(square);
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = selectedColor;
        });
    }
});

let rainbow = document.querySelector("#random");

rainbow.addEventListener('click',()=>{
    let squares = document.querySelectorAll('.square');
    squares.forEach(square =>{
      square.addEventListener('mouseover',() => {
        square.style.backgroundColor = getRandomColor();
      });
    });
});

let eraser = document.querySelector("#eraser");

eraser.addEventListener('click',()=>{
    let squares = document.querySelectorAll('.square');
    squares.forEach(square =>{
      square.addEventListener('mouseover',() => {
        square.style.backgroundColor = 'white';
      });
    });
});

let reset = document.querySelector('#reset');

reset.addEventListener('click',()=>{
    let squares = document.querySelectorAll('.square');
    squares.forEach(square =>{
        square.style.backgroundColor = 'white';
    });
});

let color = document.getElementById('colour');
let colorPicker = document.getElementById('colorPicker');
let selectedColor='#000000';

color.addEventListener('click', () => {
    colorPicker.click(); // Simulate a click on the hidden color input
});

colorPicker.addEventListener('input', (event) => {
    selectedColor=event.target.value;
});