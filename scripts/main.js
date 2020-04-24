const gridSize = 4;
const gridPixels = 512;

function createGrid(size)
{
    let container = document.getElementById(`container`)
    console.log(container);
    let start = 0;
    let tileAmount = size * size;
    let tilePixelWidth = gridPixels / (size)
    while (start < tileAmount)
    {
        let div = document.createElement('div');
        div.id = 'tile';
        div.style.height = tilePixelWidth + "px";
        div.style.width = tilePixelWidth + "px";
        div.style.color = "#000000";
        div.style.display = "inline-block";
        container.appendChild(div);
        start++;
    }
}

createGrid(gridSize);

/*
 512 => 16 => 2x2
 512 => 8 => 4x4
 512 => 12 => 2.5x2.5
*/