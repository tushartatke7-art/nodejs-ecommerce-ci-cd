📦 Node.js CI/CD Pipeline with Jenkins & Docker
Overview

This project demonstrates a production-ready CI/CD pipeline for a Node.js application using Jenkins, Docker, DockerHub, and GitHub. The pipeline includes automated testing, Docker image building, security scanning, and multi-environment deployment.

It follows DevOps best practices, including semantic versioning, multi-stage Docker builds, and non-root container execution.

🚀 Features

CI/CD Pipeline using Jenkins

Multi-stage Docker Builds for optimized image size

Semantic Versioning for Docker images

Automated Testing (unit tests + linting)

Container Security Scanning with Trivy

Multi-Environment Deployment (dev / staging / production)

Secure Credential Management in Jenkins

Logging & Monitoring Ready (Prometheus/Grafana compatible)

Parallelized pipeline stages for faster builds

📂 Project Structure
.
├── Dockerfile                # Multi-stage Docker build
├── docker-compose.dev.yml    # Dev environment config
├── docker-compose.staging.yml
├── docker-compose.prod.yml
├── Jenkinsfile               # CI/CD pipeline definition
├── package.json
├── src/
│   └── app.js                # Main Node.js app
├── tests/                    # Unit and integration tests
└── README.md
⚙️ Pipeline Stages

Checkout – Pulls the latest code from GitHub

Install Dependencies – Installs Node.js modules

Run Tests & Lint – Executes unit tests and code linting in parallel

Build Docker Image – Multi-stage Docker build for optimized production image

Security Scan – Trivy scans Docker image for vulnerabilities

Push Docker Image – Tags and pushes image to DockerHub with semantic versioning

Deploy to Environment – Automated deployment to dev/staging/prod servers

🛠️ Getting Started
Prerequisites

Jenkins installed (WAR or Docker)

Node.js >= 18

Docker & Docker Compose

DockerHub account

GitHub repository

Local Development
# Install dependencies
npm install

# Run tests
npm test

# Start app locally
npm start
Build Docker Image
docker build -t yourdockerhubusername/node-app:dev .
docker run -p 3000:3000 yourdockerhubusername/node-app:dev
Jenkins Pipeline

Configure Jenkins credentials:

GitHub Token

DockerHub Username & Password

Add Jenkinsfile to repo

Create a Jenkins job pointing to the repository

Run the pipeline — it will:

Checkout code

Run tests

Build & scan Docker image

Push image to DockerHub

Deploy to the configured environment

🔒 Security Best Practices

Non-root Docker user

Secrets managed via Jenkins Credentials

Automated Trivy scan on each build

Separate environment configs for dev/staging/prod

🖥️ Multi-Environment Deployment

.env.dev → Development server

.env.staging → Staging server

.env.prod → Production server

Pipeline automatically deploys the correct Docker image based on the target environment.

📈 Logging & Monitoring

Use Winston logger for app-level logging

Docker container logs accessible via docker logs <container>

Ready for integration with Prometheus + Grafana for metrics

✅ Future Improvements

Kubernetes deployment with Helm charts

GitOps workflow with ArgoCD

Automated rollback strategy on failed deployment

Full monitoring dashboards

👨‍💻 Author

Tushar Tatke – DevOps Enthusiast | QA → DevOps Transition
