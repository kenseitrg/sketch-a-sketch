let settings = {"numElements": 40,
    "canvasSize": 700
};

function prepareArea() {
    const canvas = document.getElementById("container");
    canvas.style.width = settings.canvasSize;
    canvas.style.height = settings.canvasSize;
    canvas.style.gridTemplateColumns = `repeat(${settings.numElements},
        ${settings.canvasSize/settings.numElements}px)`;
    canvas.style.gridTemplateRows = `repeat(${settings.numElements},
            ${settings.canvasSize/settings.numElements}px)`;
    generateCells(canvas);
    document.getElementById("reset").addEventListener("click",
        changeSettings);
    return 0;
}

function generateCells(canvas) {
    for (let i=1; i<=settings.numElements; i++) {
        for (let j=1; j<=settings.numElements; j++) {
            let cell = document.createElement("div");
            cell.style.gridRow = i;
            cell.style.gridColumn = j;
            cell.addEventListener("pointerover", (e) => {
                changeColor(e);
            });
            canvas.appendChild(cell);
        }
    }
    return 0;
}

function changeColor(event) {
    event.target.style.backgroundColor = "black";
    return 0;
}

function changeSettings() {
    const num = window.prompt("Please enter number of cells in a row", 10);
    settings.numElements = num;
    const canvas = document.getElementById("container");
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    prepareArea();
    return 0;
}

window.addEventListener("load", prepareArea);
