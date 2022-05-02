from rest_framework.decorators import api_view, permission_classes
from replies.serializer import ReplySerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny,IsAuthenticated
from .models import Reply
from django.shortcuts import get_object_or_404

# Create your views here.


# See all comments

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_replies(request, pk):
    replies = get_object_or_404(Reply, pk=pk)
    if request.method == 'GET':
        serializer = ReplySerializer(replies)
        return Response(serializer.data)





 # · Requires JWT authorization (Protected route).

# · Accepts a value from the request’s URL (The id of the comment the reply will be connected to).

# · Accepts a body object from the request in the form of a Reply model.

# · Adds the new reply to the database associated with the comment id sent in the URL and the user who sent the JWT in the request.

# · Returns a 201 status code.

# · Responds with the newly created reply object. 



@api_view(["POST"])
@permission_classes([IsAuthenticated])
def make_reply(request,pk):
    if request.method == "POST":
        serializer = ReplySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)