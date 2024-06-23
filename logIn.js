import { auth, signInWithEmailAndPassword } from "./firebase.js"

function login(){
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.location.assign("varification.html")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Invalid Email")
  });

}

let loginBtn = document.getElementById("loginBtn")
loginBtn.addEventListener("click",login)