# Monitoring mit Uptime Kuma

Dieses Projekt wird lokal über Uptime Kuma überwacht.

- Uptime Kuma wurde via Docker lokal gestartet:
  http://localhost:3001
- 

- Überwachte URL: `http://localhost:3000/healthcheck`
- Erwarteter Statuscode: `200 OK`
- Monitoring läuft lokal, da kein externer Kubernetes-Cluster verfügbar war.
