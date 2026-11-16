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
// formField.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const formData = new FormData(formField);
//     let logingData = Object.fromEntries(formData.entries());
//     console.log(logingData);
//     // console.log([...formData.entries()])
// }); 


// metode 2 få ut data
formField.addEventListener("submit", (e) => {
    e.preventDefault()

    const user = {
        username: UserName.value,
        password: UserPass.value
    }

    console.log(user)
})
