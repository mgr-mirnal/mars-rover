const {runInstructions} = require("./function")

describe("function", () => {
    it("should run instruction for rover 1", () => {
        const topX = 5
        const topY = 5

        roverPosition = '1 2 N'
        const instructions = 'LMLMLMLMM';

        endingPosition = runInstructions(topX, topY, roverPosition, instructions)

        expect(endingPosition).toBe("1 3 N")
    })
    it("should run instruction for rover 2", () => {
        const topX = 5
        const topY = 5

        roverPosition = '3 3 E'
        const instructions = 'MMRMMRMRRM';

        endingPosition = runInstructions(topX, topY, roverPosition, instructions)

        expect(endingPosition).toBe("5 1 E")
    })
    
})