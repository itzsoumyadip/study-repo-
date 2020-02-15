from django.urls import path
from . import views

 

urlpatterns = [
    path('register',views.register,name='register'),#routing to the view.py file's register fuction if any request come for register 
    path('login',views.login, name='login'),
    path('logout',views.logout, name='logout')
]    