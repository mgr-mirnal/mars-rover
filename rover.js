class Rover{
    constructor(x, y, direction){
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    turnLeft(){
            if(this.direction === 'N'){
                this.direction == 'W'
            }else if(this.direction === '"W"'){
                this.direction == 'S'
            }else if(this.direction === 'S'){
                this.direction == 'E'
            }else if(this.direction === 'E'){
                this.direction == 'N'
            }
    }
    turnRight(){
        if(this.direction === 'N'){
            this.direction == 'E'
        }else if(this.direction === '"E"'){
            this.direction == 'S'
        }else if(this.direction === 'S'){
            this.direction == 'W'
        }else if(this.direction === 'W'){
            this.direction == 'N'
        }
    }
    
}