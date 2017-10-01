"use strict"
/*****************************************************************************
 *  File Name:  findProfession.js
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
function findProfession(level, pos) {
  if(level == 1 ){
    return "Engineer"
  }
  if(pos%2==0){
    if( findProfession(level-1, pos/2) == "Doctor"){
      return "Engineer"
    }else{
      return "Doctor"
    }
  }else{
    // console.log(findProfession(level-1, pos+1/2))
    // console.log(findProfession(level-1, pos+1/2))
    return findProfession(level-1, (pos+1)/2)
  }


}
