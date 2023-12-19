const {runInstructions} = require("./function")

describe("function", () => {
    it("should run instruction for rover", () => {
        const topX = 5
        const topY = 5

        roverPosition = '1 2 N'
        const instructions = 'LMLMLMLMM';

        endingPosition = runInstructions(topX, topY, roverPosition, instructions)

        expect(endingPosition).toBe("1 3 N")
    })
})