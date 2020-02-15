from django.shortcuts import render,redirect 
from django.contrib.auth.models import User,auth # importing USER MODEL OBJET(user table) for registration AND  auth for login
from django.contrib import messages
# Create your views here.
def register(request):
    if request.method =='POST':
                
        first_name=request.POST['first_name']  # fetching values form register.html page
        last_name=request.POST['last_name']
        username=request.POST['username']
        password1=request.POST['password1']
        password2=request.POST['password2']
        email=request.POST['email']
        if username and first_name and last_name and email and password1:
            pass      ## if data are enter then only procede 
        else:
            messages.info(request,'please enter data')
            return redirect('register')   
        if password1==password2:
            if User.objects.filter(username=username).exists():  ## checking value from user table form database
                messages.info(request,'Username Taken')
                return redirect('register')
            elif User.objects.filter(email=email).exists():
                messages.info(request,'email taken')
                return redirect('register')
            else:     
                user = User.objects.create_user(username=username,password=password1,email=email,first_name=first_name,last_name=last_name) #intial the value form register page to database 
                user.save() # save the data to database
                messages.info(request,'user Created')
                return redirect('login')    
        else:
            messages.info(request,'password not match')
            return redirect('register')
        return redirect('/')  ## redirect the page
    return render(request,'register.html',)


def login(request):
    if request.method =='POST':    
        username=request.POST['username']
        password=request.POST['password']
        user = auth.authenticate(username=username, password=password)  # if same  username password exsists in database it return user object , else it return None
        
        if user is not None:
            auth.login(request,user) # it give the login acess to current user
            return redirect('/')
        else:
            messages.info(request,'Invalid credentials')
            return redirect('login')     
    # if user.is_authenticated:  ## i want to return login username from view to html page but not working 
    #     des=user.first_name
    #     return render(request,'home.html',{'name',des})    
    return render(request,'login.html')

def logout(request):
    auth.logout(request) # logout the current user 
    return redirect('/')
