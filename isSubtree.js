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
              return false;
            }else if((
                t1.value == t2.value && machedTree(t1,t2)) || findroot(t1.left,t2) || findroot(t1.right,t2)){
              return true;
            }else{
              return false
            }
          }
          function machedTree(t1,t2){
            if(t1==null && t2 == null){
              return true;
            }
            else if((t2 != null && t1 != null)
              && machedTree(t1.left,t2.left)
              && (t1.value === t2.value)
              &&machedTree(t1.right,t2.right)){
              return true;
            }else{
              return false;
            }

          }
          return findroot(t1,t2)
        }
