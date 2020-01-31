def add(a,b):
    return a+b

sub = lambda a,b: a-b


def mul(a,b):
    return a*b

def div(a,b):
    return a/b

def smart_div(func):
    def inner(a,b):
        if a<b:
            a,b=b,a
        return func(a,b)
    return inner


div=smart_div(div)