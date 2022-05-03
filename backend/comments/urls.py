from django.urls import path
from comments import views

urlpatterns = [
    # see all UA  request
    path('get_all_comments/', views.get_all_comments),
    # pk request
    path('videos/<pk>/', views.get_by_id),
    # post request
    path('', views.comments_list),
]
