#For returning multiple values from a function, we can return tuple, list or dictionary object as per our requirement.

## normal 
def counter(lst):
    even=0
    odd=0
    length=len(lst)

    for i in lst:
        if i%2==0:
            even+=1
        else:
            odd+=1
    return even,odd,length            



lst=[20,25,19,22,65,78,89,96,78,54,21,45,15,36,62,35,81]
even,odd,length=counter(lst)

print(even,odd,length)

print("Length :{}  Even:{} and Odd :{}".format(length,even,odd)) #fuction belong to string 

## return by tuple


def reTuple(lst):
    even=0
    odd=0
    length=len(lst)

    for i in lst:
        if i%2==0:
            even+=1
        else:
            odd+=1
    return (even,odd,length)  
even,odd,length=reTuple(lst)
print('tuple')
print(even,odd,length)   #  8 9 17
##However, above program get problematic as the number of values returned increases. In case if we want to return six or seven values? Sure, we can keep tupling them, but it gets easy to forget which value is where. Also its gets little messy to unpack them wherever we want to receive them



# REturn as list

def ReList(lst):
    even=0
    odd=0
    length=len(lst)

    for i in lst:
        if i%2==0:
            even+=1
        else:
            odd+=1
    return [even,odd,length]

result=ReList(lst)
print('List')
print(result)  # [8, 9, 17]

for i in range(0,len(result)):
    print(result[i])
# 8
# 9
# 17

## second method for list 

def secondLISTmethod(lst):
    even=0
    odd=0
    length=len(lst)
    result=[length]
    for i in lst:
        if i%2==0:
            even+=1
        else:
            odd+=1
    result.append(even)
    result.append(odd)        
    return result
     

result=secondLISTmethod(lst)
print('for second list method ')
for i in result:
 print(i) 
# 17
#8
# 9


##   as dictionary 


def reDic(lst):
    even=0
    odd=0
    length=len(lst)

    for i in lst:
        if i%2==0:
            even+=1
        else:
            odd+=1
    return {'even':even,'odd':odd,'length':length}

result=reDic(lst)
print('FOR Dictionary')
print(result['odd'])
#9