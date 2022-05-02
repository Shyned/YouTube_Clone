from rest_framework.decorators import api_view, permission_classes
from replies.serializer import ReplySerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import Reply
from django.shortcuts import get_object_or_404

# Create your views here.


# See all comments

@api_view(["GET"])
@permission_classes([AllowAny])
def get_replies(request, pk):
    replies = get_object_or_404(Reply, pk=pk)
    if request.method == 'GET':
        serializer = ReplySerializer(replies)
        return Response(serializer.data)
