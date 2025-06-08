/**
 * @jest-environment jsdom
 */
import {
    generateRandomUser,
    storeUsernameLocally,
    generateBackendUrl,
    generateMessage
} from './utils';

describe('generateRandomUser', () => {
    it('should generate a username string', () => {
        const username = generateRandomUser();
        expect(typeof username).toBe('string');
        expect(username).toMatch(/^User-\d+$/);
    });
});

describe('storeUsernameLocally', () => {
    it('should save the username to localStorage', () => {
        const name = 'Testuser';
        const setItemMock = jest.fn();

        Object.defineProperty(window, 'localStorage', {
            value: { setItem: setItemMock },
            writable: true
        });

        storeUsernameLocally(name);
        expect(setItemMock).toHaveBeenCalledWith('username', name);
    });
});

describe('generateBackendUrl', () => {
    it('should convert http origin to ws and append the path', () => {
        const path = '/chat';

        // workaround, da window.location nicht direkt überschreibbar ist
        const oldOrigin = window.location.origin;
        const result = generateBackendUrl(path);

        // Achtung: dieser Test kann nur bestehen, wenn window.location.origin wirklich 'http://localhost:3000' ist.
        // Ansonsten passe die Erwartung dynamisch an:
        const expected = oldOrigin.replace(/^http/, 'ws') + path;
        expect(result).toBe(expected);
    });
});

describe('generateMessage', () => {
    it('should return a div with class "message"', () => {
        const user = { id: '1', name: 'Max' };
        const message = 'Hallo!';
        const div = generateMessage(user, message);

        expect(div).toBeInstanceOf(HTMLDivElement);
        expect(div.className).toBe('message');
        expect(div.textContent).toContain('Max');
        expect(div.textContent).toContain('Hallo!');
    });
});
