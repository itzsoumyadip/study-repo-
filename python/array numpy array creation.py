import numpy

## array()

arr=numpy.array([1,2,3,4])
print(arr)
#[1 2 3 4]
print(arr.dtype)
#int32

arr=numpy.array([1,2,3.1,4])  # if we give one value in float type all will convert into float
print(arr)    
#[1.  2.  3.1 4. ]    # implicity
print(arr.dtype)
#float64

arr=numpy.array([1,2,3.1,4],int) # int specify the type of an array 
print(arr) 
#[1 2 3 4]    # even float type value is given all are converted in int
print(arr.dtype)   
#int32



###           linspace()

arr = numpy.linspace(0,15)
print(arr)
# [ 0.          0.30612245  0.6122449   0.91836735  1.2244898   1.53061224
#   1.83673469  2.14285714  2.44897959  2.75510204  3.06122449  3.36734694
#   3.67346939  3.97959184  4.28571429  4.59183673  4.89795918  5.20408163
#   5.51020408  5.81632653  6.12244898  6.42857143  6.73469388  7.04081633
#   7.34693878  7.65306122  7.95918367  8.26530612  8.57142857  8.87755102
#   9.18367347  9.48979592  9.79591837 10.10204082 10.40816327 10.71428571
#  11.02040816 11.32653061 11.63265306 11.93877551 12.24489796 12.55102041
#  12.85714286 13.16326531 13.46938776 13.7755102  14.08163265 14.3877551
#  14.69387755 15.        ]

arr = numpy.linspace(0,15,16) # it break(divided) linspace in 16 different parts , and thats why it become float vlaue
print(arr) 
#[ 0.  1.  2.  3.  4.  5.  6.  7.  8.  9. 10. 11. 12. 13. 14. 15.]
 

#####             arange()

arr = numpy.arange(15)  ## same as range() method
print(arr)
#[ 0  1  2  3  4  5  6  7  8  9 10 11 12 13 14]

##   logspace()   --> spaceing(gap) between two element will be dpend on log of it 

# logspace(start, stop, num=50, endpoint=True, base=10.0, dtype=None, axis=0)


# Return numbers spaced evenly on a log scale.
# In linear space, the sequence starts at ``base ** start``
# (`base` to the power of `start`) and ends with ``base ** stop``

arr = numpy.logspace(1,40,5)
print(arr)
# [1.00000000e+01 5.62341325e+10 3.16227766e+20 1.77827941e+30  1.00000000e+40]
    ### REMOVING e in  logspace
print('%.2f' %arr[0])
# 10.00


##              zeros()
arr=numpy.zeros(5) # Return a new array of given shape and type, filled with zeros.
print(arr)
#[0. 0. 0. 0. 0.]

###         ones()
arr=numpy.ones(5) #Return a new array of given shape and type, filled with ones.
print(arr)
#[1. 1. 1. 1. 1.]
print(arr.dtype)
#float64
arr=numpy.ones(5,int) #data-type, optional # The desired data-type for the array, e.g., `numpy.int8`.  Default is `numpy.float64`.  
print(arr)
#[1 1 1 1 1]
print(arr.dtype)
#int32
