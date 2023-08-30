from django.contrib import admin
from profiles import models

admin.site.register(models.Profile)
admin.site.register(models.Link)
admin.site.register(models.StripeKey)
