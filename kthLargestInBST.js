//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
//
var list = []
function kthLargestInBST(t, k) {
  // console.log(list)
  //  console.log(k)

  if(t.left != null){
    kthLargestInBST(t.left,k);
  }

  if(list.length!=k){

    list.push(t.value);
    if(t.right != undefined){
      kthLargestInBST(t.right,k)
    }
  }
  return list[k-1];






}
