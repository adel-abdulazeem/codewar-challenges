async function sleep(millis) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(millis)
        }, millis)
    })
}

console.log(sleep(1000))