// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function isListPalindrome(l) {
  if(!l) return true;
  var a = [], b = [];
  var node = l;
  var fast = l;
  var index = 0;

  while(fast && fast.next){
    a.push(node.value);
    node = node.next;
    fast = fast.next.next;
    index++;
  }
  if(fast && !fast.next){
    node = node.next;
  }
  while(a.length){
    if(a.pop()!=node.value ){
      return false
    }
    node = node.next
  }
  return true
 
}
