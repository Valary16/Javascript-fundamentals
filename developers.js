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

