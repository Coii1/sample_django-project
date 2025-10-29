from django.shortcuts import render
from .models import ContactDetail

# Create your views here.
def index(request):
    
    details = ContactDetail.objects.all()  
    
    return render(request, 'index.html', {'details': details}) #maghahanap to sa templates kasi na set sa settings.py na 'DIRS': [os.path.join(BASE_DIR, 'templates')],