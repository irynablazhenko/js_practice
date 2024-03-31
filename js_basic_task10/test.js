import { assert, expect, should } from "chai"

describe("Tests Describe", () => {

    it("String tests", () => {
        const text = "Some random string"
        console.log(text)
        assert.isString(text, "This is string")
        assert.typeOf(text, "string", "Type of variable is string")
        assert.lengthOf(text, 18, 'text`s value has a length of 18')
        expect(text).to.equals("Some random string", `The variable is equal '${text}'`)
        expect(text).to.have.lengthOf(18)
    });


    it("Number tests", () => {
        const number = 245
        console.log(number)
        assert.isNotArray(number, "Variable is not array")
        expect(number).to.equals(245, "Variable is equal 245")

    });

    it("Test2-3", () => {
        const number = 25 / 5
        console.log(number)
        assert.isNotNull(number, "result is not a null")
        expect(number).to.above(0, "result is greater than 0")
    });

})