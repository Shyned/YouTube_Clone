from django.urls import path
from comments import views

urlpatterns = [
    path('<pk>/', views.get_all_comments),
    path('', views.comments_list),
]
