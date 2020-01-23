# # # #
# # #
# #
#



for i in range(4):
    for j in range(4):
        if j<4-i:             # if i=3  and  4-i= 1  loop run once for j=0  , i = coloum j= row 
            print("#", end=" ")
        else:
            break   
    print()



# ******************************************** 2nd method



for i in range(4):
    for j in range(4-i):
        print("#", end=" ")
    print()

