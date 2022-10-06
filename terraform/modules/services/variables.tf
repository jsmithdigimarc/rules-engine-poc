variable "project" {
  type = string
}

variable "region" {
  type = string
}

variable "artifact_repository_name" {
  type = string
}

variable "rules_engine_version" {
  type    = string
  default = "latest"
}