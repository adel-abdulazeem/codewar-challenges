// write a func that takes fn as arg and it return a num

async function sleep(millis) {
    const t = await setTimeOut(() => console.log(`${millis}`) , millis)
    return t
}

console.log(sleep(1000))