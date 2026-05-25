# Pipeline

Polyglot monorepo scaffold with a GitHub Actions CI pipeline for:

- Java service
- Node.js frontend
- Python utility service

## Structure

- [services/java-service](services/java-service) - Maven-based Java service
- [services/node-frontend](services/node-frontend) - Node.js service with lint and test scripts
- [services/python-utility](services/python-utility) - Python package with pytest coverage
- [.github/workflows/ci.yml](.github/workflows/ci.yml) - top-level workflow that detects changed folders and builds an affected matrix
- [.github/workflows/reusable-ci.yml](.github/workflows/reusable-ci.yml) - reusable workflow shared by all project jobs

## CI Features

- Detects changed folders before building
- Runs only affected jobs when a subset of services changes
- Uses dependency caching for Java, Node.js, and Python
- Runs lint and tests per service
- Uploads coverage reports and build artifacts
- Uses a dynamic matrix with fail-fast disabled
- Publishes job summaries in GitHub Actions

## Layout

```text
services/
  java-service/
  node-frontend/
  python-utility/
.github/
  workflows/
    ci.yml
    reusable-ci.yml
```

## Notes

The scaffold is intentionally minimal so the pipeline behavior is easy to inspect and extend. Add real build tooling or application code inside each service as needed.
