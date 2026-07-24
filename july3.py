# l=[1,2,True,"Hi",3.567]
# l.append(3)
# print(l)
# print(l.index("Hi"))
# l.pop()
# print(l)

# s=set()
# s.add(1)
# s.add(-1)
# print(min(s))
# print(max(s))

# l=[1,2,True,"Hi",3.567]
# l.append(3)
# print(l)
# print(l.index("Hi"))
# l.pop()
# print(l)

# s=set()
# s.add(1)
# s.add(-1)
# print(min(s))
# print(max(s))

# d={1:'A', 2:'B', 3:'C'}
# for v in d.values():
#     print(v)
    
# for k,v in d.items():
#     print("key:", k, "value:", v)
   
# l=[1,2,3,4,1,2,1,2,5]
# print(l)

# l = [1, 2, 2, 3, 1, 4, 2]
# freq = {}
# for i in l:
#     if i in freq:
#         freq[i] += 1
#     else:
#         freq[i] = 1
# print(freq)



l=[1,2,True,"Hi",3.567]
l.append(3)
print(l)
print(l.index("Hi"))
l.pop()
print(l)

s=set()
s.add(1)
s.add(-1)
print(min(s))
print(max(s))

d={1:'A', 2:'B', 3:'C'}
for v in d.values():
    print(v)
    
for k,v in d.items():
    print("key:", k, "value:", v)
    
    
l=[1,2,3,4,1,2,1,2,5]
from collections import Counter
freq=Counter(l)
print(freq)

new_l=[0]*6
for i in l:
    new_l[i]+=1
print(new_l)

from itertools import permutations
l=[1,2,3]
per=permutations(l)
print(list(per))

from itertools import combinations
l=[1,2,3]
com=combinations(l,2)
print(list(com))

def function(l):
    print(l)
function(l)

class Class1():
    def __init__(self, i):
        self.i=i
    def function1(self):
        print(self.i)
    def function2(self,j):
        print(j)
        
obj=Class1(1)
obj.function1()
obj.function2(3)
d={"name":"Saru",
   "age":19,"salary":75000}
print(type(d))
import json
res=json.dumps(d)
print(res)
print(type(res))


with open("users.json","r") as file:
    data=json.load(file)
print(data)
print(type(data))