const formField = document.querySelector("#form");

const UserName = document.querySelector("#username")
const UserPass = document.querySelector("#password")

const signUpBtn = document.querySelector("#signUp")

formField.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(formField);
    let logingData = Object.fromEntries(formData.entries());
    const {userName, passWord} = logingData
    logIn(userName, passWord)
}); 

function logIn (username, password) {
    const allusers = JSON.parse(localStorage.getItem("user"))
    const founduser = allusers.find(users => users.username.toLowerCase() === username.toLowerCase() && users.password === password)
        if(founduser) {
            console.log("du har logget inn")
            sessionStorage.setItem("currentUser", username)
            location.href = "./dashboard.html"
        } else {
            console.log("womp womp feil bruker")
        }
    

}

signUpBtn.addEventListener("click", (e) => {
    saveToLocal(UserName.value, UserPass.value)
})

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