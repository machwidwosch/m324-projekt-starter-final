import {
  generateRandomUser,
  storeUsernameLocally,
  generateBackendUrl,
  generateMessage,
} from './utils.ts';

const username = generateRandomUser();
storeUsernameLocally(username);

//const activeUsers = [];
//const typingUsers = [];

const socket = new WebSocket(generateBackendUrl('/ws'));

socket.addEventListener('open', () => {
  socket.send(JSON.stringify({ type: 'join', username }));
});

socket.addEventListener('message', (event) => {
  const data = JSON.parse(event.data);

  switch (data.type) {
    case 'message': {
      const messageDiv = generateMessage(data.user, data.message);
      document.getElementById('chat').appendChild(messageDiv);
      break;
    }
    case 'typing': {
      // später implementieren
      break;
    }
    default:
      break;
  }
});

document.getElementById('messageInput')?.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const input = event.target;
    if (input.value.trim() !== '') {
      socket.send(JSON.stringify({ type: 'message', message: input.value }));
      input.value = '';
    }
  }
});
