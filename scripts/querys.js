const getInventorySlot = document.getElementById("get-inventory-slot");
const updateDevling = document.getElementById("update-devling");
const addDevling = document.getElementById("add-devling");
const resetInventory = document.getElementById("reset-inventory");
const dbRef = db.collection('users').doc(currentUser.uid)

getInventorySlot.addEventListener("click", (e) => {
  console.log("clicked")
    dbRef.get().then((doc) => {
        inventoryData = doc.data().inventory;
        inventoryData.forEach(item => console.log(item))
        // console.log(
        //   `Devling Name: ${inventoryData[4].slot4.devlingName}, Back-End Skills:${inventoryData[4].slot4.backEnd}`
        // );
      });
  });
  updateDevling.addEventListener("click", (e) => {
    dbRef.update({ "inventory.0.slot1.backEnd" : 2 }), {merge: true}
  })

  addDevling.addEventListener("click", (e) => {
    console.log(currentUser.uid, "from button click")
    db.collection("users").doc(currentUser.uid).update({
       "inventory.1.slot2.backEnd": 2
    }).then((res) => {
      console.log(res)
    })
    .catch(err => {
      console.log(err.message)
    });
    ;
  });

  resetInventory.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
      "devlingName": "Laura",
      "frontEnd": Math.round(Math.random(1, 3)),
      "backEnd": Math.round(Math.random(1, 3)),
      "devEgo": Math.round(Math.random(1, 3)),
      emotional: Math.round(Math.random(1, 3)),
      "googleSkills": Math.round(Math.random(1, 3)),
      isPlanted: false,
      isGrown: false,
    };
    console.log("clicked")
    dbRef.update({
      inventory: [
        { slot1: data },
        { slot2: "empty" },
        { slot3: "empty" },
        { slot4: "empty" },
        { slot5: "empty" },
        { slot6: "empty" },
        { slot7: "empty" },
        { slot8: "empty" },
      ],
    }).then(()=>{
      console.log("data Added")
    }).catch((err)=>{
      console.log(err.message)
    })
  })
