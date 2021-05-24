terraform {
  required_version = "0.15.0"
  required_providers {
      aws = {
          source = "hasicorp/aws"
          version = "3.37.0"
      }
  }
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "bucket-teste" {
  bucket = "ifbatesteterraformaws-1123456789123456789"
  acl    = "private"

  tags = {
    Name        = "My bucket"
    Environment = "Dev"
    Managedby = "Terraform"   
  }
}