from django.shortcuts import render,redirect 
from django.contrib.auth.models import User,auth # importing USER MODEL OBJET(user table) for registration AND  auth for login
# Create your views here.
def register(request):
    if request.method =='POST':
                
        first_name=request.POST['first_name']  # fetching values form register.html page
        last_name=request.POST['last_name']
        username=request.POST['username']
        password1=request.POST['password1']
        password2=request.POST['password2']
        email=request.POST['email']

        if password1==password2:
            if User.objects.filter(username=username).exists():  ## checking value from user table form database
                print('username taken')
            elif User.objects.filter(email=email).exists():
                print('email taken')
            else:     
                user = User.objects.create_user(username=username,password=password1,email=email,first_name=first_name,last_name=last_name) #intial the value form register page to database 
                user.save() # save the data to database
                print('user Created')
        else:
            print('password not match')
        return redirect('/')  ## redirect the page
    return render(request,'register.html',{'print':'welcome'})