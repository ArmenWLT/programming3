let socket = io();


let side = 40;



function setup() {
    frameRate(10);
    createCanvas(20 * side, 20 * side);
}

function draw() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill('green');
            }
            else if (matrix[y][x] == 2) {
                fill('yellow');
            } else if (matrix[y][x] == 3) {
                fill('red');
            } else {
                fill('gray');
            }
            rect(x * side, y * side, side, side);

        }

    }

    for (let i in grassArr) {

        grassArr[i].mul()
    }
    
    for (let i in grassEaterArr) {
    
        grassEaterArr[i].eat()
    }

    for(let i in predatorArray){
        predatorArray[i].eat()
    }
}

