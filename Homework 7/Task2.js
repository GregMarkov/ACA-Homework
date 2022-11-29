const myPromise = Promise.reject('err');

async function squarePromise(promise) {
    let result = await promise;
    return new Promise((resolve, reject) => {
        if (typeof result === 'number' || typeof result === 'string' && Number(result)) {
            resolve(Math.pow(result, 2));
        }  else {
            reject(`Cannot convert ${result} to a number!`);
        }
    }); 
}

squarePromise(myPromise)
.then(val => {
    console.log(val);
})
.catch(err => {
    console.log(err);
});