
comments="# code  start from here "


def create_code_File(filename=""):
	with open(filename, 'w') as timedate: 
		timedate.write(comments) 

	print("File created") 	

fname=str(input("Enter your code files name with extension"))
create_code_File(fname.strip())