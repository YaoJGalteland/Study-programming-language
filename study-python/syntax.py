'''
Terminal command:
python3 syntax.py
pip install <package>
'''

# virables
x = "Hello World"	# str
x = 20	# int
x = 20.5	# float
x = 1j	# complex
x = ["apple", "banana", "cherry"]	# list
x = ("apple", "banana", "cherry")	# tuple, unchangeable
x = range(6)	# range
x = {"name" : "John", "age" : 36}	# dict
x = {"apple", "banana", "cherry"}	# set, no duplicate, unchangeable, but you can remove items and add new items.
x = frozenset({"apple", "banana", "cherry"})	# frozenset
x = True	# bool
x = b"Hello"	# bytes
x = bytearray(5)	# bytearray
x = memoryview(bytes(5))	# memoryview
x = None	# NoneType

# casting
y = str(3)

# String Concatenation
strcat = y + "A"

# slice string
# check string method
b = "hello world"
b[2:4]

# format string
print("hello {}".format("format"))

# for
thislist = ["apple", "banana", "cherry"]
for x in thislist:
  print(x)

# if, in
if x not in range(1,10):
    print("yes")
else:
    print("no")

# while
while x in range(1,10):
    print("yes")
    x = x+1

# sort list
# check list method
thislist.sort(reverse = True)

# dict
car = {
"brand": "Ford",
"model": "Mustang",
"year": 1964
}
x = car.keys()
print(x) #before the change
car["color"] = "white"
print(x) #after the change
y = car.values()
print(y) #before the change
car["year"] = 2020
print(y) #after the change

# class/object
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def __str__(self):
        return f"{self.name} is {self.age} years old"
p1 = Person("John", 20)
print(p1)

# module
import datetime
x = datetime.datetime.now()

# json
import json
# a Python object (dict): x
x = {
  "name": "John",
  "age": 30,
  "city": "New York"
}
# convert into a JSON string: y
y = json.dumps(x)
print(type(y))
# convert into a Python object (dict): x
x = json.loads(y)
print(type(x))

# user input
username = input("Enter username:")
print("Username is: " + username)

'''
The try block lets you test a block of code for errors.
The except block lets you handle the error.
The else block lets you execute code when there is no error.
The finally block lets you execute code, regardless of the result of the try- and except blocks.
'''
try:
  print("Hello")
except:
  print("Something went wrong")
else:
  print("Nothing went wrong")
