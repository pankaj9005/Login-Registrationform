const container = document.querySelector(".container"),
pwshowhide = document.querySelectorAll(".showhidepw"),
pwfields = document.querySelectorAll(".password"),
signup = document.querySelector(".signup-link"),
login = document.querySelector(".login-link");

// js code to show/hide password and change icon
pwshowhide.forEach(eyeicon =>{
    eyeicon.addEventListener("click",() =>{
        pwfields.forEach(pwfields =>{
            if(pwfields.type ==="password"){
                pwfields.type = "text";

                pwshowhide.forEach(icon =>{
                    icon.classList.replace("uil-eye-slash","uil-eye")
                })
            }else{
                pwfields.type = "password";

                pwshowhide.forEach(icon =>{
                    icon.classList.replace("uil-eye","uil-eye-slash")
                })

            }
        })
    })
})

// js code to appear signup and login form
signup.addEventListener("click",( )=>{
container.classList.add("active");
});
login.addEventListener("click",( )=>{
    container.classList.remove("active");
});

