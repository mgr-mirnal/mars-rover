const readline = require('readline');

const Rover = require('./rover');

function runInstructions(topX, topY, roverPosition, instructions){
    const[x, y , direction] = roverPosition.split(' ');
    // console.log(x,y,direction)
    // console.log(instructions)
    // console.log(topX, topY)
    const rover = new Rover(parseInt(x), parseInt(y), direction); // creating new instance of rover class

    console.log(`Starting Positon: ${rover.getPosition()}`)
    try{
        console.log("ok")
        for (const instruction of instructions){
            if(instruction === "L"){
                rover.turnLeft();
            }else if(instruction === "R"){
                rover.turnRight()
            }else if(instruction === "M"){
                rover.moveForward(topX, topY)
            }
        }
    }catch(error){
        console.error("Error inputing max coordinates: ", error);
    }
    console.log(`Ending Position: ${rover.getPosition()}`);
    return rover.getPosition();
}

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let roverIndex = 0;
const roverPositions = [];
let maxCoordinates;

function processRover(){
    r.question(`Enter rover ${roverIndex + 1} position: `, (roverPosition) => {
        r.question(`Enter the rover ${roverIndex +1} instruction: `, (givenInstruction) => {
            try {
                const endingPostion = runInstructions(maxCoordinates[0], maxCoordinates[1], roverPosition, givenInstruction);
                roverPositions.push(endingPostion);
                
                roverIndex++;
                if(roverIndex < 2){
                    processRover();
                }else{
                    console.log('Ending Positions: ');
                    for(let i = 0; i < roverPositions.length; i++){
                        console.log(` Rover ${i + 1}: ${roverPositions[i]}`);
                    }
                    r.close()
                }
            }catch(error){
                console.error('Error processing rover:', error);
                r.close();
            }
        })
    })
}


r.question('Enter Plature max coordinates: ', (givenCoordinates) => {
    try{
        maxCoordinates = givenCoordinates.split(' ').map(Number);
        processRover();
    }catch(error){
        console.error("Error inputing max coordinates: ", error);
    }
})

module.exports = {runInstructions, processRover}