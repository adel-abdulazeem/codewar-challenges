

function consonantCount(str) {
    const alpha = 'a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z'.split(',').join('').split(' ').join('')
    console.log(alpha)
    let vowels = 'aeiou'
     return str.toLowerCase().split('').filter((item,index,arr) => !vowels.includes(item) && alpha.includes(item) ).length
  }
  console.log(consonantCount('kfjkdje'))