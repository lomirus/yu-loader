function test() {
    console.log("test");
    return "test";
}

ma(test);
ma(() => test());
ma(() => console.log("test"));
ma(() => {
    test();
});
ma(() => {
    console.log("test");
});
ma(() => {
    return "test";
});

(async (func) => {
    worker.postMessage(func.toString());
})(test)

/* worker.js */

self.onmessage = async ({ data }) => {
    eval(`(${data})()`);
    self.close();
}