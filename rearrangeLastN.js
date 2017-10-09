// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function rearrangeLastN(l, n) {
  if(l == null || l.next == null || n==0 ){
    return l
  }
  var length = 2;
  var b = l.next;
  while(b.next !=null ){
    length++;
    b = b.next;
  }
  if(n == length){
    return l
  }

  var start = new ListNode(l.value);

  if(length - n!=1 ){
    start.next = new ListNode('')
  }

  var index = start.next;
  b = l.next;
  while(length - n>1 ){
    index.value = b.value
    if(length - n != 2){
      index.next = new ListNode('');
    }
    index = index.next;
    b = b.next;
    length--;
  }
  //console.log(b.value)
  l.value = b.value;
  if(n==1){
    l.next = new ListNode(start.value);
    l.next.next = start.next;
  }else{
    l.next = b.next;
    //console.log(b.next)
    while (b.next != null){
      b = b.next;
    }
    b.next = new ListNode(start.value);
    b.next.next = start.next;
  }

  //console.log(l)
  return l
}
