// Generiert einen zufälligen Usernamen
export function generateRandomUser() {
  return `User-${Math.floor(Math.random() * 10000)}`;
}

// Speichert Namen lokal
export function storeUsernameLocally(name) {
  localStorage.setItem('username', name);
}

// Gibt Backend-URL zurück
export function generateBackendUrl(path) {
  return `${window.location.origin.replace(/^http/, 'ws')}${path}`;
}

// Erstellt eine neue Chat-Nachricht als HTML
export function generateMessage(user, message) {
  const div = document.createElement('div');
  div.innerHTML = `<strong>${user}:</strong> ${message}`;
  return div;
}
