from rest_framework.decorators import api_view, permission_classes
from replies.serializer import ReplySerializer
<<<<<<< HEAD
# from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import Reply

# Create your views here.


@api_view(["GET"])
@permission_classes([AllowAny])
def get_all_replies(request):
    replies = Reply.objects.all()
    serializer = ReplySerializer(replies, many=True)
    return Response(serializer.data)
=======
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Reply
# Create your views here.



# See all comments
@api_view(["GET"])
@permission_classes([AllowAny])
def get_all_replies(request):
    reply = Reply.objects.all()
    serializer = ReplySerializer(reply, many = True)
    return Response(serializer.data)
>>>>>>> 3240bb8082a094d20c037ce1a0930d5620d315c1
