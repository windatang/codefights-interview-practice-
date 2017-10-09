function rotateImage(a) {
  var b = [];
  for (var ai=0;ai<a.length; ai++){
    b[ai] = [];
    for (var aj=0;aj<a.length; aj++){
      b[ai][aj] = a[a.length-aj-1][ai]
    }
  }
  return b
}

