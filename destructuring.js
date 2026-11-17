const bruker = {
    navn: "per borgen",
    alder: 62,
    jobb: "rema",
    penger: "12kr",
    hus: false
}

let navnBruker = bruker.navn

const {navn, alder, ...informasjonAvBruker} = bruker
console.log(informasjonAvBruker)


// let {navn, jobb} = bruker

// if (jobb == undefined) {
//     console.log("null jobb")
// } else {
    // console.log(navn + " " + alder + " " + jobb)

// }
// console.log(navn, jobb)

// let {navn: fultNavn, jobb: arbeidsplass} = bruker // aliasing
// console.log(fultNavn, arbeidsplass)

// let {navn, jobb = "uten jobb"} = bruker // default value
// console.log(navn, jobb)


const farger = ["blå", "rosa", "lilla", "gul", "turkis"]

// const [førsteFarge, ,, AndreFarge] = farger
// console.log(førsteFarge + " " + AndreFarge)

// const [førsteFarge,AndreFarge, ...restfarger] = farger
// console.log(restfarger)