"use strict"
/*****************************************************************************
 *  File Name:  isSubtree.js
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
 *  Copy right 2015 JustMeet Technology, Inc.
 *  All rights reserved.
 *****************************************************************************/
//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function isSubtree(t1, t2) {

  function findroot(t1,t2){
    if(t2==null){
      return true;
    }else if(t1==null){
      if(t2==null){
        return true;
      }else{
        return false;
      }
    }else if((
        t1.value == t2.value && machedTree(t1,t2)) || findroot(t1.left,t2) || findroot(t1.right,t2)){
      return true;
    }else{
      return false
    }
  }
  function machedTree(t1,t2){
    if((t1 == null && t2 == null)
      &&(t1 == null && t2==null)){
      return true;
    }else if( t2 == null ||
      ((t1 != null && t2!=null)
        && machedTree(t1.left,t2.left)
        &&t1.value == t2.value
        &&machedTree(t1.right,t2.right))){
      return true;
    }else{
      return false;
    }

  }
  return findroot(t1,t2)
}
