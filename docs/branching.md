# Branching-Strategie

Dieses Projekt folgt dem Git-Workflow mit folgenden Branches:

## Haupt-Branches

- `master`: Stabile, produktionsreife Version der Anwendung
- `development`: Integration von Features; Stand der laufenden Entwicklung

## Feature-Branches

- Jeder neue Task (z. B. ein Issue) bekommt einen eigenen Branch:
  `feature/<kurze-beschreibung>`
- Nach Fertigstellung: Pull Request auf `development`
- Review und Merge mit `Squash & Merge`

## Pull Requests

- Code wird nicht direkt in `development` oder `master` gepusht
- Jeder PR muss eindeutig benannt und einem Issue zugeordnet sein
- PRs werden überprüft und kommentiert

## Beispiel-Ablauf

```mermaid
graph LR
  A[Erstelle Branch: feature/feature-name] --> B[Push Änderungen]
  B --> C[Pull Request auf development]
  C --> D[Code Review & Merge]
  D --> E[Merge development → master]


Hinweise für Mitentwickler

    Verwende sprechende Branch-Namen

    Halte deine Branches aktuell mit development

    Schreibe verständliche Commits