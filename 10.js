//Q10. Write a program to find the smallest number using a stack.

class Stack {
    constructor(){
        this.items = []
        this.length = 0
        this.push = function(element){
            this.items.push(element)
            this.length++
        }
        this.pop = function(){
            if(this.length==0){
                return -1
            }
            this.length--;
            return this.items.pop()
        }
        this.peek = function(){
            if(this.length==0){
                return -1
            }
            return this.items[this.length-1]
        }
        this.smallest = function(){
            function find(a,b){
                if(a>b){
                    return 1
                  }
                  else if(a<b){
                    return -1
                  }
                  else{
                    return 0
                  }
            }
            
            var smallestElem = this.items.sort(find);
            return smallestElem[0]
        }
    }   
}

var stack = new Stack()
stack.push(5)
stack.push(21)
stack.push(6) 
stack.push(19)
stack.push(2) 
stack.push(4) 
console.log("Given stack is: ", stack.items)
console.log("Smallest number in the stack is: ",stack.smallest())


  