from django.urls import path
from comments import views

urlpatterns = [
    # see all UA  request
    path('get_all_comments/', views.get_all_comments),
    # pk request
    path('<pk>/', views.get_comments),
    # post request
    path('', views.comments_list),
]
