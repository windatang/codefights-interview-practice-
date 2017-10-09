"use strict"

function hasPathWithGivenSum(t, s) {
  var unvisited = []
  if(!t && s !=0){
    return false
  }else if(!t && s ==0){
    return true
  }
  unvisited.push(t);
  while(unvisited.length){
    root = unvisited.shift()
    if(root.left){
      root.left.value = root.value + root.left.value;
      unvisited.push(root.left)
    }else{
      console.log(root.value)
      if(root.value == s && (root != t || root.right==null)){
        console.log(root.value)
        return true;
      }
    }
    if(root.right){
      root.right.value= root.value + root.right.value;
      unvisited.push(root.right)
    }else{
      if(root.value == s && root != t ){
        return true;
      }
    }

  }
  return false

}
