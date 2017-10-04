"use strict"
/*****************************************************************************
 *  File Name:  findSubstrings.js
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





function findSubstrings(words, parts) {
  function leaf(x) {
    this.value = x;
    this.end = false;
    this.children = []
  }
  function createTree(root,parts){
    if(!parts.length){
      return []
    }

    var childArray = [];
    //var endArray = []
    var children = [];
    parts.forEach((ele,i)=>{
      var index = children.indexOf(ele[0]);
      if (index == -1){
        root.children.push(new leaf(ele[0]))
        children.push(ele[0]);
        if(ele.length>1){
          childArray.push([ele.substr(1)])
        }else{
          root.children[root.children.length-1].end = true;
          //this.end = true;
          childArray.push([])
        }
      }else{
        if(ele[0] == "i"){
          console.log(ele[0])
          //root.children[root.children.length-1]
        }
        if(ele.length>1){
          childArray[index].push(ele.substr(1))
        }else{
          //console.log(root.children[index])
          root.children[index].end =true;
        }
      }
    })
    //console.log(childArray);
    root.children.forEach((ele,index) =>{
      if (childArray[index].length>0){
        createTree(ele,childArray[index])
      }
    })
  }
  var root = new leaf('');
  //createTree(root,["a", "mel", "lon", "el", "An"]);
  createTree(root,parts);
  //console.log(root)
  function search(word,tree){
    var startIndex = 0,maxLength=-1;
    for(var start=0; start<word.length;start++){
      var root = tree;
      for(var i = start; i< word.length ;i++){
        // console.log(word[i] + ' ' + start)
        var index = root.children.findIndex(ele=>{
          return ele.value == word[i] })
        if(index==-1){
          break;
        }else{
          //console.log(root);
          root = root.children[index];
          if("myopic" == word){
            // console.log(root.value);
            // console.log(root.end);
          }

          if(root.end == true && ((i-start)> maxLength)){//&& startIndex<start
            startIndex = start;
            maxLength = i-start;
          }
        }
      }
    }
    //console.log(maxLength +  " " + startIndex)
    if(maxLength!=-1){
      word = word.substr(0,startIndex)  + '['  + word.substr(startIndex,maxLength+1)  + "]" +  word.substr(startIndex+maxLength+1)
    }
    return word;
  }
  //search('Watermelon',root)
  // console.log(tree);
  words.forEach((ele,index)=>{
    words[index] = search(ele,root);
  })
  return words;
}



//
// function findSubstrings(words, parts) {
//   for(var j =0;j<words.length;j++){
//     var maxLength = 0
//     var minIndex = 31
//     var pat = "";
//     for(var i=0;i<parts.length;i++){
//       var index = words[j].indexOf(parts[i]);
//       if(index!=-1 && maxLength < parts[i].length){
//         maxLength = parts[i].length;
//         minIndex = index;
//         pat = parts[i];
//       }
//       else if(index!=-1 && maxLength == parts[i].length && minIndex > index){
//         maxLength = parts[i].length;
//         minIndex = index;
//         pat = parts[i];
//       }
//     }
//     if(pat.length){
//       words[j] = words[j].replace(pat,'['+pat+']');
//     }
//   }
//   return words;
// }
