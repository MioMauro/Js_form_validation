// STEPS
//1 - Target id and classes
//2 add event listener ->Submit
//3 engine function
//4 test the system

let id = (id) => document.getElementById(id)
let classes = (classes) => document.getElementsByClassName(classes)

let username = id ("username"),
    email = id ("email"),
    password = id ("password"),
    form = id ("form"),
    errorMsg = classes ("error"),
    successIcon = classes ("success-icon"),
    failureIcon = classes ("failure-icon");

    form.addEventListener("submit", (e) => {
        e.preventDefault()

        /*if(username.value === ''){
            errorMsg[0].innerHTML = 'Username cannot be blank'
            failureIcon[0].style.opacity = "1"
            successIcon[0].style.opacity = "0"
        }
        else{
            errorMsg[0].innerHTML = ''
            failureIcon[0].style.opacity = "0"
            successIcon[0].style.opacity = "1"
        }*/

        engine(username, 0, "Username cannot be blank")
        engine(email, 1, "Email cannot be blank")
        engine(password, 2, "Password cannot be blank")
    })

    let engine = (id, serial, message) => {
        if(id.value.trim() === ''){
            errorMsg[serial].innerHTML = message
            failureIcon[serial].style.opacity = "1"
            successIcon[serial].style.opacity = "0"
        }
        else{
            errorMsg[serial].innerHTML = ''
            failureIcon[serial].style.opacity = "0"
            successIcon[serial].style.opacity = "1"
        }
    }

