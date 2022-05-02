from django.urls import path
from comments import views

urlpatterns = [
    path('<pk>/', views.get_comments),
    path('', views.comments_list),
]
