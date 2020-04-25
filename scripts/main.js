let gridSize = 128;
const gridPixels = 512;
let mouseDown = false;
let tiles;
let container = document.getElementById(`container`)
let resetButton = document.getElementById(`reset-grid`)
let sizeButton = document.getElementById(`change-size`)

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
    // tiles = document.querySelectorAll('.tile')
    // tiles.forEach(tile => tileEvent(tile))
}

createGrid(gridSize);

function changeColor(tile, newColor)
{
    tile.style.backgroundColor = newColor;
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

function resetGrid()
{
    tiles.forEach(tile => resetTile(tile));
}

function resetTile(tile)
{
    if (tile.style.backgroundColor != "#FFFFFF")
    {
        changeColor(tile, "#FFFFFF");
    }
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
        if (tile.backgroundColor != "#000000")
            {
                changeColor(tile, "#000000");
            }
    }
}

container.addEventListener(`mouseover`, function(e)
{
    checkMouse(e.target);
});

container.addEventListener('mousedown', mouseOn);
container.addEventListener('mouseup', mouseOff);
container.addEventListener('mouseleave', mouseOff);
sizeButton.addEventListener('click', changeGridSize);
resetButton.addEventListener('click', resetGrid);

/*
 512 => 16 => 2x2
 512 => 8 => 4x4
 512 => 12 => 2.5x2.5
*/