"use strict"
/*****************************************************************************
 *  File Name:  hasPathWithGivenSum.js
 *  Project: HTML5
 *  Author: JustMeet - Dazhi Tang
 *
 *  Discribe:
 *
 *  This material contains, and is a part of a computer software program
 *  which is, proprietary and confidential information owned by
 *  JustMeet Technology.
 *  The program, including this material, may not be duplicated, disclosed
 *  or reproduced in whole or in part for any purpose without the express
 *  written authorization of Verizon Corporate Technology.  All authorized
 *  reproductions must be marked with this legend.
 *
 *  All rights reserved.
 *****************************************************************************/
//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
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
