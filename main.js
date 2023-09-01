/*
    Define a function with a single parameter. When the function
    is invoked, an argument is required.
*/

const queens = []
const tributeChest = []

const payTribute = (tribId, tribDescrip,queenId) => {
    const tribObject = {
        id: tribId,
        description: tribDescrip,
        queenId: queenId
    }
    tributeChest.push(tribObject)
}



const createQueen = (queenId, queenName) => {
    const queenObject = {
        id: queenId,
        name: queenName
    }
    
    queens.push(queenObject)
}

createQueen(1, "Trinity Terry")
createQueen(2, "Caleen Boyter")
createQueen(3, "Emily Boyter")
createQueen(4, "Sydney Boyter")
createQueen(5, "Hannah Boyter")

payTribute(1, "frankincense and myrrh", 2)
payTribute(2, "100 gold coins", 1)
payTribute(3, "ten loaves of bread and ten cheeses", 3)
payTribute(4, "ten goats and ten oxen", 1)
const hailTheQueen = (nameString) => {
    return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}

for (const queenObject of queens) {
    const hailMessage = hailTheQueen(queenObject.name)
    console.log(hailMessage)
}
