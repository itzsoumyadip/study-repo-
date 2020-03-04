list=[6,3,85,9,7,95,45,98,87,9,45,54,7,865,612,9,8,7,6,5,4,3,2,1,98,97,87,64,31,25,58,36,69,14,47,74,85,96,63,41,75,95,35,15,91,73,67,68,62]

def bublesort(list):
    for i in range(len(list)-1,0,-1):
        for j in range(i):
            if list[j]>list[j+1]:
                list[j],list[j+1]=list[j+1],list[j]


bublesort(list)

print(list)

