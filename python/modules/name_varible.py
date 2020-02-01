def add():
    print('from add fun from '+ __name__)
def sub():
    print('from sub fun '+ __name__)


def main():
    print('in NAME main() '+ __name__)
    add()
    sub()

if __name__ =='__main__':
    main()     


