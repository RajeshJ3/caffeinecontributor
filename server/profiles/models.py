from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth import get_user_model
from django.dispatch import receiver

User = get_user_model()

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True, null=True)

    dp = models.ImageField(upload_to="profiles/", blank=True, null=True)

    def __str__(self) -> str:
        return self.user.__str__()

class Link(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    '''
    link_to options:
    - github
    - website
    - stackoverflow
    - ...
    '''
    link_to = models.CharField(max_length=32)
    link = models.CharField(max_length=200)

    is_active = models.BooleanField(default=True)

    def __str__(self) -> str:
        return self.profile.__str__()

class StripeKey(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    secret_id = models.CharField(max_length=200)
    secret_key = models.CharField(max_length=200)

    is_sandbox = models.BooleanField(default=True)

    def __str__(self) -> str:
        return self.user.__str__()

# post save signal, to create user profile.
@receiver(post_save, sender=User)
def print_only_after_deal_created(sender, instance, created, **kwargs):
    print(sender)
    print(instance)
    if created:
        Profile.objects.create(user=instance)
