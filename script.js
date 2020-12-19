const grid = document.querySelector('#container');
const clearBtn = document.querySelector('#clear');
const text = document.querySelector('#Area');

let input;

// Parses the input to an integer when user presses enter.
document.getElementById('Area').addEventListener('keyup', event => {
if(event.keyCode === 13) {
    input = parseInt(event.currentTarget.value);
    console.log(input);
}
})

// Calls the sketch grid when user hits enter.
document.getElementById('Area').addEventListener('keyup', event => {
    if(event.keyCode === 13) {sketch(input)};
});

// Creates the initial default size grid (area: 100).
gridCreator = () => {
    for (let i = 0; i < 10000; i++) {
    const etch = document.createElement(`div${i}`);
    etch.className = 'square';
    etch.addEventListener('mouseover', function() {blk = etch.style.backgroundColor = 'black';});
    grid.appendChild(etch);
    }
}

// Calls a new grid based on the area of square when the user enters an input.
function sketch(input) {
    let area = input * input;
    if (input >= 4 && input <= 100) {
        grid.innerHTML = '';
        for (let i = 0; i < area; i++) {
            const etch = document.createElement(`div${i}`);
            etch.className = 'square';
            etch.addEventListener('mouseover', function() {blk = etch.style.backgroundColor = 'black';});
            grid.style.gridTemplateRows = `repeat(${input}, ${500 / input}px)`;
            grid.style.gridTemplateColumns = `repeat(${input}, ${500 / input}px)`;
            etch.style.height = `${500 / input}px`;
            etch.style.width = `${500 / input}px`;
            grid.appendChild(etch);
        }
    }
    else console.log('invalid input');
}

// Sets conditions for the clear button.
clearBtn.addEventListener('click', function() {
    if(Number.isInteger(input)) {
        grid.innerHTML = '';
        grid.style = `grid-template-columns: repeat(${input}, 2fr)`;
        grid.style = `grid-template-rows: repeat(${input}, 2fr)`;
        sketch(input);
    }
    else {
        grid.innerHTML = '';
        grid.style = 'grid-template-columns: repeat(100, 2fr)';
        grid.style = 'grid-template-rows: repeat(100, 2fr)';
        gridCreator();
    }
});

// Creates initial grid.
gridCreator();

