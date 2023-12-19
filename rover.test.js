
const Rover = require('./rover');

describe("Rover class", () => {


    it('rover should face W when it turns left from N, ', ()=>{
        let rover = new Rover(1 , 2 , 'N')

        rover.turnLeft();
        expect(rover.direction).toEqual('W')
    })
    
   
    it('rover should face E when it turns right, ', ()=>{
        let rover = new Rover(1 , 2 , 'N')

        rover.turnRight();
        expect(rover.direction).toEqual('E')
    })

    it('rover should move forword when moveforward functin is called', ()=>{
        let rover = new Rover(1, 2 , 'N')

        rover.moveForward(5,5)
        expect(rover.y).toEqual(3)
    })
    it('getPostion should return current postion', ()=>{
        let rover = new Rover(1, 2, 'N')

        const position = rover.getPosition();
        expect(position).toEqual("1 2 N")
    })

})