"use strict"
/*****************************************************************************
 *  File Name:  isTreeSymmetric.js
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
 *  All rights reserved.
 *****************************************************************************/
//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function isTreeSymmetric(t) {
  if(!t) return true;
  var t1 = t.left;
  var t2 = t.right;
  var unvisited1 = []//.push(t1)
  var unvisited2 = []//.push(t2)
  unvisited1.push(t1)
  unvisited2.push(t2)
  //  console.log(unvisited1.length)
  while(unvisited1.length){
    root1 = unvisited1.shift();
    root2 = unvisited2.shift();
    if(root1==null && root2 == null){
      continue
    }else if (root1==null || root2==null){
      console.log('root2')
      return false
    }else{
      console.log(root1.value)
      console.log(root2.value)
      if (root1.value != root2.value ){
        return false
      }
      unvisited1.push(root1.left)
      unvisited1.push(root1.right)
      unvisited2.push(root2.right)
      unvisited2.push(root2.left)


    }

  }
  return true

}