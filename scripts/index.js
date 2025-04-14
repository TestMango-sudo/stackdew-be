// setup materialize components
const loggedOutLinks = document.querySelectorAll('.logged-out')
const loggedInLinks = document.querySelectorAll('.logged-in')
const guideList = document.querySelector('.guides')
const accountDetails = document.querySelector('.account-details')


const setupUI = (user) => {
  if (user){
    const html = `<div>Logged in as ${user.user_id}</div><div>Chosen Lecturer: ${user.lecturer}</div><div>Inventory: ${user.inventory}</div>`;
    accountDetails.innerHTML = html;
    //toggle navbar ui
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => {item.style.display = 'none'});
  } else {
    //hide account info
    accountDetails.innerHTML = ''
    //set up nav
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => {item.style.display = 'block'});
  }
}


document.addEventListener('DOMContentLoaded', function() {

    const modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    const items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });
