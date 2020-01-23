av = 5
x =int (input('hOW MANY CANDIES YOU WANT ?'))

i=1
while i<=x:
    if i>av:                    # if user want more candies greater then avilable ,then this if statement will run
        print('Out of stock')
        break   #while loop end    # With the break statement, we can stop the loop before it has looped through all the items:
    print('Candy')
    i+=1

# print('bye')

# hOW MANY CANDIES YOU WANT ?5                        
# Candy
# Candy                                
# Candy
# Candy
# Candy
# bye

# hOW MANY CANDIES YOU WANT ?12
# Candy
# Candy
# Candy
# Candy
# Candy
# Out of stock
# bye


for i in range(1,100,1):
    if i%3==0 or i%5==0:    # only run if i is divisible by 3 0r 5
      continue   # With the continue statement we can stop the current iteration of the loop, and continue with the next:
    print(i)      
print('Bye')

# 1
# 2
# 4
# 7
# 8
# 11
# 13
# 14
# 16
# 17
# 19
# 22
# 23
# 26
# 28
# 29
# 31
# 32
# 34
# 37
# 38
# 41
# 43
# 44
# 46
# 47
# 49
# 52
# 53
# 56
# 58
# 59
# 61
# 62
# 64
# 67
# 68
# 71
# 73
# 74
# 76
# 77
# 79
# 82
# 83
# 86
# 88
# 89
# 91
# 92
# 94
# 97
# 98
# Bye


## pass 
for i in range(1,100):
    if (i%2!=0): # if i is not divisible by 2 then
        pass # for loops cannot be empty,
             # but if you for some reason have a for loop with no content, put in the pass statement to avoid getting an error
             #  itzsoumyadip tried this, it workerd,,-->>   print(end="")
    else:
        print(i)



# all even number print
# 2
# 4
# 6
# 8
# 10
# 12
# 14
# 16
# 18
# 20
# 22
# 24
# 26
# 28
# 30
# 32
# 34
# 36
# 38
# 40
# 42
# 44
# 46
# 48
# 50
# 52
# 54
# 56
# 58
# 60
# 62
# 64
# 66
# 68
# 70
# 72
# 74
# 76
# 78
# 80
# 82
# 84
# 86
# 88
# 90
# 92
# 94
# 96
# 98