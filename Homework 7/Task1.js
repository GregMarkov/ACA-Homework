function myTimeOut (cb, delay) {
    let currentTime = performance.now();
    let delayedTime = performance.now() + delay;
    while (delayedTime > currentTime) {
        currentTime = performance.now();
    }
    return cb();
};

myTimeOut(() => {
    console.log('aaa');
}, 2000);