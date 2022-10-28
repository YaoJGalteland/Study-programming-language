from stack import Stack

def is_match(a,b):
    if (a == "(" and b == ")") or (a == "[" and b == "]") or (a == "{" and b == "}"):
        return True
    else:
        return False

def is_paren_balanced(str):
    s = Stack()
    for bracket in str:
        if bracket in "({[":
            s.push(bracket)
        elif s.is_empty() == True:
            return False
        elif is_match(s.peek(), bracket):
            s.pop()
        else:
            return False
    if s.is_empty():
        return True
    else:
         return False

print("String : (((({})))) Balanced or not?")
print(is_paren_balanced("(((({}))))"))

print("String : [][]]] Balanced or not?")
print(is_paren_balanced("[][]]]"))

print("String : [][] Balanced or not?")
print(is_paren_balanced("[][]"))

