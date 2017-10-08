// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function addTwoHugeNumbers(a, b) {
  var result=[]

  function addAB(a,b,len,i){
    if(a.next == null && b.next== null){
      if(!len.al){
        len.al = i;
      }
      if(!len.bl){
        len.bl = i;
      }
    }else if(a.next ==null && b.next!= null){
      if(!len.al){
        len.al = i;
      }
      addAB(a,b.next,len,i+1)
    }else if(b.next ==null && a.next!= null){

      if(!len.bl){
        len.bl = i;
      }
      addAB(a.next,b,len,i+1)
    }else{
      //console.log(a.value + ' ' + b.value)
      addAB(a.next,b.next,len,i+1)
    }
    if(a.value.toString().length > len.dl){
      len.dl = a.value.toString().length
    }
    if( b.value.toString().length> len.dl){
      len.dl = b.value.toString().length
    }
  }


  function addABValue(a,b,al,bl,i){
    //console.log(a.value)
    if(al == 0){
      return 0;
    }
    if(al == bl){

      var value = (a.value + b.value+ addABValue(a.next,b.next,al-1,bl-1,i+1)).toString();
      //console.log(value)
      result[i] = Number(value.substr(-len.dl));
      return Number(value.substr(0,value.length-len.dl))
    }else if(al>bl){

      var value = (a.value + addABValue(a.next,b,al-1,bl,i+1)).toString();

      result[i] = Number(value.substr(-len.dl));
      return  Number(value.substr(0,value.length-len.dl))

    }

  }

  var len = {al:0,bl:0,dl:0}
  addAB(a,b,len,1)
  //  console.log(len.al>len.bl)
  if(len.al>len.bl){
    //console.log(len)
    var first =  addABValue(a,b,len.al,len.bl,0)
  }else{
    var first =   addABValue(b,a,len.bl,len.al,0)
  }
  if( first >0){
    result= [].concat([first],result)
  }
  //console.log(result)
  return result


}
