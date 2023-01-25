from rest_framework import serializers
from restaurante.models import Prato

class PratoSerializer(serializers.ModelSerializer):
  class Meta:
    model = Prato
    fields = '__all__'