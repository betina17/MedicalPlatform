import { create } from 'zustand';
import type { Role } from '../types';

// Session state is kept in memory only. The access token is short-lived, and the
// refresh token lives in an httpOnly cookie set by auth-service — nothing sensitive
// is written to localStorage. On page reload the session is restored via a silent
// refresh (see AuthInitializer in App.tsx).
interface AuthState {
  accessToken: string | null;
  role: Role | null;
  accountId: string | null;
  profileId: string | null; // patient or doctor UUID

  setTokens: (params: {
    accessToken: string;
    role: Role;
    accountId: string;
  }) => void;
  setAccessToken: (token: string) => void;
  setProfile: (profileId: string) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
}

export const useAuthStore = create<AuthState>()((set, get) => ({
  accessToken: null,
  role: null,
  accountId: null,
  profileId: null,

  setTokens: ({ accessToken, role, accountId }) => {
    set({ accessToken, role, accountId });
  },

  setAccessToken: (token: string) => {
    set({ accessToken: token });
  },

  setProfile: (profileId: string) => {
    set({ profileId });
  },

  logout: () => {
    set({
      accessToken: null,
      role: null,
      accountId: null,
      profileId: null,
    });
  },

  isAuthenticated: () => {
    const state = get();
    return state.accessToken !== null && state.role !== null;
  },
}));
