from django.urls import path, include
from replies import views

urlpatterns = [
    path('', views.get_all_replies),
    # path('all/', views.get_all_comments),
]