"use strict"
/*****************************************************************************
 *  File Name:  isCryptSolution.js
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
function isCryptSolution(crypt, solution) {
  // [{ a: 1},{ b: 2},{ c: 3}].reduce(function(result, item, index) {
  solution = solution.reduce(function(result, item, index) {
    var obj = {};
    obj[item[0]] = item[1];
    result = Object.assign({},result,obj);
    return result;
  }, {}); //an empty array
  var  num = [];
  crypt.forEach((ele,index)=>{
    num[index] = "";
  ele.split('').forEach((chart,chindex)=>{
    num[index] = num[index]+""+solution[chart]
  })

})
  console.log(num)
  if( (num[0][0]!=0 || num[0].length == 1)
    &&(num[1][0]!=0 || num[1].length == 1)
    &&(num[2][0]!=0 || num[2].length == 1)
    &&Number(num[0]) + Number(num[1]) == Number(num[2])){
    return true
  }else{
    return false
  }
}
