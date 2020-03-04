
def selectS(nums):
    for i in range(len(nums)-1):     # loops upto  one less the the total length of array 
        mainpos = i
        for j in range(i,len(nums)):    #  left hand side will be sorted so it can be avoide for next looping so that j will start from i point
            if nums[j] < nums[mainpos]:
                mainpos= j

        temp = nums[i]
        nums[i]=nums[mainpos]       
        nums[mainpos] = temp

        print(nums)
    
        # if sorted(nums)==nums:
        #     return nums
    
        return nums


list = [9,4,8,7,6,3,]
selectS(list)
print(list)

if sorted(list)==selectS(list):
    print("same")


"""
[3, 4, 8, 7, 6, 9]     no one so i=8 now
[3, 4, 8, 7, 6, 9]   6  
[3, 4, 6, 7, 8, 9]     
[3, 4, 6, 7, 8, 9]
[3, 4, 6, 7, 8, 9]
[3, 4, 6, 7, 8, 9]
[3, 4, 6, 7, 8, 9]
[3, 4, 6, 7, 8, 9]
[3, 4, 6, 7, 8, 9]
[3, 4, 6, 7, 8, 9]
[3, 4, 6, 7, 8, 9]
same
"""