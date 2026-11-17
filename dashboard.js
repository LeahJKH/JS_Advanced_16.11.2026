const bannerWelcome = document.querySelector("#WelcomeMsg")

const CurrUser = sessionStorage.getItem("currentUser")

bannerWelcome.textContent = `Welcome ${CurrUser}`