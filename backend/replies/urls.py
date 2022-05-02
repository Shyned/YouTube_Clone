from django.urls import path, include
from replies import views

urlpatterns = [
    path('', views.get_replies),
    path('<pk>/', views.make_reply),

    # path('all/', views.get_all_comments),
]
