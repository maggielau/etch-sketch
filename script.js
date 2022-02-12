//Creating grid squares

//initialize container
const container = document.querySelector('.container');
let pixel;

function drawGrid (gridSize=10) {
    //Draw the grid
    for (i=0;i<gridSize*gridSize; i++) {

        //create each grid pixel
        pixel = document.createElement('div');
        container.appendChild(pixel);

        //Style the grid pixels, set width/height according
        //to gridSize selected
        pixel.classList.add('pixel');
        pixel.style.setProperty('width', `${500/gridSize-2}px`);
        pixel.style.setProperty('height', `${500/gridSize-2}px`);
    }
    runSketcher();
}


//Function to colour the pixels
function colourPixel(e) {
    this.style.background = "#000";
}



function clearGrid(e) {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        pixel.style.background = "#FFF";
    });

    let userGridSize = prompt("Please enter a new grid size", "10");

    while (container.firstChild) container.removeChild(container.firstChild);

    drawGrid(userGridSize);
    return;

}


// Create initial grid when DOM loaded
window.addEventListener('DOMContentLoaded', (e) => {
    drawGrid();
});


//Add reset function to button
const resetbtn = document.getElementById('reset');
resetbtn.addEventListener('click', clearGrid);


//Add hover effect on pixel
function runSketcher() {
    const pixels = Array.from(document.querySelectorAll('.pixel'));
    pixels.forEach(pixel => pixel.addEventListener('mouseover', colourPixel));
}

