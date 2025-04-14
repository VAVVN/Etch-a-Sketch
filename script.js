
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');
    container.style.border = '1px solid gray';
    for (let i = 0; i < 4096; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.addEventListener('mouseover', function () {
            square.style.backgroundColor = 'black';
        });
        container.appendChild(square);
    }
    const resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', function () {
        const squares = document.querySelectorAll('.square');
        squares.forEach(square => {
            square.style.backgroundColor = 'lightgreen';
        });
    });

    // change square color to Orange
    const colorOrange = document.getElementById('colorOrange');
    colorOrange.style.backgroundColor = 'orange';
    colorOrange.addEventListener('click', function () {
        const squares = document.querySelectorAll('.square');
        squares.forEach(square => {
            square.style.backgroundColor = 'orange';
        });
    });

    // change square color to blue
    const colorBlue = document.getElementById('colorBlue');
    colorBlue.style.backgroundColor = 'lightblue';
    colorBlue.addEventListener('click', function () {
        const squares = document.querySelectorAll('.square');
        squares.forEach(square => {
            square.style.backgroundColor = 'lightblue';
        });
    });


});
