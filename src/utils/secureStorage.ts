// Secure, AES-256 encrypted localStorage/sessionStorage/cookie utilities
// All APIs are async and type-safe. Only string data is supported; serialize objects as needed.
import { encrypt, decrypt } from './crypto';

// LocalStorage
export const secureLocalStorage = {
  async set(key: string, value: string) {
    const encrypted = await encrypt(value);
    window.localStorage.setItem(key, encrypted);
  },
  async get(key: string): Promise<string | null> {
    const encrypted = window.localStorage.getItem(key);
    if (!encrypted) return null;
    return decrypt(encrypted);
  },
  remove(key: string) {
    window.localStorage.removeItem(key);
  },
};

// SessionStorage
export const secureSessionStorage = {
  async set(key: string, value: string) {
    const encrypted = await encrypt(value);
    window.sessionStorage.setItem(key, encrypted);
  },
  async get(key: string): Promise<string | null> {
    const encrypted = window.sessionStorage.getItem(key);
    if (!encrypted) return null;
    return decrypt(encrypted);
  },
  remove(key: string) {
    window.sessionStorage.removeItem(key);
  },
};

// Cookies (expires in days)
export const secureCookies = {
  async set(name: string, value: string, days = 7) {
    const encrypted = await encrypt(value);
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(encrypted)}; expires=${expires}; path=/; SameSite=Strict;`;
  },
  async get(name: string): Promise<string | null> {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (!match) return null;
    return decrypt(decodeURIComponent(match[2]));
  },
  remove(name: string) {
    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Strict;`;
  },
};
