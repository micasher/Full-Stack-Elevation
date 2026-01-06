//Spot Check 1

let car = {
    color: "red",
    numWheels: 4,
    isFancy: true
}

let description = "The " + car.color + " car has " + car.numWheels + " wheels. "

if (car.isFancy) {
    description += "It is fancy"
} else {
    description += "It is not fancy"
}

console.log(description)



// Spot Check 2

let obj1 = {
    item: "phone",
    toBeginning: true,
    items: ["charger", "case", "ear phones"]
}

if (obj1.toBeginning) {
    obj1.items.unshift(obj1.item)
} else {
    obj1.items.push(obj1.item)
}

console.log(obj1.items)
