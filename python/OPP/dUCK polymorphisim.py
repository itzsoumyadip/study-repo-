class PyCharm:

    def execute(self):
        print('compilng')
        print('Running')

class MyEditor:

    def execute(self):
        print('spell Check')
        print('Convention Check')
        print('Compilling')
        print('Running')

class Laptop:

    def code(self,ide):  ## ide become  dynamic type 
        ide.execute()


ide = MyEditor()

lap=Laptop()

lap.code(ide)

#  spell Check
# Convention Check
# Compilling
# Running