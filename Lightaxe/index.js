var test = /** @class */ (function () {
    function test() {
        alert("test initialized");
        this.myWorker = new Worker("/worker.js");
    }
    test.prototype.test1 = function (Player) {
        console.log(Player);
        this.myWorker.postMessage(["GravSwitch"]);
        this.myWorker.postMessage(["SetPlayer", Player]);
    };
    return test;
}());
