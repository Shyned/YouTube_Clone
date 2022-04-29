from rest_framework.decorators import api_view, permission_classes
from comments.serializer import CommentSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
# Create your views here.


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def comments_list(request):
    if request.method == "POST":
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
