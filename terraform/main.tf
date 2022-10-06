terraform {
  backend "gcs" {
    bucket = "tfstate-jsmithdigimarc"
    prefix = "rules-engine"
  }
}

provider "google" {
  project = var.project
  region  = var.region
}

module "services" {
  source                   = "./modules/services"
  artifact_repository_name = "gcf-artifacts"
  project                  = var.project
  region                   = var.region
}

