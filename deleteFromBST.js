//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function deleteFromBST(t, queries) {
  var flag = false;
  function deleBST(t,x){
    if(t.value == x){
      if(t.left==null && t.right == null){
        return 1
      }
      else if(t.left == null){
        t.value = t.right.value;
        t.left = t.right.left;
        t.right = t.right.right;
      }else{
        if(t.left.right == null){
          t.value = t.left.value;
          t.left = t.left.left;
        }else{
          var rootFrom = t.left;
          while(rootFrom.right.right != null){
            rootFrom=rootFrom.right;
          }
          t.value = rootFrom.right.value;
          if(rootFrom.right.left!==null){
            rootFrom.right = rootFrom.right.left;
            return
          }else{
            rootFrom.right = null;
          }

        }

      }

    }

  }
  function findX(t,x){
    if(t == null){
      return
    }
    if(t.value == x){
      flag = true;
      return deleBST(t,x)
    }else if( t.value < x){
      if(findX(t.right,x) == 1){

        t.right = null
      }
      return
    }else{
      if(findX(t.left,x) == 1){
        t.left = null
      }
      return
    }
    return null;
  }
  queries.forEach(ele=>{
    f = findX(t,ele);
    if(f == 1 && t.left == null && t.right == null){
      t = null
    }
  })
  if(t==null){
    return null
  }
  if(!flag){
    return null
  }else{
    return t
  }
}
