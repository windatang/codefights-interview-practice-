"use strict"
/*****************************************************************************
 *  File Name:  restoreBinaryTree.js
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
function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}

function restoreBinaryTree(inorder, preorder) {
  function createTree(inorder, preoder) {
    if (!preoder.length) {
      return null
    }
    var value = preoder.shift()
    //history.push(value);
    var index = inorder.indexOf(value);
    var root = new Tree(value);
    //console.log(index)
    var leftArray = inorder.slice(0,index);
    var rightArray = inorder.slice(index+1,inorder.length);
    var preoderLeft = preoder.slice(0,index)
    var preoderRight=preoder.slice(index,preoder.length)
    //if(inorder[index - 1] == preoder[0]){
    //console.log(leftArray + '  ' + rightArray)
    if(leftArray.length){
      root.left = createTree(leftArray, preoderLeft) }
    else{
      root.left = null;
    }
    if(rightArray.length){
      root.right = createTree(rightArray, preoderRight)
    }else{
      root.right = null;
    }
    return root
  }
  return createTree(inorder, preorder)
}

//restoreBinaryTree([4, 2, 1, 5, 3, 6], [1, 2, 4, 3, 5, 6])
