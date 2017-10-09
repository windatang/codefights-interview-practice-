function firstNotRepeatingCharacter(s) {
  for(var i = 0; i< s.length; i++){
    if(s.substr(i+1,s.length-i).indexOf(s[i]) ==-1
      &&s.substr(0,i).indexOf(s[i]) ==-1 ){
      return s[i]
    }

  }
  return '_';
}
