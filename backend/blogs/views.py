from django.shortcuts import get_object_or_404
from .serializers import BlogSerializer
from .models import Blog

from rest_framework import viewsets
from rest_framework.response import Response


class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    def get_queryset(self):
        return Blog.objects.all()


