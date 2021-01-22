
// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;
  const username = signupForm['signup-username'].value
  // sign up the user

  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
    document.getElementById('signup-alert').innerHTML = "Your account information has been saved, proceed to login.";
    console.log("signed in")

    window.location.href = "Dashboard.html";
  });
});


