print(~52)  # compliment operator 
# -53 

print(12 & 13)  #                              12 --> 0000 1100
# 12            #                              13 --> 0000 1101   
                # bitwise and operator (&)      & --> 0000 1100   == 12            


print(12 | 13)  #                              12 --> 0000 1100
# 13            #                              13 --> 0000 1101   
                # bitwise or  operator (|)      | --> 0000 1101   == 13  

print(12^13)    #                              12 --> 0000 1100
# 1             #                              13 --> 0000 1101   
                # bitwise xor  operator (^)    ^  --> 0000 0001   == 1  

print(10<<2) # 10    ->>          1010.000 
#40          #  left sift         101000.000    left sift gaining bits in right 
             # 
print(10>>2) # 10 -->               1010.000 
#2           #  left sift           10.    right  sift loose  bits in right to left
             #              