import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { Product } from '@/lib/api';

export interface User {
  id: string;
  email: string;
  wishlist: Product[];
}

interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      signIn: async (email, password) => {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          set({
            user: {
              id: userCredential.user.uid,
              email: userCredential.user.email!,
              wishlist: [],
            },
          });
        } catch (error) {
          console.error('Error signing in:', error);
          throw error;
        }
      },
      signUp: async (email, password) => {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          set({
            user: {
              id: userCredential.user.uid,
              email: userCredential.user.email!,
              wishlist: [],
            },
          });
        } catch (error) {
          console.error('Error signing up:', error);
          throw error;
        }
      },
      logout: async () => {
        try {
          await signOut(auth);
          set({ user: null });
        } catch (error) {
          console.error('Error signing out:', error);
          throw error;
        }
      },
      addToWishlist: (product) =>
        set((state) => {
          if (!state.user) return state;
          return {
            user: {
              ...state.user,
              wishlist: [...state.user.wishlist, product],
            },
          };
        }),
      removeFromWishlist: (productId) =>
        set((state) => {
          if (!state.user) return state;
          return {
            user: {
              ...state.user,
              wishlist: state.user.wishlist.filter((p) => p.id !== productId),
            },
          };
        }),
    }),
    {
      name: 'user-storage',
    }
  )
); 