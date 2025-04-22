//import { startGame, closeGame } from "./game.js";

const signupForm = document.querySelector("#signup-form");
const logout = document.querySelector("#logout");
const loginForm = document.querySelector("#login-form");
const updateInventory = document.getElementById("update-inventory");
const getInventory = document.getElementById("get-inventory");
const gameTitle = document.getElementById("game-title");
const aboutDetails = document.querySelector(".about-details");
const showInventory = document.getElementById("show-inventory");
const clearInventory = document.getElementById("clear-inventory");

let currentUser;
let userDB;

auth.onAuthStateChanged((user) => {
  if (user) {
    currentUser = user;
    console.log("User logged in:", user);
    setupUI(currentUser);
  } else {
    console.log("user logged out");
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
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((cred) => {
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
          changeGameArea();
        });
    })
    .catch((err) => {
      signupForm.querySelector(".error").innerHTML = err.message;
    });
});

//login
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;
  auth
    .signInWithEmailAndPassword(email, password)
    .then((cred) => {
      //console.log(cred.user)
      //close login modal and reset form
      const modal = document.querySelector("#modal-login");
      M.Modal.getInstance(modal).close();
      loginForm.reset(loginForm["login-email"].value);
      loginForm.querySelector(".error").innerHTML = "";
      changeGameArea();
    })
    .catch((err) => {
      loginForm.querySelector(".error").innerHTML = err.message;
    });
});

//logout

logout.addEventListener("click", (e) => {
  e.preventDefault();
  currentUser = undefined;
  auth.signOut();
  window.location.reload()
  changeGameArea();
});

updateInventory.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(userInventory, "<<<< on System");
  db.collection("users")
    .doc(currentUser.uid)
    .update({
      inventory: userInventory,
    })
    .then(() => {
      console.log("updated Inventory");
      return db
        .collection("users")
        .doc(currentUser.uid)
        .get()
        .then((doc) => {
          userInventory = doc.data().inventory;
          console.log(userInventory, "<<<< on DB");
        });
    });
});

getInventory.addEventListener("click", (e) => {
  e.preventDefault();
  db.collection("users")
    .doc(currentUser.uid)
    .get()
    .then((doc) => {
      userInventory = doc.data().inventory;
    });
  console.log(userInventory);
});

showInventory.addEventListener("click", (e) => {
  e.preventDefault();
  db.collection("users")
    .doc(currentUser.uid)
    .get()
    .then((doc) => {
      userInventory = doc.data().inventory;
      const html = `<div>Logged in: ${doc.data().user_id}</div>
      <div>Your Lecturer Name is ${doc.data().lecturer}</div>
      <div>slot 1: ${doc.data().inventory[0].slot1["devling-name"]}, </div>
      <div>slot 2: ${doc.data().inventory[1].slot2}, </div>
      <div>slot 3: ${doc.data().inventory[2].slot3}, </div>
      <div>slot 4: ${doc.data().inventory[3].slot4}, </div>
      <div>slot 5: ${doc.data().inventory[4].slot5}, </div>
      <div>slot 6: ${doc.data().inventory[5].slot6}, </div>
      <div>slot 7: ${doc.data().inventory[6].slot7}, </div>
      <div>slot 8: ${doc.data().inventory[7].slot8}, </div>`;
      accountDetails.innerHTML = html;
    });
});

clearInventory.addEventListener("click", (e) => {
  userInventory = [
    { slot1: "empty" },
    { slot2: "empty" },
    { slot3: "empty" },
    { slot4: "empty" },
    { slot5: "empty" },
    { slot6: "empty" },
    { slot7: "empty" },
    { slot8: "empty" },
  ];
  console.log("cleared inventory");
  console.log(userInventory, "<<<< on sytstem");
});

// Function to change the game area
function changeGameArea() {
  if (currentUser) {
    // gameTitle.textContent = `Welcome to StackDew, ${currentUser.email}`;
    gameTitle.style.display = 'none'
    startGame();
  } else {
    closeGame();
    gameTitle.textContent = `Please log in to play the game.`;
  }
}
