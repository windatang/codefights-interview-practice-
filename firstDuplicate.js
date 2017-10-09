function firstDuplicate(a) {
  const b = [];//{number1:{count:,index;},number2:{count:,index;}}
  let countMax = 0;
  let indexMin = a.length;
  let  hasflag = false;
  let num = 0;
  if(a.length){
    a.forEach(function(ele,index){
      // if(countMax<a.length/2){
      if(b[ele] == undefined){
        b[ele] = [0,-1];
      }else{
        hasflag = true;
        if(b[ele][1] == -1){
          b[ele][1] = index;
        }
        if(indexMin > b[ele][1]){
          indexMin = b[ele][1];
          num = ele;
        }

      }

    })


  }

  if(hasflag){
    return num
  }else{
    return -1;
  }

}
