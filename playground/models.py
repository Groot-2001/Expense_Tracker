from django.db import models

class SpendingCategory(models.Model):
    name = models.CharField(max_length=255)

class User(models.Model):
    username = models.CharField(max_length=255)
    email = models.EmailField(max_length=20)
    password = models.CharField(max_length=20)

class Transaction(models.Model):
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()
    description = models.TextField(blank=True)
    users = models.ManyToManyField(User)
    category = models.ForeignKey(SpendingCategory, on_delete=models.CASCADE)
