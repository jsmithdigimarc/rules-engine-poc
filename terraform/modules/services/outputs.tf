output "rules_engine_service_url" {
  value = google_cloud_run_service.rules_engine_service.status[0].url
}