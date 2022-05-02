from rest_framework.decorators import api_view, permission_classes
from replies.serializer import ReplySerializer
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