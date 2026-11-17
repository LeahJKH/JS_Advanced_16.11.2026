const formField = document.querySelector("#form");

const UserName = document.querySelector("#username")
const UserPass = document.querySelector("#password")

formField.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(formField);
    let logingData = Object.fromEntries(formData.entries());
    console.log(logingData);
    saveToLocal(logingData.userName, logingData.passWord)
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

const data = JSON.parse(localStorage.getItem("user"))
console.log(data)