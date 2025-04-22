// setup materialize components
const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");
const guideList = document.querySelector(".guides");
const accountDetails = document.querySelector(".account-details");

let userInventory = [
  { slot1: "empty" },
  { slot2: "empty" },
  { slot3: "empty" },
  { slot4: "empty" },
  { slot5: "empty" },
  { slot6: "empty" },
  { slot7: "empty" },
  { slot8: "empty" },
];

const setupUI = (user) => {
  if (user) {
    db.collection("users")
      .doc(user.uid)
      .get()
      .then((doc) => {
        inventory = doc.data().inventory;
        const html = `<div>Logged in: ${doc.data().user_id}</div>
      <div>Your Lecturer Name is ${doc.data().lecturer}</div>
      <div>slot 1: ${doc.data().inventory[0].slot1}, </div>
      `;
        accountDetails.innerHTML = html;
      });

    //toggle navbar ui
    loggedInLinks.forEach((item) => (item.style.display = "block"));
    loggedOutLinks.forEach((item) => {
      item.style.display = "none";
    });
  } else {
    //hide account info
    accountDetails.innerHTML = "";
    //set up nav
    loggedInLinks.forEach((item) => (item.style.display = "none"));
    loggedOutLinks.forEach((item) => {
      item.style.display = "block";
    });
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const modals = document.querySelectorAll(".modal");
  M.Modal.init(modals);
});
