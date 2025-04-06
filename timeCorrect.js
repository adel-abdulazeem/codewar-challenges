// func tht takes str of nums representing the time in 24 hr format return new str where time is formulated in correct way
// str of nums in the time format, maybe null || invalid
// return new str where time foramat is formulated correctly in 24hr || '' if the the input is null || invalide
//

function timeCorrect(timestring) {
    // 24hr clock from 00:00:00 to 23:59:59.
    // split the param by ":"
    // then loop converting each el into num
    // then do some math to return the time in actual time format
    // then return str

    if (timestring === null || timestring === '') return timestring;

    const match = /^(\d{2}):(\d{2}):(\d{2})$/.exec(timestring);
    if (!match) return null;

    let [_, h, m, s] = match.map(Number);

    // Correct overflow
    m += Math.floor(s / 60);
    s = s % 60;
  
    h += Math.floor(m / 60);
    m = m % 60;
  
    h = h % 24;
  
    // Pad with leading zeros
    const pad = (n) => String(n).padStart(2, '0');
  
    return `${pad(h)}:${pad(m)}:${pad(s)}`;
  }

console.log(timeCorrect("09:10:01"), "09:10:01")
console.log(timeCorrect("11:70:10"), "12:10:10" )
console.log(timeCorrect("19:99:99"), "20:40:39")
console.log(timeCorrect("24:01:01"), "00:01:01")