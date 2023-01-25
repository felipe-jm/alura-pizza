from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from restaurante.views import PratoListView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/pratos/', PratoListView.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
