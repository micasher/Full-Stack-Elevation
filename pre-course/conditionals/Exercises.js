//Exercise 1

let numChildren = 1
let isCareful = false

if (!isCareful) {
    numChildren = numChildren + 1
}

console.log(numChildren)


//Exercise 2

let silverwareCount = 5

if (silverwareCount % 2 !== 0) {
    console.log("Something is missing")
}


//Exercise 3

let performance = "stellar"
let salary = 10000
const goodBonus = 1000
const stellarBonus = 3000

if (performance == "stellar") {
    salary += stellarBonus
} else {
    salary += goodBonus
}

console.log(salary)


//Exercise 4

const isVIP = false
let cash = 500

if (isVIP || cash > 300) {
    console.log("Welcome!")
} else {
    console.log("You are not allowed in")
}


//Exercise 5

a = 3

b = 15

c = 12

d = 160

//Exercise 6 

const gender = null
let profession = "business"

if (gender == "male") {
    profession = profession + "man"
} else if (gender == "female") {
    profession = profession + "woman"
} else {
    profession = profession + "person"
}

console.log(profession)


//Exercise 7 

let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018

if (boughtTesla) {
    if (isUSCitizen) {
        if (currentYear - yearOfTeslaPurchase >= 4) {
            console.log("Would you like an upgrade?")
        } else {
            console.log("Are you satisfied with your car?")
        }
    } else {
        console.log("Would you like to move to the US?")
    }
} else {
    console.log("Are you interested in buying a Tesla?")
}
