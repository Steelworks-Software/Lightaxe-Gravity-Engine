class test {
    myWorker:any
    constructor(){
        alert("test initialized")
        this.myWorker = new Worker("/worker.js");
    }
    test1(Player):any{
        console.log(Player)
        this.myWorker.postMessage(["GravSwitch"]);
        this.myWorker.postMessage(["SetPlayer", Player]);
    } 
    
}