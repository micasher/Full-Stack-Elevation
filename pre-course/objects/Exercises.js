//Exercise 1

let p1 = {
    name: "Robert",
    age: 20,
    city: "beer Sheva"
}

let p2 = {
    name: "Jill",
    age: 21,
    city: "Dimona"
}
if (p1.age === p2.age && p1.city === p2.city) {
    console.log("Jill wanted to date Robert")
}
if (p1.age === p2.age && p1.city !== p2.city) {
    console.log("Jill wanted to date Robert, but couldn't")
}


//Exercise 2

let obj1 = {
    name: "key1"
}
let obj2 = {
    name: "key2"
}
let myList = [obj1, obj2]
obj1.name = "key12"
myList.splice(1, 1)



//Exercise 3

let obj3 = {
    name: "mikey"
}
let obj4 = {
    name: "mike"
}
let array = [obj3, obj4]

myList.push(...array)


//Exercise 4

let libary = {
    books: [
        book1 = {
            title: "Title1",
            author: "Michael"
        },
        book2 = {
            title: "Title2",
            author: "Miko"
        }
    ]
}
myList.push(...libary.books)



//Exercise 5

const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

const name = reservations[name]
if (reservations === name) {


}

