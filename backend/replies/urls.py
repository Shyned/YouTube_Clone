from django.urls import path, include
from replies import views

urlpatterns = [
    path('<pk>/', views.get_replies)
    ]


