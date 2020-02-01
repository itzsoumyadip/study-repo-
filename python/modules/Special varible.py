# When you run your script, the __name__ variable equals __main__. When you import the containing script, it will contain the name of the script.
from  name_varible import *
def v():
    add()
    print('from v fun' + __name__)

def main():
    print('from S varible '+ __name__)
    
    v()  
main()