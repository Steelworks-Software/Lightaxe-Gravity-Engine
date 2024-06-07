var DoGrav = false
var PlayerObj;
onmessage = (e) => {
    console.log("Message received from main script");
    switch (e.data[0]){
        case "GravSwitch":
            DoGrav = !DoGrav;
            console.log("grav: "+DoGrav)
            break
        case "SetPlayer":
            PlayerObj = e.data[1]
            console.log("Player: " + PlayerObj)
            break
    }
};
while(true){
    console.log("grav running")
    PlayerObj.style.top = Math.random()*10
}