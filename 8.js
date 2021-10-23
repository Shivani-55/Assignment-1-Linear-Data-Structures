//Q8. Write a program to check if all the brackets are closed in a given code snippet.

let expr = "([{}])";

function areBracketsBalanced(expr)
{
    let stack = [];
 
    for(let i = 0; i < expr.length; i++)
    {
        let x = expr[i];
 
        if (x == '(' || x == '[' || x == '{')
        {
            stack.push(x);
            continue;
        }
        if (stack.length == 0)
            return false;
             
        let check;
        switch (x){
        case ')':
            check = stack.pop();
            if (check == '{' || check == '[')
                return false;
            break;
 
        case '}':
            check = stack.pop();
            if (check == '(' || check == '[')
                return false;
            break;
 
        case ']':
            check = stack.pop();
            if (check == '(' || check == '{')
                return false;
            break;
        }
    }
    return (stack.length == 0);
}



if (areBracketsBalanced(expr))
    console.log("All the brackets are closed");
else
    console.log("All the brackets are not closed");