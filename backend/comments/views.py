from rest_framework.decorators import api_view, permission_classes
from comments.serializer import CommentSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Comment
# Create your views here.



# See all comments
@api_view(["GET"])
@permission_classes([Allowany])
def get_all_comments(request):
    comments = Comment.objects.all()
    serializer = CommentSerializer(comments, many = True)
    return Response(serializer.data)







@api_view(["POST"])
@permission_classes([IsAuthenticated])
def comments_list(request):
    if request.method == "POST":
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
