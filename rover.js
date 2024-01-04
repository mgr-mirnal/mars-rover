class Rover{
    constructor(x, y, direction){
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    turnLeft(){
        // console.log(this.direction)
            if(this.direction === 'N'){
                this.direction = 'W'
            }else if(this.direction === 'W'){
                this.direction = 'S'
            }else if(this.direction === 'S'){
                this.direction = 'E'
            }else if(this.direction === 'E'){
                this.direction = 'N'
            }
    }
    turnRight(){
        if(this.direction === 'N'){
            this.direction = 'E'
        }else if(this.direction === 'E'){
            this.direction = 'S'
        }else if(this.direction === 'S'){
            this.direction = 'W'
        }else if(this.direction === 'W'){
            this.direction = 'N'
        }
    }
    moveForward(topX, topY) {
        if (this.direction === 'N') {
            if (this.y < topX) {this.y++};
        } else if (this.direction === 'E') {
            if (this.x < topY) { this.x++};
        } else if (this.direction === 'S') {
            if (this.y > 0) {this.y--};
        } else if (this.direction === 'W') {
            if (this.x > 0) {this.x--};
        }
    }
    getPosition(){
        return `${this.x} ${this.y} ${this.direction}` // funciton to retrun rover postions
    }
}

module.exports = Rover;