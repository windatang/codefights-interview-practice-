function removeKFromList(l, k) {
  if(!l || l == null) return l;
  var node =l;
  while(node.next!=null){
    if(node.value == k){
      node.value =  node.next.value;
      node.next = node.next.next;
      continue;
    }
    if(node.next.value ==k && node.next.next==null){
      node.next = null;
      break;
    }else{
      node = node.next;
    }
  }
  if(l.value == k && l.next == null ){
    return null
  }
  return l;

}
