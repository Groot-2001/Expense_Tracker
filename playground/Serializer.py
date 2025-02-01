from rest_framework import serializers
from .models import User,Transaction
from rest_framework.authtoken.models import Token

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','email','password']
    
    def create(self,validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user

class TransactionSerializer(serializers.ModelSerializer):
    users = serializers.StringRelatedField(many=True)
    category = serializers.StringRelatedField()

    class Meta:
        model = Transaction
        fields = ['amount', 'date', 'description', 'users', 'category']