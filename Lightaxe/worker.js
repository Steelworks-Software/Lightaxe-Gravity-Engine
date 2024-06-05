var DoGrav = false
var PlayerObj;
onmessage = (e) => {
    console.log("Message received from main script");
    switch (e.data[0]){
        case "GravSwitch":
            DoGrav = !DoGrav;
            break
        case "SetPlayer":
            PlayerObj = e.data[1]
            break
    }
};
while(DoGrav === true){
    PlayerObj.style.top = Math.random()*10
}