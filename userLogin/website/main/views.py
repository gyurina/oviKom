from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages

def home(request):
    return render(request, 'main/home.html')

def register(request):

    if request == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'Szia {username}, sikeresen regisztráltál.')
            return redirect('home')
    else:
        messages.error(request, f'Sikertelen')
        form = UserCreationForm()
    return render(request, 'main/register.html', { 'form' : form})