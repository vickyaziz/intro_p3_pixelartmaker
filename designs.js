// Vicky's PixelArt //

/* User Logic:
    1. Insert Grid Height Value
    2. Insert Grid Width Value
    3. Click Submit
    4. Pick a Color
    5. Coloring the Canvas, Enjoy!
*/ 

/* Coding Logic:
    1. Code getting Height and Width Value
    2. Calling makeGrid(gridHeight, gridWidth) Function
    3. Creating Canvas then Cleaning it
    4. Generate population of Cells, based on Height and Width Value
    5. Select Color Input from User selected
    6. Target Cell when clicked, change the backgroundColor into Color from User selected
*/

// makeGrid Function
function makeGrid(gridHeight, gridWidth) {
    // Creating Canvas
    const canvas = document.getElementById('pixelCanvas');
    // Clean Canvas
    canvas.innerHTML = '';
    
    // Loop to Generate Rows
    for (let i = 0; i < gridHeight; i++) {
        let row = canvas.insertRow(i);
        // Loop to Generate Cells
        for (let j = 0; j < gridWidth; j++) {
            let cell = row.insertCell(j);
            // Add a Click Event to the Cells
            cell.addEventListener('click', function(event) {
                // When the Cell Clicked, the Background Color changes to the Selected Color
                event.target.style.backgroundColor = document.getElementById('colorPicker').value;
            });
        }
    }
}

// Add Click Event when the Submit button is Clicked
document.getElementById('sizePicker').addEventListener('submit', function(event) {
    event.preventDefault();

    // Getting Height Value
    const getHeight = document.getElementById('inputHeight').value;
    
    // Getting Width Value
    const getWidth = document.getElementById('inputWidth').value;

    // Making Grid with the Height and Width Submitted Value
    makeGrid(getHeight, getWidth);
});