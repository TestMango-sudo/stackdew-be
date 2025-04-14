const signupForm = document.querySelector("#signup-form")
const logout = document.querySelector('#logout')
const loginForm = document.querySelector('#login-form')

auth.onAuthStateChanged(user => {
    let currentUser;
    if (user) {
        //console.log('User logged in:', user)
        //db.collection('guides').get().then(snapshot=>{
        db.collection('users').get().then(snapshot => {
            const tempdata = snapshot.docs
            tempdata.forEach(doc => {
                const userObject = doc.data()
                if(userObject.user_id === user.email) {
                console.log(userObject)
                currentUser = userObject
                }

            })

            // console.log(snapshot, user)
            setupUI(currentUser)
        })
    } else{
        //console.log('user logged out')
        setupUI()
    }
})

// signup
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signupForm["signup-email"].value;
    const password = signupForm["signup-password"].value;
    
    //signup user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
       // console.log(cred)
       //console.log(cred.user)
       const modal = document.querySelector('#modal-signup');
       M.Modal.getInstance(modal).close();
        signupForm.reset() 
        setupUserDB(email)
    })
    function setupUserDB(email) { 
    console.log("Creating Database");
    new Promise(resolve => setTimeout(resolve, 3000)); 
    db.collection('users').add({
        user_id: email,
        inventory: {devlings: [0]},
        lecturer: "Rose"
    }).then(() => { 
        window.alert('Account and Database created')
    })
}})

//login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = loginForm['login-email'].value
    const password = loginForm['login-password'].value
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        //console.log(cred.user)
        //close login modal and reset form
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset(loginForm['login-email'].value);
    })
})

//logout

logout.addEventListener("click", (e) => {
    e.preventDefault()
    auth.signOut()
})

