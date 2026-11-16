let array = [1, 2, 3, 4]

let object = {
    name: "per",
    alder: 23
}

// localStorage.setItem("name", "per")

const formField = document.querySelector("#form");

const UserName = document.querySelector("#username")
const UserPass = document.querySelector("#password")

// formData
formField.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(formField);
    let logingData = Object.fromEntries(formData.entries());
    console.log(logingData);
    saveToLocal(logingData.userName, logingData.passWord)
    // console.log([...formData.entries()])
}); 

function saveToLocal (username, password) {
    const AllUsers = [];
    const User = {
        username: username,
        password: password
    }

    if(localStorage.getItem("user")) {
        const previousUsers = JSON.parse(localStorage.getItem("user"))
        previousUsers.forEach(e => {
            AllUsers.push(e)
        });  
    } 

    AllUsers.push(User)
    localStorage.setItem("user", JSON.stringify(AllUsers))
}

// metode 2 få ut data
// formField.addEventListener("submit", (e) => {
//     e.preventDefault()

//     const user = {
//         username: UserName.value,
//         password: UserPass.value
//     }

//     console.log(user)
// })










const data = JSON.parse(localStorage.getItem("user"))
console.log(data)