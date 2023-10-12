// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    window.location.href = "dashboard.html";
        console.log(result)
})
.catch((error) => {
    console.log(error.code);
    console.log(error.message)
}
);
}