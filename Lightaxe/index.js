var test = /** @class */ (function () {
    function test() {
        alert("test initialized");
    }
    test.prototype.test1 = function () {
        alert("test class ran sucsefully");
    };
    return test;
}());
