# Learn By Doing

Supporting code for my YouTube series where we build and deploy a fictional handyman business website — James's Handyman Services — across different cloud platforms and episodes.

Each episode introduces a new concept (static hosting, CDN, auth, APIs, etc.) using the same app as a running example, so you can follow along from the beginning or jump straight to the topic you care about.

## Quick Start

```bash
# Run the web app locally
make dev

# Build static files for deployment
make build
```

The built output lands in `apps/handyman-web/dist/` and can be uploaded to any static host.

## Repo Structure

```
apps/handyman-web/   # The React frontend (Vite)
platform/aws/        # AWS deployment episodes
platform/gcp/        # GCP deployment episodes
docs/episodes/       # Written notes per episode
```
