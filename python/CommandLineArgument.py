## argv argument values
import sys

a=int(sys.argv[1])
b=int(sys.argv[2])
result= a+b
print(result)

# run from command line  as 
# python CommandLineArgument.py 1 2
# result === 3


## in normal way it will give error
#   line 4, in <module>
#    a=int(sys.argv[1])
# IndexError: list index out of range




# argv   -- command line arguments;
#  argv[0] is the script pathname if known path -- module search path; path[0] is the script directory, else '' modules -- dictionary of loaded modules
# argv[1] means 1st argument argv[2] means second argument and so on
#  filenaeme    1         2
#   argv[0]   argv[1]    argv[2]
