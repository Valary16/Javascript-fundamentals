var isValid = function(s){
if(screen.length%2) return false
}
let map = newMap()
map.set ("(",")")
map.set ("{","}")
map.set ("[","]") //peek(reads but does not change stack) 
// stack.pop(removes and returns) //push adds something to the stack
let stack = []
for (let i =0;i< s.length; i++){
if (map.has(i)){
    stack.push(map.get(s(i)))}
    else{
    let top = stack.pop()
    if (top !=s(i)){
        return false
    }
    }
}
return stack.length==0

//link list
//recurcion() and iteration
function listNode(val, next)
   // this.val = (val === undefined ? 0 : val) //using ternary operator
    //this.next = (next === undefined ? null : next)

    var mergeList = function(list1,list2){
        if (!list1 ||list2) return list1||list2
        let head = new Listwode(null)
        let curr = head
        while (list1 && list2){
            if (list1.val < list2.val){
                curr.next = list1
                list1 = list.next
            }
            else{
                curr.next = list2
                list2 = list2.next
            }
            curr = curr.next
        }
        curr.next = list1 || list2
        return head.next
    }



