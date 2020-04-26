let gridSize = 64;
const gridPixels = 512;
let mouseDown = false;
let tiles;
let container = document.getElementById(`container`)
let resetButton = document.getElementById(`reset-grid`)
let sizeButton = document.getElementById(`change-size`)
let colorButton = document.getElementById(`change-color`)
let colorIndicator = document.getElementById(`chosen-color`)
let mainColor = "#000000";

function createGrid(size)
{
    console.log(container);
    let start = 0;
    let tileAmount = size * size;
    let tilePixelWidth = gridPixels / (size)
    while (start < tileAmount)
    {
        let div = document.createElement('div');
        div.classList = 'tile';
        div.style.height = tilePixelWidth + "px";
        div.style.width = tilePixelWidth + "px";
        div.style.backgroundColor = "#FFFFFF";
        div.draggable = false;
        container.appendChild(div);
        start++;
    }
    tiles = document.querySelectorAll('.tile')
    // tiles.forEach(tile => tileEvent(tile))
}

createGrid(gridSize);

function changeTileColor(tile, newColor)
{
    if (tile.backgroundColor != newColor)
        {
            tile.style.backgroundColor = newColor;
        }
}

function changeGridSize()
{
    gridSize = prompt("How many columns would you like the grid to have?");
    while(container.firstChild)
    {
        container.removeChild(container.lastChild);
    }
    createGrid(gridSize);
    
}

function changeColor()
{
    let correct = false;
    let warn = false;
    let color = "";
    let key = "0123456789ABCDEF"
    while(!correct)
    {
        warn = false;
        color = prompt("Enter 6-digit hex value for the color you want (Ignore the # -> #??????)");
        color = color.toUpperCase();
        console.log(color);
        for (char in color)
        {
            if (!key.includes(color[char]))
            {
                warn = true;
            }
        }
        console.log(color.length);
        if (color.length != 6)
        {
            warn = true;
        }
        if (!warn)
        {
            correct = true
        }
        else
        {
            alert("Incorrect Input, try again! (only 0-9, A-F allowed!)")
        }
    }

    color = "#" + color;
    colorIndicator.style.backgroundColor = color;
    mainColor = color;
}

function resetGrid()
{
    tiles.forEach(tile => resetTile(tile));
}

function resetTile(tile)
{
    changeTileColor(tile, "#FFFFFF");
}

function mouseOff()
{
    mouseDown = false;
    console.log(mouseDown);
}

function mouseOn()
{
    mouseDown = true;
    console.log(mouseDown);
}

function checkMouse(tile)
{
    if (mouseDown)
    {
        changeTileColor(tile, mainColor);
    }
}

container.addEventListener(`mouseover`, function(e)
{
    checkMouse(e.target);
});

container.addEventListener(`mousedown`, function(e)
{
    changeTileColor(e.target, mainColor);
});

container.addEventListener('mousedown', mouseOn);
container.addEventListener('mouseup', mouseOff);
container.addEventListener('mouseleave', mouseOff);
sizeButton.addEventListener('click', changeGridSize);
resetButton.addEventListener('click', resetGrid);
colorButton.addEventListener('click', changeColor);

/*
 512 => 16 => 2x2
 512 => 8 => 4x4
 512 => 12 => 2.5x2.5
*/