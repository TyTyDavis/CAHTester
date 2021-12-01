from django.shortcuts import render
from django.views.generic.base import TemplateView
from .forms import cardForm

# Create your views here.
class cardEntry(TemplateView):
    template_name = "cards.html"
    formClass = cardForm
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
