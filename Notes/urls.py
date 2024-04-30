from django.urls import path
from .views import *

urlpatterns = [
    path('', get_notes),
    path('add/', add_notes),
    path('<int:id>/', get_note_by_id),
    path('update/<int:id>/', update_notes),
    path('delete/<int:id>/', delete_notes),
]