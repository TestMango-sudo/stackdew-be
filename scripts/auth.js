const signupForm = document.querySelector("#signup-form");
const logout = document.querySelector("#logout");
const loginForm = document.querySelector("#login-form");
const addDevling = document.querySelector("#add-devling");
let currentUser;
let userDB;

auth.onAuthStateChanged((user) => {
  if (user) {
    currentUser = user
    console.log("User logged in:", user);
    setupUI(currentUser);
  } else {
    console.log('user logged out')
    setupUI();
  }
});

// signup
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;
  const charName = signupForm["lecturer-name"].value;

  //signup user
  auth.createUserWithEmailAndPassword(email, password).then((cred) => {
    return db
      .collection("users")
      .doc(cred.user.uid)
      .set({
        user_id: email,
        lecturer: charName,
        inventory: [
          { slot1: "empty" },
          { slot2: "empty" },
          { slot3: "empty" },
          { slot4: "empty" },
          { slot5: "empty" },
          { slot6: "empty" },
          { slot7: "empty" },
          { slot8: "empty" },
        ],
      })
      .then(() => {
        const modal = document.querySelector("#modal-signup");
        M.Modal.getInstance(modal).close();
        signupForm.reset();
        window.alert("Account and Database created");
        signupForm.querySelector('.error').innerHTML = err.message
      })
  }).catch(err => {
    signupForm.querySelector('.error').innerHTML = err.message
  });
});

//login
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    //console.log(cred.user)
    //close login modal and reset form
    const modal = document.querySelector("#modal-login");
    M.Modal.getInstance(modal).close();
    loginForm.reset(loginForm["login-email"].value);
    loginForm.querySelector('.error').innerHTML = ""
  }).catch(err => {
    loginForm.querySelector('.error').innerHTML = err.message
  });;
});

//logout

logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut();
});

addDevling.addEventListener("click", (e) => {
  e.preventDefault();
  const data = {
    "devling-name": "Laura",
    "front-end": Math.random(1, 3),
    "back-end": Math.random(1, 3),
    "dev-ego": Math.random(1, 3),
    emotional: Math.random(1, 3),
    "google-skills": Math.random(1, 3),
    isPlanted: false,
    isGrown: false,
  };
  db.collection();
});
