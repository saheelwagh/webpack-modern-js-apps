function testPassed() {
    const heading = document.querySelector('h1');
    heading.append(" passed")
}
setTimeout(testPassed, 1000);
class TestClass {
    constructor() {
        let msg = "Using ES2015+ syntax";
        console.log(msg);
    }
}

let test = new TestClass();