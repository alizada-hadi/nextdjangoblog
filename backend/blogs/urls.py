from . import views
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register("blogs", views.BlogViewSet, basename="blog")

urlpatterns = router.urls