// Definition for singly-linked list:
function ListNode(x) {
  this.value = x;
  this.next = null;
}
//
function reverseNodesInKGroups(l, k) {
  function reverse(l,k){
    if(l == null){
      return l;
    }

    if(k==1 || l.next== null){
      return l
      //l.next = reverse(l.next,k);
    }else{
      var rootNode = new ListNode(l.value);
      var back = l;
      var i = 0;
      while(i<k-1){
        if(l.next== null){
          return back;
        }
        l = l.next;
        var newNode = new ListNode(l.value)
        newNode.next = rootNode;
        rootNode = newNode;
        i++;
      }
      var x = rootNode;
      while(x.next != null){
        x = x.next
      }
      x.next =  reverse(l.next,k);
      l = rootNode;
    }
    return l
  }
  if(l == null){
    return l
  }
  var x = reverse(l,k)
  l.value = x.value
  l.next = x.next;
  return l;
}
