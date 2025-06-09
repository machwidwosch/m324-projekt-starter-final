# CI/CD-Pipeline

Diese Anwendung nutzt eine automatisierte CI/CD-Pipeline mit GitHub Actions und Docker.

## Übersicht der Pipeline

```mermaid
graph TD
  A[Push auf Branch] --> B[Lint + Build Workflow]
  B --> C[Tests ausführen]
  C --> D{Branch?}
  D -->|master| E[Docker Image bauen]
  E --> F[Image auf Docker Hub pushen]

Beschreibung

    Lint + Build: Bei jedem Push oder Pull-Request wird der Code automatisch durch ESLint geprüft und mit TypeScript kompiliert.

    Tests: Unit-Tests mit Jest werden automatisch ausgeführt.

    Docker Deployment: Bei einem Push auf den Branch master wird ein neues Docker-Image gebaut.

    Docker Hub: Das Image wird automatisch zu Docker Hub gepusht (via GitHub Actions).

    Monitoring: Uptime Kuma überprüft regelmäßig die /healthcheck-Route des Deployments.

    Benachrichtigungen: Im Fehlerfall kann optional eine Nachricht über Telegram gesendet werden.