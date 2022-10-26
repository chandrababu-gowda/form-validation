let enteredUsername = document.getElementById("username");
let enteredPassword = document.getElementById("password");
let btn = document.getElementById("submit");
let display = document.getElementById("display");

btn.addEventListener("click", ()=>{
    let username = enteredUsername.value;
    let password = enteredPassword.value;

    let usernameCondition = username.includes("@gmail.com");
    let passwordCondition = password.length > 8 && password.length < 32;

    if (!usernameCondition || !passwordCondition) {
        display.innerHTML = `<h3>Username or password is incorrect</h3>`;
        // console.log("Username or password is incorrect");
    }else{
        display.innerHTML = ` `
    }
    // console.log(password.length);

    // console.log(username);
    // console.log(password);
    // console.log(usernameCondition);
    // console.log(passwordCondition);
})




