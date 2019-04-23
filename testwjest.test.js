//these are for reference only.  These tests won't run properly unless you add jest to the folder where they are located.

describe("greeting", () => {
    test ("returns a greeting of hello", () => {
        expect(greeting()).toBe("hello")
    })
})

greeting = () => {
    return "hello"
}

//write a function returns "drink coffee" if you are tired and "keep working" if you are not tired.

describe("coffee", () => {
    test ("returns drink coffee if tired, keep working if not", () => {
        expect(coffee("tired")).toBe("drink coffee")
        expect(coffee("not tired")).toBe("keep working")
        expect(coffee("ablaldalkdj")).toBe("put in tired or not tired")

    })
})

coffee = (str) => {
    if(str === "tired"){
        return "drink coffee"
    } else if (str === "not tired") {
        return "keep working"
    } else {
        return "put in tired or not tired"
    }
}

describe("oddNums", () => {
    var input = [5, 7, 3, 10, 2]
    var output = [5, 7, 3]
    var input2 = [7, 5, 3, 10, 12, 15]
    var output2 = [7, 5, 3, 15]
    test ("returns an array with only odd numbers", () => {
        expect(oddNums(input)).toEqual(output)
        expect(oddNums(input2)).toEqual(output2)
    })
})

oddNums = (arr) => {
    return empty = arr.filter(v => v % 2 !== 0)
}
