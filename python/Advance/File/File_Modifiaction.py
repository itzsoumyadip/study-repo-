# code  start from here 
import os
import datetime

def FileCreationTime(filename):
	timestamp=os.path.getmtime(filename.strip())
	d=datetime.datetime.fromtimestamp(timestamp)
	print(d)

print("KNOW THE FILE last Modification time")
fname=input("Enter The File Name")
FileCreationTime(fname)