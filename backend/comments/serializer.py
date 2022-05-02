from rest_framework import serializers
from .models import Comment
from replies.models import Reply

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'user', 'video_id', 'text', 'likes', 'dislikes',]
        depth = 1
        
        