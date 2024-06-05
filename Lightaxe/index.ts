class test {
    myWorker:any
    constructor(){
        alert("test initialized")
        this.myWorker = new Worker("worker.js");
    }
    test1():any{
        this.myWorker.postMessage(["GravSwitch"]);
        this.myWorker.postMessage(["SetPlayer", ]);
    } 
    
}