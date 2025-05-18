'use client'

import { Suspense } from 'react';
import { useUserStore } from '@/store/user';
import ProductCard from '@/components/ProductCard';

function WishlistItems() {
  const { user } = useUserStore();

  if (!user) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Please sign in to view your wishlist
        </h2>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Sign in to save your favorite products.
        </p>
      </div>
    );
  }

  if (user.wishlist.length === 0) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Your wishlist is empty
        </h2>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Start shopping to add items to your wishlist.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {user.wishlist.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default function WishlistPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Wishlist
            </h1>

            <Suspense fallback={<div>Loading...</div>}>
              <WishlistItems />
            </Suspense>
          </div>
        </div>
      </main>
    </div>
  );
} 