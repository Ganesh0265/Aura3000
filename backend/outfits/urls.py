from django.urls import path
from . import views  # assuming your views are in views.py

urlpatterns = [
    path('', views.home_view, name='home'),  # replace with your actual view
]