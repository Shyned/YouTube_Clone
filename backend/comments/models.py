from django.db import models
from replies.models import Reply
# Create your models here.
class Comment(models.Model):
    user = models.ForeignKey( Reply, on_delete = models.CASCADE)
    video_id  = models.CharField(max_length=200)
    text =  models.CharField(max_length=100)
    likes = models.IntegerField()
    dislikes = models.IntegerField()
