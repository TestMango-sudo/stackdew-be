// setup materialize components
const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");
const guideList = document.querySelector(".guides");
const accountDetails = document.querySelector(".account-details");
let userInventory = [
  {
    slot1: {
      "devling-name": "Laura",
      "front-end": Math.round(Math.random() * 3),
      "back-end": Math.round(Math.random() * 3),
      "dev-ego": Math.round(Math.random() * 3),
      emotional: Math.round(Math.random() * 3),
      "google-skills": Math.round(Math.random() * 3),
    },
  },
  {
    slot2: {
      "devling-name": "Lucy",
      "front-end": Math.round(Math.random() * 3),
      "back-end": Math.round(Math.random() * 3),
      "dev-ego": Math.round(Math.random() * 3),
      emotional: Math.round(Math.random() * 3),
      "google-skills": Math.round(Math.random() * 3),
    },
  },
  {
    slot3: {
      "devling-name": "Clive",
      "front-end": Math.round(Math.random() * 3),
      "back-end": Math.round(Math.random() * 3),
      "dev-ego": Math.round(Math.random() * 3),
      emotional: Math.round(Math.random() * 3),
      "google-skills": Math.round(Math.random() * 3),
    },
  },
  {
    slot4: {
      "devling-name": "Laura",
      "front-end": Math.round(Math.random() * 3),
      "back-end": Math.round(Math.random() * 3),
      "dev-ego": Math.round(Math.random() * 3),
      emotional: Math.round(Math.random() * 3),
      "google-skills": Math.round(Math.random() * 3),
    },
  },
  {
    slot5: {
      "devling-name": "Janet",
      "front-end": Math.round(Math.random() * 3),
      "back-end": Math.round(Math.random() * 3),
      "dev-ego": Math.round(Math.random() * 3),
      emotional: Math.round(Math.random() * 3),
      "google-skills": Math.round(Math.random() * 3),
    },
  },
  {
    slot6: {
      "devling-name": "Vanessa",
      "front-end": Math.round(Math.random() * 3),
      "back-end": Math.round(Math.random() * 3),
      "dev-ego": Math.round(Math.random() * 3),
      emotional: Math.round(Math.random() * 3),
      "google-skills": Math.round(Math.random() * 3),
    },
  },
  {
    slot7: {
      "devling-name": "Steve",
      "front-end": Math.round(Math.random() * 3),
      "back-end": Math.round(Math.random() * 3),
      "dev-ego": Math.round(Math.random() * 3),
      emotional: Math.round(Math.random() * 3),
      "google-skills": Math.round(Math.random() * 3),
    },
  },
  {
    slot8: {
      "devling-name": "Dave",
      "front-end": Math.round(Math.random() * 3),
      "back-end": Math.round(Math.random() * 3),
      "dev-ego": Math.round(Math.random() * 3),
      emotional: Math.round(Math.random() * 3),
      "google-skills": Math.round(Math.random() * 3),
    },
  },
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

  const items = document.querySelectorAll(".collapsible");
  M.Collapsible.init(items);
});
