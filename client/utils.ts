export function generateRandomUser(): string {
  return `User-${Math.floor(Math.random() * 10000)}`;
}

export function storeUsernameLocally(name: string): void {
  localStorage.setItem('username', name);
}

export function generateBackendUrl(path: string): string {
  return `${window.location.origin.replace(/^http/, 'ws')}${path}`;
}

export function generateMessage(user: { id: string; name: string }, message: string): HTMLDivElement {
  const div = document.createElement('div');
  div.className = 'message';
  div.innerHTML = `<strong>${user.name}</strong>: ${message}`;
  return div;
}

