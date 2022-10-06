resource "google_cloud_run_service" "rules_engine_service" {
  name     = "rules-engine"
  location = var.region

  template {
    spec {
      containers {
        image = "${var.region}-docker.pkg.dev/${var.project}/${var.artifact_repository_name}/rules-engine:${var.rules_engine_version}"
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }

  depends_on = [google_project_service.run_api]
}

resource "google_cloud_run_service_iam_member" "rules_engine_all_users" {
  service  = google_cloud_run_service.rules_engine_service.name
  location = var.region
  role     = "roles/run.invoker"
  member   = "allUsers"
}