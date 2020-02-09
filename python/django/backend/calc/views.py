from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView
# Create your views here.

# def home(request):
#     return render(request,'home.html',{'name':'itzsoumyadip'})

def add(request):
    val1 = int(request.GET['num1'])
    val2 = int(request.GET['num2'])
    val3 = val1+val2   
    return render(request,"result.html",{'res':val3})


class ListView(TemplateView):
    template_name ="home.html " 
    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(**kwargs)
        listt =[1,2,3,4,5,6]
        context['lis'] = listt 
        return context
     
       
     
     
     
     


## work with class

