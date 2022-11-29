const months = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];

async function getMonth(num) {
    let prom = new Promise((resolve, reject) => {
        if (num > 0 && num < 13) {
            resolve(months[num - 1]);
        } else {
            reject(`There're only 12 months in a year`)
        }
    })

    try {
        let result = await prom;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

getMonth(13)