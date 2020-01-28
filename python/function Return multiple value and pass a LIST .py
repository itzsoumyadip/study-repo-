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
