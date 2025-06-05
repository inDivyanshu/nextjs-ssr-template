# Kubernetes Manifests for Next.js SSR Template

## Files
- `deployment.yaml`: Deploys the app with 2 replicas, health checks, and resource limits.
- `service.yaml`: Exposes the app internally as a ClusterIP service on port 80.

## Usage
1. Build and push your Docker image:
   ```sh
   docker build -t your-docker-repo/nextjs-ssr-template:latest .
   docker push your-docker-repo/nextjs-ssr-template:latest
   ```
2. Deploy to Kubernetes:
   ```sh
   kubectl apply -f k8s/deployment.yaml
   kubectl apply -f k8s/service.yaml
   ```
3. (Optional) Expose externally with an Ingress or LoadBalancer service.

## Blue-Green/Zero-Downtime
These manifests are compatible with blue-green and rolling deployments. Use your CI/CD to manage image tags and rollout strategy.
