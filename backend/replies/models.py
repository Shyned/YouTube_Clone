from django.db import models
from authentication.models import User
from comments.models import Comment
from rest_framework import serializers
# Create your models here.
class Reply(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE)
    text = models.CharField(max_length=255)
    depth = 1
    
    
