let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let fs = require("fs");

app.use(express.static("../client"));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, () => {
    console.log('connected');
});


function matrixGenerator(matrixSize, grassCount, grassEaterCount, predatorCount) {
    let matrix = [];
    for (let i = 0; i < matrixSize; i++) {
        matrix.push([]);
        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0);
        }

    }

    for (let j = 0; j < grassCount; j++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
        }
    }

    for (let j = 0; j < grassEaterCount; j++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
        }
    }

    for (let j = 0; j < predatorCount; j++) {

        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
        }
    }


    return matrix;
}

matrix = matrixGenerator(20, 4, 4, 15);

io.sockets.emit('send matrix', matrix)


 grassArr = [];
 grassEaterArr = [];
 predatorArray = [];


 Grass = require("./grass");
 GrassEater = require("./grassEater");
 Predator = require("./predator");

 function createObject(matrix){
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y);
                grassArr.push(gr);
                console.log(grassArr);

            } else if (matrix[y][x] == 2) {
                let grEat = new GrassEater(x, y);
                grassEaterArr.push(grEat);
            }
            else if(matrix[y][x] ==3){
                let pred  = new Predator(x,y);
                predatorArray.push(pred);
            }
        }

    }
 }