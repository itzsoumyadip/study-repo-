## list is Muteable  

list=[9.5,'saha',23]   # different types of data in  
print(list[:2])

NumList=[23,43,45,56] #number list 
StringList=['saha','shome','pal'] #string list 

mil=[NumList,StringList] # mislaneous list (contin both number list and string list in one single list )
print(mil) # [[23, 43, 45, 56], ['saha', 'shome', 'pal']]

NumList.append(34) #appending in the list  at the end 
print(NumList) # [23, 43, 45, 56, 34]

NumList.insert(2,82) # Insert between list by specifying the index number , here 2 is the index number and 82 is the number which will be inserted at the index no 2
print(NumList)  #[23, 43, 82, 45, 56, 34]

NumList.remove(43) # removes first occurrence of the value from the list ,,  specified  number ta  tule debe  works on prothober  joknon nuber ta asbe list e 
print(NumList)  # [23, 82, 45, 56, 34]

NumList.pop(3) #Remove the number base on given Index number
print(NumList) #[23, 82, 45, 34]

print(NumList.pop()) # removes the last element in the list ,and return item at the index
#34

del NumList[1:] # delete multiple values from specified index
print(NumList) #[23]

NumList.extend([61,24,54,45,93,72]) # Appending multiple values in the list 
print(NumList) #[23, 61, 24, 54, 45, 93, 72]

## *********     PYthon inbuild function for list         **********

print(min(NumList)) # FIND THE MIinimun number in the list  
#23

print(max(NumList)) # FIND THE MAXimun number in the list 
#93

print(sum(NumList)) # ADD all the values in the list
# 372

NumList.sort() # sort the number assending order
print(NumList) # [23, 24, 45, 54, 61, 72, 93]

## ************************ ##

print(NumList.clear()) # Remove all the items from the list  --(Answer -- None)
