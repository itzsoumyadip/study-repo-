#
# #
# # #
# # # #




for i in range(4):
    for j in range(4):
        if j<=i:
            print("#", end=" ")
    print()


# second method 

for i in range(4):
    for j in range(i+1):
        print("#", end=" ")
    print()



