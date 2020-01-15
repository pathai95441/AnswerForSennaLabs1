function onlyUnique(arr) { 
  var re
  var counts = {};
  for (var i = 0; i < arr.length; i++) {
      counts[arr[i]] = 1 + (counts[arr[i]] || 0);
  }
  for (const key in counts) {
    if(counts[key] === 1 ) re = key
  }
  console.log(re)
  return re
}
onlyUnique([0, 0, 0.55, 0, 0 ])
