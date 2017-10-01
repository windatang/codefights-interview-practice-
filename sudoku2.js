"use strict"
/*****************************************************************************
 *  File Name:  sudoku2.js
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
function sudoku2(grid) {
  for(var i=0;i<9;i++){
    if(!norepeat( grid[i].join('').replace(/\./g,''))){
      return false;
    }
    var col = []
    for(var j=0;j<9;j++){
      col.push(grid[j][i]);
    }
    if(!norepeat( col.join('').replace(/\./g,''))){
      return false;
    }
  }
  for(var i=0;i<3;i++){
    var ix = 3*i
    for(var j=0;j<3;j++){
      var jx = 3*j
      //console.log(i,j)
      var col = [grid[ix][jx]]
      col.push(grid[ix+1][jx])
      col.push(grid[ix][jx+1])
      col.push(grid[ix+1][jx+1])
      col.push(grid[ix+2][jx])
      col.push(grid[ix][jx+2])
      col.push(grid[ix+2][jx+2])
      col.push(grid[ix+1][jx+2])
      col.push(grid[ix+2][jx+1])
      if(!norepeat( col.join('').replace(/\./g,''))){
        return false;
      }
    }



  }


  return true;

  function norepeat(str){
    for(var i=0;i<str.length;i++){

      if(str.substr(i+1,str.length-i).indexOf(str[i])!==-1||
        str.substr(0,i).indexOf(str[i])!==-1){
        return false;
      }
    }
    return true
  }
}
