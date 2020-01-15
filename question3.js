function lotto(n) {
  n = n.toString()
  let arr = []
  for(let i = 0 ; i<9999 ; i++){
    let re ='0000'.substr( String(i).length ) + i + n[4] + n[5]
    arr.push(re)
  }
  return arr
}
const re = lotto(120888)
console.log (re)