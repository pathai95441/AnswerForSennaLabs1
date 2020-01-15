function result(n) {
  n.forEach(e => {
    if(e.cars.length === 1) console.log ( e.name + ' want to buy' + e.cars)
    else{
      let re = e.name + ' want to buy'
      e.cars.forEach(e => {
        re = re + e + ','
      })
      console.log(re)
    }
  })
  
}
result([
  { "name": "rick", "cars": ["Corvette Z06", "Lotus Exite S"] },
  { "name": "john", "cars": ["BMW 320D"] },
  { "name": "zing", "cars": ["Honda Jazz", "Honda Click", "Honda Waves"] }
  ])