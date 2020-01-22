i=1
while i<=5:
    print('python ',end=" ")
    
    j=1
    while j<=3:
        print("rocks ",end=" ")    # inner while loop
        j +=1                      # inner while loop
    
    i +=1    # watch the Indentation.  This run for outer WHile loop     
    print()
 
#  python  rocks  rocks  rocks
# python  rocks  rocks  rocks
# python  rocks  rocks  rocks
# python  rocks  rocks  rocks
# python  rocks  rocks  rocks

