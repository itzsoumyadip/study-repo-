from django.urls import path
from . import views

 

urlpatterns = [
    path('',views.home,name='home'),
#    path('',views.ListView.as_view(),name="home"),
    path('add',views.add,name='add'),
  
] 