from django.urls import path
from . import views

 

urlpatterns = [
    path('register',views.register,name='register'), #routing to the view.py file's register fuction if any request come for register 

]    