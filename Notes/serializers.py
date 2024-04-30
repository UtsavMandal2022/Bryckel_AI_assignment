from .models import *
from rest_framework import serializers

class NotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notes
        fields = ['id', 'title', 'content', 'created_at', 'updated_at']