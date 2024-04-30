from django.shortcuts import render
from django.db.models import Q
from .models import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *

def home(request):
    return render(request, './index.html')

@api_view(['GET'])
def get_notes(request):
    try:
        notes = Notes.objects.all()
        serializer = NotesSerializer(notes, many=True)
        return Response(serializer.data)
    except Exception as e:
        return Response({'error': str(e)}, status=400)
    
@api_view(['POST'])
def add_notes(request):
    try:
        serializer = NotesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    except Exception as e:
        return Response({'error': str(e)}, status=400)
    
@api_view(['GET'])
def get_note_by_id(request, id):
    try:
        note = Notes.objects.get(id=id)
        serializer = NotesSerializer(note, many=False)
        return Response(serializer.data)
    except Exception as e:
        return Response({'error': str(e)}, status=400)
    
@api_view(['PUT'])
def update_notes(request, id):
    try:
        note = Notes.objects.get(id=id)
        serializer = NotesSerializer(instance=note, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    except Exception as e:
        return Response({'error': str(e)}, status=400)
    
@api_view(['DELETE'])
def delete_notes(request, id):
    try:
        note = Notes.objects.get(id=id)
        note.delete()
        return Response('Note deleted successfully')
    except Exception as e:
        return Response({'error': str(e)}, status=400)
    
